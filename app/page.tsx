const tasks = [
  {
    number: "01",
    title: "做一次 GEO 小实验",
    body: "选一个熟悉的公司或品牌，在豆包和元宝输入同一个用户问题。",
    first: "先写下同一个查询问题",
    time: "45 分钟",
    tone: "mint",
  },
  {
    number: "02",
    title: "留下一份真实结果",
    body: "记录是否被提及、引用来源和措辞差异，写成 150 字以内的小结。",
    first: "建一个三列表格",
    time: "15—20 分钟",
    tone: "blue",
  },
  {
    number: "03",
    title: "修复睡眠与支出",
    body: "不补昨晚直播，不开新项目；正常吃饭，设定今晚停止信息流的时间。",
    first: "现在定下停止时间",
    time: "其余时间留白",
    tone: "peach",
  },
];

const briefing = [
  {
    tag: "内容资产",
    title: "Reuters 将视觉内容授权统一到 Reuters Connect",
    intro: "真正的价值不只是找到素材，而是同时确认来源、授权和可用范围。",
    content: [
      "据早报资料，Reuters 将 Reuters Connect 作为新闻图片和视频内容的统一授权入口，整合 Reuters Pictures、体育图片和视频档案，并加入 AI 搜索能力。",
      "这不是单纯扩大素材库，而是把“搜索素材”和“确认能否合法使用”接成一条工作流。用户真正需要的往往不是更多图片，而是更快找到正确素材，并明确知道来源、授权范围和使用条件。",
      "对内容创作的启发：AI 图片越来越容易生成后，真实新闻素材可能因为包含时间、场景、来源、可核验性和使用权而更有价值。个人素材库也不应只保存图片，还要保存出处、授权和允许使用的范围。",
    ],
  },
  {
    tag: "内容合规",
    title: "AI 内容透明与标识正在成为产品基础设施",
    intro: "创作者需要开始保存原始素材、引用来源和人工修改过程。",
    content: [
      "相关透明度规则正在推动深度伪造以及部分由 AI 生成或操纵的内容向用户明确标识。AI 标识会逐渐从平台的自愿选择，变成产品基础设施。",
      "产品需要回答：哪一部分由 AI 生成，哪一部分由人工编辑，用户能否识别，来源能否追踪，以及最终由谁承担责任。",
      "现在就可以建立最小溯源习惯：保存原始素材、保留 AI 参与过程、记录人工修改、标注引用来源，并避免在商业内容中用 AI 伪造真实体验。",
    ],
  },
  {
    tag: "Agent",
    title: "AI 产品从回答问题走向持续执行项目",
    intro: "真正的任务系统要知道何时完成、何时确认，以及出错后怎样恢复。",
    content: [
      "AI 产品正在从“生成答案”，发展到“调用工具”，再到“持续管理任务”，最终尝试根据任务结果主动推进后续步骤。",
      "层级越高，产品就越不能只展示能调用多少工具。任务系统要知道何时已经完成，何时必须向用户确认；出错后能否恢复；长期执行中会不会偏离最初目标。",
      "对你工作流的启发：自动简报、热点分析和内容 Skill 下一步不一定需要更多格式，而需要知道上一次做过什么、哪些信息不要重复、这次完成后下一步是什么。",
    ],
  },
  {
    tag: "用户研究",
    title: "AI 正成为购物研究入口，但还不是最终决策者",
    intro: "使用频率更接近便利性，采纳与复用才更接近信任。",
    content: [
      "越来越多用户开始直接在 AI 平台上进行购买研究，而不是先进入传统搜索；但用户通常仍会在真正购买之前，通过其他渠道核验 AI 推荐。",
      "成为“信息入口”不等于成为“最终决策者”。AI 更适合帮助用户理解品类、生成候选清单和整理比较维度；最终购买仍经常依赖真人评价、原始参数、实际体验、品牌信誉与售后责任。",
      "评估 AI 产品时，不能只看用户是否打开并提问。还要观察用户是否接受答案、是否继续搜索、是否点击原始来源、是否真正采取建议，以及采取建议后的结果。",
    ],
  },
  {
    tag: "产品机会",
    title: "模型之外，“在哪里、怎样使用 AI”更值得关注",
    intro: "任务路由、权限、质量评估、成本和决策记录正在变得更重要。",
    content: [
      "当模型能力逐渐商品化，组织真正缺少的往往不是又一个聊天入口，而是使用边界、权限控制、数据治理、任务路由、质量评估、成本管理和决策记录。",
      "价值正在从“拥有很多知识或能力”转向“知道什么时候调用哪项知识，并把结果继续传给下一步”。生成型 Skill 提高产出效率；诊断和路由层降低判断成本；记录层让连续行动不必每次从零开始。",
      "与其再做一个通用 AI 助手，不如进入一个具体场景，寻找那种需要同时协调知识、流程、工具和责任的任务。用户购买的可能不是模型能力，而是任务被可靠完成的确定性。",
    ],
  },
];

