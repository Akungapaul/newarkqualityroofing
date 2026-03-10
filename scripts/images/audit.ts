#!/usr/bin/env tsx
// ─── Image Coverage Audit ───────────────────────────────────────────────────
// Checks that every page that should have an image has one mapped in the manifest.
// Reports coverage percentages for all 6 categories and lists specific missing images.
//
// Run with: npm run images:audit
// Exit code 0 = all critical coverage met, 1 = gaps exist

import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { imageManifest } from '@/data/image-manifest';

// ─── Types ──────────────────────────────────────────────────────────────────

interface CoverageResult {
  section: string;
  total: number;
  covered: number;
  missing: string[];
}

// ─── Homepage Image Coverage ────────────────────────────────────────────────

const REQUIRED_HOMEPAGE_IDS = [
  'hero-main',
  'residential-split',
  'commercial-split',
  'why-licensed',
  'why-experience',
  'why-warranty',
  'why-team',
  'pricing-estimate',
  'repair-services',
  'consultation',
  'faq-options',
  'service-map',
  'trust-bar',
  'cta-final',
  'emergency-banner',
];

function auditHomepageImages(): CoverageResult {
  const homepageEntries = imageManifest.filter(
    (e) => e.category === 'homepage'
  );
  const existingIds = new Set(homepageEntries.map((e) => e.id));

  const missing: string[] = [];
  for (const id of REQUIRED_HOMEPAGE_IDS) {
    if (!existingIds.has(id)) {
      missing.push(id);
    }
  }

  return {
    section: 'Homepage Images',
    total: REQUIRED_HOMEPAGE_IDS.length,
    covered: REQUIRED_HOMEPAGE_IDS.length - missing.length,
    missing,
  };
}

// ─── Service Hero Coverage ──────────────────────────────────────────────────

function auditServiceHeroes(): CoverageResult {
  const serviceHeroEntries = imageManifest.filter(
    (e) => e.category === 'service-hero'
  );
  const coveredIds = new Set(serviceHeroEntries.map((e) => e.pageId));

  const missing: string[] = [];
  for (const service of services) {
    if (!coveredIds.has(service.id)) {
      missing.push(`${service.name} (${service.id})`);
    }
  }

  return {
    section: 'Service Heroes',
    total: services.length,
    covered: services.length - missing.length,
    missing,
  };
}

// ─── City Hero Coverage ─────────────────────────────────────────────────────

function auditCityHeroes(): CoverageResult {
  const cityHeroEntries = imageManifest.filter(
    (e) => e.category === 'city-hero'
  );
  const coveredIds = new Set(cityHeroEntries.map((e) => e.pageId));

  const missing: string[] = [];
  for (const city of cities) {
    if (!coveredIds.has(city.id)) {
      missing.push(`${city.name} (${city.id})`);
    }
  }

  return {
    section: 'City Heroes',
    total: cities.length,
    covered: cities.length - missing.length,
    missing,
  };
}

// ─── Gallery Before/After Coverage ──────────────────────────────────────────

const MIN_GALLERY_PAIRS = 6;

function auditGallery(): CoverageResult {
  const befores = imageManifest.filter(
    (e) => e.category === 'gallery-before'
  );
  const afters = imageManifest.filter(
    (e) => e.category === 'gallery-after'
  );

  // Count complete pairs by matching pair IDs
  const beforeIds = new Set(
    befores.map((e) => e.id.replace('gallery-before-', ''))
  );
  const afterIds = new Set(
    afters.map((e) => e.id.replace('gallery-after-', ''))
  );

  let completePairs = 0;
  const missingParts: string[] = [];

  // Check all before IDs have corresponding after
  for (const pairId of beforeIds) {
    if (afterIds.has(pairId)) {
      completePairs++;
    } else {
      missingParts.push(`Pair "${pairId}": has before, missing after`);
    }
  }

  // Check for orphaned after without before
  for (const pairId of afterIds) {
    if (!beforeIds.has(pairId)) {
      missingParts.push(`Pair "${pairId}": has after, missing before`);
    }
  }

  // Check minimum pair count
  if (completePairs < MIN_GALLERY_PAIRS) {
    const deficit = MIN_GALLERY_PAIRS - completePairs;
    missingParts.push(
      `Need ${deficit} more complete before/after pair${deficit > 1 ? 's' : ''} (minimum: ${MIN_GALLERY_PAIRS})`
    );
  }

  return {
    section: 'Gallery Pairs',
    total: MIN_GALLERY_PAIRS,
    covered: Math.min(completePairs, MIN_GALLERY_PAIRS),
    missing: missingParts,
  };
}

// ─── Content Pool Coverage ──────────────────────────────────────────────────

const CONTENT_SUBCATEGORIES = [
  { category: 'content-crew' as const, name: 'Crew' },
  { category: 'content-materials' as const, name: 'Materials' },
  { category: 'content-consultation' as const, name: 'Consultation' },
  { category: 'content-seasonal' as const, name: 'Seasonal' },
];

const MIN_CONTENT_PER_SUBCATEGORY = 4;

