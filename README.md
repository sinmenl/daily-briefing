# Daily Briefing

「蔓蔓的早课」独立网页仓库，只承载每日简报及其只读资料。

## 发布结构

- GitHub 仓库：`sinmenl/daily-briefing`
- GitHub Pages：`https://sinmenl.github.io/daily-briefing/`
- 发布来源：`main` 分支 `/docs`
- 当日数据：`public/data/YYYY-MM-DD.json`
- 历史索引：`public/data/manifest.json`

## 边界

本仓库不得再保存或发布财务页、个人工作台及其他非简报工具。

- 财务页：`sinmenl/finance-dashboard`
- 个人工作台：`sinmenl/personal-workbench`

## 常用命令

```bash
npm run brief:collect -- --date YYYY-MM-DD
npm run brief:validate -- --date YYYY-MM-DD
npm run build:pages
npm test
```

## 本地早报入口

每日资讯不再依赖 ChatGPT 历史对话。08:30 本地任务先运行 `brief:collect`，按北京时间前一天的完整自然日采集公开候选，并写入父目录：

- `.run/YYYY-MM-DD/local-sources.json`
- `.run/YYYY-MM-DD/local-research.md`
- `daily_brief/YYYY-MM-DD.input.md`

本地 Codex 按父目录的 `LOCAL_DAILY_BRIEF_PROMPT.md` 核验原始链接，生成 `daily_brief/YYYY-MM-DD.md`。只有通过 `brief:validate` 的成品才能进入网页构建。

公开源清单位于 `config/briefing-sources.json`。GitHub API 遇到匿名限流时，采集器会自动回退到仓库 Atom feed；某个来源失败只记录该来源，不会让其他来源一起失败。
