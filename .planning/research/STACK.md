# Technology Stack

**Project:** Newark Quality Roofing - Programmatic SEO Lead Generation Website
**Researched:** 2026-03-05 (Updated)
**Overall Confidence:** HIGH

---

## Recommended Stack

### Core Framework

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Next.js | 16.1.x (LTS) | Full-stack React framework, SSG engine | Current LTS (16.1.6). `generateStaticParams` handles ~1,700 pages at build time. App Router is the standard. Vercel-native deployment means zero config. Next.js 16 brings stable Turbopack builds and improved caching -- both benefit a 1,700-page static build. | HIGH |
| React | 19.x | UI library (ships with Next.js 16) | Server Components reduce client JS. Built-in form actions (`useActionState`, `useFormStatus`) simplify lead capture forms without third-party form libraries. | HIGH |
| TypeScript | 5.5+ | Type safety | Non-negotiable for 1,700-page data-driven sites. Catches slug/route mismatches at compile time. `schema-dts` gives typed JSON-LD. | HIGH |

**Why Next.js 16 over 15:** Next.js 16 (released Oct 2025, LTS 16.1.6 as of Feb 2026) brings Turbopack as the default bundler -- this directly speeds up dev server and builds for a 1,700-page site. The 15.x line is now the previous release. For a greenfield project, start on the current LTS.

**Why NOT Pages Router:** App Router is the standard for new projects since 2024. Server Components, nested layouts, and the built-in Metadata API are critical for programmatic SEO at scale.

**Why NOT Astro:** Astro excels at content sites but lacks React Server Components, Server Actions, and Vercel-native integration that simplifies the GoHighLevel CRM pipeline. Next.js handles both static generation AND server-side form processing in one framework.

### Styling

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Tailwind CSS | 4.2.x | Utility-first CSS | v4 is 5x faster full builds, 100x faster incremental builds. Zero-config CSS import (`@import "tailwindcss"`). Native `@property` support for design tokens. CSS-first `@theme` replaces `tailwind.config.js`. Released Feb 2026 with new color palettes. | HIGH |
| clsx | 2.x | Conditional class joining | Lightweight, standard utility for dynamic Tailwind classes. | HIGH |
| tailwind-merge | 3.x | Tailwind conflict resolution | Prevents class priority conflicts when composing components (e.g., base + variant styles). | HIGH |

**Utility function (create `lib/utils.ts`):**
```typescript
import { twMerge } from 'tailwind-merge';
import clsx, { type ClassValue } from 'clsx';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
```

**Why NOT CSS Modules:** Tailwind is already decided. CSS Modules add unnecessary complexity alongside utility classes.

**Why NOT styled-components / Emotion:** Runtime CSS-in-JS is incompatible with React Server Components and adds JS bundle weight -- antithetical to SEO performance goals.

### Typography

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| next/font (built-in) | -- | Font loading & optimization | Self-hosts Google Fonts at build time. Zero external requests. Automatic subsetting. No layout shift. | HIGH |

**Font Configuration:**
```typescript
import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google';

const heading = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const body = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-body',
  display: 'swap',
});
```

Cormorant Garamond is available via `next/font/google`. Source Sans 3 pairs well as a clean, readable body font for the Editorial Trust aesthetic.

### Animation

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| motion | 12.x | React animation library | Formerly Framer Motion, rebranded Nov 2024. Install `motion` not `framer-motion`. Orchestrated page loads, scroll-triggered reveals, hover micro-interactions. | HIGH |
| CSS animations | -- | Simple transitions | Prefer CSS for hover states, focus rings, and simple transforms. Reserve Motion for orchestrated sequences. | HIGH |

**Why `motion` not `framer-motion`:** Same library, new package name. `framer-motion` still works but `motion` is the actively maintained package. The npm package is `motion`.

**Reduced motion:** Always wrap Motion animations with `prefers-reduced-motion` media query support. Motion library has a `MotionConfig` component for this.

### Content Data Layer

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| TypeScript data files (.ts) | -- | Content database for 1,697 pages | No CMS needed. All content is template-driven from structured data (services[], cities[], combinations[]). TypeScript gives compile-time validation. Simple, zero-dependency, git-tracked. | HIGH |
| Zod | 4.3.x | Schema validation for content data | Validates that every service/city combination has required fields (title, meta, H1, content blocks) before build. Catches missing data at build time, not in production. 2kb gzipped core. | HIGH |

