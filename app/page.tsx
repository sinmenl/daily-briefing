const tasks = [
  {
    number: "01",
    title: "先确认今天的精力",
    body: "昨日日记记录通宵后只睡四五小时。开始任何任务前先吃饭、补水并判断困倦程度；状态差就不追加新项目。",
    first: "用一句话记录此刻精力",
    time: "5 分钟",
    tone: "mint",
  },
  {
    number: "02",
    title: "让工作台完成一次真任务",
    body: "不要先研究所有功能。只拿一个今天真实要解决的小问题，完整走一遍输入、结果、核对与是否有用。",
    first: "写下一个真实问题",
    time: "25 分钟",
    tone: "blue",
  },
  {
    number: "03",
    title: "保住一次主动阅读",
    body: "昨天已经明确写下“还是把我的简报看了”。今天延续这个动作，只读一条并留下本人一句话，不扩建系统。",
    first: "从下方任选一条展开",
    time: "15 分钟",
    tone: "peach",
  },
];

const briefing = [
  {
    tag: "阅读与创作",
    title: "Dan Koe：阅读不是逐字记忆，而是形成理解",
    intro: "最近一次可核验公开文章，把“记住全部”与“真正理解并能使用”分开。",
    content: [
      "事实背景：Dan Koe 于 2026 年 7 月 25 日发布《How to remember everything you read... don't》。文章反对把阅读目标设成记住每句话，认为机械记忆常被误当成聪明或学习成果；更重要的是理解概念、把它与已有经验连接，并在需要时用出来。截至 7 月 31 日早间，未发现 7 月 30—31 日新的可核验 Letters 条目。",
      "必要概念解释：记忆回答“我能不能复述”，理解回答“我能不能用自己的语言解释、判断它在什么情况下成立”。两者会重叠，但不是一回事。为了保存所有内容而不断摘录，可能增加资料量，却不一定改变判断。",
      "为什么重要：生成式 AI 可以替人保存、搜索和总结大量材料，但不能自动替人决定什么值得相信、什么与当前问题有关。内容创作者若只追求收集完整，容易把表达变成资料搬运；产品若只追求记录更多用户数据，也可能没有真正支持用户做决定。",
      "对实践的建议：你 7 月 25 日本人写过“一句话想法是理解过程的起点”，昨天又明确写下已阅读简报。今天只需从一条材料中写出一个本人可复查的连接，不要求记住整篇，也不把作者的判断当成自己的判断。",
    ],
    source: "https://letters.thedankoe.com/p/how-to-remember-everything-you-read",
    sourceLabel: "Dan Koe 原文",
  },
  {
    tag: "Agent 基建",
    title: "dbskill v2.18.15：默认避开重复 Skill 目录",
    intro: "一次很小的路径调整，解决的是多端安装后能力重复、真源不清的问题。",
    content: [
      "事实背景：dontbesilent 的 GitHub 仓库在 2026 年 7 月 29 日 18:44（北京时间）发布 v2.18.15。版本差异显示，dbs-bridge 现在默认桥接 Claude Code、Codex、WorkBuddy 与 Grok，不再默认写入 ~/.agents/skills；只有明确需要豆包 Mac App、Trae Solo 等通用 Agents 时才使用 --with-agents。",
      "为什么重要：Codex 会同时读取 ~/.codex/skills 与 ~/.agents/skills。同一个 Skill 同时出现在两个目录时，用户会看到重复能力，也更难判断哪个目录是真源。此次更新不是新增更多功能，而是减少重复入口，让“一份源文件、多端调用”的关系更可理解。",
      "产品与用户研究视角：基础设施产品常见的痛点不是“能力不够”，而是状态不可见、路径重复、边界不清。对用户而言，列表中两个同名 Skill 并不意味着能力翻倍，只意味着额外判断成本。好的默认值应该服务大多数真实使用路径，把特殊兼容需求变成显式选项。",
      "对实践的建议：截至 7 月 31 日早间，v2.18.15 仍是最新 release，7 月 30—31 日没有新版本。无需为了“保持最新”继续升级；只有发现同名 Skill 重复或真源不清时，才检查目录。",
    ],
    source: "https://github.com/dontbesilent2025/dbskill/releases/tag/v2.18.15",
    sourceLabel: "GitHub Release v2.18.15",
  },
];

