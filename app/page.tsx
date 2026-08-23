import { type ReactNode } from "react";
import { cloudBriefMarkdownToday } from "./cloud-brief-current";

const briefDate = "2026-08-23";
const cloudBriefMarkdown = "<!-- DAILY_BRIEF_START -->\nschema_version: 1\nbrief_date: 2026-08-22\ncoverage_date: 2026-08-21\nstatus: complete\ntitle: 产品与创作每日简报\n\n# 产品与创作每日简报｜2026 年 8 月 22 日\n\n## 今日核心判断\n\n**AI 产品的竞争正在从“单次生成质量”转向“受控的持续性”：系统能否记住状态、拥有合适工具、在明确目标下持续行动，并把结果重新送回用户反馈闭环。**\n\n8 月 21 日的几组信息指向同一个方向。Naval 认为 Agent 理应持续存在并拥有自己的计算环境；Dan Koe 发布 Eden，把资料收集、灵感回流、创作、分发和 MCP 接入放进同一工作空间；Patreon 则试图把内容发现、免费关注和付费会员连接成平台内部的增长链路；Anthropic 在安全产品中采用受限接口，让强模型返回补丁、风险说明等具体结果，而不是把全部能力无边界地开放出来。\n\n这些产品并非同一种东西，也不能据此断言“持续 Agent 已经成熟”。但它们共同揭示了一个更实用的系统模型：\n\n1. **连续状态：** 系统知道上一次做到哪里，不需要每次重新解释；\n2. **工作环境：** 系统能够访问完成任务所需的文件、工具和计算资源；\n3. **明确目标：** 系统知道什么结果算完成，而不是只被要求“帮我做得更好”；\n4. **反馈回路：** 发布、使用和用户反应会重新进入下一轮判断；\n5. **权限边界：** 用户能看见系统依据、审查关键动作、停止运行并恢复错误。\n\n对 AI × 内容创作者而言，真正值得建立的不是更长的 Prompt 或更多生成器，而是一套可持续运行的“创作操作系统”：来源进入后成为可追溯证据，证据经过个人判断形成观点，观点被加工成内容，内容获得真实反馈，反馈再决定下一条内容或产品假设。单点工具只能让某一步更快；只有闭环才能让判断越来越准确。\n\n原始来源：[Naval：Agent 应当持续存在并拥有自己的计算机](https://x.com/naval/status/2090497355649008059)  \n原始来源：[Dan Koe：Eden 发布动态](https://x.com/thedankoe/status/2090507819229589650)  \n原始来源：[Eden 官方网站](https://eden.so/)  \n原始来源：[Patreon：2026 产品路线图](https://www.patreon.com/jackconte/posts/new-patreon-167204499)  \n原始来源：[Anthropic：将 Claude Mythos 5 提供给更多防御者](https://claude.com/blog/bringing-claude-mythos-5-to-more-defenders)\n\n## 指定博主动态\n\n### Dan Koe：创作者的优势不是“生成更多”，而是建立能够反复回流的创作过程\n\n**他说了什么：** Dan Koe 在 8 月 21 日发布 Eden，称它是面向创作者的“第二大脑”，将跨平台高表现内容研究、创作者与主题分析、资料阅读与高亮、灵感保存、写作、排程发布以及 MCP 接入放进同一系统。他同时给出一个更宽的判断：在新的创作环境里，作品证明正在替代简历，受众正在替代雇主，品味正在替代资历。当天另一条动态还提供了一个可直接交给 Claude 的研究起点，说明他并没有把方法封闭在自有产品里。\n\n**为什么重要：** 这说明创作者工具的价值重心正在变化。过去的工具分别解决排程、素材保存、数据分析或写作；新的竞争点是能否保留创作上下文，并让旧资料在恰当时刻重新出现。生成能力越来越普遍以后，真正影响差异的可能是选了什么、为什么选择、如何组合，以及是否能形成长期一致的判断。\n\n**背后的方法论：** Eden 所体现的流程是“捕捉—回流—综合—发布”，而不是“输入一句话—生成一篇内容”。捕捉负责保存事实和刺激物，回流负责在新任务中找回相关材料，综合需要创作者加入解释和取舍，发布后再从表现与反馈中更新判断。这里最关键的资产不是某条爆款模板，而是创作者逐渐形成的选择标准。\n\n**借鉴：** 可以把内容知识库中的对象分为五类：原始证据、个人问题、暂定观点、内容草稿、发布反馈。每条内容必须能追溯到证据，并在发布后补回用户反应。研究高表现内容时，只借用“问题和结构”，不直接借用结论和表达；否则工具越强，作品越容易变成平均化的二手拼接。\n\n原始来源：[Dan Koe：Eden 发布动态](https://x.com/thedankoe/status/2090507819229589650)  \n原始来源：[Dan Koe：Claude 研究流程起点](https://x.com/thedankoe/status/2090515656039104600)  \n原始来源：[Dan Koe：作品、受众与品味](https://x.com/thedankoe/status/2090759574370332981)  \n原始来源：[Eden 官方网站](https://eden.so/)\n\n### dontbesilent：“找选题”不是一个问题，而是多个判断混在一起\n\n**他说了什么：** dontbesilent 在 8 月 21 日指出，人们口中的“找选题”实际上把多个问题混在了一起：可以用 Skill 到抖音搜索已经验证过的选题，但“什么是好选题”还取决于账号的商业目标。也就是说，找到有人看过的主题，只完成了需求发现的一部分，并不自动证明它适合当前创作者。\n\n**为什么重要：** AI 很擅长搜索、聚合和生成候选项，却不会天然知道创作者希望吸引谁、建立什么认知、未来出售什么，以及哪些内容即使有流量也会把账号带向错误方向。若不先拆解目标，一个“找选题 Agent”可能高效地产出大量不该做的内容。\n\n**背后的方法论：** 先把模糊任务拆成不同判断：市场上是否已有注意力；该受众是否与目标用户一致；创作者是否有真实经验或独特解释；主题是否能连接长期商业目标；当前载体是否适合表达。搜索 Skill 只负责第一层或部分第二层，最终选择仍需要策略标准。\n\n**借鉴：** 每个候选选题至少分别评分四项：已有需求、个人证据、目标受众匹配、后续产品连接。流量高但后三项很低的选题，只能作为趋势观察；四项中至少三项明确，才进入制作。这样能避免把“能搜到”误当成“值得做”。\n\n原始来源：[dontbesilent：找选题是多个问题的组合](https://x.com/dontbesilent/status/2090698466041208946)\n\n### Naval：有用的 Agent 应当持续存在，并拥有自己的工作环境\n\n**他说了什么：** Naval 在 8 月 21 日评价 Grok Bot 时表示，Agent 理应具有持久性，也理应拥有自己的计算机，并把“具身化”视为进一步方向。他当天还写道，最适合保持雄心的时刻，是没有什么可失去或已经没有什么需要再证明的时候。\n\n**为什么重要：** 第一条观点把 Agent 从一次性问答界面推进到持续行动者：它需要状态、文件、工具、计划和运行环境。对个人工作流来说，这比模型单次回答更聪明更接近实际价值，因为真实任务往往跨越多次会话和多个应用。但持久性和独立计算环境也会放大隐私、权限、错误累积与不可见行动的风险。\n\n**背后的方法论：** 连续任务需要三种基础设施：可恢复状态、可操作环境、可检查历史。具备前两者但没有第三者，会得到一个能行动却难以信任的系统。Naval 的表述是方向性观点，不是对所有权限设计的完整方案，也不能被解释为应当立即给 Agent 无限制访问权。\n\n**借鉴：** 评估自己的 Agent 时，不先问“它会多少工具”，而问四件事：中断后能否从正确位置恢复；是否只读取完成任务所需的文件；每次动作是否留下可检查记录；是否有明确的停止和回退方式。只有这四项稳定后，再增加更长时间运行或更多外部动作。\n\n原始来源：[Naval：Agent 应当持续存在并拥有自己的计算机](https://x.com/naval/status/2090497355649008059)  \n原始来源：[Naval：最适合保持雄心的时刻](https://x.com/naval/status/2090680155618377834)\n\n## 行业重要新闻\n\n### 1. OpenAI 将 GPT-5.6 Sol API 积分价格临时下调超过 20%\n\n**发生了什么：** OpenAI 在 8 月 21 日更新 GPT-5.6 页面，宣布未来三个月将 Sol 的 API 积分价格下调超过 20%。这是限时价格调整，不应被当成永久定价，也不能直接推出所有实际工作负载的总成本都会下降同样比例；缓存、输出长度、工具调用和重试仍会影响最终成本。\n\n**为什么重要：** 当更强模型的调用成本下降，过去因成本过高而只能人工完成或使用较弱模型的多阶段任务会重新进入可行区间。与此同时，产品差异会从“是否能接入前沿模型”进一步转向任务路由、评测、上下文管理和失败恢复，因为竞争者也能获得相近的基础能力。\n\n**产品思维：** 降价不应只被理解为“同样流程变便宜”，还应触发一次流程重算。产品团队需要区分哪些步骤真正需要高能力模型，哪些可以交给更便宜模型、规则或脚本；同时设置质量阈值和预算阈值。最优方案通常不是全流程使用同一模型，而是按风险和不确定性动态分配。\n\n**用户洞察：** 用户并不直接购买 Token，而是在购买更少返工、更快完成和更可靠结果。如果降价只是让产品生成更多低价值文本，用户不会感知价值；如果它让原本昂贵的核验、比较或个性化成为默认能力，才会改变体验。\n\n**借鉴：** 选择一个当前使用较弱模型或人工处理的高判断任务，进行十个样本的前后对照。记录正确率、人工修改分钟数和总成本，不以单次演示决定迁移。只有质量提升带来的修改时间节省高于新增调用成本时，才将其升级为默认流程。\n\n原始来源：[OpenAI：GPT-5.6](https://openai.com/index/gpt-5-6/)\n\n### 2. Patreon 重做发现机制，试图把“看见内容”直接连接到会员增长\n\n**发生了什么：** Patreon 在 8 月 21 日公布新一阶段路线图，称其网络测试每月为创作者带来约 150 万新增免费及付费会员；拥有公开帖子的创作者，其付费会员增长比没有公开帖子的相似创作者高 25% 至 30%，来自动态发现的会员数自 4 月以来增长约五倍。以上均为 Patreon 自报数据，且部分功能仍处于测试或分阶段开放。产品方向包括从长视频自动提取 Clips、提供预览建议、生成文字引用片段、建设主题社区，并把推荐逻辑从“相似创作者”更多转向“相似帖子”。Patreon 也承认，小创作者此前得到的发现收益不足。\n\n**为什么重要：** 会员平台过去通常位于漏斗末端：创作者先在其他平台获得流量，再把少部分用户带到 Patreon 付费。Patreon 现在试图掌握发现和转化的前半段，这会改变平台价值，也会改变创作者对公开内容和付费内容的安排。\n\n**产品思维：** 从创作者相似度转向帖子相似度，是一个重要的冷启动设计。前者会强化已有头部账号，后者理论上能让单篇高匹配内容获得机会。真正应观察的不是曝光量，而是“被发现—免费关注—持续消费—付费”的分段转化，以及小创作者是否得到稳定而非偶发的分发。\n\n**用户洞察：** 粉丝并不总是先决定“我要关注某位创作者”，他们常从一个具体主题或片段开始。长内容的消费门槛高，短预览和主题社区降低初次理解成本；但如果自动剪辑只追求刺激片段而破坏上下文，也可能吸引错误受众。\n\n**借鉴：** 为一条长内容设计三层入口：一个明确问题的短片段、一份无需付费即可获得的完整解释、一项需要持续关系才能获得的深入服务。分别记录每层的点击、看完、回复和转化，不把播放量直接当作商业价值。\n\n原始来源：[Patreon：2026 产品路线图](https://www.patreon.com/jackconte/posts/new-patreon-167204499)\n\n### 3. Anthropic 将 Claude Mythos 5 扩展到更多网络防御工具，并采用受限结果接口\n\n**发生了什么：** Anthropic 在 8 月 21 日宣布，将 Claude Mythos 5 引入 Claude Security，并计划通过合作伙伴的网络安全产品提供相关能力。公司同时设立 3500 万美元 Defender Advantage Fund，为开源安全项目提供使用额度，并扩大 Cyber Verification Program。一个关键设计是“purpose-built interfaces”：某些使用者获得的是补丁、漏洞分类、严重程度、置信度和修复建议等具体产物，而不是不受限制的原始模型访问；企业代码扫描结果仍要求人工审查。\n\n**为什么重要：** 强模型的分发方式可以按任务结果设计，而不只是按“开放或关闭模型”二选一。对于高风险 Agent，限制可执行动作、输出类型和数据范围，可能比仅靠使用条款更能降低风险，同时仍保留实际价值。\n\n**产品思维：** 权限应与用户任务绑定。若用户只需要发现漏洞并获得补丁，就不必默认赋予系统任意网络访问或任意命令执行。面向结果的接口把能力封装成可审查对象，也更容易定义验收、记录日志和加入人工批准。\n\n**用户洞察：** 专业用户希望获得强能力，但不一定愿意承担整个模型行为面的风险。可预测的输出结构、来源定位、置信度与人工复核入口，会比一个“什么都能做”的聊天框更容易进入组织流程。\n\n**借鉴：** 设计个人 Agent 时，为每个任务建立最小权限包：允许读取哪些目录、调用哪些工具、产生哪些输出、哪些动作必须确认。先让 Agent 提交计划或草稿，再开放写入和外部发送，避免把便利建立在不可见权限之上。\n\n原始来源：[Anthropic：将 Claude Mythos 5 提供给更多防御者](https://claude.com/blog/bringing-claude-mythos-5-to-more-defenders)\n\n### 4. Progress 把 WebMCP 与 Agent Skills 带入企业界面和网络调试工作流\n\n**发生了什么：** Progress 在最新 Telerik 与 Kendo UI 发布中预览 WebMCP 支持，使 Agent 可以通过明确接口与网页界面交互，而不是完全依赖脆弱的视觉识别或屏幕抓取；Fiddler Agent Skills 则让编码助手检查网络流量、识别异常并建议修复。其文档处理 Agent 工具也把结构化数据提取、Excel 分析和文档转换包装为可调用能力。\n\n**为什么重要：** 今天许多 Agent 自动化建立在模拟点击、猜测页面状态和解析非结构化界面之上，页面一改版就容易失效。若产品主动提供面向 Agent 的交互语义，界面将从“只给人看”变成“同时让人和 Agent 理解并行动”。\n\n**产品思维：** Agent-ready UI 不等于为 Agent 暴露所有操作。产品需要为动作提供稳定标识、参数约束、权限说明、执行预览和错误返回，同时让人类界面保留可理解的反馈。相比屏幕抓取，这种方式更容易测试和维护，但也需要新的权限与滥用防护。\n\n**用户洞察：** 用户真正想自动化的是稳定完成任务，而不是观看 Agent 模仿鼠标。只要操作结果可预测、可审查，用户通常不在意背后是否“像人一样点击”；他们更在意改版后不会突然失效，以及系统是否会点错不可逆按钮。\n\n**借鉴：** 在制作任何需要操作网页的自动化前，先寻找 API、MCP、结构化导出或稳定动作接口。只有不存在这些入口时才使用视觉操作，并为关键步骤加入页面状态检查和人工确认。选择技术路径时，把维护失败率列为成本，而不只计算第一次搭建时间。\n\n原始来源：[Progress：Telerik 与 Kendo UI 最新版本](https://investors.progress.com/news-releases/news-release-details/progress-software-announces-new-telerik-and-kendo-ui-release)  \n原始来源：[Progress：Modern UI 与 WebMCP](https://www.progress.com/solutions/modern-ui)\n\n### 5. Eden 把创作者研究、知识库、制作与分发合并为同一产品\n\n**发生了什么：** Dan Koe 在 8 月 21 日公开 Eden。官方页面列出的能力包括跨平台搜索经过市场验证的帖子、研究创作者与主题、阅读和高亮视频转录及文档、导入 Kindle、Snipd 和 X 的高亮、保存链接与帖子、撰写和排程内容，并通过 MCP 与 Claude 连接。\n\n**为什么重要：** 创作者软件正在从“再做一个 AI 写作器”转向上下文整合。创作者的摩擦往往发生在工具之间：看到材料时没有进入选题系统；写作时找不到原始依据；发布后表现数据没有回到知识库。把这些对象放在同一系统，理论上可以减少信息丢失和反复搬运。\n\n**产品思维：** 一体化的价值来自对象关系，而不是功能数量。来源、摘录、观点、草稿、发布版本和反馈若能保持关联，系统才形成复利；如果只是把多个页面放进同一订阅，功能越多反而越难维护。还需要观察 Eden 的检索准确性、跨平台权限、数据可迁移性和长期使用留存，不能仅凭发布功能表判断效果。\n\n**用户洞察：** 创作者并不缺少保存工具，缺的是“在需要时找回正确材料，并知道它如何支持当前观点”。同时，搜索高表现帖子会产生模仿诱惑；用户需要的不只是趋势发现，还需要来源追踪、差异化提示和个人判断沉淀。\n\n**借鉴：** 若要搭建类似系统，先只连接一个最痛的断点，例如“收藏后从不再用”或“发布后不记录反馈”。围绕一个对象建立闭环并测量复用率，再扩展排程、分析和自动私信等功能。不要用一体化愿景掩盖尚未证明的核心使用行为。\n\n原始来源：[Dan Koe：Eden 发布动态](https://x.com/thedankoe/status/2090507819229589650)  \n原始来源：[Eden 官方网站](https://eden.so/)\n\n## 产品观察\n\n### 1. Patreon 的“发现—免费会员—付费会员”增长系统\n\n1. **它服务谁？** 一端是希望获得稳定收入和直接用户关系的创作者，另一端是希望持续追踪特定主题或创作者、并愿意为更深内容和关系付费的粉丝。新路线尤其试图改善小创作者的发现机会。\n2. **用户原来的解决方案是什么？** 创作者在 YouTube、TikTok、Instagram 或 X 获取流量，再通过简介链接把用户引向 Patreon。发现发生在外部，付费发生在内部，跨平台跳转造成大量损耗；Patreon 本身更像支付和内容门禁工具。\n3. **它解决了哪个痛点？** 把内容样本、兴趣匹配、免费关系建立和付费转化放在同一平台，减少创作者对外部算法的完全依赖。Clips、引用片段和主题社区降低长内容的初次消费门槛，帖子级推荐则试图减少头部账号优势。\n4. **为什么现在出现？** 创作者越来越担心平台流量不稳定，同时会员平台若只处理末端支付，很难证明持续抽成的增量价值。AI 剪辑和内容理解也降低了从长内容自动产生发现入口的成本。\n5. **如果我要做类似产品，可以学习什么？** 不要只建设“发布”和“付费”两个端点，要把中间状态做成产品：用户先因什么问题看见内容，为什么愿意免费留下，什么重复价值使其付费。对小创作者，推荐系统应尽量基于具体内容与受众意图，而不是只基于账号规模。评估时分开看发现曝光、免费加入、持续消费、付费和流失，避免用一个总增长数字掩盖漏斗问题。\n\n**适用边界：** Patreon 公布的数据来自自身平台，比较方法和样本细节有限，且部分功能仍在测试。它适合用来理解产品方向，不能直接预测其他平台或单个创作者会获得相同增长。\n\n原始来源：[Patreon：2026 产品路线图](https://www.patreon.com/jackconte/posts/new-patreon-167204499)\n\n### 2. Eden：面向创作者的上下文整合工作台\n\n1. **它服务谁？** 需要长期研究、多平台发布，并希望把阅读、灵感、写作和分发连接起来的独立创作者与小型内容团队。\n2. **用户原来的解决方案是什么？** 用浏览器收藏或 Readwise 保存资料，用 Notion 或 Obsidian 管理知识，用其他工具研究热门内容、写稿、排程和分析；创作者本人承担所有复制、分类、回忆和版本同步。\n3. **它解决了哪个痛点？** 它试图减少上下文碎片：来源不再停留在收藏夹，摘录可以进入创作，草稿能连接研究依据，完成内容可以直接分发。MCP 接入还允许外部 Agent 使用同一资料层。\n4. **为什么现在出现？** 多模态转录、语义检索和 MCP 让不同内容对象可以被统一调用；与此同时，纯生成工具同质化明显，产品需要向工作流和数据资产延伸。\n5. **如果我要做类似产品，可以学习什么？** 核心不是复制全部功能，而是定义稳定的数据对象和状态变化：来源如何成为证据，证据如何成为观点，观点如何成为草稿，草稿如何成为发布物，发布物如何获得反馈。每一步都应保留来源与版本。先验证“保存的资料是否真的在后续创作中被复用”，再增加更多生成和自动化。\n\n**适用边界：** Eden 刚公开发布，功能说明不能替代长期留存、数据可靠性和真实创作质量证据。跨平台搜索“已验证内容”可能提高选题效率，也可能放大同质化，必须由创作者自己的评价标准进行约束。\n\n原始来源：[Eden 官方网站](https://eden.so/)  \n原始来源：[Dan Koe：Eden 发布动态](https://x.com/thedankoe/status/2090507819229589650)\n\n## 深读推荐\n\n### 1. Patreon 2026 产品路线图：一次公开的创作者增长漏斗复盘\n\n**核心观点：** Patreon 不再满足于做付费基础设施，而是试图把内容发现、免费会员、持续关系和付费转化连接起来。文章同时承认，过去以创作者相似度为中心的推荐对小创作者不够有效，因此转向更细的帖子级主题、风格和内容匹配。\n\n**值得学习的部分：** 最值得学习的不是功能列表，而是它如何暴露一个真实产品矛盾：平台要增加发现能力，却不能简单复制开放社交平台的注意力逻辑；要服务创作者收入，又不能只把播放量当成成功。文章提供了漏斗数据、失败反馈和下一步假设，适合观察平台如何从用户研究转向产品实验。\n\n**如何应用：** 为自己的内容闭环画出五个状态：陌生人看见、理解价值、愿意留下联系方式或关注、重复消费、愿意付费或参与产品验证。为每个状态只选一个可观察指标和一个当前最大摩擦。下一步只修复最窄的转化断点，而不是同时增加更多平台、内容形式和自动化。\n\n**适用边界：** 文中的增长数据为 Patreon 自报，缺少完整对照方法；新功能分阶段推出，路线图不等于已实现结果。应用时借用漏斗思维，不直接复制功能或增长数字。\n\n原始来源：[Patreon：2026 产品路线图](https://www.patreon.com/jackconte/posts/new-patreon-167204499)\n\n### 2. Bringing Claude Mythos 5 to more defenders：如何按任务结果分发强模型能力\n\n**核心观点：** 强能力不必通过无边界模型访问交付。Anthropic 通过特定安全产品、合作伙伴接口、结构化代码扫描结果和人工复核，把模型能力包装为更窄、更可检查的工作结果。\n\n**值得学习的部分：** 文章提供了一个可迁移的 Agent 产品设计原则：先定义用户需要的结果，再倒推最低权限和最小行动面。补丁、风险分类、置信度和修复建议都是可以审查的对象；相比直接赋予任意行动权，它们更容易进入组织流程，也更容易评价是否有效。\n\n**如何应用：** 把自己的一个 Agent 任务写成“输入—允许动作—输出—人工关卡—失败恢复”五格表。删除与结果无关的权限，把外部发送、删除、付费和公开发布设为强制确认；把事实来源、执行日志和版本变化作为输出的一部分。这样即使模型升级，系统的责任边界仍然清晰。\n\n**适用边界：** 网络安全是高专业、高风险领域，其组织流程不能直接套用到个人创作；但“能力按结果封装、权限随任务收窄、关键动作人工复核”的设计逻辑适用于任何长期运行的 Agent。\n\n原始来源：[Anthropic：将 Claude Mythos 5 提供给更多防御者](https://claude.com/blog/bringing-claude-mythos-5-to-more-defenders)\n\n## 信息源实验雷达\n\n### 人物日\n\n#### 重复主题 1：AI 正从会回答的工具变成拥有状态、环境与持续行动能力的系统\n\n**谁在谈：** Naval Ravikant、Dan Koe、Sam Altman。\n\n**最近 30 天出现情况：** Naval 在 8 月 11 日提出，真正重视软件的人会训练自己的模型，把优势指向模型、数据和任务分布的深度控制；8 月 21 日又明确强调 Agent 的持久性和独立计算环境。Dan Koe 在 8 月 21 日发布 Eden，把创作者的长期资料、研究、写作、发布和 MCP 接入放进连续工作空间。Sam Altman 在 8 月 18 日宣布暂停部分前沿强化学习训练，以补齐对齐、安全与监控标准。最近 30 天至少出现四个相关信号，已超过一次性的“新功能讨论”。\n\n**原始证据：**\n\n原始来源：[Naval：重视软件的人会训练自己的模型](https://x.com/naval/status/2086987724037185547)  \n原始来源：[Naval：Agent 应当持续存在并拥有自己的计算机](https://x.com/naval/status/2090497355649008059)  \n原始来源：[Dan Koe：Eden 发布动态](https://x.com/thedankoe/status/2090507819229589650)  \n原始来源：[Eden 官方网站](https://eden.so/)  \n原始来源：[Sam Altman：暂停部分前沿强化学习训练](https://x.com/sama/status/2089787807611195475)\n\n**他们实际上在讨论什么：** 三人的立场不同。Naval 更强调所有权、持续性和能力方向；Dan Koe 把连续上下文具体化为创作者产品；Sam Altman 的行动关注能力增长后的安全与监控。共同点不是他们都支持同一种 Agent，而是当 AI 从会话工具变成长期系统后，模型本身不再是唯一设计对象：数据归属、计算环境、权限、日志、停止机制和评价标准开始共同决定价值。\n\n#### 重复主题 2：执行越来越便宜，但用户需求、策略、作品证明和品味没有被自动化取消\n\n**谁在谈：** Paul Graham、Dan Koe。\n\n**最近 30 天出现情况：** Paul Graham 在 8 月 12 日连续回应“AI 时代还有多少创业建议成立”，认为目前几乎所有核心建议仍然成立，并再次把创业核心放在构建用户需要的东西和获得增长上。Dan Koe 在 8 月 8 日区分策略与战术，批评脱离位置和目标收集工具与步骤；8 月 21 日又提出作品证明、受众和品味正在变得更重要。最近 30 天至少有四个同向表达，属于持续主题。\n\n**原始证据：**\n\n原始来源：[Paul Graham：AI 时代几乎全部创业建议仍成立](https://x.com/paulg/status/2087601208123126228)  \n原始来源：[Paul Graham：核心仍是构建用户需要的东西](https://x.com/paulg/status/2087602421791105033)  \n原始来源：[Dan Koe：Strategy vs tactics](https://letters.thedankoe.com/p/strategy-vs-tactics-how-to-actually)  \n原始来源：[Dan Koe：作品、受众与品味](https://x.com/thedankoe/status/2090759574370332981)\n\n**他们实际上在讨论什么：** AI 能压缩写代码、制作内容和搭建原型的时间，却不能自动证明目标正确。用户是否需要、内容是否被理解、产品是否产生持续行为，仍要从现实反馈中获得。策略决定把廉价执行力投向哪里，品味负责取舍，作品和增长则提供外部证据。工具能力越普及，这些不能从模型直接购买的判断越重要。\n\n#### 本期最值得注意的关注点变化\n\n**过去：** 这几位人物的 AI 相关表达较多停留在能力增长、替代范围、个人杠杆和宏观影响。\n\n**现在：** 最近一个月更频繁地出现具体系统问题：模型和数据由谁拥有，Agent 如何持续运行，什么权限和监控是必要的，创作者如何把长期上下文变成作品，以及创业基本原则是否仍能约束便宜的执行力。\n\n**为什么值得注意：** 这不是四人同时完成一致的思想转向，也没有足够证据证明他们已放弃过去主题。更准确的变化是：讨论开始从“AI 能不能做”向“AI 应该在什么系统里做、由什么事实证明做对了”移动。对个人实践而言，竞争优势可能从掌握某个临时工具，转向拥有自己的问题选择、评价标准、用户反馈渠道和可审查工作流。这是依据近期公开内容形成的中等强度推断。\n\n#### 留给我的一个问题\n\n**如果持久 Agent 和更便宜的模型让内容产量几乎不再受限，那么什么现实证据能够区分“建立了有价值的创作系统”和“只是更快地产出没人需要的内容”？**\n\n## 今日行动建议\n\n今天完成一次 **90 分钟“现有内容最小闭环测试”**，不安装新工具，也不重做整套知识库。\n\n1. 从已经写过但尚未获得真实反馈的一份 AI 内容中，只选一个最关键概念，例如“Agent 拥有工具”和“Agent 能在正确时机选择工具”之间的区别。\n2. 开始前写下唯一验收问题：“看完后，对方能否用自己的话说出这两个概念为什么不同？”\n3. 把内容压缩成一个 30 至 45 秒口播，或一段不超过 180 字的图文。只允许修改两轮，避免把时间消耗在视觉包装。\n4. 发给三位对 AI 不熟悉的人，或发布到能够获得真实回复的最小渠道。只问验收问题，不先解释标准答案。\n5. 原样记录三人的复述、停顿和误解，把重复出现的一个误解补回内容知识库，并标注为“用户证据”，而不是个人猜测。\n\n**完成标准：** 至少获得三份可观察回答。若两人以上能够准确复述，说明核心解释已经达到可发布水平；若两人以上在同一点误解，只修改导致误解的那一句，并保留其余部分；若三人的问题完全不同，说明当前内容仍在解释概念，没有锁定稳定用户问题。\n\n这项行动完成的是一条最小但完整的链路：已有信息作为输入，压缩表达完成思考加工，短内容完成输出，复述提供用户反馈，重复误解则成为下一条内容、Skill 或产品功能的机会。今天的目标不是产量，而是得到一个能改变下一步选择的事实。\n<!-- DAILY_BRIEF_END -->";

