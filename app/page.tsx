import { type ReactNode } from "react";

const briefDate = "2026-08-18";
const cloudBriefMarkdown = "<!-- DAILY_BRIEF_START -->\n\nschema_version: 1\nbrief_date: 2026-08-18\ncoverage_date: 2026-08-17\nstatus: complete\ntitle: 产品与创作每日简报\n\n# 产品与创作每日简报｜2026 年 8 月 18 日\n\n## 今日核心判断\n\n**Agent 产品正在从“给用户一个会做事的模型”，转向“替用户承担部署、权限、成本、写回和故障恢复”。**\n\n8 月 17 日的几项发布呈现出一条完整链路：Cloudways 将 Hermes 与 OpenClaw 做成一键托管服务，降低安装和运维门槛；Sigma 通过 MCP 与 Webhook 把 AI 回答变成可审批、可写回的业务动作；Anthropic 为托管 Agent 增加预算上限、Skill 自动加载和数据驻留控制；OpenAI 则强调，长时运行的 Agent 一旦获得真实系统权限，安全必须覆盖发现、修复、监控和逐步扩大自治范围。\n\n这说明，模型“会不会做”正在变成基础条件，真正影响用户是否长期使用的是四件事：能否低成本启动、能否接入已有资料、能否在明确边界内行动、出错后能否解释和恢复。对 AI × 内容创作者而言，下一阶段不应继续收集更多工具，而应选择一个真实创作任务，把“输入—处理—人工确认—输出—反馈记录”跑通。只有闭环稳定后，Skill、MCP 和自动化才会从炫技变成资产。\n\n原始来源：[DigitalOcean：Cloudways Managed AI Agents](https://investors.digitalocean.com/news/news-details/2026/Cloudways-Launches-Managed-AI-Agents-With-General-Availability-of-OpenClaw-and-Hermes/default.aspx)  \n原始来源：[Sigma：MCP、Webhook 与 Anthropic 模型更新](https://www.sigmacomputing.com/blog/sigma-webhooks-mcp-anthropic-models)  \n原始来源：[Anthropic：Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview)  \n原始来源：[OpenAI：The Defender’s Window](https://openai.com/index/the-defenders-window/)\n\n## 指定博主动态\n\n## 行业重要新闻\n\n### 1. Cloudways 推出 Hermes 与 OpenClaw 一键托管服务\n\n**发生了什么：** DigitalOcean 旗下 Cloudways 于 8 月 17 日发布 Managed AI Agents，首批支持 Hermes 与 OpenClaw。用户无需自行租用 VPS、配置容器、网关、端口和服务器安全，即可部署 Agent。每个部署运行在隔离环境中，运行时更新在推送前由 Cloudways 验证，并提供一键 Cloudways MCP 集成，让 Agent 操作用户已有的服务器和应用。\n\n**为什么重要：** 开源 Agent 的早期门槛主要不是模型能力，而是安装、常驻运行、网络配置、安全更新和故障维护。托管服务把这些隐性工程工作打包成产品，意味着 Agent 正从技术爱好者的本地项目进入普通团队可购买的基础设施。\n\n**产品思维：** 当用户已经明确想要某种结果，优秀产品不应继续要求他理解所有底层组件。Cloudways 没有重新发明 Hermes，而是把“难以稳定运行”这个采用阻力产品化。这里的价值来自减少失败步骤，而不是增加 Agent 功能数量。\n\n**用户洞察：** 很多用户说“想用 Agent”，实际购买的是持续在线、更新不崩、权限隔离和有人维护。安装成功不等于产品被采用；只有第二天仍能正常运行、失败时知道如何恢复，才算真正解决问题。\n\n**借鉴：** 设计 AI 创作产品时，先列出用户从“看到教程”到“得到第一份可用结果”之间的全部步骤。优先消灭账号配置、文件路径、环境变量和重复复制等阻力，再考虑增加高级能力。\n\n原始来源：[DigitalOcean：Cloudways Managed AI Agents](https://investors.digitalocean.com/news/news-details/2026/Cloudways-Launches-Managed-AI-Agents-With-General-Availability-of-OpenClaw-and-Hermes/default.aspx)\n\n### 2. Sigma 让 MCP 从“查询数据”升级为“生成工作簿并写回系统”\n\n**发生了什么：** Sigma 于 8 月 17 日公布三项连接能力：升级中的 MCP Server 可从 Claude、ChatGPT、Codex 或 Cursor 查询数据，并计划直接创建 Sigma 工作簿；Webhook Triggers 已进入公开测试，可由 Slack、Salesforce、ServiceNow、n8n 或 Zapier 触发流程并把决定写回 Sigma；Anthropic 模型直连也进入公开测试。Sigma 还在开发适用于 Claude、Codex 和 Cursor 的插件，把 MCP 工具与迁移类 Skills 打包。\n\n**为什么重要：** 过去的 AI 数据助手通常停留在“回答你一个问题”。Sigma 把流程推进到“生成受治理的工作簿—发送审批—接收决定—写回系统”，开始形成真正的业务闭环。\n\n**产品思维：** 一个工作流只有读，没有写回，就仍需要用户搬运结果。真正的自动化必须定义系统记录、审批节点、权限和回滚方式。MCP 负责连接上下文与能力，Webhook 则让外部事件重新进入流程，两者结合才能形成循环。\n\n**用户洞察：** 用户不愿切换多个工具，不只是因为麻烦，还因为复制粘贴会丢失来源、责任人和状态。让用户在熟悉的聊天入口发起任务，同时把结果保存到受治理系统，能降低认知负担，也保留组织可信度。\n\n**借鉴：** 为内容工作流增加一个明确的“写回位置”。选题聚类后不要只停留在聊天记录里，而要自动写入选题表，并保留来源链接、目标用户、待验证问题、状态和反馈数据。\n\n原始来源：[Sigma：Connect Sigma to your systems, AI assistant, and AI models](https://www.sigmacomputing.com/blog/sigma-webhooks-mcp-anthropic-models)\n\n### 3. Anthropic 结束旧 Workbench，并把托管 Agent 的预算与 Skill 管理推向标准化\n\n**发生了什么：** Anthropic 旧版 Claude Console Workbench 与实验性提示词生成、优化和模板化 API 于 8 月 17 日停止访问。与此同时，Claude Managed Agents 已支持会话硬预算：达到上限后以 budget_reached 原因暂停；托管会话还可从 GitHub 仓库根目录的 .claude/skills 自动发现 Skill，并支持数据驻留区域和顾问模型配置。\n\n**为什么重要：** 产品重心正在从“在网页里调一条提示词”转向“管理一个能持续执行的 Agent”。预算、Skill 来源、数据位置和暂停原因，都是生产系统需要的控制面，而不是提示词实验工具能解决的问题。\n\n**产品思维：** 自动化必须有停止条件。只有启动按钮、没有预算与暂停机制的 Agent，会把模型错误放大成持续成本。把预算上限做成系统参数，比提醒用户“注意用量”更可靠。\n\n**用户洞察：** 用户希望复用能力，但不想每次粘贴长提示词。仓库中的 Skill 自动发现，意味着工作方法可以被版本管理、审查和更新；同时，用户仍需要知道某次任务到底加载了哪个版本。\n\n**借鉴：** 给自己的自动化增加三个字段：单次允许消耗的时间或费用、触发暂停的条件、暂停后如何人工继续。Skill 文件必须保存版本和修改日期，避免结果变化后无法追溯原因。\n\n原始来源：[Anthropic：Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview)\n\n### 4. OpenAI 提出“防守窗口”：Agent 安全要从发现问题走到受控修复\n\n**发生了什么：** OpenAI 联合创始人 Greg Brockman 于 8 月 17 日发布《The Defender’s Window》。文章以 OpenAI—Hugging Face 安全事件为背景，指出 Agent 已能串联漏洞、泄露凭据和错误权限。Brockman 还让 ChatGPT Work 检查个人网站，约 15 分钟发现 13 项问题，并在约一小时内操作 Cloudflare、DNS、TLS 和部署设置完成修复。文章建议组织从只读检查开始，再逐步进入代码审查、告警分流和边界明确的自动响应。\n\n**为什么重要：** Agent 的风险不再只是“回答错误”，而是可能在真实系统中连续行动。另一方面，同样的能力也能大幅缩短从发现漏洞到部署修复的时间。关键差异在于权限边界、监控和人工决策点。\n\n**产品思维：** 自治程度不应是开或关，而应是一条阶梯：只读扫描 → 提出建议 → 生成补丁 → 人工批准 → 低风险自动修复。每升一级都应有证据证明收益大于风险。\n\n**用户洞察：** 用户不会因为系统声称“安全”就信任它。信任来自可见的权限范围、完整日志、关键动作确认，以及任务结束后能够说明改了什么。\n\n**借鉴：** 任何会发布内容、修改文件或调用外部服务的创作 Agent，都先设置为“生成待审结果”。连续运行三次无严重偏差后，再只开放一个低风险动作，不能一次授予全部权限。\n\n原始来源：[OpenAI：The Defender’s Window](https://openai.com/index/the-defenders-window/)\n\n### 5. LeBron James 上线个人高尔夫频道：名人 IP 正被拆成持续运营的垂直内容产品\n\n**发生了什么：** YouTube 于 8 月 17 日宣布 LeBron James 推出官方高尔夫频道。频道不以篮球职业生涯回顾为中心，而是围绕其“高尔夫爱好者与学习者”身份，设计全球球场、当地食物、朋友互动和幕后旅程，并采用每月周六更新的系列化节奏。\n\n**为什么重要：** 这不是简单增加一个社交账号，而是把已有名人影响力迁移到一个更具体、可持续扩展的兴趣场景。成熟 IP 也需要明确主题、固定更新和可重复节目结构，而不能只依靠知名度。\n\n**产品思维：** 内容账号可以按产品线设计：明确服务哪类观看动机，建立可重复栏目，并让每一集既独立成立又强化长期身份。垂直切口通常比“记录我的生活”更容易形成用户预期。\n\n**用户洞察：** 观众不仅想看专家展示结果，也愿意看熟悉的人进入新领域、暴露学习过程。对知识创作者而言，“我正在弄懂什么”可以成为内容价值，但必须给观众一个清晰问题和阶段性收获。\n\n**借鉴：** 不必等自己成为 AI 专家再建立栏目。可以固定做“我用一个真实任务测试一种 AI 方法”，每期只验证一个问题，持续记录原方案、修改过程和结果。\n\n原始来源：[YouTube：LeBron James launches Official YouTube Channel](https://blog.youtube/creator-and-artist-stories/lebron-james-youtube-golf-channel-launch/)\n\n## 产品观察\n\n### 产品一：Cloudways Managed AI Agents\n\n1. **它服务谁？** 想长期运行 Hermes、OpenClaw 等开源 Agent，但不愿自行维护 VPS、容器、端口、安全更新和网关的开发者、创作者、小型机构与代理商。\n2. **用户原来的解决方案是什么？** 根据教程在本地电脑或云服务器手工安装；遇到依赖、网络和权限问题时自行排查，升级后还可能再次失效。\n3. **它解决了哪个痛点？** 把部署、隔离、更新验证、计费和支持整合成托管体验，让用户把注意力放回 Agent 要完成的任务。\n4. **为什么现在出现？** 开源 Agent 已积累大量关注，但从“能安装”到“能稳定用于业务”之间仍有明显鸿沟。基础云服务商拥有运行环境、计费、安全和支持体系，天然适合承接这一层。\n5. **如果要做类似产品，可以学习什么？** 不要把用户教育当成唯一解决方案。反复出现的安装问题可能不是教程不够详细，而是应被产品消除。垂直产品可以托管一个已经验证的工作流，而不是重新造一个通用 Agent。\n\n原始来源：[DigitalOcean：Cloudways Managed AI Agents](https://investors.digitalocean.com/news/news-details/2026/Cloudways-Launches-Managed-AI-Agents-With-General-Availability-of-OpenClaw-and-Hermes/default.aspx)\n\n### 产品二：Sigma 的 MCP + Webhook 闭环\n\n1. **它服务谁？** 需要在数据分析、业务审批和系统更新之间往返的分析师、运营、销售、客服和管理团队。\n2. **用户原来的解决方案是什么？** 从数据工具复制数字到 Slack，等待回复，再手工更新 Salesforce、ServiceNow、Jira 或表格；复杂流程则由工程师维护定制脚本。\n3. **它解决了哪个痛点？** 用户可以从聊天入口查询受治理数据，把答案转成工作簿，经人工审批后再写回业务系统，同时保留原有权限和记录。\n4. **为什么现在出现？** MCP 已解决“让模型读取工具”的基础连接问题，市场开始要求下一层价值：生成持久对象、接收外部事件、执行写操作并保存决策历史。\n5. **如果要做类似产品，可以学习什么？** 每个 Agent 输出都应落到一个可继续工作的对象，而不是一段孤立文字。对内容产品来说，这个对象可以是选题卡、脚本版本、用户问题记录或实验结果。\n\n原始来源：[Sigma：MCP、Webhook 与 Anthropic 模型更新](https://www.sigmacomputing.com/blog/sigma-webhooks-mcp-anthropic-models)\n\n## 深读推荐\n\n### 1. The Defender’s Window\n\n**核心观点：** AI 同时降低攻击和防守成本。随着 Agent 能串联真实系统中的多个弱点，组织不能只依赖上线前测试；但防守者也可以用 Agent 持续检查代码、配置、身份权限和历史漏洞，并把发现到修复的周期从数天压缩到小时级。\n\n**值得学习的部分：** 文章没有把答案写成“建立全自动安全中心”，而是提出逐级扩大自治：先对一个仓库做只读扫描，再做建议式代码审查，然后进入告警分流，最后才自动处理边界非常明确的低风险事件。这是一套适用于所有 Agent 产品的风险设计方法。\n\n**如何应用：** 把自己的自动化按权限分为四级：读取资料、生成建议、修改本地草稿、对外发布。当前任务处于哪一级必须可见；升级到下一级前，至少检查三次真实任务的错误类型，并为最严重错误设置停止条件。\n\n原始来源：[OpenAI：The Defender’s Window](https://openai.com/index/the-defenders-window/)\n\n### 2. Measuring AI agent autonomy in practice\n\n**核心观点：** Anthropic 通过真实 Claude Code 使用数据研究 Agent 一次连续工作的时长。研究发现，最极端的长任务增长明显：2025 年 10 月至 2026 年 1 月，第 99.9 百分位的单轮时长从不足 25 分钟增长到超过 45 分钟。长时任务展示了自治能力的扩展，也放大了方向偏离和用户失去监督的问题。\n\n**值得学习的部分：** 报告没有用“是否自主”这个二元标签，而是观察连续运行时间、人工介入位置和任务尾部分布。评价 Agent 时，不应只看平均成功率；最久、最贵、最不可逆的少数任务往往更能暴露产品风险。\n\n**如何应用：** 记录自动化的三项指标：最长连续运行时间、第一次需要人工纠正发生在哪一步、失败任务是否留下可复用中间结果。若长任务失败后只能全部重来，优先增加检查点，而不是继续延长自治时长。\n\n原始来源：[Anthropic：Measuring AI agent autonomy in practice](https://www.anthropic.com/research/measuring-agent-autonomy)\n\n## 信息源实验雷达\n\n### 人物日\n\n#### 重复主题 1：AI 应增强个人能动性，而不是把判断权集中到系统手里\n\n**谁在谈：** Naval Ravikant、Sam Altman。\n\n**最近 30 天出现情况：** Naval 在 8 月 11 日提出，真正重视软件的人会训练自己的模型；8 月 15 日又用“无法创造神并把它拴住”的表达强调超级能力与控制之间的冲突。Sam Altman 在 7 月 26 日分享自己让 ChatGPT Work 使用历史对话推进长期任务，强调 AI 从回答进入个人执行；他近期在 Startup School 的公开讨论中又把“失去自由、隐私和能动性”描述为需要避免的 AI 未来。过去 30 天内至少出现四条相邻证据，因此这不是一次孤立观点，但两人的立场并不完全相同：Naval 更强调个人所有权与不可控性，Altman 更强调普及能力同时建立制度约束。\n\n**原始证据：**\n\n原始来源：[Naval：People who are serious about software train their own models](https://x.com/naval/status/2086987724037185547)  \n原始来源：[Naval：You cannot create God and put him on a leash](https://x.com/naval/status/2088550653497053623)  \n原始来源：[Sam Altman：ChatGPT Work 的个人任务示例](https://x.com/sama/status/2081396796174282900)  \n原始来源：[Sam Altman：Our principles](https://openai.com/index/our-principles/)  \n原始来源：[Startup School 片段：Sam Altman 谈自由与能动性](https://www.youtube.com/shorts/NC8As6bY8NI)\n\n**他们实际上在讨论什么：** 问题不只是模型属于谁，而是谁定义目标、谁保留数据、谁能检查过程、谁拥有停止系统的权力。个人化 AI 的优势来自私人上下文和持续反馈，但上下文越多、执行权限越大，用户越需要保留最终判断权。\n\n#### 重复主题 2：AI 提高执行速度，但没有取消现实反馈和重要任务\n\n**谁在谈：** Paul Graham、Dan Koe。\n\n**最近 30 天出现情况：** Paul Graham 在 8 月 12 日回应“AI 时代还有多少创业建议成立”时表示，目前几乎全部仍成立；其近期公开回答继续强调，想进入 YC 不应围绕申请技巧，而应真正做东西并理解用户。Dan Koe 在 7 月 31 日把犯错称为大目标的事实来源，8 月 13 日又指出，人会用许多小任务逃避真正重要的任务。过去 30 天至少有四条同向表达，形成持续关注：工具可以加快制作，却不能替代选择、暴露错误和面对反馈。\n\n**原始证据：**\n\n原始来源：[Paul Graham：AI 时代几乎全部创业建议仍成立](https://x.com/paulg/status/2087601208123126228)  \n原始来源：[Paul Graham：Build stuff and understand your users](https://x.com/paulg/with_replies)  \n原始来源：[Dan Koe：错误是事实来源](https://www.threads.com/%40thedankoe/post/Dbd3V5KFbfR/the-primary-reason-people-dont-achieve-big-goals-is-because-they-dont-realize/)  \n原始来源：[Dan Koe：不要用小任务逃避真正重要的任务](https://www.threads.com/%40thedankoe)\n\n**他们实际上在讨论什么：** AI 很容易制造“完成了很多”的感觉：生成更多标题、改写更多版本、搭建更多工具。但真正改变方向的信息通常来自发布后的观看、评论、访谈、购买或失败。执行效率如果没有连接现实反馈，只会让人在错误方向上更快。\n\n#### 本期最值得注意的关注点变化\n\n**过去：** 这些人物的公开讨论常被概括为“AI 会多强”“个人如何利用杠杆”或“如何提高产出”。\n\n**现在：** 最近一个月更值得注意的是，话题开始落到能力归属和判断边界：训练自己的模型、保留个人能动性、继续理解用户、把错误当成事实来源。\n\n**为什么值得注意：** 当通用模型能力快速普及，竞争优势不会仅来自“会使用 AI”，而更可能来自个人积累的上下文、评价标准和反馈数据。这里存在中等强度的共同信号，但不能据此断言四人的长期关注点已全面迁移；Sam Altman 的近期证据更多是产品与治理，Dan Koe 和 Paul Graham 的证据更多是个人行动与创业基本功。\n\n#### 留给我的一个问题\n\n**如果 AI 能替我更快完成内容，却不能替我决定什么值得表达、什么证据足够、什么反馈应该相信，那么我最不应该外包给 AI 的那一步究竟是什么？**\n\n## 今日行动建议\n\n今天做一次 **45 分钟“理解优先”拍摄实验**：\n\n1. 选一篇已经写完但还没拍的 AI 口播稿。\n2. 不看稿，用手机录一遍 90 秒解释，只讲“它是什么、为什么会发生、一个真实例子”。\n3. 回听后只标记三类卡顿：概念说不清、因果接不上、例子证明不了。\n4. 只选择最严重的一处卡顿，查一个原始来源或亲自跑一次工具验证。\n5. 修改对应段落，再录第二遍；不要重写整篇稿。\n\n**完成标准：** 第二遍在同一位置不再需要背句子，并且能用自己的话回答“为什么”。如果仍然卡住，今天不继续润色文案，而把这个卡点记录成下一条用户也可能遇到的问题。\n\n这个动作让一份已有输入经过亲自解释和验证，转成可发布内容；拍摄后的真实卡点又会成为下一轮选题与产品机会的证据。\n\n<!-- DAILY_BRIEF_END -->";

