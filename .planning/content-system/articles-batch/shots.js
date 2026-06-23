// Articles Batch — full-page screenshots + render checks for the 15 commercial-services articles.
// Articles render their full content (directAnswer/ArticleBody) at root /<slug>.
// Run: NODE_PATH=/opt/homebrew/lib/node_modules PORT=3230 node .planning/content-system/articles-batch/shots.js
const { chromium } = require('playwright');
const PORT = process.env.PORT || 3230;
const SLUGS = [
  'signs-your-building-needs-commercial-roof-installation',
  'how-much-does-commercial-roof-installation-cost-in-nj',
  'commercial-roof-installation-what-business-owners-should-know',
  'signs-your-building-needs-commercial-roof-repair',
  'how-much-does-commercial-roof-repair-cost-in-nj',
  'commercial-roof-repair-what-business-owners-should-know',
  'signs-your-building-needs-commercial-roof-replacement',
  'how-much-does-commercial-roof-replacement-cost-in-nj',
  'commercial-roof-replacement-what-business-owners-should-know',
  'signs-your-building-needs-roof-thermal-imaging-inspections',
  'how-much-does-roof-thermal-imaging-inspections-cost-in-nj',
  'roof-thermal-imaging-inspections-what-business-owners-should-know',
  'signs-your-building-needs-infrared-roof-leak-detection',
  'how-much-does-infrared-roof-leak-detection-cost-in-nj',
  'infrared-roof-leak-detection-what-business-owners-should-know',
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
