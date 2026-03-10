# Phase 10: Add Image Creation System - Research

**Researched:** 2026-03-10
**Domain:** AI image generation (OpenAI gpt-image-1), image processing (sharp), CLI tooling, OG image compositing
**Confidence:** HIGH

## Summary

This phase replaces all 15 existing Unsplash stock photos with AI-generated images using OpenAI's gpt-image-1 model, adds 65 service hero images, 21 city hero images, an expanded before/after gallery (6-8 sets), a shared content pool (~20 images), and ~87 OG social sharing composites. The deliverable is a reusable CLI toolset with npm subcommands for generating, reviewing, approving, and auditing images.

The OpenAI gpt-image-1 API returns base64-encoded PNG/WebP/JPEG images up to 1536x1024 (landscape) or 1024x1536 (portrait). Since the required hero dimensions (1920x1080) exceed the API's native max of 1536x1024, images will be generated at 1536x1024 and upscaled via sharp. Sharp handles all post-processing: format conversion to WebP, quality optimization, resizing, and OG image compositing via SVG text overlay.

**Primary recommendation:** Use `openai` npm SDK v6.x with `gpt-image-1` model for photo generation at `medium` quality (best cost/quality balance at ~$0.05/landscape image), pipe through `sharp` for WebP conversion and optimization, composite OG images using sharp's SVG text overlay capability. Build a manifest-driven CLI system with staging/review/approve workflow.

<user_constraints>

## User Constraints (from CONTEXT.md)

### Locked Decisions
- GPT-4o image generation via OpenAI API (gpt-image-1 model)
- Replace ALL 15 existing Unsplash stock photos with AI-generated images
- Remove 3 dead badge files (GAF, BBB, HomeAdvisor -- 0 bytes, no longer referenced)
- OPENAI_API_KEY stored in .env (existing pattern, already gitignored)
- Script generates images into a staging/review folder -- NOT directly to public/images/
- Auto-generate SEO-optimized alt text alongside each image, saved to manifest
- Cost tracking: log number of images generated, estimated API cost per run, save to report file
- Dry-run mode: list all images that would be generated, show prompts, estimated cost, file paths -- without making API calls
- Image scope: ~15 homepage, 65 service heroes, 21 city heroes, 12-16 before/after gallery, ~20 shared content pool, ~87 OG composites
- Image dimensions: Hero 1920x1080 (16:9), Content 1200x900 (4:3), Gallery 1200x800 (3:2), Cards 800x800 (1:1), OG 1200x630
- Photographic style: Warm editorial photography, golden hour lighting, slightly warm tones, shallow DOF, magazine-quality feel
- NJ-specific context: East Coast architecture, deciduous trees, four-season weather, brick/siding homes
- Subtle branding: Forest green uniforms/trucks, NO text/logos/signage in generated images
- Shared style prefix: Every prompt starts with consistent style block
- Reusable CLI with npm subcommands: images:generate, images:approve, images:status, images:audit
- HTML preview page for visual review of staged images
- Pre-optimize with sharp: Compress and convert to WebP before saving to public/images/
- Detailed generation reports saved to scripts/reports/
- Coverage audit: images:audit checks every page that should have an image has one mapped

### Claude's Discretion
- Batch regeneration strategy (by name, by category, or full batch only)
- Pre/post CSS photo treatment tuning (generate cooler for post-treatment, or warm standalone)
- File organization within public/images/ (flat vs. subdirectories)
- Image manifest: committed to git or gitignored
- Prompt definitions: separate data file vs. inline in script
- Rate limiting and concurrency for API calls
- OG image pipeline architecture (same script with subcommand vs. separate script)
- Image-to-page mapping approach (central manifest vs. schema fields)
- Hero image composition rules per page type
- Text in AI-generated images (purely photographic recommended)
- Service hero subject approach (work in progress vs. finished result, per service category)
- Combo page image strategy (reuse service hero, city hero, or no hero image)

### Deferred Ideas (OUT OF SCOPE)
- Comparison page hero images (30 images)
- Article page hero images (252 images)
- Video content generation
- Real project photography replacement (TRST-V2-02)

</user_constraints>

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| openai | ^6.27.0 | OpenAI API client for gpt-image-1 image generation | Official TypeScript SDK, supports images.generate() with b64_json response |
| sharp | ^0.34.5 | Image processing: resize, WebP conversion, SVG text compositing for OG images | Fastest Node.js image processor (4-5x faster than ImageMagick), libvips-based |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| dotenv | ^16.x | Load OPENAI_API_KEY from .env in CLI scripts (not Next.js runtime) | CLI scripts run outside Next.js, need manual .env loading |

