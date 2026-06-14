import fs from 'fs';
import path from 'path';

// ─── 2c scope-safe INSERT splicer ───────────────────────────────────────────
// Inserts definitionA/B (two-sided) or definitionHeading+definition (ranking)
// immediately before each object's `introHeading:` line, matched by comparisonId.
// Does NOT touch any other field — additive, minimal-diff. Idempotent (skips an
// object that already carries the field). Reads _defs.json (workflow output).

const DIR = '.planning/content-system/entity-grounding-2c-comparisons';
const DEFS = JSON.parse(fs.readFileSync(path.join(DIR, '_defs.json'), 'utf8'));
const FILES = [
  'src/data/comparison-content/material-vs-material.ts',
  'src/data/comparison-content/service-vs-service.ts',
  'src/data/comparison-content/decision-helper.ts',
];

// string-aware top-level object scanner within the array literal
function findObjects(s, bracket) {
  const objs = [];
  let i = bracket + 1, depth = 0, inStr = null, objStart = -1;
  while (i < s.length) {
    const ch = s[i];
    if (inStr) { if (ch === '\\') { i += 2; continue; } if (ch === inStr) inStr = null; i++; continue; }
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

// emit a backtick template literal safely (escape ` and ${)
const tl = (str) => '`' + str.replace(/`/g, '\\`').replace(/\$\{/g, '\\${') + '`';

// ── pre-splice validation (≤40w first sentence, bold lead, no modality) ──
const MODALITY = /\b(will|should|must|need to|needs to|can)\b/i;
function firstSentence(s) {
  const stripped = s.replace(/\*\*/g, '').trim();
  const m = stripped.match(/^(.*?[.!?])(\s|$)/s);
  return (m ? m[1] : stripped).trim();
}
const wc = (s) => s.split(/\s+/).filter(Boolean).length;
function validate(id, label, val) {
  const issues = [];
  const fs1 = firstSentence(val);
  const n = wc(fs1);
  if (n > 40) issues.push(`>40w (${n})`);
  if (!val.trimStart().startsWith('**')) issues.push('no bold lead');
  if (MODALITY.test(val)) issues.push('modality: ' + (val.match(MODALITY) || [])[0]);
  if (/\$|\d+\s*(year|yr|%|sq|psf|mph)/i.test(val)) issues.push('possible figure');
  if (issues.length) console.log(`  ⚠ ${id}.${label}: ${issues.join('; ')}`);
  return issues.length === 0;
}

const byId = new Map(DEFS.map((d) => [d.comparisonId, d]));
let inserted = 0, skipped = 0, warned = 0;

for (const file of FILES) {
  let src = fs.readFileSync(file, 'utf8');
  const bracket = src.indexOf('[', src.indexOf('= ['));
  const objs = findObjects(src, bracket);
  // walk objects in REVERSE so earlier byte offsets stay valid as we splice
  for (let k = objs.length - 1; k >= 0; k--) {
    const [s, e] = objs[k];
    const objText = src.slice(s, e);
    const id = idOf(objText);
    const d = id && byId.get(id);
    if (!d) continue;
    if (/\bdefinitionA:|\bdefinition:/.test(objText)) { console.log(`  skip ${id} (already has field)`); skipped++; continue; }

    let block = '';
    if (d.kind === 'twosided') {
      if (validate(id, 'A', d.definitionA)) {} else warned++;
      if (validate(id, 'B', d.definitionB)) {} else warned++;
      block =
        `    definitionA:\n      ${tl(d.definitionA)},\n` +
        `    definitionB:\n      ${tl(d.definitionB)},\n`;
    } else {
      if (validate(id, 'def', d.definition)) {} else warned++;
      if (!/^What (Is|Are) .+\?$/.test(d.definitionHeading.trim())) console.log(`  ⚠ ${id}.heading not "What Is/Are …?": ${d.definitionHeading}`);
      block =
        `    definitionHeading: ${tl(d.definitionHeading)},\n` +
        `    definition:\n      ${tl(d.definition)},\n`;
    }

    const rel = objText.indexOf('introHeading:');
    if (rel === -1) { console.log(`  !! ${id}: no introHeading anchor`); continue; }
    // find start-of-line of introHeading to preserve indentation
    const insAbs = s + src.slice(s, s + rel).lastIndexOf('\n') + 1;
    src = src.slice(0, insAbs) + block + src.slice(insAbs);
    inserted++;
  }
  fs.writeFileSync(file, src);
  console.log(`✓ ${file}`);
}
console.log(`\ninserted ${inserted} · skipped ${skipped} · validation warnings ${warned}`);
console.log(`defs in _defs.json: ${DEFS.length}`);
