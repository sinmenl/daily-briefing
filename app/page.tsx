const briefDate = "2026-08-09";

const tasks = [
  { number: "01", title: "先恢复睡眠与皮肤，不用运动证明自律", body: "昨日日记记录凌晨四点才睡，脚部水泡碰水仍痛，大腿摩擦处出现红疹。今天的事实边界是身体需要恢复；不把游泳、暴走或新的高强度计划当成补偿。", first: "正常吃饭补水，清洁并保持摩擦处干燥", time: "30 分钟主动处理，其余留作恢复", tone: "mint" },
  { number: "02", title: "把一个理论压成一条能被检验的表达", body: "昨天最清楚的矛盾不是没有知识，而是理论没有经过现实使用。只选“任务思维与结果思维”这一点，面向一个具体的人，用一个真实工作经历讲清楚，不再增加资料。", first: "写一句：这条内容帮谁看懂哪个具体误区", time: "45–60 分钟", tone: "blue" },
  { number: "03", title: "让一个真人告诉你哪里没讲清楚", body: "能力不是一次人格判决，而是在明确条件下能否重复产生结果。今天只把第一版发给一位可信任的人，询问能否复述重点、哪句最难懂、是否有实际帮助。", first: "发送录音或文字，并只问三个固定问题", time: "15–20 分钟", tone: "peach" },
];

const creatorUpdates = [
  { hasUpdate: false, tag: "dontbesilent", title: "8 月 8 日未发现可核验的公开更新", intro: "X 无完整时间证据；GitHub API 显示昨日无提交。", content: ["公开检索没有取得能够同时确认 8 月 8 日发布时间与完整正文的 @dontbesilent X 新帖，因此不拿历史推文补位。", "GitHub API 按北京时间 8 月 8 日的完整时间窗口核验 dontbesilent2025/dbskill，结果没有提交记录。仓库当前内容仍可作为方法背景，但不属于昨日动态。", "今日状态：昨日未发现可核验更新。"], source: "https://github.com/dontbesilent2025/dbskill", sourceLabel: "dbskill 公开仓库" },
  { hasUpdate: false, tag: "Dan Koe", title: "8 月 8 日未发现可核验的新长文", intro: "Newsletter、Blog 与公开搜索均无昨日完整更新。", content: ["本次没有发现可以可靠确认于 8 月 8 日发布的 Newsletter、Blog 或完整 X 更新。", "旧文章即使仍然相关，也不能被包装成昨日新内容。本期只保留核验结果，不用历史观点占位。", "今日状态：昨日未发现可核验更新。"], source: "https://thedankoe.com/", sourceLabel: "Dan Koe 公开主页" },
  { hasUpdate: false, tag: "Naval", title: "8 月 8 日未发现可核验的新节目", intro: "官网与公开结果没有昨日新文章或节目。", content: ["Naval 官网与公开检索没有出现能够确认于 8 月 8 日发布的新节目或文章。", "因此本期不重复较早节目，也不把旧观点改写成昨日动态。", "今日状态：昨日未发现可核验更新。"], source: "https://nav.al/", sourceLabel: "Naval 官网" },
  { hasUpdate: false, tag: "姜胡说", title: "8 月 8 日未发现可完整核验的抖音更新", intro: "公开搜索无法同时取得本人账号、准确时间和完整口播。", content: ["按照固定规则只核验姜胡说本人抖音账号。公开搜索没有取得能够同时确认 8 月 8 日发布时间与完整口播的本人视频。", "搜索结果中存在同名或转载账号，不能据此推断星主本人当日发布，因此不纳入。", "今日状态：昨日未发现可核验公开更新。"], source: "https://www.douyin.com/search/%E5%A7%9C%E8%83%A1%E8%AF%B4", sourceLabel: "姜胡说抖音公开搜索" },
];

const visibleCreatorUpdates = creatorUpdates.filter((item) => item.hasUpdate);

