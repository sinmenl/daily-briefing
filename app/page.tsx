const tasks = [
  {
    number: "01",
    title: "去图书馆，确定第一条视频",
    body: "你已经明确写下今天去图书馆、八月开始 AI 知识库视频。到馆后不研究整套知识库，只确定第一条视频要回答的一个具体问题。",
    first: "写下观众的一句具体问题",
    time: "30 分钟",
    tone: "mint",
  },
  {
    number: "02",
    title: "做出第一条视频 1.0",
    body: "只完成一个可观看版本：开头说明谁遇到什么问题，中间演示一个步骤，结尾给出结果。先允许粗糙，再用真实观看体验决定怎么改。",
    first: "录下 30 秒开头",
    time: "60–90 分钟",
    tone: "blue",
  },
  {
    number: "03",
    title: "给今天设置停止线",
    body: "早睡挑战昨天再次失败。今天不靠额度、积分或熬夜制造紧迫感；到了停止时间就保存当前版本，不追加工具与新想法。",
    first: "现在写下今晚停止工作的时间",
    time: "5 分钟",
    tone: "peach",
  },
];

const creatorUpdates = [
  {
    tag: "dontbesilent",
    title: "dbskill 更新至 v2.18.15",
    intro: "这次更新不只是增加 Skill，而是在处理多 Agent 环境中的安装、发现、冲突与复用。",
    content: [
      "事实背景：dbskill 当前已经包含 29 个 Skills。v2.18.15 主要调整 dbs-bridge：默认面向 WorkBuddy，避免 Codex 同时扫描两个 Skill 目录造成重复，并为豆包、Trae 等环境保留通用 Agent 选项。",
      "为什么重要：一个能力“可以调用”，不等于它已经进入稳定工作流。真正落地时还会遇到：Skill 安装在哪里、哪个 Agent 能发现它、是否重复扫描、用户是否理解目录差异，以及更新后配置是否仍兼容。",
      "产品视角：dbskill 的价值正在从“把知识做成可调用能力”，继续延伸到“管理这些能力如何被多个 Agent 正确发现和复用”。这是一类基础设施问题：生成结果并不困难，稳定地把正确能力送到正确环境才困难。",
      "对你的实践启发：以后判断一个 Skill 是否真正可用，可以连续测试四件事：第一次能否找到；换一个 Agent 能否复用；更新后是否要重新配置；是否出现重复入口或冲突。能处理这些问题的工作流产品，才同时照顾了能力层和基础设施层。",
    ],
    source: "https://github.com/dontbesilent2025/dbskill/releases/tag/v2.18.15",
    sourceLabel: "dbskill v2.18.15 发布页",
  },
  {
    tag: "Dan Koe",
    title: "不要试图记住所有阅读内容",
    intro: "最新可核验文章发表于 7 月 25 日，重点是把阅读从收藏行为改成解决问题的工具。",
    content: [
      "文章区分了两种阅读方式。第一种是“收藏逻辑”：尽可能保存、摘录和记住，担心以后找不到；第二种是“使用逻辑”：围绕眼前正在解决的问题阅读，让概念进入写作、项目和决策。",
      "为什么重要：当保存工具越来越方便，知识堆积也越来越容易。一个人可能拥有大量笔记，却很少让其中的概念真正改变自己的行动。问题不一定是记忆力不足，而是知识从未参与一次现实任务。",
      "对你的启发：你现在并不缺日记、热点、知识星球和产品材料。比“这条内容我要不要收藏”更值得问的是：“这条知识参与解决了我的哪个具体问题？”如果暂时没有对应任务，它可以留在原处，不必为了安心再次搬运和整理。",
      "适用边界：这并不是反对做笔记。需要长期查证、引用或形成个人知识资产的材料仍值得保存；区别在于，保存应服务未来检索或当前使用，而不是成为替代实践的完成感。",
    ],
    source: "https://letters.thedankoe.com/p/how-to-remember-everything-you-read",
    sourceLabel: "Dan Koe 原文",
  },
  {
    tag: "Naval",
    title: "暂无新的可核验节目，最新主线仍是《Live in the Future》",
    intro: "不拿旧内容冒充当日更新；保留其中可用于观察早期产品机会的方法。",
    content: [
      "核验结果：Naval 官网目前最新可确认节目仍是 7 月 2 日发布的《Live in the Future》。截至本次早报整理，没有发现 7 月 31 日或 8 月 1 日的新节目。",
      "这期内容值得保留的方法不是预测宏大未来，而是观察已经在使用未来型技术和组织方式的人。一个更具体的问题是：“新技术是否已经让一小群人的行为永久改变？”",
      "可以观察四个信号：他们是否已经形成稳定习惯；即使早期产品并不成熟，是否仍不愿回到旧方式；是否愿意支付学习成本；新方式是否已经产生可描述的现实结果。",
      "为什么重要：这些行为证据通常比热度、融资新闻或模型排行榜更接近真实采用。趋势是否成立，不只看大家是否讨论，更要看少数用户是否已经无法回头。",
    ],
    source: "https://nav.al/",
    sourceLabel: "Naval 官网",
  },
  {
    tag: "姜胡说",
    title: "发现一条新的可访问短视频内容",
    intro: "视频讨论“拍什么”比“怎么拍”更基础；因页面缺少稳定发布日期，不把它冒充过去一天更新。",
    content: [
      "内容核心：很多创作者最大的困难并不是不会拍摄，而是不知道什么值得拍。更强的内容能力，是能从日常生活里识别一个可以继续讨论的问题。",
      "视频给出的素材识别路径可以拆成三步。先写事情：例如喝了奶茶后通宵打游戏；再写感受：醒来后完全没有工作欲望；最后把个人事件变成讨论问题：为什么一次作息被打乱，会让人把第二天整天都划成“休息日”？",
      "为什么重要：普通经历本身不自动构成内容。真正的转换发生在“这件事说明了什么更普遍的问题”。这一步要求创作者从个人叙述中识别矛盾、机制和特定人群，而不是只把流水账换一种排版。",
      "练习方式：遇到一件有感觉的事，先不要写完整文章，只补一句：“这件事说明了一个什么更普遍的问题？”今天的目标不是立刻得到选题成品，而是训练识别问题的能力。",
      "核验边界：该视频原始页面可以访问，但没有取得稳定、可核验的发布时间，因此这里只称为“新发现的可访问内容”，不称为姜胡说当天更新。",
    ],
    source: "https://m.douyin.com/share/video/7650514840460479763",
    sourceLabel: "姜胡说抖音原视频",
  },
];

