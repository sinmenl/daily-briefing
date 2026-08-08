const briefDate = "2026-08-08";

const tasks = [
  { number: "01", title: "先保护手机里的数据，再判断怎么修", body: "这是基于昨日日记的 AI 建议，不是既有预约。手机屏幕已被水杯砸碎，数据安全比继续忍着使用更紧迫。先确认触控、显示、充电和备份是否正常；只记录现状与维修选项，今天不需要立刻决定购买新手机。", first: "完成一次照片、通讯录与重要文件备份", time: "20–30 分钟", tone: "mint" },
  { number: "02", title: "用“谁—场景—痛点”完成一段表达", body: "昨日日记和知识星球都围绕同一件事：痛点决定结构。今天不继续研究钩子和算法，只选一个真实对象，写清他在什么场景卡在哪里，再按“痛点—解决方案—操作步骤”说出第一版。", first: "写下一句：谁，在什么场景，有什么痛点", time: "40–50 分钟", tone: "blue" },
  { number: "03", title: "用走路启动，不等完整学习状态", body: "昨晚在南湖散步时，你终于点开一直挂在通知栏的知识星球，并发现不必先进入完美学习状态。今天复用这个已经发生过的有效条件：走路时听或读一小段，只留下一个问题或一段 60 秒录音。", first: "穿鞋出门走 10 分钟，同时打开一条材料", time: "25–35 分钟", tone: "peach" },
];

const creatorUpdates = [
  { tag: "dontbesilent", title: "dbskill 从知识库继续走向任务路由与诊断", intro: "未发现可可靠确认于 8 月 7 日发布的 X 新帖；公开文档的结构变化值得记录。", content: ["没有发现能够可靠确认于 8 月 7 日发布的 @dontbesilent X 新帖，因此不拿历史推文充数。", "但 dbskill 的公开文档近期出现了一个值得单独记录的结构变化：公开的新手说明现在写明，系统已从 16,152 条推文整理出 4,176 个知识原子和 29 个 AI Skills，而且强调用户不需要先知道该调用哪个 Skill，只需通过 /dbs 提交真实任务，由系统选择切入点。", "它的 dbs-content 也明确规定：AI 不替用户写内容，而是诊断选题确认之后，形式、表达、方向到底对不对。", "这两个设计放在一起很有意思：知识库阶段问“我有什么知识”；Skill 阶段问“这些知识能做什么”；路由阶段问“面对这个真实问题，该调用什么”；诊断阶段则让 AI 给判断依据，人自己完成表达和决策。", "这比“建一个知识库然后问问题”多了一层非常重要的产品设计：用户不应该学习你的系统结构，系统应该理解用户的任务。", "对你做 AI 知识库内容尤其值得借鉴。与其介绍“我有多少资料、多少 Skill”，不如展示：我只告诉它一个真实问题，它是怎样决定下一步该查什么、调用什么、最后让我做什么。这才是普通用户更容易理解的价值。"], source: "https://github.com/dontbesilent2025/dbskill", sourceLabel: "dbskill 公开仓库" },
  { tag: "Dan Koe", title: "未发现 8 月 7 日可核验的新更新", intro: "不拿历史文章占位。", content: ["本次未发现可以可靠确认于 8 月 7 日发布的完整 Newsletter 或可核验 X 长内容。", "目前公开可完整读取的近期文章仍包括 5 月 7 日的《Growing on social media is easy, actually》，重点讨论从零增长账号时可控制的关键变量。因为不是昨日内容，本期不重复总结。", "今日状态：未发现可核验新更新。"], source: "https://thedankoe.com/", sourceLabel: "Dan Koe 公开主页" },
  { tag: "Naval", title: "最新完整节目仍是《Live in the Future》", intro: "没有发现 8 月 7 日新节目。", content: ["Naval 的公开播客页面目前仍把 7 月 2 日《Live in the Future》列为最新完整节目，没有发现 8 月 7 日新节目。", "因此本期不拿历史观点占位。", "今日状态：未发现可核验新更新。"], source: "https://nav.al/", sourceLabel: "Naval 官网" },
  { tag: "姜胡说", title: "未发现可完整核验的 8 月 7 日公开视频", intro: "公开检索无法同时稳定取得完整口播与准确发布时间。", content: ["公开检索仍未稳定获得姜胡说 8 月 7 日抖音 / 视频号更新的完整口播和准确发布时间，因此不将历史视频包装成昨日更新。", "目前能完整读取的一条历史公开视频，体现了他比较稳定的方法：先真正理解自己要讲的东西，再放掉稿子，用和朋友聊天的方式表达。该视频实际发布于 3 月 3 日，只作为方法论背景，不属于昨日动态。"], source: "https://www.douyin.com/search/%E5%A7%9C%E8%83%A1%E8%AF%B4", sourceLabel: "姜胡说抖音公开搜索" },
];

