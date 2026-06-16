// Phase 3b metaDescription credential sweep. ALL combo metaDescription "licensed"
// are NQR self-claims (classifier: 83 NQR / 0 third-party in metas) → "registered".
// Operates ONLY inside the metaDescription value. Enforces the 160-char Zod cap with
// deterministic trims (2b build-break lesson). 0 other fields touched.
import { readFileSync, writeFileSync, readdirSync } from 'fs';

const base = 'src/data/combo-content';
const cities = ['newark', 'east-orange', 'orange'];

// locate the metaDescription quoted literal → [openIdx, closeIdxExcl, quoteChar]
function locateMeta(src) {
  const keyIdx = src.indexOf('metaDescription:');
  if (keyIdx < 0) return null;
  let i = keyIdx + 'metaDescription:'.length;
  while (i < src.length && /\s/.test(src[i])) i++;
  const q = src[i];
  if (q !== "'" && q !== '"' && q !== '`') return null;
  const open = i; i++;
  while (i < src.length) { if (src[i] === '\\') { i += 2; continue; } if (src[i] === q) break; i++; }
  if (src[i] !== q) return null;
  return [open, i + 1, q];
}
// unescaped length (Zod validates the runtime string value, not the source literal)
const valLen = (raw) => raw.replace(/\\(.)/g, '$1').length;

let changed = 0, trimmed = 0; const over = [], errors = [];
for (const city of cities) {
  const dir = `${base}/${city}`;
  for (const fn of readdirSync(dir).filter((f) => f.endsWith('.ts') && f !== 'index.ts')) {
    const path = `${dir}/${fn}`;
    let src = readFileSync(path, 'utf8');
    const loc = locateMeta(src);
    if (!loc) { errors.push(`metaDescription locate fail ${path}`); continue; }
    const [open, close] = loc;
    let raw = src.slice(open + 1, close - 1);
    if (!/licensed/i.test(raw)) continue;

    const before = raw;
    raw = raw.replace(/licensed/g, 'registered').replace(/Licensed/g, 'Registered');

    // 160-cap trims (priority order)
    if (valLen(raw) > 160) {
      raw = raw.replace(/free written estimate/g, 'free estimate').replace(/Free written estimate/g, 'Free estimate');
      if (valLen(raw) > 160) raw = raw.replace(/free estimate/g, 'free quote').replace(/Free estimate/g, 'Free quote');
      if (valLen(raw) > 160) { over.push(`${path} len=${valLen(raw)}`); }
      else trimmed++;
    }
    if (raw === before) continue;
    src = src.slice(0, open + 1) + raw + src.slice(close - 1);
    writeFileSync(path, src);
    changed++;
  }
}
console.log(`metaDescription sweep: changed=${changed} trimmed=${trimmed} over-160=${over.length} errors=${errors.length}`);
for (const o of over) console.error('  OVER', o);
for (const e of errors) console.error('  ERR', e);
if (over.length || errors.length) process.exit(1);
console.log('META SWEEP OK');
