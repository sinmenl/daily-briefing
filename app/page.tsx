import { type ReactNode } from "react";
import { cloudBriefMarkdownToday } from "./cloud-brief-current";
import { planetPostsToday } from "./planet-current";

const briefDate = "2026-09-06";

const topics = [
  {
    number: "01",
    label: "主推",
    title: "不要坐在知识库里找问题",
    basis: "昨日真实交流已经形成明确判断变化；来源：日记中的线下业务场景。",
    source: "日记中的线下业务场景、本人写下的判断修正",
    why: "这不是从新闻拼出的题目，而是一个真实对象用现实条件纠正了原来的 AI 应用顺序。本人已经写下完整逆转过程和修正后的流程。",
    angle: "从“我原本以为装好 Agent、Skill、知识库，就能找到值得解决的问题”讲起，再交代真实业务从业者为什么说前期根本用不上这些。",
    judgment: "如果目标是解决一个真实业务问题并最终沉淀成自动化系统，那么至少要先确认问题真实存在、人工方案能产生结果，再决定是否值得标准化和自动化。",
    evidence: "2026-09-05 日记中的线下交流与修正流程；今日云端早报关于目标、证据和责任所有权的案例仅作外部对照。",
    risk: "补一个人工闭环已经产生结果的具体例子。不要扩大成“所有事情都必须完全人工做完才能使用 AI”，也不要暴露现实对象身份。",
    done: "留下一版 3–5 分钟内部录音或视频草稿，明确原流程、现实反例、修正后的流程和适用边界；文件存在即完成。",
    tone: "mint",
  },
  {
    number: "02",
    label: "备选",
    title: "AI 能执行以后，哪些决定仍要由我负责",
    basis: "本人已反复追问人与 AI 的责任边界；来源：近期日记判断与今日云端案例。",
    source: "2026-08-31 日记、今日云端早报的 Agent 异常与所有权材料",
    why: "8 月 31 日已经形成“方向和判断是 1，执行能力是后面的 0”的个人理解，今日早报又提供 Agent 异常与所有权案例。",
    angle: "选一个自己实际使用 AI 的任务，讲清楚 AI 替你完成了什么，以及哪一个目标或验收标准必须由你决定。",
    judgment: "人的价值可能转向定义问题、选择目标、决定可接受代价、授权执行并根据现实结果修改规则。",
    evidence: "2026-08-31 日记；2026-09-06 云端早报的 Agent 异常披露与所有权材料。",
    risk: "当前仍偏宏观，需要一个亲自经历的失败或纠偏细节；避免把 AI 描述成完全不能判断。",
    done: "留下一版 60–90 秒原始录音，明确一项 AI 执行和一项本人保留的决定；不要求发布。",
    tone: "blue",
  },
  {
    number: "03",
    label: "备选",
    title: "会套公式，不等于条件变化后还能调整",
    basis: "两次魔方练习出现同一判断；来源：连续日记中的学习经历。",
    source: "魔方学习的真实经历、跨日期重复观察、AI 学习类比",
    why: "9 月 2 日与 9 月 4 日连续记录“能复原但不理解为什么”，既有具体经历，也能连接 AI 学习中过度依赖步骤的问题。",
    angle: "从魔方标准步骤稍微变化就失去方向的瞬间开始，而不是先讲抽象学习理论。",
    judgment: "程序性熟练回答“怎么做”，结构性理解回答“为什么这样做、变化后怎么办”。",
    evidence: "9 月 2 日与 9 月 4 日连续记录魔方练习、即时反馈和对底层理解的追问。",
    risk: "需要一个公式失效的具体场景；避免把熟练练习贬低为无价值。",
    done: "留下一版 60–90 秒原始录音，包含一个条件变化、一次失去方向和一个修正判断；不要求发布。",
    tone: "peach",
  },
];

const learningResources: Array<{ type: string; title: string; meta: string; intro: string; why: string; focus: string[]; action: string; boundary: string; source: string; sourceLabel: string }> = [];

const weather = { location: "南宁", condition: "小雨", temperature: "24–31℃", icon: "🌦️" };

const planetPosts = planetPostsToday;

