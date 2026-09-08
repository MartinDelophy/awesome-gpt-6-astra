<div align="center">

![Awesome GPT-6 Astra — Games worth playing. Ideas worth building.](assets/banner.svg)

# Awesome GPT-6 Astra

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md) [![LINUX DO](https://img.shields.io/badge/LINUX%20DO-Community-f0b73f?style=flat-square)](https://linux.do/) [![Cases: 16](https://img.shields.io/badge/Cases-16-58a6ff?style=flat-square)](https://astragames.aigccreative.com/)

**A collection of interesting games made with GPT-6 Astra.**

Playful ideas, games you can try, and development stories that inspire the next creator.

**English** · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md)<br>
[Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md)<br>
[Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md) · [Bahasa Indonesia](README.id.md)

[Submit a game](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) · [Contribute](CONTRIBUTING.md)

</div>

## Start here

Explore **15 browser games and 1 interactive particle-art sandbox**: Three Kingdoms territory strategy, wooden interlocking and sliding puzzles, soft-body fruit merging, one-tap flight, magic-carpet combat, a five-stage bullet-hell shooter, island power-grid tower defense, wilderness survival, Bay Circuit kart racing, coastal cycling with a pelican, tabletop toys turned into 3D games, and Orbital Garden. Click a title to open its demo or source with setup instructions.

Catalog updated: **2026-09-08**. Model attribution is based on creator or submitter statements; unconfirmed details are marked in individual entries. This date records catalog maintenance, not a new play-test of every game.

- **Looking for something to play?** Browse the genres below.
- **Built a game?** [Submit your project](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) with a playable or source link, a gameplay screenshot, and a description of how you used GPT-6 Astra.
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

### Strategy & simulation

Tower defense, strategic card games, management games, building, and simulation sandboxes.

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

### RPGs & adventures

Role-playing, exploration, narrative adventures, and interactive stories.

*Waiting for the first game.*

### Platformers & racing

Parkour, platform challenges, racing, and games built around movement and routes.

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

### Experimental & multiplayer

Unusual mechanics, online competition, and cooperative experiences.

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

## What an entry includes

A useful recommendation makes it easy to understand what a game is, where to try it, and why it belongs here.

| Detail | What to include |
| --- | --- |
| Game & creator | The game title and a link to its original creator or team |
| Why it is interesting | One sentence about the core mechanic, without promotional filler |
| Access | A playable link, or a public source repository with setup instructions |
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