const briefing = [
  {
    tag: "平台治理",
    title: "Snapchat 不再推荐或奖励完全由 AI 生成的视频",
    intro: "平台正在明确区分“AI 辅助创作”与“全自动内容供给”。",
    content: [
      "事实背景：Snap 于 7 月 31 日宣布，完全由 AI 生成的视频不会获得 Spotlight 推荐或奖励。AI 用于编辑、增强和辅助制作仍然被允许，但内容需要保留真人创作、个人视角或原创叙事。",
      "这意味着平台开始建立更细的分层：AI 辅助的内容仍可正常分发；全自动内容即使可以发布，也不一定拥有同等推荐和商业激励；真实人物、个人观点与原创故事反而成为更重要的价值证明。",
      "产品判断：平台保护的不是某一种制作工具，而是内容供给的稀缺性。如果全自动内容可以无限复制，推荐流会出现高度同质、低成本灌水、创作者退出和用户信任下降等问题。限制激励，是平台维护推荐系统质量的一种产品机制。",
      "对实践的建议：发布前问一句：“删掉 AI 生成部分后，这条内容还剩下什么属于我？”如果只剩公共事实和通用句式，就需要补回真实事件、原始判断、失败细节或亲自验证的结果。",
    ],
    source: "https://www.businessinsider.com/ai-slop-substack-youtube-tiktok-pinterest-facebook-instagram-threads-2026-7",
    sourceLabel: "Business Insider",
  },
  {
    tag: "Agent 产品",
    title: "网站开始需要同时服务人类用户和 AI Agent",
    intro: "同样的商品与流程，仅通过更适合 Agent 理解的结构，就能显著提高任务完成率。",
    content: [
      "事实背景：一项受控电商实验保持商品、价格、库存和结账流程不变，只调整网站是否对 Agent 友好。结果显示，严格任务成功率从约 49% 提升至约 89%，平均执行步骤减少约 30%。",
      "Agent-ready 版本并不是把页面写得更像聊天框，而是增加结构化商品数据、稳定标识符、清晰语义标签、评论与认证证据，以及可判断状态是否最新的信息。",
      "为什么重要：网页过去主要服务人的理解与操作；现在还要服务 Agent 的读取、比较与执行。人类可以借助视觉层级和常识补全语境，Agent 更依赖结构化数据、明确关系、稳定控件、可核验来源和新鲜状态。",
      "产品与用户研究视角：未来测试网页时，除了观察人是否看懂，也要测试 Agent 能否独立完成搜索、比较、填写和提交。不要先向 Agent 解释页面结构；如果必须人工说明，它就还没有真正具备可机器操作性。",
    ],
    source: "https://arxiv.org/abs/2607.12056",
    sourceLabel: "研究原文",
  },
  {
    tag: "用户研究",
    title: "用户研究工具的选择标准从“功能最多”转向“具体瓶颈”",
    intro: "不同工具分别解决实时协作、快速无主持研究、资料沉淀和参与者招募等不同问题。",
    content: [
      "事实背景：Typeform 于 7 月 31 日发布的 2026 AI 用户研究工具指南，将 Lookback、Maze、Dovetail、UserTesting 等工具分别映射到实时协作、快速无主持测试、研究资产库和参与者招募等场景，而不是简单排列“谁的 AI 功能更多”。",
      "AI 比较适合承担转录、初步编码、片段整理和重复主题发现；研究问题的设定、语境解释、反例识别和最终产品判断仍需要人来完成。",
      "产品判断：工具市场通常会经历三个阶段——有没有 AI、功能数量有多少、是否解决一段真正昂贵的流程。进入第三阶段后，选工具不应先看功能表，而应先问：“在我当前研究流程中，哪里最耗时、最容易失真？”",
      "可执行分析：评估一款研究工具时，依次写清它替代了哪一步、过去由谁完成、节省了多少时间、引入了什么新风险，以及哪部分判断必须继续由人承担。这样才能区分产品价值与功能热闹。",
    ],
    source: "https://www.typeform.com/blog/best-ai-tools-for-ux-research-2026-guide",
    sourceLabel: "Typeform 指南",
  },
  {
    tag: "AI 工作流",
    title: "AI 成本继续下降，差异化进一步向工作流移动",
    intro: "模型能力与调用成本快速变化后，单纯包装模型更难形成长期价值。",
    content: [
      "事实背景：OpenAI 于 7 月 31 日发布的文章继续强调全栈基础设施与更充裕智能的方向，并介绍模型成本下降和系统处理更长项目、更多工具、从想法到产出的能力。",
      "为什么重要：当基础智能的价格继续下降，只在模型外面增加一个界面的产品更容易被复制。竞争会继续移动到模型不知道、无法自动获得或不能独立承担责任的部分。",
      "产品判断：更难复制的价值包括专有上下文、稳定工作流、行业规则、质量控制、权限与责任边界、用户关系和分发能力。模型仍然重要，但它逐渐从产品卖点变成底层供应。",
      "对实践的建议：你做网页、知识库或 Skill 时，优先积累模型本身不知道的材料、流程和判断规则。真正值得保存的不是“我用了哪个模型”，而是“我怎样让它在一个具体任务里稳定产生可检查结果”。",
    ],
    source: "https://openai.com/index/building-abundant-intelligence/",
    sourceLabel: "OpenAI 原文",
  },
  {
    tag: "内容生态",
    title: "各大内容平台正在集体划定“AI 垃圾内容”边界",
    intro: "平台普遍允许 AI 辅助，但限制重复、批量、低投入且缺少原创贡献的自动内容。",
    content: [
      "截至 7 月 31 日，YouTube、TikTok、Substack、Pinterest、Meta、LinkedIn 和 Snapchat 分别通过限制变现、检测批量账号、增加标签、提供 AI 内容偏好控制或停止推荐全自动视频等方式治理低质量 AI 内容。",
      "这些措施的共同点不是全面禁止 AI，而是允许 AI 提高编辑与制作效率，同时限制重复、批量和低投入供给，并继续鼓励原创叙事、个人视角与真实参与；部分平台还把是否观看更多 AI 内容的控制权交给用户。",
      "产品视角：平台真正需要保护的是推荐质量与信任。如果大量账号能够无限复制同类内容，用户会更难判断真实性，推荐系统也更难区分什么值得继续分发。",
      "创作检查：这条内容是否只是重新包装公共事实？是否可以被任何账号批量复制？有没有真实的人、经历或结果？有没有新的判断？用户看完会改变什么？问题不在于 AI 写了多少，而在于创作者贡献了多少。",
    ],
    source: "https://www.businessinsider.com/ai-slop-substack-youtube-tiktok-pinterest-facebook-instagram-threads-2026-7",
    sourceLabel: "Business Insider",
  },
];