const industryStories = [
  { tag: "产品能力", title: "AI 产品经理课程把重点从“会提示词”转向“定义、评估与交付”", intro: "8 月 8 日举行的公开课程，把 AI PM 的新技能栈作为核心。", source: "https://maven.com/p/47d8b0/open-ai-pm-become-a-frontier-ai-native-product-manager", sourceLabel: "Maven 活动原页", content: <>
<p>Maven 的公开活动页面显示，“OpenAI PM: Become a Frontier AI-Native Product Manager”于 8 月 8 日举行，页面把课程重点写成新的 AI 产品经理技能栈，并明确指出许多产品经理仍停留在提示词和工具的表层。</p>
<p>
<strong>为什么重要：</strong>这说明 AI 产品工作的评价标准正在从“有没有用 AI”转向“能否把不确定能力变成可靠结果”。会生成原型只是起点，产品经理仍要定义用户任务、构造评估标准、处理失败边界，并确认用户是否真的采用结果。</p>
<p>
<strong>产品视角：</strong>传统功能通常可以写出确定输入和输出；AI 功能存在概率性，因此需求文档还要回答：正确到什么程度才可用、什么错误必须拦截、何时交还给人、怎样观察信任随时间变化。</p>
<p>
<strong>实践建议：</strong>做 AI 知识库内容时，不只展示“它回答了什么”，同时展示你如何判定答案可用、哪里仍需核验、一次错误如何恢复。这样观众看到的是产品判断，而不只是工具演示。</p>
<p>
<strong>适用边界：</strong>活动页能够核验日期和课程定位，但无法替代完整课程内容；本条只分析公开页面明确写出的信息，不推断讲师未公开表达的观点。</p>
</> },
  { tag: "用户研究", title: "设计社群把“未完成的混乱现场”变成用户反馈入口", intro: "IxDF Pune 8 月 8 日的活动明确禁止只展示精修作品集。", source: "https://ixdf.org/meetups/creative-chaos-coffee-aug-8th-2026", sourceLabel: "IxDF 活动原页", content: <>
<p>Interaction Design Foundation Pune 在 8 月 8 日举行 “Creative Chaos & Coffee”。活动要求参与者带上凌乱线框、正在卡住的设计挑战或尚未完成的副项目，规则甚至写明“不展示精修作品集”。</p>
<p>
<strong>为什么重要：</strong>成品展示更容易获得称赞，却很难暴露真正的决策困难；半成品反而包含用户研究最有价值的材料：哪里犹豫、哪里缺证据、哪些方案已经试过、为什么无法继续。</p>
<p>
<strong>用户研究视角：</strong>如果只在项目完成后复盘，研究得到的是被整理过的成功叙事。让用户展示进行中的工作，可以观察真实行为和权衡，减少“我平时大概会这样做”的回忆偏差。</p>
<p>
<strong>实践建议：</strong>今天的 60 秒表达不需要先打磨成作品。把第一版给一个真人看，只问三件事：他听懂了什么、哪里断了、是否对他有用。这相当于把“混乱现场”变成研究入口。</p>
<p>
<strong>适用边界：</strong>同行互评不等于目标用户研究。设计师觉得结构清楚，不代表普通观众会使用；反馈对象仍应尽量接近真正受众。</p>
</> },
  { tag: "传播研究", title: "AIM-CC 2026 把 AI 引入传播研究的方法训练", intro: "8 月 8 日开幕，关注大模型、嵌入与生成式 Agent 如何改变传播研究。", source: "https://nu.edu.kz/eventsm/ai-metods-in-computational-communication-aim-cc-2026/", sourceLabel: "Nazarbayev University 活动原页", content: <>
<p>Nazarbayev University 公布的 AIM-CC 2026 于 8 月 8 日开始，由该校与 Kazakhstan Sociology Lab 等机构组织。公开介绍指出，计算传播研究正在被大语言模型、嵌入方法、生成式 Agent 和 AI 辅助实验设计重新塑造。</p>
<p>
<strong>为什么重要：</strong>内容创作不只是表达技巧，也可以被当作可研究的传播过程：什么对象在什么情境下接收信息、哪个结构让他理解、哪些表述产生误解、反馈如何改变下一版。</p>
<p>
<strong>产品或研究视角：</strong>AI 可以扩大材料整理和模式发现的规模，但研究结论仍需回到原始证据。模型发现“观众喜欢对比结构”只是待验证假设，必须结合真实观看行为、原话和反例。</p>
<p>
<strong>实践建议：</strong>建立最小实验记录：发布前写出希望观众记住的一句话；发布后记录三位观众实际复述；比较两者偏差。AI 负责聚类和找反例，人负责判断偏差意味着什么。</p>
<p>
<strong>适用边界：</strong>本条依据公开活动介绍，不把会议议程当作已经完成并发表的研究结论；真正采用方法前仍应阅读具体论文和实验设计。</p>
</> },
];

const planetPosts = [
  { time: "2026-08-08 10:30", title: "换赛道与任务思维", text: `说几个我看到的我们老伙计可能存在的问题：

1、遇到困难时，第一个想法不是怎么搞定困难，而是跑去看别的赛道；觉得应该是赛道选错了，换个赛道会好一些。我给你一个最简单的审核标准：你是否曾经把一个赛道做深做透过？如果没有，我认为首先是你的问题。你换个赛道，问题还在；最多就是换了另一种新的形式出现。

2、任务思维。这是最普遍的。就是我已经做了xxx多少次、多少遍、多少条了，怎么还没有出成绩？如果你之前一直是打工，从来没创过业，那我明确的告诉你：学习的目的是为了学会，不是读多少书上多少课。赚钱的逻辑是你解决了什么问题，不是你做了多少事。这个思路转不过来，你最好的归宿就是打一辈子工；没错，这还是最好的归宿，至少你还有工可打。随着AI和机器人的来临，你很有可能连工都没得打了。` },
];

