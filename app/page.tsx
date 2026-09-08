import { type ReactNode } from "react";
import { cloudBriefMarkdownToday } from "./cloud-brief-current";
import { planetPostsToday } from "./planet-current";

const briefDate = "2026-09-08";

const topics = [
  {
    number: "01",
    label: "主推",
    title: "PPT 失效以后，我才看见“备课完成”的真实标准",
    basis: "首次正式课堂出现设备失效与时间缩短；来源：昨日课堂经历与本人复盘。",
    source: "真实课堂经历、本人复盘、一次未预料到的失败",
    why: "经历具体，判断正在形成，而且能帮助同样依赖幻灯片的新教师、培训者或演示者。",
    angle: "从“试讲时设备正常，所以我默认正式课堂也会正常”讲起，说明现实环境怎样推翻这项默认假设。",
    judgment: "准备不足不只是内容没写完；没有设备失败后的替代方案，也会让课堂目标失去保障。",
    evidence: "2026-09-07 日记中的首次课堂、PPT 无法播放以及“没有 Plan B”的复盘。",
    risk: "补一项真正试过的无 PPT 方案及结果；不要把一次课堂扩大为所有课堂都不该使用 PPT，也不要暴露工作单位与学生信息。",
    done: "保存一版 3–5 分钟内部录音或视频草稿，包含原假设、现场失败、当前判断和下一次准备验证的 Plan B；文件存在即完成，不要求发布。",
    tone: "mint",
  },
  {
    number: "02",
    label: "备选",
    title: "省时间之前，先回答省下来的时间要去哪里",
    basis: "两次出现同一追问；来源：9 月 4 日与 9 月 7 日日记。",
    source: "近期生活与工作中的真实时间分配观察",
    why: "这不是抽象反效率，而是本人已经连续两次发现“只想减少改动或更快完成，却说不清时间最终用途”。",
    angle: "选一次等待别人先给方案或优化流程的经历，追踪省下来的时间实际去了哪里。",
    judgment: "节省时间本身不是最终价值，还要看省下来的时间被重新分配给了什么。",
    evidence: "2026-09-04、2026-09-07 日记。",
    risk: "需要一次明确的前后对照；避免把休息、等待协作或娱乐一概描述成浪费。",
    done: "保存一版 60–90 秒原始录音，讲清一次效率优化、实际时间去向和修正后的判断；文件存在即完成。",
    tone: "blue",
  },
  {
    number: "03",
    label: "备选",
    title: "课堂互动不是把问题问得更多",
    basis: "昨日课堂出现一次具体问题；来源：首次正式课堂观察。",
    source: "一次课堂互动不理想的现场观察",
    why: "问题真实且可继续实验，但当前只有一次信号，因此只作为备选。",
    angle: "从“我以为多提问、点名就能活跃课堂”这一假设说起，记录学生实际反应。",
    judgment: "尚未形成稳定判断；目前只能确认单靠提问与点名没有达到预期。",
    evidence: "2026-09-07 日记。",
    risk: "先试一种替代互动方式，并观察学生是否真的更参与；不能把一次课堂写成学生或教师的稳定特征。",
    done: "只有在完成一次替代互动实验后，保存一版 60–90 秒录音，包含原假设、观察结果和仍未确定的问题；否则维持待验证状态。",
    tone: "peach",
  },
];

