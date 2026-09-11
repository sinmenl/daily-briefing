import { type ReactNode } from "react";
import { cloudBriefMarkdownToday } from "./cloud-brief-current";
import { planetPostsToday } from "./planet-current";

const briefDate = "2026-09-11";

const topics = [
  {
    number: "01",
    label: "主推",
    title: "纪律手段为什么会破坏真实表达",
    basis: "一次真实课堂暴露出纪律惩罚与安全表达目标的冲突；来源：昨日及连续课堂复盘。",
    source: "真实课堂、连续课堂复盘、本人写下的替代话术",
    why: "它有明确摩擦、用户已经形成的判断、可引用现场证据，也能帮助教师、培训者和主持讨论的人检查机制是否与目标冲突。",
    angle: "从“我一边邀请学生真实表达，一边让表达变成惩罚”讲起，说明纪律管理怎样无意中给出相反信号。",
    judgment: "上台应该是表达机会，分享应该是安全的；课堂需要惩罚行为，而不是惩罚表达。",
    evidence: "昨日记录学生更愿意起哄、接梗和集体回答，却可能把主动暴露真实想法理解为有风险；前一日也记录了点名回答和写纸条的参与差异。",
    risk: "只来自少量课堂，不足以概括所有学生；公开表达时必须去除学校、班级、学生和同事身份。",
    done: "保存一版 3–5 分钟内部录音，讲清冲突、自己的判断、一条课堂证据和下一次准备验证的纪律话术；文件存在即完成。",
    tone: "mint",
  },
  {
    number: "02",
    label: "备选",
    title: "忙了一天却没有成果，可能是精力用在不可推进点上",
    basis: "一项真实数据任务受外部填写与流程限制；来源：昨日工作记录与本人判断。",
    source: "一次多方依赖的数据任务、一次停止无效投入的判断",
    why: "它能帮助处理多方依赖任务的人区分“尚未完成”和“当前可推进”，也保留了外部限制这一事实边界。",
    angle: "从“我整理了一上午，结果却无法推进”讲起，区分自己能处理的数据和只能等待的外部缺口。",
    judgment: "不能推进的外部缺口不应持续占用主要精力；应先把现有数据处理好，再把无法控制的部分单独记录。",
    evidence: "昨日明确记录未填写名单无法由自己推进，并写下“把精力发错了地方”。",
    risk: "不是所有等待都应停止；任务仍需符合工作要求，并保护任何个人数据。",
    done: "保存 60–90 秒内部录音，只讲依赖结构、一次无效投入、一个停止条件和仍需谁确认；文件存在即完成。",
    tone: "blue",
  },
  {
    number: "03",
    label: "备选",
    title: "改了很多页 PPT，为什么课堂还是没上好",
    basis: "上课前反复调整 24 页课件，现场仍出现节奏与内容长度问题；来源：昨日课堂记录。",
    source: "一次课件迭代、一次真实课堂结果",
    why: "它能把“材料做完了”与“交付准备完成了”区分开，并留下下一节课只改一个变量的空间。",
    angle: "从“课件赶在上课前十分钟改完，课堂却依然提前讲完”切入，检查备课到底缺了哪一层。",
    judgment: "改过课件不等于备好课，页面数量也不能替代教学目标、节奏和现场互动准备。",
    evidence: "昨日课堂仍出现讲得过快、内容提前结束和再次用写纸条补时间。",
    risk: "只有一次课堂记录，不能把结果完全归因于课件；还缺教学目标、时间分配与学生反馈的对照。",
    done: "保存 60–90 秒内部录音，包含一次课件修改、实际课堂结果和下一节课只改一个变量的方式；文件存在即完成。",
    tone: "peach",
  },
];

