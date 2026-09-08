import {mkdir,cp,writeFile,stat} from 'node:fs/promises';
await stat('dist/client/index.html');
await mkdir('.vercel/output/static',{recursive:true});
await cp('dist/client','.vercel/output/static',{recursive:true});
await writeFile('.vercel/output/config.json',JSON.stringify({version:3,routes:[{src:'/',dest:'/index.html'},{handle:'filesystem'}]},null,2));
console.log('Vercel static output ready.');
