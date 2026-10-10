# Yu-Gi-Oh! Ruins Duel — release verification

## Creator and attribution / 作者与模型归因

Creator: [Ryan-fm](https://github.com/Ryan-fm). Iterative Codex collaboration covered gameplay, React/TypeScript UI, Three.js environments and effects, Node.js/Socket.IO rules, collections, decks, Toy integration and tests. Exact GPT-6 Astra attribution remains unconfirmed; this maintenance update does not invent a model-use claim. **The creator statement required by [CONTRIBUTING.md](../../../CONTRIBUTING.md#什么样的作品适合收录--what-belongs-here) remains outstanding; catalogue eligibility remains pending. PR #120 was merged by upstream on 2026-10-10 while the attribution question was still open; that merge does not verify model usage.** The original entry was merged in [PR #119](https://github.com/MartinDelophy/awesome-gpt-6-astra/pull/119).

作者为 Ryan-fm。Codex 参与多轮游戏开发，但不能据此推断具体模型；**GPT-6 Astra 的参与仍待作者确认，收录核验仍待完成。上游已合并 PR #120，但合并不能替代作者的模型参与声明。** 原条目已合并不代表此条件已经核实。

## Public prototype · 2026-10-10 / 公网原型

- [Playable public service](https://astral-duel-game.vercel.app/): Vercel Hobby, shared existing Upstash Free Tier, production and preview namespaces separated. No paid resource was added. Free capacity is shared with the author's other game; availability is subject to its quota.
- Private game-source revision: `5106242`. Server validates legal moves, card ownership, draws, chains and results; only each player's own hand and Extra Deck identities are sent to that player.
- Six free 40-card presets cover tempo, spell control, defensive counterplay, tribute pressure, Fusion and Ritual. This is a curated DM theme, not a complete historical or modern OCG rules database. Legacy owned cards remain compatible.
- Main and Extra Decks are separate. Fusion uses named materials; Ritual uses designated spells and sufficient tribute levels. These are prototype rules with documented differences from full OCG adjudication.
- Real matchmaking supports cancellation, widening after 60 seconds and ready states. Friend rooms use a six-digit code, host arena choice, readiness, start and rematch; they do not affect matching wins.
- Rooms, inventory, deduplication and deadlines persist in Redis. Visitors use a random server-issued credential. This is not Bilibili server-side identity verification or a complete cross-device login system.
- The default island ruin now uses a continuous 3D courtyard, PBR stone, scanned cliffs, coastline, trees and a castle approach; the neon city remains selectable. Monsters use card faces and selected illustrated sprites, not sculpted 3D character models. Important card actions remain drag-based and contextual.
- Music crossfades between lobby, summoning and battle. Microphone activation is deliberate and ends on cancellation/backgrounding; spoken card-name recognition requires browser support, while volume activation works from a selected legal monster. No recorded voice is saved by the game.

公网版使用 Vercel Hobby 与现有免费 Redis，已开放匹配及房间码好友 PK。六套预组覆盖四种基础路线、融合与仪式；这是精选 DM 小卡池，并非完整 OCG。岛屿遗迹为默认场景，另可选择霓虹都市。

## Toy release status / Toy 更新状态

The [formal Toy URL](https://www.bilibili.com/toy/astral-duel-game/index.html), ID `42086522945536`, is an existing published release. The new package points to the public service and is prepared for preview/review; the formal page retains the prior release until the update is approved. [Tested new preview](https://www.bilibili.com/toy/preview/preview_FbhZdb7A/index.html). The preview was uploaded and verified. The author explicitly confirmed submission on 2026-10-10. A same-package retry after a part-upload timeout succeeded; the platform returned **auditing**. [Submission preview](https://www.bilibili.com/toy/preview/preview_AgdcOxzr/index.html). This is review submission, not publication of the new version.

Formal Toy pages use account cloud storage for decks, collection and challenge progress, and a platform challenge leaderboard. The online inventory is separately server-verified; entering or leaving it does not import or overwrite the Toy collection. Toy cloud storage can retain the server-issued online credential. Platform preview pages lack a Toy id, so they use a clearly temporary archive and session credential instead of reading or writing the formal account archive. Formal account/leaderboard behavior still needs post-publication verification.

Toy 正式页保留先前版本，当前更新的预览已完成真实好友对战。作者明确确认后已提交审核，平台回执为 `auditing`，新版尚未发布。正式账号云存档和平台榜单需要新版通过审核后继续验收；预览采用临时存档，不写入正式云进度。

## Verification / 验证

- 121 game tests and 5 rights/publication-check tests passed; protected mobile runtime: 28 files intact. Full/Toy builds passed. Toy content doctor: no ERROR/WARN.
- Public HTTPS health reports Redis. Two actual public WSS clients completed matching, friend-room start, same-game recovery, hidden-hand projection and exactly-once draw retry. Friend settlement left matching wins unchanged.
- A public connection rotated after about 308 seconds and automatically reconnected. Collection and the original draw request were restored without spending a second ticket.
- Chrome public gameplay: entered practice and dragged Blue Sapphire Dragon from the hand onto the field. Scene textures, scanned cliffs and background finished loading. First scene load is asset-heavy; no real-device performance certification is claimed.
- The new Toy iframe connected to the public WSS service, created a friend room, synchronized both ready states and started a real duel with a second public client. See [toy-friend-room.jpg](toy-friend-room.jpg), captured from the tested preview. Formal account cloud saves and platform rankings remain outside preview verification because previews have no Toy id.
- These are recorded creator-run results; the private source and CI are not offered as publicly inspectable evidence. Catalogue tests are recorded in the follow-up PR.

121 项游戏测试、5 项发行检查测试通过，28 个受保护运行时文件完整。公网双客户端、隐藏手牌、抽卡去重及约 308 秒后的函数轮换重连均已实测；不把浏览器检查称为手机真机性能认证。

## Screenshots / 实机截图

[public-battle.jpg](public-battle.jpg) is an actual Chrome capture of the public Vercel game on 2026-10-10, showing a native drag summon and the island ruin environment. It remains supplementary battle evidence; the README cover now uses the actual lobby screenshot below. `toy-friend-room.jpg` is a current capture from the verified Toy preview, showing two public players ready in one friend room. The retained PNGs listed below are historical; their older mesh, flat-stage or city-only presentation does not represent the current default environment.

[public-lobby.png](public-lobby.png) is a native 1280×720 Chrome capture from the public game on 2026-10-10, source `5106242`, showing the featured card display, deck selector and three mode entrances. It is the first Preview image in both READMEs, replacing the battle cover at the creator’s request. No UI elements, card outcomes or game state were repainted. The catalogue title is now **Yu-Gi-Oh! Ruins Duel** in both languages so downstream name-based paths can use English text; the game UI remains Chinese.

大厅封面为当前公网实机截图，中英文目录都使用纯英文标题；没有改变游戏的中文操作界面。旧封面保留为补充战斗证据。站点路由和同步由上游维护，PR 合并并同步前不声称新网址已生效。

### Historical screenshot provenance / 历史截图来源

The following retained captures come from earlier builds; “current” in their original record referred to source `8bcc39d`, not the present public deployment. They are kept for provenance and do not describe the current cover.

以下截图保留旧版来源信息，不作为本次新版场景的证明。

| File | Size | Source and visible behavior |
| --- | --- | --- |
| [gameplay.png](gameplay.png) | 1152×648 | Historical local full-server `8bcc39d` city arena, restored card fronts, contextual attack controls. Resized intact from 1280×720. |
| [arena-picker.png](arena-picker.png) | 1280×720 | Historical local full-server `8bcc39d`: two free scene thumbnails, city selected. |
| [city-arena.png](city-arena.png) | 1280×720 | Historical local full-server `8bcc39d`: city arena with no card inspector. |
| [battle-mobile.png](battle-mobile.png) | 844×390 | Historical local full-server `8bcc39d` Roman attack panel with 44px confirm button. |
| [battle-wide.png](battle-wide.png) | 1280×720 | Historical local full-server `8bcc39d` Roman arena and trap-response tray. |
| [entry.png](entry.png) | 1280×720 | Earlier local entry update, current title and user-supplied opening image. |
| [entry-mobile.png](entry-mobile.png) | 844×390 | Earlier local entry update with complete artwork and 190×48 prompt. |
| [strategies.png](strategies.png) | 1501×832 | Earlier local rename build `30749a3`: lobby and four presets. |
| [strategies-mobile.png](strategies-mobile.png) | 844×390 | Earlier local rename build: mobile landscape title and presets. |
| [revival-mobile.png](revival-mobile.png) | 844×390 | Historical `a5dc6fa`: graveyard revival challenge. |
| [summon-mobile.png](summon-mobile.png) | 844×390 | Historical `a5dc6fa`: Summoned Skull summon effect. |
| [response-mobile.png](response-mobile.png) | 844×390 | Historical simplified HUD `814dcc5`, before the monster rollback: trap response. |
| [kuriboh-model.png](kuriboh-model.png) | 1280×720 | Superseded mesh experiment; this viewer has been removed. |
| [roman-kuriboh.png](roman-kuriboh.png) | 1280×720 | Superseded raised stone arena and mesh experiment; not current presentation. |
| [drag-mobile.png](drag-mobile.png) | 844×390 | Historical `909d5e5`: keyboard pickup and legal defense zones. |

## Material rights / 素材权利

Nonofficial prototype. Card names/fronts, established characters and the user-supplied opening image contain third-party expressions. Asset rights remain unresolved; author publication permission, free hosting, attribution and platform review do not establish IP licensing. CC0 Poly Haven scenery and dependency/font notices are tracked separately. The strict rights check remains uncleared; an author-approved prototype publication path is pinned to the reviewed asset manifest and policy. The public catalogue does not contain private server code or credentials, and its own prose does not relicense third-party game assets.

非官方原型。作者同意发布、免费托管和平台审核均不等于获得第三方 IP 授权；卡牌、角色和入场图的权利待确认记录仍保留。


## Battle polish · 2026-10-10 / 战斗体验更新

The creator reviewed the local iteration and explicitly requested an existing-service / catalogue / Toy update. [Public source revision `af3af23`](https://github.com/Ryan-fm/astral-duel-game/commit/af3af2311b202807f4a9d5c346de2341d83663e2) is now available in the public [game repository](https://github.com/Ryan-fm/astral-duel-game). Earlier references to private source describe its status at the time of those tests. This maintenance update does not change model attribution or clear third-party asset rights.

- Public spell/trap activations are queued for roughly four seconds each, with a recent activation history and an inspectable public chain source. Server response deadlines continue independently; hidden card identities stay concealed.
- Chinese explanations are expanded by default in the inspector and have a full-card reader with standard / large text. Face-down cards use compact neutral seals, with colors only after public reveal and separated neighboring touch targets.
- Complete card fronts form a larger shallow fan. The selected card rises and straightens with a cyan outline; drag-out placement and keyboard access remain. Narrow layouts page oversized hands instead of making stacked cards unreachable.
- Island-ruin lighting, contact occlusion and depth haze were refined. Automatic / high / low quality keeps the restored card faces and illustrated sprites; sculpted monster models were not reintroduced.
- The existing Vercel Hobby service was deployed from `af3af23`. [Deployment record](https://vercel.com/ryan-1d85/astral-duel-game/523Q7qCnXX13Eub31gkF4o9ZtvoL). The public health check reports Redis, and online status is enabled. No paid resource or plan change was made.
- Verification: 131 game tests, 5 rights/publication-check tests and 27 catalogue tests pass; all 28 protected mobile-runtime files are intact. The production build passed. Toy content doctor found no errors or warnings, and the Toy build retains the public endpoint and production socket path.
- Native public browser verification: entered practice, inspected a selected fan card, switched the reader to large text, picked up/cancelled with the keyboard, then dragged Mystical Elf from the hand into a legal monster zone. The field showed ATK 800 and the hand changed from five to four cards. No warning/error console entries were captured in that session. This is browser evidence, not physical-phone performance certification.

[battle-polish.jpg](battle-polish.jpg) is a native 1280 × 720 in-app browser screenshot of the public Vercel release `af3af23`, captured on 2026-10-10 after the drag summon. It shows the summoned Mystical Elf, four complete hand cards in a shallow fan, raised Fissure selection and an expanded Chinese effect explanation. No game state or UI was repainted. The lobby remains the first Preview image and therefore the catalogue cover; this battle capture is supplementary.

本轮公开源码版本为 `af3af23`，已部署公网；131 项游戏测试、5 项发行检查及 27 项目录测试通过。公网实测拖出神秘妖精后手牌从五张减少到四张，放大说明支持大字。目录保留大厅封面，新增实机战斗图作为补充；不推断具体模型参与，也不改变素材权利待确认记录。

### Current Toy replacement status / 本轮 Toy 状态

A fresh `toy mylist --json` check on 2026-10-10 reports the previous update of Toy ID `42086522945536` as **published**; the earlier `auditing` record above is historical. The battle-polish replacement is being uploaded for platform preview, with no review submission yet. The existing title, slug, cover and formal URL are preserved. Preview archives remain temporary and do not verify formal account cloud saves or rankings.

平台已发布上一版。本轮战斗优化正在上传预览，尚未提交审核；保留既有名称、访问地址和大厅封面。

The existing formal Toy page was opened in the in-app browser for an access check. It allowed entering the lobby, but starting practice returned “请先登录 B站，再连接云存档”. The catalogue title therefore links to the public Vercel version, which was verified through real practice play without account login. The Toy URL remains a secondary platform link with its Bilibili sign-in requirement stated explicitly. This corrects access metadata; no Toy account or stored progress was changed.

正式 Toy 页实测能进入大厅，但开始练习要求登录 B站。因此目录主试玩链接使用已实测免登录开始对局的 Vercel 公网版；Toy 地址仍保留，并明确登录要求。
