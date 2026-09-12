import { type ReactNode } from "react";
import { cloudBriefMarkdownToday } from "./cloud-brief-current";
import { planetPostsToday } from "./planet-current";

const briefDate = "2026-09-12";

const topics = [
  {
    number: "01",
    label: "主推",
    title: "工具是不是生产力，要看真实使用场景",
    basis: "昨日用实际使用频率、替代设备和用途完成一次设备去留判断；来源：真实使用与出售结果。",
    source: "购买前预期、长期真实用途、替代关系、一次实际出售决定",
    why: "它同时具备真实摩擦、本人已经写下的判断和清楚结果，也能帮助准备购买“生产力工具”却没有明确场景的人。本人明确准备开始日更，但是否最想先讲本题仍由本人决定。",
    angle: "从“买之前把它叫生产力，买回来却成了更大的娱乐入口”切入，复盘什么证据真正决定一台设备值不值得留。",
    judgment: "生产力标签不能替代稳定用途；如果已有设备覆盖主要任务，额外设备可能只是在增加娱乐入口。",
    evidence: "昨日的实际使用回顾、替代设备判断和完成交易下单的结果；已移除价格、活动与交易对象。",
    risk: "只有个人使用经验，没有长期屏幕时间或任务统计；不能外推为所有人都不需要平板。",
    done: "保存一版 3–5 分钟内部录音，讲清购买前预期、实际用途、一个反例和当前判断；文件存在即完成。",
    tone: "mint",
  },
  {
    number: "02",
    label: "备选",
    title: "真实问题先于 Agent、Skill 和知识库",
    basis: "连续两天把“先搭系统再找问题”修正为从真实问题、人工闭环和反馈开始；来源：线下交流与连续复盘。",
    source: "一次线下业务交流、连续两天的方法复盘、近期真实课堂摩擦",
    why: "本人已经形成明确判断，也有从抽象系统回到现实问题的亲历过程，能帮助正在囤工具却没有真实使用者的人。",
    angle: "从“我一直希望 Agent 帮我找到问题，直到一个真实对象把顺序纠正过来”讲起。",
    judgment: "如果目标是解决真实业务问题并沉淀自动化，至少先确认问题存在、人工方案能产生结果，再决定是否值得标准化。",
    evidence: "9 月 5—6 日的连续记录；云端早报关于生成能力不等于现实闭环只作外部辅助。",
    risk: "少量个人案例不能证明所有 AI 项目都必须严格按同一顺序；低风险原型仍可帮助发现问题。",
    done: "保存 60–90 秒内部录音，讲清原顺序、现实反例、修正顺序和一条适用边界；文件存在即完成。",
    tone: "blue",
  },
  {
    number: "03",
    label: "备选",
    title: "改 PPT 不等于备好课",
    basis: "连续修改课件后已形成教学主线，现场仍出现内容不熟与提前结束；来源：连续课堂结果。",
    source: "连续课堂结果、课件修改、教学主线、现场剩余时间",
    why: "新结果让“材料做完”和“交付准备完成”的差异更具体，也能帮助教师、培训者和需要现场表达的人。",
    angle: "从“主线终于有了，我却还是提前讲完”切入，区分页面、节奏、互动和备用方案。",
    judgment: "课件调整不等于备课完成；熟悉内容、教学主线、节奏和现场备用方案需要分别准备。",
    evidence: "9 月 7、8、10、11 日的连续课堂复盘。",
    risk: "不同班级、时间段和管理方式会影响结果；不能把提前结束全部归因于课件。",
    done: "保存 60–90 秒内部录音，包含一次课件修改、一次现场结果和下一节课只改的一个变量；文件存在即完成。",
    tone: "peach",
  },
];

