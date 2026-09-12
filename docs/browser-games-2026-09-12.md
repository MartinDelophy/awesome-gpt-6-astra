# 追加 10 款在线游戏 · 2026-09-12

以最新 `upstream/main` 的 `a699dc0`（86 项，已包含上一批 10 款、Barrelbound 与 Tidehook）为去重基线，新增 10 款，中英文目录各增至 96 项。原有条目的内容与相对顺序保留；其余 10 种译文保留原有 86 项。网站从默认英文 README 读取目录。

## 来源与收录标准

- 从作者站点、Reddit 与 X 寻找作品；[社区索引](https://github.com/xianyu110/awesome-gpt-6-astra/blob/main/data/playable-demos.json) 仅用于发现线索，入口和模型参与信息回到作者原帖与当前游戏核实。
- 全部通过标题入口进入浏览器玩法，无需下载、安装、本地搭建或强制登录。Chess Cubed 使用首页实际提供的 `/play/?world=lunar` 游戏链接。
- 按名称、URL 和实际内容与原有 86 项去重。Outerstead 与 Outermate 虽出自同一作者，但分别是殖民地生存与监狱越狱，拥有独立入口、资源和玩法。
- 保留作者对模型的实际说法。部分原帖简称 Astra 或 GPT-Astra；没有将角色模型、动画或音乐全部归功于 Astra，也没有独立审计开发过程。
- 本批重在新增且可直接玩的作品，不声称是全平台流量前十。下列公开浏览量读取于 2026-09-12，会随时间变化；X 浏览量、Reddit 投票和实际玩家数不能混用。未公开的计数不推算。

## 新增名单

| 游戏 | 检查时的公开计数 | 作者与模型依据 | 试玩与截图 |
| --- | --- | --- | --- |
| [Outerstead · First Light](https://outerstead.com/) | 2.44 万次 X 浏览 | [Lance Edward](https://x.com/LanceBlah/status/2098370893164785761) | [核验记录](../assets/screenshots/outerstead/SOURCE.md) |
| [Chess Cubed](https://playchesscubed.com/play/?world=lunar) | 未记录可比较的玩家计数 | [Matthew Lebo / digitalml](https://www.reddit.com/r/ChatGPT/comments/1wbor8j/i_built_chess_cubed_with_gpt6_astra_in_4_days/) | [核验记录](../assets/screenshots/chess-cubed/SOURCE.md) |
| [Outermate: First Count](https://outermate.com/) | 1.97 万次 X 浏览 | [Lance Edward](https://x.com/LanceBlah/status/2098407876603895859) | [核验记录](../assets/screenshots/outermate/SOURCE.md) |
| [Neon Wake — Dubai Coast](https://neonwake.ethraship.com/) | 5,704 次 X 浏览 | [Captain M1K / Ethra](https://x.com/captain_m1k/status/2098310479714369926) | [核验记录](../assets/screenshots/neon-wake/SOURCE.md) |
| [CHRONO RAID · SUZUNE & AOI](https://suzune-aoi-fighters.szou2003.chatgpt.site/) | 3,876 次 X 浏览 | [SZOU / @szounft](https://x.com/szounft/status/2098310992770007365) | [核验记录](../assets/screenshots/chrono-raid/SOURCE.md) |
| [MR. NIPS · Twin Trouble](https://mr-nips-twin-laser-arcade.troybkk.chatgpt.site/) | 190 次 X 浏览 | [TROY / @creepztopia](https://x.com/creepztopia/status/2098264198971331011) | [核验记录](../assets/screenshots/mr-nips/SOURCE.md) |
| [Wings of Freedom — Levi Skyrun](https://attack-on-titan-jet.vercel.app/) | 1.91 万次 X 浏览 | [Dhrubhagat Singh](https://x.com/dhrubhagatsingh/status/2098236388462223820) | [核验记录](../assets/screenshots/levi-skyrun/SOURCE.md) |
| [Česká dobrodružství / Czech Adventures](https://czech-game.vercel.app/) | 243 次 X 浏览 | [petr royce](https://x.com/petrroyce/status/2098165938822504662) | [核验记录](../assets/screenshots/czech-adventures/SOURCE.md) |
| [BELOW — The Hollow](https://below-the-hollow.thebuggeddev.chatgpt.site/) | 1,863 次 X 浏览 | [The Bugged Dev](https://x.com/thebuggeddev/status/2097983281094594597) | [核验记录](../assets/screenshots/below-the-hollow/SOURCE.md) |
| [Billionaire Pit](https://billionaire-pit.vercel.app/) | 2 次 X 浏览 | [Ornob Islam Siyam](https://x.com/siyam_uddin_t/status/2098025717057614109) | [核验记录](../assets/screenshots/billionaire-pit/SOURCE.md) |

## 实际试玩范围

- **Outerstead · First Light：** 跳过片头，以四名生成的幸存者开始远征并启动首班；第 1 日时间从 06:00 推进到 06:45，食物从 64 降到 63。未测试建筑施工与后续章节。
- **Chess Cubed：** 从作者首页进入 /play/ 直达入口，加载 61 项资源并选择电脑对局；通过平面棋盘将白兵从 A-B2 移到 A-B1，电脑随后回应，回合数变为 2。未测试联机或完整棋局。
- **Outermate: First Count：** 使用默认 Alex Vale 角色进入生成的监狱，选择首次点名；日常模式从 05:50 推进到 07:55，角色用餐后前往工作，饱腹为 100、压力为 6。未完成越狱路线。
- **Neon Wake — Dubai Coast：** 加载赛道后选择 Let's make waves，进入四人、三圈比赛的第 1 圈，计时正常推进。点击加速后回合分数显示 250，但所观察画面速度仍为 0；未充分验证持续驾驶、完整圈数或手机玩法。
- **CHRONO RAID · SUZUNE & AOI：** 跳过片头，以默认 SUZUNE 进入首领战；EX 触发 SUZUNE / CHRONO BREAK 演出，首领攻击会扣血，失败后可重新开局。未击败首领，也未试玩 AOI。
- **MR. NIPS · Twin Trouble：** 进入第 1 波，自动激光正常发射，分数升至 440 后耗尽三颗心；通过 One more round 成功重开。未测试 Nova。
- **Wings of Freedom — Levi Skyrun：** 开始跑酷并前进 168 米后进入结算；Fly Again 可重开，左移后点击翻越／攻击触发 AERIAL ROLL，距离继续增加且保留三次机会。未验证击败巨人或完美攻击。
- **Česká dobrodružství / Czech Adventures：** 等待世界加载，切换英文，登上蒸汽列车并选择 Drive；列车约以 53–54 km/h 行驶，道岔距离从 137 降到 135 米，并显示速度、刹车和鸣笛控件。未测试其他载具与多人玩法。
- **BELOW — The Hollow：** 生成洞穴后进入，打开游泳说明，再通过 Keep swimming 恢复；水下洞穴、引导绳和 38.4 米深度 HUD 正常显示。尝试了拖动输入，但未充分验证持续游泳或返回水面。
- **Billionaire Pit：** 新开游戏并确认默认角色，进入对电脑的第 1 轮；倒计时从 60 到 57，电脑攻击使玩家生命从 100 降到 55。尝试出拳，但未验证玩家命中判定或后续轮次。

以上是开局与有限交互检查，未验证全关卡、全部模式或所有设备。尤其 Neon Wake 的持续驾驶，以及 BELOW 的持续游泳和出洞路线，本次未充分核验；可进入当前在线玩法与相应 HUD 已确认。

10 张 JPEG 均在 2026-09-12 从当前在线版本直接截取，同时嵌入中英文 README 和 PR。各自的 `SOURCE.md` 记录版本、作者、模型依据、访问条件、试玩范围与画面来源。第三方游戏及素材继续适用原有权利，目录的 CC0 不覆盖它们。

## 暂未收录的候选

- **Pub Brawl：** [itch.io 发布页](https://ember-tech.itch.io/pub-brawl) 目前仅提供 Windows ZIP，没有在线玩法，排除。
- **Kitty Fish Catch：** 所找到的作者 X 原帖目前显示页面不存在，未满足本批来源核验要求。
- **RED FLAG GAME：** 已进入道路关卡，但原帖主要说明游戏构思与 Astra 发布的关联，模型具体参与说明不足，本批暂缓。
- **APEX：** 社区索引的入口与所查转发帖的 Coast Run 链接不同，且所查帖子来自体验者，本批暂缓。

## 仓库检查

- 网站现有测试：27 项通过。
- 中英文目录均解析为 96 项，新增 10 个唯一入口；两种语言的入口顺序一致，原有 86 项的解析内容与相对顺序保留。
- 10 张 JPEG 宽度均为 1470 px，8 张高 745 px，CHRONO RAID 为 1068 px，MR. NIPS 为 1037 px；均从实际网页截图，单张最大 208,239 字节，总计 1,206,755 字节（约 1.21 MB）。
- 424 处相关 Markdown 本地引用均能找到对应文件；新增条目的作者与图片均可被网站目录解析器读取。
- `git diff --check` 通过。