const trends = [
  ["重复目标", "把 AI 嵌入真实工作流，并找到自己会实际使用、能解决具体问题的方式。"],
  ["重复阻碍", "高密度信息流、游戏与深夜直播提供即时反馈；长内容和真实使用反馈较慢，容易被切换或继续搭系统取代。"],
  ["精力变化", "过去七天多次凌晨四点或通宵，白天补觉、困倦和缺少行动欲望反复出现；7 月 30 日只睡约四五小时。"],
  ["正向变化", "你从 7 月 24 日写“早报没看过、简报偶尔看”，走到了 7 月 30 日明确写“还是把我的简报看了”。这是可核验的使用变化。"],
];

const briefDate = "2026-07-31";
const weather = {
  location: "南宁",
  condition: "阵雨",
  temperature: "24–30℃",
  icon: "🌦️",
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
              <a href="?date=2026-07-31" aria-current="page">2026年7月31日</a>
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
                <a href="#planet-post-1">核心技能都要经过难看的阶段</a>
                <a href="#planet-post-2">开头也要筛掉不合适的人</a>
                <a href="#planet-post-3">不要为躲小山包绕大山</a>
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
                <a href="#schedule">上午恢复与确认精力</a>
                <a href="#schedule">下午完成一次真任务</a>
                <a href="#risk">今日风险</a>
              </div>
            </div>

            <div className="nav-group">
              <a className="nav-title" href="#deep-reads"><span className="nav-icon icon-briefing" aria-hidden="true">↗</span>今日深读</a>
              <div className="nav-sub">
                <a href="#deep-read-1">Dan Koe：理解而非全记住</a>
                <a href="#deep-read-2">dbskill v2.18.15 差异</a>
                <a href="#deep-read-3">知识星球：开头负责筛选</a>
              </div>
            </div>

            <div className="nav-group">
              <a className="nav-title" href="/hotlist/2026-07-30.html"><span className="nav-icon icon-hotlist" aria-hidden="true">↗</span>昨日热点榜单</a>
            </div>
          </nav>

          <p className="sidebar-note">点小标题直达正文 · 折叠内容会自动展开</p>
        </aside>

        <div className="page" id="top">
        <section className="hero">
          <div className="date-block">
            <div className="date-day">31</div>
            <div>
              <p className="date-month">2026 · 07</p>
              <p className="date-week">星期五</p>
            </div>
          </div>
          <div className="hero-copy">
            <p className="eyebrow">TODAY&apos;S DIRECTION</p>
            <h1>别再研究“怎样使用”，<br />先用它完成一件小事。</h1>
            <p className="judgment">
              昨天虽然通宵、只睡四五小时，你仍第一次明确写下“把简报看了”。今天不扩建系统：先确认精力，再让工作台完成一个真实小任务，并保住一次主动阅读。
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
              <p><strong>Dan Koe：</strong>截至 2026 年 7 月 31 日 09:05，未发现 7 月 30—31 日新条目；最近可核验的公开文章为 7 月 25 日《How to remember everything you read... don&apos;t》，已作为上方动态收录。</p>
              <p><strong>dontbesilent 的 X：</strong>X 公开页无法稳定读取当日时间线，搜索未找到可核验的 7 月 30—31 日新帖；GitHub/dbskill 的最新 release 仍为 7 月 29 日 v2.18.15。</p>
              <p><strong>Naval：</strong>官网作者页最近可核验条目为 2026 年 6 月 1 日《The AI Industrial Revolution》；未发现 7 月 30—31 日新公开内容。</p>
              <p><strong>姜胡说公开短视频：</strong>未发现 7 月 30—31 日可核验的新抖音或视频号原始页面；昨日知识星球原文只在下方独立栏目展示，不占公开动态名额。</p>
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
            <p>归档区间：7 月 29 日 23:30—7 月 30 日 23:30<br /><a className="archive-link" href="/knowledge/2026-07-30/26-07-30姜胡说知识星球.md">查看原始归档 ↗</a></p>
          </div>
          <details className="planet-card" id="planet-post-1">
            <summary>
              <div className="avatar">胡</div>
              <div>
                <span className="planet-time">大胡子 · 08:45</span>
                <strong>核心技能都要经过难看的阶段</strong>
                <span>完整原文</span>
              </div>
              <span className="open-label">展开</span>
            </summary>
            <div className="planet-content">
              <div className="original">
                <span>原文</span>
                <p>任何一个有用且实用的核心技能，<br />都必须通过大量刻意练习和积累获得。<br />都需要经过一个看起来像狗屎，然后慢慢变好的过程。<br />任何一个。</p>
                <p>任何想跳过这个过程、破格获取的人，都是蠢货。<br />有的还是超级蠢货。<br />无一例外。</p>
              </div>
            </div>
          </details>
          <details className="planet-card" id="planet-post-2">
            <summary>
              <div className="avatar">胡</div>
              <div>
                <span className="planet-time">大胡子 · 20:10</span>
                <strong>开头也要筛掉不合适的人</strong>
                <span>完整原文</span>
              </div>
              <span className="open-label">展开</span>
            </summary>
            <div className="planet-content">
              <div className="original">
                <span>原文</span>
                <p>刚刚我在回填数据的时候看到了这个（参见前两天我给大家发的提示词，我正在进一步优化它）。<br />说明什么？</p>
                <p>就是标题没选好，前30秒没做好。算法把内容推给了不匹配的人，好内容分发给了不合适的人，造成数据下滑。<br />如果换个标题和开头，数据非常有可能会上来。<br />所以，你的前3秒和开头不一定是把用户吸引进来，反而应该是让不合适的人不要进来。<br />有违常理吧。<br />但，事实就是这样：收藏率和完播率比黄金3秒还重要。你想想平台要的是什么，就明白了。</p>
                <img src="/knowledge/2026-07-30/images/[2] 大胡子 -1.png" alt="大胡子帖子配图：内容数据回填截图" />
              </div>
            </div>
          </details>
          <details className="planet-card" id="planet-post-3">
            <summary>
              <div className="avatar">胡</div>
              <div>
                <span className="planet-time">大胡子 · 20:16</span>
                <strong>不要为躲小山包绕大山</strong>
                <span>完整原文</span>
              </div>
              <span className="open-label">展开</span>
            </summary>
            <div className="planet-content">
              <div className="original">
                <span>原文</span>
                <p>工欲善其事，必先利其器。<br />如果你真的想在某一方面有所成就，应该深入地去理解、打磨关于该项技能的每一个细节。而不是不停地东张西望，去寻找什么奇技淫巧，不停地换赛道。</p>
                <p>太多的老伙计静不下心来。<br />一旦数据受挫，马上就进入焦虑。思考的问题不是去打磨细节，而是想着要不然我再换个赛道吧。没有数据肯定是因为我讲的这个领域没人感兴趣，我换个领域。<br />你看，又进入了之前我反复强调的“为了躲个小山包，我去绕一座大山”的重复逻辑。</p>
                <p>在做某件事情的时候，见到一点小困难就想躲。<br />那么恭喜你。只要你想做这个事儿，这些困难就会永远挡在你面前，并且以技术债的形式不断地叠加。最终击溃你。</p>
                <p>如果你能像我上一个帖子一样，一点一点地去深度研究它。<br />一切困难都他娘的是纸老虎。<br />很可惜，很少有人会像我这么做。</p>
                <p>他们总希望付出很少的一点点努力，然后获得大大的结果。<br />终究不肯醒来。</p>
                <img src="/knowledge/2026-07-30/images/[3] 大胡子 -1.png" alt="大胡子帖子配图一" />
                <img src="/knowledge/2026-07-30/images/[3] 大胡子 -2.png" alt="大胡子帖子配图二" />
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
                <p><strong>事实：</strong>7 月 30 日日记记录：前一晚喝奶茶后通宵打王者 14 把，之后继续刷视频；早上外出吃粉，回家睡约四五小时，醒后继续刷手机，没有干活欲望。你写“又是一个休息日”。</p>
                <p><strong>可确认的变化：</strong>同一篇日记里，你第一次明确写“还是把我的简报看了”。7 月 24 日曾写早报“没看过”、简报“偶尔看”；因此昨天至少完成了一次从搭建到使用的动作。</p>
                <p><strong>本人已写下的待研究问题：</strong>你认为“工作台这件事，形式大于意义”，并写“我做了可是不会用，明天我要研究一下，为什么我会觉得工作台这件事形式大于意义”。这里只忠实呈现原记录，不替你回答。</p>
                <p className="advice"><strong>AI 建议：</strong>不要先研究抽象原因，也不要学习全部功能。让工作台处理一个真实小任务，再记录它在哪一步有用或无用；一次使用证据比继续讨论“形式还是意义”更能回答问题。</p>
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
                <p><strong>你描述的问题：</strong>你认为工作台“形式大于意义”，因为已经做了却不会用；同时，昨天在通宵、补觉和持续刷手机后，没有干活欲望。</p>
                <p><strong>证据与信号：</strong>A（执行模拟器）与 B（用研究替代行动）仍存在，但必须与睡眠负荷分开。7 月 24 日写已有多个自动化却很少阅读；7 月 29 日继续搭建采集与融合；7 月 30 日一边首次真正读简报，一边又把下一步表述为“研究为什么工作台形式大于意义”。这说明使用已经开始，但遇到不确定时仍容易回到分析系统。</p>
                <p><strong>AI 诊断：</strong>工作台是否有意义不是靠继续研究能回答的抽象问题，而是一个使用验证问题。把它留在“我不会用”的状态，可以继续维持“工具可能很强，只是还没学会”的可能性；拿真实任务测试，则可能得到更具体也更不舒服的结果：它对这个任务没用，或自己没有把问题说清。这里同时存在明显睡眠不足，不能把当天缺少行动欲望全部心理化。</p>
                <p><strong>真正的问题：</strong>你缺的不是另一套工作台教程，而是一条可检查的使用证据：谁的问题、输入是什么、工作台做了什么、结果是否省时或改善判断。</p>
                <p><strong>阿德勒框架下的解法：</strong>用已有工具帮助一个具体的人解决一个小问题。今天这个人可以是“下午的自己”：拿一件原本要手工整理或判断的小事交给工作台，核对结果，并把有用与无用各记一句。不要把测试扩成新系统。</p>
                <p className="advice"><strong>一句话处方：</strong>别研究工作台有没有意义；给它一个真问题，结果就是答案。</p>
                <p><strong>适用边界：</strong>如果今天仍明显困倦、头痛或注意力涣散，先恢复睡眠；这不是用情绪合理化拖延，而是对连续通宵证据作出的负荷调整。</p>
                <p><strong>免责声明：</strong>这是基于 dontbesilent 推文逻辑与本地日记证据生成的 AI 诊断工具，不是心理咨询；若存在持续情绪或睡眠困扰，应寻求专业帮助。</p>
              </div>
            </details>
          </div>
        </section>

        <section className="schedule" id="schedule">
          <div>
            <span>上午</span>
            <p>正常吃饭、补水，确认昨晚是否按本人计划恢复睡眠；若仍明显困倦，不安排需要长时间专注的新项目。</p>
          </div>
          <div>
            <span>下午</span>
            <p>给工作台一个 25 分钟内能结束的真实任务：写清输入、查看结果、亲自核对，只记录有用与无用，不新增功能。</p>
          </div>
          <div>
            <span>晚上</span>
            <p>从简报任选一条读完并写一句本人锚点；按自己设定的停止时间离开游戏和信息流，优先恢复睡眠。</p>
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
            <p><strong>把测试变成搭建：</strong>工作台第一次结果不好时，最容易马上加规则、换工具或重做系统。今天只记录问题，不扩建。</p>
            <p><strong>信息流与游戏：</strong>7 月 30 日从 14 把游戏切到刷视频，7 月 25 日也明确记录对高密度刺激的需求。开始真任务前关闭这些入口，结束后也不把奖励设成无限信息流。</p>
            <p><strong>睡眠负荷：</strong>近七天多次凌晨四点或通宵。若白天明显困倦，任务 02 缩成只提交一个输入并保存结果；任务 03 缩成只读五分钟，不用熬夜补齐。</p>
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
              <summary><span className="brief-index">01</span><span className="brief-main"><strong>Dan Koe：阅读不是记住全部</strong><span>阅读问题：哪一个概念真正改变了你的判断？</span></span><span className="plus">＋</span></summary>
              <div className="brief-content"><p>背景：这是 7 月 25 日发布的最近可核验原文。文章区分记忆、理解与应用，适合对照你已经开始做的“一句话想法”。</p><p>阅读时不要抄完整摘要。只找一句你愿意反驳、补充或用本人经历连接的话；如果没有，也可以明确记录“没有形成连接”。</p><p><a className="archive-link" href="https://letters.thedankoe.com/p/how-to-remember-everything-you-read">阅读 Dan Koe 原文 ↗</a></p></div>
            </details>
            <details className="brief-item" id="deep-read-2">
              <summary><span className="brief-index">02</span><span className="brief-main"><strong>dbskill v2.18.15 版本差异</strong><span>阅读问题：默认路径怎样影响用户理解与维护成本？</span></span><span className="plus">＋</span></summary>
              <div className="brief-content"><p>背景：这是 7 月 29 日发布、截至今天早间仍为最新的版本。重点不是追版本号，而是作者为什么把特殊兼容路径从默认行为改成显式选项。</p><p>对照自己的工作台：默认出现的功能是否服务最常见任务；特殊能力是否让入口变多、真源变模糊。若没有遇到重复问题，不需要今天处理。</p><p><a className="archive-link" href="https://github.com/dontbesilent2025/dbskill/compare/v2.18.14...v2.18.15">阅读完整代码差异 ↗</a></p></div>
            </details>
            <details className="brief-item" id="deep-read-3">
              <summary><span className="brief-index">03</span><span className="brief-main"><strong>知识星球：开头负责筛选</strong><span>阅读问题：什么人不该进入这条内容？</span></span><span className="plus">＋</span></summary>
              <div className="brief-content"><p>背景：7 月 30 日 20:10 的星主原文提出，开头不只是吸引更多人，也可以让不匹配的人离开，以减少错误分发对收藏率和完播率的影响。</p><p>阅读时把它当作作者基于一次数据回填提出的判断，不当作普遍定律。要验证，需要比较不同标题与开头带来的受众匹配、收藏率、完播率，而不只看播放量。</p><p><a className="archive-link" href="/knowledge/2026-07-30/26-07-30姜胡说知识星球.md">阅读本地原始归档 ↗</a></p></div>
            </details>
          </div>
        </section>

        <a className="hotlist" href="/hotlist/2026-07-30.html">
          <span>昨日热点榜单</span>
          <strong>查看 7 月 30 日完整热点看榜</strong>
          <span className="arrow">→</span>
        </a>

        <footer>
          <p>工作台的意义不在功能列表里，<br />在它能否替一个真实问题产生可核对的结果。</p>
          <span>每日 08:00 更新 · 完整内容折叠保存</span>
        </footer>
        </div>
      </div>
    </main>
  );
}
