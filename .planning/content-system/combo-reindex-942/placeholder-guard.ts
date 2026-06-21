// Phase A safety guard: prove every one of the 1,365 combos resolves real content,
// so NONE falls back to the thin <ComboPlaceholder/> (ComboTemplate.tsx try/catch on
// getComboContent throwing). Critical now that all combos are indexable.
import { combos } from '../../../src/data/combos';
import { getComboContent } from '../../../src/data/combo-content';

let ok = 0;
const failures: string[] = [];
for (const combo of combos) {
  try {
    const content = getComboContent(combo.serviceId, combo.cityId);
    if (!content) throw new Error('empty');
    ok++;
  } catch {
    failures.push(combo.slug);
  }
}

console.log(`combos checked: ${combos.length} | resolved content: ${ok} | placeholder-fallback: ${failures.length}`);
if (failures.length > 0) {
  console.error('FAIL — these combos would render the placeholder:');
  for (const s of failures.slice(0, 30)) console.error('  - ' + s);
  process.exit(1);
}
console.log('PASS — 0 combos hit the placeholder path; all indexable combos render full content.');