const tasks = [
  {
    number: "01",
    title: "访谈前写五个事实问题",
    body: "今天有一次已经明确答应参加的用户访谈。开始前只准备五个围绕过去行为的问题，不介绍方案，也不诱导对方赞同。",
    first: "写下最难的时刻、最近一次、为什么难、试过什么、哪里不满意",
    time: "访谈前",
    tone: "mint",
  },
  {
    number: "02",
    title: "访谈中只听和追问",
    body: "把注意力放在对方已经发生的具体经历、当前替代方案和实际行为上。记录原话与停顿，不把礼貌性同意当成需求证据。",
    first: "听到抽象判断时追问一次具体发生过的例子",
    time: "访谈中",
    tone: "blue",
  },
  {
    number: "03",
    title: "访谈后留下一张证据卡",
    body: "结束后不急着总结成用户需求。先把事实与未知分开，留下一张可以改变下一步验证的证据卡。",
    first: "填写场景、原话/行为、当前方案、困难原因、未知项",
    time: "访谈后 15 分钟",
    tone: "peach",
  },
];

const learningResources = [
  {
    type: "官方教学视频",
    title: "Focus on Your Customers First",
    meta: "Stanford eCorner · 4 分钟 · 英语 · 提供 transcript · 公开可看",
    intro: "Ernestine Fu 用 DoorDash 与 Gusto 的早期案例说明：先持续接触客户，再构建产品。",
    why: "昨天已经完成较长的用户访谈课程，今天不再补一套完整课程。这个四分钟片段只用来提醒“先客户、后产品”，随后立刻进入现实访谈。",
    focus: [
      "每个阶段都持续接触客户，而不是产品做完后才询问。",
      "不要在真空中构建，先从客户经历中获得信息。",
      "把客户开发放在产品说明之前。",
    ],
    action: "从访谈问题中删除一句介绍自己方案的话，换成一次对过去具体行为的追问；访谈后完成五栏证据卡。",
    boundary: "这段短片提供方向与案例，不是完整访谈脚本，也不能替代今天的真实访谈或把单次回答证明成需求。",
    source: "https://ecorner.stanford.edu/clips/focus-on-your-customers-first/",
    sourceLabel: "Stanford eCorner 官方视频",
  },
];

