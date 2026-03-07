// Similarity validation script for combo content pages
// Run with: npx tsx scripts/validate-similarity.ts [--sample]
//
// Compares text content between combo pages using Dice-Sorensen coefficient
// to ensure sufficient differentiation across service x city combinations.

import { getAllComboContent } from '@/data/combo-content';
import { services } from '@/data/services';
import type { ComboContent } from '@/data/combo-content/schema';

// ─── Configuration ──────────────────────────────────────────────────────────

const THRESHOLDS = {
  // Same service across different cities (e.g., roof-repair in Newark vs Bloomfield)
  crossCity: 0.70,
  // Same city across different services (e.g., roof-repair vs gutter-install in Newark)
  crossService: 0.50,
  // Same category in same city (e.g., two repair services in Newark)
  crossCategory: 0.60,
} as const;

// Strategic sample: 5 representative services across all cities
// plus all repair-maintenance services in Newark
const SAMPLE_SERVICES = [
  'roof-repair',
  'asphalt-shingle-roofing',
  'tpo-roofing-installation',
  'gutter-installation-repair',
  'commercial-roof-installation',
];

const SAMPLE_CITY = 'newark';

// ─── Helpers ────────────────────────────────────────────────────────────────

function renderText(c: ComboContent): string {
  return [
    ...c.overview,
    ...c.challenges,
    ...c.process,
    ...c.faqs.map((f) => `${f.question} ${f.answer}`),
  ].join(' ');
}

/**
 * Dice-Sorensen coefficient using bigram overlap.
 * Formula: 2 * |intersection of bigrams| / (|bigrams in A| + |bigrams in B|)
 * Returns 0.0 (completely different) to 1.0 (identical).
 */
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

type ComparisonType = 'cross-city' | 'cross-service' | 'cross-category';

interface PairResult {
  pageA: string;
  pageB: string;
  type: ComparisonType;
  score: number;
  threshold: number;
  status: 'PASS' | 'FAIL';
}

function getThreshold(type: ComparisonType): number {
  switch (type) {
    case 'cross-city':
      return THRESHOLDS.crossCity;
    case 'cross-service':
      return THRESHOLDS.crossService;
    case 'cross-category':
      return THRESHOLDS.crossCategory;
  }
}

// ─── Grouping ───────────────────────────────────────────────────────────────

const serviceMap = new Map(services.map((s) => [s.id, s]));

function getCategory(serviceId: string): string | undefined {
  return serviceMap.get(serviceId)?.category;
}

function classifyPair(a: ComboContent, b: ComboContent): ComparisonType {
  if (a.serviceId === b.serviceId && a.cityId !== b.cityId) {
    return 'cross-city';
  }
  if (a.cityId === b.cityId && a.serviceId !== b.serviceId) {
    const catA = getCategory(a.serviceId);
    const catB = getCategory(b.serviceId);
    if (catA && catB && catA === catB) {
      return 'cross-category';
    }
    return 'cross-service';
  }
  // Fallback: different service and different city
  return 'cross-service';
}

// ─── Main ───────────────────────────────────────────────────────────────────

function main() {
  const args = process.argv.slice(2);
  const useSample = args.includes('--sample');

  console.log('=== Combo Content Similarity Validation ===\n');

  let allContent = getAllComboContent();

  if (allContent.length === 0) {
    console.log('WARNING: No combo content found yet.');
    console.log('This is expected during early development.');
    console.log('Content will be validated as city batches are authored.\n');
    console.log(`Thresholds configured:`);
    console.log(`  Cross-city (same service):    < ${THRESHOLDS.crossCity * 100}%`);
    console.log(`  Cross-service (same city):    < ${THRESHOLDS.crossService * 100}%`);
    console.log(`  Cross-category (same city):   < ${THRESHOLDS.crossCategory * 100}%`);
    console.log('\nRun again after adding combo content files.');
    process.exit(0);
  }

  // Apply sample filter if requested
  if (useSample) {
    console.log('Using strategic sample (--sample flag):\n');
    const repairMaintenanceIds = services
      .filter((s) => s.category === 'repair-maintenance')
      .map((s) => s.id);

    allContent = allContent.filter((c) => {
      // Include sample services across all cities
      if (SAMPLE_SERVICES.includes(c.serviceId)) return true;
      // Include all repair-maintenance services in Newark
      if (c.cityId === SAMPLE_CITY && repairMaintenanceIds.includes(c.serviceId)) return true;
      return false;
    });

    console.log(`  Sample size: ${allContent.length} combo pages\n`);
  } else {
    console.log(`Total combo pages: ${allContent.length}\n`);
  }

  // Pre-render all text
  const textCache = new Map<string, string>();
  for (const c of allContent) {
    textCache.set(`${c.serviceId}:${c.cityId}`, renderText(c));
  }

  // Generate all pairs and classify
  const results: PairResult[] = [];

  for (let i = 0; i < allContent.length; i++) {
    for (let j = i + 1; j < allContent.length; j++) {
      const a = allContent[i];
      const b = allContent[j];

      // Only compare pairs that share a service or city
      if (a.serviceId !== b.serviceId && a.cityId !== b.cityId) continue;

      const type = classifyPair(a, b);
      const textA = textCache.get(`${a.serviceId}:${a.cityId}`)!;
      const textB = textCache.get(`${b.serviceId}:${b.cityId}`)!;
      const score = diceCoefficient(textA, textB);
      const threshold = getThreshold(type);

      results.push({
        pageA: `${a.serviceId}/${a.cityId}`,
        pageB: `${b.serviceId}/${b.cityId}`,
        type,
        score,
        threshold,
        status: score < threshold ? 'PASS' : 'FAIL',
      });
    }
  }

  // Output results table
  if (results.length > 0) {
    console.log('Pair Comparisons:');
    console.log('-'.repeat(110));
    console.log(
      'Page A'.padEnd(35) +
        'Page B'.padEnd(35) +
        'Type'.padEnd(16) +
        'Score'.padEnd(8) +
        'Threshold'.padEnd(11) +
        'Status'
    );
    console.log('-'.repeat(110));

    for (const r of results) {
      const scoreStr = (r.score * 100).toFixed(1) + '%';
      const threshStr = (r.threshold * 100).toFixed(0) + '%';
      const statusStr = r.status === 'PASS' ? 'PASS' : 'FAIL';
      console.log(
        r.pageA.padEnd(35) +
          r.pageB.padEnd(35) +
          r.type.padEnd(16) +
          scoreStr.padEnd(8) +
          threshStr.padEnd(11) +
          statusStr
      );
    }
    console.log('-'.repeat(110));
  }

  // Summary
  const passes = results.filter((r) => r.status === 'PASS').length;
  const failures = results.filter((r) => r.status === 'FAIL').length;

  console.log('\n=== Summary ===');
  console.log(`Total pairs checked: ${results.length}`);
  console.log(`Passes: ${passes}`);
  console.log(`Failures: ${failures}`);

  if (failures > 0) {
    console.log('\nWorst offenders (highest similarity):');
    const sorted = [...results]
      .filter((r) => r.status === 'FAIL')
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
    for (const r of sorted) {
      console.log(
        `  ${(r.score * 100).toFixed(1)}% - ${r.pageA} vs ${r.pageB} (${r.type}, max ${(r.threshold * 100).toFixed(0)}%)`
      );
    }
    process.exit(1);
  } else {
    console.log('\nAll pairs within acceptable similarity thresholds.');
    process.exit(0);
  }
}

main();
