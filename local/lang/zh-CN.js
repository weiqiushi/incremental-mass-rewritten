/* Display strings only. Terminology follows the NG+ Chinese edition where meanings agree. */
window.IMR_ZH_CN = { exact: Object.create(null), templates: [], phrases: [] };
(() => {
    function add(lines) {
        for (const line of lines.trim().split('\n')) {
            const [source, target] = line.split(' => ');
            if (!source || target === undefined) throw new Error('Invalid Chinese translation: ' + line);
            if (/\{\d+\}/.test(source)) window.IMR_ZH_CN.templates.push([source, target]);
            else window.IMR_ZH_CN.exact[source] = target;
        }
    }
    // Navigation, resources and shared terminology.
    add(`
Mass => 质量
Normal Mass => 普通质量
Black Hole => 黑洞
Atomic Generator => 原子生成器
Stars => 星辰
Indescribable Matter => 不可描述物质
The Parallel => 平行维度
The Snake => 贪吃蛇
Ranks => 级别
Prestiges => 转生
Ascensions => 飞升
Ranks Rewards => 级别奖励
Scaling => 折算
Prestige Rewards => 转生奖励
Beyond-Ranks Rewards => 超越级别奖励
Ascension Rewards => 飞升奖励
Main Upgrades => 主要升级
Challenges => 挑战
Quantum Challenge => 量子挑战
Particles => 粒子
Elemental => 元素
Elements => 元素
Mass Dilation => 质量膨胀
Break Dilation => 撕裂膨胀
Exotic Atoms => 奇异原子
Neutron Tree => 中子树
Bosons => 玻色子
Fermions => 费米子
Radiation => 辐射波
Chroma => 色度
Chromas => 色度
Quantum Milestones => 量子里程碑
Auto-Quantum => 自动量子
Primordium => 原基
Entropy => 熵
Dark Effects => 黑暗效果
Dark Run => 黑暗狂奔
The Matters => 物质
Corruption => 腐化
Core => 核心
Core Effect => 核心效果
Infinity Upgrades => 无限升级
Corrupted Star => 腐化星辰
Corrupted Stars => 腐化星辰
Options => 选项
Resource Hider => 资源隐藏
Wormhole => 虫洞
Protostar => 原初恒星
Protostars => 原初恒星
Constellation => 星座
Upgrades => 升级
Space => 太空
Supernova => 超新星
Supernovas => 超新星
Darkness => 黑暗
Stats => 统计
Rank => 级别
Tier => 阶层
Tetr => 四重阶层
Pent => 五重阶层
Hex => 六重阶层
Hept => 七重阶层
Oct => 八重阶层
Enne => 九重阶层
Prestige Level => 转生等级
Honor => 荣耀
Glory => 辉煌
Renown => 名誉
Valor => 英勇
Galactic Prestige => 星系转生
Ascension => 飞升
Transcension => 超越
Beyond Rank => 超越级别
Beyond-Ranks => 超越级别
Muscler => 锻体器
Booster => 助推器
Stronger => 强化器
Overpower => 超强化器
Tickspeed => 时间速度
Accelerator => 加速器
Black Hole Condenser => 黑洞压缩器
BH Condenser => 黑洞压缩器
Condenser => 压缩器
False Vacuum Manipulator => 假真空操纵器
FV Manipulator => 假真空操纵器
Cosmic Ray => 宇宙射线
Cosmic Rays => 宇宙射线
Star Booster => 星辰助推器
Star Boosters => 星辰助推器
Cosmic String => 宇宙弦
Cosmic Strings => 宇宙弦
Parallel Extruder => 平行挤出器
Rage Power => 狂怒能量
Rage Powers => 狂怒能量
Dark Matter => 暗物质
Dark Matters => 暗物质
Atomic Power => 原子能量
Atomic Powers => 原子能量
Quark => 夸克
Quarks => 夸克
Atom => 原子
Atoms => 原子
Proton => 质子
Neutron => 中子
Electron => 电子
Proton Power => 质子能量
Neutron Power => 中子能量
Electron Power => 电子能量
Blueprint Particle => 蓝图粒子
Blueprint Particles => 蓝图粒子
Quantum Foam => 量子泡沫
Quantum Foams => 量子泡沫
Quantum Shard => 量子碎片
Quantum Shards => 量子碎片
Quantum Theory => 量子理论
Primordium Theorem => 原基定理
Dilated Mass => 膨胀质量
Relativistic Particle => 相对论粒子
Relativistic Particles => 相对论粒子
Relativistic Energy => 相对论能量
Relativistic Mass => 相对论质量
Death Shard => 死寂碎片
Death Shards => 死寂碎片
Dark Ray => 暗射线
Dark Rays => 暗射线
Dark Shadow => 黑暗之影
Abyssal Blot => 深渊之渍
Abyssal Blots => 深渊之渍
Glyphic Mass => 雕文质量
Glyph => 雕文
Glyphs => 雕文
Final Star Shard => 最终星辰碎片
Final Star Shards => 最终星辰碎片
Infinity Point => 无限点数
Infinity Points => 无限点数
Infinity Theorem => 无限定理
Infinity Theorems => 无限定理
Corrupted Shard => 腐化碎片
Corrupted Shards => 腐化碎片
Unstable Black Hole => 不稳定黑洞
Unstable BH => 不稳定黑洞
Dimensional Mass => 维度质量
Dimensional mass => 维度质量
Exotic Atom => 奇异原子
Kaon => K介子
Pion => π介子
Muon-Catalyzed Fusion => 缪子催化聚变
Stardust => 星尘
Nebula => 星云
Nebulae => 星云
Calm Power => 宁静能量
Fabric => 时空纤维
Apple => 苹果
Apples => 苹果
Berry => 浆果
Berries => 浆果
Ouroboros => 衔尾蛇
Ouroboric => 衔尾蛇重置
Ourobrosity => 衔尾蛇
Ouroborosity => 衔尾蛇
Evolution => 进化
Evolve => 进化
Energy => 能量
Exotic Rank => 级别奇异折算
Rank Collapse => 级别坍缩
Overflow => 溢出
Siltation => 淤积
Super => 超级
Hyper => 究极
Ultra => 超究
Meta => 元
Exotic => 奇异
Supercritical => 超临界
Instant => 即时
Pre-Quantum => 量子之前
Pre-Infinity => 无限之前
Pre-Ouroboric => 衔尾蛇重置之前
Red => 红色
Green => 绿色
Blue => 蓝色
Yellow => 黄色
Orange => 橙色
Violet => 紫罗兰色
White => 白色
Black => 黑色
Brown => 棕色
Cyan => 青色
Pink => 粉色
Magenta => 品红色
Fading => 衰减
Rainbow => 彩虹
U-Quark => U-夸克
U-Lepton => U-轻子
U-Fermion => U-费米子
Up => 上夸克
Down => 下夸克
Charm => 粲夸克
Strange => 奇夸克
Top => 顶夸克
Bottom => 底夸克
Muon => 缪子
Tau => 陶子
Neutrino => 中微子
Neut-Muon => 缪中微子
Neut-Tau => 陶中微子
Radio => 无线电波
Microwave => 微波
Infrared => 红外线
Visible => 可见光
Ultraviolet => 紫外线
X-ray => X射线
Gamma-ray => 伽马射线
Graviton => 引力子
Higgs Boson => 希格斯玻色子
Photon => 光子
Gluon => 胶子
Enthalpy => 焓
Hawking Radiation => 霍金辐射
Hybridized Uran-Astatine => 铀砹混合物
Newton => 牛顿
Hawking => 霍金
Dalton => 道尔顿
Einstein => 爱因斯坦
Higgs => 希格斯
Aries => 白羊座
Taurus => 金牛座
Gemini => 双子座
Cancer => 巨蟹座
Leo => 狮子座
Virgo => 处女座
Libra => 天秤座
Scorpio => 天蝎座
Sagittarius => 射手座
Capricorn => 摩羯座
Aquarius => 水瓶座
Pisces => 双鱼座
ON => 开启
OFF => 关闭
On => 开启
Off => 关闭
Yes => 是
No => 否
Ok => 确定
Save => 保存
Save to file => 导出为文件
Export => 导出存档
Import => 导入存档
HARD RESET => 硬重置
Buy Max => 购买最大
Buy All => 全部购买
Max All Upgrades => 购买全部升级
Reset => 重置
Auto => 自动
Auto: => 自动：
Power: => 倍率：
Effect: => 效果：
Cost: => 花费：
Currently: => 当前效果：
Requirement: => 需求：
Reward: => 奖励：
Level: => 等级：
Level => 等级
Default => 默认
Short => 简短
Standard => 标准
Displays => 显示设置
Fonts => 字体
Notations => 计数法
Confirmations => 确认窗口设置
Preferences => 偏好设置
Others => 其他
Notifications: => 通知：
Pins: => 固定标签：
Pin => 固定
Unpin => 取消固定
Mass: => 质量：
Mass Format: => 质量格式：
Tree Animation: => 升级树动画：
Offline Production: => 离线收益：
Total time played: => 总游戏时间：
Help => 帮助
Donate => 捐赠
Join Discord => 加入 Discord
Back to Normal => 回到正常状态
Clear glyphs => 清除雕文
Ratio Mode: => 比例模式：
Escrow Boosts => 暂存加成
Other Resources => 其他资源
Change Origin => 更换原点
Merge Rate: => 合并比例：
Upgrade (-1) => 升级（消耗 1 级）
Remove selected => 移除选中定理
Savage selected => 重铸选中定理
Form selected into fragments => 将选中定理分解为碎片
Theorem Selection => 定理选择
The Core => 核心
Reward Strength: => 奖励强度：
Auto-Quantum: => 自动量子：
Auto-Quantum Mode: => 自动量子模式：
Add present as your modifications => 将当前配置保存为预设
Give 1 => 分配 1 个
Give 10 => 分配 10 个
Give all => 全部分配
(softcapped) => （达到软上限）
(hardcapped) => （达到硬上限）
[Corrupted] => [已腐化]
(inactive) => （未激活）
/second => /秒
/sec => /秒
/s => /秒
Infinite => 无限
Loading game... => 正在加载游戏……
You became a Supernova! => 你成为了超新星！
But you must sacrifice. => 但你必须有所牺牲。
For a new age... => 为了新的时代……
and explore what's new! => 并探索新的内容！
Implode => 坍缩
Your mass is enough to go Infinity! => 你的质量已经足以前往无限！
Get Infinity Theorem => 获取无限定理
Go to upgrade! => 前往升级！
Evolution stands in favor. Saved from Corruption. => 进化带来了转机。已保存，远离腐化。
You've evolved. => 你已经进化。
You broke the loop! Serp'iu and the forest redeem you. => 你打破了循环！Serp'iu 与森林救赎了你。
Support the original creator of IMR! => 支持质量增量重制版的原作者！
Incremental Mass Rewritten v0.8 Beta 4 - By MrRedShark77 => 质量增量重制版 v0.8 Beta 4 · 原作者 MrRedShark77
The game is inspired by Distance Incremental & Synergism => 本游戏的灵感来自 Distance Incremental 与 Synergism
Contributors: => 贡献者：
, 16777216 & Aarex (Artists) => 、16777216 和 Aarex（美术）
Game saved => 游戏已保存
Game Saving => 正在保存游戏
Copied to Clipboard => 已复制到剪贴板
Error Exporting, because it got NaNed => 导出失败：游戏数据出现 NaN
Error Importing, because it got NaNed => 导入失败：存档数据出现 NaN
Error Importing => 导入失败
Game Data got NaNed because of => 游戏数据出现 NaN，位置：
Paste in your save WARNING: WILL OVERWRITE YOUR CURRENT SAVE => 请粘贴存档。警告：这将覆盖当前存档！
Are you sure you want to RESET your progress to new game? => 确定要清空当前进度，重新开始游戏吗？
Do you want to disable softcap everywhere? => 你想禁用所有软上限吗？
You trolled! I can't disable softcap! April Fools! => 你被骗了！我不能禁用软上限！愚人节快乐！
Dammit! => 可恶！
YOU ARE CURSED FOREVER!!! => 你被永远诅咒了！！！
Please lift mass, please!!! => 请继续增加质量，求你了！
(Ready to Evolve) => （可以进化）
(Not Ready) => （尚未就绪）
Something Happened... => 有什么事情发生了……
(require Og-118) => （需要元素 118：Og）
to next infinity) => 后到达下一次无限）
to infinity) => 后到达无限）
Mass Upgrades 1-3 => 质量升级 1–3
Fermion Tier => 费米子阶层
mass of mount everest => 珠穆朗玛峰质量
mass of earth => 地球质量
mass of sun => 太阳质量
mass of milky way galaxy => 银河系质量
`);
    // Static page fragments and dynamic interface templates.
    add(`
Reset your {8}, but {9} up. => 重置{8}，但提升{9}。
mass and upgrades => 质量和升级
{8}, but {9} up. => {8}，但提升{9}。
Reset your => 重置你的
Force a Quantum reset => 强制进行量子重置
): Starts at => ）：开始于
You are now in [{0}] Challenge! Go over {1} to complete. => 你正在进行挑战 [{0}]！达到 {1} 即可完成。
+{2} Completions (+1 at {3}) => +{2} 次完成（达到 {3} 时再增加 1 次）
[!] {0} is available! [!] => [!] 可以购买 {0}！[!]
[!] Neutron Tree [{0}] is available! [!] => [!] 可以购买中子树升级 [{0}]！[!]
[!] Charger [{0}] is available! [!] => [!] 可以购买充能器 [{0}]！[!]
You have {0} {1} => 你有 {0} {1}
Because of black hole mass overflow at => 由于黑洞质量在以下数值发生溢出：
, your mass of black hole gain is {1}! => ，黑洞质量获取受到 {1} 的削弱！
Because of black hole mass overflow^2 at => 由于黑洞质量在以下数值发生二重溢出：
, your black hole mass overflow is even stronger! => ，黑洞质量溢出的削弱进一步增强！
Because of BH Condenser siltation at => 由于黑洞压缩器在以下数值发生淤积：
, the exponent of BH Condenser's effect is {1}! => ，黑洞压缩器效果的指数受到 {1} 的削弱！
Because of mass overflow at => 由于质量在以下数值发生溢出：
, your mass gain is {1}! => ，质量获取受到 {1} 的削弱！
Because of mass overflow^2 at => 由于质量在以下数值发生二重溢出：
, your mass overflow is even stronger! => ，质量溢出的削弱进一步增强！
Because of stronger overflow at => 由于强化器在以下数值发生溢出：
, your stronger effect is {1}! => ，强化器效果受到 {1} 的削弱！
Because of stronger overflow^2 at => 由于强化器在以下数值发生二重溢出：
, your stronger overflow is even stronger! => ，强化器溢出的削弱进一步增强！
Because of star siltation at => 由于星辰在以下数值发生淤积：
, the exponent of collapsed stars is {1}! => ，坍缩星辰的指数受到 {1} 的削弱！
Can't handle more than {0} pins! => 最多只能固定 {0} 个标签！
This tab might be locked or removed! Do you want to remove? => 此标签可能已经锁定或被移除！要取消固定吗？
Unlock new type of Stars, require {0} Quark => 解锁新的星辰类型，需要 {0} 夸克
/s to supernova gain => /秒的超新星获取速度
You were gone offline for => 你离线了
Your mass's exponent => 你的质量指数
is increased by => 增加了
Your mass's exponent is increased by => 你的质量指数增加了
Your exponent => 你的指数
of mass of black hole is increased by => 的黑洞质量增加了
Your exponent of mass of black hole is increased by => 你的黑洞质量指数增加了
Your quark's exponent => 你的夸克指数
Your quark's exponent is increased by => 你的夸克指数增加了
You were becomed => 你额外获得了
more supernovas. => 次超新星。
Meditate with all Calm Power => 使用全部宁静能量进行冥想
1.00x pre-Ourobrosity speed => 1.00 倍衔尾蛇之前全局速度
of mass gain, mass gain will be softcapped! => 的质量获取时，质量获取将达到软上限！
of mass gain will softcap^2 mass gain! => 的质量获取时，质量获取将达到二重软上限！
of mass gain will softcap^3 mass gain! => 的质量获取时，质量获取将达到三重软上限！
of mass gain will softcap^4 mass gain! => 的质量获取时，质量获取将达到四重软上限！
of mass gain will softcap^5 mass gain! => 的质量获取时，质量获取将达到五重软上限！
of mass gain will softcap^6 mass gain! => 的质量获取时，质量获取将达到六重软上限！
of mass gain will softcap^7 mass gain! => 的质量获取时，质量获取将达到七重软上限！
of mass gain will softcap^8 mass gain! => 的质量获取时，质量获取将达到八重软上限！
Your Prestige base is => 你的转生基础值为
(based on product of Rank tiers+1) => （基于各级别数量加 1 后的乘积）
Your Ascension base is => 你的飞升基础值为
(based on product of ln[Prestige tiers+1] => （基于各转生等级加 1 后自然对数的乘积
Which boosts mass gain by => 它使质量获取乘以
Black Hole mass's gain formula - (x + 1) => 黑洞质量获取公式：(x + 1)
of Unstable Black Hole => 的不稳定黑洞
Which boosts mass of black hole gain by => 它使黑洞质量获取乘以
Unstable BH's production is decreased based on its mass => 不稳定黑洞的产量随其质量增加而降低
of mass gain from black hole, its mass gain will be softcapped! => 的黑洞质量获取时，黑洞质量获取将达到软上限！
The formula softcaps at => 此公式的软上限开始于
You collapsed => 你坍缩了
stars, which multiplies mass gain based on all rank types. => 个星辰，它们基于所有级别类型加成质量获取。
Collapsed stars gain, Collapsed stars gain will be softcap! => 的坍缩星辰获取时，坍缩星辰获取将达到软上限！
Which increases pre-Quantum global speed by => 它使量子之前全局速度乘以
of dimensional mass => 的维度质量
Which boosts meta-score of equipped theorems by => 它使核心内定理的元评分乘以
Note: Click any image to show challenge description. Click again to enter any challenge => 提示：点击图标查看挑战说明，再次点击进入该挑战。
Quantum Shard. Each Quantum Shard multiply Quantum Foams gained by => 个量子碎片。每个量子碎片使量子泡沫获取乘以
Which translates to a => 总计提供
x multiplier to Quantum Foams. => 倍量子泡沫获取倍率。
Enter the Quantum Challenge => 进入量子挑战
Note 1: Hover any image to show challenge description => 提示 1：将鼠标移至图标上查看挑战说明。
Note 2: While in Quantum Challenge, you need to go Quantum to complete the Quantum Challenge => 提示 2：在量子挑战中，需要前往量子才能完成挑战。
unassigned Quarks => 个未分配的夸克
Elements' Layer: Normal => 元素层：普通
Relativistic particles => 相对论粒子
of dilated mass, which makes Tickspeed => 的膨胀质量，它使时间速度
Dilate Mass => 膨胀质量
Cancel Dilation => 取消膨胀
of dilated mass gain will softcap dilated mass gain! => 的膨胀质量获取时，膨胀质量获取将达到软上限！
of Relativistic mass => 的相对论质量
Relativistic Energy generates => 相对论能量产生
. Fixing Dilation resets your relativistic energy & its mass, also forces a Quantum reset. => 。修复膨胀会重置相对论能量与质量，并强制进行量子重置。
Exotic Atoms (Based on Kaon & Pion). => 个奇异原子（基于 K 介子与 π 介子）。
Reset without being Supernova => 重置但不增加超新星次数
Neutron star. => 个中子星。
Graviton, which speed up Boson production by => 个引力子，它使玻色子产量乘以
Higgs Boson, which raise Graviton’s effect by => 个希格斯玻色子，它使引力子效果变为原来的
Boson, which multiply Mass gain by => 玻色子，它使质量获取乘以
multiply W => 并使 W
Boson gain by => 玻色子获取乘以
Boson, which make Mass gain softcap^2 starts ^ => 玻色子，它使质量获取的二重软上限延迟
later, => 次方出现，
Boson, which multiply Tickspeed Power by => 玻色子，它使时间速度倍率乘以
multiply W Bosons gain by => 并使 W 玻色子获取乘以
Note: Choosing any fermion will reset without being Supernova! => 提示：选择费米子会进行重置，但不增加超新星次数！
Your frequency is => 你的频率为
Hz, which multiples all Fermion gains by => Hz，它使所有费米子获取乘以
of frequency, unlock => 的频率即可解锁
Quantum Theory (based on every going quantum) => 量子理论（基于前往量子的次数）
You Quantized => 你前往量子了
Primordium Theorem (based on Blueprint Particles) => 原基定理（基于蓝图粒子）
Enthalpy, which increases Entropy gain by => 的焓，它使熵获取乘以
Hawking Radiation, which increases Entropy cap to => 的霍金辐射，它使熵上限提高至
Dark Ray. => 个暗射线。
to each matter gain by previous matter. => 到由前一种物质产生当前物质的指数。
Tip: Reach => 提示：达到
of current matter to unlock next matter! => 的当前物质即可解锁下一种物质！
Your best mass of black hole in the 16th Challenge is => 你在挑战 16 中达到的最高黑洞质量为
You must purchase corruption upgrades outside C16! => 必须在挑战 16 外购买腐化升级！
Any Theorem's Level is => 当前定理等级为
[Note: 2 or more theorems of any type CANNOT fit in the Core at the same time] => [提示：核心内不能同时放置两个或更多同类型定理]
Infinity Points. Hover any upgrade to see its description. => 个无限点数。将鼠标移至升级上查看说明。
Corrupted Stars. => 个腐化星辰。
The speed of the corrupted star is => 腐化星辰的增长速度为
Corrupted Star Effects: => 腐化星辰效果：
to mass gain => 质量获取
to Muscler Power => 锻体器倍率
to Booster Power => 助推器倍率
to Stronger Power => 强化器倍率
to Tickspeed Effect => 时间速度效果
outside C16 => 在挑战 16 外
to mass of black hole => 黑洞质量
to Unstable BH production speed => 不稳定黑洞产量
to star generators => 星辰生成器
to blueprint particle => 蓝图粒子
to dimensional mass => 维度质量
`);
    for (const [source,target] of [
        ["The bonus of tickspeed, each mass upgrade (except Overpower) now multiplies its level instead of adding. Dalton Theorem is even stronger.","时间速度及各质量升级（超强化器除外）的额外等级改为乘算。道尔顿定理进一步增强。"],
        ["Meta-Fermions start ^2 later.","费米子的元折算延迟 2 次方出现。"],
        ["19th Big Rip upgrade is twice as effective, and remove the overflow from unstable BH's effect.","大撕裂升级 19 的效果翻倍，并移除不稳定黑洞效果的溢出。"],
        ["Kaon & Pion gains are multiplied by 5 every Ascension.","每次飞升使 K 介子和 π 介子获取乘以 5。"],
        ["Remove dilated mass's overflow.","移除膨胀质量的溢出。"],
        ["Remove atomic power's overflow.","移除原子能量的溢出。"],
        ["Remove Exotic Rank & Tier, Super & Hyper Hex.","移除级别与阶层的奇异折算，以及六重阶层的超级与究极折算。"],
        ["Challenge 5's reward is changed again.","再次改变挑战 5 的奖励。"],
        ["The bonus of any radiation boost now multiplies its strengthness at an reduced rate.","辐射波加成的额外等级改为以削弱的效果乘算其强度。"],
        ["19th Big Rip upgrade is twice as effective again.","大撕裂升级 19 的效果再次翻倍。"],
        ["15th Black Hole upgrade now works like as Atomic Power's effect. The bonus of BHC now multiplies its level instead of adding.","黑洞升级 15 改为使用与原子能量效果相似的公式。黑洞压缩器的额外等级改为乘算。"],
        ["Prestige Base Exponent is doubled. Big Rip Upgrade 19 now affects Renown.","转生基础值的指数翻倍。大撕裂升级 19 现在也影响名誉。"],
        ["Super Infinity Theorem is 10% weaker.","无限定理的超级折算弱化 10%。"],
        ["Super and Hyper Overpower starts +50 later.","超强化器的超级与究极折算延迟 50 级出现。"],
        ["Meta-Prestige Level starts 2x later.","转生等级的元折算延迟 2 倍出现。"],
        ["MCF tier requirements are reduced by 10%.","缪子催化聚变的阶层需求降低 10%。"],
        ["Increase prestige tiers exponent for ascension base by +0.333.","计算飞升基础值时，转生等级的指数增加 0.333。"],
        ["{8} (force an Infinity reset), but {9} up.","{8}（强制进行无限重置），但提升{9}。"],
        ["Req:","需求："],
        ["At {0} {1} - {2}","{0} {1}：{2}"],
        ["of Ascension Base","的飞升基础值"],
        ["Are you sure you want to reset?","确定要重置吗？"],
        ["Boost Mass gain by {0}","使质量获取乘以 {0}"],
        ["Increases Tickspeed Power by {0}%","使时间速度倍率增加 {0}%"],
        ["Boost Rage Power gain by {0}","使狂怒能量获取乘以 {0}"],
        ["Boost Mass gain based on Rage Powers - {0}","基于狂怒能量，使质量获取乘以 {0}"],
        ["Boost Dark Matter gain by {0}","使暗物质获取乘以 {0}"],
        ["Increases BH Condenser Power by {0}","使黑洞压缩器倍率增加 {0}"],
        ["Which generates","它产生"],
        ["You have","你有"],
        ["{7} Powers, which:","{7}能量，其效果为："],
        ["Which provides","它提供"],
        ["free Tickspeeds","个免费时间速度等级"],
        ["and increases meditation's level by","并使冥想等级增加"],
        ["Because of atomic power overflow at","由于原子能量在以下数值发生溢出："],
        [", your atomic power gain is {1}!","，原子能量获取受到 {1} 的削弱！"],
        ["Because of quark overflow at","由于夸克在以下数值发生溢出："],
        [", your quark gain is {1}!","，夸克获取受到 {1} 的削弱！"],
        ["Retry Challenge","重新挑战"],
        ["Enter Challenge","进入挑战"],
        ["Finish Challenge for +","完成挑战，获得 +"],
        ["Exit Challenge","退出挑战"],
        ["Auto-retry:","自动重试："],
        ["Goal:","目标："],
        ["of Wormhole","的虫洞质量"],
        ["of Black Hole","的黑洞质量"],
        ["Entering this challenge will force dark matter reset.","进入此挑战会强制进行暗物质重置。"],
        ["Entering this challenge will force atom reset.","进入此挑战会强制进行原子重置。"],
        ["Entering challenge will supernova reset.","进入此挑战会进行超新星重置。"],
        ["Entering challenge will force a Darkness reset.","进入此挑战会强制进行黑暗重置。"],
        ["Entering challenge will force an FSS reset.","进入此挑战会强制进行最终星辰碎片重置。"],
        ["Entering challenge will force an Infinity reset.","进入此挑战会强制进行无限重置。"],
        ["Instant Scale","即时折算"],
        ["Super rank and mass upgrade scaling starts at 25. Also, Super tickspeed starts at 50.","级别和质量升级的超级折算从 25 开始。时间速度的超级折算从 50 开始。"],
        ["Supercritical Rank & All Fermions Tier scaling starts later, Super Overpower scales weaker based on completions.","基于完成次数，延迟级别超临界折算与所有费米子阶层折算，并弱化超强化器的超级折算。"],
        ["Super Rank starts later, Super Tickspeed scales weaker based on completions.","基于完成次数，延迟级别超级折算并弱化时间速度超级折算。"],
        ["later to Supercritical Rank & All Fermions starting,","使级别超临界折算与所有费米子阶层折算延迟出现，"],
        ["weaker to Super Overpower scaling","削弱超强化器的超级折算"],
        ["later to Super Rank starting,","使级别的超级折算延迟出现，"],
        ["% weaker to Super Tickspeed scaling","% 的时间速度超级折算削弱"],
        ["Anti-Tickspeed","反对时速"],
        ["You cannot buy Tickspeed.","你无法购买时间速度。"],
        ["Each completion adds +9% to Tickspeed Power.","每次完成使时间速度倍率增加 9%。"],
        ["Melted Mass","质量熔化"],
        ["Mass gain softcap starts 150 OoMs eariler, and is stronger.","质量获取的软上限提前 150 个数量级出现，并且惩罚更强。"],
        ["Mass gain is raised based on completions (doesn't apply in this challenge).","基于完成次数，以指数加成质量获取（此效果在本挑战中不生效）。"],
        ["Weakened Rage","怒意减弱"],
        ["Rage Power gain is rooted by 10. Additionally, mass gain softcap starts 100 OoMs eariler.","狂怒能量获取开 10 次方根，质量获取的软上限提前 100 个数量级出现。"],
        ["Rage Powers gain is raised by completions.","基于完成次数，以指数加成狂怒能量获取。"],
        ["No Rank","移除级别"],
        ["You cannot rank up.","你无法提升级别。"],
        ["Supercritical Rank, Ultra Hex scale weaker based on completions.","基于完成次数，弱化级别的超临界折算与六重阶层的超究折算。"],
        ["Exotic Rank & Tier, Ultra Prestige Level scale weaker based on completions.","基于完成次数，弱化级别与阶层的奇异折算，以及转生等级的超究折算。"],
        ["Rank requirement is weaker based on completions.","基于完成次数，降低级别需求。"],
        ["weaker","削弱"],
        ["% weaker","% 的削弱"],
        ["No Tickspeed & Condenser","无时不压"],
        ["You cannot {0}.","你无法{0}。"],
        ["Meditate or split Wormhole","冥想或分裂虫洞"],
        ["buy Tickspeed or BH Condenser","购买时间速度或黑洞压缩器"],
        ["Gain +10% more Fabric per completion.","每次完成使时空纤维获取增加 10%。"],
        ["Every completion adds 10% to tickspeed and BH condenser power.","每次完成使时间速度与黑洞压缩器倍率增加 10%。"],
        ["No Rage Powers","明镜止水"],
        ["You cannot gain {0}. Instead, {1} are gained from mass at a reduced rate. Additionally, mass gain softcap is stronger.","你无法获取{0}。改为从质量中以削弱的效果获得{1}，并且质量获取的软上限惩罚更强。"],
        ["calm powers","宁静能量"],
        ["rage powers","狂怒能量"],
        ["fabric","时空纤维"],
        ["dark matters","暗物质"],
        ["Pre-Impossible challenges scale weaker by completions, but this reward doesn't affect C7.","基于完成次数，弱化无望之前的挑战折算，但此奖励对挑战 7 无效。"],
        ["Each completion increases challenges 1-4 cap by 2.","每次完成使挑战 1–4 的次数上限增加 2。"],
        ["On 16th completion, unlock Elements","完成 16 次时解锁元素"],
        ["White Hole","宇宙白洞"],
        ["Fabric & Wormhole masses are square-rooted.","时空纤维与虫洞质量开平方根。"],
        ["Dark Matter & Mass from Black Hole gains are rooted by 8.","暗物质与黑洞质量获取开 8 次方根。"],
        ["Gain +20% more Fabric per completion.","每次完成使时空纤维获取增加 20%。"],
        ["Dark Matter & Mass from Black Hole gains are raised by completions.","基于完成次数，以指数加成暗物质与黑洞质量获取。"],
        ["On first completion, unlock 3 rows of Elements","首次完成时解锁前三行元素"],
        ["No Particles","粒子消失"],
        ["You cannot assign quarks. Additionally, mass gains exponent is raised to 0.9th power.","你无法分配夸克，质量获取的指数变为原来的 0.9 次方。"],
        ["Gain +10% more protostars per completion.","每次完成使原初恒星获取增加 10%。"],
        ["Improve Magnesium-12.","增强镁（12Mg）的效果。"],
        ["The Reality I","现实 I"],
        ["You are trapped in mass dilation and challenges 1-8.","你被困在质量膨胀与挑战 1–8 中。"],
        ["The exponent of the RP formula is multiplied by completions. (this effect doesn't work while in this challenge)","相对论粒子公式的指数乘以完成次数（此效果在本挑战中无效）。"],
        ["On first completion, unlock Fermions!","首次完成时解锁费米子！"],
        ["Absolutism","绝对论"],
        ["You cannot gain dilated mass, and you are stuck in mass dilation.","你无法获得膨胀质量，并且被困在质量膨胀中。"],
        ["Star boosters are stronger based on completions.","基于完成次数，增强星辰助推器。"],
        ["x stronger","倍的增强"],
        ["Decay of Atom","原子衰变"],
        ["You cannot gain Atoms or Quarks.","你无法获得原子或夸克。"],
        ["Completions add free Radiation Boosters.","完成次数提供免费辐射波加成等级。"],
        ["On first completion, unlock new prestige layer!","首次完成时解锁新的转生层！"],
        ["Absolutely Black Mass","绝对黑质量"],
        ["Normal mass and mass of black hole gains are set to lg(x)^^1.5.","普通质量与黑洞质量获取变为 lg(x)^^1.5。"],
        ["Increase dark ray earned based on completions.","基于完成次数，增加暗射线获取。"],
        ["On first completion, unlock more features!","首次完成时解锁更多内容！"],
        ["No Dmitri Mendeleev","门捷列夫失踪"],
        ["You cannot purchase any pre-118 elements. Additionally, you are trapped in quantum challenge with modifiers {0}.","你无法购买编号小于 118 的元素，并被困在配置为 {0} 的量子挑战中。"],
        ["Gain more primordium theorems.","获得更多原基定理。"],
        ["The Reality II","现实 II"],
        ["You are trapped in c1-12 and quantum challenge with modifiers {0}.","你被困在挑战 1–12 以及配置为 {0} 的量子挑战中。"],
        ["Mass, Atomic & Quark overflows scale later.","延迟质量、原子和夸克的溢出。"],
        ["later","延迟"],
        ["Chaotic Matter Annihilation","混沌物质湮灭"],
        ["• You cannot gain rage powers, and all matters' formulas are disabled, and they generate each other. Red matter generates dark matter.","• 无法获得狂怒能量。所有物质的原有生成公式失效，改为相互产生。红色物质产生暗物质。"],
        ["• Pre-C16 features, such as rank, prestige tiers, main upgrades, elements, tree upgrades, etc. may be corrupted (disabled).","• 挑战 16 之前的功能，如级别、转生、主要升级、元素和升级树等，可能被腐化（禁用）。"],
        ["• You are trapped in Mass Dilation & Dark Run with 100 all glyphs (10 slovak glyphs).","• 被困在质量膨胀与黑暗狂奔中，所有雕文固定为 100 个（斯洛伐克雕文为 10 个）。"],
        ["• Primordium particles are disabled.","• 原基粒子失效。"],
        ["• Pre-Quantum global speed is always set to /100.","• 量子之前全局速度始终设为原来的 1/100。"],
        ["You can earn Corrupted Shards based on your mass of black hole, when exiting the challenge.","退出挑战时，可基于黑洞质量获得腐化碎片。"],
        ["Improve Hybridized Uran-Astatine.","增强铀砹混合物。"],
        ["On first completion, unlock new prestige layer when reaching {0} of normal mass.","首次完成后，在普通质量达到 {0} 时解锁新的转生层。"],
        ["Unnatural Tickspeed","异常时速"],
        ["Tickspeeds, Accelerators, BHC, FVM, Cosmic Rays, Star Boosters, and Cosmic Strings (including bonuses) don't work, they are unaffordable or unobtainable. Second neutron effect doesn't work until Atom Upgrade 18. Black Hole's effect doesn't work until Binilunium-201. You are stuck in dark run with 250 all glyphs (unaffected by weakness).","时间速度、加速器、黑洞压缩器、假真空操纵器、宇宙射线、星辰助推器与宇宙弦（包括额外等级）失效，且无法购买或获得。中子的第二个效果在原子升级 18 之前失效。黑洞效果在元素 201 之前失效。被困在黑暗狂奔中，所有雕文固定为 250 个（不受削弱效果影响）。"],
        ["Per completion, increase the softcap of theorem's level starting by +3.","每次完成使定理等级的软上限起点增加 3。"],
        ["On 4th completion, unlock Ascensions and more elements.","完成 4 次时解锁飞升与更多元素。"],
        ["Reinforced Scaling","强化折算"],
        ["You cannot weaken nor remove pre-Infinity scalings. You are stuck in dark run with 500 all glyphs (unaffected by weakness).","你无法弱化或移除无限之前的折算。被困在黑暗狂奔中，所有雕文固定为 500 个（不受削弱效果影响）。"],
        ["weaken pre-Hex Exotic scalings, and strengthen C16's reward.","弱化六重阶层之前的奇异折算，并增强挑战 16 的奖励。"],
        ["On 4th completion, unlock fifth star in the theorem and more features.","完成 4 次时解锁定理的第五颗星及更多内容。"],
        ["{0} to those scalings,","{0} 的折算效果，"],
        ["stronger","增强"],
        ["Yin Yang Malfunction","阴阳失调"],
        ["You cannot become/generate supernovas, produce star resources, dark ray (it is capped at {0}), dark shadow, and abyssal blot, nor purchase tree upgrades. You are stuck in dark run with 1000 all glyphs (unaffected by weakness). This challenge resets supernova.","无法成为或生成超新星，无法产生星辰资源、暗射线（上限为 {0}）、黑暗之影与深渊之渍，也无法购买升级树。被困在黑暗狂奔中，所有雕文固定为 1000 个（不受削弱效果影响）。此挑战会重置超新星。"],
        ["Generate more supernovas by completions.","基于完成次数，生成更多超新星。"],
        ["On {0} completion, unlock sixth row of infinity upgrades{1}.","完成 {0} 次时解锁无限升级第六行{1}。"],
        ["10th","10"],
        ["4th","4"],
        ["2nd","2"],
        ["3rd","3"],
        ["and seventh star in the theorem","及定理的第七颗星"],
        ["The Reality III","现实 III"],
        ["You are trapped in C1-19 and dark run with 1500 all glyphs. Theorems in the Core don't work. This challenge resets main upgrades.","你被困在挑战 1–19 与黑暗狂奔中，所有雕文固定为 1500 个。核心中的定理失效。此挑战会重置主要升级。"],
        ["Strengthen prior challenge rewards.","增强之前的挑战奖励。"],
        ["On first completion, break the loop and evolve! (Unlock a new layer...)","首次完成时打破循环并进化！（解锁新的层级……）"],
        ["powerful","增强"],
        ["Double dilated mass gain.","膨胀质量获取翻倍。"],
        ["Make dilated mass effect stronger.","增强膨胀质量的效果。"],
        ["Double relativistic particles gain.","相对论粒子获取翻倍。"],
        ["Dilated mass also boost Stronger's power.","膨胀质量也加成强化器倍率。"],
        ["Mass Dilation upgrade 3 scales 10% weaker.","质量膨胀升级 3 的折算弱化 10%。"],
        ["Increase the exponent of the RP formula.","增加相对论粒子公式的指数。"],
        ["Dilated mass boosts quark gain.","膨胀质量加成夸克获取。"],
        ["Mass Dilation upgrade 2 effect's formula is better.","改善质量膨胀升级 2 的效果公式。"],
        ["Tickspeed affects all-star resources at a reduced rate.","时间速度以削弱的效果影响所有星辰资源。"],
        ["Double quarks gain.","夸克获取翻倍。"],
        ["Add 0.015 to mass dilation upgrade 6's base.","质量膨胀升级 6 的底数增加 0.015。"],
        ["First 3 Mass Dilation upgrades are stronger.","前三个质量膨胀升级的效果增强。"],
        ["% stronger","% 的增强"],
        ["Are you sure you want to fix Dilation?","确定要修复膨胀吗？"],
        ["Double Relativistic Mass gain.","相对论质量获取翻倍。"],
        ["Increase the exponent of the Dilated Mass formula.","增加膨胀质量公式的指数。"],
        ["Multiplier from the DM effect is transformed to an exponent (at a reduced rate, is weaker while Big Ripped), but second MD upgrade's cost is exponentally increased. Purchasing this upgrade will reset it.","膨胀质量的倍率加成变为指数加成（效果削弱，大撕裂中进一步削弱），但质量膨胀升级 2 的花费将指数增长。购买此升级会重置该升级。"],
        ["11th MD upgrade is 50% stronger, its effective level softcaps at 1e18.","质量膨胀升级 11 增强 50%，其有效等级在 1e18 达到软上限。"],
        ["Instant-Rank scales later","延迟级别的即时折算"],
        ["Meta-Rank scales later.","延迟级别的元折算。"],
        ["Triple Relativistic Energy gain.","相对论能量获取变为原来的 3 倍。"],
        ["Death Shard & Entropy boost each other.","死寂碎片与熵相互加成。"],
        ["x to Entropies gain,","倍的熵获取，"],
        ["x to Death Shards gain","倍的死寂碎片获取"],
        ["Relativistic Mass gain is increased by 75% for every OoM^2 of dilated mass.","膨胀质量每增加一个二重数量级，相对论质量获取增加 75%。"],
        ["Pre-Quantum Global Speed affects Relativistic Mass gain at a severely reduced rate.","量子之前全局速度以大幅削弱的效果影响相对论质量获取。"],
        ["Super Prestige Level starts 10 later.","转生等级的超级折算延迟 10 级出现。"],
        ["You can now automatically evaporate resources. (Stronger than manual).","自动蒸发资源（效果强于手动操作）。"],
        ["Double dark shadows gain.","黑暗之影获取翻倍。"],
        ["Cancel for {0} Relativistic particles","取消膨胀，获得 {0} 相对论粒子"],
        ["Reach {0} to gain Relativistic particles, or cancel dilation","达到 {0} 以获得相对论粒子，或取消膨胀"],
        ["Because of dilated mass overflow at","由于膨胀质量在以下数值发生溢出："],
        [", your dilated mass is {1}!","，膨胀质量受到 {1} 的削弱！"],
        ["Fix Dilation","修复膨胀"],
        ["Rage Upgrades","狂怒升级"],
        ["Boosters add Musclers.","助推器提供额外锻体器。"],
        ["Musclers","锻体器"],
        ["Strongers add Boosters.","强化器提供额外助推器。"],
        ["Boosters","助推器"],
        ["You can automatically buy mass upgrades.","自动购买质量升级。"],
        ["Rank 4 reward is better.","增强级别 4 的奖励。"],
        ["Double Rage Powers.","狂怒能量获取翻倍。"],
        ["You can automatically tier up.","自动提升阶层。"],
        ["Tickspeed adds Stronger.","时间速度提供额外强化器。"],
        ["Super and Hyper mass upgrade scalings are weaker based on Rage Power.","基于狂怒能量，弱化质量升级的超级与究极折算。"],
        ["Stronger power is increased by +^0.25.","强化器倍率增加 0.25 次方。"],
        ["Super Rank scaling is 20% weaker.","级别的超级折算弱化 20%。"],
        ["Black Hole mass's gain is boosted by Rage Powers.","狂怒能量加成黑洞质量获取。"],
        ["OoMs of Rage powers increase stronger power at a reduced rate.","狂怒能量的数量级以削弱的效果增加强化器倍率。"],
        ["Mass gain softcap starts 3x later for every Rank you have.","每个级别使质量获取的软上限延迟 3 倍出现。"],
        ["Hyper Tickspeed starts 50 later.","时间速度的究极折算延迟 50 级出现。"],
        ["Mass boosts Atom gain.","质量加成原子获取。"],
        ["Remove tickspeed power's softcap.","移除时间速度倍率的软上限。"],
        ["Overpower power is increased by 0.005.","超强化器倍率增加 0.005。"],
        ["Fading matter's upgrade applies to rage powers gain at a reduce rate.","衰减物质的升级以削弱的效果影响狂怒能量获取。"],
        ["Supernovas boost overpower power.","超新星加成超强化器倍率。"],
        ["Corrupted Shards boost normal mass gain.","腐化碎片加成普通质量获取。"],
        ["Rage powers boost dark rays gain.","狂怒能量加成暗射线获取。"],
        ["Rank Collapse starts later based on rage powers at an extremely reduced rate.","狂怒能量以极低的效果延迟级别坍缩。"],
        ["Stronger Overflows are 15% weaker.","强化器溢出弱化 15%。"],
        ["Mass Overflows are 20% weaker.","质量溢出弱化 20%。"],
        ["Rage Powers boost Infinity Points gain.","狂怒能量加成无限点数获取。"],
        ["Black Hole Upgrades","黑洞升级"],
        ["Mass Upgrades no longer spend mass.","质量升级不再消耗质量。"],
        ["Tickspeeds boost BH Condenser Power.","时间速度加成黑洞压缩器倍率。"],
        ["Super Mass Upgrade scales later based on mass of Black Hole.","黑洞质量延迟质量升级的超级折算。"],
        ["You can automatically buy Rage Power upgrades.","自动购买狂怒升级。"],
        ["You can automatically buy tickspeed.","自动购买时间速度。"],
        ["Gain 100% of Rage Power gained from reset per second. Rage Powers are boosted by mass of Black Hole.","每秒获取重置时可获得狂怒能量的 100%。黑洞质量加成狂怒能量。"],
        ["Mass gain softcap starts later based on mass of Black Hole.","黑洞质量延迟质量获取的软上限。"],
        ["Raise Rage Power gain by 1.15.","狂怒能量获取变为原来的 1.15 次方。"],
        ["Stronger Effect's softcap starts later based on unspent Dark Matters.","未消耗的暗物质延迟强化器效果的软上限。"],
        ["Mass gain is boosted by OoM of Dark Matters.","暗物质的数量级加成质量获取。"],
        ["Mass gain softcap is 10% weaker.","质量获取的软上限弱化 10%。"],
        ["Hyper Tickspeed scales 15% weaker.","时间速度的究极折算弱化 15%。"],
        ["Quark gain is multiplied by 10.","夸克获取乘以 10。"],
        ["Neutron Powers boost mass of Black Hole gain.","中子能量加成黑洞质量获取。"],
        ["Atomic Powers add Black Hole Condensers at a reduced rate.","原子能量以削弱的效果提供额外黑洞压缩器。"],
        ["Red matter's upgrade applies to mass gain at a reduced rate.","红色物质的升级以削弱的效果影响质量获取。"],
        ["Violet matter's upgrade applies to collapsed stars at a reduced rate.","紫罗兰色物质的升级以削弱的效果影响坍缩星辰。"],
        ["Make black hole's effect stronger.","增强黑洞效果。"],
        ["Mass of black hole boosts accelerator power at an extremely reduced rate.","黑洞质量以极低的效果加成加速器倍率。"],
        ["Corrupted Shards boost mass of black hole gain.","腐化碎片加成黑洞质量获取。"],
        ["BH Condenser Siltation starts ^2 later to exponent.","黑洞压缩器淤积的指数延迟 2 次方出现。"],
        ["Unstable Black Hole decreasing is 25% weaker.","不稳定黑洞的衰减弱化 25%。"],
        ["Challenge 12's reward now multiplies each bonus radiation boosts.","挑战 12 的奖励现在乘算各个辐射波的额外加成。"],
        ["Best mass of black hole in C16 boosts Infinity Points gain.","挑战 16 的最高黑洞质量加成无限点数获取。"],
        ["Atom Upgrades","原子升级"],
        ["Start with Mass upgrades unlocked.","开局即解锁质量升级。"],
        ["You can automatically buy BH Condenser and upgrades. Tickspeed no longer spends Rage Powers.","自动购买黑洞压缩器及黑洞升级。时间速度不再消耗狂怒能量。"],
        ["[Tetr Era] Unlock Tetr.","[四重时代] 解锁四重阶层。"],
        ["Keep challenges 1-4 on reset. BH Condensers add Cosmic Rays Power at a reduced rate.","重置时保留挑战 1–4。黑洞压缩器以削弱的效果增加宇宙射线倍率。"],
        ["You can automatically Tetr up. Super Tier starts 10 later.","自动提升四重阶层。阶层的超级折算延迟 10 级出现。"],
        ["Gain 100% of Dark Matters gained from reset per second. {0} based on Atomic Powers.","每秒获取重置时可获得暗物质的 100%。基于原子能量，{0}。"],
        ["Increase Wormhole loselessness","提高虫洞的无损程度"],
        ["Mass gain from Black Hole softcap starts later","延迟黑洞质量获取的软上限"],
        ["Tickspeed boosts each particle powers gain.","时间速度加成各粒子能量获取。"],
        ["Atomic Powers boost Quark gain.","原子能量加成夸克获取。"],
        ["Stronger effect softcap is 15% weaker.","强化器效果的软上限弱化 15%。"],
        ["Tier requirement is halved. Hyper Rank starts later based on Tiers you have.","阶层需求减半。基于阶层，延迟级别的究极折算。"],
        ["Dilated mass also boosts BH Condenser & Cosmic Ray powers at a reduced rate.","膨胀质量以削弱的效果加成黑洞压缩器与宇宙射线倍率。"],
        ["Wormhole effects are better.","增强虫洞效果。"],
        ["Mass from Black Hole effect is better.","增强黑洞质量的效果。"],
        ["Cosmic Ray effect softcap starts x10 later.","宇宙射线效果的软上限延迟 10 倍出现。"],
        ["Tickspeed, Black Hole Condenser and Cosmic Ray scalings up to Meta start x10 later.","时间速度、黑洞压缩器和宇宙射线在元之前的所有折算延迟 10 倍出现。"],
        ["Reduce Cosmic Ray scaling by 20%.","宇宙射线的折算弱化 20%。"],
        ["Quark Overflow starts ^10 later.","夸克溢出延迟 10 次方出现。"],
        ["Pink matter's upgrade applies to quark gain at a reduced rate.","粉色物质的升级以削弱的效果影响夸克获取。"],
        ["Neutron Power's second effect now provides an expontial boost and applies to mass of black hole.","中子的第二个效果改为指数加成，并作用于黑洞质量。"],
        ["Yellow matter's upgrade applies to dilated mass overflow at a reduced rate.","黄色物质的升级以削弱的效果延迟膨胀质量溢出。"],
        ["Atomic Powers add Overpowers at an extremely reduced rate.","原子能量以极低的效果提供额外超强化器。"],
        ["The exponent of any particle powers is raised by 5.","各粒子能量的指数变为原来的 5 次方。"],
        ["Remove the softcaps of Star Booster's power and effect.","移除星辰助推器倍率与效果的软上限。"],
        ["Atom Upgrade 20 is slightly stronger.","原子升级 20 略微增强。"],
        ["Star Siltation starts ^2 later to exponent.","星辰淤积的指数延迟 2 次方出现。"],
        ["Dimensional Mass boosts Infinity Points gain.","维度质量加成无限点数获取。"],
        ["Big Rip Upgrades","大撕裂升级"],
        ["Start with Hydrogen-1 unlocked in Big Rip.","大撕裂中开局即解锁氢（1H）。"],
        ["Mass Upgrades & Ranks are no longer nerfed by 8th QC modifier.","质量升级与级别不再受到量子挑战配置 8 的削弱。"],
        ["Pre-Quantum Global Speed is raised based on Death Shards (before division).","基于死寂碎片，以指数加成量子之前全局速度（在除法削弱之前生效）。"],
        ["Start with 2 tiers of each Fermion in Big Rip.","大撕裂中开局拥有每种费米子的 2 个阶层。"],
        ["Root Star Booster’s starting cost by 10. Star Booster’s base is increased based on Death Shards.","星辰助推器的初始花费开 10 次方根。死寂碎片增加星辰助推器的底数。"],
        ["Start with all Radiation features unlocked.","开局即解锁全部辐射波功能。"],
        ["Hybridized Uran-Astatine is twice as effective in Big Rip.","铀砹混合物在大撕裂中的效果翻倍。"],
        ["Passively gain 10% of Quantum Foams & Death Shards you would get from resetting each second.","每秒自动获取重置时可获得量子泡沫与死寂碎片的 10%。"],
        ["Unlock Break Dilation and Prestige (in the mass tab).","解锁撕裂膨胀与转生（在质量标签页）。"],
        ["Chromas are 10% stronger.","色度的效果增强 10%。"],
        ["Prestige Level no longer resets anything.","转生等级不再重置任何资源。"],
        ["Mass gain softcap^5 starts later based on Atom.","原子延迟质量获取的五重软上限。"],
        ["Death Shard gain is boosted based on Prestige Base.","转生基础值加成死寂碎片获取。"],
        ["Super Fermion Tier starts 10 later (after QC8 nerf).","费米子阶层的超级折算延迟 10 次出现（在量子挑战配置 8 的削弱之后生效）。"],
        ["Blueprint Particles boost Pre-Quantum Global Speed slightly.","蓝图粒子以较低的效果加成量子之前全局速度。"],
        ["Unsoftcap the first effect from Alpha, Omega & Sigma particles. They're stronger.","移除 α、ω 与 σ 粒子第一个效果的软上限，并增强它们的效果。"],
        ["Dark matter raises atoms gain at a reduced rate.","暗物质以削弱的效果对原子获取提供指数加成。"],
        ["Chromas gain is boosted by mass.","质量加成色度获取。"],
        ["Red Matters reduce Pre-Renown requirements slightly.","红色物质略微降低名誉之前的转生需求。"],
        ["cheaper","降低花费"],
        ["Total corrupted Shards boost dark rays gain.","总腐化碎片加成暗射线获取。"],
        ["Pre-Infinity Global Speed is raised based on Death Shards at an extremely reduced rate (before division).","基于死寂碎片，以极低的效果指数加成无限之前全局速度（在除法削弱之前生效）。"],
        ["Beta Particles's effect is now changed.","改变 β 粒子的效果。"],
        ["Quantum Shard's effect now affects death shards at a reduced rate.","量子碎片的效果以削弱的效果影响死寂碎片。"],
        ["Break Dilation Upgrade 5 is overpowered.","撕裂膨胀升级 5 大幅增强。"],
        ["The softcaps of corrupted shards gain are slightly weaker.","腐化碎片获取的软上限略微减弱。"]
    ]) add(source + " => " + target);
    for (const [source,target] of [
        ["Quark gain formula is better.","改善夸克获取公式。"],
        ["Hardened Challenge scaling is 25% weaker.","挑战的硬化折算弱化 25%。"],
        ["Electron Powers boost Atomic Powers gain.","电子能量加成原子能量获取。"],
        ["Stronger's power is stronger based on Proton Powers.","基于质子能量，增强强化器倍率。"],
        ["The 7th challenge's effect is twice as effective.","挑战 7 的效果翻倍。"],
        ["Gain 1% more quarks for each challenge completion.","每次挑战完成使夸克获取增加 1%。"],
        ["Carbon's effect is now multiplied by the number of elements bought.","碳的效果乘以已购买的元素数量。"],
        ["C2's reward's softcap is 75% weaker.","挑战 2 奖励的软上限弱化 75%。"],
        ["Tetr's requirement is 15% weaker.","四重阶层需求降低 15%。"],
        ["3rd & 4th challenges' scalings are weaker.","弱化挑战 3 与 4 的折算。"],
        ["Nitrogen's multiplier is squared.","氮的倍率变为原来的平方。"],
        ["Power's gain from each particle formula is better.","改善各粒子的能量获取公式。"],
        ["For every c7 completion, increase c5 and c6 cap by 2.","每次完成挑战 7，使挑战 5 与 6 的次数上限增加 2。"],
        ["Passively gain 5% of the quarks you would get from resetting each second.","每秒自动获取重置时可获得夸克的 5%。"],
        ["Super BH Condenser & Cosmic Ray scale 20% weaker.","黑洞压缩器与宇宙射线的超级折算弱化 20%。"],
        ["Silicon's effect is +2% better for each element bought.","每购买一个元素，硅的效果增强 2%。"],
        ["Raise Atom gain by 1.1.","原子获取变为原来的 1.1 次方。"],
        ["You can now automatically buy Cosmic Rays. Cosmic Ray raises tickspeed effect at an extremely reduced rate.","自动购买宇宙射线。宇宙射线以极低的效果对时间速度提供指数加成。"],
        ["2nd Neutron's effect is better.","增强中子的第二个效果。"],
        ["Increase C7 cap by 50.","挑战 7 的次数上限增加 50。"],
        ["Unlock Mass Dilation.","解锁质量膨胀。"],
        ["Dilated mass gain is increased by tickspeed at a reduced rate.","时间速度以削弱的效果加成膨胀质量获取。"],
        ["Atomic power's effects are better.","增强原子能量的效果。"],
        ["Passively gain 100% of the atoms you would get from resetting each second. Atomic Power boost Relativistic particles gain at a reduced rate.","每秒自动获取重置时可获得原子的 100%。原子能量以削弱的效果加成相对论粒子获取。"],
        ["Increases Mass Dilation upgrade 1's base by 1.","质量膨胀升级 1 的底数增加 1。"],
        ["Hardened challenge scaling is weaker for each element bought.","每购买一个元素，弱化挑战的硬化折算。"],
        ["Hyper/Ultra Rank & Tickspeed scales 25% weaker.","级别与时间速度的究极和超究折算弱化 25%。"],
        ["Mass gain is raised to 1.5 while in mass dilation.","质量膨胀中，质量获取变为原来的 1.5 次方。"],
        ["Proton power's effects are better.","增强质子能量的效果。"],
        ["Electron power's effects are better. Passively gain 10% of each particle you would assign quarks.","增强电子能量的效果。自动获得各粒子，数量为分配夸克时获得量的 10%。"],
        ["Dilated mass boosts Relativistic particles gain.","膨胀质量加成相对论粒子获取。"],
        ["Increase dilated mass gain exponent by 5%.","膨胀质量获取的指数增加 5%。"],
        ["Add 50 more C8 maximum completions.","挑战 8 的次数上限增加 50。"],
        ["Rage power boosts Relativistic particles gain.","狂怒能量加成相对论粒子获取。"],
        ["Mass from Black Hole boosts dilated mass gain.","黑洞质量加成膨胀质量获取。"],
        ["Unlock Stars.","解锁星辰。"],
        ["Super Tier scales weaker based on Tetr.","四重阶层弱化阶层的超级折算。"],
        ["Cosmic Ray's free tickspeeds now add to RU7.","宇宙射线提供的免费时间速度等级现在也加成狂怒升级 7。"],
        ["to Rage Power Upgrade 7","的狂怒升级 7 加成"],
        ["Remove softcap from C2 & C6 effects.","移除挑战 2 与 6 效果的软上限。"],
        ["Collapsed star boosts dilated mass gain.","坍缩星辰加成膨胀质量获取。"],
        ["Add 50 more C7 maximum completions.","挑战 7 的次数上限增加 50。"],
        ["Collapsed stars boost quark gain.","坍缩星辰加成夸克获取。"],
        ["You automatically buy mass dilation upgrades if you purchased them first. They no longer spend dilated mass.","自动购买已经手动购买过的质量膨胀升级，且不再消耗膨胀质量。"],
        ["The Tetr requirement is broken.","大幅降低四重阶层的需求。"],
        ["Collapsed star boosts relativistic particles gain.","坍缩星辰加成相对论粒子获取。"],
        ["Collapsed star's effect boosts mass of black hole gain at a reduced rate.","坍缩星辰效果以削弱的倍率加成黑洞质量获取。"],
        ["Quarks gain is raised to the 1.05th power.","夸克获取变为原来的 1.05 次方。"],
        ["Collapsed stars effect is 10% stronger.","坍缩星辰效果增强 10%。"],
        ["Collapsed star boosts the last type of stars.","坍缩星辰加成最后一种星辰。"],
        ["Star generator is now ^1.05 stronger.","星辰生成器效果变为原来的 1.05 次方。"],
        ["Mass gain softcap^2 is 10% weaker.","质量获取的二重软上限弱化 10%。"],
        ["Mass of black hole boosts atomic powers gain at a reduced rate.","黑洞质量以削弱的效果加成原子能量获取。"],
        ["Mass Dilation upgrade 6 is 75% stronger.","质量膨胀升级 6 增强 75%。"],
        ["Normal mass boosts all-star resources at a reduced rate.","普通质量以削弱的效果加成所有星辰资源。"],
        ["Square Atomic Upgrade 6.","原子升级 6 的效果平方。"],
        ["Hyper/Ultra BH Condenser & Cosmic Ray scale 25% weaker.","黑洞压缩器与宇宙射线的究极和超究折算弱化 25%。"],
        ["Add 200 more C8 maximum completions.","挑战 8 的次数上限增加 200。"],
        ["Tickspeed power boosts base of Star Booster at a reduced rate.","时间速度倍率以削弱的效果增加星辰助推器的底数。"],
        ["Ultra Rank & Tickspeed scale weaker based on Tier.","阶层弱化级别与时间速度的超究折算。"],
        ["Gain 10x more Apples.","苹果获取乘以 10。"],
        ["The power from the mass of the BH formula is increased to 0.45.","黑洞质量公式的指数增加至 0.45。"],
        ["Add 100 more C7 maximum completions.","挑战 7 的次数上限增加 100。"],
        ["Multiply Particle Powers gain by ^0.5 of its Particle's amount after softcap.","粒子能量获取乘以其粒子数量的平方根（在软上限之后生效）。"],
        ["Ultra rank scaling starts 3 later for every supernova.","每次超新星使级别的超究折算延迟 3 级出现。"],
        ["Increase Wormhole loselessness by 20%.","虫洞的无损程度增加 20%。"],
        ["Non-Bonus tickspeeds are 25x more effective.","不含额外等级的时间速度效果乘以 25。"],
        ["Rewards from Challenges 3, 4 & 8 are 50% more effective.","挑战 3、4 与 8 的奖励增强 50%。"],
        ["Add 200 more C7 & C8 maximum completions.","挑战 7 与 8 的次数上限增加 200。"],
        ["Lanthanum's effect is twice as strong.","镧的效果翻倍。"],
        ["Collapsed stars boost quarks gain.","坍缩星辰加成夸克获取。"],
        ["Meta-Tickspeed starts 2x later.","时间速度的元折算延迟 2 倍出现。"],
        ["Pent is now added in mass gain formula from collapsed stars.","坍缩星辰的质量获取公式现在计入五重阶层。"],
        ["Raise Fabric by +^0.05.","时空纤维的指数增加 0.05。"],
        ["BH formula softcap starts laster based on Supernovas.","超新星延迟黑洞公式的软上限。"],
        ["Tetrs are 15% cheaper.","四重阶层需求降低 15%。"],
        ["Add more C5-6 & C8 maximum completions based on Supernovas.","基于超新星，增加挑战 5、6 与 8 的次数上限。"],
        ["Super Tetr scales 25% weaker.","四重阶层的超级折算弱化 25%。"],
        ["Remove 2 softcaps from Atomic Power's effect.","移除原子能量效果的两个软上限。"],
        ["Collapsed Star's effect is 25% stronger.","坍缩星辰效果增强 25%。"],
        ["Mass softcap^3 is 17.5% weaker.","质量获取的三重软上限弱化 17.5%。"],
        ["Meta-Supernova scales 20% weaker.","超新星的元折算弱化 20%。"],
        ["Neutronium-0 affects Aluminium-13 & Tantalum-73.","中子元素（0）影响铝（13Al）与钽（73Ta）。"],
        ["Gain 100x more Quantum Foam.","量子泡沫获取乘以 100。"],
        ["Stronger & Tickspeed are 10x stronger.","强化器与时间速度的效果乘以 10。"],
        ["Stronger is ^1.1 stronger.","强化器效果变为原来的 1.1 次方。"],
        ["Strontium-38 is thrice as effective.","锶（38Sr）的效果变为原来的 3 倍。"],
        ["Mass Dilation upgrade 2 effect is overpowered.","质量膨胀升级 2 的效果大幅增强。"],
        ["Pre-Ultra Mass Upgrades scale weaker based on Cosmic Ray's free tickspeeds.","宇宙射线提供的免费时间速度等级弱化质量升级在超究之前的折算。"],
        ["Stronger’s Power softcap starts 3x later, and is 10% weaker.","强化器倍率的软上限延迟 3 倍出现，且弱化 10%。"],
        ["Tickspeed’s Power softcap starts ^2 later, and scales 50% weaker.","时间速度倍率的软上限延迟 2 次方出现，且弱化 50%。"],
        ["Carbon-6’s effect is overpowered, but disable Sodium-11.","碳（6C）的效果大幅增强，但钠（11Na）失效。"],
        ["All tickspeed scalings start 100x later (after nerf from 8th QC modifier).","时间速度的所有折算延迟 100 倍出现（在量子挑战配置 8 的削弱之后生效）。"],
        ["Mass of Black Hole effect raises itself at a reduced logarithmic rate.","黑洞质量效果以削弱的对数倍率对自身提供指数加成。"],
        ["Death Shard gain is boosted by Dilated Mass.","膨胀质量加成死寂碎片获取。"],
        ["Entropic Accelerator & Booster nerfing is 10% weaker.","熵加速器与熵助推器的削弱惩罚弱化 10%。"],
        ["Insane Challenges scale 25% weaker.","疯狂挑战的折算弱化 25%。"],
        ["Entropy gain is increased by 66.7% for every OoM^2 of normal mass.","普通质量每增加一个二重数量级，熵获取增加 66.7%。"],
        ["Death Shard gain is increased by 10% for every supernova.","每次超新星使死寂碎片获取增加 10%。"],
        ["Epsilon particles work in big rip, but are 90% weaker.","ε 粒子在大撕裂中生效，但效果削弱 90%。"],
        ["Entropic Converter nerfing is 10% weaker.","熵转换器的削弱惩罚弱化 10%。"],
        ["Increase Entropic Evaporation’s base by 1.","熵蒸发的底数增加 1。"],
        ["8th QC modifier in Big Rip is 20% weaker.","大撕裂中的量子挑战配置 8 削弱 20%。"],
        ["Remove softcap^3 from Photon Upgrade 3 effect, and its softcap^2 is weaker.","移除光子升级 3 效果的三重软上限，并弱化二重软上限。"],
        ["Prestige Base’s exponent is increased based on Pent.","五重阶层增加转生基础值的指数。"],
        ["Blueprint Particles effect is overpowered.","蓝图粒子的效果大幅增强。"],
        ["Tickspeed Power’s softcap starts ^100 later.","时间速度倍率的软上限延迟 100 次方出现。"],
        ["Pre-Quantum Global Speed is more effective based on Honor.","荣耀增强量子之前全局速度的效果。"],
        ["Add 200 more C9-12 maximum completions.","挑战 9–12 的次数上限增加 200。"],
        ["Each Particle Power’s 1st effect is exponentially overpowered.","各粒子能量的第一个效果获得大幅增强的指数加成。"],
        ["Entropic Evaporation^2 and Condenser^2 scale 15% weaker.","熵蒸发²与熵压缩²的折算弱化 15%。"],
        ["Beta Particles are twice as effective.","β 粒子的效果翻倍。"],
        ["All scalings from Ranks to Pent scale 10% weaker (only 2% during Big Rip).","级别至五重阶层的所有折算弱化 10%（大撕裂中仅为 2%）。"],
        ["Entropic multiplier is effective in big rip.","熵倍率在大撕裂中生效。"],
        ["Mass gain softcap^4 is 50% weaker (only 20% in Big Rip).","质量获取的四重软上限弱化 50%（大撕裂中仅为 20%）。"],
        ["Neutron Stars raise Atom gain.","中子星对原子获取提供指数加成。"],
        ["[sn4] effect is increased by 2.","[sn4] 的效果增加 2。"],
        ["[bs2] uses a better formula.","改善 [bs2] 的公式。"],
        ["Entropic Multiplier uses a better formula.","改善熵倍率的公式。"],
        ["Mass Dilation upgrades are 5% stronger.","质量膨胀升级增强 5%。"],
        ["Prestige Base boosts Relativistic Energy gain.","转生基础值加成相对论能量获取。"],
        ["Mass gain after all softcaps to ^5 is raised by 10.","质量获取在五重及之前的所有软上限之后变为原来的 10 次方。"],
        ["Unlock Darkness, you'll able to go Dark.","解锁黑暗，可以进行黑暗重置。"],
        ["Pre-Quantum global speed affects dark shadow gain at a logarithmic reduced rate.","量子之前全局速度以削弱的对数倍率加成黑暗之影获取。"],
        ["Insane & Impossible Challenges scale 50% weaker.","疯狂与无望挑战的折算弱化 50%。"],
        ["You can buy Cerium-58 in big rip.","允许在大撕裂中购买铈（58Ce）。"],
        ["You can now automatically complete Challenges 9-11. Keep Challenge 12 completions on Big Rip or start QC.","自动完成挑战 9–11。在大撕裂或开启量子挑战时保留挑战 12 的完成次数。"],
        ["Death shards boost protostars gain.","死寂碎片加成原初恒星获取。"],
        ["You can now automatically buy break dilation upgrades. They no longer spent relativistic mass.","自动购买撕裂膨胀升级，且不再消耗相对论质量。"],
        ["Keep quantum tree on darkness.","黑暗重置时保留量子树。"],
        ["Improve the Wormhole.","增强虫洞。"],
        ["7th challenge’s effect gives more C9-12 completions at 10% rate.","挑战 7 的效果以 10% 的倍率增加挑战 9–12 的次数上限。"],
        ["You can buy Tungsten-74 in Big Rip.","允许在大撕裂中购买钨（74W）。"],
        ["Start with break dilation unlocked. Relativistic energy gain is increased by 10%.","开局即解锁撕裂膨胀。相对论能量获取增加 10%。"],
        ["You can buy atom upgrades 13-15 outside Big Rip.","允许在大撕裂外购买原子升级 13–15。"],
        ["Argon-18 is overpowered, it can affect BHC & Cosmic Ray powers.","氩（18Ar）的效果大幅增强，并影响黑洞压缩器与宇宙射线倍率。"],
        ["Entropic Scaling & Radiation work in Big Rip.","熵折算与辐射波在大撕裂中生效。"],
        ["You can now automatically complete Challenge 12.","自动完成挑战 12。"],
        ["Unlock the 13th Challenge, Automate Big Rip upgrades.","解锁挑战 13，并自动购买大撕裂升级。"],
        ["2nd Wormhole boosts Stronger instead. Improve 5th Wormhole in Big Rips.","第二个虫洞改为加成强化器。第五个虫洞在大撕裂中增强。"],
        ["Make the 3rd, 4th & 8th Challenges’ effect better.","增强挑战 3、4 与 8 的效果。"],
        ["Super Prestige Level & Honor are 5% weaker.","转生等级与荣耀的超级折算弱化 5%。"],
        ["Dark Shadow gain is boosted by Death Shards.","死寂碎片加成黑暗之影获取。"],
        ["You can now gain Relativistic Energy outside of Big Rip.","允许在大撕裂外获取相对论能量。"],
        ["Super & Hyper cosmic string scalings are 25% weaker.","宇宙弦的超级与究极折算弱化 25%。"],
        ["Supernova boosts blueprint particles earned.","超新星加成蓝图粒子获取。"],
        ["Gain 100% of the Quantizes you would get from resetting each second. Supernova boosts quantizes.","每秒获取重置时可获得量子次数的 100%。超新星加成量子次数。"],
        ["Uncap 10th Quantize milestone’s effect.","移除量子里程碑 10 效果的上限。"],
        ["Gain 10x more dark rays.","暗射线获取乘以 10。"],
        ["Uncap Strange & Neutrino.","移除奇夸克与中微子的上限。"],
        ["Dark shadow’s second effect is better. Keep pre-118 big rip elements on darkness.","增强黑暗之影的第二个效果。黑暗重置时保留编号小于 118 的大撕裂元素。"],
        ["Unlock the 14th Challenge.","解锁挑战 14。"],
        ["Prestige Base boosts dark rays earned.","转生基础值加成暗射线获取。"],
        ["Quantum shard’s base is increased based on the number of elements bought.","基于已购买的元素数量，增加量子碎片的底数。"],
        ["Outside of Big Rip, you can now gain Death Shards. Automate Cosmic Strings.","允许在大撕裂外获取死寂碎片。自动购买宇宙弦。"],
        ["Big Rip upgrade 7 is active outside of Big Rip.","大撕裂升级 7 在大撕裂外生效。"],
        ["Untritrium-133 effect in Big Rip works outside of Big Rip.","元素 133 在大撕裂中的效果也在大撕裂外生效。"],
        ["Stronger’s effect softcap is slightly weaker.","强化器效果的软上限略微减弱。"],
        ["Improve 4th Wormhole.","增强第四个虫洞。"],
        ["Stronger’s effect softcap is slightly weaker again. Tickspeed’s effect is overpowered.","强化器效果的软上限再次略微减弱。时间速度效果大幅增强。"],
        ["Add 75 more C13 maximum completions.","挑战 13 的次数上限增加 75。"],
        ["Boost Dark Ray gain based on quarks.","夸克加成暗射线获取。"],
        ["Prestige base exponent boosts Abyssal Blot gain.","转生基础值的指数加成深渊之渍获取。"],
        ["Hyper Prestige Level, Tetr & Pent scalings are 10% weaker.","转生等级、四重阶层与五重阶层的究极折算弱化 10%。"],
        ["Meta-Rank Boost affects Meta-Tier starting at a reduced rate.","级别元折算加成以削弱的效果延迟阶层的元折算。"],
        ["Uncap Top & Neut-Muon.","移除顶夸克与缪中微子的上限。"],
        ["Uncap [Neut-Muon]’s effect, and it’s better if its effect is greater than 33%.","移除缪中微子效果的上限，且在效果超过 33% 时进一步增强。"],
        ["Fabric boosts Wormhole more.","时空纤维进一步加成虫洞。"],
        ["Raise Meditation' level to the 1.5th power.","冥想等级变为原来的 1.5 次方。"],
        ["Meta-Tickspeed scaling starts ^2 later.","时间速度的元折算延迟 2 次方出现。"],
        ["Abyssal Blot’s second effect applies to mass gain’s softcap^7-8, they are 20% weaker.","深渊之渍的第二个效果影响质量获取的七重与八重软上限，使它们弱化 20%。"],
        ["Stronger Power’s softcap is weaker.","弱化强化器倍率的软上限。"],
        ["Unlock Dark Run. Keep Oganesson-118 on darkness.","解锁黑暗狂奔。黑暗重置时保留鿫（118Og）。"],
        ["Collapsed star’s effect raises normal mass. This exponent also raises mass of black hole.","坍缩星辰效果以指数加成普通质量，此指数同时加成黑洞质量。"],
        ["Spatial Dilation is slightly weaker.","空间膨胀略微减弱。"],
        ["[m1]’s effect is overpowered.","[m1] 的效果大幅增强。"],
        ["[rp1]’s effect is overpowered again.","[rp1] 的效果再次大幅增强。"],
        ["[bh1]’s effect is overpowered for the third time.","[bh1] 的效果第三次大幅增强。"],
        ["Hex’s requirement and Glory’s requirement are slightly weaker.","六重阶层与辉煌的需求略微降低。"],
        ["Unlock the 15th Challenge.","解锁挑战 15。"],
        ["+^0.05 to Protostars. Nebulae Tier 1 work in Big Rip.","原初恒星的指数增加 0.05。第一阶星云在大撕裂中生效。"],
        ["Remove two softcaps of particle powers gain.","移除粒子能量获取的两个软上限。"],
        ["Collapsed star’s effect is even better.","坍缩星辰效果进一步增强。"],
        ["Add 100 more C13-C14 maximum completions.","挑战 13–14 的次数上限增加 100。"],
        ["Uncap bonus fermions from Epsilon Particles.","移除 ε 粒子提供的额外费米子阶层上限。"],
        ["Uncap Bottom.","移除底夸克的上限。"],
        ["Neutronium-0 can affect supernova challenges at a reduced rate.","中子元素（0）以削弱的效果影响超新星挑战。"],
        ["Super & Hyper prestige levels start +30 later.","转生等级的超级与究极折算延迟 30 级出现。"],
        ["Supernova boosts dark rays earned.","超新星加成暗射线获取。"],
        ["Dark Shadow’s fifth effect also boosts entropy cap at a reduced rate.","黑暗之影的第五个效果以削弱的效果加成熵上限。"],
        ["Exotic rank starts later based on meta-rank starting.","基于级别元折算的起点，延迟级别奇异折算。"],
        ["Entropy's cap is increased by 25% every prestige level. Entropic Evaporation^2 is slightly weaker.","每个转生等级使熵上限增加 25%。熵蒸发²的折算略微减弱。"],
        ["Reduce first 12 challenges’ scaling’s strength by 30%.","前十二个挑战的折算强度弱化 30%。"],
        ["Meta-Tier starts x10 later.","阶层的元折算延迟 10 倍出现。"],
        ["Raise collapsed stars gain after softcap by 10.","坍缩星辰获取在软上限之后变为原来的 10 次方。"],
        ["Entropy boosts dark ray gain.","熵加成暗射线获取。"],
        ["Super Pent & Hex start later based on Hybridized Uran-Astatine's first effect.","铀砹混合物的第一个效果延迟五重与六重阶层的超级折算。"],
        ["Entropy’s hardcap is now a softcap.","熵的硬上限改为软上限。"],
        ["Add 100 more C13-C15 maximum completions.","挑战 13–15 的次数上限增加 100。"],
        ["Black hole overflow starts later based on prestige base.","转生基础值延迟黑洞溢出。"],
        ["Unlock The Matters.","解锁物质。"],
        ["Dark matter boosts abyssal blots gain. Ultra mass upgrades start ^1.5 later.","暗物质加成深渊之渍获取。质量升级的超究折算延迟 1.5 次方出现。"],
        ["Chromas gain is raised to 1.1th power.","色度获取变为原来的 1.1 次方。"],
        ["Z0 Boson’s first effect raises tickspeed power at a reduced rate.","Z⁰ 玻色子的第一个效果以削弱的效果指数加成时间速度倍率。"],
        ["Each Matter’s gain is increased by 10% for every OoM^2 of Dark Matter. Unlock more main upgrades.","暗物质每增加一个二重数量级，各物质获取增加 10%。解锁更多主要升级。"],
        ["Hybridized Uran-Astatine’s first effect makes Exotic Rank and Meta-Tier start later at ^0.5 rate.","铀砹混合物的第一个效果以平方根倍率延迟级别奇异折算与阶层元折算。"],
        ["Keep prestige tiers on darkness. Super and Hyper Prestige Levels start x2 later.","黑暗重置时保留转生等级。转生等级的超级与究极折算延迟 2 倍出现。"],
        ["Fermium-100 is slightly stronger. Automate each matter’s upgrade.","镄（100Fm）的效果略微增强。自动购买各物质的升级。"],
        ["Add 200 more C13-C14 maximum completions.","挑战 13–14 的次数上限增加 200。"],
        ["Exotic Rank and Ultra Prestige Level scaling are 10% weaker.","级别奇异折算与转生等级超究折算弱化 10%。"],
        ["Particle powers’ first effect is better.","增强粒子能量的第一个效果。"],
        ["Unlock Accelerators, tickspeed now provides an exponential boost, but nullify Argon-18 and Unpentnilium-150 (except in 15th Challenge).","解锁加速器。时间速度改为提供指数加成，但氩（18Ar）与元素 150 失效（挑战 15 中除外）。"],
        ["Improve Unbitrium-123.","增强元素 123。"],
        ["15th challenge reward applies to black hole overflow.","挑战 15 的奖励也影响黑洞溢出。"],
        ["Black hole’s effect provides an exponential boost to mass. Actinium-89 is now stronger outside big rip.","黑洞效果改为对质量提供指数加成。锕（89Ac）在大撕裂外增强。"],
        ["Unlock the fourth mass upgrade which raises Stronger.","解锁第四个质量升级，对强化器提供指数加成。"],
        ["Booster boosts its effect.","助推器加成自身效果。"],
        ["1st and 3rd Photon & Gluon upgrades provide an exponential boost. Keep big rip upgrades on darkness.","光子与胶子升级 1、3 改为提供指数加成。黑暗重置时保留大撕裂升级。"],
        ["Overpower boosts accelerator power at a reduced rate.","超强化器以削弱的效果加成加速器倍率。"],
        ["Dark matter boosts matter exponent.","暗物质增加物质指数。"],
        ["Hybridized Uran-Astatine’s second effect applies to hex scalings. It is stronger.","铀砹混合物的第二个效果影响六重阶层折算，并且增强。"],
        ["Unlock Beyond-Ranks.","解锁超越级别。"],
        ["Muscler boosts its effect.","锻体器加成自身效果。"],
        ["Stronger overflow starts later based on FSS.","最终星辰碎片延迟强化器溢出。"],
        ["You can buy protostar elements during Big Rip.","允许在大撕裂中购买原初恒星元素。"],
        ["Meta-Rank Boost also affects Meta-Tetr starting at a reduced rate, strengthen Unpentpentium-155.","级别元折算加成也以削弱的效果影响四重阶层元折算的起点，并增强元素 155。"],
        ["Exotic supernova scales 25% weaker.","超新星的奇异折算弱化 25%。"],
        ["[Bottom]’s effect is now better, and is uncapped. Additionally, the Fourth Photon upgrade now provides an exponential boost.","底夸克效果增强并移除上限。光子升级 4 改为提供指数加成。"],
        ["Entropic Multiplier is overpowered.","熵倍率大幅增强。"],
        ["Entropic Evaporation^2 and Condenser^2 scale another 15% weaker.","熵蒸发²与熵压缩²的折算再次弱化 15%。"],
        ["Strengthen Unseptoctium-178 slightly.","元素 178 的效果略微增强。"],
        ["Final Star Shard's requirement is 20% cheaper.","最终星辰碎片的需求降低 20%。"],
        ["Unlock the 16th Challenge.","解锁挑战 16。"],
        ["[m1]’s effect is even better.","[m1] 的效果进一步增强。"],
        ["7th break dilation upgrade is even better.","撕裂膨胀升级 7 的效果进一步增强。"],
        ["Beyond Rank’s next tier requirement is 5% weaker.","超越级别的下一阶需求降低 5%。"],
        ["The softcap of theorem’s level starts +5 later.","定理等级的软上限延迟 5 级出现。"],
        ["Improve the formula of corrupted shard gain better.","改善腐化碎片获取公式。"],
        ["The effect of Glory 45 is even stronger.","辉煌 45 的效果进一步增强。"],
        ["Infinity theorem increases parallel extruder’s power. Muon-Catalyzed Fusion no longer resets.","无限定理增加平行挤出器倍率。缪子催化聚变不再重置。"],
        ["Quantum Shard’s base is boosted by FSS.","最终星辰碎片增加量子碎片的底数。"],
        ["Matter exponent boosts matters gain outside C16 (changed during C16).","物质指数加成挑战 16 外的物质获取（挑战 16 中效果改变）。"],
        ["Biniltrium-203 is overpowered.","元素 203 的效果大幅增强。"],
        ["Increase C16’s max completions to 100. Keep C16 completions in infinity.","挑战 16 的次数上限增加至 100。无限重置时保留挑战 16 的完成次数。"],
        ["Allow you to form any theorem into its fragments, they give you benefits.","允许将定理分解成碎片，碎片会提供加成。"],
        ["Mass of black hole boosts mass overflow^1-2 starting.","黑洞质量延迟质量的一重与二重溢出。"],
        ["Passively generate 100% of corrupted shards gained by best mass of black hole in C16.","每秒自动获得基于挑战 16 最高黑洞质量计算的腐化碎片的 100%。"],
        ["Super Parallel Extruder starts +25 later.","平行挤出器的超级折算延迟 25 级出现。"],
        ["Remove the softcap of abyssal blot’s seven reward.","移除深渊之渍第七个奖励的软上限。"],
        ["Passively gain 1% of best IP gained on infinity. The softcap of theorem’s level starts +5 later again.","每秒自动获得最佳无限点数获取量的 1%。定理等级的软上限再次延迟 5 级出现。"],
        ["Holmium-67 now provides an exponential boost.","钬（67Ho）改为提供指数加成。"],
        ["[ct5] is slightly stronger.","[ct5] 的效果略微增强。"],
        ["Abyssal blot’s eighth reward is even stronger.","深渊之渍的第八个奖励进一步增强。"],
        ["Going infinity without any theorem selected will auto-fragment each theorem at 25% yield.","不选择定理前往无限时，会将所有候选定理以 25% 的产率自动分解。"],
        ["Unlock 17th Challenge.","解锁挑战 17。"],
        ["[ct10] is twice as effective.","[ct10] 的效果翻倍。"],
        ["Current theorem’s level now automatically appends to theorems in core if it’s greater than their level. Keep FV Manipulators on infinity.","当前定理等级高于核心定理等级时，自动更新核心定理等级。无限重置时保留假真空操纵器。"],
        ["Remove all scalings from Pent. Hybridized Uran-Astatine’s first effect now works with Ranks, but it is now changed.","移除五重阶层的所有折算。铀砹混合物的第一个效果现在影响级别，但效果改变。"],
        ["Dimensional mass gain is boosted by infinity theorems. Its formula is slightly better.","无限定理加成维度质量获取，并略微改善其公式。"],
        ["Binilennium-209 is overpowered.","元素 209 的效果大幅增强。"],
        ["Super FSS starts +1 later per 2 infinity theorems.","每两个无限定理使最终星辰碎片的超级折算延迟 1 次出现。"],
        ["FSS’s first reward in C16 is slightly stronger.","最终星辰碎片在挑战 16 内的第一个奖励略微增强。"],
        ["Entropic Multiplier now cheapens instead of increasing starting.","熵倍率改为降低花费，而非延迟起点。"],
        ["The first softcap of Abyssal Blot’s tenth reward is slightly weaker.","深渊之渍第十个奖励的一重软上限略微减弱。"],
        ["W+ Boson now provides an exponential boost.","W⁺ 玻色子改为提供指数加成。"],
        ["Unlock the Corrupted Star.","解锁腐化星辰。"],
        ["Black Hole’s Mass Overflow^2 starts ^1.5 later to exponent.","黑洞质量二重溢出的指数延迟 1.5 次方出现。"],
        ["Passively gain 1% of fragment formed from theorem in the core.","每秒自动获得核心定理分解碎片量的 1%。"],
        ["De-corrupt Unhexbium-162.","解除元素 162 的腐化。"],
        ["C17’s completions boost Super Parallel Extruder.","挑战 17 的完成次数延迟平行挤出器的超级折算。"],
        ["The formula of each matter production is better.","改善各物质的生成公式。"],
        ["Fading Matters boost mass overflow^2 starting.","衰减物质延迟质量的二重溢出。"],
        ["Unlock 18th Challenge.","解锁挑战 18。"],
        ["The softcap of accelerator’s effect is slightly weaker.","加速器效果的软上限略微减弱。"],
        ["Abyssal Blot’s eighth reward is now works in C16.","深渊之渍的第八个奖励在挑战 16 内生效。"],
        ["Add 100 more C16’s max completions.","挑战 16 的次数上限增加 100。"],
        ["Unlock Galactic Prestige.","解锁星系转生。"],
        ["Galactic Prestige’s resources are affected by pre-infinity global speed.","无限之前全局速度影响星系转生资源。"],
        ["Prestige mass’s effect now affects stronger overflow^1-2 at a reduced rate.","转生质量效果以削弱的效果影响强化器的一重与二重溢出。"],
        ["Automatically update best IP gained.","自动更新最佳无限点数获取量。"],
        ["The softcap of abyssal blot’s tenth reward is slightly weaker.","深渊之渍第十个奖励的软上限略微减弱。"],
        ["Unlock Valor, and automate Ascension.","解锁英勇，并自动飞升。"],
        ["Newton, Hawking, and Dalton Theorems are GREATLY improved.","牛顿、霍金与道尔顿定理的效果大幅增强。"],
        ["Newton Theorem’s fifth star now affects black hole overflow^2, but weaker in C16.","牛顿定理的第五颗星影响黑洞的二重溢出，但在挑战 16 内效果削弱。"],
        ["Unlock fifth row of main upgrades.","解锁主要升级的第五行。"],
        ["Add 300 more C16’s max completions.","挑战 16 的次数上限增加 300。"],
        ["The softcap of theorem’s meta-score starts x1.05 later per infinity theorem.","每个无限定理使定理元评分的软上限延迟 1.05 倍出现。"],
        ["Biquadquadium-244’s formula is better.","改善元素 244 的公式。"],
        ["Dark shadow’s fourth reward now affects supernova generation at reduced rate.","黑暗之影的第四个奖励以削弱的效果影响超新星生成。"],
        ["Super False Vacuum Manipulator is 50% weaker.","假真空操纵器的超级折算弱化 50%。"],
        ["Carbon-6's effect is overpowered again.","碳（6C）的效果再次大幅增强。"],
        ["You can now buy false vacuum manipulator outside C16.","允许在挑战 16 外购买假真空操纵器。"],
        ["Bonus cosmic string strengthens its power at a reduced rate.","宇宙弦的额外等级以削弱的效果增强其倍率。"],
        ["The base of collapsed star’s effect for supernova generation is slightly stronger.","坍缩星辰对超新星生成的效果底数略微增强。"],
        ["Unlock 19th Challenge.","解锁挑战 19。"],
        ["Supernovas boost galactic prestige’s resources at a reduced rate.","超新星以削弱的效果加成星系转生资源。"],
        ["Total corrupted shards boost infinity points gain.","总腐化碎片加成无限点数获取。"],
        ["Parallel Extruder is thrice as effective.","平行挤出器的效果变为原来的 3 倍。"],
        ["FSS boosts the exponent of Ascension’s base.","最终星辰碎片增加飞升基础值的指数。"],
        ["Super Galactic Prestige starts +1 later.","星系转生的超级折算延迟 1 次出现。"],
        ["Add 500 more C16’s max completions.","挑战 16 的次数上限增加 500。"],
        ["Rank Collapse starts later based on fading matter.","衰减物质延迟级别坍缩。"],
        ["Challenge 5’s reward is twice as stronger.","挑战 5 的奖励翻倍。"],
        ["Dimensional Mass’s effect is even stronger.","维度质量效果进一步增强。"],
        ["Unlock 20th Challenge.","解锁挑战 20。"],
        ["Stardust boosts Protostars at a reduced rate.","星尘以削弱的效果加成原初恒星。"],
        ["Wormhole affects Protostars slightly.","虫洞略微加成原初恒星。"],
        ["Automatically assign all normal nebulae.","自动分配所有普通星云。"],
        ["Nebulae Tier 1 are better. Raise neutron stars gain to the 1.5th power.","第一阶星云增强。中子星获取变为原来的 1.5 次方。"],
        ["Quarks raise normal mass slightly.","夸克对普通质量提供少量指数加成。"],
        ["Dark Shadow’s second reward is better.","增强黑暗之影的第二个奖励。"],
        ["Collapsed stars boost protostars gain.","坍缩星辰加成原初恒星获取。"],
        ["Protostars boost Exotic Atoms slightly.","原初恒星略微加成奇异原子。"],
        ["The softcap of quark’s formula from protostars is weaker.","原初恒星提供的夸克公式软上限弱化。"],
        ["FSS raises the speed and the starting reduction of corrupted star at a reduced rate.","最终星辰碎片以削弱的效果指数加成腐化星辰速度与削减起点。"],
        ["Yellow and cyan nebulae have a second effect that provides a super-exponential boost slightly.","黄色与青色星云获得第二个效果，提供少量超指数加成。"],
        ["Exotic II Nebulae boost infinity points gain.","奇异 II 星云加成无限点数获取。"],
        ["Anti-wormhole boosts protostars slightly.","反虫洞略微加成原初恒星。"],
        ["Stardust boosts supernova generation.","星尘加成超新星生成。"],
        ["Quarks in Big Rip","大撕裂中的夸克"],
        ["Ripped","撕裂"],
        ["Quarks in Challenge 16","挑战 16 中的夸克"],
        ["Dark","黑暗"],
        ["Dark Shadows","黑暗之影"],
        ["Infinity","无限"],
        ["Corrupted","腐化"],
        ["Berry","浆果"],
        ["Proto","原初恒星"],
        ["Normal","普通"],
        ["Muonic","缪子"],
        ["Placeholder.","待添加。"],
        ["Tier {2}","阶层 {2}"],
        ["Elements' Layer:","元素层："],
        ["[CANNOT AFFORD in Big Rip]","[大撕裂中无法购买]"]
    ]) add(source + " => " + target);
    for (const [source,target] of [
        ["Multiply all matters gain by 1e10, and square mass of black hole gain.","所有物质获取乘以 1e10，黑洞质量获取平方。"],
        ["Unlock Anti-Wormhole.","解锁反虫洞。"],
        ["[ Evolved Exotic ]","[进化后的奇异效果]"],
        ["Unlock the Unstable Black Hole that boosts normal black hole. (in black hole tab)","解锁加成普通黑洞的不稳定黑洞（在黑洞标签页）。"],
        ["Anti-Wormhole boosts Corrupted Shards before logarithmic boost.","反虫洞在对数加成之前加成腐化碎片。"],
        ["Unstable Black Hole's effect is 50% stronger. (after overflow)","不稳定黑洞效果增强 50%（在溢出之后生效）。"],
        ["Remove all pre-Meta scalings from Supernova. [Neut-Muon]'s effect is now changed. Denullify C5's effect, but it's changed.","移除超新星在元之前的所有折算。改变缪中微子的效果。恢复挑战 5 的效果，但改变其公式。"],
        ["Dark Shadow's first reward is overpowered. Remove all scalings from Tickspeed, but nullify [Tau]'s effect.","黑暗之影的第一个奖励大幅增强。移除时间速度的所有折算，但陶子效果失效。"],
        ["Unlock Exotic Protostars.","解锁奇异原初恒星。"],
        ["Unlock Exotic Atoms in Atom tab, and unlock new elements' layer.","在原子标签页解锁奇异原子，并解锁新的元素层。"],
        ["Corrupted Shards formula is better. Triple Anti-Wormhole.","改善腐化碎片公式。反虫洞效果变为原来的 3 倍。"],
        ["Remove all scalings from BHC. [Neut-Tau]'s effect no longer affects BHC's cheapness. In C16, BHC is 1,000,000x cheaper.","移除黑洞压缩器的所有折算。陶中微子不再降低黑洞压缩器花费。挑战 16 内黑洞压缩器花费降低至原来的百万分之一。"],
        ["Muon-Catalyzed Fusion Tier weakens Mass Upgrade scalings. In C16, this weakens Extreme Scaling too.","缪子催化聚变阶层弱化质量升级折算。在挑战 16 内还会弱化极端折算。"],
        ["Remove all scalings from Cosmic Ray. [Neut-Tau]'s effect now re-affects BHC's cheapness, but its effect is MASSIVELY weaker.","移除宇宙射线的所有折算。陶中微子重新降低黑洞压缩器花费，但效果大幅削弱。"],
        ["Remove all scalings from Tetr. However, Hybridized Uran-Astatine's first effect no longer affects it. Tetr is 500x cheaper in C16.","移除四重阶层的所有折算，但铀砹混合物的第一个效果不再影响它。挑战 16 内四重阶层需求降低至原来的 1/500。"],
        ["De-corrupt 40th, 64th, 67th, 150th, 199th, 200th, and 204th elements.","解除元素 40、64、67、150、199、200 与 204 的腐化。"],
        ["Requires:","需要："],
        ["of black hole.","的黑洞质量。"],
        ["Corrupted Shard.","个腐化碎片。"],
        ["Are you sure you want to raise dark?","确定要进行黑暗重置吗？"],
        ["Boosts mass gain by","使质量获取乘以"],
        ["Boosts dark ray gain by","使暗射线获取乘以"],
        ["Boosts blueprint particles gain by","使蓝图粒子获取乘以"],
        ["Makes you becoming","使你额外获得"],
        ["more supernovas","次超新星"],
        ["Boosts entropy earned by","使熵获取乘以"],
        ["Boosts abyssal blots earned by","使深渊之渍获取乘以"],
        ["Boosts exponent from the mass of BH formula by","使黑洞质量公式的指数增加"],
        ["Uncaps BH-Exponent Boost's effect","移除黑洞指数加成效果的上限"],
        ["Boosts dark shadows gain by","使黑暗之影获取乘以"],
        ["Makes mass gain softcaps 4-{1} start","使质量获取的四重至 {1} 重软上限延迟"],
        ["Boosts hawking radiation gain by","使霍金辐射获取乘以"],
        ["Boosts prestige base's multiplier by","使转生基础值的倍率乘以"],
        ["Boosts cosmic string's power by","使宇宙弦倍率乘以"],
        ["Boosts all matters gain by","使所有物质获取乘以"],
        ["Boosts accelerator power by","使加速器倍率乘以"],
        ["Atomic power & quark overflows start","原子能量与夸克溢出延迟"],
        ["Final Star Shards are","最终星辰碎片的需求"],
        ["Raises Exotic Atom's formula by","使奇异原子公式变为原来的"],
        ["Passively gains","每秒自动获得"],
        ["of dark rays gained on reset per second","的重置暗射线获取量"],
        ["more glyphic mass","的雕文质量加成"],
        ["more C13-15 maximum completions","次额外挑战 13–15 完成次数上限"],
        ["'s effect at","的效果，当前值为"],
        ["Cyrillic Glyph","西里尔雕文"],
        ["Deutsch Glyph","德语雕文"],
        ["Swedish Glyph","瑞典雕文"],
        ["Chinese Glyph","中文雕文"],
        ["Spanish Glyph","西班牙雕文"],
        ["Slovak Glyph","斯洛伐克雕文"],
        ["Reduce the exponent of normal mass’s multiplier, multiplier from mass of black hole by","将普通质量倍率的指数与黑洞质量的倍率削减"],
        ["in dark run.","（在黑暗狂奔中）。"],
        ["Earn more glyphs based on normal mass.","基于普通质量，获得更多雕文。"],
        ["Reduce Calm Power and Fabric by","将宁静能量与时空纤维削减"],
        ["Earn more glyphs based on Fabric.","基于时空纤维，获得更多雕文。"],
        ["Reduce the exponent of dark matter’s multiplier, rage power’s multiplier by","将暗物质倍率与狂怒能量倍率的指数削减"],
        ["Earn more glyphs based on mass of black hole.","基于黑洞质量，获得更多雕文。"],
        ["Reduce the exponent of atom, atomic power and quark multiplier by","将原子、原子能量与夸克倍率的指数削减"],
        ["Earn more glyphs based on quarks.","基于夸克，获得更多雕文。"],
        ["Reduce the exponent of relativistic particle’s multiplier, the exponent of dilated mass formula by","将相对论粒子倍率的指数与膨胀质量公式的指数削减"],
        ["Earn more glyphs based on dilated mass.","基于膨胀质量，获得更多雕文。"],
        ["Reduce the exponent of supernova resources’ multiplier by","将超新星资源倍率的指数削减"],
        [", increase the supernova’s requirement by","，并增加超新星需求"],
        ["Earn more glyphs based on collapsed stars.","基于坍缩星辰，获得更多雕文。"],
        ["Reduce the prestige base’s exponent by","将转生基础值的指数削减"],
        [", increase every rank’s requirement by","，并增加各级别的需求"],
        ["Earn more glyphs based on prestige base.","基于转生基础值，获得更多雕文。"],
        ["Raise mass gain by 1.5 every level.","每级使质量获取变为原来的 1.5 次方。"],
        ["Raise Wormhole by 1.5 every level.","每级使虫洞效果变为原来的 1.5 次方。"],
        ["Raise mass of black hole gain by 1.5 every level.","每级使黑洞质量获取变为原来的 1.5 次方。"],
        ["Exotic rank starts x1.25 later every level.","每级使级别奇异折算延迟 1.25 倍出现。"],
        ["Rank tiers' nerf power from 8th QC modifier is weaker while dark running.","黑暗狂奔中，量子挑战配置 8 对级别的削弱减轻。"],
        ["Raise atom gain by 1.5 every level.","每级使原子获取变为原来的 1.5 次方。"],
        ["Triple dark ray gain for each level.","每级使暗射线获取乘以 3。"],
        ["Gain x1.5 more Cyrillic Glyphs.","西里尔雕文获取乘以 1.5。"],
        ["Decrease Meditation's softcap weakness by -5%.","冥想的软上限削弱程度降低 5%。"],
        ["Dilated mass's overflow starts ^10 later every level.","每级使膨胀质量溢出延迟 10 次方出现。"],
        ["Star generators are ^1.5 stronger every level.","每级使星辰生成器效果变为原来的 1.5 次方。"],
        ["Prestige base's exponent is increased by 0.02 per level.","每级使转生基础值的指数增加 0.02。"],
        ["Add 0.1 to matter exponent.","物质指数增加 0.1。"],
        ["Cosmic ray effect is now an exponent at a super reduced rate.","宇宙射线效果改为以极低的倍率提供指数加成。"],
        ["Green Chromas gain is squared.","绿色色度获取平方。"],
        ["Each matter's exponent is increased by 12.5% per level.","每级使各物质的指数增加 12.5%。"],
        ["Exit Dark Run","退出黑暗狂奔"],
        ["Start Dark Run","开始黑暗狂奔"],
        ["Dark Running will force a Dark reset, and will trap you into Big Rip with quantum challenge modifiers {0}. You will produce","黑暗狂奔会强制进行黑暗重置，并使你被困在大撕裂与配置为 {0} 的量子挑战中。你将产生"],
        ["based on resources which nerf things, and choosing a glyph to earn will exit a Dark Run.","，其获取基于资源，并对相关功能产生削弱。选择要获取的雕文后，会退出黑暗狂奔。"],
        ["Next Round","下一轮"],
        ["Rounds left:","剩余轮数："],
        ["Rounds:","轮数："],
        ["Max:","最大值："],
        ["[ Click to {0} ]","[点击以{0}]"],
        ["Thanks to FSS, your glyphic mass gain is boosted by x{0}","最终星辰碎片使雕文质量获取乘以 {0}"],
        ["Thanks to Evolutions, you can select up to {0} glyphs.","进化次数使你最多可选择 {0} 种雕文。"],
        ["Also, upgrades spend 50% cost.","此外，升级仅消耗 50% 的花费。"],
        ["Anti-Wormhole boosts Pion gain.","反虫洞加成 π 介子获取。"],
        ["Mass of unstable black hole boosts Pion gain.","不稳定黑洞质量加成 π 介子获取。"],
        ["Remove all pre-meta scalings from Fermion Tiers.","移除费米子阶层在元之前的所有折算。"],
        ["You can now automatically get all Meta-Fermions Tiers outside any Fermion.","允许在未激活任何费米子时自动获得所有元费米子阶层。"],
        ["^1.1 to Matters gain inside C16, and ^1.05 to Matters' exponent outside C16.","挑战 16 内的物质获取变为原来的 1.1 次方，挑战 16 外的物质指数变为原来的 1.05 次方。"],
        ["Kaon & Pion are doubled every muonic element bought.","每购买一个缪子元素，K 介子与 π 介子获取翻倍。"],
        ["Not affected by Neutronium-0, each pre-16 challenge’s completions boost each chroma gain.","不受中子元素（0）影响，挑战 16 之前各挑战的完成次数加成各色度获取。"],
        ["You can now automatically earn Cyrillic, Deutsch, and Swedish glyphs outside Dark Run, and they don’t affect dark run’s nerf.","允许在黑暗狂奔外自动获取西里尔、德语与瑞典雕文，它们不再影响黑暗狂奔的削弱惩罚。"],
        ["Stronger boosts after overflow.","强化器在溢出之后提供加成。"],
        ["C9’s effect softcap is 1% weaker.","挑战 9 效果的软上限弱化 1%。"],
        ["Remove the softcap of dark shadow’s fourth reward. Supernovas boost Pion gain.","移除黑暗之影第四个奖励的软上限。超新星加成 π 介子获取。"],
        ["De-corrupt Unoctseptium-187.","解除元素 187 的腐化。"],
        ["De-corrupt FSS’s reward to Matters.","解除最终星辰碎片物质奖励的腐化。"],
        ["Pion’s first reward is even stronger. Honor 247’s reward affects Pion gain.","π 介子的第一个奖励进一步增强。荣耀 247 的奖励影响 π 介子获取。"],
        ["Pyro-Radioactive Plasma is better.","增强热放射等离子体。"],
        ["Final Star Shards increase Matter formula.","最终星辰碎片增强物质公式。"],
        ["Greatly improve FSS base formula.","大幅改善最终星辰碎片的基础值公式。"],
        ["C15's reward affects mass overflow^2 starting.","挑战 15 的奖励影响质量二重溢出的起点。"],
        ["Dimensional mass affects pre-theorem's level.","维度质量影响候选定理等级。"],
        ["Quantum times boost infinity points gain. De-nullify [Tau]’s effect, but its formula is changed.","量子次数加成无限点数获取。恢复陶子的效果，但改变其公式。"],
        ["Raise Dark Shadows by ^1.5.","黑暗之影变为原来的 1.5 次方。"],
        ["Accelerators raise the Argon-18's effect at an extremely reduced rate (after first overflow).","加速器以极低的效果指数加成氩（18Ar）的效果（在一重溢出之后生效）。"],
        ["Atomic power’s free tickspeeds now append to cosmic strings at a logarithmic rate.","原子能量提供的免费时间速度等级以对数倍率增加宇宙弦等级。"],
        ["Exotic atoms boost infinity points gain, starting at 1.798e308.","奇异原子在达到 1.798e308 后加成无限点数获取。"],
        ["Red Matter’s Upgrade is even stronger.","红色物质升级的效果进一步增强。"],
        ["Total infinity points boost kaon & pion gains.","总无限点数加成 K 介子与 π 介子获取。"],
        ["Remove the cap of [Strange]’s reward. It now applies to 4th Photon Upgrade again.","移除奇夸克奖励的上限，使其再次影响光子升级 4。"],
        ["Mass Overflows^1-2 are 5% weaker.","质量的一重与二重溢出弱化 5%。"],
        ["Increase exotic atom’s reward strength by +1.25% per infinity theorem.","每个无限定理使奇异原子的奖励强度增加 1.25%。"],
        ["The base of Muonic Boron-5 is increased by +1. Muonic Phosphorus-15 is even stronger.","缪子硼（5B）的底数增加 1。缪子磷（15P）的效果进一步增强。"],
        ["Prestige Base multiplies stronger overflow^1-2 starting.","转生基础值乘算强化器一重与二重溢出的起点。"],
        ["Bibihexium-226 works thrice as effective.","元素 226 的效果变为原来的 3 倍。"],
        ["Exotic Atom’s Reward Strength applies to Matter Upgrades at a reduced rate.","奇异原子的奖励强度以削弱的效果影响物质升级。"],
        ["Muonic Hydrogen-1 also applies to Kaon gain.","缪子氢（1H）也影响 K 介子获取。"],
        ["16th Challenge’s reward also applies to 9th Challenge’s reward.","挑战 16 的奖励也影响挑战 9 的奖励。"],
        ["Kaon’s first reward is better.","K 介子的第一个奖励增强。"],
        ["Corrupted Star’s speed is increased by pre-Infinity global speed at a reduced rate.","无限之前全局速度以削弱的效果增加腐化星辰速度。"],
        ["Muon-Catalyzed Fusion speeds Corrupted Star.","缪子催化聚变加快腐化星辰增长。"],
        ["Increase the base of C17’s reward by 1.","挑战 17 奖励的底数增加 1。"],
        ["Supernova no longer has requirement with collapsed stars. Instead, they can produce supernovas passively.","超新星不再需要坍缩星辰。改为由坍缩星辰自动生成超新星。"],
        ["The growth reductions of corrupted stars start later based on supernovas.","超新星延迟腐化星辰的增长削减。"],
        ["Unlock a new effect of corrupted star.","解锁腐化星辰的新效果。"],
        ["Pion’s first reward now provides an exponential boost.","π 介子的第一个奖励改为提供指数加成。"],
        ["Collapsed Stars boost starting of the growth reductions of corrupted stars.","坍缩星辰延迟腐化星辰的增长削减。"],
        ["Remove first softcap of C9’s reward.","移除挑战 9 奖励的一重软上限。"],
        ["Double corrupted star’s speed per infinity theorem.","每个无限定理使腐化星辰速度翻倍。"],
        ["The exponent of ascension base is increased by Renown at a reduced rate.","名誉以削弱的效果增加飞升基础值的指数。"],
        ["Quark overflow is 25% weaker.","夸克溢出弱化 25%。"],
        ["Boost Supernova Generation based on beyond-ranks' maximum tier.","超越级别的最高阶层加成超新星生成。"],
        ["Corrupted star boosts its speed at a reduced rate. Keep Supernovas on Infinity.","腐化星辰以削弱的效果加快自身增长。无限重置时保留超新星。"],
        ["Infinity Theorems raise Pions and Kaons, and boost its reward strength.","无限定理对 π 介子与 K 介子提供指数加成，并增强它们的奖励强度。"],
        ["Hawking Theorem’s fifth star now affects black hole’s effect.","霍金定理的第五颗星现在影响黑洞效果。"],
        ["Pre-Infinity global speed now affects supernova generation.","无限之前全局速度现在影响超新星生成。"],
        ["Corrupted star boosts its reductions starting at a reduced rate.","腐化星辰以削弱的效果延迟自身增长削减。"],
        ["Pion’s second reward now affects black hole overflow^2 at a reduced rate.","π 介子的第二个奖励以削弱的效果影响黑洞二重溢出。"],
        ["Pion’s third reward is 50% stronger.","π 介子的第三个奖励增强 50%。"],
        ["Supernova divides Corrupted Star upgrade 1 and 2 costs.","超新星降低腐化星辰升级 1 与 2 的花费。"],
        ["Unlock the sixth star generator.","解锁第六个星辰生成器。"],
        ["Undec 2’s reward now affects Hyper FSS.","十一重阶层 2 的奖励现在影响最终星辰碎片的究极折算。"],
        ["Muonic Zirconium-40 is twice as stronger.","缪子锆（40Zr）的效果翻倍。"],
        ["Unstable BH's effect is raised by 10 outside C16.","不稳定黑洞的效果在挑战 16 外变为原来的 10 次方。"],
        ["Unlock sixth star in the theorem.","解锁定理的第六颗星。"],
        ["Muonic Arsenic-33 is even better.","缪子砷（33As）的效果进一步增强。"],
        ["Muonic Potassium-19 is even better.","缪子钾（19K）的效果进一步增强。"],
        ["Muonic Iodine-53 is stronger based on Infinity Theorem.","无限定理增强缪子碘（53I）的效果。"],
        ["Unlock the seventh star generator.","解锁第七个星辰生成器。"],
        ["Remove the scaling from primordium theorem. The bonus of each primordium particles multiplies its level instead of adding.","移除原基定理的折算。各原基粒子的额外等级改为乘算。"],
        ["The growth reductions of corrupted stars start later based on Normal Energy.","普通能量延迟腐化星辰的增长削减。"],
        ["Unlock the eighth star generator.","解锁第八个星辰生成器。"],
        ["Add new meditation’s effect.","为冥想增加新效果。"],
        ["Calm Power boosts Apples & Strawberries.","宁静能量加成苹果与草莓获取。"],
        ["to Apples,","的苹果加成，"],
        ["to Strawberries","的草莓加成"],
        ["Add new another meditation’s effect.","为冥想再增加一个效果。"],
        ["Automate Meditation. Keep meditation on all pre-Ouroboric resets.","自动冥想。在所有早于衔尾蛇重置的重置中保留冥想。"],
        ["Double Apples and Strawberries.","苹果与草莓获取翻倍。"],
        ["Tetr boosts Calm Power.","四重阶层加成宁静能量。"],
        ["Improve 3rd Meditation effect base.","改善冥想第三个效果的底数。"],
        ["Improve 2nd Apple effect.","增强苹果的第二个效果。"],
        ["Unlock 4th Meditation effect.","解锁冥想的第四个效果。"],
        ["Unlock 5th Meditation effect.","解锁冥想的第五个效果。"],
        ["Raise Fabric from ^0.5 to ^0.6.","时空纤维的指数从 0.5 提升至 0.6。"],
        ["Raise Fabric by +^0.1.","时空纤维的指数增加 0.1。"],
        ["+4 maximum spawn cap if you don't have an Aim powerup.","没有瞄准能力时，最大生成数量增加 4。"],
        ["Challenge 6 and 8 effects are exponential. Automate Wormhole.","挑战 6 与 8 的效果改为指数加成。自动操作虫洞。"],
        ["Double Snake Powerup chance. Increase powerup time to 30s.","贪吃蛇强化道具的出现概率翻倍。道具持续时间增加至 30 秒。"],
        ["Increase base moves until reduction by +5. Gain more Apples on snake length.","开始削减前的基础移动次数增加 5。蛇的长度增加苹果获取。"],
        ["Purify luck is better based on snake length.","蛇的长度增强净化运气。"],
        ["+0.25 to the exponent of quark's formula from protostars.","原初恒星提供的夸克公式指数增加 0.25。"],
        ["Apple's first effect now provides an exponential boost.","苹果的第一个效果改为提供指数加成。"],
        ["+0.1 to the exponent of quark's formula from protostars.","原初恒星提供的夸克公式指数增加 0.1。"],
        ["Snake enemies lose slower. (+2 moves per reduction)","敌蛇损失更慢（每次削减前多移动 2 步）。"],
        ["Triple Anti-Wormhole Mass.","反虫洞质量变为原来的 3 倍。"],
        ["Raise Apples by ^1.1.","苹果获取变为原来的 1.1 次方。"],
        ["Apple's second effect is stronger.","增强苹果的第二个效果。"],
        ["Boosts corrupted shard gain by","使腐化碎片获取乘以"],
        ["Ultra & Meta-Prestige Levels start","转生等级的超究与元折算延迟"],
        ["Boosts entropy gain by","使熵获取乘以"],
        ["Impossible Challenges 1-12 start","挑战 1–12 的无望折算延迟"],
        ["Weaken softcaps of atomic power's effect by","将原子能量效果的软上限削弱"],
        ["Increase the base of Prestige Level 382 for Collapsed Star's effect, the base of Binilunium-201 for BH's effect by","增加转生等级 382 对坍缩星辰效果的底数，以及元素 201 对黑洞效果的底数"],
        ["Boosts mass of unstable BH gain by","使不稳定黑洞质量获取乘以"],
        ["Black hole overflow starts","黑洞溢出延迟"],
        ["FSS's base is raised by","最终星辰碎片的基础值变为原来的"],
        ["Cosmic String's power is raised by","宇宙弦倍率变为原来的"],
        ["Increase parallel extruder's power by","平行挤出器倍率增加"],
        ["Increase matter exponent by","物质指数增加"],
        ["Increase Reward Strength by +10%","奖励强度增加 10%"],
        ["×(next matter)","×（下一种物质）"],
        ["×lg(next matter)","×lg（下一种物质）"],
        ["to exponent","的指数加成"],
        ["You have {0} FSS base (based on previous matters)","你有 {0} 最终星辰碎片基础值（基于之前的物质）"],
        ["Thanks to FSS, your Matters gain is boosted by ^{0}","最终星辰碎片使物质获取变为原来的 {0} 次方"],
        ["Boost {2} Matter gain.","加成{2}物质获取。"],
        ["Require:","需要："],
        ["Final Star Shard (FSS)","最终星辰碎片（FSS）"],
        ["You have ??? Final Star Shard base (based on previous matters)","你有 ??? 最终星辰碎片基础值（基于之前的物质）"],
        ["Reset dark shadows, abyssal blots, matters, and force darkness reset for a final star shard. It boosts matters gain and glyphic mass.","重置黑暗之影、深渊之渍与物质，并强制进行黑暗重置，以获得一个最终星辰碎片。它加成物质与雕文质量获取。"],
        ["FSS base","最终星辰碎片基础值"],
        ["Newton Theorem","牛顿定理"],
        ["Boost normal mass gain.","加成普通质量获取。"],
        ["Weaken Mass Upgrade scalings.","弱化质量升级折算。"],
        ["Boost normal mass overflow starting.","延迟普通质量溢出。"],
        ["Make pre-beyond ranks cheaper.","降低超越之前的级别需求。"],
        ["Increase the exponent of prestige base.","增加转生基础值的指数。"],
        ["Boost normal mass overflow^2 starting.","延迟普通质量的二重溢出。"],
        ["Increase the exponent of ascension base.","增加飞升基础值的指数。"],
        ["Weaken Exotic scalings.","弱化奇异折算。"],
        ["Stronger overflow starts","强化器溢出延迟"],
        ["Hawking Theorem","霍金定理"],
        ["Boost mass of BH gain (weaker in C16).","加成黑洞质量获取（挑战 16 内效果削弱）。"],
        ["Boost BH mass overflow starting (weaker in C16).","延迟黑洞质量溢出（挑战 16 内效果削弱）。"],
        ["Weaken unstable BH decreasing.","弱化不稳定黑洞的衰减。"],
        ["Boost FVM's power.","增加假真空操纵器倍率。"],
        ["Boost the effect of Unstable BH.","增强不稳定黑洞效果。"],
        ["Weaken BH mass overflows.","弱化黑洞质量溢出。"],
        ["Mass of Black Hole","黑洞质量"],
        ["Raise mass of unstable black hole gain to the","使不稳定黑洞质量获取变为原来的"],
        ["th power.","次方。"],
        ["Dalton Theorem","道尔顿定理"],
        ["Boost quarks gain.","加成夸克获取。"],
        ["Boost quark & atomic power overflows starting.","延迟夸克与原子能量溢出。"],
        ["Increase overpower's power.","增加超强化器倍率。"],
        ["Gain more meditation.","获得更多冥想等级。"],
        ["Increase accelerator's power.","增加加速器倍率。"],
        ["Boost Exotic Atom gain.","加成奇异原子获取。"],
        ["Boost protostars gain.","加成原初恒星获取。"],
        ["Boost dilated mass gain.","加成膨胀质量获取。"],
        ["Gain more Stardust.","获得更多星尘。"],
        ["Boost kaon & pion gains by","使 K 介子与 π 介子获取乘以"],
        ["Protoversal Theorem","原初宇宙定理"],
        ["Make cosmic string cheaper.","降低宇宙弦花费。"],
        ["Strengthen primordium particles.","增强原基粒子。"],
        ["Weaken each “entropic” reward scaling.","弱化各类熵奖励的折算。"],
        ["Weaken QC modifications.","弱化量子挑战配置。"],
        ["Boost Entropy gain and cap.","加成熵获取与上限。"],
        ["Boost quantum foam and death shard gain.","加成量子泡沫与死寂碎片获取。"],
        ["Strengthen Entropy Boosts.","增强熵加成。"],
        ["Raise chromas gain to the","使色度获取变为原来的"],
        ["Einstein Theorem","爱因斯坦定理"],
        ["Boost pre-infinity global speed.","加成无限之前全局速度。"],
        ["Boost pre-quantum global speed.","加成量子之前全局速度。"],
        ["Boost dark shadow & abyssal blot gains.","加成黑暗之影与深渊之渍获取。"],
        ["Weaken each glyphic mass nerfing.","弱化各雕文质量的削弱惩罚。"],
        ["Boost the softcap of quark's formula from protostars starting.","延迟原初恒星提供的夸克公式软上限。"],
        ["Boost Exotic Atom Reward Strength.","增强奇异原子奖励强度。"],
        ["Boost supernova generation.","加成超新星生成。"],
        ["Cheapen FSS.","降低最终星辰碎片需求。"],
        ["Weaken beyond rank’s next tier requirement by","将超越级别的下一阶需求降低"],
        ["(Based on","（基于"],
        ["Form into","分解为"],
        ["fragment base","基础碎片"],
        ["Reach over","达到"],
        ["of normal mass to show theorems that you will choose.","的普通质量后，显示可选择的定理。"],
        ["Reroll ({0})","重掷（{0}）"],
        ["[Level {1}, Power: {2}%]","[等级 {1}，强度：{2}%]"],
        ["Are you sure you want to remove the selected theorem?","确定要移除选中的定理吗？"],
        ["Your inventory is maxed! You need to remove unused or useless theorem...","定理背包已满！请移除未使用或无用的定理……"],
        ["Are you sure you want to pick theorem out of core?","确定要将定理移出核心吗？"],
        ["Increase Theorem's Power.","增加定理强度。"],
        ["Increase luck on Theorem Stars 1-4.","增加定理第 1–4 颗星的出现概率。"],
        ["Increase passive IP generation.","增加自动无限点数产量。"],
        ["Increase passive Supernova generation.","增加自动超新星产量。"],
        ["Strengthen Exotic Atom rewards.","增强奇异原子奖励。"],
        ["Raise corrupted shards gain.","指数加成腐化碎片获取。"],
        ["Weaken Primordium Theorem scalings.","弱化原基定理折算。"],
        ["Double corrupted star's speed. ({0})","腐化星辰速度翻倍。（{0}）"],
        ["Cost: {1} Corrupted Stars","花费：{1} 腐化星辰"],
        ["Cost: {1} Infinity Points","花费：{1} 无限点数"],
        ["Corrupted Star's Growth is rooted by","腐化星辰增长开以下次方根："],
        ["Are you sure you want to go infinity without selecting any theorem?","确定要不选择任何定理直接前往无限吗？"],
        ["Require-Free Tree","无需求升级树"],
        ["Upgrades in pre-corrupted tree can be bought without their requirement.","购买腐化之前的升级树节点时，无需满足额外需求。"],
        ["Infinity Mass","无限质量"],
        ["Normal mass & BH mass gains are boosted by total infinity points.","总无限点数加成普通质量与黑洞质量获取。"],
        ["to normal mass","的普通质量加成"],
        ["to BH mass","的黑洞质量加成"],
        ["Legacy Mass Upgrade 4","传承质量升级 4"],
        ["Start with overpower unlocked, its starting cost is massively decreased (likewise, start with Binilbium-202 unlocked).","开局即解锁超强化器，大幅降低其初始花费（同时解锁元素 202）。"],
        ["Dark Rest","黑暗休憩"],
        ["Keep glyph upgrades on infinity (likewise, start with Unhexunium-161 unlocked).","无限重置时保留雕文升级（同时解锁元素 161）。"],
        ["Tree Automation","升级树自动化"],
        ["Automate pre-corrupted tree.","自动购买腐化之前的升级树。"],
        ["Self-Infinity","自我无限"],
        ["Infinity theorem boosts infinity points gain.","无限定理加成无限点数获取。"],
        ["Stop Big Rip Switching","告别大撕裂切换"],
        ["Pre-218 big rip elements are now affordable outside Big Rip. Automate elements tier 2 (119th-218th).","允许在大撕裂外购买编号小于 218 的大撕裂元素。自动购买第二阶元素（119–218）。"],
        ["Dark Passive","黑暗自动获取"],
        ["Start with more dark rays (like dark ray’s first reward unlocked).","开局获得更多暗射线（足以解锁暗射线的第一个奖励）。"],
        ["Corrupted Construction","腐化构建"],
        ["Start with rows of upgrades bought in corrupted tree (based on infinity theorems, starting at 2, ending at 5).","开局拥有部分腐化树升级（基于无限定理，从 2 行至 5 行）。"],
        ["Row 1-","第 1–"],
        ["of upgrades","行升级"],
        ["Unlock new generator in Main tab. Also, passively generate Dimensional Mass that increases meta-score of equipped theorems.","在主要标签页解锁新的生成器，并自动生成维度质量，提高核心内定理的元评分。"],
        ["Final Star Automation","最终星辰自动化"],
        ["Automate final star shard, and it doesn’t reset anything. Also, start with beyond-ranks automation.","自动获得最终星辰碎片，且不再重置任何资源。开局解锁超越级别自动化。"],
        ["Lethal Universe","致命宇宙"],
        ["Keep big rip upgrades and breaking dilation on infinity.","无限重置时保留大撕裂升级与撕裂膨胀。"],
        ["Dark Challenge Automation","黑暗挑战自动化"],
        ["Automate challenges 13-15.","自动完成挑战 13–15。"],
        ["Exotic Speed","奇异速度"],
        ["Infinity Theorems boost kaon and pion gains.","无限定理加成 K 介子与 π 介子获取。"],
        ["Muonic Automation","缪子自动化"],
        ["Automate muonic elements and {0}.","自动购买缪子元素并自动进行{0}。"],
        ["exotic nebulae","奇异星云"],
        ["muon-catalyzed fusion","缪子催化聚变"],
        ["Corrupted Peak","腐化巅峰"],
        ["Start with C16 unlocked. Keep corruption upgrades and best BH in C16 on infinity. Unlock more corruption upgrades.","开局解锁挑战 16。无限重置时保留腐化升级与挑战 16 的最高黑洞质量。解锁更多腐化升级。"],
        ["Break Infinity","打破无限"],
        ["Remove the mass limit (can lift limitlessly). Unlock Element Tier 3 and new Muonic Elements.","移除质量上限，允许无限增长。解锁第三阶元素与新的缪子元素。"],
        ["Extraordinary Matters","非凡物质"],
        ["Every matter upgrade (except red matter) now provides an additional boost to previous matter.","除红色物质外，各物质升级提供对前一种物质的额外加成。"],
        ["'Permanent' Upgrades","永久升级"],
        ["Keep main upgrades on Infinity reset.","无限重置时保留主要升级。"],
        ["Blackest Challenges","至暗挑战"],
        ["Remove the cap of Challenge 13-15 completions.","移除挑战 13–15 的完成次数上限。"],
        ["Better Infinity","更好的无限"],
        ["Improve Infinity Points formula.","改善无限点数公式。"],
        ["You have reached the limit of lifting where only gods withstand... You need to condense all your progress to evolve!","你已达到只有神明才能承受的质量极限……凝聚所有进度以进化吧！"],
        ["Conflictingly, corruption spreads to Infinity. It's up to you to proceed.","然而，腐化也蔓延到了无限。接下来由你决定。"],
        ["You've gone Infinity!","你已前往无限！"],
        ["{0} {1} Fragments | {2}","{0} {1} 碎片 | {2}"],
        ["Place any theorem in core to show effects!","将定理放入核心以查看效果！"],
        ["Require {1} Infinity Theorem","需要 {1} 个无限定理"],
        ["Apples boost all zodiac resources.","苹果加成所有星座资源。"],
        ["Aries boosts Meditation.","白羊座加成冥想。"],
        ["+2 Zodiac Cap.","星座等级上限增加 2。"],
        ["Constellation Tier {0}","星座阶层 {0}"],
        ["Require to evolve: {1}","进化需求：{1}"],
        ["Level {0} / {1}","等级 {0} / {1}"],
        ["Rage ➜ Calm","狂怒 ➜ 平静"],
        ["Break the madness of Infinity. Reincarnate as a serpent.","打破无限的疯狂，转生为蛇。"],
        ["Dark Matter ➜ Fabric","暗物质 ➜ 时空纤维"],
        ["Evaporate what causes destruction. Black Hole.","蒸发造成毁灭的黑洞。"],
        ["Atoms ➜ Protostars","原子 ➜ 原初恒星"],
        ["The first glimpses of shattering, all starts small.","破碎的第一缕曙光，一切始于微小。"],
        ["Supernova ➜ Constellation","超新星 ➜ 星座"],
        ["No longer exploding, now start exploring.","不再爆发，开始探索。"],
        ["Meditate with all Calm Power.","使用全部宁静能量进行冥想。"],
        ["Level: {0}","等级：{0}"],
        ["{2} to Muscler's power.","锻体器倍率增加 {2}。"],
        ["{0} to Booster's power","助推器倍率增加 {0}"],
        ["{0} to Stronger's power","强化器倍率增加 {0}"],
        ["{0} to Stronger softcaps' weakness","强化器软上限弱化 {0}"],
        ["{0} to normal mass softcaps' weakness","普通质量软上限弱化 {0}"],
        ["Length:","长度："],
        ["| Moves without Feeding:","| 未进食移动次数："],
        ["| Powerup:","| 强化道具："],
        ["{0} to normal mass","{0} 的普通质量加成"],
        ["{0} to Calm Powers","{0} 的宁静能量加成"],
        ["{0} to Meditation levels","{0} 的冥想等级加成"],
        ["{0} to Fabrics","{0} 的时空纤维加成"],
        ["{0} to Wormhole's lossless-ness","{0} 的虫洞无损程度加成"],
        ["{0} to Protostars","{0} 的原初恒星加成"],
        ["{0} to Nebulae diminishing returns","{0} 的星云边际收益加成"],
        ["{0} to Dark Rays","{0} 的暗射线加成"],
        ["{0} to Mass Glyphs","{0} 的质量雕文加成"],
        ["Stronger power boosts BHC power (","强化器倍率加成黑洞压缩器倍率（"],
        ["Meditation weakens quark overflows (","冥想弱化夸克溢出（"],
        ["Meditation boosts supernova generation (","冥想加成超新星生成（"],
        ["First Wormhole raises Quarks (","第一个虫洞对夸克提供指数加成（"],
        ["Challenge 9 completions scale C5-8 slower (","挑战 9 的完成次数延缓挑战 5–8 的折算（"],
        ["Frequency weakens Super - Ultra Rank (","频率弱化级别的超级至超究折算（"],
        ["Galactic prestige boosts supernova generation (","星系转生加成超新星生成（"],
        ["{0} boosts apple feeded (","{0} 增加喂食苹果（"],
        ["strawberries that can be spent for muonic elements. (+{1}/feed)","个草莓，可用于购买缪子元素。（每次喂食 +{1}）"],
        ["energy. You need 200 energy before you can boom.","点能量。需要 200 点能量才能引爆。"],
        ["green and blue","绿色与蓝色"],
        ["Stronger Power","强化器倍率"],
        ["red and blue","红色与蓝色"],
        ["Calm Power","宁静能量"],
        ["red and green","红色与绿色"],
        ["Exotic I","奇异 I"],
        ["corrupted shards and exotic atoms","腐化碎片与奇异原子"],
        ["nebular dust","星云尘埃"],
        ["diminishing returns, +","边际收益，+"],
        ["Exotic Atom's generation","奇异原子生成"],
        ["cyan and magenta","青色与品红色"],
        ["Star Generators","星辰生成器"],
        ["yellow and magenta","黄色与品红色"],
        ["yellow and cyan","黄色与青色"],
        ["Pre-Darkness Scalings","黑暗之前的折算"],
        ["Exotic II","奇异 II"],
        ["anti-wormhole and FSS","反虫洞与最终星辰碎片"],
        ["Next: {0} {1}","下一级：{0} {1}"],
        ["Reduced on {2}","于 {2} 开始削减"],
        ["#{0} - Click to {1}","#{0} — 点击以{1}"],
        ["toggle automation","切换自动化"],
        ["merge with #","合并至 #"],
        ["Boost meditation levels by","使冥想等级乘以"],
        ["Boost {0}'s power by","使 {0} 倍率乘以"],
        ["Gain more Calm Power.","获得更多宁静能量。"],
        ["Reduce Meditation's softcap weakness","降低冥想软上限的削弱程度"],
        ["Raise Fabric.","指数加成时空纤维。"],
        ["Raise meditation levels.","指数加成冥想等级。"],
        ["Raise Wormhole formula.","提高虫洞公式指数。"],
        ["^{0} to exponent","指数增加 {0}"]
    ]) add(source + " => " + target);
    for (const [source,target] of [
        ["unlock mass upgrade 1.","解锁质量升级 1。"],
        ["unlock mass upgrade 2, reduce mass upgrade 1 scaling by 20%.","解锁质量升级 2，并弱化质量升级 1 的折算 20%。"],
        ["unlock mass upgrade 3, reduce mass upgrade 2 scaling by 20%, and mass upgrade 1 boosts itself.","解锁质量升级 3，弱化质量升级 2 的折算 20%，并使质量升级 1 加成自身。"],
        ["reduce mass upgrade 3 scaling by 20%. Ranks boost mass by (x/3)^2.","质量升级 3 的折算弱化 20%。级别以 (x/3)^2 加成质量。"],
        ["mass upgrade 2 boosts itself.","质量升级 2 加成自身。"],
        ["triple mass gain.","质量获取乘以 3。"],
        ["Rank 4 reward effect is better. [^2 -> ^x^1/3]","增强级别 4 的奖励。[^2 → ^x^(1/3)]"],
        ["mass upgrade 3 softcaps 1.2x later.","质量升级 3 的软上限延迟 1.2 倍出现。"],
        ["adds tickspeed power based on ranks.","基于级别，增加时间速度倍率。"],
        ["rank boosts Rage Powers gain.","级别加成狂怒能量获取。"],
        ["rank 40 reward is stronger.","增强级别 40 的奖励。"],
        ["mass gain is raised by 1.025.","质量获取变为原来的 1.025 次方。"],
        ["rank 40 reward is overpowered.","级别 40 的奖励大幅增强。"],
        ["rank multiplies quark gain.","级别乘算夸克获取。"],
        ["rank multiplies mass gain.","级别乘算质量获取。"],
        ["make mass gain softcap 0.25% weaker based on rank, hardcaps at 25%.","每个级别使质量获取软上限弱化 0.25%，上限为 25%。"],
        ["reduce rank requirements by 20%. Ranks can be automated.","级别需求降低 20%，并可自动提升级别。"],
        ["boost mass by x2, ^1.15","质量获取先乘以 2，再变为原来的 1.15 次方"],
        ["reduce all mass upgrade scalings by 20%.","所有质量升级的折算弱化 20%。"],
        ["adds +5% tickspeed power for every tier you have, softcaps at +40%.","每个阶层增加 5% 时间速度倍率，增加至 40% 时达到软上限。"],
        ["boost rage powers based on tiers.","阶层加成狂怒能量。"],
        ["Tier 6's reward is boosted based on dark matters.","暗物质增强阶层 6 的奖励。"],
        ["Tier 4's reward is twice as effective and the softcap is removed.","阶层 4 的奖励翻倍，并移除软上限。"],
        ["stronger effect's softcap is 10% weaker.","强化器效果的软上限弱化 10%。"],
        ["make rank 380's effect stronger based on tier.","阶层增强级别 380 的效果。"],
        ["Super Tetr scales 5 later.","四重阶层的超级折算延迟 5 级出现。"],
        ["reduce tier requirements by 25%, and hyper rank scaling is 15% weaker.","阶层需求降低 25%，级别的究极折算弱化 15%。"],
        ["mass upgrade 3 boosts itself.","质量升级 3 加成自身。"],
        ["raise tickspeed effect by 1.05.","时间速度效果变为原来的 1.05 次方。"],
        ["Super rank scaling is weaker based on tier, and super tier scales 20% weaker.","阶层弱化级别的超级折算，阶层的超级折算弱化 20%。"],
        ["Hyper/Ultra Tickspeed starts later based on tetr.","四重阶层延迟时间速度的究极与超究折算。"],
        ["Mass gain softcap^2 starts ^1.5 later.","质量获取的二重软上限延迟 1.5 次方出现。"],
        ["reduce tetr requirements by 15%, and Meta-Rank starts 1.1x later.","四重阶层需求降低 15%，级别的元折算延迟 1.1 倍出现。"],
        ["tetr boosts all radiations gain.","四重阶层加成所有辐射波获取。"],
        ["Meta-Tickspeeds start later based on Supernovas.","超新星延迟时间速度的元折算。"],
        ["Meta-Ranks start later based on Pent.","五重阶层延迟级别的元折算。"],
        ["Mass gain softcap^4 starts later based on Pent.","五重阶层延迟质量获取的四重软上限。"],
        ["remove 3rd softcap of Stronger's effect.","移除强化器效果的三重软上限。"],
        ["reduce pent reqirements by 20%.","五重阶层需求降低 20%。"],
        ["increase dark ray gain by +20% per hex.","每个六重阶层使暗射线获取增加 20%。"],
        ["remove first softcap of normal mass gain.","移除普通质量获取的一重软上限。"],
        ["remove second softcap of normal mass gain.","移除普通质量获取的二重软上限。"],
        ["remove third softcap of normal mass gain.","移除普通质量获取的三重软上限。"],
        ["remove fourth softcap of normal mass gain.","移除普通质量获取的四重软上限。"],
        ["remove fifth softcap of normal mass gain.","移除普通质量获取的五重软上限。"],
        ["hex 4's effect is overpowered.","六重阶层 4 的效果大幅增强。"],
        ["remove sixth softcap of normal mass gain.","移除普通质量获取的六重软上限。"],
        ["remove seventh softcap of normal mass gain.","移除普通质量获取的七重软上限。"],
        ["+0.15 to matter exponents.","物质指数增加 0.15。"],
        ["remove eighth softcap of normal mass gain.","移除普通质量获取的八重软上限。"],
        ["x later","倍的延迟"],
        ["All Mass softcaps up to ^5 start ^10 later.","五重及之前的所有质量软上限延迟 10 次方出现。"],
        ["Quantum Shard Base is increased by 0.5.","量子碎片的底数增加 0.5。"],
        ["Quadruple Quantum Foam and Death Shard gain.","量子泡沫与死寂碎片获取乘以 4。"],
        ["Pre-Quantum Global Speed is raised by ^2 (before division).","量子之前全局速度变为原来的平方（在除法削弱之前生效）。"],
        ["Tickspeed Power softcap starts ^100 later.","时间速度倍率的软上限延迟 100 次方出现。"],
        ["Mass softcap^5 starts later based on Prestige.","转生等级延迟质量的五重软上限。"],
        ["Gain more Relativistic Energy based on Prestige.","转生等级加成相对论能量获取。"],
        ["Stronger Effect's softcap^2 is 7.04% weaker.","强化器效果的二重软上限弱化 7.04%。"],
        ["Tetr 2's reward is overpowered.","四重阶层 2 的奖励大幅增强。"],
        ["Rank’s effect on Prestige Base is doubled.","计算转生基础值时，级别的效果翻倍。"],
        ["Super Cosmic Strings scale 20% weaker.","宇宙弦的超级折算弱化 20%。"],
        ["Remove all softcaps from Gluon Upgrade 4's effect.","移除胶子升级 4 效果的所有软上限。"],
        ["Prestige Base’s exponent is increased based on Prestige Level.","转生等级增加转生基础值的指数。"],
        ["Chromium-24 is slightly stronger.","铬（24Cr）的效果略微增强。"],
        ["Lawrencium-103 is slightly stronger.","铹（103Lr）的效果略微增强。"],
        ["Ununennium-119 is slightly stronger.","元素 119 的效果略微增强。"],
        ["Zirconium-40 is slightly stronger.","锆（40Zr）的效果略微增强。"],
        ["Unquadpentium-145 is slightly stronger.","元素 145 的效果略微增强。"],
        ["Red Matter boosts Dark Ray.","红色物质加成暗射线。"],
        ["Matter exponent is increased by prestige level. Collapsed star's effect is overpowered.","转生等级增加物质指数。坍缩星辰效果大幅增强。"],
        ["Hybridized Uran-Astatine also applies to pre-Meta pre-Glory at a reduced rate.","铀砹混合物以削弱的效果影响辉煌之前、元折算之前的需求。"],
        ["Exotic supernova starts x1.25 later.","超新星的奇异折算延迟 1.25 倍出现。"],
        ["Chromas gain is increased by prestige base.","转生基础值增加色度获取。"],
        ["Hyper Hex starts x1.33 later.","六重阶层的究极折算延迟 1.33 倍出现。"],
        ["Lithium-3 now provides an exponential boost. Meta-Cosmic Ray scaling starts ^8 later.","锂（3Li）改为提供指数加成。宇宙射线的元折算延迟 8 次方出现。"],
        ["Pre-Quantum Global Speed boosts matter exponent at a reduced rate. Prestige Level 382 is stronger.","量子之前全局速度以削弱的效果增加物质指数。转生等级 382 的奖励增强。"],
        ["All-star resources are squared.","所有星辰资源平方。"],
        ["Meta-Supernova starts 100 later.","超新星的元折算延迟 100 次出现。"],
        ["Bosonic resources are boosted based on Prestige Base.","转生基础值加成玻色子资源。"],
        ["Gain 5 free levels of each Primordium Particle.","各原基粒子获得 5 个免费等级。"],
        ["Pent 5's reward is stronger based on Prestige Base.","转生基础值增强五重阶层 5 的奖励。"],
        ["Quarks are boosted based on Honor.","荣耀加成夸克获取。"],
        ["Super & Hyper cosmic strings scale weaker based on Honor.","荣耀弱化宇宙弦的超级与究极折算。"],
        ["Raise dark shadow gain by 1.1.","黑暗之影获取变为原来的 1.1 次方。"],
        ["Hybridized Uran-Astatine applies to pre-Meta Pent requirements at a reduced rate.","铀砹混合物以削弱的效果影响元折算之前的五重阶层需求。"],
        ["Add 500 more C13-15 max completions.","挑战 13–15 的次数上限增加 500。"],
        ["All Fermions' scaling is 20% weaker.","所有费米子的折算弱化 20%。"],
        ["FSS base is raised to the 1.05th power.","最终星辰碎片的基础值变为原来的 1.05 次方。"],
        ["Remove all pre-Exotic scalings from Rank & Tier, but nullify C5's reward and Hybridized Uran-Astatine’s first effect for Rank & Tier.","移除级别与阶层在奇异之前的所有折算，但禁用挑战 5 的奖励及铀砹混合物第一个效果对级别与阶层的影响。"],
        ["Matters' production is tripled every FSS. FV Manipulator's cost is slightly weaker.","每个最终星辰碎片使物质产量乘以 3。略微弱化假真空操纵器的花费增长。"],
        ["Abyssal Blot's fourth reward is raised by FSS.","最终星辰碎片以指数加成深渊之渍的第四个奖励。"],
        ["Muon's production is increased by MCF tier.","缪子催化聚变阶层增加缪子产量。"],
        ["Softcaps of Meta-Quark and Meta-Lepton are slightly weaker.","元夸克与元轻子的软上限略微减弱。"],
        ["Each particle power's 1st effect is stronger.","各粒子能量的第一个效果增强。"],
        ["Raise Kaon & Pion gains to the 1.1th power.","K 介子与 π 介子获取变为原来的 1.1 次方。"],
        ["The requirement for prestige levels & honors are 15% lower.","转生等级与荣耀的需求降低 15%。"],
        ["Break dilation upgrade 12 is cheaper.","降低撕裂膨胀升级 12 的花费。"],
        ["Unlock new effect for Hybridized Uran-Astatine.","解锁铀砹混合物的新效果。"],
        ["Glory boosts glyphic mass.","辉煌加成雕文质量。"],
        ["Glory reduces Black Hole Overflow nerf.","辉煌减轻黑洞溢出的削弱惩罚。"],
        ["Glory boosts all matters gain.","辉煌加成所有物质获取。"],
        ["Uncap pre-darkness challenges' completion cap. C7's reward is changed.","移除黑暗之前挑战的完成次数上限，并改变挑战 7 的奖励。"],
        ["FV Manipulator Power is boosted by Honor.","荣耀加成假真空操纵器倍率。"],
        ["Pions boost Kaons gain at a reduced rate.","π 介子以削弱的效果加成 K 介子获取。"],
        ["[ct4]'s effect is better.","增强 [ct4] 的效果。"],
        ["Unstable BH affects mass of black hole overflow^2 starting.","不稳定黑洞延迟黑洞质量的二重溢出。"],
        ["Exotic Atom's reward strength is increased by +5% per beyond-ranks' maximum tier.","超越级别的最高阶层每增加 1，奇异原子奖励强度增加 5%。"],
        ["Oct 1's reward is raised by 4.","八重阶层 1 的奖励变为原来的 4 次方。"],
        ["The requirements for previous prestiges are 10% lower.","之前各转生层的需求降低 10%。"],
        ["Exotic Supernova starts x1.25 later every Renown.","每个名誉使超新星的奇异折算延迟 1.25 倍出现。"],
        ["Corrupted shard gain is increased by +50% per Renown.","每个名誉使腐化碎片获取增加 50%。"],
        ["Exotic Atoms boost their other resources.","奇异原子加成其相关资源。"],
        ["Prestige Level 388 also applies to Glory scaling.","转生等级 388 的奖励也影响辉煌折算。"],
        ["Super Renown is 25% weaker.","名誉的超级折算弱化 25%。"],
        ["Corrupted Star upgrade 1 and 2 costs are divided by 1e10.","腐化星辰升级 1 与 2 的花费除以 1e10。"],
        ["Oct 7's reward is overpowered.","八重阶层 7 的奖励大幅增强。"],
        ["Add 0.5 to matter exponents.","物质指数增加 0.5。"],
        ["All matter upgrades are stronger based on dark ray.","暗射线增强所有物质升级。"],
        ["Hybridized Uran-Astatine's second effect is stronger based on FSS.","最终星辰碎片增强铀砹混合物的第二个效果。"],
        ["Matters gain is boosted by Hept.","七重阶层加成物质获取。"],
        ["Automate Beyond-Ranks. Beyond-Ranks now affect prestige base.","自动提升超越级别。超越级别影响转生基础值。"],
        ["Beyond-Ranks will no longer reset anything. [Meta-Lepton]'s effect is multiplied by 8.","超越级别不再重置任何资源。元轻子的效果乘以 8。"],
        ["Accelerator's effect affects tickspeed, BHC & cosmic ray powers. Chromas gain is raised to the 1.1th power.","加速器效果影响时间速度、黑洞压缩器与宇宙射线倍率。色度获取变为原来的 1.1 次方。"],
        ["Gain more fermions based on Hept, except Meta-Fermions.","七重阶层增加费米子获取（元费米子除外）。"],
        ["Raise mass of black hole to the 1.2th power.","黑洞质量变为原来的 1.2 次方。"],
        ["Remove all scalings from mass upgrades 1-3.","移除质量升级 1–3 的所有折算。"],
        ["[qu9] is more effective based on mass of black hole. Exotic Supernova starts later based on Quantizes.","黑洞质量增强 [qu9] 的效果。量子次数延迟超新星的奇异折算。"],
        ["C1's reward is changed.","改变挑战 1 的奖励。"],
        ["Mass & Stronger Overflow is weaker based on archverse tier of normal mass.","普通质量的宇宙层阶数弱化质量与强化器溢出。"],
        ["Super FSS starts +1 later.","最终星辰碎片的超级折算延迟 1 次出现。"],
        ["Beyond Rank boosts Kaon & Pion gain.","超越级别加成 K 介子与 π 介子获取。"],
        ["Remove the softcap of dark ray's fourth reward.","移除暗射线第四个奖励的软上限。"],
        ["Super FSS scales +2.5% weaker per beyond-ranks' maximum tier (capped at 50%).","超越级别的最高阶层每增加 1，最终星辰碎片超级折算弱化 2.5%（上限 50%）。"],
        ["Argon-18 affects tickspeed's power.","氩（18Ar）影响时间速度倍率。"],
        ["Beta Particles affect supercritical supernova starting at a reduced rate.","β 粒子以削弱的效果延迟超新星超临界折算。"],
        ["Prestige base's exponent is increased by beyond-ranks' maximum tier, starting at Dec.","超越级别的最高阶层从十重开始增加转生基础值的指数。"],
        ["[Tau]'s reward is cubed.","陶子的奖励变为原来的立方。"],
        ["Super FSS starts +1 later per beyond-ranks' maximum tier, starting at Dec.","超越级别的最高阶层从十重开始，每阶使最终星辰碎片的超级折算延迟 1 次出现。"],
        ["Remove pre-meta scalings from Prestige Level.","移除转生等级在元之前的折算。"],
        ["'Self-Infinity' and 'Exotic Speed' upgrades use a formula with base 3 instead of base 2.","自我无限与奇异速度升级的公式底数从 2 改为 3。"],
        ["Bitriunium-231 is cubed.","元素 231 的效果变为原来的立方。"],
        ["Infinity Points gain is doubled every highest beyond-rank tier you reached.","每达到一个更高的超越级别阶层，无限点数获取翻倍。"],
        ["Remove all scalings from Honor & Glory.","移除荣耀与辉煌的所有折算。"],
        ["Neutronium-0 now affects C16's reward at an extremely reduced rate.","中子元素（0）以极低的效果影响挑战 16 奖励。"],
        ["The formula of Dec 2's effect is better. Meta-Prestige Level starts later based on beyond-ranks' maximum tier, starting at Icos.","改善十重阶层 2 的效果公式。超越级别的最高阶层从二十重开始延迟转生等级的元折算。"],
        ["Ascension Base's exponent is increased by beyond-ranks' maximum tier, starting at Icos.","超越级别的最高阶层从二十重开始增加飞升基础值的指数。"],
        ["The second softcap of Accelerator's Effect is slightly weaker.","加速器效果的二重软上限略微减弱。"],
        ["Super Infinity Theorem starts +5 later.","无限定理的超级折算延迟 5 次出现。"],
        ["effective; x","的有效加成；×"],
        ["Reset your Hexes (and force a darkness reset) but hept/oct/enne etc. up. {0}","重置六重阶层（并强制进行黑暗重置），但提升七重、八重、九重等阶层。{0}"],
        ["To {1} up, require {2} {3}.","提升{1}需要 {2} {3}。"],
        ["To {4} up, require {5} {6}.","提升{4}需要 {5} {6}。"],
        ["Because of Rank Collapse at","由于级别坍缩发生于"],
        [", Hept's requirement is raised by","，七重阶层需求变为原来的"],
        ["of Prestige Base","的转生基础值"],
        ["Reset Supernovas (force an Infinity reset), but Galactic Prestige up. Next Galactic Prestige reveals its treasure or happens nothing.","重置超新星（强制进行无限重置），但提升星系转生。下一次星系转生可能揭示新的奖励。"],
        ["{1} Galactic Stars (based on collapsed stars and galactic prestige),","{1} 个星系星辰（基于坍缩星辰与星系转生），"],
        ["which strengthens star generators by","使星辰生成器增强"],
        ["{1} of Prestige Mass (based on prestige base and galactic prestige),","{1} 的转生质量（基于转生基础值与星系转生），"],
        ["which {2} by","使{2}获得"],
        ["raises Quarks","指数加成夸克"],
        ["weakens mass overflow^1-2","弱化质量的一重与二重溢出"],
        ["on exponent","的指数效果"],
        ["{1} Galactic Matter (based on fading matter and galactic prestige),","{1} 的星系物质（基于衰减物质与星系转生），"],
        ["which increases to the base of all Matter upgrades by","使所有物质升级的底数增加"],
        ["{1} Redshift (based on frequency and galactic prestige),","{1} 的红移（基于频率与星系转生），"],
        ["which reduces Rank requirement by","使级别需求降低"],
        ["{1} Normal Energy (based on corrupted star and galactic prestige),","{1} 的普通能量（基于腐化星辰与星系转生），"],
        ["which weaken corrupted star reduction by","使腐化星辰的削减弱化"],
        ["{1} Dilatons (based on higgs bosons and galactic prestige),","{1} 的膨胀子（基于希格斯玻色子与星系转生），"],
        ["which increases Pre-Infinity Global Speed by","使无限之前全局速度增加"],
        ["Main","主要"],
        ["Quality of life","便利功能"],
        ["Challenge","挑战"],
        ["Post-Supernova","超新星之后"],
        ["Quantum","量子"],
        ["Start generating 1 Neutron Star per second.","每秒生成 1 个中子星。"],
        ["Tickspeed affects Neutron Star gain at a reduced rate.","时间速度以削弱的效果影响中子星获取。"],
        ["Meditation boosts Neutron Stars.","冥想加成中子星。"],
        ["Supernova boosts Neutron Star gain.","超新星加成中子星获取。"],
        ["Blue stars boost Neutron star gain at a reduced rate.","蓝色星辰以削弱的效果加成中子星获取。"],
        ["[sn2]'s effect base is increased by supernova.","超新星增加 [sn2] 效果的底数。"],
        ["Mass boosts Neutron Stars gain.","质量加成中子星获取。"],
        ["Neutron star boosts Mass gain.","中子星加成质量获取。"],
        ["Raise the Mass requirement for softcap^2 by 1.5","质量二重软上限的需求变为原来的 1.5 次方"],
        ["Mass gain softcap^2-3 starts later based on Supernovas.","超新星延迟质量获取的二重与三重软上限。"],
        ["Reach {0} without buying Tickspeed in a Supernova run. You can still obtain Tickspeed from Cosmic Rays.","在一次超新星流程中，不购买时间速度达到 {0}。仍可从宇宙射线中获得时间速度。"],
        ["Tickspeed Power is raised to the 1.15th.","时间速度倍率变为原来的 1.15 次方。"],
        ["Neutron Stars boost Rage Powers gain.","中子星加成狂怒能量获取。"],
        ["Neutron Stars boost calm powers gain.","中子星加成宁静能量获取。"],
        ["Neutron Star boosts Dark Matters gain.","中子星加成暗物质获取。"],
        ["Neutron Stars raise Wormholes.","中子星对虫洞提供指数加成。"],
        ["Reach {0} uni of black hole without buying any BH Condenser in a Supernova run.","在一次超新星流程中，不购买任何黑洞压缩器达到 {0} uni 黑洞质量。"],
        ["BH Condenser power is raised to the 1.15th.","黑洞压缩器倍率变为原来的 1.15 次方。"],
        ["Neutron Star boosts last star gain.","中子星加成最后一种星辰获取。"],
        ["Tetr amount to Star boost’s softcap is 50% weaker.","四重阶层对星辰加成软上限的影响弱化 50%。"],
        ["Star generators are stronger based on Supernova.","超新星增强星辰生成器。"],
        ["Unlock Star Booster.","解锁星辰助推器。"],
        ["Start with Silicon-14 & Argon-18 unlocked. You can now automatically buy Elements & Atom upgrades.","开局即解锁硅（14Si）与氩（18Ar）。自动购买元素与原子升级。"],
        ["Start with Chromium-24 and Atom upgrade 6 unlocked.","开局即解锁铬（24Cr）与原子升级 6。"],
        ["Start with technetium-43 unlocked, and it's improved. You can automatically gain Relativistic particles from mass.","开局即解锁锝（43Tc），并增强其效果。允许从质量中自动获取相对论粒子。"],
        ["You can now automatically buy Star unlockers & boosters.","自动解锁星辰并购买星辰助推器。"],
        ["Tetr no longer resets anything.","四重阶层不再重置任何资源。"],
        ["While in any challenge, you can now automatically complete it before exiting.","在挑战中，可以在退出之前自动完成当前挑战。"],
        ["YOU CAN AFFORD BECAUSE OF EVOLUTION!","进化使你可以购买！"],
        ["You can now automatically buy Photon & Gluon upgrades, they no longer spent their amount.","自动购买光子与胶子升级，且不再消耗对应资源。"],
        ["You can now automatically Pent up, Pent no longer resets anything.","自动提升五重阶层，且不再重置任何资源。"],
        ["You can now automatically buy Radiation Boosters, they no longer spent Radiation.","自动购买辐射波加成，且不再消耗辐射波。"],
        ["Add 100 more C7 & C8 maximum completions.","挑战 7 与 8 的次数上限增加 100。"],
        ["Reach {0} uni without challenge 1-4 completions in a Supernova run.","在一次超新星流程中，未完成挑战 1–4 的情况下达到 {0} uni。"],
        ["Keep challenge 1-4 completions on reset.","重置时保留挑战 1–4 的完成次数。"],
        ["Reach {0} uni of black hole without challenge 5-8 completions in a Supernova run.","在一次超新星流程中，未完成挑战 5–8 的情况下达到 {0} uni 黑洞质量。"],
        ["Keep challenge 5-8 completions on reset.","重置时保留挑战 5–8 的完成次数。"],
        ["Unlock the 9th Challenge.","解锁挑战 9。"],
        ["Challenge 9’s effect is better.","增强挑战 9 的效果。"],
        ["Add 100 more C9 completions.","挑战 9 的次数上限增加 100。"],
        ["Unlock the 10th Challenge.","解锁挑战 10。"],
        ["Unlock the 11th Challenge.","解锁挑战 11。"],
        ["Unlock the 12th Challenge.","解锁挑战 12。"],
        ["Challenge 12’s effect is better.","增强挑战 12 的效果。"],
        ["Add 200 more C9-12 completions.","挑战 9–12 的次数上限增加 200。"],
        ["BH Condensers power boost Cosmic Rays power.","黑洞压缩器倍率加成宇宙射线倍率。"],
        ["Cosmic Rays Power is raised to 1.25th power.","宇宙射线倍率变为原来的 1.25 次方。"],
        ["Tickspeed affects Higgs Boson gain at a reduced rate.","时间速度以削弱的效果影响希格斯玻色子获取。"],
        ["Photon, Gluon boosts each other's gain.","光子与胶子相互加成获取。"],
        ["x to Photon,","倍的光子加成，"],
        ["x to Gluon","倍的胶子加成"],
        ["Neutrons gain is affected by Graviton's effect at a reduced rate.","引力子效果以削弱的倍率影响中子获取。"],
        ["Raise Z Bosons gain to the 1.5th power.","Z 玻色子获取变为原来的 1.5 次方。"],
        ["Z Bosons also affect BHC + CR powers.","Z 玻色子也影响黑洞压缩器与宇宙射线倍率。"],
        ["Tickspeed affects Fermions gain at a reduced rate.","时间速度以削弱的效果影响费米子获取。"],
        ["Meditation affects Fermions gain at a reduced rate.","冥想以削弱的效果影响费米子获取。"],
        ["YOU CAN AFFORD BECAUSE OF A EVOLUTION!","进化使你可以购买！"],
        ["Reach {0} while dilating mass in [Down]","在下夸克与质量膨胀中达到 {0}"],
        ["Unlock 2 more types of U-Quark & U-Fermion.","解锁两种新的 U-夸克与 U-费米子。"],
        ["Reach {0} of any Fermions","任意一种费米子达到 {0}"],
        ["Super fermion scaling is 7.5% weaker.","费米子的超级折算弱化 7.5%。"],
        ["2nd Photon & Gluon upgrades are slightly stronger.","光子与胶子升级 2 略微增强。"],
        ["Reach {0} quarks while in [Electron]","在电子中达到 {0} 夸克"],
        ["[Electron] max tier is increased by 35. Its effect softcap is weaker.","电子的阶层上限增加 35，并弱化其效果软上限。"],
        ["Reach {0} while in [Charm] & Challenge 5.","在粲夸克与挑战 5 中达到 {0}。"],
        ["Unlock 2 final types of U-Quark & U-Fermion.","解锁最后两种 U-夸克与 U-费米子。"],
        ["[Strange] & [Neutrino] max tier is increased by 2.","奇夸克与中微子的阶层上限增加 2。"],
        ["Reach {0} atoms while in [Electron] and 9th Challenge.","在电子与挑战 9 中达到 {0} 原子。"],
        ["Uncap [Electron] tier, its effect is overpowered.","移除电子的阶层上限，并大幅增强其效果。"],
        ["[Strange], [Top], [Bottom], [Neutrino], [Neut-Muon] max tiers are increased by 5.","奇夸克、顶夸克、底夸克、中微子与缪中微子的阶层上限增加 5。"],
        ["Pre-meta fermion scalings are 10% weaker.","费米子在元之前的折算弱化 10%。"],
        ["Generating Relativistic particles outside Mass dilation is 25% stronger.","在质量膨胀外生成相对论粒子的效果增强 25%。"],
        ["Gain more frequency based on Supernova, it will also multiply Radiations that is not the last available types.","超新星增加频率获取，并乘算除最后一种已解锁类型外的辐射波获取。"],
        ["Gain 10x more all radiation types.","所有辐射波获取乘以 10。"],
        ["Radiation Boosts are 1.1x cheaper.","辐射波加成的花费降低至原来的 1/1.1。"],
        ["All Meta-Boosts are twice as effective.","所有元加成的效果翻倍。"],
        ["All Radiation gains are increased by 10% for every Supernova you have become.","每次超新星使所有辐射波获取增加 10%。"],
        ["Bonus radiation boosts are stronger based on radiation type.","基于辐射波类型，增强额外辐射波加成。"],
        ["Gain more Quantum Foams based on Supernovas.","超新星增加量子泡沫获取。"],
        ["Quantum Foams are boosted by Neutron Stars.","中子星加成量子泡沫获取。"],
        ["Quantum Foams are boosted by Blueprint Particles.","蓝图粒子加成量子泡沫获取。"],
        ["Quantum Shard's base is increased by 0.5.","量子碎片的底数增加 0.5。"],
        ["Good luck with the new era!","祝你在新时代好运！"],
        ["Fermion requirements are decreased by 20%.","费米子的需求降低 20%。"],
        ["W+ Boson's 1st effect is overpowered.","W⁺ 玻色子的第一个效果大幅增强。"],
        ["BH formula's softcap is 30% weaker.","黑洞公式的软上限弱化 30%。"],
        ["Remove softcaps from [sn2]'s effect.","移除 [sn2] 效果的软上限。"],
        ["Blueprint Particles & Chromas are affected by Tickspeed Effect at a reduced rate.","时间速度效果以削弱的倍率影响蓝图粒子与色度。"],
        ["Quantizes boost Cosmic string's power.","量子次数加成宇宙弦倍率。"],
        ["Gain more Quantizes based on Quantum Shards.","量子碎片增加量子次数获取。"],
        ["Chromas are affected by Quantum Shard’s effect.","量子碎片的效果影响色度。"],
        ["Gain more Quantizes based on total Primordium Particles.","总原基粒子增加量子次数获取。"],
        ["Higgs Boson's effect is increased by 3.3% for every OoM of Blueprint Particles.","蓝图粒子每增加一个数量级，希格斯玻色子的效果增加 3.3%。"],
        ["Quantum Foams gain formula is better.","改善量子泡沫获取公式。"],
        ["Quantized 4 times.","前往量子 4 次。"],
        ["You now automatically purchase supernova tree upgrades as long as they don't cost quantum foam.","自动购买不消耗量子泡沫的超新星树升级。"],
        ["Become 81 Supernovas without getting tiers from U-Quark in Quantum run.","在一次量子流程中，不获得任何 U-夸克阶层而达到 81 次超新星。"],
        ["Keep U-Quark Tiers on going Quantum.","前往量子时保留 U-夸克阶层。"],
        ["Reach {0} of mass without completing Challenges 1-4 in Quantum run.","在一次量子流程中，未完成挑战 1–4 的情况下达到 {0} 质量。"],
        ["You can now automatically complete Challenges 1-4.","自动完成挑战 1–4。"],
        ["You can now automatically become a supernova, it no longer resets anything.","自动成为超新星，且不再重置任何资源。"],
        ["Reach {0} of mass without completing Challenges 5, 6 & 8 in Quantum run.","在一次量子流程中，未完成挑战 5、6 与 8 的情况下达到 {0} 质量。"],
        ["You can now automatically complete Challenges 5-8.","自动完成挑战 5–8。"],
        ["Become 42 Supernovas without getting tiers from U-Lepton in Quantum run.","在一次量子流程中，不获得任何 U-轻子阶层而达到 42 次超新星。"],
        ["Keep U-Lepton Tiers on going Quantum.","前往量子时保留 U-轻子阶层。"],
        ["Reach {0} of mass without completing Challenges 9-12 in Quantum run, while in [Bottom].","在一次量子流程中，处于底夸克且未完成挑战 9–12 的情况下达到 {0} 质量。"],
        ["Keep challenge 9-12 completions on going Quantum.","前往量子时保留挑战 9–12 的完成次数。"],
        ["Get 15 Quantum Shards.","获得 15 个量子碎片。"],
        ["You can now automatically get all Fermions Tiers outside any Fermion, except during Quantum Challenge.","未激活任何费米子时自动获得所有费米子阶层，但在量子挑战中无效。"],
        ["[qu_qol8] now works in Quantum Challenge or Big Rip.","[qu_qol8] 在量子挑战或大撕裂中也生效。"],
        ["Get 24 Quantum Shards.","获得 24 个量子碎片。"],
        ["Start with Polonium–84 unlocked when entering in Quantum Challenge.","进入量子挑战时已解锁钋（84Po）。"],
        ["Primordium Theorem’s base requirement is reduced by 1.","原基定理的基础需求减少 1。"],
        ["Theta Particle’s second effect is now added.","θ 粒子增加第二个效果。"],
        ["Epsilon Particle’s second effect is now added, stronger if you are in Quantum Challenge.","ε 粒子增加第二个效果，并在量子挑战中更强。"],
        ["Mass gain softcap^4 starts later based on Quantum Shards.","量子碎片延迟质量获取的四重软上限。"],
        ["Reach {0} of mass with QS 70 build (before bonus from [qc2]).","使用 70 量子碎片配置达到 {0} 质量（不计 [qc2] 的额外碎片）。"],
        ["Get 1 extra shard when a nerf reaches 10.","任意削弱配置达到 10 时，额外获得一个量子碎片。"],
        ["Get 88 Quantum Shards.","获得 88 个量子碎片。"],
        ["Quantum Shard's base is increased by Prestige Base.","转生基础值增加量子碎片的底数。"],
        ["Evaporating frequency & mass of black hole is twice as effective, and its effects are stronger.","蒸发频率与黑洞质量的效率翻倍，并增强其效果。"],
        ["Reach {0} of mass with 76 QS build (before bonus from [qc2]).","使用 76 量子碎片配置达到 {0} 质量（不计 [qc2] 的额外碎片）。"],
        ["Quantum Shards boost Death Shard gain.","量子碎片加成死寂碎片获取。"],
        ["Unlock Radiation.","解锁辐射波。"],
        ["Quantize 20 times.","前往量子 20 次。"],
        ["Unlock Primordium.","解锁原基。"],
        ["Quantize 200 times.","前往量子 200 次。"],
        ["Unlock Quantum Challenge.","解锁量子挑战。"],
        ["66 Quantum Shards.","获得 66 个量子碎片。"],
        ["Unlock Big Rip.","解锁大撕裂。"],
        ["You can't gain Delta, Alpha, Omega & Sigma Particles from Primordium Theorem now. Instead, their amount is set to your total primordium theorems.","原基定理不再随机提供 δ、α、ω 与 σ 粒子，它们的数量改为等于总原基定理数量。"],
        ["You can't gain Phi & Epsilon Particles from Primordium Theorem now. Instead, their amount is set to your total primordium theorems.","原基定理不再随机提供 φ 与 ε 粒子，它们的数量改为等于总原基定理数量。"],
        ["You can't gain Theta & Beta Particles from Primordium Theorem now. Instead, their amount is set to your total primordium theorems.","原基定理不再随机提供 θ 与 β 粒子，它们的数量改为等于总原基定理数量。"],
        ["Unlock 2 meta-types of U-Quark & U-Fermion.","解锁两种元 U-夸克与元 U-费米子。"],
        ["Best mass of black hole in C16 boosts normal mass gain.","挑战 16 的最高黑洞质量加成普通质量获取。"],
        ["Best mass of black hole in C16 boosts bosonic resources gain.","挑战 16 的最高黑洞质量加成玻色子资源获取。"],
        ["Best mass of black hole in C16 adds free fermion tiers.","挑战 16 的最高黑洞质量提供免费费米子阶层。"],
        ["Reach {0} of black hole during C16 & [Meta-Quark].","在挑战 16 与元夸克中达到 {0} 黑洞质量。"],
        ["Best mass of black hole in C16 adds to the base of all matter's upgrade.","挑战 16 的最高黑洞质量增加所有物质升级的底数。"],
        ["Reach {0} dark matters during C16.","在挑战 16 内达到 {0} 暗物质。"],
        ["Neutronium-0 now affects Challenge 13 at a reduced rate.","中子元素（0）以削弱的效果影响挑战 13。"],
        ["Mass overflow starts later based on best mass of black hole in C16.","挑战 16 的最高黑洞质量延迟质量溢出。"],
        ["Reach {0} atomic powers during C16.","在挑战 16 内达到 {0} 原子能量。"],
        ["Neutronium-0 now affects Challenge 14 at a reduced rate. (like [ct5])","中子元素（0）以削弱的效果影响挑战 14（类似 [ct5]）。"],
        ["Get {0} C14 completions.","完成挑战 14 共 {0} 次。"],
        ["Keep pre-C16 tree on entering C16. Best mass of black hole in C16 boosts all radiation gains.","进入挑战 16 时保留其之前的升级树。挑战 16 的最高黑洞质量加成所有辐射波获取。"],
        ["Best mass of black hole in C16 adds free radiation boosts.","挑战 16 的最高黑洞质量提供免费辐射波加成。"],
        ["Reach {0} of black hole during C16 & [Meta-Lepton] without buying BH Condensers.","在挑战 16 与元轻子中，不购买黑洞压缩器而达到 {0} 黑洞质量。"],
        ["FSS Requirement is lower based on total corrupted shards.","总腐化碎片降低最终星辰碎片的需求。"],
        ["Mass of black hole overflow starts later based on best mass of black hole in C16. (weaker during C16)","挑战 16 的最高黑洞质量延迟黑洞质量溢出（挑战 16 内效果削弱）。"],
        ["Best mass of black hole in C16 adds free primordium particles.","挑战 16 的最高黑洞质量提供免费原基粒子。"],
        ["Reach {0} of black hole during C16 & [Meta-Quark] without buying BH Condensers.","在挑战 16 与元夸克中，不购买黑洞压缩器而达到 {0} 黑洞质量。"],
        ["Neutronium-0 now affects Challenge 15 at a reduced rate, like [ct5].","中子元素（0）以削弱的效果影响挑战 15（类似 [ct5]）。"],
        ["Dilated mass overflow starts later based on best mass of black hole in C16.","挑战 16 的最高黑洞质量延迟膨胀质量溢出。"],
        ["Total corrupted shards boost matters gain.","总腐化碎片加成物质获取。"],
        ["Best mass of black hole in C16 boosts Kaon & Pion gain.","挑战 16 的最高黑洞质量加成 K 介子与 π 介子获取。"],
        ["Require-free thanks to evolving!","进化使你无需满足额外需求！"],
        ["Cost: {3} {4}","花费：{3} {4}"],
        ["(click to buy)","（点击购买）"],
        ["(requirement pinned at top)","（需求已固定在顶部）"],
        ["(click to pin requirement)","（点击将需求固定）"],
        ["Quantum foam","量子泡沫"],
        ["Neutron star","中子星"]
    ]) add(source + " => " + target);
    for (const [source,target] of [
        ["Muon-Catalyzed Fusion Tier","缪子催化聚变阶层"],
        ["g (gram): 1 g","g（克）：1 g"],
        ["kg (kilogram): 1,000 g","kg（千克）：1,000 g"],
        ["tonne (tonne): 1,000 kg = 1,000,000 g","tonne（吨）：1,000 kg = 1,000,000 g"],
        ["MME (mass of Mount Everest): 1.619e14 tonne = 1.619e20 g","MME（珠穆朗玛峰质量）：1.619e14 吨 = 1.619e20 g"],
        ["M⊕ (mass of Earth): 36,886,967 MME = 5.972e27 g","M⊕（地球质量）：36,886,967 MME = 5.972e27 g"],
        ["M☉ (mass of Sun): 333,054 M⊕ = 1.989e33 g","M☉（太阳质量）：333,054 M⊕ = 1.989e33 g"],
        ["MMWG (mass of Milky Way Galaxy): 1.5e12 M☉ = 2.9835e45 g","MMWG（银河系质量）：1.5e12 M☉ = 2.9835e45 g"],
        ["uni (mass of Universe): 50,276,520,864 MMWG = 1.5e56 g","uni（宇宙质量）：50,276,520,864 MMWG = 1.5e56 g"],
        ["mlt (mass of Multiverse): 1e1e9 uni (logarithmic)","mlt（多元宇宙质量）：1e1e9 uni（对数表示）"],
        ["mgv (mass of Megaverse): 1e15 mlt","mgv（百万宇宙层质量）：1e15 mlt"],
        ["giv (mass of Gigaverse): 1e15 mgv","giv（十亿宇宙层质量）：1e15 mgv"],
        ["arv^n (mass of n-th Archverse): 1e15 arv^n-1","arv^n（第 n 阶宇宙层质量）：1e15 arv^n-1"],
        ["Mixed Scientific","混合科学计数法"],
        ["Prestige Layer","转生层计数法"],
        ["Old Scientific","旧科学计数法"],
        ["Omega Short","简短 Ω 计数法"],
        ["Congratulations!","恭喜！"],
        ["You got 10 Supernovas!","你达到了 10 次超新星！"],
        ["And you can manualy supernova!","现在可以手动进行超新星重置！"],
        ["Bosons are unlocked in Supernova tab!","超新星标签页中已解锁玻色子！"],
        ["You have beated Challenge 10!","你完成了挑战 10！"],
        ["Fermions are unlocked in Supernova tab!","超新星标签页中已解锁费米子！"],
        ["You have reached {0} of mass after beating Challenge 12!","完成挑战 12 后，你达到了 {0} 质量！"],
        ["You need to go Quantum!","你需要前往量子！"],
        ["Mass has collapsed while going Quantum! It looks like evaporation! But at what cost?","前往量子时，质量坍缩了！像是蒸发……但代价是什么？"],
        ["Uhh Oh","糟糕"],
        ["Don’t worry, new mechanics will arrive for you!","别担心，还有新的机制等着你！"],
        ["You have reached {0} of mass!","你达到了 {0} 质量！"],
        ["Entropy is unlocked in Quantum tab!","量子标签页中已解锁熵！"],
        ["Chapter 1: The First Lift","第一章：初次举重"],
        ["Your potential of gaining weight starts here. How much mass can you gain?","增加质量的潜力从这里开始。你能获得多少质量？"],
        ["Chapter 2: Rage Power","第二章：狂怒能量"],
        ["With your energy, you felt outrageous and want to rush!","你的能量使你怒不可遏，想要向前冲刺！"],
        ["Chapter 3: The Black Hole","第三章：黑洞"],
        ["You lifted a singularity. It even formed a black hole!","你举起了一个奇点，它甚至形成了黑洞！"],
        ["Chapter 4: The Atom","第四章：原子"],
        ["You discovered a Atom! You decompose it to find a physical miracle: Gravity. This helps you to go further!","你发现了一个原子！将它分解后，你找到了物理奇迹：引力。它会帮你走得更远！"],
        ["Chapter 5: Supernova Born","第五章：超新星诞生"],
        ["Stars have collapsed. A dwarf age begins.","星辰坍缩了。矮星时代开始。"],
        ["Chapter 6: The Radiation","第六章：辐射波"],
        ["Neutron Stars have gone very radiant.","中子星变得光芒四射。"],
        ["Chapter 7: Scale to Quantum","第七章：深入量子尺度"],
        ["Mass has collapsed in quantum scale! Good luck on new features!","质量在量子尺度中坍缩了！祝你探索新内容好运！"],
        ["Chapter 8: Ripping Universe","第八章：撕裂宇宙"],
        ["All the spacetime rips before your eyes!","所有时空在你眼前撕裂！"],
        ["Chapter 9: Trapped in Darkness","第九章：困于黑暗"],
        ["You rose with darkness. Time to enrich for Matters.","你与黑暗一同崛起。是时候积累物质了。"],
        ["Chapter 10: The Corruption","第十章：腐化"],
        ["The deadly corruption stands against you.","致命的腐化阻挡着你。"],
        ["Chapter 11: The Infinity","第十一章：无限"],
        ["Infinity. You have been evolved to a god.","无限。你已进化为神。"],
        ["Chapter 12: Broken Infinity","第十二章：打破无限"],
        ["Your omnipotence ascends as you surpass Infinity.","跨越无限，你的全能进一步升华。"],
        ["Chapter 13: Uroboros","第十三章：衔尾蛇"],
        ["Outbursting Infinity by Reality III, you felt snakey.","通过现实 III 冲破无限，你感受到了蛇的召唤。"],
        ["Let's Go!","出发！"],
        ["Are you sure you want to Big Rip the Dimension?","确定要对维度进行大撕裂吗？"],
        ["Pyro-Radioactive Plasma","热放射等离子体"],
        ["Makes tickspeed power raised to the {0}th power.","使时间速度倍率变为原来的 {0} 次方。"],
        ["Makes all {0}re-Pent requirements reduced by {1}x","使所有{0}五重阶层之前的需求降低 {1} 倍"],
        ["Pre-Exotic p","奇异折算之前的"],
        ["Also, all pre-Exotic {0} scalings are {1} weaker.","此外，奇异之前的所有{0}折算弱化 {1}。"],
        ["Rank-Hex","级别至六重阶层"],
        ["pre-Hex","六重阶层之前的"],
        ["Makes rewards from Challenges 1-8 {0}x stronger.","使挑战 1–8 的奖励增强 {0} 倍。"],
        ["Entropic Multiplier","熵倍率"],
        ["Meta Tickspeed, BHC & Cosmic Ray start","时间速度、黑洞压缩器与宇宙射线的元折算延迟"],
        ["later.","出现。"],
        ["Entropic Accelerator","熵加速器"],
        ["Atomic Power’s effect is","原子能量的效果"],
        ["exponentially stronger.","获得指数增强。"],
        ["Entropic Evaporation","熵蒸发"],
        ["Make evaporated resources gain","使蒸发资源获取"],
        ["faster.","更快。"],
        ["Entropic Converter","熵转换器"],
        ["Tickspeed Power gives","时间速度倍率提供"],
        ["boost to BHC & Cosmic Ray Powers.","的黑洞压缩器与宇宙射线倍率加成。"],
        ["Entropic Booster","熵助推器"],
        ["extra Mass upgrades, Tickspeed, BHC and Cosmic Ray.","个额外质量升级、时间速度、黑洞压缩器与宇宙射线等级。"],
        ["Entropic Scaling","熵折算"],
        ["All pre-Supernova, pre-Pent & pre-Meta scalings are","超新星之前、五重阶层之前与元之前的所有折算"],
        ["weaker.","受到削弱。"],
        ["Entropic Condenser","熵压缩器"],
        ["Entropy boosts itself by","熵对自身提供"],
        ["Entropic Radiation","熵辐射"],
        ["Radiation effects are boosted by","辐射波效果获得"],
        ["based on Entropy.","的加成（基于熵）。"],
        ["Stop Evaporating to get","停止蒸发以获得"],
        ["best Enthalpy","最高焓"],
        ["Evaporate your frequency to gain Enthalpy","蒸发频率以获得焓"],
        ["best Hawking Radiation","最高霍金辐射"],
        ["Evaporate your mass of Black Hole to gain Hawking Radiation","蒸发黑洞质量以获得霍金辐射"],
        ["Next at:","下一级需求："],
        ["Delta [Δ]","δ [Δ]"],
        ["Alpha [Α]","α [Α]"],
        ["Omega [Ω]","ω [Ω]"],
        ["Sigma [Σ]","σ [Σ]"],
        ["Phi [Φ]","φ [Φ]"],
        ["Epsilon [Ε]","ε [Ε]"],
        ["Theta [Θ]","θ [Θ]"],
        ["Beta [Β]","β [Β]"],
        ["Boost Stronger Power by {0}x","强化器倍率乘以 {0}"],
        ["Boost Rage Powers gain by ^{0} /","狂怒能量获取变为原来的 {0} 次方 /"],
        ["Boost Non-Bonus Tickspeed by {1}x","不含额外等级的时间速度效果乘以 {1}"],
        ["Boost Dark Matters gain by ^{0} /","暗物质获取变为原来的 {0} 次方 /"],
        ["Boost BH Condenser Power by {1}x","黑洞压缩器倍率乘以 {1}"],
        ["Boost Atoms gain by ^{0} /","原子获取变为原来的 {0} 次方 /"],
        ["Boost Cosmic Ray Power by {1}x","宇宙射线倍率乘以 {1}"],
        ["Boost Higgs Boson's effect by {0}x","希格斯玻色子效果乘以 {0}"],
        ["Add {0} to base from Fermions gain","费米子获取的底数增加 {0}"],
        ["Add {0} free tiers to Fermions","费米子获得 {0} 个免费阶层"],
        ["Boost all Radiations gains by {0}x","所有辐射波获取乘以 {0}"],
        ["Make all Radiations effects {0}x stronger","所有辐射波效果增强 {0} 倍"],
        ["Increase supernova generation by {0}","超新星生成增加 {0}"],
        ["Make {0} Supernova's scalings start {1} later","{0}超新星折算延迟 {1} 出现"],
        ["pre-exotic","奇异之前的"],
        ["all","所有"],
        ["Are you sure you want to respec all Particles?","确定要重新分配所有原基粒子吗？"],
        ["Are you sure to enter the Quantum Challenge? Entering it will force reset!","确定要进入量子挑战吗？进入会强制重置！"],
        ["Black Dwarf","黑矮星"],
        ["Time Anomaly","时间异常"],
        ["Melted Interactions","熔化作用"],
        ["Intense Catalyst","强力催化"],
        ["Spatial Dilation","空间膨胀"],
        ["Extreme Scaling","极端折算"],
        ["to exponent of all-star resources.","的所有星辰资源指数。"],
        ["to strength of star generators.","的星辰生成器强度。"],
        ["to pre-Quantum global speed.","的量子之前全局速度。"],
        ["to requirements of any Fermions.","的各费米子需求。"],
        ["to multiplier from Bosonic & Radiation resources.","的玻色子与辐射波资源倍率。"],
        ["to multiplier from pre-Supernova resources, except all star resources.","的超新星之前资源倍率（所有星辰资源除外）。"],
        ["to requirements of any pre-Quantum Challenge.","的量子之前各挑战需求。"],
        ["to Mass Dilation’s penalty.","的质量膨胀惩罚。"],
        ["to starting of pre-Quantum scaling.","的量子之前折算起点。"],
        ["to strength of pre-Quantum scaling.","的量子之前折算强度。"],
        ["You cannot add QC Preset because of maxmium length of presets","预设数量已达上限，无法添加量子挑战预设"],
        ["New Preset","新预设"],
        ["Preset Saved","预设已保存"],
        ["Preset Loaded to Modifiers","已将预设载入配置"],
        ["Input the preset name","请输入预设名称"],
        ["Preset Renamed","预设已重命名"],
        ["Are you sure you want to delete the preset?","确定要删除此预设吗？"],
        ["Preset Deleted","预设已删除"],
        ["the Quantum Challenge","量子挑战"],
        ["Are you sure to go Quantum? Going Quantum will reset all previous except QoL mechanicals","确定要前往量子吗？这会重置之前的所有进度，仅保留便利功能。"],
        ["ARE YOU SURE ABOUT IT???","你真的确定吗？？？"],
        ["You start with qol1-6, bosons, and fermions unlocked.","开局解锁 qol1–6、玻色子与费米子。"],
        ["Pre-quantum supernova tree's requirements are gone.","移除量子之前超新星树的额外购买需求。"],
        ["You start with challenges tree and qol7 unlocked.","开局解锁挑战树与 qol7。"],
        ["You start with qol8-9, unl1, and radiation unlocked.","开局解锁 qol8–9、unl1 与辐射波。"],
        ["Double Quantum Foam gain.","量子泡沫获取翻倍。"],
        ["Pre-Quantum global speed affects Blueprint Particles and Chroma at a reduced rate.","量子之前全局速度以削弱的效果影响蓝图粒子与色度。"],
        ["Supernova stars are boosted by Quantizes (capped at 1e10). Unlock Auto-Quantum.","量子次数加成超新星星辰（上限 1e10）。解锁自动量子。"],
        ["Require Quantum Theory to start generating {2}","需要量子理论才能开始生成{2}"],
        ["{11} Chroma, which","{11}色度，其效果为"],
        ["\"Secret Invasion\"?","“秘密入侵”？"],
        ["Ok, here code is {0}","好了，代码是 {0}"],
        ["The code expires in next nearest hour, and is happening!","代码将在下一个整点过期，事件正在发生！"],
        ["Shark!!1!","鲨鱼！！1！"],
        ["Gain more Dark Matters & Mass from Black Hole based on Photon.","光子增加暗物质与黑洞质量获取。"],
        ["Boost BH Condenser Power.","加成黑洞压缩器倍率。"],
        ["Photons gain is boosted by Collapsed Star.","坍缩星辰加成光子获取。"],
        ["All-Star resources gain is boosted by Photon.","光子加成所有星辰资源获取。"],
        ["Boost Fabric.","加成时空纤维。"],
        ["Raise Wormhole Multiplier.","提高虫洞倍率的指数。"],
        ["Gain more Atoms & Atomic Powers based on Gluon.","胶子增加原子与原子能量获取。"],
        ["Boost Cosmic Ray Power.","加成宇宙射线倍率。"],
        ["Gluons gain is boosted by Quark.","夸克加成胶子获取。"],
        ["Supernova requirement is decreased based on Gluon.","胶子降低超新星需求。"],
        ["Boost Protostars.","加成原初恒星。"],
        ["Gain more nebular dusts based on Gluon.","胶子增加星云尘埃获取。"],
        ["and raise mass gain by","并使质量获取变为原来的"],
        ["Are you sure to switch any type of any Fermion?","确定要切换费米子类型吗？"],
        ["Adds {0} free Cosmic Rays","获得 {0} 个免费宇宙射线等级"],
        ["^0.6 to the exponent of Atomic Powers gain","原子能量获取的指数变为原来的 0.6 次方"],
        ["x{0} to Relativistic Particles gain","相对论粒子获取乘以 {0}"],
        ["The exponent of the RP formula is divided by 10","相对论粒子公式的指数除以 10"],
        ["Boson's first effect is {0}% stronger","玻色子的第一个效果增强 {0}%"],
        ["You are trapped in Mass Dilation, and it is twice as strong","你被困在质量膨胀中，且膨胀惩罚翻倍"],
        ["4th Photon & Gluon upgrades are {0}x stronger","光子与胶子升级 4 增强 {0} 倍"],
        ["You are trapped in Mass Dilation and Challenges 3-5","你被困在质量膨胀与挑战 3–5 中"],
        ["Radiation Boosters are {0}x cheaper","辐射波加成的花费降低至原来的 1/{0}"],
        ["U-Quarks, Photons & Gluons do nothing","U-夸克、光子与胶子失效"],
        ["Meta-Tickspeed starts {0}x later","时间速度的元折算延迟 {0} 倍出现"],
        ["Tickspeed Effect","时间速度效果"],
        ["Challenges are disabled","挑战失效"],
        ["Dark ray's effect is ^{0} stronger","暗射线效果变为原来的 {0} 次方"],
        ["product of above u-quarks","以上 U-夸克数量的乘积"],
        ["All u-quarks at once, and force quantum reset.","同时激活所有 U-夸克，并强制进行量子重置。"],
        ["Collapsed Stars gain softcap starts ^{0} later","坍缩星辰获取的软上限延迟 {0} 次方出现"],
        ["^0.625 to the exponent of Atoms gain","原子获取的指数变为原来的 0.625 次方"],
        ["x{0} to Higgs Bosons & Gravitons gain","希格斯玻色子与引力子获取乘以 {0}"],
        ["The power from the mass of the BH formula is always -1","黑洞质量公式的指数始终为 -1"],
        ["Tickspeed is {0}x cheaper (before Meta scaling)","时间速度花费降低至原来的 1/{0}（在元折算之前生效）"],
        ["You are trapped in Challenges 8-9","你被困在挑战 8–9 中"],
        ["Tier requirement is {0}x cheaper","阶层需求降低至原来的 1/{0}"],
        ["Collapsed Star","坍缩星辰"],
        ["Star generators are decreased to ^0.5","星辰生成器效果变为原来的 0.5 次方"],
        ["Meta & Exotic Supernovas scale {0} weaker","超新星的元与奇异折算弱化 {0}"],
        ["Pre-Meta-Supernova Scalings are {0} weaker","超新星在元之前的折算弱化 {0}"],
        ["U-Leptons, Z","U-轻子与 Z"],
        ["bosons do nothing","玻色子失效"],
        ["Pre-Meta BH Condensers & Cosmic Rays are {0}x cheaper","黑洞压缩器与宇宙射线在元之前的花费降低至原来的 1/{0}"],
        ["Tickspeed Power","时间速度倍率"],
        ["Radiation Boosts are disabled","辐射波加成失效"],
        ["Increase prestige base's exponent by {0}","转生基础值的指数增加 {0}"],
        ["product of above u-leptons","以上 U-轻子数量的乘积"],
        ["All u-leptons at once, and force quantum reset.","同时激活所有 U-轻子，并强制进行量子重置。"],
        ["Currently: X","当前效果：X"],
        ["Next Tier at:","下一阶层需求："],
        ["(Increased by {9})","（增加 {9}）"],
        ["On Active: {11}","激活惩罚：{11}"],
        ["Currently: {0}","当前效果：{0}"],
        ["Radio Boost","无线电波加成"],
        ["Radio wave is boosted by {0}x (based on Frequency)","无线电波获取乘以 {0}（基于频率）"],
        ["Tickspeed Boost","时间速度加成"],
        ["Non-bonus tickspeeds are {0}x stronger","不含额外等级的时间速度效果增强 {0} 倍"],
        ["Mass-Softcap Boost","质量软上限加成"],
        ["Mass softcap^3 starts ^{0} later","质量的三重软上限延迟 {0} 次方出现"],
        ["Microwave Boost","微波加成"],
        ["Microwave is boosted by {0}x (based on Radio)","微波获取乘以 {0}（基于无线电波）"],
        ["BH-Exponent Boost","黑洞指数加成"],
        ["Exponent from the mass of BH formula is increased by {0}","黑洞质量公式的指数增加 {0}"],
        ["BH-Condenser Boost","黑洞压缩器加成"],
        ["Non-bonus BH condenser is {0}x stronger","不含额外等级的黑洞压缩器效果增强 {0} 倍"],
        ["Infrared Boost","红外线加成"],
        ["Infrared is boosted by {0}x (based on Microwave)","红外线获取乘以 {0}（基于微波）"],
        ["Photo-Gluon Boost","光子胶子加成"],
        ["1st Photon & Gluon upgrades are {0}x stronger","光子与胶子升级 1 增强 {0} 倍"],
        ["Meta-Boost I","元加成 I"],
        ["Add {0} levels to all above boosts","以上所有加成增加 {0} 级"],
        ["Visible Boost","可见光加成"],
        ["Visible is boosted by {0}x (based on Infrared)","可见光获取乘以 {0}（基于红外线）"],
        ["Cosmic-Ray Boost","宇宙射线加成"],
        ["Cosmic Ray power is boosted by {0}x","宇宙射线倍率乘以 {0}"],
        ["Neturon-Star Boost","中子星加成"],
        ["Neutron Star is boosted by {0}x (based on Frequency)","中子星获取乘以 {0}（基于频率）"],
        ["Ultraviolet Boost","紫外线加成"],
        ["Ultraviolet is boosted by {0}x (based on Visible)","紫外线获取乘以 {0}（基于可见光）"],
        ["Tickspeed-Softcap Boost","时间速度软上限加成"],
        ["Tickspeed power's softcap starts {0}x later","时间速度倍率的软上限延迟 {0} 倍出现"],
        ["Meta-Rank Boost","级别元折算加成"],
        ["Meta-Rank starts {0}x later","级别的元折算延迟 {0} 倍出现"],
        ["X-ray Boost","X射线加成"],
        ["X-ray is boosted by {0}x (based on Ultraviolet)","X射线获取乘以 {0}（基于紫外线）"],
        ["U-Lepton Boost","U-轻子加成"],
        ["U-Leptons are {0}x stronger","U-轻子效果增强 {0} 倍"],
        ["Meta-Boost II","元加成 II"],
        ["Gamma-ray Boost","伽马射线加成"],
        ["Gamma-ray is boosted by {0}x (based on X-ray)","伽马射线获取乘以 {0}（基于 X射线）"],
        ["U-Quark Boost","U-夸克加成"],
        ["U-Quarks are {0}x stronger","U-夸克效果增强 {0} 倍"],
        ["BH-Exponent Boost II","黑洞指数加成 II"],
        ["BH formula softcap starts ^{0} later","黑洞公式的软上限延迟 {0} 次方出现"],
        ["Your distance of {1}'s wave is","你的{1}波长为"],
        ["Which multiples {3} gain by","它使{3}获取乘以"],
        ["Aplitude:","振幅："],
        ["Velocity:","速度："],
        ["distance of","波长"],
        ["Are you sure to reset without being Supernova?","确定要重置但不增加超新星次数吗？"],
        ["You become Supernova!","你成为了超新星！"],
        ["You have pushed","你已举起"],
        ["gained before","获取，发生在"],
        ["overflow","溢出之前"],
        ["of normal mass to reset previous features for gain Rage Powers.","的普通质量，以重置之前的内容并获得狂怒能量。"],
        ["of normal mass to reset previous features for gain Calm Powers.","的普通质量，以重置之前的内容并获得宁静能量。"],
        ["Reach over {0} to reset all previous features for gain Dark Matters.","达到 {0} 以重置之前的所有内容并获得暗物质。"],
        ["Calm Power to reset all previous features for gain Fabrics.","的宁静能量，以重置之前的所有内容并获得时空纤维。"],
        ["of Unstable Black Hole.","的不稳定黑洞质量。"],
        ["of wormhole.","的虫洞质量。"],
        ["of black hole","的黑洞质量"],
        ["Reach over {0} to reset all previous features for gain Atoms & Quarks.","达到 {0} 以重置之前的所有内容并获得原子与夸克。"],
        ["Fabric to reset all previous features for gain Protostars & Quarks.","的时空纤维，以重置之前的所有内容并获得原初恒星与夸克。"],
        ["Quark.","个夸克。"],
        ["Exotic Atoms.","个奇异原子。"],
        ["of dilated mass.","的膨胀质量。"],
        ["Relativistic Energy.","的相对论能量。"],
        ["of Relativistic Mass.","的相对论质量。"],
        ["Dilating mass will force an atom reset. While mass is dilated, all pre-atom resources and atomic power gain will get their multipliers' exponents raised to 0.8","膨胀质量会强制进行原子重置。膨胀期间，原子之前的资源与原子能量获取倍率的指数变为原来的 0.8 次方。"],
        ["Reach","达到"],
        ["of normal mass to gain Relativistic Particles, or cancel dilation.","的普通质量以获得相对论粒子，或取消膨胀。"],
        ["Dilate mass, then cancel.","先膨胀质量，再取消膨胀。"],
        ["You became {0}Supernova","你已成为超新星 {0}"],
        ["times","次"],
        ["Collapsed Star.","个坍缩星辰。"],
        ["Neutron Star.","个中子星。"],
        ["supernova","超新星"],
        ["collapsed stars to go Supernova","个坍缩星辰以前往超新星"],
        ["of normal mass to","的普通质量，以"],
        ["complete Quantum Challenge","完成量子挑战"],
        ["go Quantum","前往量子"],
        ["Constellations persist until next Ouroboric!","星座会保留至下一次衔尾蛇重置！"],
        ["While in Big Rip, Entropy Rewards don't work, all Primordium effects are 50% weaker except for Epsilon Particles, which don't work, supernova tree upgrades qu2 and qu10 don't work, and you are trapped in Quantum Challenge with modifiers {1}. Death Shards are gained based on your normal mass while in Big Rip. Unlock various upgrades from Big Rip.","大撕裂中，熵奖励失效，除失效的 ε 粒子外，其他原基效果削弱 50%；超新星树升级 qu2 与 qu10 失效。你被困在配置为 {1} 的量子挑战中。基于大撕裂中的普通质量获得死寂碎片，并解锁各类大撕裂升级。"],
        ["Our dimension is Big Ripped. Click to undo.","我们的维度已被大撕裂。点击撤销。"],
        ["Big Rip the Dimension.","对维度进行大撕裂。"],
        ["Because of Evolution 3, you cannot purchase Nebulae and Prototar Elements!","由于第三次进化，无法购买星云与原初恒星元素！"],
        ["Dark Shadow.","的黑暗之影。"],
        ["Abyssal Blot.","的深渊之渍。"],
        ["Require","需要"],
        ["Oganesson-118","鿫（118Og）"],
        ["to go Dark.","才能进行黑暗重置。"],
        ["Global Speed","全局速度"],
        ["Pre-Quantum: Speeds up the production of pre-Quantum resources (after exponent, dilation, etc.).","量子之前：加快量子之前资源的产量（在指数、膨胀等计算之后生效）。"],
        ["Pre-Infinity: Speeds up the production of pre-Infinity resources. Applies pre-Quantum global speed. (after exponent, dilation, etc.)","无限之前：加快无限之前资源的产量，并影响量子之前全局速度（在指数、膨胀等计算之后生效）。"],
        ["Your FSS base is","你的最终星辰碎片基础值为"],
        ["of FSS's base to get Final Star Shard.","的最终星辰碎片基础值即可获得最终星辰碎片。"],
        ["Your best {0} in the 16th Challenge is","你在挑战 16 中达到的最高{0}为"],
        ["{2} Earn","{2} 获得"],
        ["based on your mass of black hole, when exiting the challenge{3}.","（基于黑洞质量），在退出挑战时获取{3}。"],
        ["mass of black hole","黑洞质量"],
        ["Exit the 16th Challenge.","退出挑战 16。"],
        ["Start the 16th Challenge.","开始挑战 16。"],
        ["with more than","超过"],
        ["Your {0}Infinity Theorem is","你的{0}无限定理为"],
        ["of normal mass to get Infinity Points and choose Theorem in Core.","的普通质量，以获得无限点数并选择放入核心的定理。"],
        ["Your normal mass limit is","你的普通质量上限为"],
        ["Going Infinity resets everything darkness as well!","前往无限也会重置所有黑暗内容！"],
        ["You're currently at Evolution","你当前处于第"],
        [". Evolving will cause something to be changed...","次进化。进化会使部分内容改变……"],
        ["Complete","先完成"],
        ["Challenge 20","挑战 20"],
        ["first to Evolve.","才能进化。"],
        ["Ouroboric resets everything up to this point, and so Apples!","衔尾蛇重置会清除此前的所有内容，包括苹果！"],
        ["IMR: Ouroboric Beta","质量增量重制版：衔尾蛇 Beta"],
        ["Hept 0","七重阶层 0"],
        ["Reset your hexs (hexes) (and force a darkness reset) but hept/oct/enne etc. up.","重置六重阶层（并强制进行黑暗重置），但提升七重、八重、九重等阶层。"],
        ["To Hept up, require Hex ???","提升七重阶层需要六重阶层 ???"],
        ["To Oct up, require Hept ???","提升八重阶层需要七重阶层 ???"],
        ["Level: 0","等级：0"],
        ["Reset Supernova for that what do you mean?","重置超新星——这是什么意思？"],
        ["based on dilated mass. Relativistic Energy generates","（基于膨胀质量）。相对论能量产生"],
        ["Muon-Catalyzed Fusion Tier 0","缪子催化聚变阶层 0"],
        ["Requirement: ??? Exotic Atoms","需求：??? 奇异原子"],
        ["Notifications: OFF","通知：关闭"],
        ["Pins: OFF","固定标签：关闭"]
    ]) add(source + " => " + target);
    add(`
All => 全部
Buy => 购买
Max => 最大
Assign => 分配
Assign All => 全部分配
Respec => 重新分配
Reset => 重置
Gain => 获取
Cancel => 取消
Close => 关闭
Completed => 已完成
Locked => 未解锁
Unlocked => 已解锁
Start => 开始
Stop => 停止
Active => 激活中
Inactive => 未激活
Normal => 普通
Muon => 缪子
Muonic => 缪子
Next => 下一级
Requirement => 需求
Reward => 奖励
Strength => 强度
Power => 倍率
Effect => 效果
Cost => 花费
Amount => 数量
Current => 当前
Currently => 当前效果
Base => 基础值
Exponent => 指数
Multiplier => 倍率
Theorem => 定理
Theorems => 定理
Fragment => 碎片
Fragments => 碎片
Completions => 完成次数
Softcap => 软上限
Hardcap => 硬上限
Hardened => 硬化
Insane => 疯狂
Impossible => 无望
Strawberry => 草莓
Strawberries => 草莓
Purify => 净化
Aim => 瞄准
Freeze => 冻结
Boom => 引爆
Feed => 喂食
Merge => 合并
Split => 分裂
Meditation => 冥想
Meditate => 冥想
Stronger Power => 强化器倍率
Star Generator => 星辰生成器
Collapsed Star => 坍缩星辰
Collapsed Stars => 坍缩星辰
Neutron Star => 中子星
Neutron Stars => 中子星
Big Rip => 大撕裂
Big Rips => 大撕裂
Quantize => 前往量子
Quantizes => 量子次数
Meta-Quark => 元夸克
Meta-Lepton => 元轻子
Meta-Fermions => 元费米子
Dodec => 十二重阶层
Undec => 十一重阶层
Dec => 十重阶层
Icos => 二十重阶层
Normal Energy => 普通能量
Redshift => 红移
Dilatons => 膨胀子
Galactic Stars => 星系星辰
Galactic Matter => 星系物质
Prestige Mass => 转生质量
Anti-Wormhole => 反虫洞
Nebular Dust => 星云尘埃
Nebular dusts => 星云尘埃
Exotic Nebulae => 奇异星云
Pre-Quantum Global Speed => 量子之前全局速度
Pre-Infinity Global Speed => 无限之前全局速度
pre-Ourobrosity speed => 衔尾蛇之前全局速度
increase => 增加
decrease => 降低
stronger => 增强
weaker => 削弱
later => 延迟
earlier => 提前
seconds => 秒
second => 秒
minutes => 分钟
minute => 分钟
hours => 小时
hour => 小时
days => 天
years => 年
FVM => 假真空操纵器
BHC => 黑洞压缩器
MCF => 缪子催化聚变
FSS => 最终星辰碎片
QoL => 便利功能
`);
    // Real chemical names only; element symbols and generated placeholder names stay intact.
    for (const [source,target] of [
        ["Hydrogen","氢"],
        ["Helium","氦"],
        ["Lithium","锂"],
        ["Beryllium","铍"],
        ["Boron","硼"],
        ["Carbon","碳"],
        ["Nitrogen","氮"],
        ["Oxygen","氧"],
        ["Fluorine","氟"],
        ["Neon","氖"],
        ["Sodium","钠"],
        ["Magnesium","镁"],
        ["Aluminium","铝"],
        ["Silicon","硅"],
        ["Phosphorus","磷"],
        ["Sulfur","硫"],
        ["Chlorine","氯"],
        ["Argon","氩"],
        ["Potassium","钾"],
        ["Calcium","钙"],
        ["Scandium","钪"],
        ["Titanium","钛"],
        ["Vanadium","钒"],
        ["Chromium","铬"],
        ["Manganese","锰"],
        ["Iron","铁"],
        ["Cobalt","钴"],
        ["Nickel","镍"],
        ["Copper","铜"],
        ["Zinc","锌"],
        ["Gallium","镓"],
        ["Germanium","锗"],
        ["Arsenic","砷"],
        ["Selenium","硒"],
        ["Bromine","溴"],
        ["Krypton","氪"],
        ["Rubidium","铷"],
        ["Strontium","锶"],
        ["Yttrium","钇"],
        ["Zirconium","锆"],
        ["Niobium","铌"],
        ["Molybdenum","钼"],
        ["Technetium","锝"],
        ["Ruthenium","钌"],
        ["Rhodium","铑"],
        ["Palladium","钯"],
        ["Silver","银"],
        ["Cadmium","镉"],
        ["Indium","铟"],
        ["Tin","锡"],
        ["Antimony","锑"],
        ["Tellurium","碲"],
        ["Iodine","碘"],
        ["Xenon","氙"],
        ["Caesium","铯"],
        ["Barium","钡"],
        ["Lanthanum","镧"],
        ["Cerium","铈"],
        ["Praseodymium","镨"],
        ["Neodymium","钕"],
        ["Promethium","钷"],
        ["Samarium","钐"],
        ["Europium","铕"],
        ["Gadolinium","钆"],
        ["Terbium","铽"],
        ["Dysprosium","镝"],
        ["Holmium","钬"],
        ["Erbium","铒"],
        ["Thulium","铥"],
        ["Ytterbium","镱"],
        ["Lutetium","镥"],
        ["Hafnium","铪"],
        ["Tantalum","钽"],
        ["Tungsten","钨"],
        ["Rhenium","铼"],
        ["Osmium","锇"],
        ["Iridium","铱"],
        ["Platinum","铂"],
        ["Gold","金"],
        ["Mercury","汞"],
        ["Thallium","铊"],
        ["Lead","铅"],
        ["Bismuth","铋"],
        ["Polonium","钋"],
        ["Astatine","砹"],
        ["Radon","氡"],
        ["Francium","钫"],
        ["Radium","镭"],
        ["Actinium","锕"],
        ["Thorium","钍"],
        ["Protactinium","镤"],
        ["Uranium","铀"],
        ["Neptunium","镎"],
        ["Plutonium","钚"],
        ["Americium","镅"],
        ["Curium","锔"],
        ["Berkelium","锫"],
        ["Californium","锎"],
        ["Einsteinium","锿"],
        ["Fermium","镄"],
        ["Mendelevium","钔"],
        ["Nobelium","锘"],
        ["Lawrencium","铹"],
        ["Rutherfordium","𬬻"],
        ["Dubnium","𬭊"],
        ["Seaborgium","𬭳"],
        ["Bohrium","𬭛"],
        ["Hassium","𬭶"],
        ["Meitnerium","鿏"],
        ["Darmstadium","𫟼"],
        ["Roeritgenium","𬬭"],
        ["Copernicium","鿔"],
        ["Nihonium","鿭"],
        ["Flerovium","鈇"],
        ["Moscovium","镆"],
        ["Livermorium","鉝"],
        ["Tennessine","鿬"],
        ["Oganesson","鿫"]
    ]) add(source + " => " + target);
    // Fragments separated by upstream <b>, <span> and tooltip markup.
    add(`
Tiers => 阶层
Tetrs => 四重阶层
Pents => 五重阶层
Hexes => 六重阶层
Prestige Levels => 转生等级
Honors => 荣耀
Glorys => 辉煌
Renowns => 名誉
Protons Powers => 质子能量
Neutrons Powers => 中子能量
Electrons Powers => 电子能量
Protons => 质子
Neutrons => 中子
Electrons => 电子
Kaons => K介子
Pions => π介子
Frequency => 频率
Neutronium-0 => 中子素-0
Modifications => 修改器
Presets => 预设
Distribute => 分配
Quantized => 已量子化
Lock => 锁定
maximum => 最大值
Matter => 物质
Purple Matter => 紫色物质
Violet Matter => 紫罗兰色物质
Lime Matter => 黄绿色物质
Purple => 紫色
Lime => 黄绿色
Inventory => 库存
Redeem => 兑换
Perks => 特权
(hover) => （悬停查看）
meters => 米
After => 达到
, your mass gain is rooted by => 后，质量获取被开
, your stronger effect is rooted by => 后，强化器效果被开
Tier {0}'s reward is boosted based on dark matters. Currently: => 暗物质增强阶层 {0} 的奖励。当前效果：
's reward is boosted based on dark matters. => 的奖励由暗物质增强。
Ascend (force an Infinity reset), but {0} up. => 执行无限重置，并提升{0}。
Transcend (force an Infinity reset), but {0} up. => 执行无限重置，并提升{0}。
Which multiples {0} gain by => 它使{0}获取乘以
Mega => 巨级
When breaking dilation, while in Big Rip, BH Condensers & Cosmic Rays are no longer nerfed by 8th QC modifier, 7th QC modifier is disabled, you can gain => 撕裂膨胀时，在大撕裂中，黑洞压缩器和宇宙射线不再受第八个量子挑战修改器削弱，第七个修改器失效，并可以获得
Tiering will result in forcing FSS reset. => 提升阶层将强制执行最终星辰碎片重置。
Click any theorem to select. Selected theorem will be added in Inventory after going Infinity. => 点击一个定理进行选择。前往无限后，选中的定理将加入库存。
Reroll with selected only but with new theorem stars. => 回收选中的定理，以此为基础重新生成候选定理及其星辰。
`);
    // The upstream name generator is display-only. Register its generated names
    // here without modifying the generator or rank requirement calculations.
    if (typeof getRankTierName === 'function') {
        for (let i = 9; i < 999; i++) add(getRankTierName(i) + ' => ' + (i + 1) + '重阶层');
    }
    // Translate complete effects so values can follow their Chinese subjects.
    add(`
+{0} later to Super Rank starting, {1}% weaker to Super Tickspeed scaling => 级别的超级折算延迟出现：+{0}，时间速度的超级折算削弱{1}%
Currently: +{0} later to Super Rank starting, {1}% weaker to Super Tickspeed scaling => 当前效果：级别的超级折算延迟出现：+{0}，时间速度的超级折算削弱{1}%
{0} later to Supercritical Rank & All Fermions starting, {1} weaker to Super Overpower scaling => 级别的超临界折算与所有费米子阶层折算延迟出现：{0}，超强化器的超级折算削弱{1}
Currently: {0} later to Supercritical Rank & All Fermions starting, {1} weaker to Super Overpower scaling => 当前效果：级别的超临界折算与所有费米子阶层折算延迟出现：{0}，超强化器的超级折算削弱{1}
`);
    window.IMR_ZH_CN.phrases = Object.entries(window.IMR_ZH_CN.exact);
    // Standalone labels include “折算”; phrases inside sentences keep their
    // adjectives so existing full translations do not acquire duplicate suffixes.
    window.IMR_ZH_CN.scalingLabels = {
        Super: '超级折算', Hyper: '究极折算', Ultra: '超究折算', Meta: '元折算',
        Exotic: '奇异折算', Supercritical: '超临界折算', Instant: '即时折算', Mega: '巨级折算',
    };
    Object.assign(window.IMR_ZH_CN.exact, window.IMR_ZH_CN.scalingLabels);

})();
