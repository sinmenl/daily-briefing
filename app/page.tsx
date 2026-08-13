import { Fragment, type ReactNode } from "react";

const briefDate = "2026-08-13";
const cloudBriefMarkdown = "<!-- DAILY_BRIEF_START -->\n\nschema_version: 1  \nbrief_date: 2026-08-13  \ncoverage_date: 2026-08-12  \nstatus: complete  \ntitle: 产品与创作每日简报\n\n# 产品与创作每日简报｜2026 年 8 月 13 日\n\n## 今日核心判断\n\nAI 的价值载体正在从“一次回答”变成“可重复安装、可跨工具运行的工作方法”。\n\n8 月 12 日最有代表性的变化不是某个模型又提高了多少分，而是 GitHub 正式支持 Agent Plugins 1.0：一个插件可以同时打包 Skill 与 MCP Server，并在多个兼容 Agent 客户端中使用。与此同时，OpenAI 公布的企业数据表明，领先组织与普通组织之间的差距，主要伴随着 Plugins、Skills、企业上下文和可重复工作流的使用差异。\n\n这意味着未来更值得积累的不是提示词数量，而是三类资产：稳定的任务步骤、完成任务所需的专有上下文、判断成功与失败的标准。对内容创作者而言，一条内容的 know-how 也不是“写作技巧清单”，而是从发现信号、形成假设、组织证据、输出表达，到观察反馈的一整套可复用流程。\n\n原始来源：[GitHub：Agent Plugins 1.0](https://github.blog/changelog/2026-08-12-agent-plugins-1-0-in-vs-code-copilot-cli-and-the-copilot-app)  \n原始来源：[OpenAI：From assistance to execution](https://openai.com/index/how-enterprises-put-ai-to-work/)\n\n## 指定博主动态\n\n## 行业重要新闻\n\n### 1. GitHub 正式支持跨客户端 Agent Plugins 1.0\n\n**发生了什么：**\n\nGitHub 在 8 月 12 日宣布，Agent Plugins 1.0 已在 VS Code、Copilot CLI、GitHub Copilot SDK 和 Copilot App 中正式可用。该开放标准由 GitHub、AWS、Anysphere、Microsoft、OpenAI 和 Vercel等共同发布，Google随后成为核心维护者。\n\n一个插件可以同时打包 Skills 和 MCP Server。兼容客户端可以从同一安装包中读取自己支持的能力，开发者不再需要为不同 Agent 重复维护清单和目录结构。企业还可以使用已有的托管设置控制插件、市场和 MCP Server 的安装范围。\n\n**为什么重要：**\n\nSkill 正在从某个工具内部的配置文件，变成可以安装、分发、治理的软件单元。它降低了工作方法跨工具迁移的成本，也为 Skill 市场、垂直工作流插件和企业内部方法库创造了更清晰的分发路径。\n\n**产品思维：**\n\n当底层模型和客户端可以替换时，产品壁垒会更多落在任务知识、工具连接和评估标准上。好的插件不是堆很多命令，而是把一个明确任务所需的说明、工具与安全边界打包到一起。\n\n**用户洞察：**\n\n用户真正害怕的不是换模型，而是换工具后重新搭建全部流程。可移植插件满足的是“工作方法不要被某个平台锁住”的需求。\n\n**借鉴：**\n\n积累 Skill 时，应优先选择会重复发生、步骤相对稳定、结果可以检查的任务。先把输入、步骤、输出和失败条件写清楚，再考虑技术打包。\n\n原始来源：[GitHub Changelog](https://github.blog/changelog/2026-08-12-agent-plugins-1-0-in-vs-code-copilot-cli-and-the-copilot-app)\n\n### 2. 企业 AI 正从“辅助回答”转向“代理执行”\n\n**发生了什么：**\n\nOpenAI 在 8 月 12 日发布两项企业使用研究。其企业客户数据显示，截至 2026 年 6 月，Codex 已占 Codex 与 ChatGPT 合计输出 Token 的 64%。每月 AI 使用量前 10%的“前沿企业”，人均输出 Token 是普通企业的 8.3 倍；这一差距在 1 月时为 2.6 倍。\n\n前沿企业每周有 21%的活跃用户使用 Plugins，普通企业为 9%。自 2 月以来，企业 Codex 周活用户在法律、销售、招聘和营销等非工程岗位的增速，高于工程岗位。\n\n**为什么重要：**\n\n企业使用深度的差距不只来自“提问更多”，而来自是否把 AI 接入公司资料、工具和重复流程。AI 开始从个人效率工具变成组织执行系统。\n\n**产品思维：**\n\n单次使用案例不等于组织能力。要实现规模化，需要把有效的个人流程转化为共享模板、权限规则、上下文来源、人工复核节点和结果指标。\n\n**用户洞察：**\n\n大量用户停留在让 AI 写一段文字、给一个答案的阶段；少数重度用户则把任务整体交给 Agent。两者之间缺的往往不是模型知识，而是识别完整任务和定义交付结果的能力。\n\n**借鉴：**\n\n判断自己是否建立了工作流，可以看结果是否能重复：换一份输入后，是否仍能按照相同步骤得到可检查的输出；如果每次都要重新解释，说明目前仍是零散使用。\n\n原始来源：[OpenAI 官方研究摘要](https://openai.com/index/how-enterprises-put-ai-to-work/)\n\n### 3. Harvey 把法律 AI 嵌入律师原有的 Outlook 工作环境\n\n**发生了什么：**\n\nHarvey 在 8 月 12 日升级 Outlook 插件。它可以搜索完整邮箱、根据案件资料起草和修改回复、引用具体邮件作为答案依据，并从邮箱中识别庭审期限、未完成条件和待回复客户等优先事项。\n\nHarvey 不会自动发送邮件，每份草稿仍由律师审核发送；修改内容会以修订标记展示。完整邮箱搜索默认关闭，需要管理员主动启用。\n\n**为什么重要：**\n\n这不是给律师增加一个独立聊天窗口，而是把法律推理、知识检索和任务排序嵌入律师每天已经使用的邮箱。Agent 产品开始争夺的不是问答入口，而是原有工作流中的关键节点。\n\n**产品思维：**\n\nHarvey同时处理了三个采用障碍：不要求用户搬运上下文、结果附原始引用、保留最终发送权。自动化越接近高风险动作，越需要可验证来源和明确的人类确认点。\n\n**用户洞察：**\n\n专业用户不想维护五个 AI 工具。他们更愿意在熟悉的工作环境中获得符合领域规则的帮助，并能够快速核验依据。\n\n**借鉴：**\n\n设计知识库或创作工具时，先问它应该嵌入哪个现有动作，而不是先做一个新入口。例如，信息筛选应直接连接到观点卡或选题库，而不是生成另一份无人处理的摘要。\n\n原始来源：[Harvey：The New Harvey for Outlook](https://www.harvey.ai/blog/the-new-harvey-for-outlook)\n\n### 4. MIT 团队用多 Agent 把农产品现货协商从数天缩短到 22 秒\n\n**发生了什么：**\n\nMIT Sloan 的学生团队为 iTradeNetwork 设计了 NegotiateAI。美国约三分之一的易腐农产品通过现货市场交易，文章估算该市场规模约 1660 亿美元，但买卖双方仍依赖电话逐一匹配、议价、确认物流和生成单据。\n\n团队先访谈实际买家与卖家，再设计 Agent-to-Agent 市场。系统根据价格、数量、时间、地点和质量判断是否存在可成交区间；只有存在交集时才开启协商。多个谈判 Agent 并行工作，最终由 Orchestrator 比较预期价值，并把候选交易提交给人工批准。原本数天的过程可缩短至 22 秒。\n\n**为什么重要：**\n\n它展示了完整 Agent 工作流的结构：找到人工流程中最慢的环节，把顺序工作改为并行执行，用规则限制可协商空间，最后保留人工批准。\n\n**产品思维：**\n\n团队没有从“哪里可以用 AI”出发，而是先访谈工作者，定位交易成交这个最大瓶颈。Agent 只在存在成交可能时工作，避免把算力和注意力浪费在无解任务上。\n\n**用户洞察：**\n\n用户要的不是更自然的谈判对话，而是更快找到可成交对象、减少易腐商品损耗，并保留最终决策权。\n\n**借鉴：**\n\n拆解工作流时，先画出原来的顺序步骤，再找哪一步最耗时、哪些步骤可以并行、什么条件下应该停止，以及最终由谁确认。\n\n原始来源：[MIT Initiative on the Digital Economy](https://ide.mit.edu/insights/how-mit-students-taught-ai-agents-to-trade/)\n\n### 5. Agent Skill 开始进入完整视频生产，而不只是生成单个素材\n\n**发生了什么：**\n\nGitHub 的 Python Trending 页面在检索时显示，开源项目 OpenMontage 当日新增约 740 Stars。项目将视频制作组织为 12 条生产管线、100多个工具，以及700多个 Agent Skill 与制作知识文件，目标是让 AI 编程助手执行完整视频生产。\n\n同一页面还出现了用于协调不同 Agent 客户端的 Omnigent、开放知识库 OpenKB等项目。这里的 Star 数量是检索时的动态快照，不能直接等同于长期趋势，但多个项目同时指向“把 Agent 接入完整任务系统”。\n\n**为什么重要：**\n\n创作者工具正在从“生成一张图、一段配音”，转向编排脚本、分镜、素材、音频和渲染等多阶段流程。竞争单位从单个模型能力变成整条生产管线。\n\n**产品思维：**\n\n完整创作流程同时包含确定性步骤与判断性步骤。适合自动化的是格式转换、文件组织和批量处理；主题判断、叙事取舍和最终审美仍需要清晰的人类检查点。\n\n**用户洞察：**\n\n创作者并不缺新的生成按钮，真正的摩擦是不同工具之间来回搬运素材、重复设置参数，以及无法稳定复现上一次的制作方式。\n\n**借鉴：**\n\n不要一开始追求“一键生成完整视频”。先找出自己每次创作都会重复的一个环节，把它整理成可复用步骤，再观察它是否确实减少时间或注意力消耗。\n\n原始来源：[GitHub Python Trending](https://github.com/trending/python)  \n原始来源：[OpenMontage GitHub 仓库](https://github.com/calesthio/OpenMontage)\n\n## 产品观察\n\n### Agent Plugins 1.0\n\n1. **它服务谁？**  \n   需要在不同 AI Agent 客户端分发工作流的开发者、Skill 作者和企业平台管理员。\n\n2. **用户原来的解决方案是什么？**  \n   为每个客户端分别维护插件描述、Skill目录和 MCP 配置，换工具时重新适配与安装。\n\n3. **它解决了哪个痛点？**  \n   解决同一工作方法跨客户端重复打包、难以分发和难以统一治理的问题。\n\n4. **为什么现在出现？**  \n   Agent 客户端、Skills 和 MCP Server 数量快速增长，生态已经需要一层与单一厂商无关的打包标准。\n\n5. **如果我要做类似产品，可以学习什么？**  \n   标准化最有价值的对象不是“所有功能”，而是反复出现的接口摩擦。先让同一份能力能够迁移，再为不同客户端保留命名空间扩展。\n\n原始来源：[GitHub：Agent Plugins 1.0](https://github.blog/changelog/2026-08-12-agent-plugins-1-0-in-vs-code-copilot-cli-and-the-copilot-app)\n\n### Harvey for Outlook\n\n1. **它服务谁？**  \n   每天需要从大量邮件、案件文件和历史沟通中检索信息并起草回复的律师与企业法务。\n\n2. **用户原来的解决方案是什么？**  \n   记住可能出现的关键词、手动搜索邮箱、打开多个案件文件，再凭记忆判断哪些事项最紧急。\n\n3. **它解决了哪个痛点？**  \n   解决上下文分散、关键词搜索失效、回复起草耗时和优先级不清的问题。\n\n4. **为什么现在出现？**  \n   长上下文检索、领域知识、邮件连接器和 Agent 推理已经能够组合；专业机构也逐渐接受带引用、权限与人工审核的受控自动化。\n\n5. **如果我要做类似产品，可以学习什么？**  \n   应把 AI 放在用户已经工作的界面中；重要结论附原始证据；高风险动作默认不自动执行；个性化偏好保存为可复用规则。\n\n原始来源：[Harvey 官方产品公告](https://www.harvey.ai/blog/the-new-harvey-for-outlook)\n\n## 深读推荐\n\n### 1. From assistance to execution: How enterprises put AI to work\n\n**核心观点：**\n\n企业 AI 的分水岭不是是否购买工具，而是能否把 Agent 连接到组织上下文、工具与重复任务。前沿企业与普通企业的使用深度差距正在扩大，Plugins 和 Skills 的采用差异是其中一个伴随信号。\n\n**值得学习的部分：**\n\n报告区分了“个人偶发使用”和“组织可重复执行”。尤其值得注意的是，Agent 增长最快的场景并非只有工程，还包括法律、销售、招聘和营销。这说明可代理的对象是结构明确的知识工作，而不只是代码。\n\n**如何应用：**\n\n选一个自己每周至少发生两次的任务，记录固定输入、步骤、输出和人工判断点。连续运行两次后，只有不随任务变化的部分才适合写进 Skill；每次都变化的部分应保留为人工判断或动态上下文。\n\n原始来源：[OpenAI 官方文章](https://openai.com/index/how-enterprises-put-ai-to-work/)\n\n### 2. How RingCentral builds AI-native work from engineering to ops\n\n**核心观点：**\n\nRingCentral 先让员工自由完成端到端项目，再把有效做法扩展到实际运营。其 PMO 把 Jira、Google Sheets、CRM等分散信息连接起来，自动形成状态、阻塞点、负责人和下一步动作。\n\n**值得学习的部分：**\n\n真正的工作流不是“AI 帮我写一份周报”，而是上游资料自动汇集、中间规则持续处理、下游输出直接支持会议与执行。人仍负责业务背景、架构判断、测试和验证。\n\n**如何应用：**\n\n观察一个流程时，不只记录“我用了哪个 AI”，而要画出五段：信息从哪里来、AI 做了什么、人补充了什么判断、结果流向哪里、下一次如何利用反馈改进。\n\n原始来源：[OpenAI：RingCentral 案例](https://openai.com/index/ringcentral/)\n\n## 信息源实验雷达\n\n### 社区日\n\n#### 信号 1｜反复抱怨：Agent 用量、上下文和可靠性不可预测\n\n**现象：**\n\n社区中的抱怨并不只针对模型回答错误，而是集中在工作被突然中断：上下文耗尽、单次任务消耗异常、服务性能波动，以及难以预估完成一个任务需要多少额度。\n\n**重复证据：**\n\n原始来源：[Reddit r/ClaudeAI：8 月 12 日性能事件讨论入口](https://www.reddit.com/r/ClaudeAI/)  \n原始来源：[Reddit：Claude Usage Limits Discussion Megathread](https://www.reddit.com/r/ClaudeAI/comments/1s7fcjf/claude_usage_limits_discussion_megathread_ongoing/)  \n原始来源：[Hacker News：Managing AI Coding Costs at Scale](https://news.ycombinator.com/item?id=49214468)  \n原始来源：[Reddit：Claude Performance and Bugs Megathread](https://www.reddit.com/r/ClaudeAI/comments/1s7f72l/claude_performance_and_bugs_megathread_ongoing/)\n\n**背后的共同问题：**\n\n用户已经把 Agent 用于长任务，但产品仍以对话次数或不可见的计算消耗来限制使用。用户无法稳定预估成本、时长和中断位置，导致它还不能像普通生产工具一样被纳入计划。\n\n**为什么值得关注：**\n\n当用户抱怨从“答案不好”变成“工作无法按计划完成”，说明使用阶段已经变化。新的产品机会可能出现在任务预算、断点续跑、上下文压缩、失败恢复和成本可视化，而不是另一个聊天界面。\n\n#### 信号 2｜开始行动：开发者把工作方法封装为 Skills、Plugins 与完整管线\n\n**现象：**\n\n多个项目不再只发布一个 Agent 框架，而是在积累可安装的专业 Skills、工具配置和端到端流程。视频生产、设计、文档和测试等任务开始出现专门的 Skill 集合。\n\n**代表项目 / 讨论：**\n\n- OpenMontage：把视频生产拆成管线、工具与大量制作知识文件；\n- ModelStudio Skills：按开发、设计、文档、视频和测试等场景组织可组合 Skill；\n- Garden Skills：面向 Claude Code、Cursor、Codex等客户端提供生产级 Skill 集合；\n- Agent Plugins 1.0：把 Skill 与 MCP Server 打包成跨客户端安装单元。\n\n原始来源：[OpenMontage](https://github.com/calesthio/OpenMontage)  \n原始来源：[ModelStudio Skills](https://github.com/modelstudioai/skills)  \n原始来源：[Garden Skills](https://github.com/ConardLi/garden-skills)  \n原始来源：[Agent Plugins 1.0](https://github.blog/changelog/2026-08-12-agent-plugins-1-0-in-vs-code-copilot-cli-and-the-copilot-app)\n\n**大家实际上在解决什么问题：**\n\n他们在解决“模型知道很多，但每次都要重新说明怎么做”的问题。Skill 把隐性的任务方法转化成可复用、可安装、可迭代的执行资产。\n\n**为什么值得关注：**\n\n这与内容创作者的积累方式直接相关：可被产品化的不只是最终内容，也包括选题、核验、改写、素材整理和反馈分析等中间方法。\n\n#### 信号 3｜正在变化：从选择最强 Agent，转向管理可替换的 Agent 与运行环境\n\n**过去：**\n\n项目更常围绕单一模型或单一 Agent 框架构建，用户需要决定“到底用哪个工具”。\n\n**现在：**\n\nGitHub Trending 中出现了可协调 Claude Code、Codex、Cursor等不同 Agent 的 meta-harness；社区项目开始强调沙箱、策略控制、动态模型路由和本地模型；跨客户端插件标准也开始落地。\n\n**变化是什么：**\n\n开发者正在把模型和 Agent 客户端视为可以替换的执行器，把控制权放到上层工作流、权限和运行环境。这个判断是基于多个近期项目的共同方向，仍属于趋势推断，而不是已完成的行业标准化。\n\n**证据：**\n\n原始来源：[Omnigent：多 Agent meta-harness](https://github.com/omnigent-ai/omnigent)  \n原始来源：[Reddit：复现 Agent 沙箱与动态路由](https://www.reddit.com/r/LocalLLaMA/comments/1rurzvk/i_tried_to_replicate_how_frontier_labs_use_agent/)  \n原始来源：[GitHub：Agent Plugins 1.0](https://github.blog/changelog/2026-08-12-agent-plugins-1-0-in-vs-code-copilot-cli-and-the-copilot-app)\n\n### 今天最值得注意的一个信号\n\n最值得注意的是：**Skill 正在成为 AI 工作方法的分发单位。**\n\n额度与可靠性是重要痛点，但它们主要等待平台优化；多 Agent 管理仍偏基础设施。Skill 则可以现在就由个人开始积累，而且同时连接内容与产品：先把自己反复使用的方法写成步骤，再通过实际任务验证，最后决定它是个人模板、公开内容，还是可交付产品。\n\n### 今日最小实验\n\n**我要验证：**\n\n“早报信息 → 形成一个自己的判断”能否被整理成一条可重复工作流，而不是每次凭状态临时思考。\n\n**我具体做：**\n\n用 60 分钟写一份不超过一页的“观点卡 Skill 0.1”，固定为五步：\n\n1. 选择一个今天真正改变原有认识的信号；\n2. 写出原来的认识；\n3. 写出新证据改变了什么；\n4. 提出一个尚未确认的假设；\n5. 设计一个能观察结果的小验证。\n\n然后分别用今天的“Agent Plugins”和“Harvey邮箱 Agent”运行一次。无需拍摄和发布，只保留两张观点卡，并记录每次仍需要临时决定的地方。\n\n**什么结果算有发现：**\n\n如果同一五步结构能处理两个不同信号，并且至少发现一个重复出现的人工判断点，就说明已经找到一条工作流雏形；如果两次都必须重写步骤，则说明当前定义仍过于抽象，需要缩小任务范围。\n\n## 今日行动建议\n\n今天只执行“观点卡 Skill 0.1”这一个实验，不额外安排视频任务。\n\n完成标准不是写出漂亮观点，而是获得三样东西：一份固定五步模板、两张实际观点卡、一个被识别出的人工判断点。这个人工判断点，就是后续理解“完整工作流中人负责什么、AI 负责什么”的第一份真实材料。\n\n<!-- DAILY_BRIEF_END -->";

