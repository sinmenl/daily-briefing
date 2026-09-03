import { type ReactNode } from "react";
import { cloudBriefMarkdownToday } from "./cloud-brief-current";
import { planetPostsToday } from "./planet-current";

const briefDate = "2026-09-03";

const tasks = [
  {
    number: "01",
    title: "完成今天的学校课程，并留下五行课后记录",
    source: "AI 建议",
    why: "9 月 2 日已经答应今天到学校上一节课，这是一项有明确对象和外部结果的现实义务。近七天在任务缺少明确下一步时，时间较容易转向即时反馈活动；昨天面对明确的试讲要求时则很快完成了录制。今天不增加新的创作任务，先把已答应的课程完成。",
    question: "",
    steps: ["出发前确认上课时间、校址、年级、课程主题和联系人；缺一项就发消息补齐。", "打开已经拿到的课本或课件，只标出开场、核心讲解和结束练习三处，不重做整套材料。", "下课后记录五行事实：实际讲了什么、学生在哪一步卡住、哪一句解释有效、哪一步失控、下次只改什么。"],
    deliverable: "一节实际完成的课，以及一份五行课后记录。",
    done: "已经到场完成课程，并写下五项具体事实；不以‘感觉讲得好不好’作为完成条件。",
    first: "打开与学校联系人的聊天，逐项核对时间、地点、年级、主题和联系人",
    time: "备课最多 45 分钟；课后记录最多 10 分钟",
    tone: "mint",
  },
];

const learningResources: Array<{ type: string; title: string; meta: string; intro: string; why: string; focus: string[]; action: string; boundary: string; source: string; sourceLabel: string }> = [];

const weather = { location: "南宁", condition: "阴到多云", temperature: "22–31℃", icon: "☁️" };

const previousPlanetPosts = [
  { index: "1", author: "大胡子", published: "2026-08-31 16:48", title: "重新调整了‘灵感’流", body: `重新调整了 “灵感”流：

iPhone 录音（左侧快捷键、siri） → iCloud 同步 → SenseVoice 转写 → LLM 净稿(qwen3.8-27b) → 灵感库。`, images: ["/daily-briefing/knowledge/2026-08-31/images/[1] 大胡子 -1.png", "/daily-briefing/knowledge/2026-08-31/images/[1] 大胡子 -2.jpg"] },
  { index: "2", author: "大胡子", published: "2026-08-31 16:58", title: "真正问题是你的思考和行动能力", body: `从今天开始，我会对所有入群超过100天的老伙计的问题进行抽查。
凡是问题里：没有自己的思考，没有作过尝试的问题，我不但不会回答，还会拿出来作为反面经典案例给大家展示：你问的那些问题根本就不是问题。

真正问题是：你的思考和行动能力。

所以，
要不然改变你惯有的行为模式，要不然寄希望于我没有抽查到你。

解答问题是最容易的事。你缺的从来不是知识，而是独立思考的能力。
无论是做自媒体还是变现，遇到问题下意识的第一反应就是向外求助，那你是做不成事的。`, images: [] },
  { index: "3", author: "大胡子", published: "2026-08-31 21:52", title: "专注模式开关", body: `很多人和我抱怨说没有精力，
其实你的精力都被浪费走了。

我现在个人的操作系统只安装了这几个软件：Omarchy + Pi + Obsidian。而且在我工作时间里，除了固定的几个工作软件，全都是断网的。就是没有办法联网，提前就设好的。

怎么做到的呢？
把下面这些提示词扔给你的本地 Agent。然后让它根据你的情况进行修改。

-------------------------

【任务书——从这里开始整段复制】
帮我实现"专注模式"开关，要求如下：
在门卫的订阅扩展配置里新增一个 select 组（agent 先自行检测本机代理客户端、内核与配置目录，按实际路径执行）：

组名 Focus，候选只有两项：DIRECT（默认）、REJECT。
在规则前置区(优先级最高,必须排在 GEOIP 和兜底规则之前)加飞机场主链路的 6 条域名（主站 / 接口 / 图床 / 视频 CDN ×2 / 直播 CDN），全部指向 Focus：

DOMAIN-SUFFIX,douyin.com

DOMAIN-SUFFIX,snssdk.com

DOMAIN-SUFFIX,amemv.com

DOMAIN-SUFFIX,douyinpic.com

DOMAIN-SUFFIX,douyinvod.com

DOMAIN-SUFFIX,zjcdn.com
重启门卫使配置生效（注意：改完配置文件必须重启应用，API 热重载可能被 GUI 覆盖）。
在 ~/.zshrc 里加两个别名：

focus_on = curl -X PUT :<端口>/proxies/Focus -d '{"name":"REJECT"}'

focus_off = 同一条命令，name 换成 DIRECT

端口看配置里的 external-controller（常见默认 9097 或 9090）；如果外部控制没开，先在设置里打开。
自检并打印结果：

focus_on 之后 curl -x -sI 应该失败或超时；

focus_off 之后同一条 curl 应该返回 200 或 3xx。
完成后输出改动清单：改了哪些文件、加了几条规则、自检结果。不要动其他任何配置。
【任务书——到这里结束】
不用 agent 的人肉版，三步：
门卫界面 → 订阅右键 → 编辑代理组 → 加 Focus 组（DIRECT / REJECT）
编辑规则 → 前置区加那 6 条，指向 Focus
重启门卫。想专注时，把 Focus 组点成 REJECT；结束点回 DIRECT。全程不用命令行。
你是靠飞机场吃饭的创作者的话，多加一条，放在 6 条最前面：
DOMAIN,creator.douyin.com,DIRECT
工作室侧门常开——这条域名是创作入口，焊死的只是刷的前门。
iPhone 上的话，用小火箭：复制你现在的配置改名“专注版”，在 [Rule] 最顶部把同样 6 条写成 REJECT 结尾，想专注时切到专注版。提醒一句：手机上创作和刷是同一扇门，只能整体开关，回评论传视频放到专注窗口外。
两个诚实的局限：还有一个飞机场长在聊天工具的肚子里，跟你的日常聊天走同一条水管，代理层切不开；VPN 关了整套就失效。
还有一个小彩蛋：机场订阅每次更新，Focus 会自动跳回 DIRECT——专注模式自动解除，算是安全默认。
今晚 focus_on，明早 focus_off。`, images: [] },
];

