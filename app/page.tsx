import { Fragment, type ReactNode } from "react";

const briefDate = "2026-08-11";
const cloudBriefMarkdown = "<!-- DAILY_BRIEF_START -->\n```yaml\nschema_version: 1\nbrief_date: 2026-08-11\ncoverage_date: 2026-08-10\nstatus: complete\ntitle: 产品与创作每日简报\n```\n\n# 产品与创作每日简报｜2026 年 8 月 11 日\n\n## 今日核心判断\n\n今天最值得关注的变化，可以概括成两句话：\n\n> AI 的价值正在从“提供答案”转向“改造完整工作流”。\n\n> 创作者的价值正在从“获得一次播放”转向“持续获得有效互动”。\n\nOpenAI公布的财务团队案例显示，真正有效的 AI 应用不是让模型替人写一份报告，而是重新设计从数据、分析、审批到决策的全过程。Octopus Deploy 的 MCP 更新也体现了同一趋势：MCP 不再只帮助 Agent 查询系统，而是开始允许 Agent 创建真实部署流程。\n\n这意味着，AI 时代更稀缺的不是答案本身，而是 know-how：\n\n- 知道应该解决哪个问题；\n- 知道需要连接哪些数据和工具；\n- 知道哪些步骤可以自动化；\n- 知道什么结果才算完成；\n- 知道什么时候必须由人判断。\n\n创作者平台的逻辑也在变化。YouTube提高 Shorts 广告分成门槛，同时增加购物、品牌合作和趋势激励，说明平台不希望只奖励一次性流量，而是希望创作者持续产生互动和商业价值。\n\n对于 AI × 内容创作，内容不应只是终点。更有效的结构是：\n\n真实任务 → AI 实验 → 提炼 know-how → 内容表达 → 用户反馈 → 下一次实验或产品机会。\n\n## 指定博主动态\n\n## 行业重要新闻\n\n### 1. YouTube 调整创作者变现规则，Shorts 一次性爆款更难直接获得广告收入\n\n**发生了什么：**\n\nYouTube 于 2026 年 8 月 10 日公布 YouTube Partner Program 的重大调整，这是该项目自 2018 年以来第一次显著修改规则。\n\n从 2027 年 2 月 1 日起，创作者若希望获得 Shorts 广告和订阅收入分成，需要在最近九十天内取得一千万次“合格 Shorts 播放”。暂时未达到门槛的频道仍然可以保留 YPP 身份，并继续从长视频获得收益；当 Shorts 播放量再次达到门槛时，相关分成会自动恢复。\n\nYouTube同时表示，将增加广告之外的激励形式，包括：\n\n- YouTube Shopping 奖励；\n- 品牌合作激励；\n- 发起并推动平台趋势的奖励；\n- 根据阶段性增长目标发放奖金。\n\n此外，Premium Lite 将扩展到所有提供 YouTube Premium 的国家和地区。相关订阅收入池会依据观看时长和播放量分配，创作者再从中获得长视频 55%、Shorts 45% 的收入分成。\n\n**为什么重要：**\n\nYouTube正在区分两类创作者：\n\n- 偶然获得一次爆款的内容生产者；\n- 能够持续创造观看、讨论和商业行为的稳定创作者。\n\n这意味着，播放量仍然重要，但播放量不再是平台唯一愿意付费的结果。购物转化、品牌合作、用户讨论和持续更新正在进入创作者价值评估体系。\n\n**产品思维：**\n\n这是一次典型的平台激励机制调整。\n\n如果平台只按照播放量付费，创作者会倾向追逐热门模板、重复内容和短期刺激；当平台把收入与互动、趋势创造和商业转化绑定，创作者的行为也会逐渐改变。\n\n平台规则本质上是一种产品设计：平台通过奖励什么，决定生态会生产什么。\n\n**用户洞察：**\n\n创作者最直接的目标可能是“尽快变现”，但平台更关心用户是否愿意留下、参与和消费。一次爆款证明内容抓住了注意力，持续互动才证明创作者建立了稳定的用户关系。\n\n**给我的启发：**\n\n早期做 AI 知识类内容，不必把“达到平台广告分成门槛”作为第一阶段目标。更值得验证的指标是：\n\n- 用户是否收藏；\n- 是否提出具体问题；\n- 是否愿意尝试视频中的方法；\n- 是否回来观看后续内容；\n- 是否出现相似需求。\n\n如果一条只有几百播放的视频带来三个具体问题，它对后续选题和产品探索的价值，可能高于一条没有任何反馈的高播放视频。\n\n原始来源：[YouTube — New opportunities to earn and changes to the YouTube Partner Program](https://blog.youtube/news-and-events/youtube-partner-program-updates-2027-new-opportunities-earn/)\n\n---\n\n### 2. OpenAI 公布“AI 原生财务团队”方法：不要自动化旧步骤，要围绕决策重做流程\n\n**发生了什么：**\n\nOpenAI CFO Sarah Friar 于 2026 年 8 月 10 日分享了其财务团队采用 AI 的五项经验：\n\n1. 先让团队获得工具，再用真实任务创造使用理由；\n2. 围绕最终决策重新设计完整工作流；\n3. 让最了解业务问题的人参与构建工具；\n4. 用权限、审批、来源和责任机制控制风险；\n5. 衡量 AI 完成了多少可靠工作，而不是只统计席位和 Token。\n\n案例包括 IR-GPT。该工具只使用经过批准的投资者关系材料，可以在数秒内生成尽调问题的初稿；但财务团队仍会核对来源、补充语境、检查不同投资者收到的信息是否一致，并承担最终责任。\n\n另一名没有编程经验的财务人员使用 Codex 建立了一套预测工具，把月度广告预测拆分成每周和每日计划，并考虑工作日、节假日和已批准模型。\n\nOpenAI同时提出“零日关账”和持续预测的长期目标，但明确表示仍在建设过程中，并未宣称已经完全实现。\n\n**为什么重要：**\n\n很多 AI 自动化只是在原有流程中增加一个生成步骤，例如：\n\n资料 → 人工整理 → AI 写报告 → 人工复制 → 做成 PPT。\n\n这种做法只能节省局部时间。OpenAI案例强调的是从最终决策倒推：\n\n决策需要什么证据 → 证据来自哪里 → 哪些步骤可以自动完成 → 谁负责审批 → 如何追踪改动。\n\n**产品思维：**\n\n设计 AI 工作流时，正确的起点不是“这个任务能不能交给 AI”，而是：\n\n> 最终需要做出什么决定？\n\n确定决策后，再绘制数据、工具、审批和交接流程。AI可以负责检索、对账、生成解释和发现异常，但最终结果需要和可靠来源、责任人及审批记录连接。\n\n**用户洞察：**\n\n业务人员通常不是因为缺少 AI 工具而无法提高效率，而是不知道如何把隐性的工作经验写成明确规则。\n\n例如，“帮我整理资料”过于模糊；“只使用这三个来源，列出冲突，给每项结论附出处，无法确认的部分等待人工决定”才是一条可执行工作流。\n\n**给我的启发：**\n\n所谓 know-how，并不只是拥有别人不知道的信息。它更常表现为：\n\n- 知道应该检查什么；\n- 知道哪些信息可信；\n- 知道例外情况如何处理；\n- 知道什么结果可以直接使用；\n- 知道什么结果必须重新核验。\n\n制作 AI 工作流内容时，可以重点展示这些判断规则，而不只是展示工具自动生成了什么。\n\n原始来源：[OpenAI — What building an AI-native finance function taught me](https://openai.com/index/building-an-ai-native-finance-function/)\n\n---\n\n### 3. Octopus Deploy 的 MCP 从“查询接口”发展为“完整部署执行层”\n\n**发生了什么：**\n\nOctopus Deploy 于 2026 年 8 月 10 日展示了一套完全通过 MCP 创建 Kubernetes 部署流程的方法。\n\n此前，其 MCP Server 主要帮助 AI Agent 查询已有项目和部署信息。现在，Agent可以在一个空白 Octopus Deploy 环境中创建：\n\n- 生命周期；\n- 部署目标；\n- 项目和发布；\n- QA、负载测试、预发布和生产环境；\n- 自动晋级与人工审批规则。\n\nOctopus在示例中使用 Claude Code，但表示其他支持 MCP 的 Agent 也可以采用相似方式连接。\n\n权限分为三个级别：\n\n- 只读模式；\n- 默认读写，但不能删除；\n- 明确开启删除权限。\n\n即使具备写入或删除权限，相关操作默认仍会显示确认提示。Octopus还建议为 Agent 单独创建 API Key 和服务账号，使 Agent 行为可以与人工操作分开审计。\n\n**为什么重要：**\n\n这代表 MCP 的用途正在发生变化：\n\n- 第一阶段：让 AI 读取系统信息；\n- 第二阶段：让 AI 调用单个功能；\n- 第三阶段：让 AI 跨多个功能创建完整业务结果。\n\n当 MCP 进入第三阶段，产品重点就不再只是工具数量，而是权限、确认、审计、回滚和环境隔离。\n\n**产品思维：**\n\nAgent产品需要提供“渐进式权限”，而不是只设置一个总开关。\n\n用户可以先让 Agent 读取信息，再允许创建或修改内容，最后才考虑删除和无人值守执行。每次扩展权限，都应该建立在前一阶段已经稳定的基础上。\n\n**用户洞察：**\n\n用户希望 Agent 自动完成任务，但同时担心它修改错误的数据。最符合用户心理的设计不是要求用户在“完全自动”和“完全手动”之间二选一，而是允许用户逐步建立信任。\n\n**给我的启发：**\n\n搭建个人自动化时也可以采用同样的三级结构：\n\n1. 只读取资料并提出建议；\n2. 生成草稿，但必须人工确认后保存；\n3. 在成熟、可逆的场景中自动执行。\n\n例如，日报系统可以自动抓取和整理信息，但发布选题、形成个人观点或删除知识库资料，应保留人工确认。\n\n原始来源：[Octopus Deploy — End-to-end Kubernetes deployments with the Octopus Deploy MCP server](https://octopus.com/blog/onboarding-with-octopus-deploy-mcp)\n\n---\n\n### 4. Meta 提出“个人超级智能”路线：AI 不只替机构自动化，也应该提高个人创造能力\n\n**发生了什么：**\n\nMark Zuckerberg 于 2026 年 8 月 10 日发表《The Future is for Everyone》，主张把高级 AI 能力广泛提供给个人，而不是让它只掌握在少数企业、政府或机构手中。\n\n文章提出，AI的发展方向可以分为两种：\n\n- 主要替机构自动化现有知识工作；\n- 主要增强个人学习、创造、创业和解决问题的能力。\n\nMeta认为，如果个人获得能够持续协助健康、职业、学习和创造的 AI Agent，小团队和个人可能具备过去只有大型组织才拥有的执行能力。\n\n这是一份 Meta 对未来的立场和战略主张，并不是已经得到验证的就业预测。文中关于 AI 将创造更多工作和繁荣的判断，仍取决于模型能力、计算资源、平台规则、社会分配和现实采用情况。\n\n**为什么重要：**\n\n不同 AI 公司开始用不同的“价值叙事”定义产品：\n\n- 企业效率；\n- 自动化岗位；\n- 个人助理；\n- 创造与发明；\n- 安全可控的专业 Agent。\n\n这些叙事将直接影响产品服务谁、收集什么数据、开放哪些能力，以及使用者对 AI 的期待。\n\n**产品思维：**\n\n“个人超级智能”要成立，不能只有一个通用聊天框。它需要长期记忆、个人上下文、工具连接、权限控制和持续反馈。\n\n真正的个人 Agent，需要了解用户正在推进的项目，并能把分散的日记、资料、任务和实验转化为下一步行动。\n\n**用户洞察：**\n\n个人用户并不一定需要一个“什么都能做”的超级 Agent。更现实的需求通常是：它能否记住长期目标，减少重复解释，并帮助用户把想法推进到下一步。\n\n**给我的启发：**\n\n个人 AI 系统不应该只积累更多资料，还需要保存四类状态：\n\n- 当前目标；\n- 已经完成的动作；\n- 得到的结果；\n- 下一项待验证假设。\n\n这四类信息比大量未经加工的收藏，更能帮助 AI 参与持续项目。\n\n原始来源：[Meta — The Future is for Everyone](https://about.fb.com/news/2026/08/the-future-is-for-everyone/)\n\n---\n\n### 5. 创作者经济开始讨论“拍摄同意”：真实感不等于可以忽视他人边界\n\n**发生了什么：**\n\nVogue Business 于 2026 年 8 月 10 日报道，随着公共场所、商店和活动中的短视频拍摄增加，普通人、店铺和品牌开始反对自己未经同意成为创作者内容的一部分。\n\n一家位于 Nantucket 的商店因为张贴“No Influencers”标识引发讨论，并在一周内增加约 1.1 万名 Instagram 关注者。文章同时指出，越来越多品牌开始在创作者合作要求中加入：\n\n- 尊重拍摄环境；\n- 必要时获得许可；\n- 避免拍到可识别的顾客和员工；\n- 遵守场地规定；\n- 明确隐私和知识产权责任。\n\n部分高端品牌更倾向在私人场地、闭店后、创作者住所或其他可控环境中拍摄，实现文章所称的“受控真实性”。\n\n**为什么重要：**\n\n自媒体行业通常强调真实、即时和随手记录，但当内容生产成为商业活动后，拍摄行为会影响其他人的隐私、工作和消费体验。\n\n创作者的信誉不仅由表达内容决定，也由内容的生产过程决定。\n\n**产品思维：**\n\n创作者工具可以把隐私检查加入发布流程，例如：\n\n- 自动识别人脸和车牌；\n- 提醒拍摄者确认授权；\n- 自动模糊无关人物；\n- 保存授权记录；\n- 在发布前显示风险提示。\n\n这类功能不是单纯的合规负担，也可以成为创作者降低争议和保护品牌合作的基础设施。\n\n**用户洞察：**\n\n观众喜欢自然感，但不代表接受创作者把其他人当成无偿背景。真实性需要同时满足两个条件：\n\n- 内容没有被过度包装；\n- 生产过程没有侵害参与者和旁观者。\n\n**给我的启发：**\n\n拍摄 AI 内容时，如果画面出现朋友、用户聊天记录、账号名称或第三方资料，应在发布前检查：\n\n- 对方是否同意出现；\n- 是否需要隐藏姓名和头像；\n- 截图是否包含私人信息；\n- 案例细节是否足以识别当事人；\n- 引用内容是否保留原始语境。\n\n这也是“把信誉看得重要”的一项具体执行标准。\n\n原始来源：[Vogue Business — The Meaning of Consent in the Age of Content](https://www.vogue.com/article/the-meaning-of-consent-in-the-age-of-content)\n\n## 产品观察\n\n### 产品一：YouTube Partner Program\n\n**1. 它服务谁？**\n\n希望通过广告、订阅、购物和品牌合作获得收入的视频创作者，以及需要稳定内容供给和广告环境的YouTube平台本身。\n\n**2. 用户原来的解决方案是什么？**\n\n创作者过去更容易把播放量作为唯一增长目标：追热门、增加更新频率、复制成功格式，再等待广告分成。\n\n平台则主要通过资格门槛、内容政策和广告分成管理创作者生态。\n\n**3. 它解决了哪个痛点？**\n\n只依赖播放量会产生三个问题：\n\n- 偶然爆款与稳定创作能力难以区分；\n- Shorts播放波动大，收入难以预测；\n- 创作者为了播放量生产重复、刺激但缺少长期价值的内容。\n\n新的机制尝试通过更高的 Shorts 分成门槛，以及购物、品牌和趋势奖励，把创作者收入与更多有效结果连接起来。\n\n**4. 为什么现在出现？**\n\n短视频供给和创作者数量持续增加，AI进一步降低了生产成本。平台需要控制低质量供给，同时证明其创作者生态可以持续产生广告、订阅和交易价值。\n\n**5. 如果我要做类似产品，可以学习什么？**\n\n产品会得到它所奖励的行为。\n\n设计创作者工具或社区产品时，不要只奖励发布数量。可以同时奖励：\n\n- 获得有效回复；\n- 帮助用户完成任务；\n- 用户复访；\n- 内容被收藏和再次使用；\n- 创作者根据反馈进行更新。\n\n原始来源：[YouTube — New opportunities to earn and changes to the YouTube Partner Program](https://blog.youtube/news-and-events/youtube-partner-program-updates-2027-new-opportunities-earn/)\n\n---\n\n### 产品二：Octopus Deploy MCP Server\n\n**1. 它服务谁？**\n\n希望使用 AI Agent 管理软件部署流程，同时要求权限、审批和审计能力的开发团队与平台工程团队。\n\n**2. 用户原来的解决方案是什么？**\n\n工程师需要在部署平台界面中手动创建环境、生命周期、项目、目标和发布规则，或者编写脚本及基础设施配置。\n\n**3. 它解决了哪个痛点？**\n\n部署流程包含大量相互关联的配置。MCP Server允许用户用自然语言说明目标，由 Agent 跨多个工具完成配置，再通过界面检查结果。\n\n**4. 为什么现在出现？**\n\n模型已经具备更强的工具调用和长任务执行能力；MCP则提供了标准化连接方式。两者结合后，Agent可以从辅助查询进入真实执行。\n\n与此同时，执行能力越强，权限和审计的重要性越高，因此产品必须同时提供服务账号、确认提示、操作记录和不同权限级别。\n\n**5. 如果我要做类似产品，可以学习什么？**\n\n一个可靠 Agent 产品需要同时设计两条路径：\n\n- 成功路径：如何完成任务；\n- 风险路径：如何限制、确认、发现和恢复错误。\n\n只展示成功路径的 Agent 容易成为演示产品；把失败和权限路径设计清楚，才可能进入真实工作。\n\n原始来源：[Octopus Deploy — End-to-end Kubernetes deployments with the Octopus Deploy MCP server](https://octopus.com/blog/onboarding-with-octopus-deploy-mcp)\n\n## 深读推荐\n\n### 1. 《What building an AI-native finance function taught me》\n\n**核心观点：**\n\nAI转型的单位不应该是单个步骤，而应该是一个完整决策流程。\n\n文章给出的通用框架是：\n\n1. 找到具有实际价值的决策；\n2. 从决策倒推需要的数据和证据；\n3. 标记人工搜索、整理、核对和交接步骤；\n4. 判断哪些步骤适合 AI；\n5. 设定权限、来源和审批责任；\n6. 用结果质量、时间和返工成本衡量价值。\n\n**值得学习的部分：**\n\n其中最有价值的是“衡量每单位智能产生的价值”。购买多少账号、调用多少 Token、生成多少文档，都不能证明 AI 有效。\n\n更合理的问题是：\n\n- AI 是否完成了有意义的工作；\n- 包括审核和返工在内，实际成本是多少；\n- 结果是否达到可使用标准；\n- 是否帮助人更快做出更好的决策。\n\n**如何应用：**\n\n为个人内容工作流建立一个简单评分表。每次使用 AI 后只记录：\n\n- 原任务预计需要多少时间；\n- AI输出后人工修改了多少分钟；\n- 最终结果是否发布或实际使用；\n- 哪个环节仍然需要判断；\n- 下次可以固定成什么规则。\n\n连续记录五次，就能看到真正值得做成 Skill 的步骤。高频、规则稳定、结果可检查的步骤适合自动化；需要重新定义问题和表达个人判断的步骤，应保留人工参与。\n\n原始来源：[OpenAI — What building an AI-native finance function taught me](https://openai.com/index/building-an-ai-native-finance-function/)\n\n---\n\n### 2. 《How agents are transforming work》\n\n**核心观点：**\n\nOpenAI的研究把聊天机器人和 Agent 区分为两种工作单位：\n\n- 聊天机器人处理短暂、独立的单次交互；\n- Agent可以持续数分钟或数小时，调用工具、观察环境并反复修正结果。\n\nOpenAI称，在其抽样个人用户中，截至 2026 年 5 月：\n\n- 80.6% 至少提交过一次被估算为超过三十分钟人工工作量的任务；\n- 70.2% 至少提交过一次超过一小时的任务；\n- 25.6% 至少提交过一次超过八小时的任务。\n\n这些任务时长由模型根据对话记录估算，仅抽取 0.1% 的用户样本，因此应理解为方向性信号，不能视为精确人工工时。\n\n**值得学习的部分：**\n\nAgent能力提高后，人的工作不会只剩“写提示词”。更关键的能力包括：\n\n- 将模糊目标拆成可以验收的任务；\n- 提供足够而不过量的上下文；\n- 设置工具和权限；\n- 中途识别方向错误；\n- 判断最终结果是否可信。\n\n**如何应用：**\n\n下一次使用 Codex 或其他 Agent 时，不要只发送“帮我完成这个项目”。在任务开始前补充四项：\n\n1. 最终交付物；\n2. 可以使用的资料和工具；\n3. 不能修改或不能假设的内容；\n4. 完成后的检查标准。\n\n任务结束后，再记录一次失败点。累计的失败点就是个人 know-how，也是最适合转化成内容或 Skill 的材料。\n\n原始来源：[OpenAI — How agents are transforming work](https://openai.com/index/how-agents-are-transforming-work/)\n\n## 今日行动建议\n\n今天不新增选题，只推进已经准备拍摄的“答案与 know-how”视频。\n\n### 目标\n\n在二十五分钟内完成一条 30—45 秒的可发布初版。主题：\n\n> AI 时代，真正值钱的不是答案，而是知道这个答案什么时候能用。\n\n### 口播结构\n\n**第一段：提出判断，约 8 秒**\n\n“AI现在几秒钟就能给出一个看起来完整的答案，所以真正稀缺的，已经不是答案本身了。”\n\n**第二段：解释 know-how，约 15 秒**\n\n“更值钱的是：知道该问什么、需要哪些资料、怎么判断答案有没有用，以及出了例外应该怎么处理。这些藏在具体工作里的判断，就是 know-how。”\n\n**第三段：加入今天的案例，约 12 秒**\n\n“OpenAI的财务团队也没有把AI生成的答案直接交出去。AI负责找资料和写初稿，人负责检查来源、补充语境，并对结果签字。”\n\n**第四段：开放结尾，约 8 秒**\n\n“所以AI降低的是生成答案的成本，但一个人能不能把答案变成结果，可能会变得更值钱。”\n\n### 执行限制\n\n- 不制作复杂 PPT；\n- 不寻找更多案例；\n- 只使用一个新闻网页截图；\n- 允许口播不流畅，最多重录三次；\n- 拍完立即剪掉停顿并加字幕；\n- 发布前只检查事实、隐私和错别字，不继续修改观点表达。\n\n### 验证标准\n\n今天的完成标准不是播放量，也不是“拍得满意”，而是：\n\n- 视频成功发布；\n- 保留至少一条真实观点；\n- 使用一个可核验案例；\n- 结尾留下可供用户回应的问题。\n\n可以使用的结尾问题：\n\n> “你在工作里，有没有哪一步是AI会给答案，但它不知道这个答案到底能不能用？”\n\n将评论中出现的具体任务保存下来。它们可能成为下一条内容的案例，也可能暴露 AI 仍然无法替代的真实工作 know-how。\n\n原始来源：[OpenAI — What building an AI-native finance function taught me](https://openai.com/index/building-an-ai-native-finance-function/)\n<!-- DAILY_BRIEF_END -->";