const todoItems = [
  {
    number: "01",
    title: "把纪律替代话术放进下一节课教案",
    basis: "昨日明确识别出纪律惩罚与真实表达目标冲突，并写下四句只约束行为、不惩罚表达的替代话术。",
    missing: "日记没有显示这些话术已经进入下一节课教案，也没有现场验证结果。",
    next: "把四句中最适合的一句写进下一节课教案，在一次课堂暂停时使用。",
    done: "教案中存在一句替代话术，并在课后留下“使用 / 未使用”的二元记录。",
    stop: "只替换一次纪律提示，不同时重做整套课堂管理方案。",
    tone: "mint",
  },
  {
    number: "02",
    title: "为不可推进的数据缺口写停止条件",
    basis: "昨日记录未填写名单无法由自己推进，并明确判断继续折腾没有实际效用。",
    missing: "现有记录没有一条可复用的停止规则，也没有一份将现有结果与外部缺口分开的说明。",
    next: "写下一句“现有数据处理完成后停止；未获得部分单列为外部缺口”，并保存缺口数量或状态。",
    done: "存在一条停止规则和一份去身份化缺口状态，二者均可复查。",
    stop: "不继续补猜、催促或清洗当前拿不到的数据。",
    tone: "blue",
  },
];

const learningResources: Array<{ type: string; title: string; meta: string; intro: string; why: string; focus: string[]; action: string; boundary: string; source: string; sourceLabel: string }> = [];

const weather = { location: "南宁", condition: "晴转多云", temperature: "22–30℃", icon: "🌤️" };

const planetPosts = planetPostsToday;

