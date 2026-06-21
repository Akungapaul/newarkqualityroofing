// Combo Batch 8: insert the canonical service `definition` after `directAnswer` in each
// Maplewood + South Orange combo (entity-stable, propagated verbatim from the 2a service layer).
// String-aware, 0 deletions. Skips any combo that already has a `definition:` field.
import { readFileSync, writeFileSync, readdirSync } from 'fs';

// Reuse the canonical 65 service definitions extracted in Phase 3a (2a service layer).
const defs = JSON.parse(readFileSync('.planning/content-system/entity-grounding-3a-combo-defs/_defs.json', 'utf8'));
const cities = process.argv.slice(2).length ? process.argv.slice(2) : ['caldwell', 'north-caldwell', 'essex-fells', 'fairfield', 'roseland'];
const base = 'src/data/combo-content';

// Emit a single-quoted TS string literal (matches the committed combo `definition` style).
function toSingleQuoted(s) {
  return "'" + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n') + "'";
}

// Find the end (index just AFTER the trailing comma) of the directAnswer field value.
function directAnswerEnd(src) {
  const keyIdx = src.indexOf('directAnswer:');
  if (keyIdx < 0) return -1;
  let i = keyIdx + 'directAnswer:'.length;
  while (i < src.length && /\s/.test(src[i])) i++;
  const q = src[i];
  if (q !== "'" && q !== '"' && q !== '`') return -2;
  i++;
  while (i < src.length) {
    if (src[i] === '\\') { i += 2; continue; }
    if (src[i] === q) break;
    i++;
  }
  let j = i + 1;
  while (src[j] === ' ' || src[j] === '\n') j++;
  if (src[j] !== ',') return -3;
  return j + 1; // index just after the comma
}

let inserted = 0, skipped = 0, files = 0;
const errors = [];
for (const city of cities) {
  const dir = `${base}/${city}`;
  for (const fn of readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts')) {
    const path = `${dir}/${fn}`;
    let src = readFileSync(path, 'utf8');
    files++;
    if (/\n\s*definition:/.test(src)) {
      const sid = (src.match(/serviceId:\s*'([^']+)'/) || [])[1];
      skipped++;
      if (sid && defs[sid]) {
        const cur = (src.match(/\n\s*definition:\s*\n?\s*(['"`])([\s\S]*?)\1,/) || [])[2];
        if (cur && cur.replace(/\\'/g, "'") !== defs[sid]) {
          errors.push(`MISMATCH existing definition in ${path}`);
        }
      }
      continue;
    }
    const sid = (src.match(/serviceId:\s*'([^']+)'/) || [])[1];
    if (!sid) { errors.push(`no serviceId in ${path}`); continue; }
    const def = defs[sid];
    if (!def) { errors.push(`no def for serviceId '${sid}' (${path})`); continue; }
    const at = directAnswerEnd(src);
    if (at < 0) { errors.push(`directAnswer parse fail (${at}) in ${path}`); continue; }
    src = src.slice(0, at) + `\n  definition:\n    ${toSingleQuoted(def)},` + src.slice(at);
    writeFileSync(path, src);
    inserted++;
  }
}

console.log(`files=${files} inserted=${inserted} skipped=${skipped} errors=${errors.length}`);
for (const e of errors) console.error('  ERR', e);
if (errors.length) process.exit(1);
