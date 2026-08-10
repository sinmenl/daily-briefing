import { Fragment, type ReactNode } from "react";

const briefDate = "2026-08-10";
const cloudBriefMarkdown = "<!-- DAILY_BRIEF_START -->\n```yaml\nschema_version: 1\nbrief_date: 2026-08-10\ncoverage_date: 2026-08-09\nstatus: complete\ntitle: 产品与创作每日简报\n```\n\n# 产品与创作每日简报｜2026 年 8 月 10 日\n\n## 今日核心判断\n\nAI 产品正在同时沿两条路线演进：\n\n第一条是提高模型能力，让模型执行更长、更复杂的任务；第二条是增加权限、评估、审批和安全边界，让模型能够进入真实工作流。决定 Agent 能否创造价值的，越来越不是“它能生成什么”，而是“它能否在明确目标、有限权限和可验证标准下完成任务”。\n\n内容平台则在处理另一个后果：生成门槛下降之后，低成本、批量化内容快速增加。YouTube、TikTok、Substack、Pinterest、LinkedIn 和 Snapchat 都在加强标识、降权或限制完全由 AI 批量生成的内容。对创作者而言，AI 可以降低制作成本，但无法替代真实经历、独立判断和可验证的实验。\n\n这两条趋势指向同一个机会：\n\n> AI 负责扩大执行能力，人负责定义问题、设定边界、做出判断并承担结果。\n\n对于 AI × 内容创作，长期优势不应建立在“会使用某个工具”上，而应建立在持续发现问题、开展实验、形成观点和获得用户反馈的闭环上。\n\n## 指定博主动态\n\n## 行业重要新闻\n\n### 1. OpenAI 称前沿模型可能接近“关键网络安全能力”阈值\n\n**发生了什么：**\n\nOpenAI 在 2026 年 8 月 7 日公布最新安全评估。其即将发布的模型 Astra 在 Agent 编程和网络安全任务上的能力明显提高，OpenAI认为已经不能排除模型达到其 Preparedness Framework 中“关键网络安全能力”级别的可能性。\n\n这里的变化不是模型更会回答安全知识问题，而是它可能更擅长自主发现漏洞、编写代码、使用工具，并在较少人工干预的情况下完成多步骤任务。\n\n**为什么重要：**\n\n当模型从“给建议”发展到“使用工具并采取行动”，错误的影响范围会被放大。一个聊天回答出错，通常只影响一次判断；一个拥有代码执行、账户权限和网络访问能力的 Agent 出错，可能直接改变外部系统。\n\n因此，未来的 Agent 产品不能只比较模型能力，还需要比较：\n\n- 权限是否遵循最小化原则；\n- 高风险操作是否需要人工确认；\n- 每次工具调用是否可以追踪；\n- 任务有没有明确的退出条件；\n- 出错后能否停止、回滚和恢复。\n\n**产品思维：**\n\nAgent 产品的核心模块正在从“聊天界面＋模型”变成：\n\n目标定义 → 上下文 → 工具权限 → 执行过程 → 结果验证 → 异常处理。\n\n其中，“结果验证”可能比提示词更加重要。能够自动检查结果、识别异常并请求人工介入的产品，更容易进入真实业务。\n\n**用户洞察：**\n\n普通用户可能追求“自动完成”，但组织真正购买的是“可控地完成”。随着任务风险提高，用户对产品的需求会从速度转向确定性、责任边界和可审计性。\n\n**给我的启发：**\n\n设计 AI 工作流时，先写出验收标准，再让 AI 执行。例如，知识库内容整理任务不能只要求“总结这份资料”，而应该明确：\n\n1. 不添加资料中不存在的事实；\n2. 每个结论保留出处；\n3. 无法确认的内容标记为待核验；\n4. 输出后检查重复、矛盾和缺失字段。\n\n原始来源：[OpenAI — Responding to the next frontier of critical cyber capabilities](https://openai.com/index/responding-next-frontier-critical-cyber-capabilities/)\n\n---\n\n### 2. ChatGPT 将“思考深度”变成用户可控制的产品参数\n\n**发生了什么：**\n\nOpenAI 在 2026 年 8 月 6 日更新 GPT‑5.6 Sol，并为 Plus 和 Pro 用户提供思考深度调节功能。免费用户将逐步使用 GPT‑5.6 Luna、获得不限次数的文字对话，并可通过 Think 按钮处理更复杂的问题。\n\nOpenAI称，在其内部金融、医疗和法律事实评估中，相较 GPT‑5.5 Instant，包含至少一个事实错误的回答在 GPT‑5.6 Luna 上减少约 62%，在 GPT‑5.6 Sol 上减少约 68%。\n\n这些数字来自 OpenAI 内部评估，不能直接等同于所有真实场景中的错误率下降。\n\n**为什么重要：**\n\n过去，用户需要理解不同模型名称、速度和推理能力。新的交互方式把技术选择转换成更容易理解的任务选择：\n\n- 简单问题快速回答；\n- 写作、研究和决策增加思考；\n- 用户不必频繁切换模型。\n\n这说明 AI 产品竞争已经从单纯的模型性能，延伸到“如何帮助用户分配计算成本和注意力”。\n\n**产品思维：**\n\n优秀的产品不会把底层技术复杂度直接暴露给用户，而是把它转换成符合用户心智模型的控制项。“需要想多久”比“选择哪个模型版本”更接近用户真正关心的问题。\n\n类似设计可以应用到知识库产品：\n\n- 快速检索：只返回最相关资料；\n- 深度分析：交叉比对多份资料；\n- 严格核验：逐条附出处并检查矛盾。\n\n**用户洞察：**\n\n用户并不总是需要最强模型。真正需求是根据任务风险选择适当投入：选标题时需要速度，发布事实性内容前需要更高的核验强度。\n\n**给我的启发：**\n\n可以为自己的内容工作流设置三个档位：\n\n- 灵感档：快速生成选题和角度；\n- 创作档：形成结构、案例和初稿；\n- 核验档：检查事实、来源、逻辑和反例。\n\n这样能避免对所有任务使用同一种提示词和同一套处理流程。\n\n原始来源：[OpenAI — Improving GPT‑5.6 Sol in ChatGPT](https://openai.com/index/improving-gpt-5-6-sol-in-chatgpt/)\n\n---\n\n### 3. Anthropic 通过缩小安全分类边界，减少约 85% 的生物学误拦截\n\n**发生了什么：**\n\nAnthropic 在 2026 年 8 月 7 日更新 Claude Fable 5 的生物学安全机制。此前，为防止模型被用于危险的生物研究，系统会将大量相关请求切换到能力较低的模型，其中也包括普通健康咨询和教育问题。\n\nAnthropic重新编写分类规则、补充训练数据，并邀请专家参与反馈。其内部测试显示，生物学相关请求的模型回退减少约 85%，但病毒学、毒理学和分子设计等具有双重用途风险的专业任务仍受到限制。\n\n**为什么重要：**\n\nAI 安全并不是“允许”与“禁止”的静态开关。规则过宽会损害正常体验，规则过窄则可能放大风险。真正困难的是持续识别误拦截和漏拦截，并调整分类边界。\n\n这也是一个典型的产品问题：安全性、可用性与用户信任之间需要动态平衡。\n\n**产品思维：**\n\n安全机制应该被视为可以持续优化的产品组件，需要监测：\n\n- 哪些正常请求被错误拒绝；\n- 哪些危险请求没有被识别；\n- 用户在什么情况下放弃任务；\n- 回退后是否解释了原因；\n- 用户能否申诉或补充上下文。\n\n“拒绝率越高越安全”并不成立。更好的指标是，在保持风险控制的前提下，减少对正常任务的干扰。\n\n**用户洞察：**\n\n用户通常无法理解复杂安全政策，但能直接感受到产品是否“莫名其妙地拒绝”。如果拒绝缺少解释，用户会把安全机制理解成模型能力不足。\n\n**给我的启发：**\n\n设计知识库或内容审核工作流时，不要只输出“通过/不通过”。增加三种结果：\n\n- 可直接使用；\n- 需要人工核验；\n- 存在明确风险，暂不使用。\n\n同时写出触发原因。这样既保留安全边界，也减少不透明拒绝带来的挫败感。\n\n原始来源：[Anthropic — Improving Fable 5’s biology safeguards](https://www.anthropic.com/news/improving-fable-5-s-biology-safeguards)\n\n---\n\n### 4. 多个平台开始限制“AI 批量内容”，原创判断成为稀缺信号\n\n**发生了什么：**\n\n截至 2026 年 7 月底，多家内容平台都在调整 AI 内容治理：\n\n- YouTube强调，使用 AI 增强原创叙事可以获得收益，但批量生产的重复、低投入内容可能无法变现；\n- TikTok测试识别专门发布 AI 垃圾内容的账号；\n- Substack引入 AI 使用分析和创作过程披露；\n- Pinterest允许用户减少信息流中的生成式 AI 内容；\n- LinkedIn表示将处理表面流畅但缺少独立观点的 AI 内容；\n- Snapchat宣布，完全由 AI 生成的视频不再获得 Spotlight 推荐或奖励，但使用 AI 辅助编辑仍被允许。\n\n这些平台并不是全面排斥 AI，而是在区分“AI 辅助表达”和“用 AI 批量占领分发系统”。\n\n**为什么重要：**\n\n当文本、图片和视频都可以低成本生成时，“制作完成”不再具有稀缺性。平台需要寻找新的质量信号，例如真实人物、原创叙事、个人经验、用户互动和内容差异度。\n\n这意味着纯粹依赖提示词和模板复制的内容模式，生命周期会越来越短。\n\n**产品思维：**\n\n内容平台面临的是典型的生态系统问题：\n\n生成工具提高供给 → 低质量供给激增 → 用户筛选成本上升 → 用户满意度下降 → 平台必须调整推荐和变现规则。\n\n平台不会只判断内容是不是 AI 生成，更可能判断它是否重复、是否具有独立价值，以及用户是否真正愿意消费。\n\n**用户洞察：**\n\n用户不一定反感 AI。他们反感的是内容看起来正确、完整、流畅，却没有提供任何新信息、真实经验或可信判断。\n\n**给我的启发：**\n\n使用 AI 时，至少保留一个无法批量复制的“人类证据”：\n\n- 一次实际操作的录屏；\n- 一个失败案例；\n- 一段用户原话；\n- 一个前后对比结果；\n- 一个带适用边界的判断。\n\nAI 可以负责整理和表达，但内容的核心证据应该来自真实观察或实验。\n\n原始来源：[Business Insider — Social platforms cracking down on AI slop](https://www.businessinsider.com/ai-slop-substack-youtube-tiktok-pinterest-facebook-instagram-threads-2026-7)\n\n---\n\n### 5. MrBeast 的商业版图从个人流量转向媒体、消费品和软件\n\n**发生了什么：**\n\n2026 年 8 月 7 日公开的法庭文件和历史融资材料显示，MrBeast 的商业规划经历了多次变化。\n\n早期计划包括播客、NFT、订阅社区和视频业务；到 2024 年，方向扩大到主题乐园、电影、动画和消费品；到 2025 年，其公司将业务归纳为三个支柱：\n\n- 媒体；\n- 消费品；\n- 软件。\n\n目前推进的方向包括 Feastables、金融服务 Step、创作者服务平台、会员业务、Beast Mobile，以及不依赖 MrBeast 本人出镜的新内容品牌。\n\n**为什么重要：**\n\n这展示了创作者公司从“个人影响力变现”转向“以影响力降低产品获客成本”的过程。内容不是最终商品，而是持续产生信任、注意力和需求的分发系统。\n\n同时，这些历史材料也说明，创作者不需要执行最初提出的每个商业想法。NFT、播客等计划没有成为主要业务，方向会随着用户反馈、团队能力和市场条件变化。\n\n**产品思维：**\n\n创作者商业化可以分为三层：\n\n1. 内容层：获取注意力并建立定位；\n2. 关系层：沉淀社区、会员和直接触达渠道；\n3. 产品层：销售消费品、软件、服务或体验。\n\n真正的增长不是在每一层同时扩张，而是先验证哪一种用户需求能够借助已有信任被更低成本地满足。\n\n**用户洞察：**\n\n用户关注一个创作者，不代表会购买创作者推出的任何产品。能够转化的产品通常需要同时满足两个条件：\n\n- 与创作者长期建立的认知或身份关联；\n- 用户本身存在稳定、明确的需求。\n\n**给我的启发：**\n\n成为 AI 内容创作者时，可以把内容视为需求研究渠道。连续记录评论区出现的问题，将问题按出现频率、解决成本和付费可能性分类。产品机会应来自重复出现的需求，而不是临时想到的功能。\n\n原始来源：[Business Insider — MrBeast’s pitch decks reveal how his business ambitions changed](https://www.businessinsider.com/new-court-docs-show-mrbeast-evolving-expansion-ambitions-membership-mobile-2026-8)\n\n## 产品观察\n\n### 产品一：OpenAI Presence\n\n**1. 它服务谁？**\n\n需要把 AI Agent 部署到客服、销售、保险理赔和内部 IT 等真实业务流程中的大型组织。\n\n**2. 用户原来的解决方案是什么？**\n\n原有方案通常是人工客服、固定规则机器人、知识库搜索，以及多个互不相通的业务系统。复杂请求需要员工手动核验身份、查询资料、解释规则并执行操作。\n\n**3. 它解决了哪个痛点？**\n\nPresence试图把模型、企业知识、业务系统、权限政策、评估工具和人工升级机制组合成完整产品。\n\nAgent只获得完成特定岗位所需的知识和系统权限；企业可以定义哪些操作允许自动完成、哪些需要审批、何时必须转交人工。系统上线后，再从真实会话和转人工案例中发现缺口，测试并批准改进。\n\nOpenAI称，其英文电话支持场景中，Presence能够在无需人工介入的情况下解决约 75% 的来电问题；相关改进流程曾在十天内将转人工比例降低十五个百分点。该数据来自OpenAI自身案例，仍需要结合具体任务难度和统计口径理解。\n\n**4. 为什么现在出现？**\n\n模型已经能够进行多步骤推理和工具调用，但企业采用的主要障碍转向可靠性、权限、合规和持续维护。市场需要的已经不是一个更聪明的聊天窗口，而是一套能管理 Agent 全生命周期的系统。\n\n**5. 如果要做类似产品，可以学习什么？**\n\n不要从“万能 Agent”开始。先选择一个边界清晰、结果可验证的岗位：\n\n- 定义单一任务；\n- 只连接必要知识和工具；\n- 写出允许与禁止的操作；\n- 设计人工接管条件；\n- 收集失败案例；\n- 每次只修复一种高频失败。\n\n原始来源：[OpenAI — Introducing OpenAI Presence](https://openai.com/index/introducing-openai-presence/)\n\n---\n\n### 产品二：ChatGPT 的思考深度控制\n\n**1. 它服务谁？**\n\n既使用 AI 处理日常问题，也会进行研究、写作、规划和复杂决策的普通用户与专业用户。\n\n**2. 用户原来的解决方案是什么？**\n\n用户需要手动选择不同模型，或者通过“认真思考”“一步一步分析”等提示词调节回答深度。这要求用户理解模型差异，并承担选择成本。\n\n**3. 它解决了哪个痛点？**\n\n产品把模型选择转化为任务投入选择：快速任务降低等待时间，重要任务增加推理资源。用户控制的是结果所需的投入，而不是底层技术名称。\n\n**4. 为什么现在出现？**\n\n模型能力和推理成本差距扩大，同一个模型也可以在不同计算投入下运行。产品需要帮助用户在响应速度、成本和答案质量之间做简单选择。\n\n**5. 如果要做类似产品，可以学习什么？**\n\n将复杂技术参数翻译成用户能够理解的结果语言。例如，知识库产品不必展示检索数量、重排模型和上下文长度，可以提供：\n\n- 快速找答案；\n- 跨资料分析；\n- 严格核验。\n\n每个档位同时说明速度、覆盖范围和可信程度，减少用户的技术决策负担。\n\n原始来源：[OpenAI — Improving GPT‑5.6 Sol in ChatGPT](https://openai.com/index/improving-gpt-5-6-sol-in-chatgpt/)\n\n## 深读推荐\n\n### 1. Dan Koe：《The Art Of Strategic Thinking》\n\n**核心观点：**\n\nDan Koe 在 2026 年 8 月 8 日发布的文章中区分了策略与战术：\n\n- 战术是具体动作；\n- 策略是持续改善自己所处的位置，使更有效的动作逐渐出现；\n- 收集工具、教程和方法容易制造“正在进步”的错觉；\n- 真正的策略需要明确目标、理解约束、集中资源、获得反馈并根据环境调整。\n\n他进一步提出，系统和工具都会随着环境变化而失效。固定的 Notion 模板、Claude Skill 或 AI 工作流可能在几个月后不再有效，因此使用者仍需要判断什么时候应该调整方法。\n\n**值得学习的部分：**\n\n最值得借鉴的不是文中的成功叙事，而是“原则与工具分离”的思考方式。\n\n对于 AI 创作者：\n\n- “使用什么工具”属于战术；\n- “为哪类用户解决什么问题”属于策略；\n- “发布一条视频”属于战术；\n- “通过连续内容验证用户需求”属于策略；\n- “建立知识库”属于战术；\n- “让资料持续转化为判断和内容”才是策略。\n\n文章中部分高风险建议，例如通过承担超出承受能力的支出来制造压力，不适合直接照做。可以保留其“主动建立约束”的原则，但应采用可逆、低风险方式，例如公开发布计划、限定实验周期或设置交付日期。\n\n**如何应用：**\n\n为接下来三条 AI 知识库视频设置同一个战略问题：\n\n> 哪一类知识管理困难，用户愿意持续寻找解决方案？\n\n三条视频分别验证不同痛点：\n\n1. 收藏很多资料，但之后找不到；\n2. AI 能检索资料，但回答缺少出处；\n3. 知识库内容越来越多，反而无法判断该读什么。\n\n不要先决定产品形态。先比较播放完成率、收藏、评论问题和私信，再判断哪一个痛点值得继续。\n\n原始来源：[Dan Koe — The Art Of Strategic Thinking](https://letters.thedankoe.com/p/strategy-vs-tactics-how-to-actually)\n\n---\n\n### 2. Maze：《The Future of User Research Report 2026》\n\n**核心观点：**\n\nMaze 调研了近 500 名研究、设计和产品从业者。报告显示：\n\n- 69% 的研究者已经在工作流中使用 AI；\n- 认为研究对各层级商业战略都很重要的组织，从 2025 年的 8% 增加到 2026 年的 22%；\n- 66% 的受访者表示研究需求增加；\n- 受访者认为理解情绪和细微差别、伦理判断、提出正确问题仍高度依赖人类参与。\n\n报告的核心判断是：自动化正在成为基础能力，人的判断力成为差异化能力。AI可以替代转录、整理和初步综合等重复工作，但无法自动决定企业现在最应该研究什么，以及观察结果应该如何改变产品决策。\n\n**值得学习的部分：**\n\n报告区分了“更多研究”与“更好的决策”。当研究工具普及后，如果缺少统一方法、资料存储和质量标准，团队得到的可能不是洞察，而是更多相互矛盾的信息。\n\n研究工作的价值正在从执行访谈转向：\n\n- 提出正确问题；\n- 识别信号与噪声；\n- 连接用户需求和商业目标；\n- 把研究结果转化成可执行决策；\n- 建立持续学习机制。\n\n**如何应用：**\n\n把评论区和私信建立成轻量用户研究库，但不要只保存原话。每条反馈记录五个字段：\n\n1. 用户正在完成什么任务；\n2. 当前使用什么替代方案；\n3. 在哪个步骤遇到困难；\n4. 困难造成什么后果；\n5. 用户已经尝试过什么。\n\n每积累十条反馈，进行一次归类。只有当相似任务和痛点重复出现时，才把它提升为选题系列或产品假设。\n\n原始来源：[Maze — The Future of User Research Report 2026](https://maze.co/resources/user-research-report/)\n\n## 今日行动建议\n\n今天完成一条 45—60 秒的观点视频，主题是：\n\n> AI 工具越强，创作者越需要提供“人类证据”。\n\n具体执行：\n\n1. **开头判断，10 秒：**  \n   “多个平台开始限制批量 AI 内容。问题并不是用了 AI，而是内容没有真实判断和证据。”\n\n2. **给出事实，15 秒：**  \n   列出 YouTube、Substack 或 Snapchat 的一项规则变化，并在画面中展示来源页面。\n\n3. **展示一个对比，20 秒：**  \n   同一主题分别展示：\n   - 只有 AI 总结的版本；\n   - 加入实际操作结果、失败过程或适用边界的版本。\n\n4. **给出结论，10 秒：**  \n   “AI 可以负责整理和表达，但创作者必须提供无法批量复制的观察。”\n\n5. **结尾收集反馈：**  \n   询问观众：“你判断一条 AI 内容是否值得信任时，最看重什么？”\n\n发布后只记录四项数据：三秒留存、播放完成率、收藏数、评论中重复出现的问题。明天根据反馈决定，是继续讨论平台规则，还是深入讲“如何为 AI 内容增加可信证据”。\n\n本次行动同时完成闭环中的四步：\n\n信息输入 → 提炼判断 → 发布内容 → 收集用户反馈。\n\n原始来源：[Business Insider — Social platforms cracking down on AI slop](https://www.businessinsider.com/ai-slop-substack-youtube-tiktok-pinterest-facebook-instagram-threads-2026-7)\n<!-- DAILY_BRIEF_END -->";