**Data architecture:**
```
src/data/
  services.ts        # 63 service definitions with content templates
  cities.ts          # 21 city records with geo data, descriptions
  combinations.ts    # Cross-product generator with unique content per combo
  comparisons.ts     # 30 comparison page data
  articles.ts        # 252 supporting article data
  schemas.ts         # Zod schemas for all content types
```

**Content pattern:**
```typescript
// data/services.ts
export const services: Service[] = [
  {
    slug: 'roof-replacement',
    name: 'Roof Replacement',
    metaTitle: '{city} Roof Replacement Services | Newark Quality Roofing',
    h1Template: 'Professional Roof Replacement in {city}, NJ',
    // ... content blocks, FAQ templates, schema data
  }
];
```

This gives: compile-time validation, zero API calls, instant builds, git-tracked content changes, and unlimited customization of the content generation logic.

**Why NOT Contentlayer:** Abandoned project. Does not support Next.js 14+. Do not use.

**Why NOT a CMS (Sanity, Strapi, Contentful):** Massive overkill. Content is formulaic (service x city combinations). No editorial workflow needed. CMS adds build-time API dependency, latency, and cost. TypeScript files give full control over programmatic generation logic.

**Why NOT MDX / next-mdx-remote:** Programmatic SEO content is generated from data objects, not authored as prose documents. MDX is the wrong abstraction for template-driven page generation.

### SEO Infrastructure

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Next.js Metadata API | Built-in | `<title>`, `<meta>`, canonical URLs, Open Graph | Native to App Router. `generateMetadata` produces unique meta per page from the same data source as `generateStaticParams`. No library needed. | HIGH |
| schema-dts | latest | TypeScript types for JSON-LD structured data | Google-maintained. Provides typed `LocalBusiness`, `Service`, `FAQPage`, `Review`, `BreadcrumbList` schemas. Prevents invalid markup at compile time. | HIGH |
| Next.js sitemap.ts | Built-in | XML sitemap generation | App Router supports `sitemap.ts` file convention with `generateSitemaps()` for splitting large sitemaps. No need for `next-sitemap` (unmaintained, last published 2+ years ago). | HIGH |
| robots.ts | Built-in | robots.txt generation | Native App Router file convention. Zero dependencies. | HIGH |

**JSON-LD implementation pattern:**
```typescript
import type { LocalBusiness, WithContext } from 'schema-dts';

const jsonLd: WithContext<LocalBusiness> = {
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  name: 'Newark Quality Roofing',
  areaServed: [/* 21 Essex County cities */],
  // ...
};

return (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    {/* page content */}
  </>
);
```

**Why NOT next-sitemap:** The npm package (v4.2.3) has not been updated in 2+ years. Next.js App Router's built-in `sitemap.ts` and `generateSitemaps()` handle the same use case natively with sitemap splitting for large sites.

**Why NOT next-seo:** Redundant. Next.js Metadata API does everything next-seo did, built-in. The package is a legacy pattern.

### Forms & Lead Capture

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| React Hook Form | 7.x | Client-side form handling | Performant uncontrolled inputs (minimal re-renders). Provides inline validation UX, field-level errors, and multi-step form capability if needed. | HIGH |
| Zod | 4.3.x | Form validation (shared client/server) | Same Zod schemas validate both content data and form submissions. Single validation library for the entire project. | HIGH |
| @hookform/resolvers | 5.x | Zod-to-RHF bridge | Connects Zod schemas to React Hook Form for automatic validation. | HIGH |
| Next.js Server Actions | Built-in | Form submission handler | Server-side processing. Validates with Zod, then POSTs to GoHighLevel. No separate API route needed. API keys stay server-side. | HIGH |

**Why React Hook Form over plain React 19 actions:** React 19's built-in form handling (`useActionState`) works for simple cases, but React Hook Form adds critical UX: inline field validation as users type, field-level error messages, and form state management (dirty/touched/valid). For a lead gen site where conversion rate matters, the UX polish justifies the ~10kb dependency.

**Why NOT Formik:** Formik uses controlled components (more re-renders), is heavier, and has slower community momentum compared to React Hook Form.

