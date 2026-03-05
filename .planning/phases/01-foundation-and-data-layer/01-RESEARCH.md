# Phase 1: Foundation and Data Layer - Research

**Researched:** 2026-03-05
**Domain:** Next.js SSG, Tailwind CSS v4 design tokens, Zod data schemas, flat URL slug dispatch
**Confidence:** HIGH

## Summary

This phase establishes the technical foundation for a 1,697-page statically generated roofing lead-gen site. The core challenges are: (1) setting up Next.js with a single `[slug]` dynamic route that dispatches to different template types, (2) defining Zod schemas for 63 services, 21 cities, and their 1,323 cross-products, (3) building a slug registry with collision detection for flat URLs, and (4) establishing design system tokens (Cormorant fonts, forest green/copper/parchment palette) in Tailwind CSS v4.

A critical discovery: **Next.js is now at version 16.1.x** (not 15 as specified in requirements). Since this is a brand-new project, we should use Next.js 16 which is the current stable release. The key differences from 15 are: params are now async Promises (no synchronous access), middleware is renamed to proxy, Turbopack is the default bundler, and ESLint flat config is the new standard. The `next lint` command has been removed; use ESLint directly.

For 1,697 static pages, full SSG at build time is feasible but needs attention to build times. Vercel's guidance suggests ISR for sites with 1000+ pages, but since the data is fully static (no CMS), full SSG with `generateStaticParams` + `dynamicParams = false` is the correct approach. Build times should be manageable since pages are template-driven with no external data fetching.

**Primary recommendation:** Use Next.js 16 (latest stable) with App Router, a single `app/[slug]/page.tsx` route, `generateStaticParams` returning all 1,697 slugs, and `dynamicParams = false` to 404 on unknown slugs.

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| next | 16.1.x (latest) | React framework with SSG, App Router | Current stable release, Turbopack default, async params |
| react / react-dom | 19.2.x | UI library | Required by Next.js 16, includes View Transitions |
| typescript | 5.x | Type safety | Required by Next.js 16 minimum |
| tailwindcss | 4.x | Utility-first CSS with @theme design tokens | CSS-first config, 70% smaller output than v3 |
| @tailwindcss/postcss | 4.x | PostCSS plugin for Tailwind v4 | Required for Next.js integration |
| zod | 4.x (or 3.24) | Schema validation with TypeScript inference | 40M+ weekly downloads, de facto standard |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| postcss | latest | CSS processing pipeline | Required by Tailwind v4 |
| @types/react | latest | TypeScript types for React | Required for TS development |
| @types/react-dom | latest | TypeScript types for React DOM | Required for TS development |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Zod 4 | Zod 3.24 | Zod 3.24 is more battle-tested; Zod 4 adds `z.xor()` and `z.templateLiteral()` but may have fewer community examples. Recommend Zod 3.24 for stability unless Zod 4 features are needed. |
| next/font/google | @fontsource packages | next/font is built-in, self-hosts automatically, prevents layout shift. No reason to use Fontsource. |

**Installation:**
```bash
npx create-next-app@latest newarkqualityroofing --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
# Zod (choose one):
npm install zod@latest        # Zod 4.x
# OR
npm install zod@3             # Zod 3.24.x (more battle-tested)
```

## Architecture Patterns

### Recommended Project Structure
```
src/
├── app/
│   ├── layout.tsx             # Root layout with fonts + design tokens
│   ├── page.tsx               # Homepage
│   ├── [slug]/
│   │   └── page.tsx           # Catch-all dispatcher for all 1,697 pages
│   ├── not-found.tsx          # Custom 404
│   └── globals.css            # Tailwind imports + @theme design tokens
├── data/
│   ├── services.ts            # 63 service definitions with Zod schemas
│   ├── cities.ts              # 21 city definitions with Zod schemas
│   ├── combos.ts              # Cross-product generation (63 x 21)
│   ├── comparisons.ts         # 30 comparison page definitions
│   ├── core-pages.ts          # Static pages (about, contact, etc.)
│   └── slug-registry.ts       # Central slug registry with collision detection
├── lib/
│   ├── schemas.ts             # Zod schema definitions
│   ├── types.ts               # Inferred TypeScript types from Zod
│   ├── slug-utils.ts          # Slug generation + validation utilities
│   └── dispatcher.ts          # Template type resolution from slug
├── components/
│   ├── layout/
│   │   ├── Header.tsx         # Sticky header with nav
│   │   ├── Footer.tsx         # Mega-footer with cities + services
│   │   └── MobileMenu.tsx     # Mobile navigation
│   └── ui/                    # Shared UI primitives
└── styles/
    └── design-tokens.ts       # Token constants (exported for JS use)
```

