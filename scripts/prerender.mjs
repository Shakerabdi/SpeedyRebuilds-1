import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

// Render the same React tree used by the browser into the production homepage.
// This makes the page copy and links available before JavaScript downloads.
const root = fileURLToPath(new URL('../', import.meta.url));
const output = new URL('../dist/index.html', import.meta.url);
const server = await createServer({
  root,
  appType: 'custom',
  server: { middlewareMode: true },
  logLevel: 'error',
});

try {
  const { renderHomepage } = await server.ssrLoadModule('/scripts/render-homepage.tsx');
  const markup = renderHomepage();
  const html = await readFile(output, 'utf8');
  const placeholder = '<div id="root"></div>';
  if (!html.includes(placeholder) || !markup.includes('<h1')) {
    throw new Error('Homepage prerender failed: expected one empty root and rendered page content.');
  }
  await writeFile(output, html.replace(placeholder, () => `<div id="root">${markup}</div>`));
  console.log('Prerendered homepage: page copy and links included in dist/index.html.');
} finally {
  await server.close();
}