const xiaobotText = `怎么起号？怎么选题？方法学了一大堆，播放量还是原地不动。
问题不一定出在努力，更多时候，出在学习方法。

别人的方法可以借鉴，但真正能让你起作用的，一定是你能内化、能复现的方法。

先诊断，再内化，然后用工具反复打磨。

大部分人学自媒体，基本上就卡在这几层：

L1 信息层：“怎么起号？怎么投流？”
L2 迁移层：“我拆了爆款，拍出来就是不对味”
L3 行为层：“知道该怎么做，就是坚持不下来”
L4 身份层：“数据不好，我不适合做这个”
L5 使命层：“做自媒体的意义是什么？”

大多数人的问题是：囤了一仓库别人的知识，却和自己无关，因为它还没变成你的动作。

你不过是存了一个检索路径，而不是可执行的程序。和刷了10条减肥视频不会瘦，一个道理。

怎么办？三条

第一条：一篇对应一个问题。
下次收藏时问问自己：这个能解决我的哪个具体问题？不知道，没必要收藏。

第二条：48小时定律。
给自己设一个48小时内的最小执行。做完它，然后写三句话记录。
不懂也要做，不是懂了才做，是做了才懂。

第三条：重新理解。
第一次照做，第二次调整，第三次重新理解。
笔记不算，重要的是能不能在真实场景里用出来，并且稳定复现。

我看我们大部分老伙计用AI的方法就是：“帮我写一个口播脚本”。然后呢？

好在哪？为什么这么写？不知道。

这样拿到的，只是一个成品，不是你的理解。AI能帮你干的事，也能帮别人干；甚至干得更好。

你的价值不在于会不会让 AI 代写内容，而在于你能不能真正理解你要表达的东西。

我很少把重点放在写脚本上，而是把更多精力放在理解知识本身上。每一次输出，都是对这个知识的又一次重新理解。

我之前很擅长讲课，知道怎么讲线下课，擅长使用各种道具、各种方法来营造现场的氛围。后来我把所有额外的动作全去了，只做一件事：讲，认认真真把这个知识讲透讲清楚，讲明白。不依靠任何技术。

真正的 IP，不只是内容包装和话术技巧，而是你身上有稳定、可持续输出的理解力和生活状态。技巧要有，但技巧只是放大器，不是核心。

我一般会这么使用AI：S → P → A → R

S：说出来。
把你对概念的理解讲给 AI 听，让它只追问，不直接给答案。说不下去的地方——你要补的课就在那儿。

P：压力测试。
让 AI 用极端场景推翻你的结论，看它在哪些条件下不成立。你的目标不是战胜它，而是看到你的边际在哪儿。

查理·芒格在 2014 年南加州大学毕业典礼演讲中说过：

“I’m not entitled to have an opinion on this subject unless I can state the arguments against my position better than the people who are supporting it.”

“我没资格拥有一个观点，除非我能比对手更好地反驳自己的立场。”

A：核查证据。
分清事实、推测和幻觉，不把 AI 的话直接当结论。

R：固化成条目（我个人是知识卡片）。
把修正后的理解写成定义、场景、边界，后面可以反复调用。

当你能够深刻理解你要分享的知识的时候。就没有必要为内容分神了。你可以把所有的精力用在与镜头前的观众沟通上。全情投入，且真诚。

保留瑕疵。真实是最宝贵的资产。很多人一遇到瑕疵就停下来，或者后期过度修剪，反而把真实感磨没了。

这样分享出来的知识才是资产。就算暂时没有播放量，你也不会太当回事儿；你知道它有价值，所以不会因为暂时没播放量就轻易否定自己。且不会随着时间的推移，过期。

当你看到一个对你有用的知识的时候，你要做的第一件事情不是如何把它变成短视频。而是这个知识对我是不是有用？可以解决我的那些问题？花时间认真研究它。把它应用在你的生活中。

真正能成为 IP 的人，往往不是因为短视频技法有多强，而是因为别人能感受到他的状态、理解和表达是稳定的。真正能长期输出的人，不是靠不断消耗自己去追内容，而是先把自己活成一个有内容的人。内容，是生活的溢出，不是精神的消耗。`;

const weather = { location: "南宁", condition: "晴间多云", temperature: "27–35℃", icon: "☀️" };