### Already Installed (No New Dependencies)
| Library | Purpose |
|---------|---------|
| tsx (^4.21.0) | Run TypeScript CLI scripts (already used for audit/validate scripts) |
| typescript (^5) | Type checking for CLI scripts |
| zod (^3.25.x) | Validate image manifest schema |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| sharp for OG composites | satori + resvg-js | Satori converts HTML/CSS to SVG and is great for complex layouts, but sharp is already needed for photo processing and its SVG composite capability handles branded OG images well enough (text + gradient bar + photo). Avoids adding 2 extra dependencies |
| sharp for OG composites | @vercel/og (ImageResponse) | Built into Next.js for runtime OG generation, but we need pre-generated static OG files (87 images at build time, not per-request). sharp is the right tool for batch static generation |
| dotenv | tsx with --env-file flag | Node 20+ supports --env-file natively, but dotenv is more explicit and portable for script consumers |

**Installation:**
```bash
npm install --save-dev openai sharp dotenv
```

Note: `openai` and `sharp` should be devDependencies since they are only used by CLI scripts, not the Next.js runtime. The `dotenv` package is also dev-only for CLI .env loading.

## Architecture Patterns

### Recommended Project Structure
```
scripts/
  images/
    generate.ts          # Main generation script (npm run images:generate)
    approve.ts           # Approve staged images (npm run images:approve)
    status.ts            # Show generation status (npm run images:status)
    audit.ts             # Coverage audit (npm run images:audit)
    og-generate.ts       # OG image composite generation (npm run images:og)
    preview.ts           # Generate HTML preview page
    lib/
      openai-client.ts   # OpenAI client wrapper with retry/rate-limiting
      sharp-pipeline.ts  # Image processing pipeline (resize, WebP, optimize)
      og-compositor.ts   # OG image compositing with sharp SVG overlay
      manifest.ts        # Manifest read/write/query operations
      prompts.ts         # All prompt definitions organized by category
      cost-tracker.ts    # Cost estimation and reporting
      types.ts           # Shared types for image system
  reports/               # Generated reports (gitignored)
public/
  images/
    heroes/              # Service and city hero images
    gallery/             # Before/after gallery images
    content/             # Shared content pool images
    og/                  # OG social sharing images (1200x630)
    homepage/            # Homepage-specific images
staging/                 # Staged images for review (gitignored)
  images/
    [category]/
      [image-name].webp
  preview.html           # Auto-generated review page
src/
  data/
    image-manifest.ts    # Central image manifest (committed to git)
```

### Pattern 1: Manifest-Driven Image System
**What:** A central `image-manifest.ts` file maps image IDs to file paths, alt text, dimensions, and page associations. All components look up images from the manifest rather than hardcoding paths.
**When to use:** Always -- this is the core architecture pattern for this phase.
**Why:** Enables the audit script to verify coverage, allows batch regeneration by filtering manifest entries, and provides a single source of truth for image-to-page mapping.
**Example:**
```typescript
// src/data/image-manifest.ts
import { z } from 'zod';

const ImageEntrySchema = z.object({
  id: z.string(),
  filename: z.string(),
  path: z.string(),        // relative to public/
  alt: z.string(),
  width: z.number(),
  height: z.number(),
  category: z.enum([
    'homepage', 'service-hero', 'city-hero',
    'gallery-before', 'gallery-after',
    'content-crew', 'content-materials', 'content-consultation', 'content-seasonal',
    'og'
  ]),
  pageType: z.enum(['homepage', 'service', 'city', 'combo', 'shared']).optional(),
  pageId: z.string().optional(),   // service.id, city.id, etc.
  prompt: z.string(),              // generation prompt (for regeneration)
  generatedAt: z.string().optional(),
});

export type ImageEntry = z.infer<typeof ImageEntrySchema>;

export const imageManifest: ImageEntry[] = [
  // Populated by generate script, committed to git
];

// Lookup helpers
export function getServiceHeroImage(serviceId: string): ImageEntry | undefined {
  return imageManifest.find(e => e.category === 'service-hero' && e.pageId === serviceId);
}

export function getCityHeroImage(cityId: string): ImageEntry | undefined {
  return imageManifest.find(e => e.category === 'city-hero' && e.pageId === cityId);
}

export function getOGImage(pageType: string, pageId: string): ImageEntry | undefined {
  return imageManifest.find(e => e.category === 'og' && e.pageType === pageType && e.pageId === pageId);
}
```