const tasks = [
  {
    number: "01",
    title: "完成一条 45–60 秒观点视频",
    body: "直接使用云端早报给出的主题：AI 工具越强，创作者越需要提供“人类证据”。今天不再扩充数据库、不再重搭流程，只做出第一版。",
    first: "写下开头判断，并选择一项可展示的真实证据",
    time: "45–60 分钟",
    tone: "mint",
  },
  {
    number: "02",
    title: "只加入一份无法批量复制的证据",
    body: "从实际操作录屏、失败过程、来源页面、用户原话或前后对比中只选一种。目标不是让内容显得更丰富，而是让观众知道判断从哪里来。",
    first: "截取一个真实操作或来源画面",
    time: "20 分钟",
    tone: "blue",
  },
  {
    number: "03",
    title: "发布后只记录四项反馈",
    body: "记录三秒留存、播放完成率、收藏数和评论里重复出现的问题。一次结果只回答一个有限问题，不把播放量变成对个人能力的总判决。",
    first: "结尾问：你判断 AI 内容是否可信时最看重什么？",
    time: "发布后 15 分钟",
    tone: "peach",
  },
];

const learningResources = [
  {
    type: "YouTube 视频（官方）",
    title: "Create community on #Shorts",
    meta: "时长未核验 · 英语 · 适合开始用评论做内容反馈的创作者",
    intro: "YouTube 官方帮助页推荐的 Shorts 社群视频，重点是用直接问题、评论与后续回应建立真实互动。",
    why: "今天的内容任务最后一步不是继续优化脚本，而是提出一个观众能够回答的问题，并把评论变成下一轮内容证据。这项资源与当天的反馈闭环直接相关。",
    focus: [
      "如何在视频中分享真实过程，而不只呈现精修结果。",
      "如何提出直接、具体、观众容易回答的问题。",
      "怎样把评论转成后续选题，而不是把互动只当作数字。",
    ],
    action: "发布今天的视频时只设置一个具体问题；明天从评论中摘出一个重复问题，作为下一条内容的假设。",
    boundary: "这是常青的官方创作者教育资源，不是昨日新闻；视频语言为英语，完整时长未取得可靠证据，因此不猜测时长。",
    source: "https://www.youtube.com/watch?v=cGo2HCCea_g",
    sourceLabel: "YouTube 官方视频",
  },
];