const todoItems = [
  {
    number: "01",
    title: "为下一次课堂留下一份不依赖 PPT 的备用提纲",
    basis: "昨日课堂中 PPT 无法使用，你明确复盘自己没有 Plan B；目前没有看到备用提纲已经完成。",
    missing: "事实只支持“备用方案尚未形成可检查结果”，不推断你是因为拖延或不重视。",
    next: "另存一页备用提纲，只写开场、三个核心点、一个互动问题和结尾；确保离线可打开。",
    done: "存在一份不依赖 PPT、离线可读的单页提纲。",
    stop: "提纲能支撑一次完整讲述就停止，不继续扩写版式或查新资料。",
    tone: "mint",
  },
  {
    number: "02",
    title: "选一种不同于连续提问的互动方式，写成一次实验",
    basis: "昨日你记录了单靠提问和点名较单调，并明确写下需要想办法迭代；目前只有查资料，没有实际实验结果。",
    missing: "尚不能断定哪种互动一定有效，只能确认原方式没有达到预期。",
    next: "从已有资料中只选一种互动方式，写下具体做法和一个可观察信号，留给下一次课堂验证。",
    done: "留下“一种做法＋一个观察信号”的两行实验卡。",
    stop: "选定一种即可，不继续比较更多方法；结果等真实课堂后再判断。",
    tone: "blue",
  },
  {
    number: "03",
    title: "把下月活动与宣传内容先拆成待确认问题",
    basis: "昨日收到下月活动与宣传内容的任务，但因为尚无想法且在等他人意见，没有形成初稿或问题清单。",
    missing: "等待协作可能合理；这里只确认目前缺少一个可用于沟通的起点。",
    next: "写下目标对象、目的、时间、可用资源和谁来决定这五个待确认问题，作为下一次沟通提纲。",
    done: "存在一张五问清单，不要求今天完成整套方案。",
    stop: "五个问题写完即停止，不在信息不足时代替他人完成全部方案。",
    tone: "peach",
  },
];

const learningResources: Array<{ type: string; title: string; meta: string; intro: string; why: string; focus: string[]; action: string; boundary: string; source: string; sourceLabel: string }> = [];

const weather = { location: "南宁", condition: "多云有阵雨", temperature: "25–33℃", icon: "🌦️" };

const planetPosts = planetPostsToday;

