// Gate: re-extract each of the 195 combo directAnswers FROM SOURCE (post-splice) and
// re-run the reframe contract checks. Also esbuild parse-checks every touched file.
import { readFileSync, readdirSync } from 'fs';
import { transformSync } from 'esbuild';

const base = 'src/data/combo-content';
const CITY = { newark: 'Newark, New Jersey', 'east-orange': 'East Orange, New Jersey', orange: 'Orange, New Jersey' };
const MODALITY = /\b(will|shall|should|must|need to|needs to|can)\b/i;

function unesc(s) { return s.replace(/\\n/g, '\n').replace(/\\(.)/g, '$1'); }
function locate(src, key) {
  const k = src.indexOf(`${key}:`); if (k < 0) return null;
  let i = k + key.length + 1; while (i < src.length && /\s/.test(src[i])) i++;
  const q = src[i]; if (!"'\"`".includes(q)) return null; const open = i; i++;
  while (i < src.length) { if (src[i] === '\\') { i += 2; continue; } if (src[i] === q) break; i++; }
  return [open + 1, i];
}

const issues = []; let n = 0, parseFail = 0;
for (const city of ['newark', 'east-orange', 'orange']) {
  const dir = `${base}/${city}`;
  for (const fn of readdirSync(dir).filter((f) => f.endsWith('.ts') && f !== 'index.ts')) {
    const path = `${dir}/${fn}`;
    const src = readFileSync(path, 'utf8');
    // parse-check
    try { transformSync(src, { loader: 'ts' }); } catch (e) { parseFail++; issues.push(`${city}/${fn}: PARSE FAIL ${e.message.split('\n')[0]}`); continue; }
    const loc = locate(src, 'directAnswer');
    if (!loc) { issues.push(`${city}/${fn}: no directAnswer`); continue; }
    const v = unesc(src.slice(loc[0], loc[1]));
    n++;
    const tag = `${city}/${fn}`;
    const stars = (v.match(/\*\*/g) || []).length;
    if (stars % 2 !== 0) issues.push(`${tag}: ** unbalanced`);
    const m = v.match(/\*\*([\s\S]*?)\*\*/);
    if (!m) issues.push(`${tag}: no bold span`);
    else { const w = m[1].trim().split(/\s+/).filter(Boolean).length; if (w > 40) issues.push(`${tag}: bold ${w}w >40`); }
    if (!/roofing contractor/i.test(v)) issues.push(`${tag}: no "roofing contractor"`);
    if (!v.includes(CITY[city])) issues.push(`${tag}: missing "${CITY[city]}"`);
    if (/licensed/i.test(v)) issues.push(`${tag}: contains "licensed"`);
    if (/Home Improvement Contractor/i.test(v) && !/registered\s+New Jersey Home Improvement Contractor/i.test(v)) issues.push(`${tag}: HIC tail not "registered"`);
    const mm = v.match(MODALITY); if (mm) issues.push(`${tag}: modality "${mm[0]}"`);
  }
}
console.log(`in-file checks: directAnswers=${n}/195 parseFail=${parseFail} issues=${issues.length}`);
for (const i of issues) console.log(`  ✗ ${i}`);
if (issues.length) process.exit(1);
console.log('IN-FILE CHECK OK');
