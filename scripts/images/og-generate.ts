#!/usr/bin/env tsx
// ─── OG Image Generation CLI ────────────────────────────────────────────────
// Generates branded OG social sharing images (1200x630) for homepage,
// service pages, and city pages by compositing approved hero photos with
// branded SVG text overlays.
//
// Usage:
//   npm run images:og -- --dry-run                    # List all OG targets
//   npm run images:og -- --dry-run --category service  # List only service OG targets
//   npm run images:og -- --category city               # Generate only city OG images
//   npm run images:og -- --id homepage                 # Generate a single OG image

import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { createOGImage } from './lib/og-compositor';
import { readManifest, addToManifest } from './lib/manifest';
import type { ImageEntry } from './lib/types';

// ─── Data Layer Imports ─────────────────────────────────────────────────────
// tsx resolves @/* paths from tsconfig.json

import { services } from '@/data/services';
import { cities } from '@/data/cities';

// ─── Types ──────────────────────────────────────────────────────────────────

type OGCategory = 'homepage' | 'service' | 'city';

interface OGTarget {
  /** Unique OG image id (e.g., 'og-homepage', 'og-service-roof-repair') */
  id: string;
  /** Category of this OG target */
  category: OGCategory;
  /** Page type for manifest */
  pageType: 'homepage' | 'service' | 'city';
  /** Page identifier for manifest lookup */
  pageId?: string;
  /** Title text for the OG overlay */
  title: string;
  /** Subtitle text for the OG overlay */
  subtitle: string;
  /** Expected path to the source hero image */
  backgroundSource: string;
  /** Output path for the generated OG image */
  outputPath: string;
  /** Slug used for filename */
  slug: string;
  /** Alt text for the OG image */
  alt: string;
}

// ─── CLI Argument Parsing ───────────────────────────────────────────────────

function parseArgs(): {
  dryRun: boolean;
  category: OGCategory | null;
  id: string | null;
} {
  const args = process.argv.slice(2);
  let dryRun = false;
  let category: OGCategory | null = null;
  let id: string | null = null;

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--dry-run':
        dryRun = true;
        break;
      case '--category':
        category = args[++i] as OGCategory;
        break;
      case '--id':
        id = args[++i];
        break;
    }
  }

  return { dryRun, category, id };
}

// ─── OG Target Builder ─────────────────────────────────────────────────────

function buildOGTargets(): OGTarget[] {
  const heroesDir = path.resolve(process.cwd(), 'public/images/heroes');
  const homepageDir = path.resolve(process.cwd(), 'public/images/homepage');
  const ogDir = path.resolve(process.cwd(), 'public/images/og');
  const targets: OGTarget[] = [];

  // 1. Homepage OG image
  // Look for hero-main image in heroes or homepage directories, also check approved images
  const homepageHeroPath = findHeroImage('hero-main', [homepageDir, heroesDir]);
  targets.push({
    id: 'og-homepage',
    category: 'homepage',
    pageType: 'homepage',
    title: 'Newark Quality Roofing',
    subtitle: 'Expert Roofing Services in Essex County NJ',
    backgroundSource: homepageHeroPath,
    outputPath: path.join(ogDir, 'homepage.webp'),
    slug: 'homepage',
    alt: 'Newark Quality Roofing - Expert roofing services in Essex County NJ',
  });

  // 2. Service page OG images (65)
  for (const service of services) {
    const heroPath = findHeroImage(`service-${service.id}`, [heroesDir]);
    targets.push({
      id: `og-service-${service.id}`,
      category: 'service',
      pageType: 'service',
      pageId: service.id,
      title: service.name,
      subtitle: 'Professional Roofing Services',
      backgroundSource: heroPath,
      outputPath: path.join(ogDir, `${service.slug}.webp`),
      slug: service.slug,
      alt: `${service.name} - Professional roofing services in Newark and Essex County NJ`,
    });
  }

  // 3. City page OG images (21)
  for (const city of cities) {
    const heroPath = findHeroImage(`city-${city.id}`, [heroesDir]);
    targets.push({
      id: `og-city-${city.id}`,
      category: 'city',
      pageType: 'city',
      pageId: city.id,
      title: `${city.name} Roofing Services`,
      subtitle: 'Licensed NJ Roofing Contractor',
      backgroundSource: heroPath,
      outputPath: path.join(ogDir, `${city.slug}.webp`),
      slug: city.slug,
      alt: `${city.name} roofing services by licensed NJ roofing contractor`,
    });
  }

  return targets;
}

/**
 * Find the approved hero image across possible directories.
 * Checks for .webp and common image extensions.
 */
function findHeroImage(filenameBase: string, searchDirs: string[]): string {
  const extensions = ['.webp', '.png', '.jpg', '.jpeg'];

  for (const dir of searchDirs) {
    for (const ext of extensions) {
      const fullPath = path.join(dir, `${filenameBase}${ext}`);
      if (fs.existsSync(fullPath)) {
        return fullPath;
      }
    }
  }

  // Return the expected path (first dir, .webp) even if not found yet
  return path.join(searchDirs[0], `${filenameBase}.webp`);
}

// ─── Filter targets ─────────────────────────────────────────────────────────

