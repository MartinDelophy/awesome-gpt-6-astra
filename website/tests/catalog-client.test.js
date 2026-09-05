import test from 'node:test';
import assert from 'node:assert/strict';
import { fetchCatalogJson } from '../shared/catalog-client.js';

test('a stalled fallback times out and leaves the caller able to retry', async () => {
  let flight = false;
  let signal;
  async function refresh(fetchImpl) {
    if (flight) return null;
    flight = true;
    try { return await fetchCatalogJson('/data/catalog-fallback.json', { timeoutMs: 10, fetchImpl }); }
    finally { flight = false; }
  }
  await assert.rejects(refresh((_, options) => { signal = options.signal; return new Promise(() => {}); }), /timed out/);
  assert.equal(signal.aborted, true);
  assert.equal(flight, false);
  assert.deepEqual(await refresh(async () => new Response(JSON.stringify({ works: [] }))), { works: [] });
});

test('the recovery timeout also covers a response body that never finishes', async () => {
  await assert.rejects(fetchCatalogJson('/data/catalog-fallback.json', {
    timeoutMs: 10,
    fetchImpl: async () => ({ ok: true, json: () => new Promise(() => {}) }),
  }), /timed out/);
});
