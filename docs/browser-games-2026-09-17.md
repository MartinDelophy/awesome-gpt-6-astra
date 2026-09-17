# 追加 10 款在线游戏 · 2026-09-17

以最新 `upstream/main` 的 `31302741138ed0783f13e404c4fdadbce9c71308`（119 项，已包含上一批 10 款）为去重基线，新增 10 项，中英文目录各增至 129 项。原有条目的内容与相对顺序保留；其他译文未修改。网站从默认英文 README 读取目录。

## 搜索与收录方法

- 搜索覆盖公开搜索引擎、Reddit、itch.io 作者页与游戏活动、X 和 GitHub [社区索引](https://github.com/xianyu110/awesome-gpt-6-astra/blob/main/data/playable-demos.json)，再核对作者原帖与实际游戏。最终一款的模型依据来自 Reddit，九款来自 X；入口分布于作者网站、ChatGPT Sites、Vercel、OhMyUnicorn 和 Wavedash。
- 所有标题链接均已进入实际浏览器玩法，无需下载、安装、本地搭建或账号登录。Glider 的云存档和 Wavedash 的账号功能为可选项；Tideglass Hunt 的单人模式也依赖在线服务；Canteen Crashers 需要支持 WebGPU 的浏览器。
- 按名称、规范化 URL 和实际项目与原有 119 项去重。POCKET_01 的 12 款小游戏作为一套合集计一项；Super Mario Bros. + Duck Hunt 的两个卡带也只计一项。
- 保留模型分工：Duck Off 同时使用 Astra 与 Fable；Tideglass Hunt 同时使用 Astra、Fable 5.1 和 DeepSeek 4.1 Flash；Sundrift 使用作者明确标注的 Astra 版本。Mario + Duck Hunt 的模型说明指浏览器移植项目，不表示原始游戏或素材由 Astra 创作。
- 本批是全网搜索后的新增可玩清单，不宣称覆盖全网或属于流量前十。以下计数读取于 2026-09-17；帖子浏览、平台比赛和玩家计数不是同一种指标。

## 新增名单

| 游戏 | 检查时的公开计数 | 作者与模型依据 | 试玩与截图 |
| --- | --- | --- | --- |
| [Glider — One Throw. Endless Sky.](https://glider.game/) | Reddit 作者原帖；未记录当前可比较的浏览或玩家计数。 | [mrtwizzles](https://www.reddit.com/r/ChatGPT/comments/1we6ws0/glidergame_gpt6_astra_xhigh_with_34_hours_of_my/) | [核验记录](../assets/screenshots/glider-game/SOURCE.md) |
| [Duck Off](https://duckoff.fun/) | 作者 X 原帖 838 次浏览；试玩前平台显示 317 只鸭子、611 场比赛，这些平台计数未经独立玩家核验。 | [swarnim.eth](https://x.com/swarnimodi/status/2100196454367437275) | [核验记录](../assets/screenshots/duck-off/SOURCE.md) |
| [Wildwake Rally](https://wildwake-rally.vercel.app/) | 作者 X 原帖 23 次浏览。 | [DefyEntropyV](https://x.com/DefyEntropyV/status/2100226359649820721) | [核验记录](../assets/screenshots/wildwake-rally/SOURCE.md) |
| [Sundrift — Take the Slow Way Home](https://wesche.com/lab/astra/boat-explorer/) | 作者四模型对比帖 1.03 万次浏览；不是本游戏的玩家数。 | [Wësche](https://x.com/WescheNex1q/status/2100043868565561533) | [核验记录](../assets/screenshots/sundrift/SOURCE.md) |
| [Starship Foundry — Isometric Flight Lab](https://allaiinc.org/Starship-Foundry-Isometric-Flight-Lab.html) | 作者 X 原帖 352 次浏览。 | [Aaron Wacker](https://x.com/Aaron_Wacker/status/2100382539697254828) | [核验记录](../assets/screenshots/starship-foundry/SOURCE.md) |
| [Tideglass Hunt](https://tideglass-hunt.timothee-leborgne.ohmyunicorn.com/) | 作者 X 原帖 203 次浏览。 | [Timothée Le Borgne](https://x.com/Tim_LB/status/2100212668778828172) | [核验记录](../assets/screenshots/tideglass-hunt/SOURCE.md) |
| [Canteen Crashers](https://wavedash.com/games/canteen-crashers) | 作者 X 发布帖 3,467 次浏览。 | [Chong-U / chongdashu](https://x.com/chongdashu/status/2100207494375285029) | [核验记录](../assets/screenshots/canteen-crashers/SOURCE.md) |
| [こもれびの木の実あつめ / Komorebi Nut Gathering](https://komorebi-kinomi-0916.inu03550.chatgpt.site/) | 作者 X 原帖 16 次浏览。 | [Kazumi](https://x.com/Kazumib0/status/2100129970236334179) | [核验记录](../assets/screenshots/komorebi-kinomi/SOURCE.md) |
| [POCKET_01 — Personal Game System](https://devoshub.com/) | 作者 X 发布帖 32 次浏览。 | [Haris Memic](https://x.com/LeHari_eth/status/2100392850823471600) | [核验记录](../assets/screenshots/pocket-01/SOURCE.md) |
| [Super Mario Bros. + Duck Hunt — Browser Port](https://mario-duck-hunt-mobile.astral-bead-6514.chatgpt.site/) | 作者 X 更新帖 86 次浏览。 | [Trust Me Bro / TrustMeOrElse](https://x.com/TrustMeOrElse/status/2097974925365485946) | [核验记录](../assets/screenshots/mario-duck-hunt/SOURCE.md) |

## 实际试玩范围

- **Glider — One Throw. Endless Sky.：** 两次发射进入 Free Roam，首局结算为 238 米；第二局截取到纸飞机飞行画面，显示已飞 10 米、时速 155 km/h、高度 57 米。未测试其他世界、竞速或云存档。
- **Duck Off：** 匿名进入 Practice alone，阅读玩法后开局，并在无操作超时后重开。连续划水触发 ×20 连击与 10/20 加速条；截图中距离仍为 0%，未验证跑完全程或多人对局。
- **Wildwake Rally：** 进入 Practice solo 的两圈计时赛道，按 W 后速度由 0 变为 2 km/h。截图为单人第 1/2 圈；未完成整圈，未测试联机比赛或排行榜提交。
- **Sundrift — Take the Slow Way Home：** 点击 Set sail 后进入航行，累计航程达到 0.01 海里，最近海岸距离从 101 米变为 89 米。截图显示航速 0.3 节；未验证靠岸或完成岛屿发现。
- **Starship Foundry — Isometric Flight Lab：** 起始飞船含 7 个模块、6 处连接，并显示可飞行。进入 Stunts 后短按屏幕油门，速度由 0 变为 1.0 m/s，截取 12 环赛道。未测试自定义拼装、其他模式或完成穿环。
- **Tideglass Hunt：** 使用网站生成的昵称创建房间并单人开局，进入 15 分钟竞技场。释放 Cleave 后体力从 100 降至 92，并出现 5.9 秒冷却。未验证击杀、完整对局、多人或语音功能。
- **Canteen Crashers：** 以 Runner 在 Food Court 与三名电脑队友开局。玩家尚未收集时，团队食谱已达到 1/3；触发 Tray slide 出现 MAKE WAY!，截图剩余 1:58。未验证玩家亲自收集食谱或完成整局。
- **こもれびの木の実あつめ / Komorebi Nut Gathering：** 开始 60 秒回合，拖动精灵向右移动，接到木果后得分变为 10。截图剩余 16 秒；未达成 300 分目标，未测试手机兼容性。
- **POCKET_01 — Personal Game System：** 打开电源，在 12 款游戏菜单中选择 Sokoban。向右推动一次即通过第一关，再进入第二关。截图显示第 2/8 关、已完成 1/8；其余 11 款未逐个测试，整套合集只计一项。
- **Super Mario Bros. + Duck Hunt — Browser Port：** 进入马里奥 World 1-1，使用屏幕跳跃按钮，截取到角色腾空画面。切换卡带后进入 Duck Hunt Game A 第一回合。未验证后续关卡、角色解锁、命中或手柄支持。

以上均为开局与有限交互检查，不代表完整通关、全部小游戏、多人对局或跨设备兼容性已验证。需要持续按键的飞行与驾驶游戏只验证了短时输入与 HUD 变化；Tideglass Hunt 仅验证单人房间与技能，Canteen Crashers 的食谱计数包含电脑队友贡献。

10 张 JPEG 均于 2026-09-17 从在线游戏直接截取，并嵌入中英文 README 与 PR。对应 `SOURCE.md` 记录作者、模型证据、版本、访问条件和试玩范围。第三方游戏与素材继续适用其原有权利，目录 CC0 不覆盖它们。

## 暂未收录的候选

- **Dust Horizon (GPT 6 Astra)：** [itch.io 作者游戏页](https://studioigor.itch.io/dust-horizon-gpt-6-astra)可打开，但点击 Run game 后嵌入内容连接重置；页面给出的直接嵌入入口也出现相同错误，未能开局。这不表示所有环境都无法运行。
- **DUSTLINE：** [作者提供的入口](https://cs2-eight-self.vercel.app/)显示 Deployment Paused。
- **Tokyo Batting / HIT'EM：** [作者对比帖](https://x.com/TokenGremlin/status/2100152995203760614)同时讨论 Astra 与 Fable 两个版本，而所查 v9 分享页没有标明对应模型，暂未采用。
- **Star Outpost：** 确认提供游客入口，但本次未完成临时身份建立及游戏开局，未列为已验证项目。

## 仓库检查

- 网站现有测试：27 项通过。
- 中英文目录均解析为 129 项，新增 10 个唯一入口；两种语言的入口顺序一致，原有 119 项的解析内容与相对顺序保留。新增条目均可被官网解析为游戏。
- 10 张 JPEG 宽度均为 1470 px；Glider 高 801 px，其余高 745 px。单张最大 123,281 字节，总计 846,280 字节（约 0.85 MB），均低于 4 MB。
- 562 处相关 Markdown 本地引用均能找到对应文件；新增条目的作者、游戏入口、分类和图片均可被网站目录解析器读取。
- `git diff --check` 通过。