### Pattern 2: Staging + Approve Workflow
**What:** Generated images land in `staging/images/` first. An HTML preview page shows all staged images with their prompts. The approve script moves approved images to `public/images/` and updates the manifest.
**When to use:** Every generation run.
**Why:** Prevents bad generations from contaminating the production image set. Gives visual review before committing to git.
**Example flow:**
```
npm run images:generate -- --category service-hero --dry-run
# Shows: 65 images would be generated, estimated cost: $3.25

npm run images:generate -- --category service-hero
# Generates 65 images to staging/images/heroes/

npm run images:status
# Shows: 65 staged, 0 approved, 65 pending review

# Open staging/preview.html in browser, review visually

npm run images:approve -- --all
# OR: npm run images:approve -- --name roof-repair-hero
# Moves to public/images/heroes/, updates manifest
```

### Pattern 3: Shared Style Prefix for Prompt Consistency
**What:** Every image prompt starts with a standardized style block, followed by scene-specific details.
**When to use:** All photo generation prompts.
**Why:** Ensures visual consistency across 120+ generated images.
**Example:**
```typescript
// scripts/images/lib/prompts.ts
const STYLE_PREFIX = `Warm editorial photography, golden hour lighting, slightly warm color temperature, shallow depth of field, magazine-quality feel. New Jersey residential context with East Coast architecture, deciduous trees, and brick or vinyl siding homes.`;

const BRAND_ELEMENTS = `Workers wearing forest green (#1A3A2A) uniforms. Work trucks in matching forest green. No text, logos, signs, or watermarks in the image.`;

export function buildPrompt(sceneDescription: string): string {
  return `${STYLE_PREFIX} ${BRAND_ELEMENTS} ${sceneDescription}`;
}

// Usage:
buildPrompt('A roofing crew installing new architectural shingles on a two-story colonial home. One worker on the roof laying shingles, another on a ladder. Clear autumn day with colorful foliage in the background.');
```

### Pattern 4: OG Image Compositing with Sharp SVG Overlay
**What:** Generate OG images by compositing an AI-generated photo with a branded text overlay using sharp's SVG composite feature.
**When to use:** All 87 OG images.
**Why:** Produces consistent branded social sharing images without relying on AI text rendering (which is unreliable).
**Example:**
```typescript
// scripts/images/lib/og-compositor.ts
import sharp from 'sharp';

interface OGCompositeOptions {
  backgroundImage: string;  // Path to base photo
  title: string;            // Page title text
  subtitle?: string;        // Optional subtitle
  outputPath: string;
}

export async function createOGImage(options: OGCompositeOptions): Promise<void> {
  const { backgroundImage, title, subtitle, outputPath } = options;

  // Create SVG overlay with branded text
  const svgOverlay = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <!-- Dark gradient overlay for text readability -->
      <defs>
        <linearGradient id="overlay" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="rgba(15,34,24,0)" />
          <stop offset="50%" stop-color="rgba(15,34,24,0.3)" />
          <stop offset="100%" stop-color="rgba(15,34,24,0.85)" />
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#overlay)" />

      <!-- Copper accent bar -->
      <rect x="60" y="480" width="80" height="4" rx="2" fill="#C17F4E" />

      <!-- Company name -->
      <text x="60" y="510" font-family="serif" font-size="18"
            font-weight="600" fill="#C17F4E" letter-spacing="2">
        NEWARK QUALITY ROOFING
      </text>

      <!-- Page title -->
      <text x="60" y="560" font-family="serif" font-size="36"
            font-weight="700" fill="#F5F0E8">
        ${escapeXml(title)}
      </text>

      ${subtitle ? `
      <text x="60" y="595" font-family="serif" font-size="20"
            fill="#F5F0E8" opacity="0.8">
        ${escapeXml(subtitle)}
      </text>
      ` : ''}
    </svg>
  `;

  await sharp(backgroundImage)
    .resize(1200, 630, { fit: 'cover', position: 'center' })
    .composite([{
      input: Buffer.from(svgOverlay),
      top: 0,
      left: 0,
    }])
    .webp({ quality: 85 })
    .toFile(outputPath);
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
```

### Anti-Patterns to Avoid
- **Hardcoding image paths in components:** Always look up from the manifest. Components should call `getServiceHeroImage(service.id)` not `src="/images/heroes/roof-repair.webp"`.
- **Generating directly to public/:** Always stage first. A bad generation committed to git bloats history permanently.
- **Relying on AI text rendering:** GPT-4o cannot reliably render text in images. All text overlays must be done in post-processing via sharp SVG composite.
- **Sequential single-image generation without concurrency control:** With ~120 images at ~5-15 seconds each, sequential generation takes 10-30 minutes. Use controlled concurrency (3-5 parallel) with rate limit awareness.
- **Not tracking costs:** OpenAI billing is per-image. At $0.05/medium-quality landscape image, 120 images = ~$6. Track to prevent surprise bills during regeneration cycles.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Image resizing/format conversion | Custom ffmpeg/ImageMagick wrapper | sharp resize + webp/jpeg | sharp is 4-5x faster, has native Node bindings, handles WebP natively |
| Text overlay on images | Canvas API / Puppeteer screenshots | sharp SVG composite | No headless browser needed, no canvas dependency, works in pure Node.js |
| OpenAI API interaction | Raw fetch() calls | openai npm SDK | Handles auth, retries, streaming, proper error types, TypeScript types |
| Rate limiting | Custom delay loops | p-limit + exponential backoff | Proven concurrency control, clean async patterns |
| HTML preview generation | React/Next.js dev server | Static HTML file with inline CSS | Preview page is a development tool, not a production page. Simple HTML is sufficient |
| WebP quality optimization | Manual quality tuning per image | sharp .webp({ quality: 80 }) | sharp's default quality 80 is industry-standard for WebP lossy compression |

**Key insight:** The image generation pipeline is a CLI toolset, not a Next.js feature. It runs outside the Next.js build and produces static assets. Don't couple it to the Next.js runtime.

## Common Pitfalls

### Pitfall 1: API Output Size vs. Required Dimensions Mismatch
**What goes wrong:** gpt-image-1 maxes out at 1536x1024 (landscape), but hero images need 1920x1080.
**Why it happens:** The API has fixed size options: 1024x1024, 1024x1536, 1536x1024, or "auto".
**How to avoid:** Generate at 1536x1024 (closest landscape ratio) and use sharp to resize to 1920x1080. The upscale ratio is only 1.25x, which is acceptable for web hero images especially with the .photo-treatment CSS filter applied on top.
**Warning signs:** Blurry or pixelated hero images on high-DPI displays. Test on retina screens.

### Pitfall 2: Base64 Response Handling
**What goes wrong:** Generated images returned as base64 strings can be very large (several MB per image), causing memory pressure when generating batches.
**Why it happens:** gpt-image-1 only returns b64_json (no URL option). A 1536x1024 PNG is ~2-4MB in base64.
**How to avoid:** Write each image to disk immediately after receiving the response. Don't accumulate base64 strings in memory. Process images one-at-a-time or in small batches.
**Warning signs:** Node.js heap out of memory errors during batch generation.

### Pitfall 3: Rate Limiting Without Backoff
**What goes wrong:** OpenAI returns 429 errors and the script crashes or enters a tight retry loop.
**Why it happens:** gpt-image-1 has tier-based rate limits (RPM varies by account tier). Generating 120+ images hits these limits.
**How to avoid:** Use p-limit for concurrency control (start with 3 concurrent requests). Implement exponential backoff on 429 responses. Add configurable delay between batches (e.g., 1-2 seconds between requests).
**Warning signs:** Repeated 429 errors in generation report.

### Pitfall 4: SVG Text Wrapping in OG Composites
**What goes wrong:** Long page titles overflow the OG image boundary or get cut off.
**Why it happens:** SVG `<text>` elements don't auto-wrap. A title like "Architectural Shingle Roof Replacement in Newark NJ" may exceed the 1200px width.
**How to avoid:** Implement text truncation or manual line-breaking in the SVG generator. Measure approximate text width (character count x approximate character width) and split to two lines if needed. Use a max of ~30 characters per line at font-size 36.
**Warning signs:** Text clipping or overflow in OG image previews.

### Pitfall 5: CSS Photo Treatment Double-Warming
**What goes wrong:** Images look overly warm/orange because the AI generates warm-toned images AND the CSS `.photo-treatment` adds a warm copper/forest multiply overlay.
**Why it happens:** The CONTEXT.md specifies "warm editorial photography, golden hour lighting" for the AI prompt, but the site already applies `background: linear-gradient(135deg, rgba(193,127,78,0.12), rgba(26,58,42,0.08))` with `mix-blend-mode: multiply` and `filter: saturate(0.85)`.
**How to avoid:** Generate images with slightly neutral/cooler tones knowing the CSS treatment will add warmth. Reduce the warmth in the style prefix from "golden hour" to "soft natural daylight with slightly warm undertones" to leave room for the CSS treatment. Test a few images before batch-generating.
**Warning signs:** Images looking unnaturally warm or orangey on the live site.

### Pitfall 6: Inconsistent AI Generation Across Batches
**What goes wrong:** Images generated in different batches have noticeably different styles, color temperature, or quality.
**Why it happens:** AI image generation is inherently stochastic. The model can interpret the same style prefix differently across calls.
**How to avoid:** Use the detailed shared style prefix consistently. Generate related categories in the same batch/session when possible. Review the HTML preview page holistically (all images together) before approving. Regenerate outliers individually.
**Warning signs:** Visible style breaks between adjacent images on the site.

### Pitfall 7: Git Repository Bloat from Images
**What goes wrong:** Committing 120+ WebP images (even optimized) adds significant weight to git history.
**Why it happens:** Each WebP image is 50-200KB. 120 images = 6-24MB. OG images add another ~87 images.
**How to avoid:** Optimize aggressively with sharp (WebP quality 75-80, appropriate dimensions). Don't commit staging images or rejected generations. Consider .gitattributes with Git LFS for the images/ directory if the repo grows too large. Current repo has ~2.3MB of JPG images -- WebP at quality 80 should be smaller per-image.
**Warning signs:** Git clone time increasing significantly.

## Code Examples

### OpenAI Image Generation with gpt-image-1
```typescript
// Source: OpenAI API docs (https://developers.openai.com/api/docs/guides/image-generation/)
import OpenAI from 'openai';
import fs from 'fs';

const openai = new OpenAI(); // Uses OPENAI_API_KEY from env

const result = await openai.images.generate({
  model: 'gpt-image-1',
  prompt: 'A detailed description of the image...',
  size: '1536x1024',      // Landscape (closest to 16:9)
  quality: 'medium',       // low ($0.05) | medium ($0.05 landscape) | high ($0.17+)
  output_format: 'png',    // png | webp | jpeg (sharp will convert to optimized WebP)
  n: 1,                    // Only 1 supported per request for gpt-image-1
});

// Response is always base64-encoded
const imageBase64 = result.data[0].b64_json!;
const imageBuffer = Buffer.from(imageBase64, 'base64');
fs.writeFileSync('output.png', imageBuffer);
```

### Sharp Pipeline: Resize + WebP Conversion
```typescript
// Source: sharp docs (https://sharp.pixelplumbing.com/)
import sharp from 'sharp';

// Resize generated image to target dimensions + convert to optimized WebP
await sharp('staging/images/raw/roof-repair-hero.png')
  .resize(1920, 1080, {
    fit: 'cover',
    position: 'centre',
  })
  .webp({
    quality: 80,        // 80 is sharp's default; good balance of quality vs size
    effort: 6,          // Compression effort (0-6, default 4)
  })
  .toFile('public/images/heroes/roof-repair-hero.webp');
```

### Sharp SVG Composite for OG Images
```typescript
// Source: sharp compositing docs (https://sharp.pixelplumbing.com/api-composite/)
import sharp from 'sharp';

const svgOverlay = Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="rgba(15,34,24,0)" />
        <stop offset="60%" stop-color="rgba(15,34,24,0.6)" />
        <stop offset="100%" stop-color="rgba(15,34,24,0.9)" />
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#grad)" />
    <rect x="60" y="480" width="80" height="4" rx="2" fill="#C17F4E" />
    <text x="60" y="510" font-family="serif" font-size="18"
          font-weight="600" fill="#C17F4E" letter-spacing="2">
      NEWARK QUALITY ROOFING
    </text>
    <text x="60" y="560" font-family="serif" font-size="36"
          font-weight="700" fill="#F5F0E8">
      Roof Repair Services in Newark NJ
    </text>
  </svg>
`);

await sharp('public/images/heroes/roof-repair-hero.webp')
  .resize(1200, 630, { fit: 'cover' })
  .composite([{ input: svgOverlay, top: 0, left: 0 }])
  .webp({ quality: 85 })
  .toFile('public/images/og/roof-repair.webp');
```

### HTML Preview Page Generation
```typescript
// Source: project pattern (static HTML tool, not production page)
function generatePreviewHTML(images: StagedImage[]): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Image Generation Preview</title>
  <style>
    body { font-family: Georgia, serif; background: #F5F0E8; padding: 2rem; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); gap: 1.5rem; }
    .card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .card img { width: 100%; height: auto; display: block; }
    .card-info { padding: 1rem; }
    .card-info h3 { margin: 0 0 0.5rem; color: #1A3A2A; }
    .card-info p { margin: 0; font-size: 0.85rem; color: #666; }
    .prompt { background: #f0ede5; padding: 0.5rem; border-radius: 6px; font-size: 0.8rem; margin-top: 0.5rem; white-space: pre-wrap; }
  </style>
</head>
<body>
  <h1>Staged Images for Review</h1>
  <p>Generated: ${new Date().toISOString()} | Total: ${images.length}</p>
  <div class="grid">
    ${images.map(img => `
    <div class="card">
      <img src="${img.stagingPath}" alt="${img.alt}" loading="lazy" />
      <div class="card-info">
        <h3>${img.id}</h3>
        <p><strong>Category:</strong> ${img.category} | <strong>Size:</strong> ${img.width}x${img.height}</p>
        <div class="prompt">${img.prompt}</div>
      </div>
    </div>
    `).join('')}
  </div>
</body>
</html>`;
}
```

### Concurrency Control with p-limit Pattern
```typescript
// Using native Promise-based concurrency (no extra dep needed)
async function generateWithConcurrency(
  items: PromptDefinition[],
  concurrency: number = 3,
  delayMs: number = 1000,
): Promise<GenerationResult[]> {
  const results: GenerationResult[] = [];
  const queue = [...items];

  const workers = Array.from({ length: concurrency }, async () => {
    while (queue.length > 0) {
      const item = queue.shift()!;
      try {
        const result = await generateSingleImage(item);
        results.push(result);
      } catch (error) {
        if (isRateLimitError(error)) {
          queue.unshift(item); // Re-queue
          await sleep(5000);    // Back off
        } else {
          results.push({ ...item, error: String(error), status: 'failed' });
        }
      }
      await sleep(delayMs); // Pace between requests
    }
  });

  await Promise.all(workers);
  return results;
}
```

## Recommendations on Discretion Items

### File Organization: Use Subdirectories
**Recommendation:** Organize `public/images/` into subdirectories by category.
**Rationale:** With 120+ images plus 87 OG images, a flat directory becomes unmanageable. Subdirectories group related images and make the codebase navigable.
```
public/images/
  heroes/       # 65 service + 21 city hero images
  gallery/      # 12-16 before/after pairs
  content/      # ~20 shared content pool
  homepage/     # ~15 homepage-specific images
  og/           # ~87 OG social sharing images
```

### Image Manifest: Committed to Git
**Recommendation:** Commit `src/data/image-manifest.ts` to git.
**Rationale:** The manifest is a code artifact that maps images to pages. It is consumed by React components at build time. It must be version-controlled for the build to work. The staging directory and reports should be gitignored.

### Prompt Definitions: Separate Data File
**Recommendation:** Define all prompts in `scripts/images/lib/prompts.ts` as a structured data file.
**Rationale:** Prompts are the "content" of this system. Separating them from script logic makes them easy to review, modify, and regenerate selectively. Each prompt definition includes the image ID, category, target dimensions, and scene description.

### Rate Limiting: 3 Concurrent with 1s Delay
**Recommendation:** Default to 3 concurrent requests with 1-second delay between each. Configurable via CLI flags.
**Rationale:** gpt-image-1 rate limits vary by account tier. 3 concurrent is conservative enough for Tier 1 accounts. The 1-second delay prevents burst throttling. Higher-tier accounts can increase via `--concurrency 5`.

### OG Pipeline: Separate Subcommand
**Recommendation:** Use `npm run images:og` as a separate subcommand.
**Rationale:** OG images use a fundamentally different pipeline (photo + text composite) than raw photo generation. They depend on approved hero images being in place first. Separate subcommand keeps the workflow clean: generate photos -> approve -> generate OGs.

### Photo Treatment Tuning: Generate Neutral, Let CSS Warm
**Recommendation:** Use "soft natural daylight" instead of "golden hour" in the style prefix. Let the CSS `.photo-treatment` overlay add the warmth.
**Rationale:** The existing `.photo-treatment` class applies `saturate(0.85)` and a warm copper/forest multiply gradient. If the AI also generates golden-hour warmth, the result will be overly warm. Generate neutral-to-slightly-warm, let CSS do the final color grading.

### Combo Page Image Strategy: Reuse Service Hero
**Recommendation:** Combo pages should reuse their parent service's hero image via manifest lookup. No additional image generation needed.
**Rationale:** 1,323 combo pages would need 1,323+ unique images -- prohibitively expensive ($65+) and provides diminishing SEO value. The service hero image is contextually relevant. City pages have their own heroes for location-specific social sharing.

### Service Hero Subject Approach: Mixed by Category
**Recommendation:**
- Repair/maintenance: Show damage being assessed or repair in progress (action shots)
- Residential roof types: Show finished installation (beauty shots of material)
- Commercial roof types: Show the roof system close-up or from a low aerial angle
- Components/specialty: Show the specific component being installed
- Energy/solar: Show solar panels on a residential roof
- Design/consultation: Show a contractor consulting with a homeowner
- Replacement sub-pages: Show the specific material being installed

## Cost Estimation

### Photo Generation (gpt-image-1, medium quality)
| Category | Count | Size | Cost/Image | Subtotal |
|----------|-------|------|------------|----------|
| Homepage images | 15 | 1536x1024 | $0.05 | $0.75 |
| Service heroes | 65 | 1536x1024 | $0.05 | $3.25 |
| City heroes | 21 | 1536x1024 | $0.05 | $1.05 |
| Gallery before/after | 16 | 1536x1024 | $0.05 | $0.80 |
| Shared content pool | 20 | 1024x1024 | $0.034 | $0.68 |
| **Total photos** | **137** | | | **$6.53** |

### OG Images: No Additional API Cost
OG images are composites of already-generated photos + SVG text overlay via sharp. No API calls needed.

### Regeneration Buffer
Assume 20% regeneration rate for quality issues: ~27 images x $0.05 = $1.35

### Total Estimated Cost: ~$7.88

*Note: Pricing is for medium quality. Low quality would be ~$1.80 total (70% cheaper). High quality would be ~$23 total.*

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| DALL-E 3 (dall-e-3) | gpt-image-1 / gpt-image-1.5 | April 2025 | Much better prompt following, photorealistic output, up to 4096x4096, no style parameter needed |
| URL response format | b64_json only (for gpt-image-1) | April 2025 | Must handle base64 decoding; no temporary URL option |
| openai npm v4.x | openai npm v6.x | 2025-2026 | Major version bump, new API patterns, Node 20+ required |
| ImageMagick/canvas for compositing | sharp for compositing | Ongoing | sharp 0.34.x has mature composite API, no system dependency |

**Deprecated/outdated:**
- DALL-E 2 variations endpoint: Not supported by gpt-image-1
- `response_format: "url"`: Not available for gpt-image-1 (always returns b64_json)
- `style` parameter: Not available for gpt-image-1 (style is controlled entirely via prompt)
- openai npm v4.x: Current is v6.x, significant API changes

## Integration Points

### Components That Need Image Path Updates
Based on code analysis, these components currently hardcode Unsplash image paths and need manifest-based lookups:

| Component | Current Image References | Update Needed |
|-----------|------------------------|---------------|
| `BeforeAfterGallery.tsx` | 8 hardcoded paths (4 before/after pairs) | Replace with manifest lookup, expand to 6-8 pairs |
| `HomeResidentialCommercial.tsx` | 2 images (residential + commercial) | Replace with manifest lookup |
| `HomeWhyChooseUs.tsx` | 4 images (licensed, experience, warranty, team) | Replace with manifest lookup |
| `HomePricingTable.tsx` | 1 image (estimate) | Replace with manifest lookup |
| `HomeRepairServices.tsx` | 1 image (roof replacement) | Replace with manifest lookup |
| `FaqAccordion.tsx` | 1 image (homeowner options) | Replace with manifest lookup |
| `LocationsGrid.tsx` | 1 image (service map) | Replace with manifest lookup |
| `page.tsx` (homepage) | 1 image (consultation) + OG image | Replace with manifest lookup |

### Metadata Updates (OG Images)
The `buildOG()` function in `[slug]/page.tsx` currently uses `SEO_CONFIG.OG_IMAGE.url` (shared `/images/og-default.jpg`) for all pages. After this phase:
- Each service page gets its own OG image: `/images/og/[service-slug].webp`
- Each city page gets its own OG image: `/images/og/[city-slug].webp`
- Homepage gets its own OG image: `/images/og/homepage.webp`
- `buildOG()` needs to accept an optional image path parameter
- `SEO_CONFIG.OG_IMAGE` remains as fallback for pages without custom OG images

### Files to Add to .gitignore
```
# Image generation staging (not committed)
/staging/
/scripts/reports/
```

### Files to Add to .env.example
```
# OpenAI API key (for AI image generation scripts)
OPENAI_API_KEY=
```

### npm Scripts to Add to package.json
```json
{
  "images:generate": "tsx scripts/images/generate.ts",
  "images:approve": "tsx scripts/images/approve.ts",
  "images:status": "tsx scripts/images/status.ts",
  "images:audit": "tsx scripts/images/audit.ts",
  "images:og": "tsx scripts/images/og-generate.ts",
  "images:preview": "tsx scripts/images/preview.ts"
}
```

### Dead Files to Remove
| File | Size | Why |
|------|------|-----|
| `public/images/bbb-accredited-badge.jpg` | 0 bytes | Dead file, no longer referenced after Phase 9 TrustBar redesign |
| `public/images/gaf-certified-badge.jpg` | 0 bytes | Dead file, no longer referenced |
| `public/images/homeadvisor-badge.jpg` | 0 bytes | Dead file, no longer referenced |

## Open Questions

1. **OpenAI Account Tier**
   - What we know: gpt-image-1 requires Tier 1+ access. Rate limits vary by tier.
   - What's unclear: Which tier the project's OpenAI account is on, and what the specific RPM limit is.
   - Recommendation: Start with conservative concurrency (3 parallel). If rate-limited, reduce to 2. Check account tier in OpenAI dashboard before first generation run.

2. **WebP vs JPEG for Next.js Image Component**
   - What we know: Next.js Image component can serve WebP automatically via its built-in optimization. Sharp can output WebP directly.
   - What's unclear: Whether pre-converting to WebP provides benefit over letting Next.js handle it, given Next.js already optimizes at serve time.
   - Recommendation: Pre-convert to WebP anyway. It reduces git repo size, speeds up build time (no conversion needed), and the CLI pipeline already uses sharp. Next.js will serve the WebP directly without re-conversion.

3. **Hero Image Background Integration**
   - What we know: Current hero sections use pure CSS gradient backgrounds (no photo). Adding a photo background behind the gradient overlay is a design decision.
   - What's unclear: Whether hero images should replace the CSS gradient entirely, or be overlaid behind it (photo + gradient + text).
   - Recommendation: Keep the current CSS gradient overlay ON TOP of the new hero photo. This maintains the Editorial Trust aesthetic while adding visual richness. The photo becomes a subtle background texture rather than a hero banner. This means the hero components need a `backgroundImage` CSS property pointing to the manifest image path.

## Sources

### Primary (HIGH confidence)
- [OpenAI Image Generation Guide](https://developers.openai.com/api/docs/guides/image-generation/) - API parameters, model capabilities, quality options
- [OpenAI API Reference: Create Image](https://developers.openai.com/api/reference/resources/images/methods/generate/) - Full parameter reference
- [OpenAI Cookbook: Generate Images with GPT Image](https://developers.openai.com/cookbook/examples/generate_images_with_gpt_image) - Code examples, quality/size options
- [sharp documentation](https://sharp.pixelplumbing.com/) - Resize, WebP conversion, composite API
- [sharp output options](https://sharp.pixelplumbing.com/api-output/) - WebP quality parameters (default 80)
- [sharp composite API](https://sharp.pixelplumbing.com/api-composite/) - SVG text overlay for OG images

### Secondary (MEDIUM confidence)
- [OpenAI Pricing](https://openai.com/api/pricing/) - Per-image cost by quality/size tier (verified via multiple sources)
- [CostGoat OpenAI Calculator](https://costgoat.com/pricing/openai-images) - Cross-referenced pricing data
- [img.ly GPT-Image-1 Guide](https://img.ly/blog/openai-gpt-4o-image-generation-api-gpt-image-1-a-complete-guide-for-creative-workflows-for-2025/) - Verified output_format options (png/webp/jpeg), size options
- [openai npm package](https://www.npmjs.com/package/openai) - Latest version 6.27.0, Node 20+ required

### Tertiary (LOW confidence)
- [OpenAI rate limits community threads](https://community.openai.com/t/rate-limits-for-gpt-image-1/1241268) - Tier-specific RPM values (not officially documented per-tier)

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - openai SDK and sharp are the obvious choices, verified via official docs
- Architecture: HIGH - Manifest-driven pattern is well-established, staging workflow matches existing project patterns (audit scripts, validation scripts)
- Pitfalls: HIGH - Base64 handling, rate limiting, and photo treatment double-warming are well-documented issues
- Cost estimation: MEDIUM - Pricing verified from multiple sources but exact per-image cost can vary by account/tier
- OG compositing: MEDIUM - sharp SVG composite is documented but text wrapping requires manual handling

**Research date:** 2026-03-10
**Valid until:** 2026-04-10 (30 days -- stable domain, OpenAI pricing may shift)
