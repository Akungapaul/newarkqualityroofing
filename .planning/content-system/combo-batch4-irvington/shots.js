// Combo Batch 3 (Irvington) render spot-check — full-page screenshots + per-page checks.
// Playwright is GLOBAL: run NODE_PATH=/opt/homebrew/lib/node_modules node <this>
// Prereq: prod server on :3230 (PORT=3230 npm run start). AnimateIn opacity:0 reveal is
// forced visible for the full-page capture.
// Irvington is already 67/67 index-wired; samples span verdict + category, and the historic
// sample checks the COA posture (Irvington has NO local historic-district ordinance → NO COA).
const { chromium } = require('playwright');
const fs = require('fs');

const PORT = process.env.PORT || 3230;
const SLUGS = [
  'roof-repair-irvington-nj',                    // keep, repair (gold exemplar)
  'asphalt-shingle-roofing-irvington-nj',        // keep, residential
  'tpo-roofing-installation-irvington-nj',       // keep, commercial (Valley Arts flat roofs)
  'emergency-roof-repair-irvington-nj',          // keep, repair
  'slate-roof-installation-repair-irvington-nj', // noindex, residential (older Seven Oaks stock)
  'silicone-roof-coating-irvington-nj',          // noindex, energy-solar
  'historic-roof-restoration-irvington-nj',      // noindex, design (checks COA-NO posture)
  'infrared-roof-leak-detection-irvington-nj',   // noindex, commercial-svc (DIFFERENTIATED)
  'roof-maintenance-programs-irvington-nj',      // keep, repair (DIFFERENTIATED)
];
const FORCE_VISIBLE = `*{opacity:1!important;transform:none!important;animation:none!important;transition:none!important}`;

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 2400 } });
  const out = [];
  for (const slug of SLUGS) {
    const url = `http://localhost:${PORT}/${slug}`;
    const resp = await page.goto(url, { waitUntil: 'networkidle' }).catch(e => ({ status: () => 'ERR:' + e.message }));
    const status = typeof resp.status === 'function' ? resp.status() : resp.status;
    await page.addStyleTag({ content: FORCE_VISIBLE }).catch(() => {});
    await page.waitForTimeout(400);
    const html = await page.content();
    const h1 = (html.match(/<h1[ >]/g) || []).length;
    const starLeak = (html.match(/\*\*/g) || []).length;
    const defab = /GAF Certified|same-day|24\/7|0% financing|500\+|top-rated/i.test(html);
    const png = `.planning/content-system/combo-batch4-irvington/shot-${slug}.png`;
    await page.screenshot({ path: png, fullPage: true }).catch(() => {});
    out.push(`${status}  h1=${h1}  **=${starLeak}  defab=${defab}  ${slug}`);
  }
  fs.writeFileSync('.planning/content-system/combo-batch4-irvington/_shots-report.txt', out.join('\n'));
  console.log(out.join('\n'));
  await browser.close();
})();
