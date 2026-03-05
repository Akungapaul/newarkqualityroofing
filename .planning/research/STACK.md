# Technology Stack

**Project:** Newark Quality Roofing - Lead Generation Website
**Researched:** 2026-03-05
**Overall Confidence:** HIGH

---

## Recommended Stack

### Core Framework

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Next.js | 15.x (latest stable) | Full-stack React framework | Mature SSG with `generateStaticParams`, battle-tested on Vercel, superior SEO defaults with App Router. Next.js 16 exists but 15.x is the safer bet for a site that needs to ship fast -- 16's Turbopack improvements matter less for a static-heavy site. | HIGH |
| React | 19.x | UI library | Ships with Next.js 15. Server Components reduce client JS bundle for better Core Web Vitals. | HIGH |
| TypeScript | 5.x | Type safety | Non-negotiable for a 1,700-page data layer. Catches content schema errors at build time. | HIGH |

**Why NOT Next.js 16:** Next.js 16 (released late 2025) brings Turbopack as default bundler and Cache Components. For a static-first lead gen site, these are marginal gains. The 15.x ecosystem is more mature with more community examples and fewer edge-case bugs. Upgrade path is straightforward later.

**Why NOT Pages Router:** App Router is the standard for new projects in 2025-2026. Server Components, nested layouts, and built-in metadata API are critical for programmatic SEO at scale.

### Styling

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Tailwind CSS | 4.x | Utility-first CSS | v4 ships a Rust-based engine with 5x faster builds. Single `@import "tailwindcss"` setup. CSS-first configuration replaces `tailwind.config.js`. | HIGH |
| clsx | 2.x | Conditional class joining | Lightweight, standard utility for dynamic classes. | HIGH |
| tailwind-merge | 3.x | Tailwind conflict resolution | Prevents class priority conflicts when composing components. | HIGH |

**Utility function (create `lib/utils.ts`):**
```typescript
import { twMerge } from 'tailwind-merge';
import clsx, { type ClassValue } from 'clsx';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
```

**Why NOT CSS Modules:** Tailwind is already decided. CSS Modules add unnecessary complexity alongside utility classes.

**Why NOT styled-components:** Runtime CSS-in-JS is incompatible with React Server Components and adds JS bundle weight -- antithetical to SEO performance goals.

### Typography

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| next/font (built-in) | -- | Font loading & optimization | Self-hosts Google Fonts from same domain (no external requests to Google). Automatic `font-display: swap`. Zero layout shift. | HIGH |

**Font Configuration:**
```typescript
import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});
```

Cormorant Garamond is available on Google Fonts and fully supported by `next/font`. No external CDN needed.

### Animation

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| motion | 12.x | React animation library | Formerly Framer Motion, rebranded Nov 2024. Install `motion` not `framer-motion`. Orchestrated page loads, scroll-triggered reveals, hover micro-interactions. | HIGH |
| CSS animations | -- | Simple transitions | Prefer CSS for hover states, focus rings, and simple transforms. Reserve Motion for orchestrated sequences. | HIGH |

**Why `motion` not `framer-motion`:** Same library, new package name. `framer-motion` still works but `motion` is the actively maintained package going forward. The npm package is `motion`.

### Content Data Layer

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Local TypeScript/JSON | -- | Content schema & data | For programmatic SEO with structured data (63 services x 21 cities), a custom data layer using TypeScript types + JSON/TS data files is simpler and more controllable than any content framework. | HIGH |
| Zod | 4.x | Schema validation | Validates content data at build time. Catches missing fields, malformed content before deploy. v4 released 2025 with improved performance. | HIGH |

**Data architecture:**
```
/content/
  cities.ts          # 21 city records with geo data, descriptions
  services.ts        # 63 service definitions
  combinations.ts    # Generated cross-product with unique content per combo
  comparisons.ts     # Comparison page content
  articles.ts        # Supporting article content
/lib/
  content.ts         # Data access functions, validation
  schema.ts          # Zod schemas for all content types
```

**Why NOT Contentlayer:** Abandoned/unmaintained since Stackbit acquisition by Netlify. Incompatible with Next.js App Router. Do not use.

