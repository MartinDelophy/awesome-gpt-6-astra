# 追加 10 款在线游戏 · 2026-09-16

以最新 `upstream/main` 的 `2f45976d5c78ed2ba29dd6b3bde8a351f748daf3`（109 项，已包含上一批 10 款与 Thornwake）为去重基线，新增 10 款，中英文目录各增至 119 项。原有条目的内容与相对顺序保留；其余译文未修改。网站从默认英文 README 读取目录。

## 搜索与收录方法

- 搜索覆盖 Reddit、X、GitHub、LINUX DO、V2EX、itch.io 游戏活动及作者与游戏平台，使用[社区索引](https://github.com/xianyu110/awesome-gpt-6-astra/blob/main/data/playable-demos.json)发现线索，再核对作者原帖和实际游戏。最终 2 款的模型依据来自 Reddit，8 款来自 X；可玩入口分布在 ChatGPT Sites、GitHub Pages、Replit、OrigoZero 与 Wavedash。
- 全部通过标题链接开始浏览器玩法，无需安装、下载游戏包、本地搭建或强制登录。OrigoZero 与 Wavedash 首次加载素材需要等待；后者的 Godot 素材较大。平台可选账号不影响本次匿名试玩。
- 按名称、规范化 URL 和实际玩法与原有 109 项去重。DEAD END 的 Oakridge 2D/3D 只计一款，Anime Rift 的 13 名角色也不拆分计数。
- 保留模型实际分工：DEAD END 只将 Oakridge 归于 Astra，另一个 Vice Beach 模式使用 GLM；Butterball Run 的作者标注 Astra Light；MUST. MAKE. PAPERCLIPS. 混合使用 Grok、Fable、Astra 和 Tripo，Astra 参与环境模型与 UI。VeilFall 是仍在开发的原型，本次只确认其单人试炼。
- 本批是全网搜索后的新增可玩清单，不宣称覆盖全网或属于流量前十。以下计数读取于 2026-09-16，X 浏览、平台启动与游玩次数不能直接比较，也不等于独立玩家数。Lantern Cove 只记录作者帖的浏览量，未借用它所回复的大流量帖子的数据。

## 新增名单

| 游戏 | 检查时的公开计数 | 作者与模型依据 | 试玩与截图 |
| --- | --- | --- | --- |
| [Realm of Seratari](https://dragonwild.seranotte.chatgpt.site/) | Reddit 作者原帖；未记录可比较的浏览或玩家计数 | [Nightstar31415](https://www.reddit.com/r/aigamedev/comments/1wh6npd/from_idea_to_game_dev_in_a_week/) | [核验记录](../assets/screenshots/realm-of-seratari/SOURCE.md) |
| [Race Jimothy](https://tayttm.github.io/race-jimothy/) | 作者 X 原帖 38 次浏览 | [Yuting_M / tayttm](https://x.com/YutingM84881/status/2099737945414750718) | [核验记录](../assets/screenshots/race-jimothy/SOURCE.md) |
| [DEAD END — Oakridge](https://dead-end.replit.app/) | 作者 X 原帖 305 次浏览；试玩前页面显示 524 次启动计数 | [Minsang Daniel Kim](https://x.com/msdkim0424/status/2099852357660262425) | [核验记录](../assets/screenshots/dead-end/SOURCE.md) |
| [Grand Theft Auto VI — PS1 Demake](https://origozero.ai/play/ad25322f-fdfe-49c0-9ee9-82608c8f9ff7) | 作者世界页显示 532 次游玩、3 次派生；非独立玩家数 | [Deata / wannabestraight](https://www.reddit.com/r/OpenAI/comments/1wble8s/agi_is_solved_just_asked_astra_to_make_me_gta_vi/) | [核验记录](../assets/screenshots/gta-vi-ps1-demake/SOURCE.md) |
| [Anime Rift — The Crossover Arena](https://anime-rift-cade.theyounganimation.chatgpt.site/) | 作者 X 原帖 17 次浏览 | [Cade Louis Mack](https://x.com/Cade_Animation/status/2099718119287668901) | [核验记录](../assets/screenshots/anime-rift/SOURCE.md) |
| [VeilFall — God’s Heart](https://veilfall.replit.app/play) | 作者 X 原帖 292 次浏览 | [Shehnoor Ansari (Noni)](https://x.com/Noni_Shehnoor/status/2099641097030959469) | [核验记录](../assets/screenshots/veilfall/SOURCE.md) |
| [Monopoly City — A Board Worth Exploring](https://monopoly-city.eekosystems.chatgpt.site/) | 作者 X 原帖 394 次浏览 | [Thomas Unise](https://x.com/thomasunise/status/2097121832159609145) | [核验记录](../assets/screenshots/monopoly-city/SOURCE.md) |
| [Butterball Run — Dinner Has Other Plans](https://butterball-run.jeraldine-t.chatgpt.site/) | 作者 X 原帖 105 次浏览 | [Seolyeon / SecretSeoul](https://x.com/SecretSeoul/status/2097315757931811081) | [核验记录](../assets/screenshots/butterball-run/SOURCE.md) |
| [MUST. MAKE. PAPERCLIPS.](https://wavedash.com/games/must-make-paperclips) | 作者 X 发布帖 2.53 万次浏览；非玩家数 | [Danny Limanseta](https://x.com/DannyLimanseta/status/2096977746891247758) | [核验记录](../assets/screenshots/must-make-paperclips/SOURCE.md) |
| [Lantern Cove — The Borrowed Light](https://lantern-cove.akartit.chatgpt.site/) | 作者 X 原帖 159 次浏览；未计入所回复帖子的数据 | [AK / akartit](https://x.com/akartit/status/2096520784449613981) | [核验记录](../assets/screenshots/lantern-cove/SOURCE.md) |

## 实际试玩范围

- **Realm of Seratari：** 以火龙在中型地图开局，点击目的地，从山中巢穴飞到 Clover Nook。确认生命、体力、饥饿与动作界面；未测试后期成长和城镇外交。
- **Race Jimothy：** 使用示例涂鸦，点击 Challenge Jimothy 和 Let's race。双方在 30 米跑道移动；截图中玩家到达 21 米，Jimothy 到达 30 米。
- **DEAD END — Oakridge：** 选择 Oakridge 3D 进入第一波，看到 12 名敌人、受伤与失败结算。重开后切换霰弹枪并使用照明弹，数量由 3 变 2；未完成中继站或撤离。
- **Grand Theft Auto VI — PS1 Demake：** 无需账号打开 Play world，等待素材后从菜单开始，进入 Lucia 所在街区。武器由手枪切为冲锋枪，开火后出现一星警察追逐；未完成任务。
- **Anime Rift — The Crossover Arena：** 以原创角色 Cade 对 CPU Gojo 开始 Fractured Shrine 练习。倒计时、伤害与生命次数变化正常，尝试飞行和特殊技输入并截取空中对战；未测试联机。
- **VeilFall — God’s Heart：** 进入山谷后点击 Begin Trial 和 Attack，确认第一波三名敌人、攻击蓄力、生命变化及失败。重试并截取进行中的试炼；未验证完整 MOBA 对局或多人模式。
- **Monopoly City — A Board Worth Exploring：** 与三名电脑对手开局，掷出 4+3 后到达 Chance，翻开机会卡并继续。玩家余额从 1,500 变为 1,350，每名电脑各获得 50 游戏币；未测试交易或完整对局。
- **Butterball Run — Dinner Has Other Plans：** 点击 Let's roll 后拖动黄油球，计时从 60 秒递减，救出 1/8 只贻贝，碰撞后能量从三格降至一格；截图为该局进行中，未测试后续餐盘。
- **MUST. MAKE. PAPERCLIPS.：** 匿名加载 Godot 游戏，跳过序章后部署 First Spark，按教程建造钉枪塔，废料从 105 降至 80，开始 1/6 波并观察敌人接近；未测试第一人称模式或完成战役。
- **Lantern Cove — The Borrowed Light：** 跳过序章进入港口，点击绳索并交互，Mara 走近后收到需先询问的反馈。与守卫对话并自我介绍，解锁 Otis 的多个话题；未获得道具或完成灯塔谜题。

以上均为开局与有限交互检查，未验证全部关卡、模式或跨设备兼容性。DEAD END 在鼠标锁定不可用时可拖动视角；Anime Rift 未测试联机；VeilFall 的可玩单人试炼不代表完整 MOBA 对局已经完成。

10 张 JPEG 均于 2026-09-16 从当前在线版本直接截取，并嵌入中英文 README 和 PR。对应的 `SOURCE.md` 记录作者、模型证据、版本、访问条件和试玩范围。第三方游戏与素材继续适用原有权利，目录 CC0 不覆盖它们。

## 暂未收录的候选

- **CURRY TIME: HEAT & COOL：** [作者活动投稿](https://itch.io/jam/ultimate-ai-powered-game-jam-3/rate/5001901)有模型参与说明，但[游戏页](https://koguwara.itch.io/curry-time-heat-and-cool)的嵌入内容及直接嵌入入口在本次环境中均出现连接重置，未能完成开局。
- **Porchlight Pilgrims：** [作者活动投稿](https://itch.io/jam/all-tools-allowed-2/rate/4998303)说明使用 Codex GPT-6 Astra；[游戏页](https://sloaneharrington.itch.io/porchlight-pilgrims)的嵌入游戏在本次环境中重试后仍连接重置，暂缓收录。这不代表上述游戏在所有环境均不可用。
- **KAZE：** [仓库](https://github.com/06wj/kaze-skyward-journey)提供在线入口，但本次未找到作者明确的 Astra 参与依据，暂缓。
- **COURTSIDE 26、WebThreeKingdoms 与 Balatro 线索：** 所查 [V2EX 帖子](https://www.v2ex.com/t/1239697)为社区转帖，本次未补齐对应作者的模型依据，未采用。

## 仓库检查

- 网站现有测试：27 项通过。
- 中英文目录均解析为 119 项，新增 10 个唯一入口；两种语言的入口顺序一致，原有 109 项的解析内容与相对顺序保留。
- 10 张 JPEG 宽度均为 1470 px；8 张高 745 px，Realm of Seratari 高 801 px，Lantern Cove 高 848 px。单张最大 249,289 字节，总计 1,309,345 字节（约 1.31 MB），均低于 4 MB。
- 520 处相关 Markdown 本地引用均能找到对应文件；新增条目的作者、游戏入口和图片均可被网站目录解析器读取。
- `git diff --check` 通过。
