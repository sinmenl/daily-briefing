import { type ReactNode } from "react";

const briefDate = "2026-08-16";
const cloudBriefMarkdown = "<!-- DAILY_BRIEF_START -->\n\nschema_version: 1\nbrief_date: 2026-08-16\ncoverage_date: 2026-08-15\nstatus: complete\ntitle: 产品与创作每日简报\n\n# 产品与创作每日简报｜2026 年 8 月 16 日\n\n## 今日核心判断\n\n**AI 产品的竞争重心正在从“模型能不能做”转向“结果能否进入真实制度与工作流”。**\n\n最近 72 小时里，几条看似分散的更新共同指向同一变化：OpenAI 用 Ultrafast 把高阶推理压进实时客服、语音、事故响应和交互研究；GitHub 把更多模型放进同一个 Copilot 工作环境；Anthropic 为生成文本加入来源水印；YouTube 把“有效观看”重新定义为可计费、可治理的行为；Linux Foundation 则尝试为 Agent 事故建立跨组织报告制度。模型能力仍重要，但决定产品能否长期使用的，开始是延迟、权限、来源、成本、评价口径和失败后的责任边界。\n\n对 AI × 内容创作者而言，这意味着不应只展示“AI 生成了什么”，而要展示一个完整闭环：输入来自哪里、AI 做了哪一步、人工在哪个节点判断、输出如何核验、发布后观察什么反馈。真正值得沉淀成 Skill 或产品的，不是一条神奇提示词，而是一套能够重复执行、留下证据、允许纠错的流程。\n\n原始来源：[OpenAI：Previewing Ultrafast mode](https://openai.com/index/previewing-ultrafast/)  \n原始来源：[Anthropic：How Claude’s text watermark works](https://www.anthropic.com/news/claude-text-watermark)  \n原始来源：[YouTube：YPP 更新](https://blog.youtube/news-and-events/youtube-partner-program-updates-2027-new-opportunities-earn/)  \n原始来源：[Linux Foundation：SAFE Working Group RFC](https://www.linuxfoundation.org/blog/proposing-the-safe-working-group-an-open-community-effort-to-improve-ai-security)\n\n## 指定博主动态\n\n## 行业重要新闻\n\n### 1. Anthropic 解释 Claude 文本水印：来源证明开始进入模型层\n\n**发生了什么：**\n\nAnthropic 于 8 月 14 日公布 Claude 文本水印的实现方式。未来 Claude 模型生成的文本会利用词语选择中的低风险随机性形成统计模式，不添加隐藏字符、不增加 Token，也不包含用户、组织或会话身份。Anthropic 表示这是为满足欧盟 AI 法案及相关透明度行为准则，水印会在全球启用，并计划提供检测 API。\n\n该机制存在明确边界：短文本、事实密集文本、代码和仅做轻度校对的内容，可供模型选择的词较少，因此水印信号较弱；检测结果只能表示 Claude 参与写作的可能性，不能证明作者身份，也不能判定全部内容由 AI 完成。\n\n**为什么重要：**\n\n内容平台过去多依赖文风检测器推测“像不像 AI”，而模型层水印把问题改成“能否验证某个模型可能参与”。这会影响教育、媒体、平台审核和创作者披露方式，但概率信号不能被当作确定判决。\n\n**产品思维：**\n\n合规功能不能只做检测，还必须同时设计解释层：信号置信度是多少、哪些场景不可靠、检测结果允许用户如何申诉。技术能力与制度使用方式同等重要。\n\n**用户洞察：**\n\n创作者真正需要表达的是 AI 参与程度——整理、翻译、校对、改写或完整生成——而不是被压缩成“人写/AI 写”的二元标签。\n\n**借鉴：**\n\n从今天起给重要内容保留原始口述、AI 处理步骤和最终修改记录。它既是来源证明，也能帮助识别哪些判断仍由自己完成。\n\n原始来源：[Anthropic 原文](https://www.anthropic.com/news/claude-text-watermark)\n\n### 2. Grok 4.6 进入 GitHub Copilot，模型进一步成为可切换执行引擎\n\n**发生了什么：**\n\nGitHub 于 8 月 14 日宣布，xAI 的 Grok 4.6 正逐步开放给 Copilot Pro、Pro+、Max、Business 和 Enterprise 用户，可在 VS Code、Visual Studio、Copilot CLI、Copilot cloud agent、Copilot App、JetBrains、Xcode 和 Eclipse 中选择。GitHub称其内部测试显示，该模型尤其适合需要持续推理和工具使用的长周期终端任务。Business 与 Enterprise 管理员需主动启用，使用量按供应商价格计费。\n\n**为什么重要：**\n\n同一开发工作空间同时容纳多个厂商模型后，用户购买的不再只是一个模型，而是模型路由、上下文、工具、权限、记忆、回滚与成本管理的组合。\n\n**产品思维：**\n\n模型选择器只是第一步。更有价值的产品层是根据任务自动推荐模型，并说明为什么选它、预计成本多少、失败后如何切换和复现。\n\n**用户洞察：**\n\n用户容易把“最新模型”理解为“所有任务都更好”，但改一段文案和运行长周期 Agent 的需求完全不同。可观察的完成率、人工接管次数和总成本比单次惊艳输出更有意义。\n\n**借鉴：**\n\n以后测试新模型时固定一个真实任务集，至少记录：是否正确调用工具、是否自行核验、人工纠正次数、耗时和费用。\n\n原始来源：[GitHub Changelog](https://github.blog/changelog/2026-08-14-grok-4-6-is-now-available-in-github-copilot/)\n\n### 3. OpenAI 预览 Ultrafast：高阶模型最高每秒输出 750 Token\n\n**发生了什么：**\n\nOpenAI 于 8 月 13 日预览 GPT-5.6 Sol Ultrafast API 服务层，由 Cerebras 提供推理基础设施，相比标准处理最高快 14 倍，最高达到每秒 750 个输出 Token。目前仅向少量客户开放，重点测试事故响应、金融研究、实时客服、语音、商业推荐和交互式实验。\n\n**为什么重要：**\n\n速度不仅改善等待体验，还会改变产品形态。过去需要异步等待的深度研究和复杂支持流程，如果能跟上人的对话节奏，就可以变成连续的“提出假设—看到结果—修正—再运行”。\n\n**产品思维：**\n\n延迟是场景变量，不是统一卖点。只有当等待会导致用户离开、交易流失、对话中断或错过处置窗口时，超高速推理才可能创造足够价值。\n\n**用户洞察：**\n\n用户需要的不是所有任务都最快，而是关键时刻不掉出工作状态。创作中的即时反驳、直播问答和交互式研究，比可隔夜完成的批量摘要更能体现速度价值。\n\n**借鉴：**\n\n给自己的 AI 工作流增加“时间敏感度”标签：实时、当日、可异步。只把实时任务放入更高成本的速度通道。\n\n原始来源：[OpenAI 原文](https://openai.com/index/previewing-ultrafast/)\n\n### 4. YouTube 调整 YPP：从播放量转向“有效观看与持续参与”\n\n**发生了什么：**\n\nYouTube 公布将于 2027 年 2 月 1 日生效的合作伙伴计划调整。新申请广告和 Premium 分成的创作者，需要在过去 365 天达到 8,000 小时合格长视频观看，或在 90 天达到 2,000 万次合格 Shorts 观看；现有 YPP 成员不受新准入门槛影响。Shorts 广告与订阅分成还将采用 90 天 1,000 万次合格观看门槛，低于门槛的频道仍保留长视频收益，并可参与购物、品牌合作和趋势激励。\n\nYouTube 另行解释，“合格”长视频观看来自公开长视频或已归档直播；“合格”Shorts 观看要求观众停留超过最初几秒，循环播放不重复计算。\n\n**为什么重要：**\n\n平台正在把商业化资格从偶发爆款转向可持续的真实注意力。创作者增长不能只看总播放量，还要看观众是否停留、是否持续回访、是否形成长视频或商业行为。\n\n**产品思维：**\n\n指标定义决定生态行为。平台提高“有效观看”权重，会推动创作者优化前几秒后的留存、系列内容和跨格式关系，而不是只优化点击。\n\n**用户洞察：**\n\n观众不是因为视频被播放就产生价值，而是在选择继续看、参与讨论、购买或回访时才表现出真实需求。\n\n**借鉴：**\n\n每周复盘时把“播放量”降为入口指标，新增三个结果指标：首段后留存、重复观看者比例、内容引发的明确问题或私信。\n\n原始来源：[YouTube：YPP 更新](https://blog.youtube/news-and-events/youtube-partner-program-updates-2027-new-opportunities-earn/)  \n原始来源：[YouTube：什么是合格观看](https://blog.youtube/news-and-events/youtube-monetization-qualified-watch-hours-shorts-views/)\n\n### 5. SAFE 提案尝试建立 Agent 安全事故的行业共享机制\n\n**发生了什么：**\n\nLinux Foundation 与 Open Secure AI Alliance 发起 Shared AI Findings Exchange（SAFE）工作组 RFC，由 Cisco、CrowdStrike、Hugging Face、NVIDIA、Red Hat 等成员参与。提案希望以保密方式收集和分析 AI 安全事故与“险情”，通知受影响方，识别重复出现的控制失效，并发布基于证据的防御建议。目前它仍是公开征求意见的草案，并非已经运行的强制制度。\n\n**为什么重要：**\n\nAgent 能跨系统采取行动后，失败不再只是“答错”，还可能涉及越权访问、泄露信息和在生产环境继续执行。单家公司内部复盘无法让整个生态学习，行业需要类似航空事故报告的共享机制。\n\n**产品思维：**\n\n安全不能只在上线前做静态测试，还要设计运行后的事件定义、日志、近失误记录、通知时限与复盘模板。没有可观察性，就无法形成集体改进。\n\n**用户洞察：**\n\n用户愿意把任务交给 Agent 的前提，不是相信它永不出错，而是知道错误能被发现、限制、解释和恢复。\n\n**借鉴：**\n\n为自己的自动化建立最小事故记录：任务、触发条件、调用工具、异常结果、影响范围、恢复方式、下次防止规则。即使只有一个人，也按产品系统管理。\n\n原始来源：[Linux Foundation 原文](https://www.linuxfoundation.org/blog/proposing-the-safe-working-group-an-open-community-effort-to-improve-ai-security)  \n原始来源：[SAFE RFC 仓库](https://github.com/OpenSecureAIAlliance/RFCs)\n\n## 产品观察\n\n### 产品 1：Letaido——把营销数据、行业方法与 Agent 执行连成闭环\n\n1. **它服务谁？**  \n   持续进行 SEO、内容研究、竞品分析和营销报告，但不愿自行维护 API、表格和脚本的营销团队与内容团队。\n\n2. **用户原来的解决方案是什么？**  \n   从 Ahrefs 等工具导出数据，在表格中清洗和比较，再把结论复制到文档、任务系统或开发工单；通用聊天模型还需要反复解释指标和业务背景。\n\n3. **它解决了哪个痛点？**  \n   Letaido 可以直接使用 Ahrefs 数据完成研究、分析、仪表板和定时流程，把“找数据—理解数据—形成行动”放入同一工作空间。Ahrefs 发布的 37 个案例强调将大任务拆成窄步骤，并保留人工判断。\n\n4. **为什么现在出现？**  \n   通用 Agent 已能调用工具，但垂直用户仍缺可信数据、专业评价标准和现成流程。行业数据与工作流成为模型之外的产品壁垒。\n\n5. **如果我要做类似产品，可以学习什么？**  \n   不要从“万能营销 Agent”开始。先选择一个频繁且结果可核验的任务，例如把用户评论聚类为内容问题，并直接生成待验证的选题清单；再逐步连接发布和反馈。\n\n原始来源：[Ahrefs：37 Proven Ways to Use AI in Marketing](https://ahrefs.com/blog/how-to-use-ai-in-marketing/)  \n原始来源：[Letaido](https://letaido.com/)\n\n### 产品 2：YouTube YPP——用规则设计创作者供给\n\n1. **它服务谁？**  \n   需要通过广告、订阅、购物和品牌合作变现的 YouTube 创作者，以及希望获得稳定优质供给的观众与广告主。\n\n2. **用户原来的解决方案是什么？**  \n   创作者通常追求总播放量或一次爆款，把达到平台门槛视为主要目标；平台则承担低质量、刷量和收入不稳定的问题。\n\n3. **它解决了哪个痛点？**  \n   新规则把“播放”进一步收紧为“合格观看”，并将不同收入方式拆开：长视频、Shorts、粉丝资助、购物和激励可以分别形成路径。\n\n4. **为什么现在出现？**  \n   YouTube 表示平台每日 Shorts 播放已超过 2,000 亿次、电视端每日观看超过 10 亿小时。供给规模扩大后，粗粒度播放量不足以区分真实注意力和可持续创作者。\n\n5. **如果我要做类似产品，可以学习什么？**  \n   激励机制就是产品设计。若希望用户产生长期价值，就奖励留存、复访和有效行为；不要只奖励最容易被优化甚至操纵的入口数字。\n\n原始来源：[YouTube：YPP 更新](https://blog.youtube/news-and-events/youtube-partner-program-updates-2027-new-opportunities-earn/)  \n原始来源：[YouTube：合格观看定义](https://blog.youtube/news-and-events/youtube-monetization-qualified-watch-hours-shorts-views/)\n\n## 深读推荐\n\n### 1. The Future of User Research Report 2026\n\n**核心观点：**\n\nMaze 调查近 500 名研究、设计和产品专业人士。69% 的受访者已在至少部分研究项目中使用 AI，同比增加 19%；63% 表示研究周转更快，60% 表示效率提高。但研究需求同比增加 20%，产品经理、市场研究者和营销人员也在自行开展研究，标准、培训和集中洞察系统没有同步增长，导致质量与信任风险。\n\n报告的关键判断不是“AI 会替代研究员”，而是执行工作被自动化后，人类在提问、理解情绪与语境、伦理判断和把洞察转成战略建议上的价值更高。\n\n**值得学习的部分：**\n\n最值得学习的是它区分了“研究民主化”和“研究可信度”。更多人会访谈、发问卷，不等于组织获得更好的用户知识；没有统一样本标准、证据记录和人工复核，速度会放大错误。\n\n**如何应用：**\n\n为自己的内容用户研究建立统一模板：研究问题、对象、原话、行为证据、AI 聚类、人工解释、反例和下一步实验。AI 可以转录与归类，但最终洞察必须回到原始证据。\n\n原始来源：[Maze 原文](https://maze.co/blog/future-user-research-2026/)\n\n### 2. How Claude’s text watermark works\n\n**核心观点：**\n\nAnthropic 通过改变模型在多个同等合理词语之间的随机选择形成可检测模式，不靠隐藏字符。水印不包含个人身份，也不增加 Token，但短文本、事实文本、代码和轻度编辑场景的可检测性较弱。\n\n**值得学习的部分：**\n\n这篇文章示范了如何解释概率型产品：不仅说明工作原理，还公开失败条件、适用边界和即将提供的检测接口。对于任何 AI 产品，能力说明和“不适用场景”应同时出现。\n\n**如何应用：**\n\n写 Skill 或自动化说明时加入三项固定内容：它能做什么、什么情况下不可靠、输出必须怎样人工检查。这样比只写功能列表更能建立信任。\n\n原始来源：[Anthropic 原文](https://www.anthropic.com/news/claude-text-watermark)\n\n## 信息源实验雷达\n\n### 人物日\n\n#### 重复主题 1：AI 改变工具，但没有取消创业的基本功\n\n**谁在谈：** Paul Graham；Dan Koe 的近期表达提供了相邻的行动方法证据。\n\n**最近 30 天出现情况：**\n\nPaul Graham 在 8 月 12 日连续提出两个判断：人们常问 AI 时代还有多少传统创业建议成立，而他的观察是“几乎全部仍成立”；AI 未来可能颠覆创业方式，但目前创业核心没有改变。8 月 15 日，他又分享一个团队准备因原想法失效而放弃，他建议直接换新想法重新开始。Dan Koe 在 7 月 31 日则把犯错视为检验大目标方向的“唯一事实来源”。这些内容共同强调：AI 提高试错速度，但不能替代接触现实、发现错误和调整方向。\n\n**原始证据：**\n\n原始来源：[Paul Graham：AI 时代的创业建议](https://x.com/paulg/status/2087601208123126228)  \n原始来源：[Paul Graham：AI 尚未颠覆创业核心](https://x.com/paulg/status/2087602421791105033)  \n原始来源：[Paul Graham：想法无效时重新开始](https://x.com/paulg/status/2088388382590451841)  \n原始来源：[Dan Koe：错误是事实来源](https://www.threads.com/%40thedankoe/post/Dbd3V5KFbfR/the-primary-reason-people-dont-achieve-big-goals-is-because-they-dont-realize/)\n\n**他们实际上在讨论什么：**\n\n重点不是反对 AI，而是拒绝把工具进步误当作需求验证。更快写代码、生成内容和搭建 Agent，会降低生产成本，却不会自动告诉你用户是否在意。真正的稀缺资源仍是有效反馈和根据反馈改变方向的意愿。\n\n#### 重复主题 2：从消费更多信息，转向拥有并训练自己的能力系统\n\n**谁在谈：** Naval Ravikant、Dan Koe。\n\n**最近 30 天出现情况：**\n\nNaval 在 8 月 11 日提出，认真对待软件的人会训练自己的模型。Dan Koe 在 8 月 13 日连续强调，人们会用许多小任务逃避真正重要的那一个任务；他近期反复把写作、实践、反馈和自我反思放在信息消费之前。Naval 的表述更偏技术所有权，Dan 的表述更偏个人行动，但共同点是：通用工具和通用信息只是起点，长期优势来自把自己的数据、判断和反馈训练进一套持续改进的系统。\n\n**原始证据：**\n\n原始来源：[Naval：People who are serious about software train their own models](https://x.com/naval/status/2086987724037185547)  \n原始来源：[Dan Koe：不要用小任务逃避真正重要的任务](https://www.threads.com/%40thedankoe)  \n原始来源：[Dan Koe：实践—研究—反馈—反思](https://www.threads.com/%40thedankoe/post/DbDYmZ2oFTO/a-sign-youre-on-the-right-path-you-look-at-your-work-from-last-week-and-now-see/)\n\n**他们实际上在讨论什么：**\n\n这里的“训练”不一定意味着从零训练基础模型。对个人创作者，更现实的含义是维护自己的知识库、案例、评价标准、禁用规则和反馈数据，使 AI 越来越贴近自己的问题，而不是每天从空白聊天开始。\n\n### 本期最值得注意的关注点变化\n\n**过去：** AI 讨论常围绕模型是否足够强、是否会取代某类工作。  \n**现在：** 最近证据更多落到“怎样把能力变成自己的系统”和“哪些传统判断仍不能外包”。  \n\n**为什么值得注意：** 这说明竞争可能从公开模型能力转向私人上下文与反馈循环。不过，本期对 Sam Altman 和 Naval 的可核验个人更新数量有限，因此这里只能视为弱到中等强度信号，不能断言四人的注意力都已发生同向迁移。\n\n### 留给我的一个问题\n\n如果模型能力会迅速普及，而个人积累的用户原话、失败案例和判断标准不会自动普及，那么接下来最值得长期保存的数据究竟是什么？\n\n## 今日行动建议\n\n今天做一个 **60 分钟“个人研究 Skill”最小版本**：\n\n1. 从最近一条内容下面复制 10 条真实评论或私信，删除身份信息。\n2. 建一个四列文档：用户原话、表面问题、可能的真实任务、仍需追问的问题。\n3. 让 AI 只做聚类，不允许生成结论；要求每个聚类保留对应原话编号。\n4. 由自己选择一个最值得验证的聚类，写出一个只包含三个问题的访谈提纲。\n5. 把提纲发给一位符合条件的人，或用自己的过往经历先试答。\n\n**完成标准：** 得到至少一个由真实原话支持、但仍需要访谈验证的问题假设。不要把 AI 的聚类直接当作用户洞察。\n\n这一步对应闭环中的“信息输入 → 思考加工 → 用户反馈”，并为下一步内容选题或产品机会保留可追溯证据。\n\n<!-- DAILY_BRIEF_END -->";

