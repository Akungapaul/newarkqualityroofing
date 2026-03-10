#!/usr/bin/env tsx
// ─── Image Generation CLI ───────────────────────────────────────────────────
// Main CLI for generating AI images via OpenAI gpt-image-1.
// Usage:
//   npm run images:generate -- --dry-run                     # List all images without API calls
//   npm run images:generate -- --dry-run --category homepage  # List only homepage images
//   npm run images:generate -- --category service-hero        # Generate only service hero images
//   npm run images:generate -- --id hero-main                 # Generate a single image by id
//   npm run images:generate -- --force                        # Regenerate even if staged image exists

import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { ALL_PROMPTS, getPromptsByCategory, getPromptById, buildPrompt } from './lib/prompts';
import { generateWithConcurrency } from './lib/openai-client';
import { estimateCost, formatCostEstimate, generateReport, writeReport } from './lib/cost-tracker';
import { generatePreviewHTML } from './preview';
import type { PromptDefinition, ImageCategory } from './lib/types';

// ─── Constants ─────────────────────────────────────────────────────────────

/** Category to staging subdirectory mapping (exported for reuse by approve/status) */
export function getCategorySubdir(category: ImageCategory): string {
  switch (category) {
    case 'homepage':
      return 'homepage';
    case 'service-hero':
    case 'city-hero':
      return 'heroes';
    case 'gallery-before':
    case 'gallery-after':
      return 'gallery';
    case 'content-crew':
    case 'content-materials':
    case 'content-consultation':
    case 'content-seasonal':
      return 'content';
    case 'og':
      return 'og';
    default:
      return 'other';
  }
}

/** Category to public/images subdirectory mapping */
export function getPublicSubdir(category: ImageCategory): string {
  switch (category) {
    case 'homepage':
      return 'homepage';
    case 'service-hero':
    case 'city-hero':
      return 'heroes';
    case 'gallery-before':
    case 'gallery-after':
      return 'gallery';
    case 'content-crew':
    case 'content-materials':
    case 'content-consultation':
    case 'content-seasonal':
      return 'content';
    case 'og':
      return 'og';
    default:
      return 'other';
  }
}

// ─── CLI Argument Parsing ──────────────────────────────────────────────────

function parseArgs(): {
  dryRun: boolean;
  category: ImageCategory | null;
  id: string | null;
  concurrency: number;
  delay: number;
  force: boolean;
} {
  const args = process.argv.slice(2);
  let dryRun = false;
  let category: ImageCategory | null = null;
  let id: string | null = null;
  let concurrency = 3;
  let delay = 1000;
  let force = false;

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--dry-run':
        dryRun = true;
        break;
      case '--category':
        category = args[++i] as ImageCategory;
        break;
      case '--id':
        id = args[++i];
        break;
      case '--concurrency':
        concurrency = parseInt(args[++i], 10);
        break;
      case '--delay':
        delay = parseInt(args[++i], 10);
        break;
      case '--force':
        force = true;
        break;
    }
  }

  return { dryRun, category, id, concurrency, delay, force };
}

// ─── Filter prompts based on CLI args ──────────────────────────────────────

function filterPrompts(
  category: ImageCategory | null,
  id: string | null
): PromptDefinition[] {
  if (id) {
    const prompt = getPromptById(id);
    if (!prompt) {
      console.error(`Error: No prompt found with id "${id}"`);
      process.exit(1);
    }
    return [prompt];
  }

  if (category) {
    const prompts = getPromptsByCategory(category);
    if (prompts.length === 0) {
      console.error(`Error: No prompts found for category "${category}"`);
      console.error(
        `Available categories: homepage, service-hero, city-hero, gallery-before, gallery-after, content-crew, content-materials, content-consultation, content-seasonal, og`
      );
      process.exit(1);
    }
    return prompts;
  }

  return ALL_PROMPTS;
}

// ─── Check which images are already staged ─────────────────────────────────

function filterAlreadyStaged(
  prompts: PromptDefinition[],
  stagingBase: string,
  force: boolean
): { toGenerate: PromptDefinition[]; skipped: number } {
  if (force) {
    return { toGenerate: prompts, skipped: 0 };
  }

  let skipped = 0;
  const toGenerate: PromptDefinition[] = [];

  for (const p of prompts) {
    const subdir = getCategorySubdir(p.category);
    const stagingPath = path.join(stagingBase, subdir, `${p.filename}.png`);
    if (fs.existsSync(stagingPath)) {
      skipped++;
    } else {
      toGenerate.push(p);
    }
  }

  return { toGenerate, skipped };
}

// ─── Dry Run Mode ──────────────────────────────────────────────────────────

