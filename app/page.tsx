import { type ReactNode } from "react";

const briefDate = "2026-08-15";
const cloudBriefMarkdown = "<!-- DAILY_BRIEF_START -->\n\nschema_version: 1\nbrief_date: 2026-08-15\ncoverage_date: 2026-08-14\nstatus: complete\ntitle: 产品与创作每日简报\n\n# 产品与创作每日简报｜2026 年 8 月 15 日\n\n## 今日核心判断\n\n今天最重要的判断是：**“Agent 拥有某项能力”与“Agent 在这一轮正确选择并使用这项能力”是两个不同的产品问题。**\n\n过去一段时间，行业主要在增加模型、MCP Server、Skill、插件和连接器；最近的产品与社区信号开始集中到下一层：怎样让 Agent 在任务发生时发现正确能力，判断什么时候应该调用，避免把全部工具说明塞进上下文，并让用户能够检查、撤回和修正规则。\n\nGitHub 的 Agent Finder 会根据任务从资源目录中检索并排序 MCP Server、Tool、Agent 与 Skill，而不是预先加载所有能力；GitHub Copilot 本周又加入插件管理、子 Agent 任务面板、计划后自动执行和 `/rewind`。社区同时出现动态工具注册、Harness Engineering、Agent 行为漂移与 Token 消耗难以解释等讨论。共同问题不是“没有工具”，而是能力数量增长后，选择错误、调用过度、遗漏调用和失败后无法恢复的成本正在上升。\n\n这对普通使用者意味着：提示词不只需要描述最终结果，还需要给 Agent 一份简化的“员工手册”——什么条件触发什么能力、哪些方法禁止使用、完成后如何核验、遇到什么情况必须停下来询问。对产品设计者而言，下一批机会可能不在再做一个工具，而在工具发现、路由规则、调用记录、成本解释和失败恢复。\n\n原始来源：[GitHub：Agent Finder](https://github.blog/changelog/2026-06-17-agent-finder-for-github-copilot-now-available/)  \n原始来源：[GitHub Copilot 本周更新](https://github.blog/changelog/2026-08-13-github-copilot-weekly-releases-august-10/)  \n原始来源：[MCP：Skills Over MCP 工作组讨论](https://github.com/modelcontextprotocol/modelcontextprotocol/discussions/2628)\n\n## 指定博主动态\n\n## 行业重要新闻\n\n### 1. Grok 4.6 于 8 月 14 日进入 GitHub Copilot\n\n**发生了什么：**\n\nGitHub 于 8 月 14 日宣布，xAI 的 Grok 4.6 正逐步开放给 Copilot Pro、Pro+、Max、Business 和 Enterprise 用户，可在 VS Code、Visual Studio、Copilot CLI、Copilot cloud agent、Copilot App、JetBrains、Xcode 和 Eclipse 中选择。GitHub称其内部测试显示，该模型适合 Agent 编程与复杂多步任务，尤其在需要持续推理和使用工具的长周期终端任务中表现较强。Business 与 Enterprise 管理员需要主动启用模型策略，费用按供应商公开价格计入用量计费。\n\n**为什么重要：**\n\n同一个 Copilot 工作环境已经可以容纳来自不同公司的多种模型。模型本身越来越像可替换的执行引擎，用户购买的实际产品则是围绕模型的上下文、工具、权限、回滚、记忆和工作流。\n\n**产品思维：**\n\n增加模型只能扩充能力上限，不能自动解决任务匹配。平台需要回答三个问题：什么任务适合这个模型、它比低成本模型多创造了什么价值、用户怎样知道一次失败源于模型还是工作流配置。\n\n**用户洞察：**\n\n普通用户看到新模型时容易产生升级冲动，但长周期推理并非所有任务都需要。对一次改标题、整理口述稿或总结材料而言，等待时间、费用和修改量可能比模型上限更重要。\n\n**借鉴：**\n\n评测 Grok 4.6 或任何新模型时，使用一个真实的多步骤任务，并记录工具调用是否正确、是否自行验证、人工接管次数和总成本。不要只凭一次看起来聪明的回答下结论。\n\n原始来源：[GitHub Changelog](https://github.blog/changelog/2026-08-14-grok-4-6-is-now-available-in-github-copilot/)\n\n### 2. Anthropic 开始为 Claude 文本加入不可见水印\n\n**发生了什么：**\n\nAnthropic 于 8 月 14 日说明，未来的 Claude 模型会在生成文本中加入水印，以满足欧盟《人工智能法案》对 AI 生成内容标记的要求。该方案采用 Google DeepMind 的 SynthID-Text 思路，通过模型在多个同等合理词语之间的随机选择形成可检测模式，不增加隐藏字符、额外 Token、用户或组织身份信息。Anthropic 表示会在全球启用，并计划提供检测 API；Claude 生成的 PNG、JPG 和 SVG 等文件则使用 C2PA 元数据记录来源。\n\n**为什么重要：**\n\nAI 内容治理正在从依赖文风猜测的“检测器”，转向由模型提供方掌握密钥的来源证明。内容平台、学校、媒体和创作者以后可能需要区分“AI 参与过”与“全部由 AI 创作”，而水印本身只能证明前者的可能性。\n\n**产品思维：**\n\n来源标记的价值取决于解释边界。短文本、事实密集内容、代码和轻度校对的水印信号较弱；完全改写也可能去除水印。产品如果把概率检测包装成确定判决，会制造新的误伤。\n\n**用户洞察：**\n\n创作者需要的不是被简单贴上“AI 内容”标签，而是能够说明 AI 在哪个环节参与：整理、翻译、校对、改写还是完整生成。参与程度比二元标签更接近真实创作过程。\n\n**借鉴：**\n\n在自己的创作工作流中记录 AI 的具体角色，例如“AI 整理口述结构、本人决定观点和最终措辞”。这既方便回应平台规则，也能帮助判断哪些能力真正属于自己。\n\n原始来源：[Anthropic：How Claude’s text watermarking works](https://www.anthropic.com/news/claude-text-watermark)\n\n### 3. OpenAI 预览 GPT-5.6 Sol Ultrafast，最高每秒输出 750 Token\n\n**发生了什么：**\n\nOpenAI 于 8 月 13 日公布 Ultrafast API 服务层，由 Cerebras 提供推理基础设施，使 GPT-5.6 Sol 相比标准处理最高快 14 倍、最高达到每秒 750 个输出 Token。目前仅向少量客户开放预览，重点测试事故响应、金融研究、实时客服、语音、商业推荐和交互式实验等场景。\n\n**为什么重要：**\n\n速度提升不只是缩短等待。当复杂推理能够跟上实时对话或正在变化的业务现场，原来只能异步完成的任务可能变成同步协作：用户可以连续提出假设、看到结果、马上修正并再次运行。\n\n**产品思维：**\n\n速度的价值不是统一的。写一篇可以等待十分钟的文章，快 14 倍未必改变结果；但在语音通话、结账决策、系统故障和实时研究中，延迟会直接影响任务是否能完成。产品应先找到“等待会导致用户离开或错过窗口”的场景，再购买昂贵的速度。\n\n**用户洞察：**\n\n用户并不总是需要最强或最快模型，而是需要与任务节奏匹配的响应。把所有任务都放入高性能通道，可能只是提高成本，没有提高体验。\n\n**借鉴：**\n\n分析 AI 工具时加入“时间敏感度”维度：如果晚十分钟结果仍同样有用，就不必追求最快；如果等待会中断对话、错过交易或破坏创作状态，速度才可能成为核心卖点。\n\n原始来源：[OpenAI：Previewing Ultrafast mode](https://openai.com/index/previewing-ultrafast/)\n\n### 4. Ahrefs 把 37 个真实营销案例整理成可复用 AI 工作流\n\n**发生了什么：**\n\nAhrefs 于 8 月 13 日发布《37 Proven Ways to Use AI in Marketing》，覆盖 SEO、AI 搜索优化、内容营销、分析、社交媒体、社区、PR、产品营销和国际化。文章强调案例来自实际使用者，并展示执行过程。其中包括把网站质量指南转成检查清单、将 8,437 个关键词分成 17 个主题、把站点审计自动转成 GitHub Pull Request，以及把内容生产拆成多个由人工检查的窄步骤。相关流程可以在 Ahrefs 的营销 Agent 平台 Letaido 中搭建。\n\n**为什么重要：**\n\n这类内容不再把 AI 用法写成“生成十个标题”式提示词，而是展示输入数据、处理步骤、判断标准、输出去向和人工复核。Agent 商业化正在从售卖通用能力，转向售卖带行业数据和方法的完整流程。\n\n**产品思维：**\n\n真正可复用的工作流必须把一个大任务拆成多个可检验步骤。Ahrefs 明确指出，一条提示词同时交出十个决策容易得到低质内容；十个窄步骤并在每一步检查，才可能达到可发布标准。\n\n**用户洞察：**\n\n营销人员不缺更多生成内容，而是缺少把分析转成行动的中间层。报告如果只说明“发生了什么”，用户仍要自己决定下一步；能够直接生成优先级、任务单或待审核修改，才真正减少工作。\n\n**借鉴：**\n\n设计内容 Skill 时，不要写“帮我生成一条爆款视频”。先拆成选题假设、受众问题、证据、反例、结构、口语化、核验和发布前检查，每一步只交给 AI 一个可判断的任务。\n\n原始来源：[Ahrefs：37 Proven Ways to Use AI in Marketing](https://ahrefs.com/blog/how-to-use-ai-in-marketing/)\n\n### 5. GitHub Copilot 增加子 Agent 管理、计划后执行与无 Git 回滚\n\n**发生了什么：**\n\nGitHub 8 月 13 日发布本周更新汇总。Copilot CLI 新增 `/tasks` 管理子 Agent 及其任务、运行期间排队新的提示词或命令、在无界面模式中组合 `--plan` 与 `--mode autopilot`，以及使用 `/rewind` 恢复 Copilot 的修改而不依赖 Git、也不丢弃用户自己的编辑。Copilot App 还允许用户在回答 Agent 的阻塞问题前打开侧边对话进行讨论。\n\n**为什么重要：**\n\nAgent 产品正在补齐“委派之后如何控制”的交互。并行 Agent 会增加速度，也会增加状态不透明与错误扩散；任务面板、等待队列、计划确认、侧边讨论和回滚，是把自主执行变成可管理工作的关键。\n\n**产品思维：**\n\n自动化不是把人移出流程，而是重新设计人在哪些节点介入。合理的结构是：开始前看计划、执行中看状态、遇到歧义时讨论、完成后检查差异、出错后低成本撤回。\n\n**用户洞察：**\n\n用户不一定反对 Agent 自动修改文件，真正担心的是不知道它正在做什么，以及发现错误后无法只撤回 AI 的部分。控制感来自可见状态和局部恢复。\n\n**借鉴：**\n\n让 Agent 做长任务时，先要求它列出计划并指出预计调用的工具；执行后检查实际调用是否与计划一致。若不一致，把差异写进规则文档，而不是只在当前对话里补一句提示。\n\n原始来源：[GitHub Copilot weekly releases — August 10](https://github.blog/changelog/2026-08-13-github-copilot-weekly-releases-august-10/)\n\n## 产品观察\n\n### GitHub Agent Finder：从“装好所有工具”变成“按任务发现能力”\n\n1. **它服务谁？**  \n   使用大量 MCP Server、Skill、Agent 和插件的个人开发者，以及维护内部 AI 能力目录的企业。\n\n2. **用户原来的解决方案是什么？**  \n   提前把所有工具手动配置到 Agent 中，或者由用户记住每个工具名称，在提示词中明确要求调用。工具越多，上下文占用与选择混乱越严重。\n\n3. **它解决了哪个痛点？**  \n   用户只描述任务，Agent Finder 从指定目录检索并排序相关能力，按需加载，而不是把每个工具都长期放在上下文中。它只负责发现，不会静默安装，最终连接权仍由用户掌握。\n\n4. **为什么现在出现？**  \n   MCP、Skill 和 Agent 资源数量已经超过个人可以记忆和手工维护的范围。行业需要类似搜索引擎或应用商店检索层，在任务出现时找出候选能力。\n\n5. **如果我要做类似产品，可以学习什么？**  \n   “发现”与“执行”应分开：先给出候选工具、匹配理由、权限和成本，再由用户或策略决定是否启用。工具描述也应写清触发条件、禁止场景、输入输出和风险，而不只是列功能。\n\n原始来源：[GitHub：Agent Finder](https://github.blog/changelog/2026-06-17-agent-finder-for-github-copilot-now-available/)  \n原始来源：[GitHub MCP 文档](https://docs.github.com/en/copilot/concepts/context/mcp)\n\n### Letaido：把营销知识、数据和自动执行装进同一工作空间\n\n1. **它服务谁？**  \n   需要持续做 SEO、内容、竞品研究、报告和营销自动化，但不想自己维护 API 与脚本的营销团队。\n\n2. **用户原来的解决方案是什么？**  \n   从 Ahrefs 导出数据，在表格中清洗和比较，再把结论复制到文档、任务系统或开发工单；通用聊天工具还需要用户反复解释指标和业务背景。\n\n3. **它解决了哪个痛点？**  \n   Letaido 直接连接 Ahrefs 数据与营销方法，可以生成报告、仪表板、内部工具和定时自动化，并把分析结果继续推向执行环节。\n\n4. **为什么现在出现？**  \n   通用 Agent 已能调用工具，但行业用户仍缺少可信数据、专业判断标准和现成流程。垂直 Agent 可以通过内置数据和 Skill 缩短从“能做”到“做对”的距离。\n\n5. **如果我要做类似产品，可以学习什么？**  \n   垂直产品的壁垒不是套一个聊天界面，而是把行业数据、判断规则和后续动作连接起来。先从一个频繁、结果可核验的任务切入，再扩展为工作空间。\n\n原始来源：[Ahrefs：About Letaido](https://help.ahrefs.com/en/articles/15028902-about-letaido)  \n原始来源：[Ahrefs：AI Marketing Agent](https://ahrefs.com/agent-a)\n\n## 深读推荐\n\n### 1. 37 Proven Ways to Use AI in Marketing\n\n**核心观点：**\n\nAI 在营销中的有效用法不是让模型一次完成整个岗位，而是把大量重复、复杂、可验证的子任务交给 Agent，再由熟悉业务的人做判断。文章明确反对“低价工具完全自动化营销”的承诺，并指出每条流程仍依赖使用者识别错误与决定优先级。\n\n**值得学习的部分：**\n\n最值得学习的是案例的结构，而不是37个工具清单。每个案例都能还原为：原始数据是什么、过去哪一步最耗时、AI 调用了什么能力、怎样判断输出、结果流向哪里。例如，内容流程从选题到发布被拆成约十个窄步骤；网站审计不止生成报告，而是直接形成待审核的 Pull Request；FAQ 实验使用了对照组，而不是把流量上涨直接归因于 AI。\n\n**如何应用：**\n\n阅读时只选择一个与当前创作有关的案例，按五列做卡片：原任务、重复摩擦、Agent 动作、人工判断、可观察结果。不要复制完整流程；先移植其中一个环节，例如用“读完视频脚本后仍未回答的问题”生成发布前检查清单，并保留人工决定是否修改。\n\n原始来源：[Ahrefs 原文](https://ahrefs.com/blog/how-to-use-ai-in-marketing/)\n\n### 2. How Claude’s text watermarking works\n\n**核心观点：**\n\nAnthropic 的文本水印不添加隐藏字符，而是改变模型在多个合理词语之间进行随机选择的方式，形成只有持有密钥者能检测的统计模式。它只能说明 Claude 可能参与过内容，不能判断作者身份、所有权，也不能可靠区分“完整生成”与“深度改写”。\n\n**值得学习的部分：**\n\n文章清楚说明了适用边界：样本越短，检测置信度越低；事实文本、代码与轻度校对可供选择的词较少，水印也更弱；彻底改写可能移除水印。这个案例展示了产品在解释概率技术时应同时公开能力与限制。\n\n**如何应用：**\n\n创作者不应把水印当成需要规避的技术，而应提前建立可说明的创作记录：原始口述、AI 处理步骤、本人修改和最终版本。这样平台规则变化时，能够解释内容形成过程，也能观察 AI 是否正在替代自己的核心判断。\n\n原始来源：[Anthropic 原文](https://www.anthropic.com/news/claude-text-watermark)\n\n## 信息源实验雷达\n\n### 社区日\n\n#### 信号 1｜反复抱怨：Agent 的真实消耗与行为变化难以解释\n\n**现象：**\n\nReddit 和开发者社区持续出现相似问题：同样的使用方式为什么突然更快耗尽额度、为什么 Agent 会偏离任务或忽略明确限制、付费函数被模型重复调用时怎样限制成本。部分讨论提供了 Token 估算，另一些仍是主观感受，因此不能直接证明平台改变了计费或模型能力；但用户无法自行定位原因这一点反复出现。\n\n**代表性原始证据：**\n\n原始来源：[Reddit：Codex Usage Limits and Performance Megathread](https://www.reddit.com/r/codex/comments/1v42x6r/codex_usage_limits_and_performance_megathread/)  \n原始来源：[Reddit r/ClaudeAI：任务漂移与约束未被执行的讨论入口](https://www.reddit.com/r/ClaudeAI/rising/)  \n原始来源：[OpenAI Developer Community：付费函数被重复调用时如何限制成本](https://community.openai.com/)  \n原始来源：[Reddit：Codex、Claude、Kimi 的用量与可靠输出比较](https://www.reddit.com/r/codex/comments/1vgj6hy/codex_20x_vs_claude_20x_vs_kimi_20x_which_has_the/)\n\n**共同问题：**\n\n用户看到的是最终额度与结果，却看不到模型选择、上下文长度、工具调用、重试、子 Agent 和缓存分别消耗了多少，也无法判断一次偏航究竟来自模型、Harness、规则还是工具故障。\n\n**为什么值得关注：**\n\n当 AI 进入长期工作流，成本与行为不可解释会直接破坏计划。机会可能出现在任务级预算、工具调用记录、偏航提醒、可复现运行和模型/工作流对照，而不是继续提供一个总额度百分比。\n\n#### 信号 2｜开始行动：开发者正在为 Agent 建“能力发现与选择层”\n\n**现象：**\n\n多个项目与标准讨论同时指向一个共同问题：工具数量增长后，不能再把全部工具定义塞给模型，也不能要求用户记住每个 Skill。开发者开始使用动态注册、语义检索、分组过滤和按需加载，让 Agent 先找到候选能力，再决定是否调用。\n\n**代表项目 / 讨论：**\n\n- GitHub Agent Finder：根据自然语言任务从目录中检索并排序 MCP Server、Skill、Tool 与 Agent；\n- MCP Skills Over MCP 工作组：讨论工具选择、分组、过滤与按需激活应该位于协议内还是协议外；\n- Semantic Dynamic Tool Registry：针对“100个工具全部进入每次请求，浪费上下文并干扰选择”的问题提出动态注册；\n- Awesome Harness Engineering：集中整理记忆、权限、MCP、评估、可观察性和编排方法。\n\n原始来源：[GitHub Agent Finder](https://github.blog/changelog/2026-06-17-agent-finder-for-github-copilot-now-available/)  \n原始来源：[MCP Skills Over MCP 工作组](https://github.com/modelcontextprotocol/modelcontextprotocol/discussions/2628)  \n原始来源：[Semantic Dynamic Tool Registry](https://github.com/strands-agents/harness-sdk/issues/1677)  \n原始来源：[Awesome Harness Engineering](https://github.com/ai-boost/awesome-harness-engineering)\n\n**大家实际在解决什么：**\n\n他们不是在增加新能力，而是在解决“什么时候把哪项能力交给模型”。这包括发现候选工具、控制进入上下文的数量、限制权限、描述触发条件和验证调用结果。\n\n**为什么值得关注：**\n\n能力选择层直接决定 Agent 是否会在正确步骤使用正确工具。它也是普通用户最容易误判的地方：看到工具已经安装，就以为模型必然会自动调用。未来 Skill 的竞争力可能部分取决于它是否容易被正确检索和触发。\n\n#### 信号 3｜正在变化：从保存最终文件，转向保存 Agent 的行动轨迹与恢复点\n\n**过去：**\n\n传统版本控制主要保存文件结果。用户发现错误后，需要比较代码或文档差异，猜测 Agent 在哪一步做出了错误决定。\n\n**现在：**\n\nGitHub Copilot CLI 加入 `/rewind`，允许只恢复 Agent 修改；Hacker News 上的“Git for AI Agents”讨论强调在最终提交之间保存提示词级变化；Anthropic 为生成内容加入来源水印和 C2PA 凭证。不同产品正在分别处理撤回、过程记录与来源证明。\n\n**变化是什么：**\n\nAgent 的输出不再只被看作一个文件，还被看作由提示、工具调用、上下文和多次修改组成的过程。产品开始需要回答“它做了什么、为什么这样做、怎样只撤回这一段”。\n\n**证据与推断边界：**\n\n以上功能与讨论属于事实；将它们归纳为“行动轨迹成为新基础设施”是基于多个独立信号的分析性判断，目前仍未形成统一标准。\n\n原始来源：[GitHub Copilot 本周更新](https://github.blog/changelog/2026-08-13-github-copilot-weekly-releases-august-10/)  \n原始来源：[Hacker News：Git for AI Agents](https://news.ycombinator.com/item?id=48063548)  \n原始来源：[Anthropic：Claude 文本水印](https://www.anthropic.com/news/claude-text-watermark)\n\n### 今天最值得注意的一个信号\n\n最值得注意的是：**能力发现与选择正在成为独立产品层。**\n\n“额度不可解释”影响使用成本，“行动轨迹”影响恢复与问责，但二者往往发生在调用之后。能力选择决定错误是否一开始就会发生：Agent 可能拥有图像生成、网页搜索或文件处理能力，却选择写脚本、调用外部 API，或者完全跳过应该使用的工具。这个问题既是用户今天能亲自验证的真实摩擦，也是 Skill、MCP 和自动化进一步普及后必然放大的产品机会。\n\n### 今日最小实验\n\n**我要验证：**\n\n一条明确的工具选择规则，是否能减少 Agent 选错执行路径、追问 API Key 或进行无关操作。\n\n**我具体做：**\n\n选择一个可以调用内置图像生成能力的 Agent，用同一个任务开启两个独立会话：\n\n- A 组只说：“生成一张复古报纸风的 AI 日报封面。”\n- B 组增加规则：“当任务涉及创建或编辑图片时，优先调用产品内置 ImageGen；除非我明确要求，否则不要编写本地脚本、不要调用 OpenAI API、不要索要 API Key。调用前说明准备使用的能力。”\n\n记录四项：它选择了什么工具、是否索要 API Key、用了几轮才开始生成、是否需要人工纠正。只运行到能够判断执行路径即可，不必追求最终图片质量。\n\n**什么结果算有发现：**\n\n如果 B 组更稳定地选择内置图像能力，且减少追问或纠正，说明“工具触发规则”对该场景有效；如果两组都正确，说明当前 Agent 已能凭任务描述完成路由；如果 B 组仍选错，则需要检查内置能力是否在该会话可用，不能继续把问题归因于提示词。\n\n## 今日行动建议\n\n今天只完成上述 A/B 工具路由实验，并把结果整理成一张“新手避坑证据卡”：\n\n- 任务是什么；\n- Agent 明明拥有什么能力；\n- A 组实际选择了什么；\n- 加入哪条规则后发生了什么变化；\n- 仍不能确定的边界是什么。\n\n完成标准是得到两次真实运行记录和一个有证据的结论，不要求今天立即拍摄或发布。它可以直接成为“Agent 拥有能力，不等于这一轮正确调用能力”这个选题的事实支撑，而不是只靠概念解释。\n\n<!-- DAILY_BRIEF_END -->";

