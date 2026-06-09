import fs from 'fs';
import path from 'path';

// ─── CMP-4 scope-safe assembler ─────────────────────────────────────────────
// String-aware brace-splice: replaces ONLY the 8 CMP-4 decision-helper objects
// (by comparisonId) in decision-helper.ts (id-scoped regardless of file contents).
const SRC = 'src/data/comparison-content/decision-helper.ts';
const OUT = '.planning/content-system/comparisons-batch4';
const CMP = new Set([
  'best-roofing-material-nj-weather', 'best-commercial-roofing-material',
  'best-roofing-for-flat-roofs', 'best-roofing-for-historic-homes-nj',
  'cheapest-vs-most-durable-roofing', 'most-energy-efficient-roofing-materials',
  'best-roofing-for-essex-county-colonial-homes', 'roof-warranty-comparison-guide',
]);

const src = fs.readFileSync(SRC, 'utf8');
const arrStart = src.indexOf('= [', src.indexOf('decisionHelpers'));
if (arrStart === -1) throw new Error('array start not found');
const bracket = src.indexOf('[', arrStart);

// string-aware top-level object scanner within the array
function findObjects(s, start) {
  const objs = [];
  let i = start + 1, depth = 0, inStr = null, objStart = -1;
  while (i < s.length) {
    const ch = s[i];
    if (inStr) {
      if (ch === '\\') { i += 2; continue; }
      if (ch === inStr) inStr = null;
      i++; continue;
    }
    if (ch === "'" || ch === '"' || ch === '`') { inStr = ch; i++; continue; }
    if (ch === '/' && s[i + 1] === '/') { const nl = s.indexOf('\n', i); i = nl === -1 ? s.length : nl; continue; }
    if (ch === '/' && s[i + 1] === '*') { const e = s.indexOf('*/', i); i = e === -1 ? s.length : e + 2; continue; }
    if (ch === '{') { if (depth === 0) objStart = i; depth++; i++; continue; }
    if (ch === '}') { depth--; if (depth === 0) { objs.push([objStart, i + 1]); objStart = -1; } i++; continue; }
    if (ch === ']' && depth === 0) break;
    i++;
  }
  return objs;
}
const idOf = (t) => { const m = t.match(/comparisonId:\s*['"`]([^'"`]+)['"`]/); return m ? m[1] : null; };

const objs = findObjects(src, bracket);
const ids = objs.map(([s, e]) => idOf(src.slice(s, e)));
console.log('found', objs.length, 'objects:', ids.join(', '));

const found = new Set(ids.filter(Boolean));
for (const id of CMP) if (!found.has(id)) throw new Error('CMP4 id not found in file: ' + id);

let out = src;
let replaced = 0;
for (let k = objs.length - 1; k >= 0; k--) {
  const [s, e] = objs[k];
  const id = ids[k];
  if (CMP.has(id)) {
    let snip = fs.readFileSync(path.join(OUT, id + '.snippet.ts'), 'utf8').trim();
    if (snip.endsWith(',')) snip = snip.slice(0, -1);
    if (!snip.startsWith('{') || !snip.endsWith('}')) throw new Error('bad snippet shape: ' + id);
    out = out.slice(0, s) + snip + out.slice(e);
    replaced++;
  }
}
fs.writeFileSync(SRC, out);
console.log('replaced', replaced, 'of 8 objects; file written (', out.length, 'bytes )');
