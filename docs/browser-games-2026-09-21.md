# 追加 10 款在线游戏 · 2026-09-21

以最新 `upstream/main` 的 `bff102934ca8cbafa3375307a6c834f50ad8d110`（150 项，包含 PR #99）为去重基线，新增 10 项，中英文目录各增至 160 项。原有条目的内容与相对顺序保留。

## 搜索与收录方法

- 搜索覆盖公开网络、GitHub 社区索引、AgentGames、itch.io、作者站点和 X。社区索引仅用于发现，最终模型依据回到作者发布记录。
- 所有标题链接均已免登录进入游戏，并保存本次实机截图；不包含网盘、安装包或要求本地搭建的入口。DASH / DINNER 使用作者 AgentGames 页面实际嵌入的独立运行地址。
- 公开计数读取于 2026-09-21，仅作发现热度参考，不代表游戏玩家数或全网流量前十；AgentGames 的 plays 与 X 浏览量不作横向排名。
- Flappy Bird 的 Astra 依据是作者对 Astra 作品征集帖的直接回复；RED FLAG GAME 是作者描述在 GPT-6 Astra 发布时开始制作的 ChatGPT 项目，不据此声称全部代码仅由单一模型完成。
- DRONE.IO 本次验证的是本地电脑对手模式。Neural Sight 首次媒体加载约 59 MiB，另需流式关卡，推荐支持 WebGPU 的现代浏览器；内置关卡可在线进入，导入自定义关卡才要求本地搭建。
- 未采用 GemFinder Finder（两次连接重置）、SPZ Drive（重载后仍停留在加载状态）、INFINITUM（两次开始操作未能离开菜单）、蘑菇卡丁车（发现记录为转发，未取得作者的明确 Astra 说明）、Marble Run（本次所见只有自动模拟和暂停/重播，不纳入可操作游戏），以及模型归属尚不明确的 One More。
- 这些作品与既有 150 项按名称、作者、入口比对。Neural Sight 是实景第一人称原型；Loulou’s Apartment 是带小狗互动的公寓游戏。与既有作品类似的类型本身不视为重复项目。

## 新增名单