**Why NOT Velite or Content Collections:** Overkill for this use case. These shine for MDX-heavy blogs. This project has structured data (cities x services), not prose documents. Plain TypeScript gives full control over the cross-product generation logic.

**Why NOT a CMS (Sanity, Strapi, etc.):** Adds deployment complexity, API dependency at build time, and cost -- all unnecessary for content that changes infrequently. Content lives in the repo, deploys are atomic and fast.

### SEO & Structured Data

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Next.js Metadata API (built-in) | -- | `<title>`, `<meta>`, Open Graph | Built into App Router. Per-page metadata via `generateMetadata()`. Dynamic titles/descriptions per city+service combo. | HIGH |
| Next.js sitemap.ts (built-in) | -- | XML sitemaps | `generateSitemaps()` splits across multiple sitemap files automatically. No external package needed for 1,700 pages. | HIGH |
| schema-dts | 1.x | TypeScript types for Schema.org | Google-maintained package. Provides type-safe JSON-LD generation for LocalBusiness, Service, FAQ, Review schemas. | MEDIUM |

**Why NOT next-sitemap:** The npm package `next-sitemap` (v4.2.3) hasn't been updated in 2+ years. Next.js now has built-in `sitemap.ts` and `generateSitemaps()` that handle the same use case natively, including sitemap splitting for large sites.

**JSON-LD implementation pattern:**
```typescript
// In page.tsx
import type { LocalBusiness, WithContext } from 'schema-dts';

const jsonLd: WithContext<LocalBusiness> = {
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  name: 'Newark Quality Roofing',
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

### Forms & Lead Capture

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| React Hook Form | 7.x | Client-side form handling | Performant, uncontrolled inputs by default (minimal re-renders). Works with React 19 for client-side validation. | HIGH |
| Zod | 4.x | Form validation schemas | Same Zod used for content validation. Share schemas between client and server for consistent validation. | HIGH |
| @hookform/resolvers | 5.x | Zod-to-RHF bridge | Connects Zod schemas to React Hook Form for automatic validation. | HIGH |
| Next.js Server Actions | -- | Form submission handler | Server-side form processing. Validates with Zod, then POST to GoHighLevel webhook. No separate API route needed. | HIGH |

**GoHighLevel integration:**
```typescript
// Server Action
'use server';

export async function submitLeadForm(formData: FormData) {
  const validated = leadSchema.parse(Object.fromEntries(formData));

  await fetch(process.env.GHL_WEBHOOK_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(validated),
  });
}
```

GoHighLevel accepts inbound webhooks via Workflow Triggers. The webhook URL is configured in GHL's workflow builder and stored as an environment variable. No OAuth or API key needed for simple form submissions.

**Why NOT native `<form action>`:** React Hook Form adds client-side validation UX (inline errors, field-level validation) that Server Actions alone don't provide. The combination gives instant client feedback + secure server validation.

### Image Optimization

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| next/image (built-in) | -- | Image component | Automatic WebP/AVIF conversion, responsive srcset, lazy loading. | HIGH |
| sharp | 0.34.x | Image processing engine | Required by Next.js for production image optimization. Reduces file size 40-70%. Install explicitly. | HIGH |

**Why NOT Cloudinary/Imgix:** For a static site with curated stock photos, `next/image` + sharp handles optimization at build/request time on Vercel. External image CDNs add cost and complexity without benefit for this scale.

### Analytics & Tracking

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| @vercel/analytics | latest | Web analytics | Zero-config on Vercel. Privacy-friendly. Core Web Vitals tracking. | MEDIUM |
| Google Tag Manager | -- | Click-to-call tracking, conversion pixels | Standard for lead gen. Track phone clicks, form submissions. Load via `next/script` with `afterInteractive` strategy. | HIGH |

**Click-to-call tracking:**
```typescript
// Track tel: link clicks via GTM dataLayer
<a
  href="tel:+1XXXXXXXXXX"
  onClick={() => {
    window.dataLayer?.push({ event: 'click_to_call', page: pathname });
  }}
