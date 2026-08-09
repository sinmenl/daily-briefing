import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the daily briefing", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /蔓蔓的早课/);
  assert.match(html, /<title>蔓蔓的早课<\/title>/);
  assert.doesNotMatch(html, /产品、创作与个人规划/);
  assert.match(html, /今日计划/);
  assert.match(html, /每日资讯/);
  assert.match(html, /姜胡说/);
  assert.match(html, /复盘/);
  assert.match(html, /今日深读/);
  assert.match(html, /热点榜单/);
  assert.match(html, /每天自动更新/);
  assert.match(html, /南宁当天天气：[^，]+，(?:\d+–\d+℃|请以实时预报为准)/);
  assert.match(html, /南宁<!-- --> · <!-- -->(?:\d+–\d+℃|请以实时预报为准)/);
  assert.match(html, /id="content-menu"/);
  const renderedMain = html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? "";
  assert.equal((renderedMain.match(/data-nav-group/g) ?? []).length, 6);
  assert.equal((renderedMain.match(/class="nav-chevron"/g) ?? []).length, 6);
  assert.equal((renderedMain.match(/data-section-fold/g) ?? []).length, 0);
  assert.equal((renderedMain.match(/class="section-fold-chevron"/g) ?? []).length, 0);
  assert.match(html, /data-brief-date="\d{4}-\d{2}-\d{2}"/);
  assert.match(html, /href="#task-1">/);
  assert.doesNotMatch(html, /href="#creator-[1-4]">(?:Dan Koe|dontbesilent|Naval|姜胡说)/);
  assert.doesNotMatch(html, /id="creator-[1-4]"/);
  assert.match(html, /href="#story-1">1/);
  assert.match(html, /(?:行业重要新闻|昨日可核验动态)：[1-5] 条/);
  assert.doesNotMatch(html, /id="story-6"/);
  assert.match(html, /id="product-observation"/);
  assert.match(html, /href="#planet-1">大胡子：/);
  assert.match(html, /id="hotlist"/);
  assert.match(html, /查看 2026 年 \d+ 月 \d+ 日完整榜单/);
  assert.match(html, /id="action-diagnosis"/);
  assert.match(html, /AI 执行力诊断 \/ 建议/);
  assert.match(html, /id="deep-reads"/);
  assert.match(html, /class="brief-list deep-read-list"/);
  assert.match(html, /class="time-block-heading"/);
  assert.doesNotMatch(html, /<h2>今日计划<\/h2>/);
  assert.match(html, /小报童/);
  assert.match(html, /id="xiaobaotong-1"/);
  assert.doesNotMatch(html, /id="deep-read-4"/);
  assert.match(html, /id="product-observation"/);
  assert.match(html, /id="early-action"/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
  assert.doesNotMatch(html, /我的理解/);
});

test("exports one page shell with cloud data for every date", async () => {
  const current = await readFile(new URL("../docs/index.html", import.meta.url), "utf8");
  const manifest = JSON.parse(
    await readFile(new URL("../docs/data/manifest.json", import.meta.url), "utf8"),
  );
  const historical = JSON.parse(
    await readFile(new URL("../docs/data/2026-07-30.json", import.meta.url), "utf8"),
  );
  const previous = JSON.parse(
    await readFile(new URL("../docs/data/2026-07-31.json", import.meta.url), "utf8"),
  );
  const latest = JSON.parse(
    await readFile(new URL(`../docs/data/${manifest.latest}.json`, import.meta.url), "utf8"),
  );

  assert.match(current, /data-calendar-year/);
  assert.match(current, /data-calendar-grid/);
  assert.match(current, /renderCalendar\(\);\s*picker\.addEventListener/);
  assert.match(current, /data-brief-app/);
  assert.match(current, new RegExp(`data-brief-date="${manifest.latest}"`));
  assert.match(current, /fetch\(repoBase \+ "\/data\/" \+ date \+ "\.json/);
  assert.doesNotMatch(current, /window\.location\.assign\(entry\.href\)/);
  assert.equal(manifest.dates[0], manifest.latest);
  assert.ok(manifest.dates.length >= 2);
  assert.ok(manifest.dates.includes("2026-07-30"));
  assert.equal(historical.date, "2026-07-30");
  assert.equal(previous.date, "2026-07-31");
  assert.equal(latest.date, manifest.latest);
  assert.match(historical.mainHtml, /data-brief-date="2026-07-30"/);
  assert.match(historical.mainHtml, /南宁当天天气：中雨转小雨，26–31℃/);
  assert.doesNotMatch(historical.mainHtml, /南宁当天天气：阵雨/);
  assert.match(previous.mainHtml, /南宁当天天气：阵雨，24–30℃/);
  assert.match(latest.mainHtml, /南宁当天天气：[^，]+，(?:\d+–\d+℃|请以实时预报为准)/);
  assert.match(latest.mainHtml, /查看 2026 年 \d+ 月 \d+ 日完整榜单/);
  assert.match(latest.mainHtml, /(?:行业重要新闻|昨日可核验动态)：[1-5] 条/);
  assert.doesNotMatch(latest.mainHtml, /id="creator-[1-4]"/);
  assert.match(latest.mainHtml, /id="story-1"/);
  assert.doesNotMatch(latest.mainHtml, /id="story-6"/);
  assert.match(latest.mainHtml, /id="planet-1"/);
  assert.doesNotMatch(latest.mainHtml, /我的理解/);
});
