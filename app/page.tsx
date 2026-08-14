import { Fragment, type ReactNode } from "react";

const briefDate = "2026-08-14";
const cloudBriefMarkdown = "<!-- DAILY_BRIEF_START -->\n\nschema_version: 1\nbrief_date: 2026-08-14\ncoverage_date: 2026-08-13\nstatus: complete\ntitle: 产品与创作每日简报\n\n# 产品与创作每日简报｜2026 年 8 月 14 日\n\n## 今日核心判断\n\n今天最重要的判断是：**AI 工具的竞争重点，正在从“谁的模型更强”转向“谁能把合适的模型放进可控、可复用、成本可解释的任务流程”。**\n\n8 月 13 日，GitHub 把 Gemini 3.7 Flash 接入 Copilot 的多个入口；同一周，Copilot 又加入跨会话记忆、Ollama 本地模型入口、Skills 自定义和按模型拆分的 Token 成本明细。与此同时，MCP Dev Summit 首日议程已经从“如何连接工具”深入到 MCP Gateway、生产运维、安全可靠性和 Token 管理。这些变化共同说明：模型选择正在变成工作流中的一个可替换参数，真正影响结果的是任务定义、上下文质量、权限边界、成本预算和人工检查点。\n\n对个人创作者尤其如此。新手没有必要先研究所有模型的能力上限，而应该先判断：我要完成的具体任务是什么，什么结果算够用，当前最容易使用的工具能否完成；只有当它在文件处理、长任务、知识库、自动执行或稳定复现上遇到明确限制时，再升级到更复杂的 Agent。这样学习路径由实际约束驱动，而不是由工具焦虑驱动。\n\n原始来源：[GitHub：Gemini 3.7 Flash 进入 Copilot](https://github.blog/changelog/2026-08-13-gemini-3-7-flash-is-now-available-in-github-copilot)  \n原始来源：[GitHub：Copilot memory 与 Ollama](https://github.blog/changelog/2026-08-11-copilot-memory-and-ollama-in-github-copilot-for-jetbrains)  \n原始来源：[Linux Foundation：MCP Dev Summit Seoul](https://events.linuxfoundation.org/mcp-dev-summit-seoul/)\n\n## 指定博主动态\n\n## 行业重要新闻\n\n### 1. Gemini 3.7 Flash 于 8 月 13 日进入 GitHub Copilot\n\n**发生了什么：**\n\nGitHub 于 8 月 13 日宣布，Google Gemini 3.7 Flash 正在逐步开放给 Copilot Pro、Pro+、Max、Business 和 Enterprise 用户，可在 VS Code、Visual Studio、Copilot CLI、Copilot cloud agent、Copilot App、JetBrains、Xcode 和 Eclipse 中选择。GitHub称其早期测试显示，该模型相较前代在网页与应用开发、Agent 编程、代码质量、代码库研究和复杂任务验证上有所改善；使用费用按模型供应商的公开价格计入用量计费。\n\n**为什么重要：**\n\n用户越来越不需要为了使用某个模型而更换整套工作环境。模型变成同一任务入口中的可选执行器，平台则掌握上下文、工具、权限、记忆、计费和分发。\n\n**产品思维：**\n\n当底层能力趋于可替换，产品价值会向“选择何时使用哪个模型”迁移。未来比模型列表更重要的功能，是基于任务复杂度、速度、成本和风险自动推荐或路由模型，并向用户解释选择原因。\n\n**用户洞察：**\n\n多数用户不是缺模型，而是不知道自己的任务是否真的需要更强模型。模型越多，选择成本越高；默认选项和清楚的“够用标准”会比继续增加按钮更有价值。\n\n**借鉴：**\n\n做 AI 内容时，不要只比较榜单分数。用同一个真实任务比较完成时间、人工修正次数、是否能处理上下文、最终结果是否达标；只有这些差异才能帮助普通用户做选择。\n\n原始来源：[GitHub Changelog](https://github.blog/changelog/2026-08-13-gemini-3-7-flash-is-now-available-in-github-copilot)\n\n### 2. MCP Dev Summit 首日议程显示，MCP 已进入生产运维阶段\n\n**发生了什么：**\n\nMCP Dev Summit Seoul 于 8 月 13—14 日举行。首日议程包括 Anthropic 对 MCP 两年生态的回顾、Naver Cloud 从 MCP Generator 走向 MCP Gateway 的运营经验，以及开源治理与社区协作；大会整体关注 Agent 架构、编排、基础设施、安全和生产运维。8 月 14 日议程还包括 Google 关于使用 Code Mode 管理 MCP Server Token 消耗的分享，以及 AWS 关于可互操作 Agent 生态的讨论。\n\n**为什么重要：**\n\n行业关注点已经不只是“Agent 能不能调用工具”，而是“连接数量增加后如何统一治理、控制成本、保障可靠性并处理长时间任务”。这通常是技术从演示走向真实部署的信号。\n\n**产品思维：**\n\n协议解决连接问题，但不会自动解决执行质量。产品仍需要在协议之上提供网关、鉴权、日志、配额、重试、回滚、超时和结果验证。MCP Gateway 可能成为类似 API Gateway 的基础层。\n\n**用户洞察：**\n\n企业与个人用户都希望工具能自动工作，但不愿承担不可见的成本和失控风险。对自动化的信任来自“我知道它用了什么、花了多少、失败在哪里、怎样恢复”，而不仅是成功演示。\n\n**借鉴：**\n\n搭建个人自动化时，至少保留四项记录：输入来源、调用了什么工具、完成条件、失败后如何人工接管。没有这些边界的自动化越复杂，越难长期使用。\n\n原始来源：[Linux Foundation：MCP Dev Summit Seoul](https://events.linuxfoundation.org/mcp-dev-summit-seoul/)\n\n### 3. GitHub Copilot 把记忆、本地模型与成本明细放进同一条产品链\n\n**发生了什么：**\n\nGitHub 8 月 11 日更新 JetBrains 插件：Copilot memory 可以跨 Agent 对话保留并调用项目相关信息；Ollama 成为 BYOK 模型提供方；Codex 工作流支持更新后的权限模式、instructions 与 skills；Copilot CLI 可以从 IDE 终端自动安装。GitHub 同日还在 AI usage report 中加入按模型拆分的输入、输出、缓存读取和缓存写入 Token，并对应到实际消耗的 AI Credits。\n\n**为什么重要：**\n\n这组更新把三个过去分散的问题放到一起：怎样减少重复解释、怎样选择云端或本地模型、怎样解释每次使用的成本。Agent 产品开始从“能做任务”走向“能被长期管理”。\n\n**产品思维：**\n\n记忆不是越多越好，而要有作用域、更新与删除机制；本地模型不是独立卖点，而是隐私、延迟和成本策略的一部分；成本明细只有能反向指导上下文压缩、模型选择和缓存策略时才真正有用。\n\n**用户洞察：**\n\n重度用户的痛点往往不是答案质量，而是反复补充背景、担心敏感上下文、无法预估用量。产品若能减少这些不确定性，即使模型能力不变，也会明显提高留存。\n\n**借鉴：**\n\n为自己的 AI 工作流建立一页“运行说明”：哪些背景应长期保留、哪些资料只在本次使用、什么任务优先用便捷模型、什么条件下才升级到 Agent，并记录一次任务的人工修改量。\n\n原始来源：[GitHub：Copilot memory 与 Ollama](https://github.blog/changelog/2026-08-11-copilot-memory-and-ollama-in-github-copilot-for-jetbrains)  \n原始来源：[GitHub：按模型拆分 Token 用量](https://github.blog/changelog/2026-08-11-per-model-token-breakdown-in-the-usage-report)\n\n### 4. ChatGPT Ads 于 8 月 11 日扩展至五个新市场\n\n**发生了什么：**\n\nOpenAI 8 月 11 日更新公告，ChatGPT Ads 已在英国、墨西哥、巴西、日本和韩国上线。广告面向符合条件的 Free 与 Go 用户，Plus、Pro、Business、Enterprise 和 Education 用户不显示广告。OpenAI 表示广告与回答分离且明确标记；广告匹配可以参考当前对话主题、过去的聊天和广告互动，但广告主不能访问聊天内容，只获得汇总效果数据。免费用户也可以选择不看广告，但每天可用消息会减少。\n\n**为什么重要：**\n\n对话式 AI 正在形成订阅之外的规模化商业模式。广告出现的位置不是传统信息流，而是用户正在比较方案、研究产品和做决定的时刻，因此商业价值可能更接近“高意图推荐”。\n\n**产品思维：**\n\n这类产品的核心矛盾不是能否展示广告，而是商业相关性不能污染回答可信度。回答系统与广告系统的分离、敏感主题排除、广告解释权和关闭选项，都是商业化本身的一部分。\n\n**用户洞察：**\n\n用户可能接受为免费使用付出的注意力成本，但前提是能分辨什么是答案、什么是付费展示，并知道自己的数据如何被使用。信任一旦受损，广告收入可能反过来削弱产品价值。\n\n**借鉴：**\n\n创作者商业化也应把“内容判断”和“商业合作”清楚分开：说明合作关系、保留独立评价标准，并优先选择与受众当前任务真正相关的产品，而不是只看佣金。\n\n原始来源：[OpenAI：Testing ads in ChatGPT](https://openai.com/index/testing-ads-in-chatgpt/)\n\n### 5. Meta 撤回 Muse Image 引用公共 Instagram 账号的功能\n\n**发生了什么：**\n\nMeta 7 月 7 日发布 Muse Image，把图像生成和编辑接入 Meta AI、Instagram Stories 与 WhatsApp，并提供预设、图像标注编辑和 30 多种 Instagram AI 效果。7 月 10 日，Meta更新公告称，原先允许用户通过 @ 提及公共 Instagram 账号并把其内容作为图像生成参考的功能“没有达到预期”，在收到反馈后撤下。\n\n**为什么重要：**\n\n这是创作者工具中的典型边界问题：公开可见不等于用户默认同意内容被生成式模型引用。平台即使提供退出控制，也可能低估创作者对身份、肖像、风格和上下文被挪用的敏感度。\n\n**产品思维：**\n\n在涉及他人内容时，默认同意、默认拒绝和事后退出会产生完全不同的信任结果。高风险创作能力应在功能设计早期验证“用户认为怎样才算授权”，而不是只验证技术可行性。\n\n**用户洞察：**\n\n创作者既希望 AI 扩大生产能力，也担心自己的内容成为别人低成本复制的原料。真正可持续的工具需要让来源、许可、署名和控制权可见。\n\n**借鉴：**\n\n使用公开素材训练风格或生成内容前，先区分“可访问”“可引用”“可商业使用”三层权限；如果准备做面向创作者的产品，把授权记录和可撤回机制设计成核心功能。\n\n原始来源：[Meta：Introducing Muse Image](https://about.fb.com/news/2026/07/introducing-muse-image-meta-ai/)\n\n## 产品观察\n\n### GitHub Copilot for JetBrains：从聊天插件走向 Agent 工作环境\n\n1. **它服务谁？**  \n   使用 JetBrains IDE 的开发者，以及需要统一管理模型、上下文、Agent 权限和成本的团队。\n\n2. **用户原来的解决方案是什么？**  \n   每次对话重复说明项目背景；在不同客户端之间分别配置云端模型、本地模型、CLI、MCP 和项目规则；用账单总额猜测具体任务为什么昂贵。\n\n3. **它解决了哪个痛点？**  \n   把跨会话记忆、本地 Ollama 模型、Codex instructions/skills、CLI 安装和用量解释连接到同一工作环境，减少上下文重建与工具切换。\n\n4. **为什么现在出现？**  \n   开发者已经从短问答走向长任务和多轮 Agent 工作。任务越长，记忆、权限、成本和故障调试越重要；同时模型供应增加，用户也需要保留替换执行器的自由。\n\n5. **如果我要做类似产品，可以学习什么？**  \n   不要把知识库、模型选择、自动化和用量面板当作四个孤立功能。围绕一个完整任务设计：开始前加载什么背景，执行中允许什么工具，结束后怎样检查结果，长期保留什么记忆，以及怎样解释成本。\n\n原始来源：[GitHub：Copilot memory 与 Ollama](https://github.blog/changelog/2026-08-11-copilot-memory-and-ollama-in-github-copilot-for-jetbrains)  \n原始来源：[GitHub：按模型拆分 Token 用量](https://github.blog/changelog/2026-08-11-per-model-token-breakdown-in-the-usage-report)\n\n### ChatGPT Ads：把免费访问与高意图商业发现结合\n\n1. **它服务谁？**  \n   希望免费或低成本使用 ChatGPT 的用户，以及希望在用户做决策时被发现的商家。\n\n2. **用户原来的解决方案是什么？**  \n   用户通过搜索广告、信息流广告或创作者推荐发现产品；平台主要依靠订阅收入覆盖高昂推理成本。\n\n3. **它解决了哪个痛点？**  \n   为免费层提供持续资金，同时让广告出现在与用户当前任务相关的决策场景中。\n\n4. **为什么现在出现？**  \n   对话式 AI 已经进入高频日常使用，但免费推理成本持续存在；同时用户越来越直接在 AI 中比较方案、研究购买和规划行动，形成了新的高意图入口。\n\n5. **如果我要做类似产品，可以学习什么？**  \n   商业化机制必须与核心价值边界一起设计：明确标记、解释为什么展示、允许关闭、限制敏感场景，并确保付费排序不能改写核心答案。\n\n原始来源：[OpenAI：Testing ads in ChatGPT](https://openai.com/index/testing-ads-in-chatgpt/)\n\n## 深读推荐\n\n### 1. The writing habit that saved my brain (and my future)\n\n**核心观点：**\n\nDan Koe 把写作定义为思考、学习和分发的共同基础，而不只是内容包装。写作通过“强迫线性化”让模糊想法变成可检查的论证；当作者无法继续写时，理解缺口也随之暴露。他的执行系统围绕每周一个主题：集中收集想法与素材，完成一篇长文，再转成 X 长文、视频、Podcast 和一周的短内容。\n\n**值得学习的部分：**\n\n最值得学习的不是“一稿多发”技巧，而是输入和输出围绕同一个项目组织。一个明确主题会让阅读、对话和日常观察自动变成相关素材；长文则承担思考加工与内容母体的作用。这样能避免知识库无限积累却没有产出。\n\n**如何应用：**\n\n每周只设一个问题，不设多个宽泛话题。所有收藏都必须回答“它如何帮助这个问题”；周中写出一版观点，暴露缺口后再补资料；周末从同一论证中提取一条短视频或短文。衡量标准不是收藏数量，而是是否形成了一个可被别人理解、反驳或验证的判断。\n\n原始来源：[Dan Koe 原文](https://letters.thedankoe.com/p/the-writing-habit-that-saved-my-brain)\n\n### 2. Adobe 2026 Creators’ Toolkit Report\n\n**核心观点：**\n\nAdobe 6 月发布的报告基于美国、英国、法国、德国、韩国、日本、印度和澳大利亚超过 16,000 名创作者。87%的受访创作者表示创意 AI 加速了业务或受众增长，75%认为其已融入工作流或成为必需；同时85%认为最终创意决定应由人类保留。报告的核心不是“AI 会不会被采用”，而是采用已成为基础设施后，观点、品味、判断和信任反而更稀缺。\n\n**值得学习的部分：**\n\n报告同时呈现效率收益与同质化压力：创作者获得更快生产能力，却更难在内容供给暴增的环境中脱颖而出。产品机会因此不只在生成更多内容，还在帮助创作者保留个人语境、管理品牌一致性、验证受众反应和说明素材来源。\n\n**如何应用：**\n\n把创作流程分成两类：可以交给 AI 的重复劳动，以及必须由自己做的判断。前者可以包括整理、转录、格式转换和初稿变体；后者至少保留主题选择、观点取舍、案例真实性、最终措辞和发布决定。每次自动化后记录它节省了什么，以及是否削弱了个人表达。\n\n原始来源：[Adobe 官方报告](https://news.adobe.com/news/2026/06/creators-toolkit-report-2026)\n\n## 信息源实验雷达\n\n### 人物日\n\n#### 重复主题 1｜AI 能力扩散之后，控制、安全与治理成为持续关注\n\n**谁在谈：** Naval Ravikant、Sam Altman。\n\n**最近 30 天出现情况：**\n\n这一主题至少出现四次。Naval 在 7 月 18 日谈监管俘获，在 8 月 8 日谈开源模型并不会自然摧毁前沿实验室的盈利能力；Sam Altman 在 8 月 6 日解释一次安全事件，并在 8 月 10 日强调需要用模型来防御系统。它不是一次偶发观点，而是从市场结构、监管和系统安全三个角度反复出现。\n\n**他们实际上在讨论什么：**\n\n模型能力普及并不意味着风险和权力自动分散。开放模型会降低进入门槛，但前沿能力、基础设施、分发与监管仍可能集中；能力越强，防御系统、事故响应和治理机制越要成为产品本身，而不是上线后的附加工作。\n\n**事实与推断边界：**\n\n帖子内容与发布日期属于来源事实；“注意力从能力竞赛迁移到治理”是基于多条公开内容的主题聚类，不代表这些人物共同认可同一政策方案。\n\n原始来源：[Naval，2026-08-08](https://x.com/naval/status/2086011520559792457)  \n原始来源：[Naval，2026-07-18](https://x.com/naval/status/2078441164273832292)  \n原始来源：[Sam Altman，2026-08-10](https://x.com/sama/status/2086881528282587524)  \n原始来源：[Sam Altman，2026-08-06](https://x.com/sama/status/2085744380095467549)\n\n#### 重复主题 2｜学习与创业的瓶颈不是信息不足，而是缺少短反馈回路\n\n**谁在谈：** Dan Koe、Paul Graham。\n\n**最近 30 天出现情况：**\n\nDan Koe 在 7 月 15 日把写作视为暴露理解缺口的方式；7 月 25 日又明确提出“学习是输出过程”，目标、行动、误差和修正构成反馈回路。Paul Graham 在 8 月 3 日指出向大公司销售可能消耗数月会议，在 8 月 9 日对比软件与硬件创业的负担。这一主题至少出现四次，虽然两人讨论对象不同，但都在关注如何缩短从想法到现实反馈的距离。\n\n**他们实际上在讨论什么：**\n\n知识输入本身不会产生能力，创业中的忙碌也不等于进展。输出、交付、用户反应和可观察误差，才会迫使人补充真正需要的知识。软件、小项目和公开写作的优势，是能用较低成本快速得到反馈；大型采购、硬件和过度准备则容易延长反馈周期。\n\n**事实与推断边界：**\n\nDan 对学习与写作的论述、Paul 对创业摩擦的观察属于来源人物观点；将二者归为“短反馈回路”是本期分析性聚类。\n\n原始来源：[Dan Koe，2026-07-15](https://letters.thedankoe.com/p/the-writing-habit-that-saved-my-brain)  \n原始来源：[Dan Koe，2026-07-25](https://letters.thedankoe.com/p/how-to-remember-everything-you-read)  \n原始来源：[Paul Graham，2026-08-03](https://x.com/paulg/status/2084367085954887789)  \n原始来源：[Paul Graham，2026-08-09](https://x.com/paulg/status/2086554045750403478)\n\n### 本期最值得注意的关注点变化\n\n**本期没有发现明显的新关注点迁移。**\n\n与上一阶段相比，Sam Altman 和 Naval 仍持续讨论能力扩散后的安全、监管和市场结构；Dan Koe 仍把写作、项目和个人杠杆连接起来；Paul Graham 仍主要关注创业者如何减少组织与销售摩擦。最近 30 天更像是这些长期主题的具体化，而不是突然转向新的议题。\n\n值得注意之处在于，不同人物都较少停留在“模型更聪明”本身，而更频繁地讨论能力进入现实后的控制、行动、组织和反馈。这是持续关注，不足以单独升级为新的趋势结论。\n\n### 留给我的一个问题\n\n如果更强的 AI 工具不会自动带来更好的选择，那么普通人最先需要训练的究竟是工具熟练度，还是定义问题并判断“当前结果是否已经够用”的能力？\n\n## 今日行动建议\n\n今天做一个 45—60 分钟的“够用工具”对照实验，只验证一个判断：**新手是否应该先用最容易获得结果的工具，再按真实限制升级。**\n\n选择一个你近期会真实使用的任务，例如“把一段 5—10 分钟语音整理成一条结构清楚的内容草稿”。使用完全相同的原始材料与完成标准，分别交给：\n\n1. 一个最容易上手的通用聊天工具；\n2. 一个更复杂、可以处理文件或执行多步骤任务的 Agent 工具。\n\n只记录四项：第一次得到可用结果所需时间、你补充说明的次数、最终人工修改量、复杂工具是否解决了简单工具无法解决的问题。\n\n**什么结果算有发现：**如果简单工具已经达到完成标准，而复杂工具没有显著减少时间或修改量，说明“先用够用工具”在这个任务上成立；如果复杂工具明显减少重复说明、文件搬运或人工修正，就把这个差异写成“什么时候值得升级”的具体边界。实验完成后只保留一张对比卡，不要求今天继续拍摄或发布。\n\n<!-- DAILY_BRIEF_END -->\n";

