/* eslint-disable @typescript-eslint/no-require-imports */
// Verification script for data integrity
// Run with: npx tsx scripts/verify-data.ts

import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { comparisons } from '@/data/comparisons';
import { corePages } from '@/data/core-pages';

let errors = 0;

function check(label: string, condition: boolean, detail?: string) {
  if (condition) {
    console.log(`  PASS: ${label}`);
  } else {
    console.error(`  FAIL: ${label}${detail ? ' -- ' + detail : ''}`);
    errors++;
  }
}

console.log('\n=== Data Verification ===\n');

// Counts
console.log('--- Counts ---');
check(`services.length === 63`, services.length === 63, `got ${services.length}`);
check(`cities.length === 21`, cities.length === 21, `got ${cities.length}`);
check(`comparisons.length === 30`, comparisons.length === 30, `got ${comparisons.length}`);
check(`corePages.length === 7`, corePages.length === 7, `got ${corePages.length}`);

// Unique IDs
console.log('\n--- Unique IDs ---');
const serviceIds = new Set(services.map(s => s.id));
check('All service IDs unique', serviceIds.size === services.length, `${serviceIds.size} unique of ${services.length}`);

const serviceSlugs = new Set(services.map(s => s.slug));
check('All service slugs unique', serviceSlugs.size === services.length, `${serviceSlugs.size} unique of ${services.length}`);

const cityIds = new Set(cities.map(c => c.id));
check('All city IDs unique', cityIds.size === cities.length, `${cityIds.size} unique of ${cities.length}`);

const citySlugs = new Set(cities.map(c => c.slug));
check('All city slugs unique', citySlugs.size === cities.length, `${citySlugs.size} unique of ${cities.length}`);

const compIds = new Set(comparisons.map(c => c.id));
check('All comparison IDs unique', compIds.size === comparisons.length, `${compIds.size} unique of ${comparisons.length}`);

const compSlugs = new Set(comparisons.map(c => c.slug));
check('All comparison slugs unique', compSlugs.size === comparisons.length, `${compSlugs.size} unique of ${comparisons.length}`);

// Adjacent city references
console.log('\n--- City References ---');
let badRefs = 0;
for (const city of cities) {
  for (const adjId of city.adjacentCityIds) {
    if (!cityIds.has(adjId)) {
      console.error(`  FAIL: City "${city.id}" references non-existent adjacent city "${adjId}"`);
      badRefs++;
    }
  }
}
check('All adjacentCityIds reference valid city IDs', badRefs === 0, `${badRefs} bad refs`);

// Newark HQ
console.log('\n--- Special Checks ---');
const newark = cities.find(c => c.id === 'newark');
check('Newark exists', !!newark);
check('Newark has isHQ: true', newark?.isHQ === true);

// Category counts
console.log('\n--- Category Breakdown ---');
const catCounts = new Map<string, number>();
for (const s of services) {
  catCounts.set(s.category, (catCounts.get(s.category) || 0) + 1);
}
for (const [cat, count] of catCounts.entries()) {
  console.log(`  ${cat}: ${count}`);
}

const compCatCounts = new Map<string, number>();
for (const c of comparisons) {
  compCatCounts.set(c.category, (compCatCounts.get(c.category) || 0) + 1);
}
console.log('\n--- Comparison Category Breakdown ---');
for (const [cat, count] of compCatCounts.entries()) {
  console.log(`  ${cat}: ${count}`);
}

console.log(`\n=== ${errors === 0 ? 'ALL CHECKS PASSED' : `${errors} CHECKS FAILED`} ===\n`);
process.exit(errors > 0 ? 1 : 0);