function SourceLink({ href, label }: { href: string; label: string }) {
  return <p>
<a className="archive-link" href={href}>阅读原始来源：{label} ↗</a>
</p>;
}

export default function Home() {
  return (
    <main data-brief-date={briefDate}>
      <header className="topbar">
<a className="brand" href="#top" aria-label="返回顶部">
<span className="brand-dot" />蔓蔓的早课</a>
<div className="top-actions">
<button className="menu-button" type="button" aria-label="打开阅读目录" aria-controls="content-menu" aria-expanded="false" data-menu-button>
<span />
<span />
<span />
</button>
<details className="date-picker">
<summary aria-label="选择简报日期">
<span className="calendar-symbol" aria-hidden="true">▦</span>
<span>{briefDate.replaceAll("-", ".")}</span>
<span className="chevron">⌄</span>
</summary>
<nav className="date-list" data-archive-list="true" aria-label="选择过往简报日期">
<a href="?date=2026-08-09" aria-current="page">2026年8月9日</a>
</nav>
</details>
<div className="status">
<span className="status-dot" />每天自动更新</div>
</div>
</header>
      <button className="sidebar-overlay" type="button" aria-label="关闭阅读目录" data-menu-close />
      <div className="app-shell">
        <aside className="sidebar" id="content-menu" aria-label="简报阅读目录">
<div className="sidebar-head">
<div>
<span className="sidebar-kicker">CONTENTS</span>
<strong>今天看什么</strong>
</div>
<button className="menu-close" type="button" aria-label="关闭阅读目录" data-menu-close>×</button>
</div>
<nav className="sidebar-nav">
          <details className="nav-group" data-nav-group>
<summary className="nav-title">
<span className="nav-icon icon-focus">✓</span>
<span>今日计划</span>
<span className="nav-chevron">⌄</span>
</summary>
<div className="nav-sub">{tasks.map((task, i) => <a href={`#task-${i + 1}`} key={task.title}>{task.title}</a>)}<a href="#schedule">今日时间块</a>
<a href="#risk">今日风险</a>
</div>
</details>
          <details className="nav-group" data-nav-group>
<summary className="nav-title">
<span className="nav-icon icon-briefing">▤</span>
<span>每日资讯</span>
<span className="nav-chevron">⌄</span>
</summary>
<div className="nav-sub">{visibleCreatorUpdates.map((item, i) => <a href={`#creator-${i + 1}`} key={item.tag}>{item.tag}：{item.title}</a>)}{industryStories.map((item, i) => <a href={`#story-${i + 1}`} key={item.title}>{i + 1}. {item.title}</a>)}<a href="#product-observation">产品观察：从展示工具到验证结果</a>
<a href="#early-action">今日行动建议</a>
</div>
</details>
          <details className="nav-group" data-nav-group>
<summary className="nav-title">
<span className="nav-icon icon-planet">✦</span>
<span>姜胡说</span>
<span className="nav-chevron">⌄</span>
</summary>
<div className="nav-sub">{planetPosts.map((item, i) => <a href={`#planet-${i + 1}`} key={item.time}>大胡子：{item.title}</a>)}<a href="#xiaobaotong-1">小报童：自媒体学习方法论</a>
</div>
</details>
          <details className="nav-group" data-nav-group>
<summary className="nav-title">
<span className="nav-icon icon-review">↺</span>
<span>复盘</span>
<span className="nav-chevron">⌄</span>
</summary>
<div className="nav-sub">
<a href="#yesterday-review">昨日复盘</a>
<a href="#seven-day-trend">近七天趋势</a>
<a href="#action-diagnosis">AI 执行力诊断</a>
</div>
</details>
          <details className="nav-group" data-nav-group>
<summary className="nav-title">
<span className="nav-icon icon-briefing">↗</span>
<span>今日深读</span>
<span className="nav-chevron">⌄</span>
</summary>
<div className="nav-sub">
<a href="#deep-read-1">AI 产品经理的新技能栈</a>
<a href="#deep-read-2">展示未完成的设计现场</a>
<a href="#deep-read-3">AI 与计算传播方法</a>
</div>
</details>
          <details className="nav-group" data-nav-group>
<summary className="nav-title">
<span className="nav-icon icon-hotlist">↗</span>
<span>热点榜单</span>
<span className="nav-chevron">⌄</span>
</summary>
<div className="nav-sub">
<a href="#hotlist">查看 2026 年 8 月 8 日完整榜单</a>
</div>
</details>
        </nav>
<p className="sidebar-note">点小标题直达正文 · 折叠内容会自动展开</p>
</aside>

        <div className="page" id="top">
          <section className="hero">
<div className="date-block">
<div className="date-day">09</div>
<div>
<p className="date-month">2026 · 08</p>
<p className="date-week">星期日</p>
</div>
</div>
<div className="hero-copy">
<p className="eyebrow">TODAY&apos;S DIRECTION</p>
<h1>今天不换方向，<br />只让一个理论接受现实检验。</h1>
<p className="judgment">昨天睡眠和身体状态不佳，也明确看见“理论多、实践少、遇难就想换”的循环。今天缩减为恢复身体、完成一条表达、拿到一次真人反馈；不增加系统，也不拿任务数量代替结果。</p>
</div>
<div className="hero-weather" aria-label={`${weather.location}当天天气：${weather.condition}，${weather.temperature}`}>
<span className="weather-icon">{weather.icon}</span>
<span className="weather-copy">
<strong>{weather.condition}</strong>
<small>{weather.location} · {weather.temperature}</small>
</span>
</div>
</section>

          <section className="section" id="today">
<div className="section-heading compact-heading">
<div>
<p className="eyebrow">THREE PRIORITIES</p>
<h2>今天只做三件事</h2>
</div>
<p>AI 建议：恢复优先，只推进一个可被检验的结果</p>
</div>
<div className="task-grid">{tasks.map((task, i) => <article className={`task-card ${task.tone}`} id={`task-${i + 1}`} key={task.number}>
<span className="task-number">{task.number}</span>
<h3>{task.title}</h3>
<p>{task.body}</p>
<div className="task-meta">
<span>第一步</span>
<strong>{task.first}</strong>
</div>
<div className="task-time">{task.time}</div>
</article>)}</div>
<div className="time-block-heading" id="schedule-heading">
<div>
<p className="eyebrow">TIME BLOCKS</p>
<h3>今日时间块</h3>
</div>
<p>睡眠和皮肤负荷偏高，安排留出一半缓冲</p>
</div>
<section className="schedule" id="schedule">
<div>
<span>上午 / 起床后</span>
<p>正常吃饭、补水，处理脚部水泡和摩擦红疹。若仍疼痛，不游泳、不暴走；今天不靠运动量证明自己恢复了。</p>
</div>
<div>
<span>下午 / 精力较好时</span>
<p>选择“任务思维与结果思维”一个观点，用 45–60 分钟写成 60–90 秒文字或录音。只用一个真实工作经历，不补课、不搭系统。</p>
</div>
<div>
<span>晚上</span>
<p>把第一版发给一位可信任的人，询问能否复述重点、哪句难懂、是否有帮助。收到反馈后只记一处改动，随后停止工作并提前进入睡眠窗口。</p>
</div>
</section>
<details className="brief-item" id="risk">
<summary>
<span className="brief-index">风险</span>
<span className="brief-main">
<span className="pill">今日边界</span>
<strong>三个可能让计划失效的触发点</strong>
<span>只识别，不再增加任务</span>
</span>
<span className="plus">＋</span>
</summary>
<div className="brief-content">
<p>
<strong>用更多理论避免被评价：</strong>今天不搜索新的增长方法，只使用昨天已经写下的一个判断。</p>
<p>
<strong>把第一版升级成账号战略：</strong>不要求拍摄、剪辑、封面和公开发布；先让一个真人听懂。</p>
<p>
<strong>把恢复解释成懒惰：</strong>凌晨四点入睡并有水泡、红疹时，缩减运动是身体边界，不是逃避。恢复完成后再恢复常规训练。</p>
</div>
</details>
</section>

          <section className="section" id="briefing">
<div className="section-heading">
<div>
<p className="eyebrow">DAILY INFORMATION</p>
<h2>每日资讯</h2>
</div>
<p>云端早报连续两次真实超时，本期采用公开核验兜底</p>
</div>
<div className="section-context">
<p>
<strong>统计窗口：2026 年 8 月 8 日。</strong> 对无法准确核验为昨日发布的博主内容，不使用旧内容补位；周末公开更新较少，本期只收录 3 条有明确日期与原始页面的动态。</p>
<p>
<strong>今日核心判断（早报分析）：</strong>AI 产品与内容能力正在从“会不会生成”转向“能否定义结果、暴露过程并接受反馈”。昨天可核验的三个公开活动分别强调 AI PM 的新技能栈、展示未完成的设计现场，以及 AI 进入传播研究方法；共同点不是更多工具，而是让不确定过程变得可以观察和校准。</p>
</div>
{visibleCreatorUpdates.length > 0 && <div className="brief-list">{visibleCreatorUpdates.map((item, i) => <details className="brief-item" id={`creator-${i + 1}`} key={item.tag}>
<summary>
<span className="brief-index">人</span>
<span className="brief-main">
<span className="pill">{item.tag}</span>
<strong>{item.title}</strong>
<span>{item.intro}</span>
</span>
<span className="plus">＋</span>
</summary>
<div className="brief-content">{item.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<SourceLink href={item.source} label={item.sourceLabel} />
</div>
</details>)}</div>}
<div className="section-heading compact-heading">
<div>
<p className="eyebrow">YESTERDAY&apos;S STORIES</p>
<h2>昨日可核验动态：3 条</h2>
</div>
<p>未满 5 条，不为凑数扩大搜索</p>
</div>
<div className="brief-list">{industryStories.map((story, i) => <details className="brief-item" id={`story-${i + 1}`} key={story.title}>
<summary>
<span className="brief-index">{String(i + 1).padStart(2, "0")}</span>
<span className="brief-main">
<span className="pill">{story.tag}</span>
<strong>{story.title}</strong>
<span>{story.intro}</span>
</span>
<span className="plus">＋</span>
</summary>
<div className="brief-content">{story.content}<SourceLink href={story.source} label={story.sourceLabel} />
</div>
</details>)}</div>
            <details className="brief-item" id="product-observation">
<summary>
<span className="brief-index">观察</span>
<span className="brief-main">
<span className="pill">今日产品观察</span>
<strong>从“展示我会用工具”转向“展示结果怎样被验证”</strong>
<span>真正的产品能力，是让不确定过程可以被观察、纠错与复现。</span>
</span>
<span className="plus">＋</span>
</summary>
<div className="brief-content">
<p>今天三条公开动态虽然分别来自产品课程、设计社群和传播研究，却共同回答一个问题：<strong>怎样把“我做了很多”变成“我解决了什么”。</strong>
</p>
<p>AI PM 需要定义评估和失败边界；设计活动要求展示尚未完成的混乱现场；传播研究把观众行为、内容结构和反馈当作可以观察的变量。它们都在拒绝只看任务数量和精修成品。</p>
<p>对 AI 知识库内容而言，单纯展示“导入了多少资料、生成了什么答案”仍然是任务展示。结果展示应包括：一个具体的人原来卡在哪里、系统做了哪一步、用户是否实际采用、哪里仍然错误、下一轮怎样修正。</p>
<p>这也给产品设计一个更稳定的结构：<strong>任务定义 → 第一版 → 真人行为 → 偏差 → 修正。</strong>每轮只验证一个有限问题，就不会把一次结果变成对整个人能力的判决。</p>
<p>
<strong>适用边界：</strong>小样本反馈不能代表市场，只能帮助暴露表达和流程问题。要判断商业需求，还需要更多真实用户和付费行为。</p>
</div>
</details>
            <details className="brief-item" id="early-action">
<summary>
<span className="brief-index">行动</span>
<span className="brief-main">
<span className="pill">今日行动建议</span>
<strong>做一次“未完成作品展示”</strong>
<span>不给自己增加公开发布压力，先取得一条真实反馈。</span>
</span>
<span className="plus">＋</span>
</summary>
<div className="brief-content">
<p>选昨天写下的“任务思维与结果思维”，只写或录 60–90 秒。</p>
<p>内容只保留四步：一个真实工作场景；当时如何用“我已经做了很多”解释结果；老板或用户真正要的是什么；现在会怎样重新定义任务。</p>
<p>把第一版交给一个不熟悉这套理论的人，只问：你能复述重点吗？哪一句最难懂？它对你有没有实际帮助？</p>
<p>不要问“我讲得好不好”，因为那会把有限反馈重新变成人格评价。今天的目标只是获得一个可以修正的具体位置。</p>
<p>
<strong>完成标准：</strong>一份可听或可读的第一版，加上一条真人原话。没有封面、剪辑和数据，也算完成。</p>
</div>
</details>
          </section>

          <section className="section" id="planet">
<div className="section-heading">
<div>
<p className="eyebrow">JIANG HUSHUO</p>
<h2>姜胡说</h2>
</div>
<p>前一天知识星球原文与一篇相关小报童文章</p>
</div>
<div className="section-context">
<p>
<strong>昨日归档区间：</strong>2026-08-07 23:30 至 2026-08-08 23:30。共 1 条星主原文；以下忠实保留，不添加额外解读或用户观点区块。</p>
</div>{planetPosts.map((post, i) => <details className="planet-card" id={`planet-${i + 1}`} key={post.time}>
<summary>
<div className="avatar">胡</div>
<div>
<span className="planet-time">大胡子 · {post.time}</span>
<strong>{post.title}</strong>
<span>点击展开完整星主原文</span>
</div>
<span className="open-label">原文</span>
</summary>
<div className="planet-content">
<div className="original">
<span>星主原文</span>
<p style={{ whiteSpace: "pre-wrap" }}>{post.text}</p>{i === planetPosts.length - 1 && <SourceLink href="/daily-briefing/knowledge/2026-08-08/26-08-08姜胡说知识星球.md" label="查看 8 月 8 日原始归档" />}</div>
</div>
</details>)}<details className="planet-card" id="xiaobaotong-1">
<summary>
<div className="avatar">读</div>
<div>
<span className="planet-time">小报童 · 姜胡说 · 2026-06-08 13:56:19</span>
<strong>自媒体学习方法论：从诊断到操作</strong>
<span>点击展开完整小报童原文</span>
</div>
<span className="open-label">原文</span>
</summary>
<div className="planet-content">
<div className="original">
<span>小报童原文</span>
<p style={{ whiteSpace: "pre-wrap" }}>{xiaobotText}</p>
<SourceLink href="https://xiaobot.net/post/4a08ef17-8e9e-46cb-8502-b7dfb53329a2" label="小报童原文" />
</div>
</div>
</details>
</section>

          <section className="section" id="review">
<div className="section-heading">
<div>
<p className="eyebrow">PERSONAL REVIEW</p>
<h2>复盘</h2>
</div>
<p>事实与 AI 建议分开呈现</p>
</div>
<div className="review-grid">
<details className="review-card" id="yesterday-review" open>
<summary>昨日复盘</summary>
<div>
<p>
<strong>事实：</strong>8 月 8 日日记记录凌晨四点才睡；脚部水泡尚未结痂、碰水仍痛，大腿摩擦处出现红疹，因此放弃游泳。当天阅读了知识星球，并结合过去工作经历写下对换赛道、任务思维、用户需求和增长能力的反思。</p>
<p>
<strong>完成与未完成：</strong>完成了知识星球阅读，也把“付出很多但没有解决老板需求”“理论多却没有实践”写得具体；日记没有记录完成、发布或交付视频，因此不把内容产出写成已完成。</p>
<p>
<strong>情绪与精力信号：</strong>睡眠和身体负荷仍然偏高；同时出现明显挫败——拥有许多理论却无法使用，会让人迫切想换赛道。好的一面是，问题已经从笼统的“我不行”缩小为用户需求、增长和现实反馈不足。</p>
<p>
<strong>需延续：</strong>继续把任务改写成希望用户或老板获得什么结果，并允许一次测试只回答一个有限问题。</p>
<p>
<strong>需避免：</strong>不要用新的赛道、新课程或新系统消除挫败；它们会让能力暂时免于检验，却不会产生 2.0 能力。</p>
<p className="advice">
<strong>AI 建议：</strong>今天不做完整账号规划，只完成一条 60–90 秒表达并让一位真人复述重点。</p>
</div>
</details>
<details className="review-card" id="seven-day-trend">
<summary>近七天趋势</summary>
<div className="trend-list">
<div>
<strong>重复目标</strong>
<p>连续一周都在靠近同一目标：把 AI、知识库、直播笔记和工作经历转成能被普通人听懂、使用并反馈的内容。</p>
</div>
<div>
<strong>重复阻碍</strong>
<p>通宵和游戏、系统故障排查、继续输入、害怕观点错误、等待学习状态，以及遇到现实困难后想换方向，反复阻断第一版进入反馈。</p>
</div>
<div>
<strong>精力变化</strong>
<p>8 月 2 日通宵到早上八点，4 日与 5 日凌晨四点入睡，8 日再次通宵到四点；期间还出现游泳不适、水泡和摩擦红疹。当前更需要恢复与有限承诺，而不是排满全天。</p>
</div>
<div>
<strong>认知变化</strong>
<p>记录已从“我不知道怎么做”逐步转向“我知道很多，但没有在同一个问题上承受多轮现实反馈”。问题更具体了：不是缺少理论，而是交付稳定性、用户理解与结果检验不足。</p>
</div>
</div>
</details>
<details className="review-card diagnosis" id="action-diagnosis">
<summary>AI 执行力诊断 / 建议</summary>
<div>
<p>
<strong>证据：</strong>昨日日记明确写道：“遇到困难的时候，我没有想着怎么解决，而是下意识想去逃避”“每次工作干得不开心就离职”“我的理论太多了没有实践，我学了太多，反而受困于此”，并指出这种挫败会让自己“迫不及待想要换赛道”。</p>
<p>
<strong>行为模式：</strong>按 dbs-action 框架，这同时出现信号 C“方向跳跃”和信号 D“知识上瘾”。理论继续增加时，你仍能保留“我懂很多、只是没用出来”的自我解释；在同一问题上持续测试，则可能得到更具体也更刺痛的结果：某个用户没听懂、某条内容没帮助、某个方法当前无效。</p>
<p>
<strong>AI 诊断：</strong>真正回避的未必是工作量，而是让能力接受有限、可重复的检验。换方向可以暂时把失败归因于赛道；继续学习可以暂时把行动推迟到“我准备得更好”。两者都保护了“如果我真正认真，应该能做到”的可能性，却也阻止经验从 1.0 理论变成 2.0 能力。</p>
<p>
<strong>阿德勒式处方：</strong>今天找一个比你更需要这段经验的人，用“任务思维与结果思维”帮他理解一个具体问题。交付第一版后，只收集一条真人反馈。对方能否复述、是否减少困惑，就是今天的社会性证据；不以播放量或人格评价为标准。</p>
<p>
<strong>一句话处方：</strong>你不是需要再证明自己懂了；你需要允许一个真人指出你哪里还没讲懂。</p>
<p>
<strong>适用边界：</strong>睡眠不足、水泡和红疹是真实身体条件，今天缩减运动和任务属于恢复，不应被解释为方向逃避；诊断针对的是反复用换赛道或继续学习绕开反馈的模式。</p>
<p>
<strong>免责声明：</strong>这是基于 dbs-action 框架与昨日日记证据生成的 AI 诊断 / 建议，不是心理咨询或医疗诊断。</p>
</div>
</details>
</div>
</section>

          <section className="section" id="deep-reads">
<div className="section-heading">
<div>
<p className="eyebrow">DEEP READS</p>
<h2>今日深读</h2>
</div>
<p>3 篇原文，任选一篇</p>
</div>
<div className="brief-list deep-read-list">
<details className="brief-item" id="deep-read-1">
<summary>
<span className="brief-index">01</span>
<span className="brief-main">
<strong>AI 产品经理的新技能栈</strong>
<span>阅读问题：从“会用 AI”到“能交付 AI 产品”，中间缺少哪些评估与失败边界？</span>
</span>
<span className="plus">＋</span>
</summary>
<div className="brief-content">
<p>公开课程页浓缩了 AI PM 从提示词与工具表层走向用户任务、评估、交付和组织协作的变化。阅读时重点区分“模型能力演示”和“用户可以依赖的产品结果”。</p>
<SourceLink href="https://maven.com/p/47d8b0/open-ai-pm-become-a-frontier-ai-native-product-manager" label="Maven 活动原页" />
</div>
</details>
<details className="brief-item" id="deep-read-2">
<summary>
<span className="brief-index">02</span>
<span className="brief-main">
<strong>Creative Chaos & Coffee：展示未完成的设计现场</strong>
<span>阅读问题：为什么一个凌乱半成品，有时比精修作品集更容易得到有效反馈？</span>
</span>
<span className="plus">＋</span>
</summary>
<div className="brief-content">
<p>活动规则要求参与者带上正在卡住的线框和副项目，不展示 polished portfolio。它适合用来思考：怎样让反馈发生在决策仍可改变的时候。</p>
<SourceLink href="https://ixdf.org/meetups/creative-chaos-coffee-aug-8th-2026" label="IxDF 活动原页" />
</div>
</details>
<details className="brief-item" id="deep-read-3">
<summary>
<span className="brief-index">03</span>
<span className="brief-main">
<strong>AIM-CC 2026：AI 与计算传播方法</strong>
<span>阅读问题：怎样把一次内容发布从“凭感觉”变成有事前假设、行为证据和修正记录的实验？</span>
</span>
<span className="plus">＋</span>
</summary>
<div className="brief-content">
<p>公开介绍梳理了大语言模型、嵌入方法、生成式 Agent 和 AI 辅助实验如何进入传播研究。重点不是照搬技术名词，而是理解 AI 分析仍需返回原始证据和反例。</p>
<SourceLink href="https://nu.edu.kz/eventsm/ai-metods-in-computational-communication-aim-cc-2026/" label="Nazarbayev University 活动原页" />
</div>
</details>
</div>
</section>

          <section className="section" id="hotlist">
<div className="section-heading">
<div>
<p className="eyebrow">HOT LIST</p>
<h2>热点榜单</h2>
</div>
<p>2026 年 8 月 8 日完整榜单</p>
</div>
<a className="hotlist" href="/daily-briefing/hotlist/2026-08-08.html" aria-label="打开热点榜单">
<span>昨日榜单</span>
<strong>查看 2026 年 8 月 8 日完整榜单</strong>
<span className="arrow">↗</span>
</a>
</section>
          <footer>
<p>不要再用理论证明自己可能会，<br />让一个真人告诉你现在会到哪里。</p>
<span>每日 08:30 更新 · 完整内容折叠保存</span>
</footer>
        </div>
      </div>
    </main>
  );
}
