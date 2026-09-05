import test from 'node:test';
import assert from 'node:assert/strict';
import { previewPath, previewVersion } from '../shared/preview-version.js';
import {
  createPreviewHandler,
  extractOpenGraphImage,
  fetchPublicResource,
  githubRepositoryUrl,
  isPublicAddress,
  resolvePreview,
  validatePreviewUrl,
} from '../server/previews.js';

test('blocks loopback, private, link-local, reserved and tunneled IPs', () => {
  for (const value of ['0.0.0.0', '10.1.2.3', '100.100.100.200', '127.0.0.1', '169.254.169.254', '172.16.0.1', '172.31.255.255', '192.168.1.1', '192.0.0.1', '192.0.2.1', '198.18.0.1', '198.51.100.1', '203.0.113.1', '224.0.0.1', '255.255.255.255', '::1', '::', '::ffff:127.0.0.1', 'fe80::1', 'fc00::1', '2001:db8::1', '2001:0:1234::1', '2002:7f00:1::', '3fff::1']) {
    assert.equal(isPublicAddress(value), false, value);
  }
  for (const value of ['8.8.8.8', '1.1.1.1', '172.32.0.1', '104.18.2.3', '2606:4700:4700::1111']) assert.equal(isPublicAddress(value), true, value);
});

test('URL validation rejects alternate IP encodings, credentials, unsafe schemes and ports', () => {
  for (const value of ['http://example.com/img.png', 'file:///etc/passwd', 'https://127.1/a', 'https://2130706433/', 'https://0x7f000001/', 'https://[::1]/', 'https://localhost/', 'https://metadata.google.internal/', 'https://user:pass@example.com/a', 'https://example.com:8443/a', 'https://example.com./a']) {
    assert.throws(() => validatePreviewUrl(value), undefined, value);
  }
  assert.equal(validatePreviewUrl('https://images.example.com/preview.png').hostname, 'images.example.com');
});

test('public fetch rejects a direct private target before any request', async () => {
  await assert.rejects(fetchPublicResource('https://127.0.0.1/secret'));
  await assert.rejects(fetchPublicResource('https://metadata.google.internal/'));
});

test('extracts Open Graph images with relative paths and entity-encoded query strings', () => {
  const html = `<meta content='/social.png?a=1&amp;b=2' property='og:image'><meta name="twitter:image" content="https://cdn.example.com/twitter.png">`;
  assert.equal(extractOpenGraphImage(html, 'https://demo.example.com/path/'), 'https://demo.example.com/social.png?a=1&b=2');
  assert.equal(extractOpenGraphImage('<meta property="og:image" content="http://127.0.0.1/a">', 'https://demo.example.com/'), null);
});

test('repository fallback extracts only exact public GitHub repository identities', () => {
  assert.equal(githubRepositoryUrl({ sourceUrl: 'https://github.com/owner/hello-world/tree/main/demo' }), 'https://github.com/owner/hello-world');
  assert.equal(githubRepositoryUrl({ sourceUrl: 'https://github.com.attacker.example/owner/repo' }), null);
  assert.equal(githubRepositoryUrl({ sourceUrl: 'https://example.com/' }), null);
});

test('existing works use captured screenshots without any external call', async () => {
  const result = await resolvePreview({ id: 'seed-test', demoUrl: 'https://mosswing-quiet-flight.jack-514.chatgpt.site/' }, { fetcher: () => { throw new Error('Unexpected network'); } });
  assert.equal(result.location, '/previews/mosswing.jpg');
  assert.equal(result.kind, 'screenshot');
});

test('new works automatically fetch an author image and deduplicate concurrent requests', async () => {
  let calls = 0;
  const png = Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), Buffer.alloc(20)]);
  const work = { id: 'new-work-dedupe', imageUrl: 'https://author.example.com/actual-work.png' };
  const fetcher = async url => { calls++; assert.equal(url, work.imageUrl); await new Promise(resolve => setTimeout(resolve, 5)); return { body: png }; };
  const [a, b] = await Promise.all([resolvePreview(work, { fetcher }), resolvePreview(work, { fetcher })]);
  assert.equal(a.contentType, 'image/png');
  assert.equal(a.kind, 'author-image');
  assert.equal(b, a);
  assert.equal(calls, 1);
});

test('HTML or active SVG pretending to be an image falls back to real GitHub card', async () => {
  const jpg = Buffer.concat([Buffer.from([0xff, 0xd8, 0xff]), Buffer.alloc(20)]);
  const calls = [];
  const work = { id: 'new-work-github', imageUrl: 'https://author.example.com/fake.jpg', repoUrl: 'https://github.com/creator/project' };
  const fetcher = async url => {
    calls.push(url);
    if (url === work.imageUrl) return { body: Buffer.from('<svg onload="alert(1)"></svg>'), contentType: 'image/jpeg' };
    if (url === work.repoUrl) return { body: Buffer.from('<meta property="og:image" content="https://opengraph.githubassets.com/hash/creator/project">'), contentType: 'text/html', url };
    return { body: jpg, contentType: 'image/jpeg' };
  };
  const result = await resolvePreview(work, { fetcher });
  assert.equal(result.kind, 'repository-card');
  assert.equal(result.contentType, 'image/jpeg');
  assert.equal(calls.length, 3);
});