const tasks = [
  {
    number: "01",
    title: "确认并完成学校面试",
    body: "8 月 12 日日记只写明周五收到学校面试邀请，没有留下具体时段和地址。若邀请仍有效，先确认时间、地点和携带材料，再按通知参加；若安排已变化，只记录变化，不虚构日程。",
    first: "先查看对方通知，补齐尚未记录的时间与地点",
    time: "以校方通知为准",
    tone: "mint",
  },
  {
    number: "02",
    title: "把昨天录好的视频发布出去",
    body: "昨天已经完成拍摄，主题也已清楚：新手学 AI 不必从 Codex 开始，工具应按真实任务选择。今天只做最低限度剪辑、补标题和适用边界，把流程推进到发布。",
    first: "先完整看一遍素材，只剪掉明显停顿和无关段落",
    time: "45–60 分钟",
    tone: "blue",
  },
  {
    number: "03",
    title: "留下一条真实反馈记录",
    body: "视频发布后只记录首轮事实：发布平台和时间、标题、是否有人看完或回应、哪一句最容易被误解。没有反馈也照实记录，不用数据好坏判断自己是否适合创作。",
    first: "先写好四个空字段，发布后再填写观察结果",
    time: "10 分钟",
    tone: "peach",
  },
];

const learningResources = [
  {
    type: "Crash Course × PBS 官方教学视频",
    title: "The Editor: Crash Course Film Production #12",
    meta: "11 分 07 秒 · 英文 · YouTube 免费公开 · 2017 年 11 月 16 日发布",
    intro: "Lily Gladstone 讲编辑如何把原始素材组织成一个连贯整体，并介绍剪辑判断的基本原则。它是与 PBS Digital Studios 合作制作的教育内容，不是剪辑软件广告或付费课程导流。",
    why: "你已经拍完视频，今天真正卡在从原始素材到可发布版本。先看一节只讲剪辑角色和判断的短课，能帮助你把“剪辑”理解为组织表达，而不是必须堆效果、字幕和包装。",
    focus: [
      "编辑的核心任务是从许多素材中建立一个连贯整体，而不是展示软件技巧。",
      "注意镜头取舍怎样服务叙事清楚、节奏和观众理解。",
      "把专业电影原则缩小到口播：保留核心判断和证据，剪掉重复与偏离主题的段落。",
    ],
    action: "打开昨天的素材，只做一遍结构剪辑：标出核心判断、例子和结尾，删除重复部分；完成后直接导出，不继续学习特效。",
    boundary: "这节课讲电影剪辑，不会教某款剪辑软件的按钮。今天只借用“组织成连贯整体”的原则；若面试占用精力，可以跳过视频，直接完成最低限度剪辑。",
    source: "https://www.youtube.com/watch?v=esa0NeQI8oc",
    sourceLabel: "Crash Course 官方原始视频",
  },
];

