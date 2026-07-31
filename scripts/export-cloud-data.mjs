import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const docs = path.join(root, "docs");
const repoName = "daily-briefing";
const publicUrl = `https://sinmenl.github.io/${repoName}/`;
const dataSource = path.join(root, "public", "data");
const legacyArchiveSource = path.join(root, "public", "archive");

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

const normalizeDocument = (documentHtml) => {
  let normalized = documentHtml
    .replaceAll('href="/assets/', `href="/${repoName}/assets/`)
    .replaceAll('src="/assets/', `src="/${repoName}/assets/`)
    .replaceAll('href="/knowledge/', `href="/${repoName}/knowledge/`)
    .replaceAll('src="/knowledge/', `src="/${repoName}/knowledge/`)
    .replaceAll('href="/hotlist/', `href="/${repoName}/hotlist/`)
    .replaceAll("http://localhost:3000/og.png", `${publicUrl}og.png`)
    .replaceAll("http://localhost:3000/favicon.svg", `${publicUrl}favicon.svg`)
    .replace(/<link rel="modulepreload"[^>]*>/g, "")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "")
    .replace(/<title>[^<]*<\/title>/, "<title>蔓蔓的早课</title>");

  const indexDirective = "noindex,nofollow,noarchive,noimageindex";
  for (const bot of ["robots", "googlebot"]) {
    if (normalized.includes(`name="${bot}"`)) {
      normalized = normalized.replace(
        new RegExp(`<meta name="${bot}" content="[^"]*"\\s*\\/?>`),
        `<meta name="${bot}" content="${indexDirective}">`,
      );
    } else {
      normalized = normalized.replace(
        "</head>",
        `<meta name="${bot}" content="${indexDirective}"></head>`,
      );
    }
  }

  return normalized;
};

const extractMain = (documentHtml) => {
  const match = documentHtml.match(/<main\b[\s\S]*?<\/main>/);
  if (!match) throw new Error("Missing <main> briefing content");
  return match[0];
};

const getBriefDate = (mainHtml) => {
  const match = mainHtml.match(/data-brief-date="(\d{4}-\d{2}-\d{2})"/);
  if (!match) throw new Error("Missing data-brief-date on the page root");
  return match[1];
};

await mkdir(dataSource, { recursive: true });
let html = normalizeDocument(await response.text());
const currentMain = extractMain(html);
const currentDate = getBriefDate(currentMain);

// One-time compatibility migration: preserve existing history as cloud data.
const legacyArchiveFiles = await readdir(legacyArchiveSource).catch(() => []);
for (const archiveFile of legacyArchiveFiles) {
  if (!/^\d{4}-\d{2}-\d{2}\.html$/.test(archiveFile)) continue;
  const date = archiveFile.replace(/\.html$/, "");
  const target = path.join(dataSource, `${date}.json`);
  try {
    await readFile(target, "utf8");
  } catch {
    const legacyHtml = normalizeDocument(
      await readFile(path.join(legacyArchiveSource, archiveFile), "utf8"),
    );
    await writeFile(
      target,
      `${JSON.stringify({ schemaVersion: 1, date, mainHtml: extractMain(legacyHtml) }, null, 2)}\n`,
      "utf8",
    );
  }
}

await writeFile(
  path.join(dataSource, `${currentDate}.json`),
  `${JSON.stringify({ schemaVersion: 1, date: currentDate, mainHtml: currentMain }, null, 2)}\n`,
  "utf8",
);

const dataFiles = (await readdir(dataSource))
  .filter((name) => /^\d{4}-\d{2}-\d{2}\.json$/.test(name));
const availableDates = dataFiles
  .map((name) => name.replace(/\.json$/, ""))
  .sort()
  .reverse();

await writeFile(
  path.join(dataSource, "manifest.json"),
  `${JSON.stringify({ schemaVersion: 1, latest: currentDate, dates: availableDates }, null, 2)}\n`,
  "utf8",
);

