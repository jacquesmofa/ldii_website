#!/usr/bin/env node
/**
 * Prerendering: puts each page's real text into its HTML file, so search engines
 * and AI crawlers that do not run JavaScript still read the content.
 *
 * Runs after scripts/social-pages.mjs (which wrote out/<page>.html with the right
 * title, description and share picture). This opens every page from
 * src/content/seo.json in headless Chrome, takes what React drew inside
 * <div id="root"> and writes it into that page's file. In the browser React then
 * starts as usual and replaces it with the live page.
 *
 * Needs Chrome (GitHub's Ubuntu runners have it). Without Chrome the build still
 * succeeds and the pages simply stay as they were.
 */
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';

const root = process.cwd();
const outDir = path.resolve(root, process.argv[2] || 'out');
const seo = JSON.parse(fs.readFileSync(path.join(root, 'src/content/seo.json'), 'utf8'));

const CANDIDATES = [process.env.CHROME_PATH, '/usr/bin/google-chrome', '/usr/bin/google-chrome-stable', '/usr/bin/chromium', '/usr/bin/chromium-browser', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'].filter(Boolean);
const chrome = CANDIDATES.find((p) => fs.existsSync(p));
if (!chrome) {
  console.warn('prerender: no Chrome found, pages keep their share tags only (set CHROME_PATH to enable)');
  process.exit(0);
}

let chromium;
try {
  ({ chromium } = await import('playwright-core'));
} catch {
  console.warn('prerender: playwright-core not installed, skipped');
  process.exit(0);
}

const fileFor = (p) => (p === '/' ? 'index.html' : `${p.replace(/^\/+|\/+$/g, '')}.html`);
// Serve the built app with the untouched shell for every address, like the live server does.
const shell = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');
const TYPES = { '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.woff': 'font/woff', '.png': 'image/png', '.jpg': 'image/jpeg', '.webmanifest': 'application/manifest+json' };
const server = http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  const file = path.join(outDir, url);
  if (url !== '/' && file.startsWith(outDir) && fs.existsSync(file) && fs.statSync(file).isFile() && !file.endsWith('.html')) {
    res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream' });
    return fs.createReadStream(file).pipe(res);
  }
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end(shell);
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const base = `http://127.0.0.1:${server.address().port}`;

const browser = await chromium.launch({ executablePath: chrome, args: ['--no-sandbox'] });
const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce' });
// Only the app itself is needed: pictures, video and fonts stay out (faster, works offline).
await context.route('**/*', (route) => {
  const req = route.request();
  if (!req.url().startsWith(base) || ['image', 'media', 'font'].includes(req.resourceType())) return route.abort();
  return route.continue();
});

let done = 0;
const failed = [];
for (const page of seo.pages) {
  if (!page?.path || page.noindex) continue;
  const target = path.join(outDir, fileFor(page.path));
  if (!fs.existsSync(target)) continue;
  // Two tries: a page that still fails is a real problem, not a slow moment.
  let lastError = '';
  for (let attempt = 1; attempt <= 2; attempt++) {
    const tab = await context.newPage();
    const pageErrors = [];
    tab.on('pageerror', (e) => pageErrors.push(e.message.split('\n')[0]));
    try {
      await tab.goto(base + page.path, { waitUntil: 'load', timeout: 30000 });
      await tab.waitForFunction(() => document.querySelector('#main h1'), null, { timeout: attempt === 1 ? 8000 : 15000 });
      await tab.waitForTimeout(300);
      const body = await tab.evaluate(() => {
        const rootEl = document.getElementById('root');
        // Drop things that only make sense live (video players, open dialogs).
        rootEl.querySelectorAll('video, [role="dialog"], script').forEach((n) => n.remove());
        return rootEl.innerHTML;
      });
      const html = fs.readFileSync(target, 'utf8');
      if (!html.includes('<div id="root"></div>')) throw new Error('no empty #root in ' + fileFor(page.path));
      fs.writeFileSync(target, html.replace('<div id="root"></div>', `<div id="root">${body}</div>`));
      done++;
      lastError = '';
      break;
    } catch (e) {
      lastError = pageErrors[0] || e.message.split('\n')[0];
    } finally {
      await tab.close();
    }
  }
  if (lastError) failed.push(`${page.path} (${lastError})`);
  if (failed.length >= 3) break; // enough to know something is wrong
}
await browser.close();
server.close();
console.log(`prerender: ${done} pages written with their content`);
if (failed.length) {
  // A page that cannot be drawn would be a blank page for visitors (usually an edit that left out
  // something the page needs). Stop here: nothing is uploaded and the live site stays as it was.
  console.error(`\n✗ These pages do not open: ${failed.join(', ')}\n  The website was NOT updated. Undo or fix the last content change and save again.`);
  process.exit(1);
}