void previousPlanetPosts;

const archivedPlanetPosts = [
  { index: "1", author: "大胡子", published: "2026-09-01 10:53", title: "北京线下活动只面向过往成员与行动证明", body: `说明一下，北京线下活动，不对今天和今天之后加入的老伙计开放。
线下活动是为过往老伙计们提供的福利。
不是新人加入的理由。我无意，更不想因此让更多的朋友加入星球。

同时，根据以往的惯例，即便你在星球里，行动力仍然是最基本的要求。
你必须提供过往你的行动证明（我之前留过作业的，从今天开始补作业的，一律不算。请不要给我私信，不要给我留言，不要和我哭穷，行动力是最基本的门槛）。
这次加入的人，我会一个一个审核（欢迎无法通过审核的老伙计随时退出星球。事实上，我不希望更多的人因为这次线下活动加入星球；但我欢迎更多因为没有行动无法参加这次活动的老伙计退出星球）。

因为线下活动新加入的朋友，请在3天内尽快退出（虽然3天后仍然可以随时退费，但星球平台超过3天手续费是不退的，你只能拿到我获得的那部分费用）。
不要造成财务上的损失。`, images: [] },
  { index: "2", author: "大胡子", published: "2026-09-01 22:30", title: "用 iPad 调用本地大模型", body: `随时随地，
你都可以使用iPad 调用本地大模型获得一些建议。

这张图来自直播时的现场演示。`, images: ["/daily-briefing/knowledge/2026-09-01/images/[2] 大胡子 -1.jpg"] },
];

void archivedPlanetPosts;

const planetPosts = planetPostsToday;

