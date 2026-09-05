# Design QA — Astra showcase

final result: passed

## Evidence

- Source visual truth: `/Users/peng/.codex/generated_images/01a070a8-a02b-7402-8aee-afcd0acdbd88/exec-e733e08c-c404-4515-bd7c-8006561b58c4.png` (the user's selected option 2).
- Implementation: `http://localhost:4173/`, browser-rendered screenshots emitted inline in the Codex task on 2026-09-05. The browser capture API returned image bytes rather than a persistent screenshot path; no saved screenshot file is claimed.
- Desktop source and implementation: 1536 × 1024 pixels, 1536 × 1024 CSS viewport, 1:1 density, no browser chrome. Both images were presented together in the same comparison tool result twice, including after the final integration fixes.
- State: Chinese, all works, directory order, empty search, loaded previews. The source uses illustrative sample works; implementation intentionally uses all four real upstream entries. Four entries form two rows of two; five or more use the reference's featured row plus three-column grid.
- Additional rendered evidence: 390 × 844 mobile list, navigation drawer, and work detail dialog. Mobile document scrollWidth and viewport width both measured 390. All four preview images reported complete with nonzero natural width.

## Findings and comparison history

No outstanding P0/P1/P2 visual differences. Full-size comparison clearly showed readable navigation, heading, search controls, titles, captions and imagery, so additional cropped comparison was not necessary.

The initial desktop composition passed. Integration review then found two P2 behavioral issues: a hanging fallback request could block subsequent synchronization, and changed preview metadata could leave a stale image/loading state. Added bounded client requests and validated preview versions; 27 tests and the production build pass. Restarted the local API process, reloaded, and recaptured both desktop and mobile. All four genuine images now render and the sync indicator recovers normally. These were integration fixes, not aesthetic redesign iterations.

## Required fidelity surfaces

- Typography: clean sans-serif Chinese and Latin hierarchy, bold display heading, compact metadata. Long work titles truncate in cards and appear in full in the detail dialog. Mobile detail headings wrap within the panel.
- Layout rhythm: fixed approximately 210px desktop sidebar, aligned content gutter, wide image-led cards, restrained borders and consistent vertical spacing. Mobile uses a single column and drawer; no horizontal overflow.
- Colors: charcoal background, muted secondary text, light foreground, coral active/experience controls match the selected visual direction. Focus indicators and reduced-motion behavior are present.
- Images: all four current entries use actual public demo screenshots. New entries use upstream images or discovered preview metadata, with an explicit unavailable state if no preview exists. Reference-only fictitious projects are intentionally omitted to meet the user's requirement for the actual complete catalog.
- Copy/content: portfolio-wide categories, real author names, actual demo/source links and visible five-minute sync status. Directory ordering replaces the mock's unsupported recency claim because upstream does not provide publication dates.

## Interaction verification

- All four upstream works loaded, then experiment filter returned exactly Orbital Garden.
- Author search `Ayi1337` returned Mosswing and 瓜体实验室.
- Name ordering and English/Chinese interface switching worked.
- Unmatched search showed an empty state; browse-all restored the complete list.
- About dialog opened and closed; mobile drawer selection closed the drawer and filtered the list.
- Mobile work details showed the complete description and correct experience/source links.
- Console warning/error inspection after final reload returned an empty list.
- Catalog mutation, deletion, new types, timeout/recovery, caching and preview handling covered by automated tests.

## Remaining scope

Long catalogs use load-more pagination while search covers all loaded catalog data; no daily manual maintenance is required. Native device/browser coverage beyond the tested desktop and mobile viewports remains a follow-up compatibility check.

## Production deployment evidence — 2026-09-05

- Source commit `3e0465b4d16b4cc981aa83151f9d2ba0672d309f` was successfully pushed through SSH to [codex/astra-showcase](https://github.com/jackroc/awesome-gpt-6-astra/tree/codex/astra-showcase) in the user's fork.
- The official Vercel CLI successfully created production deployment `dpl_7tpTyRDHRN6hy9PCQ7AnU5yB9byu` in project `prj_qubO4PTSacAcfHoe1mC6hXqikC2j`. The project was initially named `website` and then renamed to `astragames` in Vercel.
- The deployment was verified online at [the initial production alias](https://website-murex-three-64.vercel.app/): the catalog API returned a fresh catalog containing all four current upstream works, and the preview endpoint returned HTTP 200. These checks were recorded by the deployment agent in the same Codex task.
- Vercel's Git integration is not connected: repository import reported insufficient access. Push-triggered UI deployments are therefore not enabled. Subsequent code releases use `npx vercel deploy --prod` from the linked `website` directory; runtime catalog refresh continues independently.
- Custom-domain binding is complete: Vercel reports `astragames.aigccreative.com` as Valid Configuration / Production on the independent `astragames` project. The existing Aliyun CNAME was already valid and required no changes.
- Final HTTPS browser inspection at [the official website](https://astragames.aigccreative.com/) shows all four real works and the automatic sync indicator; console warning/error inspection returned no entries. `/api/catalog` returned HTTP 200 with `source.status=fresh`, `source.stale=false`, and all four entries. Every versioned preview endpoint returned HTTP 200 and image/jpeg, with 96,924 / 201,801 / 130,083 / 184,639 bytes respectively.
- The existing radar site at [aigccreative.com](https://aigccreative.com/) was separately reopened and verified to show AIGC 机会雷达. It remains on the `aigc-creative` project.