const appScript = `<script data-brief-app>
(() => {
  const repoBase = "/${repoName}";
  const availableDates = ${JSON.stringify(availableDates)};
  const availableSet = new Set(availableDates);
  let loading = false;

  const currentDate = () => document.querySelector("[data-brief-date]")?.dataset.briefDate;
  const closeMenu = () => {
    document.documentElement.classList.remove("menu-open");
    document.querySelector("[data-menu-button]")?.setAttribute("aria-expanded", "false");
  };

  const loadBrief = async (date, push = true) => {
    if (loading || !availableSet.has(date) || date === currentDate()) return;
    loading = true;
    document.documentElement.dataset.briefLoading = "true";
    try {
      const response = await fetch(repoBase + "/data/" + date + ".json?v=${currentDate.replaceAll("-", "")}");
      if (!response.ok) throw new Error("Brief data request failed: " + response.status);
      const payload = await response.json();
      if (!payload.mainHtml || payload.date !== date) throw new Error("Invalid brief data");
      document.querySelector("main")?.replaceWith(
        document.createRange().createContextualFragment(payload.mainHtml),
      );
      if (push) {
        const url = new URL(window.location.href);
        url.searchParams.set("date", date);
        history.pushState({ date }, "", url);
      }
      initBrief();
      window.scrollTo({ top: 0, behavior: "instant" });
    } catch (error) {
      console.error(error);
      window.alert("这一天的简报暂时无法加载，请稍后再试。");
    } finally {
      loading = false;
      delete document.documentElement.dataset.briefLoading;
    }
  };

  const initCalendar = () => {
    const picker = document.querySelector(".date-picker");
    const archiveList = picker?.querySelector("[data-archive-list]");
    const selectedDate = currentDate() || availableDates[0];
    if (!picker || !archiveList || !selectedDate || !availableDates.length) return;

    const years = [...new Set(availableDates.map((date) => Number(date.slice(0, 4))))].sort((a, b) => a - b);
    let viewYear = Number(selectedDate.slice(0, 4));
    let viewMonth = Number(selectedDate.slice(5, 7));
    archiveList.innerHTML =
      '<div class="calendar-toolbar">' +
        '<button class="calendar-nav-button" type="button" data-calendar-prev aria-label="上个月">‹</button>' +
        '<div class="calendar-selects">' +
          '<select data-calendar-year aria-label="选择年份"></select>' +
          '<select data-calendar-month aria-label="选择月份"></select>' +
        '</div>' +
        '<button class="calendar-nav-button" type="button" data-calendar-next aria-label="下个月">›</button>' +
      '</div>' +
      '<div class="calendar-weekdays" aria-hidden="true"><span>日</span><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span></div>' +
      '<div class="calendar-grid" data-calendar-grid></div>' +
      '<div class="calendar-legend">有简报的日期可以打开</div>';

    const yearSelect = archiveList.querySelector("[data-calendar-year]");
    const monthSelect = archiveList.querySelector("[data-calendar-month]");
    const grid = archiveList.querySelector("[data-calendar-grid]");
    const prevButton = archiveList.querySelector("[data-calendar-prev]");
    const nextButton = archiveList.querySelector("[data-calendar-next]");
    const monthNames = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];

    years.forEach((year) => {
      const option = document.createElement("option");
      option.value = String(year);
      option.textContent = year + "年";
      yearSelect.append(option);
    });
    monthNames.forEach((name, index) => {
      const option = document.createElement("option");
      option.value = String(index + 1);
      option.textContent = name;
      monthSelect.append(option);
    });

    const renderCalendar = () => {
      yearSelect.value = String(viewYear);
      monthSelect.value = String(viewMonth);
      grid.innerHTML = "";
      const firstWeekday = new Date(viewYear, viewMonth - 1, 1).getDay();
      const daysInMonth = new Date(viewYear, viewMonth, 0).getDate();
      for (let index = 0; index < firstWeekday; index += 1) {
        const empty = document.createElement("span");
        empty.className = "calendar-day calendar-empty";
        grid.append(empty);
      }
      for (let day = 1; day <= daysInMonth; day += 1) {
        const key = String(viewYear) + "-" + String(viewMonth).padStart(2, "0") + "-" + String(day).padStart(2, "0");
        const available = availableSet.has(key);
        const button = document.createElement("button");
        button.type = "button";
        button.className = "calendar-day " + (available ? "available" : "unavailable") + (key === selectedDate ? " selected" : "");
        button.textContent = String(day);
        button.disabled = !available;
        button.setAttribute("aria-label", available ? key + "，打开简报" : key + "，暂无简报");
        if (available) button.addEventListener("click", () => {
          picker.open = false;
          loadBrief(key);
        });
        grid.append(button);
      }
      const minYear = years[0];
      const maxYear = years[years.length - 1];
      prevButton.disabled = viewYear === minYear && viewMonth === 1;
      nextButton.disabled = viewYear === maxYear && viewMonth === 12;
    };

    yearSelect.addEventListener("change", () => {
      viewYear = Number(yearSelect.value);
      renderCalendar();
    });
    monthSelect.addEventListener("change", () => {
      viewMonth = Number(monthSelect.value);
      renderCalendar();
    });
    prevButton.addEventListener("click", () => {
      if (viewMonth === 1) { viewYear -= 1; viewMonth = 12; }
      else viewMonth -= 1;
      renderCalendar();
    });
    nextButton.addEventListener("click", () => {
      if (viewMonth === 12) { viewYear += 1; viewMonth = 1; }
      else viewMonth += 1;
      renderCalendar();
    });
    picker.addEventListener("click", (event) => event.stopPropagation());
  };

  const initBrief = () => {
    const button = document.querySelector("[data-menu-button]");
    button?.addEventListener("click", () => {
      const willOpen = !document.documentElement.classList.contains("menu-open");
      document.documentElement.classList.toggle("menu-open", willOpen);
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
    initCalendar();
  };

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      const picker = document.querySelector(".date-picker");
      if (picker) picker.open = false;
    }
  });
  document.addEventListener("click", () => {
    const picker = document.querySelector(".date-picker");
    if (picker) picker.open = false;
  });
  window.addEventListener("popstate", () => {
    const requested = new URL(window.location.href).searchParams.get("date") || availableDates[0];
    loadBrief(requested, false);
  });

  initBrief();
  const requested = new URL(window.location.href).searchParams.get("date");
  if (requested && availableSet.has(requested)) loadBrief(requested, false);
})();
</script>`;

