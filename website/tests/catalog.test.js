import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { createCatalogService, parseCatalogMarkdown, safeUrl, REPOSITORY } from '../server/catalog.js';

const entry = (name = 'Aurora', description = 'A useful project.', url = 'https://aurora.example/') => `- **[${name}](${url})** — ${description}\n  - 作者：[Maker](https://github.com/maker)\n  - 开发资料：[源码](https://github.com/maker/aurora/tree/main/src)\n`;
const document = (entries = entry(), heading = '工具') => `# Awesome projects\n\n## 作品目录\n\n### ${heading}\n\n${entries}`;
const ok = (markdown, etag = 'example') => new Response(markdown, { status: 200, headers: { etag } });

test('current README parses every actual entry and excludes navigation, attribution, and contribution links', () => {
  const markdown = readFileSync(new URL('../../README.md', import.meta.url), 'utf8');
  const works = parseCatalogMarkdown(markdown);
  const titles = [...markdown.matchAll(/^- \*\*\[([^\]]+)\]/gm)].map(match => match[1]);
  assert.deepEqual(works.map(work => work.name), titles);
  assert.equal(works[0].author.name, 'Ayi1337');
  assert.ok(works.every(work => ['game', 'experiment'].includes(work.category)));
  const orbital = works.find(work => work.name.includes('ORBITAL'));
  assert.equal(orbital.sourceUrl, `https://github.com/${REPOSITORY}/blob/main/works/orbital-garden/README.md`);
  assert.equal(orbital.category, 'experiment');
});

test('adding, deleting, editing and reclassifying entries changes the result without a curated array', () => {
  const before = parseCatalogMarkdown(document(entry('Aurora') + '\n' + entry('Second', 'Other work.', 'https://second.example/')));
  const after = parseCatalogMarkdown(document(entry('Aurora', 'Updated description.', 'https://new.example/') + '\n' + entry('New', 'New work.', 'https://new-work.example/'), '网站'));
  assert.deepEqual(after.map(work => work.name), ['Aurora', 'New']);
  assert.equal(after[0].id, before[0].id);
  assert.equal(after[0].description, 'Updated description.');
  assert.equal(after[0].category, 'website');
  assert.equal(after[0].demoUrl, 'https://new.example/');
  assert.deepEqual(after.map(work => work.sourceOrder), [0, 1]);
  assert.deepEqual(parseCatalogMarkdown(document('暂无作品。')), []);
});

test('new categories, GFM tables, reference links and sparse rows are handled', () => {
  const markdown = `# Work\n\n## 新类别\n\n| 作品 | 简介 | 作者 | 类型 | 试玩 | 源码 | 封面 |\n| --- | --- | --- | --- | --- | --- | --- |\n| [Nova][nova] | 手机日历 | [Jane](https://github.com/jane) | 应用 | [体验](https://nova.example/) | [源码](https://github.com/jane/nova) | ![preview](assets/nova.png) |\n| Plain name | Useful automation | Dev | 工具 | [Open](https://plain.example/) | | |\n| Incomplete | | |\n\n[nova]: https://github.com/jane/nova\n`;
  const works = parseCatalogMarkdown(markdown);
  assert.equal(works.length, 2);
  assert.equal(works[0].category, 'app');
  assert.equal(works[0].repoUrl, 'https://github.com/jane/nova');
  assert.equal(works[0].demoUrl, 'https://nova.example/');
  assert.equal(works[0].imageUrl, `https://raw.githubusercontent.com/${REPOSITORY}/main/assets/nova.png`);
  assert.equal(works[1].category, 'tool');
  assert.equal(works[1].name, 'Plain name');
  assert.equal(parseCatalogMarkdown(document(entry(), '全新类型'))[0].category, 'other');
});

test('duplicate entries are removed while different works in a monorepo are preserved', () => {
  const works = parseCatalogMarkdown(document(entry() + '\n' + entry() + '\n' + entry('Another', 'Different.', 'https://another.example/')));
  assert.equal(works.length, 2);
  assert.equal(works[0].repoUrl, works[1].repoUrl);
  assert.notEqual(works[0].id, works[1].id);
});

test('project names beginning with metadata words remain actual projects', () => {
  const works = parseCatalogMarkdown(document(entry('Sourcegraph') + '\n' + entry('Platformer', 'A fun game.', 'https://platformer.example/')));
  assert.deepEqual(works.map(work => work.name), ['Sourcegraph', 'Platformer']);
});

test('malformed documents fail closed and explanatory or malicious links never become works', () => {
  assert.throws(() => parseCatalogMarkdown('<html>Temporarily unavailable</html>'), /Unrecognized/);
  assert.throws(() => parseCatalogMarkdown(''), /Invalid/);
  const bad = `- **[Unsafe](javascript:alert%281%29)** — Do not open.\n- **[Unsafe data](data:text/html,hello)** — Do not open.\n- [提交作品](https://github.com/a/b/issues/new) — Contribute your project.\n- [许可](https://github.com/a/b/blob/main/LICENSE) — License information.\n`;
  assert.deepEqual(parseCatalogMarkdown(document(bad)), []);
  assert.equal(safeUrl('javascript:alert(1)'), null);
  assert.equal(safeUrl('data:text/plain,hi'), null);
  assert.equal(safeUrl('https://user:secret@example.com'), null);
  assert.equal(safeUrl('https://example.com/\nfoo'), null);
  assert.equal(safeUrl('#tools'), null);
  assert.equal(safeUrl('works/app/README.md'), `https://github.com/${REPOSITORY}/blob/main/works/app/README.md`);
  assert.equal(safeUrl('../demo.html', { readmePath: 'works/README.md' }), `https://github.com/${REPOSITORY}/blob/main/demo.html`);
});