const xiaobot = {
  title: "怎么判断方向对？还是不对？(外加一篇)",
  author: "姜胡说",
  published: "2026-05-26 12:01:49",
  source: "https://xiaobot.net/post/cc5f22af-24f5-473e-9317-ff69e2ddcd7b",
};

const weather = { location: "南宁", condition: "中雨", temperature: "25–32℃", icon: "🌧️" };

const planetPosts: Array<{ index: string; author: string; published: string; title: string; body: string; images: string[] }> = [
  {
    index: "1",
    author: "大胡子",
    published: "2026-08-22 22:09",
    title: "一个流畅且免费的AI使用方案",
    body: "一个流畅且免费的AI使用方案。\n\n我看到一个老伙计说，自从 DeepSeek 涨价了以后，一天差不多 50 块钱的花销。\n一个月差不多1500块钱。\n\n这是我之前跟大家分享过呀.\n至少有两个薅羊毛的地方，一个是商汤。一个是阿里的百炼千问。\n而且方案也给大家了，我估计大家都没有认真看。\n\n以前商汤运行的还是很流畅的，后来 DeepSeek 涨价了，很多人都知道了商汤，然后全都过来了，所以经常限流，使用起来不是那么顺畅。\n其实你完全可以换个想法，换个思路。就是如果你有两个手机号的话，你完全可以注册两个账号。如果你没有，那么你至少有三个账号:你的，你爸的，还有你妈的。\n\n然后问题就简单了，自己写一个代理。这个让 AI 帮你完成就好了。你像我就指向了本地的8787端口。\n然后呢？因为它限流，所以显得很慢。但是当你有多个账号的时候，就很简单了。当一个限流的时候，马上切换到另外一个，然后再切换到另外一个。如果三个账号都开启了，都限流了你就可以把它切换到千问的免费账号上。这么走一圈，之前限流的应该已经不限流了，又回到了起点。整个实验过程非常的流畅。\n见下图。我今天在北京线下交流时，现场根据我的代理还原的技术路线。",
    images: ["/daily-briefing/knowledge/2026-08-22/images/[1] 大胡子 -1.png"],
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
            <nav className="date-list" data-archive-list="true" aria-label="选择过往简报日期"><a href="?date=2026-08-23" aria-current="page">2026年8月23日</a></nav>
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
              <div className="nav-sub"><a href="#hotlist">查看 2026 年 8 月 22 日完整榜单</a></div>
            </details>
          </nav>
          <p className="sidebar-note">点小标题直达正文 · 折叠内容会自动展开</p>
        </aside>

        <div className="page" id="top">
          <section className="hero">
            <div className="date-block"><div className="date-day">23</div><div><p className="date-month">2026 · 08</p><p className="date-week">星期日</p></div></div>
            <div className="hero-copy">
              <p className="eyebrow">TODAY&apos;S DIRECTION</p>
              <h1>先把一次访谈变成证据，<br />再决定什么值得继续。</h1>
              <p className="judgment">今天的成果不是“参加过一次活动”，而是一张能被再次检查的用户证据卡。</p>
            </div>
            <div className="hero-weather" aria-label={weather.location + "当天天气：" + weather.condition + "，" + weather.temperature}>
              <span className="weather-icon">{weather.icon}</span>
              <span className="weather-copy"><strong>{weather.condition}</strong><small>{weather.location} · {weather.temperature}</small></span>
            </div>
          </section>

          <section className="section" id="today">
            <div className="section-heading compact-heading"><div><p className="eyebrow">THREE PRIORITIES</p><h2>今天只做三件事</h2></div><p>用户承诺：参加访谈 · AI 建议：完成一次证据闭环</p></div>
            <div className="task-grid">{tasks.map((task, i) => <article className={"task-card " + task.tone} id={"task-" + (i + 1)} key={task.number}>
              <span className="task-number">{task.number}</span><h3>{task.title}</h3><p>{task.body}</p>
              <div className="task-meta"><span>第一步</span><strong>{task.first}</strong></div><div className="task-time">{task.time}</div>
            </article>)}</div>
            <div className="time-block-heading" id="schedule-heading"><div><p className="eyebrow">TIME BLOCKS</p><h3>今日时间块</h3></div><p>不虚构钟点，按访谈前后执行</p></div>
            <section className="schedule" id="schedule">
              <div><span>访谈前 · 10 分钟</span><p>把五个事实问题写在同一页，删除所有会诱导对方赞同的措辞。</p></div>
              <div><span>访谈过程</span><p>追问具体经历，记录行为、原话与当前替代方案；不把自己的解释塞给对方。</p></div>
              <div><span>访谈后 · 15 分钟</span><p>完成五栏证据卡，并写下一个下一次需要核实的问题。</p></div>
            </section>
            <details className="brief-item" id="risk">
              <summary><span className="brief-index">风险</span><span className="brief-main"><span className="pill">今日边界</span><strong>三个需要主动截断的动作</strong><span>只识别，不新增任务</span></span><span className="plus">＋</span></summary>
              <div className="brief-content">
                <p><strong>把访谈变成介绍方案：</strong>今天先确认对方已经发生过什么，不追求证明自己的方案正确。</p>
                <p><strong>把礼貌赞同当成需求：</strong>只记录行为、原话和现实成本，假设性回答留作未知。</p>
                <p><strong>访谈后立即扩展产品：</strong>最低完成线是一张证据卡，不新建系统，也不把单次访谈外推为稳定结论。</p>
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
              <summary><span className="brief-index">行动</span><span className="brief-main"><span className="pill">今日行动建议</span><strong>完成浏览器 Agent 与结构化接口对照实验</strong></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(actionAdvice, "action")}</div>
            </details>
          </section>

          <section className="section" id="planet">
            <div className="section-heading"><div><p className="eyebrow">JIANG HUSHUO</p><h2>姜胡说</h2></div><p>昨日 1 条星主原文 · 一篇相关小报童文章</p></div>
            <div className="section-context" id="planet-status">
              <p>2026 年 8 月 22 日原始归档已同步，以下内容保持作者、发布时间、原文与原始图片完整。</p>
              <SourceLink href="/daily-briefing/knowledge/2026-08-22/26-08-22姜胡说知识星球.md" label="查看 8 月 22 日原始归档" />
            </div>
            {planetPosts.map((post) => <details className="planet-card" id={"planet-" + post.index} key={post.index}>
              <summary><div className="avatar">{post.index}</div><div><span className="planet-time">{post.author} · {post.published}</span><strong>{post.title}</strong></div><span className="open-label">原文</span></summary>
              <div className="planet-content"><div className="original"><span>星主原文</span>{renderMarkdown(post.body, "planet-" + post.index)}{post.images.map((src, imageIndex) => <img src={src} alt={post.author + "原始配图 " + (imageIndex + 1)} loading="lazy" key={src} />)}</div></div>
            </details>)}
            <details className="planet-card" id="xiaobaotong-1">
              <summary><div className="avatar">读</div><div><span className="planet-time">小报童 · {xiaobot.author} · {xiaobot.published}</span><strong>{xiaobot.title}</strong><span>阅读导引为 AI 建议，文章原文不在网页转载</span></div><span className="open-label">导引</span></summary>
              <div className="planet-content"><div className="original">
                <span>AI 阅读导引</span>
                <p>今天有真实用户访谈，这篇文章可用来检查一个更根本的问题：判断方向所需的信息来自市场中的实际行为，不只来自脑内分析。</p>
                <p><strong>阅读重点：</strong>区分播放、询单等表面量与评论、成交、复购等行为证据；先跑最低成本闭环，再依据客观反馈调整。</p>
                <p><strong>阅读问题：</strong>今天的访谈能留下什么事实，足以改变下一步验证，而不是只得到一句“听起来不错”？</p>
                <p><strong>适用边界：</strong>原文明确不适用于大额投入或只有一次机会的高风险决策；单次访谈也不能直接证明稳定需求。</p>
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
                  <p><strong>资料状态：</strong>已读取 8 月 16 日至 22 日全部七份本地日记，没有缺失日期，也没有读取今日日记。</p>
                  <p><strong>可确认事实：</strong>昨天完成了一项定向学习，形成具体访谈方法笔记，并把它连接到今天已经答应参加的真实活动。</p>
                  <p><strong>边界：</strong>这只能证明学习已经连接行动，不能证明用户需求成立，也不能证明某个产品方向值得投入。</p>
                  <p className="advice"><strong>AI 建议：</strong>今天的成果不是“参加过”，而是一张能被再次检查的原始证据卡。</p>
                </div>
              </details>
              <article className="review-card static-review-card" id="seven-day-trend">
                <h3>近七天趋势</h3>
                <div className="trend-list">
                  <div><strong>资料范围</strong><p>2026 年 8 月 16 日至 22 日，七份记录齐全；不包含今日日记。</p></div>
                  <div><strong>重复模式</strong><p>核心任务越模糊，越容易转向边界清楚、即时反馈更强的工具或学习任务。</p></div>
                  <div><strong>反例信号</strong><p>昨日学习已经连接今天的真实访谈，提示“是否立即产生现实输入”可能比“是否在学习”更能区分必要前置与替代进展。</p></div>
                </div>
              </article>
              <article className="review-card static-review-card diagnosis" id="cognitive-observation">
                <h3>AI 认知观察</h3>
                <div>
                  <p><strong>证据等级：</strong>重复模式 + 1 个反例信号。</p>
                  <p><strong>候选解释：</strong>明确外部场景和可验收产物，会降低核心任务的启动成本，使学习更容易转化为行动。</p>
                  <p><strong>替代解释：</strong>已有活动预约本身提供了外部约束，行动增加未必只来自任务更清楚。</p>
                  <p><strong>适用边界：</strong>这是基于日记文本的可修订 AI 推断，不是人格、心理或医疗结论。</p>
                </div>
              </article>
              <article className="review-card static-review-card diagnosis" id="minimum-action">
                <h3>最小行动建议</h3>
                <div>
                  <p><strong>行动：</strong>访谈结束后完成一张五栏用户证据卡。</p>
                  <p><strong>最大范围：</strong>15 分钟，只写一个最具体的问题。</p>
                  <p><strong>可观察产物：</strong>发生场景、原话或行为、现有解决方式、为什么困难、仍不确定什么。</p>
                  <p><strong>完成标准：</strong>五栏都有事实或明确写“未知”，并留下一个下一次核实问题；不把赞同或假设性回答当成需求证据。</p>
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
                  <p><strong>知识原子：</strong>{i === 0 ? "工具渐进发现降低选择与上下文成本" : "高风险 GUI 动作需要任务内确认关卡"}</p>
                  <p><strong>与今天的关系（AI 分析）：</strong>{i === 0 ? "访谈先用五个固定问题缩小信息表面，出现具体线索后再展开追问。" : "记录可以按流程执行；把一句话升级为需求或决定做产品，仍需要用户本人判断。"}</p>
                  <p><strong>阅读问题：</strong>{i === 0 ? "哪些工具或材料从一开始就全部暴露，但一次任务实际只用很少一部分？" : "评估 Agent 时，是否同时记录约束遵守、确认点、接管次数和错误恢复？"}</p>
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
                <p><strong>AI 建议：</strong>昨天已经完成与用户访谈直接相关的定向学习，今天又有真实访谈。继续补课会把注意力从现实输入拉回信息输入。</p>
                <p><strong>今天只练习：</strong>访谈结束后完成一张五栏证据卡：场景、原话或行为、当前方案、困难原因、未知项。</p>
                <p><strong>适用边界：</strong>这不代表课程无用；访谈后若暴露明确方法缺口，再按缺口选下一项资源。</p>
              </div>
            </article>}
          </section>

          <section className="section" id="hotlist">
            <div className="section-heading"><div><p className="eyebrow">HOT LIST</p><h2>热点榜单</h2></div><p>2026 年 8 月 22 日完整榜单</p></div>
            <a className="hotlist" href="/daily-briefing/hotlist/2026-08-22.html" aria-label="打开热点榜单"><span>昨日榜单</span><strong>查看 2026 年 8 月 22 日完整榜单</strong><span className="arrow">↗</span></a>
          </section>

          <footer><p>先写出自己的判断，<br />再让真实数据决定下一步。</p><span>每日 09:00 更新 · 完整内容折叠保存</span></footer>
        </div>
      </div>
    </main>
  );
}
