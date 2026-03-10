#!/usr/bin/env tsx
// ─── Image Approve CLI ──────────────────────────────────────────────────────
// Moves staged images to public/images/ after sharp optimization and updates manifest.
// Usage:
//   npm run images:approve -- --all                      # Approve all staged images
//   npm run images:approve -- --category service-hero    # Approve only service hero images
//   npm run images:approve -- --id hero-main             # Approve a single image by id
//   npm run images:approve -- --name "city-*"            # Approve images matching filename pattern

import fs from 'fs';
import path from 'path';
import { ALL_PROMPTS } from './lib/prompts';
import { processImage } from './lib/sharp-pipeline';
import { addToManifest } from './lib/manifest';
import { getCategorySubdir, getPublicSubdir } from './generate';
import type { PromptDefinition, ImageEntry, ImageCategory } from './lib/types';

// ─── CLI Argument Parsing ──────────────────────────────────────────────────

function parseArgs(): {
  all: boolean;
  category: ImageCategory | null;
  id: string | null;
  name: string | null;
} {
  const args = process.argv.slice(2);
  let all = false;
  let category: ImageCategory | null = null;
  let id: string | null = null;
  let name: string | null = null;

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--all':
        all = true;
        break;
      case '--category':
        category = args[++i] as ImageCategory;
        break;
      case '--id':
        id = args[++i];
        break;
      case '--name':
        name = args[++i];
        break;
    }
  }

  return { all, category, id, name };
}

// ─── Find staged images ───────────────────────────────────────────────────

interface StagedFile {
  filepath: string;
  filename: string; // without extension
  prompt: PromptDefinition | undefined;
}

function findStagedImages(stagingBase: string): StagedFile[] {
  const staged: StagedFile[] = [];
  const imageExtensions = ['.png', '.webp', '.jpg', '.jpeg'];

  if (!fs.existsSync(stagingBase)) {
    return staged;
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
      const filepath = path.join(subdirPath, file);
      const prompt = ALL_PROMPTS.find((p) => p.filename === basename);

      staged.push({ filepath, filename: basename, prompt });
    }
  }

  return staged;
}

// ─── Filter staged images by CLI args ──────────────────────────────────────

function filterStaged(
  staged: StagedFile[],
  opts: { all: boolean; category: ImageCategory | null; id: string | null; name: string | null }
): StagedFile[] {
  if (opts.all) return staged;

  if (opts.id) {
    return staged.filter((s) => s.prompt?.id === opts.id || s.filename === opts.id);
  }

  if (opts.category) {
    return staged.filter((s) => s.prompt?.category === opts.category);
  }

  if (opts.name) {
    // Simple glob: convert * to regex
    const pattern = new RegExp(
      '^' + opts.name.replace(/\*/g, '.*').replace(/\?/g, '.') + '$'
    );
    return staged.filter((s) => pattern.test(s.filename));
  }

  return [];
}

// ─── Simple glob match ─────────────────────────────────────────────────────

function globMatch(pattern: string, str: string): boolean {
  const regex = new RegExp(
    '^' + pattern.replace(/\*/g, '.*').replace(/\?/g, '.') + '$'
  );
  return regex.test(str);
}

// ─── Approve flow ──────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const opts = parseArgs();
  const stagingBase = path.resolve(process.cwd(), 'staging/images');
  const publicBase = path.resolve(process.cwd(), 'public/images');

  // Require at least one filter
  if (!opts.all && !opts.category && !opts.id && !opts.name) {
    console.error('Error: At least one filter required to avoid accidental approve-all.');
    console.error('Usage:');
    console.error('  --all                 Approve all staged images');
    console.error('  --category <cat>      Approve images in a category');
    console.error('  --id <image-id>       Approve a single image by id');
    console.error('  --name <pattern>      Approve images matching filename pattern');
    process.exit(1);
  }

  // Find all staged images
  const allStaged = findStagedImages(stagingBase);
  if (allStaged.length === 0) {
    console.log('No staged images found. Generate images first:');
    console.log('  npm run images:generate -- --category homepage');
    return;
  }

  // Filter by CLI args
  const toApprove = filterStaged(allStaged, opts);
  if (toApprove.length === 0) {
    console.log('No staged images match the given filter.');
    if (opts.category) {
      console.log(`Category: ${opts.category}`);
    }
    if (opts.id) {
      console.log(`ID: ${opts.id}`);
    }
    if (opts.name) {
      console.log(`Name pattern: ${opts.name}`);
    }
    return;
  }

  console.log(`\n=== Approving ${toApprove.length} images ===\n`);

  const newEntries: ImageEntry[] = [];
  let approved = 0;
  let failed = 0;

  for (const staged of toApprove) {
    const prompt = staged.prompt;
    if (!prompt) {
      console.warn(`Skipping ${staged.filename}: no matching prompt definition`);
      failed++;
      continue;
    }

    // Determine target path
    const subdir = getPublicSubdir(prompt.category);
    const targetDir = path.join(publicBase, subdir);
    const targetPath = path.join(targetDir, `${prompt.filename}.webp`);

    try {
      // Create target directory
      fs.mkdirSync(targetDir, { recursive: true });

      // Process through sharp pipeline: resize + WebP
      await processImage(
        staged.filepath,
        targetPath,
        prompt.targetWidth,
        prompt.targetHeight
      );

      // Build ImageEntry for manifest
      const entry: ImageEntry = {
        id: prompt.id,
        filename: `${prompt.filename}.webp`,
        path: `/images/${subdir}/${prompt.filename}.webp`,
        alt: prompt.alt,
        width: prompt.targetWidth,
        height: prompt.targetHeight,
        category: prompt.category,
        pageType: prompt.pageType,
        prompt: prompt.sceneDescription,
        generatedAt: new Date().toISOString(),
      };

      // Add pageId if present
      if (prompt.pageId) {
        entry.pageId = prompt.pageId;
      }

      newEntries.push(entry);
      approved++;
      console.log(`[OK] ${prompt.id} -> ${targetPath}`);
    } catch (error) {
      failed++;
      console.error(
        `[FAIL] ${prompt.id}: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }

  // Update manifest with new entries
  if (newEntries.length > 0) {
    addToManifest(newEntries);
  }

  // Delete approved images from staging
  for (const staged of toApprove) {
    if (staged.prompt && newEntries.some((e) => e.id === staged.prompt?.id)) {
      try {
        fs.unlinkSync(staged.filepath);
      } catch {
        // Ignore cleanup errors
      }
    }
  }

  // If all staged images were approved, clean up preview.html
  const remainingStaged = findStagedImages(stagingBase);
  if (remainingStaged.length === 0) {
    const previewPath = path.resolve(process.cwd(), 'staging/preview.html');
    if (fs.existsSync(previewPath)) {
      fs.unlinkSync(previewPath);
      console.log('\nAll staged images approved. Removed staging/preview.html.');
    }
  }

  // Print summary
  console.log('\n=== Approve Complete ===');
  console.log(`Approved: ${approved}`);
  console.log(`Failed: ${failed}`);
  if (newEntries.length > 0) {
    console.log(`Manifest updated with ${newEntries.length} entries`);
  }
  console.log(`Remaining staged: ${remainingStaged.length}`);
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