>
```

### Deployment

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Vercel | -- | Hosting & CDN | Already decided. Native Next.js support, automatic preview deploys, edge CDN. ISR support if needed later. | HIGH |
| GitHub | -- | Source control | Standard. Vercel auto-deploys from GitHub pushes. | HIGH |

---

## Dev Dependencies

| Package | Version | Purpose | Why |
|---------|---------|---------|-----|
| eslint | 9.x | Linting | Next.js ships eslint-config-next. Flat config format in v9. |
| prettier | 3.x | Code formatting | Consistent formatting across content files. |
| prettier-plugin-tailwindcss | 0.6.x | Tailwind class sorting | Automatic consistent class ordering. |
| @types/node | 22.x | Node.js types | TypeScript support. |

---

## What NOT to Use

| Technology | Why Not |
|------------|---------|
| Contentlayer | Abandoned. Incompatible with App Router. |
| next-sitemap | Unmaintained (2+ years). Next.js built-in sitemap.ts replaces it. |
| framer-motion (package) | Use `motion` package instead (same library, new name). |
| styled-components / Emotion | Runtime CSS-in-JS incompatible with Server Components. |
| Prisma / Drizzle / any ORM | No database needed. Content is static data in the repo. |
| Headless CMS (Sanity, Strapi) | Unnecessary complexity for infrequently-changing content. |
| Redux / Zustand | No complex client state. Forms use React Hook Form. Page data is server-rendered. |
| next-seo | Deprecated pattern. Next.js Metadata API replaces it entirely. |
| react-helmet | Pages Router era. Not compatible with App Router. |
| Cloudinary / Imgix | next/image + sharp handles this use case on Vercel without external cost. |

---

## Installation

```bash
# Initialize Next.js 15 project
npx create-next-app@latest newark-quality-roofing \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

cd newark-quality-roofing

# Core dependencies
npm install motion zod schema-dts react-hook-form @hookform/resolvers sharp clsx tailwind-merge

# Analytics (optional, can add later)
npm install @vercel/analytics

# Dev dependencies
npm install -D prettier prettier-plugin-tailwindcss
```

---

## Version Pinning Strategy

Pin major versions in `package.json` using caret (`^`) for minor/patch updates:

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "motion": "^12.0.0",
    "zod": "^4.0.0",
    "schema-dts": "^1.0.0",
    "react-hook-form": "^7.0.0",
    "@hookform/resolvers": "^5.0.0",
    "sharp": "^0.34.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^3.0.0"
  }
}
```

---

## Sources

### HIGH Confidence (Official Documentation)
- [Next.js App Router Docs](https://nextjs.org/docs/app) -- Metadata API, generateStaticParams, sitemap.ts, Server Actions
- [Next.js Font Optimization](https://nextjs.org/docs/app/getting-started/fonts) -- next/font with Google Fonts
- [Next.js JSON-LD Guide](https://nextjs.org/docs/app/guides/json-ld) -- Structured data implementation
- [Next.js generateSitemaps](https://nextjs.org/docs/app/api-reference/functions/generate-sitemaps) -- Built-in sitemap splitting
- [Tailwind CSS v4.0](https://tailwindcss.com/blog/tailwindcss-v4) -- v4 release, Rust engine, CSS-first config
- [Motion for React](https://motion.dev/docs/react) -- Rebranded from Framer Motion
- [GoHighLevel Webhook Integration](https://marketplace.gohighlevel.com/docs/webhook/WebhookIntegrationGuide/index.html) -- Inbound webhook triggers
- [React Hook Form](https://react-hook-form.com/) -- Form library documentation
- [Zod](https://zod.dev/v4) -- v4 release notes

### MEDIUM Confidence (Verified via Multiple Sources)
- [schema-dts on npm](https://www.npmjs.com/package/schema-dts) -- Google-maintained Schema.org types
- [Contentlayer abandoned](https://github.com/contentlayerdev/contentlayer/issues/429) -- GitHub issue confirming unmaintained status
- [next-sitemap staleness](https://www.npmjs.com/package/next-sitemap) -- Last published 2+ years ago
- [Programmatic SEO Best Practices 2026](https://appstackbuilder.com/blog/programmatic-seo-guide-2026) -- Content quality requirements
- [Next.js 15 vs 16 comparison](https://www.descope.com/blog/post/nextjs15-vs-nextjs16) -- Version selection rationale