const deepReadAtoms = [
  { atom: "业务结构先于 AI 自动化", relation: "今天已有真实课堂失败与本人复盘，优先把现实输入说清楚，比继续寻找新的内容工具更符合该原子的边界。", question: "在这段课堂经历中，哪些判断必须由本人保留，哪些整理动作才适合交给 AI？" },
  { atom: "公开预测应保存证据与修订轨迹", relation: "昨日课堂只提供一次信号；把下一次 Plan B 与互动实验的预期结果先写清楚，能避免一次成败被扩大成稳定结论。", question: "下一节课开始前，哪一项判断能够写成“预期—证据—修正”的最小记录？" },
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
    map.set(part.slice(0, newline).trim(), part.slice(newline + 1).trim().replace(/<!-- DAILY_BRIEF_END -->[\s\S]*$/, "").trim());
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
const signalRadarLabel = signalRadar.includes("### 社区日") ? "社区日" : signalRadar.includes("### 人物日") ? "人物日" : "实验雷达";
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
              <div className="nav-sub">{topics.map((topic, i) => <a href={"#topic-" + (i + 1)} key={topic.title}>选题｜{topic.label}｜{topic.title}</a>)}{todoItems.map((item, i) => <a href={"#todo-" + (i + 1)} key={item.title}>待做｜{item.title}</a>)}<a href="#templates">模版</a></div>
            </details>
            <details className="nav-group" data-nav-group>
              <summary className="nav-title"><span className="nav-icon icon-briefing">▤</span><span>每日资讯</span><span className="nav-chevron">⌄</span></summary>
              <div className="nav-sub">{creatorUpdates.length ? creatorUpdates.map((item, i) => <a href={"#creator-" + (i + 1)} key={item.title}>{cleanTitle(item.title)}</a>) : creatorUpdatesRaw ? <a href="#creator-updates">指定博主动态</a> : null}{industryStories.map((item, i) => <a href={"#story-" + (i + 1)} key={item.title}>{i + 1}. {cleanTitle(item.title)}</a>)}{productObservations.map((item, i) => <a href={i === 0 ? "#product-observation" : "#product-observation-" + (i + 1)} key={item.title}>{item.title}</a>)}{signalRadar ? <a href="#signal-radar">信息源实验雷达</a> : null}<a href="#early-action">今日行动建议</a></div>
            </details>
            <details className="nav-group" data-nav-group>
              <summary className="nav-title"><span className="nav-icon icon-planet">✦</span><span>姜胡说</span><span className="nav-chevron">⌄</span></summary>
              <div className="nav-sub">{planetPosts.length ? planetPosts.map((post) => <a href={"#planet-" + post.index} key={post.index}>{post.title}</a>) : <a href="#planet-status">昨日无星主更新</a>}<a href="#xiaobaotong-1">小报童｜拍了100条还在原地踏步？</a></div>
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
              <div className="nav-sub"><a href="#hotlist">查看 2026 年 9 月 7 日完整榜单</a></div>
            </details>
          </nav>
          <p className="sidebar-note">点小标题直达正文 · 折叠内容会自动展开</p>
        </aside>

        <div className="page" id="top">
          <section className="hero">
            <div className="date-block"><div className="date-day">08</div><div><p className="date-month">2026 · 09</p><p className="date-week">星期二</p></div></div>
            <div className="hero-copy"><p className="eyebrow">TODAY&apos;S DIRECTION</p><h1>PPT 失效以后，<br />我才看见“备课完成”的真实标准。</h1><p className="judgment">第一次正式课堂已经给出具体证据：准备完成不只是在电脑里写完内容，还要为现场失效保留替代路径。今天只把这段经历和下一次 Plan B 录成第一版。</p></div>
            <div className="hero-weather" aria-label={weather.location + "当天天气：" + weather.condition + "，" + weather.temperature}>
              <span className="weather-icon">{weather.icon}</span>
              <span className="weather-copy"><strong>{weather.condition}</strong><small>{weather.location} · {weather.temperature}</small></span>
            </div>
          </section>

          <section className="section" id="today">
            <div className="section-heading compact-heading"><div><p className="eyebrow">TODAY&apos;S PLAN</p><h2>今日计划</h2></div><p>选题建议＋昨日遗漏；不安排时间表</p></div>
            <div className="time-block-heading plan-subheading"><div><p className="eyebrow">CONTENT TOPICS</p><h3>今日选题</h3></div><p>1 个主推＋2 个备选</p></div>
            <div className="brief-list topic-list">{topics.map((topic, i) => <details className={"brief-item topic-card " + topic.tone} id={"topic-" + (i + 1)} key={topic.number}>
              <summary><span className="brief-index">{topic.number}</span><span className="brief-main"><span className="pill">{topic.label}</span><strong>{topic.title}</strong><span>{topic.basis}</span></span><span className="plus">＋</span></summary>
              <div className="brief-content">
                <p><strong>主要素材类型：</strong>{topic.source}</p>
                <p><strong>为什么近期值得拍（AI 推荐）：</strong>{topic.why}</p>
                <p><strong>切入角度：</strong>{topic.angle}</p>
                <p><strong>核心观点（用户当前判断）：</strong>{topic.judgment}</p>
                <p><strong>可引用素材：</strong>{topic.evidence}</p>
                <p><strong>还缺什么 / 表达风险：</strong>{topic.risk}</p>
                <p><strong>具体怎么做：</strong>找出一段真实经历 → 确定一个观点 → 找一条证据 → 录制。</p>
                <p><strong>完成标准：</strong>{topic.done}</p>
              </div>
            </details>)}</div>
            <div className="time-block-heading plan-subheading"><div><p className="eyebrow">UNFINISHED FROM YESTERDAY</p><h3>待做事项</h3></div><p>只恢复昨日明确发现、尚未留下结果的问题</p></div>
            <div className="brief-list todo-list">{todoItems.map((item, i) => <details className={"brief-item todo-card " + item.tone} id={"todo-" + (i + 1)} key={item.number}>
              <summary><span className="brief-index">{item.number}</span><span className="brief-main"><span className="pill">昨日遗漏</span><strong>{item.title}</strong><span>{item.basis}</span></span><span className="plus">＋</span></summary>
              <div className="brief-content">
                <button className="todo-check" type="button" data-todo-check data-todo-id={item.title} aria-pressed="false"><span className="todo-check-icon" aria-hidden="true">✓</span><span data-todo-check-label>标记完成</span></button>
                <p><strong>昨日依据（事实）：</strong>{item.basis}</p>
                <p><strong>为何仍未完成（事实边界）：</strong>{item.missing}</p>
                <p><strong>AI 建议的最小下一步：</strong>{item.next}</p>
                <p><strong>完成标准：</strong>{item.done}</p>
                <p><strong>停止条件：</strong>{item.stop}</p>
                <p><strong>隐私处理：</strong>已移除具体单位、人员与地点。</p>
              </div>
            </details>)}</div>
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
              <summary><span className="brief-index">行动</span><span className="brief-main"><span className="pill">今日行动建议</span><strong>完成一张“小众问题经济性卡”</strong></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(actionAdvice, "action")}</div>
            </details>
          </section>

          <section className="section" id="planet"><div className="section-heading"><div><p className="eyebrow">JIANG HUSHUO</p><h2>姜胡说</h2></div><p>昨日无星主更新；保留 1 篇相关小报童导读</p></div><p><a className="archive-link" href="/daily-briefing/knowledge/2026-09-07/26-09-07姜胡说知识星球.md" target="_blank" rel="noopener noreferrer">查看 9 月 7 日原始归档 ↗</a></p>{planetPosts.length ? <div className="planet-list">{planetPosts.map((post) => <details className="planet-card" id={"planet-" + post.index} key={post.index}><summary><span className="planet-number">{post.index}</span><span><small>{post.author} · {post.published}</small><strong>{post.title}</strong></span><span className="planet-kind">原文</span></summary><div className="planet-body">{post.body.split("\n").map((line, i) => line ? <p key={i}>{line}</p> : <br key={i} />)}{post.images.map((src) => <img src={src} alt={post.title + " 原始图片"} key={src} />)}</div></details>)}</div> : <article className="review-card static-review-card" id="planet-status"><h3>昨日无星主更新</h3><div><p>2026 年 9 月 7 日精确日期归档已生成，记录为“今日无星主更新”。没有使用其他日期内容代替。</p></div></article>}
            <details className="planet-card" id="xiaobaotong-1"><summary><span className="planet-number">读</span><span><small>小报童 · 姜胡说 · 2026-07-27 11:52:34</small><strong>拍了100条还在原地踏步？复制这段prompt</strong></span><span className="planet-kind">导读</span></summary><div className="planet-body"><p><strong>为什么今天相关（AI 推荐）：</strong>昨日首次课堂已经暴露 Plan B 与互动问题。文章强调一条记录只能提供信号，多次结果才能确认卡点，并建议每次只修改一个可验证问题；这能帮助把后续课堂从泛泛“做得更好”改成连续实验。</p><p><strong>阅读重点：</strong>区分单次信号与重复模式；每次只记录一个最值得修正的问题、采取一个具体动作，并说明用什么结果判断有效。</p><p><strong>适用边界：</strong>文章原本面向短视频数据诊断，课堂没有同样的完播率与点击率，不能照搬指标；应改用学生参与、任务完成或课堂中断等可观察结果。</p><SourceLink href="https://xiaobot.net/post/9614aedb-ee01-4ec2-b349-dc2505d0e9f4" label="姜胡说《拍了100条还在原地踏步？复制这段prompt》" /></div></details>
          </section>

          <section className="section" id="review"><div className="section-heading"><div><p className="eyebrow">PERSONAL REVIEW</p><h2>复盘</h2></div><p>事实、候选解释与 AI 建议分开呈现</p></div><div className="review-grid"><details className="review-card" id="yesterday-review" open><summary>昨日复盘</summary><div><p>昨日完成首次正式课堂。晨会延误、教室位置不清和设备存储爆满共同压缩了授课时间，PPT 最终无法使用。本人随后明确记录了两个改进点：缺少 Plan B，以及仅靠提问难以维持参与；之后查找了相关书籍资料。面对另一个尚无明确结构的活动任务，当天没有形成可检查草稿。</p><p>昨日记录中没有近期个人内容草稿已经录制或发布的事实证据，因此不把它写成已完成。</p></div></details><article className="review-card static-review-card" id="seven-day-trend"><h3>近七天趋势</h3><div><p>近七天里，试讲、线下交流、直播记录和正式课堂等真实场景持续产生具体问题与判断修正。与此同时，当任务没有明确对象、验收标准或第一步时，仍容易等待他人先提供方向，或转向继续查资料。</p><p>这组证据更支持“真实场景能让问题具体化”的候选解释；但新岗位的信息不足、睡眠和现实负荷仍是重要替代解释，不能把它写成稳定人格结论。</p></div></article><article className="review-card static-review-card diagnosis" id="cognitive-observation"><h3>AI 认知观察</h3><div><p><strong>证据等级：</strong>重复模式，并出现新的现实场景证据。</p><p><strong>候选解释：</strong>真实对象、限制和即时结果会降低问题定义成本，让下一步从抽象学习变成具体修正。</p><p><strong>替代解释：</strong>外部角色与时间约束本身提供了结构；在入职初期等待同事意见也可能是合理协作。</p><p><strong>当前观察：</strong>昨天最有价值的输出不是一节课“顺利完成”，而是现场失败被转换成两个可验证的改进问题。</p></div></article><article className="review-card static-review-card diagnosis" id="minimum-action"><h3>最小行动建议</h3><div><p>如果选择主推题，只录一遍：找出“正式课堂设备失效”的真实经历 → 明确“备课完成需要替代路径”的当前观点 → 找一条下一次可验证的 Plan B → 录制。</p><p><strong>完成标准：</strong>保存一版 3–5 分钟原始草稿即停止；不要求剪辑、发布或先补一门课程。</p></div></article><article className="review-card static-review-card diagnosis" id="action-diagnosis"><h3>AI 执行力诊断 / 建议</h3><div><p>今天不新增工具或方法。先把昨天已经发生的课堂错误变成一份可检查表达；录完后再根据真实卡点判断缺的是结构、证据还是表达。</p></div></article></div></section>

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
                <p><strong>AI 建议：</strong>昨日已经有足够具体的真实课堂经历、失败证据与当前判断。新增课程会增加准备，却不能直接解决“把经历、判断和下一次验证说清楚”这一表达缺口。</p>
                <p><strong>今天只练习：</strong>围绕“PPT 失效以后，我才看见备课完成的真实标准”录一遍 3–5 分钟原始草稿。只讲四点：原来怎样判断备课完成、现场发生了什么、现在的判断是什么、下一节课准备用哪一种 Plan B 验证。</p>
                <p><strong>适用边界：</strong>如果录制暴露出明确的知识或表达缺口，再针对该缺口寻找资源；今天不为填满栏目而推荐课程。</p>
              </div>
            </article>}
          </section>

          <section className="section" id="hotlist">
            <div className="section-heading"><div><p className="eyebrow">HOT LIST</p><h2>热点榜单</h2></div><p>2026 年 9 月 7 日完整榜单</p></div>
            <a className="hotlist" href="/daily-briefing/hotlist/2026-09-07.html" aria-label="打开热点榜单"><span>昨日榜单</span><strong>查看 2026 年 9 月 7 日完整榜单</strong><span className="arrow">↗</span></a>
          </section>

          <footer><p>PPT 失效以后，<br />我才看见“备课完成”的真实标准。</p><span>每日 09:00 更新 · 完整内容折叠保存</span></footer>
        </div>
      </div>
    </main>
  );
}
