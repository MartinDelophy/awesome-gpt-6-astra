import { mkdir, copyFile } from 'node:fs/promises';

// Publish only the standalone artwork; documentation stays in the source repository.
await mkdir(new URL('./dist/', import.meta.url), { recursive: true });
await copyFile(
  new URL('./index.html', import.meta.url),
  new URL('./dist/index.html', import.meta.url),
);
console.log('Built dist/index.html — no dependencies or external assets.');
