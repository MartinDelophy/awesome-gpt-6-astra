<div align="center">

![Awesome GPT-6 Astra — Games worth playing. Ideas worth building.](assets/banner.svg)

# Awesome GPT-6 Astra

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md) [![LINUX DO](https://img.shields.io/badge/LINUX%20DO-Community-f0b73f?style=flat-square)](https://linux.do/) [![Cases: 84](https://img.shields.io/badge/Cases-84-58a6ff?style=flat-square)](https://astragames.aigccreative.com/)

**收集用 GPT-6 Astra 制作的有趣游戏。**

关注好玩的点子、可体验的作品，以及能启发下一位创作者的开发过程。

[English](README.md) · **简体中文** · [日本語](README.ja.md) · [한국어](README.ko.md)<br>
[Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md)<br>
[Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md) · [Bahasa Indonesia](README.id.md)

[提交游戏](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) · [参与贡献](CONTRIBUTING.md)

</div>

## 从这里开始

目前收录 **84 个游戏与互动作品**：三国领土策略、木锁拆解与华容道、半流体水果合成、程序化城市建造 2048、单键飞行、魔毯战斗、五关弹幕射击、海岛电网塔防、荒野生存、水下捕鱼、寿司店经营与海岛种植、海湾卡丁车竞速、鹈鹕海岸骑行、桌面玩具的 3D 改编、3D 家居装修，以及轨道花园。点击作品名称即可直接进入在线游戏。

目录更新：**2026-09-11**。模型使用信息依据作者或投稿者的说明，未确认内容在具体条目中标注。此日期表示目录维护时间，不代表当天重新试玩了所有游戏。

最新新增：[10 款来自作者博客、游戏社区与 X 的在线游戏](docs/browser-games-2026-09-11.md)，附实机截图与入口核验。[上一批 10 款](docs/direct-play-x-games-2026-09-10.md) · [此前新增的 16 款](docs/x-high-traffic-games-2026-09-09.md)。

- **想玩游戏：** 从下面的分类寻找你喜欢的玩法。
- **做了游戏：** [提交你的作品](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml)，附上在线游戏直达入口、实机截图，以及使用 GPT-6 Astra 的说明。
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

- **[Stadium Elite — El Clásico](https://stadium-elite.mindblown.ai/)** — 在 3D 球场进行巴塞罗那对皇家马德里的 11 人制比赛，传球、射门并切换球员。
  - 作者: [Mindblown / @mind](https://mindblown.ai/@mind)
  - 平台: 桌面浏览器；键盘与鼠标，无需登录。
  - GPT-6 Astra: [核验记录](assets/screenshots/stadium-elite/SOURCE.md) — 用户提供的 Mindblown 帖子注明 Three.js 与 GPT-6 Astra。
  - 预览: ![Stadium Elite — El Clásico: 在 3D 球场进行巴塞罗那对皇家马德里的 11 人制比赛，传球、射门并切换球员。](assets/screenshots/stadium-elite/gameplay.png)

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

- **[Oz Breakdance](https://satriodewantono.com/breakdance/)** — 拖动布娃娃舞者的手脚和头部命中对应目标，获得分数并延长霹雳舞回合时间。
  - 作者: [Satrio](https://x.com/satrio_d)
  - 平台: 桌面浏览器，鼠标操作；已无需登录开始计分回合。
  - GPT-6 Astra: [X](https://x.com/satrio_d/status/2096022866097758500) — 作者说明 Astra 改进了已有的霹雳舞游戏及其视觉呈现。 [核验记录](assets/screenshots/breakdance/SOURCE.md).
  - 预览: ![限时霹雳舞场地中的布娃娃舞者、脚部目标与计分界面。](assets/screenshots/breakdance/gameplay.jpg)

- **[Astral War](https://astralwar.io/)** — 二战题材浏览器 FPS，可选择士兵或僵尸外观、调整武器配置，并提供机器人训练与大厅模式。
  - 作者: [Rishi](https://x.com/0xRishi)
  - 平台: 桌面浏览器，键鼠操作；已无需登录进入机器人训练，未验证多人联机和手柄支持。
  - GPT-6 Astra: [X](https://x.com/0xRishi/status/2096079660605997264) — Rishi 说明使用 Astra、Three.js、Meshy 与 ElevenLabs 制作 Astral War；当前网站另有 Vesper 署名，详见核验记录。 [核验记录](assets/screenshots/astral-war/SOURCE.md).
  - 预览: ![Astral War 运行中的武器视角与战场操作界面。](assets/screenshots/astral-war/gameplay.jpg)

- **[FLOP CLUB](https://bubucn.com/ai-model-evals/flop-club/game/index.html)** — 从三种高度的跳台起跳，完成翻转和转体，对准漂浮圆环入水，挑战更高评分。
  - 作者: [BubuAi](https://x.com/BubuStd)
  - 平台: 浏览器；独立游戏页无需登录或下载，2026-09-09 已开始跳水回合；支持键盘，说明提供触屏操作。
  - GPT-6 Astra: [X](https://x.com/BubuStd/status/2096402783805354091) — 作者说明使用 Astra Pro 与 Three.js，通过一条提示词制作。 [核验记录](assets/screenshots/flop-club/SOURCE.md).
  - 开发资料: [作品介绍](https://bubucn.com/zh/ai-model-evals/flop-club)
  - 预览: ![跳水者、高台、水面目标圆环与入水操作界面。](assets/screenshots/flop-club/gameplay.jpg)

- **[Vector Dive — Beyond the Signal](https://vector-dive.openai.chatgpt.site/)** — 驾驶飞行器穿越逐圈加速的霓虹线框赛道，利用加速与相位移动坚持更久。
  - 作者: [Thomas Ricouard](https://x.com/Dimillian)
  - 平台: 桌面浏览器；已无需登录开始计分飞行，WASD 飞行、空格加速、Shift 相位移动。
  - GPT-6 Astra: [X](https://x.com/Dimillian/status/2097188900888322323) — 作者说明 Astra 根据霓虹、合成器波与线框视觉要求和概念图完成游戏及音乐。 [核验记录](assets/screenshots/vector-dive/SOURCE.md).
  - 预览: ![Vector Dive 的霓虹飞行赛道、玩家飞船与状态界面。](assets/screenshots/vector-dive/gameplay.jpg)

- **[Harbor Skirmish](https://gpt6astra-game.vercel.app/)** — 在海边小镇抵御一波波兔子入侵，切换三种武器，利用屋顶路线、冲刺与钩索周旋。
  - 作者: [OpenDesign](https://x.com/OpenDesignHQ)
  - 平台: 桌面浏览器；键盘与鼠标，无需登录或下载。
  - GPT-6 Astra: [作者说明](https://x.com/OpenDesignHQ/status/2097635757917983223) — OpenDesign 在双模型对比帖中明确将此 Three.js 游戏标为 GPT-6 Astra 版本。 [核验记录](assets/screenshots/harbor-skirmish/SOURCE.md).
  - 预览: ![海滨小镇中的第一人称步枪视角、靠近的兔子、波次计数与武器操作栏。](assets/screenshots/harbor-skirmish/gameplay.jpg)

- **[UNDERGROUND — 地下拳场](https://iamsonic.net/2026/mini-games/underground-boxing.html)** — 在地下 3D 拳台进行三回合限时对决，平衡出拳、格挡、闪避与体力消耗。
  - 作者: [Sonic的奇思妙想](https://x.com/sonic0828)
  - 平台: 桌面浏览器；WASD 移动，J/K 出拳，L 格挡，空格闪避，无需登录或下载。
  - GPT-6 Astra: [作者说明](https://x.com/sonic0828/status/2097601232877781344) — 作者合集帖明确说明使用 GPT-6 Astra 生成小游戏，其中地下拳击回复提供了此版本链接。 [核验记录](assets/screenshots/underground-boxing/SOURCE.md).
  - 开发资料: [作者发布链接](https://x.com/sonic0828/status/2097601584410796401)
  - 预览: ![两名拳手在地下灯光拳台交战，顶部显示回合计时、生命及体力。](assets/screenshots/underground-boxing/gameplay.jpg)

- **[街头小子 · Urban Champion 3D](https://iamsonic.net/2026/mini-games/urban-champion.html)** — 在日落街区交替使用高低拳与格挡，将对手逼入井口，同时留意从楼上掉落的花盆。
  - 作者: [Sonic的奇思妙想](https://x.com/sonic0828)
  - 平台: 桌面浏览器；A/D 移动，J/K 出拳，U/I 格挡，空格闪避，无需登录。
  - GPT-6 Astra: [作者说明](https://x.com/sonic0828/status/2097601232877781344) — 作者的 GPT-6 Astra 合集附有独立发布回复，指向这款街头格斗游戏。 [核验记录](assets/screenshots/urban-champion-3d/SOURCE.md).
  - 开发资料: [作者发布链接](https://x.com/sonic0828/status/2097601861658587376)
  - 预览: ![蓝红两名格斗者在 Sunset Mart 门外对拳，上方显示回合计时与耐力条。](assets/screenshots/urban-champion-3d/gameplay.jpg)

- **[零点街区 · 弹壳特攻队 3D](https://iamsonic.net/2026/mini-games/shells-3d/play.html)** — 在城市围攻中坚持三分钟，以自动射击配合走位躲避敌群，拾取经验并选择升级能力。
  - 作者: [Sonic的奇思妙想](https://x.com/sonic0828)
  - 平台: 浏览器；WASD 或拖动移动，自动瞄准，无需登录或下载。
  - GPT-6 Astra: [作者说明](https://x.com/sonic0828/status/2097601232877781344) — 作者在合集发布帖中说明使用 GPT-6 Astra，并在弹壳特攻队 3D 的独立回复中给出此版本链接。 [核验记录](assets/screenshots/zero-district-shells-3d/SOURCE.md).
  - 开发资料: [作者发布链接](https://x.com/sonic0828/status/2097602391122264310)
  - 预览: ![幸存者在城市街道自动射击周围敌人，顶部显示已击败 14 个敌人、剩余 166 秒。](assets/screenshots/zero-district-shells-3d/gameplay.jpg)

- **[ASCII DISTRICT](https://ascii-district.vercel.app/)** — 在由 ASCII 字符构成的第一人称竞技场迎战病毒敌人，利用冲刺、跳跃和滑行应对连续波次。
  - 作者: [Acker Code](https://x.com/acker_code)
  - 平台: 桌面浏览器；键盘与鼠标，无需登录，点击场景捕获鼠标，Esc 释放。
  - GPT-6 Astra: [作者说明](https://x.com/acker_code/status/2097542957070975286) — 作者明确说明使用 Codex 与 GPT-6 Astra 制作这款 ASCII 字符画射击游戏。 [核验记录](assets/screenshots/ascii-district/SOURCE.md).
  - 预览: ![ASCII 庭院中的病毒敌人向玩家靠近，步枪 HUD 显示开火后剩余 29 发子弹。](assets/screenshots/ascii-district/gameplay.jpg)

- **[Aura Farming: Unbothered](https://www.aigameshare.com/games/aura-farming-game)** — 让跳舞的水豚在龙舟船头保持平衡，逆着波浪调整重心，在 40 秒内完成六个动作。
  - 作者：[nilni / @nil](https://www.aigameshare.com/profile/nil)
  - 平台：桌面浏览器；点击 Play 即可免费开玩，无需登录，账号功能可选。
  - GPT-6 Astra：[作者发布页](https://www.aigameshare.com/games/aura-farming-game) — 作者注明使用 GPT-6 Astra 与 Codex 制作游戏，并列出 Blender、Three.js、ImageGen 和 WebAudio。 [核验记录](assets/screenshots/aura-farming/SOURCE.md)。
  - 预览：![水豚在龙舟上跳舞，画面显示重心、左右倾斜与稳住按钮，以及六个动作的挑战进度。](assets/screenshots/aura-farming/gameplay.jpg)

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

- **[CityMaker / 城市营造](https://citymaker.0to1app.com)** — 在 4×4 街区上玩 2048：合并相同建筑，沿十一级建筑阶梯从传统民居成长为城市天际线，收录十二座城市，视角可按 45° 逐级旋转。
  - 作者：[Derek Wang](https://github.com/derek-wangpch)
  - 平台：支持 WebGL 的桌面与移动浏览器；提供英文、简体中文与繁体中文界面。免费，无需登录或 API Key；各城市进度分别保存在当前浏览器，并可添加到 iOS 主屏幕。
  - GPT-6 Astra：[制作记录](https://github.com/derek-wangpch/OpenCityMaker/blob/master/docs/CREATION.md) — 作者说明 132 个建筑模型的程序化几何均由 GPT-6 Astra 生成，流程为多视角资料检索、先定轮廓体块再加细节、并对照参考图逐轮校验；并非一次性生成测试。
  - 开发资料：[源码与运行说明](https://github.com/derek-wangpch/OpenCityMaker) · [验收记录](https://github.com/derek-wangpch/OpenCityMaker/blob/master/QA.md) · 技术：React、TypeScript、Vite 与 Three.js；132 个建筑模型均为原创程序化几何。
  - 预览：![CityMaker 实机画面：4×4 棋盘上的低多边形香港建筑，旁边是分数、城市列表与旋转控制。](assets/screenshots/citymaker/gameplay.png)

- **[Bonkshot](https://bonkshot.com/)** — 拖动弹弓发射小角色，击中木制支撑，让结构倒塌并清除目标。
  - 作者: [edmund5](https://x.com/edmund5)
  - 平台: 浏览器；拖动瞄准、松开发射，无需登录即可玩，Google 登录为可选功能。
  - GPT-6 Astra: [作者说明](https://x.com/edmund5/status/2097603093819261002) — 作者说明游戏使用 GPT-6 Astra 与 Three.js 制作，背景音乐由 Suno 生成。 [核验记录](assets/screenshots/bonkshot/SOURCE.md).
  - 预览: ![草原首关发射后的局面：木塔部分倒塌，剩余一个目标，得分 2,200。](assets/screenshots/bonkshot/gameplay.jpg)

- **[Greenhouse Escape Room: The Last Seed](https://www.aigameshare.com/games/greenhouse-escape-room)** — 探索被风暴封闭的温室，通过修复铜水管、摆放植物与反射光线等谜题，救出最后一颗种子。
  - 作者：[nilni / @nil](https://www.aigameshare.com/profile/nil)
  - 平台：浏览器；点击 Play 后选择 Begin，免费且无需登录，支持中英文界面。
  - GPT-6 Astra：[作者发布页](https://www.aigameshare.com/games/greenhouse-escape-room) — 作者将 GPT-6 Astra 与 Codex 列为开发工具，并注明使用 ImageGen 和 WebAudio。 [核验记录](assets/screenshots/greenhouse-escape-room/SOURCE.md)。
  - 预览：![温室密室逃脱的 Waterworks 房间，展示九格水路装置、计时器与物品栏。](assets/screenshots/greenhouse-escape-room/gameplay.jpg)

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

- **[AGI of Empires — The Compute Wars](https://agiofempires.com/)** — 收集资金与 GPU，建造数据中心和军队，抢先完成 ASI 研究或摧毁其他 AI 实验室的总部。
  - 作者: [timour kosters](https://x.com/timourxyz)
  - 平台: 桌面浏览器，免费讽刺题材即时战略游戏；已无需登录开始电脑对局，并观察到资源采集。
  - GPT-6 Astra: [X](https://x.com/timourxyz/status/2096662786692776293) — 作者说明与 Astra 用两天时间开发了这款受帝国时代启发的游戏。 [核验记录](assets/screenshots/agi-of-empires/SOURCE.md).
  - 预览: ![AGI of Empires 的即时战略战场、资源统计与总部。](assets/screenshots/agi-of-empires/gameplay.jpg)

- **[Atlas Go](https://atlas-go.borisxp.chatgpt.site/)** — 在城市街道网络和特殊图形棋盘上对弈围棋，支持本地轮流操作并提供好友对局入口。
  - 作者: [Boris Power](https://x.com/BorisMPower)
  - 平台: 浏览器；本地棋盘无需登录即可打开，未验证在线好友对局。
  - GPT-6 Astra: [X](https://x.com/BorisMPower/status/2096784808399843582) — 作者说明这款支持任意图棋盘的多人围棋游戏由 Astra 根据一条提示词生成。 [核验记录](assets/screenshots/atlas-go/SOURCE.md).
  - 预览: ![Atlas Go 蜂窝图棋盘上的黑白棋子。](assets/screenshots/atlas-go/gameplay.jpg)

- **[Ironwood — The Art of Industry](https://ironwood.sparkles.dev/)** — 采集原料，为机器供能并连接传送带，将林间空地发展成持续运转的工厂。
  - 作者: [Dan](https://x.com/aidaniil)
  - 平台: 桌面浏览器；可免登录进入游客教程，保存进度需要登录；未独立验证多人联机。
  - GPT-6 Astra: [X](https://x.com/aidaniil/status/2096426970930106530) — 作者说明与弟弟使用 Astra、Blender MCP 和 Cloudflare Durable Objects 制作，灵感来自幸福工厂与围攻。 [核验记录](assets/screenshots/ironwood/SOURCE.md).
  - 预览: ![Ironwood 的工厂机器、传送带和资源管理教程。](assets/screenshots/ironwood/gameplay.jpg)

- **[DUST FRONT](https://dust-front.mustafaakin.dev/)** — 单人即时战略：建设基地、占领据点，指挥地面与空中部队作战。
  - 作者: [Mustafa Akın](https://x.com/mustafaakin)
  - 平台: 桌面浏览器；键盘与鼠标，无需登录。
  - GPT-6 Astra: [核验记录](assets/screenshots/dust-front/SOURCE.md) — 用户提供的 Mustafa Akın 帖子说明使用 ChatGPT Astra 与 Blender MCP，包含素材生成在内约 40 次提示。
  - 预览: ![DUST FRONT: 单人即时战略：建设基地、占领据点，指挥地面与空中部队作战。](assets/screenshots/dust-front/gameplay.png)

- **[前线指令 / Frontline Command](https://fluffy-biscotti-dad318.netlify.app/)** — 在现代战争题材的即时战略游戏中建设基地、争夺资源区，指挥坦克、步兵、飞机与无人机对抗电脑，并通过间谍和情报系统获取优势。
  - 作者: [嘟啊嘟](https://x.com/HDLhN783wtLkpPR)
  - 平台: 桌面浏览器，中文界面，鼠标与键盘操作；已开始单机对局，无需登录、付费或安装。
  - GPT-6 Astra: [X](https://x.com/HDLhN783wtLkpPR/status/2097321360641122393) — 作者在所链接的帖子中说明使用“GPT Astra”制作这款即时战略游戏；未注明具体模型版本和详细开发流程。
  - 相关资料: [投稿](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/66) · [核验记录（英文）](assets/screenshots/frontline-command/SOURCE.md)
  - 预览: ![前线指令实机画面：基地、三辆已选坦克与发电站放置操作；v0.8，拍摄于 2026-09-09。](assets/screenshots/frontline-command/gameplay.jpg)

- **[Coin Pusher Roguelite: Mintfall](https://www.aigameshare.com/games/coin-pusher-roguelite-mintfall)** — 在 3D 推币机中瞄准投币，组合特殊硬币与遗物，用有限投币次数完成六轮分数目标。
  - 作者：[nilni / @nil](https://www.aigameshare.com/profile/nil)
  - 平台：浏览器；点击 Play 免费开玩，无需登录，账号存档为可选功能。
  - GPT-6 Astra：[作者发布页](https://www.aigameshare.com/games/coin-pusher-roguelite-mintfall) — 作者明确列出 GPT-6 Astra、GPT-5.6 Sol 与 Codex，未逐项区分各模型的贡献。 [核验记录](assets/screenshots/mintfall/SOURCE.md)。
  - 预览：![Mintfall 第一轮的 3D 推币盘，显示 33 分、44 次投币机会及特殊硬币操作。](assets/screenshots/mintfall/gameplay.jpg)

- **[Westward — The Oregon Trail](https://biswaz.me/westward/)** — 带领马车队沿俄勒冈小道西行，分配食物、安排狩猎与修理，并处理旅途中的选择。
  - 作者：[Biswas](https://x.com/bis_waz)
  - 平台：桌面浏览器；可使用预填的虚构队员直接出发，无需登录或安装。
  - GPT-6 Astra：[X](https://x.com/bis_waz/status/2098023593468907747) — Biswas 明确说明使用 GPT-6 Astra 制作这个现代 3D 版 Oregon Trail，并提供游戏入口。 [核验记录](assets/screenshots/westward/SOURCE.md)。
  - 预览：![马车与牛沿通往 Kansas River 的道路前进，展示 25 英里进度及远征物资面板。](assets/screenshots/westward/gameplay.jpg)

### RPG 与冒险

角色扮演、探索、叙事冒险与互动故事。

- **[The Sunshard](https://mindblown.ai/games/the-sunshard)** — 体素风动作 RPG：使用火花弹与日光爆发对抗 Hollowborn，闪现躲避危险，唤醒太阳之门。
  - 作者: [Mindblown / @mind](https://mindblown.ai/@mind) · [Mindblown](https://mindblown.ai/) · [X](https://x.com/mindblown_ai)
  - 平台: 桌面浏览器；键盘与鼠标，无需登录。
  - GPT-6 Astra: 本作模型参与待确认；用户提供的作者回复同意收录，但未注明模型或具体作用。 [核验记录](assets/screenshots/the-sunshard/SOURCE.md).
  - 预览: ![The Sunshard — Golden Hollow](assets/screenshots/the-sunshard/gameplay.png)

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

- **[The Simpsons: Hit & Run — Browser Recreation](https://vheissu.github.io/hit-and-run-web/)** — 在非官方浏览器重制版中步行或驾车探索春田镇，体验任务、街道交通与警察追逐。
  - 作者: [Dwayne](https://x.com/CtrlAltDwayne)
  - 平台: 桌面浏览器；首次需加载较多素材，已无需登录进入首个任务，未验证完整战役。
  - GPT-6 Astra: [X](https://x.com/CtrlAltDwayne/status/2096872309936287887) — 作者说明使用 GPT-6 Astra 重建网页版；仓库也注明 Claude 协助过加载工作。原游戏素材仍归各自权利人所有。 [核验记录](assets/screenshots/hit-and-run-web/SOURCE.md).
  - 开发资料: [源码与运行说明](https://github.com/Vheissu/hit-and-run-web)
  - 预览: ![Homer 位于春田镇，画面显示首个任务目标与小地图。](assets/screenshots/hit-and-run-web/gameplay.jpg)

- **[Where the Wind Wanders](https://app.usecrayon.ai/play/a9a3c165-74b3-4ff6-9588-ad97f829ddb5)** — 在阳光下的 2.5D 山谷中沿小径漫游，寻找三封风之信，体验轻松的探索冒险。
  - 作者: [Tushar](https://x.com/TusharXo)
  - 平台: 浏览器游戏，托管于 Crayon；已检查公开作品页与嵌入播放器。
  - GPT-6 Astra: [X](https://x.com/TusharXo/status/2096037482739683574) — Tushar 说明 Astra 参与路径与素材生成，后续发布帖确认使用 Astra、Three.js 与 Crayon 上线可玩版本。 [核验记录](assets/screenshots/crayon-adventure/SOURCE.md).
  - 开发资料: [作者发布帖](https://x.com/TusharXo/status/2096741535891251261)
  - 预览: ![角色探索花草山谷，画面显示风之信收集目标。](assets/screenshots/crayon-adventure/gameplay.jpg)

- **[ALIBI — The Last Light](https://alibi-blackthorn-manor.vercel.app/)** — 在点击式谋杀谜案中调查 Blackthorn 庄园，检查场景并追踪线索，寻找凶手。
  - 作者: [Christos Antonopoulos](https://x.com/Christos_antono)
  - 平台: 浏览器；已无需登录打开可交互的庄园入口，未完整验证后续生成场景。
  - GPT-6 Astra: [X](https://x.com/Christos_antono/status/2096435122669297892) — 作者说明这款生成式侦探游戏共同使用了 GPT Astra 与 H3 Max。 [核验记录](assets/screenshots/alibi-blackthorn-manor/SOURCE.md).
  - 预览: ![庄园入口的可点击大门与调查剧情文字。](assets/screenshots/alibi-blackthorn-manor/gameplay.jpg)

- **[Skyward: The Gathering](https://edge-city-skyward-quests.vercel.app/)** — 探索浮空群岛，在社区之间跳跃和滑翔，并完成居民交付的任务。
  - 作者: [timour kosters](https://x.com/timourxyz)
  - 平台: 桌面浏览器，键鼠操作；已检查任务版页面与操作说明。
  - GPT-6 Astra: [X](https://x.com/timourxyz/status/2096379521926840339) — 作者说明 Astra 制作了带 NPC 和任务的 3D 游戏，群岛灵感来自 Edge City 到访过的地区。 [核验记录](assets/screenshots/skyward-gathering/SOURCE.md).
  - 预览: ![Skyward 的浮空群岛总览与探索、日志操作。](assets/screenshots/skyward-gathering/gameplay.jpg)

- **[Anna & Leo · The Starstone Adventure](https://anna-leo-starstone.vercel.app/)** — 在 Anna 的音乐魔法与 Leo 的超能力之间切换，唤醒旋律花朵并探索奇迹花园。
  - 作者: [Dharma Utomo](https://x.com/dharmautomo)
  - 平台: 浏览器；已无需登录开始首个任务，WASD 移动、空格跳跃、E 使用能力、Tab 切换角色。
  - GPT-6 Astra: [X](https://x.com/dharmautomo/status/2096573649235091967) — 作者说明 GPT-6 Astra 协助制作了这款 3D 冒险，并分享孩子试玩的视频。 [核验记录](assets/screenshots/anna-leo-starstone/SOURCE.md).
  - 预览: ![Anna 与 Leo 的 3D 冒险世界和任务界面。](assets/screenshots/anna-leo-starstone/gameplay.jpg)

- **[The Legend of Deller](https://rain-court-js.umodeler-inc-4323.chatgpt.site/)** — 探索雨雾庇护所，再向地牢进发，运用剑技连段、元素技能和闪避展开冒险。
  - 作者: [UModeler X PicoBerry](https://x.com/UModeler)
  - 平台: 桌面浏览器；键盘与鼠标，无需登录，首次进入需等待 3D 资源加载。
  - GPT-6 Astra: [作者说明](https://x.com/UModeler/status/2097792348407099553) — 作者说明由 PicoBerry 生成素材，再由 GPT-6 Astra 制作围绕这些素材运行的 Three.js 动作 RPG。 [核验记录](assets/screenshots/the-legend-of-deller/SOURCE.md).
  - 开发资料: [作者发布链接](https://x.com/UModeler/status/2097792351129178451)
  - 预览: ![Deller 在喷泉与集市摊位旁闪避移动，下方显示生命、法力及技能栏。](assets/screenshots/the-legend-of-deller/gameplay.jpg)

- **[Dungeon of Astra](https://wavedash.com/games/dungeon-of-astra)** — 招募冒险小队，深入百层地下城，结合剑击、火球与队友职业能力，挑战带永久死亡机制的冒险。
  - 作者: [tonysuri / @tonysurix](https://x.com/tonysurix)
  - 平台: Wavedash 桌面浏览器版；基础游戏无需登录即可开始，另有可选账号功能与付费提前解锁角色。
  - GPT-6 Astra: [作者说明](https://x.com/tonysurix/status/2097873333551616355) — 作者明确说明这款小队地下城游戏使用 GPT-6 Astra 制作。 [核验记录](assets/screenshots/dungeon-of-astra/SOURCE.md).
  - 预览: ![英雄与招募的骑士在地牢第一层施放火球，界面显示队伍生命与小地图。](assets/screenshots/dungeon-of-astra/gameplay.jpg)

- **[Sunlandia — The Forgotten Shore](https://sunlandia.smallweblab.com/)** — 以第一人称探索沉船后的孤岛，调查线索、解开环境谜题，并寻找通往灯塔的道路。
  - 作者：[Ramon Linares / Small Web Lab](https://github.com/RamonLinares)
  - 平台：桌面浏览器；等待岛屿加载后点击 Begin expedition。免费，无需账号或安装。
  - GPT-6 Astra：[作者开发日志](https://smallweblab.com/posts/sunlandia/) — 作者说明项目先用 GPT-5.6 Sol 开发，期间获得 Fable 协助，最终使用 GPT-6 Astra 完成。 [核验记录](assets/screenshots/sunlandia/SOURCE.md)。
  - 预览：![Sunlandia 第一人称海岸画面，展示沉船、破损码头与寻找援助的任务。](assets/screenshots/sunlandia/gameplay.jpg)

- **[NÁCAR](https://nacar-microcosmo.preda2005.chatgpt.site/)** — 在浸水的蜗牛壳中扮演微生物，吞食营养、探索微观水域，并逐渐进化出新的身体部件。
  - 作者：[Marcio Lima / @Preda2005](https://x.com/Preda2005)
  - 平台：浏览器；免费测试版，无需登录，提供包括中文在内的五种界面语言。
  - GPT-6 Astra：[作者发布串](https://x.com/Preda2005/status/2097954217180921928) — Marcio 说明将这个微生物进化创意交给 GPT-6 Astra，并逐步制作成公开的游戏测试版。 [核验记录](assets/screenshots/nacar/SOURCE.md)。
  - 预览：![小细胞位于彩色营养物之间，画面显示生物量、进化入口、背包与已探索水域。](assets/screenshots/nacar/gameplay.jpg)

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

- **[TIDAL RUSH — Paradise GP](https://tidal-rush-paradise-gp.skirano.chatgpt.site/)** — 在热带卡丁车赛道上漂移、使用道具，经过三圈比赛与七名对手争夺名次。
  - 作者: [Pietro Schirano](https://x.com/skirano)
  - 平台: 浏览器；已无需登录开始三圈比赛，提供键盘驾驶、漂移和道具操作，另有屏幕触控按钮。
  - GPT-6 Astra: [模型说明](https://openai.com/index/gpt-6-astra/) — OpenAI 的 Astra 发布页链接到这款卡丁车游戏，并署名 Pietro Schirano。用于发现和统计的 X 帖子是社区分享，并非作者原帖。 [核验记录](assets/screenshots/tidal-rush/SOURCE.md).
  - 开发资料: [X 分享](https://x.com/alexgetmancom/status/2095598460921614825)
  - 预览: ![Tidal Rush 的热带卡丁车赛道、名次与漂移操作。](assets/screenshots/tidal-rush/gameplay.jpg)

- **[LUNA — Crimson Requiem / 紅月のレクイエム](https://luna-crimson-requiem.ponsuke.chatgpt.site/)** — 在哥特像素关卡中跳跃前进，通过挥剑、踩踏或召唤攻击迎战敌人的短篇横版冒险。
  - 作者: [音羽ぽんすけ](https://x.com/ponsuke_otowa)
  - 平台: 浏览器，日文界面；键盘操作，作者说明支持手机，目前只有一个关卡。
  - GPT-6 Astra: [X](https://x.com/ponsuke_otowa/status/2096531744933425299) — 作者说明使用 Astra 开发约 25 分钟，并修正过一次行走方向；音乐另行注明来自 Suno。 [核验记录](assets/screenshots/luna-crimson-requiem/SOURCE.md).
  - 预览: ![LUNA 在红月下的哥特街道战斗，显示生命与召唤状态。](assets/screenshots/luna-crimson-requiem/gameplay.jpg)

- **[Strange Orbit](https://app.usecrayon.ai/play/47df78e2-1410-45d1-833c-196e1161c0b8)** — 骑着自行车沿行星环与宇航员对手竞速，收集星尘、跟随尾流并加速完成轨道杯。
  - 作者: [Crayon](https://x.com/usecrayon)
  - 平台: Crayon 浏览器游戏，提供键盘和触控操作说明；公开页面介绍竞速、计时与无限漫游模式。
  - GPT-6 Astra: [X](https://x.com/usecrayon/status/2097468975995302167) — Crayon 说明这款太空骑行游戏使用 GPT-6 Astra、Crayon Pro 与 Three.js 制作。 [核验记录](assets/screenshots/crayon-space-bike/SOURCE.md).
  - 预览: ![宇航员骑手在行星环上竞速，画面显示圈数、排名与星尘。](assets/screenshots/crayon-space-bike/gameplay.jpg)

- **[One More Vine — Into the Wild](https://onemorevine.bennash.dev/)** — 在四个丛林关卡中奔跑、跳跃和荡藤，收集宝藏、躲避鳄鱼并刷新通关时间。
  - 作者: [Ben Nash](https://x.com/bennash)
  - 平台: 浏览器，键盘和屏幕移动按钮；已无需登录加载首关与操作说明。
  - GPT-6 Astra: [X](https://x.com/bennash/status/2096282758930645170) — 作者明确说明这是一款使用 GPT-6 Astra 制作、受 Pitfall 启发的四关游戏。 [核验记录](assets/screenshots/one-more-vine/SOURCE.md).
  - 预览: ![带藤蔓、宝藏、深坑与鳄鱼的丛林平台跳跃关卡。](assets/screenshots/one-more-vine/gameplay.jpg)

- **[混合马里奥Ⅱ · 忍者龙剑传 × 坦克大战 / Mario Mix II](https://aha-xiaoq.github.io/games/mario-mix-2/play.html)** — 让《忍者龙剑传》的隼龙与《坦克大战》的坦克进入马里奥地下关卡 1-2：用隼龙横版跳跃、攀墙与战斗，用坦克俯视作战，也可选择“忍龙 → 坦克”双角色接力救回公主。
  - 作者: [在下_小Q（Aha-xiaoQ）](https://github.com/Aha-xiaoQ)
  - 平台: 桌面浏览器，中文界面，推荐键盘操作；免费，无需登录或安装。
  - GPT-6 Astra: [Issue #65](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/65) — 作者说明使用 GPT-6 Astra 反复开发、调试游戏代码与交互，并由自己提供玩法方向和持续反馈；不是一次提示生成。
  - 开发资料: [作品介绍](https://aha-xiaoq.github.io/games/mario-mix-2/) · [演示视频](https://www.bilibili.com/video/BV1erYt69EFP/) · [核验与图片来源（英文）](assets/screenshots/mario-mix-2/SOURCE.md)
  - 素材说明: 非官方同人作品；经典角色、图像和音乐的权利归各自权利人所有，具体素材说明见原游戏页面。
  - 预览: ![混合马里奥Ⅱ — 作者提供的视频封面，非实机截图。](https://aha-xiaoq.github.io/games/mario-mix-2/cover.jpg)
  - 截图: ![混合马里奥Ⅱ：坦克在 1-2 关入口开炮；运行版本 1.0，拍摄于 2026-09-09。](assets/screenshots/mario-mix-2/gameplay.jpg)

- **[Bengaluru ORR Rush](https://orr-rush-bengaluru.ravitheja.chatgpt.site/)** — 穿行班加罗尔的拥堵道路，避开坑洼和外卖摩托，利用加速与侧向挥击争取超车空间。
  - 作者: [Ravi Theja](https://x.com/ravithejads)
  - 平台: 桌面浏览器；键盘操作，可选自动油门，无需登录。
  - GPT-6 Astra: [作者说明](https://x.com/ravithejads/status/2097181044625887392) — 作者明确说明使用 GPT-6 Astra 制作这款班加罗尔公路竞速游戏。 [核验记录](assets/screenshots/bengaluru-orr-rush/SOURCE.md).
  - 预览: ![班加罗尔道路上的蓝色玩家车辆，画面显示比赛名次、速度、计时及操作提示。](assets/screenshots/bengaluru-orr-rush/gameplay.jpg)

- **[SKICROSS · 极地速降](https://iamsonic.net/2026/mini-games/skicross.html)** — 与三名对手沿雪山竞速，穿越旗门与障碍，并在雪崩追上之前冲向终点。
  - 作者: [Sonic的奇思妙想](https://x.com/sonic0828)
  - 平台: 桌面浏览器；A/D 转向，空格跳跃，Shift 冲刺，无需登录或下载。
  - GPT-6 Astra: [作者说明](https://x.com/sonic0828/status/2097601232877781344) — 作者将该小游戏合集归因于 GPT-6 Astra，并在滑雪竞速回复中提供此游戏入口。 [核验记录](assets/screenshots/skicross/SOURCE.md).
  - 开发资料: [作者发布链接](https://x.com/sonic0828/status/2097601732297814300)
  - 预览: ![四名滑雪者在雪道竞速，画面显示过门奖励、名次、速度和雪崩距离。](assets/screenshots/skicross/gameplay.jpg)

- **[Itsy Bitsy Spider · One More Climb](https://game-bench.piccini.app/games/gpt-6-astra/)** — 爬上长满苔藓的墙壁，捕食飞虫恢复抓力，并在雨水到来前藏进洞穴。
  - 作者：[Luiz Piccini](https://piccini.app/)
  - 平台：浏览器；免费，无需登录，可用 WASD 或屏幕摇杆操作。
  - GPT-6 Astra：[作者 Game Bench 页面](https://game-bench.piccini.app/) — Game Bench 将这个公开作品标记为 GPT-6 Astra canary、high，运行日期为 2026-09-05，依据统一游戏题目制作。 [核验记录](assets/screenshots/itsy-bitsy-spider/SOURCE.md)。
  - 预览：![蜘蛛爬到苔藓砖墙的 2 米位置，旁边显示抓力、飞虫、躲雨洞穴与移动摇杆。](assets/screenshots/itsy-bitsy-spider/gameplay.jpg)

- **[Desi Mayhem](https://desimayhem.com/)** — 骑摩托穿行印度城市道路，在公交车与三轮车之间竞速，并使用踢击、拳击和加速。
  - 作者：[Kishore](https://x.com/GetKishore)
  - 平台：桌面浏览器；免费，无需账号，首次骑行需确认系统生成的骑手昵称，也可修改。
  - GPT-6 Astra：[作者开发串](https://x.com/GetKishore/status/2097906401159102811) — Kishore 记录了使用 Astra 制作 3D 游戏，再结合街道参考图反复调整交通、碰撞与骑手战斗的过程。 [核验记录](assets/screenshots/desi-mayhem/SOURCE.md)。
  - 预览：![Chennai 摩托竞速实机画面，包含玩家骑手、城市交通、地图、名次与比赛倒计时。](assets/screenshots/desi-mayhem/gameplay.jpg)

- **[Cosmic Tides](https://app.usecrayon.ai/play/362ae1e7-29bd-4fbc-9103-00649265d942)** — 驾驶载具穿越银河海面，追逐发光路线门，可选择两圈竞速或无尽漂流。
  - 作者：[Aniket J](https://x.com/aniketjart)
  - 平台：浏览器；等待 3D 资源加载后点击 Ride the current，免费且无需登录。
  - GPT-6 Astra：[X](https://x.com/aniketjart/status/2098207146647433534) — Aniket 说明游戏使用 GPT-6 Astra、Blender MCP 与 Crayon 制作，并表示仍会继续迭代玩法。 [核验记录](assets/screenshots/cosmic-tides/SOURCE.md)。
  - 预览：![Cosmic Tides 竞速中的银河海面与发光路线门，画面显示圈数、速度和剩余距离。](assets/screenshots/cosmic-tides/gameplay.jpg)

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

- **[Above the Rooftops](https://app.usecrayon.ai/play/d09bb865-2259-42e2-86cc-fb609a9d6f28)** — 涂绘风筝并在城市屋顶上放飞，控制风筝线张力，体验自由飞行或限时收集天空光点的挑战。
  - 作者：[Tushar / @TusharXo](https://x.com/TusharXo)
  - 平台：浏览器；选择角色进入屋顶，再选择 Fly 开玩。免费，无需登录。
  - GPT-6 Astra：[X](https://x.com/TusharXo/status/2098156783181467801) — Tushar 明确说明使用 GPT-6 Astra 与 Crayon 制作这个 Three.js 风筝游戏，并提到 Images 2.5 的视觉素材。 [核验记录](assets/screenshots/above-the-rooftops/SOURCE.md)。
  - 预览：![城市屋顶上的风筝挑战，展示高度、线张力、天空光点进度与转向控制。](assets/screenshots/above-the-rooftops/gameplay.jpg)

## 每个作品记录什么

一条好用的推荐，应该让人一眼知道“玩什么、在哪里玩、为什么收录”。

| 信息 | 内容 |
| --- | --- |
| 游戏与作者 | 作品名称、原作者或团队链接 |
| 玩法亮点 | 一句话说明核心玩法，避免空泛宣传 |
| 体验入口 | 无需下载、安装、本地搭建或强制登录的在线游戏直达入口 |
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
