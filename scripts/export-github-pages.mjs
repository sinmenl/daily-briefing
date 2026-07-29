import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const docs = path.join(root, "docs");
const repoName = "daily-briefing";
const publicUrl = `https://sinmenl.github.io/${repoName}/`;

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("export", Date.now().toString());
const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("http://localhost/"),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) {
  throw new Error(`Render failed: ${response.status}`);
}

let html = await response.text();
html = html
  .replaceAll('href="/assets/', `href="/${repoName}/assets/`)
  .replaceAll('src="/assets/', `src="/${repoName}/assets/`)
  .replaceAll('href="/knowledge/', `href="/${repoName}/knowledge/`)
  .replaceAll('href="/hotlist/', `href="/${repoName}/hotlist/`)
  .replaceAll("http://localhost:3000/og.png", `${publicUrl}og.png`)
  .replaceAll("http://localhost:3000/favicon.svg", `${publicUrl}favicon.svg`)
  .replace(/<link rel="modulepreload"[^>]*>/g, "")
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");

if (!html.includes('name="robots"')) {
  html = html.replace(
    "</head>",
    '<meta name="robots" content="noindex,nofollow,noarchive,noimageindex"><meta name="googlebot" content="noindex,nofollow,noarchive,noimageindex"></head>',
  );
}

const dateMatch = html.match(/data-brief-date="(\d{4}-\d{2}-\d{2})"/);
if (!dateMatch) {
  throw new Error("Missing data-brief-date on the page root");
}
const currentDate = dateMatch[1];
const archiveSource = path.join(root, "public", "archive");
await mkdir(archiveSource, { recursive: true });
const existingArchiveFiles = (await readdir(archiveSource))
  .filter((name) => /^\d{4}-\d{2}-\d{2}\.html$/.test(name));
const archiveDates = [...new Set([
  currentDate,
  ...existingArchiveFiles.map((name) => name.replace(/\.html$/, "")),
])].sort().reverse();
const dateLinks = archiveDates.map((date) => {
  const [year, month, day] = date.split("-");
  const current = date === currentDate ? ' aria-current="page"' : "";
  return `<a href="/${repoName}/archive/${date}.html"${current}>${year}年${Number(month)}月${Number(day)}日</a>`;
}).join("");
html = html.replace(
  /(<nav class="date-list"[^>]*data-archive-list="true"[^>]*>)[\s\S]*?(<\/nav>)/,
  `$1${dateLinks}$2`,
);
for (const archiveFile of existingArchiveFiles) {
  const archivePath = path.join(archiveSource, archiveFile);
  const previousHtml = await readFile(archivePath, "utf8");
  const refreshedHtml = previousHtml.replace(
    /(<nav class="date-list"[^>]*data-archive-list="true"[^>]*>)[\s\S]*?(<\/nav>)/,
    `$1${dateLinks}$2`,
  );
  await writeFile(archivePath, refreshedHtml, "utf8");
}
await writeFile(path.join(archiveSource, `${currentDate}.html`), html, "utf8");

await rm(docs, { recursive: true, force: true });
await mkdir(docs, { recursive: true });
await cp(path.join(root, "dist/client/assets"), path.join(docs, "assets"), { recursive: true });
await cp(path.join(root, "public"), docs, { recursive: true });
await writeFile(path.join(docs, "index.html"), html, "utf8");
await writeFile(path.join(docs, "404.html"), html, "utf8");
await writeFile(path.join(docs, "robots.txt"), "User-agent: *\nDisallow: /\n", "utf8");
await writeFile(path.join(docs, ".nojekyll"), "", "utf8");

const robots = await readFile(path.join(docs, "robots.txt"), "utf8");
if (!robots.includes("Disallow: /") || !html.includes("noindex")) {
  throw new Error("Search indexing protection was not generated");
}

console.log(`GitHub Pages export ready: ${docs}`);
