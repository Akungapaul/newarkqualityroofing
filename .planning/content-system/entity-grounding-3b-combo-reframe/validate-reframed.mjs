// Validate the 65 reframed/*.json author outputs BEFORE splicing.
// Checks each of the 195 directAnswer strings against the 3b reframe contract.
import fs from 'fs';

const HERE = '.planning/content-system/entity-grounding-3b-combo-reframe';
const dir = `${HERE}/reframed`;
const CITY_DISPLAY = { newark: 'Newark, New Jersey', eastOrange: 'East Orange, New Jersey', orange: 'Orange, New Jersey' };
const MODALITY = /\b(will|shall|should|must|need to|needs to|can)\b/i;

// expected serviceIds (from _payload.json order)
const expected = JSON.parse(fs.readFileSync(`${HERE}/_payload.json`, 'utf8')).map((p) => p.serviceId);

function boldSpanWords(s) {
  const m = s.match(/\*\*([\s\S]*?)\*\*/);
  if (!m) return { ok: false, words: -1, span: null };
  const words = m[1].trim().split(/\s+/).filter(Boolean).length;
  return { ok: true, words, span: m[1] };
}

const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json'));
const seen = new Set();
const issues = [];
let strings = 0;

for (const fn of files) {
  let o;
  try { o = JSON.parse(fs.readFileSync(`${dir}/${fn}`, 'utf8')); }
  catch (e) { issues.push(`${fn}: JSON parse fail — ${e.message}`); continue; }
  const sid = o.serviceId;
  if (!sid) { issues.push(`${fn}: missing serviceId`); continue; }
  if (fn !== `${sid}.json`) issues.push(`${fn}: filename != serviceId.json (${sid})`);
  seen.add(sid);

  for (const key of ['newark', 'eastOrange', 'orange']) {
    const v = o[key];
    const tag = `${sid}/${key}`;
    if (!v || typeof v !== 'string') { issues.push(`${tag}: missing/empty`); continue; }
    strings++;

    // ** balanced
    const stars = (v.match(/\*\*/g) || []).length;
    if (stars % 2 !== 0) issues.push(`${tag}: ** unbalanced (${stars})`);

    // bold span ≤40w
    const b = boldSpanWords(v);
    if (!b.ok) issues.push(`${tag}: no bold span`);
    else if (b.words > 40) issues.push(`${tag}: bold span ${b.words}w >40 — "${b.span.slice(0, 70)}…"`);

    // descriptor
    if (!/roofing contractor/i.test(v)) issues.push(`${tag}: missing "roofing contractor"`);

    // city display
    if (!v.includes(CITY_DISPLAY[key])) issues.push(`${tag}: missing "${CITY_DISPLAY[key]}"`);

    // no NQR "licensed"
    if (/licensed/i.test(v)) issues.push(`${tag}: contains "licensed" — "${v.match(/.{0,18}licensed.{0,18}/i)[0]}"`);

    // credential = registered (only enforce if a HIC tail exists)
    if (/Home Improvement Contractor/i.test(v) && !/registered\s+New Jersey Home Improvement Contractor/i.test(v)) {
      issues.push(`${tag}: HIC tail present but not "registered New Jersey Home Improvement Contractor"`);
    }

    // modality
    const mm = v.match(MODALITY);
    if (mm) issues.push(`${tag}: modality "${mm[0]}"`);

    // single sentence sanity (no double-period mid-string besides the final)
    // (advisory only — count sentence terminators)
    const terms = (v.match(/[.!?](\s|$)/g) || []).length;
    if (terms > 1) issues.push(`${tag}: ADVISORY ${terms} sentence terminators (expected 1)`);
  }
}

// coverage
const missing = expected.filter((s) => !seen.has(s));
if (missing.length) issues.push(`MISSING reframed files for: ${missing.join(', ')}`);
const extra = [...seen].filter((s) => !expected.includes(s));
if (extra.length) issues.push(`UNEXPECTED serviceIds: ${extra.join(', ')}`);

const hard = issues.filter((i) => !i.includes('ADVISORY'));
console.log(`files=${files.length}/65  strings=${strings}/195  issues=${issues.length} (hard=${hard.length})`);
for (const i of issues) console.log(`  ${i.includes('ADVISORY') ? '·' : '✗'} ${i}`);
if (hard.length) process.exit(1);
console.log('VALIDATE OK');