const tasks = [
  {
    number: "01",
    title: "核对两条已发布视频的真实反馈",
    body: "昨天已经把两条拍好的视频剪完：一条已发布，另一条已设置定时发布。今天不先解释争议评论，只记录两条视频的发布时间、播放与互动，以及观众具体误解了哪一句。",
    first: "先确认定时视频是否按计划发布，再抄下原始数据与评论原话",
    time: "20 分钟",
    tone: "mint",
  },
  {
    number: "02",
    title: "完成一次 Agent 工具路由 A/B 实验",
    body: "用云端早报给出的同一图片生成任务开两个独立会话：A 组只说要生成图片；B 组明确要求优先调用内置 ImageGen，并禁止写脚本、索要 API Key。只观察执行路径，不追求图片质量。",
    first: "先写好同一任务和四个记录字段：工具、API Key、启动轮次、人工纠正",
    time: "30–45 分钟",
    tone: "blue",
  },
  {
    number: "03",
    title: "做一张新手避坑证据卡",
    body: "把 A/B 两次运行整理为五项事实：任务、Agent 已有能力、A 组选择、加入规则后的变化、仍不确定的边界。它将作为“能力供给不等于能力调度”的第二集证据，不要求今天继续拍摄。",
    first: "实验完成后先写事实，不先写观点和结论",
    time: "15 分钟",
    tone: "peach",
  },
];

