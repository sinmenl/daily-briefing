import { type ReactNode } from "react";
import { cloudBriefMarkdownToday } from "./cloud-brief-current";

const briefDate = "2026-08-28";

const tasks = [
  {
    number: "01",
    title: "完成华图培训，并留下三条现场问题",
    source: "AI 建议",
    why: "8 月 26 日日记明确记录华图培训调整到今天下午。这是已经存在的现实义务；网页不虚构具体时间、地点或携带材料。",
    question: "培训现场有哪些具体问题、听不懂之处或需要进一步确认的信息？",
    steps: [
      "打开原始通知或聊天，核对实际时间、地点和需要携带的材料。",
      "参加培训；过程中记录具体问题、听不懂之处或需要进一步确认的信息。",
      "结束后用 15 分钟整理出三条现场问题或笔记，然后停止扩展准备。",
    ],
    deliverable: "确认到场或完成培训，并留下三条具体现场问题或笔记。",
    done: "培训完成，三条内容已经写下。",
    first: "打开华图培训的原始通知或聊天，核对今天的现实安排",
    time: "培训本身＋15 分钟整理",
    tone: "mint",
  },
  {
    number: "02",
    title: "用五条真实反馈检查第四条视频的判断",
    source: "AI 建议",
    why: "8 月 27 日已经完成第四条视频的写稿、拍摄、剪辑和发布，日记也明确希望验证 AI 新手是否有相似处境。下一步应进入反馈，而不是再安排一次发布。",
    question: "学 AI 新手持续学工具却没有推进原本任务，主要是在补能力，还是在用学习替代行动？",
    steps: [
      "最多收集五条真实评论、私信或对话并匿名化；如果没有反馈，如实记录为零。",
      "把反馈区分为赞同、具体情境和尝试结果，不用点赞数替代内容证据。",
      "写出当前判断、支持证据，以及什么反例会让判断改变。",
    ],
    deliverable: "不超过五条的反馈记录、一句收窄或维持后的判断、一个后续问题。",
    done: "五条或当前全部可获得反馈均已记录，并写下判断状态；零反馈也允许如实完成。",
    first: "打开第四条视频的评论或互动页，记录第一条真实回应",
    time: "最多 45 分钟",
    tone: "blue",
  },
];

const learningResources: Array<{ type: string; title: string; meta: string; intro: string; why: string; focus: string[]; action: string; boundary: string; source: string; sourceLabel: string }> = [];

const xiaobot = {
  title: "你只拆到了结构，但没走到用户心里",
  author: "姜胡说",
  published: "2026-08-17 23:17:56",
  source: "https://xiaobot.net/post/36942815-ae81-4d10-9742-1e0ffff9b9bd",
};

const weather = { location: "南宁", condition: "中雨", temperature: "25–30℃", icon: "🌧️" };

const planetPosts: Array<{ index: string; author: string; published: string; title: string; body: string; images: string[] }> = [
  {
    index: "1",
    author: "大胡子",
    published: "2026-08-27 08:35",
    title: "两个极端：本地工作站与终端极简工作流",
    body: `我突然想走两个极端:
一个是重度本地工作站，Qwen3.8-Flash-Next，全部在本地完成。
另一个完全终端，Omarchy+Pi agent。除此之外什么都没有，极度专注。只有终端、信息流。zen 模式。
其实两个都是极客的玩法。
为什么不试试呢？`,
    images: [],
  },
  {
    index: "2",
    author: "大胡子",
    published: "2026-08-27 12:11",
    title: "为什么我不能蒸馏",
    body: `你们这些大厂都互相蒸馏，
为什么我不能？

我也蒸。`,
    images: ["/daily-briefing/knowledge/2026-08-27/images/%5B2%5D%20%E5%A4%A7%E8%83%A1%E5%AD%90%20-1.png"],
  },
  {
    index: "3",
    author: "大胡子",
    published: "2026-08-27 15:10",
    title: "学习陷阱与帮助别人",
    body: `如果你一直在学习，
但一直没有达到能够帮助别人解决问题的深度。
你会陷入学习陷阱。

这还不是最致命的，还有救。

最致命的是：你一直在学习，
还没有达到帮助别人解决问题的深度。
但，你居然神奇的：赚到钱了，或者有粉丝了。
你认为自己走通了闭环。

事实上，你一直在原地打转。
且乐此不疲。
直到3 - 5年，“环境”变了，
你才会发现，原来自己一直在“裸泳”。
但这个时候，你最好的年华已经逝去了。

所以，我一直和大家说，
一定要学会赚钱，
但一定不要掉到钱眼里。

还在路上的，或者还没起步的老伙计，
请你一定要相信：
永远不是我怎么才能....
而是，我怎么可以更好的帮助别人。
无论你多么想让自己赚到钱，让自己变得牛X。
请你记住，能让你真正发生改变的其实是：
你怎么才能更好的帮助别人。

但，
很少有人真正能理解这一点。
所以，他们会一直在卡在那里。
不是能力不行，不是没有机会，仅仅是因为他们把自己锁在了自我狭小的认知里。`,
    images: [],
  },
];

