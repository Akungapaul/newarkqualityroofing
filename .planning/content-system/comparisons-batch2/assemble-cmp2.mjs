import fs from 'fs';
import path from 'path';

// ─── CMP-2 scope-safe assembler ─────────────────────────────────────────────
// String-aware brace-splice: replaces ONLY the 8 CMP-2 objects (by comparisonId)
// in the shared material-vs-material.ts file. CMP-1's 8 objects stay untouched.
const SRC = 'src/data/comparison-content/material-vs-material.ts';
const OUT = '.planning/content-system/comparisons-batch2';
const CMP2 = new Set([
  'modified-bitumen-vs-tpo', 'rubber-roofing-vs-tpo', 'cedar-shake-vs-wood-shingle',
  'built-up-roofing-vs-modified-bitumen', 'spray-foam-vs-tpo',
  'green-roof-vs-traditional-roofing', 'solar-shingles-vs-solar-panels',
  'architectural-vs-3-tab-shingles',
]);

const src = fs.readFileSync(SRC, 'utf8');
const arrStart = src.indexOf('= [', src.indexOf('materialComparisons'));
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
for (const id of CMP2) if (!found.has(id)) throw new Error('CMP2 id not found in file: ' + id);

let out = src;
let replaced = 0;
for (let k = objs.length - 1; k >= 0; k--) {
  const [s, e] = objs[k];
  const id = ids[k];
  if (CMP2.has(id)) {
    let snip = fs.readFileSync(path.join(OUT, id + '.snippet.ts'), 'utf8').trim();
    if (snip.endsWith(',')) snip = snip.slice(0, -1);
    if (!snip.startsWith('{') || !snip.endsWith('}')) throw new Error('bad snippet shape: ' + id);
    out = out.slice(0, s) + snip + out.slice(e);
    replaced++;
  }
}
fs.writeFileSync(SRC, out);
console.log('replaced', replaced, 'of 8 objects; file written (', out.length, 'bytes )');
