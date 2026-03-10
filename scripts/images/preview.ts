#!/usr/bin/env tsx
// ─── Image Preview HTML Generator ──────────────────────────────────────────
// Generates a static HTML page for visual review of staged images.
// Usage:
//   npm run images:preview         # Generate staging/preview.html
//   (also called automatically after images:generate)

import fs from 'fs';
import path from 'path';
import { ALL_PROMPTS } from './lib/prompts';
import type { PromptDefinition } from './lib/types';

// ─── Types ─────────────────────────────────────────────────────────────────

interface StagedImage {
  filepath: string;
  relativePath: string;
  filename: string;
  prompt: PromptDefinition | undefined;
}

// ─── Scan staged images ────────────────────────────────────────────────────

function scanStagedImages(stagingBase: string): StagedImage[] {
  const images: StagedImage[] = [];
  const imageExtensions = ['.png', '.webp', '.jpg', '.jpeg'];

  if (!fs.existsSync(stagingBase)) {
    return images;
  }

  // Scan subdirectories
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
      // Relative path from staging/ parent dir (where preview.html lives)
      const relativePath = `images/${subdir.name}/${file}`;

      // Match to prompt definition by filename
      const prompt = ALL_PROMPTS.find((p) => p.filename === basename);

      images.push({ filepath, relativePath, filename: file, prompt });
    }
  }

  // Sort by category then id for consistent display
  images.sort((a, b) => {
    const catA = a.prompt?.category ?? 'zzz';
    const catB = b.prompt?.category ?? 'zzz';
    const catCmp = catA.localeCompare(catB);
    return catCmp !== 0 ? catCmp : a.filename.localeCompare(b.filename);
  });

  return images;
}

// ─── Get unique categories from images ─────────────────────────────────────

function getCategories(images: StagedImage[]): string[] {
  const cats = new Set<string>();
  for (const img of images) {
    cats.add(img.prompt?.category ?? 'unknown');
  }
  return Array.from(cats).sort();
}

// ─── Category badge color ──────────────────────────────────────────────────

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    homepage: '#C17F4E',
    'service-hero': '#1A3A2A',
    'city-hero': '#2E5E3E',
    'gallery-before': '#8B4513',
    'gallery-after': '#2E8B57',
    'content-crew': '#4A6B8A',
    'content-materials': '#6B4A8A',
    'content-consultation': '#8A6B4A',
    'content-seasonal': '#4A8A6B',
    og: '#555555',
  };
  return colors[category] ?? '#888888';
}

// ─── HTML escaping utility ─────────────────────────────────────────────────

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ─── Generate HTML ─────────────────────────────────────────────────────────