const tasks = [
  {
    number: "01",
    title: "先恢复基本精力",
    body: "今天不安排开放式大任务，先保留吃饭、补水与休息的空间。状态允许时再进入评论研究，不用工作量证明自己没有停下。",
    first: "先完成基本照顾，再判断今天是否适合继续执行",
    time: "今天持续执行",
    tone: "mint",
  },
  {
    number: "02",
    title: "从真实评论里提取一个用户问题",
    body: "从已经发布的视频、私信或评论中收集 5–10 条与 AI 学习有关的原话，只做去身份化记录。把“情绪表达”和“具体困难”分开，不回应争论，也不把一条评论当成所有用户。",
    first: "先复制第一条能够说明具体困难的原话，并保留出处编号",
    time: "20 分钟",
    tone: "blue",
  },
  {
    number: "03",
    title: "留下一张最小研究卡",
    body: "把原话按“场景、旧办法、困难、想要的结果”四列整理，让 AI 只做聚类并返回原话编号。最后选一个有证据但尚未验证的假设；今天不扩建知识库，也不急着做成视频。",
    first: "先写一句：哪条用户原话支持这个假设？",
    time: "20 分钟",
    tone: "peach",
  },
];

const learningResources = [
  {
    type: "NNgroup 官方教学视频",
    title: "Five User Interview Mistakes to Avoid (in 5 Minutes)",
    meta: "5 分 54 秒 · 英文 · 2022 年 4 月 8 日 · 用户访谈",
    intro: "NNgroup 用具体对话演示五类用户访谈错误，包括把追问变成诱导、说得太多而带偏参与者，以及没有为对方留出讲述空间。它是一段方法教学，不是工具发布或课程招生广告。",
    why: "今天要把评论中的模糊抱怨转成一个可验证问题。真正追问用户时，如果问题已经暗含答案，得到的只会是对研究者假设的附和，而不是真实需求。",
    focus: [
      "区分 probing（继续追问）与 leading（诱导对方同意）。",
      "观察怎样让参与者感到安全，又不过度解释研究者自己的立场。",
      "把用户原话保留下来，再做归类；不要先有结论再挑支持它的句子。",
    ],
    action: "看完后，从今天收集的一条评论写出一个中性追问，例如“你当时具体想完成什么？”，暂时不必发送。",
    boundary: "视频示例来自通用 UX 访谈，不等于小红书用户研究的完整方法；评论样本有自选择偏差，一次追问也不能代表全部用户。",
    source: "https://www.youtube.com/watch?v=yBYd5USasXg",
    sourceLabel: "NNgroup 官方 YouTube 视频",
  },
];