test('missing or inaccessible previews return unavailable instead of fabricated art', async () => {
  const result = await resolvePreview({ id: 'no-preview', demoUrl: 'https://broken.example.com/' }, { fetcher: async () => { throw new Error('Unavailable'); } });
  assert.equal(result.unavailable, true);
  assert.equal(result.maxAge, 900);
});

function mockResponse() {
  return { statusCode: 200, headers: {}, setHeader(key, value) { this.headers[key.toLowerCase()] = value; }, end(body) { this.body = body; } };
}

test('API accepts catalog IDs only and never fetches an unknown or injected URL', async () => {
  let calls = 0;
  const handler = createPreviewHandler({ loadCatalog: async () => ({ works: [{ id: 'known' }] }), getPreview: async () => { calls++; return { location: '/previews/mosswing.jpg', kind: 'screenshot', maxAge: 86400 }; } });
  for (const [url, expected] of [['/api/preview?url=https://127.0.0.1', 400], ['/api/preview?id=known&url=https://evil.example.com', 400], ['/api/preview?id=known&id=other', 400], ['/api/preview?id=unknown', 404]]) {
    const res = mockResponse(); await handler({ url, method: 'GET' }, res); assert.equal(res.statusCode, expected);
  }
  assert.equal(calls, 0);
  const res = mockResponse();
  await handler({ url: '/api/preview?id=known', method: 'GET' }, res);
  assert.equal(res.statusCode, 307);
  assert.equal(res.headers.location, '/previews/mosswing.jpg');
  assert.equal(calls, 1);
});

test('API HEAD omits response body and unsupported methods cannot trigger catalog loads', async () => {
  let calls = 0;
  const handler = createPreviewHandler({ loadCatalog: async () => { calls++; return { works: [{ id: 'known' }] }; }, getPreview: async () => ({ body: Buffer.from('sample-image'), contentType: 'image/png', kind: 'author-image', maxAge: 86400 }) });
  const post = mockResponse();
  await handler({ url: '/api/preview?id=known', method: 'POST' }, post);
  assert.equal(post.statusCode, 405);
  assert.equal(calls, 0);
  const head = mockResponse();
  await handler({ url: '/api/preview?id=known', method: 'HEAD' }, head);
  assert.equal(head.statusCode, 200);
  assert.equal(head.body, undefined);
  assert.equal(head.headers['content-length'], 12);
});

test('preview URLs change with image or destination edits while retaining the stable work ID', () => {
  const work = { id: 'stable-id', imageUrl: 'https://example.com/image.png', demoUrl: 'https://example.com/', sourceUrl: 'https://github.com/a/b', repoUrl: 'https://github.com/a/b' };
  const original = previewPath(work);
  assert.equal(new URL(original, 'https://showcase.example').searchParams.get('id'), work.id);
  for (const field of ['imageUrl', 'demoUrl', 'sourceUrl', 'repoUrl']) {
    assert.notEqual(previewPath({ ...work, [field]: `${work[field]}?updated` }), original, field);
  }
  assert.equal(previewPath({ ...work, description: 'Edited copy' }), original);
});

test('API validates the catalogue-derived preview version and rejects arbitrary cache-busting values', async () => {
  const work = { id: 'versioned-work', demoUrl: 'https://example.com/' };
  let calls = 0;
  const handler = createPreviewHandler({ loadCatalog: async () => ({ works: [work] }), getPreview: async () => { calls++; return { location: '/previews/mosswing.jpg', kind: 'screenshot', maxAge: 86400 }; } });
  const valid = mockResponse();
  await handler({ url: previewPath(work), method: 'GET' }, valid);
  assert.equal(valid.statusCode, 307);
  assert.equal(calls, 1);
  const oldVersion = previewVersion(work);
  work.demoUrl = 'https://updated.example.com/';
  for (const [query, status] of [[oldVersion, 404], ['0000000000000000', 404], ['arbitrary', 400], [`${previewVersion(work)}&v=${previewVersion(work)}`, 400]]) {
    const res = mockResponse();
    await handler({ url: `/api/preview?id=${work.id}&v=${query}`, method: 'GET' }, res);
    assert.equal(res.statusCode, status);
  }
  assert.equal(calls, 1);
  const updated = mockResponse();
  await handler({ url: previewPath(work), method: 'GET' }, updated);
  assert.equal(updated.statusCode, 307);
  assert.equal(calls, 2);
});
