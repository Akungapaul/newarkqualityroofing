/**
 * Keyword Cannibalization Audit
 *
 * Identifies pages with overlapping target keywords using bigram
 * Dice-Sorensen similarity on page titles/keywords.
 *
 * This is an INFORMATIONAL report -- it does not fail the build.
 *
 * Run with: npx tsx scripts/audit-cannibalization.ts
 */

import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { combos } from '@/data/combos';
import { comparisons } from '@/data/comparisons';
import { articles } from '@/data/articles';

// ─── Types ──────────────────────────────────────────────────────────────────

interface PageKeyword {
  slug: string;
  type: string;
  keyword: string;
}

type Severity = 'HIGH' | 'MEDIUM' | 'LOW';

interface CannibalPair {
  pageA: PageKeyword;
  pageB: PageKeyword;
  similarity: number;
  severity: Severity;
  note?: string;
}

// ─── Dice-Sorensen Coefficient ──────────────────────────────────────────────

function diceCoefficient(a: string, b: string): number {
  const normalize = (s: string) => s.toLowerCase().replace(/\s+/g, ' ').trim();
  const na = normalize(a);
  const nb = normalize(b);

  if (na === nb) return 1.0;
  if (na.length < 2 || nb.length < 2) return 0.0;

  const bigrams = (s: string): Map<string, number> => {
    const map = new Map<string, number>();
    for (let i = 0; i < s.length - 1; i++) {
      const bg = s.slice(i, i + 2);
      map.set(bg, (map.get(bg) ?? 0) + 1);
    }
    return map;
  };

  const bA = bigrams(na);
  const bB = bigrams(nb);
  let intersection = 0;

  for (const [bg, countA] of bA) {
    const countB = bB.get(bg);
    if (countB) {
      intersection += Math.min(countA, countB);
    }
  }

  const totalA = na.length - 1;
  const totalB = nb.length - 1;
  return (2 * intersection) / (totalA + totalB);
}

// ─── Build page keyword signals ─────────────────────────────────────────────

const pages: PageKeyword[] = [];

// Service pages
for (const s of services) {
  pages.push({
    slug: s.slug,
    type: 'service',
    keyword: s.name,
  });
}

// City pages
for (const c of cities) {
  pages.push({
    slug: `roofing-in-${c.slug}-nj`,
    type: 'city',
    keyword: `Roofing Services in ${c.name}`,
  });
}

// Combo pages -- use a sample to avoid O(n^2) on 1,323 pages
// Sample: first 5 cities x all services
const sampleCityIds = new Set(cities.slice(0, 5).map((c) => c.id));
const cityById = new Map(cities.map((c) => [c.id, c]));
const serviceById = new Map(services.map((s) => [s.id, s]));

for (const combo of combos) {
  if (!sampleCityIds.has(combo.cityId)) continue;
  const service = serviceById.get(combo.serviceId);
  const city = cityById.get(combo.cityId);
  if (!service || !city) continue;

  pages.push({
    slug: combo.slug,
    type: 'combo',
    keyword: `${service.name} in ${city.name}`,
  });
}

// Comparison pages
for (const comp of comparisons) {
  pages.push({
    slug: comp.slug,
    type: 'comparison',
    keyword: comp.metaTitle,
  });
}

// Article pages -- sample first 30 to keep report readable
for (const article of articles.slice(0, 30)) {
  pages.push({
    slug: article.slug,
    type: 'article',
    keyword: article.metaTitle,
  });
}

// ─── Compare pairs ──────────────────────────────────────────────────────────

function classifySeverity(
  pageA: PageKeyword,
  pageB: PageKeyword,
  similarity: number
): { severity: Severity; note?: string } {
  const sameType = pageA.type === pageB.type;

  // Cross-type: combo vs service is EXPECTED (e.g., "Roof Repair" vs "Roof Repair in Newark")
  if (
    (pageA.type === 'combo' && pageB.type === 'service') ||
    (pageA.type === 'service' && pageB.type === 'combo')
  ) {
    return {
      severity: 'LOW',
      note: 'Expected: combo/service overlap (different intents)',
    };
  }

  if (sameType && similarity > 0.80) {
    return { severity: 'HIGH' };
  }
  if (sameType && similarity > 0.70) {
    return { severity: 'MEDIUM' };
  }
  if (!sameType && similarity > 0.70) {
    return { severity: 'LOW' };
  }

  // Below threshold -- not flagged
  return { severity: 'LOW' };
}