const trends = [
  ["重复目标", "把 AI 从抽象学习变成能落地的工作流；本周先后出现择校工具复盘、知识星球采集、每日简报融合、工作台和财务核对。"],
  ["重复阻碍", "直播、信息流、游戏和工具搭建都能提供即时刺激；当任务没有外部期限时，容易继续找新输入或换系统，而不是把一个结果交付出去。"],
  ["精力变化", "近七天多次熬到凌晨四点或通宵，白天补觉、困倦和缺少行动欲望反复出现；7 月 31 日本人再次写“早睡挑战失败”。"],
  ["正向变化", "7 月 31 日没有停在工作台形式：你把网页版账单发到群里让舅舅查看，用真实使用替代重复核对；这是一条可核验的工作流结果。"],
];

const briefDate = "2026-08-01";
const weather = {
  location: "南宁",
  condition: "小雨",
  temperature: "24–30℃",
  icon: "🌧️",
};

export default function Home() {
  return (
    <main data-brief-date={briefDate}>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="返回顶部">
          <span className="brand-dot" />
          蔓蔓的早课
        </a>
        <div className="top-actions">
          <button
            className="menu-button"
            type="button"
            aria-label="打开阅读目录"
            aria-controls="content-menu"
            aria-expanded="false"
            data-menu-button
          >
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
              <a href="?date=2026-08-01" aria-current="page">2026年8月1日</a>
            </nav>
          </details>
          <div className="status">
            <span className="status-dot" />
            每天自动更新
          </div>
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
            <div className="nav-group">
              <a className="nav-title" href="#today"><span className="nav-icon icon-focus" aria-hidden="true">✓</span>今天只做三件事</a>
              <div className="nav-sub">
                {tasks.map((task, index) => (
                  <a href={`#task-${index + 1}`} key={task.title}>{task.title}</a>
                ))}
              </div>
            </div>

            <div className="nav-group">
              <a className="nav-title" href="#briefing"><span className="nav-icon icon-briefing" aria-hidden="true">▤</span>产品与创作早报</a>
              <div className="nav-sub">
                {creatorUpdates.map((item, index) => (
                  <a href={`#creator-${index + 1}`} key={item.title}>{item.title}</a>
                ))}
                {briefing.map((item, index) => (
                  <a href={`#brief-${index + 1}`} key={item.title}>{item.title}</a>
                ))}
                <a href="#product-observation">同一套内容服务两类消费者</a>
                <a href="#early-action">今日行动：素材识别训练</a>
              </div>
            </div>

            <div className="nav-group">
              <a className="nav-title" href="#planet"><span className="nav-icon icon-planet" aria-hidden="true">✦</span>昨日知识星球</a>
              <div className="nav-sub">
                <a href="#planet-1">大胡子：大多数人会死在第 3 层</a>
              </div>
            </div>

            <div className="nav-group">
              <a className="nav-title" href="#review"><span className="nav-icon icon-review" aria-hidden="true">↺</span>昨日复盘与趋势</a>
              <div className="nav-sub">
                <a href="#yesterday-review">昨日复盘</a>
                <a href="#seven-day-trend">近七天趋势</a>
                <a href="#action-diagnosis">执行力诊断</a>
              </div>
            </div>

            <div className="nav-group">
              <a className="nav-title" href="#schedule"><span className="nav-icon icon-schedule" aria-hidden="true">◷</span>今日时间块</a>
              <div className="nav-sub">
                <a href="#schedule">上午到图书馆定题</a>
                <a href="#schedule">下午完成视频 1.0</a>
                <a href="#risk">今日风险</a>
              </div>
            </div>

            <div className="nav-group">
              <a className="nav-title" href="#deep-reads"><span className="nav-icon icon-briefing" aria-hidden="true">↗</span>今日深读</a>
              <div className="nav-sub">
                <a href="#deep-read-1">Agent-ready 网站研究</a>
                <a href="#deep-read-2">Dan Koe：快速学习</a>
                <a href="#deep-read-3">Typeform：UX 研究工具</a>
              </div>
            </div>

            <div className="nav-group">
              <a className="nav-title" href="#hotlist-missing"><span className="nav-icon icon-hotlist" aria-hidden="true">↗</span>昨日热点榜单</a>
            </div>
          </nav>

          <p className="sidebar-note">点小标题直达正文 · 折叠内容会自动展开</p>
        </aside>

        <div className="page" id="top">
        <section className="hero">
          <div className="date-block">
            <div className="date-day">01</div>
            <div>
              <p className="date-month">2026 · 08</p>
              <p className="date-week">星期六</p>
            </div>
          </div>
          <div className="hero-copy">
            <p className="eyebrow">TODAY&apos;S DIRECTION</p>
            <h1>八月先交出第一版，<br />再决定下一步学什么。</h1>
            <p className="judgment">
              昨天终于把工作台用于真实账单，也卖出 5 张游泳票；但早睡仍失败。近一周正从搭系统转向验证使用，今天去图书馆，只做第一条 AI 知识库视频 1.0，并保住睡眠。
            </p>
          </div>
          <div
            className="hero-weather"
            aria-label={`${weather.location}当天天气：${weather.condition}，${weather.temperature}`}
          >
            <span className="weather-icon" aria-hidden="true">{weather.icon}</span>
            <span className="weather-copy">
              <strong>{weather.condition}</strong>
              <small>{weather.location} · {weather.temperature}</small>
            </span>
          </div>
        </section>

        <section className="section" id="today">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FOCUS</p>
              <h2>今天只做三件事</h2>
            </div>
            <p>留出缓冲，不把一天排满</p>
          </div>
          <div className="task-grid">
            {tasks.map((task, index) => (
              <article className={`task-card ${task.tone}`} id={`task-${index + 1}`} key={task.number}>
                <span className="task-number">{task.number}</span>
                <h3>{task.title}</h3>
                <p>{task.body}</p>
                <div className="task-meta">
                  <span>第一步</span>
                  <strong>{task.first}</strong>
                </div>
                <div className="task-time">{task.time}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="briefing">
          <div className="section-heading">
            <div>
              <p className="eyebrow">PRODUCT & CREATION</p>
              <h2>产品与创作早报</h2>
            </div>
            <p>完整搬入；只折叠，不删减</p>
          </div>
          <p className="judgment">AI 正在改变两类用户：一类是使用产品的人，另一类是替人使用产品的 Agent。与此同时，平台开始明确区分“AI 辅助创作”和“全自动内容供给”。今天重点看三件事：能否让人和 Agent 都准确理解信息；能否把 AI 嵌入真实任务，而不是增加一个聊天入口；能否证明内容中存在真实判断和原创贡献。</p>
          <div className="brief-list">
            {creatorUpdates.map((item, index) => (
              <details className="brief-item" id={`creator-${index + 1}`} key={item.title}>
                <summary>
                  <span className="brief-index">人</span>
                  <span className="brief-main">
                    <span className="pill">{item.tag}</span>
                    <strong>{item.title}</strong>
                    <span>{item.intro}</span>
                  </span>
                  <span className="plus" aria-hidden="true">＋</span>
                </summary>
                <div className="brief-content">
                  {item.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  <p><a className="archive-link" href={item.source}>查看原始来源：{item.sourceLabel} ↗</a></p>
                </div>
              </details>
            ))}
          </div>
          <div className="section-heading compact-heading">
            <div><p className="eyebrow">TODAY&apos;S 5 STORIES</p><h2>今日 5 条重要动态</h2></div>
          </div>
          <div className="brief-list">
            {briefing.map((item, index) => (
              <details className="brief-item" id={`brief-${index + 1}`} key={item.title}>
                <summary>
                  <span className="brief-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="brief-main">
                    <span className="pill">{item.tag}</span>
                    <strong>{item.title}</strong>
                    <span>{item.intro}</span>
                  </span>
                  <span className="plus" aria-hidden="true">＋</span>
                </summary>
                <div className="brief-content">
                  {item.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  <p><a className="archive-link" href={item.source}>查看原始来源：{item.sourceLabel} ↗</a></p>
                </div>
              </details>
            ))}
          </div>
          <details className="brief-item" id="product-observation">
            <summary>
              <span className="brief-index">观察</span>
              <span className="brief-main">
                <span className="pill">产品观察</span>
                <strong>同一套内容，正在服务两类消费者</strong>
                <span>高质量内容要做到：人愿意看，机器不容易理解错</span>
              </span>
              <span className="plus" aria-hidden="true">＋</span>
            </summary>
            <div className="brief-content">
              <p>过去，内容主要面对人类读者。创作者会问：“这条内容能否被人看懂、记住和转发？”现在还需要增加第二个问题：“它能否被搜索引擎、AI 助手和 Agent 正确识别、引用和执行？”</p>
              <p><strong>人类更依赖：</strong>冲突、故事、情绪、个人经验和清晰节奏。它们帮助人理解为什么值得继续看，以及这件事和自己有什么关系。</p>
              <p><strong>机器更依赖：</strong>明确标题、稳定结构、具体对象、可核验事实、时间、来源和适用边界。它们减少 Agent 在读取与执行时的误解。</p>
              <p>两者并不冲突。高质量内容可以同时做到“人愿意看，机器不容易理解错”：正文保留叙事和判断，同时把事实、来源、案例和步骤组织清楚。</p>
              <p>因此，未来的内容资产不一定只是一篇文章，而可能是一个节点：既有面向人的正文，也有结构化事实、来源和案例。它可以被读者理解，也可以被知识库、搜索和 Skill 稳定调用。</p>
              <p>这与你正在搭建的知识库和 Skill 直接相关：不要只保存最终成品，还要保存它解决什么问题、面向谁、依据是什么、何时失效，以及下一步能执行什么。</p>
            </div>
          </details>
          <details className="brief-item" id="early-action">
            <summary><span className="brief-index">行动</span><span className="brief-main"><span className="pill">今日练习</span><strong>做一次“素材识别训练”</strong><span>不增加工具，不急着把经历包装成成品</span></span><span className="plus" aria-hidden="true">＋</span></summary>
            <div className="brief-content">
              <p>从最近的日记里挑三件普通小事，每件只写四行：</p>
              <p><strong>发生了什么：</strong>只写事实，不先解释。</p>
              <p><strong>我当时怎样理解：</strong>保留你当时真实写下的反应，不让 AI 代填。</p>
              <p><strong>哪个细节最值得讨论：</strong>找矛盾、异常或判断发生变化的位置。</p>
              <p><strong>它对应哪类人的共同问题：</strong>不要写“所有人”，要写处于相似情境的一类具体人。</p>
              <p>例如：喝奶茶后通宵打游戏 → 第二天一直刷手机 → 把整天都划成休息日 → 对应“作息被打乱后容易放弃整天的人”。今天不必把它写成小红书，也不必润色成完整选题；这个练习只训练从普通生活中识别问题。</p>
            </div>
          </details>
        </section>

        <section className="section planet-section" id="planet">
          <div className="section-heading">
            <div>
              <p className="eyebrow">JIANGHU NOTES · YESTERDAY</p>
              <h2>昨日姜胡说知识星球</h2>
            </div>
            <p>归档区间：2026-07-30 23:30 至 2026-07-31 23:30</p>
          </div>
          <details className="planet-card" id="planet-1">
            <summary>
              <div className="avatar">胡</div>
              <div>
                <span className="planet-time">大胡子 · 2026-07-31 18:32</span>
                <strong>大多数人都会死在了第 3 层</strong>
                <span>点击展开星主完整原文</span>
              </div>
              <span className="open-label">原文</span>
            </summary>
            <div className="planet-content">
              <div className="original">
                <span>星主原文</span>
                <p>大多数人都会死在了第3层：<br />甚至很多人做自媒体的目标就是第3层。</p>
                <p>信息缺失：没有量化「粉丝信任度」vs「粉丝数量」的真实ROI<br />↓<br />误判机制：用「能变现的粉丝数」代替「愿意反复购买的粉丝忠诚度」<br />↓<br />短期奖励：变现→账户进账→财务焦虑缓解→&quot;我找到商业模式了&quot;<br />↓<br />隐藏代价：内容→从「给予价值」转向「收割价值」<br />↓<br />长期结局：粉丝感知到你的目的变了→信任下降→复购率/转介绍率崩<br />↓<br />终局：变现能力 ≠ 赚钱能力。你赚得越急，死得越快。</p>
                <p><a className="archive-link" href="/daily-briefing/knowledge/2026-07-31/26-07-31姜胡说知识星球.md">查看 7 月 31 日原始归档 ↗</a></p>
              </div>
            </div>
          </details>
        </section>

        <section className="section" id="review">
          <div className="section-heading">
            <div>
              <p className="eyebrow">PERSONAL REVIEW</p>
              <h2>昨日复盘与近七天趋势</h2>
            </div>
            <p>事实与建议分开</p>
          </div>
          <div className="review-grid">
            <details className="review-card" id="yesterday-review" open>
              <summary>昨日复盘</summary>
              <div>
                <p><strong>完成：</strong>你把 WorkBuddy 从不明确用途的工作台改成周复盘，随后做了网页版账单，并发到群里让舅舅查看，目的是真实减少重复核对；继续整理了财务工作流。你还在闲鱼卖出 5 张游泳票，每张赚 3 元，共得到 15 元毛收益，并填写了华图兼职班主任。</p>
                <p><strong>未完成或仍待确认：</strong>学校方面仍没有通知；早睡挑战失败。日记没有记录具体睡眠时长，因此不能推断你昨天睡了多久，也不能把“明天去图书馆”当作已经完成。</p>
                <p><strong>情绪与精力信号：</strong>你写使用 Codex 额度时“心好痛”，又因为自动任务与额度刷新使用了重置卡；同时写“不想打王者了，只想猛猛蹬额度”。外部资源临期显著拉高行动动力，但也可能把停止时间继续往后推。</p>
                <p><strong>本人明确写下的方向：</strong>“八月目标开始 AI 知识库视频，至少发三条视频，先去做，做完才知道。”这里只忠实呈现你的原话，不替你补充选题、平台或发布时间。</p>
                <p className="advice"><strong>AI 建议：</strong>延续昨天已经有效的模式——让工具处理一件真实任务，并把结果交给真实使用者；避免再做一个不知道何时打开的通用工作台。今天的视频也先做 1.0，不先搭完整内容系统。</p>
              </div>
            </details>
            <details className="review-card" id="seven-day-trend">
              <summary>近七天趋势</summary>
              <div className="trend-list">
                {trends.map(([label, text]) => (
                  <div key={label}><strong>{label}</strong><p>{text}</p></div>
                ))}
              </div>
            </details>
            <details className="review-card diagnosis" id="action-diagnosis">
              <summary>AI 执行力诊断 / 建议</summary>
              <div>
                <p><strong>你描述的问题：</strong>你已经知道“先去做，做完才知道”，也定下八月至少三条 AI 知识库视频；但你同时明确观察到，积分或额度临期时才会灵感爆棚、动力大涨。</p>
                <p><strong>证据与信号：</strong>A（执行模拟器）已经出现改善：昨天工作台终于接到真实账单任务。当前更明显的是“借外部截止日期启动”——WorkBuddy 积分快失效时完成工作台，Codex 快刷新时更愿意折腾新想法。它短期有效，却把行动与焦虑、沉没成本和熬夜绑定。</p>
                <p><strong>AI 诊断：</strong>问题不是你没有行动力，而是目前更擅长响应外部紧迫感，尚未稳定用一个小交付物启动。若把“三条视频”继续留成月度愿望，你很可能先研究工具、知识库结构和选题体系，直到新的截止日期出现；这样仍能感觉自己在推进，却迟迟没有可观看版本。</p>
                <p><strong>真正的问题：</strong>今天不是要证明能否完成八月计划，而是让第一条视频从“方向”变成一个别人能打开观看的 1.0。它可以粗糙，但必须存在。</p>
                <p><strong>阿德勒框架下的解法：</strong>把关注点从“我今天有没有状态”转向“这条内容能帮哪个具体新手少卡一步”。只回答一个真实问题，完成后让一个人观看或由自己完整播放核对；不靠熬夜制造截止日期。</p>
                <p className="advice"><strong>一句话处方：</strong>不要用额度到期逼自己冲刺；用一个可观看的第一版结束今天。</p>
                <p><strong>适用边界：</strong>你昨日日记没有提供睡眠时长，因此不能断言当天一定睡眠不足；但近七天确有连续熬夜记录，今晚的停止线仍应优先于追加新想法。</p>
                <p><strong>免责声明：</strong>这是基于 dontbesilent 推文逻辑与本地日记证据生成的 AI 诊断工具，不是心理咨询；若存在持续情绪或睡眠困扰，应寻求专业帮助。</p>
              </div>
            </details>
          </div>
        </section>

        <section className="schedule" id="schedule">
          <div>
            <span>上午</span>
            <p>按本人计划去图书馆。先用 30 分钟确定第一条 AI 知识库视频只回答哪个问题；随后休息 15 分钟，不继续搜工具和案例。</p>
          </div>
          <div>
            <span>下午</span>
            <p>用 60–90 分钟完成视频 1.0：录开头、演示一个步骤、给出结果，完整播放核对一次。剩余时间留作吃饭、回程与缓冲。</p>
          </div>
          <div>
            <span>晚上</span>
            <p>只做必要修正并保存版本；不新增第二条选题。按早上写下的停止时间关掉工作台与信息流，给早睡留出实际空间。</p>
          </div>
        </section>

        <details className="brief-item" id="risk">
          <summary>
            <span className="brief-index">风险</span>
            <span className="brief-main">
              <span className="pill">今日边界</span>
              <strong>最可能让计划失效的三件事</strong>
              <span>看清触发点，不把一天排满</span>
            </span>
            <span className="plus" aria-hidden="true">＋</span>
          </summary>
          <div className="brief-content">
            <p><strong>把视频变成知识库工程：</strong>今天一旦开始改目录、Agent 说明或工具配置，第一条视频就会再次被系统建设替代。所有结构问题只记进待办，不在今天解决。</p>
            <p><strong>等待外部截止日期：</strong>昨天明确记录积分和额度临期能激发动力。今天不要等闭馆、额度刷新或深夜才开始，上午先录 30 秒作为不可撤销的起点。</p>
            <p><strong>睡眠与消费：</strong>近七天多次熬夜，也反复出现奶茶、外食、额度和 Plus 成本。今天没有证据支持新增订阅；先用现有工具做出第一版，晚上按停止线收尾。</p>
          </div>
        </details>

        <section className="section" id="deep-reads">
          <div className="section-heading">
            <div>
              <p className="eyebrow">DEEP READS</p>
              <h2>今日深读原文</h2>
            </div>
            <p>不是额外待办；任选一篇</p>
          </div>
          <div className="brief-list">
            <details className="brief-item" id="deep-read-1">
              <summary><span className="brief-index">01</span><span className="brief-main"><strong>Designing Agent-Ready Websites for AI Web Agents</strong><span>阅读问题：哪些信息只有你知道，Agent 无法稳定推断？</span></span><span className="plus">＋</span></summary>
              <div className="brief-content"><p>背景：这项研究通过 300 次受控测试，对比普通电商网站与 Agent-ready 网站在相同商品、价格和流程下的任务表现。结果把“Agent 能不能使用网页”从主观感受变成可测量问题。</p><p>重点看语义结构、证据、稳定标识符和操作结构怎样影响任务成功率。阅读时不要只问 Agent 是否聪明，而要问页面是否迫使它猜测。</p><p>带着这个问题阅读：“我现在制作的网页、知识库或 Skill，哪些信息只有我自己知道，Agent 无法稳定推断？”</p><p><a className="archive-link" href="https://arxiv.org/abs/2607.12056">阅读研究原文 ↗</a></p></div>
            </details>
            <details className="brief-item" id="deep-read-2">
              <summary><span className="brief-index">02</span><span className="brief-main"><strong>Dan Koe：The best way to learn anything fast</strong><span>阅读问题：哪些知识还没有进入你的真实任务？</span></span><span className="plus">＋</span></summary>
              <div className="brief-content"><p>背景：文章讨论如何围绕正在解决的问题学习，而不是为了完整感不断收藏和记忆。它适合用来检查“输入很多、应用很少”的知识工作流。</p><p>阅读重点不是寻找一种更强的记忆术，而是观察概念怎样通过写作、项目、解释和反馈变成可调用能力。</p><p>带着这个问题阅读：“我最近保存的知识中，哪一条实际改变过一次视频、产品或决策？哪些只是让我觉得已经学习？”</p><p><a className="archive-link" href="https://letters.thedankoe.com/p/how-to-remember-everything-you-read">阅读 Dan Koe 原文 ↗</a></p></div>
            </details>
            <details className="brief-item" id="deep-read-3">
              <summary><span className="brief-index">03</span><span className="brief-main"><strong>Typeform：Best AI Tools for UX Research</strong><span>阅读问题：研究时间究竟耗在哪一段？</span></span><span className="plus">＋</span></summary>
              <div className="brief-content"><p>背景：这份指南没有把工具简单排成一个总榜，而是按实时访谈、无主持测试、资料沉淀和参与者招募等瓶颈进行区分。</p><p>重点观察每类工具替代了研究流程中的哪一段，以及 AI 介入后哪些判断仍必须保留给研究者。工具能力只有与瓶颈对应，才会产生实际价值。</p><p>带着这个问题阅读：“我的时间究竟消耗在招募、访谈、整理、分析，还是知道结论后仍无法行动？”</p><p><a className="archive-link" href="https://www.typeform.com/blog/best-ai-tools-for-ux-research-2026-guide">阅读 Typeform 指南 ↗</a></p></div>
            </details>
          </div>
        </section>

        <div className="hotlist" id="hotlist-missing" aria-label="昨日热点榜单未运行">
          <span>昨日热点榜单</span>
          <strong>7 月 31 日热点榜单未生成：昨日因额度不足主动停掉，不是系统异常</strong>
          <span className="arrow">—</span>
        </div>

        <footer>
          <p>今天不用完成三条视频，<br />但要让第一条从想法变成可观看的版本。</p>
          <span>每日 08:00 更新 · 完整内容折叠保存</span>
        </footer>
        </div>
      </div>
    </main>
  );
}
