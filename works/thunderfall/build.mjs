import { mkdir, copyFile, rm } from 'node:fs/promises';
const output = new URL('./dist/', import.meta.url);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of ['index.html', 'style.css', 'app.js', 'engine.js', 'data.js', 'render.js', 'audio.js', 'icon.svg']) {
  await copyFile(new URL(file, import.meta.url), new URL(file, output));
}
console.log('Built Thunderfall: 8 local files, no runtime dependencies.');
