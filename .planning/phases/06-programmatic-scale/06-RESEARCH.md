# Phase 6: Programmatic Scale - Research

**Researched:** 2026-03-07
**Domain:** Next.js 16 large-scale SSG, combo page template architecture, reverse silo internal linking, orphan page auditing
**Confidence:** HIGH

## Summary

Phase 6 transforms 90 existing combo content files into a full 1,323-page deployment with a production ComboTemplate, reverse silo internal linking engine, and zero orphan pages. The codebase already has all infrastructure in place: the slug registry generates all 1,323 combo slugs, the catch-all `[slug]/page.tsx` dispatcher routes to ComboTemplate, and the content aggregator with Map-based O(1) lookup supports the pattern. The work is: (1) replace the placeholder ComboTemplate with a full production component, (2) write 1,233 remaining combo content files batched by city, (3) build internal linking blocks (nearby cities, related services, footer mega-links), and (4) build an orphan page audit script.

The existing ServiceTemplate and CityTemplate provide proven patterns for the split hero layout (headline + benefits left, LeadForm right), sticky sidebar, and content sections. ComboTemplate should be a genuine hybrid -- not a copy of either -- using the same design system tokens but with its own identity (city-colored accent sections, service category badge, distinct content flow).

**Primary recommendation:** Build ComboTemplate as a server component following the ServiceTemplate pattern (split hero with LeadForm, sticky sidebar, content sections), then build the linking engine as pure functions computed from the existing data registries (services, cities, combos, adjacentCityIds). Do NOT create separate link map data files -- compute everything from existing data at build time.

## Standard Stack

### Core (Already in Project)
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 16.1.6 | SSG with generateStaticParams | Already in use, handles 1,492 pages |
| React | 19.2.3 | Component rendering | Already in use |
| Zod | 3.25.x | Schema validation at module load | Already in use for all data layers |
| Tailwind CSS | 4.x | Styling with design tokens | Already in use with @theme tokens |

### Supporting (Already in Project)
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| cmpstr | 3.2.1 | Dice-Sorensen similarity | Content validation (devDep) |

### No New Dependencies Needed
This phase requires zero new npm packages. All functionality is built with:
- Next.js built-in SSG (generateStaticParams + dynamicParams = false)
- Standard TypeScript/Node.js for linking engine computation
- Existing Zod schemas for content validation
- Existing design system tokens for styling

**Installation:** None required.

## Architecture Patterns

### Recommended Project Structure
```
src/
├── components/
│   ├── sections/
│   │   ├── ComboHero.tsx              # NEW: split hero (headline+trust left, form right)
│   │   ├── ComboOverview.tsx          # NEW: overview + challenges section
│   │   ├── ComboProcess.tsx           # NEW: process steps section
│   │   ├── ComboFaqs.tsx              # NEW: FAQ accordion for combo pages
│   │   ├── ComboRelatedLinks.tsx      # NEW: related links block (nearby cities + other services + article link)
│   │   └── ... (existing sections unchanged)
│   └── templates/
│       └── ComboTemplate.tsx          # REPLACE: full production template
├── data/
│   ├── combo-content/
│   │   ├── schema.ts                  # EXISTS: ComboContentSchema
│   │   ├── index.ts                   # UPDATE: add new city imports
│   │   ├── newark/                    # EXISTS: 65 files
│   │   ├── montclair/                 # EXISTS: 5 files, EXPAND to 63
│   │   ├── bloomfield/               # EXISTS: 5 files, EXPAND to 63
│   │   ├── east-orange/              # EXISTS: 5 files, EXPAND to 63
│   │   ├── caldwell/                 # EXISTS: 5 files, EXPAND to 63
│   │   ├── millburn/                 # EXISTS: 5 files, EXPAND to 63
│   │   ├── irvington/               # NEW: 63 files
│   │   ├── orange/                   # NEW: 63 files
│   │   ├── ... (15 more new cities)
│   │   └── maplewood/               # NEW: 63 files
│   └── linking/
│       └── link-engine.ts             # NEW: computed linking functions
├── lib/
│   └── hooks/
│       └── ... (existing hooks)
└── scripts/
    └── audit-orphan-pages.ts          # NEW: orphan page audit script
```