const industryStories = [
  { tag: "创作边界", title: "Hank Green 因过度依赖 LLM，公开建立自己的“AI 使用政策”", intro: "当 AI 能参与所有步骤以后，哪些步骤必须由创作者本人承担？", source: "https://www.reddit.com/r/nerdfighters/comments/1vib58u/hank_greene_has_posted_a_video_addressing_his_ai/", sourceLabel: "Hank Green 新视频与 AI Policy 讨论入口", content: <><p>YouTube 创作者 Hank Green 在受到观众质疑后，公开反思自己近期大量依赖 LLM 做研究、编辑和想法生成，并制定个人 AI 使用规则；他还表示会降低部分项目的产出节奏，把重心重新转向质量和更具本人特征的作品。</p><p>这件事情对知识创作者比“平台又出了什么 AI 功能”重要得多。因为它暴露的不是工具问题，而是一个新的创作者产品问题：</p><blockquote><strong>当 AI 能参与所有步骤以后，到底哪些步骤必须由创作者本人承担？</strong></blockquote><p>如果全部外包：AI 找资料 → AI 总结 → AI 找观点 → AI 写稿 → AI 配图 → AI 剪辑。即使最后账号头像还是你，用户真正消费的“你”已经越来越少。</p><p>所以以后创作者更需要的不是一句“本内容由 AI 辅助”，而是一套内部边界：AI 可以整理资料、提出反例、检查漏洞、帮助检索；但最终判断由谁完成、个人经历是否真实、表达是否仍然是自己的，都需要明确。</p><p><strong>AI Policy 很可能会逐渐成为知识创作者的一种产品说明书。</strong></p><p>对你而言，可以直接建立自己的简版规则：AI 帮我检索、整理、质疑；真实经历、最终判断和发布责任由我承担。这比“不用 AI”现实，也比“全都让 AI 做”更有长期信任价值。</p></> },
  { tag: "内容治理", title: "“AI 标签”开始出现副作用：真人创作者也可能被误判", intro: "透明度如果没有准确性和申诉机制，自己也会成为新的用户伤害。", source: "https://support.tiktok.com/en/using-tiktok/creating-videos/ai-generated-content", sourceLabel: "TikTok AI 生成内容标签说明", content: <><p>近期有创作者报告，真人制作的 TikTok、Instagram 内容被误标为 AI 生成。对创作者来说，这已经不只是一个技术识别错误，因为随着用户对低质 AI 内容产生负面联想，“AI generated”本身可能影响可信度以及商业合作。</p><p>平台原本想解决的是“用户不知道哪些内容是 AI”，新的问题却变成“平台自己能不能准确知道哪些内容是 AI？”这就是典型的二阶产品问题。</p><p>第一阶段是：AI 内容增加 → 增加 AI 标签。第二阶段则是：检测存在误判 → 真人被标错 → 创作者信誉受损 → 用户开始不信任标签。</p><p>这说明产品治理不能只有“检测”，还需要解释为什么被标记、提供证据、允许申诉、修正后恢复信誉，并区分“AI 辅助”和“主体内容由 AI 生成”。</p><p><strong>透明度如果没有准确性和申诉机制，自己也会成为新的用户伤害。</strong></p><p>这其实也是很好的用户研究案例：解决一个问题之前，要问“这个机制错的时候，谁承担成本？”</p></> },
  { tag: "创作者商业", title: "MrBeast 正在从“超级创作者”变成一个控股式商业系统", intro: "创作者本人正在从整个业务本身，变成系统中的一项资产。", source: "https://www.thecashmerefund.com/portfolio-company/beast-industries", sourceLabel: "Beast Industries 业务组合", content: <><p>近期披露的投资材料显示，MrBeast 的商业设想经历了明显变化：早期探索播客、NFT、订阅等业务，后来逐渐形成媒体、消费品和软件等更大的业务板块，并继续涉足会员、金融科技、移动服务和创作者服务等方向。</p><p>最值得看的不是 MrBeast 又做了多少项目，而是：<strong>他正在降低整个业务对“Jimmy Donaldson 本人每天拍视频”的依赖。</strong></p><p>创作者商业化通常经历：本人等于内容 → 本人带来流量和广告 → 流量进入自有产品 → 品牌形成产品组合和独立业务 → 创作者本人只是整个系统的一项资产。</p><p>这也是“个人 IP”和“公司”真正的区别。</p><p>普通创作者当然没必要模仿 MrBeast 做几十个项目，但这个逻辑值得保留：<strong>内容最好最终积累一种不需要重新发布一条视频才能继续存在的资产。</strong></p><p>可能是邮件列表、知识库、产品、Skill、会员、搜索流量、社群、数据集或方法论。否则账号一停更，业务就立即停摆。</p></> },
  { tag: "专业内容", title: "LinkedIn 等平台开始重新定义“思想内容”的真实性", intro: "知识内容最大的资产不是信息，而是判断来源。", source: "https://news.linkedin.com/2026/keeping-conversations-real-on-linkedin", sourceLabel: "LinkedIn 官方：Keeping conversations real", content: <><p>LinkedIn 正面对大量格式化、模板化的 AI “thought leadership” 内容，并在探索举报、减少可疑内容传播等机制。其核心矛盾在于：LinkedIn 用户看专业内容，本质上是在判断“这个人的经验和判断是否值得信任”，因此通用 AI 文案对平台价值的伤害比娱乐内容更加直接。</p><p>这里有一个非常重要的内容产品判断：<strong>知识内容最大的资产不是信息，而是判断来源。</strong></p><p>“行动比准备重要”这句话 AI 能生成一万遍。但“我准备了两个月 AI 知识库视频，却一直没有发布。我回看自己的记录以后才发现，我缺的不是资料，而是允许自己的观点暂时不完整”，这是某个人才能提供的证据链。</p><p>未来知识内容很可能会越来越分成两类：可压缩的信息，AI 越来越擅长；不可压缩的经历与判断形成过程，人的价值提高。</p><p>所以知识博主不一定要比 AI “知道更多”。更值得积累的是：<strong>我是怎么知道的。</strong></p></> },
  { tag: "推荐系统", title: "创作者经济研究把“增长速度”而不是“当前体量”纳入流量分配", intro: "不要只记录绝对播放量，也要记录内容与用户匹配如何变化。", source: "https://arxiv.org/abs/2608.02293", sourceLabel: "Dynamic Traffic Allocation 研究原文", content: <><p>8 月 3 日发布的一项创作者平台研究讨论了一个现实问题：平台如果一直把流量给成熟头部，可以获得更好的即时收益，却可能失去未来的新供给；而无差别扶持新人同样低效。研究提出，应结合创作者当前价值与未来增长动量动态配置流量。</p><p>这对刚开始做内容的人有一个很实际的启发。不要只记录“播放 300、500、800”，应该记录变化：第 1 条没人评论；第 2 条有人问工具叫什么；第 3 条有人提出真实使用问题；第 4 条有人说“我也遇到过”。</p><p>后者说明的可能不是“流量大了”，而是：<strong>产品开始和某类用户产生匹配。</strong></p><p>你当前阶段最有价值的不是追求一个漂亮的绝对数字，而是建立一个自己的“增长动量指标”。</p><p>比如每条视频只跟踪：有没有陌生人提出具体问题；有没有人复述你的观点；有没有人收藏作为以后使用的东西；有没有自然出现下一条选题。</p><p>这四项比“1000 播还是 3000 播”更能告诉你方向有没有形成。</p></> },
];

