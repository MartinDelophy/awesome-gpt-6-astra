// Shared browser/server cache identity. The server verifies this value against the
// current catalogue; callers cannot use arbitrary versions to bypass its cache.
export function previewVersion(work) {
  const input = JSON.stringify([work.id, work.imageUrl ?? null, work.demoUrl ?? null, work.sourceUrl ?? null, work.repoUrl ?? null]);
  let first = 2166136261;
  let second = 3339675911;
  for (let i = 0; i < input.length; i++) {
    first = Math.imul(first ^ input.charCodeAt(i), 16777619);
    second = Math.imul(second ^ input.charCodeAt(i), 2246822519);
  }
  return (first >>> 0).toString(16).padStart(8, '0') + (second >>> 0).toString(16).padStart(8, '0');
}

export function previewPath(work) {
  return `/api/preview?id=${encodeURIComponent(work.id)}&v=${previewVersion(work)}`;
}
