# 追加 10 款在线游戏 · 2026-09-18

以最新 `upstream/main` 的 `4bdd08082be1fb39cebbc3095e613b1b0e54b6cf`（129 项，包含 PR #95）为去重基线，新增 10 项，中英文目录各增至 139 项。原有条目的内容与相对顺序保留。

## 搜索与收录方法

- 本轮搜索覆盖公开搜索引擎、Reddit、itch.io 活动、GitHub 社区索引、作者 X 原帖和 Agent Games。最终采用六款作者 X 原帖与四款作者发布页作为模型依据。
- 所有标题入口均已在浏览器中进入玩法，无需账号登录、安装或本地搭建。Cabsolutely 首次街区资源约 175 MB，首次加载失败，重试成功；The Crownless 需要 WebGPU 和在线服务。
- 公开计数读取于 2026-09-18。X 浏览量与平台播放次数不可直接比较，也不代表独立玩家数。本批不宣称属于全网流量前十。
- 四款 Agent Games 作品有独立发布页、作者署名和模型字段；PATCH、DEADBLOCK、Dropzone 同时公开制作提示词。平台部分回合会自动记录匿名成绩，已在条目说明。
- VeilFall: The Hollow War 与已有 VeilFall — God’s Heart 名称相近，但作者分别为 aronewshop 与 Shehnoor Ansari，前者是 Ilyra 的三路电脑对战，后者是 Crimson Dreadlord 的 3D 试炼；网址、角色与实机玩法均不同，使用完整副标题区分。
- 保留混合制作分工：Cabsolutely 和 Don't Look Away 均使用 Astra 与 fal；Mog Mode 是含 AI 生成夸张人物的非官方恶搞作品。The Crownless 的依据是作者说明在 Spawn 中使用 Astra 制作并边玩边迭代。
- Floating Arcade 的聚合文章明确表示并不知道各游戏的具体模型版本，不能仅凭该聚合站标签收录。未采用需要下载的游戏或尚未开始投稿的新 Game Jam 项目。

## 新增名单

