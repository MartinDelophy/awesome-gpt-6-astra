# Potato League

- Game and creator: [Potato League by PromptPotatoGames](https://promptpotatogames.itch.io/potato-league), also known as Prompt Potato on [YouTube](https://www.youtube.com/@ThePromptPotato).
- Submission: [Issue #135](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/135), submitted by princemahid901-byte with the name “Rocket League 3d fun play” and creator “Mahid”. The catalog uses the published game's title and author; the submitter's connection to that author is not established.

## Model attribution — reviewed 2026-10-28

The [creator's development video](https://www.youtube.com/watch?v=SdfR7TuJdlc), published October 18, compares an Astra prototype called Rocket Rush with a Claude Opus 5.5 prototype. At approximately [3:22–3:51](https://www.youtube.com/watch?v=SdfR7TuJdlc&t=202s), the creator chooses Claude and describes further prompting; the later game becomes Potato League, using Tripo models. The video description links the same itch.io game supplied in #135. Its chapters and public transcript were inspected.

This establishes Astra's role in the comparison, not in the released Potato League. The issue's model-use field only says “new version”. The catalog explicitly marks Astra involvement in the final game as unconfirmed and credits the documented Claude/Tripo workflow. It does not treat the two prototypes as the same game or claim an Astra one-prompt build.

## Access and capture — 2026-10-28 (Asia/Shanghai)

The public itch.io page is available without signing in and identifies the game as free and desktop-only. The title's Run game button requests the creator's HTML5 build at `https://html-classic.itch.zone/html/19853545/index.html?v=1792346081` (HTTP Last-Modified: October 18, 2026).

Direct resource loading repeatedly returned `ERR_CONNECTION_RESET` in the review environment, although curl could fetch the same HTTPS files. A temporary local transport forwarded only those unchanged public itch-hosted build resources through curl back to the browser at their original URLs. No game code, assets or gameplay state were patched. This is a qualified runtime check, not confirmation that an unassisted browser launch succeeds on every network. The catalog retains the creator's public itch.io entry point.

Game and screenshot content belong to Prompt Potato / PromptPotatoGames and their respective rights holders. Catalog inclusion does not relicense the game or its third-party assets. The game page identifies the project as an unofficial, non-commercial Rocket League fan game and supplies its own credits.

The v1.0 title screen loaded, and the normal Play → Exhibition → Start Match flow entered a bot match. The stadium, car, scoreboard, boost gauge, goal event and replay interface rendered without an account, payment or game installation. Keyboard driving, jump and boost inputs were exercised. This was a short runtime/control check, not a full playthrough; controller support and all modes were not independently tested.

## Screenshot

`gameplay.jpg` is a direct reviewer capture of the running v1.0 game iframe on **2026-10-28 (Asia/Shanghai)**, at **1600 × 900**, JPEG quality 90, under 4 MB. It was captured using the resource transport described above; no generated imagery, gameplay-state injection or source-code changes were used.