const todoItems = [
  {
    number: "01",
    title: "写下“不以危险驾驶换时间”的停止规则",
    basis: "昨日明确记录通过危险驾驶压缩通勤时间，并判断这不是好信号、担心形成习惯。",
    missing: "现有记录没有一条已保存、可在迟出门时直接执行的安全停止规则。",
    next: "写下一句“来不及时不抢灯，接受迟到并记录原因”，放到出门前能看到的备忘录或提醒中。",
    done: "手机备忘录或提醒中存在该句规则。",
    stop: "只写并保存这一条规则，不重做完整通勤计划。",
    tone: "mint",
  },
  {
    number: "02",
    title: "给同一节课补三个节奏检查点和一个备用收尾",
    basis: "昨日记录课件不熟、距离下课仍有较长时间时已经无话可讲；同时确认教学主线开始形成。",
    missing: "现有记录没有一份带节奏检查点和备用收尾活动的教案，也没有现场验证结果。",
    next: "只为同一节课标出开场、中段、收尾三个检查点，并准备一个不依赖新增幻灯片的备用活动。",
    done: "教案中存在三个检查点和一个备用活动。",
    stop: "不继续美化或扩写整套 PPT。",
    tone: "blue",
  },
];

const learningResources: Array<{ type: string; title: string; meta: string; intro: string; why: string; focus: string[]; action: string; boundary: string; source: string; sourceLabel: string }> = [];

const weather = { location: "南宁", condition: "晴转多云", temperature: "23–30℃", icon: "🌤️" };

const planetPosts = planetPostsToday;

