// Phase A — flip the 942 noindex doorway combos to KEEP-INDEX.
// Re-evaluation of the Phase-11 942-noindex verdict after the full per-city combo
// rewrite (batches 0-11) + a clean full-21-city near-dup gate (0 near-dups Jaccard>=50%,
// 0 dup metas, incl. the shared definition block).
//
// Targets ONLY rows that parse to exactly 9 comma-delimited fields AND are
// Service+City combos AND carry verdict NOINDEX. All 942 such rows are comma-free
// (verified NF==9); embedded-comma rows (quoted Reason fields on other verdicts) are
// NF>9 and are guarded out, so non-target lines are preserved BYTE-FOR-BYTE.
import { readFileSync, writeFileSync } from 'node:fs';

const CSV = 'URL-Classification.csv';
const NEW_REASON =
  'Unique hand-authored answer-first content; indexable after the full 21-city combo rewrite (batches 0-11)';

const raw = readFileSync(CSV, 'utf8');
const endsWithNL = raw.endsWith('\n');
const lines = raw.split('\n');

let changed = 0;
const out = lines.map((line, i) => {
  if (i === 0) return line; // header
  if (line === '') return line; // trailing blank
  const parts = line.split(',');
  if (
    parts.length === 9 &&
    parts[2] === 'Service+City combo' &&
    parts[6] === 'NOINDEX'
  ) {
    parts[6] = 'KEEP-INDEX';
    parts[8] = NEW_REASON; // refresh stale "let the parent hub rank" reason
    changed++;
    return parts.join(',');
  }
  return line; // byte-exact for every non-target row
});

if (changed !== 942) {
  console.error(`FAIL: expected to flip 942 rows, flipped ${changed}`);
  process.exit(1);
}

writeFileSync(CSV, out.join('\n') + (endsWithNL ? '' : ''));
console.log(`OK: flipped ${changed} combo NOINDEX -> KEEP-INDEX`);