html = html.replace("</body>", `${appScript}</body>`);

// Other Pages tools may live under docs/. Preserve the personal workbench
// while refreshing the daily briefing shell and data.
const preservedWorkbench = path.join(root, ".pages-workbench-preserve");
await rm(preservedWorkbench, { recursive: true, force: true });
try {
  await cp(path.join(docs, "workbench"), preservedWorkbench, { recursive: true });
} catch {
  // The briefing can also build in a fresh checkout without a workbench.
}

await rm(docs, { recursive: true, force: true });
await mkdir(docs, { recursive: true });
await cp(path.join(root, "dist/client/assets"), path.join(docs, "assets"), { recursive: true });
await cp(path.join(root, "public"), docs, { recursive: true });
try {
  await cp(preservedWorkbench, path.join(docs, "workbench"), { recursive: true });
} catch {
  // Nothing was preserved.
}
await rm(preservedWorkbench, { recursive: true, force: true });
await writeFile(path.join(docs, "index.html"), html, "utf8");
await writeFile(path.join(docs, "404.html"), html, "utf8");
await writeFile(path.join(docs, "robots.txt"), "User-agent: *\nDisallow: /\n", "utf8");
await writeFile(path.join(docs, ".nojekyll"), "", "utf8");

// Keep one stable local shortcut; daily history now lives in cloud JSON files.
const localBriefingRoot = path.resolve(root, "..");
await writeFile(
  path.join(localBriefingRoot, "今日简报.html"),
  `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="robots" content="noindex,nofollow,noarchive,noimageindex"><meta http-equiv="refresh" content="0;url=${publicUrl}"><title>蔓蔓的早课</title></head><body><p><a href="${publicUrl}">打开蔓蔓的早课</a></p></body></html>`,
  "utf8",
);

const robots = await readFile(path.join(docs, "robots.txt"), "utf8");
if (!robots.includes("Disallow: /") || !html.includes("noindex")) {
  throw new Error("Search indexing protection was not generated");
}
if (!availableDates.includes(currentDate)) {
  throw new Error("Current daily data was not added to the cloud manifest");
}

console.log(`Cloud-data GitHub Pages export ready: ${docs}`);
