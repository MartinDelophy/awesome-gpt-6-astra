<div align="center">

![Awesome GPT-6 Astra — Games worth playing. Ideas worth building.](assets/banner.svg)

# Awesome GPT-6 Astra

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md) [![LINUX DO](https://img.shields.io/badge/LINUX%20DO-Community-f0b73f?style=flat-square)](https://linux.do/) [![Cases: 43](https://img.shields.io/badge/Cases-43-58a6ff?style=flat-square)](https://astragames.aigccreative.com/)

**收集用 GPT-6 Astra 制作的有趣游戏。**

关注好玩的点子、可体验的作品，以及能启发下一位创作者的开发过程。

[English](README.md) · **简体中文** · [日本語](README.ja.md) · [한국어](README.ko.md)<br>
[Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md)<br>
[Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md) · [Bahasa Indonesia](README.id.md)

[提交游戏](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) · [参与贡献](CONTRIBUTING.md)

</div>

## 从这里开始

目前收录 **43 个游戏与互动作品**：三国领土策略、木锁拆解与华容道、半流体水果合成、单键飞行、魔毯战斗、五关弹幕射击、海岛电网塔防、荒野生存、水下捕鱼、寿司店经营与海岛种植、海湾卡丁车竞速、鹈鹕海岸骑行、桌面玩具的 3D 改编、3D 家居装修，以及轨道花园。点击作品名称可打开试玩或源码运行说明。

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

- **[Stick Fighter](https://stick-fighter-production.up.railway.app/)** — 仍在开发中的火柴人格斗游戏，包含拳脚连招、上勾拳、飞镖和格挡；提供电脑陪练及在线、好友模式入口。
  - 作者: [Dwayne](https://x.com/CtrlAltDwayne)
  - 平台: 桌面浏览器，键盘操作；无需登录即可进入电脑陪练，在线多人及手柄支持未独立测试。
  - GPT-6 Astra: [X](https://x.com/CtrlAltDwayne/status/2097499157967818780) — 作者明确表示使用 GPT-6 Astra 制作这款多人格斗游戏，并说明作品仍在开发中。
  - 预览: ![Stick Fighter — 实机画面](assets/screenshots/stick-fighter/gameplay.jpg)

- **[Gogh Strike · Paint Clash](https://gogh-strike.surge.sh/)** — 梵高画作风格的第一人称颜料对战，包含六位艺术家、专属武器及率先获得 20 分的赛制。
  - 作者: [Peter Gostev](https://x.com/petergostev)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/petergostev/status/2096015315209449578) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/gogh-strike/SOURCE.md).
  - 预览: ![Gogh Strike · Paint Clash — 实机画面](assets/screenshots/gogh-strike/gameplay.jpg)

- **[ASTEROIDS · Deepfield](https://asteroids-deepfield-cockpit.dan200200.chatgpt.site/)** — 驾驶小行星射击座舱，使用四向摄像头、雷达、双炮与惯性飞行。
  - 作者: [Eyes Wide Open](https://x.com/DantesClown)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/DantesClown/status/2096085439052452064) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/asteroids-deepfield/SOURCE.md).
  - 预览: ![ASTEROIDS · Deepfield — 实机画面](assets/screenshots/asteroids-deepfield/gameplay.jpg)

- **[BLACKWATER · Silent Harbor](https://blackwater-roan.vercel.app/)** — 潜入雨夜货运港口的战术 FPS，包含精细步枪、战斗 HUD 和九名敌人。
  - 作者: [hiraeth](https://x.com/WoahWurdz)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/WoahWurdz/status/2095958882732355908) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/blackwater/SOURCE.md).
  - 开发资料: [GitHub](https://github.com/Hiraeth010/blackwater)
  - 预览: ![BLACKWATER · Silent Harbor](assets/screenshots/blackwater/gameplay.jpg)

- **[Cinderfall · Fire, Shadow & Steel](https://rogue-omega.vercel.app/)** — 四位英雄的奇幻对决竞技场，包含六项职业技能和单人 AI 对战，也提供在线房间。
  - 作者: [JUMPERZ](https://x.com/jumperz)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/jumperz/status/2096600055301984738) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/cinderfall/SOURCE.md).
  - 预览: ![Cinderfall · Fire, Shadow & Steel](assets/screenshots/cinderfall/gameplay.jpg)

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

- **[二凤字阵 / Erfeng Glyph Formation](https://2feng.jay6697117.deno.net/)** — 将汉字拼字与塔防结合，采用水墨界面并包含角色养成。
  - 作者: [SteveZhang / jay6697117](https://github.com/jay6697117) · [X](https://x.com/stevezh10058543)
  - 平台: 浏览器，需 Google 登录；本次仅核对登录门槛，玩法依据作者实机截图。作者提示微信内访问时需在 Chrome 完成授权。
  - GPT-6 Astra: [Issue #48](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/48) — 作者说明： GPT-6 Astra 完成游戏逻辑、UI 布局优化和游戏美术资产生成。
  - 预览: ![二凤字阵 / Erfeng Glyph Formation](https://github.com/user-attachments/assets/f237391f-1924-4607-b2a7-924cdab1dbc4)

### 策略与模拟

塔防、卡牌策略、经营建造与模拟沙盒。

- **[Dwellcraft · 住进想象](https://dwellcraft.vercel.app/)** — 从家具库拖入物件，自由装修三个住宅，调整材质与光照，再以第一人称走进自己的设计；支持本机存档和自有 GLB 模型导入。
  - 作者：[Ryan-fm](https://github.com/Ryan-fm)。
  - 平台：支持 WebGL 的现代桌面浏览器，中英文界面；免费，无需登录或 API Key。作品和导入模型保存在当前浏览器。已接入 WebXR 操作，Quest 真机验收仍待完成。
  - 模型参与：[开发记录](https://github.com/Ryan-fm/Dwellcraft/blob/main/docs/DEVELOPMENT.md) — 通过多轮 Codex 协作完成场景规划、代码、家具摆放、材质、双语界面与测试；具体 GPT-6 Astra 归因等待创作者确认。
  - 开发资料：[源码与运行说明](https://github.com/Ryan-fm/Dwellcraft) · [设计计划](https://github.com/Ryan-fm/Dwellcraft/blob/main/docs/scene-design/development-plan.md) · [素材许可](https://github.com/Ryan-fm/Dwellcraft/blob/main/docs/ASSETS.md) · 技术：React、TypeScript、Babylon.js、Vinext/Vite。
  - 预览：![Dwellcraft 实际装修工作台：已布置家具的 3D 户型、可拖放家具库，以及材质和光照设置。](https://raw.githubusercontent.com/Ryan-fm/Dwellcraft/main/docs/screenshots/editor-en.png)

- **[Little Kingdom Chess / 작은 왕국 체스](https://little-kingdom-chess.echo3042.chatgpt.site/)** — 在可旋转的 3D 棋盘上与电脑下国际象棋，包含微缩角色、棋谱与悔棋。
  - 作者: [에코_eco](https://x.com/echo3042)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/echo3042/status/2096123409029886250) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/little-kingdom-chess/SOURCE.md).
  - 预览: ![Little Kingdom Chess / 작은 왕국 체스 — 实机画面](assets/screenshots/little-kingdom-chess/gameplay.jpg)

- **[JUNK RUN](https://junk-run.pages.dev/)** — 用废料零件组装无动力小车，再依靠重力冲下山坡；从第一人称工坊开始。
  - 作者: [TheLabGuy](https://x.com/hermesailab)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/hermesailab/status/2097508053901840850) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/junk-run/SOURCE.md).
  - 预览: ![JUNK RUN — 实机画面](assets/screenshots/junk-run/gameplay.jpg)

- **[Spy or Lie](https://spyorlie.com/)** — 与电脑对战的六边形策略桌游：放置隐藏身份的特工，通过虚张声势和包围敌方群组触发连锁占领。
  - 作者: [Nate Lorenzen](https://x.com/NateLorenzen)
  - 平台: 浏览器，英文界面；已无需登录或付费完成玩家落子及电脑回应。
  - GPT-6 Astra: [X](https://x.com/NateLorenzen/status/2097504974683152559) — 作者称 Astra 将其设计的游戏一次生成了可玩演示；这是作者陈述，未独立审计开发过程。
  - 预览: ![Spy or Lie — 实机画面](assets/screenshots/spy-or-lie/gameplay.jpg)

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

- **[No Moat](https://no-moat.petergyang.chatgpt.site/)** — 创业题材的肉鸽卡牌游戏：招募团队，打出卡牌应对抄袭者、程序错误和云服务账单。
  - 作者: [Peter Yang](https://x.com/petergyang)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/petergyang/status/2096297378584375672) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/no-moat/SOURCE.md).
  - 预览: ![No Moat](assets/screenshots/no-moat/gameplay.jpg)

- **[The Free Game](https://vale-dos-vinhedos.lucas579686.chatgpt.site/)** — 修路、培养工人、搭建生产链，在细致的 3D 中世纪村庄里经营建设。
  - 作者: [Lucas Marques, from Shiva](https://x.com/LucasMarquesSv)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/LucasMarquesSv/status/2096772160404504583) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/the-free-game/SOURCE.md).
  - 开发资料: [GitHub](https://github.com/LucasMarquesShiva/the-free-game)
  - 预览: ![The Free Game](assets/screenshots/the-free-game/gameplay.jpg)

### RPG 与冒险

角色扮演、探索、叙事冒险与互动故事。

- **[Lumbridge / Elderwood Realms](https://elderwood-realms.rohannvarma.chatgpt.site/)** — 复古多人冒险，包含共享世界、技能、采集和战斗，可使用游客身份进入。
  - 作者: [Rohan Varma](https://x.com/TheRohanVarma)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/TheRohanVarma/status/2096744577332068549) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/lumbridge/SOURCE.md).
  - 预览: ![Lumbridge / Elderwood Realms — 实机画面](assets/screenshots/lumbridge/gameplay.jpg)

- **[Silent Meridian / 静默子午线](https://silent-meridian.stackloom.org/)** — 一款包含四章、十三道谜题的氛围叙事解谜游戏：在“现在”与“回声”间对照线索、收集证据，解开停在 00:17 的观测站之谜。
  - 作者: [stackloomdev](https://github.com/stackloomdev)
  - 平台: 桌面与手机浏览器；中英文。可直接在线免费游玩，无需登录、安装或 API Key；可选 WebGL 视效，不支持时保留原始插画。
  - GPT-6 Astra: [开发记录](https://github.com/stackloomdev/silent-meridian/blob/main/docs/CREATION.md) — 在 Codex 中多轮协作，参与故事、谜题、中英文文案、代码、程序化 3D 视效及测试。
  - 开发资料: [源码与运行说明](https://github.com/stackloomdev/silent-meridian) · [美术来源](https://github.com/stackloomdev/silent-meridian/blob/main/docs/ART.md) · 技术: JavaScript, WebGL, Web Audio.
  - 预览: ![静默子午线实机画面：观测穹顶中的立体青铜机关、线索标记、现在与回声切换按钮和调查手记。](assets/screenshots/silent-meridian/gameplay.png)

- **[热血归来 · 八荒幻世 / Mir176 Dragon Warrior](https://mir176-dragon-warrior.geekcatxx.chatgpt.site/)** — 传奇风格动作 RPG，包含战士、法师、道士三职业、装备、副本战斗与自动战斗。
  - 作者: [知识猫AI实验室](https://x.com/GeekCatX)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/GeekCatX/status/2097530887558865115) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/mir176/SOURCE.md).
  - 预览: ![热血归来 · 八荒幻世 / Mir176 Dragon Warrior](assets/screenshots/mir176/gameplay.jpg)

- **[Zork · The Great Underground Empire](https://zork-underground-empire.netlify.app/)** — Zork 的非官方 3D 改编，以第一人称探索地下世界，结合谜题、战斗与冒险日志。
  - 作者: [Ethan Mollick](https://x.com/emollick)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/emollick/status/2096047660662722620) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/zork/SOURCE.md).
  - 预览: ![Zork · The Great Underground Empire](assets/screenshots/zork/gameplay.jpg)

### 平台跳跃与竞速

跑酷、平台闯关、赛车，以及考验路线与操作的游戏。

- **[STORM RACE](https://storm-race.vercel.app/)** — 迷你四驱车竞速，包含零件拆解车库、加速和晴天、雨天、暴风雨赛道变化。
  - 作者: [BubuAi](https://x.com/BubuStd)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/BubuStd/status/2096587056755638553) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/storm-race/SOURCE.md).
  - 预览: ![STORM RACE — 实机画面](assets/screenshots/storm-race/gameplay.jpg)

- **[FANG STARLIGHT RUN](https://fang-starlight-run.yosshy666.chatgpt.site/)** — 操控小狼穿越三个星夜横版关卡，利用二段跳与冲刺收集金币和星之碎片。
  - 作者: [FANGプラス最強伝説🐺](https://x.com/FANGsaikyou)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/FANGsaikyou/status/2096192022596194588) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/fang-starlight-run/SOURCE.md).
  - 预览: ![FANG STARLIGHT RUN — 实机画面](assets/screenshots/fang-starlight-run/gameplay.jpg)

- **[Blue Bajaj Rally](https://bajaj.guzo.tech/)** — 驾驶三轮 Bajaj 在埃塞俄比亚风格的高地赛道上，与五名电脑车手竞速或挑战计时。
  - 作者: [Guzo Technologies](https://x.com/guzotech)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/guzotech/status/2096209787864088638) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/blue-bajaj-rally/SOURCE.md).
  - 预览: ![Blue Bajaj Rally — 实机画面](assets/screenshots/blue-bajaj-rally/gameplay.jpg)

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

- **[零界深潜 / ABYSS PROTOCOL](https://abyss-descent.zecoba.workers.dev/)** — 只靠左右移动，在 3D 深井中踩着移动、脆裂与相位平台不断下潜，躲避激光和锯刃，收集晶体与生存芯片。
  - 作者: [chat01.ai](https://linux.do/u/bandaot)
  - 平台: 桌面浏览器，中文界面，A/D 或左右方向键操作；已验证无需登录或付费即可开始，移动端未测试。
  - 模型参与：[Chat01](https://chat01.ai/en/chat/01M221KFTPTBQV5ARQWJM7P86Y) — 分享记录标注 GPT-6 Pro，展示了游戏生成与多轮修改；页面未明确标注 GPT-6 Astra。
  - 开发资料：[HTML](https://files.chat01.ai/python-generations/9ab8f4f7-425f-4709-b741-7218d87122e6/abyss-descent.html) · [ZIP](https://files.chat01.ai/python-generations/9ab8f4f7-425f-4709-b741-7218d87122e6/abyss-descent-complete.zip)
  - 预览: ![零界深潜 / ABYSS PROTOCOL](assets/screenshots/abyss-protocol/gameplay.jpg)

- **[疾风赛道 / Kart Racing（跑跑卡丁车）](https://qwen3-8-test.vercel.app/)** — 通过漂移积攒氮气，在三圈竞速中使用道具争夺名次；当前游戏名为“疾风赛道”，提供 2–4 人联机入口。
  - 作者: [SteveZhang / jay6697117](https://github.com/jay6697117) · [X](https://x.com/stevezh10058543)
  - 平台: 浏览器，免费、无需登录；作者提示可能需要 VPN／代理。已验证单人启动，联机未实测。
  - GPT-6 Astra: [Issue #51](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/51) — 作者说明： 第一版使用 Qwen3.8 Max，第二版由 Astra 全面重构。
  - 预览: ![疾风赛道 / Kart Racing（跑跑卡丁车）](https://github.com/user-attachments/assets/015e0ca1-7032-4d0e-9391-ad3f40d84227)

### 实验玩法与多人游戏

难以归类的新玩法、联机对战与合作体验。

- **[ASTRA Arcade](https://astra-arcade.antonioleivag.chatgpt.site/)** — 集山地拉力、滑雪、反重力竞速等六款浏览器游戏于一体的街机厅；按一个合集收录。
  - 作者: [Antonio Leiva](https://x.com/antonioleivag)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/antonioleivag/status/2096509898481651770) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/astra-arcade/SOURCE.md).
  - 预览: ![ASTRA Arcade — 实机画面](assets/screenshots/astra-arcade/gameplay.jpg)

- **[Chao Party](https://chao.party/)** — 非官方 Chao Garden 多人同人游戏：选择索尼克角色，探索花园并与 Chao 互动。
  - 作者: [Hank](https://x.com/h4nkdog)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/h4nkdog/status/2097308970431987857) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/chao-party/SOURCE.md).
  - 预览: ![Chao Party — 实机画面](assets/screenshots/chao-party/gameplay.jpg)

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

- **[Jelly Baby](https://jelly.scottsun.io/)** — 阳光木桌上的软体果冻游乐场，可以跳跃、拉伸，体验秋千和蹦床。
  - 作者: [Scott](https://x.com/scottstts)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/scottstts/status/2096364764054131119) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/jelly-baby/SOURCE.md).
  - 开发资料: [GitHub](https://github.com/scottstts/Jelly-Baby)
  - 预览: ![Jelly Baby](assets/screenshots/jelly-baby/gameplay.jpg)

- **[泡泡坦克大作战联机版 / Toon Tank Arena](https://toon-tank-arena.jay6697117.deno.net/)** — 用弹跳炮弹与强化道具守护彩虹核心，提供单人、双人同屏合作与在线对战模式的卡通坦克竞技场。
  - 作者: [SteveZhang / jay6697117](https://github.com/jay6697117) · [X](https://x.com/stevezh10058543)
  - 平台: 浏览器，免费、无需登录；作者提示可能需要 VPN／代理。已验证单人启动，联机未实测。
  - GPT-6 Astra: [Issue #52](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/52) — 作者说明： 第一版由 GPT-6 Astra Pro 完成，后续由 Codex 中的 GPT-6 Astra 优化。
  - 预览: ![泡泡坦克大作战联机版 / Toon Tank Arena](https://github.com/user-attachments/assets/713d44f3-a77c-452c-ba6d-1231882dc670)

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