const planetPosts = [
  { time: "2026-08-07 10:39", title: "先想清楚：谁、场景与痛点", text: `我拍视频的方法没那么复杂，就几个关键节点：
谁？在什么场景？有什么痛点？
想明白这个，把它放在一个合适的结构里（基本就是：痛点+解决方案+操作步骤），就完事了。

我发现太多人都把精力放在了那些根本不重要的地方：
我要拍爆款，这样我才能有流量->我需要爆款结构->这要放个钩子->这儿也要放个钩子->哎呀！我都这么努力了，为什么没流量？！
他们或者她们为了流量和逃避思考真正的问题，把所有的精力都放在了怎么找到“快速拍出爆款，快点发财”的捷径上。
然后，把自己都感动了：我都这么努力了，为什么得不到应有的回报。

废物到哪儿都是废物。在自己的本职是个废物，现在拍视频了还是废物。
为了自己，的“梦”、“想”，不余余力；永远逃避真正重要的事。` },
  { time: "2026-08-07 10:54", title: "痛点决定结构", text: `为什么一定要想清楚，谁，在什么场景，有什么痛点；
然后才是结构？

因为痛点决定结构：
实操型 -> 步骤式;
认知型 -> 对比式;
情感型 -> 叙事式；

定不准痛点，所谓的结构都是张冠李戴。` },
  { time: "2026-08-07 11:08", title: "代入感来自场景、身份与情绪", text: `拍视频一定要有代入感。
什么是代入感？就是：我靠！这不就是我吗？这不就是我们隔壁的林婶吗？

代入感靠的不是什么文采；
而是场景（能脑补的画面）+身份（这说的就是我）+情绪（那一刻的感受）；
这东西不是文采和钩子能带给你的。
靠的是你对谁？什么情况下？痛点的理解。
理解的越深，哪怕你用最简单、平时的语言说出来，也会直接把人代入到场景中。

更重要的是：
我每天思考的是：谁？在什么情况下？痛点？
3年后，我对用户、需求、痛点的理解就越深。

你每天研究的是什么呢？流量、算法、钩子...
算法一变，
你留下的是什么呢？

放心，算法一定会变。而且根本用不了3年。` },
];

