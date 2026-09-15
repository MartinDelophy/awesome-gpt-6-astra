# Driving experience update

The two selectable environments now have separate authored spline routes. Bay uses long coastal sweeps and a lighthouse landmark; Jade Citadel uses tighter courtyard turns, greater elevation variation and smoothly narrowed gate approaches. The road, ramps, collision boundaries, AI and map all use the selected route. Changing environment reloads the scene to release the previous GPU resources.

Vehicles, helmet details, clustered rounded trees and softened rock geometry share a polished toy racing direction. Road surfaces now receive standard lighting and nearby directional shadows in Quality mode. Environment reflections support the vehicles' metal and paint. Performance mode disables dynamic shadows. Citadel combines cool distant mountains with warm lantern lights.

## Controls and teaching

The rule is **charge a drift → release → press E / MINI during the window**. Releasing by itself never applies acceleration. Exit, cut, air and landing boosts retain their existing brief windows. Cyan sparks indicate a charged drift, gold indicates a stronger charge; miniature boosts use warm exhaust and nitro uses blue. Camera widening differs for nitro and miniature boosts, and Reduced camera motion removes it. Drift sparks take priority over exhaust particles while sliding.

A first launch offers an interactive, skippable practice session; it can be replayed from the lobby or settings. Four steps require actual steering, slowing from over 100 internal speed to under 90 with the brake, reaching drift charge, and successfully firing a boost. Practice has no rivals, a speed cap and recovery within the initial safe section. Successful completion starts a formal race. After 55 seconds it pauses with retry/skip, rather than awarding completion. Skipping is remembered on this device.

Beginner assists lower maximum speed/acceleration and smooth deliberate steering. AI target speeds are also lowered in this mode to retain a reachable finish window. Releasing steering still preserves world heading. There is no route-following controller in production. Standard mode uses the existing handling. Turn warnings are shown when assistance is enabled.

## Interface and tactics

Chinese and English are selectable in settings and remembered locally. The first default follows browser language. Racing prioritizes road visibility, position and boost readiness. Full standings and long help are kept out of the active racing HUD; pause contains the control rules. Nearby labels are limited to three non-overlapping labels and distinguish teammates from opponents.

EMP uses an actual 150-world-unit radius, excludes teammates, consumes charge and has a 5-second cooldown. A subtle range circle appears with valid targets, then pulses on activation; the HUD reports target count, hit count and cooldown. AI rivals are slowed for 1.1 seconds by a successful hit. Team scores remain visible. Phone EMP availability follows the same cooldown as the keyboard.

## Practice goals and sound

Best laps, six sector splits and 10 Hz ghost samples are stored separately by route, vehicle and assisted/standard mode. Recovery invalidates the current lap record. Ghost playback is optional, interpolated, non-colliding and ends at its recorded duration. Records stay on the device; no account or server is required.

- Bronze: finish the race.
- Silver: finish with at most three collisions.
- Gold: meet Silver and complete at least six charged drifts and six mini boosts.

Bronze unlocks a gold livery in solo mode. Team colors take priority. Results include collision, drift and boost totals plus average recovery time when recorded.

Original synthesized music, engine/tyre audio and prompt sounds have separate volume controls. Engine pitch follows speed/gear bands; tyre noise follows sliding. Boost-ready, miniature boost, nitro and boost-end cues differ. The music speeds up on the final lap. Audio starts only after a user gesture.

## Validation and remaining evaluation

43 automated tests cover existing manual steering, recovery and mobile sensor isolation plus teaching, records, medals, ghosts, EMP and the two route layouts. A test-only controller completes both full splines and checks for persistent wall contact; it is never imported by the game. Browser checks covered Chinese lobby/settings, teaching entry/skip, pause help, both routes, desktop rendering, and landscape layout; no rendering errors were reported in those checks.

These checks do not establish first-time human corner success, real-phone frame rates/gyro behavior, or a complete subjective audio mix assessment. Those require hands-on playtesting. Full keyboard completion of the tutorial and multiple full races in a real browser remain manual acceptance checks; pure teaching transitions and both full route traversals are automated.

## Club garage lobby

The homepage now uses a physical maintenance bay with a rolling door, tool chest, tire stacks, overhead lighting and a raised maintenance platform. A wide desktop layout separates the primary vehicle, six-car collection strip and compact race console. Phone layouts use a horizontally scrollable collection and fixed launch button; landscape phones retain a side console.

Car thumbnails render the actual models using the existing WebGL renderer. The selected track gets a live scene thumbnail; previously visited tracks use their cached thumbnails and unvisited tracks show their authored route outline. Car/team/mode choices survive scene changes. Vehicle titles, local medal and selected-car best lap are reflected in the lobby. Entry, selection and a short shutter/camera launch transition respect Reduced camera motion.

Browser validation covered desktop 1280×800, portrait 390×844 and landscape 844×390, model selection, race launch, scene switching and preview-to-scene correspondence. These are browser layout checks, not physical phone performance measurements.

## Custom keyboard controls

PC defaults now follow a two-hand kart layout: arrows drive, Shift drifts, Ctrl fires nitro, W triggers a ready mini/air/landing boost, Q fires EMP, H pauses and R restarts. A/D/S remain fallback steering/brake keys unless explicitly rebound. Space is unassigned by default. Tap and release Ctrl before W to avoid browser Ctrl+W shortcuts. Command/Alt shortcuts are not consumed. Esc always pauses/resumes.

Settings → Controls offers ten remappable actions, duplicate-key validation, Esc cancellation, automatic local saving and a restore-default button. Letters, numbers, arrows, Space, Shift and Ctrl are supported; both physical sides of Shift/Ctrl share a binding. Help, race hints and lesson instructions use the saved keys. Touch actions and gyro eligibility remain independent.

Validation: 49 tests including countdown input, held-key release, alias overlap, modifier normalization, preset separation, persistence validation and translated hints. Desktop browser verified conflict rejection, remapping, cancellation, persistence, remapped pause and live help. Physical keyboard rollover varies by hardware; no claim of testing every keyboard or operating-system shortcut combination.

## In-page map switching

Map selection swaps cached route geometry in the existing renderer instead of navigating/reloading the document. Track meshes, decorations, gate layout, collision samples, pickup positions, minimap and record context change together. The garage, selected kart/team, settings and lobby scroll remain in place. Only Bay and Citadel are cached; revisiting a map reuses its assets and preview. URL history supports Back/Forward, including cancelling a pending launch before switching back.

Validation: desktop and 390 × 844 browser checks for repeated Bay/Citadel selection, retained car/team and lobby state, Back navigation and actual Citadel race launch. Three route-switch regression tests cover cache reuse, inactive visibility, geometry/URL updates and race/launch guards. No physical-phone memory or GPU benchmark was performed.
