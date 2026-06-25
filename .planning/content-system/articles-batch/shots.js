// Articles Batch — full-page screenshots + render checks for the 60 comparison articles.
// Articles render their full content (directAnswer/ArticleBody) at root /<slug>.
// Run: NODE_PATH=/opt/homebrew/lib/node_modules PORT=3240 node .planning/content-system/articles-batch/shots.js
const { chromium } = require('playwright');
const PORT = process.env.PORT || 3240;
const COMPARISONS = [
  'asphalt-shingles-vs-metal-roofing',
  'slate-vs-tile-roofing',
  'tpo-vs-epdm-roofing',
  'metal-vs-tile-roofing',
  'asphalt-vs-slate-roofing',
  'wood-shake-vs-asphalt-shingles',
  'pvc-vs-tpo-roofing',
  'standing-seam-vs-corrugated-metal',
  'modified-bitumen-vs-tpo',
  'rubber-roofing-vs-tpo',
  'cedar-shake-vs-wood-shingle',
  'built-up-roofing-vs-modified-bitumen',
  'spray-foam-vs-tpo',
  'green-roof-vs-traditional-roofing',
  'solar-shingles-vs-solar-panels',
  'roof-repair-vs-replacement',
  'roof-coating-vs-replacement',
  'roof-overlay-vs-tear-off',
  'patching-vs-full-roof-repair',
  'preventive-maintenance-vs-emergency-repair',
  'best-roofing-material-nj-weather',
  'best-commercial-roofing-material',
  'best-roofing-for-flat-roofs',
  'best-roofing-for-historic-homes-nj',
  'cheapest-vs-most-durable-roofing',
  'most-energy-efficient-roofing-materials',
  'architectural-vs-3-tab-shingles',
  'diy-vs-professional-roof-repair',
  'best-roofing-for-essex-county-colonial-homes',
  'roof-warranty-comparison-guide',
];
// Comparison slugs: pos1 how-to-choose-{cmp}-nj / pos2 what-nj-roofers-recommend-{cmp}.
const SLUGS = COMPARISONS.flatMap((c) => [
  `how-to-choose-${c}-nj`,
  `what-nj-roofers-recommend-${c}`,
]);
const DEFAB = /GAF[-\s]?certified|same-?day|24\s*\/\s*7|24-7|0\s*%\s*financing|top-?rated|master[-\s]elite|certainteed select|HAAG|500\+|golden pledge|drexel|sheffield|thousands of (roofs|installations|projects)|our crews|we install/i;
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
