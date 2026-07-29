import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
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
  .replaceAll('href="/assets/', 'href="./assets/')
  .replaceAll('src="/assets/', 'src="./assets/')
  .replaceAll('href="/knowledge/', 'href="./knowledge/')
  .replaceAll('href="/hotlist/', 'href="./hotlist/')
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
