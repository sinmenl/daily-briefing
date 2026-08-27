import { type ReactNode } from "react";
import { cloudBriefMarkdownToday } from "./cloud-brief-current";

const briefDate = "2026-08-27";

const tasks = [
  {
    number: "01",
    title: "发出一条“学了很多却迟迟不行动”的视频 demo",
    source: "AI 建议",
    why: "近 7 天已经出现选题未写、断更和逃避拍摄的记录；期间还明确留下“发一条最简单 demo”的计划，但没有找到完成证据。今天是在恢复旧承诺，不是临时增加任务。",
    question: "面对一个“学了很多，却迟迟没有开始行动”的人，第一条视频应该继续给方法，还是先讲清“继续学习可能正在替代行动”？",
    steps: [
      "先写三句：我现在的答案是……；我这样想，是因为我遇到过……；如果后面发现……，我就需要改口。",
      "再让 AI 只检查：我有没有把不同问题混在一起；有没有一个反例会让我改变当前答案。",
      "根据检查只改写一次，录成不超过 60 秒的一镜口述；只删明显口误后发布。",
    ],
    deliverable: "一条已发布的 60 秒内视频＋链接或截图＋一句“哪句话因为检查而改了”。",
    done: "视频已对外发布并留下链接或截图；播放量不影响完成判定。",
    first: "新建“学了很多却没行动-demo”文档，把三个填空句复制进去",
    time: "最多 90 分钟",
    tone: "mint",
  },
  {
    number: "02",
    title: "一次性确认明天华图培训的安排",
    source: "AI 建议",
    why: "近 7 天记录显示培训已经改到 8 月 28 日下午，但没有找到准确时间、地点和携带材料的确认结果。今天只消除明天出门前的信息缺口，不扩展成长时间备课。",
    question: "",
    steps: [
      "确认准确时间和地点。",
      "确认证件、电脑、充电器、课件或其他指定材料。",
      "写成不超过 5 项的明日清单，收好材料后停止准备。",
    ],
    deliverable: "一张包含时间、地点和携带材料的明日清单，以及已经收好的材料。",
    done: "出发时间、到达地点和携带物品三项均已确认；不再继续扩展备课。",
    first: "打开华图培训通知或对接人聊天窗口",
    time: "最多 20 分钟",
    tone: "blue",
  },
];

const learningResources: Array<{ type: string; title: string; meta: string; intro: string; why: string; focus: string[]; action: string; boundary: string; source: string; sourceLabel: string }> = [];

const xiaobot = {
  title: "17天，10万粉；一天一小时，月入5位数；方法不过三把刀",
  author: "姜胡说",
  published: "2026-08-24 23:59:35",
  source: "https://xiaobot.net/post/7236ed87-7b47-4a1b-bd3c-15a82f97fad2",
};

const weather = { location: "南宁", condition: "阵雨", temperature: "25–30℃", icon: "🌦️" };