function auditContentPool(): CoverageResult {
  const total = CONTENT_SUBCATEGORIES.length * MIN_CONTENT_PER_SUBCATEGORY;
  let covered = 0;
  const missing: string[] = [];

  for (const sub of CONTENT_SUBCATEGORIES) {
    const entries = imageManifest.filter((e) => e.category === sub.category);
    const count = entries.length;
    const subCovered = Math.min(count, MIN_CONTENT_PER_SUBCATEGORY);
    covered += subCovered;

    if (count < MIN_CONTENT_PER_SUBCATEGORY) {
      missing.push(
        `${sub.name}: ${count}/${MIN_CONTENT_PER_SUBCATEGORY} (need ${MIN_CONTENT_PER_SUBCATEGORY - count} more)`
      );
    }
  }

  return {
    section: 'Content Pool',
    total,
    covered,
    missing,
  };
}

// ─── OG Image Coverage ─────────────────────────────────────────────────────

function auditOGImages(): CoverageResult {
  const ogEntries = imageManifest.filter((e) => e.category === 'og');

  // Build sets for quick lookup
  const ogHomepage = ogEntries.some(
    (e) => e.pageType === 'homepage'
  );
  const ogServiceIds = new Set(
    ogEntries.filter((e) => e.pageType === 'service').map((e) => e.pageId)
  );
  const ogCityIds = new Set(
    ogEntries.filter((e) => e.pageType === 'city').map((e) => e.pageId)
  );

  const total = 1 + services.length + cities.length; // 1 homepage + 65 services + 21 cities = 87
  const missing: string[] = [];

  // Homepage OG
  if (!ogHomepage) {
    missing.push('Homepage OG image');
  }

  // Service OG images
  for (const service of services) {
    if (!ogServiceIds.has(service.id)) {
      missing.push(`OG: ${service.name} (${service.id})`);
    }
  }

  // City OG images
  for (const city of cities) {
    if (!ogCityIds.has(city.id)) {
      missing.push(`OG: ${city.name} (${city.id})`);
    }
  }

  return {
    section: 'OG Images',
    total,
    covered: total - missing.length,
    missing,
  };
}

// ─── Orphaned Manifest Entries ──────────────────────────────────────────────

function findOrphanedEntries(): string[] {
  const validServiceIds = new Set(services.map((s) => s.id));
  const validCityIds = new Set(cities.map((c) => c.id));
  const orphans: string[] = [];

  for (const entry of imageManifest) {
    // Skip entries without pageId (homepage, shared, etc.)
    if (!entry.pageId) continue;

    if (entry.pageType === 'service' && !validServiceIds.has(entry.pageId)) {
      orphans.push(
        `${entry.id}: references unknown service "${entry.pageId}"`
      );
    }

    if (entry.pageType === 'city' && !validCityIds.has(entry.pageId)) {
      orphans.push(
        `${entry.id}: references unknown city "${entry.pageId}"`
      );
    }
  }

  return orphans;
}

// ─── Output Formatting ─────────────────────────────────────────────────────

function formatPercent(covered: number, total: number): string {
  if (total === 0) return '100%';
  return `${Math.round((covered / total) * 100)}%`;
}

function printCoverageResult(result: CoverageResult): void {
  const pct = formatPercent(result.covered, result.total);
  const status = result.covered === result.total ? 'PASS' : 'FAIL';
  const icon = status === 'PASS' ? '[PASS]' : '[FAIL]';

  console.log(
    `\n${icon} ${result.section}: ${result.covered}/${result.total} covered (${pct})`
  );

  if (result.missing.length > 0 && result.missing.length <= 20) {
    for (const item of result.missing) {
      console.log(`    - ${item}`);
    }
  } else if (result.missing.length > 20) {
    // Show first 10, then summary
    for (const item of result.missing.slice(0, 10)) {
      console.log(`    - ${item}`);
    }
    console.log(`    ... and ${result.missing.length - 10} more`);
  }
}

// ─── Main ───────────────────────────────────────────────────────────────────

function main(): void {
  console.log('=== Image Coverage Audit ===\n');
  console.log(`Manifest entries: ${imageManifest.length}`);
  console.log(`Services: ${services.length}`);
  console.log(`Cities: ${cities.length}`);

  // Run all coverage checks
  const results: CoverageResult[] = [
    auditHomepageImages(),
    auditServiceHeroes(),
    auditCityHeroes(),
    auditGallery(),
    auditContentPool(),
    auditOGImages(),
  ];

  // Print results
  for (const result of results) {
    printCoverageResult(result);
  }

  // Orphaned entries check
  const orphans = findOrphanedEntries();
  if (orphans.length > 0) {
    console.log(`\n[WARN] Orphaned manifest entries: ${orphans.length}`);
    for (const orphan of orphans) {
      console.log(`    - ${orphan}`);
    }
  }

  // Total summary
  const totalRequired = results.reduce((sum, r) => sum + r.total, 0);
  const totalCovered = results.reduce((sum, r) => sum + r.covered, 0);
  const totalPct = formatPercent(totalCovered, totalRequired);

  console.log('\n' + '='.repeat(50));
  console.log(
    `Total coverage: ${totalCovered}/${totalRequired} (${totalPct})`
  );

  // Critical coverage check: service heroes, city heroes, OG images
  const criticalResults = results.filter(
    (r) =>
      r.section === 'Service Heroes' ||
      r.section === 'City Heroes' ||
      r.section === 'OG Images'
  );
  const criticalGaps = criticalResults.some((r) => r.covered < r.total);

  if (criticalGaps) {
    console.log('Status: FAIL (critical coverage gaps)');
    process.exit(1);
  } else {
    console.log('Status: PASS (all critical coverage met)');
    process.exit(0);
  }
}

main();