### Pattern 1: ComboTemplate as Hybrid Server Component
**What:** A server component that blends service page structure (hero+form, sticky sidebar, content sections) with city-colored visual differentiation
**When to use:** Every combo page (1,323 pages)
**Key architectural decisions:**
- Server component (like ServiceTemplate and CityTemplate) -- no client-side state needed
- Receives `service: Service` and `city: City` props from dispatcher (already wired)
- Fetches content via `getComboContent(service.id, city.id)` internally
- Fetches nav data via `getServiceMenuGroups()` for LeadForm
- Computes linking data (nearby cities, related services) internally from registry data
- Layout: 2-column on lg+ (content left, sticky sidebar right) matching ServiceTemplate

### Pattern 2: Computed Link Engine (No Separate Data Files)
**What:** Pure functions that compute internal links from existing data registries at build time
**When to use:** For nearby city links, related service links, and reverse silo article links
**Example:**
```typescript
// src/data/linking/link-engine.ts
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { generateComboSlug, generateCityPageSlug } from '@/lib/slug-utils';
import type { City, Service } from '@/lib/types';

/** Get nearby cities offering the same service (using adjacentCityIds) */
export function getNearbyCityLinks(service: Service, city: City) {
  return city.adjacentCityIds
    .map((id) => cities.find((c) => c.id === id))
    .filter((c): c is City => c !== undefined)
    .map((c) => ({
      name: c.name,
      slug: generateComboSlug(service.slug, c.slug),
      label: `${service.name} in ${c.name}`,
    }));
}

/** Get other services available in the same city */
export function getRelatedServiceLinks(currentService: Service, city: City) {
  return services
    .filter((s) => s.id !== currentService.id)
    .map((s) => ({
      name: s.name,
      slug: generateComboSlug(s.slug, city.slug),
      category: s.category,
    }));
}

/** Get parent page links (service page + city page) */
export function getParentPageLinks(service: Service, city: City) {
  return {
    servicePage: { name: service.name, slug: service.slug },
    cityPage: { name: `Roofing in ${city.name}`, slug: generateCityPageSlug(city.slug) },
  };
}
```

