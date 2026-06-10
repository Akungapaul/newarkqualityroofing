// Combo Batch 2 (East Orange) render spot-check — full-page screenshots + per-page checks.
// Playwright is GLOBAL: run NODE_PATH=/opt/homebrew/lib/node_modules node <this>
// Prereq: prod server on :3230 (PORT=3230 npm run start). AnimateIn opacity:0 reveal is
// forced visible for the full-page capture.
// Samples include combos that were UNWIRED before this batch (emergency/slate/silicone/historic)
// to confirm the 5→65 index expansion now serves hand-written content (not fallback).
const { chromium } = require('playwright');
const fs = require('fs');

const PORT = process.env.PORT || 3230;
const SLUGS = [
  'roof-repair-east-orange-nj',                    // keep, repair (was WIRED — gold)
  'asphalt-shingle-roofing-east-orange-nj',        // keep, residential (was WIRED)
  'tpo-roofing-installation-east-orange-nj',       // keep, commercial (was WIRED)
  'emergency-roof-repair-east-orange-nj',          // keep, repair (was UNWIRED → confirms wiring)
  'slate-roof-installation-repair-east-orange-nj', // noindex, residential (was UNWIRED)
  'silicone-roof-coating-east-orange-nj',          // noindex, energy-solar (was UNWIRED)
  'historic-roof-restoration-east-orange-nj',      // noindex, design (was UNWIRED — checks NO-COA posture)
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
    const png = `.planning/content-system/combo-batch2-east-orange/shot-${slug}.png`;
    await page.screenshot({ path: png, fullPage: true }).catch(() => {});
    out.push(`${status}  h1=${h1}  **=${starLeak}  defab=${defab}  ${slug}`);
  }
  fs.writeFileSync('.planning/content-system/combo-batch2-east-orange/_shots-report.txt', out.join('\n'));
  console.log(out.join('\n'));
  await browser.close();
})();