const xiaobot = {
  title: "自媒体学习方法论-从诊断到操作",
  author: "姜胡说",
  published: "2026-06-08 13:56:19",
  source: "https://xiaobot.net/post/4a08ef17-8e9e-46cb-8502-b7dfb53329a2",
};

const weather = { location: "南宁", condition: "小雨", temperature: "25–33℃", icon: "🌦️" };

const planetPosts: Array<{ index: string; author: string; published: string; title: string; body: string; images: string[] }> = [
  {
    "index": "1",
    "author": "大胡子",
    "published": "2026-08-15 10:03",
    "title": "Qwen3.8 27B 本地运行：24G 显存可用但偏慢发热",
    "body": "Qwen3.8 27b，，一个本地模型；\n超越 Claude 4.6、Qwen3.7 plus、Gemini 3.6 flash、Mino 2.5。\n图片中倒数第二的那个，就是扎克伯克提前几天发布的开源大模型，它是来受辱的。\n图三是我在本地跑任务，大概20token/s。这应该mac本的极限。\n\n本地 24G 显存够了，除了稍微有点慢，机器有点热之外，很多事都可以在本地干了。\n这还是刚发布。\n\n很快，就会有建立在 Qwen3.8 27b 之上的社群进化版，更高性能的各种 Qwen3.8。\n最多一周。",
    "images": [
      "/daily-briefing/knowledge/2026-08-15/images/%5B1%5D%20%E5%A4%A7%E8%83%A1%E5%AD%90%20-1.png",
      "/daily-briefing/knowledge/2026-08-15/images/%5B1%5D%20%E5%A4%A7%E8%83%A1%E5%AD%90%20-2.jpg",
      "/daily-briefing/knowledge/2026-08-15/images/%5B1%5D%20%E5%A4%A7%E8%83%A1%E5%AD%90%20-3.png"
    ]
  },
  {
    "index": "2",
    "author": "大胡子",
    "published": "2026-08-15 12:03",
    "title": "数据是反馈，不是焦虑来源",
    "body": "我发现我们老伙计拍个视频特别喜欢关注数据。\n问的问题基本上都是“我的数据不好，我该怎么办？\n\n我们应不应该关注数据呢？\n当然应该关注了。\n为什么要关注啊？这些数据就是反馈啊。\n就好像你去上学。做了个作业，老师回来给你打了 56 分，没及格。\n你该怎么办呢？肯定是看错哪儿了呀，去修改错题。\n把你的眼睛放在赛场上去提高你的球技，不要整天放在记分牌上。\n球技提高了，分数自然而然上来了。\n\n再重复一遍：\n数据是给你的反馈，\n是让你用来改进的，不是让你用来焦虑的！\n把精力用在正确的地方。",
    "images": [
      "/daily-briefing/knowledge/2026-08-15/images/%5B2%5D%20%E5%A4%A7%E8%83%A1%E5%AD%90%20-1.png"
    ]
  },
  {
    "index": "3",
    "author": "大胡子",
    "published": "2026-08-15 12:28",
    "title": "Qwen3.8 27B 4bit 搭配 Hermes 的离线场景",
    "body": "Qwen3.8 27B，量化4bit；\n占用16G显存，搭配Hermes agent；\n速度比较慢（如果是独立显卡，速度会很快）；\n适合飞机、高铁没信号，或者晚上不着急即时反馈的时候使用。",
    "images": [
      "/daily-briefing/knowledge/2026-08-15/images/%5B3%5D%20%E5%A4%A7%E8%83%A1%E5%AD%90%20-1.png",
      "/daily-briefing/knowledge/2026-08-15/images/%5B3%5D%20%E5%A4%A7%E8%83%A1%E5%AD%90%20-2.png"
    ]
  },
  {
    "index": "4",
    "author": "大胡子",
    "published": "2026-08-15 15:14",
    "title": "回报取决于能力、执行与生态位匹配",
    "body": "回报 ≈ Q（能力绝对值）× L（执行强度）× M（生态位匹配度）\n\n为什么有能力，执行力强的人，得不到应有的回报呢？\n问题就在M上：M ≈ 系统认可度 x 市场需求度。\n首先是系统认可度不够。比如你有能力，但是用人单位因为你没有学历不用你；为什么很多人考学历呢？其实就是系统认可度。切换一套系统，比如说在短视频平台，这个系统不认学历，它有一套自己的评估模型，也就是算法。\n还有就是市场需求度。什么叫市场需求度呢？就是有多少人愿意为你提供的价值买单。系统认可你，但是市场不认可，就会出现你有很多粉丝，但你赚不到钱的情况。\n\nQ（能力）、L（执行强度）、M（生态位匹配），缺一不可。\n任何一个为0，回报为0；",
    "images": []
  },
  {
    "index": "5",
    "author": "大胡子",
    "published": "2026-08-15 20:16",
    "title": "Qwen3.8 27B 与 DSH 可能打开小 B 市场",
    "body": "Qwen3.8 27b 和 DSH 的出现，有可能意味着我们进入了一个新的阶段（以前用的是时代，用阶段更合适）\n\n至少，\n小 B 的市场就这么被打开了。",
    "images": []
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
const emphasizedCoreJudgment = coreJudgment;
const industryStories = splitSubsections(cloudSections.get("行业重要新闻") ?? "");
const productObservations = splitSubsections(cloudSections.get("产品观察") ?? "");
const deepReads = splitSubsections(cloudSections.get("深读推荐") ?? "");
const signalRadar = cloudSections.get("信息源实验雷达") ?? "";
const signalRadarLabel = signalRadar.includes("### 社区日") ? "社区日" : "人物日";
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
            <nav className="date-list" data-archive-list="true" aria-label="选择过往简报日期"><a href="?date=2026-08-16" aria-current="page">2026年8月16日</a></nav>
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
              <div className="nav-sub">{industryStories.map((item, i) => <a href={"#story-" + (i + 1)} key={item.title}>{i + 1}. {cleanTitle(item.title)}</a>)}{productObservations.map((item, i) => <a href={i === 0 ? "#product-observation" : "#product-observation-" + (i + 1)} key={item.title}>{item.title}</a>)}{signalRadar ? <a href="#signal-radar">信息源实验雷达</a> : null}<a href="#early-action">今日行动建议</a></div>
            </details>
            <details className="nav-group" data-nav-group>
              <summary className="nav-title"><span className="nav-icon icon-planet">✦</span><span>姜胡说</span><span className="nav-chevron">⌄</span></summary>
              <div className="nav-sub">{planetPosts.map((post) => <a href={"#planet-" + post.index} key={post.index}>{post.author}：{post.title}</a>)}<a href="#planet-status">昨日原始归档</a><a href="#xiaobaotong-1">小报童：从诊断到操作</a></div>
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
              <div className="nav-sub"><a href="#hotlist">查看 2026 年 8 月 15 日完整榜单</a></div>
            </details>
          </nav>
          <p className="sidebar-note">点小标题直达正文 · 折叠内容会自动展开</p>
        </aside>

        <div className="page" id="top">
          <section className="hero">
            <div className="date-block"><div className="date-day">16</div><div><p className="date-month">2026 · 08</p><p className="date-week">星期日</p></div></div>
            <div className="hero-copy">
              <p className="eyebrow">TODAY&apos;S DIRECTION</p>
              <h1>先恢复基本精力，<br />再留下一张证据卡。</h1>
              <p className="judgment">今天不扩建系统，也不解决所有长期问题。先保留恢复空间，再从真实评论中提取一个有原话支撑、尚待验证的用户问题。</p>
            </div>
            <div className="hero-weather" aria-label={weather.location + "当天天气：" + weather.condition + "，" + weather.temperature}>
              <span className="weather-icon">{weather.icon}</span>
              <span className="weather-copy"><strong>{weather.condition}</strong><small>{weather.location} · {weather.temperature}</small></span>
            </div>
          </section>

          <section className="section" id="today">
            <div className="section-heading compact-heading"><div><p className="eyebrow">THREE PRIORITIES</p><h2>今天只做三件事</h2></div><p>AI 建议：先恢复，再做一个最小用户研究动作</p></div>
            <div className="task-grid">{tasks.map((task, i) => <article className={"task-card " + task.tone} id={"task-" + (i + 1)} key={task.number}>
              <span className="task-number">{task.number}</span><h3>{task.title}</h3><p>{task.body}</p>
              <div className="task-meta"><span>第一步</span><strong>{task.first}</strong></div><div className="task-time">{task.time}</div>
            </article>)}</div>
            <div className="time-block-heading" id="schedule-heading"><div><p className="eyebrow">TIME BLOCKS</p><h3>今日时间块</h3></div><p>不按满一天，只给身体恢复和一张研究卡留位置</p></div>
            <section className="schedule" id="schedule">
              <div><span>上午 · 恢复优先</span><p>先完成基本照顾并保留休息；如果精力仍不足，就不继续执行。醒来后不立刻打开评论区，也不开始新的工具配置。</p></div>
              <div><span>下午 · 20 分钟</span><p>从已发布内容的评论或私信中收集 5–10 条真实原话，去掉身份信息，按场景、旧办法、困难和想要的结果记录。</p></div>
              <div><span>晚上 · 20 分钟</span><p>让 AI 只做聚类并返回原话编号，选出一个有证据但尚未验证的假设。写完证据卡就停止，不延伸成新视频或新系统。</p></div>
            </section>
            <details className="brief-item" id="risk">
              <summary><span className="brief-index">风险</span><span className="brief-main"><span className="pill">今日边界</span><strong>四个必须主动截断的消耗</strong><span>只识别，不新增任务</span></span><span className="plus">＋</span></summary>
              <div className="brief-content">
                <p><strong>精力不足：</strong>今天若状态不适合执行，计划可以只保留基本照顾与休息；网页不把恢复解释成拖延。</p>
                <p><strong>把压力变成大计划：</strong>今天不靠重新设计人生、职业或商业模式来获得控制感。</p>
                <p><strong>把评论变成辩论：</strong>评论只作为可能的问题信号。今天不回复、不证明立场，也不把情绪最强烈的发言自动当成最重要需求。</p>
                <p><strong>样本过度外推：</strong>5–10 条评论只能生成待验证假设，不能证明市场需求、付费意愿或全部用户的真实想法。</p>
              </div>
            </details>
            <div className="template-section" id="templates">
              <div className="time-block-heading"><div><p className="eyebrow">FIXED TEMPLATES</p><h3>模版</h3></div></div>
              <div className="brief-list template-list">
                <details className="brief-item" id="template-video">
                  <summary><span className="brief-index">01</span><span className="brief-main brief-main--compact"><span className="pill template-icon" aria-hidden="true">🎬</span><strong>视频流程</strong></span><span className="plus">＋</span></summary>
                  <div className="brief-content"><ul className="template-prompts">
                    <li>我这条到底想验证什么？</li>
                    <li>我的核心判断是什么？</li>
                    <li>我用什么具体例子证明？</li>
                    <li>发出去之后，别人实际理解成了什么？</li>
                    <li>下一条因此改什么？</li>
                  </ul></div>
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
              </div>
            </div>
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
              <summary><span className="brief-index">雷达</span><span className="brief-main"><span className="pill">{signalRadarLabel}</span><strong>信息源实验雷达</strong></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(signalRadar, "signal-radar")}</div>
            </details> : null}
            <details className="brief-item" id="early-action">
              <summary><span className="brief-index">行动</span><span className="brief-main"><span className="pill">今日行动建议</span><strong>完成一个“个人研究 Skill”最小原型</strong></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(actionAdvice, "action")}</div>
            </details>
          </section>

          <section className="section" id="planet">
            <div className="section-heading"><div><p className="eyebrow">JIANG HUSHUO</p><h2>姜胡说</h2></div><p>昨日 5 条星主原文与一篇相关小报童文章</p></div>
            <div className="section-context" id="planet-status">
              <p>昨日归档包含 5 条星主原文。</p>
              <SourceLink href="/daily-briefing/knowledge/2026-08-15/26-08-15姜胡说知识星球.md" label="查看 8 月 15 日原始归档" />
            </div>
            {planetPosts.map((post) => <details className="planet-card" id={"planet-" + post.index} key={post.index}>
              <summary><div className="avatar">{post.index}</div><div><span className="planet-time">{post.author} · {post.published}</span><strong>{post.title}</strong></div><span className="open-label">原文</span></summary>
              <div className="planet-content"><div className="original"><span>星主原文</span>{renderMarkdown(post.body, "planet-" + post.index)}{post.images.map((src, imageIndex) => <img src={src} alt={post.author + "原始配图 " + (imageIndex + 1)} loading="lazy" key={src} />)}</div></div>
            </details>)}
            <details className="planet-card" id="xiaobaotong-1">
              <summary><div className="avatar">读</div><div><span className="planet-time">小报童 · {xiaobot.author} · {xiaobot.published}</span><strong>{xiaobot.title}</strong><span>阅读导引为 AI 建议，文章原文不在网页转载</span></div><span className="open-label">导引</span></summary>
              <div className="planet-content"><div className="original">
                <span>AI 阅读导引</span>
                <p>这篇文章把自媒体学习中的困难分成信息、迁移、行为、身份与使命等不同层级，并提出“先诊断、再内化、再用工具打磨”。它和今天的任务相连之处，不是让 AI 代写内容，而是先确认评论里究竟出现了什么具体问题。</p>
                <p><strong>阅读重点：</strong>重点看“一篇对应一个问题”、48 小时内完成最小执行，以及怎样把事实、推测和 AI 幻觉分开。不要把整套方法抄进知识库，只选一条能作用于今天评论样本的规则。</p>
                <p><strong>阅读问题：</strong>今天收集的原话，究竟对应用户的哪个具体问题？它已经足够支持一个假设，还是仍然只有情绪与模糊结论？</p>
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
                  <p><strong>资料状态：</strong>已读取昨天及过去七天的日记，资料无缺失。日记中的私人生活、健康与家庭细节只用于调整任务负荷，不在公开网页转述。</p>
                  <p><strong>可以公开确认的推进：</strong>本周已经从形成文案推进到拍摄、剪辑和发布。今天不补写未记录的发布数据，也不把评论自动解释成用户洞察。</p>
                  <p><strong>今日边界：</strong>没有把日记中出现的长期问题改写成今天的承诺或截止日期；网页只保留与执行直接相关的低敏结论。</p>
                  <p className="advice"><strong>AI 建议：</strong>今天不需要解决长期方向问题。先恢复基本精力，再完成一张有原话依据的研究卡，让学习重新落到一个真实对象、真实困难和可验证动作上。</p>
                </div>
              </details>
              <article className="review-card static-review-card" id="seven-day-trend">
                <h3>近七天趋势</h3>
                <div className="trend-list">
                  <div><strong>资料范围</strong><p>已读取过去七天的日记；私人生活细节不在公开网页转述，本段只保留与创作执行有关的低敏趋势。</p></div>
                  <div><strong>创作推进</strong><p>本周从文案迟迟未拍，推进到完成拍摄、剪辑、一条发布和一条定时发布。当前缺口已经从“能不能发”转为怎样读取反馈、形成问题并决定下一次只改什么。</p></div>
                  <div><strong>重复阻碍</strong><p>评论争论、工具安装和更大的系统设计容易接管注意力，使一个可验证的小问题重新变成没有结束边界的大工程。</p></div>
                  <div><strong>稳定的新判断</strong><p>用户在日记中反复强调学习路径应由真实约束驱动，工具选择要看当前问题，并开始把 Agent 的能力供给、能力调度和结果验证区分开。下一步不是增加概念，而是用真实用户原话检验这些判断。</p></div>
                </div>
              </article>
              <article className="review-card static-review-card diagnosis" id="action-diagnosis">
                <h3>AI 执行力诊断 / 建议</h3>
                <div>
                  <p><strong>证据：</strong>近七天已经完成拍摄、剪辑和发布，但评论研究、工具配置和系统设计仍可能同时争夺注意力。私密日记只用于判断今天应降低负荷，不在此展示具体内容。</p>
                  <p><strong>行为模式：</strong>按 dbs-action 框架，今天首先接近信号 D“能量低谷”，其次才是执行问题。若把 AI 学习、内容创作和商业化全部变成今日任务，计划本身会继续消耗有限精力。</p>
                  <p><strong>AI 诊断：</strong>今天的卡点不是不知道该做什么，也没有证据支持把它解释成懒惰。开放式任务仍然过大，因此先恢复，再把任务缩成一个有结束边界的证据动作。</p>
                  <p><strong>阿德勒式处方：</strong>先把注意力从“我要证明自己有用”移到“我能帮一个具体新手少走哪一步弯路”。不寻找完整赛道，只从 5–10 条真实原话中选一个问题；做完一张研究卡即算完成。</p>
                  <p><strong>一句话处方：</strong>今天不证明人生方向，只恢复精力，并替一个真实用户把一个问题说清楚。</p>
                  <p><strong>适用边界：</strong>评论样本不能证明付费意愿；状态不适合执行时可以停止。以上是执行安排建议，不是心理咨询或医疗诊断。</p>
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
            <div className="section-heading"><div><p className="eyebrow">HOT LIST</p><h2>热点榜单</h2></div><p>2026 年 8 月 15 日完整榜单</p></div>
            <a className="hotlist" href="/daily-briefing/hotlist/2026-08-15.html" aria-label="打开热点榜单"><span>昨日榜单</span><strong>查看 2026 年 8 月 15 日完整榜单</strong><span className="arrow">↗</span></a>
          </section>

          <footer><p>先恢复基本精力，<br />再留下一个有原话支撑的问题。</p><span>每日 09:00 更新 · 完整内容折叠保存</span></footer>
        </div>
      </div>
    </main>
  );
}