const xiaobot = {
  title: "0摩擦、0费用，一条龙服务：灵感 + 洞见卡 + 口播",
  author: "姜胡说",
  published: "2026-04-13 11:24:48",
  source: "https://xiaobot.net/post/cfc9c7cb-0298-4fbe-baf8-6bc08e9fae05",
};

const weather = { location: "南宁", condition: "阵雨", temperature: "25–32℃", icon: "🌦️" };

const planetPosts: Array<{ index: string; author: string; published: string; title: string; body: string; images: string[] }> = [
  {
    index: "1",
    author: "大胡子",
    published: "2026-08-13 09:25",
    title: "Deepseek-v4-pro 与模型价格观察",
    body: "Deepseek-v4-pro，目前的价格只有 GLM-5.2 的 1/10。Fable5 的 1/50。\n\n现在就看 Qwen3.8 27b 了。",
    images: [
      "/daily-briefing/knowledge/2026-08-13/images/%5B1%5D%20%E5%A4%A7%E8%83%A1%E5%AD%90%20-1.jpg",
      "/daily-briefing/knowledge/2026-08-13/images/%5B1%5D%20%E5%A4%A7%E8%83%A1%E5%AD%90%20-2.png",
    ],
  },
  {
    index: "2",
    author: "大胡子",
    published: "2026-08-13 14:06",
    title: "说说定价的事",
    body: "说说定价的事。\n\n我发现我们很多老伙计都不会定价。\n常用的定价方式都是错的。\n\n比如，最常用的定价方式就是别人大概定多少钱，我也定多少钱。\n你的用户和人家的用户是同一类用户吗？\n你提供的服务和产品质量一样吗？\n\n还有老伙计用户还没有100个呢，就定好了：\n10个人多少钱？50人多少钱？100人多少钱？每加多少人涨多少钱。\n你看，学得还是皮毛。\n你知道这么做的前提是什么吗？事实已经证明了，产品、服务很受欢迎。\n你连100个人都没有，你先把涨价的招式学会了。\n\n看问题只看表面。\n\n定价一定是建立在一定数据的基础上。\n什么数据？\n比如你定1000块，理由是别的同类产品都定2000，我更便宜。\n可是你之前的用户都是免费进的，你信不信，别说1000，你敢涨到200块，人至少走一半。\n\n你的社群已经来了10个人了，你觉得50个人的时候，我就涨100；\n你信不信，那10个人可能就是你能招到最多的人了。\n\n定价，必须明白你给别人带来了什么价值。\n怎么验证价值？\n实验、反馈。\n这些都没做过，\n拍脑袋定价。\n\n好不容易找到一个有可能出成绩的机会，\n被你自己给堵死了。\n\n把注意力放到产品、服务上，\n通过试验获得反馈，\n市场会告诉你它值多少钱。",
    images: [],
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
  "今天最重要的判断是：**AI 工具的竞争重点，正在从“谁的模型更强”转向“谁能把合适的模型放进可控、可复用、成本可解释的任务流程”。**",
  "**今天最重要的判断是：AI 工具的竞争重点，正在从“谁的模型更强”转向“谁能把合适的模型放进可控、可复用、成本可解释的任务流程”。**",
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
            <nav className="date-list" data-archive-list="true" aria-label="选择过往简报日期"><a href="?date=2026-08-14" aria-current="page">2026年8月14日</a></nav>
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
              <div className="nav-sub">{planetPosts.map((post) => <a href={"#planet-" + post.index} key={post.index}>{post.author}：{post.title}</a>)}<a href="#planet-status">昨日原始归档</a><a href="#xiaobaotong-1">小报童：0 摩擦创作路径</a></div>
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
              <div className="nav-sub"><a href="#hotlist">查看 2026 年 8 月 13 日完整榜单</a></div>
            </details>
          </nav>
          <p className="sidebar-note">点小标题直达正文 · 折叠内容会自动展开</p>
        </aside>

        <div className="page" id="top">
          <section className="hero">
            <div className="date-block"><div className="date-day">14</div><div><p className="date-month">2026 · 08</p><p className="date-week">星期五</p></div></div>
            <div className="hero-copy">
              <p className="eyebrow">TODAY&apos;S DIRECTION</p>
              <h1>先完成现实任务，<br />再让工具证明价值。</h1>
              <p className="judgment">今天不安装 Hermes，也不比较更多模型。先确认并完成学校面试，再把昨天已经拍好的视频剪成最低可发布版本；用一次真实发布检验“够用工具先行”。</p>
            </div>
            <div className="hero-weather" aria-label={weather.location + "当天天气：" + weather.condition + "，" + weather.temperature}>
              <span className="weather-icon">{weather.icon}</span>
              <span className="weather-copy"><strong>{weather.condition}</strong><small>{weather.location} · {weather.temperature}</small></span>
            </div>
          </section>

          <section className="section" id="today">
            <div className="section-heading compact-heading"><div><p className="eyebrow">THREE PRIORITIES</p><h2>今天只做三件事</h2></div><p>AI 建议：面试优先、完成发布、记录反馈</p></div>
            <div className="task-grid">{tasks.map((task, i) => <article className={"task-card " + task.tone} id={"task-" + (i + 1)} key={task.number}>
              <span className="task-number">{task.number}</span><h3>{task.title}</h3><p>{task.body}</p>
              <div className="task-meta"><span>第一步</span><strong>{task.first}</strong></div><div className="task-time">{task.time}</div>
            </article>)}</div>
            <div className="time-block-heading" id="schedule-heading"><div><p className="eyebrow">TIME BLOCKS</p><h3>今日时间块</h3></div><p>面试时间以校方通知为准，视频任务只做一个可发布版本</p></div>
            <section className="schedule" id="schedule">
              <div><span>出发前 · 15 分钟</span><p>核对学校面试的时间、地点、联系人和携带材料。页面没有这些事实，不代替校方通知；若安排变化，只更新自己的实际计划。</p></div>
              <div><span>白天 · 面试优先</span><p>按已确认的安排参加面试。通勤和等待期间不安装新 Agent，也不把直播或课程当成必须完成的任务。</p></div>
              <div><span>回家后 · 60 分钟内</span><p>精力允许时完成最低限度剪辑、标题和边界说明后发布；若面试明显消耗精力，只完成结构剪辑并保存，次日从导出继续。</p></div>
            </section>
            <details className="brief-item" id="risk">
              <summary><span className="brief-index">风险</span><span className="brief-main"><span className="pill">今日边界</span><strong>三个必须主动截断的消耗</strong><span>只识别，不新增任务</span></span><span className="plus">＋</span></summary>
              <div className="brief-content">
                <p><strong>继续安装工具：</strong>昨日日记已经形成清楚判断：工具应按问题选择。今天不安装 Hermes、不恢复 Claude Code，也不继续比较模型价格。</p>
                <p><strong>用剪辑替代发布：</strong>视频已经拍完，剪辑只服务表达清楚。若不断增加包装、字幕和效果，却没有导出与发布，它仍然没有进入反馈。</p>
                <p><strong>把 AI 分析写成本人判断：</strong>AI 可以提供结构和诊断，但网页只把日记中已明确写下的句子标成用户原文，不补写个人理解。</p>
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
                <details className="brief-item" id="template-inspiration">
                  <summary><span className="brief-index">03</span><span className="brief-main brief-main--compact"><span className="pill">灵感</span><strong>灵感库</strong></span><span className="plus">＋</span></summary>
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
              <summary><span className="brief-index">行动</span><span className="brief-main"><span className="pill">今日行动建议</span><strong>完成一次“够用工具”对照实验</strong></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(actionAdvice, "action")}</div>
            </details>
          </section>

          <section className="section" id="planet">
            <div className="section-heading"><div><p className="eyebrow">JIANG HUSHUO</p><h2>姜胡说</h2></div><p>昨日 2 条星主原文与一篇相关小报童文章</p></div>
            <div className="section-context" id="planet-status">
              <p>昨日归档包含 2 条星主原文；下方逐条完整保留文字与原始图片，不添加用户没有写过的理解。</p>
              <SourceLink href="/daily-briefing/knowledge/2026-08-13/26-08-13姜胡说知识星球.md" label="查看 8 月 13 日原始归档" />
            </div>
            {planetPosts.map((post) => <details className="planet-card" id={"planet-" + post.index} key={post.index}>
              <summary><div className="avatar">{post.index}</div><div><span className="planet-time">{post.author} · {post.published}</span><strong>{post.title}</strong></div><span className="open-label">原文</span></summary>
              <div className="planet-content"><div className="original"><span>星主原文</span>{renderMarkdown(post.body, "planet-" + post.index)}{post.images.map((src, imageIndex) => <img src={src} alt={post.author + "原始配图 " + (imageIndex + 1)} loading="lazy" key={src} />)}</div></div>
            </details>)}
            <details className="planet-card" id="xiaobaotong-1">
              <summary><div className="avatar">读</div><div><span className="planet-time">小报童 · {xiaobot.author} · {xiaobot.published}</span><strong>{xiaobot.title}</strong><span>阅读导引为 AI 建议，文章原文不在网页转载</span></div><span className="open-label">导引</span></summary>
              <div className="planet-content"><div className="original">
                <span>AI 阅读导引</span>
                <p>这篇文章从“技术为应用服务”出发，提供一条更低摩擦的灵感、知识卡和口播路径，并把可迁移资产放在 Skill，而不是某个客户端本身。它与昨日日记里“先选一个最容易产生结果的工具，等工具开始限制你再升级”的判断直接相关。</p>
                <p><strong>阅读重点：</strong>不要照抄其中的 QClaw 安装步骤；重点观察作者怎样从普通用户的真实场景倒推最低摩擦方案，以及为什么把 Skill 视为能够迁移的资产。</p>
                <p><strong>阅读问题：</strong>昨天录好的视频中，哪些内容在帮助新手判断任务，哪些内容仍可能变成对工具等级的另一种排序？</p>
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
                  <p><strong>资料状态：</strong>已读取 <code>2.26年日记/8月日记/2026-08-13.md</code>，并核对 8 月 7–13 日共七份日记。昨日没有记录具体入睡时间，不据此补写睡眠事实。</p>
                  <p><strong>已经发生的推进：</strong>用户已经把 8 月 12 日形成的文案拍成视频；虽然尚未剪辑和发布，但创作流程第一次越过了“文案已经有了，却不愿拍”的旧卡点。用户还卸载了很少使用的 Claude Code，并形成一套按任务限制选择 AI 工具的表达。</p>
                  <p><strong>用户原文：</strong>“想学 AI ，是不是要先安装 Codex？不用。先选一个最容易让你产生结果的工具。等工具开始限制你，再升级。”来源：8 月 13 日日记。此处忠实引用，不作 AI 润色。</p>
                  <p className="advice"><strong>AI 建议：</strong>今天不要再研究 Hermes 的能力边界。先处理学校面试，再把已拍视频推进到发布；发布后的真实理解与误解，才是这套工具选择判断的下一份证据。</p>
                </div>
              </details>
              <article className="review-card static-review-card" id="seven-day-trend">
                <h3>近七天趋势</h3>
                <div className="trend-list">
                  <div><strong>资料范围</strong><p>已读取 8 月 7–13 日七份日记；本段只归纳重复出现的事实与用户原话，不补写未记录的经历。</p></div>
                  <div><strong>重复目标</strong><p>持续希望成为 AI × 内容创作者，并尝试把信息源、知识星球、日记、短视频和真实实验串成闭环。</p></div>
                  <div><strong>重复阻碍</strong><p>持续输入、安装工具和维护系统会制造明显推进感，但作品常停在发布前；睡眠偏晚与泛娱乐信息流也在多篇日记中反复出现，会进一步压缩可执行时间。</p></div>
                  <div><strong>本周新变化</strong><p>8 月 12 日把“AI 辅助拍视频”缩小成“能否把一个真实想法推进到发布”，8 月 13 日已经完成拍摄，并把工具选择整理成“现有工具解决不了时再升级”的判断。当前缺口从“开始拍”前移到“剪完、发布、观察反馈”。</p></div>
                </div>
              </article>
              <article className="review-card static-review-card diagnosis" id="action-diagnosis">
                <h3>AI 执行力诊断 / 建议</h3>
                <div>
                  <p><strong>证据：</strong>8 月 13 日日记第一句是“我今天拍了那条视频，但是没发出去，也没剪辑，就放在那里了”；同一天继续研究 Hermes，并详细整理 WorkBuddy、Codex 与长期 Agent 的差异。</p>
                  <p><strong>行为模式：</strong>按 dbs-action 框架，当前主要接近信号 A“执行模拟器”和信号 E“完美主义伪装”，但与前一天相比已经有实质进展：用户并非没有行动，而是把最容易获得外部评价的最后一步继续留在未来。</p>
                  <p><strong>AI 诊断：</strong>今天真正要跨过的不是拍摄恐惧，而是闭环恐惧。只要视频不发布，关于“新手不必从 Codex 开始”的判断就仍然只在本人和 AI 之间成立，不必面对观众是否听懂、是否反驳或是否需要。</p>
                  <p><strong>阿德勒式处方：</strong>把视频视为帮助一个正在被工具焦虑困住的新手，而不是证明自己懂 AI。最低限度剪完并发布，之后只问一个问题：对方能否说清“什么时候才需要升级工具”？</p>
                  <p><strong>一句话处方：</strong>别再用更高级的 Agent 解释为什么要行动；让昨天已经拍好的视频先替一个具体新手减少一次错误选择。</p>
                  <p><strong>适用边界：</strong>今天可能有学校面试，现实承诺优先；若面试消耗明显，只完成结构剪辑并保留明确续接点，不把合理延期解释成逃避。昨日未记录睡眠时间，本诊断不推断精力状态。</p>
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
            <div className="section-heading"><div><p className="eyebrow">HOT LIST</p><h2>热点榜单</h2></div><p>2026 年 8 月 13 日完整榜单</p></div>
            <a className="hotlist" href="/daily-briefing/hotlist/2026-08-13.html" aria-label="打开热点榜单"><span>昨日榜单</span><strong>查看 2026 年 8 月 13 日完整榜单</strong><span className="arrow">↗</span></a>
          </section>

          <footer><p>先让一件事完成，<br />再讨论工具升级。</p><span>每日 09:00 更新 · 完整内容折叠保存</span></footer>
        </div>
      </div>
    </main>
  );
}
