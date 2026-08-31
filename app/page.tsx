import { type ReactNode } from "react";
import { cloudBriefMarkdownToday } from "./cloud-brief-current";

const briefDate = "2026-08-31";

const tasks = [
  {
    number: "01",
    title: "写出第 5 条视频的一页口播草稿",
    source: "AI 建议",
    why: "第 4 条视频已经发布；8 月 30 日也已经写下‘工具测评不能停留在功能体验，要进入一个真实任务’。对象和核心判断都已存在，今天不需要再选题或补课。",
    question: "一款看起来有用的 AI 工具，为什么必须放进真实任务里测试，才能判断它是否真的有价值？",
    steps: ["打开 10.短视频诊断/00-模版.md，新建第 5 条草稿。", "用本人语言写三段：功能看起来有什么用；放进哪个真实任务；实际结果改变了什么判断。", "只让 AI 检查有没有把‘功能存在’误写成‘任务有效’，以及有没有缺少反例；本人决定是否修改。"],
    deliverable: "一份以 05- 开头的 Markdown 口播草稿。",
    done: "文件包含一个真实任务、一次可观察结果和一句可能被结果推翻的判断；保存后停止扩写。",
    first: "离开短视频应用，打开 10.短视频诊断/00-模版.md",
    time: "最多 45 分钟",
    tone: "mint",
  },
];

const learningResources: Array<{ type: string; title: string; meta: string; intro: string; why: string; focus: string[]; action: string; boundary: string; source: string; sourceLabel: string }> = [];

const weather = { location: "南宁", condition: "中雨转阵雨", temperature: "24–32℃", icon: "🌧️" };

const planetPosts = [
  { index: "1", author: "大胡子", published: "2026-08-30 09:29", title: "极简模式：Omarchy + Pi + Obsidian", body: `极简模式
Omarchy + Pi + Obsidian

zen`, images: ["/daily-briefing/knowledge/2026-08-30/images/[1] 大胡子 -1.jpg", "/daily-briefing/knowledge/2026-08-30/images/[1] 大胡子 -2.jpg", "/daily-briefing/knowledge/2026-08-30/images/[1] 大胡子 -3.jpg", "/daily-briefing/knowledge/2026-08-30/images/[1] 大胡子 -4.jpg"] },
  { index: "2", author: "大胡子", published: "2026-08-30 23:12", title: "工作端用 GitHub，移动端用 iCloud", body: `给你们一个好东西.

你的知识库怎么备份并保持同步呢?Github。
你可以通过多台机器用同一个 GitHub 进行知识库的连接。
在 GitHub 上建立一个私有仓库，就搞定了。

重点是这个，如何在移动终端上去访问你的知识库呢？
如果你的知识库太大的话，在终端很快就会崩溃。
那我的方法呢，就是在组的分支上建立一个mobile分支。它的缺点就是，如果你更新过于频繁的话，一个月只有12美金的额度，很快就会超支，一个月总有那么几天你是不方便的。
但，

这个时候你就可以让你的 AI，将只读的部分提取出来，然后交给 iCloud，因为只有文本，所以消耗并不大.然后用你的本地的 Obsidian 打开这个 iCloud 就好了.
这样你既不用花1分钱，同时还可以享受 iCloud 稳定的服务.
比如我,四台机器使用同一个知识库.非常的丝滑.

不是单纯的Github，也不是单纯的iCloud。是Github+iCloud。
工作端用Github（因为它可以和其它项目建立工作流）；移动端用iCloud（瘦身阅读）。

如果你看不懂,把它把这段话扔给你的AI Agent。他知道该怎么做。`, images: ["/daily-briefing/knowledge/2026-08-30/images/[2] 大胡子 -1.png", "/daily-briefing/knowledge/2026-08-30/images/[2] 大胡子 -2.jpg", "/daily-briefing/knowledge/2026-08-30/images/[2] 大胡子 -3.jpg"] },
];

