import { type ReactNode } from "react";
import { cloudBriefMarkdownToday } from "./cloud-brief-current";

const briefDate = "2026-08-29";

const tasks = [
  {
    number: "01",
    title: "参加已计划的兼职面试，并带回一张条件表",
    source: "用户计划",
    why: "昨天已经完成一次培训并拿到真实的工时、收入和发薪规则，今天又有一场已明确计划的面试。两次都用同一组条件记录，才能比较真实选项，而不是继续在脑中猜。",
    question: "这份兼职在实际工时、到手收入、发薪时间、请假规则和工作自由度上，是否比华图更适合当前需要？",
    steps: [
      "确认时间地点并到场。",
      "问清实际工时、到手收入、发薪时间、请假规则和工作自由度。",
      "离场后立刻与昨天的选项并排记录；不知道的项目写“未确认”。",
    ],
    deliverable: "一张两列比较表。",
    done: "五项条件全部填写，未知项明确标记。",
    first: "打开面试通知，确认出发时间和地点",
    time: "面试本身＋15 分钟记录",
    tone: "mint",
  },
  {
    number: "02",
    title: "为第四条视频留下第一份反馈记录",
    source: "AI 建议",
    why: "第四条视频已经发布，今天不重复安排“再发一条”。当前更缺的是确认观众是否理解、是否出现反例，以及哪些判断还没有被反馈触及。",
    question: "现有真实反馈支持、反驳，还是尚未触及“学习工具可能替代原本行动”这个判断？",
    steps: [
      "截图当前数据。",
      "记录至多五条真实评论、私信或口头反馈；没有反馈就明确写“暂无”。",
      "写一句这些证据支持、反驳或尚未触及哪个判断。",
    ],
    deliverable: "一页反馈记录。",
    done: "至少一张数据截图和一句证据判断。",
    first: "打开第四条视频的数据页并截图",
    time: "最多 30 分钟",
    tone: "blue",
  },
];

const learningResources: Array<{ type: string; title: string; meta: string; intro: string; why: string; focus: string[]; action: string; boundary: string; source: string; sourceLabel: string }> = [];

const weather = { location: "南宁", condition: "阵雨转多云", temperature: "25–32℃", icon: "🌦️" };

const planetPosts: Array<{ index: string; author: string; published: string; title: string; body: string; images: string[] }> = [];