const tasks = [
  {
    number: "01",
    title: "选一篇已有口播稿",
    body: "不新增选题，也不重写整篇。只选择一篇已经写完但尚未完成拍摄的 AI 口播稿，先写下它要服务的具体对象、发生场景和唯一核心判断。",
    first: "把目标对象、具体场景和核心判断各写一句",
    time: "10 分钟",
    tone: "mint",
  },
  {
    number: "02",
    title: "录第一遍 90 秒解释",
    body: "关掉逐字稿，只讲“它是什么、为什么会发生、一个真实例子”。回听后只标记三类卡顿：概念说不清、因果接不上、例子证明不了。",
    first: "直接录第一遍，不为顺口反复重拍",
    time: "15 分钟",
    tone: "blue",
  },
  {
    number: "03",
    title: "只修一个理解卡点",
    body: "选择最严重的一处卡顿，查一个原始来源或亲自跑一次工具验证，只修改对应段落，再录第二遍。保存两次录音和一条差异记录。",
    first: "只选最严重的一处，不扩展成整套研究",
    time: "20 分钟",
    tone: "peach",
  },
];

const learningResources = [
  {
    type: "Y Combinator Startup School",
    title: "How to Talk to Users｜Eric Migicovsky",
    meta: "约 32 分钟 · 英文 · 免费官方课程视频 · 适合产品与内容选题",
    intro: "这是 YC 官方完整课程，不是产品广告或课程招生。今天只看 02:43–14:16：如何避免推销式提问，并用五个问题追问用户最近一次真实经历。",
    why: "今天的口播实验不仅要检查自己能否说清，还要确认内容有没有走到具体用户场景。课程提供的提问方法能把“我觉得用户会这样”改成“用户最近一次真的怎么做”。",
    focus: [
      "谈用户的生活，不要先介绍自己的想法。",
      "问最近一次具体经历，不问“以后会不会”。",
      "重点听用户已经尝试过什么，以及为什么不满意。",
    ],
    action: "只看 02:43–14:16，然后把当前选题改写成一个问题：目标用户最近一次在什么场景遇到它？先去找一条真实回答，不继续看完整课程。",
    boundary: "这堂课面向创业用户访谈，不是短视频流量教程；今天只借它核对用户场景，不把一次访谈当成市场结论。",
    source: "https://www.youtube.com/watch?v=MT4Ig2uqjTc",
    sourceLabel: "Y Combinator 官方 YouTube 视频",
  },
];