const planetPosts: Array<{ index: string; author: string; published: string; title: string; body: string; images: string[] }> = [
  {
    index: "1",
    author: "大胡子",
    published: "2026-08-26 16:42",
    title: "你要成为一名创作者，而不是消费者",
    body: `小米个人推理硬件，1.2TB/s。
苹果 M5 Ultra，
阿里， Qwen3.8-Flash-Next 。

全部指向个人本地
个人生产力的全面提升。
如果你觉得这事和你无关，那说明你已经落后了。

这不是你要买那个硬件，使用哪个工具，搭建哪个知识库的问题。
问题的底层是:你要成为一名创作者，而不是消费者。`,
    images: ["/daily-briefing/knowledge/2026-08-26/images/%5B1%5D%20%E5%A4%A7%E8%83%A1%E5%AD%90%20-1.jpg", "/daily-briefing/knowledge/2026-08-26/images/%5B1%5D%20%E5%A4%A7%E8%83%A1%E5%AD%90%20-2.jpg"],
  },
  {
    index: "2",
    author: "大胡子",
    published: "2026-08-26 18:38",
    title: "降链、免费额度与质量审核的两个坑",
    body: `再分享一个薅羊毛的地方。
日日新用的人太多了，白天出现的402越来越多，方法就是做降链处理。除了百炼之外，我自己加了这个：
见图一。

不用身份验证，每天有5M的免费名额可以使用。
Qwen3.8 Max居然是免费的。这样一旦降链就可以使用它来接。用不完，快结束的时候可以用余额来审核你自己的系统。Qwen3.8 Max做质量审核是我用过的大模型里最好的。

我个人买了一个$5的套餐，每天15M可用。
现在glm-5.3是5小时重置一次，见图三。
额度不够的时候，可以走它的中转，我看了一下，Deepseek-v4-flash巨便宜（不过得单独交费，见图二）。配合代理很快。

说两个坑，Qwen3.8 Max是收费的，很贵。qwen3.8-max:free这个才是免费的。
另外，你的agent一定要配代理，否则有点慢。`,
    images: ["/daily-briefing/knowledge/2026-08-26/images/%5B2%5D%20%E5%A4%A7%E8%83%A1%E5%AD%90%20-1.png", "/daily-briefing/knowledge/2026-08-26/images/%5B2%5D%20%E5%A4%A7%E8%83%A1%E5%AD%90%20-2.png", "/daily-briefing/knowledge/2026-08-26/images/%5B2%5D%20%E5%A4%A7%E8%83%A1%E5%AD%90%20-3.png"],
  },
  {
    index: "3",
    author: "大胡子",
    published: "2026-08-26 19:00",
    title: "用本地 9B 模型做轻量 Agent 调度",
    body: `再分享一个本地 大模型 ：pooyakn73/Qwen3.8-9B-Distill-MTPLX-Q6G64
从Qwen3.8-27B里分离出来的9B模型，牺牲了一点点速度，把质量提了上去。带来的结果就是，你完全可以用它来做agent的调度模型。且处理文本分类、蒸馏完全足够(可以达到65-60token/s)。
亲测有效。

我现在是用pooyakn73/Qwen3.8-9B-Distill-MTPLX-Q6G64作轻量agent；
Qwen3.8-27B作原子精化，质量居然高于deepseek-v4-flash。可惜作agent主模型不够，而且很慢。
但pooyakn73/Qwen3.8-9B-Distill-MTPLX-Q6G64没有问题。速度很流畅（长文本处理可以达到35-40token/s）。`,
    images: ["/daily-briefing/knowledge/2026-08-26/images/%5B3%5D%20%E5%A4%A7%E8%83%A1%E5%AD%90%20-1.png", "/daily-briefing/knowledge/2026-08-26/images/%5B3%5D%20%E5%A4%A7%E8%83%A1%E5%AD%90%20-2.png"],
  },
  {
    index: "4",
    author: "大胡子",
    published: "2026-08-26 20:13",
    title: "个人产能公式变了",
    body: `一年前，我仍然坚信这个公式：
个人产能 = 个人能力 x 时间。
你每天可以做的事情很少，所以你在努力地提升个人能力，然后每一天在这个基础上不断地积累，产生复利。

今天，公式变了：
个人产能 = 你的战略能力 x 初始能力 x AI放大系统。

AI不仅仅提升了你的个人能力。
同时还压缩了你的时间。

所以，一个人深度思考的能力，判断力，产品力，就变得异常重要了。
大家使用姜小胡的方法，不是遇到问题就提问；
恰恰相反，反复思考，然后和姜小胡探讨（这个时候的姜小胡99%的情况下其实是我）。`,
    images: [],
  },
];

