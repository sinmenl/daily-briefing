import { Fragment, type ReactNode } from "react";

const briefDate = "2026-08-12";
const cloudBriefMarkdown = "<!-- DAILY_BRIEF_START -->\n\nschema_version: 1  \nbrief_date: 2026-08-12  \ncoverage_date: 2026-08-11  \nstatus: complete  \ntitle: 产品与创作每日简报\n\n# 产品与创作每日简报｜2026 年 8 月 12 日\n\n## 今日核心判断\n\nAI Agent 的竞争重点正在从“模型能不能完成任务”，转向“它能不能在混乱、受约束的真实环境里稳定工作”。\n\nSierra 处理电话菜单中的静默、按键、人声识别和失败重试；Anthropic 增加本地 Agent 会话审计；企业则开始在自建、租用和购买 Agent 之间做选择。这些变化指向同一个产品规律：模型能力只是起点，真正决定产品价值的是异常处理、组织知识、权限、评估和反馈闭环。\n\n对于 AI × 内容创作，这意味着内容不应只演示“AI 能做什么”，更值得记录的是：它在哪里失败、使用者补充了什么判断、这套判断如何变成可重复的工作流。这些具体经验才更接近可以积累和产品化的 know-how。\n\n原始来源：[Sierra：Teaching agents to navigate janky IVR systems](https://sierra.ai/blog/navigating-ivr-systems)  \n原始来源：[Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview)  \n原始来源：[Every：Agents for Hire](https://every.to/context-window/agents-for-hire)\n\n## 指定博主动态\n\n## 行业重要新闻\n\n### 1. Sierra 让 AI Agent 自动穿过复杂电话菜单\n\n**发生了什么：**\n\nSierra 在 8 月 11 日发布 IVR 导航能力。Agent 可以判断什么时候说话或保持静默、使用语音还是电话按键、如何穿过多层菜单，以及什么时候真正接通了人工客服。\n\nSierra 使用真实电话网络进行评估：Agent 事先不知道电话树结构，只得到任务目标和必要的客户信息。加入通用 IVR 导航能力后，整体任务通过率从 57% 提高到 85%，相对提升 49%。目前已有医疗保险、药房和收入周期管理客户使用该能力。\n\n**为什么重要：**\n\n它说明 Agent 落地的瓶颈往往不是推理能力，而是现实环境中的细节：提示语时机、营业时间、错误菜单、按键音、录音与真人的区分，以及失败后的重试策略。\n\n**产品思维：**\n\n不要只测试理想路径。好的 Agent 产品需要同时设计：\n\n- 明确的任务成功标准；\n- 真实环境评估，而非只在模拟对话中测试；\n- 失败分类和重试机制；\n- 跨任务积累的记忆；\n- 无法继续时的人类接管方案。\n\n**用户洞察：**\n\n用户并不关心 Agent 在演示中有多聪明，他们关心的是任务最终有没有完成。对高频但充满摩擦的流程来说，“成功率提高”和“减少人工跟进”比回答是否自然更重要。\n\n**借鉴：**\n\n分析 AI 产品时，可以把“功能列表”替换成三个问题：它在哪些现实例外中会失败？失败之后如何恢复？产品用什么指标证明任务真的完成了？\n\n原始来源：[Sierra 官方博客](https://sierra.ai/blog/navigating-ivr-systems)\n\n### 2. Anthropic 开始把本地 Agent 操作纳入企业审计\n\n**发生了什么：**\n\nAnthropic 在 8 月 11 日更新 Compliance API。Claude Enterprise 组织现在可以通过 API 获取用户机器上运行的 Cowork 和 Claude Code 会话，包括组织内本地会话列表、会话元数据和完整消息记录。\n\n此前发布的相关能力还包括 Agent 单次会话预算、推理数据地域控制、推理前安全审核，以及从 GitHub 仓库自动加载 Skills。\n\n**为什么重要：**\n\nAgent 进入企业后，不只是聊天工具，而是会读取文件、调用工具和执行代码的操作主体。企业采用的前提逐渐从“模型效果好不好”变成“能不能限制成本、审查行为、控制数据位置并追溯责任”。\n\n**产品思维：**\n\nAgent 产品需要把治理能力视为核心功能，而不是后期补充的管理后台。至少应考虑权限范围、日志、预算、数据边界、审批节点和异常告警。\n\n**用户洞察：**\n\n管理者希望提高自动化程度，但又担心不可见的本地操作和数据泄露。采用阻力并不一定来自普通用户，而可能来自安全、法务和管理部门。\n\n**借鉴：**\n\n设计个人知识库或自动化时，也应保留最小可见记录：使用了哪些资料、执行了哪些步骤、生成结果是否经过人工确认。这样才能发现错误来自模型、资料还是流程。\n\n原始来源：[Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview)\n\n### 3. ChatGPT Business 推出按使用强度分层的 Premium 席位\n\n**发生了什么：**\n\nOpenAI 在 8 月 10 日宣布 ChatGPT Business Premium 席位：用量是标准席位的五倍，并取消五小时使用限制。月付价格为每人每月 125 美元，年付折算为每人每月 100 美元；同一工作区可以混合配置标准和 Premium 席位。\n\n**为什么重要：**\n\nAI 软件正在从“所有人购买同一订阅”，转向按工作角色和使用强度分层。企业内部少数重度用户可能创造大部分 AI 使用量和业务价值，因此统一席位不再是最合理的定价方式。\n\n**产品思维：**\n\n定价单位不一定要围绕功能，也可以围绕使用强度、工作连续性和组织角色。混合席位降低了企业整体升级的门槛，同时把高价值用户的支付意愿单独释放出来。\n\n**用户洞察：**\n\n重度用户真正愿意付费的未必是新功能，而是不中断的工作流。限额造成的上下文切换和等待，本身就是可以被定价的痛点。\n\n**借鉴：**\n\n如果未来把知识库、内容工作流或 Skill 产品化，不必一开始设计复杂套餐。可以先区分轻度使用者和每天依赖它完成核心任务的重度使用者，再观察两者真正需要的交付差异。\n\n原始来源：[OpenAI：Premium seats are coming to ChatGPT Business](https://openai.com/index/premium-seats-chatgpt-business/)\n\n### 4. “公司级 Agent”正在分化为自建、租用和购买三种模式\n\n**发生了什么：**\n\nEvery 在 8 月 11 日观察到，Shopify 的 River 用于帮助工程师交付代码，Stripe 的 Kai 用于把公司数据转化为仪表盘和文档，Every 也在把团队知识编码进共享 Agent。\n\n文章提出，这不是单一产品类别，而是一条所有权光谱：企业可以自建整个系统、租用底层能力，或者购买已经存在于 Slack、Notion等工作环境中的成品 Agent。\n\n**为什么重要：**\n\nAgent 的购买决策将越来越类似软件基础设施：企业选择的不只是能力，还包括部署位置、知识所有权、维护成本和可替换性。\n\n**产品思维：**\n\n判断自建还是购买，应围绕三个变量：\n\n- 任务是不是企业独有；\n- Agent 是否必须掌握专有知识；\n- 上线后的维护和评估由谁负责。\n\n通用任务更适合买成品；高度差异化、依赖内部知识的任务更值得自建或深度定制。\n\n**用户洞察：**\n\n用户想要的不是一个新的聊天入口，而是一个已经理解现有工具、资料和协作方式的工作角色。部署位置和维护负担会直接影响采用率。\n\n**借鉴：**\n\n个人知识库也可以用同样框架判断：通用搜索和总结无需自建；真正值得积累的是个人判断标准、内容方法和反复使用的决策流程。\n\n原始来源：[Every：Agents for Hire](https://every.to/context-window/agents-for-hire)\n\n### 5. TikTok 创作者内容将进入 Disney+，短视频成为流媒体内容层\n\n**发生了什么：**\n\nTikTok 与 Disney 宣布短视频内容共享合作。参与并主动加入计划的创作者，其 Disney 主题视频可以同时出现在 TikTok 和 Disney+ 的 Verts 栏目。TikTok 还将向创作者开放数百部 Disney 影视作品相关素材。\n\n项目将先在美国试点，随后计划扩展到其他市场。双方还将运营 Disney Creator Ambassador Program，为创作者提供曝光、活动和职业发展机会。\n\n**为什么重要：**\n\n创作者内容不再只是为影视作品提供站外宣传，而开始进入版权方自己的产品内部，成为留存、社区讨论和内容更新的一部分。\n\n**产品思维：**\n\nDisney 提供 IP 和分发场景，TikTok 提供创作供给和传播机制，创作者承担内容再生产。它形成了“版权资产—创作者生产—平台分发—流媒体转化”的合作链条。\n\n**用户洞察：**\n\n观众发现影视内容的入口正在从预告片和首页推荐转向创作者解读、剪辑和二次表达。TikTok 引用的调查显示，接近一半的受访观众曾在平台发现影视内容后，继续前往流媒体或电视观看。\n\n**借鉴：**\n\n创作者可以把内容理解为“帮助用户进入某个产品、概念或知识体系的中间层”。商业价值不只来自播放量，也来自是否能影响后续搜索、体验或购买行为。\n\n原始来源：[TikTok Newsroom](https://newsroom.tiktok.com/the-walt-disney-company-and-tiktok-announce-a-first-of-its-kind-global-short-form-content-sharing-deal?lang=en)\n\n## 产品观察\n\n### Sierra IVR Agent\n\n1. **它服务谁？**\n\n需要频繁致电其他机构完成业务流程的企业，例如医疗机构、保险公司、药房和理赔服务商。\n\n2. **用户原来的解决方案是什么？**\n\n由人工拨打电话，在多层菜单中等待、输入资料、转接客服，并把结果重新录入内部系统；或者为不同电话树编写大量固定规则。\n\n3. **它解决了哪个痛点？**\n\n它解决的不是“打电话”本身，而是电话流程中的不确定性：什么时候回应、应该说话还是按键、如何识别人类客服、遇到错误路径怎样重试，以及怎样记住不同机构的有效路径。\n\n4. **为什么现在出现？**\n\n语音识别、推理、工具调用和持久记忆已经可以组合成完整工作流；与此同时，企业开始要求 Agent 用任务成功率而非对话效果证明价值。\n\n5. **如果我要做类似产品，可以学习什么？**\n\n- 从一个结果明确但执行摩擦很大的任务切入；\n- 先列出真实世界中的异常，而不是先扩展功能；\n- 用任务是否完成作为核心指标；\n- 把每次失败保存为下一次可复用的经验；\n- 设计自动化无法继续时的人工接管路径。\n\n原始来源：[Sierra 官方产品解析](https://sierra.ai/blog/navigating-ivr-systems)\n\n## 深读推荐\n\n### 1. Teaching agents to navigate janky IVR systems\n\n**核心观点：**\n\nAgent 的难点不是理解目标，而是在真实环境中处理时机、输入模态、错误状态和无法预知的例外。产品必须通过真实网络、明确目标和对照实验评估，而不能只看演示效果。\n\n**值得学习的部分：**\n\n最值得学习的是其评估设计：给 Agent 目标和必要资料，但不提前提供电话树；用“到达人工”“取回正确数据”“执行指定动作”判断成功；再对比裸配置与加入导航能力后的通过率。\n\n**如何应用：**\n\n为自己的 AI 工作流建立一个小型测试集：选取五个真实任务，记录任务目标、所需资料、完成标准、失败位置和人工修正。之后评估工作流时，不再只问生成内容好不好，而是看五个任务实际完成了几个。\n\n原始来源：[Sierra：Teaching agents to navigate janky IVR systems](https://sierra.ai/blog/navigating-ivr-systems)\n\n### 2. I Vibe Coded a Security Risk\n\n**核心观点：**\n\n产品能够运行，不代表它已经安全。作者用 AI 构建并上线 Tastemaker 后，代码审查 Agent 才发现潜在安全问题，不得不暂时撤下功能。AI 降低了构建门槛，却没有自动补齐开发者缺失的安全判断。\n\n**值得学习的部分：**\n\n文章把“做出可用产品”和“承担上线责任”区分开。AI 可以快速生成代码，但权限、数据暴露、用户输入和部署风险仍需要明确检查。\n\n**如何应用：**\n\n每次上线 AI 生成的小工具前，至少单独执行一次发布前审查：它读取什么数据、数据发送到哪里、谁能访问、输入能否触发非预期操作、出现问题能否快速撤回。不要让“它已经能用”代替“它可以安全地被别人使用”。\n\n原始来源：[Every：I Vibe Coded a Security Risk](https://every.to/working-overtime/i-vibe-coded-a-security-risk)\n\n## 信息源实验雷达\n\n### 人物日｜最近 30 天重复主题\n\n#### 重复主题 1：AI 能力如何被更广泛地分配，同时避免权力和风险失控\n\n**谁在谈：** Naval Ravikant、Sam Altman。\n\n**最近 30 天出现情况：**\n\nNaval 至少两次围绕开放模型、行业集中和监管展开表达：8 月 8 日提出开源模型不必然威胁前沿实验室盈利；7 月 18 日批评由行业领导者推动、可能形成监管俘获的治理方式。\n\nSam 的表达更偏向能力扩散和实际防御：8 月 10 日鼓励使用模型保护系统；8 月 6 日说明模型安全事件和应对；同日还强调扩大免费文本使用范围。\n\n**原始证据：**\n\n原始来源：[Naval：开源模型与前沿实验室盈利](https://x.com/naval/status/2086011520559792457)  \n原始来源：[Naval：关于监管俘获](https://x.com/naval/status/2078441164273832292)  \n原始来源：[Sam Altman：使用模型保护系统](https://x.com/sama/status/2086881528282587524)  \n原始来源：[Sam Altman：模型安全事件说明](https://x.com/sama/status/2085744380095467549)\n\n**他们实际上在讨论什么：**\n\n两人的立场和角色不同，但共同问题是：更强的 AI 能力由谁控制、谁能使用，以及如何在扩大使用的同时管理安全和制度风险。Naval 更警惕集中化和监管俘获；Sam 更强调广泛部署与防御性使用。\n\n#### 重复主题 2：工具越来越强之后，稀缺部分转向策略、判断和选择\n\n**谁在谈：** Dan Koe、Paul Graham。\n\n**最近 30 天出现情况：**\n\nDan Koe 在 8 月 8 日集中讨论策略与战术的区别，认为不断收集工具、技巧和增长手段容易制造虚假进展；7 月 15 日则把写作描述为整理思维和恢复判断力的长期习惯。\n\nPaul Graham 的近期表达更具体地落在创业选择上：8 月 9 日比较硬件与软件创业的执行压力；8 月 3 日提醒创业公司，大企业客户往往不会直接拒绝，而会用漫长会议消耗时间。这些内容共同强调，真正影响结果的是选择什么问题、客户和商业路径。\n\n**原始证据：**\n\n原始来源：[Dan Koe：The Art of Strategic Thinking](https://letters.thedankoe.com/p/strategy-vs-tactics-how-to-actually)  \n原始来源：[Dan Koe：The writing habit that saved my brain](https://letters.thedankoe.com/p/the-writing-habit-that-saved-my-brain)  \n原始来源：[Paul Graham：硬件创业与软件创业](https://x.com/paulg/status/2086554045750403478)  \n原始来源：[Paul Graham：向大企业销售的时间风险](https://x.com/paulg/status/2084367085954887789)\n\n**他们实际上在讨论什么：**\n\n当执行工具变得便宜，结果差异更多来自问题选择、注意力配置和反馈速度。工具可以加速既定方向，却不能替代方向判断；甚至可能让错误方向执行得更快。\n\n### 本期最值得注意的关注点变化\n\n**过去：** AI 讨论更容易集中在模型能力、是否开源以及模型之间的性能比较。\n\n**现在：** Naval 和 Sam 的近期内容更多触及能力分配、安全与治理；Dan 和 Paul 则持续把注意力放在工具之外的判断、执行约束和商业选择。\n\n**为什么值得注意：**\n\n目前尚不足以判断四人出现了共同、明确的关注点迁移，因此不应把它写成统一趋势。但可以确认的是，讨论正在从“AI 是否足够强”延伸到“人和组织如何控制、使用并从中获得真实结果”。\n\n### 留给我的一个问题\n\n如果执行能力会因为 AI 继续变得更便宜，那么接下来真正稀缺的判断会首先出现在哪个环节：选择问题、理解用户、设计验证，还是解释结果？\n\n## 今日行动建议\n\n进行一次 45 分钟的“AI 失灵点记录”实验，今天不要求拍摄或发布视频。\n\n**我要验证：**\n\n当前视频主题中所谓“人的 know-how”，能否被转化成一个具体、可观察的判断，而不是停留在抽象观点。\n\n**我具体做：**\n\n1. 从今天早报任选一条新闻，让 AI 写一段 200 字短视频口播。\n2. 用三种标记检查初稿：\n   - 空泛但没有证据的句子；\n   - 没有解释用户为什么在意的句子；\n   - 看起来正确、但你本人不会这样表达的句子。\n3. 只重写其中最明显的三处。\n4. 做一张对照卡，每处保留三栏：“AI 原句 / 我的改写 / 我补充了什么判断”。\n\n**什么结果算有发现：**\n\n如果三处改写中出现至少一种重复模式，例如“AI 缺少真实使用场景”“没有判断信息的重要性”或“无法决定应该删掉什么”，就得到了一条可继续验证的 know-how 假设。今天的产出只需要这张对照卡，不需要强行把它扩展成完整视频。\n\n<!-- DAILY_BRIEF_END -->";