function executeDryRun(prompts: PromptDefinition[], stagingBase: string): void {
  console.log('\n=== DRY RUN: Image Generation Plan ===\n');

  // Formatted table header
  const header = [
    'ID'.padEnd(40),
    'Category'.padEnd(20),
    'Dimensions'.padEnd(14),
    'Staging Path',
  ].join(' | ');
  console.log(header);
  console.log('-'.repeat(header.length));

  for (const p of prompts) {
    const subdir = getCategorySubdir(p.category);
    const stagingPath = path.join('staging/images', subdir, `${p.filename}.png`);
    const dims = `${p.targetWidth}x${p.targetHeight}`;
    const exists = fs.existsSync(path.join(stagingBase, subdir, `${p.filename}.png`));
    const marker = exists ? ' [STAGED]' : '';

    console.log(
      [
        p.id.padEnd(40),
        p.category.padEnd(20),
        dims.padEnd(14),
        stagingPath + marker,
      ].join(' | ')
    );
  }

  console.log('');
  console.log(formatCostEstimate(prompts));
  console.log('');

  const staged = prompts.filter((p) => {
    const subdir = getCategorySubdir(p.category);
    return fs.existsSync(path.join(stagingBase, subdir, `${p.filename}.png`));
  }).length;

  if (staged > 0) {
    console.log(`Already staged: ${staged} images (use --force to regenerate)`);
  }
  console.log(`Would generate: ${prompts.length - staged} images`);
  console.log('\nTo generate, run without --dry-run flag.');
}

// ─── Generation Mode ───────────────────────────────────────────────────────

async function executeGeneration(
  prompts: PromptDefinition[],
  stagingBase: string,
  concurrency: number,
  delay: number,
  force: boolean
): Promise<void> {
  // Validate API key
  if (!process.env.OPENAI_API_KEY) {
    console.error('Error: OPENAI_API_KEY not set in environment.');
    console.error('Add it to your .env file:');
    console.error('  OPENAI_API_KEY=sk-...');
    process.exit(1);
  }

  // Filter already-staged images
  const { toGenerate, skipped } = filterAlreadyStaged(prompts, stagingBase, force);

  if (toGenerate.length === 0) {
    console.log('\nAll images already staged. Use --force to regenerate.');
    return;
  }

  console.log(`\n=== Generating ${toGenerate.length} images ===`);
  if (skipped > 0) {
    console.log(`Skipping ${skipped} already-staged images (use --force to regenerate)`);
  }
  console.log(`Concurrency: ${concurrency} | Delay: ${delay}ms`);
  console.log(`Estimated cost: $${estimateCost(toGenerate).toFixed(2)}`);
  console.log('');

  // Create staging directory structure
  const subdirs = ['heroes', 'gallery', 'content', 'homepage', 'og'];
  for (const subdir of subdirs) {
    fs.mkdirSync(path.join(stagingBase, subdir), { recursive: true });
  }

  // Group prompts by staging subdirectory and generate per-group
  // (generateWithConcurrency writes flat to the given dir, so we call per-subdir)
  const startTime = Date.now();
  const bySubdir = new Map<string, PromptDefinition[]>();
  for (const p of toGenerate) {
    const subdir = getCategorySubdir(p.category);
    const existing = bySubdir.get(subdir) ?? [];
    existing.push(p);
    bySubdir.set(subdir, existing);
  }

  const allResults = [];
  for (const [subdir, groupPrompts] of bySubdir.entries()) {
    const groupStagingDir = path.join(stagingBase, subdir);
    console.log(`\n--- Generating ${groupPrompts.length} ${subdir} images ---`);
    const results = await generateWithConcurrency(
      groupPrompts,
      buildPrompt,
      groupStagingDir,
      concurrency,
      delay
    );
    allResults.push(...results);
  }

  // Add skipped results for reporting
  for (let i = 0; i < skipped; i++) {
    allResults.push({
      id: `skipped-${i}`,
      status: 'skipped' as const,
      costEstimate: 0,
      durationMs: 0,
    });
  }

  // Generate and write report
  const report = generateReport(allResults, startTime);
  const reportPath = writeReport(report);

  // Auto-generate preview HTML
  try {
    const previewPath = path.join(path.dirname(stagingBase), 'preview.html');
    const html = generatePreviewHTML(stagingBase);
    fs.writeFileSync(previewPath, html);
    console.log(`\nPreview page: ${previewPath}`);
  } catch (error) {
    console.warn(
      `Warning: Could not generate preview (${error instanceof Error ? error.message : String(error)})`
    );
  }

  // Print summary
  const succeeded = allResults.filter((r) => r.status === 'success').length;
  const failed = allResults.filter((r) => r.status === 'failed').length;

  console.log('\n=== Generation Complete ===');
  console.log(`Succeeded: ${succeeded}`);
  console.log(`Failed: ${failed}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Estimated cost: $${report.estimatedCost.toFixed(2)}`);
  console.log(`Duration: ${(report.durationMs / 1000).toFixed(1)}s`);
  console.log(`Report: ${reportPath}`);

  if (failed > 0) {
    console.log('\nFailed images:');
    for (const r of allResults.filter((r) => r.status === 'failed')) {
      console.log(`  - ${r.id}: ${r.error}`);
    }
  }
}

// ─── Main ──────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const { dryRun, category, id, concurrency, delay, force } = parseArgs();
  const stagingBase = path.resolve(process.cwd(), 'staging/images');

  // Filter prompts
  const prompts = filterPrompts(category, id);

  console.log(`Target: ${prompts.length} images`);
  if (category) console.log(`Category filter: ${category}`);
  if (id) console.log(`ID filter: ${id}`);

  if (dryRun) {
    executeDryRun(prompts, stagingBase);
  } else {
    await executeGeneration(prompts, stagingBase, concurrency, delay, force);
  }
}

// Only run CLI when executed directly (not imported)
if (process.argv[1]?.includes('generate')) {
  main().catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}
