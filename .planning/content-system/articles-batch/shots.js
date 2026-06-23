// Articles Batch — full-page screenshots + render checks for the 12 energy-solar articles.
// Articles render their full content (directAnswer/ArticleBody) at root /<slug>.
// Run: NODE_PATH=/opt/homebrew/lib/node_modules PORT=3230 node .planning/content-system/articles-batch/shots.js
const { chromium } = require('playwright');
const PORT = process.env.PORT || 3230;
const SLUGS = [
  'is-solar-panel-roofing-installation-right-for-your-home',
  'how-much-does-solar-panel-roofing-installation-cost-in-nj',
  'solar-panel-roofing-installation-nj-incentives-and-savings',
  'is-solar-shingle-installation-right-for-your-home',
  'how-much-does-solar-shingle-installation-cost-in-nj',
  'solar-shingle-installation-nj-incentives-and-savings',
  'is-energy-efficient-roofing-solutions-right-for-your-home',
  'how-much-does-energy-efficient-roofing-solutions-cost-in-nj',
  'energy-efficient-roofing-solutions-nj-incentives-and-savings',
  'is-silicone-roof-coating-right-for-your-home',
  'how-much-does-silicone-roof-coating-cost-in-nj',
  'silicone-roof-coating-nj-incentives-and-savings',
];
const DEFAB = /GAF[-\s]?certified|same-?day|24\s*\/\s*7|0\s*%\s*financing|top-?rated|master[-\s]elite|HAAG|500\+|licensed/i;
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 1000 } });
  for (const s of SLUGS) {
    const url = `http://localhost:${PORT}/${s}`;
    const resp = await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    await page.addStyleTag({ content: '*{opacity:1!important;transform:none!important;animation:none!important;transition:none!important}' });
    await page.waitForTimeout(300);
    const out = `/tmp/article-${s}.png`;
    await page.screenshot({ path: out, fullPage: true });
    const h1 = await page.locator('h1').count();
    // main content only (exclude header/footer chrome) for ** + de-fab checks
    const main = (await page.locator('main').first().innerText().catch(() => '')) || (await page.innerText('body'));
    const starLeak = (main.match(/\*\*/g) || []).length;
    const defab = DEFAB.test(main) ? (main.match(DEFAB) || [])[0] : 'none';
    const lead = await page.locator('main').first().innerText().then((t) => t.slice(0, 90).replace(/\n/g, ' ')).catch(() => '');
    console.log(`  ${s}\n     status=${resp ? resp.status() : '?'} h1=${h1} **leak=${starLeak} defab=${defab}\n     lead="${lead}"`);
  }
  await browser.close();
})();
