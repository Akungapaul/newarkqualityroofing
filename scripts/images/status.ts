#!/usr/bin/env tsx
// ─── Image Status CLI ──────────────────────────────────────────────────────
// Shows counts of staged, approved, and pending images with coverage report.
// Usage:
//   npm run images:status

import fs from 'fs';
import path from 'path';
import { ALL_PROMPTS } from './lib/prompts';
import { readManifest } from './lib/manifest';
import type { ImageEntry } from './lib/types';

// ─── Coverage targets ──────────────────────────────────────────────────────

interface CoverageTarget {
  label: string;
  category: string;
  total: number;
}

const COVERAGE_TARGETS: CoverageTarget[] = [
  { label: 'Service Heroes', category: 'service-hero', total: 65 },
  { label: 'City Heroes', category: 'city-hero', total: 21 },
  { label: 'Homepage', category: 'homepage', total: 15 },
  { label: 'Gallery Before', category: 'gallery-before', total: 8 },
  { label: 'Gallery After', category: 'gallery-after', total: 8 },
  { label: 'Content: Crew', category: 'content-crew', total: 5 },
  { label: 'Content: Materials', category: 'content-materials', total: 5 },
  { label: 'Content: Consultation', category: 'content-consultation', total: 5 },
  { label: 'Content: Seasonal', category: 'content-seasonal', total: 5 },
];

// ─── Count staged images ───────────────────────────────────────────────────

function countStagedImages(stagingBase: string): Map<string, number> {
  const counts = new Map<string, number>();
  const imageExtensions = ['.png', '.webp', '.jpg', '.jpeg'];

  if (!fs.existsSync(stagingBase)) {
    return counts;
  }

  const subdirs = fs.readdirSync(stagingBase, { withFileTypes: true });
  for (const subdir of subdirs) {
    if (!subdir.isDirectory()) continue;

    const subdirPath = path.join(stagingBase, subdir.name);
    const files = fs.readdirSync(subdirPath);

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (!imageExtensions.includes(ext)) continue;

      const basename = path.basename(file, ext);
      // Match to prompt to get category
      const prompt = ALL_PROMPTS.find((p) => p.filename === basename);
      const category = prompt?.category ?? 'unknown';
      counts.set(category, (counts.get(category) ?? 0) + 1);
    }
  }

  return counts;
}

// ─── Count approved images from manifest ───────────────────────────────────

function countApprovedImages(manifest: ImageEntry[]): Map<string, number> {
  const counts = new Map<string, number>();
  for (const entry of manifest) {
    counts.set(entry.category, (counts.get(entry.category) ?? 0) + 1);
  }
  return counts;
}

// ─── Read cost from reports ────────────────────────────────────────────────

function readTotalCost(reportsDir: string): number {
  if (!fs.existsSync(reportsDir)) return 0;

  let totalCost = 0;
  const files = fs.readdirSync(reportsDir).filter((f) => f.endsWith('.json'));

  for (const file of files) {
    try {
      const content = fs.readFileSync(path.join(reportsDir, file), 'utf-8');
      const report = JSON.parse(content);
      if (typeof report.estimatedCost === 'number') {
        totalCost += report.estimatedCost;
      }
    } catch {
      // Skip unreadable reports
    }
  }

  return totalCost;
}

// ─── Format percentage with bar ────────────────────────────────────────────

function formatBar(value: number, total: number, width: number = 20): string {
  if (total === 0) return '[' + ' '.repeat(width) + '] 0%';
  const pct = Math.round((value / total) * 100);
  const filled = Math.round((value / total) * width);
  const bar = '#'.repeat(filled) + '-'.repeat(width - filled);
  return `[${bar}] ${pct}%`;
}

// ─── Main ──────────────────────────────────────────────────────────────────

function main(): void {
  const stagingBase = path.resolve(process.cwd(), 'staging/images');
  const reportsDir = path.resolve(process.cwd(), 'scripts/reports');

  // Read manifest
  let manifest: ImageEntry[] = [];
  try {
    manifest = readManifest();
  } catch {
    // Manifest may not exist yet
  }

  // Count images
  const stagedCounts = countStagedImages(stagingBase);
  const approvedCounts = countApprovedImages(manifest);
  const totalCost = readTotalCost(reportsDir);

  // Header
  console.log('\n=== Image System Status ===\n');

  // Summary counts
  const totalStaged = Array.from(stagedCounts.values()).reduce((a, b) => a + b, 0);
  const totalApproved = manifest.length;
  const totalNeeded = ALL_PROMPTS.length;
  const totalPending = totalNeeded - totalApproved - totalStaged;

  console.log(`Total prompts defined: ${totalNeeded}`);
  console.log(`Staged (pending review): ${totalStaged}`);
  console.log(`Approved (in production): ${totalApproved}`);
  console.log(`Not yet generated: ${Math.max(0, totalPending)}`);
  if (totalCost > 0) {
    console.log(`Estimated cost spent: $${totalCost.toFixed(2)}`);
  }
  console.log('');

  // Coverage table
  const header = [
    'Category'.padEnd(24),
    'Staged'.padEnd(8),
    'Approved'.padEnd(10),
    'Total'.padEnd(7),
    'Coverage',
  ].join(' | ');
  console.log(header);
  console.log('-'.repeat(header.length));

  for (const target of COVERAGE_TARGETS) {
    const staged = stagedCounts.get(target.category) ?? 0;
    const approved = approvedCounts.get(target.category) ?? 0;
    const done = staged + approved;
    const bar = formatBar(done, target.total, 15);

    console.log(
      [
        target.label.padEnd(24),
        String(staged).padEnd(8),
        String(approved).padEnd(10),
        String(target.total).padEnd(7),
        bar,
      ].join(' | ')
    );
  }

  // Overall coverage
  const overallDone = totalStaged + totalApproved;
  console.log('-'.repeat(header.length));
  console.log(
    [
      'TOTAL'.padEnd(24),
      String(totalStaged).padEnd(8),
      String(totalApproved).padEnd(10),
      String(totalNeeded).padEnd(7),
      formatBar(overallDone, totalNeeded, 15),
    ].join(' | ')
  );

  console.log('');

  // Helpful hints
  if (totalStaged > 0) {
    console.log('Review staged images: npm run images:preview');
    console.log('Approve all: npm run images:approve -- --all');
  } else if (totalApproved < totalNeeded) {
    console.log('Generate next batch: npm run images:generate -- --dry-run');
  } else {
    console.log('All images generated and approved!');
  }
  console.log('');
}

main();
