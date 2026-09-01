import { type ReactNode } from "react";
import { cloudBriefMarkdownToday } from "./cloud-brief-current";

const briefDate = "2026-09-01";

const tasks = [
  {
    number: "01",
    title: "把 8 月 31 日的思考录成一条 60–90 秒原始口述",
    source: "AI 建议",
    why: "昨日已经写出‘AI 解决执行，方向和判断仍由人负责’以及‘内容判断要用数据与现实碰撞’的完整材料；用户同时明确记录‘讨论完感觉就完了’‘不知道怎么分享’。今天不需要继续选题或补充资料，只需要完成从讨论到可检查表达的第一次转换。",
    question: "AI 已经能帮我做出第一版后，人的价值为什么仍然在定义问题、选择目标和根据反馈修正判断？",
    steps: ["打开 2.26年日记/8月日记/2026-08-31.md 第 20–70 行，不新增检索。", "用三段口述：我原来怎么理解 AI；短视频数据反馈这个具体例子；我现在的判断和它不适用的边界。", "录一遍 60–90 秒，转成文字后只修正明显口误。"],
    deliverable: "一段原始录音和一份对应文字稿。",
    done: "文字稿包含一个真实例子、一句可被现实推翻的判断和一个适用边界；保存即完成，不要求当天发布。",
    first: "打开 8 月 31 日日记，直接从‘我以前以为 AI 的价值是……’开始说",
    time: "最多 35 分钟",
    tone: "mint",
  },
];

const learningResources: Array<{ type: string; title: string; meta: string; intro: string; why: string; focus: string[]; action: string; boundary: string; source: string; sourceLabel: string }> = [];

const weather = { location: "南宁", condition: "多云到晴伴局地阵雨", temperature: "25–34℃", icon: "⛅" };