### CRM Integration

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| GoHighLevel API v2 | v2 | Lead management CRM | Project requirement. V1 is end-of-support. Use V2 REST API. | MEDIUM |
| GoHighLevel Inbound Webhooks | -- | Form submission endpoint | Simplest integration path. Configure an Inbound Webhook trigger in a GHL Workflow. POST form data to the webhook URL from Server Actions. No OAuth flow needed for this pattern. | MEDIUM |

**Integration pattern:**
```typescript
// lib/gohighlevel.ts
export async function submitLead(data: LeadFormData) {
  const response = await fetch(process.env.GHL_WEBHOOK_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      city: data.city,
      source: 'website',
    }),
  });

  if (!response.ok) throw new Error('Lead submission failed');
  return response.json();
}
```

**Two integration paths (choose based on GHL plan):**
1. **Webhook (simpler):** Inbound Webhook trigger in GHL Workflow. No auth needed. Best for MVP.
2. **API v2 (richer):** OAuth 2.0, POST to `/contacts` endpoint. Enables reading back data, updating contacts, creating opportunities. Use if you need bidirectional sync.

Store credentials in Vercel Environment Variables (scoped per environment).

### Icons & Images

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| lucide-react | latest | SVG icon library | Tree-shakable, renders inline SVG (no image requests). 1,500+ icons including home, phone, shield, star, map-pin -- all needed for roofing/service sites. | HIGH |
| next/image | Built-in | Image optimization | Automatic WebP/AVIF conversion, responsive srcset, lazy loading. Use `priority` prop for above-fold hero images. Vercel handles image CDN. | HIGH |
| sharp | 0.34.x | Image processing engine | Required by Next.js for production image optimization. Install explicitly for Vercel builds. | HIGH |

**Why NOT react-icons:** react-icons bundles entire icon sets, bloating client JS. lucide-react is tree-shakable by default -- only icons you import are included.

**Why NOT Cloudinary/Imgix:** For a static site with curated stock photos, `next/image` + sharp handles optimization at build/request time on Vercel. External image CDNs add cost and complexity without benefit at this scale.

### Analytics & Tracking

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| @next/third-parties | latest | Google Analytics (GA4) / GTM | Official Vercel package. Loads GA/GTM scripts optimally with worker offloading. Better than manual `<Script>` tags. | HIGH |
| @vercel/analytics | latest | Web analytics + Core Web Vitals | Zero-config on Vercel. Tracks LCP, FID, CLS -- critical metrics for SEO ranking. Free tier sufficient for lead gen traffic. | HIGH |
| @vercel/speed-insights | latest | Real-user performance monitoring | Complements analytics with field performance data. Catches SSG performance regressions after deploys. | MEDIUM |
| Google Tag Manager | -- | Conversion tracking, click-to-call | Standard for lead gen. Track phone clicks, form submissions, page-level engagement. Configured via GTM dashboard, no code changes for new tracking. | HIGH |

**Click-to-call tracking pattern:**
```typescript
<a
  href="tel:+1XXXXXXXXXX"
  onClick={() => {
    window.dataLayer?.push({ event: 'click_to_call', page: pathname });
  }}
>
```

### Development Tools

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| ESLint | 9.x | Code quality | Next.js 16 ships with flat config ESLint. `next lint` handles Next.js-specific rules (image alt, link usage, metadata). | HIGH |
| Prettier | 3.x | Code formatting | Consistency across 50+ template files and data files. | HIGH |
| prettier-plugin-tailwindcss | latest | Tailwind class ordering | Automatically sorts utility classes. Prevents style conflicts and improves readability in reviews. | HIGH |

### Deployment & Hosting

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Vercel | -- | Hosting + CDN + CI/CD | Project requirement. SSG pages served from edge CDN (~sub-100ms TTFB). Automatic preview deployments. Free SSL. Built-in image optimization. ~1,700 static pages deploy in 2-5 minutes. | HIGH |
| GitHub | -- | Source control + CI trigger | Vercel auto-deploys from GitHub pushes. PR previews for content review. | HIGH |
| Vercel Environment Variables | -- | Secrets management | GoHighLevel API keys/webhook URLs, GA tracking IDs. Scoped per environment (production, preview, development). | HIGH |

---

## What NOT to Use