const tasks = [
  {
    number: "01",
    title: "写一页观点卡 Skill 0.1",
    body: "只写五步：选择一个真正改变原有认识的信号、原来的认识、新证据改变了什么、一个未确认假设、一个可观察验证。它是实验模板，不是漂亮成品。",
    first: "先建空白五步模板，不补更多背景资料",
    time: "15 分钟",
    tone: "mint",
  },
  {
    number: "02",
    title: "用两个信号各跑一遍",
    body: "分别用 Agent Plugins 1.0 与 Harvey for Outlook 填一张观点卡。保留原始证据链接；哪些句子是 AI 背景、哪些是本人判断，必须分开。",
    first: "每张卡最多 20 分钟，卡住就记录临时决定点",
    time: "40 分钟",
    tone: "blue",
  },
  {
    number: "03",
    title: "准备明天的学校面试",
    body: "昨日日记只确认周五有学校邀请，尚未记录时间和地址。今天只确认时间、地点、携带材料，并写一版 60 秒自我介绍；不扩成完整求职项目。",
    first: "先向对方确认尚未记录的时间与地址",
    time: "30 分钟",
    tone: "peach",
  },
];

const learningResources = [
  {
    type: "Y Combinator 官方教学视频",
    title: "How to Get and Test Startup Ideas",
    meta: "约 6 分钟 · 英文 · YouTube 免费公开 · 适合需要把想法变成小测试的人",
    intro: "Michael Seibel 用一段完整短课讲清楚：先从真实问题出发，再定义 MVP 和最初用户。主体是教学，不是平台功能介绍或招生广告。",
    why: "今天的观点卡不能停在“我有一个判断”，最后一格必须变成可观察验证。这个视频正好补上从问题、假设到 MVP 与最初用户的最短路径，而且只有约 6 分钟，不会把今天重新变成学习日。",
    focus: [
      "先确认你要处理的是一个真实问题，而不是为了使用 AI 寻找问题。",
      "MVP 只保留能验证核心假设的部分，不承担完整产品的全部责任。",
      "最初用户要能实际使用并给出行为反馈，而不是只表达赞同。",
    ],
    action: "看完后，只修改观点卡第五步：把“我要验证”改写成一个今天能找到对象、能看到结果的动作。",
    boundary: "视频面向创业想法测试；今天只借用其问题—MVP—用户结构，不把一张观点卡包装成创业项目，也不因看课增加新任务。",
    source: "https://www.youtube.com/watch?v=vDXkpJw16os",
    sourceLabel: "Y Combinator 官方原始视频",
  },
];

