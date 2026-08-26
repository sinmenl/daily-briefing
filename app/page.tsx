import { type ReactNode } from "react";
import { cloudBriefMarkdownToday } from "./cloud-brief-current";

const briefDate = "2026-08-26";

const tasks = [
  {
    number: "01",
    title: "先恢复睡眠与基本精力",
    body: "昨天记录了睡眠不足、烦躁和难以静下心。今天先补连续睡眠、进食和洗漱，不用信息流或新工具继续透支。",
    first: "关闭信息流，先完成恢复",
    time: "恢复后再开始实验",
    tone: "mint",
  },
  {
    number: "02",
    title: "完成一次先判断、后调用 AI 的实验",
    body: "选一个真实内容问题，先独立写事实、暂时解释和推翻条件，再让 AI 只找混淆点与反例。",
    first: "先写三行原始判断，不让 AI 代写起点",
    time: "最多 60 分钟",
    tone: "blue",
  },
  {
    number: "03",
    title: "留下一个现实行为结果",
    body: "录一段不超过 60 秒的口述，或让一位目标对象复述。比较 AI 前后的判断，只记录被证据改变的地方。",
    first: "完成一次可被外界检查的录制或复述",
    time: "留下记录后停止",
    tone: "peach",
  },
];

const learningResources: Array<{ type: string; title: string; meta: string; intro: string; why: string; focus: string[]; action: string; boundary: string; source: string; sourceLabel: string }> = [];

const xiaobot = {
  title: "动起来！彩蛋版...",
  author: "姜胡说",
  published: "2026-06-15 15:05:44",
  source: "https://xiaobot.net/post/41114167-7c21-4708-9969-bce389ca8f24",
};

const weather = { location: "南宁", condition: "大雨转中雨", temperature: "27–30℃", icon: "🌧️" };

const planetPosts: Array<{ index: string; author: string; published: string; title: string; body: string; images: string[] }> = [];