### Pattern 3: Breadcrumb Structure (Claude's Discretion)
**Recommendation:** Home > Service > Service in City
**Rationale:** This follows the service-first SEO hierarchy. The combo page is a child of the service page conceptually (it's the same service, localized). The breadcrumb `Home > Roof Repair > Roof Repair in Newark, NJ` creates a clear topical hierarchy that search engines can follow.
```typescript
// In ComboTemplate
<Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: service.name, href: `/${service.slug}` },
    { label: `${service.name} in ${city.name}` },
  ]}
/>
```

### Pattern 4: Content File Batching by City
**What:** Each city gets its own directory with 63 .ts files + index.ts aggregator
**Existing pattern:** Newark has 65 files (index.ts imports all, validates with Zod), Montclair/Bloomfield/etc. have 5 files each
**Scaling:** Each new city directory follows the exact Newark pattern:
- One .ts file per service (63 files per city)
- City index.ts imports all 63 and validates with `z.array(ComboContentSchema).parse([...])`
- Top-level combo-content/index.ts imports each city's validated array

### Anti-Patterns to Avoid
- **Duplicating link data in content files:** Don't add `nearbyLinks` or `relatedServices` to ComboContentSchema. Compute from existing data at render time (build time for SSG).
- **Creating a separate linking config file:** The adjacentCityIds on each City object + the services array already contain everything needed to compute all links.
- **Copying ServiceHero or CityHero wholesale:** ComboHero should be a distinct component -- shared structure but unique identity (service category badge, city zip codes, combo-specific trust signals).
- **Incremental deployment:** CONTEXT.md specifies "deploy all at once when all 1,323 combos are complete." Do NOT set up incremental content deployment.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Slug generation | Custom slug builder | `generateComboSlug()` from slug-utils.ts | Already exists, validated with collision detection |
| Content lookup | Custom search | `getComboContent()` from combo-content/index.ts | Map-based O(1) lookup already exists |
| Page routing | Custom router | `[slug]/page.tsx` dispatcher | Already routes combo type to ComboTemplate |
| Adjacent cities | Hardcoded lists | `city.adjacentCityIds` from cities.ts data | Already defined for all 21 cities |
| Similarity check | Manual comparison | Existing Dice-Sorensen engine with 92/93/95% thresholds | Calibrated in Phase 5 |
| Lead form | Custom form | Existing `<LeadForm>` component | Already handles hero/standard variants, service groups |
| Sticky sidebar | Custom sticky | Existing `<StickyFormSidebar>` component | Already handles sticky positioning |
| Breadcrumbs | Custom breadcrumb | Existing `<Breadcrumbs>` component | Already handles items array with links |
| FAQ accordion | Custom accordion | Pattern from existing `<ServiceFaq>` | Already styled with design system |
| City page slug | Custom URL builder | `generateCityPageSlug()` | Already generates roofing-in-{city}-nj pattern |

**Key insight:** Phase 6 is primarily a content-and-template phase, not an infrastructure phase. Nearly all infrastructure (routing, slugs, data layer, forms, design system) was built in Phases 1-5.

## Common Pitfalls

### Pitfall 1: TypeScript Compile Time with 1,323+ Content Files
**What goes wrong:** Importing 1,323 individual .ts files through cascading index.ts aggregators can significantly slow TypeScript compilation and Next.js build times.
**Why it happens:** Each .ts file is a separate module that TypeScript must parse, type-check, and emit. The Zod `.parse()` calls at import time add runtime validation cost to module initialization.
**How to avoid:**
- Keep the existing pattern of per-city aggregators (21 city index.ts files, each importing ~63 files)
- The top-level combo-content/index.ts imports only 21 city aggregators, not 1,323 individual files
- Monitor build time after each city batch addition
- If build time approaches 30+ minutes, consider: (a) removing redundant Zod validation at the top-level aggregator (keep per-city validation only), or (b) using `as const satisfies` for type checking without runtime validation on the aggregator
**Warning signs:** Build time exceeding 20 minutes, IDE becoming sluggish in combo-content directory

### Pitfall 2: Vercel 45-Minute Build Time Limit
**What goes wrong:** Generating 2,800+ static pages (1,323 combos + 63 services + 21 cities + 30 comparisons + 7 core + homepage) could exceed Vercel's 45-minute build limit.
**Why it happens:** Each page requires full React server-side rendering. Community reports indicate ~30-35 minutes for ~2,000 SSG pages.
**How to avoid:**
- The CONTEXT.md says "Vercel Pro tier available -- no build time concerns" which suggests the user is not worried about this, but monitor it
- Current build generates ~1,492 pages successfully
- Adding ~1,300 more pages roughly doubles build time
- If needed: use Next.js ISR for combo pages (generate on first request, cache indefinitely) -- but CONTEXT.md says "deploy all at once" so full SSG is preferred
- Vercel Pro allows up to 64GB disk and concurrent builds, which helps
**Warning signs:** Build taking >25 minutes with partial content, timeout failures on Vercel

### Pitfall 3: Orphan Pages from Incomplete Linking
**What goes wrong:** Pages with fewer than 3 inbound links (the requirement) are effectively invisible to search engines and users.
**Why it happens:** With 2,800+ pages, it's easy to miss linking gaps. Combo pages only get links from nearby-city blocks and related-service blocks -- if those blocks are too narrow, pages fall through.
**How to avoid:**
- Build the orphan page audit script early (not last)
- Run it after each city batch to catch problems incrementally
- Ensure every combo page gets inbound links from: (1) its parent service page, (2) its parent city page's CityServicesGrid, (3) nearby city combo pages, and (4) footer mega-links
- The CityServicesGrid TODO (Phase 4) is critical -- those links must point to combo URLs, not service URLs
**Warning signs:** Audit script reporting pages with <3 inbound links

### Pitfall 4: metaDescription Exceeding 160 Characters
**What goes wrong:** Zod validation crashes the build when metaDescription exceeds 160 chars.
**Why it happens:** Already happened in Phases 3-5 with multiple fields needing trimming. With 1,233 new content files, this will happen frequently.
**How to avoid:** Validate each batch immediately after writing. The per-city Zod validation catches this at module load.
**Warning signs:** Build crashes with Zod validation errors on metaDescription field

### Pitfall 5: Content Voice Inconsistency Within City Batches
**What goes wrong:** The 63 combo files for a city use inconsistent voice, breaking the "strict voice consistency" requirement.
**Why it happens:** Writing 63 files is a large task. Without constant reference to the city's Phase 4 content, voice drifts.
**How to avoid:** Each city's 63 combos must match the voice/vocabulary/lens from their Phase 4 city page content. For the 5 sample cities, remaining 58 must match the established 5.
**Warning signs:** Similarity validation failing, or content feeling generic rather than city-specific

### Pitfall 6: CityServicesGrid Link Update Breaking City Pages
**What goes wrong:** Updating CityServicesGrid links from service URLs to combo URLs could break the component if the city prop isn't available.
**Why it happens:** CityServicesGrid currently receives only `cityName: string` -- it doesn't know the city ID needed to generate combo slugs.
**How to avoid:** Pass `cityId` (or `citySlug`) as an additional prop to CityServicesGrid. Use `generateComboSlug(service.slug, citySlug)` to build combo URLs.
**Warning signs:** TypeScript errors when trying to access city slug in CityServicesGrid

## Code Examples

### ComboTemplate Layout Structure (Recommended)
```typescript
// src/components/templates/ComboTemplate.tsx
import type { Service, City } from '@/lib/types';
import { getComboContent } from '@/data/combo-content';
import { getServiceMenuGroups } from '@/data/nav-data';
import { getNearbyCityLinks, getRelatedServiceLinks, getParentPageLinks } from '@/data/linking/link-engine';
import { cities } from '@/data/cities';
import { LeadForm } from '@/components/forms/LeadForm';
import { FloatingCtaButton } from '@/components/sections/FloatingCtaButton';
import { StickyFormSidebar } from '@/components/sections/StickyFormSidebar';
import { Breadcrumbs } from '@/components/sections/Breadcrumbs';
// ... combo section imports

interface ComboTemplateProps {
  service: Service;
  city: City;
}

export default function ComboTemplate({ service, city }: ComboTemplateProps) {
  const content = getComboContent(service.id, city.id);
  const serviceGroups = getServiceMenuGroups();
  const nearbyCities = getNearbyCityLinks(service, city);
  const relatedServices = getRelatedServiceLinks(service, city);
  const parents = getParentPageLinks(service, city);

  return (
    <>
      <FloatingCtaButton />

      {/* Hero: split layout with headline+trust left, form right */}
      <ComboHero
        service={service}
        city={city}
        serviceGroups={serviceGroups}
      />

      {/* Main content: 2-column with sticky sidebar */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:grid lg:grid-cols-3 lg:gap-12 lg:px-8">
        <div className="space-y-12 pb-16 lg:col-span-2">
          <ComboOverview paragraphs={content.overview} />
          <ComboChallenges paragraphs={content.challenges} />
          <ComboProcess steps={content.process} />
          <ComboFaqs faqs={content.faqs} />
          <ComboRelatedLinks
            nearbyCities={nearbyCities}
            relatedServices={relatedServices}
            parents={parents}
          />
        </div>

        <StickyFormSidebar>
          <LeadForm
            variant="standard"
            defaultService={service.slug}
            defaultCity={city.id}
            serviceGroups={serviceGroups}
          />
          {/* Quick links sidebar section */}
          {/* Nearby cities sidebar section */}
        </StickyFormSidebar>
      </div>

      {/* Full-width CTA banner */}
      <ComboCtaBanner service={service} city={city} serviceGroups={serviceGroups} />
    </>
  );
}
```

### CityServicesGrid Update (Combo URL Links)
```typescript
// Updated CityServicesGrid to link to combo pages instead of service pages
import { generateComboSlug } from '@/lib/slug-utils';

interface CityServicesGridProps {
  cityName: string;
  citySlug: string; // NEW prop needed
}

export function CityServicesGrid({ cityName, citySlug }: CityServicesGridProps) {
  // ... existing grouping logic ...

  // In the link:
  <Link href={`/${generateComboSlug(service.slug, citySlug)}`}>
    {service.name}
  </Link>
}
```

### Orphan Page Audit Script Pattern
```typescript
// scripts/audit-orphan-pages.ts
// Crawls all internal links across all page types, counts inbound links per page
import { getAllSlugs, getSlugsByType } from '@/data/slug-registry';

interface LinkAudit {
  slug: string;
  inboundCount: number;
  sources: string[];
}

// For each page type, compute what pages it links to
// Then aggregate inbound link counts
// Flag any page with < 3 inbound links
```

### Reverse Silo Linking Rules (for Phase 7 Pre-wiring)
```
Money Page (combo page) --> links to ONE supporting article (in content body)
Supporting Article --> links back to money page (at top of post)
Supporting Article --> links to 1-2 other supporting articles (within same silo)
Supporting Article --> NO other outbound links outside the silo

Key rule: No daisy chaining. If A links to B, A does NOT also link to C.
All supporting posts link directly to the target/money page.
```
**Note:** Articles don't exist yet (Phase 7). The ComboRelatedLinks block should include a placeholder or pre-wired slot for the article link. For Phase 6, the combo page itself links to parent service page and parent city page. The reverse silo article linking will be completed in Phase 7.

### Footer Mega-Links (Already Partially Implemented)
The Footer component already displays all 21 cities and major service categories. The LINK-06 requirement is partially met. To fully meet it:
- Ensure all 21 cities are listed (currently all 21 are present)
- Ensure major service categories are represented (currently 6 of 8 categories shown)
- Consider adding a few combo page links to the footer (e.g., top services in top cities)

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| ComboTemplate placeholder | Full production component | Phase 6 (now) | All 1,323 pages render real content |
| CityServicesGrid links to service pages | Links to combo pages | Phase 6 (now) | Proper internal linking hierarchy |
| 90 combo content files | 1,323 combo content files | Phase 6 (now) | Full programmatic scale |
| No orphan page detection | Audit script with 3+ inbound requirement | Phase 6 (now) | Zero orphan pages |

**Critical existing assets to leverage:**
- `ComboContentSchema` with Zod validation (overview, challenges, process, faqs, metaDescription)
- `getComboContent()` with Map-based O(1) lookup
- `getAllComboContent()` for bulk operations
- `city.adjacentCityIds` on all 21 cities for nearby-city computation
- `generateComboSlug()` for URL generation
- `Breadcrumbs` component with items array
- `LeadForm` with hero/standard variants, defaultService and defaultCity props
- `StickyFormSidebar` with sticky positioning
- `FloatingCtaButton` for mobile CTA

## Reverse Silo Methodology -- Detailed Rules

Based on Page Optimizer Pro / Kyle Roof methodology:

1. **Money page (combo page) links to exactly ONE supporting article** -- placed in the content body with relevant anchor text. The money page does NOT link to multiple articles.

2. **Supporting articles link back to the money page** -- one link at the top of the article pointing to the money/target page. This is the primary purpose of supporting content.

3. **Supporting articles link to 1-2 other supporting articles** -- within the same silo only. NO daisy chaining (A->B is fine, but A should NOT also link directly to C; B->C is fine).

4. **Supporting articles contain NO other outbound links** -- no links to pages outside the silo. This creates a "virtual silo" that concentrates authority on the money page.

5. **Each silo serves exactly ONE money page** -- do not share supporting articles across silos.

**For Phase 6:** Articles don't exist yet (Phase 7). The combo page template should include a designated slot/section for the article link, but leave it empty or hidden until Phase 7 populates it. The ComboRelatedLinks block handles this.

## Claude's Discretion Recommendations

Based on codebase analysis and SEO best practices:

| Decision | Recommendation | Rationale |
|----------|---------------|-----------|
| Breadcrumbs | Home > Service > Service in City | Service-first hierarchy matches SEO topical authority flow |
| Mid-content CTA | Between Overview/Challenges and Process sections | Natural break point after establishing the problem, before presenting the solution |
| Trust bar below hero | Yes, include | ServiceHero includes benefits list; ComboHero should include a compact trust bar (Licensed, Insured, Free Estimates) |
| Testimonial section | Defer to Phase 8 or 9 | Combo pages already have 2,000+ words; adding testimonials increases build complexity without clear Phase 6 necessity |
| Visual differentiation | Subtle background shifts between sections (parchment vs parchment-light alternating) + copper accent left-border on city-specific content | Creates visual rhythm without heavy styling |
| Service category badge | Yes, in hero | Small badge above headline (e.g., "Repair & Maintenance") matching the service.category |
| "Other services in city" format | Categorized list showing top 3-5 per category | Full 63-service grid is too large; categorized with limits keeps it useful |
| Article link pre-wiring | Include empty slot in ComboRelatedLinks, hidden when no article exists | Clean pre-wire for Phase 7 without showing empty UI |
| Footer mega-link updates | Update to include 2-3 popular combo links per city | Increases internal link density for LINK-06 |
| Parent page linking | Link to BOTH parents (service page + city page) | Both breadcrumb and explicit links in related links block |
| Nearby city count | Use all adjacentCityIds (typically 3-5 per city) | Already defined in cities.ts, no artificial limitation needed |
| Link engine approach | Computed from registry (not explicit link maps) | No new data files, pure functions from existing data |
| Build monitoring | Add build time logging and page count verification to build script | Simple console.log in next.config or build output check |
| Image strategy | Text-only for now; hero uses CSS background patterns matching ServiceHero/CityHero | Phase 9 handles photo assets per CONTEXT deferred concern |
| TS compile optimization | Only if needed; monitor after first full city batch | Per-city Zod validation (not top-level) already isolates modules |
| Schema expansion | Not needed; current ComboContentSchema (overview, challenges, process, faqs, metaDescription) covers all required content sections | If content needs grow, expand only the array max constraints |

## Open Questions

1. **metaDescription source: ComboContent vs Combo object**
   - What we know: The `Combo` object in combos.ts has auto-generated metaDescription. The `ComboContent` object in combo-content/schema.ts has hand-written metaDescription. The page dispatcher currently uses `combo.metaDescription` (auto-generated).
   - What's unclear: Should the metadata generation in `[slug]/page.tsx` switch to using `getComboContent().metaDescription` (hand-written) instead of `combo.metaDescription` (auto-generated)?
   - Recommendation: YES -- switch to `getComboContent().metaDescription` for pages that have content, falling back to `combo.metaDescription` for pages without content yet. This delivers the hand-crafted SEO descriptions.

2. **Content writing order for remaining 15 cities**
   - What we know: 5 sample cities expand first (Montclair, Bloomfield, East Orange, Caldwell, Millburn), then new cities ordered by population/traffic priority.
   - What's unclear: Exact population ordering of the remaining 15 cities.
   - Recommendation: The planner should establish the city ordering in Plan 06-02. Cities with more adjacentCityIds should be prioritized as they create more internal linking connections.

3. **Build time with full 1,323 content files**
   - What we know: Current ~1,492 pages build successfully. Adding 1,233 more content files (each ~200-400 lines of TypeScript) will increase build time.
   - What's unclear: Exact build time impact. Community reports suggest 2,800 pages could take 30-40 minutes.
   - Recommendation: Monitor after each city batch. If approaching 35+ minutes, consider ISR fallback for less-trafficked cities.

## Sources

### Primary (HIGH confidence)
- Codebase analysis: ComboTemplate.tsx, ServiceTemplate.tsx, CityTemplate.tsx, CityServicesGrid.tsx, slug-registry.ts, combo-content/schema.ts, combo-content/index.ts, combos.ts, cities.ts, Footer.tsx, Breadcrumbs.tsx, LeadForm.tsx, StickyFormSidebar.tsx -- all read directly from source
- Vercel limits documentation: https://vercel.com/docs/limits/overview -- 45min build time limit confirmed for Pro tier

### Secondary (MEDIUM confidence)
- Reverse silo methodology: https://hvseo.co/blog/the-hidden-hero-of-on-page-seo-reverse-content-silos/ -- detailed POP methodology rules
- Reverse silo overview: https://www.synscribe.com/blog/kyle-roofs-reverse-silo -- Kyle Roof methodology summary
- Next.js generateStaticParams: https://nextjs.org/docs/app/api-reference/functions/generate-static-params -- official docs

### Tertiary (LOW confidence)
- Build time estimates for 2,000+ pages: based on community reports in GitHub discussions (https://github.com/vercel/next.js/discussions/14122) -- actual times vary significantly by content complexity and machine specs

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - all libraries already in use, no new dependencies
- Architecture: HIGH - follows established patterns from Phases 3-4, codebase thoroughly analyzed
- Linking engine: HIGH - all data needed already exists in registry (adjacentCityIds, services, combos)
- Reverse silo rules: MEDIUM - based on external SEO methodology sources, cross-verified across multiple articles
- Build time: LOW - estimates based on community reports, actual performance depends on content size and Vercel machine specs
- Pitfalls: HIGH - based on patterns observed in Phases 3-5 (metaDescription trimming, validation crashes, voice consistency)

**Research date:** 2026-03-07
**Valid until:** 2026-04-07 (stable -- no fast-moving dependencies)
