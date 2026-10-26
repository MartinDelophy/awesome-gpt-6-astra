# Yu-Gi-Oh! Ruins Duel — release verification

## Current status · 2026-10-26 / 本次整体体验更新

This section supersedes the earlier deployment and deck-count statements below; earlier dated sections remain historical provenance. The creator explicitly requested a PR / Toy update after reviewing the local Studio pass. [Source branch](https://github.com/Ryan-fm/astral-duel-game/tree/codex/arena-graveyard-fx-20261026), release preparation `34eff58`, game-content revision `06ed31e`. The [formal Toy URL](https://www.bilibili.com/toy/astral-duel-game/index.html) / ID `42086522945536` / slug `astral-duel-game` are unchanged. The existing Vercel service remains retired; this update does not resume it or introduce paid resources.

[Exact latest Toy preview](https://www.bilibili.com/toy/preview/author_aBeEBWyL/index.html) has been uploaded and played through the official Bilibili wrapper. It is a solo package (`VITE_DUEL_ONLINE_ENABLED=0`), with real-time matching/friend play visibly unavailable. Server multiplayer remains in the source; it is not advertised as a live Toy feature. The formal URL retains its previous published release until review approval. Final submission of this preview is awaiting the creator's explicit confirmation.

- Eight free 40-card presets add curated GX Elemental HERO and Cyber Dragon to the six DM presets. This is not a complete historical GX/OCG card list.
- A ruin-ritual lobby, full-screen mode setup, four chapters grouping twelve executable lessons/challenges, real progress and next-trial navigation. Public piles use separate 44 px controls; reduced-motion/effects options and explicit targets/tributes/Fusion materials remain.
- Verified on this exact platform preview: deck selection, T01 keyboard lift/release summon, actual victory pack and +3 first-clear tickets, continue into T02, manual attack target, 300 LP damage and a public Graveyard entry. The preview uses temporary progress and does not write the formal account archive. Account cloud saves / rankings require formal-page follow-up; physical-phone performance is not certified.
- 200 game tests and 5 rights/publication tests passed, protected runtime and TypeScript/build checks passed. Toy content doctor reports no findings. Full local graphics evidence and its limitations are in the [game's review report](https://github.com/Ryan-fm/astral-duel-game/blob/codex/arena-graveyard-fx-20261026/artifacts/final-evidence.md).
- The first upload exceeded the platform's package limit. A reproducible publication-only `cwebp` step reduced the build from about 54.9 MiB to 36.7 MiB, preserving original dimensions/alpha, complete card images, model geometry and source assets. Asset conversion and package-file SHA-256 manifests are retained in the source release artifacts. This is texture transport compression, not AI repainting.
- `studio-lobby.jpg`, `studio-trials.jpg` and `studio-battle.jpg` are native 1280×720 screenshots of the exact platform preview captured on 2026-10-26. They show the new lobby, four-chapter trial map and live T02 battle. No game elements or outcomes were repainted. The lobby is the first README preview, maintaining the creator's lobby-cover preference.

作者于 2026-10-26 要求更新 PR／Toy。本次包保留标题、封面、地址与档案格式；新平台预览已实测召唤、奖励、进入下一关、手动攻击及墓地变化，当前待作者确认提交审核。Toy 本次为单人构建，Vercel 继续下线；不再将已下线服务描述为当前可玩入口。下方旧版本的部署记录仅供历史追溯。具体模型归因和素材权利仍待确认，本次不补造声明、不改变权利状态。


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

A fresh `toy mylist --json` check on 2026-10-10 reports the previous update of Toy ID `42086522945536` as **published**; the earlier `auditing` record above is historical. The battle-polish replacement has been uploaded and verified in [this platform preview](https://www.bilibili.com/toy/preview/preview_OO4GOtsp/index.html), with no review submission yet. The existing title, slug, cover and formal URL are preserved. Preview archives remain temporary and do not verify formal account cloud saves or rankings.

平台已发布上一版。本轮战斗优化已上传并验证平台预览，尚未提交审核；保留既有名称、访问地址和大厅封面。

The existing formal Toy page was opened in the in-app browser for an access check. It allowed entering the lobby, but starting practice returned “请先登录 B站，再连接云存档”. The catalogue title therefore links to the public Vercel version, which was verified through real practice play without account login. The Toy URL remains a secondary platform link with its Bilibili sign-in requirement stated explicitly. This corrects access metadata; no Toy account or stored progress was changed.

正式 Toy 页实测能进入大厅，但开始练习要求登录 B站。因此目录主试玩链接使用已实测免登录开始对局的 Vercel 公网版；Toy 地址仍保留，并明确登录要求。

The replacement preview uses an explicit ZIP whose 135 entries were verified byte-for-byte against the reviewed Toy build; the ZIP and folder both passed Toy content doctor with no ERROR/WARN. Directory upload stalled repeatedly on a part timeout; the identical-content ZIP completed successfully. The preview was entered through the official Bilibili wrapper, practice started with a temporary archive, the five-card fan raised Magic Cylinder correctly, and its full-card Chinese reader switched to large text. No warning/error console entries were captured. This verifies preview play and presentation, not formal account cloud saves or leaderboard writes. Final review submission awaits explicit creator confirmation of this exact preview.

新版平台预览实测进入练习，五张手牌正常呈扇形，魔法筒选中抬起，完整卡面与中文说明可切换大字；控制台无告警或错误。预览使用临时存档，未写入正式云进度，也尚未提交审核。

### Verified Toy model transport / 平台模型兼容验证

The first battle-polish preview (`preview_XrFOEESx`) showed the simplified cliff fallback. Its `.gltf` request returned HTTP 404, although the binary, texture and HDR requests returned HTTP 200. [Compatibility fix `c98b6f1`](https://github.com/Ryan-fm/astral-duel-game/commit/c98b6f1) keeps the reviewed source model unchanged and distributes it under a `.json` transport alias only in the Toy package. All four relative model dependencies remain intact. The full-server version still uses the original asset.

The final preview linked above (`preview_OO4GOtsp`) serves the JSON model with HTTP 200, byte-identical to the reviewed original. Native in-app browser play confirms the scanned, textured cliffs replace the fallback, with the five-card fan, raised Magic Cylinder selection and full-card large-text reader intact. No console warning/error was captured. This corrected preview is the review candidate; the earlier fallback preview is not the final package. Neither preview submits a review or writes formal account cloud progress.

最终预览 `preview_OO4GOtsp` 的模型返回 200，内容与原始扫描资产相同；实机确认完整岩壁已恢复，手牌和大字阅读器正常。此前显示简化替代岩壁的预览不作为本次审核候选。平台云存档与正式榜单仍需在正式登录环境验收。


## Pull-to-play update · 2026-10-11 / 拖出出牌更新

The creator reviewed the new interaction and requested an existing Toy and PR update. Public game source [`e510e43`](https://github.com/Ryan-fm/astral-duel-game/commit/e510e43) adds a broad battlefield release area and automatic server-legal placement. Spells prefer activation, traps set, and deliberate spell-setting intent stays available in the inspector. Targets, tributes and Fusion/Ritual materials remain explicit choices, including full-board sacrifice combinations. Short pulls, returning to the hand, Escape, stale states and lost focus cancel safely. Keyboard Space/Enter also uses automatic placement; optional direct target aiming remains available.

The same reviewed Toy output was uploaded to [the new platform preview](https://www.bilibili.com/toy/preview/preview_DIFcFTME/index.html). It supersedes the previous battle-polish preview as the current review candidate. The title, cover, slug and formal Toy URL are unchanged. Review has **not** been submitted; the formal Toy release therefore remains the previous published package. The public Vercel deployment still serves `af3af23` while publishing authentication is being refreshed; this note does not claim the new interaction is already deployed there.

Validation: 142 game tests passed, including automatic legal placement and retained full-board tribute/Fusion/Ritual choices; five rights/publication tests passed; all 28 protected runtime files remained intact. The Toy build passed TypeScript/Vite, and the folder and ZIP passed content doctor without findings. All 135 ZIP entries matched the reviewed build byte-for-byte. Cloud writes remain event-based and batched, ranking reads cached, and platform busy responses use backoff.

Local native mouse testing verified releasing between the rows without hitting a slot; 844×390 testing verified trap setting, cancellation, explicit target/material confirmation, intentional spell setting and illegal repeated summons. In the official Toy wrapper, keyboard automatic placement completed the summon tutorial, Trap Hole setting reduced the hand from five to four cards, Escape returned the lifted card without playing it, and Mystical Space Typhoon opened a target confirmation without automatically destroying the only eligible card. No warning/error console entries were captured. The wrapper's pointer-drag automation did not execute a play, so that check is not counted as a Toy pointer pass. Preview tests use temporary archives; formal account saves and rankings were not changed.

[pull-to-play.jpg](pull-to-play.jpg) is an unedited native 1280×720 JPEG captured from that exact Toy preview on 2026-10-11. It shows keyboard-lifted Trap Hole, its automatic legal landing-zone glow, a clear play/return prompt and the remaining four fan cards. This is supplementary evidence; the public lobby remains the first catalogue image and cover. No game state was injected or screenshot content repainted.

本轮源码 `e510e43` 与 Toy 新预览已更新，正式 Toy 尚未提交审核；Vercel 新部署仍待发布登录确认。142 项游戏测试、5 项发行检查通过，Toy 包自检无问题。平台实测键盘自动召唤、陷阱盖放、取消提卡和魔法目标确认，截图来自该预览的真实界面。平台 iframe 的自动化拖拽未完成出牌，因此不把它记作平台指针拖拽验收通过；指针拖拽已在本地桌面／手机尺寸实测。模型参与和素材权利待确认记录不变。


## Battle camera update · 2026-10-11 / 战斗视角更新

The creator reviewed the local camera iteration and requested publication. Public source [`21b545c`](https://github.com/Ryan-fm/astral-duel-game/commit/21b545c) is now deployed at the existing [Vercel service](https://astral-duel-game.vercel.app/). The default fixed tactical camera fits all four card rows above the fan hand, softens near/far perspective, and aligns spell/trap seals with their cards. An optional immersive view supports background orbit and explicit recentering. Card drags, target/material selection, inspectors and chain responses lock camera movement. The illustrated city's cards remain on its visible floor. Rules, inventories and restored card/cutout monsters are unchanged.

Vercel deployment `dpl_4gHXtZou4HBD4vHY2PtiER9TLoC1` reached READY and the production alias was updated. Public HTML/JS/CSS contain the new camera controls; health reports Redis storage and online PK enabled. Native public practice verified a mouse pull summoning Mystical Elf (hand five to four), keyboard Trap Hole setting (four to three), camera locks during the pull and response, immersive orbit, exact position restoration after recenter, and a return to tactical view. No console warning/error was captured. [battle-camera.jpg](battle-camera.jpg) is an unedited native 1280×720 screenshot from this public deployment after those actions; it shows all four rows, the summoned monster, the set-card seal and three fan cards. The existing public lobby remains the catalogue cover.

The preceding pull-to-play update was submitted after creator confirmation and a fresh platform listing reports it as **published**. This supersedes its historical pending-submission notes above. The new camera package is uploaded to [this exact Toy preview](https://www.bilibili.com/toy/preview/preview_gnekPTT5/index.html); final review submission awaits confirmation of that platform preview. Existing title, cover, ID `42086522945536` and slug `astral-duel-game` are preserved. Native official-wrapper testing verified temporary practice, keyboard automatic summon, disabled camera switching during lifted-card interaction, camera switching and recenter controls. No warning/error console entries were captured. Preview tests do not validate formal account cloud saves or leaderboard writes.

Validation: all 147 game tests and five rights/publication tests passed. Camera geometry checks cover desktop and landscape dimensions, physical card-corner visibility, raycast mapping, perspective scale, architecture obstruction and city-floor framing. TypeScript/Vite builds and the prototype-publication gates passed; all 28 protected runtime files remained intact. The Toy folder and ZIP passed content doctor with no findings. All 135 ZIP entries match the reviewed build byte-for-byte; package SHA-256 is `a688b94380facadbdf77e976fc1937c22452366e75261bdd5dbae272e1e82d6a`. Cloud persistence remains batched and event-based; ranking reads are cached and busy responses use backoff. Local 844×390 native testing verifies the mobile-size frame, not physical-phone performance.

本轮源码 `21b545c` 已更新并部署 Vercel。固定战术视角、沉浸切换和复位已在公网实测；拖牌与连锁响应期间镜头锁定。147 项游戏测试、5 项发行检查通过，28 个受保护运行时文件未改，Toy 包自检无问题。上一轮拖牌更新已在 Toy 发布，本轮视角更新已有新平台预览，待确认提交审核。预览使用临时存档；不推断正式云存档、榜单或实体手机性能已验收。模型参与与素材权利待确认记录保持不变。