const tasks = [
  {
    number: "01",
    title: "写完第一张信息信号卡",
    body: "从今天早报的 Sierra、Agent 审计和企业采用信号中只选一个。先保留事实和来源，再用自己的三句话写下看到的变化、猜测与验证动作。",
    first: "只选一个信号，不把整份早报重新总结一遍",
    time: "20 分钟",
    tone: "mint",
  },
  {
    number: "02",
    title: "把“know-how 就是卡点”写成假设",
    body: "8 月 11 日日记已经写下这句本人判断。今天只补一个真实例子：人在什么位置误判，为什么光有答案仍然做不完，以及你准备怎样验证。",
    first: "保留用户原句，不让 AI 替你扩写成个人结论",
    time: "15 分钟",
    tone: "blue",
  },
  {
    number: "03",
    title: "做一次 AI 失灵点对照实验",
    body: "让 AI 针对同一条新闻写 200 字口播，只标出三类问题：没有证据、没有用户意义、本人不会这样说。保留 AI 原句、本人改写和补充判断三栏。",
    first: "只重写最明显的三处，不强行扩成完整视频",
    time: "45 分钟",
    tone: "peach",
  },
];

const learningResources = [
  {
    type: "Stanford eCorner 公开课",
    title: "Build the Right It｜先验证有没有人需要，再投入制作",
    meta: "46 分钟 · 英文 · 免费公开 · 无课程销售",
    intro: "Google 创新负责人 Alberto Savoia 在斯坦福创业课堂讲解 pretotype：先用低成本实验取得真实行为数据，再决定是否继续建设。这是一堂完整公开课，不是工具广告。",
    why: "今天的七天小练习要求把信息信号变成真实实验，姜胡说也强调要下水而不是在岸上讨论。这堂课正好提供一套不靠意见、而靠小型现实测试验证假设的方法。",
    focus: [
      "把模糊期待改写成可验证的 XYZ 假设。",
      "用 facade 或局部测试获取行为数据，而不是继续问大家觉得好不好。",
      "失败要便宜、快速、可学习，不要等成品完成后才接受现实。",
    ],
    action: "不要先看完 46 分钟。先看 Painless Failure 与 Build a Facade 两段，然后把今天的视频写成一个可观察的最小测试。",
    boundary: "这套方法适合需求与行为验证，不能替代专业领域的安全、法律或财务验证；一次小测试也不能证明普遍规律。",
    source: "https://ecorner.stanford.edu/videos/build-the-right-it-entire-talk/",
    sourceLabel: "Stanford eCorner 完整公开课",
  },
];

