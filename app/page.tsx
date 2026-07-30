const tasks = [
  {
    number: "01",
    title: "验收每日简报闭环",
    body: "打开今天的手机网页，只检查日期、目录、知识星球原文、热点入口和历史日期切换。",
    first: "完整打开一次今日页面",
    time: "20 分钟",
    tone: "mint",
  },
  {
    number: "02",
    title: "留下一条本人锚点",
    body: "从今天真正读完的一条材料里，只写一句“为什么它与我有关”，不整理成教程，也不要求发布。",
    first: "先完整读一条折叠内容",
    time: "15 分钟",
    tone: "blue",
  },
  {
    number: "03",
    title: "给系统设阅读上限",
    body: "今天不再新增采集器或知识库。简报只读一个栏目，晚上按设定时间停止直播与信息流。",
    first: "现在写下停止时间",
    time: "其余时间留白",
    tone: "peach",
  },
];

const briefing = [
  {
    tag: "Agent 基建",
    title: "dbskill v2.18.15：默认避开重复 Skill 目录",
    intro: "一次很小的路径调整，解决的是多端安装后能力重复、真源不清的问题。",
    content: [
      "事实背景：dontbesilent 的 GitHub 仓库在 2026 年 7 月 29 日 18:44（北京时间）发布 v2.18.15。版本差异显示，dbs-bridge 现在默认桥接 Claude Code、Codex、WorkBuddy 与 Grok，不再默认写入 ~/.agents/skills；只有明确需要豆包 Mac App、Trae Solo 等通用 Agents 时才使用 --with-agents。",
      "为什么重要：Codex 会同时读取 ~/.codex/skills 与 ~/.agents/skills。同一个 Skill 同时出现在两个目录时，用户会看到重复能力，也更难判断哪个目录是真源。此次更新不是新增更多功能，而是减少重复入口，让“一份源文件、多端调用”的关系更可理解。",
      "产品与用户研究视角：基础设施产品常见的痛点不是“能力不够”，而是状态不可见、路径重复、边界不清。对用户而言，列表中两个同名 Skill 并不意味着能力翻倍，只意味着额外判断成本。好的默认值应该服务大多数真实使用路径，把特殊兼容需求变成显式选项。",
      "对实践的建议：你昨天刚完成知识星球采集与简报整合，今天不需要再追着版本升级。先验收一个真实闭环：源资料是否只保存一次、页面是否能稳定引用、用户能否分清采集源与展示页。只有出现重复项时，再检查 Skill 目录。",
    ],
    source: "https://github.com/dontbesilent2025/dbskill/releases/tag/v2.18.15",
    sourceLabel: "GitHub Release v2.18.15",
  },
  {
    tag: "用户研究",
    title: "Indi Young：用认知模式理解用户，不只看人群标签",
    intro: "同一产品面向不同受众时，差异可能来自思考路径，而不是年龄或职业。",
    content: [
      "事实背景：ProductTank Madrid 在 2026 年 7 月 29 日举办 Indi Young 的线上活动“How to Combine Data Science with Human Cognition Research”。活动说明明确提到 Mental Model Skylines 与 Thinking Styles，并讨论 AI 如何帮助团队依据用户的心理模型和思考风格，让同一个产品更适配不同受众。",
      "必要概念解释：心理模型不是用户对界面按钮的看法，而是用户为了完成某个目标，如何理解情境、判断选项、担心风险并采取行动。思考风格关注的是人怎样处理信息。它们与年龄、城市、职业等人口属性不同：两位身份相似的用户，可能因为判断路径不同而需要完全不同的解释和支持。",
      "为什么重要：许多 AI 产品把“个性化”理解为记住偏好或更换语气，但真正影响结果的往往是用户如何形成判断。若用户需要先看到证据再行动，产品只给一个结论就不够；若用户在选择过多时停滞，继续提供更多选项反而会增加负担。",
      "对实践的建议：阅读简报时不要问“今天有多少条”，而问“哪一条改变了我对一个具体问题的判断”。做产品研究时，不只记录用户是谁，还记录他当时想完成什么、先看什么证据、在哪一步犹豫、用什么标准判断完成。",
    ],
    source: "https://www.meetup.com/producttank-madrid/events/315616912/",
    sourceLabel: "ProductTank Madrid 活动页",
  },
];