const deepReadAtoms = [
  {
    atom: "高能力 Agent 需要可安全失败的退出机制",
    relation: "今天的 90 分钟实验预先写明完成标准与停止条件，避免为了产出继续加工具或改任务。",
    question: "我的自动化在哪些情况下应该明确失败，而不是继续寻找替代路径？",
  },
  {
    atom: "把专家判断编码成约束与验证，才能让非专家安全实验",
    relation: "今天不是再学一套方法，而是把事实、解释、反例与复述做成最小验证流程。",
    question: "哪些判断可以固定成检查项，哪些仍必须由本人承担？",
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
            <nav className="date-list" data-archive-list="true" aria-label="选择过往简报日期"><a href="?date=2026-08-27" aria-current="page">2026年8月27日</a></nav>
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
              <div className="nav-sub"><a href="#hotlist">查看 2026 年 8 月 26 日完整榜单</a></div>
            </details>
          </nav>
          <p className="sidebar-note">点小标题直达正文 · 折叠内容会自动展开</p>
        </aside>

        <div className="page" id="top">
          <section className="hero">
            <div className="date-block"><div className="date-day">27</div><div><p className="date-month">2026 · 08</p><p className="date-week">星期四</p></div></div>
            <div className="hero-copy">
              <p className="eyebrow">TODAY&apos;S DIRECTION</p>
              <h1>先把拖了七天的内容，<br />变成一条真实发布。</h1>
              <p className="judgment">今天只恢复两个未完成事项：发出最简单的视频 demo，并一次性确认明天下午培训的必要安排。</p>
            </div>
            <div className="hero-weather" aria-label={weather.location + "当天天气：" + weather.condition + "，" + weather.temperature}>
              <span className="weather-icon">{weather.icon}</span>
              <span className="weather-copy"><strong>{weather.condition}</strong><small>{weather.location} · {weather.temperature}</small></span>
            </div>
          </section>

          <section className="section" id="today">
            <div className="section-heading compact-heading"><div><p className="eyebrow">TODAY&apos;S PRIORITIES</p><h2>今天只做两件事</h2></div><p>AI 建议：优先恢复近 7 天明确逃避或尚未完成的事项</p></div>
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
              <div><span>第一段｜最多 90 分钟</span><p>回答卡片中的具体问题，录制并发布一条不超过 60 秒的视频 demo。</p></div>
              <div><span>第二段｜最多 20 分钟</span><p>确认明天下午华图培训的时间、地点和材料，写好清单后停止。</p></div>
            </section>
            <details className="brief-item" id="risk">
              <summary><span className="brief-index">风险</span><span className="brief-main"><span className="pill">今日边界</span><strong>两个需要主动截断的动作</strong><span>只识别，不新增任务</span></span><span className="plus">＋</span></summary>
              <div className="brief-content">
                <p><strong>继续学习来代替发布：</strong>视频只回答卡片中已经给出的一个问题，不再另找选题或课程。</p>
                <p><strong>无限准备明天培训：</strong>只核对时间、地点和材料，20 分钟后停止。</p>
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
              <summary><span className="brief-index">行动</span><span className="brief-main"><span className="pill">今日行动建议</span><strong>完成一次 90 分钟“观点—证据—复述”闭环</strong></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(actionAdvice, "action")}</div>
            </details>
          </section>

          <section className="section" id="planet">
            <div className="section-heading"><div><p className="eyebrow">JIANG HUSHUO</p><h2>姜胡说</h2></div><p>昨日 4 条星主原文与一篇相关小报童文章</p></div>
            <div className="section-context" id="planet-status">
              <SourceLink href="/daily-briefing/knowledge/2026-08-26/26-08-26姜胡说知识星球.md" label="2026 年 8 月 26 日原始归档" />
            </div>
            {planetPosts.map((post) => <details className="planet-card" id={"planet-" + post.index} key={post.index}>
              <summary><div className="avatar">{post.index}</div><div><span className="planet-time">{post.author} · {post.published}</span><strong>{post.title}</strong></div><span className="open-label">原文</span></summary>
              <div className="planet-content"><div className="original"><span>星主原文</span>{renderMarkdown(post.body, "planet-" + post.index)}{post.images.map((src, imageIndex) => <img src={src} alt={post.author + "原始配图 " + (imageIndex + 1)} loading="lazy" key={src} />)}</div></div>
            </details>)}
            <details className="planet-card" id="xiaobaotong-1">
              <summary><div className="avatar">读</div><div><span className="planet-time">小报童 · {xiaobot.author} · {xiaobot.published}</span><strong>{xiaobot.title}</strong><span>阅读导引为 AI 建议，文章原文不在网页转载</span></div><span className="open-label">导引</span></summary>
              <div className="planet-content"><div className="original">
                <span>AI 阅读导引</span>
                <p>这篇文章把短视频的 0 到 1 拆成对标、逆向拆解、复刻和反馈，和今天要发布的最简单视频 demo 直接相关。它适合用来限制范围，而不是再增加一套长期学习计划。</p>
                <p><strong>阅读重点：</strong>只看作者如何从第一条有瑕疵的作品获得结果，再根据反馈修正；不要把流量案例直接当成普遍规律。</p>
                <p><strong>阅读问题：</strong>今天的视频 demo 哪一部分已经有真实经历支撑，哪一部分仍然只是自己的猜测？</p>
                <p><strong>适用边界：</strong>这是 AI 阅读导引，不代表用户已阅读、认同或实践文章观点；文中结果来自单个案例，也不能证明照做必然获得相同流量。</p>
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
                  <p><strong>资料状态：</strong>已读取 8 月 20 日至 26 日全部七份本地日记，没有缺失日期，也没有读取今日日记。</p>
                  <p><strong>可确认事实：</strong>昨天没有留下可验证的核心输出；华图培训已改到明天下午，原定 Trae 活动取消。</p>
                  <p><strong>边界：</strong>昨天的低产出同时发生在睡眠节奏未恢复、任务价值感不足和部分外部安排变化的背景中，不能用单一动机解释。</p>
                  <p className="advice"><strong>AI 建议：</strong>今天优先恢复近七天已明确承诺、但尚未完成的视频 demo，并只做明天培训的必要确认。</p>
                </div>
              </details>
              <article className="review-card static-review-card" id="seven-day-trend">
                <h3>近七天趋势</h3>
                <div className="trend-list">
                  <div><strong>资料范围</strong><p>2026 年 8 月 20 日至 26 日，七份记录齐全；不包含今日日记。</p></div>
                  <div><strong>重复模式</strong><p>连续多日增加了输入、工具、娱乐或解释，但原本明确要发布的最简单视频 demo 仍没有完成证据。</p></div>
                  <div><strong>反例</strong><p>期间完成过备课稿、用户访谈课程和真实用户调研；问题不是完全没有行动，而是内容发布还没有进入外部反馈。</p></div>
                  <div><strong>边界</strong><p>睡眠不足、任务模糊和现实回报不清都可能降低启动，不应只归因为意志力或逃避。</p></div>
                </div>
              </article>
              <article className="review-card static-review-card diagnosis" id="cognitive-observation">
                <h3>AI 认知观察</h3>
                <div>
                  <p><strong>证据等级：</strong>重复模式。</p>
                  <p><strong>候选解释：</strong>内容任务没有明确的观众问题和最小发布标准时，容易被目标更清楚、反馈更即时的活动替代。</p>
                  <p><strong>替代解释：</strong>睡眠节奏不稳、若干任务本身回报低或已经取消，也足以让注意力转向别处。</p>
                  <p><strong>适用边界：</strong>这是基于多日日记的可修订 AI 推断，不是人格、心理或医疗结论。</p>
                </div>
              </article>
              <article className="review-card static-review-card diagnosis" id="minimum-action">
                <h3>最小行动建议</h3>
                <div>
                  <p><strong>行动：</strong>新建视频 demo 文档，先写完卡片中的三个填空句。</p>
                  <p><strong>最大范围：</strong>10 分钟；先不继续搜索资料，也不要求句子完整或正确。</p>
                  <p><strong>可观察产物：</strong>一份不是 AI 代写的三句原始判断。</p>
                  <p><strong>完成标准：</strong>三个填空句都有内容。</p>
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
                <p><strong>AI 建议：</strong>近七天已经出现继续输入、但原定视频 demo 尚未发布的记录；再增加课程会继续推迟外部反馈，因此今天不新增推荐。</p>
                <p><strong>今天只练习：</strong>围绕卡片中已经给出的具体问题，先写三句原始判断，再录制并发布一条不超过 60 秒的视频 demo。</p>
                <p><strong>适用边界：</strong>这不代表课程无用；只有现实实验暴露出明确方法缺口后，再按缺口选择资源。</p>
              </div>
            </article>}
          </section>

          <section className="section" id="hotlist">
            <div className="section-heading"><div><p className="eyebrow">HOT LIST</p><h2>热点榜单</h2></div><p>2026 年 8 月 26 日完整榜单</p></div>
            <a className="hotlist" href="/daily-briefing/hotlist/2026-08-26.html" aria-label="打开热点榜单"><span>昨日榜单</span><strong>查看 2026 年 8 月 26 日完整榜单</strong><span className="arrow">↗</span></a>
          </section>

          <footer><p>先完成一条真实发布，<br />再用外部反馈决定下一步。</p><span>每日 09:00 更新 · 完整内容折叠保存</span></footer>
        </div>
      </div>
    </main>
  );
}
