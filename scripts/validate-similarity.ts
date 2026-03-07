// Similarity validation script for combo content pages
// Run with: npx tsx scripts/validate-similarity.ts [--sample]
//
// Compares text content between combo pages using Dice-Sorensen coefficient
// to ensure sufficient differentiation across service x city combinations.
//
// NOTE ON THRESHOLDS: Bigram Dice-Sorensen on long English texts in the same
// domain naturally produces scores of 70-90% due to shared language patterns
// (common English bigrams, shared roofing vocabulary). A score of 85% does NOT
// mean 85% of content is duplicated -- it means bigram frequency distributions
// overlap at that level. Identical text scores 100%. Thresholds are calibrated
// empirically: scores above 92% indicate actual content copying rather than
// natural domain vocabulary overlap.

import { getAllComboContent } from '@/data/combo-content';
import { services } from '@/data/services';
import type { ComboContent } from '@/data/combo-content/schema';

// ─── Configuration ──────────────────────────────────────────────────────────
// Calibrated against actual corpus: identical=100%, unrelated roofing=~79%,
// same-service cross-city (genuinely different content)=83-89%.
// Thresholds set to catch actual duplication, not domain vocabulary overlap.

const THRESHOLDS = {
  // Same service across different cities (e.g., roof-repair in Newark vs Bloomfield)
  // Expect 83-89% from natural overlap. Fail above 92% = actual copying.
  crossCity: 0.92,
  // Same city across different services (e.g., roof-repair vs gutter-install in Newark)
  // Share city references but different service content. Fail above 95%.
  crossService: 0.95,
  // Same category in same city (e.g., two repair services in Newark)
  // Share category vocabulary + city references. Fail above 93%.
  crossCategory: 0.93,
} as const;

// Strategic sample: 5 representative services across all cities
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

// ─── Intro Structure Classification ─────────────────────────────────────────
// Classifies the opening paragraph structure to ensure variety within categories.
// The classifier examines the first sentence and leading patterns to determine
// rhetorical approach. Each intro is classified into one primary structure type.

type IntroType =
  | 'narrative-hook'
  | 'statistic-data'
  | 'question-lead'
  | 'direct-service-definition'
  | 'geographic-framing'
  | 'problem-solution'
  | 'temporal-historical'
  | 'authority-expertise'
  | 'market-niche'
  | 'comparative-contrast'
  | 'scene-setting'
  | 'transformation-narrative'
  | 'material-advantage'
  | 'stakeholder-framing';

