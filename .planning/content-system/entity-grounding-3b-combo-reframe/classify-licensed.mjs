// Classify EVERY "licensed" occurrence in the 195 combos by field + phrase, so the
// 3b sweep reframes only NQR self-claims and keeps legit third-party cites.
// Dead-code whyChooseUs[0] "licensed and insured" is reported separately (out of scope).
import fs from 'fs';

const dirs = ['newark', 'east-orange', 'orange'].map((c) => `src/data/combo-content/${c}`);

// crude field locator: which top-level field a char offset sits in
const FIELD_KEYS = ['directAnswer', 'definition', 'overview', 'challenges', 'process', 'faqs', 'metaDescription', 'pricing', 'whyChooseUs', 'conversionHooks'];
function fieldAt(src, idx) {
  let best = null, bestPos = -1;
  for (const k of FIELD_KEYS) {
    const re = new RegExp(`\\n\\s*${k}:`, 'g');
    let m;
    while ((m = re.exec(src))) {
      if (m.index < idx && m.index > bestPos) { bestPos = m.index; best = k; }
    }
  }
  return best;
}

const THIRD_PARTY = /licensed (public adjuster|adjuster|structural engineer|engineer|attorney|abatement|mold)/i;

const byBucket = {};
const nqr = [];
for (const d of dirs) {
  for (const f of fs.readdirSync(d).filter((x) => x.endsWith('.ts') && x !== 'index.ts')) {
    const src = fs.readFileSync(`${d}/${f}`, 'utf8');
    const re = /licensed/gi;
    let m;
    while ((m = re.exec(src))) {
      const field = fieldAt(src, m.index);
      const ctx = src.slice(Math.max(0, m.index - 30), m.index + 30).replace(/\s+/g, ' ');
      const isThird = THIRD_PARTY.test(src.slice(m.index - 10, m.index + 40));
      const bucket = `${field}${isThird ? ' [THIRD-PARTY keep]' : ' [NQR reframe]'}`;
      byBucket[bucket] = (byBucket[bucket] || 0) + 1;
      if (!isThird && field !== 'whyChooseUs') {
        nqr.push(`${d.replace('src/data/combo-content/', '')}/${f} [${field}] …${ctx}…`);
      }
    }
  }
}

console.log('=== buckets (field + classification) ===');
for (const k of Object.keys(byBucket).sort()) console.log(String(byBucket[k]).padStart(4), k);
console.log(`\n=== NQR self-claims to reframe (excluding dead-code whyChooseUs), ${nqr.length} ===`);
for (const n of nqr) console.log('  ' + n);
