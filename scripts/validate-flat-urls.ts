/**
 * Flat URL Structure Validator
 *
 * Validates that every slug in the registry is flat (no path separators).
 * All URLs should be single-segment: /{slug} with no nested paths.
 *
 * Run with: npx tsx scripts/validate-flat-urls.ts
 */

import { getAllSlugs } from '@/data/slug-registry';

// ─── Main ───────────────────────────────────────────────────────────────────

function main() {
  console.log('='.repeat(72));
  console.log('  FLAT URL STRUCTURE VALIDATION');
  console.log('='.repeat(72));
  console.log();

  const slugs = getAllSlugs();
  const violations: string[] = [];

  // The Knowledge Base lives at nested paths (/roofing-knowledge-base/{cluster}/{slug})
  // and is owned by the KB catch-all route's own enumeration -- NOT the flat registry.
  // This defensive exemption ensures that if a later phase ever records a nested KB
  // path in the registry, the flat-URL validator does not reject its '/'-containing
  // slug. The Phase-11 registry intentionally contains NO such nested paths.
  const KB_PREFIX = 'roofing-knowledge-base/';

  for (const slug of slugs) {
    // Homepage is empty string -- that's fine
    if (slug === '') continue;

    // Exempt nested Knowledge Base paths (owned by the KB catch-all route).
    if (slug.startsWith(KB_PREFIX)) continue;

    // Check for path separators
    if (slug.includes('/')) {
      violations.push(slug);
    }
  }

  console.log(`Checked ${slugs.length} slugs. ${violations.length} violations found.`);
  console.log();

  if (violations.length > 0) {
    console.log('-'.repeat(72));
    console.log('  VIOLATIONS (slugs containing path separators):');
    console.log('-'.repeat(72));
    for (const slug of violations) {
      console.log(`  /${slug}`);
    }
    console.log();
    process.exit(1);
  }

  console.log('All URLs are flat (no path separators). PASS');
  process.exit(0);
}

main();