### Pattern 1: Single [slug] Dynamic Route Dispatcher
**What:** All 1,697 pages share a single `app/[slug]/page.tsx` route. The page component looks up the slug in a registry to determine which template to render.
**When to use:** When all pages share a flat URL structure (no nesting).
**Example:**
```typescript
// Source: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// app/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getAllSlugs, getPageDataBySlug } from '@/data/slug-registry';

// IMPORTANT: In Next.js 16, params is a Promise
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const pageData = getPageDataBySlug(slug);

  if (!pageData) {
    notFound();
  }

  switch (pageData.type) {
    case 'service':
      return <ServiceTemplate data={pageData} />;
    case 'city':
      return <CityTemplate data={pageData} />;
    case 'combo':
      return <ComboTemplate data={pageData} />;
    case 'comparison':
      return <ComparisonTemplate data={pageData} />;
    case 'article':
      return <ArticleTemplate data={pageData} />;
    case 'core':
      return <CoreTemplate data={pageData} />;
    default:
      notFound();
  }
}

// Generate all 1,697 slugs at build time
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// 404 for any slug not in the registry
export const dynamicParams = false;
```

### Pattern 2: Slug Registry with Collision Detection
**What:** A central registry that maps every slug to its page type and data, with build-time validation that no two pages produce the same slug.
**When to use:** Always for flat URL structures with multiple page types.
**Example:**
```typescript
// src/data/slug-registry.ts
import { services } from './services';
import { cities } from './cities';
import { generateSlug, generateComboSlug } from '@/lib/slug-utils';

type PageType = 'service' | 'city' | 'combo' | 'comparison' | 'article' | 'core';

interface SlugEntry {
  slug: string;
  type: PageType;
  serviceId?: string;
  cityId?: string;
}

function buildRegistry(): Map<string, SlugEntry> {
  const registry = new Map<string, SlugEntry>();
  const collisions: string[] = [];

  function register(entry: SlugEntry) {
    if (registry.has(entry.slug)) {
      const existing = registry.get(entry.slug)!;
      collisions.push(
        `Slug "${entry.slug}" collision: ${existing.type} vs ${entry.type}`
      );
    }
    registry.set(entry.slug, entry);
  }

  // Register services
  for (const service of services) {
    register({ slug: service.slug, type: 'service', serviceId: service.id });
  }

  // Register cities
  for (const city of cities) {
    register({ slug: city.slug, type: 'city', cityId: city.id });
  }

  // Register combos (63 x 21 = 1,323)
  for (const service of services) {
    for (const city of cities) {
      const slug = generateComboSlug(service.slug, city.slug);
      register({
        slug,
        type: 'combo',
        serviceId: service.id,
        cityId: city.id,
      });
    }
  }

  // Collision detection - throw at build time
  if (collisions.length > 0) {
    throw new Error(
      `Slug collisions detected:\n${collisions.join('\n')}`
    );
  }

  return registry;
}

// Singleton - computed once, reused across build
const registry = buildRegistry();

export function getAllSlugs(): string[] {
  return Array.from(registry.keys());
}

export function getPageDataBySlug(slug: string): SlugEntry | undefined {
  return registry.get(slug);
}
```

### Pattern 3: Tailwind v4 @theme Design Tokens
**What:** Define the Editorial Trust color palette and typography in CSS using Tailwind v4's `@theme` directive.
**When to use:** For all design token definitions -- replaces tailwind.config.js.
**Example:**
```css
/* src/app/globals.css */
@import "tailwindcss";

@theme {
  /* Color Palette - Editorial Trust */
  --color-forest: #1A3A2A;
  --color-forest-light: #2A5A3A;
  --color-forest-dark: #0F2218;
  --color-copper: #C17F4E;
  --color-copper-light: #D4A574;
  --color-copper-dark: #A66A3A;
  --color-parchment: #F5F0E8;
  --color-parchment-dark: #E8E0D0;
  --color-parchment-light: #FAF8F4;

  /* Semantic colors */
  --color-primary: #1A3A2A;
  --color-accent: #C17F4E;
  --color-background: #F5F0E8;
  --color-text-primary: #1A1A1A;
  --color-text-on-dark: #F5F0E8;
  --color-text-on-copper: #FFFFFF;

  /* Typography - connected to next/font CSS variables */
  --font-heading: var(--font-cormorant), serif;
  --font-body: var(--font-cormorant-garamond), serif;
}
```