function filterTargets(
  targets: OGTarget[],
  category: OGCategory | null,
  id: string | null
): OGTarget[] {
  if (id) {
    const match = targets.find((t) => t.id === id || t.slug === id);
    if (!match) {
      console.error(`Error: No OG target found with id/slug "${id}"`);
      process.exit(1);
    }
    return [match];
  }

  if (category) {
    const filtered = targets.filter((t) => t.category === category);
    if (filtered.length === 0) {
      console.error(`Error: No OG targets found for category "${category}"`);
      console.error('Available categories: homepage, service, city');
      process.exit(1);
    }
    return filtered;
  }

  return targets;
}

// ─── Dry Run Mode ───────────────────────────────────────────────────────────

function executeDryRun(targets: OGTarget[]): void {
  console.log('\n=== DRY RUN: OG Image Generation Plan ===\n');

  // Summary counts
  const byCategory = {
    homepage: targets.filter((t) => t.category === 'homepage').length,
    service: targets.filter((t) => t.category === 'service').length,
    city: targets.filter((t) => t.category === 'city').length,
  };

  console.log(`Total targets: ${targets.length}`);
  console.log(`  Homepage: ${byCategory.homepage}`);
  console.log(`  Service:  ${byCategory.service}`);
  console.log(`  City:     ${byCategory.city}`);
  console.log('');

  // Table header
  const header = [
    'ID'.padEnd(35),
    'Category'.padEnd(10),
    'Title'.padEnd(40),
    'Source'.padEnd(12),
    'Output Path',
  ].join(' | ');
  console.log(header);
  console.log('-'.repeat(header.length));

  let missingBackgrounds = 0;

  for (const target of targets) {
    const sourceExists = fs.existsSync(target.backgroundSource);
    const sourceStatus = sourceExists ? 'FOUND' : 'MISSING';
    if (!sourceExists) missingBackgrounds++;

    const shortTitle =
      target.title.length > 38
        ? target.title.slice(0, 37) + '\u2026'
        : target.title;

    console.log(
      [
        target.id.padEnd(35),
        target.category.padEnd(10),
        shortTitle.padEnd(40),
        sourceStatus.padEnd(12),
        path.relative(process.cwd(), target.outputPath),
      ].join(' | ')
    );
  }

  console.log('');

  if (missingBackgrounds > 0) {
    console.log(
      `WARNING: ${missingBackgrounds} background images not found (heroes not yet approved).`
    );
    console.log(
      'Run images:generate and images:approve first, then re-run images:og.'
    );
  } else {
    console.log('All background images found. Ready to generate.');
  }

  console.log('\nNo API cost -- OG images are composited locally via sharp.');
  console.log('To generate, run without --dry-run flag.');
}

// ─── Generation Mode ────────────────────────────────────────────────────────

async function executeGeneration(targets: OGTarget[]): Promise<void> {
  // Ensure output directory exists
  const ogDir = path.resolve(process.cwd(), 'public/images/og');
  fs.mkdirSync(ogDir, { recursive: true });

  let generated = 0;
  let skipped = 0;
  const skippedTargets: string[] = [];
  const newManifestEntries: ImageEntry[] = [];

  console.log(`\n=== Generating ${targets.length} OG images ===\n`);

  for (const target of targets) {
    // Check if background image exists
    if (!fs.existsSync(target.backgroundSource)) {
      skipped++;
      skippedTargets.push(target.id);
      console.log(`  SKIP  ${target.id} (background not found: ${path.basename(target.backgroundSource)})`);
      continue;
    }

    try {
      await createOGImage({
        backgroundImage: target.backgroundSource,
        title: target.title,
        subtitle: target.subtitle,
        outputPath: target.outputPath,
      });

      generated++;
      console.log(`  OK    ${target.id} -> ${path.relative(process.cwd(), target.outputPath)}`);

      // Build manifest entry
      newManifestEntries.push({
        id: target.id,
        filename: path.basename(target.outputPath),
        path: `/images/og/${path.basename(target.outputPath)}`,
        alt: target.alt,
        width: 1200,
        height: 630,
        category: 'og',
        pageType: target.pageType,
        pageId: target.pageId,
        prompt: `OG composite: ${target.title}`,
        generatedAt: new Date().toISOString(),
      });
    } catch (error) {
      console.error(
        `  FAIL  ${target.id}: ${error instanceof Error ? error.message : String(error)}`
      );
      skipped++;
      skippedTargets.push(target.id);
    }
  }

  // Update manifest with new OG entries
  if (newManifestEntries.length > 0) {
    addToManifest(newManifestEntries);
    console.log(`\nManifest updated with ${newManifestEntries.length} OG entries.`);
  }

  // Print summary
  console.log('\n=== OG Generation Complete ===');
  console.log(`Generated: ${generated}`);
  console.log(`Skipped:   ${skipped} (missing backgrounds)`);

  if (skippedTargets.length > 0 && skippedTargets.length <= 10) {
    console.log('\nSkipped targets:');
    for (const id of skippedTargets) {
      console.log(`  - ${id}`);
    }
  } else if (skippedTargets.length > 10) {
    console.log(`\nSkipped targets: ${skippedTargets.length} (run --dry-run to see full list)`);
  }

  if (generated > 0) {
    console.log(`\nOG images written to: public/images/og/`);
  }
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const { dryRun, category, id } = parseArgs();

  // Build all OG targets
  const allTargets = buildOGTargets();
  const targets = filterTargets(allTargets, category, id);

  console.log(`OG targets: ${targets.length}`);
  if (category) console.log(`Category filter: ${category}`);
  if (id) console.log(`ID filter: ${id}`);

  if (dryRun) {
    executeDryRun(targets);
  } else {
    await executeGeneration(targets);
  }
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
