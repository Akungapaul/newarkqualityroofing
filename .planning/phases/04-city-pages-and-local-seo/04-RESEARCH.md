# Phase 4: City Pages and Local SEO - Research

**Researched:** 2026-03-07
**Domain:** Next.js 16 city landing pages with local SEO, content data architecture, Google Maps embed
**Confidence:** HIGH

## Summary

Phase 4 builds 21 unique city landing pages for Essex County within the existing Next.js 16 + Zod data layer architecture. The codebase already has a solid foundation: the `CityTemplate.tsx` exists as a placeholder skeleton, the `[slug]/page.tsx` dispatcher already routes city slugs (using `roofing-in-{city}-nj` pattern), and 21 cities are Zod-validated in `cities.ts` with `adjacentCityIds` for nearby-city linking. The service content pattern from Phase 3 (Zod-validated content objects, map-based O(1) lookup, category-organized files) provides a proven architecture to replicate for city content.

The primary challenge is the sheer content volume: 21 cities at 2,500+ words each with genuinely unique local narratives, city-specific testimonials, project spotlights, FAQs, and both residential/commercial sections. The architecture must enforce content quality through Zod schema constraints (like Phase 3's `ServiceContentSchema`) while remaining flexible enough to accommodate each city's unique characteristics. The template must handle ~15 distinct sections (hero, stats bar, ToC, overview, residential, commercial, neighborhoods, services grid, testimonials, project spotlights, FAQs, map+NAP, nearby cities, CTA).

**Primary recommendation:** Mirror the Phase 3 service content pattern exactly -- create a `CityContentSchema` in `schemas.ts`, organize content files by geographic grouping (urban-core, suburban, small-towns), and build a `CityTemplate` with ~15 section components that consume validated data objects.

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 16.1.6 | App Router, SSG via `generateStaticParams` | Already in project, city pages use existing `[slug]` catch-all |
| React | 19.2.3 | UI components | Already in project |
| Zod | 3.25.76 | Content schema validation at module load | Already validates services, cities; extend for city content |
| Tailwind CSS | 4.x | Styling with existing design tokens | Already configured with Editorial Trust palette |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Google Maps Embed API | N/A (iframe) | City map embeds | Free, no API key needed for basic place embeds |
| Intersection Observer API | Browser native | Scroll spy for sticky ToC | No library needed, use native API via React hook |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Google Maps Embed iframe | Maps JavaScript API | Embed is free/unlimited, JS API requires key + billing; iframe is sufficient for display-only |
| Custom scroll spy hook | `react-scrollspy` npm package | Custom hook with IntersectionObserver is ~30 lines, avoids dependency for simple use case |
| Separate city route folder | Existing `[slug]` catch-all | Catch-all already works, slug registry handles routing; no new route needed |

**Installation:**
```bash
# No new dependencies needed. Everything uses existing stack.
```

## Architecture Patterns

### Recommended Project Structure
```
src/
├── data/
│   ├── cities.ts                    # Existing 21 cities (unchanged)
│   ├── city-content/
│   │   ├── index.ts                 # Aggregator + Zod validation (mirrors service-content/index.ts)
│   │   ├── urban-core.ts            # Newark, East Orange, Orange, Irvington (4 cities)
│   │   ├── first-suburbs.ts         # Bloomfield, Belleville, Nutley, Maplewood, South Orange (5 cities)
│   │   ├── west-essex.ts            # West Orange, Montclair, Glen Ridge, Verona, Cedar Grove (5 cities)
│   │   ├── caldwells-roseland.ts    # Caldwell, North Caldwell, Essex Fells, Fairfield, Roseland (5 cities)
│   │   └── affluent-suburban.ts     # Livingston, Millburn (2 cities)
│   └── ...
├── components/
│   ├── templates/
│   │   └── CityTemplate.tsx         # Replace placeholder with full template
│   └── sections/
│       ├── CityHero.tsx             # Hero with lead form above fold
│       ├── CityStatsBar.tsx         # "X+ Projects | Serving Since | Rating"
│       ├── CityTableOfContents.tsx  # Sticky ToC with scroll spy (client component)
│       ├── CityOverview.tsx         # Main narrative section
│       ├── CityResidential.tsx      # Residential roofing section
│       ├── CityCommercial.tsx       # Commercial roofing section
│       ├── CityNeighborhoods.tsx    # Neighborhoods grid
│       ├── CityServicesGrid.tsx     # Service categories with links
│       ├── CityTestimonials.tsx     # City-specific testimonial cards
│       ├── CityProjectSpotlights.tsx # Featured case study blocks
│       ├── CityFaqs.tsx             # City-specific FAQ accordion
│       ├── CityMapNap.tsx           # Google Maps iframe + NAP block
│       ├── CityNearbyCities.tsx     # Adjacent city cards with services
│       └── CityCtaBanner.tsx        # Mid/end-page CTA (can reuse ServiceCtaBanner pattern)
│       # Existing reusable components:
│       ├── Breadcrumbs.tsx          # Already exists, reuse with city-specific items
│       ├── FloatingCtaButton.tsx    # Already exists, reuse
│       └── StickyFormSidebar.tsx    # Already exists, reuse if layout fits
└── lib/
    ├── schemas.ts                   # Add CityContentSchema
    ├── types.ts                     # Add CityContent type export
    └── hooks/
        └── useScrollSpy.ts          # IntersectionObserver-based scroll spy hook
```

### Pattern 1: City Content Data Schema (Mirrors ServiceContentSchema)
**What:** A Zod schema that enforces content quality constraints for all 21 city pages, validated at module load time (build-time crash on invalid content).
**When to use:** For every city content file.
**Example:**
```typescript
// Source: Existing pattern in src/lib/schemas.ts (ServiceContentSchema)
export const CityContentSchema = z.object({
  cityId: z.string(),

  // Hero
  heroHeadline: z.string(), // e.g., "Expert Roofing Services in Montclair, NJ"
  heroSubheadline: z.string(),

  // Stats bar
  stats: z.object({
    projectCount: z.string(), // "150+"
    servingSince: z.string(), // "2010"
    rating: z.string(),       // "5.0"
  }),

  // Overview narrative (the deep local content)
  overview: z.array(z.string()).min(3).max(6),

  // Residential section
  residential: z.object({
    heading: z.string(),
    content: z.array(z.string()).min(2).max(5),
  }),

  // Commercial section
  commercial: z.object({
    heading: z.string(),
    content: z.array(z.string()).min(2).max(5),
  }),

  // Weather/climate challenges
  weatherChallenges: z.object({
    heading: z.string(),
    content: z.array(z.string()).min(1).max(3),
  }),

  // Neighborhoods served
  neighborhoods: z.array(z.object({
    name: z.string(),
    description: z.string().optional(),
  })).min(3).max(15),

  // Project spotlights (fictional case studies)
  projectSpotlights: z.array(z.object({
    title: z.string(),
    type: z.enum(['residential', 'commercial']),
    description: z.string(),
    details: z.array(z.string()).min(2).max(4),
  })).min(2).max(5),

  // City-specific testimonials
  testimonials: z.array(z.object({
    name: z.string(),
    rating: z.number().min(4).max(5),
    text: z.string(),
    service: z.string(),
  })).min(2).max(5),

  // City-specific FAQs
  faqs: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })).min(5).max(8),

  // "Why Choose NQR in [City]"
  whyChoose: z.object({
    heading: z.string(),
    reasons: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })).min(3).max(6),
  }),

  // Meta
  metaTitle: z.string().max(70),
  metaDescription: z.string().max(160),
});
```

### Pattern 2: City Content Aggregator (Mirrors service-content/index.ts)
**What:** Central index that imports all city content files, validates with Zod at module load, and provides O(1) lookup by cityId.
**When to use:** Always -- this is the single entry point for city content.
**Example:**
```typescript
// Source: Existing pattern in src/data/service-content/index.ts
import { z } from 'zod';
import { CityContentSchema } from '@/lib/schemas';
import type { CityContent } from '@/lib/types';

import { urbanCoreContent } from './urban-core';
import { firstSuburbsContent } from './first-suburbs';
// ... other geographic groups

const allContent = z.array(CityContentSchema).parse([
  ...urbanCoreContent,
  ...firstSuburbsContent,
  // ... other groups
]);

const contentMap = new Map<string, CityContent>(
  allContent.map((c) => [c.cityId, c])
);

export function getCityContent(cityId: string): CityContent {
  const content = contentMap.get(cityId);
  if (!content) {
    throw new Error(`Missing content for city: ${cityId}`);
  }
  return content;
}
```

### Pattern 3: Scroll Spy Hook for Sticky Table of Contents
**What:** A custom React hook using IntersectionObserver to track which section is currently in viewport.
**When to use:** For the sticky ToC sidebar/bar on city pages.
**Example:**
```typescript
// Source: IntersectionObserver API (MDN)
'use client';
import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: `-${offset}px 0px -80% 0px` }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}
```

### Pattern 4: Google Maps Embed (Free, No API Key)
**What:** Simple iframe using Google Maps Embed API with place query parameter, lazy loaded for performance.
**When to use:** On every city page in the map section.
**Example:**
```typescript
// Source: https://developers.google.com/maps/documentation/embed/embedding-map
interface CityMapProps {
  cityName: string;
  state: string;
}

export function CityMap({ cityName, state }: CityMapProps) {
  const query = encodeURIComponent(`${cityName}, ${state}`);
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg">
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${query}`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map of ${cityName}, ${state}`}
      />
    </div>
  );
}
```

**Important note on Maps Embed API:** The Maps Embed API requires an API key but is free with unlimited usage. Alternatively, use a simpler Google Maps link in an iframe without an API key:
```html
<iframe
  src="https://www.google.com/maps?q=Montclair+NJ&output=embed"
  loading="lazy"
  title="Map of Montclair, NJ"
/>
```
This second approach works without any API key and is commonly used for basic location display. Choose based on whether an API key is available.

### Pattern 5: Combo Page Link Strategy (Pre-Phase 6)
**What:** Service links on city pages should target combo page URLs (`/{service}-{city}-nj`) but those pages don't exist until Phase 6. Strategy: link to the service page (not the combo URL) for now, then update links in Phase 6.
**When to use:** On the services grid section of city pages.
**Rationale:** The slug registry already has combo slugs registered, and `dynamicParams = false` means linking to a combo slug that has a registered route but only a placeholder template will still work (it won't 404). However, the ComboTemplate is currently a placeholder like the old CityTemplate was. The safest approach is to link to service pages now and update to combo URLs in Phase 6.
**Example:**
```typescript
// Phase 4: Link to service pages
<Link href={`/${service.slug}`}>{service.name}</Link>

// Phase 6: Update to combo page links
<Link href={`/${generateComboSlug(service.slug, city.slug)}`}>
  {service.name} in {city.name}
</Link>
```

### Anti-Patterns to Avoid
- **Template-swapping with variable substitution:** City pages must NOT be "Mad Libs" templates where you swap in city names. Each city needs genuinely unique narrative content. The Zod schema enforces minimum content lengths but content writers must provide real, unique prose.
- **Duplicate content across city pages:** Google penalizes near-identical pages with only location names changed. The 2,500+ word requirement with unique narratives prevents this.
- **Loading all 21 city content objects in the page dispatcher:** Each page only needs its own city's content. Import lazily or use the map-based lookup pattern (already established with service content).
- **Client-side map rendering:** Google Maps iframe embed is server-rendered and lazy-loaded. Do NOT use the JavaScript API for display-only maps.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Scroll spy for ToC | Complex scroll event listener with `getBoundingClientRect` | `IntersectionObserver` API via custom hook | IO is performant, handles resize/scroll automatically, browser-native |
| Google Maps display | Custom map component with tiles | Google Maps Embed iframe | Free, no billing, no JavaScript overhead, lazy-loadable |
| Content validation | Manual checks for content completeness | Zod schema with `.parse()` at module load | Build-time crash if content is incomplete; same pattern as Phase 3 |
| NAP data formatting | Hardcoded address strings in components | `siteConfig` from `data/site-config.ts` | Single source of truth already exists for NAP |
| Adjacent city lookup | Manual array filtering | `city.adjacentCityIds` already in city data | Phase 1 data layer already has this relationship defined |
| Breadcrumbs | Custom breadcrumb component | Existing `Breadcrumbs.tsx` component | Already built, just pass different items array |
| Lead form | New form for city pages | Existing `LeadForm` component | Already built with `hero` and `standard` variants, accepts `defaultCity` prop |
| FAQ accordion | New accordion for city FAQs | Extend existing `FaqAccordion` or `ServiceFaq` pattern | Proven pattern with `<details>` element, accessible |

**Key insight:** Phase 4 creates almost no new utilities or patterns. It extends Phase 1's data layer and replicates Phase 3's content architecture for a new page type. The heavy lift is content authoring, not engineering.

## Common Pitfalls

### Pitfall 1: Thin/Duplicate Content Across Cities
**What goes wrong:** City pages end up as near-duplicates with only the city name swapped, leading to Google de-indexing or penalties.
**Why it happens:** Writing 21 x 2,500+ words of genuinely unique content is hard. Tendency to use templates with variable substitution.
**How to avoid:** Zod schema enforces minimum content lengths. Content must reference specific neighborhoods, building types, landmarks, weather patterns, and building codes unique to each city. The geographic grouping of content files helps writers focus on what makes each area distinct.
**Warning signs:** Multiple city pages passing Zod validation but reading identically when you mask the city name.

### Pitfall 2: Google Maps Iframe Performance
**What goes wrong:** 21 pages with Maps iframes slow down page loads and hurt Core Web Vitals.
**Why it happens:** Iframes load eagerly by default, adding ~500KB of resources.
**How to avoid:** Always use `loading="lazy"` on the iframe element. Place the map below the fold so it only loads when scrolled into view. The `loading="lazy"` attribute is supported by all modern browsers.
**Warning signs:** LCP over 2.5s on city pages, low PageSpeed scores.

### Pitfall 3: Broken Internal Links Before Phase 6
**What goes wrong:** City pages link to combo page URLs (`/roof-repair-newark-nj`) that have placeholder templates, creating a poor user experience.
**Why it happens:** Combo pages are Phase 6 but the URL structure exists in the slug registry.
**How to avoid:** Link to service pages (`/roof-repair`) from city pages now. Add a TODO/comment marking these links for Phase 6 update. The combo slugs exist in the registry and won't 404, but the ComboTemplate is just a placeholder.
**Warning signs:** Users clicking service links on city pages and landing on placeholder/skeleton pages.

### Pitfall 4: NAP Inconsistency
**What goes wrong:** Address, phone, or business name displayed differently on city pages vs. footer vs. contact page, confusing search engines.
**Why it happens:** Hardcoding NAP info in city content instead of using `siteConfig`.
**How to avoid:** Always reference `siteConfig.address`, `siteConfig.phone`, `siteConfig.companyName` in the NAP block. Never hardcode these values in content files or templates.
**Warning signs:** Grep for phone numbers or address strings that don't reference `siteConfig`.

### Pitfall 5: Heading Hierarchy Violations
**What goes wrong:** SEO heading structure is broken (multiple H1s, missing H2 levels, non-semantic headings).
**Why it happens:** Each section component independently renders headings without coordination.
**How to avoid:** CityTemplate owns the H1. Each section component uses H2 for its section heading and H3 for sub-headings. The Zod schema can enforce heading text for SEO keywords. Map out the heading hierarchy in advance:
- H1: "Roofing Services in [City], NJ"
- H2: Section headings (residential, commercial, neighborhoods, FAQs, etc.)
- H3: Sub-items within sections (individual neighborhoods, FAQ questions, spotlight titles)
**Warning signs:** Accessibility audit showing improper heading nesting.

### Pitfall 6: ToC Scroll Spy Not Working with SSG
**What goes wrong:** The scroll spy hook doesn't find section elements because they haven't rendered yet.
**Why it happens:** IntersectionObserver runs before hydration completes, or section IDs don't match ToC links.
**How to avoid:** The ToC component must be a client component (`'use client'`). Use `useEffect` to set up the observer after mount. Ensure section IDs are deterministic and match the ToC link hrefs exactly. The page content is SSG so HTML is present before hydration, but the observer setup should still wait for mount via useEffect.
**Warning signs:** ToC links don't highlight on scroll, or all highlight at once.

### Pitfall 7: Content File Size Explosion
**What goes wrong:** City content files become massive (each city is 2,500+ words = ~15KB of text, times 4-5 cities per file = 60-75KB per file).
**Why it happens:** Natural consequence of deep local content requirement.
**How to avoid:** Geographic grouping keeps files to 4-5 cities each (~60-75KB), comparable to existing service content files (48KB-238KB range). This is well within acceptable limits given the Phase 3 precedent.
**Warning signs:** Any single content file exceeding 250KB.

## Code Examples

### City Template Structure (Full Component Layout)
```typescript
// Source: Extending existing ServiceTemplate pattern
import type { City, CityContent } from '@/lib/types';
import { getCityContent } from '@/data/city-content';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { getServiceMenuGroups } from '@/data/nav-data';
import { generateCityPageSlug } from '@/lib/slug-utils';

export default function CityTemplate({ city }: { city: City }) {
  const content = getCityContent(city.id);
  const serviceGroups = getServiceMenuGroups();
  const adjacentCities = city.adjacentCityIds
    .map(id => cities.find(c => c.id === id))
    .filter(Boolean);

  return (
    <>
      <FloatingCtaButton />
      <CityHero city={city} content={content} serviceGroups={serviceGroups} />
      <CityStatsBar stats={content.stats} cityName={city.name} />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-10">
          {/* Sticky ToC sidebar */}
          <aside className="hidden lg:block lg:col-span-1">
            <CityTableOfContents sections={tocSections} />
          </aside>

          {/* Main content */}
          <div className="space-y-16 lg:col-span-3">
            <section id="overview"><CityOverview ... /></section>
            <section id="residential"><CityResidential ... /></section>
            <section id="commercial"><CityCommercial ... /></section>
            <section id="neighborhoods"><CityNeighborhoods ... /></section>
            <section id="services"><CityServicesGrid ... /></section>
            <section id="testimonials"><CityTestimonials ... /></section>
            <section id="projects"><CityProjectSpotlights ... /></section>
            <section id="faqs"><CityFaqs ... /></section>
            <section id="location"><CityMapNap ... /></section>
            <section id="nearby"><CityNearbyCities ... /></section>
          </div>
        </div>
      </div>

      <CityCtaBanner cityName={city.name} serviceGroups={serviceGroups} />
    </>
  );
}
```

### NAP Block Component
```typescript
// Source: Extending existing footer NAP pattern
import { siteConfig } from '@/data/site-config';

export function NapBlock({ className }: { className?: string }) {
  return (
    <address className={`not-italic ${className ?? ''}`}>
      <p className="font-heading text-lg font-bold text-forest">
        {siteConfig.companyName}
      </p>
      <p className="mt-1 font-body text-sm text-text-secondary">
        {siteConfig.address.street}<br />
        {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
      </p>
      <a
        href={`tel:${siteConfig.phone.tel}`}
        className="mt-2 block font-heading text-lg font-semibold text-copper hover:text-copper-dark"
      >
        {siteConfig.phone.display}
      </a>
    </address>
  );
}
```

### Metadata Generation Update
```typescript
// Source: Existing pattern in [slug]/page.tsx
case 'city': {
  const city = cities.find((c) => c.id === pageData.cityId);
  if (!city) return {};
  const content = getCityContent(city.id);
  return {
    title: content.metaTitle,
    description: content.metaDescription,
  };
}
```

### Nearby Cities Card Component
```typescript
// Source: Context decision -- card grid with 2-3 services per adjacent city
interface NearbyCityCardProps {
  city: City;
  featuredServices: { name: string; slug: string }[];
}

function NearbyCityCard({ city, featuredServices }: NearbyCityCardProps) {
  return (
    <Link
      href={`/${generateCityPageSlug(city.slug)}`}
      className="group rounded-lg border border-border bg-white p-5 shadow-sm transition-all hover:border-copper/40 hover:shadow-md"
    >
      <h3 className="font-heading text-lg font-bold text-forest group-hover:text-copper">
        Roofing in {city.name}, NJ
      </h3>
      <ul className="mt-2 space-y-1">
        {featuredServices.map(s => (
          <li key={s.slug} className="font-body text-sm text-text-secondary">
            {s.name}
          </li>
        ))}
      </ul>
    </Link>
  );
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Separate route folders per city | Single `[slug]` catch-all with registry | Phase 1 (this project) | All page types share one dynamic route; city pages need no routing changes |
| Google Maps JavaScript API | Google Maps Embed iframe | Ongoing best practice | Free, no billing, sufficient for display-only use |
| `scroll` event listener for ToC | `IntersectionObserver` API | 2020+ standard | Better performance, no layout thrashing |
| Manual content validation | Zod schema parse at build time | Phase 1 pattern | Build fails on invalid content, catches issues before deploy |

**Deprecated/outdated:**
- Manual scroll listeners for scroll spy: Use IntersectionObserver instead
- Google Maps API v2: Use Maps Embed API (iframe) or Maps JavaScript API v3

## Open Questions

1. **Google Maps API Key**
   - What we know: Maps Embed API requires an API key but is free with unlimited usage. Alternative: use `google.com/maps?q=...&output=embed` which works without a key.
   - What's unclear: Whether the project has or plans to have a Google Cloud project with Maps Embed API key.
   - Recommendation: Use the keyless embed approach (`google.com/maps?q=CityName+NJ&output=embed`) for Phase 4. If a key becomes available later, upgrade to the Embed API for cleaner URLs and more control. Mark this for Phase 8 technical SEO improvements.

2. **Content Authoring Workflow**
   - What we know: 21 cities x 2,500+ words = 52,500+ words of unique content. Phase 3 proved content files can handle large volumes (replacement-sub-pages.ts is 238KB).
   - What's unclear: Whether content will be authored iteratively (batch of cities at a time) or all at once.
   - Recommendation: Structure the plan so the template and first 2-3 "pilot" city content files are built first, then remaining cities are populated in batches. This validates the schema and template before committing to all 21.

3. **LeadForm `defaultCity` Prop**
   - What we know: The LeadForm component accepts a `defaultCity` prop but doesn't currently use it in the form. The form has fields for name, email, phone, and serviceNeeded.
   - What's unclear: Whether a hidden city field should be added to the form to track which city page the lead came from.
   - Recommendation: Add a hidden `city` input to LeadForm when rendering on city pages. This enables lead tracking by city without changing the visible form UI. The `submitLead` server action should capture this.

4. **Residential vs. Commercial Visual Distinction**
   - What we know: Context specifies "different background colors or card styles" for residential and commercial sections.
   - What's unclear: Exact visual treatment.
   - Recommendation: Follow the existing `ServiceAudience` pattern: `border-l-4 border-forest` for residential, `border-l-4 border-copper` for commercial. Extend with subtle background colors: `bg-forest/5` for residential blocks, `bg-copper/5` for commercial blocks.

## Sources

### Primary (HIGH confidence)
- Codebase analysis: `src/data/cities.ts` - 21 cities with Zod validation, adjacentCityIds
- Codebase analysis: `src/data/service-content/index.ts` - Content aggregation pattern with O(1) lookup
- Codebase analysis: `src/lib/schemas.ts` - ServiceContentSchema as template for CityContentSchema
- Codebase analysis: `src/components/templates/ServiceTemplate.tsx` - 10-section template pattern
- Codebase analysis: `src/components/templates/CityTemplate.tsx` - Existing placeholder to replace
- Codebase analysis: `src/app/[slug]/page.tsx` - Existing city routing via slug registry
- Codebase analysis: `src/components/forms/LeadForm.tsx` - Existing form with defaultCity prop
- Codebase analysis: `src/data/site-config.ts` - NAP data source of truth
- [Google Maps Embed API docs](https://developers.google.com/maps/documentation/embed/embedding-map) - Embed implementation
- [IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) - Scroll spy implementation

### Secondary (MEDIUM confidence)
- [Local landing pages guide (Arc4)](https://arc4.com/local-landing-pages/) - City page SEO best practices
- [NAP Consistency guide (Amigo Studios)](https://www.amigostudios.co/blog/nap-consistency-local-seo) - NAP consistency patterns
- [Scrollspy demystified (Maxime Heckel)](https://blog.maximeheckel.com/posts/scrollspy-demystified/) - IntersectionObserver scroll spy pattern
- [Local SEO for roofing (LocalMighty)](https://www.localmighty.com/blog/local-seo-checklist-for-roofing-contractors/) - Roofing-specific local SEO

### Tertiary (LOW confidence)
- [Sterling Sky Maps embed](https://www.sterlingsky.ca/embed-google-maps/) - Keyless embed approach (needs validation)

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - No new dependencies, extending proven codebase patterns
- Architecture: HIGH - Direct replication of Phase 3's content pattern (service-content -> city-content)
- Pitfalls: HIGH - Based on codebase analysis and established local SEO practices
- Content schema: HIGH - Modeled on working ServiceContentSchema
- Maps embed: MEDIUM - Free iframe approach is well-documented but keyless variant needs testing
- Scroll spy: HIGH - IntersectionObserver is browser-standard, well-documented

**Research date:** 2026-03-07
**Valid until:** 2026-04-07 (30 days -- stable technology, no fast-moving dependencies)
