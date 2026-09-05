# Automatic project previews

The UI requests `GET /api/preview?id=<catalog-work-id>`. The endpoint looks up the
ID using `loadCatalog()`; it does not accept a URL supplied by a visitor.

Preview selection:

1. An explicit author image parsed from the upstream README, when available.
2. A verified local screenshot for one of the initial four projects.
3. The public demo's Open Graph or Twitter image.
4. The public GitHub repository's own Open Graph card.
5. HTTP 404, allowing the UI to display the real title and “暂无预览” fallback.

New catalog entries receive this treatment automatically. There is no project-count
limit or manually maintained list controlling which projects appear in the gallery.
Only the optional initial screenshot assets use a manifest; removing that manifest
entry does not remove the project from the catalog.

`previews.manifest.json` records the source URLs and capture date of the initial
screenshots. They were captured in an isolated 1440 × 950 browser on 2026-09-05 and
visually checked against the actual demos. They are not generated artwork. The
Orbital Garden demo was verified at
https://orbital-garden.hp20230404.chatgpt.site/; its source README identifies the same
project even while upstream omits this demo URL. Images remain attributable to their
respective project creators. These screenshot files are fixed captures; a new
explicit author image in the catalog automatically takes precedence over them.

Successful previews cache for 24 hours; unavailable previews retry after 15 minutes.
The server uses bounded in-memory caching (24 MB / 256 entries), deduplicates concurrent
requests for the same project, and emits CDN cache headers. A 307 response identifies
a local screenshot; a 200 returns a proxied raster image. `X-Preview-Type` reports
`screenshot`, `author-image`, `repository-card`, or `unavailable`.

The fetcher accepts HTTPS on port 443 only, disallows credentials and IP-literal URLs,
rejects private/reserved DNS results, pins the validated IP to the request, and
revalidates every redirect. Requests have a deadline, a three-redirect maximum,
768 KB HTML / 4 MB image limits, and raster-signature checks. SVG is never proxied.
No cookies, authorization headers, or incoming visitor headers are forwarded.

There is no screenshot-service subscription or API key dependency. Thum.io's official
documentation was checked on 2026-09-05: its free offering allows 1,000 screenshot
impressions per month, and adjustable wait time requires the Better plan, so it was
not adopted as an unlimited production dependency.

References: https://www.thum.io/ and
https://www.thum.io/documentation/api/url

Run verification with `node --test website/tests/previews.test.js` from the repository
root, or include it in the website's normal Node test suite.
