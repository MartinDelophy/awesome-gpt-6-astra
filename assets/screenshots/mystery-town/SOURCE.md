# Mystery Town — sources and verification

Checked 2026-09-14, based on main a737ecfedb5e02a434f8c76d4be0bf79ceba3c2e.

- Submission and model-use statement: https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/80
- Game and creator: https://playableworld.itch.io/mystery-town and https://playableworld.itch.io/
- Submitter-provided Lantern Conservatory screenshot: https://github.com/user-attachments/assets/db8d4c45-9907-498d-89b3-ec025c6b9bcc

The submitter describes solo development with GPT-6 Astra as the primary development agent under human direction, review and final approval. Reported contributions include gameplay implementation, Three.js scenes, asset generation/integration, Blender-assisted work, visual iteration, automated QA and browser regression checks, debugging, performance validation and level refinement. This is an attributed development statement, not an independent audit. The reported stack is TypeScript, Vite, Three.js and Blender; the source is not public.

## Direct play check

Opened the supplied itch.io page and selected Run game, Explore a place 1 and Step inside. The Borrowed Light Study rendered. Selected The book, opened its cover and took the first sheet: the UI changed to First sheet taken and added Place Rubbing to Collected papers. No download, installation, payment or game login was requested. An existing itch.io session was present, so this was not a clean anonymous-session test; the public listing labels the game Free and the submitter explicitly states no mandatory login.

Desktop mouse interaction verified. Touch support and WebGL requirement follow the submission; all five puzzles and all 11 in-game languages were not tested. The README translations are the catalog's 12 languages, distinct from game language support.

## Screenshot

`gameplay.png` is an unedited 1280 × 720 capture of the running public itch.io build on 2026-09-14, showing the opened book, fold clues and collected paper. Game visuals remain subject to their owners' rights. The submitted screenshot above remains linked as an additional source.