const deepReadAtoms = [
  { atom: "工具编排应分开按需发现与结果压缩", relation: "昨日的数据任务说明“继续处理所有缺口”并不等于推进结果；工作流也应只把当前能改变判断的工具与数据带入下一步。", question: "现有每日简报中，哪些输入必须预载，哪些只在特定栏目按需读取，哪些中间结果应先过滤？" },
  { atom: "Agent 风险应按完整工作流而非单条回答监测（临时）", relation: "今日简报同时依赖私密输入和公开输出；只检查最终页面文案不足以证明整个处理过程遵守了数据边界。", question: "自己的 Agent 任务最少应记录哪四项运行元数据，才能区分权限、输入、重试和输出位置？" },
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
              <div className="nav-sub"><a href="#hotlist">查看 2026 年 9 月 10 日完整榜单</a></div>
            </details>
          </nav>
          <p className="sidebar-note">点小标题直达正文 · 折叠内容会自动展开</p>
        </aside>

        <div className="page" id="top">
          <section className="hero">
            <div className="date-block"><div className="date-day">11</div><div><p className="date-month">2026 · 09</p><p className="date-week">星期五</p></div></div>
            <div className="hero-copy"><p className="eyebrow">TODAY&apos;S DIRECTION</p><h1>惩罚行为，<br />不要惩罚表达。</h1><p className="judgment">一边邀请真实表达，一边把回答、站起或上台变成惩罚，会让课堂机制与课程目标互相抵消。今天先把这段真实摩擦讲清楚，下一节课只验证一句替代话术。</p></div>
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
              <summary><span className="brief-index">行动</span><span className="brief-main"><span className="pill">今日行动建议</span><strong>完成一次“研究调用账本”实验</strong></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(actionAdvice, "action")}</div>
            </details>
          </section>

          <section className="section" id="planet"><div className="section-heading"><div><p className="eyebrow">JIANG HUSHUO</p><h2>姜胡说</h2></div><p>昨日 2 条星主原文</p></div><p><a className="archive-link" href="/daily-briefing/knowledge/2026-09-10/26-09-10姜胡说知识星球.md" target="_blank" rel="noopener noreferrer">查看 9 月 10 日原始归档 ↗</a></p>{planetPosts.length ? <div className="planet-list">{planetPosts.map((post) => <details className="planet-card" id={"planet-" + post.index} key={post.index}><summary><span className="planet-number">{post.index}</span><span><small>{post.author} · {post.published}</small><strong>{post.title}</strong></span><span className="planet-kind">原文</span></summary><div className="planet-body">{post.body.split("\n").map((line, i) => line ? <p key={i}>{line}</p> : <br key={i} />)}{post.images.map((src) => <img src={src} alt={post.title + " 原始图片"} key={src} />)}</div></details>)}</div> : <article className="review-card static-review-card" id="planet-status"><h3>昨日无星主更新</h3><div><p>2026 年 9 月 10 日精确日期归档没有星主原文。没有使用其他日期内容代替。</p></div></article>}
          </section>

          <section className="section" id="review"><div className="section-heading"><div><p className="eyebrow">PERSONAL REVIEW</p><h2>复盘</h2></div><p>事实、候选解释与 AI 建议分开呈现</p></div><div className="review-grid"><details className="review-card" id="yesterday-review" open><summary>昨日复盘</summary><div><p>昨日出现两个清楚的现实边界：一项数据工作被外部填写意愿和流程限制，继续投入无法改变结果；一节课堂则暴露出纪律手段与“安全表达”目标冲突。</p><p>本人也明确记录了睡眠不足和疲惫，这可能影响耐心、课堂节奏与挫败感，不能把当天全部问题都归因为方法错误或意愿不足。</p></div></details><article className="review-card static-review-card" id="seven-day-trend"><h3>近七天趋势</h3><div><p>近七天从线下交流、第一节正式课、连续课堂、资料回收、表格检查到课件迭代，现实摩擦持续被改写为更小的可观察问题：设备失效有没有备份、课堂目标是否清楚、纪律动作是否与表达目标冲突、某项工作是否真的在控制范围内。</p><p>这已是跨多个场景的重复信号，但替代解释仍包括新岗位提供密集反馈、睡眠波动降低耐受度，以及不同班级本身存在差异。</p></div></article><article className="review-card static-review-card diagnosis" id="cognitive-observation"><h3>AI 认知观察</h3><div><p><strong>证据等级：</strong>近七天重复模式。</p><p><strong>候选解释：</strong>当现场摩擦被拆成目标、行为和可见后果时，用户更容易形成可修改、可复查的判断。</p><p><strong>替代解释：</strong>新岗位、课堂差异与睡眠不足同样会让问题更突出；更具体的复盘不等于下一次结果一定改善。</p><p><strong>当前观察：</strong>昨日最有价值的变化不是又改了一版 PPT，而是识别到“纪律管理正在破坏课程想要的安全表达”这一机制冲突。</p></div></article><article className="review-card static-review-card diagnosis" id="minimum-action"><h3>最小行动建议</h3><div><p>如果选择主推题，只录一遍：讲一段课堂经历 → 说明“惩罚行为，不惩罚表达”的判断 → 引用一次去身份化的参与差异 → 说出下一节课只验证哪一句纪律话术。</p><p><strong>完成标准：</strong>保存一版 3–5 分钟原始草稿即停止；不要求剪辑、发布或先补一门课程。</p></div></article><article className="review-card static-review-card diagnosis" id="action-diagnosis"><h3>AI 执行力诊断 / 建议</h3><div><p>今天不新增方法库。先把四句替代纪律话术中的一句写进教案，用下一节课的实际结果判断它是否减少机制冲突。</p></div></article></div></section>

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
                <p><strong>AI 建议：</strong>昨日已经形成足够具体的课堂机制判断和四句替代话术。当前缺口是把其中一句带入下一节课并记录结果，而不是继续观看课堂管理或表达课程。</p>
                <p><strong>今天只练习：</strong>从四句替代话术中只选一句，写进下一节课教案；课后只记录“是否使用、学生是否恢复安静、是否仍有人主动表达”。完成这一条记录即停止。</p>
                <p><strong>适用边界：</strong>如果录制暴露出明确的知识或表达缺口，再针对该缺口寻找资源；今天不为填满栏目而推荐课程。</p>
              </div>
            </article>}
          </section>

          <section className="section" id="hotlist">
            <div className="section-heading"><div><p className="eyebrow">HOT LIST</p><h2>热点榜单</h2></div><p>2026 年 9 月 10 日完整榜单</p></div>
            <a className="hotlist" href="/daily-briefing/hotlist/2026-09-10.html" aria-label="打开热点榜单"><span>昨日榜单</span><strong>查看 2026 年 9 月 10 日完整榜单</strong><span className="arrow">↗</span></a>
          </section>

          <footer><p>惩罚行为，<br />不要惩罚表达。</p><span>每日 09:00 更新 · 完整内容折叠保存</span></footer>
        </div>
      </div>
    </main>
  );
}
