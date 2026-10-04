# v0.8-beta 汉化与时间倍率扩展

本分支以英文原版 v0.8-beta 为基础。汉化沿用 `incremental-mass-rewritten-ng--ch` 中含义一致的术语；升级与挑战说明按本版英文源码翻译。原版与 NG+ 的后期元素编号、效果和进度不同，不能按编号直接移植说明或存档。

## 文件与加载顺序

`index.html` 只增加一个加载区块，放在所有原版脚本之后、`loadGame()` 执行之前：

```html
<!-- Fork additions: keep this block after upstream scripts when syncing. -->
<link rel="stylesheet" href="local/style.css">
<script src="local/lang/zh-CN.js"></script>
<script src="local/localization.js"></script>
<script src="local/time-speed.js"></script>
<script src="local/game-fixes.js"></script>
```

- `local/lang/zh-CN.js`：中文词条、完整句子和动态文本模板。包含基础资源、挑战、元素、量子、黑暗、无限、奇异原子、衔尾蛇与星座等内容。
- `local/localization.js`：在显示文本的入口翻译；覆盖静态页面、`Element` 输出、工具提示、通知、弹窗和浏览器对话框。原版内部的资源名、升级 ID、存档结构与计算公式保持原样。
- `local/style.css`：为所选字体补充中文字体回退，优先使用系统中文字体，随后使用随扩展附带的中文字体子集和原版 Noto Sans JP。费米子卡片宽度随可用空间调整，使 1920×1080 的默认双边栏布局每组保持六个一行；窄窗口仍自动换行。
- `local/time-speed.js`：时间倍率控件、存档默认值与实时计算入口。
- `local/game-fixes.js`：独立的原版错误修复。目前修正黑暗狂奔的雕文领取限制：最大开启时不限制领取量，关闭时按所设数量限制。原版的判断条件与界面显示相反。上游修正后可移除对应补丁；同步时检查 `updateDarkRunTemp` 的实现。

翻译按完整词条、动态模板、短语的顺序匹配。模板中 `{0}`、`{1}` 等代表原版插入的数值或文字；翻译时可调整顺序，但必须保留所有占位符。具体句子优先于通用标签，避免“Tier {0}”抢先匹配奖励说明。

HTML 翻译仅处理文本及 `tooltip-html`、`title`、`placeholder`、`aria-label` 属性。事件处理代码、CSS、ID、链接、输入值及脚本内容不翻译。单位符号、元素符号、树节点 ID、字体名称、作者和作品名称保留原样。超过 118 的系统元素名称保留原版生成形式；升级描述中的元素引用使用编号。

## 时间倍率

控件位于“选项”页，现有显示设置和“确认窗口设置”之间，使用原版按钮样式，支持整数 **1–10**。保存字段为 `player.options.timeMultiplier`。

- 新游戏与没有该字段的旧存档默认 **1**。
- 保存、导出、导入和刷新均保留设置。
- 导入的有限数值向下取整并限制到 1–10；非数字、非有限值恢复为 1。
- 实时 `loop()` 传给资源计算的经过时间乘以倍率。原版资源公式、每游戏秒的获取数值与存档时间戳保持原有含义。
- 原版离线 `simulateTime()` 按实际离线时间结算，不使用实时倍率；自动保存、界面定时器与每秒检查仍按真实时间执行。

例如，1 倍时每游戏秒获得 2 g，5 倍时每真实秒获得 10 g；界面原版的 `/s` 数值仍表示每游戏秒获取量。

## 同步原版

1. 正常同步上游 v0.8-beta 分支。
2. 若 `index.html` 冲突，保留上面的加载区块，并确保仍在原版全部脚本之后。
3. 检查上游是否改名或移除了 `Element`、`setupHTML`、弹窗函数、`getPlayerData`、`loadPlayer`、`loop`、`calc`、`getScalingName`、`updateOptionsHTML` 或 `confirm_table`。这些是扩展使用的接口。
4. 检查新增界面和升级说明，补充语言包。控制台的 `IMR_I18N.missing` 可辅助发现未匹配的文本，但它不是完整覆盖率报告；部分翻译的句子也需要人工检查。
5. 运行下述检查，并试一次旧存档导入。

关闭汉化时移除语言包、翻译脚本和本地样式的加载行即可。关闭时间倍率时移除时间倍率脚本；原版会忽略已有的额外存档字段。

## 验证

无需依赖的自动检查（Node.js 18+）：

```sh
node tests/local-addons.test.cjs
```

检查动态占位符、数值保留、HTML 事件和属性、重复翻译、默认值、存档字段、范围限制、实时与离线计算以及异常后的恢复。

可选真实浏览器检查使用 Playwright，独立安装在临时目录即可：

```sh
npm install --prefix /tmp/imr-browser-tools playwright
NODE_PATH=/tmp/imr-browser-tools/node_modules /tmp/imr-browser-tools/node_modules/.bin/playwright install chromium
NODE_PATH=/tmp/imr-browser-tools/node_modules node tests/browser-addons.cjs
```

该检查启动全新浏览器上下文，不读取日常浏览器存档。它检查页面加载、按钮点击、保存刷新、原版格式存档导入、真实 1/5/10 倍产量、离线结算和弹窗回调。截图默认写入 `/tmp/imr-options-verified.png`，也可用 `IMR_SCREENSHOT` 指定路径。

## 中文字体

`local/fonts/IMRChineseSubset.woff2` 从 [Noto Sans SC Regular](https://github.com/notofonts/noto-cjk/tree/main/Sans/SubsetOTF/SC) 制作，包含语言包和时间倍率控件所需的字形，使用独立字体名称；许可证随字体放在 `local/fonts/OFL.txt`。它解决没有中文系统字体时部分简体字显示方框的问题。

运行游戏不需要字体构建工具。新增译文使用了子集之外的汉字时，可以下载该目录中的 `NotoSansSC-Regular.otf`，安装 `fonttools` 和 `brotli`，然后运行：

```sh
python3 local/build-font.py /path/to/NotoSansSC-Regular.otf
```

已确认译名和你的命名意见记录于 [TRANSLATION-QUESTIONS.md](TRANSLATION-QUESTIONS.md)，语言包已按这些选择统一更新。