const tasks = [
  {
    number: "01",
    title: "完成“答案与 know-how”视频初版",
    body: "直接使用云端早报给出的 30–45 秒口播结构，不补更多案例、不制作复杂 PPT。今天只让一条已经有完整框架的内容进入现实。",
    first: "写下唯一锚点：AI 会给答案，但不知道答案什么时候能用",
    time: "25 分钟",
    tone: "mint",
  },
  {
    number: "02",
    title: "拍摄前写一张预测卡",
    body: "按昨日知识星球的 T-PDCA，只选一个主指标，写下预测区间和一句因果假设。先说明这条视频可能好在哪里，发布后才能真正复盘。",
    first: "只选收藏率、分享率、3 秒跳出率或完播率中的一个",
    time: "10 分钟",
    tone: "blue",
  },
  {
    number: "03",
    title: "发布并留下第一份实验记录",
    body: "最多重录三次，发布前只检查事实、隐私和错别字。发布后记录预测、实际结果和执行偏差，不用一次结果给个人能力下总判决。",
    first: "结尾问：你工作里哪一步是 AI 会给答案，但不知道能不能用？",
    time: "发布后 15 分钟",
    tone: "peach",
  },
];

const learningResources = [
  {
    type: "YouTube 官方教程",
    title: "YouTube Analytics 入门｜用数据检查内容表现",
    meta: "约 15–20 分钟 · 中文页面可切换 · 免费公开 · 适合刚开始做视频实验的人",
    intro: "YouTube 官方帮助教程，完整介绍概览、内容、覆盖面、互动、观众和趋势等分析入口。它教的是如何读取自己已经发布的视频结果，不是课程销售页或工具广告。",
    why: "今天的知识星球原文要求拍摄前先预测主指标，云端早报也要求发布后留下可验证结果。这份教程用于找到实际数据的位置，把“感觉这条视频好不好”变成一次有预测、有结果的实验。",
    focus: [
      "概览、内容、覆盖面、互动和观众标签分别回答什么问题。",
      "先围绕今天唯一的主指标阅读，不同时追踪所有数字。",
      "趋势标签适合寻找后续问题，但不能替代对具体观众反馈的判断。",
    ],
    action: "视频发布前写下一个主指标和预测；数据出现后，只打开对应分析页，记录实际值、偏差和一个可能原因。",
    boundary: "这是一份指标使用教程，不会自动解释因果。一条视频的数据只能形成线索；同样的题目、受众和变量至少重复验证三次，才可能沉淀为规律。",
    source: "https://support.google.com/youtube/answer/9002587?hl=zh-Hans",
    sourceLabel: "YouTube 官方 Analytics 教程",
  },
];

