# Phase 10: Add Image Creation System - Context

**Gathered:** 2026-03-10
**Status:** Ready for planning

<domain>
## Phase Boundary

Build an AI-powered image creation system using GPT-4o to generate ~120 core photos and ~87 OG images for the site. Replace all existing Unsplash stock photos with AI-generated images that match the Editorial Trust aesthetic. Deliver a reusable CLI toolset for generating, reviewing, approving, and auditing images.

</domain>

<decisions>
## Implementation Decisions

### Image Generation Approach
- GPT-4o image generation via OpenAI API
- Replace ALL 15 existing Unsplash stock photos with AI-generated images
- Remove 3 dead badge files (GAF, BBB, HomeAdvisor — 0 bytes, no longer referenced after Phase 9 TrustBar redesign)
- OPENAI_API_KEY stored in .env (existing pattern, already gitignored)
- Script generates images into a staging/review folder — NOT directly to public/images/
- Auto-generate SEO-optimized alt text alongside each image (service + city + scene keywords), saved to manifest
- Cost tracking: log number of images generated, estimated API cost per run, save to report file
- Dry-run mode: list all images that would be generated, show prompts, estimated cost, file paths — without making API calls

### Image Scope & Coverage
- **Homepage sections** (~15 images): hero, residential/commercial split, why choose us, before/after gallery
- **Service page heroes** (65 images): one unique hero image per service page
- **City page heroes** (21 images): one hero image per city showing cityscape/streetscape with roofing overlay
- **Before/after gallery** (12-16 images): 6-8 project sets (expand from current 4), 3-4 residential + 3-4 commercial alternating. Realistic damage + repair progression (missing shingles, leaks, worn roofs → pristine results)
- **Shared content pool** (~20 images): reusable images for inner page sections across 4 categories — crews & workers (~5), materials & close-ups (~5), consultation & planning (~5), seasonal/weather (~5, all 4 NJ seasons)
- **OG social sharing images** (~87): 1200x630 OG images for homepage, 65 service pages, 21 city pages. Photo with branded text overlay (company name + page title + forest/copper gradient bar)
- **Total**: ~120 core photos + ~87 OG composites
- Combo pages: Claude's discretion on whether to reuse service or city hero images
- Comparison pages (30) and article pages (252): deferred — not in this phase's scope

### Image Dimensions
- Multiple sizes per aspect ratio, matching each use case:
  - Hero: 1920x1080 (16:9)
  - Content: 1200x900 (4:3)
  - Gallery before/after: 1200x800 (3:2)
  - Cards/thumbnails: 800x800 (1:1)
  - OG images: 1200x630 (social sharing)
- Next.js Image component handles responsive serving from these base sizes

### Image Style & Brand Consistency
- **Photographic style**: Warm editorial photography — golden hour lighting, slightly warm tones, shallow depth of field. Magazine-quality feel
- **NJ-specific context**: East Coast architecture, deciduous trees, four-season weather, brick/siding homes. City images reference specific building styles (Newark brownstones, Montclair Victorians, Millburn estates)
- **Subtle branding**: Forest green uniforms/trucks to echo brand palette. NO text, logos, or signage in generated images (AI text rendering is unreliable)
- **Shared style prefix**: Every prompt starts with a consistent style block (warm editorial photography, golden hour, shallow DOF, NJ residential context). Scene-specific details follow
- **Seasonal coverage**: All 4 NJ seasons represented in shared pool — winter (snow/ice dams), fall (leaves/prep), spring (storm damage), summer (installations)
- **No specific diversity direction**: Let GPT-4o generate naturally; keep prompts focused on roofing work

### Pipeline & Workflow
- **Reusable CLI with npm subcommands**: `npm run images:generate`, `npm run images:approve`, `npm run images:status`, `npm run images:audit`
- **HTML preview page for review**: Script generates a local HTML page showing all staged images in a grid with their prompts. Visual review experience for approve/reject workflow
- **Pre-optimize with sharp**: Compress and convert to WebP before saving to public/images/. Reduces build time and repo size
- **Detailed generation reports**: After each run, save report to scripts/reports/ with images generated, failed, skipped, estimated cost, time elapsed
- **Coverage audit**: `npm run images:audit` checks that every page that should have an image has one mapped in the manifest. Reports missing images (follows orphan page audit pattern)

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

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `globals.css` `.photo-treatment` class: warm copper/forest overlay (multiply blend), saturate(0.85) desaturation, 12px border radius — applied to all images via `::after` pseudo-element
- Body-level grain texture: SVG feTurbulence noise at 2.5% opacity, fixed position, z-9999
- `BeforeAfterGallery.tsx`: existing gallery with clipPath slider + pointer event tracking — needs image swaps only
- `HomeResidentialCommercial.tsx`, `HomeWhyChooseUs.tsx`: use Next.js Image with `sizes` prop — need image path updates
- 15 existing Unsplash JPGs in `public/images/` with kebab-case descriptive filenames
- `AnimateIn` wrapper component for motion effects on images

### Established Patterns
- Next.js `Image` component with explicit width/height, `sizes` prop, loading="lazy" for below-fold
- Cropping ratios set in Phase 9: hero 16:9, content 4:3, gallery 3:2, cards 1:1, team 3:4
- Keyword-rich descriptive alt text pattern: "Residential roof repair completed in Newark NJ by licensed contractor"
- Kebab-case descriptive filenames: `residential-roof-repair-newark.jpg`
- `SEO_CONFIG` with `OG_IMAGE` constant — currently shared across all pages, will be per-page after this phase
- Existing npm scripts pattern: `seo:validate`, `seo:headings`, etc.

### Integration Points
- `public/images/`: destination for approved images (replacing current Unsplash photos)
- `globals.css`: `.photo-treatment` class auto-applies to images — generated images go through this treatment
- All template hero components: ServiceHero, CityHero, ComboHero — need hero image prop or manifest lookup
- `[slug]/page.tsx`: metadata generation needs per-page OG image paths instead of shared SEO_CONFIG.OG_IMAGE
- `.env`: add OPENAI_API_KEY
- `.env.example`: add OPENAI_API_KEY placeholder
- `package.json`: add images:* npm scripts, sharp and openai as devDependencies

</code_context>

<specifics>
## Specific Ideas

- City hero images should show recognizable cityscape/streetscape with roofing elements (trucks, crew, signage in foreground) — "local presence" feel, not just roofing work in generic context
- Before/after gallery should show realistic damage (missing shingles, active leaks, worn flat roofs) in "before" and pristine results in "after" — convincing transformation shots
- Forest green uniforms and trucks in images to subtly echo the brand palette without AI text/logo rendering
- HTML preview page for review provides the most visual approval experience — see all images in grid with their prompts
- All 4 NJ seasons represented in shared pool to support seasonal content angles across the site

</specifics>

<deferred>
## Deferred Ideas

- Comparison page hero images (30 images) — add when/if budget allows
- Article page hero images (252 images) — add when/if budget allows
- Video content generation — separate phase if needed
- Real project photography replacement — V2 requirement (TRST-V2-02)

</deferred>

---

*Phase: 10-add-image-creation-system*
*Context gathered: 2026-03-10*