const deepReadAtoms = [
  { atom: "执行提速后应把效率与判断分开测量", relation: "今天完成一节课是执行结果；学生在哪里卡住、哪句解释有效，才是判断证据。课后五行记录用来区分这两层。", question: "完成速度提高以后，你用什么证据判断结果也变得更可靠？" },
  { atom: "自然语言 Skill 属于可执行供应链而非普通文档", relation: "这与今天的现实教学任务没有直接关系，不把它转成今日任务；以后安装或发布 Skill 时，可用它检查权限、依赖和外传路径。", question: "如果一个 Skill 没有传统代码，它仍能通过哪些指令改变 Agent 的现实行为？" },
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
              <div className="nav-sub"><a href="#hotlist">查看 2026 年 9 月 2 日完整榜单</a></div>
            </details>
          </nav>
          <p className="sidebar-note">点小标题直达正文 · 折叠内容会自动展开</p>
        </aside>

        <div className="page" id="top">
          <section className="hero">
            <div className="date-block"><div className="date-day">03</div><div><p className="date-month">2026 · 09</p><p className="date-week">星期四</p></div></div>
            <div className="hero-copy"><p className="eyebrow">TODAY&apos;S DIRECTION</p><h1>先完成一节真实的课，<br />再从现场留下判断证据。</h1><p className="judgment">今天只完成已经答应的学校课程；课后用五行事实记录学生卡点、有效解释与下一次只改的一处。</p></div>
            <div className="hero-weather" aria-label={weather.location + "当天天气：" + weather.condition + "，" + weather.temperature}>
              <span className="weather-icon">{weather.icon}</span>
              <span className="weather-copy"><strong>{weather.condition}</strong><small>{weather.location} · {weather.temperature}</small></span>
            </div>
          </section>

          <section className="section" id="today">
            <div className="section-heading compact-heading"><div><p className="eyebrow">TODAY&apos;S PRIORITY</p><h2>今天只做一件事</h2></div><p>完成现实义务，留下现场证据</p></div>
            <div className="task-grid task-grid--one">{tasks.map((task, i) => <article className={"task-card task-card--detailed " + task.tone} id={"task-" + (i + 1)} key={task.number}>
              <div className="task-card-head"><span className="task-number">{task.number}</span><span className="task-source">{task.source}</span></div>
              <h3>{task.title}</h3>
              <p className="task-why"><strong>为什么是今天：</strong>{task.why}</p>
              {task.question ? <p className="task-question"><strong>今天要回答的问题：</strong>{task.question}</p> : null}
              <div className="task-detail"><strong>具体怎么做：</strong><ol>{task.steps.map((step) => <li key={step}>{step}</li>)}</ol></div>
              <div className="task-result"><p><strong>交付物：</strong>{task.deliverable}</p><p><strong>完成标准：</strong>{task.done}</p></div>
              <div className="task-meta"><span>第一步</span><strong>{task.first}</strong></div><div className="task-time">{task.time}</div>
            </article>)}</div>
            <div className="time-block-heading" id="schedule-heading"><div><p className="eyebrow">TIME BLOCKS</p><h3>今日时间块</h3></div><p>围绕一节真实课程安排</p></div>
            <section className="schedule" id="schedule"><div><span>出发前</span><p>确认时间、地点、年级、主题和联系人；备课只标记开场、核心讲解和结束练习，最多 45 分钟。</p></div><div><span>上课时</span><p>完成真实教学，不临时扩充目标；留意学生具体卡点和哪一句解释真正有效。</p></div><div><span>下课后｜10 分钟</span><p>写五行事实：讲了什么、哪里卡住、什么有效、什么失控、下次只改什么；写完即结束主要任务。</p></div></section>
            <details className="brief-item" id="risk"><summary><span className="brief-index">风险</span><span className="brief-main"><span className="pill">今日边界</span><strong>不要把备课扩张成重做整套材料</strong><span>只核对必要信息、标记三处结构并完成课程</span></span><span className="plus">＋</span></summary><div className="brief-content"><p>主要风险是因为第一次真实上课而继续补资料、重做课件，挤压休息和出发时间。</p><p>今天的完成标准是到场完成课程并写下五项事实，不以“感觉讲得完美”作为条件。</p></div></details>
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
                <details className="brief-item" id="template-conversation-reflection">
                  <summary><span className="brief-index">07</span><span className="brief-main brief-main--compact"><span className="pill template-icon" aria-hidden="true">💬</span><strong>对话结束思考四件事</strong></span><span className="plus">＋</span></summary>
                  <div className="brief-content"><ol className="template-prompts">
                    <li>我原来怎么想？</li>
                    <li>这次对话让我改了什么判断？</li>
                    <li>哪个事实/案例支撑了这个变化？</li>
                    <li>下一次遇到什么情况，我要怎么做？</li>
                  </ol></div>
                </details>
                <details className="brief-item" id="template-conversation-ai-prompt">
                  <summary><span className="brief-index">08</span><span className="brief-main brief-main--compact"><span className="pill template-icon" aria-hidden="true">🧠</span><strong>对话结束的AI提示词</strong></span><span className="plus">＋</span></summary>
                  <div className="brief-content template-workflow">
                    <section>
                      <h4>请从这次对话里提炼：</h4>
                      <ol className="template-prompts">
                        <li>我原来的判断</li>
                        <li>被什么事实动摇</li>
                        <li>我现在更准确的判断</li>
                        <li>一个未来可复用的判断规则</li>
                        <li>一个还没验证的问题</li>
                      </ol>
                    </section>
                    <section>
                      <p>不要总结整段对话，只保留真正发生认知变化的部分。如果没有认知变化，就明确说“这次没有形成新判断”。</p>
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
              <summary><span className="brief-index">行动</span><span className="brief-main"><span className="pill">今日行动建议</span><strong>完成 Skill 权限实验并写成案例卡</strong></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(actionAdvice, "action")}</div>
            </details>
          </section>

          <section className="section" id="planet"><div className="section-heading"><div><p className="eyebrow">JIANG HUSHUO</p><h2>姜胡说</h2></div><p>昨日 5 条星主原文</p></div><p><a className="archive-link" href="/daily-briefing/knowledge/2026-09-02/26-09-02姜胡说知识星球.md" target="_blank" rel="noopener noreferrer">查看 9 月 2 日原始归档 ↗</a></p><div className="planet-list">{planetPosts.map((post) => <details className="planet-card" id={"planet-" + post.index} key={post.index}><summary><span className="planet-number">{post.index}</span><span><small>{post.author} · {post.published}</small><strong>{post.title}</strong></span><span className="planet-kind">原文</span></summary><div className="planet-body">{post.body.split("\n").map((line, i) => line ? <p key={i}>{line}</p> : <br key={i} />)}{post.images.map((src) => <img src={src} alt={post.title + " 原始图片"} key={src} />)}</div></details>)}</div></section>

          <section className="section" id="review"><div className="section-heading"><div><p className="eyebrow">PERSONAL REVIEW</p><h2>复盘</h2></div><p>事实与 AI 建议分开呈现</p></div><div className="review-grid"><details className="review-card" id="yesterday-review" open><summary>昨日复盘</summary><div><p>9 月 2 日睡眠约 7 小时，参加了魔方培训、游泳并继续练习魔方；随后完成了学校临时要求的试讲视频。学校提出今天到校上一节课，用户已经答应，并拿到课本与课件支持。这些是昨日记录中的事实；网页不据此推断课程效果。</p></div></details><article className="review-card static-review-card" id="seven-day-trend"><h3>近七天趋势</h3><div><p>8 月 27 日完成过一条从写稿、拍摄到发布的完整视频，说明完整交付能力存在。8 月 30 日至 9 月 1 日，输入、讨论或娱乐明显多于可验证输出，并多次出现“不知道下一步做什么”的描述。9 月 2 日在明确的外部试讲要求下很快完成录制，说明具体对象、外部反馈和短时限可能有助于启动。</p></div></article><article className="review-card static-review-card diagnosis" id="cognitive-observation"><h3>AI 认知观察</h3><div><p><strong>证据等级：</strong>重复模式。</p><p><strong>观察：</strong>近七天多次出现“没有明确下一步时，时间被即时反馈活动占据”的行为链；也有明确外部任务出现后快速行动的反例。</p><p><strong>候选解释：</strong>当前卡点可能更多在任务定义，而不是执行能力。</p><p><strong>替代解释：</strong>培训、通勤、睡眠与社交负荷本身也会压缩可用精力，不能仅凭任务完成与否判断动机。</p></div></article><article className="review-card static-review-card diagnosis" id="minimum-action"><h3>最小行动建议</h3><div><p><strong>行动：</strong>出发前确认五个确定项；下课后写五项事实。</p><p><strong>最大范围：</strong>备课最多 45 分钟，课后记录最多 10 分钟。</p><p><strong>可观察产物：</strong>一节实际完成的课程和一份五行记录。</p><p><strong>完成标准：</strong>到场完成课程，并记录讲了什么、哪里卡住、什么有效、什么失控、下次只改什么。</p></div></article><article className="review-card static-review-card diagnosis" id="action-diagnosis"><h3>AI 执行力诊断 / 建议</h3><div><p>今天不补做过去几天的内容任务，也不重新设计整周计划。把现实义务限定成“核对信息、标记三处课件结构、完成课程、写五行事实”，用明确结束点降低继续准备的诱惑。</p></div></article></div></section>

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
                <p><strong>AI 建议：</strong>今天的唯一现实任务是完成已经答应的学校课程并留下真实结果。继续看教学课程会增加输入，却不能替代真实课堂中的反馈。</p>
                <p><strong>今天只练习：</strong>下课后写五行：实际讲了什么、学生在哪一步卡住、哪一句解释有效、哪一步失控、下次只改什么。</p>
                <p><strong>适用边界：</strong>如果课后记录暴露出明确、反复出现的教学技能缺口，再针对该缺口寻找课程；今天不为填满栏目而增加资源。</p>
              </div>
            </article>}
          </section>

          <section className="section" id="hotlist">
            <div className="section-heading"><div><p className="eyebrow">HOT LIST</p><h2>热点榜单</h2></div><p>2026 年 9 月 2 日完整榜单</p></div>
            <a className="hotlist" href="/daily-briefing/hotlist/2026-09-02.html" aria-label="打开热点榜单"><span>昨日榜单</span><strong>查看 2026 年 9 月 2 日完整榜单</strong><span className="arrow">↗</span></a>
          </section>

          <footer><p>先完成一节真实的课，<br />再从现场留下判断证据。</p><span>每日 09:00 更新 · 完整内容折叠保存</span></footer>
        </div>
      </div>
    </main>
  );
}