test('cache coalesces concurrent requests, then picks up additions and removals after TTL', async () => {
  let time = 0;
  let calls = 0;
  let upstream = document();
  const service = createCatalogService({ now: () => time, fallback: null, cacheTtlMs: 100, fetchImpl: async () => { calls++; return ok(upstream); } });
  const first = await Promise.all([service.loadCatalog(), service.loadCatalog(), service.loadCatalog()]);
  assert.equal(calls, 1);
  assert.equal(first[0].source.status, 'fresh');
  upstream = document(entry('New project'));
  assert.equal((await service.loadCatalog()).works[0].name, 'Aurora');
  assert.equal(calls, 1);
  time = 101;
  assert.equal((await service.loadCatalog()).works[0].name, 'New project');
  assert.equal(calls, 2);
});

test('conditional requests retain entries and refresh the successful check timestamp', async () => {
  let time = 0;
  let calls = 0;
  const service = createCatalogService({ now: () => time, fallback: null, cacheTtlMs: 10, fetchImpl: async (_, options) => {
    if (calls++ === 0) return ok(document(), 'v1');
    assert.equal(options.headers['If-None-Match'], 'v1');
    return new Response(null, { status: 304 });
  } });
  const first = await service.loadCatalog();
  time = 11;
  const refreshed = await service.loadCatalog();
  assert.deepEqual(refreshed.works, first.works);
  assert.notEqual(refreshed.source.checkedAt, first.source.checkedAt);
  assert.equal(refreshed.source.status, 'fresh');
});

test('CDN only receives the remaining origin TTL and cached reads keep checkedAt unchanged', async () => {
  let time = 0;
  const service = createCatalogService({ now: () => time, fallback: null, fetchImpl: async () => ok(document()) });
  const first = await service.handleCatalog({ method: 'GET' });
  const checkedAt = (await first.json()).source.checkedAt;
  assert.equal(first.headers.get('vercel-cdn-cache-control'), 'public, s-maxage=300');
  time = 120_000;
  const second = await service.handleCatalog({ method: 'GET' });
  assert.equal(second.headers.get('vercel-cdn-cache-control'), 'public, s-maxage=180');
  assert.equal(second.headers.get('cache-control'), 'no-store');
  assert.equal((await second.json()).source.checkedAt, checkedAt);
  const head = await service.handleCatalog({ method: 'HEAD' });
  assert.equal(await head.text(), '');
});

test('failed fetch or unrecognizable README keeps last successful catalogue, labels it stale, then recovers', async () => {
  let time = 0;
  let upstream = document();
  const service = createCatalogService({ now: () => time, fallback: null, cacheTtlMs: 10, retryDelayMs: 5, fetchImpl: async () => ok(upstream) });
  const original = await service.loadCatalog();
  time = 11;
  upstream = '<html>Something broke</html>';
  const stale = await service.loadCatalog();
  assert.deepEqual(stale.works, original.works);
  assert.equal(stale.source.status, 'stale');
  assert.equal(stale.source.stale, true);
  assert.equal(stale.source.lastSuccessfulAt, original.source.checkedAt);
  time = 17;
  upstream = document(entry('Recovered'));
  const recovered = await service.loadCatalog();
  assert.equal(recovered.works[0].name, 'Recovered');
  assert.equal(recovered.source.stale, false);
});

test('cold-start failure uses the shipped snapshot with its original successful timestamp', async () => {
  const fallback = { works: parseCatalogMarkdown(document()), source: { checkedAt: '2026-01-01T00:00:00.000Z', revision: 'snapshot' } };
  const service = createCatalogService({ fallback, fetchImpl: async () => { throw new Error('offline'); } });
  const response = await service.handleCatalog({ method: 'GET' });
  const result = await response.json();
  assert.equal(response.status, 200);
  assert.equal(result.source.status, 'fallback');
  assert.equal(response.headers.get('vercel-cdn-cache-control'), 'no-store');
  assert.equal(result.source.lastSuccessfulAt, fallback.source.checkedAt);
  assert.deepEqual(result.works, fallback.works);
});

test('timeout and missing fallback return explicit unavailable status; unsupported methods do not fetch', async () => {
  let calls = 0;
  const service = createCatalogService({ fallback: null, timeoutMs: 10, fetchImpl: () => { calls++; return new Promise(() => {}); } });
  assert.equal((await service.handleCatalog({ method: 'POST' })).status, 405);
  assert.equal(calls, 0);
  const response = await service.handleCatalog({ method: 'GET' });
  assert.equal(response.status, 503);
  assert.equal((await response.json()).source.status, 'unavailable');
});