const xiaobotText = `报了口才班，练了绕口令，面对镜头还是磕磕巴巴。你以为是嘴巴的问题；真正的原因是：脑子没想清楚。

你真正要练的是输出力。写文章是输出力。拍视频是输出力。直播是输出力。跟客户沟通也是输出力。口才是输出力的冰山一角，水面下的结构才是关键。

口才训练营大多解决的是“敢说”的问题，解决不了“会说”的问题。“会说”的前提是什么？你脑子里本身就有结构。大多数人以为是嘴的问题，跑去练嘴。练再久，都不会有结果。因为根儿就不在嘴上。

输出力分四层

第一层，写。思考的过程，能不能把一件事写清楚。第二层，说。梳理的过程，能不能实时对话，不卡壳。第三层，教。验证的过程，能不能把复杂的东西讲给小白听。第四层，拍。输出的过程，能不能对着镜头讲清楚。

先思考（写）→ 再梳理（说）→ 验证自己懂了（教）→ 最后输出（拍）。大多数人是越过了前三层，直接跑去做第四层。一定会不舒服。

正确的流程就一句话：先写清楚，再往下走。写的时候通顺，读出来不通顺——说明逻辑链有问题。回去改结构，不是硬背逐字稿。写清楚了，说和教自然就顺了。拍只是前三层的输出。这一条，能解决你80%的问题。

写不出来

大部分都是想一步到位。你问一个人：“你会画画吗？”他通常会回答说不会。怎么可能不会画呢？你一岁不到的时候就已经会画了。你说的不会画是指画得不好看。因为觉得自己画得不好看，所以就不画了。这就是你不会画画的原因。

你会写吗？当然会写。说不会写是写的不好。所以就不写了。你不需要写得好。你只需要写出来。写成流水账也没问题，事实上，你一开始完全可以写成流水账。好，是后面的事。甚至是几个月以后的事儿。

你写不出来，另一个更深层次的原因，不是因为你不会写。是你不知道自己这条到底要表达什么。这叫锚点缺失。锚点就是你的评判标准。没有锚点，所有方法论都是悬空的。

就会出现昨天社群老伙计的那个“不会拆爆款、不会数据分析、发完视频不会一个一个测变量”的问题。你以为你缺的是方法。你缺的是目标。拆了一百个爆款，不知道为什么要拆。学了一堆拍摄技巧，不知道自己的视频要传递什么。每天更新，不知道“好”的标准是什么。

锚点缺失的人，长什么样

第一种：拼数量。“我做了50条视频，比他多，为什么他爆了我不爆？”你的标准是“做了多少”。正确的标准是“影响力”。一条视频，影响了一个人，比你发50条没人看有价值。

第二种：什么火做什么。今天学口播，明天学Vlog，后天学剧情。换了一圈，发现没有一条是自己真正想做的。没有锚点，任何方法都像救命稻草。

第三种：写不出一句话总结。“这条视频帮什么人解决什么问题？”——你答不上来。这不是文笔问题，是锚点问题。

锚点（知道去哪）→ 输出力（知道怎么组织）→ 口才（知道怎么表达）。顺序不能乱。否则，漂移玩得再帅，你也到达不了目的地。你连目的地在哪儿都不知道。

应该怎么拍视频呢

第一步，定锚点。拍摄之前，问问自己：“这条视频能给用户带来什么，我希望观众看完记住什么？”这句话就是你的锚点。回答不出来，不要开拍。后面的脚本、节奏、画面、语调——都围绕它展开。锚点定了，标准就定了。

锚点还有一个更实际的作用：这条视频好在哪儿？数据会怎么样？收藏率、评论量、分享率……为什么？猜对了，记下来。猜错了，下次调整。

人的大脑就是一台推测机器。它代表了你对这件事情的理解。有推测，才有验证。有验证，才能找到你理解的世界与真实世界的偏差。这才是真正的积累。

第二步，写脚本。有了锚点，写脚本就是“怎么把这件事讲清楚”。开头，一句话抛锚点。中间，展开论证。结尾，把锚点再强调一遍。

我个人经常使用的结构是：开头（吸引+洞见）+中间（解决方案）+结尾（金句）。你不需要逐字稿。你需要结构。结构清楚了，根本不需要背，因为是你自己的逻辑。

试着说出来、讲给别人（这个别人很可能是空气）听。通不通顺，有没有卡顿的地方。录是最后一步。

第三步，录。写清楚了，录就是把它说出来。卡了，不要硬背。回去看结构：是不是逻辑链断了？是不是跳过了某一步？90%的卡壳，是结构问题，不是嘴的问题。

对新手来说，我个人建议不要一上来就录。至少分两次，一次是录音，一次是录像。录音的时候相对单纯一点。去掉所有的无关因素，就是把道理讲清楚。然后把录音的文本发送给AI，重新再过一遍：我的锚点是什么？我怎样把这件事情讲清楚？有更好的方法吗？然后才是录像。

有准备的人和没准备的人是完全不一样的。花时间认真准备的人和仅仅是准备了的人是不一样的。

总结一哈

口才不好 → 输出力不足 → 锚点缺失。根因在锚点。没有锚点，所有方法都是悬空的。知道要去哪儿，自然就知道该怎么做了。`;

const weather = { location: "南宁", condition: "雷阵雨", temperature: "26–34℃", icon: "⛈️" };

function SourceLink({ href, label }: { href: string; label: string }) {
  return <p><a className="archive-link" href={href}>阅读原始来源：{label} ↗</a></p>;
}

