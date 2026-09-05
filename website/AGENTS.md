# Prototype Instructions

## User-approved production direction

- Recreate the dark sidebar portfolio in the second image of the latest design set: `/Users/peng/.codex/generated_images/01a070a8-a02b-7402-8aee-afcd0acdbd88/exec-e733e08c-c404-4515-bd7c-8006561b58c4.png`.
- This is a showcase for every kind of GPT-6 Astra work, not only games. Render only real entries from the upstream catalog; never ship the mockup's example projects.
- Read the public upstream `MartinDelophy/awesome-gpt-6-astra` catalog at runtime. New works must appear without manual content updates or a rebuild. Five-minute automatic checks are the current refresh policy.
- Production deployment is an independent Vercel project with Root Directory `website` and domain `astragames.aigccreative.com`. The existing `aigc-creative` Vercel project and `aigccreative.com` radar site are separate.
- Keep the optional Sites-ready starter runtime intact; Vercel uses the Node handlers in `api/` and static files in `dist/client`.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
