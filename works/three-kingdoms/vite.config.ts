import {sites} from '@openai/sites-vite-plugin';
import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import {defineConfig} from 'vite';
export default defineConfig({css:{postcss:{plugins:[tailwindcss()]}},server:{watch:{useFsEvents:false,usePolling:true}},plugins:[vinext(),sites()]});
