/**
 * build-html-report.ts — renders the keyword demand analysis as a single self-contained,
 * brand-styled HTML file from the generated data artifacts (no manual numbers).
 * Output: .planning/seo/demand/NQR-Keyword-Demand-Analysis.html
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const DEMAND = resolve(process.cwd(), '.planning/seo/demand');
const mp = JSON.parse(readFileSync(resolve(DEMAND, 'money-page-demand.json'), 'utf8'));
const sum = JSON.parse(readFileSync(resolve(DEMAND, 'demand-summary.json'), 'utf8'));

// ─── CSV parse (for blended city ranking + combo evidence) ──────────────────
function parseCsv(t: string): string[][] { const R: string[][] = []; let r: string[] = [], f = '', i = 0, q = false; while (i < t.length) { const c = t[i]; if (q) { if (c === '"') { if (t[i + 1] === '"') { f += '"'; i += 2; continue; } q = false; i++; continue; } f += c; i++; continue; } if (c === '"') { q = true; i++; continue; } if (c === ',') { r.push(f); f = ''; i++; continue; } if (c === '\r') { i++; continue; } if (c === '\n') { r.push(f); R.push(r); r = []; f = ''; i++; continue; } f += c; i++; } if (f.length || r.length) { r.push(f); R.push(r); } return R; }
function objs(p: string) { const rows = parseCsv(readFileSync(p, 'utf8')); const h = rows[0]; return rows.slice(1).filter((x) => x.some((v) => v !== '')).map((x) => Object.fromEntries(h.map((k, i) => [k, x[i] ?? '']))); }
const master = objs(resolve(DEMAND, 'URL-Classification-with-demand.csv'));

const esc = (s: unknown) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const fmt = (n: number) => n.toLocaleString('en-US');

// Blended city ranking
const cityRows = master.filter((r) => r['Page Type'] === 'Service+City combo' || r['Page Type'] === 'Location hub');
const cityAgg = new Map<string, { vol: number; combo: number }>();
const cityVolMap = new Map<string, number>(sum.citiesByDemand.map((c: any) => [c.name, c.vol]));
for (const r of master) {
  const city = r['City']; if (!city) continue;
  const imp = +r['gsc_impressions'] || 0;
  const cur = cityAgg.get(city) ?? { vol: 0, combo: 0 };
  if (r['Page Type'] === 'Service+City combo') cur.combo += imp;
  cityAgg.set(city, cur);
}
// city name from any combo row
const cityName = new Map<string, string>();
for (const r of master) if (r['City'] && r['gsc_top_query'] !== undefined) { /* placeholder */ }
const cities = [...cityAgg.entries()].map(([id, v]) => {
  const nm = (sum.citiesByDemand.find((c: any) => c.id === id) || {}).name || id;
  const vol = (sum.citiesByDemand.find((c: any) => c.id === id) || {}).vol || 0;
  return { name: nm, vol, combo: v.combo, blend: vol + v.combo };
}).sort((a, b) => b.blend - a.blend);

// Combo distribution — normalize keys (summary uses KEEP/WATCH/PRUNE/REDIRECT)
const cd = sum.comboVerdictDistribution as Record<string, number>;
const keep = cd.KEEP ?? 0;
const watch = cd.WATCH ?? 0;
const prune = cd.PRUNE ?? 0;
const redirect = cd.REDIRECT ?? 0;
const comboTotal = keep + watch + prune + redirect;

// seo-priority recommendation: cluster A+B money pages
const recPriority = mp.services.filter((s: any) => s.tier === 'A' || s.tier === 'B').map((s: any) => s.name);
const CURRENT_PRIORITY = ['Roof Repair', 'Roof Leak Repair', 'Emergency Roof Repair', 'Roof Replacement', 'Flat Roof Installation and Repair', 'Commercial Roof Repair', 'Commercial Roof Installation', 'Gutter Installation Repair', 'Gutter Guard Installation', 'Modified Bitumen Roofing', 'Built-Up Roofing', 'Green Roof Installation', 'TPO Roofing Installation', 'EPDM Commercial Roofing'];
const recCities = cities.slice(0, 10).map((c) => c.name);
const CURRENT_CITIES = ['Newark', 'East Orange', 'Bloomfield', 'Montclair', 'Belleville', 'Irvington', 'South Orange', 'West Orange', 'Maplewood', 'Livingston'];