const learningResources = [
  {
    type: "DeepLearning.AI 官方公开课",
    title: "AI Agentic Design Patterns with AutoGen｜Tool Use and Conversational Chess",
    meta: "该章节 15 分钟 · 全课 1 小时 25 分 · 英文 · 8 节课 · 基础 Python",
    intro: "由 AutoGen 创建者 Chi Wang 与 Qingyun Wu 授课；建议只看“Tool Use and Conversational Chess”一节，观察 Agent 如何获得工具、何时调用并用规则验证合法动作。课程当前标注在平台测试期内限时免费。",
    why: "今天要验证的不是哪个模型更聪明，而是同一个 Agent 在有无工具触发规则时会选择什么执行路径。这一节提供完整的工具调用教学例子，不是产品发布预告或招生广告。",
    focus: [
      "区分“模型能调用工具”与“任务规则决定什么时候调用工具”。",
      "观察工具的输入、输出和合法动作怎样被明确定义，而不是全部交给模型猜。",
      "注意 Agent 执行后仍需要校验结果，工具成功返回不等于任务正确完成。",
    ],
    action: "只看 15 分钟工具调用章节，然后给今天的 ImageGen 实验补三行：触发条件、禁止路径、完成校验。",
    boundary: "课程用 AutoGen 与 Python 演示，面向想搭建 Agent 的学习者；今天不安装框架、不复现代码，只借用工具定义与结果校验方法。免费状态来自官方页面，后续可能调整。",
    source: "https://www.deeplearning.ai/alpha/short-courses/ai-agentic-design-patterns-with-autogen",
    sourceLabel: "DeepLearning.AI 官方课程页",
  },
];

