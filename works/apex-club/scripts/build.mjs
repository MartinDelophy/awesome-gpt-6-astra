import {mkdir,copyFile,cp,readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const files=['pickup-design.js','citadel-gate.js','stunt-model.js','scene-design.js','index.html','style.css','bootstrap.js','game.js','driver-studio.js','kart-catalog.js','race-rules.js','driving-model.js','race-effects.js','race-audio.js','armored-kart.js','garage.html','garage.js','garage.css','mobile-controls.js'];
await mkdir('dist',{recursive:true});
for(const file of files)await copyFile(file,`dist/${file}`);
await cp('vendor','dist/vendor',{recursive:true});
// Content-based release revision invalidates every local module after deployment.
const hash=createHash('sha256');for(const file of files)hash.update(await readFile(file));const version=hash.digest('hex').slice(0,12);
for(const file of files){let s=await readFile(`dist/${file}`,'utf8');s=s.replace(/(['"])(\.\/[^'"?]+\.(?:js|css))(?:\?v=[^'"]*)?\1/g,(_,q,p)=>`${q}${p}?v=${version}${q}`);await writeFile(`dist/${file}`,s);}
await writeFile('dist/_headers','/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  Cache-Control: no-cache\n');
console.log(`Static release ${version} built in dist/. No runtime CDN or build dependencies.`);
