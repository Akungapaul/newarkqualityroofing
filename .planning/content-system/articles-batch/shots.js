// Articles Batch — full-page screenshots + render checks for the 24 commercial-roof-types articles.
// Articles render their full content (directAnswer/ArticleBody) at root /<slug>.
// Run: NODE_PATH=/opt/homebrew/lib/node_modules PORT=3240 node .planning/content-system/articles-batch/shots.js
const { chromium } = require('playwright');
const PORT = process.env.PORT || 3240;
const SLUGS = [
  'tpo-roofing-installation-warning-signs-nj',
  'how-much-does-tpo-roofing-installation-cost-in-nj',
  'tpo-roofing-installation-pros-and-cons-nj-homeowners',
  'epdm-commercial-roofing-warning-signs-nj',
  'how-much-does-epdm-commercial-roofing-cost-in-nj',
  'epdm-commercial-roofing-pros-and-cons-nj-homeowners',
  'modified-bitumen-roofing-warning-signs-nj',
  'how-much-does-modified-bitumen-roofing-cost-in-nj',
  'modified-bitumen-roofing-pros-and-cons-nj-homeowners',
  'built-up-roofing-warning-signs-nj',
  'how-much-does-built-up-roofing-cost-in-nj',
  'built-up-roofing-pros-and-cons-nj-homeowners',
  'commercial-metal-roofing-warning-signs-nj',
  'how-much-does-commercial-metal-roofing-cost-in-nj',
  'commercial-metal-roofing-pros-and-cons-nj-homeowners',
  'pvc-roofing-warning-signs-nj',
  'how-much-does-pvc-roofing-cost-in-nj',
  'pvc-roofing-pros-and-cons-nj-homeowners',
  'green-roof-installation-warning-signs-nj',
  'how-much-does-green-roof-installation-cost-in-nj',
  'green-roof-installation-pros-and-cons-nj-homeowners',
  'spray-foam-roofing-warning-signs-nj',
  'how-much-does-spray-foam-roofing-cost-in-nj',
  'spray-foam-roofing-pros-and-cons-nj-homeowners',
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
