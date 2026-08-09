import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const webRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const briefingRoot = path.resolve(webRoot, "..");

export const dateBefore = (date) => {
  const value = new Date(`${date}T12:00:00Z`);
  if (Number.isNaN(value.getTime())) throw new Error(`Invalid date: ${date}`);
  value.setUTCDate(value.getUTCDate() - 1);
  return value.toISOString().slice(0, 10);
};

const dateAfter = (date) => {
  const value = new Date(`${date}T12:00:00Z`);
  value.setUTCDate(value.getUTCDate() + 1);
  return value.toISOString().slice(0, 10);
};

const shanghaiToday = () => new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());

const argument = (name) => {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
};

const decodeEntities = (value = "") => value
  .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
  .replace(/&amp;/g, "&")
  .replace(/&lt;/g, "<")
  .replace(/&gt;/g, ">")
  .replace(/&quot;/g, '"')
  .replace(/&#39;|&apos;/g, "'")
  .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)));

const stripHtml = (value = "") => decodeEntities(value)
  .replace(/<br\s*\/?\s*>/gi, "\n")
  .replace(/<[^>]+>/g, " ")
  .replace(/\s+/g, " ")
  .trim();

const elementText = (block, names) => {
  for (const name of names) {
    const match = block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`, "i"));
    if (match) return decodeEntities(match[1]).trim();
  }
  return "";
};

const entryLink = (block) => {
  const rssLink = elementText(block, ["link"]);
  if (rssLink && !rssLink.startsWith("<")) return stripHtml(rssLink);
  const atom = block.match(/<link\b[^>]*href=["']([^"']+)["'][^>]*>/i);
  return atom ? decodeEntities(atom[1]) : "";
};

export const parseFeed = (xml, source) => {
  const blocks = [
    ...(xml.match(/<item\b[\s\S]*?<\/item>/gi) || []),
    ...(xml.match(/<entry\b[\s\S]*?<\/entry>/gi) || []),
  ];
  return blocks.map((block) => {
    const rawDate = stripHtml(elementText(block, ["pubDate", "published", "updated", "dc:date"]));
    const epoch = Date.parse(rawDate);
    return {
      sourceId: source.id,
      sourceLabel: source.label,
      sourceKind: source.kind,
      topics: source.topics || [],
      title: stripHtml(elementText(block, ["title"])),
      url: entryLink(block),
      publishedAt: Number.isNaN(epoch) ? null : new Date(epoch).toISOString(),
      excerpt: stripHtml(elementText(block, ["description", "summary", "content:encoded", "content"]))
        .slice(0, 800),
    };
  }).filter((item) => item.title && item.url);
};

const inWindow = (publishedAt, coverageDate) => {
  if (!publishedAt) return false;
  const epoch = Date.parse(publishedAt);
  const start = Date.parse(`${coverageDate}T00:00:00+08:00`);
  const end = Date.parse(`${dateAfter(coverageDate)}T00:00:00+08:00`);
  return epoch >= start && epoch < end;
};

const fetchText = async (url, accept) => {
  const response = await fetch(url, {
    headers: {
      Accept: accept,
      "User-Agent": "ManmanDailyBriefing/1.0 (+local research collector)",
    },
    signal: AbortSignal.timeout(15_000),
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return response.text();
};

const collectFeed = async (source, coverageDate) => {
  const xml = await fetchText(source.url, "application/rss+xml, application/atom+xml, application/xml, text/xml, */*");
  return parseFeed(xml, source).filter((item) => inWindow(item.publishedAt, coverageDate));
};

const collectGitHub = async (source, coverageDate) => {
  const start = `${coverageDate}T00:00:00+08:00`;
  const end = `${dateAfter(coverageDate)}T00:00:00+08:00`;
  const url = `https://api.github.com/repos/${source.repository}/commits?since=${encodeURIComponent(start)}&until=${encodeURIComponent(end)}&per_page=100`;
  try {
    const body = JSON.parse(await fetchText(url, "application/vnd.github+json"));
    if (!Array.isArray(body)) throw new Error("GitHub API did not return a commit list");
    return body.map((item) => ({
      sourceId: source.id,
      sourceLabel: source.label,
      sourceKind: "creator",
      topics: source.topics || [],
      title: item.commit?.message?.split("\n")[0] || "GitHub commit",
      url: item.html_url,
      publishedAt: item.commit?.author?.date || item.commit?.committer?.date || null,
      excerpt: (item.commit?.message || "").slice(0, 800),
      sha: item.sha,
    })).filter((item) => inWindow(item.publishedAt, coverageDate));
  } catch (error) {
    if (!String(error.message || error).includes("403")) throw error;
    const atomUrl = `https://github.com/${source.repository}/commits.atom`;
    const atom = await fetchText(atomUrl, "application/atom+xml, application/xml, text/xml, */*");
    return parseFeed(atom, { ...source, kind: "creator" })
      .filter((item) => inWindow(item.publishedAt, coverageDate));
  }
};

const markdown = (bundle) => {
  const lines = [
    `# 本地每日早报输入｜${bundle.briefDate}`,
    "",
    `- 早报日期：${bundle.briefDate}`,
    `- 核验范围：${bundle.coverageDate} 00:00–23:59（Asia/Shanghai）`,
    `- 采集时间：${bundle.collectedAt}`,
    `- 自动取得候选：${bundle.items.length} 条`,
    "",
    "> 这是一份候选素材包，不是成品。生成早报时必须打开原始链接再次核验；无法确认完整正文与发布时间的内容不得进入成品。",
    "",
    "## 自动采集候选",
    "",
  ];
  if (!bundle.items.length) lines.push("本次自动源没有取得符合精确日期窗口的候选。不得因此使用旧内容补位。", "");
  bundle.items.forEach((item, index) => {
    lines.push(
      `### ${index + 1}. ${item.title}`,
      "",
      `- 来源：${item.sourceLabel}`,
      `- 发布时间：${item.publishedAt || "未解析"}`,
      `- 原始链接：${item.url}`,
      `- 主题：${item.topics.join("、") || "未分类"}`,
      item.excerpt ? `- RSS/API 摘录（仅供定位）：${item.excerpt}` : "- RSS/API 摘录：无",
      "",
    );
  });
  lines.push("## 需人工网页核验的平台", "");
  bundle.manualSources.forEach((item) => lines.push(`- [${item.label}](${item.url})：${item.note}`));
  lines.push("", "## 采集异常", "");
  if (!bundle.errors.length) lines.push("无。", "");
  bundle.errors.forEach((item) => lines.push(`- ${item.sourceLabel}：${item.error}`));
  lines.push(
    "",
    "## 成品规则",
    "",
    "完整生成规则见 `LOCAL_DAILY_BRIEF_PROMPT.md`。成品必须保存为 `daily_brief/YYYY-MM-DD.md`，并通过本地校验脚本。",
    "",
  );
  return `${lines.join("\n")}\n`;
};

export const collect = async ({ briefDate = shanghaiToday(), configPath } = {}) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(briefDate)) throw new Error("--date must be YYYY-MM-DD");
  const coverageDate = dateBefore(briefDate);
  const sourcePath = configPath || path.join(webRoot, "config", "briefing-sources.json");
  const config = JSON.parse(await readFile(sourcePath, "utf8"));
  const items = [];
  const errors = [];

  for (const source of config.github || []) {
    try { items.push(...await collectGitHub(source, coverageDate)); }
    catch (error) { errors.push({ sourceId: source.id, sourceLabel: source.label, error: String(error.message || error) }); }
  }
  for (const source of config.feeds || []) {
    try { items.push(...await collectFeed(source, coverageDate)); }
    catch (error) { errors.push({ sourceId: source.id, sourceLabel: source.label, error: String(error.message || error) }); }
  }

  items.sort((a, b) => String(b.publishedAt).localeCompare(String(a.publishedAt)));
  const bundle = {
    schemaVersion: 1,
    briefDate,
    coverageDate,
    timezone: config.timezone || "Asia/Shanghai",
    collectedAt: new Date().toISOString(),
    items,
    errors,
    manualSources: config.manualSources || [],
  };
  const runDirectory = path.join(briefingRoot, ".run", briefDate);
  const dailyDirectory = path.join(briefingRoot, "daily_brief");
  await mkdir(runDirectory, { recursive: true });
  await mkdir(dailyDirectory, { recursive: true });
  await writeFile(path.join(runDirectory, "local-sources.json"), `${JSON.stringify(bundle, null, 2)}\n`, "utf8");
  await writeFile(path.join(runDirectory, "local-research.md"), markdown(bundle), "utf8");
  await writeFile(path.join(dailyDirectory, `${briefDate}.input.md`), markdown(bundle), "utf8");
  return { bundle, runDirectory, dailyDirectory };
};

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const briefDate = argument("--date") || shanghaiToday();
  const result = await collect({ briefDate });
  console.log(JSON.stringify({
    ok: true,
    briefDate: result.bundle.briefDate,
    coverageDate: result.bundle.coverageDate,
    itemCount: result.bundle.items.length,
    errorCount: result.bundle.errors.length,
    input: path.join(result.dailyDirectory, `${result.bundle.briefDate}.input.md`),
  }, null, 2));
}
