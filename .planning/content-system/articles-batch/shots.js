// Articles Batch — full-page screenshots + render checks for the 30 components-specialty articles.
// Articles render their full content (directAnswer/ArticleBody) at root /<slug>.
// Run: NODE_PATH=/opt/homebrew/lib/node_modules PORT=3240 node .planning/content-system/articles-batch/shots.js
const { chromium } = require('playwright');
const PORT = process.env.PORT || 3240;
const SERVICES = [
  'roof-flashing-installation-repair',
  'chimney-flashing-repair',
  'gutter-installation-repair',
  'gutter-guard-installation',
  'skylight-installation-repair',
  'fascia-installation-repair',
  'soffit-installation-repair',
  'roof-vent-installation-repair',
  'roof-waterproofing',
  'roof-deck-repair-replacement',
];
const SLUGS = SERVICES.flatMap((id) => [
  `when-to-replace-${id}-nj`,
  `how-much-does-${id}-cost-in-nj`,
  `${id}-complete-homeowner-guide-nj`,
]);
const DEFAB = /GAF[-\s]?certified|same-?day|24\s*\/\s*7|0\s*%\s*financing|top-?rated|master[-\s]elite|HAAG|500\+|velux[-\s]?certified/i;
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
