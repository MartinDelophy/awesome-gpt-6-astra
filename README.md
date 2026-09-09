<div align="center">

![Awesome GPT-6 Astra — Games worth playing. Ideas worth building.](assets/banner.svg)

# Awesome GPT-6 Astra

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md) [![LINUX DO](https://img.shields.io/badge/LINUX%20DO-Community-f0b73f?style=flat-square)](https://linux.do/) [![Cases: 61](https://img.shields.io/badge/Cases-61-58a6ff?style=flat-square)](https://astragames.aigccreative.com/)

**A collection of interesting games made with GPT-6 Astra.**

Playful ideas, games you can try, and development stories that inspire the next creator.

**English** · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md)<br>
[Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md)<br>
[Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md) · [Bahasa Indonesia](README.id.md)

[Submit a game](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) · [Contribute](CONTRIBUTING.md)

</div>

## Start here

Explore **61 games and interactive projects**: Three Kingdoms territory strategy, wooden interlocking and sliding puzzles, soft-body fruit merging, procedural city-building 2048, one-tap flight, magic-carpet combat, a five-stage bullet-hell shooter, island power-grid tower defense, wilderness survival, underwater fishing, sushi-restaurant management and island farming, Bay Circuit kart racing, coastal cycling with a pelican, tabletop toys turned into 3D games, 3D home decoration, and Orbital Garden. Click a title to play directly in your browser.

Catalog updated: **2026-09-09**. Model attribution is based on creator or submitter statements; unconfirmed details are marked in individual entries. This date records catalog maintenance, not a new play-test of every game.

New additions: [16 browser games discovered on X](docs/x-high-traffic-games-2026-09-09.md), with a verification table ordered by observed post views.

- **Looking for something to play?** Browse the genres below.
- **Built a game?** [Submit your project](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) with a direct browser game link, a gameplay screenshot, and a description of how you used GPT-6 Astra.
- **Found a great project?** Recommend someone else's public work and credit its creator.

This is a community-maintained list with no affiliation to OpenAI. Inclusion is an invitation to explore, not a benchmark or an official endorsement.

## Games

- [Action & arcade](#action--arcade)
- [Puzzles & brain games](#puzzles--brain-games)
- [Strategy & simulation](#strategy--simulation)
- [RPGs & adventures](#rpgs--adventures)
- [Platformers & racing](#platformers--racing)
- [Experimental & multiplayer](#experimental--multiplayer)

### Action & arcade

Shooters, fighters, survival games, rhythm games, and anything that invites one more round.

- **[Mosswing](https://mosswing-quiet-flight.jack-514.chatgpt.site/)** — A 3D tap-to-flap game about flying through gaps and building your score.
  - Creator: [Ayi1337](https://github.com/Ayi1337)
  - Platform: Browser, designed for mobile.
  - GPT-6 Astra: [Creator's one-shot tests and original prompts](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md).
  - Resources: [Source](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/mosswing/src) · [Standalone HTML](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/mosswing/mosswing.html)
  - Preview: ![Mosswing start screen showing the flying character and gaps between stone pillars.](assets/screenshots/mosswing/gameplay.jpg)

- **[Magic Carpet Wizard — A Thousand Skies](https://threapchills.github.io/MagicCarpetWizard/)** — Fly a magic carpet through a spherical world, thread rings, cast spells, and fight enemies and bosses.
  - Creator: [threapchills](https://github.com/threapchills)
  - Platform: Desktop browser with mouse and keyboard; requires WebGL 2.
  - GPT-6 Astra: The creator attributes the game to GPT-6 Astra in the [repository About section](https://github.com/threapchills/MagicCarpetWizard).
  - Resources: [Source and setup instructions](https://github.com/threapchills/MagicCarpetWizard) · Built with: Three.js and Vite.
  - Preview: ![Magic Carpet Wizard start screen showing the carpet rider, city and glowing flight ring.](assets/screenshots/magic-carpet/gameplay.jpg)

- **[THUNDERFALL / 雷霆战机 · 天穹远征](https://thunderfall.vercel.app/)** — Pilot three distinct fighters through five sectors and multi-phase bosses, dodge drifting bullets and telegraphed lasers, and collect four weapon colors in a campaign lasting at least ten minutes of active combat.
  - Creator: [jackroc](https://github.com/jackroc)
  - Platform: Modern desktop and mobile browsers; drag or use a keyboard, with automatic firing. Free, no login or API key; optional sound requires Web Audio.
  - GPT-6 Astra: [Creation record and model contribution](works/thunderfall/README.md#创作与许可) — The creator reports using GPT-6 Astra ultra for design, code, procedural graphics, synthesized audio, and iterative testing with collaborating agents; not a one-shot test.
  - Resources: [Source and setup instructions](works/thunderfall/README.md) · [Prompt](works/thunderfall/PROMPT.md) · Built with: native JavaScript, Canvas 2D, and Web Audio.
  - Preview: ![THUNDERFALL gameplay: a fighter dodges enemy fire over the Molten Foundry, with weapon loadout and combat controls visible.](assets/screenshots/thunderfall/gameplay.jpg)

- **[IRON BASTION / 钢铁防线](https://iron-bastion.zecoba.workers.dev/)** — Defend a beacon against waves of enemy tanks across six sectors in a 3D battlefield with destructible brick walls, a dash and an electromagnetic pulse.
  - Creator: [chat01.ai](https://linux.do/u/bandaot)
  - Platform: WebGL 2 browser, Chinese UI; keyboard/mouse and touch controls are documented. Opened and started without login or payment.
  - GPT-6 Astra: GPT-6 Astra usage and contribution details await creator confirmation.
  - Preview: ![IRON BASTION / 钢铁防线 — Gameplay](assets/screenshots/iron-bastion/gameplay.jpg)

- **[Stick Fighter](https://stick-fighter-production.up.railway.app/)** — A work-in-progress stick-figure fighting game with punches, kicks, uppercuts, ninja stars and parries; includes bot practice and online/friends menu options.
  - Creator: [Dwayne](https://x.com/CtrlAltDwayne)
  - Platform: Desktop browser, keyboard controls; bot practice works without sign-in. Online multiplayer and controller support were not independently tested.
  - GPT-6 Astra: [X](https://x.com/CtrlAltDwayne/status/2097499157967818780) — The creator explicitly states that he built this multiplayer fighting game using GPT-6 Astra and describes it as a work in progress.
  - Preview: ![Stick Fighter — Gameplay](assets/screenshots/stick-fighter/gameplay.jpg)

- **[Gogh Strike · Paint Clash](https://gogh-strike.surge.sh/)** — A Van Gogh-inspired FPS paint fight with six artists, signature weapons and a first-to-20 match format.
  - Creator: [Peter Gostev](https://x.com/petergostev)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/petergostev/status/2096015315209449578) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/gogh-strike/SOURCE.md).
  - Preview: ![Gogh Strike · Paint Clash — Gameplay](assets/screenshots/gogh-strike/gameplay.jpg)

- **[ASTEROIDS · Deepfield](https://asteroids-deepfield-cockpit.dan200200.chatgpt.site/)** — Pilot an Asteroids-style cockpit with four camera views, radar, twin cannons and inertial flight.
  - Creator: [Eyes Wide Open](https://x.com/DantesClown)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/DantesClown/status/2096085439052452064) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/asteroids-deepfield/SOURCE.md).
  - Preview: ![ASTEROIDS · Deepfield — Gameplay](assets/screenshots/asteroids-deepfield/gameplay.jpg)

- **[BLACKWATER · Silent Harbor](https://blackwater-roan.vercel.app/)** — Infiltrate a rain-soaked freight terminal in a tactical FPS with a detailed carbine, combat HUD and nine hostiles.
  - Creator: [hiraeth](https://x.com/WoahWurdz)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/WoahWurdz/status/2095958882732355908) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/blackwater/SOURCE.md).
  - Resources: [GitHub](https://github.com/Hiraeth010/blackwater)
  - Preview: ![BLACKWATER · Silent Harbor](assets/screenshots/blackwater/gameplay.jpg)

- **[Cinderfall · Fire, Shadow & Steel](https://rogue-omega.vercel.app/)** — A fantasy dueling arena with four champions, six class abilities and solo AI battles; online rooms are also offered.
  - Creator: [JUMPERZ](https://x.com/jumperz)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/jumperz/status/2096600055301984738) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/cinderfall/SOURCE.md).
  - Preview: ![Cinderfall · Fire, Shadow & Steel](assets/screenshots/cinderfall/gameplay.jpg)

- **[Oz Breakdance](https://satriodewantono.com/breakdance/)** — Drag a ragdoll dancer’s limbs into matching targets to score points and extend a timed breaking round.
  - Creator: [Satrio](https://x.com/satrio_d)
  - Platform: Desktop browser, mouse controls; a timed round started without sign-in.
  - GPT-6 Astra: [X](https://x.com/satrio_d/status/2096022866097758500) — The creator says Astra improved his existing breakdance game and its presentation. [Verification notes](assets/screenshots/breakdance/SOURCE.md).
  - Preview: ![A ragdoll dancer aiming for a foot target in the timed breakdance arena.](assets/screenshots/breakdance/gameplay.jpg)

- **[Astral War](https://astralwar.io/)** — A World War II themed browser FPS with soldier and zombie appearances, weapon loadouts, bot training and lobby options.
  - Creator: [Rishi](https://x.com/0xRishi)
  - Platform: Desktop browser, keyboard/mouse; bot training started without sign-in. Multiplayer and controller support were not tested.
  - GPT-6 Astra: [X](https://x.com/0xRishi/status/2096079660605997264) — Rishi reports building Astral War with Astra, Three.js, Meshy and ElevenLabs. The current site also credits Vesper; see the attribution note. [Verification notes](assets/screenshots/astral-war/SOURCE.md).
  - Preview: ![Astral War’s running combat view with weapon and battlefield controls.](assets/screenshots/astral-war/gameplay.jpg)

- **[FLOP CLUB](https://bubucn.com/ai-model-evals/flop-club/game/index.html)** — Dive from three platform heights, perform flips and twists, and aim for a floating ring to improve your landing score.
  - Creator: [BubuAi](https://x.com/BubuStd)
  - Platform: Browser; the standalone game starts directly without sign-in or downloads. A dive was started during the 2026-09-09 check; keyboard and documented touch controls.
  - GPT-6 Astra: [X](https://x.com/BubuStd/status/2096402783805354091) — The creator reports a one-prompt Astra Pro build using Three.js. [Verification notes](assets/screenshots/flop-club/SOURCE.md).
  - Resources: [Project introduction](https://bubucn.com/zh/ai-model-evals/flop-club)
  - Preview: ![A diver on the high platform above the target ring and landing controls.](assets/screenshots/flop-club/gameplay.jpg)

- **[Vector Dive — Beyond the Signal](https://vector-dive.openai.chatgpt.site/)** — Pilot through neon wireframe circuits that accelerate with each loop, timing boosts and phase moves to survive longer.
  - Creator: [Thomas Ricouard](https://x.com/Dimillian)
  - Platform: Desktop browser; a scored flight was started without sign-in. WASD flight, Space boost and Shift phase.
  - GPT-6 Astra: [X](https://x.com/Dimillian/status/2097188900888322323) — The creator says Astra built the game and music from a neon/synthwave visual brief and concept art. [Verification notes](assets/screenshots/vector-dive/SOURCE.md).
  - Preview: ![Vector Dive’s neon flight course with the player craft and gameplay HUD.](assets/screenshots/vector-dive/gameplay.jpg)

### Puzzles & brain games

Logic puzzles, physics challenges, word games, and clever little mechanisms.

- **[瓜体实验室 / Melon Lab](https://melon-game.jack-514.chatgpt.site/)** — A watermelon merging game built around soft-body fruit deformation and collisions.
  - Creator: [Ayi1337](https://github.com/Ayi1337)
  - Platform: Modern browser; the creator also provides a downloadable standalone HTML version.
  - GPT-6 Astra: [Creator's one-shot tests and original prompts](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md).
  - Resources: [Source](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/melon-lab/src) · [Standalone HTML](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/melon-lab/%E7%93%9C%E4%BD%93%E5%AE%9E%E9%AA%8C%E5%AE%A4.html)
  - Preview: ![Melon Lab gameplay with soft fruit in the merging container and physics controls.](assets/screenshots/melon-lab/gameplay.jpg)

- **[Q弹消消乐](https://qbxxl.0nz.de/)** — Pop connected groups of at least three same-colored bubbles; larger groups create bombs and rainbows, with relaxing, level and timed modes.
  - Creator: zding
  - Platform: Browser, Chinese UI; opened without login or payment.
  - GPT-6 Astra: GPT-6 Astra usage and contribution details await creator confirmation.
  - Preview: ![Q弹消消乐 — Gameplay](assets/screenshots/qbxxl/gameplay.jpg)

- **[榫境 / Sunjing Puzzles](https://sunjing-puzzles.vercel.app)** — Disassemble a six-piece interlocking wooden puzzle and solve two Huarong Dao sliding-block layouts in a 3D workshop, with hints and move undo.
  - Creator: [MartinDelophy](https://github.com/MartinDelophy) (project initiator and submitter).
  - Platform: Modern browser with WebGL 2; Chinese interface, mouse/keyboard and touch controls. Free, no login or API key; progress stays in the current browser.
  - Model participation: [Creation record](works/sunjing-puzzles/CREATION.md) — Iterative Codex work on game design, procedural 3D visuals, rules, solver and tests; exact GPT-6 Astra attribution awaits creator confirmation (draft submission).
  - Resources: [Source and setup](works/sunjing-puzzles/README.md) · [Requests](works/sunjing-puzzles/PROMPTS.md) · Built with: React, Vinext/Vite and Three.js.
  - Preview: ![Sunjing's six-piece wooden lock on a green 3D workbench, with numbered pieces and extraction controls.](assets/screenshots/sunjing-puzzles/gameplay.jpg)

- **[CityMaker](https://citymaker.0to1app.com)** — A 2048 puzzle played on a 4×4 city block: merge matching buildings to climb eleven architectural tiers per city, from traditional homes to a recognizable skyline, across twelve cities with a view you can rotate 45° at a time.
  - Creator: [Derek Wang](https://github.com/derek-wangpch)
  - Platform: Desktop and mobile browsers with WebGL; English, Simplified Chinese and Traditional Chinese. Free, no login or API key; progress is saved per city in the current browser and can be installed to the iOS Home Screen.
  - GPT-6 Astra: [Creation record](https://github.com/derek-wangpch/OpenCityMaker/blob/master/docs/CREATION.md) — The creator reports using GPT-6 Astra to generate the procedural geometry for all 132 building models, through a reference-driven workflow of multi-view research, silhouette-first massing and screenshot validation; not a one-shot test.
  - Resources: [Source and setup](https://github.com/derek-wangpch/OpenCityMaker) · [Verification notes](https://github.com/derek-wangpch/OpenCityMaker/blob/master/QA.md) · Built with: React, TypeScript, Vite and Three.js; all 132 building models are original procedural geometry.
  - Preview: ![CityMaker gameplay: a Hong Kong board of low-poly 3D buildings on a 4×4 grid, with score, city rail and rotation controls.](assets/screenshots/citymaker/gameplay.png)

### Strategy & simulation

Tower defense, strategic card games, management games, building, and simulation sandboxes.

- **[Dwellcraft · 住进想象](https://dwellcraft.vercel.app/)** — Furnish three homes by dragging furniture into a 3D layout, customize materials and lighting, then walk through the result at eye level; includes local saves and personal GLB model imports.
  - Creator: [Ryan-fm](https://github.com/Ryan-fm).
  - Platform: Modern desktop browser with WebGL; Chinese and English UI. Free, no login or API key. Designs and imported models stay in the current browser. WebXR controls are implemented, but physical Quest testing is pending.
  - Model participation: [Development record](https://github.com/Ryan-fm/Dwellcraft/blob/main/docs/DEVELOPMENT.md) — Iterative Codex work on scene planning, code, furniture placement, materials, bilingual UI and tests; exact GPT-6 Astra attribution awaits creator confirmation.
  - Resources: [Source and setup](https://github.com/Ryan-fm/Dwellcraft) · [Design plan](https://github.com/Ryan-fm/Dwellcraft/blob/main/docs/scene-design/development-plan.md) · [Asset credits](https://github.com/Ryan-fm/Dwellcraft/blob/main/docs/ASSETS.md) · Built with: React, TypeScript, Babylon.js and Vinext/Vite.
  - Preview: ![Dwellcraft's running editor with a furnished 3D floor plan, a draggable furniture library and material and lighting controls.](https://raw.githubusercontent.com/Ryan-fm/Dwellcraft/main/docs/screenshots/editor-en.png)

- **[Little Kingdom Chess / 작은 왕국 체스](https://little-kingdom-chess.echo3042.chatgpt.site/)** — Play chess against a computer on a rotatable 3D board with miniature characters, move history and undo.
  - Creator: [에코_eco](https://x.com/echo3042)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/echo3042/status/2096123409029886250) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/little-kingdom-chess/SOURCE.md).
  - Preview: ![Little Kingdom Chess / 작은 왕국 체스 — Gameplay](assets/screenshots/little-kingdom-chess/gameplay.jpg)

- **[JUNK RUN](https://junk-run.pages.dev/)** — Assemble a gravity-powered vehicle from scrapyard parts and send it downhill; starts in a first-person workshop.
  - Creator: [TheLabGuy](https://x.com/hermesailab)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/hermesailab/status/2097508053901840850) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/junk-run/SOURCE.md).
  - Preview: ![JUNK RUN — Gameplay](assets/screenshots/junk-run/gameplay.jpg)

- **[Spy or Lie](https://spyorlie.com/)** — A hexagonal strategy board game against a computer opponent: place hidden agents, bluff, and surround enemy groups to trigger capture chains.
  - Creator: [Nate Lorenzen](https://x.com/NateLorenzen)
  - Platform: Browser, English UI; the opening human/computer turn was verified without login or payment.
  - GPT-6 Astra: [X](https://x.com/NateLorenzen/status/2097504974683152559) — The creator says Astra turned his game design into a playable demo in one shot; this is a creator claim, not an independently audited development record.
  - Preview: ![Spy or Lie — Gameplay](assets/screenshots/spy-or-lie/gameplay.jpg)

- **[三分天下 · 百将风云 / Three Kingdoms: Hundred Heroes](https://sanguo-jiangshan.vercel.app)** — Lead Wei, Shu or Wu in a turn-based campaign across 15 cities, managing gold and grain and commanding a roster of 108 officers with individual AI-generated portraits as you compete with AI factions to unify the land.
  - Creator: [MartinDelophy](https://github.com/MartinDelophy) (project initiator and submitter).
  - Platform: Modern browser; Chinese interface, mouse and touch controls. Free, no login or API key; local saves support import and export.
  - GPT-6 Astra: [Creation record](works/three-kingdoms/CREATION.md) — Creator-confirmed use through iterative collaboration in Codex on rules, interface, AI, balancing and tests; terrain and officer portraits were made with image-generation tools.
  - Resources: [Source and setup](works/three-kingdoms/README.md) · [Requests](works/three-kingdoms/PROMPTS.md) · Built with: React, TypeScript and Vinext/Vite.
  - Preview: ![Three Kingdoms gameplay showing an ink-wash city map, resource controls and officer portraits.](assets/screenshots/three-kingdoms/gameplay.jpg)

- **[Last Beacon / 最后的灯塔](https://last-beacon.loupengju.cc)** — Connect a power grid across a miniature island, build and upgrade towers, and balance limited power to defend a lighthouse through ten waves and a final boss.
  - Creator: [stackloomdev](https://github.com/stackloomdev)
  - Platform: Modern desktop and mobile browsers, with Chinese and English support; free, no login or API key. Optional sound requires Web Audio.
  - GPT-6 Astra: [Creator's development log and model contribution](https://github.com/stackloomdev/last-beacon/blob/main/docs/CREATION.md) — Used for gameplay design, code, procedural artwork, and tests through multiple iterations; not a one-shot test.
  - Resources: [Source and setup instructions](https://github.com/stackloomdev/last-beacon) · [Requirements and iteration notes](https://github.com/stackloomdev/last-beacon/blob/main/docs/PROMPT.md) · Built with: JavaScript, Canvas 2D, and Web Audio.
  - Preview: ![Last Beacon gameplay in English: powered sentinels, mortars, and a frost tower defend the island against enemies following the coastal path.](assets/screenshots/last-beacon/gameplay-en.png)

- **[缺氧 · 小小星球](https://hypoxia-6tu.pages.dev/)** — An underground colony survival simulation: dig and build while balancing oxygen, food and power for three colonists.
  - Creator: dudu
  - Platform: Browser with Canvas; Chinese UI, mouse and keyboard; opened without login or payment.
  - GPT-6 Astra: [Issue #28](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/28) — The submitter reports development throughout with GPT-6 Astra; independently unverified.
  - Preview: ![缺氧 · 小小星球 — Gameplay](assets/screenshots/hypoxia/gameplay.jpg)

- **[魔塔 · 永夜之阶](https://ai.ywnet.xyz/work/mt.html)** — A fifteen-floor pixel tower adventure built around attack/defense calculations, limited resources and three colors of keys.
  - Creator: yw
  - Platform: Browser, Chinese UI; opened without login or payment.
  - GPT-6 Astra: [Issue #38](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/38) — The submitter supplies the development prompt under GPT-6 Astra usage; the exact model contribution is not independently verified.
  - Preview: ![魔塔 · 永夜之阶 — Gameplay](assets/screenshots/magic-tower/gameplay.jpg)

- **[永恒荒野](https://starve.pages.dev/)** — A browser survival and strategy game presented as a Don't Starve recreation. The submitted screenshot shows woodland exploration, resource gathering, an inventory, and health, hunger and sanity meters.
  - Creator: dudu
  - Platform: Browser; the screenshot shows a Chinese interface and keyboard controls. Payment and login requirements are not specified; demo not independently verified.
  - GPT-6 Astra: [Submitter statement](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/26) — The submitter attributes the full development to GPT-6 Astra.
  - Resources: No public source or separate development record supplied.
  - Preview: ![永恒荒野 screenshot supplied in Issue #26: a character beside a campfire in a forest, with inventory slots, survival meters and a minimap.](assets/screenshots/eternal-wilderness/gameplay.jpg)

- **[潜水员戴夫 / Dave the Diver](https://dave-2cm.pages.dev/)** — A browser recreation of Dave the Diver combining underwater spearfishing, sushi-restaurant management and island farming.
  - Creator: dudu
  - Platform: Browser; Chinese interface with mouse and keyboard controls. Opened and started a dive without login or payment.
  - GPT-6 Astra: [Submitter statement](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/41) — The submitter attributes the full development to GPT-6 Astra.
  - Resources: No public source or separate development record supplied.
  - Preview: ![Dave the Diver recreation in action: a diver among fish, with oxygen, depth and inventory indicators.](assets/screenshots/dave-the-diver/gameplay.jpg)

- **[No Moat](https://no-moat.petergyang.chatgpt.site/)** — A startup-themed roguelike deckbuilder: recruit a team and play cards against copycats, bugs and cloud bills.
  - Creator: [Peter Yang](https://x.com/petergyang)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/petergyang/status/2096297378584375672) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/no-moat/SOURCE.md).
  - Preview: ![No Moat](assets/screenshots/no-moat/gameplay.jpg)

- **[The Free Game](https://vale-dos-vinhedos.lucas579686.chatgpt.site/)** — Build a medieval village with roads, workers and production chains, presented as a detailed 3D tabletop settlement.
  - Creator: [Lucas Marques, from Shiva](https://x.com/LucasMarquesSv)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/LucasMarquesSv/status/2096772160404504583) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/the-free-game/SOURCE.md).
  - Resources: [GitHub](https://github.com/LucasMarquesShiva/the-free-game)
  - Preview: ![The Free Game](assets/screenshots/the-free-game/gameplay.jpg)

- **[AGI of Empires — The Compute Wars](https://agiofempires.com/)** — Gather funding and GPUs, build data centers and armies, and race rival AI labs to ASI or destroy their headquarters.
  - Creator: [timour kosters](https://x.com/timourxyz)
  - Platform: Desktop browser; a free satirical real-time strategy game. The opening computer-opponent match and resource collection were verified without sign-in.
  - GPT-6 Astra: [X](https://x.com/timourxyz/status/2096662786692776293) — The creator says he developed this Age of Empires-inspired game with Astra over two days. [Verification notes](assets/screenshots/agi-of-empires/SOURCE.md).
  - Preview: ![The AGI of Empires battlefield, resource counters and headquarters.](assets/screenshots/agi-of-empires/gameplay.jpg)

- **[Atlas Go](https://atlas-go.borisxp.chatgpt.site/)** — Play Go on street networks and unusual graph boards, with local pass-and-play and friend-game options.
  - Creator: [Boris Power](https://x.com/BorisMPower)
  - Platform: Browser; local board opened without sign-in. Online friend matches were not tested.
  - GPT-6 Astra: [X](https://x.com/BorisMPower/status/2096784808399843582) — The creator describes this arbitrary-graph multiplayer Go game as a single-prompt Astra creation. [Verification notes](assets/screenshots/atlas-go/SOURCE.md).
  - Preview: ![Black and white stones on Atlas Go’s honeycomb graph board.](assets/screenshots/atlas-go/gameplay.jpg)

- **[Ironwood — The Art of Industry](https://ironwood.sparkles.dev/)** — Gather raw materials, power machines and connect conveyor belts to turn a clearing into a working factory.
  - Creator: [Dan](https://x.com/aidaniil)
  - Platform: Desktop browser; a guest tutorial opens without sign-in, while saving progress requires login. Multiplayer was not independently tested.
  - GPT-6 Astra: [X](https://x.com/aidaniil/status/2096426970930106530) — The creator says he and his brother built it with Astra, Blender MCP and Cloudflare Durable Objects, inspired by Satisfactory and Besiege. [Verification notes](assets/screenshots/ironwood/SOURCE.md).
  - Preview: ![Ironwood’s factory machines, conveyor belts and resource-management tutorial.](assets/screenshots/ironwood/gameplay.jpg)

- **[前线指令 / Frontline Command](https://fluffy-biscotti-dad318.netlify.app/)** — Build a base, contest resource zones and command tanks, infantry, aircraft and drones against AI armies in a modern-war RTS, using spies and intelligence to gain an advantage.
  - Creator: [嘟啊嘟](https://x.com/HDLhN783wtLkpPR)
  - Platform: Desktop browser, Chinese UI, mouse and keyboard; a single-player match started without login, payment or installation.
  - GPT-6 Astra: [X](https://x.com/HDLhN783wtLkpPR/status/2097321360641122393) — The creator credits “GPT Astra” for building this RTS in the linked post; the exact model version and detailed development workflow are not specified.
  - References: [Submission](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/66) · [Verification notes](assets/screenshots/frontline-command/SOURCE.md)
  - Preview: ![Frontline Command: a base, three selected tanks and power-plant placement during a live match; v0.8, captured 2026-09-09.](assets/screenshots/frontline-command/gameplay.jpg)

### RPGs & adventures

Role-playing, exploration, narrative adventures, and interactive stories.

- **[Lumbridge / Elderwood Realms](https://elderwood-realms.rohannvarma.chatgpt.site/)** — An old-school multiplayer adventure with a shared world, skills, gathering and combat; playable as a guest.
  - Creator: [Rohan Varma](https://x.com/TheRohanVarma)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/TheRohanVarma/status/2096744577332068549) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/lumbridge/SOURCE.md).
  - Preview: ![Lumbridge / Elderwood Realms — Gameplay](assets/screenshots/lumbridge/gameplay.jpg)

- **[Silent Meridian / 静默子午线](https://silent-meridian.stackloom.org/)** — An atmospheric point-and-click adventure with four chapters and thirteen puzzles: compare the Present with its Echo, gather evidence and unravel the mystery of an observatory trapped at 00:17.
  - Creator: [stackloomdev](https://github.com/stackloomdev)
  - Platform: Desktop and mobile browsers; Chinese and English. Play online for free, with no login, installation or API key. Optional WebGL effects fall back to the original illustrations.
  - GPT-6 Astra: [Development record](https://github.com/stackloomdev/silent-meridian/blob/main/docs/CREATION.md) — Iterative work in Codex on story, puzzles, bilingual text, code, procedural 3D effects and tests.
  - Resources: [Source and setup](https://github.com/stackloomdev/silent-meridian) · [Art provenance](https://github.com/stackloomdev/silent-meridian/blob/main/docs/ART.md) · Built with: JavaScript, WebGL, Web Audio.
  - Preview: ![Silent Meridian in action: the observatory with a brass 3D mechanism, clue markers, Present/Echo controls and a field journal.](assets/screenshots/silent-meridian/gameplay.png)

- **[热血归来 · 八荒幻世 / Mir176 Dragon Warrior](https://mir176-dragon-warrior.geekcatxx.chatgpt.site/)** — A Legend-inspired action RPG with warrior, mage and taoist classes, equipment, dungeon combat and auto-battle.
  - Creator: [知识猫AI实验室](https://x.com/GeekCatX)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/GeekCatX/status/2097530887558865115) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/mir176/SOURCE.md).
  - Preview: ![热血归来 · 八荒幻世 / Mir176 Dragon Warrior](assets/screenshots/mir176/gameplay.jpg)

- **[Zork · The Great Underground Empire](https://zork-underground-empire.netlify.app/)** — An unofficial 3D adaptation of Zork with first-person exploration, puzzles, combat and a journal.
  - Creator: [Ethan Mollick](https://x.com/emollick)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/emollick/status/2096047660662722620) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/zork/SOURCE.md).
  - Preview: ![Zork · The Great Underground Empire](assets/screenshots/zork/gameplay.jpg)

- **[The Simpsons: Hit & Run — Browser Recreation](https://vheissu.github.io/hit-and-run-web/)** — Explore Springfield on foot and by car in an unofficial browser recreation with missions, traffic and police chases.
  - Creator: [Dwayne](https://x.com/CtrlAltDwayne)
  - Platform: Desktop browser; the first mission loaded without sign-in after a large initial asset load. Full campaign completion was not tested.
  - GPT-6 Astra: [X](https://x.com/CtrlAltDwayne/status/2096872309936287887) — The creator describes rebuilding the game for the web with GPT-6 Astra; the repository also credits Claude assistance with loading. Original game assets retain their own rights. [Verification notes](assets/screenshots/hit-and-run-web/SOURCE.md).
  - Resources: [Source and setup](https://github.com/Vheissu/hit-and-run-web)
  - Preview: ![Homer in Springfield with the first mission objective and minimap visible.](assets/screenshots/hit-and-run-web/gameplay.jpg)

- **[Where the Wind Wanders](https://app.usecrayon.ai/play/a9a3c165-74b3-4ff6-9588-ad97f829ddb5)** — Wander through a sunlit 2.5D valley, follow paths and gather three wind letters in a quiet exploration adventure.
  - Creator: [Tushar](https://x.com/TusharXo)
  - Platform: Browser, hosted on Crayon; the public game page and embedded player were checked.
  - GPT-6 Astra: [X](https://x.com/TusharXo/status/2096037482739683574) — Tushar describes Astra generating paths and assets; a follow-up announces the playable release using Astra, Three.js and Crayon. [Verification notes](assets/screenshots/crayon-adventure/SOURCE.md).
  - Resources: [Creator release post](https://x.com/TusharXo/status/2096741535891251261)
  - Preview: ![A character exploring the flower-filled valley with the wind-letter objective visible.](assets/screenshots/crayon-adventure/gameplay.jpg)

- **[ALIBI — The Last Light](https://alibi-blackthorn-manor.vercel.app/)** — Investigate Blackthorn Manor in a point-and-click murder mystery, examining scenes and following clues to identify the killer.
  - Creator: [Christos Antonopoulos](https://x.com/Christos_antono)
  - Platform: Browser; the interactive manor entrance opened without sign-in. Later generated scenes were not fully tested.
  - GPT-6 Astra: [X](https://x.com/Christos_antono/status/2096435122669297892) — The creator credits both GPT Astra and H3 Max for this generative detective game. [Verification notes](assets/screenshots/alibi-blackthorn-manor/SOURCE.md).
  - Preview: ![The manor entrance with a clickable door and the opening investigation text.](assets/screenshots/alibi-blackthorn-manor/gameplay.jpg)

- **[Skyward: The Gathering](https://edge-city-skyward-quests.vercel.app/)** — Explore floating islands, jump and glide between communities, and complete quests for their residents.
  - Creator: [timour kosters](https://x.com/timourxyz)
  - Platform: Desktop browser, keyboard and mouse; the quest-edition page and controls were checked.
  - GPT-6 Astra: [X](https://x.com/timourxyz/status/2096379521926840339) — The creator says Astra built a playable 3D game with NPCs and quests inspired by Edge City locations. [Verification notes](assets/screenshots/skyward-gathering/SOURCE.md).
  - Preview: ![Skyward’s floating-island overview with exploration and journal controls.](assets/screenshots/skyward-gathering/gameplay.jpg)

- **[Anna & Leo · The Starstone Adventure](https://anna-leo-starstone.vercel.app/)** — Switch between Anna’s musical magic and Leo’s superpowers to awaken melody flowers and explore Wonder Garden.
  - Creator: [Dharma Utomo](https://x.com/dharmautomo)
  - Platform: Browser; the opening quest started without sign-in. WASD movement, Space jump, E power and Tab hero switching.
  - GPT-6 Astra: [X](https://x.com/dharmautomo/status/2096573649235091967) — The creator says GPT-6 Astra helped him build the 3D adventure and shares a video of his children play-testing it. [Verification notes](assets/screenshots/anna-leo-starstone/SOURCE.md).
  - Preview: ![Anna and Leo’s 3D adventure world and quest interface.](assets/screenshots/anna-leo-starstone/gameplay.jpg)

### Platformers & racing

Parkour, platform challenges, racing, and games built around movement and routes.

- **[STORM RACE](https://storm-race.vercel.app/)** — Mini 4WD racing with an exploded-parts garage, boost and changing dry, rainy and stormy track conditions.
  - Creator: [BubuAi](https://x.com/BubuStd)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/BubuStd/status/2096587056755638553) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/storm-race/SOURCE.md).
  - Preview: ![STORM RACE — Gameplay](assets/screenshots/storm-race/gameplay.jpg)

- **[FANG STARLIGHT RUN](https://fang-starlight-run.yosshy666.chatgpt.site/)** — Guide a wolf through three moonlit platforming stages, collecting coins and star fragments with double jumps and dashes.
  - Creator: [FANGプラス最強伝説🐺](https://x.com/FANGsaikyou)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/FANGsaikyou/status/2096192022596194588) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/fang-starlight-run/SOURCE.md).
  - Preview: ![FANG STARLIGHT RUN — Gameplay](assets/screenshots/fang-starlight-run/gameplay.jpg)

- **[Blue Bajaj Rally](https://bajaj.guzo.tech/)** — Race a three-wheeled Bajaj around an Ethiopian-inspired highland circuit against five AI rivals or the clock.
  - Creator: [Guzo Technologies](https://x.com/guzotech)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/guzotech/status/2096209787864088638) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/blue-bajaj-rally/SOURCE.md).
  - Preview: ![Blue Bajaj Rally — Gameplay](assets/screenshots/blue-bajaj-rally/gameplay.jpg)

- **[APEX CLUB — Bay Kart Grand Prix](https://apex-club-racing.vercel.app)** — Race three laps around Bay Circuit, choose from six karts, and charge corner-exit mini turbos to climb the solo rankings or score for a 4v4 team.
  - Creator: Ryan
  - Platform: Desktop browser with WebGL 2 and a keyboard; free, no login or API key. Runs from a local HTTP server or static host; Three.js is included locally. Team races are local: one human and seven AI racers.
  - Model participation: [Development record](works/apex-club/CREATION.md) — Iterative Codex work on gameplay, code, procedural visuals and tests; GPT-6 Astra attribution awaits creator confirmation.
  - Resources: [Source and setup](works/apex-club/README.md) · [Request and iteration summary](works/apex-club/PROMPTS.md) · [GPT conversation](https://chatgpt.com/s/cx_6a9e84c13c9c8191bcb7ad0801288adc) · Built with: JavaScript, Three.js.
  - Preview: ![APEX CLUB team race on Bay Circuit with nearby karts, lap progress, live team points and a minimap.](assets/screenshots/apex-club/gameplay.png)

- **[PELICAN PEDAL / 鹈鹕踏浪](https://pelican-pedal.zecoba.workers.dev/)** — Guide a cycling pelican along a changing 3D coastline: switch between three lanes, jump and duck around obstacles, collect fish combos, and use shields, magnets and a six-second invincible dash.
  - Creator: [chat01.ai](https://chat01.ai) (credited in the submission).
  - Platform: Desktop and mobile browsers, with keyboard or touch controls; free, no login, according to the submission. Demo not independently verified.
  - GPT-6 Astra: [Issue #10](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/10) — The submitter reports generation with a single prompt; the linked development record has not been independently verified.
  - Resources: [Shared development record](https://chat01.ai/zh/chat/01M1VJ5K55803V2YK3T2NKTX33)
  - Preview: ![PELICAN PEDAL title screen with a pelican riding a bicycle beside the sea; screenshot supplied in Issue #10.](https://github.com/user-attachments/assets/ec085afa-3c45-4de6-b03f-5c626f941546)

- **[狂飙赛车 · OVERDRIVE](https://gpt-kbsc.0nz.de/)** — 3D racing against five AI rivals, with selectable cars and tracks, time trials, drifting and nitro.
  - Creator: zding
  - Platform: Browser, Chinese UI; opened without login or payment.
  - GPT-6 Astra: GPT-6 Astra usage and contribution details await creator confirmation.
  - Preview: ![狂飙赛车 · OVERDRIVE — Gameplay](assets/screenshots/overdrive/gameplay.jpg)

- **[零界深潜 / ABYSS PROTOCOL](https://abyss-descent.zecoba.workers.dev/)** — Move left and right to descend through a 3D shaft of moving, crumbling and phase-shifting platforms, avoiding lasers and saws while collecting crystals and survival chips.
  - Creator: [chat01.ai](https://linux.do/u/bandaot)
  - Platform: Desktop browser; Chinese UI, A/D or arrow keys. Opened and started without login or payment; mobile play not tested.
  - Model participation: [Chat01](https://chat01.ai/en/chat/01M221KFTPTBQV5ARQWJM7P86Y) — The shared record is labeled GPT-6 Pro and documents iterative game generation and revisions; it does not explicitly identify GPT-6 Astra.
  - Resources: [HTML](https://files.chat01.ai/python-generations/9ab8f4f7-425f-4709-b741-7218d87122e6/abyss-descent.html) · [ZIP](https://files.chat01.ai/python-generations/9ab8f4f7-425f-4709-b741-7218d87122e6/abyss-descent-complete.zip)
  - Preview: ![零界深潜 / ABYSS PROTOCOL](assets/screenshots/abyss-protocol/gameplay.jpg)

- **[疾风赛道 / Kart Racing（跑跑卡丁车）](https://qwen3-8-test.vercel.app/)** — Race three laps with drifting, nitro and items; the live game is titled 疾风赛道 and offers a 2–4-player online mode.
  - Creator: [SteveZhang / jay6697117](https://github.com/jay6697117) · [X](https://x.com/stevezh10058543)
  - Platform: Browser; free, no login. Creator reports VPN/proxy access may be needed. Solo start checked; multiplayer not tested.
  - GPT-6 Astra: [Issue #51](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/51) — Creator reports: The first version used Qwen3.8 Max; Astra comprehensively rebuilt the second version.
  - Preview: ![疾风赛道 / Kart Racing（跑跑卡丁车）](https://github.com/user-attachments/assets/015e0ca1-7032-4d0e-9391-ad3f40d84227)

- **[TIDAL RUSH — Paradise GP](https://tidal-rush-paradise-gp.skirano.chatgpt.site/)** — Drift through a tropical kart circuit, use items and race seven rivals over three laps.
  - Creator: [Pietro Schirano](https://x.com/skirano)
  - Platform: Browser; the three-lap race started without sign-in. Keyboard driving, drift and item controls, plus on-screen touch buttons.
  - GPT-6 Astra: [Model attribution](https://openai.com/index/gpt-6-astra/) — OpenAI’s Astra launch page links this interactive kart game and credits Pietro Schirano. The X discovery post is a community share, not the creator’s own post. [Verification notes](assets/screenshots/tidal-rush/SOURCE.md).
  - Resources: [X discovery](https://x.com/alexgetmancom/status/2095598460921614825)
  - Preview: ![Tidal Rush’s tropical kart track with race position and drift controls.](assets/screenshots/tidal-rush/gameplay.jpg)

- **[LUNA — Crimson Requiem / 紅月のレクイエム](https://luna-crimson-requiem.ponsuke.chatgpt.site/)** — Jump through a gothic pixel-art stage, slash enemies, stomp them or summon an attack in a short side-scrolling adventure.
  - Creator: [音羽ぽんすけ](https://x.com/ponsuke_otowa)
  - Platform: Browser, Japanese UI; keyboard controls and creator-reported smartphone support. One stage is available.
  - GPT-6 Astra: [X](https://x.com/ponsuke_otowa/status/2096531744933425299) — The creator reports about 25 minutes of Astra development and one correction to the walking animation; the music is credited separately to Suno. [Verification notes](assets/screenshots/luna-crimson-requiem/SOURCE.md).
  - Preview: ![LUNA fighting through a red-moon gothic street with health and summon meters.](assets/screenshots/luna-crimson-requiem/gameplay.jpg)

- **[Strange Orbit](https://app.usecrayon.ai/play/47df78e2-1410-45d1-833c-196e1161c0b8)** — Race astronaut cyclists around a planet’s rings, collect stardust, draft rivals and boost through the Orbital Cup.
  - Creator: [Crayon](https://x.com/usecrayon)
  - Platform: Browser on Crayon; keyboard and documented touch controls. The public page offers racing, time-trial and endless-wander modes.
  - GPT-6 Astra: [X](https://x.com/usecrayon/status/2097468975995302167) — Crayon credits GPT-6 Astra, Crayon Pro and Three.js for the space biking game. [Verification notes](assets/screenshots/crayon-space-bike/SOURCE.md).
  - Preview: ![Astronaut cyclists racing along a planetary ring with lap, position and stardust indicators.](assets/screenshots/crayon-space-bike/gameplay.jpg)

- **[One More Vine — Into the Wild](https://onemorevine.bennash.dev/)** — Run, jump and swing across four jungle levels, collect treasure and avoid crocodiles while improving your time.
  - Creator: [Ben Nash](https://x.com/bennash)
  - Platform: Browser, keyboard and on-screen movement controls; the opening level and instructions loaded without sign-in.
  - GPT-6 Astra: [X](https://x.com/bennash/status/2096282758930645170) — The creator explicitly calls it a four-level Pitfall-inspired game made with GPT-6 Astra. [Verification notes](assets/screenshots/one-more-vine/SOURCE.md).
  - Preview: ![A jungle platforming level with hanging vines, treasures, pits and crocodiles.](assets/screenshots/one-more-vine/gameplay.jpg)

- **[混合马里奥Ⅱ · 忍者龙剑传 × 坦克大战 / Mario Mix II](https://aha-xiaoq.github.io/games/mario-mix-2/play.html)** — Bring Ninja Gaiden’s Ryu Hayabusa and the Battle City tank into Mario’s underground World 1-2: jump, climb walls and fight as Ryu, battle from above as the tank, or rescue the princess in a ninja-to-tank relay.
  - Creator: [在下_小Q（Aha-xiaoQ）](https://github.com/Aha-xiaoQ)
  - Platform: Desktop browser, Chinese UI, keyboard recommended; free, no login or installation.
  - GPT-6 Astra: [Issue #65](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/65) — The creator reports using GPT-6 Astra to iteratively develop and debug the game code and interactions, while providing gameplay direction and feedback; not a one-shot generation.
  - Resources: [Project page](https://aha-xiaoq.github.io/games/mario-mix-2/) · [Video](https://www.bilibili.com/video/BV1erYt69EFP/) · [Verification and image credits](assets/screenshots/mario-mix-2/SOURCE.md)
  - Rights: Unofficial fan game; classic characters, images and music retain their respective owners’ rights. See the original game’s material credits.
  - Preview: ![Mario Mix II — video cover supplied by the creator, not a gameplay capture.](https://aha-xiaoq.github.io/games/mario-mix-2/cover.jpg)
  - Screenshot: ![Mario Mix II tank firing at the World 1-2 entrance; running version 1.0, captured 2026-09-09.](assets/screenshots/mario-mix-2/gameplay.jpg)

### Experimental & multiplayer

Unusual mechanics, online competition, and cooperative experiences.

- **[ASTRA Arcade](https://astra-arcade.antonioleivag.chatgpt.site/)** — Six browser games in one arcade, including mountain rally, snowboarding and antigravity racing; counted as one collection.
  - Creator: [Antonio Leiva](https://x.com/antonioleivag)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/antonioleivag/status/2096509898481651770) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/astra-arcade/SOURCE.md).
  - Preview: ![ASTRA Arcade — Gameplay](assets/screenshots/astra-arcade/gameplay.jpg)

- **[Chao Party](https://chao.party/)** — An unofficial multiplayer Chao Garden fan game: choose a Sonic character, explore the garden and interact with Chao.
  - Creator: [Hank](https://x.com/h4nkdog)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/h4nkdog/status/2097308970431987857) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/chao-party/SOURCE.md).
  - Preview: ![Chao Party — Gameplay](assets/screenshots/chao-party/gameplay.jpg)

- **[ORBITAL GARDEN · 轨道花园](https://orbital-garden-one.vercel.app)** — An interactive particle-art sandbox: morph 48,000 light points between a flower, a gravity ring, and a galaxy, disturb the sculpture, and export a moment as a poster.
  - Creator: [jackroc](https://github.com/jackroc)
  - Platform: Modern browser with WebGL; click the title to try it online. Free, no login or API key; the standalone HTML also works offline. Optional ambient sound requires Web Audio.
  - GPT-6 Astra: [Creation record and model contribution](works/orbital-garden/README.md#模型与创作记录) — The creator used GPT-6 Astra ultra for the concept, code, and copy, with collaborative review; not a one-shot test.
  - Resources: [Source and setup instructions](works/orbital-garden/README.md) · [Standalone HTML](works/orbital-garden/index.html) · [Prompt](works/orbital-garden/PROMPT.md) · Built with: native WebGL, Web Audio, and Canvas 2D.
  - Preview: ![Orbital Garden's mint-green particle flower, with shape selection, vitality and time-speed controls, and poster export.](assets/screenshots/orbital-garden/gameplay.jpg)

- **[Toy2Game / 在线玩具箱](https://games.asmo.top/)** — Four 3D adaptations of tabletop toys: knock out ice beneath a penguin, guide rabbits through traps, balance astronauts on a platform and solve parking puzzles.
  - Creator: [asmoyou](https://github.com/asmoyou)
  - Platform: Desktop, tablet and mobile browsers; free, no login. Local same-screen turn-taking for 2–4 seats, including computer opponents, plus solo puzzles; no online multiplayer. Demo not independently verified.
  - GPT-6 Astra: [Creator statement](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/24) — Creator reports that GPT-6 Astra autonomously implemented the games and carried out testing from toy descriptions and feature requirements.
  - Resources: [Source and setup](https://github.com/asmoyou/toy2game) · [Noncommercial license](https://github.com/asmoyou/toy2game/blob/main/LICENSE) — Source available; noncommercial use is free, commercial use requires prior written authorization from the author. Built with: TypeScript, React, Vite, Three.js.
  - Preview: ![Toy2Game overview with four actual 3D game scenes: penguin ice, rabbit traps, astronaut balancing and parking escape. Image provided by asmoyou.](https://raw.githubusercontent.com/asmoyou/toy2game/main/docs/images/toy2game-overview.png)

- **[Jelly Baby](https://jelly.scottsun.io/)** — A soft-body jelly playground on a sunlit tabletop, with jumping, stretching, a swing and a trampoline.
  - Creator: [Scott](https://x.com/scottstts)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/scottstts/status/2096364764054131119) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/jelly-baby/SOURCE.md).
  - Resources: [GitHub](https://github.com/scottstts/Jelly-Baby)
  - Preview: ![Jelly Baby](assets/screenshots/jelly-baby/gameplay.jpg)

- **[泡泡坦克大作战联机版 / Toon Tank Arena](https://toon-tank-arena.jay6697117.deno.net/)** — Defend a rainbow core with bouncing shells and power-ups in a colorful tank arena, with solo, local co-op and online battle options.
  - Creator: [SteveZhang / jay6697117](https://github.com/jay6697117) · [X](https://x.com/stevezh10058543)
  - Platform: Browser; free, no login. Creator reports VPN/proxy access may be needed. Solo start checked; multiplayer not tested.
  - GPT-6 Astra: [Issue #52](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/52) — Creator reports: GPT-6 Astra Pro built the first version; GPT-6 Astra in Codex handled later improvements.
  - Preview: ![泡泡坦克大作战联机版 / Toon Tank Arena](https://github.com/user-attachments/assets/713d44f3-a77c-452c-ba6d-1231882dc670)

## What an entry includes

A useful recommendation makes it easy to understand what a game is, where to try it, and why it belongs here.

| Detail | What to include |
| --- | --- |
| Game & creator | The game title and a link to its original creator or team |
| Why it is interesting | One sentence about the core mechanic, without promotional filler |
| Access | A direct browser game link without downloads, installation, local setup or mandatory sign-in |
| Gameplay screenshot | At least one actual gameplay screenshot with a publicly accessible image URL |
| Platform & requirements | Browser / desktop / mobile; disclose payment, login, or special hardware requirements |
| Astra's role | A creator statement, development log, or public record explaining how GPT-6 Astra contributed |
| Development resources | Source code, technology, and the making-of story, where available |

Model use is attributed to the creator's public description; unsupported claims will not be presented as confirmed facts. Playable prototypes are welcome, and open source is optional.

## Help maintain the list

[Submit a game through an issue](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml), or open a pull request. See the [contribution guide](CONTRIBUTING.md) for the entry format.

Please [report broken links or incorrect information](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=broken-link.yml), including attribution errors or changed access requirements.

## License

Original curated text and artwork in this repository are dedicated to the public domain under [CC0 1.0](LICENSE). Linked games, code, images, trademarks, and other third-party materials retain their own licenses and rights. Listing a project does not change its permissions.
