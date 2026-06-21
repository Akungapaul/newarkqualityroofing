// Combo Batch 10 (caldwells-roseland) — full-page screenshots of a representative set per city.
// Run: NODE_PATH=/opt/homebrew/lib/node_modules node .planning/content-system/combo-batch10-caldwells-roseland/shots.js
const { chromium } = require('playwright');
const PORT = process.env.PORT || 3230;
// representative slice per city: a keep/repair page, a roof-type page, a process-heavy/differentiated page,
// and the historic (COA) page that diverges MOST across the 5 caldwells-roseland COA gates.
const SLUGS = ['roof-repair', 'slate-roof-replacement', 'storm-damage-roof-repair', 'historic-roof-restoration'];
const TARGETS = ['caldwell', 'north-caldwell', 'essex-fells', 'fairfield', 'roseland'].map((c) => [c, SLUGS]);
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  for (const [city, slugs] of TARGETS) {
    for (const s of slugs) {
      const url = `http://localhost:${PORT}/${s}-${city}-nj`;
      const resp = await page.goto(url, { waitUntil: 'networkidle' });
      await page.addStyleTag({ content: '*{opacity:1!important;transform:none!important;animation:none!important;transition:none!important}' });
      await page.waitForTimeout(250);
      const out = `/tmp/batch10-${city}-${s}.png`;
      await page.screenshot({ path: out, fullPage: true });
      const h1 = await page.locator('h1').count();
      console.log(`  ${city}/${s}: ${out}  (status=${resp ? resp.status() : '?'}, h1=${h1})`);
    }
  }
  await browser.close();
})();