const xiaobot = {
  title: "洞见卡工作法（合稿）",
  author: "姜胡说",
  published: "2025-11-10 23:48:32",
  source: "https://xiaobot.net/post/a1a93166-b475-41f3-9742-92757630d53d",
};

const weather = { location: "南宁", condition: "湿热", temperature: "25–32℃", icon: "☁️" };

const planetPosts: Array<{ index: string; author: string; published: string; title: string; body: string; images: string[] }> = [];

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
  "AI 的价值载体正在从“一次回答”变成“可重复安装、可跨工具运行的工作方法”。",
  "**AI 的价值载体正在从“一次回答”变成“可重复安装、可跨工具运行的工作方法”。**",
);
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
            <nav className="date-list" data-archive-list="true" aria-label="选择过往简报日期"><a href="?date=2026-08-13" aria-current="page">2026年8月13日</a></nav>
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
              <div className="nav-sub">{planetPosts.map((post) => <a href={"#planet-" + post.index} key={post.index}>{post.author}：{post.title}</a>)}<a href="#planet-status">昨日星主动态</a><a href="#xiaobaotong-1">小报童：洞见卡工作法</a></div>
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
              <div className="nav-sub"><a href="#hotlist">查看 2026 年 8 月 12 日完整榜单</a></div>
            </details>
          </nav>
          <p className="sidebar-note">点小标题直达正文 · 折叠内容会自动展开</p>
        </aside>

        <div className="page" id="top">
          <section className="hero">
            <div className="date-block"><div className="date-day">13</div><div><p className="date-month">2026 · 08</p><p className="date-week">星期四</p></div></div>
            <div className="hero-copy">
              <p className="eyebrow">TODAY&apos;S DIRECTION</p>
              <h1>把一次判断，<br />跑成可重复的方法。</h1>
              <p className="judgment">今天不新增系统，也不强迫拍视频。先把观点卡写成五步模板，用两个不同信号各跑一遍，再为明天的学校面试确认必要信息。</p>
            </div>
            <div className="hero-weather" aria-label={weather.location + "当天天气：" + weather.condition + "，" + weather.temperature}>
              <span className="weather-icon">{weather.icon}</span>
              <span className="weather-copy"><strong>{weather.condition}</strong><small>{weather.location} · {weather.temperature}</small></span>
            </div>
          </section>

          <section className="section" id="today">
            <div className="section-heading compact-heading"><div><p className="eyebrow">THREE PRIORITIES</p><h2>今天只做三件事</h2></div><p>AI 建议：一份模板、两次运行、一项面试准备</p></div>
            <div className="task-grid">{tasks.map((task, i) => <article className={"task-card " + task.tone} id={"task-" + (i + 1)} key={task.number}>
              <span className="task-number">{task.number}</span><h3>{task.title}</h3><p>{task.body}</p>
              <div className="task-meta"><span>第一步</span><strong>{task.first}</strong></div><div className="task-time">{task.time}</div>
            </article>)}</div>
            <div className="time-block-heading" id="schedule-heading"><div><p className="eyebrow">TIME BLOCKS</p><h3>今日时间块</h3></div><p>昨夜 04:00 入睡，降低负荷，只做一个实验和必要准备</p></div>
            <section className="schedule" id="schedule">
              <div><span>上午 · 恢复</span><p>先补足连续睡眠，再吃饭、补水和短暂走动。醒来后先离开床和短视频，不用信息流切换注意力。</p></div>
              <div><span>下午 · 60 分钟</span><p>写出观点卡五步模板，并分别用 Agent Plugins 与 Harvey 邮箱 Agent 跑一遍。只记录稳定步骤和仍需本人判断的位置。</p></div>
              <div><span>晚上 · 30 分钟</span><p>确认明天学校面试的时间、地点与需携带材料，准备 60 秒自我介绍。完成后停止工作，给睡眠留出缓冲。</p></div>
            </section>
            <details className="brief-item" id="risk">
              <summary><span className="brief-index">风险</span><span className="brief-main"><span className="pill">今日边界</span><strong>三个必须主动截断的消耗</strong><span>只识别，不新增任务</span></span><span className="plus">＋</span></summary>
              <div className="brief-content">
                <p><strong>熬夜与泛娱乐：</strong>8 月 12 日日记记录约 04:00 入睡，并反复打开抖音、小红书。今天先恢复，内容块开始前把手机移开。</p>
                <p><strong>继续维护系统：</strong>今天验证已有五步模板，不增加信息源、不重做数据库，也不把“准备工具”当作完成实验。</p>
                <p><strong>让 AI 替用户形成观点：</strong>AI 可以提供材料和结构，但原有认识、变化和假设必须由用户本人填写；网页不代写个人理解。</p>
              </div>
            </details>
            <div className="template-section" id="templates">
              <div className="time-block-heading"><div><p className="eyebrow">FIXED TEMPLATES</p><h3>模版</h3></div><p>固定保留，需要时再展开</p></div>
              <div className="brief-list template-list">
                <details className="brief-item" id="template-video">
                  <summary><span className="brief-index">01</span><span className="brief-main brief-main--compact"><span className="pill">视频</span><strong>视频流程</strong></span><span className="plus">＋</span></summary>
                  <div className="brief-content"><ul className="template-prompts">
                    <li>我这条到底想验证什么？</li>
                    <li>我的核心判断是什么？</li>
                    <li>我用什么具体例子证明？</li>
                    <li>发出去之后，别人实际理解成了什么？</li>
                    <li>下一条因此改什么？</li>
                  </ul></div>
                </details>
                <details className="brief-item" id="template-source-experiment">
                  <summary><span className="brief-index">02</span><span className="brief-main brief-main--compact"><span className="pill">信息源</span><strong>信息源实验卡</strong></span><span className="plus">＋</span></summary>
                  <div className="brief-content"><ul className="template-prompts">
                    <li>今天我看到：</li>
                    <li>我以前不知道：</li>
                    <li>我觉得它可能意味着：</li>
                    <li>我现在没想明白的是：</li>
                    <li>我能不能亲自试一下：</li>
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
              <summary><span className="brief-index">行动</span><span className="brief-main"><span className="pill">今日行动建议</span><strong>完成观点卡 Skill 0.1 的第一次运行</strong></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(actionAdvice, "action")}</div>
            </details>
          </section>

          <section className="section" id="planet">
            <div className="section-heading"><div><p className="eyebrow">JIANG HUSHUO</p><h2>姜胡说</h2></div><p>昨日无星主更新，保留原始归档与一篇相关小报童文章</p></div>
            <div className="section-context" id="planet-status">
              <p>昨日归档显示：今日无星主更新。</p>
              <SourceLink href="/daily-briefing/knowledge/2026-08-12/26-08-12姜胡说知识星球.md" label="查看 8 月 12 日原始归档" />
            </div>
            {planetPosts.map((post) => <details className="planet-card" id={"planet-" + post.index} key={post.index}>
              <summary><div className="avatar">{post.index}</div><div><span className="planet-time">{post.author} · {post.published}</span><strong>{post.title}</strong></div><span className="open-label">原文</span></summary>
              <div className="planet-content"><div className="original"><span>星主原文</span>{renderMarkdown(post.body, "planet-" + post.index)}{post.images.map((src, imageIndex) => <img src={src} alt={post.author + "原始配图 " + (imageIndex + 1)} loading="lazy" key={src} />)}</div></div>
            </details>)}
            <details className="planet-card" id="xiaobaotong-1">
              <summary><div className="avatar">读</div><div><span className="planet-time">小报童 · {xiaobot.author} · {xiaobot.published}</span><strong>{xiaobot.title}</strong><span>阅读导引为 AI 建议，文章原文不在网页转载</span></div><span className="open-label">导引</span></summary>
              <div className="planet-content"><div className="original">
                <span>AI 阅读导引</span>
                <p>这篇文章把洞见卡拆成可以运行的最小结构：一句话观点、背后的机制、可执行方法和适用边界。今天只用它检查“观点卡 Skill 0.1”，不再建立另一套知识系统。</p>
                <p><strong>阅读重点：</strong>区分普通摘录与可执行洞见卡；观察四个要素怎样让一条判断既能复用，又不把 AI 生成内容冒充成本人观点。</p>
                <p><strong>阅读问题：</strong>两次运行之后，哪些步骤能够稳定复用，哪些判断必须根据材料临时完成，适用边界又在哪里？</p>
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
                  <p><strong>资料状态：</strong>已读取 <code>2.26年日记/8月日记/2026-08-12.md</code>。用户记录约 04:00 入睡，并明确写下文案已经形成但仍未拍摄。</p>
                  <p><strong>已经发生的推进：</strong>用户把“使用 AI 辅助拍摄短视频”进一步缩小为一个可检查的问题，也尝试通过语音对话梳理内容；当天还收到一所学校周五面试的邀请。</p>
                  <p><strong>用户原文：</strong>“AI 能不能把一个我已经产生的真实想法，一直推进到‘发布’，而不是只帮我生成文案？”来源：8 月 12 日日记。此处忠实引用，不作 AI 润色。</p>
                  <p className="advice"><strong>AI 建议：</strong>今天顺着云端早报给出的实验，只验证观点卡五步能否重复运行，不再新增视频任务；同时把明天面试的必要信息确认清楚。</p>
                </div>
              </details>
              <article className="review-card static-review-card" id="seven-day-trend">
                <h3>近七天趋势</h3>
                <div className="trend-list">
                  <div><strong>资料范围</strong><p>已读取 8 月 6–12 日七份日记；本段只归纳重复出现的事实与用户原话，不补写未记录的经历。</p></div>
                  <div><strong>重复目标</strong><p>持续希望成为 AI × 内容创作者，并尝试把信息源、知识星球、日记、短视频和真实实验串成闭环。</p></div>
                  <div><strong>重复阻碍</strong><p>睡眠偏晚、在家容易躺床、持续输入与系统维护，以及拍摄前重新质疑主题价值，会共同推迟作品进入外部反馈。</p></div>
                  <div><strong>本周新变化</strong><p>8 月 12 日把“AI 辅助拍视频”缩小成“能否把一个真实想法推进到发布”，并尝试语音梳理。问题更具体了，但执行仍停在拍摄前；明天还有一项现实中的学校面试。</p></div>
                </div>
              </article>
              <article className="review-card static-review-card diagnosis" id="action-diagnosis">
                <h3>AI 执行力诊断 / 建议</h3>
                <div>
                  <p><strong>证据：</strong>8 月 12 日日记写明文案已经出现，却“还是不愿去拍”；同时继续研究如何让 AI 更好地服务工作流，并记录约 04:00 入睡和反复刷泛娱乐内容。</p>
                  <p><strong>行为模式：</strong>按 dbs-action 框架，主要接近信号 A“执行模拟器”和信号 E“完美主义伪装”：定义流程和研究工具产生了推进感，但也把作品暴露给外部反馈继续往后推。</p>
                  <p><strong>AI 诊断：</strong>今天的卡点不是再缺一个完整系统，而是尚未验证同一方法能否第二次运行。云端早报已经把任务降到两张观点卡，这正好绕开拍摄压力，同时检验工作流是否真实存在。</p>
                  <p><strong>阿德勒式处方：</strong>先让五步模板服务两个具体信号。若有余力，只把其中一张卡交给一位不了解背景的人，问对方能否复述核心判断；不要求发布视频。</p>
                  <p><strong>一句话处方：</strong>工作流只有被第二次运行才开始存在；第一次写得再完整，也仍可能只是说明书。</p>
                  <p><strong>适用边界：</strong>约 04:00 入睡会真实降低精力，且明天有学校面试。本诊断不把生理疲劳或现实准备解释成意志问题；今天先恢复，完成最小实验即可。</p>
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
            <div className="section-heading"><div><p className="eyebrow">HOT LIST</p><h2>热点榜单</h2></div><p>2026 年 8 月 12 日完整榜单</p></div>
            <a className="hotlist" href="/daily-briefing/hotlist/2026-08-12.html" aria-label="打开热点榜单"><span>昨日榜单</span><strong>查看 2026 年 8 月 12 日完整榜单</strong><span className="arrow">↗</span></a>
          </section>

          <footer><p>把一次判断，<br />跑成可重复的方法。</p><span>每日 09:00 更新 · 完整内容折叠保存</span></footer>
        </div>
      </div>
    </main>
  );
}