const xiaobot = {
  title: "抄了100条爆款还是没流量？你缺的不是努力，是一张地图。",
  author: "姜胡说",
  published: "2026-08-10 17:00:17",
  source: "https://xiaobot.net/post/f6ccf57e-4ab5-446d-8461-b3027444335d",
};

const weather = { location: "南宁", condition: "阵雨", temperature: "25–31℃", icon: "🌦️" };

const planetPosts: Array<{ index: string; author: string; published: string; title: string; body: string; images: string[] }> = [
  {
    "index": "1",
    "author": "大胡子",
    "published": "2026-08-13 23:49",
    "title": "被动收入是主动收入的副产品",
    "body": "晚上拍了条视频，就是针对咱们老伙计拍的。\n可以自己对应一下。\n\n被动收入是主动收入的副产品。它不是找出来的，是从主动收入长出来的。而且这其中还有一个过程。主动收入都没跑通，被动收入就是空中楼阁。\n\n最简单的，从字面理解，被动收入至少得有两个条件吧：\n这事能赚钱；\n第二：可复用。\n\n以下三步就是按这两个条件走的。\n\n第一步，从免费到收费。没有背书，怎么办？先用免费换信任；有一定的用户量了，要学会收费，但这时候的收费不是为赚钱——是验证有人愿意为这个需求付钱。我们很多老伙计都搞错了，在这一步就开始想着赚钱、涨价。你要是这么想，那你的天花板就到顶了。\n\n第二步，从一对一到一对多。不要一上来就想着1对多，你连用户都没几个，你怎么知道真正的需求是什么呢？需求都没命中，人家怎么可能会付钱给你呢？刚开始就是一对一，都要从一对一开始。先服务十几个、几十个用户。认真把事儿做好。慢慢找到共性需求，哪些问题是共性的，是可复用的？只有共性需求才可能做到一对多。\n\n第三步，把共性做成产品，最小范围试错。验证过了就有了的第一个小雪球；有价值就会有新用户进来，有新用户进来就会有新的需求。 抽取共性，雪球越滚越大，形成飞轮效应。\n\n太多人，第一步、第二步开始想着快点赚钱，多赚点。自己把自己给堵死了。",
    "images": []
  },
  {
    "index": "2",
    "author": "大胡子",
    "published": "2026-08-14 11:33",
    "title": "测试 DeepSeek Harness：一切皆插件",
    "body": "测试了一下DeepSeek Harness。\n完全不一样的理念：一切皆插件。用下来感觉似曾相识？Notion。不过更彻底。\n极客风格。\n但不是CLI，Web版，极快。一个任务完成，大概几毛钱。\n我猜web版，一个是为了新手友好，另一个大概就是为插件生态。",
    "images": [
      "/daily-briefing/knowledge/2026-08-14/images/%5B2%5D%20%E5%A4%A7%E8%83%A1%E5%AD%90%20-1.png",
      "/daily-briefing/knowledge/2026-08-14/images/%5B2%5D%20%E5%A4%A7%E8%83%A1%E5%AD%90%20-2.png",
      "/daily-briefing/knowledge/2026-08-14/images/%5B2%5D%20%E5%A4%A7%E8%83%A1%E5%AD%90%20-3.png"
    ]
  },
  {
    "index": "3",
    "author": "大胡子",
    "published": "2026-08-14 14:35",
    "title": "价值由别人定义，要先展示再获得反馈",
    "body": "这是我们老伙计遇到的问题。\n应该也是大多数老伙计遇到的问题。\n\n所以，我要单独拿出来说说这个事。\n\n你当然不知道自己能给别人带来什么价值。\n价值是由别人定义的。\n所以，你要去展示，让别人看到。\n别人看到了才有反馈。\n这就是我为什么让大家做自媒体的原因。\n\n如果你认为自己没什么可以展示的，\n那就去做点可以展示的事。\n\n如果你觉得不好意思，\n那不好意思，\n你只能继续不好意思下去。",
    "images": [
      "/daily-briefing/knowledge/2026-08-14/images/%5B3%5D%20%E5%A4%A7%E8%83%A1%E5%AD%90%20-1.jpg"
    ]
  },
  {
    "index": "4",
    "author": "大胡子",
    "published": "2026-08-14 18:42",
    "title": "好的产品也为用户留存关系、记忆与情绪",
    "body": "聊聊 设计吧。\n我们老伙计问得最多的问题都是怎么赚钱，但很少有人讨论产品。\n本末倒置了。\n\n什么时候你开始更多讨论产品的时候，你的事业才会走上正轨。\n我们现在就慢慢积累认知吧，到时候多多少少会有些印象。\n\n大家看到我通过写小报童，写书，做社群赚到了钱，于是我们老伙计默认的赚钱方式就变成了写小报童、写书、做社群。\n挺好，至少已经启动了。但这里边至少有一半的小报童和社群未来会慢慢消失掉。\n\n有一个东西是你现在就需要考虑的：\n好的产品不一定是产品本身，还包含了你为用户留存的空间。\n什么叫留存的空间？就是用户在这里的记忆，在这里的关系，在这里的情绪。\n\n我之前说过，我的社群的续费率是极高的，这和我能够随时退费有关。即便如此，仍然是极高的。一个很重要的原因是什么？大家在这里有关系，有记忆。\nAI 的到来，知识类产品的价值越来越低。为什么愿意为你的产品续费呢？一个很重要的原因就是他的关系、他的记忆、他的情绪都留在了这里。\n你看，如果你只考虑赚钱的话，根本就谈不上关系和情绪。所以，慢慢慢慢，你的产品就会死掉。你赚了一波钱，然后就没有了。这就是很多知识博主的结局。\n\n这就是为什么我说我们很多老伙计太着急了。\n当你着急赚钱的同时，根本就没时间，甚至没有意识，把用户的记忆、关系和情绪留存下来。人们在你这里有没有什么值得留恋地方。随时随地都可以离开。\n因此，很多已经开始赚到钱的老伙计，还在认为自己未来的路会越走越宽时；在我看来，路已经越走越窄了。",
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
const emphasizedCoreJudgment = coreJudgment.replace(
  "今天最重要的判断是：**“Agent 拥有某项能力”与“Agent 在这一轮正确选择并使用这项能力”是两个不同的产品问题。**",
  "**今天最重要的判断是：“Agent 拥有某项能力”与“Agent 在这一轮正确选择并使用这项能力”是两个不同的产品问题。**",
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
            <nav className="date-list" data-archive-list="true" aria-label="选择过往简报日期"><a href="?date=2026-08-15" aria-current="page">2026年8月15日</a></nav>
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
              <div className="nav-sub">{planetPosts.map((post) => <a href={"#planet-" + post.index} key={post.index}>{post.author}：{post.title}</a>)}<a href="#planet-status">昨日原始归档</a><a href="#xiaobaotong-1">小报童：T-PDCA</a></div>
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
              <div className="nav-sub"><a href="#hotlist">查看 2026 年 8 月 14 日完整榜单</a></div>
            </details>
          </nav>
          <p className="sidebar-note">点小标题直达正文 · 折叠内容会自动展开</p>
        </aside>

        <div className="page" id="top">
          <section className="hero">
            <div className="date-block"><div className="date-day">15</div><div><p className="date-month">2026 · 08</p><p className="date-week">星期六</p></div></div>
            <div className="hero-copy">
              <p className="eyebrow">TODAY&apos;S DIRECTION</p>
              <h1>先验证工具路由，<br />再扩建 Agent 系统。</h1>
              <p className="judgment">昨天已经完成一条视频发布并安排下一条。今天不急着写更大的全局提示词，也不增加模型；先用同一项简单任务做两次路由对照，留下可复查的运行记录。</p>
            </div>
            <div className="hero-weather" aria-label={weather.location + "当天天气：" + weather.condition + "，" + weather.temperature}>
              <span className="weather-icon">{weather.icon}</span>
              <span className="weather-copy"><strong>{weather.condition}</strong><small>{weather.location} · {weather.temperature}</small></span>
            </div>
          </section>

          <section className="section" id="today">
            <div className="section-heading compact-heading"><div><p className="eyebrow">THREE PRIORITIES</p><h2>今天只做三件事</h2></div><p>AI 建议：收集反馈、完成对照、留下证据</p></div>
            <div className="task-grid">{tasks.map((task, i) => <article className={"task-card " + task.tone} id={"task-" + (i + 1)} key={task.number}>
              <span className="task-number">{task.number}</span><h3>{task.title}</h3><p>{task.body}</p>
              <div className="task-meta"><span>第一步</span><strong>{task.first}</strong></div><div className="task-time">{task.time}</div>
            </article>)}</div>
            <div className="time-block-heading" id="schedule-heading"><div><p className="eyebrow">TIME BLOCKS</p><h3>今日时间块</h3></div><p>先恢复身体，再做一次最小对照；不给今天排满</p></div>
            <section className="schedule" id="schedule">
              <div><span>上午 · 20 分钟</span><p>只查看两条已发布或已排期视频的可见反馈，按“准确理解、误解、可行动问题”三类记录。不开启争辩，也不把单条评论当成代表性用户结论。</p></div>
              <div><span>下午 · 30–45 分钟</span><p>选一个低风险、结果容易核验的任务，分别交给默认路由与指定轻量模型执行。保持输入、工具和验收标准一致，只改变路由方式。</p></div>
              <div><span>晚上 · 15 分钟</span><p>把两次运行的选择过程、结果差异和失败点写成一张证据卡。到此停止，不顺手搭建全局提示词或新的 Agent 架构。</p></div>
            </section>
            <details className="brief-item" id="risk">
              <summary><span className="brief-index">风险</span><span className="brief-main"><span className="pill">今日边界</span><strong>三个必须主动截断的消耗</strong><span>只识别，不新增任务</span></span><span className="plus">＋</span></summary>
              <div className="brief-content">
                <p><strong>被评论牵走注意力：</strong>评论可以作为反馈样本，但不自动等于事实或代表性需求。今天只抽取可核验问题，不为证明自己而逐条回应。</p>
                <p><strong>用扩建系统替代实验：</strong>全局提示词、模型分工和更多工具都可能有价值，但在没有对照记录前继续设计，只会把一个可验证问题重新变成大工程。</p>
                <p><strong>忽略身体负荷：</strong>昨日日记明确记录经期疼痛。今天的计划允许缩小或中止；身体恢复优先，不把休息解释成拖延。</p>
                <p><strong>把 AI 分析写成本人判断：</strong>AI 可以提供结构和诊断，但网页只把日记中已明确写下的句子标成用户原文，不补写个人理解。</p>
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
              <summary><span className="brief-index">行动</span><span className="brief-main"><span className="pill">今日行动建议</span><strong>完成一次工具路由 A/B 实验</strong></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(actionAdvice, "action")}</div>
            </details>
          </section>

          <section className="section" id="planet">
            <div className="section-heading"><div><p className="eyebrow">JIANG HUSHUO</p><h2>姜胡说</h2></div><p>昨日 4 条星主原文与一篇相关小报童文章</p></div>
            <div className="section-context" id="planet-status">
              <p>昨日归档包含 4 条星主原文。</p>
              <SourceLink href="/daily-briefing/knowledge/2026-08-14/26-08-14姜胡说知识星球.md" label="查看 8 月 14 日原始归档" />
            </div>
            {planetPosts.map((post) => <details className="planet-card" id={"planet-" + post.index} key={post.index}>
              <summary><div className="avatar">{post.index}</div><div><span className="planet-time">{post.author} · {post.published}</span><strong>{post.title}</strong></div><span className="open-label">原文</span></summary>
              <div className="planet-content"><div className="original"><span>星主原文</span>{renderMarkdown(post.body, "planet-" + post.index)}{post.images.map((src, imageIndex) => <img src={src} alt={post.author + "原始配图 " + (imageIndex + 1)} loading="lazy" key={src} />)}</div></div>
            </details>)}
            <details className="planet-card" id="xiaobaotong-1">
              <summary><div className="avatar">读</div><div><span className="planet-time">小报童 · {xiaobot.author} · {xiaobot.published}</span><strong>{xiaobot.title}</strong><span>阅读导引为 AI 建议，文章原文不在网页转载</span></div><span className="open-label">导引</span></summary>
              <div className="planet-content"><div className="original">
                <span>AI 阅读导引</span>
                <p>这篇文章把 T-PDCA 用在内容创作：先写清楚目标、假设与单一变量，再执行、检查和调整。它强调爆款不是复刻出来的，而是通过连续实验逐渐理解平台、用户与自己的表达。</p>
                <p><strong>阅读重点：</strong>看作者如何把“复盘”前移到发布之前；尤其注意一次只改一个变量、先写预测再看数据，以及连续三次验证后才把经验沉淀成技能。</p>
                <p><strong>阅读问题：</strong>你下一条视频能否在发布前先写下一项指标、一个预测和唯一要改变的变量，而不是发布后再用评论解释结果？</p>
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
                  <p><strong>资料状态：</strong>已读取 <code>2.26年日记/8月日记/2026-08-14.md</code>，并核对 8 月 8–14 日共七份日记。昨日没有记录具体入睡时间，不据此补写睡眠事实。</p>
                  <p><strong>已经发生的推进：</strong>昨日完成两条视频的剪辑，其中一条已经发布，另一条已经设置定时发布；创作第一次形成连续交付。两条小红书评论带来不适，也让用户识别出新的内容问题：拥有能力与在当前回合正确调用能力并不是一回事。</p>
                  <p><strong>用户原文：</strong>“agent拥有某个能力”和“这一轮agent正确选择了这个能力”是两回事。来源：8 月 14 日日记。此处忠实引用，不作 AI 润色。</p>
                  <p><strong>用户原文：</strong>“学习路径应该由实际约束驱动，而不是由工具焦虑驱动。”来源：8 月 14 日日记。此处忠实引用，不作 AI 润色。</p>
                  <p className="advice"><strong>AI 建议：</strong>今天不必回应让人疲惫的评论，也不急着解释整套 Agent 架构。先把评论拆成可核验信号，再用同一任务跑一次路由 A/B，对外部反馈和工具判断都保留证据。</p>
                </div>
              </details>
              <article className="review-card static-review-card" id="seven-day-trend">
                <h3>近七天趋势</h3>
                <div className="trend-list">
                  <div><strong>资料范围</strong><p>已读取 8 月 8–14 日七份日记；本段只归纳重复出现的事实与用户原话，不补写未记录的经历。</p></div>
                  <div><strong>重复目标</strong><p>持续希望成为 AI × 内容创作者，并尝试把信息源、知识星球、日记、短视频和真实实验串成闭环。</p></div>
                  <div><strong>重复阻碍</strong><p>持续输入、安装工具和维护系统容易制造推进感；作品接近发布后，注意力又可能被评论、解释冲动和更大的系统设计带走。多篇日记也记录过睡眠偏晚与泛娱乐信息流挤压执行时间。</p></div>
                  <div><strong>本周新变化</strong><p>本周已经从形成文案、完成拍摄推进到一条正式发布和一条定时发布。当前缺口不再是“能不能发”，而是能否区分有用反馈与情绪噪声，并把新发现变成可复查的实验，而不是新的工具工程。</p></div>
                </div>
              </article>
              <article className="review-card static-review-card diagnosis" id="action-diagnosis">
                <h3>AI 执行力诊断 / 建议</h3>
                <div>
                  <p><strong>证据：</strong>8 月 14 日日记记录两条视频已经剪完，其中一条发布、另一条定时发布；同时，用户开始思考全局提示词、模型委派与 Hermes/Codex 分工，并明确说自己还不知道如何写。</p>
                  <p><strong>行为模式：</strong>发布卡点已经被跨过。按 dbs-action 框架，接下来的风险更接近信号 A“执行模拟器”：把一个可以用两次运行验证的路由问题，扩张成先设计完整 Agent 系统、全局提示词和模型分工。</p>
                  <p><strong>AI 诊断：</strong>现在需要的不是证明自己理解了 Agent，而是把“能力存在”和“能力被正确选择”之间的差异做成可观察证据。若先搭系统再测试，失败时将无法判断问题来自模型、提示词、路由还是验收标准。</p>
                  <p><strong>阿德勒式处方：</strong>把实验视为帮助一个被工具选择困住的新手，而不是向评论者证明自己。固定任务、输入和验收标准，只改变路由方式；两次运行结束后再决定是否值得扩建。</p>
                  <p><strong>一句话处方：</strong>不要用一套更大的 Agent 系统证明你理解了工具路由；用两次真实运行让一个新手少交一次 API Key。</p>
                  <p><strong>适用边界：</strong>昨日日记明确记录经期疼痛，且没有记录具体睡眠时间。身体不适时可只完成一轮或延期，不把恢复视为逃避；评论样本也不能被外推为全部用户。</p>
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
            <div className="section-heading"><div><p className="eyebrow">HOT LIST</p><h2>热点榜单</h2></div><p>2026 年 8 月 14 日完整榜单</p></div>
            <a className="hotlist" href="/daily-briefing/hotlist/2026-08-14.html" aria-label="打开热点榜单"><span>昨日榜单</span><strong>查看 2026 年 8 月 14 日完整榜单</strong><span className="arrow">↗</span></a>
          </section>

          <footer><p>先留下真实运行记录，<br />再扩建 Agent 系统。</p><span>每日 09:00 更新 · 完整内容折叠保存</span></footer>
        </div>
      </div>
    </main>
  );
}
