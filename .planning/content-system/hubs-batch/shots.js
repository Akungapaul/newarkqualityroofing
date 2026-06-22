// Hubs Batch — full-page screenshots of the 6 FLAT hubs.
// Run: NODE_PATH=/opt/homebrew/lib/node_modules PORT=3240 node .planning/content-system/hubs-batch/shots.js
const { chromium } = require('playwright');
const PORT = process.env.PORT || 3240;
const SLUGS = [
  'residential-roofing',
  'commercial-roofing',
  'flat-roof-systems',
  'roofing-materials',
  'free-roofing-estimate',
  'our-roofing-process',
];
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 1000 } });
  for (const s of SLUGS) {
    const url = `http://localhost:${PORT}/${s}`;
    const resp = await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    await page.addStyleTag({ content: '*{opacity:1!important;transform:none!important;animation:none!important;transition:none!important}' });
    await page.waitForTimeout(300);
    const out = `/tmp/hub-${s}.png`;
    await page.screenshot({ path: out, fullPage: true });
    const h1 = await page.locator('h1').count();
    console.log(`  ${s}: ${out} (status=${resp ? resp.status() : '?'}, h1=${h1})`);
  }
  await browser.close();
})();