const deepReadAtoms = [
  {
    atom: "评价标准决定认知多样性是否获得奖励",
    relation: "今天复核真实反馈时，不只看赞同或平台数据，还要主动寻找具体情境、机制和反例，避免用单一分数替代判断。",
    question: "当前的反馈标准是在奖励熟悉表达，还是能识别新的机制、反例与适用边界？",
  },
  {
    atom: "验证等级之间不可相互替代",
    relation: "视频已经发布只证明交付发生；真实反馈、反例和后续行为分别属于新的验证层级，不能由播放量或一次发布替代。",
    question: "这次反馈复核最高能证明什么，仍然不能证明什么？",
  },
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
const creatorUpdates = splitSubsections(cloudSections.get("指定博主动态") ?? "");
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
            <nav className="date-list" data-archive-list="true" aria-label="选择过往简报日期"><a href="?date=2026-08-28" aria-current="page">2026年8月28日</a></nav>
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
              <div className="nav-sub">{creatorUpdates.map((item, i) => <a href={"#creator-" + (i + 1)} key={item.title}>{cleanTitle(item.title)}</a>)}{industryStories.map((item, i) => <a href={"#story-" + (i + 1)} key={item.title}>{i + 1}. {cleanTitle(item.title)}</a>)}{productObservations.map((item, i) => <a href={i === 0 ? "#product-observation" : "#product-observation-" + (i + 1)} key={item.title}>{item.title}</a>)}{signalRadar ? <a href="#signal-radar">信息源实验雷达</a> : null}<a href="#early-action">今日行动建议</a></div>
            </details>
            <details className="nav-group" data-nav-group>
              <summary className="nav-title"><span className="nav-icon icon-planet">✦</span><span>姜胡说</span><span className="nav-chevron">⌄</span></summary>
              <div className="nav-sub">{planetPosts.map((post) => <a href={"#planet-" + post.index} key={post.index}>{post.author}：{post.title}</a>)}<a href="#planet-status">昨日原始归档</a><a href="#xiaobaotong-1">小报童：{xiaobot.title}</a></div>
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
              <div className="nav-sub"><a href="#hotlist">查看 2026 年 8 月 27 日完整榜单</a></div>
            </details>
          </nav>
          <p className="sidebar-note">点小标题直达正文 · 折叠内容会自动展开</p>
        </aside>

        <div className="page" id="top">
          <section className="hero">
            <div className="date-block"><div className="date-day">28</div><div><p className="date-month">2026 · 08</p><p className="date-week">星期五</p></div></div>
            <div className="hero-copy">
              <p className="eyebrow">TODAY&apos;S DIRECTION</p>
              <h1>先完成现实义务，<br />再让一次发布进入反馈。</h1>
              <p className="judgment">第四条视频已经发布。今天完成培训，并用真实回应检查视频里的判断，不重复安排已经完成的发布任务。</p>
            </div>
            <div className="hero-weather" aria-label={weather.location + "当天天气：" + weather.condition + "，" + weather.temperature}>
              <span className="weather-icon">{weather.icon}</span>
              <span className="weather-copy"><strong>{weather.condition}</strong><small>{weather.location} · {weather.temperature}</small></span>
            </div>
          </section>

          <section className="section" id="today">
            <div className="section-heading compact-heading"><div><p className="eyebrow">TODAY&apos;S PRIORITIES</p><h2>今天只做两件事</h2></div><p>AI 建议：完成现实义务，并把已发布内容带入反馈</p></div>
            <div className="task-grid task-grid--two">{tasks.map((task, i) => <article className={"task-card task-card--detailed " + task.tone} id={"task-" + (i + 1)} key={task.number}>
              <div className="task-card-head"><span className="task-number">{task.number}</span><span className="task-source">{task.source}</span></div>
              <h3>{task.title}</h3>
              <p className="task-why"><strong>为什么是今天：</strong>{task.why}</p>
              {task.question ? <p className="task-question"><strong>今天要回答的问题：</strong>{task.question}</p> : null}
              <div className="task-detail"><strong>具体怎么做：</strong><ol>{task.steps.map((step) => <li key={step}>{step}</li>)}</ol></div>
              <div className="task-result"><p><strong>交付物：</strong>{task.deliverable}</p><p><strong>完成标准：</strong>{task.done}</p></div>
              <div className="task-meta"><span>第一步</span><strong>{task.first}</strong></div><div className="task-time">{task.time}</div>
            </article>)}</div>
            <div className="time-block-heading" id="schedule-heading"><div><p className="eyebrow">TIME BLOCKS</p><h3>今日时间块</h3></div><p>让时间服务一个可检查结果</p></div>
            <section className="schedule" id="schedule">
              <div><span>培训前｜15 分钟</span><p>核对今天培训的实际时间、地点和材料，不额外扩张准备。</p></div>
              <div><span>下午｜现实义务</span><p>参加华图培训，过程中或结束后留下三条具体现场问题。</p></div>
              <div><span>晚上｜最多 45 分钟</span><p>精力允许时复核第四条视频当前可获得的真实反馈；没有反馈也如实记录。</p></div>
            </section>
            <details className="brief-item" id="risk">
              <summary><span className="brief-index">风险</span><span className="brief-main"><span className="pill">今日边界</span><strong>两个需要主动截断的动作</strong><span>只识别，不新增任务</span></span><span className="plus">＋</span></summary>
              <div className="brief-content">
                <p><strong>把反馈复核变成后台数据浏览：</strong>最多看五条真实回应，重点找具体情境和反例，不用点赞数代替内容证据。</p>
                <p><strong>无限准备培训：</strong>只核对现实安排，并在培训后用 15 分钟留下三条问题。</p>
              </div>
            </details>
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
            </> : null}
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
              <summary><span className="brief-index">行动</span><span className="brief-main"><span className="pill">今日行动建议</span><strong>从真实反馈里找出一条反例</strong></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(actionAdvice, "action")}</div>
            </details>
          </section>

          <section className="section" id="planet">
            <div className="section-heading"><div><p className="eyebrow">JIANG HUSHUO</p><h2>姜胡说</h2></div><p>昨日 3 条星主原文与一篇相关小报童文章</p></div>
            <div className="section-context" id="planet-status">
              <SourceLink href="/daily-briefing/knowledge/2026-08-27/26-08-27姜胡说知识星球.md" label="2026 年 8 月 27 日原始归档" />
            </div>
            {planetPosts.map((post) => <details className="planet-card" id={"planet-" + post.index} key={post.index}>
              <summary><div className="avatar">{post.index}</div><div><span className="planet-time">{post.author} · {post.published}</span><strong>{post.title}</strong></div><span className="open-label">原文</span></summary>
              <div className="planet-content"><div className="original"><span>星主原文</span>{renderMarkdown(post.body, "planet-" + post.index)}{post.images.map((src, imageIndex) => <img src={src} alt={post.author + "原始配图 " + (imageIndex + 1)} loading="lazy" key={src} />)}</div></div>
            </details>)}
            <details className="planet-card" id="xiaobaotong-1">
              <summary><div className="avatar">读</div><div><span className="planet-time">小报童 · {xiaobot.author} · {xiaobot.published}</span><strong>{xiaobot.title}</strong><span>阅读导引为 AI 建议，文章原文不在网页转载</span></div><span className="open-label">导引</span></summary>
              <div className="planet-content"><div className="original">
                <span>AI 阅读导引</span>
                <p>用户刚发布一条来自个人经验的视频；这篇文章区分“结构正确”与“观众感到与自己有关”，适合用于检查真实反馈，而不是继续学习结构。</p>
                <p><strong>阅读重点：</strong>观察反馈中是否出现具体场景认同；区分“我也这样”与“我因此采取了行动”。</p>
                <p><strong>阅读问题：</strong>哪条反馈能证明目标观众在视频里看见了自己，而不只是抽象赞同？</p>
                <p><strong>适用边界：</strong>这是 AI 阅读导引，不代表用户已阅读、认同或实践文章观点；作者方法也不能直接当成传播效果证明。</p>
                <SourceLink href={xiaobot.source} label="小报童原文" />
              </div></div>
            </details>
          </section>

          <section className="section" id="review">
            <div className="section-heading"><div><p className="eyebrow">PERSONAL REVIEW</p><h2>复盘</h2></div><p>私有日记只用于证据审计，公开页面已去标识化</p></div>
            <div className="review-grid">
              <details className="review-card" id="yesterday-review" open>
                <summary>昨日复盘</summary>
                <div>
                  <p><strong>资料状态：</strong>已读取 8 月 21 日至 27 日全部七份本地日记，没有缺失日期，也没有读取今日日记。</p>
                  <p><strong>可确认事实：</strong>昨天换到图书馆，完成第四条视频的写稿、拍摄、剪辑和公开发布；培训安排在今天。</p>
                  <p><strong>边界：</strong>一次发布证明这套启动方式当天有效，但还不能证明它会稳定复现，也不能证明视频里的判断适用于目标用户。</p>
                  <p className="advice"><strong>AI 建议：</strong>今天不重复安排发布，转而记录真实反馈和反例。</p>
                </div>
              </details>
              <article className="review-card static-review-card" id="seven-day-trend">
                <h3>近七天趋势</h3>
                <div className="trend-list">
                  <div><strong>资料范围</strong><p>2026 年 8 月 21 日至 27 日，七份记录齐全；不包含今日日记。</p></div>
                  <div><strong>重复模式</strong><p>多日出现主任务模糊、输入或解释继续，但外部可检查结果不足。</p></div>
                  <div><strong>反例</strong><p>8 月 27 日换环境、收窄为具体成品并从口述起步后，第四条视频完成发布。</p></div>
                  <div><strong>边界</strong><p>单日成功也可能受到精力、时机和现实安排影响；当前只能把这套做法视为待复验的候选解释。</p></div>
                </div>
              </article>
              <article className="review-card static-review-card diagnosis" id="cognitive-observation">
                <h3>AI 认知观察</h3>
                <div>
                  <p><strong>证据等级：</strong>重复模式。</p>
                  <p><strong>候选解释：</strong>具体成品、外部容器与口述起步降低了启动成本，使工作从准备进入发布。</p>
                  <p><strong>替代解释：</strong>昨天的完成也可能只是精力、时机或环境改变带来的单次结果。</p>
                  <p><strong>适用边界：</strong>这是基于多日日记的可修订 AI 推断，不是人格、心理或医疗结论。</p>
                </div>
              </article>
              <article className="review-card static-review-card diagnosis" id="minimum-action">
                <h3>最小行动建议</h3>
                <div>
                  <p><strong>行动：</strong>打开第四条视频的评论或互动页，匿名记录第一条真实回应。</p>
                  <p><strong>最大范围：</strong>10 分钟；不继续浏览数据，不补写不存在的反馈。</p>
                  <p><strong>可观察产物：</strong>一条标注为赞同、具体情境或尝试结果的真实回应；没有反馈时记录为零。</p>
                  <p><strong>完成标准：</strong>第一条真实回应已记录并分类，或已明确记录“当前无反馈”。</p>
                </div>
              </article>
            </div>
          </section>

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
                <p><strong>AI 建议：</strong>今天已有华图培训和一项直接反馈练习；没有找到比现实任务更相关、且以教学为主的课程或原始视频，因此不为填满栏目而推荐。</p>
                <p><strong>今天只练习：</strong>打开第四条视频的评论或互动页，最多记录五条真实回应，区分赞同、具体情境和尝试结果，并寻找一条可能改变原判断的反例。</p>
                <p><strong>适用边界：</strong>这不代表课程无用；只有现实实验暴露出明确方法缺口后，再按缺口选择资源。</p>
              </div>
            </article>}
          </section>

          <section className="section" id="hotlist">
            <div className="section-heading"><div><p className="eyebrow">HOT LIST</p><h2>热点榜单</h2></div><p>2026 年 8 月 27 日完整榜单</p></div>
            <a className="hotlist" href="/daily-briefing/hotlist/2026-08-27.html" aria-label="打开热点榜单"><span>昨日榜单</span><strong>查看 2026 年 8 月 27 日完整榜单</strong><span className="arrow">↗</span></a>
          </section>

          <footer><p>先完成现实义务，<br />再用真实反馈修正判断。</p><span>每日 09:00 更新 · 完整内容折叠保存</span></footer>
        </div>
      </div>
    </main>
  );
}
