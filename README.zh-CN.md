<div align="center">

![Awesome GPT-6 Astra — Games worth playing. Ideas worth building.](assets/banner.svg)

# Awesome GPT-6 Astra

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md) [![LINUX DO](https://img.shields.io/badge/LINUX%20DO-Community-f0b73f?style=flat-square)](https://linux.do/) [![Cases: 18](https://img.shields.io/badge/Cases-18-58a6ff?style=flat-square)](https://astragames.aigccreative.com/)

**收集用 GPT-6 Astra 制作的有趣游戏。**

关注好玩的点子、可体验的作品，以及能启发下一位创作者的开发过程。

[English](README.md) · **简体中文** · [日本語](README.ja.md) · [한국어](README.ko.md)<br>
[Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md)<br>
[Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md) · [Bahasa Indonesia](README.id.md)

[提交游戏](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) · [参与贡献](CONTRIBUTING.md)

</div>

## 从这里开始

目前收录 **17 款浏览器游戏和 1 个交互式粒子艺术沙盒**：三国领土策略、木锁拆解与华容道、半流体水果合成、单键飞行、魔毯战斗、五关弹幕射击、海岛电网塔防、荒野生存、水下捕鱼、寿司店经营与海岛种植、海湾卡丁车竞速、鹈鹕海岸骑行、桌面玩具的 3D 改编，以及轨道花园。点击作品名称可打开试玩或源码运行说明。

目录更新：**2026-09-09**。模型使用信息依据作者或投稿者的说明，未确认内容在具体条目中标注。此日期表示目录维护时间，不代表当天重新试玩了所有游戏。

- **想玩游戏：** 从下面的分类寻找你喜欢的玩法。
- **做了游戏：** [提交你的作品](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml)，附上试玩或源码入口、实机截图，以及使用 GPT-6 Astra 的说明。
- **发现好作品：** 欢迎推荐他人的公开作品，并注明原作者。

这是一份社区维护的清单，与 OpenAI 无隶属关系。收录表示值得探索，不代表性能评测或官方推荐。

## 游戏目录

- [动作与街机](#动作与街机)
- [解谜与益智](#解谜与益智)
- [策略与模拟](#策略与模拟)
- [RPG 与冒险](#rpg-与冒险)
- [平台跳跃与竞速](#平台跳跃与竞速)
- [实验玩法与多人游戏](#实验玩法与多人游戏)

### 动作与街机

射击、格斗、生存、节奏，以及追求“再来一局”的作品。

- **[Mosswing](https://mosswing-quiet-flight.jack-514.chatgpt.site/)** — 3D 单键飞行，控制小翼穿越障碍间隙得分。
  - 作者：[Ayi1337](https://github.com/Ayi1337)
  - 平台：浏览器，面向移动端设计。
  - GPT-6 Astra：[作者的 One Shot 测试与原始 Prompt](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md)。
  - 开发资料：[源码](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/mosswing/src) · [单文件 HTML](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/mosswing/mosswing.html)
  - 预览：![Mosswing 起始画面：飞行角色与石柱之间的障碍间隙。](assets/screenshots/mosswing/gameplay.jpg)

- **[Magic Carpet Wizard — A Thousand Skies](https://threapchills.github.io/MagicCarpetWizard/)** — 驾驶魔毯探索球形世界，穿环、施法，并挑战敌人与 Boss。
  - 作者：[threapchills](https://github.com/threapchills)
  - 平台：桌面浏览器，键鼠操作，需要 WebGL 2。
  - GPT-6 Astra：作者在[仓库 About](https://github.com/threapchills/MagicCarpetWizard) 中说明由 GPT-6 Astra 制作。
  - 开发资料：[源码与运行说明](https://github.com/threapchills/MagicCarpetWizard) · 技术：Three.js、Vite。
  - 预览：![Magic Carpet Wizard 起始画面：魔毯骑手、城市与发光飞行环。](assets/screenshots/magic-carpet/gameplay.jpg)

- **[雷霆战机 · 天穹远征 / THUNDERFALL](https://thunderfall.vercel.app/)** — 三种战机挑战五大空域与多阶段首领，躲避漂移弹和预警激光、拾取四色武器，完整战役至少十分钟有效战斗。
  - 作者：[jackroc](https://github.com/jackroc)
  - 平台：现代桌面与手机浏览器；拖动或键盘移动，自动开火。免费，无需登录或 API Key；可选音效需要 Web Audio。
  - GPT-6 Astra：[创作记录与模型参与说明](works/thunderfall/README.md#创作与许可) — 创作者声明使用 GPT-6 Astra ultra 完成设计、代码、程序画面、合成声音与迭代测试，并有协作代理参与；非 one-shot 测试。
  - 开发资料：[源码与运行说明](works/thunderfall/README.md) · [Prompt](works/thunderfall/PROMPT.md) · 技术：原生 JavaScript、Canvas 2D、Web Audio。
  - 预览：![雷霆战机实机画面：战机在熔核工厂上空躲避敌方火力，旁边显示武器配置与战斗操作。](assets/screenshots/thunderfall/gameplay.jpg)

- **[IRON BASTION / 钢铁防线](https://iron-bastion.zecoba.workers.dev/)** — 在六片战区驾驶 3D 坦克，抵御敌军波次并守护信标；可破坏砖墙，并使用战术冲刺与电磁脉冲。
  - 作者: [chat01.ai](https://linux.do/u/bandaot)
  - 平台: 支持 WebGL 2 的浏览器，中文界面；操作手册提供键鼠和触屏操作。已确认可无需登录或付费进入战斗。
  - GPT-6 Astra: GPT-6 Astra 使用情况及参与范围待作者确认。
  - 预览: ![IRON BASTION / 钢铁防线 — 实机画面](assets/screenshots/iron-bastion/gameplay.jpg)

### 解谜与益智

逻辑谜题、物理解谜、文字游戏与巧妙的小机关。

- **[瓜体实验室](https://melon-game.jack-514.chatgpt.site/)** — 把半流体水果的形变与碰撞融入西瓜合成玩法。
  - 作者：[Ayi1337](https://github.com/Ayi1337)
  - 平台：现代浏览器；作者另提供可下载后直接打开的单文件版本。
  - GPT-6 Astra：[作者的 One Shot 测试与原始 Prompt](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md)。
  - 开发资料：[源码](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/melon-lab/src) · [单文件 HTML](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/melon-lab/%E7%93%9C%E4%BD%93%E5%AE%9E%E9%AA%8C%E5%AE%A4.html)
  - 预览：![瓜体实验室运行画面：合成容器中的软体水果与物理模式控制。](assets/screenshots/melon-lab/gameplay.jpg)

- **[Q弹消消乐](https://qbxxl.0nz.de/)** — 点击消除至少三颗相连的同色泡泡，大组生成爆弹和彩虹，提供解压、闯关和限时模式。
  - 作者: zding
  - 平台: 浏览器，中文界面；实测无需登录或付费即可进入。
  - GPT-6 Astra: GPT-6 Astra 使用情况及参与范围待作者确认。
  - 预览: ![Q弹消消乐 — 实机画面](assets/screenshots/qbxxl/gameplay.jpg)

- **[榫境 / Sunjing Puzzles](https://sunjing-puzzles.vercel.app)** — 在 3D 木作展台拆解六构件互锁木锁，挑战两种华容道布局，支持提示与移动撤销。
  - 作者：[MartinDelophy](https://github.com/MartinDelophy)（项目发起人及提交者）。
  - 平台：支持 WebGL 2 的现代浏览器，中文界面，键鼠与触控操作；免费，无需登录或 API Key，进度仅保存在当前浏览器。
  - 模型参与：[制作记录](works/sunjing-puzzles/CREATION.md) — 通过 Codex 多轮完成玩法、程序化 3D 画面、规则、求解器与测试；GPT-6 Astra 的具体使用归因待作者确认，本次为草稿投稿。
  - 开发资料：[源码与运行说明](works/sunjing-puzzles/README.md) · [需求记录](works/sunjing-puzzles/PROMPTS.md) · 技术：React、Vinext/Vite、Three.js。
  - 预览：![榫境实机画面：深绿色 3D 展台上的六构件木锁，旁边是木块编号与抽出操作。](assets/screenshots/sunjing-puzzles/gameplay.jpg)

### 策略与模拟

塔防、卡牌策略、经营建造与模拟沙盒。

- **[三分天下 · 百将风云 / Three Kingdoms: Hundred Heroes](https://sanguo-jiangshan.vercel.app)** — 选择魏、蜀、吴，在 15 城地图上经营金粮、指挥拥有独立 AI 生成头像的 108 名武将，以回合制征战对抗 AI 势力，争夺天下统一。
  - 作者：[MartinDelophy](https://github.com/MartinDelophy)（项目发起人及提交者）。
  - 平台：现代浏览器，中文界面，鼠标与触控操作；免费，无需登录或 API Key，本地存档支持导入导出。
  - GPT-6 Astra：[创作记录](works/three-kingdoms/CREATION.md) — 作者确认使用，通过 Codex 多轮协作完成规则、界面、AI、平衡与测试；地形和武将头像另由图像生成工具制作。
  - 开发资料：[源码与运行说明](works/three-kingdoms/README.md) · [需求记录](works/three-kingdoms/PROMPTS.md) · 技术：React、TypeScript、Vinext/Vite。
  - 预览：![三分天下实机画面：水墨城池地图、资源操作与武将头像。](assets/screenshots/three-kingdoms/gameplay.jpg)

- **[最后的灯塔 / Last Beacon](https://last-beacon.loupengju.cc)** — 在微缩海岛上连接电网、布置并升级炮塔，以有限电力抵挡十波机械生物和最终 Boss，守住灯塔。
  - 作者：[stackloomdev](https://github.com/stackloomdev)
  - 平台：现代桌面与手机浏览器，中英双语；免费，无需登录或 API Key；可选音效需要 Web Audio。
  - GPT-6 Astra：[作者的创作记录与模型参与说明](https://github.com/stackloomdev/last-beacon/blob/main/docs/CREATION.md) — 参与玩法设计、代码、程序化美术和测试；多轮迭代，非 one-shot 测试。
  - 开发资料：[源码与运行说明](https://github.com/stackloomdev/last-beacon) · [需求与迭代记录](https://github.com/stackloomdev/last-beacon/blob/main/docs/PROMPT.md) · 技术：JavaScript、Canvas 2D、Web Audio。
  - 预览：![最后的灯塔中文实机画面：连接电网的炮塔与寒潮塔守卫海岛，抵挡沿海岸路线进攻的敌人。](assets/screenshots/last-beacon/gameplay.png)

- **[缺氧 · 小小星球](https://hypoxia-6tu.pages.dev/)** — 地下殖民地生存模拟：指挥三名复制人挖掘和建造，管理氧气、食物及电力，让基地持续运转。
  - 作者: dudu
  - 平台: 支持 Canvas 的浏览器；中文界面，鼠标和键盘操作；实测无需登录或付费即可进入。
  - GPT-6 Astra: [Issue #28](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/28) — 投稿者说明由 GPT-6 Astra 全程开发；未独立核验。
  - 预览: ![缺氧 · 小小星球 — 实机画面](assets/screenshots/hypoxia/gameplay.jpg)

- **[魔塔 · 永夜之阶](https://ai.ywnet.xyz/work/mt.html)** — 十五层像素高塔冒险，围绕攻防计算、有限资源和三色钥匙规划路线、逐层探索。
  - 作者: yw
  - 平台: 浏览器，中文界面；实测无需登录或付费即可进入。
  - GPT-6 Astra: [Issue #38](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/38) — 投稿者在 GPT-6 Astra 参与说明中提供了开发提示词；具体模型参与情况未独立核验。
  - 预览: ![魔塔 · 永夜之阶 — 实机画面](assets/screenshots/magic-tower/gameplay.jpg)

- **[永恒荒野](https://starve.pages.dev/)** — 投稿中的《饥荒》复刻网页生存与策略游戏；截图展示了森林探索、物资收集、背包，以及生命、饱食与理智状态。
  - 作者：dudu
  - 平台：浏览器；截图显示中文界面与键盘操作。投稿未说明付费及登录要求，试玩尚未独立核验。
  - GPT-6 Astra：[投稿者说明](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/26) — 投稿者称由 GPT-6 Astra 全程开发。
  - 开发资料：未提供公开源码或独立开发记录。
  - 预览：![Issue #26 提供的永恒荒野画面：角色站在森林营火旁，界面显示背包、生存状态和小地图。](assets/screenshots/eternal-wilderness/gameplay.jpg)

- **[潜水员戴夫（复刻）](https://dave-2cm.pages.dev/)** — 《潜水员戴夫》的浏览器复刻，将水下鱼叉捕鱼、寿司店经营与海岛种植结合在一起。
  - 作者：dudu
  - 平台：浏览器，中文界面，支持鼠标和键盘操作；实测无需登录或付费即可进入并开始潜水。
  - GPT-6 Astra：[投稿者说明](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/41) — 投稿者称由 GPT-6 Astra 全程开发。
  - 开发资料：未提供公开源码或独立开发记录。
  - 预览：![潜水员戴夫复刻实机画面：潜水员穿行于鱼群之间，界面显示氧气、深度和收获背包。](assets/screenshots/dave-the-diver/gameplay.jpg)

### RPG 与冒险

角色扮演、探索、叙事冒险与互动故事。

*等待首个作品。*

### 平台跳跃与竞速

跑酷、平台闯关、赛车，以及考验路线与操作的游戏。

- **[APEX CLUB — Bay Kart Grand Prix](https://apex-club-racing.vercel.app)** — 在海湾赛道参加三圈卡丁车竞速，选择六款赛车，利用漂移蓄力与出弯小喷争夺个人名次或 4v4 队伍积分。
  - 作者：Ryan
  - 平台：支持 WebGL 2 的桌面浏览器，键盘操作；免费，无需登录或 API Key；本地 HTTP 服务或静态网站启动，Three.js 已随源码提供。组队为 1 位玩家与 7 位 AI 的本地竞赛。
  - 模型参与：[开发记录](works/apex-club/CREATION.md) — 通过 Codex 多轮迭代玩法、代码、程序化美术与测试；GPT-6 Astra 归因待创作者确认。
  - 开发资料：[源码与运行说明](works/apex-club/README.md) · [需求与迭代记录](works/apex-club/PROMPTS.md) · [GPT 对话分享](https://chatgpt.com/s/cx_6a9e84c13c9c8191bcb7ad0801288adc) · 技术：JavaScript、Three.js。
  - 预览：![APEX CLUB 海湾赛道实机画面：卡丁车组队竞速，显示圈数、队伍积分和实时小地图。](assets/screenshots/apex-club/gameplay.png)

- **[PELICAN PEDAL / 鹈鹕踏浪](https://pelican-pedal.zecoba.workers.dev/)** — 让鹈鹕骑着自行车穿行于不断变化的 3D 海岸，在三条车道间换道、跳跃与低头躲避障碍，连续收集小鱼获得连击，使用护盾、磁铁和六秒无敌冲刺。
  - 作者：[chat01.ai](https://chat01.ai)（投稿中注明的作者）。
  - 平台：桌面与手机浏览器，支持键盘和触控；据投稿说明，免费且无需登录。试玩尚未独立核验。
  - GPT-6 Astra：[Issue #10](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/10) — 投稿者称由一句提示词生成；所附开发记录尚未独立核验。
  - 开发资料：[分享的开发记录](https://chat01.ai/zh/chat/01M1VJ5K55803V2YK3T2NKTX33)
  - 预览：![PELICAN PEDAL 标题画面：鹈鹕骑自行车行驶在海边；截图由 Issue #10 提供。](https://github.com/user-attachments/assets/ec085afa-3c45-4de6-b03f-5c626f941546)

- **[狂飙赛车 · OVERDRIVE](https://gpt-kbsc.0nz.de/)** — 与五名 AI 对手进行 3D 赛车竞速，可选择车辆和赛道，提供计时、漂移及氮气加速。
  - 作者: zding
  - 平台: 浏览器，中文界面；实测无需登录或付费即可进入。
  - GPT-6 Astra: GPT-6 Astra 使用情况及参与范围待作者确认。
  - 预览: ![狂飙赛车 · OVERDRIVE — 实机画面](assets/screenshots/overdrive/gameplay.jpg)

### 实验玩法与多人游戏

难以归类的新玩法、联机对战与合作体验。

- **[ORBITAL GARDEN · 轨道花园](https://orbital-garden-one.vercel.app)** — 交互式粒子艺术沙盒：让 48,000 颗光点在花、引力环与星系之间变形，扰动雕塑并将瞬间导出为海报。
  - 作者：[jackroc](https://github.com/jackroc)
  - 平台：支持 WebGL 的现代浏览器；点击作品名直接在线体验，免费，无需登录或 API Key；也可下载单文件 HTML 离线运行，可选环境音需要 Web Audio。
  - GPT-6 Astra：[创作记录与模型参与说明](works/orbital-garden/README.md#模型与创作记录) — 创作者使用 GPT-6 Astra ultra 完成构思、代码与文案，经过协作审阅；非 one-shot 测试。
  - 开发资料：[源码与运行说明](works/orbital-garden/README.md) · [单文件 HTML](works/orbital-garden/index.html) · [Prompt](works/orbital-garden/PROMPT.md) · 技术：原生 WebGL、Web Audio、Canvas 2D。
  - 预览：![轨道花园实机画面：薄荷绿色粒子组成星之花，下方可切换形态、调节生命力与时间流速，并导出纪念海报。](assets/screenshots/orbital-garden/gameplay.jpg)

- **[Toy2Game / 在线玩具箱](https://games.asmo.top/)** — 把桌面玩具改编成四款 3D 网页游戏：轮流敲冰避免企鹅落水、带小兔穿过机关、放置太空人保持平台平衡，以及挪动车辆解开出库谜题。
  - 作者：[asmoyou](https://github.com/asmoyou)
  - 平台：电脑、平板与手机浏览器；免费，无需登录。支持 2–4 个席位本地同屏轮流操作，可加入电脑对手，也有单人解谜；不支持异地联机。试玩尚未独立核验。
  - GPT-6 Astra：[作者说明](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/24) — 作者称只提供玩具描述和功能要求，由 GPT-6 Astra 自主完成游戏开发与测试验证。
  - 开发资料：[源码与运行说明](https://github.com/asmoyou/toy2game) · [非商业使用许可](https://github.com/asmoyou/toy2game/blob/main/LICENSE) — 源码开放，非商业使用免费；商业使用须事先取得作者书面授权。技术：TypeScript、React、Vite、Three.js。
  - 预览：![Toy2Game 四款游戏的实际 3D 场景：企鹅敲冰、小兔闯关、平衡太空人和移车出库。图片由 asmoyou 提供。](https://raw.githubusercontent.com/asmoyou/toy2game/main/docs/images/toy2game-overview.png)

## 每个作品记录什么

一条好用的推荐，应该让人一眼知道“玩什么、在哪里玩、为什么收录”。

| 信息 | 内容 |
| --- | --- |
| 游戏与作者 | 作品名称、原作者或团队链接 |
| 玩法亮点 | 一句话说明核心玩法，避免空泛宣传 |
| 体验入口 | 试玩地址，或包含运行说明的公开源码仓库 |
| 实机截图 | 至少一张展示核心玩法的真实截图，附可公开访问的图片地址 |
| 平台与条件 | 浏览器 / 桌面 / 移动端；注明付费、登录或特殊硬件要求 |
| Astra 的参与 | 作者说明、开发日志或公开记录，说明 GPT-6 Astra 参与了哪些工作 |
| 开发资料 | 源码、技术栈与制作过程，能提供多少就提供多少 |

模型使用情况按作者公开说明记录；没有依据的归因不会写成已确认事实。可玩的原型也欢迎，不要求每个游戏都开源。

## 一起维护

通过 [Issue 提交游戏](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml)，或直接发起 Pull Request。具体格式见 [贡献指南](CONTRIBUTING.md)。

遇到失效试玩入口、错误署名或信息变化，请[反馈问题](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=broken-link.yml)。

## 许可

本仓库原创的清单文字与视觉素材以 [CC0 1.0](LICENSE) 贡献至公有领域。链接指向的游戏、代码、图片、商标及其他第三方内容仍遵循各自的许可与权利声明；收录不改变它们的授权。