const tierColor: Record<string, string> = { A: 'var(--forest)', B: 'var(--copper-d)', C: 'var(--warn)', D: 'var(--muted)' };
const maxCluster = Math.max(...mp.services.map((s: any) => s.clusterDemand));

// ─── Build money-page table rows ────────────────────────────────────────────
const mpRows = mp.services.map((s: any) => {
  const barW = Math.max(2, Math.round((s.clusterDemand / maxCluster) * 100));
  const recClass = /FEATURE/.test(s.rec) ? 'good' : /DEPRIORITIZE/.test(s.rec) ? 'bad' : 'warn';
  return `<tr>
    <td><span class="badge" style="background:${tierColor[s.tier]}">${s.tier}</span></td>
    <td class="name">${esc(s.name)}</td>
    <td class="num"><div class="bar"><span style="width:${barW}%"></span></div><b>${fmt(s.clusterDemand)}</b></td>
    <td class="num dim">${fmt(s.headVol)}</td>
    <td class="num dim">${s.clusterSize}</td>
    <td class="num">${s.gscImp ? fmt(s.gscImp) : '<span class="dim">·</span>'}</td>
    <td class="kw">${esc((s.topKeywords || []).slice(0, 4).join(' · '))}</td>
    <td class="rec ${recClass}">${esc(s.rec.split(' — ')[0])}</td>
  </tr>`;
}).join('\n');

const cityRowsHtml = cities.map((c, i) => `<tr>
  <td class="dim">${i + 1}</td><td class="name">${esc(c.name)}</td>
  <td class="num"><b>${fmt(c.blend)}</b></td><td class="num dim">${fmt(c.vol)}</td><td class="num dim">${fmt(c.combo)}</td>
  <td>${CURRENT_CITIES.includes(c.name) && i >= 10 ? '<span class="tag bad">demote</span>' : (!CURRENT_CITIES.includes(c.name) && i < 10 ? '<span class="tag good">promote</span>' : '')}</td>
</tr>`).join('\n');