### Pattern 4: Next.js 16 Font Setup with CSS Variables
**What:** Use `next/font/google` with CSS variables for Tailwind v4 integration.
**Example:**
```typescript
// src/app/layout.tsx
import { Cormorant, Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant-garamond',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${cormorantGaramond.variable}`}
    >
      <body className="font-body bg-parchment text-text-primary">
        {children}
      </body>
    </html>
  );
}
```

### Anti-Patterns to Avoid
- **Using `[...slug]` (catch-all) instead of `[slug]` (single segment):** Since all URLs are flat (no slashes), use `[slug]` which gives a string, not `[...slug]` which gives an array. The catch-all is unnecessary complexity.
- **Synchronous params access:** Next.js 16 requires `await params`. Using synchronous access will fail -- there is no backwards compatibility.
- **Putting data in external APIs:** For this site, all data is static and known at build time. Keep it in TypeScript files, not in a CMS or API. This makes `generateStaticParams` trivial and build times fast.
- **Separate routes per page type:** Do NOT create `app/services/[slug]/page.tsx` and `app/cities/[slug]/page.tsx`. The flat URL requirement means everything goes through `app/[slug]/page.tsx`.
- **Using tailwind.config.js:** Tailwind v4 uses CSS-first configuration with `@theme`. Do not create a JavaScript config file.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Font loading | Custom `<link>` tags or font-face declarations | `next/font/google` | Automatic self-hosting, prevents CLS, zero external requests |
| CSS design tokens | Custom CSS variables without utility classes | Tailwind v4 `@theme` directive | Tokens automatically generate utility classes (`bg-forest`, `text-copper`) |
| Schema validation | Manual TypeScript interfaces without runtime checks | Zod schemas with `z.infer<>` | Runtime validation + TypeScript types from single source of truth |
| Slug generation | Manual string manipulation | Utility function with normalization | Edge cases: accents, special chars, duplicate handling |
| Build-time collision detection | Post-hoc debugging of 404s | Registry pattern with Map + throw | Fails fast during build, not in production |
| Static param generation | Manual route file per page | Single `[slug]` + `generateStaticParams` | 1 file vs 1,697 files; single dispatch point |

**Key insight:** The entire data layer is deterministic and known at build time. Every URL, every page type, every data relationship can be computed once and validated before deployment. Do not introduce runtime complexity.

## Common Pitfalls

### Pitfall 1: Synchronous Params Access (Next.js 16 Breaking Change)
**What goes wrong:** Code like `const { slug } = params` fails with a type error or returns a Promise object as a string.
**Why it happens:** Next.js 16 made params fully async. The backwards-compatible synchronous access from Next.js 15 is removed.
**How to avoid:** Always `const { slug } = await params` in page components.
**Warning signs:** TypeScript showing `params` as `Promise<{ slug: string }>`, runtime errors about `[object Promise]`.

### Pitfall 2: Slug Collisions in Flat URL Space
**What goes wrong:** Two different page types generate the same slug (e.g., a city named "roof-repair" and a service named "roof-repair").
**Why it happens:** Flat URLs have no namespace separation. Service slugs, city slugs, and combo slugs all compete in the same space.
**How to avoid:** Build the slug registry at module initialization time and throw on collisions. For combo pages, use the pattern `{service-slug}-{city-slug}-nj` (e.g., `roof-repair-montclair-nj`). City pages use `roofing-in-{city}-nj` or `{city}-nj-roofing`. Service pages use the service slug directly.
**Warning signs:** Build failures from `generateStaticParams` returning duplicate slugs; Next.js silently using the last entry.

### Pitfall 3: Build Timeout with 1,697 Pages
**What goes wrong:** Vercel build exceeds 45-minute limit.
**Why it happens:** Each page runs through the full rendering pipeline. With 1,697 pages, this can be slow if pages do unnecessary work.
**How to avoid:** Keep page rendering fast -- no external API calls, no heavy computation per page. Data lookups should be O(1) via Map. Template components should be lightweight shells (content comes in later phases).
**Warning signs:** Build times increasing beyond 5 minutes during development.

### Pitfall 4: Homepage Not Handled by [slug] Route
**What goes wrong:** The homepage (`/`) returns 404 because it doesn't match `[slug]`.
**Why it happens:** `[slug]` matches single-segment URLs like `/roof-repair` but NOT the root `/`.
**How to avoid:** Keep `app/page.tsx` as the dedicated homepage. The `[slug]` route handles everything else.
**Warning signs:** Trying to register an empty string slug in the registry.

### Pitfall 5: Tailwind v4 @import Order
**What goes wrong:** Custom styles don't apply or are overridden unexpectedly.
**Why it happens:** In Tailwind v4, `@import "tailwindcss"` must come before `@theme` declarations.
**How to avoid:** Always structure globals.css as: `@import "tailwindcss"` first, then `@theme {}`, then any custom `@layer` rules.
**Warning signs:** Utility classes not generating for custom theme values.

### Pitfall 6: Cormorant vs Cormorant Garamond Confusion
**What goes wrong:** Using the wrong font for headings vs body, or importing only one.
**Why it happens:** Cormorant is a display font family. Cormorant Garamond is a separate variant optimized for body text with larger counter spaces.
**How to avoid:** Import both: `Cormorant` for headings (display weight, more decorative) and `Cormorant_Garamond` for body text (more readable at small sizes). They are separate imports from `next/font/google`.
**Warning signs:** Body text looking too decorative, or headings lacking character.

## Code Examples

### Complete Zod Schema for Services
```typescript
// src/lib/schemas.ts
import { z } from 'zod';