const xiaobot = {
  title: "你报了口才班还是不会说，因为缺少一个锚点",
  author: "姜胡说",
  published: "2026-08-03 17:40:51",
  source: "https://xiaobot.net/post/0fe35cec-f8be-477e-ae8f-59e35ad887c6",
};

const weather = { location: "南宁", condition: "雨", temperature: "24–28℃", icon: "🌧️" };

const planetPosts = [
  {
    "index": "1",
    "author": "大胡子",
    "published": "2026-08-10 17:10",
    "title": "T-PDCA",
    "body": "T-PDCA\n\nT，选题。\n真正决定流量的，是两个甲方：\n平台：要的是「聚集注意力、增加留存、丰富生态」的内容\n用户：要的是提供「功能价值、情绪价值、社交价值」的解决方案\n你的选题必须同时满足两个甲方。\n研究\"算法规则\"不如理解\"平台商业意志\"。\n规则是会变的，它一定会变。但商业逻辑不变。\n\nP，预测。\n拍之前，自己先做个预测。 这条视频好在哪儿？\n主指标：选一个（收藏率/分享率/3秒跳出率/完播率）\n预测范围：这条视频的数据预计是多少？用历史对标数据给个区间\n因果假设：为什么这个改动好？一句话讲清楚，哪里提升了。\n你要知道它好在哪儿？然后才能复现。\n\nD，执行。\n真正拍的时候一定会遇到问题。\n镜头前卡壳了\n某句话怎么说都不顺\n节奏不对，拍出来感觉很别扭\n卡点可能会很多；很正常，每个人都是这么过来的。\n但是做实验的时候，变量只能有一个。\n别贪多。别一上来就想\"这条视频又要爆款又要涨粉又要变现\"。\n选一个最小的点，先把那个卡点搞定。\n\nC，复盘。\n大部分人拍完视频，把数据扔给AI，让AI给建议，照着改。\n没用。\n为什么？复盘没有前面的计划，就是事后诸葛亮——你只能总结运气，没法制造运气。\n有P才有C。有预测才有复盘。\n指哪儿打哪儿，而不是打哪儿指哪儿。\n\nA，调整\n把运气沉淀成能复现的规律；找到这次效果不好的原因，分清楚是执行错了、选题错了、还是噪音。\n\n一条规律想进技能库，必须同时满足三个条件：\n✓ 同样的题 / 同样的受众，至少验证过 3 次\n✓ 其中至少 2 次，主指标达到或超过你的预测\n✓ 能说清楚：你改了什么，结果为什么变了\n三条全过，才算规律。\n\n错题本，分两类\n第一类：执行错了\n改了变量，用户也感觉到了，但数据还是差 → 方法有问题，下次换个方式试。\n第二类：选题错了\n执行没毛病，拍得也挺顺，但数据就是不行 → 选题不对，别硬撑，直接换选题。\n\n你要做的不是\"反复拍\"，而是学会升级一套——把运气变成能力的系统。\n流量怎么来的？ 你现在知道了：平台要的是注意力+留存，你有价值路径，就能换到。\n爆款怎么复现？ 你走完知道了：靠预测卡、单变量、分桶归因、技能库，把\"碰巧好\"变成\"我知道它为什么好\"。",
    "image": "/daily-briefing/knowledge/2026-08-10/images/%5B1%5D%20%E5%A4%A7%E8%83%A1%E5%AD%90%20-1.png"
  },
  {
    "index": "2",
    "author": "大胡子",
    "published": "2026-08-10 19:27",
    "title": "最近看大家的问题，我发现普遍：",
    "body": "最近看大家的问题，我发现普遍：\n问题比思考多，想法比行动多。\n遇到一个问题，用不了两天马上提出第二个问题。几乎这些问题的本质都是：想尽一切办法绕过去。永远在寻找快速变得牛逼的方法。\n这大概就是你现在一点也不牛逼的原因。且大概率还会沿着这个轨迹继续运行下去。\n\n再重复几点小事吧：\n第一条，靠运气不做事。等着别人给你指方向，等着\"好事儿\"掉下来。兄弟，好事儿确认了就是资源，资源轮不到普通人。普通人的机会在新东西刚出来的时候，大家还没反应过来，你冲进去。\n第二条，用作品说话。我不看学历，不听你讲，就看你的作品。你写一篇文章，那就是你的作品。你拍一条视频，那也是你的作品。越没学历，越要用作品说话。\n第三条，害怕犯错。遇到问题就绕，绕不过去就换赛道。兄弟，你换赛道，问题换个模样继续摆在你面前。发现问题解决问题，这是赚钱的根本。你解决的问题越多，你越有可能赚到钱。\n第四条，保持专注。最重要的事只有一件。你真开始做事了就知道，时间根本不够用。东做一个西做一个，长不出花来。做简单的事，通过积累，通过复利，慢慢就成了。\n第五条，别太着急。拍了20条视频没火，就怀疑自己怀疑号。水99°不开，100°就开了。有些人积累了好多年，你看不见。你多少年不读书不思考，做两天就想火？\n把这几条连起来：发现问题→解决问题→积累→复利→成为专家。你赚的钱就越来越高级。\n\n你不需要更牛逼的方法。\n你需要的是独立思考和密集行动。",
    "image": null
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
  "今天最值得关注的变化，可以概括成两句话：",
  "**今天最值得关注的变化，可以概括成两句话：**",
);
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
        <a className="brand" href="#top" aria-label="返回顶部"><span className="brand-dot" />蔓</a>
        <div className="top-actions">
          <button className="menu-button" type="button" aria-label="打开阅读目录" aria-controls="content-menu" aria-expanded="false" data-menu-button><span /><span /><span /></button>
          <details className="date-picker">
            <summary aria-label="选择简报日期"><span className="calendar-symbol" aria-hidden="true">▦</span><span>{briefDate.replaceAll("-", ".")}</span><span className="chevron">⌄</span></summary>
            <nav className="date-list" data-archive-list="true" aria-label="选择过往简报日期"><a href="?date=2026-08-11" aria-current="page">2026年8月11日</a></nav>
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
              <div className="nav-sub"><a href="#hotlist">查看 2026 年 8 月 10 日完整榜单</a></div>
            </details>
          </nav>
          <p className="sidebar-note">点小标题直达正文 · 折叠内容会自动展开</p>
        </aside>

        <div className="page" id="top">
          <section className="hero">
            <div className="date-block"><div className="date-day">11</div><div><p className="date-month">2026 · 08</p><p className="date-week">星期二</p></div></div>
            <div className="hero-copy">
              <p className="eyebrow">TODAY&apos;S DIRECTION</p>
              <h1>先预测，再拍摄，<br />把一条内容变成能力实验。</h1>
              <p className="judgment">昨天知识星球给出了 T-PDCA：先选题和预测，再用单变量执行、复盘和调整。今天不继续准备，只完成“答案与 know-how”视频，留下第一份预测与真实结果。</p>
            </div>
            <div className="hero-weather" aria-label={weather.location + "当天天气：" + weather.condition + "，" + weather.temperature}>
              <span className="weather-icon">{weather.icon}</span>
              <span className="weather-copy"><strong>{weather.condition}</strong><small>{weather.location} · {weather.temperature}</small></span>
            </div>
          </section>

          <section className="section" id="today">
            <div className="section-heading compact-heading"><div><p className="eyebrow">THREE PRIORITIES</p><h2>今天只做三件事</h2></div><p>AI 建议：一条初版、一张预测卡、一份结果</p></div>
            <div className="task-grid">{tasks.map((task, i) => <article className={"task-card " + task.tone} id={"task-" + (i + 1)} key={task.number}>
              <span className="task-number">{task.number}</span><h3>{task.title}</h3><p>{task.body}</p>
              <div className="task-meta"><span>第一步</span><strong>{task.first}</strong></div><div className="task-time">{task.time}</div>
            </article>)}</div>
            <div className="time-block-heading" id="schedule-heading"><div><p className="eyebrow">TIME BLOCKS</p><h3>今日时间块</h3></div><p>只排一轮 T-PDCA，南宁有雨</p></div>
            <section className="schedule" id="schedule">
              <div><span>开始前 · 10 分钟</span><p>写下唯一锚点、主指标、预测区间和一句因果假设。只使用云端早报里的一个 OpenAI 财务案例，不再搜索更多材料。</p></div>
              <div><span>录制发布 · 25–40 分钟</span><p>按 30–45 秒口播结构录制，最多重录三次。只检查事实、隐私和错别字，剪掉停顿、加字幕后直接发布。</p></div>
              <div><span>数据出现后 · 15 分钟</span><p>在 YouTube Analytics 或对应平台记录唯一主指标，把预测与实际结果放在一起，区分选题、执行和噪音。</p></div>
            </section>
            <details className="brief-item" id="risk">
              <summary><span className="brief-index">风险</span><span className="brief-main"><span className="pill">今日边界</span><strong>三个会把交付重新变成准备的触发点</strong><span>只识别，不新增任务</span></span><span className="plus">＋</span></summary>
              <div className="brief-content">
                <p><strong>继续找方法：</strong>8 月 10 日星主原文已经明确指出“你不需要更牛逼的方法”，今天不再用课程、数据库或新工具替代第一版。</p>
                <p><strong>同时修改多个变量：</strong>今天只围绕一个锚点和一个主指标，不同时优化钩子、画面、账号定位、变现与产品形态。</p>
                <p><strong>事后才解释结果：</strong>没有预测就没有复盘。拍摄前先留下因果假设，避免数据出来以后把任何结果都解释得合理。</p>
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
            <details className="brief-item" id="early-action">
              <summary><span className="brief-index">行动</span><span className="brief-main"><span className="pill">今日行动建议</span><strong>完成“答案与 know-how”视频初版</strong><span>点击展开云端早报完整执行步骤</span></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(actionAdvice, "action")}</div>
            </details>
          </section>

          <section className="section" id="planet">
            <div className="section-heading"><div><p className="eyebrow">JIANG HUSHUO</p><h2>姜胡说</h2></div><p>昨日 2 条星主原文与一篇相关小报童文章</p></div>
            <div className="section-context" id="planet-status">
              <SourceLink href="/daily-briefing/knowledge/2026-08-10/26-08-10姜胡说知识星球.md" label="查看 8 月 10 日原始归档" />
            </div>
            {planetPosts.map((post) => <details className="planet-card" id={"planet-" + post.index} key={post.index}>
              <summary><div className="avatar">{post.index}</div><div><span className="planet-time">{post.author} · {post.published}</span><strong>{post.title}</strong><span>点击展开星主完整原文{post.image ? "与原始图片" : ""}</span></div><span className="open-label">原文</span></summary>
              <div className="planet-content"><div className="original"><span>星主原文</span>{renderMarkdown(post.body, "planet-" + post.index)}{post.image ? <img src={post.image} alt={post.author + "原始配图"} loading="lazy" /> : null}</div></div>
            </details>)}
            <details className="planet-card" id="xiaobaotong-1">
              <summary><div className="avatar">读</div><div><span className="planet-time">小报童 · {xiaobot.author} · {xiaobot.published}</span><strong>{xiaobot.title}</strong><span>阅读导引为 AI 建议，文章原文不在网页转载</span></div><span className="open-label">导引</span></summary>
              <div className="planet-content"><div className="original">
                <span>AI 阅读导引</span>
                <p>今天已经有云端早报的完整口播结构，也有知识星球的 T-PDCA。真正的风险不再是没有方法，而是开拍时仍想把所有话一次讲完。这篇文章用“锚点”解释为什么先写清楚一个评判标准，才能顺利完成说、教和拍。</p>
                <p><strong>阅读重点：</strong>只看“定锚点 → 写脚本 → 录音 → 录像”这一条链路。锚点不是一句漂亮口号，而是“这条视频帮谁解决什么问题、观众看完记住什么”。</p>
                <p><strong>阅读问题：</strong>如果删掉所有案例和方法，这条视频唯一不能丢的判断是什么？</p>
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
                  <p><strong>资料状态：</strong>没有找到 <code>2.26年日记/8月日记/2026-08-10.md</code>。因此无法确认昨日睡眠、情绪、活动、内容进度或是否完成视频，网页不替用户补写昨日经历。</p>
                  <p><strong>可以确认的外部资料：</strong>8 月 10 日知识星球归档存在，共有两条星主原文；8 月 10 日热点榜单也已生成。这些只能证明资料源正常，不代表用户已经阅读、理解或实践。</p>
                  <p><strong>最近一份用户记录：</strong>8 月 9 日日记写有“感觉我的数据库有点臃肿了”“我自己都还没有产出”“我上周定的目标都还没做”。这些原话只用于识别近期卡点，不冒充 8 月 10 日复盘。</p>
                  <p className="advice"><strong>AI 建议：</strong>今天不补写昨天，也不重新设计整周计划；只执行云端早报与昨日星主原文共同指向的一轮小实验。</p>
                </div>
              </details>
              <article className="review-card static-review-card" id="seven-day-trend">
                <h3>近七天趋势</h3>
                <div className="trend-list">
                  <div><strong>资料范围</strong><p>近七天实际读取 8 月 3–9 日日记；8 月 10 日日记缺失。以下趋势不推断缺失日期发生了什么。</p></div>
                  <div><strong>重复目标</strong><p>持续想成为 AI × 内容创作者，并不断积累工作流、知识星球、直播笔记、逐字稿和用户研究方法。</p></div>
                  <div><strong>重复阻碍</strong><p>自动化故障、继续输入、等待理想学习状态、理论无法落地，以及遇到困难后换方向的冲动，反复推迟第一版接受现实反馈。</p></div>
                  <div><strong>当前最小闭环</strong><p>写下锚点与预测 → 只改一个变量 → 发布 → 对照主指标复盘 → 相同题目与受众重复验证。</p></div>
                </div>
              </article>
              <article className="review-card static-review-card diagnosis" id="action-diagnosis">
                <h3>AI 执行力诊断 / 建议</h3>
                <div>
                  <p><strong>证据：</strong>最近可用的 8 月 9 日日记写下“感觉我的数据库有点臃肿了”“我自己都还没有产出”“我上周定的目标都还没做”，同时继续同步知识星球和大量视频逐字稿。8 月 10 日日记缺失，因此不把这段证据写成昨日状态。</p>
                  <p><strong>行为模式：</strong>按 dbs-action 框架，这同时出现信号 A“执行模拟器”和信号 D“知识上瘾”。系统、资料和流程都在变完整，但真正需要接受观众检验的内容仍未交付。</p>
                  <p><strong>AI 诊断：</strong>当前卡点不是没有选题或资料，而是持续输入能够保护“如果我真正开始，应该能做好”的可能性；一旦发布，表达能力、用户理解和市场反馈都会变成可观察结果。你回避的更可能是这种有限检验，而不是工作本身。</p>
                  <p><strong>阿德勒式处方：</strong>今天帮助一个具体观众理解“答案”和“知道答案什么时候能用”的区别。先写预测，再发布初版；观众是否能复述、是否提出真实工作问题，是今天的社会性证据。</p>
                  <p><strong>一句话处方：</strong>今天不要证明自己会多少方法，只交付一条能被观众检验的判断。</p>
                  <p><strong>适用边界：</strong>自动化故障和设备限制是真实环境问题；本诊断只针对已经具备材料后仍继续扩充输入、没有交付第一版的部分。</p>
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
            <div className="section-heading"><div><p className="eyebrow">HOT LIST</p><h2>热点榜单</h2></div><p>2026 年 8 月 10 日完整榜单</p></div>
            <a className="hotlist" href="/daily-briefing/hotlist/2026-08-10.html" aria-label="打开热点榜单"><span>昨日榜单</span><strong>查看 2026 年 8 月 10 日完整榜单</strong><span className="arrow">↗</span></a>
          </section>

          <footer><p>先预测，再拍摄，<br />把一次运气变成可复现的能力。</p><span>每日 08:30 更新 · 完整内容折叠保存</span></footer>
        </div>
      </div>
    </main>
  );
}