const xiaobot = {
  title: "你只拆到了结构，但没走到用户心里",
  author: "姜胡说",
  published: "2026-08-17 23:17:56",
  source: "https://xiaobot.net/post/36942815-ae81-4d10-9742-1e0ffff9b9bd",
};

const weather = { location: "南宁", condition: "有雨", temperature: "25–28℃", icon: "🌧️" };

const planetPosts: Array<{ index: string; author: string; published: string; title: string; body: string; images: string[] }> = [
  {
    index: "1",
    author: "大胡子",
    published: "2026-08-17 13:10",
    title: "如何成为一名知识博主？",
    body: "如何成为一名知识博主？\n\n大多数人的作法是：试图找一套好的方法论；\n觉得合适就照做，不合适就再换一个。\n反复比较，迟迟没有进展。\n\n方法论本身没错，但你的顺序反了。\n反过来——先选一个\"最适合\"你的框架，不是最优的，是最近的，直接上手。然后你采取行动，根据反馈即时调整。\n\n为什么叫\"最适合\"你的呢？这是有引号的，其实那样的方法论根本就不存在。你要选择的是一个感觉最适合你的。它可能并不一定适合你，但不要紧，在行进中调整。\n这样岂不是很浪费？\n不会。知识博主有一个独特的优势：你做错的每一件事，复盘之后都可以变成内容。\n试错本身就是你素材的一部分。\n\n这套系统只有三个动作：\n\n第一个动作，选框架。\n不选最优的，选最像你的。判断\"像不像\"有一个优先级：人最像 > 形式/方向 > 人设/环境。\n人最重要，不是因为他做了什么，是因为他是怎么想事情、怎么表达事情的。\n\n第二个动作，试错。\n你从一开始就知道，选的这个框架，大概率有偏差。你不需要证明它对，你只是在找偏差在哪里。\n有偏差调整偏差就好。因为你在选择框架的时候本身就有预判（否则你为什么会选它呢）。有哪些预判是对的，哪些是错的？在反馈中获得新的知识，重新调整。\n\n第三个动作，复盘。\n每次做完，你问自己一个最关键的问题：到底是框架错了，还是变量错了？\n变量错了，调整变量。如果发现就是框架不匹配，那就重新换框架。\n\n这一点和创业没什么不同。\n\n传统的逻辑是：\"先想清楚，再动手。\"\n这套方法的逻辑是：\"先动手，再想清楚。\"\n每一次试错，都是你在告诉这个世界：\"我是谁，我擅长什么，我跟别人差在哪。\"\n\n这套系统的终极目标，不是让你做出爆款。\n是让你在有限信息下，做决定的次数越来越多。\n你做了100次决定，对了60次，复盘了40次为什么错——你就有了判断力。\n你所有的知识都是在行动中掌握的。\n它们是实实在在的可以在实操中使用的知识。\n这才是真正的知识博主。\n\n还记得那句话吗？\n想拥有一样东西，最好的方式是 -- 让自己配得上它。",
    images: [],
  },
  {
    index: "2",
    author: "大胡子",
    published: "2026-08-17 20:16",
    title: "知识星球最有价值的地方其实是周末会议",
    body: "在我看来，知识星球最有价值的地方其实是周末会议。\n在那里你能看到“思考问题的方式”和“看待世界的角度”，且全部来自于真实案例。\n\n人和人最大的差距其实是认知。\n在很多人眼里，认知这个词太虚了。如果是这样，那恰恰说明你可能还处于“我需要一个具体的实操的方法就能赚到钱”的阶段。\n\n你必须从那个阶段跳出来，\n才能看到真正的问题是什么。\n事实上，“需要一个具体的实操的方法”可能恰恰就是你赚不到钱的原因。\n首先，你应该让自己看见；\n其次，你要学会如何思考。\n这恰恰是周末会议能带给你的。\n那是星球知识密度和深度，以及有效性最高的地方。",
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
            <nav className="date-list" data-archive-list="true" aria-label="选择过往简报日期"><a href="?date=2026-08-18" aria-current="page">2026年8月18日</a></nav>
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
              <div className="nav-sub">{planetPosts.map((post) => <a href={"#planet-" + post.index} key={post.index}>{post.author}：{post.title}</a>)}<a href="#planet-status">昨日原始归档</a><a href="#xiaobaotong-1">小报童：你只拆到了结构，但没走到用户心里</a></div>
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
              <div className="nav-sub"><a href="#hotlist">查看 2026 年 8 月 17 日完整榜单</a></div>
            </details>
          </nav>
          <p className="sidebar-note">点小标题直达正文 · 折叠内容会自动展开</p>
        </aside>

        <div className="page" id="top">
          <section className="hero">
            <div className="date-block"><div className="date-day">18</div><div><p className="date-month">2026 · 08</p><p className="date-week">星期二</p></div></div>
            <div className="hero-copy">
              <p className="eyebrow">TODAY&apos;S DIRECTION</p>
              <h1>先用自己的话讲一遍，<br />只修最严重的卡点。</h1>
              <p className="judgment">今天不新增选题、不重写整篇。选一篇已有口播稿，关掉原文录 90 秒解释，只修一处概念、因果或例子卡点，再录第二遍。</p>
            </div>
            <div className="hero-weather" aria-label={weather.location + "当天天气：" + weather.condition + "，" + weather.temperature}>
              <span className="weather-icon">{weather.icon}</span>
              <span className="weather-copy"><strong>{weather.condition}</strong><small>{weather.location} · {weather.temperature}</small></span>
            </div>
          </section>

          <section className="section" id="today">
            <div className="section-heading compact-heading"><div><p className="eyebrow">THREE PRIORITIES</p><h2>今天只做三件事</h2></div><p>AI 建议：理解优先，只修一处</p></div>
            <div className="task-grid">{tasks.map((task, i) => <article className={"task-card " + task.tone} id={"task-" + (i + 1)} key={task.number}>
              <span className="task-number">{task.number}</span><h3>{task.title}</h3><p>{task.body}</p>
              <div className="task-meta"><span>第一步</span><strong>{task.first}</strong></div><div className="task-time">{task.time}</div>
            </article>)}</div>
            <div className="time-block-heading" id="schedule-heading"><div><p className="eyebrow">TIME BLOCKS</p><h3>今日时间块</h3></div><p>只安排一轮 45 分钟实验，其余留白</p></div>
            <section className="schedule" id="schedule">
              <div><span>上午 · 10 分钟</span><p>从已有稿件里只选一篇，写下目标对象、具体场景和唯一核心判断。不要打开新工具或继续找选题。</p></div>
              <div><span>下午 · 30 分钟</span><p>录第一遍 90 秒解释，标记最严重的卡点；只查一个原始来源或亲自验证一次，再录第二遍。</p></div>
              <div><span>晚上 · 5 分钟</span><p>保存两次录音和一条差异记录。无论结果好坏都停止，不继续润色整篇或重建工作流。</p></div>
            </section>
            <details className="brief-item" id="risk">
              <summary><span className="brief-index">风险</span><span className="brief-main"><span className="pill">今日边界</span><strong>四个必须主动截断的消耗</strong><span>只识别，不新增任务</span></span><span className="plus">＋</span></summary>
              <div className="brief-content">
                <p><strong>把录不顺变成整篇重写：</strong>今天只修一个最严重卡点，不扩大问题。</p>
                <p><strong>让 AI 替代中间思考：</strong>AI 可以补知识和追问，但核心判断必须先由自己说出来。</p>
                <p><strong>用结构替代用户场景：</strong>口播前先说清“谁在什么场景会觉得这与我有关”。</p>
                <p><strong>继续收集：</strong>今天不新增工具、Skill 或工作流。课程只看指定片段，并立刻用于一个真实问题。</p>
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
              <summary><span className="brief-index">行动</span><span className="brief-main"><span className="pill">今日行动建议</span><strong>完成一次 45 分钟“理解优先”拍摄实验</strong></span><span className="plus">＋</span></summary>
              <div className="brief-content">{renderMarkdown(actionAdvice, "action")}</div>
            </details>
          </section>

          <section className="section" id="planet">
            <div className="section-heading"><div><p className="eyebrow">JIANG HUSHUO</p><h2>姜胡说</h2></div><p>昨日 2 条星主原文 · 一篇相关小报童文章</p></div>
            <div className="section-context" id="planet-status">
              <p>2026 年 8 月 17 日原始归档已同步，以下两条内容保持作者、发布时间与原文完整。</p>
              <SourceLink href="/daily-briefing/knowledge/2026-08-17/26-08-17姜胡说知识星球.md" label="查看 8 月 17 日原始归档" />
            </div>
            {planetPosts.map((post) => <details className="planet-card" id={"planet-" + post.index} key={post.index}>
              <summary><div className="avatar">{post.index}</div><div><span className="planet-time">{post.author} · {post.published}</span><strong>{post.title}</strong></div><span className="open-label">原文</span></summary>
              <div className="planet-content"><div className="original"><span>星主原文</span>{renderMarkdown(post.body, "planet-" + post.index)}{post.images.map((src, imageIndex) => <img src={src} alt={post.author + "原始配图 " + (imageIndex + 1)} loading="lazy" key={src} />)}</div></div>
            </details>)}
            <details className="planet-card" id="xiaobaotong-1">
              <summary><div className="avatar">读</div><div><span className="planet-time">小报童 · {xiaobot.author} · {xiaobot.published}</span><strong>{xiaobot.title}</strong><span>阅读导引为 AI 建议，文章原文不在网页转载</span></div><span className="open-label">导引</span></summary>
              <div className="planet-content"><div className="original">
                <span>AI 阅读导引</span>
                <p>这篇文章讨论为什么照搬爆款结构仍可能没人看：结构只是管道，代入感让用户走进来，价值让用户带走一个动作。它与今天的口播实验相连，因为“能说清”之后还要回答“这和谁有什么关系”。</p>
                <p><strong>阅读重点：</strong>只看三种代入感——精准击中、身份认同、同理共鸣——以及“代入感”和“价值”的两次验证。不要把文章改成另一套要背的模板。</p>
                <p><strong>阅读问题：</strong>今天选的口播稿里，目标用户在哪个具体时间、场景和动作中会觉得“这就是我”？看完后他能立刻做哪一件小事？</p>
                <SourceLink href={xiaobot.source} label="小报童原文" />
              </div></div>
            </details>
          </section>

          <section className="section" id="review">
            <div className="section-heading"><div><p className="eyebrow">PERSONAL REVIEW</p><h2>复盘</h2></div><p>本地记录不在公开网页转述</p></div>
            <div className="review-grid">
              <details className="review-card" id="yesterday-review" open>
                <summary>昨日复盘</summary>
                <div>
                  <p><strong>资料状态：</strong>已在本地完成昨天及过去七天记录的读取核对，7 天资料均存在。</p>
                  <p><strong>隐私边界：</strong>公开网页不展示本地记录的正文、摘要、个人事实或用户原话。</p>
                  <p className="advice"><strong>AI 建议：</strong>今天只执行云端早报提出的 45 分钟理解实验，不新增工具和选题；用两遍口述的可观察差异判断哪一处理解真正需要修正。</p>
                </div>
              </details>
              <article className="review-card static-review-card" id="seven-day-trend">
                <h3>近七天趋势</h3>
                <div className="trend-list">
                  <div><strong>资料范围</strong><p>已读取 8 月 11 日至 17 日全部记录；个人趋势不在公开网页展示。</p></div>
                  <div><strong>今日公开实验</strong><p>用同一篇现有口播稿录两遍 90 秒解释，中间只修一个最严重的概念、因果或例子卡点。</p></div>
                  <div><strong>完成标准</strong><p>第二遍在同一位置不再依赖背句子，并能用自己的话回答“为什么”；只记录差异，不扩写成普遍结论。</p></div>
                </div>
              </article>
              <article className="review-card static-review-card diagnosis" id="action-diagnosis">
                <h3>AI 执行力诊断 / 建议</h3>
                <div>
                  <p><strong>公开诊断范围：</strong>本段只诊断今天公开任务的设计，不引用本地记录中的个人事实或原话。</p>
                  <p><strong>行为模式：</strong>按 dbs-action 框架，若验收标准是“拍到顺口为止”，任务没有可靠终点，准备和修改就容易替代完成。</p>
                  <p><strong>AI 诊断：</strong>当前更适合把“理解”改造成可观察任务：第一遍暴露卡点，只修一处，再用第二遍验证，而不是继续收集方法。</p>
                  <p><strong>一句话处方：</strong>今天不靠重写证明理解，用两遍 90 秒口述找出并修正一个卡点。</p>
                  <p><strong>适用边界：</strong>单次自我实验只说明这一个主题、这一次测试下的差异，不能证明某种拍摄方法普遍有效。</p>
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
            <div className="section-heading"><div><p className="eyebrow">HOT LIST</p><h2>热点榜单</h2></div><p>2026 年 8 月 17 日完整榜单</p></div>
            <a className="hotlist" href="/daily-briefing/hotlist/2026-08-17.html" aria-label="打开热点榜单"><span>昨日榜单</span><strong>查看 2026 年 8 月 17 日完整榜单</strong><span className="arrow">↗</span></a>
          </section>

          <footer><p>先讲一遍，<br />只修一个理解卡点。</p><span>每日 09:00 更新 · 完整内容折叠保存</span></footer>
        </div>
      </div>
    </main>
  );
}
