# 游戏王：遗迹决斗 / Yu-Gi-Oh! Ruins Duel — release verification

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

[public-battle.jpg](public-battle.jpg) is an actual Chrome capture of the public Vercel game on 2026-10-10, showing a native drag summon and the island ruin environment. It replaces the README cover. `toy-friend-room.jpg` is a current capture from the verified Toy preview, showing two public players ready in one friend room. The retained PNGs listed below are historical; their older mesh, flat-stage or city-only presentation does not represent the current default environment.

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
