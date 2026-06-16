// Phase 3b: REPLACE each of the 195 combo `directAnswer` values with its reframed
// string (string-aware, scope-matched by file). 0 other fields touched. Guards each
// replace against the captured _current.json value (aborts on unexpected drift).
import { readFileSync, writeFileSync, readdirSync } from 'fs';

const HERE = '.planning/content-system/entity-grounding-3b-combo-reframe';
const base = 'src/data/combo-content';
const cities = ['newark', 'east-orange', 'orange'];
const CITYKEY = { newark: 'newark', 'east-orange': 'eastOrange', orange: 'orange' };

const current = JSON.parse(readFileSync(`${HERE}/_current.json`, 'utf8'));
const curMap = {};
for (const r of current) curMap[`${r.cityId}::${r.serviceId}`] = r.directAnswer;

const reframed = {};
for (const fn of readdirSync(`${HERE}/reframed`).filter((f) => f.endsWith('.json'))) {
  const o = JSON.parse(readFileSync(`${HERE}/reframed/${fn}`, 'utf8'));
  reframed[o.serviceId] = o;
}

// Emit a single-quoted TS literal (matches committed combo directAnswer style).
function toSingleQuoted(s) {
  return "'" + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n') + "'";
}
// normalize for the drift guard (prose has no literal backslashes — strip escapes)
const norm = (s) => s.replace(/\\/g, '').replace(/\s+/g, ' ').trim();

// Return [openIdx, closeIdxExclusive] of the directAnswer quoted literal (incl quotes).
function locateDirectAnswer(src) {
  const keyIdx = src.indexOf('directAnswer:');
  if (keyIdx < 0) return null;
  let i = keyIdx + 'directAnswer:'.length;
  while (i < src.length && /\s/.test(src[i])) i++;
  const q = src[i];
  if (q !== "'" && q !== '"' && q !== '`') return null;
  const open = i;
  i++;
  while (i < src.length) {
    if (src[i] === '\\') { i += 2; continue; }
    if (src[i] === q) break;
    i++;
  }
  if (src[i] !== q) return null;
  return [open, i + 1, q];
}

let replaced = 0, files = 0;
const errors = [];
for (const city of cities) {
  const dir = `${base}/${city}`;
  for (const fn of readdirSync(dir).filter((f) => f.endsWith('.ts') && f !== 'index.ts')) {
    const path = `${dir}/${fn}`;
    let src = readFileSync(path, 'utf8');
    files++;
    const sid = (src.match(/serviceId:\s*'([^']+)'/) || [])[1];
    if (!sid) { errors.push(`no serviceId in ${path}`); continue; }
    const r = reframed[sid];
    if (!r) { errors.push(`no reframed entry for serviceId '${sid}' (${path})`); continue; }
    const newVal = r[CITYKEY[city]];
    if (!newVal) { errors.push(`no ${CITYKEY[city]} string for '${sid}' (${path})`); continue; }

    const loc = locateDirectAnswer(src);
    if (!loc) { errors.push(`directAnswer locate fail in ${path}`); continue; }
    const [open, close] = loc;
    const existingRaw = src.slice(open + 1, close - 1);

    // drift guard: existing literal must match what we extracted
    const expected = curMap[`${city}::${sid}`];
    if (expected && norm(existingRaw) !== norm(expected)) {
      errors.push(`DRIFT in ${path}: file directAnswer != captured _current (aborting this file)`);
      continue;
    }

    src = src.slice(0, open) + toSingleQuoted(newVal) + src.slice(close);
    writeFileSync(path, src);
    replaced++;
  }
}

console.log(`files=${files} replaced=${replaced} errors=${errors.length}`);
for (const e of errors) console.error('  ERR', e);
if (errors.length) process.exit(1);
if (replaced !== 195) { console.error(`expected 195 replacements, got ${replaced}`); process.exit(1); }
console.log('SPLICE OK (195 directAnswers reframed)');