const deepReadAtoms = [
  { atom: "上下文分层加载让检索路径可观察", relation: "第 5 条草稿不需要继续扩张资料，只围绕一个真实任务保留‘功能—任务—结果’三层上下文；缺什么再补什么。", question: "如果只给一个 Agent 最小上下文包，哪些内容必须先提供，哪些应等任务真正需要时才展开？" },
  { atom: "混合创作治理应按人和 AI 的角色分类", relation: "草稿应明确本人提供的真实任务、观察结果与判断，AI 只承担检查或整理，让‘谁做了什么’可以被说明。", question: "一条 AI 工具测评里，哪些材料和判断必须由本人产生，哪些环节可以交给 AI 而不损失可信度？" },
];

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|`[^`]+`)/g;
  let cursor = 0;
  let index = 0;
  for (const match of text.matchAll(pattern)) {
    const start = match.index ?? 0;
    if (start > cursor) nodes.push(text.slice(cursor, start));
    const token = match[0];
    if (token.startsWith("**")) {
      nodes.push(<strong key={keyPrefix + "-strong-" + index}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith("[")) {
      const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) nodes.push(
        <a
          className="archive-link"
          href={link[2]}
          key={keyPrefix + "-link-" + index}
          {...(/^https?:\/\//.test(link[2]) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {link[1]} ↗
        </a>,
      );
      else nodes.push(token);
    } else {
      nodes.push(<code key={keyPrefix + "-code-" + index}>{token.slice(1, -1)}</code>);
    }
    cursor = start + token.length;
    index += 1;
  }
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}
function renderMarkdown(markdown: string, keyPrefix: string): ReactNode[] {
  const lines = markdown.trim().split("\n");
  const blocks: ReactNode[] = [];
  let index = 0;
  let block = 0;
  const isBoundary = (line: string) =>
    !line.trim() ||
    /^(#{3,6})\s+/.test(line) ||
    /^[-*]\s+/.test(line) ||
    /^\d+\.\s+/.test(line) ||
    /^>\s?/.test(line) ||
    /^---+$/.test(line);

  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim() || /^---+$/.test(line.trim())) {
      index += 1;
      continue;
    }

    const heading = line.match(/^(#{3,6})\s+(.+)$/);
    if (heading) {
      const level = Math.min(6, heading[1].length + 1);
      const children = renderInline(heading[2], keyPrefix + "-heading-" + block);
      if (level <= 4) blocks.push(<h4 key={keyPrefix + "-h-" + block}>{children}</h4>);
      else blocks.push(<h5 key={keyPrefix + "-h-" + block}>{children}</h5>);
      index += 1;
      block += 1;
      continue;
    }

    if (/^>\s?/.test(line)) {
      const quote: string[] = [];
      while (index < lines.length && /^>\s?/.test(lines[index])) {
        quote.push(lines[index].replace(/^>\s?/, ""));
        index += 1;
      }
      blocks.push(<blockquote key={keyPrefix + "-quote-" + block}>{renderInline(quote.join(" "), keyPrefix + "-quote-inline-" + block)}</blockquote>);
      block += 1;
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^[-*]\s+/, ""));
        index += 1;
      }
      blocks.push(<ul key={keyPrefix + "-ul-" + block}>{items.map((item, itemIndex) => <li key={itemIndex}>{renderInline(item, keyPrefix + "-uli-" + block + "-" + itemIndex)}</li>)}</ul>);
      block += 1;
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\d+\.\s+/, ""));
        index += 1;
      }
      blocks.push(<ol key={keyPrefix + "-ol-" + block}>{items.map((item, itemIndex) => <li key={itemIndex}>{renderInline(item, keyPrefix + "-oli-" + block + "-" + itemIndex)}</li>)}</ol>);
      block += 1;
      continue;
    }

    const paragraph: string[] = [line.trim()];
    index += 1;
    while (index < lines.length && !isBoundary(lines[index])) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    blocks.push(<p key={keyPrefix + "-p-" + block}>{renderInline(paragraph.join(" "), keyPrefix + "-pi-" + block)}</p>);
    block += 1;
  }
  return blocks;
}

function buildSectionMap(markdown: string) {
  const map = new Map<string, string>();
  const parts = markdown.split(/^## /m).slice(1);
  for (const part of parts) {
    const newline = part.indexOf("\n");
    if (newline < 0) continue;
    map.set(part.slice(0, newline).trim(), part.slice(newline + 1).trim().replace(/<!-- DAILY_BRIEF_END -->\s*$/, "").trim());
  }
  return map;
}

function splitSubsections(markdown: string) {
  return markdown
    .split(/^### /m)
    .slice(1)
    .map((part) => {
      const newline = part.indexOf("\n");
      return {
        title: part.slice(0, newline).trim(),
        body: part.slice(newline + 1).trim(),
      };
    });
}

function cleanTitle(title: string) {
  return title.replace(/^\d+\.\s*/, "");
}

const cloudSections = buildSectionMap(cloudBriefMarkdownToday);
const coreJudgment = cloudSections.get("今日核心判断") ?? "";
const emphasizedCoreJudgment = coreJudgment;
const creatorUpdatesRaw = cloudSections.get("指定博主动态") ?? "";
const creatorUpdates = splitSubsections(creatorUpdatesRaw);
const industryStories = splitSubsections(cloudSections.get("行业重要新闻") ?? "");
const productObservations = splitSubsections(cloudSections.get("产品观察") ?? "");
const deepReads = splitSubsections(cloudSections.get("深读推荐") ?? "");
const signalRadar = cloudSections.get("信息源实验雷达") ?? "";
const signalRadarLabel = signalRadar.includes("### 社区日") ? "社区日" : "人物日";
const actionAdvice = cloudSections.get("今日行动建议") ?? "";

function SourceLink({ href, label }: { href: string; label: string }) {
  return (
    <p>
      <a
        className="archive-link"
        href={href}
        {...(/^https?:\/\//.test(href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        阅读原始来源：{label} ↗
      </a>
    </p>
  );
}

export default function Home() {
  return (
    <main data-brief-date={briefDate}>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="返回顶部"><span className="brand-dot" />蔓</a>
        <div className="top-actions">
          <button className="menu-button" type="button" aria-label="打开阅读目录" aria-controls="content-menu" aria-expanded="false" data-menu-button><span /><span /><span /></button>
          <details className="date-picker">
            <summary aria-label="选择简报日期"><span className="calendar-symbol" aria-hidden="true">▦</span><span>{briefDate.replaceAll("-", ".")}</span><span className="chevron">⌄</span></summary>
            <nav className="date-list" data-archive-list="true" aria-label="选择过往简报日期"><a href="?date=2026-08-31" aria-current="page">2026年8月31日</a></nav>
          </details>
          <div className="status"><span className="status-dot" />每天自动更新</div>
        </div>
      </header>

      <button className="sidebar-overlay" type="button" aria-label="关闭阅读目录" data-menu-close />
      <div className="app-shell">
        <aside className="sidebar" id="content-menu" aria-label="简报阅读目录">
          <div className="sidebar-head">
            <div><span className="sidebar-kicker">CONTENTS</span><strong>今天看什么</strong></div>
            <button className="menu-close" type="button" aria-label="关闭阅读目录" data-menu-close>×</button>
          </div>
          <nav className="sidebar-nav">
            <details className="nav-group" data-nav-group>
              <summary className="nav-title"><span className="nav-icon icon-focus">✓</span><span>今日计划</span><span className="nav-chevron">⌄</span></summary>
              <div className="nav-sub">{tasks.map((task, i) => <a href={"#task-" + (i + 1)} key={task.title}>{task.title}</a>)}<a href="#schedule">今日时间块</a><a href="#risk">今日风险</a><a href="#templates">模版</a></div>
            </details>
            <details className="nav-group" data-nav-group>
              <summary className="nav-title"><span className="nav-icon icon-briefing">▤</span><span>每日资讯</span><span className="nav-chevron">⌄</span></summary>
              <div className="nav-sub">{creatorUpdates.length ? creatorUpdates.map((item, i) => <a href={"#creator-" + (i + 1)} key={item.title}>{cleanTitle(item.title)}</a>) : creatorUpdatesRaw ? <a href="#creator-updates">指定博主动态</a> : null}{industryStories.map((item, i) => <a href={"#story-" + (i + 1)} key={item.title}>{i + 1}. {cleanTitle(item.title)}</a>)}{productObservations.map((item, i) => <a href={i === 0 ? "#product-observation" : "#product-observation-" + (i + 1)} key={item.title}>{item.title}</a>)}{signalRadar ? <a href="#signal-radar">信息源实验雷达</a> : null}<a href="#early-action">今日行动建议</a></div>
            </details>
            <details className="nav-group" data-nav-group>
              <summary className="nav-title"><span className="nav-icon icon-planet">✦</span><span>姜胡说</span><span className="nav-chevron">⌄</span></summary>
              <div className="nav-sub">{planetPosts.map((post) => <a href={"#planet-" + post.index} key={post.index}>{post.title}</a>)}</div>
            </details>
            <details className="nav-group" data-nav-group>
              <summary className="nav-title"><span className="nav-icon icon-review">↺</span><span>复盘</span><span className="nav-chevron">⌄</span></summary>
              <div className="nav-sub"><a href="#yesterday-review">昨日复盘</a><a href="#seven-day-trend">近七天趋势</a><a href="#cognitive-observation">AI 认知观察</a><a href="#minimum-action">最小行动建议</a></div>
            </details>
            <details className="nav-group" data-nav-group>
              <summary className="nav-title"><span className="nav-icon icon-briefing">↗</span><span>今日深读</span><span className="nav-chevron">⌄</span></summary>
              <div className="nav-sub">{deepReads.map((item, i) => <a href={"#deep-read-" + (i + 1)} key={item.title}>{cleanTitle(item.title)}</a>)}</div>
            </details>
            <details className="nav-group" data-nav-group>
              <summary className="nav-title"><span className="nav-icon icon-briefing">▷</span><span>课程与视频</span><span className="nav-chevron">⌄</span></summary>
              <div className="nav-sub">{learningResources.length ? learningResources.map((item, i) => <a href={"#learning-" + (i + 1)} key={item.title}>{item.title}</a>) : <a href="#learning-practice">今天不新增课程</a>}</div>
            </details>
            <details className="nav-group" data-nav-group>
              <summary className="nav-title"><span className="nav-icon icon-hotlist">↗</span><span>热点榜单</span><span className="nav-chevron">⌄</span></summary>
              <div className="nav-sub"><a href="#hotlist">查看 2026 年 8 月 30 日完整榜单</a></div>
            </details>
          </nav>
          <p className="sidebar-note">点小标题直达正文 · 折叠内容会自动展开</p>
        </aside>

        <div className="page" id="top">
          <section className="hero">
            <div className="date-block"><div className="date-day">31</div><div><p className="date-month">2026 · 08</p><p className="date-week">星期一</p></div></div>
            <div className="hero-copy"><p className="eyebrow">TODAY&apos;S DIRECTION</p><h1>先把已有判断写成草稿，<br />再让真实任务检验工具。</h1><p className="judgment">今天只写第 5 条视频的一页草稿，不新增课程，也不扩张知识库。</p></div>
            <div className="hero-weather" aria-label={weather.location + "当天天气：" + weather.condition + "，" + weather.temperature}>
              <span className="weather-icon">{weather.icon}</span>
              <span className="weather-copy"><strong>{weather.condition}</strong><small>{weather.location} · {weather.temperature}</small></span>
            </div>
          </section>

          <section className="section" id="today">
            <div className="section-heading compact-heading"><div><p className="eyebrow">TODAY&apos;S PRIORITY</p><h2>今天只做一件事</h2></div><p>先恢复，再完成一页草稿</p></div>
            <div className="task-grid task-grid--one">{tasks.map((task, i) => <article className={"task-card task-card--detailed " + task.tone} id={"task-" + (i + 1)} key={task.number}>
              <div className="task-card-head"><span className="task-number">{task.number}</span><span className="task-source">{task.source}</span></div>
              <h3>{task.title}</h3>
              <p className="task-why"><strong>为什么是今天：</strong>{task.why}</p>
              {task.question ? <p className="task-question"><strong>今天要回答的问题：</strong>{task.question}</p> : null}
              <div className="task-detail"><strong>具体怎么做：</strong><ol>{task.steps.map((step) => <li key={step}>{step}</li>)}</ol></div>
              <div className="task-result"><p><strong>交付物：</strong>{task.deliverable}</p><p><strong>完成标准：</strong>{task.done}</p></div>
              <div className="task-meta"><span>第一步</span><strong>{task.first}</strong></div><div className="task-time">{task.time}</div>
            </article>)}</div>
            <div className="time-block-heading" id="schedule-heading"><div><p className="eyebrow">TIME BLOCKS</p><h3>今日时间块</h3></div><p>让时间服务一个可检查结果</p></div>
            <section className="schedule" id="schedule"><div><span>恢复</span><p>起床后先吃饭、补水并离开床边；不把刷资讯算作开工。</p></div><div><span>恢复后｜45 分钟</span><p>只写第 5 条草稿的三段：功能、真实任务、结果与判断。</p></div><div><span>结束</span><p>保存文件并记录完成或未完成；不临时增加课程、工具或新系统。</p></div></section>
            <details className="brief-item" id="risk"><summary><span className="brief-index">风险</span><span className="brief-main"><span className="pill">今日边界</span><strong>睡眠不足时不把恢复误写成拖延</strong><span>先恢复，再做唯一交付</span></span><span className="plus">＋</span></summary><div className="brief-content"><p>连续晚睡会直接削弱思考与表达，今天不以意志不足解释所有未完成。</p><p>主要执行风险是再次用课程、工具和信息输入包围一个已经明确的判断。</p></div></details>
            <div className="template-section" id="templates">
              <div className="time-block-heading"><div><p className="eyebrow">FIXED TEMPLATES</p><h3>模版</h3></div></div>
              <div className="brief-list template-list">
                <details className="brief-item" id="template-video">
                  <summary><span className="brief-index">01</span><span className="brief-main brief-main--compact"><span className="pill template-icon" aria-hidden="true">🎬</span><strong>视频流程</strong></span><span className="plus">＋</span></summary>
                  <div className="brief-content template-workflow">
                    <section>
                      <h4>1. 找痛点</h4>
                      <p>为什么一定要想清楚：谁，在什么场景，有什么痛点？</p>
                      <p><strong>痛点决定结构：</strong></p>
                      <ul className="template-prompts">
                        <li>实操型 → 步骤式</li>
                        <li>认知型 → 对比式</li>
                        <li>情感型 → 叙事式</li>
                      </ul>
                    </section>
                    <section>
                      <h4>2. 写脚本时思考</h4>
                      <ul className="template-prompts">
                        <li>我这条到底想验证什么？</li>
                        <li>我的核心判断是什么？</li>
                        <li>我用什么具体例子证明？</li>
                        <li>发出去之后，别人实际理解成了什么？</li>
                        <li>下一条因此改什么？</li>
                      </ul>
                    </section>
                    <section>
                      <h4>3. 结构</h4>
                      <ul className="template-prompts">
                        <li>开头（吸引＋洞见）</li>
                        <li>中间（解决方案）</li>
                        <li>结尾（金句）</li>
                      </ul>
                    </section>
                  </div>
                </details>
                <details className="brief-item" id="template-source-experiment">
                  <summary><span className="brief-index">02</span><span className="brief-main brief-main--compact"><span className="pill template-icon" aria-hidden="true">🔎</span><strong>信息源实验卡</strong></span><span className="plus">＋</span></summary>
                  <div className="brief-content"><ul className="template-prompts">
                    <li>今天我看到：</li>
                    <li>我以前不知道：</li>
                    <li>我觉得它可能意味着：</li>
                    <li>我现在没想明白的是：</li>
                    <li>我能不能亲自试一下：</li>
                  </ul></div>
                </details>
                <details className="brief-item" id="template-inspiration">
                  <summary><span className="brief-index">03</span><span className="brief-main brief-main--compact"><span className="pill template-icon" aria-hidden="true">💡</span><strong>灵感库</strong></span><span className="plus">＋</span></summary>
                  <div className="brief-content"><ul className="template-prompts">
                    <li>触发事件</li>
                    <li>我遇到的问题</li>
                    <li>我得到的新判断</li>
                    <li>可以做成什么内容。</li>
                  </ul></div>
                </details>
                <details className="brief-item" id="template-video-topic-decision">
                  <summary><span className="brief-index">04</span><span className="brief-main brief-main--compact"><span className="pill template-icon" aria-hidden="true">🎯</span><strong>视频选题决策</strong></span><span className="plus">＋</span></summary>
                  <div className="brief-content"><ul className="template-prompts">
                    <li>为什么选这个题</li>
                    <li>预测什么会发生</li>
                    <li>实际发生了什么</li>
                    <li>原来的判断哪里错了</li>
                    <li>下一条准备验证什么</li>
                  </ul></div>
                </details>
                <details className="brief-item" id="template-one-more-question">
                  <summary><span className="brief-index">05</span><span className="brief-main brief-main--compact"><span className="pill template-icon" aria-hidden="true">🧭</span><strong>多问一句</strong></span><span className="plus">＋</span></summary>
                  <div className="brief-content"><ul className="template-prompts">
                    <li>我这次在逃避什么问题？</li>
                    <li>当我逃避真正要解决的问题时，我会本能去找什么东西？</li>
                  </ul></div>
                </details>
                <details className="brief-item" id="template-judgment">
                  <summary><span className="brief-index">06</span><span className="brief-main brief-main--compact"><span className="pill template-icon" aria-hidden="true">⚖️</span><strong>判断模板</strong></span><span className="plus">＋</span></summary>
                  <div className="brief-content template-workflow">
                    <section>
                      <h4>需要判断的问题，先强制自己写三句话：</h4>
                      <p><strong>我的判断：</strong>我目前认为问题是 X。</p>
                      <p><strong>我的依据：</strong>因为我观察到了 A、B。</p>
                      <p><strong>我不确定：</strong>我不知道 C 是否成立。</p>
                    </section>
                    <section>
                      <h4>再给 AI：</h4>
                      <p>不要替我得结论。检查我的判断，找漏洞、反例和遗漏。</p>
                    </section>
                  </div>
                </details>
              </div>
            </div>
          </section>

          <section className="section" id="briefing">
            <div className="section-heading"><div><p className="eyebrow">DAILY INFORMATION</p><h2>每日资讯</h2></div></div>
            <div className="cloud-core">{renderMarkdown(emphasizedCoreJudgment, "core")}</div>
            {creatorUpdates.length ? <>
              <div className="section-heading compact-heading"><div><p className="eyebrow">CREATOR UPDATES</p><h2>指定博主动态</h2></div><p>{creatorUpdates.length} 条，完整保留</p></div>
              <div className="brief-list">{creatorUpdates.map((item, i) => <details className="brief-item" id={"creator-" + (i + 1)} key={item.title}>
                <summary><span className="brief-index">{String(i + 1).padStart(2, "0")}</span><span className="brief-main brief-main--compact"><span className="pill">人物动态</span><strong>{cleanTitle(item.title)}</strong></span><span className="plus">＋</span></summary>
                <div className="brief-content">{renderMarkdown(item.body, "creator-" + i)}</div>
              </details>)}</div>
            </> : creatorUpdatesRaw ? <details className="brief-item" id="creator-updates"><summary><span className="brief-index">人物</span><span className="brief-main"><span className="pill">指定博主动态</span><strong>覆盖日公开更新核验</strong></span><span className="plus">＋</span></summary><div className="brief-content">{renderMarkdown(creatorUpdatesRaw, "creator-raw")}</div></details> : null}
            <div className="section-heading compact-heading"><div><p className="eyebrow">INDUSTRY NEWS</p><h2>行业重要新闻：{industryStories.length} 条</h2></div><p>所有背景、判断、边界与原始链接完整保留</p></div>
            <div className="brief-list">{industryStories.map((story, i) => <details className="brief-item" id={"story-" + (i + 1)} key={story.title}>
              <summary><span className="brief-index">{String(i + 1).padStart(2, "0")}</span><span className="brief-main brief-main--compact"><span className="pill">行业动态</span><strong>{cleanTitle(story.title)}</strong></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(story.body, "story-" + i)}</div>
            </details>)}</div>
            <div className="section-heading compact-heading"><div><p className="eyebrow">PRODUCT OBSERVATION</p><h2>产品观察</h2></div><p>{productObservations.length} 个产品，逐项完整保留</p></div>
            <div className="brief-list">{productObservations.map((item, i) => <details className="brief-item" id={i === 0 ? "product-observation" : "product-observation-" + (i + 1)} key={item.title}>
              <summary><span className="brief-index">产品 {i + 1}</span><span className="brief-main brief-main--compact"><span className="pill">产品观察</span><strong>{item.title}</strong></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(item.body, "product-" + i)}</div>
            </details>)}</div>
            {signalRadar ? <details className="brief-item" id="signal-radar">
              <summary><span className="brief-index">雷达</span><span className="brief-main"><span className="pill">{signalRadarLabel}</span><strong>信息源实验雷达</strong></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(signalRadar, "signal-radar")}</div>
            </details> : null}
            <details className="brief-item" id="early-action">
              <summary><span className="brief-index">行动</span><span className="brief-main"><span className="pill">今日行动建议</span><strong>完成一次 75 分钟“最小上下文包”实验</strong></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(actionAdvice, "action")}</div>
            </details>
          </section>

          <section className="section" id="planet"><div className="section-heading"><div><p className="eyebrow">JIANG HUSHUO</p><h2>姜胡说</h2></div><p>昨日 2 条星主原文</p></div><p><a className="archive-link" href="/daily-briefing/knowledge/2026-08-30/26-08-30姜胡说知识星球.md" target="_blank" rel="noopener noreferrer">查看 8 月 30 日原始归档 ↗</a></p><div className="planet-list">{planetPosts.map((post) => <details className="planet-card" id={"planet-" + post.index} key={post.index}><summary><span className="planet-number">{post.index}</span><span><small>{post.author} · {post.published}</small><strong>{post.title}</strong></span><span className="planet-kind">原文</span></summary><div className="planet-body">{post.body.split("\n").map((line, i) => line ? <p key={i}>{line}</p> : <br key={i} />)}{post.images.map((src) => <img src={src} alt={post.title + " 原始图片"} key={src} />)}</div></details>)}</div></section>

          <section className="section" id="review"><div className="section-heading"><div><p className="eyebrow">PERSONAL REVIEW</p><h2>复盘</h2></div><p>事实与 AI 建议分开呈现</p></div><div className="review-grid"><details className="review-card" id="yesterday-review" open><summary>昨日复盘</summary><div><p>8 月 30 日完成了求职投递和直播笔记，但没有可验证内容输出。长时间观看短剧与信息流被用户本人描述为“不想思考”；这说明资料输入正常，不等于创作承诺已经推进。</p></div></details><article className="review-card static-review-card" id="seven-day-trend"><h3>近七天趋势</h3><div><p>过去七天并非完全没有行动：完成了两次兼职面试、一次培训和一条短视频发布。重复出现的问题是，作品交付只在任务被压缩、环境改变后发生；其余多日输入量很高但没有形成可验证作品。</p></div></article><article className="review-card static-review-card diagnosis" id="cognitive-observation"><h3>AI 认知观察</h3><div><p><strong>证据等级：</strong>重复模式。</p><p><strong>观察：</strong>当目标停留在“理解更多、找到更好方向”时，输入容易持续扩张；当任务变成一条具体视频并进入外部环境时，更可能完成。</p><p><strong>候选解释：</strong>继续输入可以延后被真实反馈评价。</p><p><strong>替代解释：</strong>睡眠不足会直接削弱思考与拍摄，环境变化可能只是恢复了精力。</p></div></article><article className="review-card static-review-card diagnosis" id="minimum-action"><h3>最小行动建议</h3><div><p><strong>行动：</strong>今天只写第 5 条视频的一页草稿。</p><p><strong>最大范围：</strong>45 分钟，不学习新工具，不要求发布。</p><p><strong>可观察产物：</strong>一份以 05- 开头的 Markdown 口播草稿。</p><p><strong>完成标准：</strong>包含一个真实任务、一次可观察结果和一句可能被结果推翻的判断。</p></div></article><article className="review-card static-review-card diagnosis" id="action-diagnosis"><h3>AI 执行力诊断 / 建议</h3><div><p>当前主要风险不是缺少选题，而是已有判断仍被更多输入包围。按 dbs-action 框架，这接近“知识上瘾”和“用思考替代行动”；但连续晚睡是实际约束，不能被解释成意志不足。今天的处方是先恢复，再把一个已经写明的判断变成可见草稿。</p></div></article></div></section>

          <section className="section" id="deep-reads">
            <div className="section-heading"><div><p className="eyebrow">DEEP READS</p><h2>今日深读</h2></div><p>{deepReads.length} 篇云端早报原文，任选一篇</p></div>
            <div className="brief-list deep-read-list">{deepReads.map((item, i) => <details className="brief-item" id={"deep-read-" + (i + 1)} key={item.title}>
              <summary><span className="brief-index">{String(i + 1).padStart(2, "0")}</span><span className="brief-main"><strong>{cleanTitle(item.title)}</strong><span>点击展开核心观点、值得学习的部分、如何应用与适用边界</span></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(item.body, "deep-" + i)}
                <div className="advice">
                  <p><strong>知识原子：</strong>{deepReadAtoms[i]?.atom}</p>
                  <p><strong>与今天的关系（AI 分析）：</strong>{deepReadAtoms[i]?.relation}</p>
                  <p><strong>阅读问题：</strong>{deepReadAtoms[i]?.question}</p>
                </div>
              </div>
            </details>)}</div>
          </section>

          <section className="section" id="learning">
            <div className="section-heading"><div><p className="eyebrow">COURSES & VIDEOS</p><h2>课程与视频</h2></div><p>执行优先，不为填满栏目而推荐</p></div>
            {learningResources.length ? <div className="brief-list deep-read-list">{learningResources.map((item, i) => <details className="brief-item" id={"learning-" + (i + 1)} key={item.title}>
              <summary><span className="brief-index">{String(i + 1).padStart(2, "0")}</span><span className="brief-main"><strong>{item.type}｜{item.title}</strong><span>{item.meta}<br />{item.intro}</span></span><span className="plus">＋</span></summary>
              <div className="brief-content">
                <p><strong>为什么今天推荐（AI 推荐）：</strong>{item.why}</p>
                <p><strong>建议重点：</strong></p><ul>{item.focus.map((point) => <li key={point}>{point}</li>)}</ul>
                <p><strong>看完只做一件事：</strong>{item.action}</p>
                <p><strong>适用边界：</strong>{item.boundary}</p>
                <SourceLink href={item.source} label={item.sourceLabel} />
              </div>
            </details>)}</div> : <article className="review-card static-review-card" id="learning-practice">
              <h3>今天不新增课程</h3>
              <div>
                <p><strong>AI 建议：</strong>过去七天已经有充足输入，今天的明确缺口是把已有判断写成第 5 条视频草稿；没有发现必须先学习、且比直接写草稿更有价值的资源。</p>
                <p><strong>今天只练习：</strong>写三段：工具提供什么功能；把它放进哪个真实任务；什么结果会改变“它有用”的判断。</p>
                <p><strong>适用边界：</strong>这不代表课程无用；只有现实实验暴露出明确方法缺口后，再按缺口选择资源。</p>
              </div>
            </article>}
          </section>

          <section className="section" id="hotlist">
            <div className="section-heading"><div><p className="eyebrow">HOT LIST</p><h2>热点榜单</h2></div><p>2026 年 8 月 30 日完整榜单</p></div>
            <a className="hotlist" href="/daily-briefing/hotlist/2026-08-30.html" aria-label="打开热点榜单"><span>昨日榜单</span><strong>查看 2026 年 8 月 30 日完整榜单</strong><span className="arrow">↗</span></a>
          </section>

          <footer><p>把已有判断写成草稿，<br />再让真实任务检验工具。</p><span>每日 09:00 更新 · 完整内容折叠保存</span></footer>
        </div>
      </div>
    </main>
  );
}