const xiaobot = {
  title: "抄了100条爆款还是没流量？你缺的不是努力，是一张地图。",
  author: "姜胡说",
  published: "2026-08-10 17:00:17",
  source: "https://xiaobot.net/post/f6ccf57e-4ab5-446d-8461-b3027444335d",
};

const weather = { location: "南宁", condition: "雨", temperature: "25–33℃", icon: "🌧️" };

const planetPosts = [
  {
    "index": "1",
    "author": "大胡子",
    "published": "2026-08-11 09:41",
    "title": "先下水，再讨论怎么游泳",
    "body": "最近有老伙计问了很多关于投资的问题。\n但基本都在表面停留。因为提问仅仅停留在:公式、模式、经验上。想着用一个公式去套，然后推导。\n整个都是错的。\n简单来说就是，在岸边讨论怎么游泳的问题。想着怎么下水的时候，直接就能来个漂亮的自由泳。\n\n想学会游泳，\n首先你要下水，不要怕呛水，游泳的人哪有没呛过水的。我们要防范的是大风险（做好防护），呛水这种事，偶尔呛一下没什么大不了的。\n\n有人问，为什么我的踩点比较准？\n因为我在水里啊。\n我当然比你们在岸上讨论的人更知道水的温度和流向了（看看我前后左右的帖子吧！但我发现很少有人看那些面包屑，人们就想要个公式，然后一套，就发财了。这就是你赚不到钱的原因）。\n\n注意：我是在溯源，说的是过去；不是在预测 -- 推测未来。",
    "images": ["/daily-briefing/knowledge/2026-08-11/images/%5B1%5D%20%E5%A4%A7%E8%83%A1%E5%AD%90%20-1.jpg"]
  },
  {
    "index": "2",
    "author": "大胡子",
    "published": "2026-08-11 09:58",
    "title": "我是在溯源，不是在预测",
    "body": "扎克伯格发布了他的Muse Glimmer。图1是他新发布的模型与Qwen3.6 27b（2026年4月发布的一个开源版本）的对比。\n而那个只是Qwen3.6 27B。\n\n现在，Qwen3.8 27b要来了。\n什么意思呢？\n很多人甚至认为有了Qwen3.8，有些云端模型的订阅就可以退了。\n\n这是好事，至少现在是。也可能是坏事，比如在它真正发布以后。\n\n我是在溯源，不是在预测。\n\n我在水里，备好了救生衣。进可攻，退可守。\n这就是为什么我能够赚钱的原因。",
    "images": [
      "/daily-briefing/knowledge/2026-08-11/images/%5B2%5D%20%E5%A4%A7%E8%83%A1%E5%AD%90%20-1.png",
      "/daily-briefing/knowledge/2026-08-11/images/%5B2%5D%20%E5%A4%A7%E8%83%A1%E5%AD%90%20-2.png",
      "/daily-briefing/knowledge/2026-08-11/images/%5B2%5D%20%E5%A4%A7%E8%83%A1%E5%AD%90%20-3.png",
      "/daily-briefing/knowledge/2026-08-11/images/%5B2%5D%20%E5%A4%A7%E8%83%A1%E5%AD%90%20-4.png",
      "/daily-briefing/knowledge/2026-08-11/images/%5B2%5D%20%E5%A4%A7%E8%83%A1%E5%AD%90%20-5.png"
    ]
  }
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
      if (link) nodes.push(<a className="archive-link" href={link[2]} key={keyPrefix + "-link-" + index}>{link[1]} ↗</a>);
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

const cloudSections = buildSectionMap(cloudBriefMarkdown);
const coreJudgment = cloudSections.get("今日核心判断") ?? "";
const emphasizedCoreJudgment = coreJudgment.replace(
  "AI Agent 的竞争重点正在从“模型能不能完成任务”，转向“它能不能在混乱、受约束的真实环境里稳定工作”。",
  "**AI Agent 的竞争重点正在从“模型能不能完成任务”，转向“它能不能在混乱、受约束的真实环境里稳定工作”。**",
);
const industryStories = splitSubsections(cloudSections.get("行业重要新闻") ?? "");
const productObservations = splitSubsections(cloudSections.get("产品观察") ?? "");
const deepReads = splitSubsections(cloudSections.get("深读推荐") ?? "");
const signalRadar = cloudSections.get("信息源实验雷达") ?? "";
const actionAdvice = cloudSections.get("今日行动建议") ?? "";

function SourceLink({ href, label }: { href: string; label: string }) {
  return <p><a className="archive-link" href={href}>阅读原始来源：{label} ↗</a></p>;
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
            <nav className="date-list" data-archive-list="true" aria-label="选择过往简报日期"><a href="?date=2026-08-12" aria-current="page">2026年8月12日</a></nav>
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
              <div className="nav-sub">{tasks.map((task, i) => <a href={"#task-" + (i + 1)} key={task.title}>{task.title}</a>)}<a href="#schedule">今日时间块</a><a href="#risk">今日风险</a></div>
            </details>
            <details className="nav-group" data-nav-group>
              <summary className="nav-title"><span className="nav-icon icon-briefing">▤</span><span>每日资讯</span><span className="nav-chevron">⌄</span></summary>
              <div className="nav-sub">{industryStories.map((item, i) => <a href={"#story-" + (i + 1)} key={item.title}>{i + 1}. {cleanTitle(item.title)}</a>)}{productObservations.map((item, i) => <a href={i === 0 ? "#product-observation" : "#product-observation-" + (i + 1)} key={item.title}>{item.title}</a>)}{signalRadar ? <a href="#signal-radar">信息源实验雷达</a> : null}<a href="#early-action">今日行动建议</a></div>
            </details>
            <details className="nav-group" data-nav-group>
              <summary className="nav-title"><span className="nav-icon icon-planet">✦</span><span>姜胡说</span><span className="nav-chevron">⌄</span></summary>
              <div className="nav-sub">{planetPosts.map((post) => <a href={"#planet-" + post.index} key={post.index}>{post.author}：{post.title}</a>)}<a href="#xiaobaotong-1">小报童：锚点与输出力</a></div>
            </details>
            <details className="nav-group" data-nav-group>
              <summary className="nav-title"><span className="nav-icon icon-review">↺</span><span>复盘</span><span className="nav-chevron">⌄</span></summary>
              <div className="nav-sub"><a href="#yesterday-review">昨日复盘</a><a href="#seven-day-trend">近七天趋势</a><a href="#action-diagnosis">AI 执行力诊断</a></div>
            </details>
            <details className="nav-group" data-nav-group>
              <summary className="nav-title"><span className="nav-icon icon-briefing">↗</span><span>今日深读</span><span className="nav-chevron">⌄</span></summary>
              <div className="nav-sub">{deepReads.map((item, i) => <a href={"#deep-read-" + (i + 1)} key={item.title}>{cleanTitle(item.title)}</a>)}</div>
            </details>
            <details className="nav-group" data-nav-group>
              <summary className="nav-title"><span className="nav-icon icon-briefing">▷</span><span>课程与视频</span><span className="nav-chevron">⌄</span></summary>
              <div className="nav-sub">{learningResources.map((item, i) => <a href={"#learning-" + (i + 1)} key={item.title}>{item.title}</a>)}</div>
            </details>
            <details className="nav-group" data-nav-group>
              <summary className="nav-title"><span className="nav-icon icon-hotlist">↗</span><span>热点榜单</span><span className="nav-chevron">⌄</span></summary>
              <div className="nav-sub"><a href="#hotlist">查看 2026 年 8 月 11 日完整榜单</a></div>
            </details>
          </nav>
          <p className="sidebar-note">点小标题直达正文 · 折叠内容会自动展开</p>
        </aside>

        <div className="page" id="top">
          <section className="hero">
            <div className="date-block"><div className="date-day">12</div><div><p className="date-month">2026 · 08</p><p className="date-week">星期三</p></div></div>
            <div className="hero-copy">
              <p className="eyebrow">TODAY&apos;S DIRECTION</p>
              <h1>先下水，再判断，<br />用真实反馈校正理解。</h1>
              <p className="judgment">今天不继续扩充信息系统。只从早报里选一个信号、完成一张本人判断卡，并让“know-how 就是卡点”进入一次真实对照实验。</p>
            </div>
            <div className="hero-weather" aria-label={weather.location + "当天天气：" + weather.condition + "，" + weather.temperature}>
              <span className="weather-icon">{weather.icon}</span>
              <span className="weather-copy"><strong>{weather.condition}</strong><small>{weather.location} · {weather.temperature}</small></span>
            </div>
          </section>

          <section className="section" id="today">
            <div className="section-heading compact-heading"><div><p className="eyebrow">THREE PRIORITIES</p><h2>今天只做三件事</h2></div><p>AI 建议：一个信号、一条假设、一次对照实验</p></div>
            <div className="task-grid">{tasks.map((task, i) => <article className={"task-card " + task.tone} id={"task-" + (i + 1)} key={task.number}>
              <span className="task-number">{task.number}</span><h3>{task.title}</h3><p>{task.body}</p>
              <div className="task-meta"><span>第一步</span><strong>{task.first}</strong></div><div className="task-time">{task.time}</div>
            </article>)}</div>
            <div className="time-block-heading" id="schedule-heading"><div><p className="eyebrow">TIME BLOCKS</p><h3>今日时间块</h3></div><p>睡眠偏晚，先恢复，再完成一轮实验</p></div>
            <section className="schedule" id="schedule">
              <div><span>上午 · 恢复与选题</span><p>昨日日记记录 02:30 入睡。先吃饭、补水和短暂走动，再从今日早报选一个信号；不在床上继续刷资料。</p></div>
              <div><span>下午 · 35 分钟</span><p>完成信息卡和一句验证假设，只使用一个真实案例。把“我看到了什么”和“我的猜测”分开写。</p></div>
              <div><span>傍晚 · 45 分钟</span><p>完成 AI 原句 / 本人改写 / 补充判断三栏对照卡。今天不强迫发布；先确认是否出现可重复的 AI 失灵模式。</p></div>
            </section>
            <details className="brief-item" id="risk">
              <summary><span className="brief-index">风险</span><span className="brief-main"><span className="pill">今日边界</span><strong>三个会把交付重新变成准备的触发点</strong><span>只识别，不新增任务</span></span><span className="plus">＋</span></summary>
              <div className="brief-content">
                <p><strong>回到床上：</strong>昨日日记明确记录“在家就很想躺床上”。今天的内容块开始前先离开卧室，降低环境触发。</p>
                <p><strong>又增加信息源：</strong>七天小练习已经规定每天只留五个信号并选一个；今天不为“看懂全部”继续扩充输入。</p>
                <p><strong>把 AI 的解释当成本人判断：</strong>AI 可以补背景，但“为什么值得关注”和最终假设必须由用户自己写，网页不替写。</p>
              </div>
            </details>
          </section>

          <section className="section" id="briefing">
            <div className="section-heading"><div><p className="eyebrow">DAILY INFORMATION</p><h2>每日资讯</h2></div></div>
            <div className="cloud-core">{renderMarkdown(emphasizedCoreJudgment, "core")}</div>
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
              <summary><span className="brief-index">雷达</span><span className="brief-main"><span className="pill">人物日</span><strong>信息源实验雷达</strong></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(signalRadar, "signal-radar")}</div>
            </details> : null}
            <details className="brief-item" id="early-action">
              <summary><span className="brief-index">行动</span><span className="brief-main"><span className="pill">今日行动建议</span><strong>进行一次 45 分钟的 AI 失灵点记录实验</strong></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(actionAdvice, "action")}</div>
            </details>
          </section>

          <section className="section" id="planet">
            <div className="section-heading"><div><p className="eyebrow">JIANG HUSHUO</p><h2>姜胡说</h2></div><p>昨日 2 条星主原文与一篇相关小报童文章</p></div>
            <div className="section-context" id="planet-status">
              <SourceLink href="/daily-briefing/knowledge/2026-08-11/26-08-11姜胡说知识星球.md" label="查看 8 月 11 日原始归档" />
            </div>
            {planetPosts.map((post) => <details className="planet-card" id={"planet-" + post.index} key={post.index}>
              <summary><div className="avatar">{post.index}</div><div><span className="planet-time">{post.author} · {post.published}</span><strong>{post.title}</strong></div><span className="open-label">原文</span></summary>
              <div className="planet-content"><div className="original"><span>星主原文</span>{renderMarkdown(post.body, "planet-" + post.index)}{post.images.map((src, imageIndex) => <img src={src} alt={post.author + "原始配图 " + (imageIndex + 1)} loading="lazy" key={src} />)}</div></div>
            </details>)}
            <details className="planet-card" id="xiaobaotong-1">
              <summary><div className="avatar">读</div><div><span className="planet-time">小报童 · {xiaobot.author} · {xiaobot.published}</span><strong>{xiaobot.title}</strong><span>阅读导引为 AI 建议，文章原文不在网页转载</span></div><span className="open-label">导引</span></summary>
              <div className="planet-content"><div className="original">
                <span>AI 阅读导引</span>
                <p>这篇文章把创作拆成一张可以反复校正的地图。今天读它的目的不是再学一套完整方法，而是给七天小练习的第一条视频确定当前位置：是在找选题、写判断、找证据，还是已经可以发布并等待反馈。</p>
                <p><strong>阅读重点：</strong>只看地图如何帮助区分“还缺关键证据”和“已经可以行动”。不要把完整流程重新抄进数据库。</p>
                <p><strong>阅读问题：</strong>我现在真正缺的是信息、判断、证据，还是把现有内容交给真实观众？</p>
                <SourceLink href={xiaobot.source} label="小报童原文" />
              </div></div>
            </details>
          </section>

          <section className="section" id="review">
            <div className="section-heading"><div><p className="eyebrow">PERSONAL REVIEW</p><h2>复盘</h2></div><p>事实、用户原文与 AI 建议分开呈现</p></div>
            <div className="review-grid">
              <details className="review-card" id="yesterday-review" open>
                <summary>昨日复盘</summary>
                <div>
                  <p><strong>资料状态：</strong>已读取 <code>2.26年日记/8月日记/2026-08-11.md</code>。用户记录 02:30 入睡，在家容易躺到床上，也明确写下当天仍未拍摄原计划视频。</p>
                  <p><strong>已经发生的推进：</strong>用户根据直播与对话建立了 <code>8.12七天小练习.md</code>，目标是七天发布 3 条视频、形成 7 张信息卡，并完成至少 1 个真实小实验。</p>
                  <p><strong>用户原文：</strong>“因为所谓的 know-how，我认为就是卡点，为什么人们会在这个位置出现误判，进而推断人们会越来越为‘知道怎么得出这个答案’付费。”来源：8 月 11 日日记。此处忠实引用，不作 AI 润色。</p>
                  <p className="advice"><strong>AI 建议：</strong>今天不再重写方向。把这句本人判断放进第一条实验视频，用一个具体误判案例接受观众检验。</p>
                </div>
              </details>
              <article className="review-card static-review-card" id="seven-day-trend">
                <h3>近七天趋势</h3>
                <div className="trend-list">
                  <div><strong>资料范围</strong><p>已读取 8 月 5–11 日七份日记；本段只归纳重复出现的事实与用户原话，不补写未记录的经历。</p></div>
                  <div><strong>重复目标</strong><p>持续希望成为 AI × 内容创作者，并尝试把信息源、知识星球、日记、短视频和真实实验串成闭环。</p></div>
                  <div><strong>重复阻碍</strong><p>睡眠偏晚、在家容易躺床、持续输入与系统维护，以及拍摄前重新质疑主题价值，会共同推迟作品进入外部反馈。</p></div>
                  <div><strong>本周新变化</strong><p>8 月 11 日第一次把目标压缩成可验收的七天小练习：3 条发布、7 张信息卡、1 个真实实验。这比“继续学习”更容易判断是否完成。</p></div>
                </div>
              </article>
              <article className="review-card static-review-card diagnosis" id="action-diagnosis">
                <h3>AI 执行力诊断 / 建议</h3>
                <div>
                  <p><strong>证据：</strong>8 月 11 日日记同时出现三件事：已形成关于 know-how 的本人判断；仍未拍摄；继续追问视频主题与意义。用户也写下在家容易回到床上，说明执行阻力既有认知部分，也有睡眠与环境部分。</p>
                  <p><strong>行为模式：</strong>按 dbs-action 框架，主要接近信号 A“执行模拟器”和信号 E“完美主义伪装”。不是完全没有行动，而是在真正交付前继续要求主题、价值和表达都足够确定。</p>
                  <p><strong>AI 诊断：</strong>当前最关键的卡点不是“还没想明白”，而是把想明白当成开拍前置条件。七天小练习的价值恰好是允许判断先以实验版本出现，再由真实理解度和反馈校正。</p>
                  <p><strong>阿德勒式处方：</strong>今天只帮助一个陌生观众理解“为什么 AI 会给答案以后，行业经验反而更重要”。不证明完整理论，只让一个具体例子进入共同世界。</p>
                  <p><strong>一句话处方：</strong>别等判断成熟才发布；用一次可撤回、可修正的发布让判断开始成熟。</p>
                  <p><strong>适用边界：</strong>02:30 入睡和居家环境会真实降低精力。本诊断不把生理疲劳解释成意志问题；今天先恢复，再安排一个短交付块。</p>
                  <p><strong>免责声明：</strong>这是基于 dbs-action 框架与昨日日记证据生成的 AI 诊断 / 建议，不是心理咨询或医疗诊断。</p>
                </div>
              </article>
            </div>
          </section>

          <section className="section" id="deep-reads">
            <div className="section-heading"><div><p className="eyebrow">DEEP READS</p><h2>今日深读</h2></div><p>{deepReads.length} 篇云端早报原文，任选一篇</p></div>
            <div className="brief-list deep-read-list">{deepReads.map((item, i) => <details className="brief-item" id={"deep-read-" + (i + 1)} key={item.title}>
              <summary><span className="brief-index">{String(i + 1).padStart(2, "0")}</span><span className="brief-main"><strong>{cleanTitle(item.title)}</strong><span>点击展开核心观点、值得学习的部分、如何应用与适用边界</span></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(item.body, "deep-" + i)}</div>
            </details>)}</div>
          </section>

          <section className="section" id="learning">
            <div className="section-heading"><div><p className="eyebrow">COURSES & VIDEOS</p><h2>课程与视频</h2></div><p>AI 推荐 · 今天只选 1 项</p></div>
            <div className="brief-list deep-read-list">{learningResources.map((item, i) => <details className="brief-item" id={"learning-" + (i + 1)} key={item.title}>
              <summary><span className="brief-index">{String(i + 1).padStart(2, "0")}</span><span className="brief-main"><strong>{item.type}｜{item.title}</strong><span>{item.meta}<br />{item.intro}</span></span><span className="plus">＋</span></summary>
              <div className="brief-content">
                <p><strong>为什么今天推荐（AI 推荐）：</strong>{item.why}</p>
                <p><strong>建议重点：</strong></p><ul>{item.focus.map((point) => <li key={point}>{point}</li>)}</ul>
                <p><strong>看完只做一件事：</strong>{item.action}</p>
                <p><strong>适用边界：</strong>{item.boundary}</p>
                <SourceLink href={item.source} label={item.sourceLabel} />
              </div>
            </details>)}</div>
          </section>

          <section className="section" id="hotlist">
            <div className="section-heading"><div><p className="eyebrow">HOT LIST</p><h2>热点榜单</h2></div><p>2026 年 8 月 11 日完整榜单</p></div>
            <a className="hotlist" href="/daily-briefing/hotlist/2026-08-11.html" aria-label="打开热点榜单"><span>昨日榜单</span><strong>查看 2026 年 8 月 11 日完整榜单</strong><span className="arrow">↗</span></a>
          </section>

          <footer><p>先下水，再判断，<br />让真实反馈校正理解。</p><span>每日 09:00 更新 · 完整内容折叠保存</span></footer>
        </div>
      </div>
    </main>
  );
}