export const ServiceCategorySchema = z.enum([
  'repair-maintenance',
  'residential-roof-types',
  'commercial-roof-types',
  'components-specialty',
  'energy-solar',
  'commercial-services',
  'design-consultation',
  'replacement-sub-pages',
]);

export const ServiceSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  category: ServiceCategorySchema,
  parentId: z.string().nullable(),
  isResidential: z.boolean(),
  isCommercial: z.boolean(),
  shortDescription: z.string(),
  metaTitle: z.string().max(60),
  metaDescription: z.string().max(160),
});

export const CitySchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  state: z.literal('NJ'),
  county: z.literal('Essex'),
  isHQ: z.boolean().default(false),
  zipCodes: z.array(z.string()),
  adjacentCityIds: z.array(z.string()),
});

export const ComboSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  serviceId: z.string(),
  cityId: z.string(),
  metaTitle: z.string().max(60),
  metaDescription: z.string().max(160),
});

// Inferred types -- use these throughout the app
export type Service = z.infer<typeof ServiceSchema>;
export type City = z.infer<typeof CitySchema>;
export type Combo = z.infer<typeof ComboSchema>;
export type ServiceCategory = z.infer<typeof ServiceCategorySchema>;
```

### Slug Generation Utilities
```typescript
// src/lib/slug-utils.ts

/**
 * Normalize a string into a URL-safe slug.
 * Handles accents, special characters, and multiple spaces/hyphens.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9\s-]/g, '')    // Remove special chars
    .replace(/[\s_]+/g, '-')          // Spaces/underscores to hyphens
    .replace(/-+/g, '-')              // Collapse multiple hyphens
    .replace(/^-|-$/g, '');           // Trim leading/trailing hyphens
}

/**
 * Generate a combo page slug: {service-slug}-{city-slug}-nj
 * Example: "roof-repair-montclair-nj"
 */
export function generateComboSlug(serviceSlug: string, citySlug: string): string {
  return `${serviceSlug}-${citySlug}-nj`;
}

/**
 * Generate a city page slug: "roofing-in-{city}-nj"
 * Example: "roofing-in-montclair-nj"
 */
export function generateCitySlug(cityName: string): string {
  return `roofing-in-${slugify(cityName)}-nj`;
}
```

### PostCSS Configuration (Tailwind v4)
```javascript
// postcss.config.mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
```

### Next.js Configuration
```typescript
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Turbopack is default in Next.js 16 -- no flag needed
  // React Compiler for automatic memoization (optional but recommended)
  reactCompiler: true,
};

export default nextConfig;
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Next.js 15 sync params | Next.js 16 async params (Promise) | Next.js 16.0 (late 2025) | Must `await params` in all page/layout components |
| `middleware.ts` | `proxy.ts` | Next.js 16.0 | File renamed, function renamed, edge runtime removed |
| `tailwind.config.js` | `@theme` in CSS | Tailwind v4 (early 2025) | No JS config file needed |
| `@tailwind base/components/utilities` | `@import "tailwindcss"` | Tailwind v4 | Single import replaces three directives |
| `next lint` command | Direct ESLint CLI | Next.js 16.0 | `next lint` removed entirely |
| Webpack (default) | Turbopack (default) | Next.js 16.0 | 10x faster builds; use `--webpack` to opt out |
| `getStaticPaths` (Pages Router) | `generateStaticParams` (App Router) | Next.js 13+ | Return objects not `{ paths, fallback }` |

