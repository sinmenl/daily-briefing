import assert from "node:assert/strict";
import test from "node:test";
import { dateBefore, parseFeed } from "../scripts/collect-local-briefing.mjs";
import { validateBrief } from "../scripts/validate-local-briefing.mjs";

test("dateBefore crosses month boundaries", () => {
  assert.equal(dateBefore("2026-08-01"), "2026-07-31");
});

test("parseFeed normalizes RSS fields", () => {
  const items = parseFeed(`<?xml version="1.0"?><rss><channel><item><title><![CDATA[Test &amp; verify]]></title><link>https://example.com/a</link><pubDate>Sun, 09 Aug 2026 04:00:00 GMT</pubDate><description><![CDATA[<p>Hello</p>]]></description></item></channel></rss>`, {
    id: "fixture",
    label: "Fixture",
    kind: "industry",
    topics: ["test"],
  });
  assert.equal(items.length, 1);
  assert.equal(items[0].title, "Test & verify");
  assert.equal(items[0].excerpt, "Hello");
});

test("validator accepts a complete local brief", () => {
  const text = `<!-- DAILY_BRIEF_START -->\nschema_version: 1\nbrief_date: 2026-08-10\ncoverage_date: 2026-08-09\nstatus: complete\ntitle: test\n# 产品与创作每日简报｜2026-08-10\n[来源](https://example.com)\n<!-- DAILY_BRIEF_END -->`;
  assert.deepEqual(validateBrief(text, "2026-08-10"), []);
});