function main() {
  console.log('='.repeat(72));
  console.log('  KEYWORD CANNIBALIZATION AUDIT');
  console.log('='.repeat(72));
  console.log();
  console.log(`Pages analyzed: ${pages.length}`);
  console.log(`  Services: ${services.length}`);
  console.log(`  Cities: ${cities.length}`);
  console.log(`  Combos (sampled): ${pages.filter((p) => p.type === 'combo').length}`);
  console.log(`  Comparisons: ${comparisons.length}`);
  console.log(`  Articles (sampled): ${pages.filter((p) => p.type === 'article').length}`);
  console.log();

  const flagged: CannibalPair[] = [];
  let totalPairs = 0;

  for (let i = 0; i < pages.length; i++) {
    for (let j = i + 1; j < pages.length; j++) {
      totalPairs++;
      const similarity = diceCoefficient(pages[i].keyword, pages[j].keyword);

      if (similarity > 0.70) {
        const { severity, note } = classifySeverity(pages[i], pages[j], similarity);
        flagged.push({
          pageA: pages[i],
          pageB: pages[j],
          similarity,
          severity,
          note,
        });
      }
    }
  }

  // Group by severity
  const high = flagged.filter((f) => f.severity === 'HIGH');
  const medium = flagged.filter((f) => f.severity === 'MEDIUM');
  const low = flagged.filter((f) => f.severity === 'LOW');

  console.log('='.repeat(72));
  console.log('  RESULTS');
  console.log('='.repeat(72));
  console.log();
  console.log(`Total pairs checked: ${totalPairs}`);
  console.log(`Flagged pairs: ${flagged.length}`);
  console.log(`  HIGH (same type, >80%): ${high.length}`);
  console.log(`  MEDIUM (same type, 70-80%): ${medium.length}`);
  console.log(`  LOW (cross-type, >70%): ${low.length}`);
  console.log();

  // Print HIGH severity
  if (high.length > 0) {
    console.log('-'.repeat(72));
    console.log('  HIGH SEVERITY (same page type, >80% similarity)');
    console.log('-'.repeat(72));
    const sorted = high.sort((a, b) => b.similarity - a.similarity);
    for (const pair of sorted.slice(0, 20)) {
      console.log(
        `  ${(pair.similarity * 100).toFixed(1)}% | /${pair.pageA.slug} (${pair.pageA.type})` +
          ` vs /${pair.pageB.slug} (${pair.pageB.type})`
      );
      console.log(`         "${pair.pageA.keyword}" vs "${pair.pageB.keyword}"`);
      if (pair.note) console.log(`         Note: ${pair.note}`);
    }
    if (sorted.length > 20) {
      console.log(`  ... and ${sorted.length - 20} more HIGH pairs`);
    }
    console.log();
  }

  // Print MEDIUM severity
  if (medium.length > 0) {
    console.log('-'.repeat(72));
    console.log('  MEDIUM SEVERITY (same page type, 70-80% similarity)');
    console.log('-'.repeat(72));
    const sorted = medium.sort((a, b) => b.similarity - a.similarity);
    for (const pair of sorted.slice(0, 15)) {
      console.log(
        `  ${(pair.similarity * 100).toFixed(1)}% | /${pair.pageA.slug} (${pair.pageA.type})` +
          ` vs /${pair.pageB.slug} (${pair.pageB.type})`
      );
      console.log(`         "${pair.pageA.keyword}" vs "${pair.pageB.keyword}"`);
    }
    if (sorted.length > 15) {
      console.log(`  ... and ${sorted.length - 15} more MEDIUM pairs`);
    }
    console.log();
  }

  // Print LOW summary
  if (low.length > 0) {
    console.log('-'.repeat(72));
    console.log('  LOW SEVERITY (cross-type, >70% similarity)');
    console.log('-'.repeat(72));

    // Count by type pair
    const typePairCounts = new Map<string, number>();
    for (const pair of low) {
      const key = [pair.pageA.type, pair.pageB.type].sort().join(' vs ');
      typePairCounts.set(key, (typePairCounts.get(key) ?? 0) + 1);
    }

    for (const [typePair, count] of typePairCounts) {
      const expectedNote = typePair === 'combo vs service' ? ' (expected)' : '';
      console.log(`  ${typePair}: ${count} pairs${expectedNote}`);
    }

    // Show top 5 examples
    const sorted = low
      .filter((p) => !p.note?.includes('Expected'))
      .sort((a, b) => b.similarity - a.similarity);
    if (sorted.length > 0) {
      console.log();
      console.log('  Top non-expected LOW pairs:');
      for (const pair of sorted.slice(0, 5)) {
        console.log(
          `    ${(pair.similarity * 100).toFixed(1)}% | /${pair.pageA.slug} vs /${pair.pageB.slug}`
        );
      }
    }
    console.log();
  }

  // Summary
  console.log('='.repeat(72));
  console.log('  SUMMARY');
  console.log('='.repeat(72));
  console.log(`  Total pages analyzed: ${pages.length}`);
  console.log(`  Total pairs checked: ${totalPairs}`);
  console.log(`  HIGH: ${high.length} | MEDIUM: ${medium.length} | LOW: ${low.length}`);
  console.log();
  console.log('  Note: This is an informational audit. Combo/service overlap is');
  console.log('  expected and serves different search intents (local vs. general).');
  console.log();

  // Informational only -- always exit 0
  process.exit(0);
}

main();
