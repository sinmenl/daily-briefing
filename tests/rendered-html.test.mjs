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
  assert.match(html, /产品与创作早报/);
  assert.match(html, /昨日姜胡说知识星球/);
  assert.match(html, /每天自动更新/);
  assert.match(html, /南宁当天天气：中雨转小雨，26–31℃/);
  assert.match(html, /南宁<!-- --> · <!-- -->26–31℃/);
  assert.match(html, /id="content-menu"/);
  assert.match(html, /data-brief-date="2026-07-30"/);
  assert.match(html, /href="#task-1">验收每日简报闭环/);
  assert.match(html, /href="#brief-1">dbskill v2.18.15：默认避开重复 Skill 目录/);
  assert.match(html, /href="#planet-post-1">一个“反常识认知”提示词/);
  assert.match(html, /href="\/hotlist\/2026-07-29.html"/);
  assert.match(html, /href="\/knowledge\/2026-07-29\/26-07-29姜胡说知识星球.md"/);
  assert.match(html, /id="action-diagnosis"/);
  assert.match(html, /AI 执行力诊断 \/ 建议/);
  assert.match(html, /id="deep-reads"/);
  assert.match(html, /未发现可核验更新/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
  assert.doesNotMatch(html, /我的理解/);
});

test("exports one page shell with cloud data for every date", async () => {
  const current = await readFile(new URL("../docs/index.html", import.meta.url), "utf8");
  const manifest = JSON.parse(
    await readFile(new URL("../docs/data/manifest.json", import.meta.url), "utf8"),
  );
  const historical = JSON.parse(
    await readFile(new URL("../docs/data/2026-07-29.json", import.meta.url), "utf8"),
  );
  const latest = JSON.parse(
    await readFile(new URL("../docs/data/2026-07-30.json", import.meta.url), "utf8"),
  );

  assert.match(current, /data-calendar-year/);
  assert.match(current, /data-calendar-grid/);
  assert.match(current, /data-brief-app/);
  assert.match(current, /fetch\(repoBase \+ "\/data\/" \+ date \+ "\.json/);
  assert.doesNotMatch(current, /window\.location\.assign\(entry\.href\)/);
  assert.equal(manifest.latest, "2026-07-30");
  assert.deepEqual(manifest.dates, ["2026-07-30", "2026-07-29"]);
  assert.equal(historical.date, "2026-07-29");
  assert.equal(latest.date, "2026-07-30");
  assert.match(historical.mainHtml, /data-brief-date="2026-07-29"/);
  assert.match(historical.mainHtml, /class="hero-mark" aria-hidden="true">晴/);
  assert.doesNotMatch(historical.mainHtml, /南宁当天天气：中雨转小雨/);
  assert.match(latest.mainHtml, /南宁当天天气：中雨转小雨，26–31℃/);
  assert.doesNotMatch(latest.mainHtml, /我的理解/);
});
