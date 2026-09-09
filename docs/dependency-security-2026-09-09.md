# Dependency security review — 2026-09-09

Scope: open issues #55–#57, the website and both runnable game projects with npm lockfiles. Reports were checked against public advisories, actual lockfiles and npm's official audit endpoint, rather than applying the issue snippets literally.

## Findings and exposure

- **#55 — Undici:** the locked dependency is affected by [GHSA-4cwx-7wf7-3272](https://github.com/nodejs/undici/security/advisories/GHSA-4cwx-7wf7-3272). The dependency chain includes Miniflare and CLI tooling. No application use of Undici's shared cache interceptor was found. Three Kingdoms exports static client assets for Vercel; this review did not establish cross-user cache exposure in production. Upgrade the upstream tooling rather than force an incompatible global override.
- **#56 — Vite:** both the website's 6.4.2 and Three Kingdoms' 8.0.13 fall in affected ranges. [GHSA-fx2h-pf6j-xcff](https://github.com/advisories/GHSA-fx2h-pf6j-xcff) describes a Windows development-server file-deny bypass. A static production bundle does not run that development server. Update both versions, including other compatible transitive fixes identified by npm audit.
- **#57 — image-size:** Vinext beta.5 pins image-size 2.0.2. [GHSA-5p2g-fcmc-qvqq](https://github.com/advisories/GHSA-5p2g-fcmc-qvqq) lists no patched release, and npm still publishes 2.0.2 as latest. The suggested 2.0.3 upgrade is not available. Vinext beta.9 removes this dependency, so upgrading the parent eliminates it without inventing an upload endpoint or adding unused worker-thread code. No application image upload/dimension-parsing handler was found.

The issue title counts are scanner summaries, not a count of independently exploitable endpoints. Before changes, official npm audit reported 5 affected package records in the website, 11 in Three Kingdoms, and 0 in Sunjing Puzzles. These totals include vulnerable parents and transitive dependencies. Additional reported packages included React Server DOM, Cloudflare tooling, sharp, ws and CSS/browser build tooling; they are addressed within the dependency update.

## Implementation

The website stays on Vite 6, updated to 6.4.3. Three Kingdoms moves to Vinext beta.9, matching the framework version already used by Sunjing Puzzles, with compatible React 19.2.8, Vite 8.2.2 and RSC plugin 0.5.34. Cloudflare tooling and its required types are updated together. npm regenerates lockfiles and integrity values; no forced peer resolution or handwritten integrity hashes are used. Miniflare still pins sharp 0.35.2, so a scoped override selects the compatible 0.35.4 security patch; no global dependency override is applied. Sunjing Puzzles requires no changes.

## Operational limits

This is a dependency and code-path review, not evidence of an intrusion or a live exploit test. Windows-specific behavior was not reproduced on this macOS host. Existing developer processes retain their loaded dependency versions until restarted; the PR does not restart unrelated processes or redeploy externally hosted games. Reinstall from the updated lockfile before starting the next development/build session.

## Validation results

- Official `npm audit`: website 0, Three Kingdoms 0, Sunjing Puzzles 0 (no changes to the latter).
- Website: 27 catalog/preview tests and 4 Sites compatibility tests passed; production build passed.
- Three Kingdoms: 23 engine tests passed; TypeScript check passed; production static prerender and Vercel packaging passed.
- Sharp 0.35.4 PNG encode/decode smoke check passed with the installed native package.
- Resolved Undici versions: 7.29.0 and 7.29.1. No image-size package remains in the Three Kingdoms lockfile.
- `git diff --check` passed. An initial sandbox-only loopback-listen failure during prerender was resolved by allowing the local build operation; it was not an application regression.