const planetPosts = [
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

const deepReadAtoms = [
  { atom: "上下文是有递减回报的有限注意力预算", relation: "今天不缺背景材料；更合适的上下文包是昨日原文的三段结构，而不是整个知识库。", question: "如果只允许 Agent 在今天的口述任务里看到四项信息，哪四项缺一不可？哪一项只是看起来相关？" },
  { atom: "平台收益门槛会反向塑造创作者供给", relation: "今天不需要追逐收益门槛，但复盘内容时应按目标区分触达、观看、互动与商业结果。", question: "如果平台把某个指标设成收益资格，你会因此改变什么内容行为？这种改变是在服务用户，还是在服务平台门槛？" },
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
              <div className="nav-sub"><a href="#hotlist">查看 2026 年 8 月 31 日完整榜单</a></div>
            </details>
          </nav>
          <p className="sidebar-note">点小标题直达正文 · 折叠内容会自动展开</p>
        </aside>

        <div className="page" id="top">
          <section className="hero">
            <div className="date-block"><div className="date-day">01</div><div><p className="date-month">2026 · 09</p><p className="date-week">星期二</p></div></div>
            <div className="hero-copy"><p className="eyebrow">TODAY&apos;S DIRECTION</p><h1>先把两小时的思考，<br />变成一次可听的第一版。</h1><p className="judgment">今天不继续补知识，只录一次 60–90 秒原始口述，让讨论第一次留下可检查结果。</p></div>
            <div className="hero-weather" aria-label={weather.location + "当天天气：" + weather.condition + "，" + weather.temperature}>
              <span className="weather-icon">{weather.icon}</span>
              <span className="weather-copy"><strong>{weather.condition}</strong><small>{weather.location} · {weather.temperature}</small></span>
            </div>
          </section>

          <section className="section" id="today">
            <div className="section-heading compact-heading"><div><p className="eyebrow">TODAY&apos;S PRIORITY</p><h2>今天只做一件事</h2></div><p>不补课，先留下可听的第一版</p></div>
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
            <section className="schedule" id="schedule"><div><span>恢复</span><p>早餐、补水和简单活动后再开始；腰部或睡眠状态不佳时不安排拍摄。</p></div><div><span>交付｜35 分钟</span><p>5 分钟看昨日原文，10 分钟口述，15 分钟转写与修正，5 分钟保存并记录结果。</p></div><div><span>结束</span><p>第一版普通也不继续找课程、案例或工具；保存后再决定是否进入短视频流程。</p></div></section>
            <details className="brief-item" id="risk"><summary><span className="brief-index">风险</span><span className="brief-main"><span className="pill">今日边界</span><strong>不要让继续讨论替代一次原始表达</strong><span>身体状态是真实约束，任务只到口述与文字稿</span></span><span className="plus">＋</span></summary><div className="brief-content"><p>午后困倦、环境变化和腰部不适可能真实降低执行能力，因此今天不要求拍摄、剪辑或发布。</p><p>主要执行风险是再次用新课程和更多讨论包围已经足够完整的判断。</p></div></details>
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
              <summary><span className="brief-index">行动</span><span className="brief-main"><span className="pill">今日行动建议</span><strong>完成 rules.md + task.md 两层记忆实验</strong></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(actionAdvice, "action")}</div>
            </details>
          </section>

          <section className="section" id="planet"><div className="section-heading"><div><p className="eyebrow">JIANG HUSHUO</p><h2>姜胡说</h2></div><p>昨日 3 条星主原文</p></div><p><a className="archive-link" href="/daily-briefing/knowledge/2026-08-31/26-08-31姜胡说知识星球.md" target="_blank" rel="noopener noreferrer">查看 8 月 31 日原始归档 ↗</a></p><div className="planet-list">{planetPosts.map((post) => <details className="planet-card" id={"planet-" + post.index} key={post.index}><summary><span className="planet-number">{post.index}</span><span><small>{post.author} · {post.published}</small><strong>{post.title}</strong></span><span className="planet-kind">原文</span></summary><div className="planet-body">{post.body.split("\n").map((line, i) => line ? <p key={i}>{line}</p> : <br key={i} />)}{post.images.map((src) => <img src={src} alt={post.title + " 原始图片"} key={src} />)}</div></details>)}</div></section>

          <section className="section" id="review"><div className="section-heading"><div><p className="eyebrow">PERSONAL REVIEW</p><h2>复盘</h2></div><p>事实与 AI 建议分开呈现</p></div><div className="review-grid"><details className="review-card" id="yesterday-review" open><summary>昨日复盘</summary><div><p>8 月 31 日睡眠较前几天改善，完成了阅读、长时间讨论和游泳。日记中已经形成关于“AI 扩大执行半径、人负责方向与判断”以及“内容通过数据反馈修正判断”的成体系文字；但“可验证输出”“实际完成”“逃避了什么”三项没有填写，用户本人也明确写下讨论结束后不知道如何分享。因此，昨日不是没有思考，而是思考尚未转成外部可检查的表达。</p></div></details><article className="review-card static-review-card" id="seven-day-trend"><h3>近七天趋势</h3><div><p>过去七天完成过第四条视频、两次兼职面试和一次培训，说明在任务具体、环境变化或存在外部约定时能够行动。反复出现的卡点是：输入与讨论结束后，缺少一个固定的停止点和交付物，导致现实反馈没有进入下一轮判断。</p></div></article><article className="review-card static-review-card diagnosis" id="cognitive-observation"><h3>AI 认知观察</h3><div><p><strong>证据等级：</strong>重复模式。</p><p><strong>观察：</strong>8 月 27 日的“具体视频＋图书馆＋先口述”形成了成品；8 月 31 日已经有内容材料，但讨论没有被转换成口述或草稿。</p><p><strong>候选解释：</strong>探索过程提供即时满足，也降低了面对表达质量和受众反馈的风险。</p><p><strong>替代解释：</strong>午后困倦、回家后的环境变化与腰部不适可能真实降低执行能力。</p></div></article><article className="review-card static-review-card diagnosis" id="minimum-action"><h3>最小行动建议</h3><div><p><strong>行动：</strong>只录一次 60–90 秒原始口述。</p><p><strong>最大范围：</strong>35 分钟，不补充资料，不要求发布。</p><p><strong>可观察产物：</strong>一段原始录音和对应文字稿。</p><p><strong>完成标准：</strong>包含一个真实例子、一句可被现实推翻的判断和一个适用边界。</p></div></article><article className="review-card static-review-card diagnosis" id="action-diagnosis"><h3>AI 执行力诊断 / 建议</h3><div><p>当前主要问题不是不会分析，而是没有规定“讨论到什么时候算够、结束时必须留下什么”。今天用一次 60–90 秒口述建立最小转换规则：观点出现后先留下可听、可改的第一版，再决定要不要继续学习或制作。</p></div></article></div></section>

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
                <p><strong>AI 建议：</strong>今天的最小任务是把昨日已经形成的判断转成一次 60–90 秒原始口述。云端早报和两篇深读已经提供足够背景，继续加入课程会扩大输入。</p>
                <p><strong>今天只练习：</strong>只读昨日关于 AI 执行、人的判断与短视频数据反馈的三段，录一次口述；录完标记一句最卡顿的位置。</p>
                <p><strong>适用边界：</strong>如果口述暴露出明确技能缺口，再为该缺口寻找一项原始教学资源；今天不预先消费课程。</p>
              </div>
            </article>}
          </section>

          <section className="section" id="hotlist">
            <div className="section-heading"><div><p className="eyebrow">HOT LIST</p><h2>热点榜单</h2></div><p>2026 年 8 月 31 日完整榜单</p></div>
            <a className="hotlist" href="/daily-briefing/hotlist/2026-08-31.html" aria-label="打开热点榜单"><span>昨日榜单</span><strong>查看 2026 年 8 月 31 日完整榜单</strong><span className="arrow">↗</span></a>
          </section>

          <footer><p>把两小时的思考，<br />变成一次可听的第一版。</p><span>每日 09:00 更新 · 完整内容折叠保存</span></footer>
        </div>
      </div>
    </main>
  );
}
