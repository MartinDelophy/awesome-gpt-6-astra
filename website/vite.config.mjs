import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

function localApi() {
  function install(server) {
    server.middlewares.use(async (req, res, next) => {
      const pathname = new URL(req.url || '/', 'http://localhost').pathname;
      const endpoint = { '/api/catalog': 'catalog', '/api/preview': 'preview' }[pathname];
      if (!endpoint) return next();
      try {
        const { default: handler } = await import(pathToFileURL(resolve(process.cwd(), `api/${endpoint}.js`)).href);
        await handler(req, res);
      } catch (error) {
        server.config.logger.error(`Local API: ${error.message}`);
        if (!res.headersSent) { res.statusCode = 503; res.setHeader('Content-Type', 'application/json'); }
        if (!res.writableEnded) res.end(JSON.stringify({ error: 'Temporarily unavailable' }));
      }
    });
  }
  return { name: 'astra-local-api', configureServer: install, configurePreviewServer: install };
}

export default defineConfig({
  build: {
    outDir: "dist/client",
  },
  optimizeDeps: {
    include: ["react", "react-dom/client"],
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: ["terminal.local"],
    warmup: {
      clientFiles: ["./src/main.jsx"],
    },
  },
  plugins: [react(), localApi()],
});
