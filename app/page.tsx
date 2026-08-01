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

const briefing = [
  {
    tag: "视频创作",
    title: "YouTube：Shorts 开始支持自定义缩略图",
    intro: "平台把缩略图控制权进一步交给创作者，也把“用户看到什么”变成可设计环节。",
    content: [
      "事实背景：YouTube 于 2026 年 7 月 24 日宣布，YouTube Partner Program 创作者开始可以为 Shorts 上传自定义缩略图，后续会扩大范围；桌面端也可从三个建议画面中选择。长视频方面，Ask Studio 可直接生成缩略图，并通过对话继续调整颜色和版式。",
      "必要概念解释：缩略图不是视频内容本身，却承担一次“进入承诺”——它告诉用户这条视频大致讲什么、适合谁、看完可能得到什么。自定义能力增加，不代表缩略图可以与内容脱节；承诺越夸张、实际内容越弱，点击可能上升，但信任与留存会受损。",
      "为什么重要：短视频过去常依赖系统截帧，创作者对入口信息控制有限。现在 Shorts 的包装与长视频更接近，意味着同一个内容需要同时考虑被推荐时的前几秒，以及出现在频道页、搜索与历史记录时的静态入口。",
      "对实践的建议：你今天做 AI 知识库视频时，先写一句缩略图承诺，再录内容。承诺必须能在视频里被实际兑现，例如“我怎么把一份资料放进本地知识库”，而不是泛化成“普通人必须学会 AI 知识库”。",
    ],
    source: "https://blog.youtube/news-and-events/youtube-studio-custom-thumbnail-updates/",
    sourceLabel: "YouTube 官方博客",
  },
  {
    tag: "用户研究",
    title: "Dovetail：用真实研究资料建立客户数字孪生",
    intro: "AI 可以让团队更快查询用户材料，但模拟用户并不等于重新访问真实用户。",
    content: [
      "事实背景：Dovetail 于 2026 年 7 月 14 日发布 Summer Launch ’26，新增可依据真实通话、客服工单和研究资料建立客户、细分人群或 persona 数字孪生的能力，并允许团队在 Dovetail Chat、Slack 或 Teams 中询问其优先级、反对理由和对新想法的反应。",
      "必要概念解释：这里的“数字孪生”不是一个真实客户的复制品，而是根据已有资料生成的可查询模拟。它能把散落证据组织成对话入口，却仍受原始样本、分类方式、资料新旧与模型推断影响。",
      "为什么重要：产品团队经常知道资料存在哪里，却没有时间反复翻访谈。对话式入口降低检索成本，也可能让更多非研究人员接触用户证据；风险是回答太流畅，使团队忘记它只是对历史材料的推断，而不是一次新的用户访谈。",
      "对实践的建议：以后用 AI 分析视频评论或用户材料时，要求它同时返回原始证据和反例。把 AI 生成的用户反应当作待验证假设，不把“数字用户说了什么”写成真实用户已经说过什么。",
    ],
    source: "https://dovetail.com/blog/suns-out-2026-launch/",
    sourceLabel: "Dovetail 官方发布",
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
                {briefing.map((item, index) => (
                  <a href={`#brief-${index + 1}`} key={item.title}>{item.title}</a>
                ))}
              </div>
            </div>

            <div className="nav-group">
              <a className="nav-title" href="#planet"><span className="nav-icon icon-planet" aria-hidden="true">✦</span>昨日知识星球</a>
              <div className="nav-sub">
                <a href="#planet-missing">7 月 31 日归档尚未生成</a>
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
                <a href="#deep-read-1">YouTube：缩略图更新</a>
                <a href="#deep-read-2">Dovetail：数字孪生</a>
                <a href="#deep-read-3">Dan Koe：理解而非全记住</a>
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
              <p><strong>Dan Koe：</strong>截至 2026 年 8 月 1 日 09:00，未发现 7 月 31 日或 8 月 1 日新条目；最近可核验公开文章仍为 7 月 25 日《How to remember everything you read... don&apos;t》。</p>
              <p><strong>dontbesilent 的 X：</strong>X 公开页无法稳定读取完整当日时间线，因此没有把搜索片段当作更新；GitHub API 核验 dbskill 最新 release 仍为 7 月 29 日 v2.18.15。</p>
              <p><strong>Naval：</strong>官网首页最新可核验节目为 2026 年 7 月 2 日《Live in the Future》；未发现 7 月 31 日或 8 月 1 日新节目。</p>
              <p><strong>姜胡说公开短视频：</strong>未发现 7 月 31 日或 8 月 1 日具有明确日期、且可完整核验的抖音或视频号原始页面。</p>
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
            <p>应读取 7 月 31 日归档，不回退旧日期</p>
          </div>
          <details className="planet-card" id="planet-missing" open>
            <summary>
              <div className="avatar">缺</div>
              <div>
                <span className="planet-time">采集状态</span>
                <strong>7 月 31 日知识星球归档尚未生成</strong>
                <span>不使用更早日期顶替</span>
              </div>
              <span className="open-label">详情</span>
            </summary>
            <div className="planet-content">
              <div className="original">
                <span>预期路径</span>
                <p>8.姜胡说知识星球/output/26.7月/26-07-31姜胡说知识星球/26-07-31姜胡说知识星球.md</p>
                <p>截至本次生成时没有找到该文件，因此今天不展示星主原文、图片或任何替代性解读，也不回退到 7 月 30 日归档。</p>
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
              <summary><span className="brief-index">01</span><span className="brief-main"><strong>YouTube：Shorts 缩略图更新</strong><span>阅读问题：入口承诺怎样与视频结果保持一致？</span></span><span className="plus">＋</span></summary>
              <div className="brief-content"><p>背景：YouTube 于 7 月 24 日公开 Shorts 自定义缩略图、建议画面和 Ask Studio 长视频缩略图生成功能。这是平台官方产品更新，不是第三方教程。</p><p>阅读重点不是学习做精美封面，而是观察平台如何把发现、点击与内容预期串起来。你今天只需为第一条视频写一句真实可兑现的入口承诺。</p><p><a className="archive-link" href="https://blog.youtube/news-and-events/youtube-studio-custom-thumbnail-updates/">阅读 YouTube 官方发布 ↗</a></p></div>
            </details>
            <details className="brief-item" id="deep-read-2">
              <summary><span className="brief-index">02</span><span className="brief-main"><strong>Dovetail：客户数字孪生</strong><span>阅读问题：模拟用户与真实用户证据的边界在哪里？</span></span><span className="plus">＋</span></summary>
              <div className="brief-content"><p>背景：Dovetail 于 7 月 14 日发布 Summer Launch ’26，数字孪生建立在通话、工单与研究资料上，可供团队对话查询。</p><p>重点观察产品如何降低历史资料检索成本，同时警惕模型把缺失语境补得过于完整。读完不需要试新工具，只要记住：AI 回答应能回到原始证据。</p><p><a className="archive-link" href="https://dovetail.com/blog/suns-out-2026-launch/">阅读 Dovetail 官方发布 ↗</a></p></div>
            </details>
            <details className="brief-item" id="deep-read-3">
              <summary><span className="brief-index">03</span><span className="brief-main"><strong>Dan Koe：阅读不是记住全部</strong><span>阅读问题：哪一个概念能被你今天的视频实际使用？</span></span><span className="plus">＋</span></summary>
              <div className="brief-content"><p>背景：这是 Dan Koe 于 7 月 25 日发布、截至今天仍为最近可核验的公开文章，区分机械记忆、理解和应用。</p><p>它今天只作为可选深读，不作为“当日更新”。不要抄完整摘要；若阅读，只找一个能够改变视频结构或表达的概念，没有实际连接就不必记录。</p><p><a className="archive-link" href="https://letters.thedankoe.com/p/how-to-remember-everything-you-read">阅读 Dan Koe 原文 ↗</a></p></div>
            </details>
          </div>
        </section>

        <div className="hotlist" id="hotlist-missing" aria-label="昨日热点榜单尚未生成">
          <span>昨日热点榜单</span>
          <strong>7 月 31 日热点榜单尚未生成</strong>
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