const deepReadAtoms = [
  {
    atom: "长期评测必须把用户状态、历史和行为结果纳入评价单位",
    relation: "今天的判断实验保留调用 AI 前后的版本，并用一次现实行为检验改变来自证据还是措辞。",
    question: "连续使用十次后，这套建议让判断更独立，还是只让解释更完整？",
  },
  {
    atom: "策略的价值在于把能力连接到现实结果与可推翻条件",
    relation: "今天不再继续收集方法，而是先写可推翻的解释，再用 60 秒口述或目标对象复述检验。",
    question: "什么现实行为出现以后，才能证明这次真的形成了判断？",
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
            <nav className="date-list" data-archive-list="true" aria-label="选择过往简报日期"><a href="?date=2026-08-26" aria-current="page">2026年8月26日</a></nav>
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
              <div className="nav-sub"><a href="#hotlist">查看 2026 年 8 月 25 日完整榜单</a></div>
            </details>
          </nav>
          <p className="sidebar-note">点小标题直达正文 · 折叠内容会自动展开</p>
        </aside>

        <div className="page" id="top">
          <section className="hero">
            <div className="date-block"><div className="date-day">26</div><div><p className="date-month">2026 · 08</p><p className="date-week">星期三</p></div></div>
            <div className="hero-copy">
              <p className="eyebrow">TODAY&apos;S DIRECTION</p>
              <h1>先保留自己的判断起点，<br />再让现实反馈改变它。</h1>
              <p className="judgment">今天先恢复精力，再完成一次“先判断、后调用 AI”的现实验证，不用漂亮解释代替可观察结果。</p>
            </div>
            <div className="hero-weather" aria-label={weather.location + "当天天气：" + weather.condition + "，" + weather.temperature}>
              <span className="weather-icon">{weather.icon}</span>
              <span className="weather-copy"><strong>{weather.condition}</strong><small>{weather.location} · {weather.temperature}</small></span>
            </div>
          </section>

          <section className="section" id="today">
            <div className="section-heading compact-heading"><div><p className="eyebrow">THREE PRIORITIES</p><h2>今天只做三件事</h2></div><p>AI 建议：恢复优先，只推进一次可推翻的判断实验</p></div>
            <div className="task-grid">{tasks.map((task, i) => <article className={"task-card " + task.tone} id={"task-" + (i + 1)} key={task.number}>
              <span className="task-number">{task.number}</span><h3>{task.title}</h3><p>{task.body}</p>
              <div className="task-meta"><span>第一步</span><strong>{task.first}</strong></div><div className="task-time">{task.time}</div>
            </article>)}</div>
            <div className="time-block-heading" id="schedule-heading"><div><p className="eyebrow">TIME BLOCKS</p><h3>今日时间块</h3></div><p>先恢复，再实验，最后留下现实证据</p></div>
            <section className="schedule" id="schedule">
              <div><span>第一段｜恢复</span><p>连续睡眠、进食、洗漱，不塞入课程、工具研究或信息流。</p></div>
              <div><span>第二段｜60 分钟</span><p>先独立写事实、解释和推翻条件，再让 AI 找混淆点与反例。</p></div>
              <div><span>第三段｜现实验证</span><p>录一段 60 秒口述或请一位目标对象复述，比较前后判断并留下记录。</p></div>
            </section>
            <details className="brief-item" id="risk">
              <summary><span className="brief-index">风险</span><span className="brief-main"><span className="pill">今日边界</span><strong>三个需要主动截断的动作</strong><span>只识别，不新增任务</span></span><span className="plus">＋</span></summary>
              <div className="brief-content">
                <p><strong>继续输入：</strong>今天不再增加课程、工具或方法论。</p>
                <p><strong>让 AI 代写判断起点：</strong>先保存自己的事实、解释和不确定，再调用 AI。</p>
                <p><strong>把措辞优化当作认知改变：</strong>只有现实证据改变了原解释，才记录为判断更新。</p>
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
              <summary><span className="brief-index">行动</span><span className="brief-main"><span className="pill">今日行动建议</span><strong>完成一次 60 分钟“先判断、后调用 AI”实验</strong></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(actionAdvice, "action")}</div>
            </details>
          </section>

          <section className="section" id="planet">
            <div className="section-heading"><div><p className="eyebrow">JIANG HUSHUO</p><h2>姜胡说</h2></div><p>昨日精确归档缺失 · 一篇相关小报童文章</p></div>
            <div className="section-context" id="planet-status">
              <p>昨日知识星球归档尚未生成。预期路径：8.姜胡说知识星球/output/26.8月/26-08-25姜胡说知识星球/26-08-25姜胡说知识星球.md；未使用其他日期替代。</p>
            </div>
            {planetPosts.map((post) => <details className="planet-card" id={"planet-" + post.index} key={post.index}>
              <summary><div className="avatar">{post.index}</div><div><span className="planet-time">{post.author} · {post.published}</span><strong>{post.title}</strong></div><span className="open-label">原文</span></summary>
              <div className="planet-content"><div className="original"><span>星主原文</span>{renderMarkdown(post.body, "planet-" + post.index)}{post.images.map((src, imageIndex) => <img src={src} alt={post.author + "原始配图 " + (imageIndex + 1)} loading="lazy" key={src} />)}</div></div>
            </details>)}
            <details className="planet-card" id="xiaobaotong-1">
              <summary><div className="avatar">读</div><div><span className="planet-time">小报童 · {xiaobot.author} · {xiaobot.published}</span><strong>{xiaobot.title}</strong><span>阅读导引为 AI 建议，文章原文不在网页转载</span></div><span className="open-label">导引</span></summary>
              <div className="planet-content"><div className="original">
                <span>AI 阅读导引</span>
                <p>过去七天多次出现“理解和输入很多，但没有留下可被世界检验的产物”。这篇文章把行动缩成最小可行版本，适合用来截断继续准备。</p>
                <p><strong>阅读重点：</strong>识别哪些酝酿仍在替代行动，只保留今天能够完成的一次现实验证。</p>
                <p><strong>阅读问题：</strong>如果不再学习新方法，现有想法中哪一句可以在 5 分钟内先说出来？</p>
                <p><strong>适用边界：</strong>这是 AI 阅读导引，不代表用户已阅读、认同或实践文章观点；文章不能替代今天的现实验证。</p>
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
                  <p><strong>资料状态：</strong>已读取 8 月 19 日至 25 日全部七份本地日记，没有缺失日期，也没有读取今日日记。</p>
                  <p><strong>可确认事实：</strong>昨天参加了一场面试、观看了直播，并记录“没有可验证输出”；同时明确写下拍视频和思考仍未发生。</p>
                  <p><strong>边界：</strong>睡眠不足、心里有事和急躁都被本人记录为可能影响因素；不能把一天的“零输出”外推成人格结论。</p>
                  <p className="advice"><strong>AI 建议：</strong>今天不继续解释自己，先完成一次带原始判断和现实结果的最小实验。</p>
                </div>
              </details>
              <article className="review-card static-review-card" id="seven-day-trend">
                <h3>近七天趋势</h3>
                <div className="trend-list">
                  <div><strong>资料范围</strong><p>2026 年 8 月 19 日至 25 日，七份记录齐全；不包含今日日记。</p></div>
                  <div><strong>重复模式</strong><p>多个日期记录了学习、工具或解释系统持续增加，但可由外界评价的内容结果较少；本人也反复区分“理解”与“改变”。</p></div>
                  <div><strong>边界</strong><p>睡眠不足、具体任务回报不清和阶段性迷茫均可能独立造成同样结果，不能只归因为逃避。</p></div>
                </div>
              </article>
              <article className="review-card static-review-card diagnosis" id="cognitive-observation">
                <h3>AI 认知观察</h3>
                <div>
                  <p><strong>证据等级：</strong>重复模式。</p>
                  <p><strong>候选解释：</strong>当解释本身带来完成感时，可能在现实验证之前停下；于是“想明白了”没有转成可观察结果。</p>
                  <p><strong>替代解释：</strong>连续睡眠不足和任务回报不清已经足以降低启动与持续注意。</p>
                  <p><strong>适用边界：</strong>这是基于多日日记的可修订 AI 推断，不是人格、心理或医疗结论。</p>
                </div>
              </article>
              <article className="review-card static-review-card diagnosis" id="minimum-action">
                <h3>最小行动建议</h3>
                <div>
                  <p><strong>行动：</strong>选一个真实内容问题，先写事实、暂时解释和推翻条件，再让 AI 只指出混淆点与一个可观察反例；随后录 60 秒口述或请一位目标对象复述。</p>
                  <p><strong>最大范围：</strong>60 分钟，不新增资料、不重做系统。</p>
                  <p><strong>可观察产物：</strong>原始三行、AI 反例、一次录制或复述记录，以及一句被结果修改或暂未修改的判断。</p>
                  <p><strong>完成标准：</strong>四项记录齐全即完成，不以流量或当天收到回复为标准。</p>
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
                <p><strong>AI 建议：</strong>今天已有完整的 60 分钟判断实验，再增加课程会提高输入负担，因此不新增推荐。</p>
                <p><strong>今天只练习：</strong>保存调用 AI 前后的两个版本，再完成一次 60 秒口述或目标对象复述。</p>
                <p><strong>适用边界：</strong>这不代表课程无用；只有现实实验暴露出明确方法缺口后，再按缺口选择资源。</p>
              </div>
            </article>}
          </section>

          <section className="section" id="hotlist">
            <div className="section-heading"><div><p className="eyebrow">HOT LIST</p><h2>热点榜单</h2></div><p>2026 年 8 月 25 日完整榜单</p></div>
            <a className="hotlist" href="/daily-briefing/hotlist/2026-08-25.html" aria-label="打开热点榜单"><span>昨日榜单</span><strong>查看 2026 年 8 月 25 日完整榜单</strong><span className="arrow">↗</span></a>
          </section>

          <footer><p>先写出自己的判断，<br />再让真实数据决定下一步。</p><span>每日 09:00 更新 · 完整内容折叠保存</span></footer>
        </div>
      </div>
    </main>
  );
}