const xiaobot = {
  title: "用一张“价值罗盘”，将你的视频换成可变现的信任资产",
  author: "姜胡说",
  published: "2025-09-29 23:53:20",
  source: "https://xiaobot.net/post/0f079770-4b4b-44da-a02d-b8b5b64db43b",
};

const weather = { location: "南宁", condition: "雨", temperature: "24–30℃", icon: "🌧️" };

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
const industryStories = splitSubsections(cloudSections.get("行业重要新闻") ?? "");
const productObservations = splitSubsections(cloudSections.get("产品观察") ?? "");
const deepReads = splitSubsections(cloudSections.get("深读推荐") ?? "");
const actionAdvice = cloudSections.get("今日行动建议") ?? "";

function SourceLink({ href, label }: { href: string; label: string }) {
  return <p><a className="archive-link" href={href}>阅读原始来源：{label} ↗</a></p>;
}

export default function Home() {
  return (
    <main data-brief-date={briefDate}>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="返回顶部"><span className="brand-dot" />蔓蔓的早课</a>
        <div className="top-actions">
          <button className="menu-button" type="button" aria-label="打开阅读目录" aria-controls="content-menu" aria-expanded="false" data-menu-button><span /><span /><span /></button>
          <details className="date-picker">
            <summary aria-label="选择简报日期"><span className="calendar-symbol" aria-hidden="true">▦</span><span>{briefDate.replaceAll("-", ".")}</span><span className="chevron">⌄</span></summary>
            <nav className="date-list" data-archive-list="true" aria-label="选择过往简报日期"><a href="?date=2026-08-10" aria-current="page">2026年8月10日</a></nav>
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
              <div className="nav-sub">{industryStories.map((item, i) => <a href={"#story-" + (i + 1)} key={item.title}>{i + 1}. {cleanTitle(item.title)}</a>)}{productObservations.map((item, i) => <a href={i === 0 ? "#product-observation" : "#product-observation-" + (i + 1)} key={item.title}>{item.title}</a>)}<a href="#early-action">今日行动建议</a></div>
            </details>
            <details className="nav-group" data-nav-group>
              <summary className="nav-title"><span className="nav-icon icon-planet">✦</span><span>姜胡说</span><span className="nav-chevron">⌄</span></summary>
              <div className="nav-sub"><a href="#planet-status">昨日知识星球状态</a><a href="#xiaobaotong-1">小报童：价值罗盘</a></div>
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
              <div className="nav-sub"><a href="#hotlist">查看 2026 年 8 月 9 日完整榜单</a></div>
            </details>
          </nav>
          <p className="sidebar-note">点小标题直达正文 · 折叠内容会自动展开</p>
        </aside>

        <div className="page" id="top">
          <section className="hero">
            <div className="date-block"><div className="date-day">10</div><div><p className="date-month">2026 · 08</p><p className="date-week">星期一</p></div></div>
            <div className="hero-copy">
              <p className="eyebrow">TODAY&apos;S DIRECTION</p>
              <h1>不要再扩充数据库，<br />今天让一条内容进入真实反馈。</h1>
              <p className="judgment">昨天继续收集资料，也完成了一次真实需求拆解，却仍没有留下内容产出。今天只做一条 45–60 秒视频，加入一份人类证据并发布，用观众反馈决定下一步。</p>
            </div>
            <div className="hero-weather" aria-label={weather.location + "当天天气：" + weather.condition + "，" + weather.temperature}>
              <span className="weather-icon">{weather.icon}</span>
              <span className="weather-copy"><strong>{weather.condition}</strong><small>{weather.location} · {weather.temperature}</small></span>
            </div>
          </section>

          <section className="section" id="today">
            <div className="section-heading compact-heading"><div><p className="eyebrow">THREE PRIORITIES</p><h2>今天只做三件事</h2></div><p>AI 建议：一条内容、一份证据、一次反馈</p></div>
            <div className="task-grid">{tasks.map((task, i) => <article className={"task-card " + task.tone} id={"task-" + (i + 1)} key={task.number}>
              <span className="task-number">{task.number}</span><h3>{task.title}</h3><p>{task.body}</p>
              <div className="task-meta"><span>第一步</span><strong>{task.first}</strong></div><div className="task-time">{task.time}</div>
            </article>)}</div>
            <div className="time-block-heading" id="schedule-heading"><div><p className="eyebrow">TIME BLOCKS</p><h3>今日时间块</h3></div><p>只排交付链路，保留恢复与天气缓冲</p></div>
            <section className="schedule" id="schedule">
              <div><span>开始前</span><p>正常吃饭、补水，确认脚部伤口；南宁有雨，不安排游泳或长时间步行。关闭资料库与课程页面，只保留早报原始来源和录制工具。</p></div>
              <div><span>连续 60–80 分钟</span><p>写开头判断、选择一份真实证据、直接录制第一版。只修复最影响理解的一处，不重搭账号定位、知识库或自动化系统。</p></div>
              <div><span>发布后</span><p>提出一个具体问题，记录三秒留存、完成率、收藏与重复评论。完成记录后停止工作，不用更多输入抵消发布后的不确定感。</p></div>
            </section>
            <details className="brief-item" id="risk">
              <summary><span className="brief-index">风险</span><span className="brief-main"><span className="pill">今日边界</span><strong>三个会把交付重新变成准备的触发点</strong><span>只识别，不新增任务</span></span><span className="plus">＋</span></summary>
              <div className="brief-content">
                <p><strong>继续整理数据库：</strong>昨日日记已经明确写下资料库变得臃肿、本人尚未产出。今天禁止以分类、迁移或补资料代替视频。</p>
                <p><strong>把一条视频升级成完整战略：</strong>今天只验证“人类证据能否让观点更可信”，不同时验证账号定位、产品形态和商业模式。</p>
                <p><strong>把一次数据变成人格判决：</strong>一次发布只回答一个有限问题。数据低不等于没有能力，数据高也不等于方法已经稳定。</p>
              </div>
            </details>
          </section>

          <section className="section" id="briefing">
            <div className="section-heading"><div><p className="eyebrow">DAILY INFORMATION</p><h2>每日资讯</h2></div><p>完整搬运云端“26.8每日早报” · 不删减</p></div>
            <div className="section-context">
              <p><strong>简报日期：2026 年 8 月 10 日；统计范围：2026 年 8 月 9 日。</strong> 云端正文状态 complete，读取无截断。</p>
              <p><strong>归因说明：</strong>以下“今日核心判断”、分析、产品判断、用户洞察及原文中的“给我的启发”均为云端早报的 AI 分析与建议，不代表用户本人已经写下或认可这些理解。</p>
              <div className="cloud-core">{renderMarkdown(coreJudgment, "core")}</div>
            </div>
            <div className="section-heading compact-heading"><div><p className="eyebrow">INDUSTRY NEWS</p><h2>行业重要新闻：{industryStories.length} 条</h2></div><p>所有背景、判断、边界与原始链接完整保留</p></div>
            <div className="brief-list">{industryStories.map((story, i) => <details className="brief-item" id={"story-" + (i + 1)} key={story.title}>
              <summary><span className="brief-index">{String(i + 1).padStart(2, "0")}</span><span className="brief-main"><span className="pill">行业动态</span><strong>{cleanTitle(story.title)}</strong><span>点击展开云端早报完整原文</span></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(story.body, "story-" + i)}</div>
            </details>)}</div>
            <div className="section-heading compact-heading"><div><p className="eyebrow">PRODUCT OBSERVATION</p><h2>产品观察</h2></div><p>{productObservations.length} 个产品，逐项完整保留</p></div>
            <div className="brief-list">{productObservations.map((item, i) => <details className="brief-item" id={i === 0 ? "product-observation" : "product-observation-" + (i + 1)} key={item.title}>
              <summary><span className="brief-index">产品 {i + 1}</span><span className="brief-main"><span className="pill">产品观察</span><strong>{item.title}</strong><span>点击展开五个产品问题与完整分析</span></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(item.body, "product-" + i)}</div>
            </details>)}</div>
            <details className="brief-item" id="early-action">
              <summary><span className="brief-index">行动</span><span className="brief-main"><span className="pill">今日行动建议</span><strong>完成一条 45–60 秒观点视频</strong><span>点击展开云端早报完整执行步骤</span></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(actionAdvice, "action")}</div>
            </details>
          </section>

          <section className="section" id="planet">
            <div className="section-heading"><div><p className="eyebrow">JIANG HUSHUO</p><h2>姜胡说</h2></div><p>昨日知识星球状态与一篇相关小报童文章</p></div>
            <div className="section-context" id="planet-status">
              <p><strong>归档区间：</strong>2026-08-08 23:30 至 2026-08-09 23:30。</p>
              <p><strong>昨日无星主更新。</strong>本栏目不读取当天内容，也不使用更早的星主原文补位。</p>
              <SourceLink href="/daily-briefing/knowledge/2026-08-09/26-08-09姜胡说知识星球.md" label="查看 8 月 9 日原始归档" />
            </div>
            <details className="planet-card" id="xiaobaotong-1">
              <summary><div className="avatar">读</div><div><span className="planet-time">小报童 · {xiaobot.author} · {xiaobot.published}</span><strong>{xiaobot.title}</strong><span>阅读导引为 AI 建议，文章原文不在网页转载</span></div><span className="open-label">导引</span></summary>
              <div className="planet-content"><div className="original">
                <span>AI 阅读导引</span>
                <p>昨天已经接触到一个真实用户，也写下“需求 ≠ 可解决需求 ≠ 可商业化需求”，但今天最需要的不是再积累商业理论，而是让一条内容获得观看与信任反馈。这篇文章可以帮助区分“播放量”与“信任资产”。</p>
                <p><strong>阅读重点：</strong>先看“时间价值 × 信任价值”的两条轴，再看“先定位，然后只改一招”。今天只选一个指标问题，不同时优化钩子、节奏、定位和变现。</p>
                <p><strong>阅读问题：</strong>这条 45–60 秒视频要让观众留下哪一种可观察痕迹，才能说明它不只是被刷到，而是真的帮助观众建立了判断？</p>
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
                  <p><strong>事实：</strong>8 月 9 日凌晨约 2:30 入睡，6 点多短暂醒来，随后继续睡到 12 点。下午游泳；脚部仍有伤，因此最后一小时没有继续下水。</p>
                  <p><strong>真实用户接触：</strong>主动联系一位想学 AI 的老师，拆解了活动采购、报销和学生参与度问题；随后发现对方没有个人电脑，学校设备也无法运行相关工具。这使需求筛选多出一个现实变量：设备与组织条件。</p>
                  <p><strong>完成与未完成：</strong>完成需求拆解、知识星球与逐字稿资料整理；日记明确写下数据库变得臃肿、本人尚未产出、上周目标尚未完成。日记没有记录完成或发布视频，因此不把内容产出写成已完成。</p>
                  <p><strong>用户原文：</strong>“需求 ≠ 可解决需求 ≠ 可商业化需求。”“能力不是人格总判决，而是在明确条件下，能不能重复产生某个结果。”来源：<code>2.26年日记/8月日记/2026-08-09.md</code>。</p>
                  <p className="advice"><strong>AI 建议：</strong>今天把需求研究从笔记推进到一次公开实验：发布一条带真实证据的视频，并记录观众实际反馈。</p>
                </div>
              </details>
              <details className="review-card" id="seven-day-trend">
                <summary>近七天趋势</summary>
                <div className="trend-list">
                  <div><strong>重复目标</strong><p>持续想成为 AI × 内容创作者，也在积累工作流、知识星球、直播笔记、视频逐字稿和用户研究方法。</p></div>
                  <div><strong>重复阻碍</strong><p>自动化故障、继续输入、等待“学习状态”、理论无法落地，以及遇到困难后换方向的冲动，反复阻止第一版进入公开反馈。</p></div>
                  <div><strong>出现的新证据</strong><p>8 月 9 日第一次把陌生老师的采购、报销与活动参与问题拆开，并识别到没有个人电脑会让方案无法落地。这比继续想象用户更接近真实研究。</p></div>
                  <div><strong>当前最小闭环</strong><p>把一个公开事实转成观点 → 加入真实操作或来源证据 → 发布 → 记录四项反馈 → 用一个重复问题决定下一条内容。</p></div>
                </div>
              </details>
              <details className="review-card diagnosis" id="action-diagnosis">
                <summary>AI 执行力诊断 / 建议</summary>
                <div>
                  <p><strong>证据：</strong>昨日日记写下“感觉我的数据库有点臃肿了”“我自己都还没有产出”“我上周定的目标都还没做”，同时继续同步知识星球和大量视频逐字稿。</p>
                  <p><strong>行为模式：</strong>按 dbs-action 框架，这同时出现信号 A“执行模拟器”和信号 D“知识上瘾”。系统、资料和流程都在变完整，但真正需要接受观众检验的内容仍未交付。</p>
                  <p><strong>AI 诊断：</strong>当前卡点不是没有选题或资料，而是持续输入能够保护“如果我真正开始，应该能做好”的可能性；一旦发布，表达能力、用户理解和市场反馈都会变成可观察结果。你回避的更可能是这种有限检验，而不是工作本身。</p>
                  <p><strong>阿德勒式处方：</strong>今天帮助一个具体观众识别“AI 内容为什么不可信”。用一份来源页面或真实操作作为证据，把判断讲清楚。观众能否复述、是否提出下一问，是今天的社会性证据。</p>
                  <p><strong>一句话处方：</strong>你缺的不是下一份资料，而是让现有判断承担一次被观众听不懂的风险。</p>
                  <p><strong>适用边界：</strong>自动化故障和设备限制是真实环境问题；本诊断只针对已经具备材料后仍继续扩充输入、没有交付第一版的部分。</p>
                  <p><strong>免责声明：</strong>这是基于 dbs-action 框架与昨日日记证据生成的 AI 诊断 / 建议，不是心理咨询或医疗诊断。</p>
                </div>
              </details>
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
            <div className="section-heading"><div><p className="eyebrow">HOT LIST</p><h2>热点榜单</h2></div><p>2026 年 8 月 9 日完整榜单</p></div>
            <a className="hotlist" href="/daily-briefing/hotlist/2026-08-09.html" aria-label="打开热点榜单"><span>昨日榜单</span><strong>查看 2026 年 8 月 9 日完整榜单</strong><span className="arrow">↗</span></a>
          </section>

          <footer><p>不再用更多资料延迟检验，<br />让一条内容先进入现实。</p><span>每日 08:30 更新 · 完整内容折叠保存</span></footer>
        </div>
      </div>
    </main>
  );
}