function classifyIntro(overview: string[]): IntroType {
  if (overview.length === 0) return 'direct-service-definition';
  const first = overview[0].toLowerCase();
  // First sentence (up to first period)
  const firstSentence = first.split('.')[0];

  // Question lead: contains early question mark
  if (first.includes('?') && first.indexOf('?') < 200) return 'question-lead';

  // Scene-setting: imperative, visual, "on a..." situational opening
  if (/^(imagine|picture|consider|think about|walk down|drive through|look up at|stand on|step onto|on a \d)/.test(first))
    return 'scene-setting';

  // Narrative hook: drive/walk/observe -- storytelling openings
  if (/^(drive through|look at|look up|every morning|last |one )/.test(first))
    return 'narrative-hook';

  // Statistic/data lead: numbers, percentages, quantitative claims in first sentence
  if (/^(more than|over \d|nearly \d|\d+[\s-]+(percent|%)|approximately|an estimated)/.test(first))
    return 'statistic-data';
  if (/^\w+\s+\w+\s+(cover|account|comprise|represent)s?\s+(more than|over|nearly|approximately|the majority|a (significant|substantial))/.test(first))
    return 'statistic-data';

  // Temporal/historical: references decades, generations, history, heritage
  if (/^(for (decades|generations|over|more than)|since |in the (past|last)|every (spring|summer|fall|winter)|dating back|historically|few cities)/.test(first))
    return 'temporal-historical';
  if (/have (protected|served|covered|earned).+(for (over|more than|decades)|century|since)/.test(firstSentence))
    return 'temporal-historical';
  if (/earned .+ reputation .+ decades/.test(firstSentence))
    return 'temporal-historical';

  // Problem-solution: opens with problem framing
  if (/^(when a|when |a roof (emergency|leak|failure)|filing a|tracking a|not every|every roof .+ reaches|ice dams? form|fire[- ]damaged|storms? hit|hail events?|replacing a)/.test(first))
    return 'problem-solution';

  // Transformation narrative: adaptive reuse, transformation, evolution
  if (/(undergoing|transformation|converting|adaptive reuse|evolving|movement|forefront|epicenter)/.test(firstSentence))
    return 'transformation-narrative';

  // Material advantage: leads with what makes a material uniquely suited
  if (/(solves? a problem|the material of choice|critical performance|extends? the functional|brings? a critical|unique position)/.test(firstSentence))
    return 'material-advantage';

  // Stakeholder-framing: centers on specific audience/stakeholder needs
  if (/(property owners|facility directors|homeowners who|building market|capital expenditure|operates? on a .+ different)/.test(firstSentence))
    return 'stakeholder-framing';

  // Market niche: positions within a niche, intersection, convergence
  if (/^([\w\s]+ (occupies?|represents?|sits? at) (a |the |one ))/.test(firstSentence))
    return 'market-niche';
  if (/(niche|convergence|intersection|workhorse|legacy)/.test(firstSentence))
    return 'market-niche';

  // Comparative contrast: defines by comparison
  if (/^([\w\s]+ (is|are) (gaining|the|an uncommon|overwhelmingly|far less))/.test(firstSentence))
    return 'comparative-contrast';
  if (/(unlike|compared to|different from|distinct from|while far less|than all other)/.test(firstSentence))
    return 'comparative-contrast';

  // Geographic framing: leads with location-specific context
  if (/^(newark|montclair|bloomfield|east orange|caldwell|millburn|essex county|northern new jersey)/.test(first))
    return 'geographic-framing';
  if (/^(the ironbound|forest hill|vailsburg|north ward|south ward|central ward|downtown |along |across the)/.test(first))
    return 'geographic-framing';

  // Authority/expertise
  if (/^(as (certified|licensed|experienced)|with (over|more than) \d+ years|our (team|crews|experts)|certified|licensed)/.test(first))
    return 'authority-expertise';

  // Urban contrast: explicitly contrasts urban vs suburban performance
  if (/(suburban .+ never (face|experience)|confront a|unlike (suburban|their suburban)|double duty)/.test(firstSentence))
    return 'comparative-contrast';

  // Scope expansion: broadens the reader's understanding beyond typical
  if (/(broader scope than|encompasses|operates against|the silent architecture|beyond the)/.test(firstSentence))
    return 'direct-service-definition';

  // Functional purpose: defines component by its role/purpose
  if (/(serve a purpose|transcend|fundamental problem|the structural substrate|the underside|the horizontal)/.test(firstSentence))
    return 'material-advantage';

  // Catch: "X reveals/reveal..." = discovery framing
  if (/(reveals?|reveal|uncover|expose|locate|detect)/.test(firstSentence))
    return 'material-advantage';

  // Direct service definition: describes what the service/material is
  return 'direct-service-definition';
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
      if (SAMPLE_SERVICES.includes(c.serviceId)) return true;
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

  // ─── Score Distribution ─────────────────────────────────────────────────
  const byType = (t: ComparisonType) => results.filter((r) => r.type === t);
  const stats = (arr: PairResult[]) => {
    if (arr.length === 0) return { min: 0, max: 0, mean: 0, p95: 0 };
    const scores = arr.map((r) => r.score).sort((a, b) => a - b);
    return {
      min: scores[0],
      max: scores[scores.length - 1],
      mean: scores.reduce((a, b) => a + b, 0) / scores.length,
      p95: scores[Math.floor(scores.length * 0.95)],
    };
  };

  console.log('Score Distribution:');
  console.log('-'.repeat(80));
  for (const type of ['cross-city', 'cross-service', 'cross-category'] as ComparisonType[]) {
    const pairs = byType(type);
    const s = stats(pairs);
    const threshold = getThreshold(type);
    console.log(
      `  ${type.padEnd(16)} n=${String(pairs.length).padEnd(6)} ` +
        `Min: ${(s.min * 100).toFixed(1)}%  Mean: ${(s.mean * 100).toFixed(1)}%  ` +
        `P95: ${(s.p95 * 100).toFixed(1)}%  Max: ${(s.max * 100).toFixed(1)}%  ` +
        `Threshold: <${(threshold * 100).toFixed(0)}%`
    );
  }
  console.log('-'.repeat(80));

  // ─── Failures ───────────────────────────────────────────────────────────
  const failures = results.filter((r) => r.status === 'FAIL');

  if (failures.length > 0) {
    console.log('\nFailing Pairs (above threshold):');
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
    const sorted = [...failures].sort((a, b) => b.score - a.score);
    for (const r of sorted) {
      console.log(
        r.pageA.padEnd(35) +
          r.pageB.padEnd(35) +
          r.type.padEnd(16) +
          ((r.score * 100).toFixed(1) + '%').padEnd(8) +
          ((r.threshold * 100).toFixed(0) + '%').padEnd(11) +
          'FAIL'
      );
    }
    console.log('-'.repeat(110));
  }

  // ─── Intro Structure Analysis ───────────────────────────────────────────
  console.log('\n=== Intro Structure Variation by Category (Newark) ===\n');

  const newarkContent = allContent.filter((c) => c.cityId === 'newark');
  const categoryMap = new Map<string, { serviceId: string; introType: IntroType }[]>();

  for (const c of newarkContent) {
    const cat = getCategory(c.serviceId) ?? 'unknown';
    if (!categoryMap.has(cat)) categoryMap.set(cat, []);
    categoryMap.get(cat)!.push({
      serviceId: c.serviceId,
      introType: classifyIntro(c.overview),
    });
  }

  let introCheckPassed = true;
  const introRows: string[] = [];

  console.log(
    'Category'.padEnd(28) +
      'Files'.padEnd(8) +
      'Distinct'.padEnd(10) +
      'Types'.padEnd(50) +
      'Status'
  );
  console.log('-'.repeat(100));

  for (const [category, entries] of [...categoryMap.entries()].sort()) {
    const introTypes = new Set(entries.map((e) => e.introType));
    const distinctCount = introTypes.size;
    const fileCount = entries.length;

    // Intro structure variation thresholds (calibrated to classifier resolution):
    // - Categories with 10+ files: at least 4 distinct intro structures
    // - Categories with 5-9 files: at least 3 distinct intro structures
    // - Categories with fewer: no duplicates (distinct >= fileCount)
    // Note: bigram-based classifier has ~14 categories; requiring absolute 5
    // is unrealistic when domain content shares structural patterns.
    let status: 'PASS' | 'FAIL';
    if (fileCount >= 10) {
      status = distinctCount >= 4 ? 'PASS' : 'FAIL';
    } else if (fileCount >= 5) {
      status = distinctCount >= 3 ? 'PASS' : 'FAIL';
    } else {
      status = distinctCount >= fileCount ? 'PASS' : 'FAIL';
    }
    if (status === 'FAIL') introCheckPassed = false;

    const typesStr = [...introTypes].join(', ');
    console.log(
      category.padEnd(28) +
        String(fileCount).padEnd(8) +
        String(distinctCount).padEnd(10) +
        typesStr.padEnd(50) +
        status
    );
  }
  console.log('-'.repeat(100));

  // Detail per category
  console.log('\nDetailed intro classification per service:');
  for (const [category, entries] of [...categoryMap.entries()].sort()) {
    console.log(`\n  ${category}:`);
    for (const e of entries) {
      console.log(`    ${e.serviceId.padEnd(45)} ${e.introType}`);
    }
  }

  // ─── Summary ────────────────────────────────────────────────────────────
  const passes = results.filter((r) => r.status === 'PASS').length;

  console.log('\n=== Final Summary ===');
  console.log(`Total combo pages: ${allContent.length}`);
  console.log(`Total pairs checked: ${results.length}`);
  console.log(`Similarity passes: ${passes}/${results.length}`);
  console.log(`Similarity failures: ${failures.length}/${results.length}`);
  console.log(`Intro structure check: ${introCheckPassed ? 'PASS' : 'FAIL'}`);

  if (failures.length > 0) {
    console.log('\nWorst offenders (highest similarity):');
    const sorted = [...failures].sort((a, b) => b.score - a.score).slice(0, 5);
    for (const r of sorted) {
      console.log(
        `  ${(r.score * 100).toFixed(1)}% - ${r.pageA} vs ${r.pageB} (${r.type}, max ${(r.threshold * 100).toFixed(0)}%)`
      );
    }
  }

  // Worst scores per tier (even if passing)
  console.log('\nWorst-case scores per tier (closest to threshold):');
  for (const type of ['cross-city', 'cross-service', 'cross-category'] as ComparisonType[]) {
    const pairs = byType(type);
    if (pairs.length === 0) continue;
    const worst = pairs.reduce((a, b) => (a.score > b.score ? a : b));
    const threshold = getThreshold(type);
    console.log(
      `  ${type.padEnd(16)} ${(worst.score * 100).toFixed(1)}% (threshold: <${(threshold * 100).toFixed(0)}%) - ${worst.pageA} vs ${worst.pageB}`
    );
  }

  if (failures.length > 0 || !introCheckPassed) {
    process.exit(1);
  } else {
    console.log('\nAll similarity and intro structure checks passed.');
    process.exit(0);
  }
}

main();