const deepReadAtoms = [
  { atom: "平台发现、内容信任与直接关系需要分层衡量", relation: "主推题要求把“生产力”标签与实际用途分开；内容系统也应把平台曝光与真实用户关系分开记录。", question: "一条内容发布后，哪些数据分别证明它被看见、被理解、被信任，以及进入了可持续关系？" },
  { atom: "Agent 自主性与伤害程度必须分开评估", relation: "个人 Agent 工作流不应只看“能否自动完成”，还要单独记录权限、外部对象、停止条件与潜在后果。", question: "现有自动化中，哪些动作只是提高自主程度，哪些动作会实质扩大外部影响或不可逆风险？" },
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
              <div className="nav-sub">{planetPosts.length ? planetPosts.map((post) => <a href={"#planet-" + post.index} key={post.index}>{post.title}</a>) : <a href="#planet-status">昨日无星主更新</a>}</div>
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
              <div className="nav-sub"><a href="#hotlist">查看 2026 年 9 月 11 日完整榜单</a></div>
            </details>
          </nav>
          <p className="sidebar-note">点小标题直达正文 · 折叠内容会自动展开</p>
        </aside>

        <div className="page" id="top">
          <section className="hero">
            <div className="date-block"><div className="date-day">12</div><div><p className="date-month">2026 · 09</p><p className="date-week">星期六</p></div></div>
            <div className="hero-copy"><p className="eyebrow">TODAY&apos;S DIRECTION</p><h1>生产力不是标签，<br />要看真实使用。</h1><p className="judgment">一台工具值不值得留，不由购买时的想象决定，而由真实用途、替代关系与结果决定。今天先把这次去留判断录成第一版。</p></div>
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
              <summary><span className="brief-index">行动</span><span className="brief-main"><span className="pill">今日行动建议</span><strong>完成一次“平台曝光 → 直接反馈 → 可拥有资产”的最小闭环</strong></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(actionAdvice, "action")}</div>
            </details>
          </section>

          <section className="section" id="planet"><div className="section-heading"><div><p className="eyebrow">JIANG HUSHUO</p><h2>姜胡说</h2></div><p>昨日 2 条星主原文</p></div><p><a className="archive-link" href="/daily-briefing/knowledge/2026-09-11/26-09-11姜胡说知识星球.md" target="_blank" rel="noopener noreferrer">查看 9 月 11 日原始归档 ↗</a></p>{planetPosts.length ? <div className="planet-list">{planetPosts.map((post) => <details className="planet-card" id={"planet-" + post.index} key={post.index}><summary><span className="planet-number">{post.index}</span><span><small>{post.author} · {post.published}</small><strong>{post.title}</strong></span><span className="planet-kind">原文</span></summary><div className="planet-body">{post.body.split("\n").map((line, i) => line ? <p key={i}>{line}</p> : <br key={i} />)}{post.images.map((src) => <img src={src} alt={post.title + " 原始图片"} key={src} />)}</div></details>)}</div> : <article className="review-card static-review-card" id="planet-status"><h3>昨日无星主更新</h3><div><p>2026 年 9 月 11 日精确日期归档没有星主原文。没有使用其他日期内容代替。</p></div></article>}
          </section>

          <section className="section" id="review"><div className="section-heading"><div><p className="eyebrow">PERSONAL REVIEW</p><h2>复盘</h2></div><p>事实、候选解释与 AI 建议分开呈现</p></div><div className="review-grid"><details className="review-card" id="yesterday-review" open><summary>昨日复盘</summary><div><p>昨日发生了两类可检查结果：一项低使用率设备经过实际用途与替代关系评估后进入出售流程；一节课堂虽然已经形成教学主线，但仍暴露出对内容不熟和节奏留白。</p><p>另一个必须单独处理的事实是，赶路时以危险行为压缩了时间，本人也明确判断这可能形成不安全习惯。这些事实不能合并成单一动机。</p></div></details><article className="review-card static-review-card" id="seven-day-trend"><h3>近七天趋势</h3><div><p>近七天在业务交流、真实课堂、数据流程和个人设备使用中，多次把抽象名称改写成可观察标准：Agent 是否从真实问题出发、数据工作是否在自己的控制范围、课件是否真的支持交付、设备是否存在稳定使用场景。</p><p>这是跨场景的重复信号，但外部约束、新岗位学习期、睡眠波动和设备需求变化都可能独立解释其中一部分。</p></div></article><article className="review-card static-review-card diagnosis" id="cognitive-observation"><h3>AI 认知观察</h3><div><p><strong>证据等级：</strong>近七天重复模式。</p><p><strong>候选解释：</strong>当“生产力、系统、完成”只停留在名称时，手段容易先于结果；真实使用与反馈会迫使判断回到用途、边界和可检查后果。</p><p><strong>替代解释：</strong>数据任务、课堂和设备属于不同问题；设备出售也可能只是替代设备充分，不能归因于同一种动机。</p><p><strong>当前观察：</strong>昨日最有价值的不是给设备下一个新标签，而是用实际使用、替代关系和真实交易把判断做完。</p></div></article><article className="review-card static-review-card diagnosis" id="minimum-action"><h3>最小行动建议</h3><div><p>如果选择主推题，只录一遍：讲购买前预期 → 讲长期实际用途 → 给出一个不支持自己结论的反例 → 说明现在用什么标准判断是否保留工具。</p><p><strong>完成标准：</strong>保存一版 3–5 分钟原始草稿即停止；不要求剪辑、发布或先补一门课程。</p></div></article><article className="review-card static-review-card diagnosis" id="action-diagnosis"><h3>AI 执行力诊断 / 建议</h3><div><p>今天不新增方法库。先把主推题录成原始草稿；若没有形成文件，再检查是表达风险、精力还是对这个题并不想讲，不继续增加准备步骤。</p></div></article></div></section>

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
                <p><strong>AI 建议：</strong>主推题已经有完整个人经历、当前判断与可检查结果。当前缺口是把判断录成第一版并让真实听者复述，不是继续学习设备评测、表达或创作者课程。</p>
                <p><strong>今天只练习：</strong>围绕同一台设备写四行：购买前预期、过去一周实际用途、一个反例、现在的保留标准；随后直接录一遍。保存原始录音即停止。</p>
                <p><strong>适用边界：</strong>如果录制暴露出明确的知识或表达缺口，再针对该缺口寻找资源；今天不为填满栏目而推荐课程。</p>
              </div>
            </article>}
          </section>

          <section className="section" id="hotlist">
            <div className="section-heading"><div><p className="eyebrow">HOT LIST</p><h2>热点榜单</h2></div><p>2026 年 9 月 11 日完整榜单</p></div>
            <a className="hotlist" href="/daily-briefing/hotlist/2026-09-11.html" aria-label="打开热点榜单"><span>昨日榜单</span><strong>查看 2026 年 9 月 11 日完整榜单</strong><span className="arrow">↗</span></a>
          </section>

          <footer><p>生产力不是标签，<br />要看真实使用。</p><span>每日 09:00 更新 · 完整内容折叠保存</span></footer>
        </div>
      </div>
    </main>
  );
}