**Deprecated/outdated:**
- `tailwind.config.js` / `tailwind.config.ts`: Replaced by CSS `@theme` directive in v4
- `middleware.ts`: Renamed to `proxy.ts` in Next.js 16
- `next lint`: Removed in Next.js 16, use ESLint directly
- Synchronous `params` access: Fully removed in Next.js 16
- `experimental.turbopack`: Now top-level `turbopack` config
- `serverRuntimeConfig` / `publicRuntimeConfig`: Removed, use env variables

## Open Questions

1. **Next.js version: 15 or 16?**
   - What we know: Requirements specify "Next.js 15" but current stable is 16.1.x. For a new project, Next.js 16 is the correct choice.
   - What's unclear: Whether the user specifically wants Next.js 15 for some reason.
   - Recommendation: Use Next.js 16. All code patterns in this research use Next.js 16 conventions. If the user insists on v15, the async params pattern still works (it was introduced in v15 as the future path) but Turbopack and proxy rename would not apply.

2. **Zod version: 3.24 vs 4.x?**
   - What we know: Zod 4.3.6 is latest. Zod 3.24 has 40M+ weekly downloads and is battle-tested.
   - What's unclear: Whether Zod 4 has any gotchas for this use case.
   - Recommendation: Use Zod 3.24 for maximum stability. The schemas here are straightforward and don't need Zod 4 features like `z.xor()` or `z.templateLiteral()`.

3. **Cormorant font import names**
   - What we know: Cormorant and Cormorant Garamond are separate families on Google Fonts. The `next/font/google` import convention uses PascalCase with underscores for spaces.
   - What's unclear: The exact import name has not been verified in the Next.js source. Standard convention would be `Cormorant` and `Cormorant_Garamond`.
   - Recommendation: Test during setup. If `Cormorant_Garamond` doesn't work, try `CormorantGaramond` or fall back to `next/font/local` with downloaded font files.

4. **Build times for 1,697 pages**
   - What we know: Turbopack in Next.js 16 significantly speeds up builds. The pages are template-driven with no external data fetching.
   - What's unclear: Exact build times for this page count on Vercel.
   - Recommendation: Test early. If builds exceed 10 minutes, implement phased page generation or consider ISR for lower-priority combo pages.

## Sources

### Primary (HIGH confidence)
- [Next.js generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params) - SSG pattern, dynamicParams, async params
- [Next.js Dynamic Routes](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes) - [slug] vs [...slug] conventions, TypeScript typing
- [Next.js v16 Upgrade Guide](https://nextjs.org/docs/app/guides/upgrading/version-16) - Breaking changes, async params, proxy rename, Turbopack default
- [Next.js Font Optimization](https://nextjs.org/docs/app/getting-started/fonts) - next/font/google setup, CSS variables, multiple fonts
- [Tailwind CSS v4 Next.js Guide](https://tailwindcss.com/docs/guides/nextjs) - Installation, PostCSS config, @import syntax
- [Tailwind CSS @theme](https://tailwindcss.com/docs/theme) - Design token definition, namespace conventions, CSS custom properties

### Secondary (MEDIUM confidence)
- [Vercel build time optimization](https://vercel.com/kb/guide/how-do-i-reduce-my-build-time-with-next-js-on-vercel) - Guidance for 1000+ page sites
- [Zod documentation](https://zod.dev/) - Schema API, z.infer, version 4 features
- [Cormorant font family](https://github.com/CatharsisFonts/Cormorant) - 9 styles, 5 weights, variable font support

### Tertiary (LOW confidence)
- Font import name convention (`Cormorant_Garamond`) - Based on Next.js naming pattern inference, not directly verified in source code

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Verified via official Next.js 16 docs, Tailwind v4 docs, Zod docs
- Architecture: HIGH - Patterns sourced from official Next.js documentation examples
- Pitfalls: HIGH - Breaking changes verified in official v16 upgrade guide
- Font setup: MEDIUM - Cormorant/Cormorant_Garamond import names inferred from convention, not directly verified
- Build performance: MEDIUM - Extrapolated from Vercel guidance, not tested for this exact page count

**Research date:** 2026-03-05
**Valid until:** 2026-04-05 (30 days - Next.js 16 is stable, unlikely to break)