| 游戏 | 检查时的公开计数 | 作者与模型依据 | 试玩与截图 |
| --- | --- | --- | --- |
| [DRONE.IO — Proving Grounds](https://drone-io.vercel.app/) | Creator X post: 18 views. | [Angello](https://x.com/OMASMohamad/status/2101830659358478516) | [核验记录](../assets/screenshots/drone-io/SOURCE.md) |
| [Neural Sight](https://monstercameron.github.io/Neural-Sight/) | Creator X post: 113 views. | [Earl Cameron](https://x.com/monstercameron/status/2097117275127959629) | [核验记录](../assets/screenshots/neural-sight/SOURCE.md) |
| [Knightmare — Medusa’s Temple](https://knightmare-medusa-3d.robin-hwang.chatgpt.site/) | Creator X post: 67 views. | [MinHo Hwang](https://x.com/MinHoHwang1/status/2096984386566815920) | [核验记录](../assets/screenshots/knightmare-medusa/SOURCE.md) |
| [DASH / DINNER](https://play.agentgames.dev/g/g_Gkna3a8DsdOR3NCL/index.html) | AgentGames listing: 15 plays. | [Drakoniux](https://agentgames.dev/play/dash-dinner) | [核验记录](../assets/screenshots/dash-dinner/SOURCE.md) |
| [Aegis Flora](https://murderszn.github.io/aegis-flora/game.html) | Creator X post: 101 views. | [Joshua Ray / murderszn](https://x.com/jahflyx/status/2101774133121958000) | [核验记录](../assets/screenshots/aegis-flora/SOURCE.md) |
| [Stillwater · Aquarium](https://fish.kennyatx.com/) | Creator X post: 241 views. | [Kenny Johnson](https://x.com/KennyJohnsonATX/status/2101744240095076416) | [核验记录](../assets/screenshots/stillwater-aquarium/SOURCE.md) |
| [Europe, the Game](https://play.justmovetoeurope.com/) | Creator X post: 2,383 views. | [Lara Avci](https://x.com/laraavci_/status/2100908545919123708) | [核验记录](../assets/screenshots/europe-the-game/SOURCE.md) |
| [RED FLAG GAME](https://seimusic.info/file/red_flag_game.html) | Creator X post: 4,953 views. | [SEI](https://x.com/seimusic/status/2098045891781480757) | [核验记录](../assets/screenshots/red-flag-game/SOURCE.md) |
| [Flappy Bird · Click to Fly](https://flappy-click-arcade-sept26.wesley-blomquist96.chatgpt.site/) | Creator X post: 55 views. | [Wesley Blomquist](https://x.com/Chief1496/status/2096347522226684105) | [核验记录](../assets/screenshots/flappy-click-to-fly/SOURCE.md) |
| [Loulou’s Apartment](https://loulous-apartment.vercel.app/) | Creator X post: 1,351 views. | [Louise de Sadeleer](https://x.com/LouiseDSadeleer/status/2098340442500653368) | [核验记录](../assets/screenshots/loulous-apartment/SOURCE.md) |

## 实际试玩范围

- **DRONE.IO — Proving Grounds：** 选择 Scout、Easy Wanderer 与六名对手开局。按 R 启动雷达，消耗能量并显示冷却；敌方攻击使机体生命从 110 降至 82。未验证击杀、升级或在线多人。
- **Neural Sight：** 加载内置 San Juan 关卡并进入场景，按 F 后画面出现投掷的球；界面显示生命 100、五名感染者与 30 发弹药。未测试其他关卡、射击命中或消灭敌人。
- **Knightmare — Medusa’s Temple：** 开始战斗并按 E 净化，出现技能效果与 10 秒冷却，分数为 285、生命 100/100。未击败首领。
- **DASH / DINNER：** 点击 LOCK IN，接取 BUN INTENDED 为 TOUCHGRASS HQ 的 Kai 配送订单。进入踏板车视角，取餐点距离 425 米，已完成配送为零；未验证取餐或送达。
- **Aegis Flora：** 跳过说明，以五份废料放置 Petal Gatling 并开始进攻。截图显示第 2/50 波、六次击杀、205 分、核心生命 15/15。未测试后续波次与长期成长。
- **Stillwater · Aquarium：** 进入 Freshwater 第 01 章，15 升鱼缸中有两条孔雀鱼。选择 Feed fish 并点击水面，饱食度达到 100，First feeding 完成，获得 11 XP。未测试扩缸或自动喂食。
- **Europe, the Game：** 以默认示例预算开始伦敦的一天并跳过介绍，方向键输入后时间推进至 09:02，靠近 Big Issue 卖报人；界面显示 120 英镑游戏现金与 80 体力。未验证工作或其他城市。
- **RED FLAG GAME：** 启动引擎、关闭说明并出发，通过页面的普通油门控制加速三秒，达到 26.7 km/h、行驶 11.2 米，罚单为零、保留六分。未完成机场接送或返程。
- **Flappy Bird · Click to Fly：** 通过空格开局并拍动翅膀，按 P 暂停及继续，零分结束后重试，截取飞行中的小鸟。未验证穿过水管或取得正分。
- **Loulou’s Apartment：** 进入 Living room 并点击 Pet Maggie，小狗旁的状态变为 Happy Maggie。未验证其他房间或日常习惯记录。

以上为开局与有限交互检查，不代表通关、全部模式、多人对局或跨设备兼容性已验证。10 张 JPEG 均于 2026-09-21 从游戏直接截取，并在中英文 README 与 PR 中展示。

Neural Sight 页面标注场景为 AJ Creek / virtualworldtours 的 San Juan，并提示场景复用权利与生成影像批准尚待确认。这里只记录出处与当前运行状态，不将项目素材重新授权。所有第三方游戏、角色、音乐及画面保留原有权利。

## 仓库检查

- 中英文目录各 160 项，新增 10 个唯一入口；原有 150 项内容与相对顺序保留。
- 本批检查覆盖目录解析、双语一致性、图片格式尺寸及大小、全部相关文档本地链接，以及网站现有测试。
- 验证结果：27 项现有网站测试通过；692 个本地文档引用通过；10 张图片均为 1280 × 720 JPEG，总计 971,341 字节，单张最大 191,536 字节。`git diff --check` 通过。