| 游戏 | 检查时的公开计数 | 作者与模型依据 | 试玩与截图 |
| --- | --- | --- | --- |
| [PATCH](https://agentgames.dev/play/patch) | Platform model index: 32 plays before testing. | [Drakoniux](https://agentgames.dev/play/patch) | [核验记录](../assets/screenshots/patch/SOURCE.md) |
| [DEADBLOCK: Outbreak](https://agentgames.dev/play/deadblock-outbreak) | Platform model index: 18 plays before testing. | [Drakoniux](https://agentgames.dev/play/deadblock-outbreak) | [核验记录](../assets/screenshots/deadblock-outbreak/SOURCE.md) |
| [Dropzone Royale](https://agentgames.dev/play/dropzone-royale) | Platform model index: 18 plays before testing. | [Drakoniux](https://agentgames.dev/play/dropzone-royale) | [核验记录](../assets/screenshots/dropzone-royale/SOURCE.md) |
| [Mog Mode](https://yesterdayarcade.com/games/mog-mode/) | Creator X post: 34 views. | [Dylan Elder / Yesterday Arcade](https://x.com/YesterdayArcade/status/2100510743422734658) | [核验记录](../assets/screenshots/mog-mode/SOURCE.md) |
| [The Crownless](https://www.spawn.co/@izkimar/the-crownless/play) | Creator X post: 3,957 views. | [Izkimar](https://x.com/Izkimar/status/2100753871903855095) | [核验记录](../assets/screenshots/the-crownless/SOURCE.md) |
| [VeilFall: The Hollow War](https://agentgames.dev/play/veilfall) | Platform model index: 15 plays before testing. | [aronewshop](https://agentgames.dev/play/veilfall) | [核验记录](../assets/screenshots/veilfall-hollow-war/SOURCE.md) |
| [Minimum Rage](https://minimum-rage.fastandlucid.chatgpt.site/) | Creator X post: 573 views. | [fastandlucid](https://x.com/FastandLucid/status/2100594128547704950) | [核验记录](../assets/screenshots/minimum-rage/SOURCE.md) |
| [Cabsolutely](https://cabsolutely.vercel.app/) | Creator X post: 604 views. | [ilker](https://x.com/ailker/status/2100705949468000655) | [核验记录](../assets/screenshots/cabsolutely/SOURCE.md) |
| [Don't Look Away — Saint Orison](https://weeping-angels.vercel.app/) | Creator X post: 10.1K views. | [Blendi](https://x.com/BlendiByl/status/2100442177159729336) | [核验记录](../assets/screenshots/dont-look-away/SOURCE.md) |
| [Icy Tower — Frostbound](https://icy-tower-frostbound.netlify.app/) | Creator X post: 268 views. | [Tahsin Safa Elmalı](https://x.com/SafaElmali/status/2100562918937165996) | [核验记录](../assets/screenshots/frostbound/SOURCE.md) |

## 实际试玩范围

- **PATCH：** 开局后结算显示 49 格领地、截断一名对手、存活 10 秒，随后被 Cocoa 截断路径；重开并截取竞技场。未验证成功扩张领地。
- **DEADBLOCK: Outbreak：** 以 Rook 进入 Green Acres，确认丧尸靠近并扣血；首局结算为第 1 波、存活 18 秒、零击杀。重开截取竞技场，未验证武器解锁或后续波次。
- **Dropzone Royale：** 以默认 Rookie 开始 Solo 电脑局，经过准备阶段进入建筑；按 E 后出现散落装备和 240 发弹药。截图显示 0:38、剩余九人、零击杀。未验证拾取武器、击杀或整局完成。
- **Mog Mode：** 使用默认 Sam 进入合照挑战，手动握手触发“Announced too early”；截图为第 4/5 次、零 aura、握手失误。未验证获胜或好友挑战。
- **The Crownless：** 选择 New Run、跳过开场对话后进入 Carrion Ridge，使用 LMB 攻击按钮和空格跳跃；截图显示首个营地、等级 1、生命 120/120、零击杀。未验证清营或灵魂升级。
- **VeilFall: The Hollow War：** 进入树林，在己方核心打开商店，用 300 游戏金币购买 Thorn Prism，攻击力从 44 增至 58，装备栏显示遗物。截图中的团队 2:1 与摧毁防御塔来自电脑活动；未验证玩家击杀或获胜。
- **Minimum Rage：** 跳过岛屿开场、阅读操作并打卡；按 E 接下 Deadfellaz 顾客订单，票据变为 Serve order，并显示薯条和 55 秒倒计时。截图仍为已服务 0/8；未测试支线或完成班次。
- **Cabsolutely：** 街区下载失败后重试并开始 Day 1，出租车、交通、乘客目标、小地图与 60 美元游戏内目标均已显示；截图剩余 11:44、收入 0、时速 0、车况 100%。未验证行驶距离、接客或完成订单。
- **Don't Look Away — Saint Orison：** 进入教堂，用 F 操作手电、空格眨眼；首局在 41 秒、两次眨眼后失败。重开并截取有照明的走道、天使与配电箱目标，未验证恢复供电或逃脱。
- **Icy Tower — Frostbound：** 打开 Netlify 直达入口并进入 Play Classic，显示角色、平台、楼层与到达第 5 层目标。按过空格但截图仍为第 0 层、零分；未验证成功攀爬、每日塔或好友竞赛。

以上是开局与有限交互检查，不代表通关、全部模式、多人对局或跨设备兼容性已验证。Frostbound 仅确认经典模式开局，Cabsolutely 仅确认班次与街区载入；未将短按键尝试描述成成功攀爬或完成接客。

10 张 JPEG 均于 2026-09-18 从在线游戏直接截取，嵌入中英文 README 和 PR。每款 SOURCE.md 记录访问条件、作者模型依据、版本与截图来源。第三方游戏与素材继续适用其原有权利。

## 仓库检查

- 网站现有测试：27 项通过。
- 中英文目录均解析为 139 项，新增 10 个唯一入口；两种语言的入口顺序一致，原有 129 项的解析内容与相对顺序保留。
- 604 处本地 Markdown 引用通过检查；10 张 JPEG 均为 1470×745，共 1,063,772 字节，最大单张 173,843 字节，均小于 4 MB。
- `git diff --check` 通过。