const deepReadAtoms = [
  { atom: "创作自动化的控制权是采用前提", relation: "今天主推题不需要再证明 AI 很有用，而要检查工作流是否仍留下可控制的判断和证据。", question: "如果把昨日发现的真实问题交给 Agent，哪一步允许撤销，哪一步必须看到原始证据，哪一步不能自动发布？" },
  { atom: "广泛采用不能替代结果衡量", relation: "不要先问“能否装上 Agent”，先问一项工作如何证明已经变好。", question: "如果人工闭环都没有稳定记录结果，自动化以后准备拿什么指标判断它真的解决了问题？" },
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
              <summary className="nav-title"><span className="nav-icon icon-focus">✓</span><span>今日选题</span><span className="nav-chevron">⌄</span></summary>
              <div className="nav-sub">{topics.map((topic, i) => <a href={"#task-" + (i + 1)} key={topic.title}>{topic.label}｜{topic.title}</a>)}<a href="#templates">模版</a></div>
            </details>
            <details className="nav-group" data-nav-group>
              <summary className="nav-title"><span className="nav-icon icon-briefing">▤</span><span>每日资讯</span><span className="nav-chevron">⌄</span></summary>
              <div className="nav-sub">{creatorUpdates.length ? creatorUpdates.map((item, i) => <a href={"#creator-" + (i + 1)} key={item.title}>{cleanTitle(item.title)}</a>) : creatorUpdatesRaw ? <a href="#creator-updates">指定博主动态</a> : null}{industryStories.map((item, i) => <a href={"#story-" + (i + 1)} key={item.title}>{i + 1}. {cleanTitle(item.title)}</a>)}{productObservations.map((item, i) => <a href={i === 0 ? "#product-observation" : "#product-observation-" + (i + 1)} key={item.title}>{item.title}</a>)}{signalRadar ? <a href="#signal-radar">信息源实验雷达</a> : null}<a href="#early-action">今日行动建议</a></div>
            </details>
            <details className="nav-group" data-nav-group>
              <summary className="nav-title"><span className="nav-icon icon-planet">✦</span><span>姜胡说</span><span className="nav-chevron">⌄</span></summary>
              <div className="nav-sub">{planetPosts.map((post) => <a href={"#planet-" + post.index} key={post.index}>{post.title}</a>)}<a href="#xiaobaotong-1">小报童｜从做好一件小事到赚到钱</a></div>
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
              <div className="nav-sub"><a href="#hotlist">查看 2026 年 9 月 5 日完整榜单</a></div>
            </details>
          </nav>
          <p className="sidebar-note">点小标题直达正文 · 折叠内容会自动展开</p>
        </aside>

        <div className="page" id="top">
          <section className="hero">
            <div className="date-block"><div className="date-day">06</div><div><p className="date-month">2026 · 09</p><p className="date-week">星期日</p></div></div>
            <div className="hero-copy"><p className="eyebrow">TODAY&apos;S DIRECTION</p><h1>先进入真实场景，<br />再决定哪里值得自动化。</h1><p className="judgment">昨日已经从真实交流中修正了工作流顺序。今天只把这段经历录成第一版：先确认问题与人工闭环，再谈知识库、Skill 和 Agent。</p></div>
            <div className="hero-weather" aria-label={weather.location + "当天天气：" + weather.condition + "，" + weather.temperature}>
              <span className="weather-icon">{weather.icon}</span>
              <span className="weather-copy"><strong>{weather.condition}</strong><small>{weather.location} · {weather.temperature}</small></span>
            </div>
          </section>

          <section className="section" id="today">
            <div className="section-heading compact-heading"><div><p className="eyebrow">TODAY&apos;S TOPICS</p><h2>今天值得拍什么</h2></div><p>1 个主推＋2 个备选；只推荐，不替你安排</p></div>
            <div className="brief-list topic-list">{topics.map((topic, i) => <details className={"brief-item topic-card " + topic.tone} id={"task-" + (i + 1)} key={topic.number}>
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
              <summary><span className="brief-index">行动</span><span className="brief-main"><span className="pill">今日行动建议</span><strong>为一个 AI 创作流程制作所有权地图并真实运行一次</strong></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(actionAdvice, "action")}</div>
            </details>
          </section>

          <section className="section" id="planet"><div className="section-heading"><div><p className="eyebrow">JIANG HUSHUO</p><h2>姜胡说</h2></div><p>昨日 2 条星主原文与 1 篇相关小报童导读</p></div><p><a className="archive-link" href="/daily-briefing/knowledge/2026-09-05/26-09-05姜胡说知识星球.md" target="_blank" rel="noopener noreferrer">查看 9 月 5 日原始归档 ↗</a></p><div className="planet-list">{planetPosts.map((post) => <details className="planet-card" id={"planet-" + post.index} key={post.index}><summary><span className="planet-number">{post.index}</span><span><small>{post.author} · {post.published}</small><strong>{post.title}</strong></span><span className="planet-kind">原文</span></summary><div className="planet-body">{post.body.split("\n").map((line, i) => line ? <p key={i}>{line}</p> : <br key={i} />)}{post.images.map((src) => <img src={src} alt={post.title + " 原始图片"} key={src} />)}</div></details>)}</div>
            <details className="planet-card" id="xiaobaotong-1"><summary><span className="planet-number">读</span><span><small>小报童 · 姜胡说 · 2026-06-29 23:12:50</small><strong>从“做好一件小事”到“赚到钱”之间，缺四步</strong></span><span className="planet-kind">导读</span></summary><div className="planet-body"><p><strong>为什么今天相关（AI 推荐）：</strong>今天主推题正在处理“不要先搭系统再找问题”。这篇文章直接补足它的下一层：做成一件事仍不等于形成产品，必须把个人能力翻译成别人能获得的结果，再经过产品化、定价、通道和持续四道闸门。</p><p><strong>阅读重点：</strong>检查昨日遇到的真实对象究竟卡在哪个可交付结果，以及“人工闭环”是否已经包含输入、过程和输出。</p><p><strong>适用边界：</strong>文章讨论从个人能力走向商业闭环，不意味着所有真实问题都应立刻收费；在问题与结果尚未确认前，产品化动作也可能掩盖价值不清晰。</p><SourceLink href="https://xiaobot.net/post/c47cd160-74cb-46b9-bfac-a70ba3fd08b2" label="姜胡说《从做好一件小事到赚到钱之间，缺四步》" /></div></details>
          </section>

          <section className="section" id="review"><div className="section-heading"><div><p className="eyebrow">PERSONAL REVIEW</p><h2>复盘</h2></div><p>事实、候选解释与 AI 建议分开呈现</p></div><div className="review-grid"><details className="review-card" id="yesterday-review" open><summary>昨日复盘</summary><div><p>昨日参加了一次线下活动并与正在做业务的人交流。日记完整记录了一个判断变化：从“先用 Agent、Skill、知识库找问题”，修正为“先进入场景确认真实问题与人工闭环，再决定是否标准化和自动化”。</p><p>昨日日记没有出现已经完成近期分享主题录制或发布的事实证据，因此不把它写成已完成。</p></div></details><article className="review-card static-review-card" id="seven-day-trend"><h3>近七天趋势</h3><div><p>过去七天，带有真实对象、外部约定和即时反馈的培训、试讲、上课与线下交流更容易推进；需要独自定义问题、表达形式和完成标准时，仍多次转向信息流、短剧或继续学习。</p><p>9 月 5 日出现了重要进展：现实交流不只促成行动，还直接修正了 AI 工作流的顺序。这说明目前更值得检验的是能否把一次真实输入及时变成可让别人检查的表达。</p><p>睡眠、工作变化和现实负荷仍是替代解释，不能把这一趋势写成稳定人格结论。</p></div></article><article className="review-card static-review-card diagnosis" id="cognitive-observation"><h3>AI 认知观察</h3><div><p><strong>证据等级：</strong>重复模式，并出现新的正向反例。</p><p><strong>候选解释：</strong>明确外部对象与具体问题能够降低判断成本。</p><p><strong>替代解释：</strong>线下活动本身提供了更高唤醒度和即时社交反馈，因此不一定能自动迁移到独立创作。</p><p>接下来应以一份可检查的原始录音检验，而不是继续补充理论。</p></div></article><article className="review-card static-review-card diagnosis" id="minimum-action"><h3>最小行动建议</h3><div><p>如果选择主推题，只做一次 3–5 分钟原始录制：真实交流发生了什么 → 原来的流程是什么 → 哪个事实改变了判断 → 修正后的流程与边界是什么。</p><p><strong>完成标准：</strong>录完保存即停止，不补课程、不先搭新系统。</p></div></article><article className="review-card static-review-card diagnosis" id="action-diagnosis"><h3>AI 执行力诊断 / 建议</h3><div><p>今天不补资料、不先改工作流。先把已经形成的判断变成一份可检查的原始表达；录完后再根据真实卡点判断缺的是结构、证据还是表达。</p></div></article></div></section>

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
                <p><strong>AI 建议：</strong>当前证据缺口不是“不知道方法”，而是昨日已经形成的真实经历与判断还没有变成一份可检查的原始表达；继续增加学习材料容易把录制再次推迟。</p>
                <p><strong>今天只练习：</strong>打开录音，回答四句：我原来为什么从 Agent、Skill 和知识库开始；真实业务场景让我看见了什么不成立；现在把流程改成什么顺序；这条规则在哪些情况下不适用。</p>
                <p><strong>适用边界：</strong>如果录制暴露出明确的知识或表达缺口，再针对该缺口寻找资源；今天不为填满栏目而推荐课程。</p>
              </div>
            </article>}
          </section>

          <section className="section" id="hotlist">
            <div className="section-heading"><div><p className="eyebrow">HOT LIST</p><h2>热点榜单</h2></div><p>2026 年 9 月 5 日完整榜单</p></div>
            <a className="hotlist" href="/daily-briefing/hotlist/2026-09-05.html" aria-label="打开热点榜单"><span>昨日榜单</span><strong>查看 2026 年 9 月 5 日完整榜单</strong><span className="arrow">↗</span></a>
          </section>

          <footer><p>先进入真实场景，<br />再决定哪里值得自动化。</p><span>每日 09:00 更新 · 完整内容折叠保存</span></footer>
        </div>
      </div>
    </main>
  );
}
