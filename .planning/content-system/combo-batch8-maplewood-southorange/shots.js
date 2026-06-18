// Combo Batch 8 (Maplewood + South Orange) — full-page screenshots of a representative set per city.
// Run: NODE_PATH=/opt/homebrew/lib/node_modules node .planning/content-system/combo-batch8-maplewood-southorange/shots.js
const { chromium } = require('playwright');
const PORT = process.env.PORT || 3230;
// representative slice: a keep/repair page, a roof-type page, a process-heavy/differentiated page,
// and the historic (COA) page that diverges most between the two cities.
const TARGETS = [
  ['maplewood', ['roof-repair', 'slate-roof-replacement', 'storm-damage-roof-repair', 'historic-roof-restoration', 'commercial-roof-replacement']],
  ['south-orange', ['roof-repair', 'slate-roof-replacement', 'storm-damage-roof-repair', 'historic-roof-restoration', 'commercial-roof-replacement']],
];
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  for (const [city, slugs] of TARGETS) {
    for (const s of slugs) {
      const url = `http://localhost:${PORT}/${s}-${city}-nj`;
      const resp = await page.goto(url, { waitUntil: 'networkidle' });
      await page.addStyleTag({ content: '*{opacity:1!important;transform:none!important;animation:none!important;transition:none!important}' });
      await page.waitForTimeout(250);
      const out = `/tmp/batch8-${city}-${s}.png`;
      await page.screenshot({ path: out, fullPage: true });
      const h1 = await page.locator('h1').count();
      console.log(`  ${city}/${s}: ${out}  (status=${resp ? resp.status() : '?'}, h1=${h1})`);
    }
  }
  await browser.close();
})();
