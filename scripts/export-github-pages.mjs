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

const indexDirective = "noindex,nofollow,noarchive,noimageindex";
if (html.includes('name="robots"')) {
  html = html.replace(
    /<meta name="robots" content="[^"]*"\s*\/?>/,
    `<meta name="robots" content="${indexDirective}">`,
  );
} else {
  html = html.replace("</head>", `<meta name="robots" content="${indexDirective}"></head>`);
}
if (html.includes('name="googlebot"')) {
  html = html.replace(
    /<meta name="googlebot" content="[^"]*"\s*\/?>/,
    `<meta name="googlebot" content="${indexDirective}">`,
  );
} else {
  html = html.replace("</head>", `<meta name="googlebot" content="${indexDirective}"></head>`);
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

const menuScript = `<script data-brief-menu>
(() => {
  const root = document.documentElement;
  const button = document.querySelector("[data-menu-button]");
  const closeMenu = () => {
    root.classList.remove("menu-open");
    button?.setAttribute("aria-expanded", "false");
  };
  button?.addEventListener("click", () => {
    const willOpen = !root.classList.contains("menu-open");
    root.classList.toggle("menu-open", willOpen);
    button.setAttribute("aria-expanded", String(willOpen));
  });
  document.querySelectorAll("[data-menu-close]").forEach((item) => {
    item.addEventListener("click", closeMenu);
  });
  document.querySelectorAll('.sidebar a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      const target = document.querySelector(link.getAttribute("href"));
      const details = target?.tagName === "DETAILS" ? target : target?.closest("details");
      if (details) details.open = true;
      closeMenu();
    });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
})();
</script>`;
html = html.replace("</body>", `${menuScript}</body>`);

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

const localBriefingRoot = path.resolve(root, "..");
const currentMonth = Number(currentDate.slice(5, 7));
const localMonthDir = path.join(localBriefingRoot, `26年${currentMonth}月`);
await mkdir(localMonthDir, { recursive: true });
const localHtml = html
  .replaceAll(`/${repoName}/assets/`, "../web/docs/assets/")
  .replaceAll(`/${repoName}/archive/`, "../web/public/archive/")
  .replace(
    new RegExp(`/${repoName}/hotlist/(\\d{4}-\\d{2}-\\d{2})\\.html`, "g"),
    "../../3.热点库/热点看榜/$1%20热点看榜.html",
  )
  .replace(
    new RegExp(`/${repoName}/knowledge/(\\d{4})-(\\d{2})-(\\d{2})/`, "g"),
    (_match, _year, month, day) => `../../8.姜胡说知识星球/output/26.${Number(month)}月/26-${month}-${day}姜胡说知识星球/`,
  );
await writeFile(
  path.join(localMonthDir, `${currentDate} 每日简报.html`),
  localHtml,
  "utf8",
);
await writeFile(
  path.join(localBriefingRoot, "今日简报.html"),
  `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="robots" content="noindex,nofollow,noarchive,noimageindex"><meta http-equiv="refresh" content="0;url=26年${currentMonth}月/${currentDate}%20每日简报.html"><title>今日简报</title></head><body><p><a href="26年${currentMonth}月/${currentDate}%20每日简报.html">打开 ${currentDate} 每日简报</a></p></body></html>`,
  "utf8",
);

const robots = await readFile(path.join(docs, "robots.txt"), "utf8");
if (!robots.includes("Disallow: /") || !html.includes("noindex")) {
  throw new Error("Search indexing protection was not generated");
}

console.log(`GitHub Pages export ready: ${docs}`);
