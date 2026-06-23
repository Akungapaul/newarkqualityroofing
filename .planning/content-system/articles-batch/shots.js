// Articles Batch — full-page screenshots + render checks for the 27 residential-roof-types articles.
// Articles render their full content (directAnswer/ArticleBody) at root /<slug>.
// Run: NODE_PATH=/opt/homebrew/lib/node_modules PORT=3240 node .planning/content-system/articles-batch/shots.js
const { chromium } = require('playwright');
const PORT = process.env.PORT || 3240;
const SLUGS = [
  'residential-roof-installation-warning-signs-nj',
  'how-much-does-residential-roof-installation-cost-in-nj',
  'residential-roof-installation-pros-and-cons-nj-homeowners',
  'asphalt-shingle-roofing-warning-signs-nj',
  'how-much-does-asphalt-shingle-roofing-cost-in-nj',
  'asphalt-shingle-roofing-pros-and-cons-nj-homeowners',
  'slate-roof-installation-repair-warning-signs-nj',
  'how-much-does-slate-roof-installation-repair-cost-in-nj',
  'slate-roof-installation-repair-pros-and-cons-nj-homeowners',
  'wood-shake-roofing-warning-signs-nj',
  'how-much-does-wood-shake-roofing-cost-in-nj',
  'wood-shake-roofing-pros-and-cons-nj-homeowners',
  'metal-roof-installation-repair-warning-signs-nj',
  'how-much-does-metal-roof-installation-repair-cost-in-nj',
  'metal-roof-installation-repair-pros-and-cons-nj-homeowners',
  'flat-roof-installation-repair-warning-signs-nj',
  'how-much-does-flat-roof-installation-repair-cost-in-nj',
  'flat-roof-installation-repair-pros-and-cons-nj-homeowners',
  'tile-roof-installation-repair-warning-signs-nj',
  'how-much-does-tile-roof-installation-repair-cost-in-nj',
  'tile-roof-installation-repair-pros-and-cons-nj-homeowners',
  'cedar-shake-roofing-warning-signs-nj',
  'how-much-does-cedar-shake-roofing-cost-in-nj',
  'cedar-shake-roofing-pros-and-cons-nj-homeowners',
  'rubber-roofing-epdm-warning-signs-nj',
  'how-much-does-rubber-roofing-epdm-cost-in-nj',
  'rubber-roofing-epdm-pros-and-cons-nj-homeowners',
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