export function generatePreviewHTML(stagingBase: string): string {
  const images = scanStagedImages(stagingBase);
  const categories = getCategories(images);
  const timestamp = new Date().toISOString().replace('T', ' ').slice(0, 19);

  if (images.length === 0) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Preview - No Images</title>
  <style>
    body {
      font-family: 'Cormorant Garamond', Georgia, serif;
      background: #F5F0E8;
      color: #1A3A2A;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
    }
    .empty {
      text-align: center;
      padding: 3rem;
    }
    h1 {
      font-family: 'Cormorant', Georgia, serif;
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    p { font-size: 1.2rem; opacity: 0.7; }
    code {
      background: #1A3A2A;
      color: #F5F0E8;
      padding: 0.2em 0.5em;
      border-radius: 4px;
      font-size: 0.9rem;
    }
  </style>
</head>
<body>
  <div class="empty">
    <h1>No Staged Images</h1>
    <p>Generate images first with:</p>
    <p><code>npm run images:generate -- --category homepage</code></p>
    <p>Generated: ${timestamp}</p>
  </div>
</body>
</html>`;
  }

  const imageCards = images
    .map((img) => {
      const id = img.prompt?.id ?? img.filename;
      const category = img.prompt?.category ?? 'unknown';
      const dims = img.prompt
        ? `${img.prompt.targetWidth}x${img.prompt.targetHeight}`
        : 'unknown';
      const alt = img.prompt?.alt ?? img.filename;
      const scene = img.prompt?.sceneDescription ?? 'No prompt found';
      const badgeColor = getCategoryColor(category);

      return `      <div class="card" data-category="${category}">
        <div class="card-image">
          <img src="${img.relativePath}" alt="${escapeHtml(alt)}" loading="lazy" width="400" />
        </div>
        <div class="card-info">
          <div class="card-header">
            <span class="card-id">${escapeHtml(id)}</span>
            <span class="badge" style="background:${badgeColor}">${escapeHtml(category)}</span>
          </div>
          <div class="card-dims">${dims}</div>
          <div class="card-alt">${escapeHtml(alt)}</div>
          <details class="card-prompt">
            <summary>View prompt</summary>
            <p>${escapeHtml(scene)}</p>
          </details>
        </div>
      </div>`;
    })
    .join('\n');

  const filterButtons = categories
    .map(
      (cat) =>
        `      <button class="filter-btn" data-filter="${cat}" style="--accent:${getCategoryColor(cat)}">${cat} (${images.filter((i) => (i.prompt?.category ?? 'unknown') === cat).length})</button>`
    )
    .join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Newark Quality Roofing - Image Preview</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: 'Cormorant Garamond', Georgia, serif;
      background: #F5F0E8;
      color: #1A3A2A;
      padding: 2rem;
      line-height: 1.5;
    }

    .header {
      text-align: center;
      margin-bottom: 2rem;
      padding-bottom: 1.5rem;
      border-bottom: 2px solid #C17F4E;
    }

    .header h1 {
      font-family: 'Cormorant', Georgia, serif;
      font-size: 2.4rem;
      font-weight: 600;
      letter-spacing: 0.02em;
    }

    .header .meta {
      margin-top: 0.5rem;
      font-size: 1rem;
      opacity: 0.7;
    }

    .filters {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      justify-content: center;
      margin-bottom: 2rem;
    }

    .filter-btn {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 0.9rem;
      padding: 0.4rem 1rem;
      border: 2px solid var(--accent, #1A3A2A);
      background: transparent;
      color: var(--accent, #1A3A2A);
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .filter-btn:hover,
    .filter-btn.active {
      background: var(--accent, #1A3A2A);
      color: #F5F0E8;
    }

    .filter-btn.show-all {
      --accent: #1A3A2A;
      font-weight: 600;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
      gap: 1.5rem;
    }

    .card {
      background: #fff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(26, 58, 42, 0.1);
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }

    .card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 16px rgba(26, 58, 42, 0.15);
    }

    .card.hidden {
      display: none;
    }

    .card-image {
      background: #e8e3da;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .card-image img {
      width: 100%;
      height: auto;
      display: block;
    }

    .card-info {
      padding: 1rem 1.2rem;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.4rem;
    }

    .card-id {
      font-family: 'Cormorant', Georgia, serif;
      font-weight: 700;
      font-size: 1.05rem;
    }

    .badge {
      font-size: 0.75rem;
      padding: 0.15rem 0.6rem;
      border-radius: 3px;
      color: #F5F0E8;
      font-family: system-ui, sans-serif;
      letter-spacing: 0.03em;
    }

    .card-dims {
      font-family: system-ui, sans-serif;
      font-size: 0.8rem;
      color: #888;
      margin-bottom: 0.4rem;
    }

    .card-alt {
      font-size: 0.95rem;
      margin-bottom: 0.5rem;
      font-style: italic;
      opacity: 0.85;
    }

    .card-prompt summary {
      font-size: 0.85rem;
      cursor: pointer;
      color: #C17F4E;
      font-weight: 600;
    }

    .card-prompt p {
      font-size: 0.85rem;
      margin-top: 0.4rem;
      padding: 0.6rem;
      background: #f9f6f0;
      border-radius: 4px;
      line-height: 1.45;
    }

    @media (max-width: 500px) {
      .grid { grid-template-columns: 1fr; }
      body { padding: 1rem; }
    }
  </style>
</head>
<body>

  <div class="header">
    <h1>Image Preview</h1>
    <div class="meta">${images.length} images | Generated: ${timestamp}</div>
  </div>

  <div class="filters">
    <button class="filter-btn show-all active" data-filter="all">All (${images.length})</button>
${filterButtons}
  </div>

  <div class="grid">
${imageCards}
  </div>

  <script>
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        document.querySelectorAll('.card').forEach(card => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  </script>

</body>
</html>`;
}

// ─── CLI Entry Point ───────────────────────────────────────────────────────

async function main(): Promise<void> {
  const stagingBase = path.resolve(process.cwd(), 'staging/images');
  const previewPath = path.resolve(process.cwd(), 'staging/preview.html');

  // Ensure staging directory exists (for empty-state HTML)
  fs.mkdirSync(stagingBase, { recursive: true });

  const html = generatePreviewHTML(stagingBase);

  fs.mkdirSync(path.dirname(previewPath), { recursive: true });
  fs.writeFileSync(previewPath, html);
  console.log(`Preview generated: ${previewPath}`);

  // Count staged images
  const imageCount = scanStagedImages(stagingBase).length;
  if (imageCount === 0) {
    console.log('No staged images found. Generate images first:');
    console.log('  npm run images:generate -- --category homepage');
  } else {
    console.log(`${imageCount} images included in preview.`);
  }
}

// Only run CLI when executed directly (not imported)
if (process.argv[1]?.includes('preview')) {
  main().catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}