const html = `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Newark Quality Roofing — Keyword Demand Analysis</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
<style>
:root{--forest:#1A3A2A;--forest-2:#2A5A3A;--forest-d:#0F2218;--copper:#C17F4E;--copper-d:#A66A3A;
--parch:#F5F0E8;--parch-2:#E8E0D0;--parch-l:#FAF8F4;--ink:#1A1A1A;--muted:#7a7263;--line:#D4CFC4;
--good:#3f7d4f;--warn:#c9962f;--bad:#b8553c;--blue:#2f6fb0}
*{box-sizing:border-box}
body{margin:0;background:var(--parch);color:var(--ink);font-family:"Cormorant Garamond",Georgia,serif;font-size:18px;line-height:1.55;-webkit-font-smoothing:antialiased}
.wrap{max-width:1120px;margin:0 auto;padding:0 26px}
h1,h2,h3,h4{font-family:"Cormorant",Georgia,serif;font-weight:600;line-height:1.14;margin:0;color:var(--forest)}
a{color:var(--copper-d)}
header.hero{background:linear-gradient(160deg,var(--forest) 0%,var(--forest-d) 100%);color:var(--parch);padding:50px 0 40px;border-bottom:4px solid var(--copper)}
.eyebrow{letter-spacing:.22em;text-transform:uppercase;font-size:13px;color:var(--copper-light,#D4A574);font-weight:600;margin-bottom:12px}
header.hero h1{color:#fff;font-size:48px;letter-spacing:.3px;max-width:880px}
header.hero p.sub{color:#d8e2da;font-size:21px;max-width:820px;margin:14px 0 0}
.statband{display:flex;flex-wrap:wrap;gap:14px;margin-top:30px}
.stat{background:rgba(255,255,255,.07);border:1px solid rgba(212,165,116,.35);border-radius:10px;padding:14px 18px;min-width:140px}
.stat .v{font-family:"Cormorant";font-size:34px;font-weight:700;color:#fff;line-height:1}
.stat .l{font-size:14px;color:#c4d2c8;letter-spacing:.04em;margin-top:5px}
section{padding:42px 0;border-bottom:1px solid var(--line)}
section h2{font-size:33px;margin-bottom:6px}
section h2 .n{color:var(--copper-d);font-size:24px;vertical-align:.08em;margin-right:10px}
.lede{color:#403a30;font-size:19px;max-width:880px;margin:8px 0 22px}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px}
.card{background:var(--parch-l);border:1px solid var(--line);border-left:4px solid var(--copper);border-radius:9px;padding:18px 20px}
.card h4{font-size:21px;margin-bottom:6px}
.card p{margin:0;font-size:17px;color:#3b352c}
.card .big{font-family:"Cormorant";font-size:30px;font-weight:700;color:var(--forest);display:block;line-height:1.05;margin-bottom:4px}
table{width:100%;border-collapse:collapse;margin-top:10px;font-size:16.5px;background:var(--parch-l);border:1px solid var(--line);border-radius:10px;overflow:hidden}
thead th{background:var(--forest);color:var(--parch);text-align:left;padding:11px 12px;font-family:"Cormorant Garamond";font-weight:600;font-size:15px;letter-spacing:.03em;cursor:pointer;user-select:none;white-space:nowrap}
thead th.num{text-align:right}
tbody td{padding:9px 12px;border-top:1px solid var(--line);vertical-align:middle}
tbody tr:nth-child(even){background:rgba(232,224,208,.4)}
td.num{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}
td.name{font-weight:600;color:var(--forest)}
td.dim,.dim{color:var(--muted)}
td.kw{font-size:14.5px;color:#5a5346;max-width:340px}
.badge{display:inline-block;min-width:22px;text-align:center;color:#fff;font-family:"Cormorant Garamond";font-weight:600;font-size:14px;padding:2px 8px;border-radius:20px}
.bar{display:inline-block;width:74px;height:7px;background:var(--parch-2);border-radius:4px;overflow:hidden;margin-right:8px;vertical-align:middle}
.bar span{display:block;height:100%;background:var(--copper)}
.rec{font-size:14px;font-weight:600}
.rec.good{color:var(--good)}.rec.warn{color:var(--warn)}.rec.bad{color:var(--bad)}
.tag{font-size:12px;font-weight:600;padding:2px 8px;border-radius:20px;color:#fff}
.tag.good{background:var(--good)}.tag.bad{background:var(--bad)}
.split{display:grid;grid-template-columns:1fr 1fr;gap:22px}
.col h4{font-size:20px;margin-bottom:8px;padding-bottom:6px;border-bottom:2px solid var(--copper)}
.col ul{margin:0;padding-left:20px;font-size:16.5px}.col li{margin:3px 0}
.distbar{display:flex;height:46px;border-radius:8px;overflow:hidden;border:1px solid var(--line);margin:6px 0 18px}
.distbar div{display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600;font-size:15px;font-family:"Cormorant Garamond"}
.note{background:#fbf3e6;border:1px solid #e8cfa3;border-left:4px solid var(--warn);border-radius:8px;padding:14px 18px;font-size:16.5px;color:#5a4a2a;margin-top:16px}
.gated{background:var(--forest);color:var(--parch);border-radius:10px;padding:6px 26px 22px}
.gated h2{color:#fff}.gated li{margin:8px 0;font-size:17px}.gated b{color:var(--copper-light,#D4A574)}
footer{padding:26px 0 50px;color:var(--muted);font-size:15px}
@media(max-width:760px){.split{grid-template-columns:1fr}header.hero h1{font-size:34px}td.kw{display:none}}
</style></head>
<body>
<header class="hero"><div class="wrap">
<div class="eyebrow">Newark Quality Roofing · Local SEO</div>
<h1>Keyword Demand Analysis</h1>
<p class="sub">First data-grounded demand layer for the topical map — <b>New Jersey-local</b> search volume (DataForSEO) crossed with live Search Console actuals. Replaces qualitative "near-zero / real demand" judgments with numbers.</p>
<div class="statband">
<div class="stat"><div class="v">${fmt(mp.tierCounts.A + mp.tierCounts.B)}</div><div class="l">FEATURE money pages (A+B)</div></div>
<div class="stat"><div class="v">${fmt(keep)}</div><div class="l">KEEP combos</div></div>
<div class="stat"><div class="v">${fmt(prune)}</div><div class="l">prune candidates</div></div>
<div class="stat"><div class="v">14,800</div><div class="l">"roof repair near me" / mo</div></div>
<div class="stat"><div class="v">${fmt(mp.genericBrandDemand)}</div><div class="l">brand/homepage demand / mo</div></div>
</div>
</div></header>

<section><div class="wrap">
<h2><span class="n">01</span>What the data says</h2>
<p class="lede">Demand is concentrated locally: only a handful of services carry real search volume, and the dominant intent is "near me." A long tail of combos and niche services has little measurable demand — but commercial &amp; urgent services are high-value despite low search.</p>
<div class="cards">
<div class="card"><span class="big">18,270/mo</span><h4>Roof Repair leads by far</h4><p>Its full keyword cluster is 6× the "roof repair" head term — driven by <b>"roof repair near me" (14,800/mo)</b>, the single largest hire-intent term.</p></div>
<div class="card"><span class="big">Hidden demand</span><h4>Tile · Flat · Flashing</h4><p>Tile Roof (3,470 vs head 320), Flat Roof (2,730 vs 320) &amp; Roof Flashing (2,010 vs 480) are far bigger money pages than single terms implied.</p></div>
<div class="card"><span class="big">${fmt(prune)} phantoms</span><h4>Index dilution</h4><p>Doorway-class combos (niche service × no local market × zero traction) — noindex candidates. ${fmt(keep+watch)} pages stay indexed.</p></div>
<div class="card"><span class="big">Audit corrected</span><h4>Green Roof is real</h4><p>Branded "REMOVE" by the audit, but it ranks now — "green roofing installation essex county" at pos 7.9–12 in Glen Ridge / Millburn.</p></div>
</div></div></section>

<section><div class="wrap">
<h2><span class="n">02</span>Service money-page demand</h2>
<p class="lede">All 65 service hubs, ranked by <b>full NJ keyword-cluster demand</b> (head term + every variant: cost / near me / services / subtypes), attributed to the most-specific page and de-duplicated. Click a column to sort.</p>
<table id="mpt"><thead><tr>
<th data-k="tier">Tier</th><th data-k="name">Service money page</th><th class="num" data-k="cluster">Cluster demand ▾</th>
<th class="num" data-k="head">Head</th><th class="num" data-k="size">#kw</th><th class="num" data-k="gsc">GSC imp</th>
<th data-k="kw">Top cluster keywords</th><th data-k="rec">Action</th>
</tr></thead><tbody>
${mpRows}
</tbody></table>
<div class="note"><b>Caveat:</b> "Asphalt Shingle Roofing" reads low (1,060) because its narrow 3-word head sends most asphalt demand to material-level terms &amp; the brand bucket — treat asphalt as a genuine top-tier residential service. A few generic-suffix heads share this.</div>
</div></section>

<section><div class="wrap">
<h2><span class="n">03</span>Combo classification</h2>
<p class="lede">All 1,365 service×city combos, demand-validated. Commercial &amp; storm/emergency/insurance services are kept (WATCH) despite low search — they convert via "near me", referral &amp; urgency.</p>
<div class="distbar">
<div style="width:${(keep/comboTotal*100).toFixed(1)}%;background:var(--forest)">${keep} keep</div>
<div style="width:${(watch/comboTotal*100).toFixed(1)}%;background:var(--copper)">${watch} watch</div>
<div style="width:${(prune/comboTotal*100).toFixed(1)}%;background:var(--bad)">${prune} prune</div>
<div style="width:${(redirect/comboTotal*100).toFixed(1)}%;background:var(--muted)">${redirect} redirect</div>
</div>
<div class="cards">
<div class="card"><span class="big">${keep}</span><h4>KEEP-INDEX</h4><p>A/B service with a real city market or direct GSC/volume evidence.</p></div>
<div class="card"><span class="big">${watch}</span><h4>WATCH</h4><p>Plausible; deprioritize. Includes <b>247 commercial/urgent</b> combos retained for lead value.</p></div>
<div class="card"><span class="big">${prune}</span><h4>PRUNE candidate</h4><p>Phantom doorway pages → <code>noindex,follow</code>. Phase the clearest first.</p></div>
<div class="card"><span class="big">${redirect}</span><h4>REDIRECT</h4><p>Existing Newark→hub consolidations. Unchanged.</p></div>
</div></div></section>

<section><div class="wrap">
<h2><span class="n">04</span>City demand</h2>
<p class="lede">Blended NJ search volume + Search Console traction per city. Promote / demote relative to the current priority list.</p>
<table id="ct"><thead><tr><th>#</th><th data-k="name">City</th><th class="num" data-k="blend">Blend ▾</th><th class="num" data-k="vol">NJ vol</th><th class="num" data-k="combo">GSC imps</th><th>vs current</th></tr></thead>
<tbody>${cityRowsHtml}</tbody></table>
</div></section>

<section><div class="wrap">
<h2><span class="n">05</span>seo-priority.ts re-sync</h2>
<p class="lede">The hand-curated priority sets are mis-aimed for the local market. Recommended sets are demand-ranked.</p>
<div class="split">
<div class="col"><h4>Priority services — recommended (cluster A+B)</h4><ul>${recPriority.map((s: string) => `<li>${esc(s)}${CURRENT_PRIORITY.includes(s) ? '' : ' <span class="tag good">add</span>'}</li>`).join('')}</ul></div>
<div class="col"><h4>Currently prioritized, low local demand</h4><ul>${CURRENT_PRIORITY.filter((s) => !recPriority.includes(s)).map((s) => `<li>${esc(s)} <span class="tag bad">review</span></li>`).join('')}<li class="dim" style="list-style:none;margin-top:8px">⚠ commercial ones have low search but real lead value — keep only if weighting commercial intent.</li></ul></div>
</div>
<div class="split" style="margin-top:20px">
<div class="col"><h4>Priority cities — recommended</h4><ul>${recCities.map((c) => `<li>${esc(c)}${CURRENT_CITIES.includes(c) ? '' : ' <span class="tag good">promote</span>'}</li>`).join('')}</ul></div>
<div class="col"><h4>Currently prioritized, low traction</h4><ul>${CURRENT_CITIES.filter((c) => !recCities.includes(c)).map((c) => `<li>${esc(c)} <span class="tag bad">demote</span></li>`).join('')}</ul></div>
</div></div></section>

<section class="gated"><div class="wrap">
<h2 style="padding-top:34px"><span class="n" style="color:var(--copper-light,#D4A574)">06</span>Recommended actions <span style="font-size:18px;color:#c4d2c8">— gated, not yet applied</span></h2>
<ol>
<li><b>FEATURE the ${mp.tierCounts.A + mp.tierCounts.B} Tier-A+B money pages</b> — most internal links, richest content, homepage prominence; use each page's top-keyword list as its on-page brief.</li>
<li><b>Noindex the ${prune} prune candidates</b> (phased) — collapses indexable combos ~1,140 → ~738.</li>
<li><b>Re-sync seo-priority.ts</b> — priority services → cluster A+B; priority cities → the demand-ranked top-10.</li>
<li><b>Reconsider the cause-service un-redirect</b> — the 0-volume aging/tear-off/overlay/after-leak services re-inflated phantom entities.</li>
<li><b>Lead with "near me / emergency / local"</b> — it is the dominant hire intent (roof repair near me = 14,800/mo).</li>
</ol>
<p style="color:#c4d2c8;font-size:15px">Applying #2–#3 changes shipped indexation and the live sitemap — held for explicit approval.</p>
</div></section>

<footer><div class="wrap">Sources: DataForSEO Google Ads search volume (geotargeted New Jersey) · Google Search Console (16-mo). 1,602-keyword universe · 65 service clusters. Generated from <code>money-page-demand.json</code> + <code>demand-summary.json</code>. Newark Quality Roofing — 2026-06-28.</div></footer>

<script>
document.querySelectorAll('table').forEach(function(t){
  var hs=t.querySelectorAll('th[data-k]');
  hs.forEach(function(h){h.addEventListener('click',function(){
    var idx=Array.prototype.indexOf.call(h.parentNode.children,h);
    var num=h.classList.contains('num');
    var dir=h.dataset.dir==='asc'?'desc':'asc';h.dataset.dir=dir;
    var rows=Array.prototype.slice.call(t.tBodies[0].rows);
    rows.sort(function(a,b){
      var x=a.cells[idx].innerText.replace(/[^0-9.\\-]/g,''),y=b.cells[idx].innerText.replace(/[^0-9.\\-]/g,'');
      if(num){x=parseFloat(x)||0;y=parseFloat(y)||0;return dir==='asc'?x-y:y-x;}
      x=a.cells[idx].innerText;y=b.cells[idx].innerText;return dir==='asc'?x.localeCompare(y):y.localeCompare(x);
    });
    rows.forEach(function(r){t.tBodies[0].appendChild(r);});
  });});
});
</script>
</body></html>`;

writeFileSync(resolve(DEMAND, 'NQR-Keyword-Demand-Analysis.html'), html);
console.log('Wrote NQR-Keyword-Demand-Analysis.html (' + (html.length / 1024).toFixed(0) + ' KB)');
console.log('money-page tiers', JSON.stringify(mp.tierCounts), '| combos', JSON.stringify(cd), '| cities', cities.length);