const trends = [
  ["重复目标", "把 AI 嵌入真实工作流，并找到自己愿意持续使用、能解决具体问题的方式。"],
  ["重复阻碍", "高密度信息流与深夜直播带来即时刺激；长内容和验收工作反馈较慢，容易被继续搭系统替代。"],
  ["精力变化", "过去七天至少两次直播到凌晨四点，另有一次奶茶后通宵；白天补觉、头疼和在家想睡反复出现。"],
  ["正向变化", "你完成了教资领取、向真实用户交付教程、公开回答“如何用 AI”，并把知识星球采集与每日简报接成了真实工作流。"],
];

const briefDate = "2026-07-30";

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
              <a href="/daily-briefing/archive/2026-07-30.html" aria-current="page">2026年7月30日</a>
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
                {briefing.map((item, index) => (
                  <a href={`#brief-${index + 1}`} key={item.title}>{item.title}</a>
                ))}
              </div>
            </div>

            <div className="nav-group">
              <a className="nav-title" href="#planet"><span className="nav-icon icon-planet" aria-hidden="true">✦</span>昨日知识星球</a>
              <div className="nav-sub">
                <a href="#planet-post-1">一个“反常识认知”提示词</a>
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
                <a href="#schedule">上午验收</a>
                <a href="#schedule">下午阅读与锚点</a>
                <a href="#risk">今日风险</a>
              </div>
            </div>

            <div className="nav-group">
              <a className="nav-title" href="#deep-reads"><span className="nav-icon icon-briefing" aria-hidden="true">↗</span>今日深读</a>
              <div className="nav-sub">
                <a href="#deep-read-1">dbskill v2.18.15 差异</a>
                <a href="#deep-read-2">认知研究与心理模型</a>
                <a href="#deep-read-3">Dan Koe：有观点而非追细分</a>
              </div>
            </div>

            <div className="nav-group">
              <a className="nav-title" href="/hotlist/2026-07-29.html"><span className="nav-icon icon-hotlist" aria-hidden="true">↗</span>昨日热点榜单</a>
            </div>
          </nav>

          <p className="sidebar-note">点小标题直达正文 · 折叠内容会自动展开</p>
        </aside>

        <div className="page" id="top">
        <section className="hero">
          <div className="date-block">
            <div className="date-day">30</div>
            <div>
              <p className="date-month">2026 · 07</p>
              <p className="date-week">星期四</p>
            </div>
          </div>
          <div className="hero-copy">
            <p className="eyebrow">TODAY&apos;S DIRECTION</p>
            <h1>系统已经建成，<br />今天开始真正使用。</h1>
            <p className="judgment">
              昨天完成了知识星球采集与简报融合，却仍觉得“啥也没干”。今天不再增加系统：只验收一次、完整读一条、留下本人一句话锚点，让工具第一次产生可感知的使用结果。
            </p>
          </div>
          <div className="hero-mark" aria-hidden="true">晴</div>
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
            <p>点击标题展开完整背景与启发</p>
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
          <details className="brief-item" id="source-check">
            <summary>
              <span className="brief-index">核验</span>
              <span className="brief-main">
                <span className="pill">指定来源</span>
                <strong>固定博主今日更新核验</strong>
                <span>未发现就明确写未发现，不用旧内容补位</span>
              </span>
              <span className="plus" aria-hidden="true">＋</span>
            </summary>
            <div className="brief-content">
              <p><strong>Dan Koe：</strong>截至 2026 年 7 月 30 日早间，官网 Letters 公开归档未发现当日可核验更新；归档页可见的最新公开条目停留在 2025 年 8 月 31 日。没有用旧文章冒充今日动态。</p>
              <p><strong>dontbesilent 的 X：</strong>X 公开页无法稳定读取当日时间线，搜索亦未找到可核验的 7 月 29—30 日新帖；GitHub/dbskill 的 v2.18.15 已作为上方独立动态收录。</p>
              <p><strong>Naval：</strong>未发现 7 月 29—30 日可核验的新公开内容。</p>
              <p><strong>姜胡说公开短视频：</strong>未发现 7 月 29—30 日可核验的新抖音或视频号公开内容；昨日知识星球原文只在下方独立栏目展示，不混入公开动态名额。</p>
              <p>核验边界：搜索引擎与未登录平台可能漏收内容；因此这里表达的是“未发现可核验更新”，不是断言作者绝对没有发布。</p>
            </div>
          </details>
        </section>

        <section className="section planet-section" id="planet">
          <div className="section-heading">
            <div>
              <p className="eyebrow">JIANGHU NOTES · YESTERDAY</p>
              <h2>昨日姜胡说知识星球</h2>
            </div>
            <p>归档区间：7 月 28 日 23:30—7 月 29 日 23:30<br /><a className="archive-link" href="/knowledge/2026-07-29/26-07-29姜胡说知识星球.md">查看原始归档 ↗</a></p>
          </div>
          <details className="planet-card" id="planet-post-1">
            <summary>
              <div className="avatar">胡</div>
              <div>
                <span className="planet-time">大胡子 · 22:26</span>
                <strong>一个“反常识认知”提示词</strong>
                <span>完整原文</span>
              </div>
              <span className="open-label">展开</span>
            </summary>
            <div className="planet-content">
              <div className="original">
                <span>原文</span>
                <p>就是这个提示词。拿走，不谢。</p>
                <p>请你给我一个醍醐灌顶的认知，它是有违人们常识的。人们平时做的都是反的，但真正正确的方法应该是这样的。用大白话讲清楚，给我至少3个真实案例，每个案例有出处，不是运气。然后给一个最小可执行方法，一周以内的。不要鸡汤，我要实操。</p>
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
                <p><strong>事实：</strong>你在霸王茶姬坐了一下午，刷了半天后转去研究胡楚靓的工作台；随后回到姜胡说知识星球，让 Codex 制作并反复调试正文采集程序；你还把每日早报和个人简报融合，并计划把知识星球检索接入每日简报。日记最后写：“一直调试修改，说实话这让我感觉今天啥也没干。”</p>
                <p><strong>可确认的完成项：</strong>采集器能按日期保存星主原文；每日早报与个人简报已合并；知识星球栏目具备进入每日简报的基础。它们是实际产出，不等于“没有做事”。</p>
                <p className="advice"><strong>AI 建议：</strong>今天先作为使用者验收成果，而不是继续作为搭建者增加功能。衡量标准改为：是否打开、是否读完一条、是否留下一个本人锚点，而不是今天又调了多少代码。</p>
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
                <p><strong>你描述的问题：</strong>你已经自动化了早报、简报与热点，但很少完整阅读；昨天又完成知识星球采集和融合，却仍觉得“啥也没干”。</p>
                <p><strong>证据与信号：</strong>A（执行模拟器）与 B（思考替代行动）最明显，D（知识上瘾）次之。证据包括：7 月 24 日明确写早报“没看过”、简报“偶尔看”；7 月 29 日继续搭建新采集与融合流程；产出完成后，没有先使用结果，而是用“是否继续调试”衡量一天。7 月 25—28 日还反复出现信息流、深夜直播、听不懂后想补更大知识体系。</p>
                <p><strong>AI 诊断：</strong>问题不是缺少工具，而是“搭建系统”提供了即时、可控、持续出现的新问题；真正阅读和形成本人判断则反馈慢，还会暴露“我读完后可能没有特别深的想法”。继续准备可以维持“我正在推进”的感觉，同时避免面对成果是否真的有用。这里的判断依据是连续多日行为，不是把单次调试本身视为拖延。</p>
                <p><strong>真正的问题：</strong>你把“系统能运行”当成终点，把“本人实际使用后产生什么变化”留在了终点之外。于是系统越完整，待读内容越多，使用负担反而越重。</p>
                <p><strong>阿德勒框架下的解法：</strong>用现有系统帮助一个具体的人完成一个更小的问题，而不是继续证明系统本身厉害。今天先帮助“今晚的自己”：把一条材料读完，留下一句能在明天重新找到的锚点。若这条锚点以后确实帮你做出判断，它才成为系统有价值的证据。</p>
                <p className="advice"><strong>一句话处方：</strong>今天不许再证明系统能做什么，只检查它有没有真的帮你读完一条。</p>
                <p><strong>适用边界：</strong>必要的故障修复不是逃避；若页面日期、原文或链接错误，可以修复。只有在核心闭环已可用时仍不断新增功能，才符合上述诊断。</p>
                <p><strong>免责声明：</strong>这是基于 dontbesilent 推文逻辑与本地日记证据生成的 AI 诊断工具，不是心理咨询；若存在持续情绪或睡眠困扰，应寻求专业帮助。</p>
              </div>
            </details>
          </div>
        </section>

        <section className="schedule" id="schedule">
          <div>
            <span>上午</span>
            <p>正常吃饭、补水；用手机完整打开今天简报，检查日期、目录、热点、知识星球与历史切换。发现错误只记录，不顺手扩建。</p>
          </div>
          <div>
            <span>下午</span>
            <p>只选一条产品早报或知识星球原文完整读完，用日记里的“暂停—锚点—继续”留下本人一句话。</p>
          </div>
          <div>
            <span>晚上</span>
            <p>不补直播、不新增采集器；按自己设定的时间停止信息流，为连续多日熬夜后的恢复留白。</p>
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
            <p><strong>继续调试：</strong>只要发现一个小问题，就可能重新进入数小时的系统修改。边界是先记录，只有影响今天阅读闭环的错误才立刻修。</p>
            <p><strong>信息流切换：</strong>7 月 25 日已明确写下对高密度信息刺激的需求。阅读时可以使用本人记录过的“暂停—锚点—继续”，但不同时打开抖音或小红书。</p>
            <p><strong>睡眠负荷：</strong>近七天多次凌晨四点或通宵，今天不适合安排新的宏大项目。若白天头痛、困倦或烦躁，保留任务 01，任务 02 缩成只读五分钟，任务 03 不变。</p>
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
              <summary><span className="brief-index">01</span><span className="brief-main"><strong>dbskill v2.18.15 版本差异</strong><span>阅读问题：默认路径怎样影响用户理解与维护成本？</span></span><span className="plus">＋</span></summary>
              <div className="brief-content"><p>背景：这是 7 月 29 日当天可核验的原始发布记录。重点不是版本号，而是作者为什么把通用 Agents 目录从默认行为改成显式选项。</p><p>阅读时对照你自己的自动化：哪些能力应该默认出现，哪些只在用户明确要求时启用；同一份内容在哪里是真源，其他位置只是展示或桥接。</p><p><a className="archive-link" href="https://github.com/dontbesilent2025/dbskill/compare/v2.18.14...v2.18.15">阅读完整代码差异 ↗</a></p></div>
            </details>
            <details className="brief-item" id="deep-read-2">
              <summary><span className="brief-index">02</span><span className="brief-main"><strong>Indi Young：认知研究与心理模型</strong><span>阅读问题：用户分群之外，怎样记录真实判断过程？</span></span><span className="plus">＋</span></summary>
              <div className="brief-content"><p>背景：ProductTank Madrid 的活动说明概括了 Mental Model Skylines、Thinking Styles 与 AI 个性化的连接。它适合用来区分“记住用户偏好”与“理解用户怎样思考”。</p><p>重点看活动对用户目标、意图、认知路径的描述；再反问自己的简报：页面是在堆信息，还是在支持一个真实判断？</p><p><a className="archive-link" href="https://www.meetup.com/producttank-madrid/events/315616912/">阅读活动原页 ↗</a></p></div>
            </details>
            <details className="brief-item" id="deep-read-3">
              <summary><span className="brief-index">03</span><span className="brief-main"><strong>Dan Koe：你不需要细分赛道，需要一个观点</strong><span>历史深读，发布日期 2025-07-31，不属于今日动态</span></span><span className="plus">＋</span></summary>
              <div className="brief-content"><p>背景：这篇旧文被明确放在深读而非今日新闻。它与你 7 月 23 日“不想发 AI 味太重的小红书”、7 月 25 日“AI 时代更重要的是自己的审美与判断”存在可核验的阅读连接，但这些日记原话不等于你已经认同 Dan Koe 的文章。</p><p>阅读问题：当生成成本越来越低，内容的辨识度来自细分标签，还是来自持续可辨认的选择、语言与判断？哪些段落只是作者的个人商业叙事，不适合直接迁移到你的处境？</p><p><a className="archive-link" href="https://thedankoe.com/letters/">前往 Dan Koe Letters 归档 ↗</a></p></div>
            </details>
          </div>
        </section>

        <a className="hotlist" href="/hotlist/2026-07-29.html">
          <span>昨日热点榜单</span>
          <strong>查看 7 月 29 日完整热点看榜</strong>
          <span className="arrow">→</span>
        </a>

        <footer>
          <p>今天不再增加一个“以后会读”的系统，<br />先让已经建好的系统真正被使用一次。</p>
          <span>每日 08:00 更新 · 完整内容折叠保存</span>
        </footer>
        </div>
      </div>
    </main>
  );
}
