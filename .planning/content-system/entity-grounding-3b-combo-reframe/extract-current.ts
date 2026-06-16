// Extract the current directAnswer of all 195 done-city combos (Newark / East
// Orange / Orange) for the 3b reframe. Imports the per-city ComboContent[] arrays
// (the wired source of truth) and emits _current.json keyed by `${cityId}::${serviceId}`.
import { writeFileSync } from 'fs';
import { newarkComboContent } from '@/data/combo-content/newark';
import { eastOrangeComboContent } from '@/data/combo-content/east-orange';
import { orangeComboContent } from '@/data/combo-content/orange';
import type { ComboContent } from '@/data/combo-content/schema';

const CITY_DISPLAY: Record<string, string> = {
  newark: 'Newark',
  'east-orange': 'East Orange',
  orange: 'Orange',
};

const sets: Array<[string, ComboContent[]]> = [
  ['newark', newarkComboContent],
  ['east-orange', eastOrangeComboContent],
  ['orange', orangeComboContent],
];

type Row = {
  cityId: string;
  cityDisplay: string;
  serviceId: string;
  directAnswer: string;
  hasCredentialTail: boolean;
};

const rows: Row[] = [];
let missing = 0;
for (const [cityId, arr] of sets) {
  for (const c of arr) {
    if (!c.directAnswer) {
      console.error(`MISSING directAnswer: ${cityId}/${c.serviceId}`);
      missing++;
      continue;
    }
    rows.push({
      cityId,
      cityDisplay: CITY_DISPLAY[cityId],
      serviceId: c.serviceId,
      directAnswer: c.directAnswer,
      hasCredentialTail: /Home Improvement Contractor|licensed contractor/i.test(c.directAnswer),
    });
  }
}
if (missing) {
  console.error(`\n${missing} combos missing directAnswer — aborting.`);
  process.exit(1);
}

const out = `${__dirname}/_current.json`;
writeFileSync(out, JSON.stringify(rows, null, 2));
const noTail = rows.filter((r) => !r.hasCredentialTail).length;
console.log(`Wrote ${rows.length} combo directAnswers -> ${out}`);
console.log(`  newark=${rows.filter((r) => r.cityId === 'newark').length} east-orange=${rows.filter((r) => r.cityId === 'east-orange').length} orange=${rows.filter((r) => r.cityId === 'orange').length}`);
console.log(`  no-credential-tail: ${noTail}`);
