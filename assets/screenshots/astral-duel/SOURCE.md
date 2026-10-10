# 游戏王：遗迹决斗 / Yu-Gi-Oh! Ruins Duel — release verification

## Creator and attribution

Creator: [Ryan-fm](https://github.com/Ryan-fm). Iterative Codex collaboration covered gameplay, React/TypeScript UI, Three.js environments and effects, Node.js/Socket.IO rules, collections, decks, Toy integration and tests. Exact GPT-6 Astra attribution remains unconfirmed; this maintenance update does not invent a model-use claim. The original entry was merged in [PR #119](https://github.com/MartinDelophy/awesome-gpt-6-astra/pull/119).

## Public prototype · 2026-10-10

- [Playable public service](https://astral-duel-game.vercel.app/): Vercel Hobby, shared existing Upstash Free Tier, production and preview namespaces separated. No paid resource was added. Free capacity is shared with the author's other game; availability is subject to its quota.
- Private game-source revision: `5106242`. Server validates legal moves, card ownership, draws, chains and results; only each player's own hand and Extra Deck identities are sent to that player.
- Six free 40-card presets cover tempo, spell control, defensive counterplay, tribute pressure, Fusion and Ritual. This is a curated DM theme, not a complete historical or modern OCG rules database. Legacy owned cards remain compatible.
- Main and Extra Decks are separate. Fusion uses named materials; Ritual uses designated spells and sufficient tribute levels. These are prototype rules with documented differences from full OCG adjudication.
- Real matchmaking supports cancellation, widening after 60 seconds and ready states. Friend rooms use a six-digit code, host arena choice, readiness, start and rematch; they do not affect matching wins.
- Rooms, inventory, deduplication and deadlines persist in Redis. Visitors use a random server-issued credential. This is not Bilibili server-side identity verification or a complete cross-device login system.
- The default island ruin now uses a continuous 3D courtyard, PBR stone, scanned cliffs, coastline, trees and a castle approach; the neon city remains selectable. Monsters use card faces and selected illustrated sprites, not sculpted 3D character models. Important card actions remain drag-based and contextual.
- Music crossfades between lobby, summoning and battle. Microphone activation is deliberate and ends on cancellation/backgrounding; spoken card-name recognition requires browser support, while volume activation works from a selected legal monster. No recorded voice is saved by the game.

## Toy release status

The [formal Toy URL](https://www.bilibili.com/toy/astral-duel-game/index.html), ID `42086522945536`, is an existing published release. The new package points to the public service and is prepared for preview/review; the formal page retains the prior release until the update is approved. Preview verification and receipt are recorded below when available.

Formal Toy pages use account cloud storage for decks, collection and challenge progress, and a platform challenge leaderboard. The online inventory is separately server-verified; entering or leaving it does not import or overwrite the Toy collection. Toy cloud storage can retain the server-issued online credential. Platform preview pages lack a Toy id, so they use a clearly temporary archive and session credential instead of reading or writing the formal account archive. Formal account/leaderboard behavior still needs post-publication verification.

## Verification

- 121 game tests and 5 rights/publication-check tests passed; protected mobile runtime: 28 files intact. Full/Toy builds passed. Toy content doctor: no ERROR/WARN.
- Public HTTPS health reports Redis. Two actual public WSS clients completed matching, friend-room start, same-game recovery, hidden-hand projection and exactly-once draw retry. Friend settlement left matching wins unchanged.
- A public connection rotated after about 308 seconds and automatically reconnected. Collection and the original draw request were restored without spending a second ticket.
- Chrome public gameplay: entered practice and dragged Blue Sapphire Dragon from the hand onto the field. Scene textures, scanned cliffs and background finished loading. First scene load is asset-heavy; no real-device performance certification is claimed.
- These are recorded creator-run results; the private source and CI are not offered as publicly inspectable evidence. Catalogue tests are recorded in the follow-up PR.

## Screenshots

[public-battle.jpg](public-battle.jpg) is an actual Chrome capture of the public Vercel game on 2026-10-10, showing a native drag summon and the island ruin environment. It replaces the README cover. Other images in this folder are historical; their older mesh, flat-stage or city-only presentation does not represent the current default environment.

## Material rights

Nonofficial prototype. Card names/fronts, established characters and the user-supplied opening image contain third-party expressions. Asset rights remain unresolved; author publication permission, free hosting, attribution and platform review do not establish IP licensing. CC0 Poly Haven scenery and dependency/font notices are tracked separately. The strict rights check remains uncleared; an author-approved prototype publication path is pinned to the reviewed asset manifest and policy. The public catalogue does not contain private server code or credentials, and its own prose does not relicense third-party game assets.