export default function Home() {
  return (
    <main data-brief-date={briefDate}>
      <header className="topbar"><a className="brand" href="#top" aria-label="返回顶部"><span className="brand-dot" />蔓蔓的早课</a><div className="top-actions"><button className="menu-button" type="button" aria-label="打开阅读目录" aria-controls="content-menu" aria-expanded="false" data-menu-button><span /><span /><span /></button><details className="date-picker"><summary aria-label="选择简报日期"><span className="calendar-symbol" aria-hidden="true">▦</span><span>{briefDate.replaceAll("-", ".")}</span><span className="chevron">⌄</span></summary><nav className="date-list" data-archive-list="true" aria-label="选择过往简报日期"><a href="?date=2026-08-08" aria-current="page">2026年8月8日</a></nav></details><div className="status"><span className="status-dot" />每天自动更新</div></div></header>
      <button className="sidebar-overlay" type="button" aria-label="关闭阅读目录" data-menu-close />
      <div className="app-shell">
        <aside className="sidebar" id="content-menu" aria-label="简报阅读目录"><div className="sidebar-head"><div><span className="sidebar-kicker">CONTENTS</span><strong>今天看什么</strong></div><button className="menu-close" type="button" aria-label="关闭阅读目录" data-menu-close>×</button></div><nav className="sidebar-nav">
          <details className="nav-group" data-nav-group><summary className="nav-title"><span className="nav-icon icon-focus">✓</span><span>今日计划</span><span className="nav-chevron">⌄</span></summary><div className="nav-sub">{tasks.map((task, i) => <a href={`#task-${i + 1}`} key={task.title}>{task.title}</a>)}<a href="#schedule">今日时间块</a><a href="#risk">今日风险</a></div></details>
          <details className="nav-group" data-nav-group><summary className="nav-title"><span className="nav-icon icon-briefing">▤</span><span>每日资讯</span><span className="nav-chevron">⌄</span></summary><div className="nav-sub">{creatorUpdates.map((item, i) => <a href={`#creator-${i + 1}`} key={item.tag}>{item.tag}：{item.title}</a>)}{industryStories.map((item, i) => <a href={`#story-${i + 1}`} key={item.title}>{i + 1}. {item.title}</a>)}<a href="#product-observation">产品观察：责任归属</a><a href="#early-action">今日行动建议</a></div></details>
          <details className="nav-group" data-nav-group><summary className="nav-title"><span className="nav-icon icon-planet">✦</span><span>姜胡说</span><span className="nav-chevron">⌄</span></summary><div className="nav-sub">{planetPosts.map((item, i) => <a href={`#planet-${i + 1}`} key={item.time}>大胡子：{item.title}</a>)}<a href="#xiaobaotong-1">小报童：你报了口才班还是不会说</a></div></details>
          <details className="nav-group" data-nav-group><summary className="nav-title"><span className="nav-icon icon-review">↺</span><span>复盘</span><span className="nav-chevron">⌄</span></summary><div className="nav-sub"><a href="#yesterday-review">昨日复盘</a><a href="#seven-day-trend">近七天趋势</a><a href="#action-diagnosis">AI 执行力诊断</a></div></details>
          <details className="nav-group" data-nav-group><summary className="nav-title"><span className="nav-icon icon-briefing">↗</span><span>今日深读</span><span className="nav-chevron">⌄</span></summary><div className="nav-sub"><a href="#deep-read-1">Hank Green 的个人 AI Policy</a><a href="#deep-read-2">创作者动态流量分配</a><a href="#deep-read-3">GenAI 与 UX Research</a></div></details>
          <details className="nav-group" data-nav-group><summary className="nav-title"><span className="nav-icon icon-hotlist">↗</span><span>热点榜单</span><span className="nav-chevron">⌄</span></summary><div className="nav-sub"><a href="#hotlist">查看 2026 年 8 月 7 日完整榜单</a></div></details>
        </nav><p className="sidebar-note">点小标题直达正文 · 折叠内容会自动展开</p></aside>

        <div className="page" id="top">
          <section className="hero"><div className="date-block"><div className="date-day">08</div><div><p className="date-month">2026 · 08</p><p className="date-week">星期六</p></div></div><div className="hero-copy"><p className="eyebrow">TODAY&apos;S DIRECTION</p><h1>不等学习状态，<br />先让真实问题带你启动。</h1><p className="judgment">昨天游泳、散步和阅读都发生了；散步还打破了“必须先进入学习状态”的门槛。近周睡眠与系统维护负荷偏高，今天先保护手机数据，再用一条 60 秒表达验证“谁—场景—痛点”。</p></div><div className="hero-weather" aria-label={`${weather.location}当天天气：${weather.condition}，${weather.temperature}`}><span className="weather-icon">{weather.icon}</span><span className="weather-copy"><strong>{weather.condition}</strong><small>{weather.location} · {weather.temperature}</small></span></div></section>

          <section className="section" id="today"><div className="section-heading compact-heading"><div><p className="eyebrow">THREE PRIORITIES</p><h2>今天只做三件事</h2></div><p>AI 建议：先处理真实损失，再做一次小验证</p></div><div className="task-grid">{tasks.map((task, i) => <article className={`task-card ${task.tone}`} id={`task-${i + 1}`} key={task.number}><span className="task-number">{task.number}</span><h3>{task.title}</h3><p>{task.body}</p><div className="task-meta"><span>第一步</span><strong>{task.first}</strong></div><div className="task-time">{task.time}</div></article>)}</div><div className="time-block-heading" id="schedule-heading"><div><p className="eyebrow">TIME BLOCKS</p><h3>今日时间块</h3></div><p>每段只放一个结果，保留缓冲</p></div><section className="schedule" id="schedule"><div><span>上午 / 起床后</span><p>正常吃饭、补水；用 20–30 分钟确认手机状态并完成备份。不要把“修还是买”扩展成一上午的型号研究。</p></div><div><span>下午 / 精力较好时</span><p>写一句“谁—场景—痛点”，用 40–50 分钟完成一段 60 秒表达。先录音即可，不强制拍摄、剪辑或发布。</p></div><div><span>晚上</span><p>走 20–30 分钟，途中打开一条材料或回听录音，只留一个问题。回家后停止继续补系统，给睡眠留至少一小时空白。</p></div></section><details className="brief-item" id="risk"><summary><span className="brief-index">风险</span><span className="brief-main"><span className="pill">今日边界</span><strong>三个可能让计划失效的触发点</strong><span>只识别触发点，不增加任务</span></span><span className="plus">＋</span></summary><div className="brief-content"><p><strong>把备份变成消费研究：</strong>今天先保护数据，不要求立刻选出新手机。</p><p><strong>把一段表达升级成完整视频工程：</strong>不增加布景、钩子、封面和剪辑；先确认对象与痛点是否清楚。</p><p><strong>把“还没理解”当成不能打开：</strong>允许只读一段、留一个问题；阅读不是考试。</p></div></details></section>

          <section className="section" id="briefing"><div className="section-heading"><div><p className="eyebrow">DAILY INFORMATION</p><h2>每日资讯</h2></div><p>逐段完整搬运 8 月 8 日云端《每日早报》</p></div><div className="section-context"><p><strong>主要观察窗口：8 月 7 日至今早的最新公开更新。</strong> 对无法准确核验为昨日发布的博主内容，不用旧内容补位。</p><p><strong>今日核心判断：</strong>AI 内容竞争正在进入“信任成本”阶段。过去创作者主要优化生产效率；现在平台和用户开始追问：哪些环节用了 AI、判断到底来自谁、内容是否还具有真实经验与责任归属。与此同时，成熟创作者正在从“个人账号”升级成媒体、消费品、软件和会员业务组成的公司。</p></div><div className="brief-list">{creatorUpdates.map((item, i) => <details className="brief-item" id={`creator-${i + 1}`} key={item.tag}><summary><span className="brief-index">人</span><span className="brief-main"><span className="pill">{item.tag}</span><strong>{item.title}</strong><span>{item.intro}</span></span><span className="plus">＋</span></summary><div className="brief-content">{item.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<SourceLink href={item.source} label={item.sourceLabel} /></div></details>)}</div><div className="section-heading compact-heading"><div><p className="eyebrow">YESTERDAY&apos;S STORIES</p><h2>行业重要新闻：5 条</h2></div><p>完整保留事实、判断与实践启发</p></div><div className="brief-list">{industryStories.map((story, i) => <details className="brief-item" id={`story-${i + 1}`} key={story.title}><summary><span className="brief-index">{String(i + 1).padStart(2, "0")}</span><span className="brief-main"><span className="pill">{story.tag}</span><strong>{story.title}</strong><span>{story.intro}</span></span><span className="plus">＋</span></summary><div className="brief-content">{story.content}<SourceLink href={story.source} label={story.sourceLabel} /></div></details>)}</div>
            <details className="brief-item" id="product-observation"><summary><span className="brief-index">观察</span><span className="brief-main"><span className="pill">今日产品观察</span><strong>AI 正在把“内容生产问题”变成“责任归属问题”</strong><span>来源、参与、判断与责任需要变成可追踪的产品结构。</span></span><span className="plus">＋</span></summary><div className="brief-content"><p>今天几条信息其实指向同一个变化：<strong>AI 正在把“内容生产问题”变成“责任归属问题”。</strong></p><p>以前用户判断内容：好不好看？有没有用？现在多了一层：这是怎么生产出来的？我为什么应该相信？</p><p>于是产品必须逐渐回答四个问题：<strong>来源</strong>——这句话从哪里来；<strong>参与</strong>——AI 参与了哪一步；<strong>判断</strong>——谁做了最终选择；<strong>责任</strong>——错了以后谁负责。</p><p>这套框架不只是用于内容。做 AI 知识库、Skill、Agent 都可以用。一个知识库只回答“你应该开始做知识博主”是不够的。更完整的产品应该告诉你：它从哪几条记录里发现模式、哪些地方存在反证、为什么目前更倾向这个判断、哪一步仍然需要你自己决定。</p><p>这时候 AI 从“答案机器”变成了：<strong>可追踪的判断辅助系统。</strong>这可能比单纯 RAG 搜索更值得做成 AI 知识库内容主题。</p></div></details>
            <details className="brief-item" id="early-action"><summary><span className="brief-index">行动</span><span className="brief-main"><span className="pill">今日行动建议</span><strong>给自己的 AI 内容工作流写一个 v0.1《AI 使用边界》</strong><span>不用发布，只花 10 分钟。</span></span><span className="plus">＋</span></summary><div className="brief-content"><p>允许 AI：搜索公开资料、整理历史笔记、找反例、检查逻辑、提出结构方案。</p><p>必须由本人完成：真实经历、最终观点、案例真实性确认、是否发布、对内容承担责任。</p><p>发布前必须检查：有没有一句自己都不真正理解的话；有没有 AI 虚构事实；有没有把 AI 判断写成自己的经历；有没有说明重要的不确定性。</p><p>第一批 AI 知识库视频甚至可以不讲“知识库怎么搭”，直接讲：<strong>“用了这么久 AI，我开始觉得最重要的不是怎么让 AI 多做一点，而是哪些东西我绝对不能外包给它。”</strong></p><p>这条内容天然包含真实使用经验、AI 工作流、知识创作和一个可讨论的判断。</p><p><strong>AI 把生产成本降下来以后，人的价值不会自动消失；真正上涨的是可验证的经验、判断和责任。</strong></p></div></details>
          </section>

          <section className="section" id="planet"><div className="section-heading"><div><p className="eyebrow">JIANG HUSHUO</p><h2>姜胡说</h2></div><p>前一天知识星球原文与小报童原文</p></div><div className="section-context"><p><strong>昨日归档区间：</strong>2026-08-06 23:30 至 2026-08-07 23:30。共 3 条星主原文；以下忠实保留，不添加额外解读。</p></div>{planetPosts.map((post, i) => <details className="planet-card" id={`planet-${i + 1}`} key={post.time}><summary><div className="avatar">胡</div><div><span className="planet-time">大胡子 · {post.time}</span><strong>{post.title}</strong><span>点击展开完整星主原文</span></div><span className="open-label">原文</span></summary><div className="planet-content"><div className="original"><span>星主原文</span><p style={{ whiteSpace: "pre-wrap" }}>{post.text}</p>{i === planetPosts.length - 1 && <SourceLink href="/daily-briefing/knowledge/2026-08-07/26-08-07姜胡说知识星球.md" label="查看 8 月 7 日原始归档" />}</div></div></details>)}<details className="planet-card" id="xiaobaotong-1"><summary><div className="avatar">读</div><div><span className="planet-time">小报童 · 姜胡说 · 2026-08-03 17:40:51</span><strong>你报了口才班还是不会说，因为缺少一个锚点</strong><span>点击展开完整小报童原文</span></div><span className="open-label">原文</span></summary><div className="planet-content"><div className="original"><span>小报童原文</span><p style={{ whiteSpace: "pre-wrap" }}>{xiaobotText}</p><SourceLink href="https://xiaobot.net/post/0fe35cec-f8be-477e-ae8f-59e35ad887c6" label="小报童原文" /></div></div></details></section>

          <section className="section" id="review"><div className="section-heading"><div><p className="eyebrow">PERSONAL REVIEW</p><h2>复盘</h2></div><p>事实与 AI 建议分开呈现</p></div><div className="review-grid"><details className="review-card" id="yesterday-review" open><summary>昨日复盘</summary><div><p><strong>事实：</strong>8 月 7 日日记记录睡到十点多、查看云端早报、游泳、在朋友家吃饭、去南湖散步，并在散步中打开一直挂在通知栏的知识星球。游泳后水杯砸碎了 iPhone 11 屏幕。</p><p><strong>完成与未完成：</strong>完成了运动、散步、阅读与一段关于视频结构的记录；没有记录当天完成或发布视频，也没有记录手机已经备份、维修或更换。</p><p><strong>情绪与精力信号：</strong>日记明确写到知识星球通知一直存在，却迟迟不愿打开；散步后心情不再那么浮躁，启动门槛下降。近七天仍有通宵、凌晨入睡、补觉与游泳不适，计划应继续缩小。</p><p><strong>需延续：</strong>环境切换和走路已经真实帮助启动；“谁—场景—痛点”也提供了比研究钩子更稳定的观察方向。</p><p><strong>需避免：</strong>不要把阅读自动升级成“必须进入学习状态并完全理解”，也不要因手机损坏把今天全部变成消费比较。</p><p className="advice"><strong>AI 建议：</strong>今天先备份，再用昨天刚读到的结构做一段 60 秒表达；只验证对象和痛点是否清楚。</p></div></details><details className="review-card" id="seven-day-trend"><summary>近七天趋势</summary><div className="trend-list"><div><strong>重复目标</strong><p>反复出现的目标是开始做 AI 知识视频，把每日简报、知识库、直播笔记和真实问题转成能够被人理解、使用与反馈的内容。</p></div><div><strong>重复阻碍</strong><p>晚睡、游戏与信息流、系统故障排查、继续输入、害怕观点错误，以及“必须进入状态”的前置要求，持续把第一版推迟。</p></div><div><strong>精力变化</strong><p>一周内出现通宵、凌晨四点入睡、白天补觉、茶饮后难眠和游泳不适；8 月 7 日散步时浮躁下降，说明低强度运动可能比继续刷信息更能恢复注意力。</p></div><div><strong>已有资产</strong><p>简报系统、教程、脚本、知识星球采集、直播笔记和对用户痛点的观察已经存在。现在缺的不是更多系统，而是让一条表达进入真实反馈。</p></div></div></details><details className="review-card diagnosis" id="action-diagnosis"><summary>AI 执行力诊断 / 建议</summary><div><p><strong>证据：</strong>昨日日记写道，知识星球内容一直挂在通知栏，“明明有很多机会我可以点开查看，但我迟迟不愿点开”，并进一步问“必须进入学习状态才配看胡子哥的内容吗？”走到南湖、心情不那么浮躁后才点开，并发现“不一定要进入学习状态才能去看”。</p><p><strong>行为模式：</strong>按 dbs-action 框架，这更接近“准备成为行动的前提”和“把一次轻量阅读升级为能力检验”。表面上是在等状态，实际效果是：只要没有足够专注，就可以暂时不面对“我可能没看懂”的结果。</p><p><strong>AI 诊断：</strong>这里保护的不是时间，而是对理解能力的评价。不开，就仍然可以相信自己只是没进入状态；打开后若没理解，才像是能力被检验。昨天散步之所以有效，是因为环境切换降低了这次行为的象征重量——它重新变成“看一眼”，不再是一场学习考试。</p><p><strong>具体处方：</strong>以后看到想读却迟迟不点的内容，启动标准改成：只读第一段，写下一个问题，不要求总结。若坐在桌前持续回避，就穿鞋走 10 分钟，边走边打开；结束时只保存一个问题或一句原话。理解可以在第二次发生。</p><p><strong>适用边界：</strong>如果当天确实睡眠不足、身体不适或任务已经过载，推迟深读可以是恢复，不必被诊断成回避；关键区别是有没有给出明确的下一次触发条件。</p><p><strong>免责声明：</strong>这是基于 dbs-action 框架与昨日日记证据生成的 AI 诊断 / 建议，不是心理咨询或医疗诊断。</p></div></details></div></section>

          <section className="section" id="deep-reads"><div className="section-heading"><div><p className="eyebrow">DEEP READS</p><h2>今日深读</h2></div><p>3 篇原文，任选一篇</p></div><div className="brief-list deep-read-list"><details className="brief-item" id="deep-read-1"><summary><span className="brief-index">01</span><span className="brief-main"><strong>Hank Green 的个人 AI Policy 案例</strong><span>阅读问题：如果观众看不到创作过程，他们通过什么判断“这还是你的作品”？</span></span><span className="plus">＋</span></summary><div className="brief-content"><p>值得看的不是道歉，而是一个成熟知识创作者第一次被迫明确：AI 到底可以进入自己的创作流程多深？</p><SourceLink href="https://www.reddit.com/r/nerdfighters/comments/1vib58u/hank_greene_has_posted_a_video_addressing_his_ai/" label="Hank Green AI Policy 讨论入口" /></div></details><details className="brief-item" id="deep-read-2"><summary><span className="brief-index">02</span><span className="brief-main"><strong>Creator Economy 的动态流量分配研究</strong><span>阅读问题：如果不看粉丝和绝对播放量，我该用什么指标证明自己正在变好？</span></span><span className="plus">＋</span></summary><div className="brief-content"><p>这篇 8 月 3 日发布的论文讨论平台究竟应该把流量给“现在表现最好的人”，还是“正在快速成长的人”。</p><SourceLink href="https://arxiv.org/abs/2608.02293" label="arXiv 研究原文" /></div></details><details className="brief-item" id="deep-read-3"><summary><span className="brief-index">03</span><span className="brief-main"><strong>GenAI 在 UX Research 中的角色边界</strong><span>阅读问题：效率提升以后，删掉的是机械劳动，还是必要思考？</span></span><span className="plus">＋</span></summary><div className="brief-content"><p>一项针对 21 名 UX researcher、PM 和设计师的研究发现，研究人员通常对 AI 生成洞察更加谨慎，而 PM 更容易高估其能力，由此产生“AI 都能做了，研究是不是应该更快”的组织压力。研究提出的关键方向不是让 AI 取代研究员，而是让 AI 的分析过程更加接近可验证的人类研究流程。</p><SourceLink href="https://arxiv.org/abs/2512.15944" label="arXiv 研究原文" /></div></details></div></section>

          <section className="section" id="hotlist"><div className="section-heading"><div><p className="eyebrow">HOT LIST</p><h2>热点榜单</h2></div><p>2026 年 8 月 7 日完整榜单</p></div><a className="hotlist" href="/daily-briefing/hotlist/2026-08-07.html" aria-label="打开热点榜单"><span>昨日榜单</span><strong>查看 2026 年 8 月 7 日完整榜单</strong><span className="arrow">↗</span></a></section>
          <footer><p>不要等状态证明你准备好了，<br />让一次小行动把状态带回来。</p><span>每日 08:30 更新 · 完整内容折叠保存</span></footer>
        </div>
      </div>
    </main>
  );
}
