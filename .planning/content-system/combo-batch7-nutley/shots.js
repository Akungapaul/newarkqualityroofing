// Combo Batch 7 (Nutley) — full-page screenshots of a representative set.
// Run: NODE_PATH=/opt/homebrew/lib/node_modules node .planning/content-system/combo-batch7-nutley/shots.js
const { chromium } = require('playwright');
const PORT = process.env.PORT || 3230;
const SLUGS = [
  'roof-repair', 'asphalt-shingle-roofing', 'storm-damage-roof-repair',
  'roof-thermal-imaging-inspections', 'historic-roof-restoration', 'commercial-roof-replacement',
];
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  for (const s of SLUGS) {
    const url = `http://localhost:${PORT}/${s}-nutley-nj`;
    await page.goto(url, { waitUntil: 'networkidle' });
    // force AnimateIn reveals visible for a complete full-page capture
    await page.addStyleTag({ content: '*{opacity:1!important;transform:none!important;animation:none!important;transition:none!important}' });
    await page.waitForTimeout(250);
    const out = `/tmp/batch7-${s}.png`;
    await page.screenshot({ path: out, fullPage: true });
    const h1 = await page.locator('h1').count();
    console.log(`  ${s}: ${out}  (h1=${h1})`);
  }
  await browser.close();
})();
