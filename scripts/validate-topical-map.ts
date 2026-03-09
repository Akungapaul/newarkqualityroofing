/**
 * Topical Map Coverage Validator
 *
 * Validates that every pillar page (service page) has at least 3 supporting
 * articles linking to it, and that comparison pages have articles too.
 *
 * Run with: npx tsx scripts/validate-topical-map.ts
 */

import { services } from '@/data/services';
import { comparisons } from '@/data/comparisons';
import { articles } from '@/data/articles';

// ─── Main ───────────────────────────────────────────────────────────────────

function main() {
  console.log('='.repeat(72));
  console.log('  TOPICAL MAP COVERAGE VALIDATION');
  console.log('='.repeat(72));
  console.log();

  let hasFailures = false;

  // ─── Service Pillar Pages ───────────────────────────────────────────────
  // Two services are excluded from article generation:
  // silicone-elastomeric-roof-coating and roof-replacement-cost
  const excludedServices = new Set([
    'silicone-elastomeric-roof-coating',
    'roof-replacement-cost',
  ]);

  const pillarServices = services.filter((s) => !excludedServices.has(s.id));
  const servicesWithFewArticles: Array<{ id: string; name: string; count: number }> = [];

  console.log('Service Pillar Pages:');
  console.log('-'.repeat(72));

  for (const service of pillarServices) {
    const supportingArticles = articles.filter(
      (a) => a.parentType === 'service' && a.parentId === service.id
    );

    if (supportingArticles.length < 3) {
      servicesWithFewArticles.push({
        id: service.id,
        name: service.name,
        count: supportingArticles.length,
      });
    }
  }

  if (servicesWithFewArticles.length > 0) {
    hasFailures = true;
    console.log(`  FAIL: ${servicesWithFewArticles.length} services have fewer than 3 articles:`);
    for (const s of servicesWithFewArticles) {
      console.log(`    ${s.name} (${s.id}): ${s.count} articles`);
    }
  } else {
    console.log(`  PASS: All ${pillarServices.length} service pillar pages have 3+ supporting articles`);
  }
  console.log();

  // ─── Comparison Pages ─────────────────────────────────────────────────
  const comparisonsWithoutArticles: Array<{ id: string; name: string; count: number }> = [];

  console.log('Comparison Pages:');
  console.log('-'.repeat(72));

  for (const comp of comparisons) {
    const supportingArticles = articles.filter(
      (a) => a.parentType === 'comparison' && a.parentId === comp.id
    );

    if (supportingArticles.length === 0) {
      comparisonsWithoutArticles.push({
        id: comp.id,
        name: comp.name,
        count: supportingArticles.length,
      });
    }
  }

  if (comparisonsWithoutArticles.length > 0) {
    console.log(`  WARNING: ${comparisonsWithoutArticles.length} comparisons have no articles:`);
    for (const c of comparisonsWithoutArticles.slice(0, 10)) {
      console.log(`    ${c.name} (${c.id}): ${c.count} articles`);
    }
    if (comparisonsWithoutArticles.length > 10) {
      console.log(`    ... and ${comparisonsWithoutArticles.length - 10} more`);
    }
  } else {
    console.log(`  PASS: All ${comparisons.length} comparison pages have supporting articles`);
  }
  console.log();

  // ─── Core (Homepage) Articles ─────────────────────────────────────────
  const coreArticles = articles.filter((a) => a.parentType === 'core');
  console.log('Core (Homepage) Articles:');
  console.log('-'.repeat(72));
  console.log(`  ${coreArticles.length} articles linked to homepage`);
  console.log();

  // ─── Summary ──────────────────────────────────────────────────────────
  const totalServiceArticles = articles.filter((a) => a.parentType === 'service').length;
  const totalComparisonArticles = articles.filter((a) => a.parentType === 'comparison').length;

  console.log('='.repeat(72));
  console.log('  SUMMARY');
  console.log('='.repeat(72));
  console.log(`  Pillar pages (services):          ${pillarServices.length}`);
  console.log(`  All have 3+ supporting articles:   ${servicesWithFewArticles.length === 0 ? 'YES' : 'NO'}`);
  console.log(`  Total service articles:            ${totalServiceArticles}`);
  console.log(`  Comparison pages:                  ${comparisons.length}`);
  console.log(`  Total comparison articles:          ${totalComparisonArticles}`);
  console.log(`  Core articles:                     ${coreArticles.length}`);
  console.log(`  Total articles:                    ${articles.length}`);
  console.log();

  if (hasFailures) {
    process.exit(1);
  }

  console.log('Topical map coverage validated. PASS');
  process.exit(0);
}

main();
