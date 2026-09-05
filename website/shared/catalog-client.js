/** Bound both the network request and body decoding, including recovery requests. */
export async function fetchCatalogJson(url, { timeoutMs = 20_000, fetchImpl = globalThis.fetch, signal } = {}) {
  const controller = new AbortController();
  const abort = () => controller.abort();
  if (signal?.aborted) throw new Error('Request aborted');
  signal?.addEventListener('abort', abort, { once: true });
  let timer;
  try {
    return await Promise.race([
      (async () => {
        const response = await fetchImpl(url, { signal: controller.signal, cache: 'no-store' });
        if (!response.ok) throw new Error('Catalogue unavailable');
        return response.json();
      })(),
      new Promise((_, reject) => {
        timer = setTimeout(() => { controller.abort(); reject(new Error('Catalogue request timed out')); }, timeoutMs);
      }),
    ]);
  } finally {
    clearTimeout(timer);
    signal?.removeEventListener('abort', abort);
  }
}