| Technology | Why Avoid |
|------------|-----------|
| **Contentlayer** | Abandoned project. Incompatible with Next.js 14+. Do not use under any circumstances. |
| **next-sitemap** | Unmaintained (2+ years since last publish). Use native `sitemap.ts`. |
| **next-seo** | Redundant. Next.js Metadata API replaces it entirely. Legacy pattern. |
| **framer-motion (package name)** | Use `motion` package instead (same library, rebranded Nov 2024). |
| **styled-components / Emotion** | Runtime CSS-in-JS incompatible with Server Components. Adds client bundle weight. |
| **Prisma / Drizzle / any ORM** | No database. Content lives in TypeScript data files. |
| **Headless CMS (Sanity, Strapi)** | Unnecessary complexity, cost, and build-time API dependency for infrequently-changing static content. |
| **Redux / Zustand** | No complex client state. Forms use React Hook Form. Page data is server-rendered. |
| **react-helmet** | Pages Router era. Not compatible with App Router. |
| **GoHighLevel API v1** | End-of-support. Must use v2. |
| **Tailwind CSS v3** | v3 requires PostCSS plugin + `tailwind.config.js`. v4 is zero-config with CSS-native `@theme`. No reason to start a new project on v3. |

---

## Installation

```bash
# Initialize Next.js 16 project with TypeScript, Tailwind, and ESLint
npx create-next-app@latest newark-quality-roofing \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

cd newark-quality-roofing

# Core dependencies
npm install motion zod schema-dts react-hook-form @hookform/resolvers sharp clsx tailwind-merge lucide-react

# Vercel integrations
npm install @vercel/analytics @vercel/speed-insights @next/third-parties

# Dev dependencies
npm install -D prettier prettier-plugin-tailwindcss
```

---

## Tailwind v4 Theme Setup

In `src/app/globals.css` (replaces `tailwind.config.js`):

```css
@import "tailwindcss";

@theme {
  /* Brand Colors - Editorial Trust Palette */
  --color-forest: #2D5016;
  --color-forest-dark: #1A3009;
  --color-forest-light: #3D6B20;
  --color-copper: #B87333;
  --color-copper-light: #D4956A;
  --color-copper-dark: #8B5A2B;
  --color-parchment: #F5F0E8;
  --color-parchment-dark: #E8DFD0;
  --color-charcoal: #2C2C2C;
  --color-charcoal-light: #4A4A4A;

  /* Typography */
  --font-heading: var(--font-heading);
  --font-body: var(--font-body);

  /* Shadows - Editorial depth */
  --shadow-editorial: 0 1px 3px rgba(44, 44, 44, 0.08), 0 4px 12px rgba(44, 44, 44, 0.04);
  --shadow-elevated: 0 4px 16px rgba(44, 44, 44, 0.12), 0 8px 32px rgba(44, 44, 44, 0.06);
}
```

---

## Project Structure

```
src/
  app/
    layout.tsx                    # Root layout: fonts, analytics, GTM
    page.tsx                      # Homepage
    sitemap.ts                    # Dynamic sitemap with generateSitemaps()
    robots.ts                     # robots.txt
    [service]/
      page.tsx                    # 63 service pages via generateStaticParams
    [city]/
      page.tsx                    # 21 city pages via generateStaticParams
    [service]/[city]/
      page.tsx                    # 1,323 service x city combos
    compare/
      [slug]/page.tsx             # 30 comparison pages
    blog/
      [slug]/page.tsx             # 252 supporting articles
    about/page.tsx
    contact/page.tsx
    privacy/page.tsx
    terms/page.tsx
    actions/
      lead.ts                    # Server Action: form submission -> GHL
  components/
    ui/                          # Button, Card, Badge, etc.
    seo/                         # JsonLd, Breadcrumbs, SchemaMarkup
    forms/                       # LeadForm, QuoteForm, ContactForm
    layout/                      # Header, Footer, Nav, MobileMenu
    sections/                    # Hero, ServiceGrid, CityGrid, CTABanner
  data/
    services.ts                  # Service definitions
    cities.ts                    # City definitions with Essex County data
    combinations.ts              # Service x city data generator
    comparisons.ts               # Comparison page data
    articles.ts                  # Blog/article data
    schemas.ts                   # Zod schemas for all content types
  lib/
    utils.ts                     # cn() helper, formatting utilities
    gohighlevel.ts               # GHL API client
    seo.ts                       # SEO utility functions (meta generators)
    linking.ts                   # Internal linking engine (reverse silo)
    content.ts                   # Data access functions with Zod validation
```

---

## Version Pinning Strategy

Pin major versions, allow minor/patch updates via caret (`^`):