const deepReadAtoms = [
  {
    atom: "初稿速度不等于可接受交付（暂定）",
    relation: "今天的面试比较同样需要同口径条件与未知项标记，不能把一次到场自动等同于职业决策完成。",
    question: "哪些步骤真正改变最终可靠性，哪些只是让初稿更快？",
  },
  {
    atom: "先写状态、边界与停止条件，再授权执行（暂定）",
    relation: "反馈记录应区分有数据、无反馈和无法确认；缺失信息必须停在未知，而不是补成解释。",
    question: "第四条视频的反馈里，什么证据出现时才允许修改原判断？",
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
            <nav className="date-list" data-archive-list="true" aria-label="选择过往简报日期"><a href="?date=2026-08-29" aria-current="page">2026年8月29日</a></nav>
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
              <div className="nav-sub"><a href="#planet-status">昨日原始归档</a></div>
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
              <div className="nav-sub"><a href="#hotlist">查看 2026 年 8 月 28 日完整榜单</a></div>
            </details>
          </nav>
          <p className="sidebar-note">点小标题直达正文 · 折叠内容会自动展开</p>
        </aside>

        <div className="page" id="top">
          <section className="hero">
            <div className="date-block"><div className="date-day">29</div><div><p className="date-month">2026 · 08</p><p className="date-week">星期六</p></div></div>
            <div className="hero-copy">
              <p className="eyebrow">TODAY&apos;S DIRECTION</p>
              <h1>先把职业选项变成数据，<br />再让一次发布得到反馈。</h1>
              <p className="judgment">今天只完成一场现实比较和一份发布后反馈记录；不知道的内容停在“未确认”，不靠继续想象补齐。</p>
            </div>
            <div className="hero-weather" aria-label={weather.location + "当天天气：" + weather.condition + "，" + weather.temperature}>
              <span className="weather-icon">{weather.icon}</span>
              <span className="weather-copy"><strong>{weather.condition}</strong><small>{weather.location} · {weather.temperature}</small></span>
            </div>
          </section>

          <section className="section" id="today">
            <div className="section-heading compact-heading"><div><p className="eyebrow">TODAY&apos;S PRIORITIES</p><h2>今天只做两件事</h2></div><p>一次现实比较，一次发布后反馈</p></div>
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
              <div><span>面试前</span><p>只确认出发信息并恢复精力，不新增学习任务。</p></div>
              <div><span>面试时与离场后 15 分钟</span><p>用五个固定问题收集条件，随后完成两列比较表。</p></div>
              <div><span>晚上｜最多 30 分钟</span><p>记录第四条视频已有反馈，之后停止加任务。</p></div>
            </section>
            <details className="brief-item" id="risk">
              <summary><span className="brief-index">风险</span><span className="brief-main"><span className="pill">今日边界</span><strong>不给晚睡后的今天继续加码</strong><span>只识别，不新增任务</span></span><span className="plus">＋</span></summary>
              <div className="brief-content"><p><strong>睡眠与出行：</strong>优先保证安全出行；不在面试前塞入课程或新工具。</p><p><strong>把未知补成解释：</strong>面试条件与视频反馈缺失时写“未确认”或“暂无”，不让 AI 补造。</p></div>
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
              <summary><span className="brief-index">行动</span><span className="brief-main"><span className="pill">今日行动建议</span><strong>完成一次 75 分钟“完成合同”对照实验</strong></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(actionAdvice, "action")}</div>
            </details>
          </section>

          <section className="section" id="planet">
            <div className="section-heading"><div><p className="eyebrow">JIANG HUSHUO</p><h2>姜胡说</h2></div><p>昨日精确归档尚未生成</p></div>
            <article className="review-card static-review-card" id="planet-status">
              <h3>昨日知识星球归档尚未生成</h3>
              <div><p>预期文件为 2026 年 8 月 28 日归档。今天没有使用更早日期代替，也没有运行或修改采集器。</p><p>小报童没有与今天面试比较或视频反馈直接相关的候选，因此不为填充栏目而新增。</p></div>
            </article>
          </section>

          <section className="section" id="review">
            <div className="section-heading"><div><p className="eyebrow">PERSONAL REVIEW</p><h2>复盘</h2></div><p>私有日记只用于证据审计，公开页面已去标识化</p></div>
            <div className="review-grid">
              <details className="review-card" id="yesterday-review" open>
                <summary>昨日复盘</summary>
                <div><p>昨天完成了一次现实培训，并把原先模糊的“值不值得”变成可比较的工时、收入、发薪节奏和请假规则。这个结果没有直接替用户做职业决定，但它把判断从想象推进到了真实数据。</p><p className="advice"><strong>AI 建议：</strong>今天继续用同口径问题比较另一场面试，不重复做已完成的培训。</p></div>
              </details>
              <article className="review-card static-review-card" id="seven-day-trend">
                <h3>近七天趋势</h3><div className="trend-list"><div><strong>资料范围</strong><p>2026 年 8 月 22 日至 28 日，七份记录齐全；不包含今日日记。</p></div><div><strong>重复信号</strong><p>抽象任务或反馈不足时更容易延后，外部约定与具体交付物更容易促成行动。</p></div><div><strong>反例</strong><p>已完成真实访谈、视频发布和现场培训，说明行动并非持续停滞。</p></div><div><strong>当前缺口</strong><p>把现场数据变成同口径比较，并把已发布内容带入真实反馈。</p></div></div>
              </article>
              <article className="review-card static-review-card diagnosis" id="cognitive-observation">
                <h3>AI 认知观察</h3><div><p><strong>证据等级：</strong>值得观察。</p><p><strong>观察：</strong>当模糊选项被改写成一次到场、几项可记录条件和一个后续比较时，现实行动更容易发生。</p><p><strong>候选解释：</strong>明确外部场景和记录表降低了启动与判断成本。</p><p><strong>替代解释：</strong>睡眠、路程、报酬和现场约束同样会显著影响行动，不能只归因于任务写法。</p></div>
              </article>
              <article className="review-card static-review-card diagnosis" id="minimum-action">
                <h3>最小行动建议</h3><div><p><strong>行动：</strong>面试结束后，用同一组五项条件填写比较表。</p><p><strong>最大范围：</strong>15 分钟；未知项不继续搜索，直接标记“未确认”。</p><p><strong>可观察产物：</strong>一张华图与新兼职的两列条件表。</p><p><strong>完成标准：</strong>五项条件都有真实记录或“未确认”标记。</p></div>
              </article>
            </div>
          </section>

          <section className="section" id="deep-reads">
            <div className="section-heading"><div><p className="eyebrow">DEEP READS</p><h2>今日深读</h2></div><p>{deepReads.length} 篇云端早报原文，任选一篇</p></div>
            <div className="brief-list deep-read-list">{deepReads.map((item, i) => <details className="brief-item" id={"deep-read-" + (i + 1)} key={item.title}>
              <summary><span className="brief-index">{String(i + 1).padStart(2, "0")}</span><span className="brief-main"><strong>{cleanTitle(item.title)}</strong><span>点击展开核心观点、值得学习的部分、如何应用与适用边界</span></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(item.body, "deep-" + i)}
                <div className="advice">
                  <p><strong>知识原子（暂定）：</strong>{deepReadAtoms[i]?.atom}</p>
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
                <p><strong>AI 建议：</strong>今天已有一场现实面试和一项发布后反馈记录；没有找到比直接实践更相关、且以教学为主的资源，因此不为填满栏目而推荐。</p>
                <p><strong>今天只练习：</strong>面试时记录实际工时、到手收入、发薪时间、请假规则和工作自由度；离场后 15 分钟内填完比较表。</p>
                <p><strong>适用边界：</strong>这不代表课程无用；只有现实实验暴露出明确方法缺口后，再按缺口选择资源。</p>
              </div>
            </article>}
          </section>

          <section className="section" id="hotlist">
            <div className="section-heading"><div><p className="eyebrow">HOT LIST</p><h2>热点榜单</h2></div><p>2026 年 8 月 28 日完整榜单</p></div>
            <a className="hotlist" href="/daily-briefing/hotlist/2026-08-28.html" aria-label="打开热点榜单"><span>昨日榜单</span><strong>查看 2026 年 8 月 28 日完整榜单</strong><span className="arrow">↗</span></a>
          </section>

          <footer><p>先把职业选项变成数据，<br />再让一次发布得到反馈。</p><span>每日 09:00 更新 · 完整内容折叠保存</span></footer>
        </div>
      </div>
    </main>
  );
}