const trends = [
  ["重复目标", "找到真正感兴趣的 AI 应用、商业洞察和内容方向，并让知识能够实际使用。"],
  ["重复阻碍", "新概念带来高密度刺激；一听不懂就焦虑，随后又想补完整体系。"],
  ["精力变化", "多次凌晨四点后入睡，白天补觉，深度理解能力随之下降。"],
  ["正向变化", "你开始直接向真实分享者提问，也越来越能明确说出“不感兴趣”和“不想做”。"],
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="返回顶部">
          <span className="brand-dot" />
          每日简报
        </a>
        <div className="status">
          <span className="status-dot" />
          每天自动更新
        </div>
      </header>

      <div className="page" id="top">
        <section className="hero">
          <div className="date-block">
            <div className="date-day">29</div>
            <div>
              <p className="date-month">2026 · 07</p>
              <p className="date-week">星期三</p>
            </div>
          </div>
          <div className="hero-copy">
            <p className="eyebrow">TODAY&apos;S DIRECTION</p>
            <h1>先完成一次真实实验，<br />再决定要学什么。</h1>
            <p className="judgment">
              昨天对 GEO 的兴趣和主动提问都是真实的，但熬夜到凌晨四点已让学习变成负担。今天只做一次 GEO 小实验，留下结果，然后恢复睡眠。
            </p>
          </div>
          <div className="hero-mark" aria-hidden="true">晴</div>
        </section>

        <nav className="section-nav" aria-label="页面目录">
          <a href="#today">今日三件事</a>
          <a href="#briefing">产品早报</a>
          <a href="#planet">知识星球</a>
          <a href="#review">个人复盘</a>
        </nav>

        <section className="section" id="today">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FOCUS</p>
              <h2>今天只做三件事</h2>
            </div>
            <p>留出缓冲，不把一天排满</p>
          </div>
          <div className="task-grid">
            {tasks.map((task) => (
              <article className={`task-card ${task.tone}`} key={task.number}>
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
              <details className="brief-item" key={item.title}>
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
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="section planet-section" id="planet">
          <div className="section-heading">
            <div>
              <p className="eyebrow">JIANGHU NOTES · YESTERDAY</p>
              <h2>昨日姜胡说知识星球</h2>
            </div>
            <p>归档区间：7 月 28 日 23:30—7 月 29 日 23:30<br /><a className="archive-link" href="/knowledge/2026-07-29.md">查看原始归档 ↗</a></p>
          </div>
          <details className="planet-card">
            <summary>
              <div className="avatar">胡</div>
              <div>
                <span className="planet-time">大胡子 · 22:26</span>
                <strong>一个生成“反常识认知”的提示词</strong>
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
            <details className="review-card" open>
              <summary>昨日复盘</summary>
              <div>
                <p><strong>事实：</strong>直播看到凌晨四点；主动添加 GEO 分享者并提出具体问题；后半段听不懂、走神并感到烦躁；你再次明确不想继续已拒绝的旧项目。</p>
                <p className="advice"><strong>建议：</strong>延续“向真人问具体问题”，停止“听不懂仍硬撑”。今天不要求先掌握完整体系。</p>
              </div>
            </details>
            <details className="review-card">
              <summary>近七天趋势</summary>
              <div className="trend-list">
                {trends.map(([label, text]) => (
                  <div key={label}><strong>{label}</strong><p>{text}</p></div>
                ))}
              </div>
            </details>
            <details className="review-card diagnosis">
              <summary>为什么知道却做不动</summary>
              <div>
                <p><strong>信号：</strong>知识上瘾与思考替代行动。听不懂后仍熬夜，并立刻转向知识库、Agent、系统配置等更大的学习任务。</p>
                <p><strong>诊断：</strong>你把兴趣迅速升级为“必须先学懂体系”，于是好奇变成考试。昨天最真实的推进，其实是向懂行的人问了一个具体问题。</p>
                <p className="advice"><strong>处方：</strong>先交付一次“是否出现、引用哪里、怎样表述”的小检查；卡住的地方，才是下一步真正需要学的内容。</p>
              </div>
            </details>
          </div>
        </section>

        <section className="schedule">
          <div>
            <span>上午</span>
            <p>补水、正常吃饭，只确定实验对象和查询问题。</p>
          </div>
          <div>
            <span>下午</span>
            <p>完成实验与记录，之后至少留出 60 分钟缓冲。</p>
          </div>
          <div>
            <span>晚上</span>
            <p>只查看一次回复，按设定时间停止信息流。</p>
          </div>
        </section>

        <a className="hotlist" href="/hotlist/2026-07-28.html">
          <span>昨日热点榜单</span>
          <strong>查看 7 月 28 日完整热点看榜</strong>
          <span className="arrow">→</span>
        </a>

        <footer>
          <p>今天不用证明 GEO 值不值得长期做，<br />只要完成一次你真正感兴趣的实验。</p>
          <span>每日 08:00 更新 · 完整内容折叠保存</span>
        </footer>
      </div>
    </main>
  );
}