```json
{
  "dependencies": {
    "next": "^16.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "motion": "^12.0.0",
    "zod": "^4.3.0",
    "schema-dts": "^1.1.0",
    "react-hook-form": "^7.0.0",
    "@hookform/resolvers": "^5.0.0",
    "sharp": "^0.34.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^3.0.0",
    "lucide-react": "^0.400.0",
    "@vercel/analytics": "^1.0.0",
    "@vercel/speed-insights": "^1.0.0",
    "@next/third-parties": "^16.0.0"
  }
}
```

---

## Key Technical Decisions

### 1. TypeScript Data Files Over CMS (HIGH confidence)

For programmatic SEO with formulaic content (63 services x 21 cities = 1,323 combos), structured TypeScript objects are superior to any CMS. This gives: compile-time validation, zero API calls at build, instant builds, git-tracked content changes, and unlimited customization of content generation logic.

### 2. React Hook Form + Server Actions for Lead Capture (HIGH confidence)

The combination provides the best of both worlds:
- **Client-side:** React Hook Form gives inline validation UX (field-level errors as users type) for better conversion rates
- **Server-side:** Server Actions validate with Zod and POST to GoHighLevel securely (no exposed API keys, no CORS issues)
- **Progressive enhancement:** Forms work without JavaScript via Server Actions

### 3. Build-Time Everything / Full SSG (HIGH confidence)

At ~1,700 pages, build times on Vercel should be 2-5 minutes. No ISR needed since content changes are infrequent. Full static generation means:
- Zero server costs (Vercel hobby/pro plan sufficient)
- Edge CDN delivery (sub-100ms TTFB globally)
- Perfect Lighthouse scores achievable
- Google crawls static HTML instantly
- No cold starts, no server-side rendering at request time

### 4. Flat URL Structure with App Router (HIGH confidence)

The App Router's file-system routing maps cleanly to the flat URL structure:
- `/roof-replacement` (service) -> `app/[service]/page.tsx`
- `/newark` (city) -> `app/[city]/page.tsx`
- `/roof-replacement/newark` (combo) -> `app/[service]/[city]/page.tsx`

`generateStaticParams` in each route produces all valid slugs at build time. Invalid slugs return 404 automatically.

---

## Sources

### HIGH Confidence (Official Documentation)
- [Next.js 16 Release Blog](https://nextjs.org/blog/next-16) -- Version details, Turbopack default
- [Next.js 16.1 Release](https://nextjs.org/blog/next-16-1) -- LTS release details
- [Next.js generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params) -- SSG for dynamic routes
- [Next.js generateSitemaps](https://nextjs.org/docs/app/api-reference/functions/generate-sitemaps) -- Built-in sitemap splitting
- [Next.js JSON-LD Guide](https://nextjs.org/docs/app/guides/json-ld) -- Structured data with schema-dts
- [Next.js Font Optimization](https://nextjs.org/docs/app/getting-started/fonts) -- next/font with Google Fonts
- [Next.js Analytics Guide](https://nextjs.org/docs/app/guides/analytics) -- @next/third-parties for GA4
- [Tailwind CSS v4.0 Release](https://tailwindcss.com/blog/tailwindcss-v4) -- v4 architecture, CSS-first config
- [Tailwind CSS v4.2 Colors](https://laravel-news.com/tailwindcss-4-2-0) -- Latest v4.2 release (Feb 2026)
- [Zod v4 Documentation](https://zod.dev/v4) -- v4 release, 2kb core
- [React Hook Form](https://react-hook-form.com/) -- Form library docs
- [Lucide React Guide](https://lucide.dev/guide/packages/lucide-react) -- Tree-shakable SVG icons
- [GoHighLevel API v2 Docs](https://marketplace.gohighlevel.com/docs/) -- REST API documentation

### MEDIUM Confidence (Verified via Multiple Sources)
- [schema-dts on npm](https://www.npmjs.com/package/schema-dts) -- Google-maintained Schema.org types
- [next-sitemap on npm](https://www.npmjs.com/package/next-sitemap) -- Last published 2+ years ago (confirms staleness)
- [GoHighLevel API Integration Guide](https://isitdev.com/gohighlevel-api-integration-2025/) -- OAuth 2.0 and webhook patterns
- [Motion for React (rebranded Framer Motion)](https://motion.dev/docs/react) -- Package name change documentation
