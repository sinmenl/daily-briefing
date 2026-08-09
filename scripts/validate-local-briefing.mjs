import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { dateBefore } from "./collect-local-briefing.mjs";

const webRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const briefingRoot = path.resolve(webRoot, "..");
const argument = (name) => {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
};

export const validateBrief = (text, briefDate) => {
  const errors = [];
  const coverageDate = dateBefore(briefDate);
  if (!text.includes("<!-- DAILY_BRIEF_START -->")) errors.push("缺少 DAILY_BRIEF_START 边界");
  if (!text.includes("<!-- DAILY_BRIEF_END -->")) errors.push("缺少 DAILY_BRIEF_END 边界");
  if (!new RegExp(`brief_date:\\s*["']?${briefDate}`).test(text)) errors.push(`brief_date 不是 ${briefDate}`);
  if (!new RegExp(`coverage_date:\\s*["']?${coverageDate}`).test(text)) errors.push(`coverage_date 不是 ${coverageDate}`);
  if (!/status:\s*["']?complete/.test(text)) errors.push("status 不是 complete");
  if (!text.includes(`# 产品与创作每日简报｜${briefDate}`)) errors.push("缺少正确的早报标题");
  if (/cite|turn\d+(?:search|news|fetch|image)\d+/i.test(text)) errors.push("包含 ChatGPT 内部引用标识");
  if (/^#{1,6}\s*(我的理解|我的感想|我的启发|我的判断)/m.test(text)) errors.push("包含未经允许的用户归因标题");
  if (!/https?:\/\//.test(text)) errors.push("没有原始来源链接");
  const start = text.indexOf("<!-- DAILY_BRIEF_START -->");
  const end = text.indexOf("<!-- DAILY_BRIEF_END -->");
  if (start >= 0 && end >= 0 && end <= start) errors.push("正文边界顺序错误");
  return errors;
};

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const briefDate = argument("--date");
  if (!briefDate || !/^\d{4}-\d{2}-\d{2}$/.test(briefDate)) throw new Error("Usage: npm run brief:validate -- --date YYYY-MM-DD");
  const file = path.join(briefingRoot, "daily_brief", `${briefDate}.md`);
  const text = await readFile(file, "utf8");
  const errors = validateBrief(text, briefDate);
  if (errors.length) {
    console.error(JSON.stringify({ ok: false, file, errors }, null, 2));
    process.exitCode = 1;
  } else {
    console.log(JSON.stringify({ ok: true, file }, null, 2));
  }
}
