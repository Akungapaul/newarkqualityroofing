# Phase 3: Service Pages - Research

**Researched:** 2026-03-06
**Domain:** Next.js 16 service page template with 63 pages, long-form content, sticky sidebar forms, breadcrumbs, related services
**Confidence:** HIGH

## Summary

Phase 3 transforms the existing placeholder `ServiceTemplate` into a full-featured, conversion-optimized service page template and populates all 63 services with 2,000+ words of content each. The codebase already has the routing infrastructure (catch-all `[slug]/page.tsx` dispatcher), data layer (63 validated services in `services.ts`), `LeadForm` component, and `FaqAccordion` component. The primary work is: (1) rebuilding ServiceTemplate with the 10-section layout defined in CONTEXT.md, (2) creating a service content data layer for the long-form content, and (3) building supporting section components (sticky sidebar, breadcrumbs, related services cards, process steps, dual-audience sections).

The stack is locked: Next.js 16, React 19, Tailwind v4, Zod 3.25.x, Cormorant fonts. No new dependencies are needed. All service pages are statically generated at build time via `generateStaticParams`. The `ServiceTemplate` is a server component that receives a `Service` object and renders the full page -- it can call server-side data functions directly.

**Primary recommendation:** Extend the Service data model with a `ServiceContent` type that holds all 10 sections of long-form content, create a content data file per service category (8 files), and build the ServiceTemplate as a composition of reusable section components.

## Standard Stack

### Core (Already Installed -- No New Dependencies)
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 16.1.6 | SSG, routing, server components | Already in use |
| React | 19.2.3 | UI rendering | Already in use |
| Tailwind CSS | v4 | Styling with @theme tokens | Already in use |
| Zod | 3.25.x | Content validation | Already in use |

### Supporting (Built-in Browser/CSS)
| Feature | Purpose | When to Use |
|---------|---------|-------------|
| CSS `position: sticky` | Sidebar form follows scroll | Desktop sidebar |
| `<details>/<summary>` | FAQ accordion | Already pattern in FaqAccordion |
| `scroll-margin-top` | Anchor offset for sticky header | Jump links avoiding header overlap |
| Intersection Observer | Optional: animate sections on scroll | If motion effects desired |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| CSS sticky | JS scroll listener | CSS sticky is simpler, zero JS, handles all cases |
| Separate content files per service | Single monolithic content file | Per-category files balance maintainability vs import overhead |
| MDX for content | TypeScript data objects | TS objects are consistent with existing pattern (services.ts, faq.ts) and allow Zod validation |

**Installation:**
```bash
# No new packages needed
```

## Architecture Patterns

### Recommended Project Structure
```
src/
  components/
    templates/
      ServiceTemplate.tsx          # Main template (rebuild from placeholder)
    sections/
      ServiceHero.tsx              # Split hero: content left + form right
      ServiceOverview.tsx          # 2-3 paragraph overview
      ServiceSigns.tsx             # "Signs You Need" bullet list
      ServiceApproach.tsx          # "Our Approach" section
      ServiceAudience.tsx          # Reusable for both Homeowners/Business Owners
      ServiceProcess.tsx           # Numbered process steps
      ServiceFaq.tsx               # Service-specific FAQ (wraps FaqAccordion)
      RelatedServices.tsx          # 3-4 related service cards
      ServiceCtaBanner.tsx         # Bottom CTA + inline form
      Breadcrumbs.tsx              # Reusable breadcrumb component
      StickyFormSidebar.tsx        # Sticky sidebar wrapper for LeadForm
      FloatingCtaButton.tsx        # Mobile floating CTA button (client component)
  data/
    service-content/
      repair-maintenance.ts        # Content for 10 repair/maintenance services
      residential-roof-types.ts    # Content for 9 residential roof type services
      commercial-roof-types.ts     # Content for 8 commercial roof type services
      components-specialty.ts      # Content for 10 component/specialty services
      energy-solar.ts              # Content for 5 energy/solar services
      commercial-services.ts       # Content for 5 commercial services
      design-consultation.ts       # Content for 3 design/consultation services
      replacement-sub-pages.ts     # Content for 15 replacement sub-pages
      index.ts                     # Re-exports + lookup function + Zod validation
  lib/
    schemas.ts                     # Extended with ServiceContentSchema
```

### Pattern 1: Service Content Data Model
**What:** Each service's long-form content is a typed object with fields for each of the 10 sections defined in CONTEXT.md.
**When to use:** Every service page.
**Example:**
```typescript
// src/lib/schemas.ts (additions)
export const ServiceContentSchema = z.object({
  serviceId: z.string(),

  // Section 2: Service Overview
  overview: z.array(z.string()).min(2).max(3), // 2-3 paragraphs

  // Section 3: Signs You Need [Service]
  signsHeading: z.string(), // "Signs You Need Roof Repair"
  signs: z.array(z.string()).min(4).max(8),

  // Section 4: Our Approach
  approachHeading: z.string(),
  approachContent: z.array(z.string()).min(2).max(4),

  // Section 5: For Homeowners
  residential: z.object({
    heading: z.string(),
    content: z.array(z.string()).min(2).max(4),
    ctaLabel: z.string(), // "Get Home Estimate"
  }),

  // Section 6: For Business Owners
  commercial: z.object({
    heading: z.string(),
    content: z.array(z.string()).min(2).max(4),
    ctaLabel: z.string(), // "Get Commercial Quote"
  }),

  // Section 7: Our Process
  processSteps: z.array(z.object({
    title: z.string(),
    description: z.string(),
  })).min(4).max(7),

  // Section 8: FAQ
  faqs: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })).min(4).max(6),
});
```

### Pattern 2: Split Hero Layout
**What:** 60/40 or 3/2 grid split with service content left (H1, benefit bullets, click-to-call) and LeadForm right.
**When to use:** Every service page hero.
**Example:**
```typescript
// ServiceHero.tsx
<section className="bg-forest-dark relative overflow-hidden">
  {/* Background layers similar to homepage HeroSection */}
  <div className="mx-auto max-w-7xl px-6 py-16 lg:grid lg:grid-cols-5 lg:gap-12 lg:px-8 lg:py-24">
    {/* Breadcrumbs above content */}
    <div className="lg:col-span-5">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: service.name },
      ]} />
    </div>

    {/* Left: H1 + bullets + CTA */}
    <div className="text-text-on-dark lg:col-span-3">
      <h1 className="font-heading text-4xl font-bold sm:text-5xl">
        {service.name}
      </h1>
      <ul className="mt-6 space-y-3">
        {benefits.map(b => (
          <li key={b} className="flex items-start gap-2">
            <CheckIcon />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <PhoneNumber size="lg" />
    </div>

    {/* Right: Lead Form */}
    <div className="lg:col-span-2">
      <LeadForm variant="hero" defaultService={service.slug} serviceGroups={serviceGroups} />
    </div>
  </div>
</section>
```

### Pattern 3: Sticky Sidebar + Content Layout (Below Hero)
**What:** Content in ~65% width with sticky sidebar form that follows scroll on desktop. Mobile shows form in hero only + floating CTA.
**When to use:** All content sections below the hero.
**Example:**
```typescript
// Two-column layout below hero
<div className="mx-auto max-w-7xl px-6 py-12 lg:grid lg:grid-cols-3 lg:gap-12 lg:px-8">
  {/* Main content: ~65% */}
  <div className="lg:col-span-2">
    <ServiceOverview ... />
    <ServiceSigns ... />
    <ServiceApproach ... />
    <ServiceAudience variant="residential" ... />
    <ServiceAudience variant="commercial" ... />
    <ServiceProcess ... />
    <ServiceFaq ... />
  </div>

  {/* Sticky sidebar: ~35% */}
  <aside className="hidden lg:block">
    <div className="sticky top-24"> {/* top offset = header height + gap */}
      <LeadForm variant="standard" defaultService={service.slug} serviceGroups={serviceGroups} />
    </div>
  </aside>
</div>
```

### Pattern 4: Commercial-First Ordering
**What:** For the 5 dedicated commercial services, swap section order so commercial content appears before residential.
**When to use:** Services with IDs: commercial-roof-installation, commercial-roof-repair, commercial-roof-replacement, roof-thermal-imaging-inspections, infrared-roof-leak-detection.
**Example:**
```typescript
const commercialFirstIds = [
  'commercial-roof-installation',
  'commercial-roof-repair',
  'commercial-roof-replacement',
  'roof-thermal-imaging-inspections',
  'infrared-roof-leak-detection',
];

const isCommercialFirst = commercialFirstIds.includes(service.id);

// In ServiceTemplate:
{isCommercialFirst ? (
  <>
    <ServiceAudience variant="commercial" ... />
    <ServiceAudience variant="residential" ... />
  </>
) : (
  <>
    <ServiceAudience variant="residential" ... />
    <ServiceAudience variant="commercial" ... />
  </>
)}
```

### Pattern 5: Related Services by Category
**What:** Filter services by same category, exclude current service, take 3-4 as cards.
**When to use:** RelatedServices block at bottom of every service page.
**Example:**
```typescript
function getRelatedServices(currentService: Service, allServices: Service[]): Service[] {
  return allServices
    .filter(s => s.category === currentService.category && s.id !== currentService.id)
    .slice(0, 4);
}
```

### Anti-Patterns to Avoid
- **Importing Zod in client components:** Follow established pattern -- pass data as props from server components, never import schemas/Zod in client code.
- **Single monolithic content file:** 63 services x 2,000+ words = massive file. Split by category.
- **Client-side sticky behavior via JS:** CSS `position: sticky` handles this natively. Only use JS if needing "unstick at footer" behavior (Intersection Observer).
- **Hardcoding content in JSX:** All content must be in data files for maintainability and Zod validation.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Sticky sidebar | JS scroll listener with position calc | CSS `position: sticky` with `top` offset | Browser-native, zero JS, handles resize |
| FAQ accordion | Custom state management | `<details>/<summary>` HTML elements | Already established pattern in FaqAccordion.tsx |
| Breadcrumbs | Custom nav component | Simple ordered list with `<nav aria-label="Breadcrumb">` | Semantic HTML, screen reader friendly |
| Form component | New form for sidebar | Existing `LeadForm` with `variant` prop | Already built, tested, handles validation |
| Content validation | Manual checking | Zod schema with `z.array(ServiceContentSchema).parse()` | Consistent with project pattern, build-time crash on invalid data |

**Key insight:** The existing codebase already has most of the building blocks (LeadForm, FaqAccordion, PhoneNumber, design tokens). The work is composing them into the service template layout and creating the content data.

## Common Pitfalls

### Pitfall 1: Sticky Sidebar Overlapping Footer
**What goes wrong:** CSS `position: sticky` element overlaps the footer or bottom CTA banner.
**Why it happens:** Sticky elements stay in their container. If the container extends to the page bottom, the sidebar overlaps bottom sections.
**How to avoid:** Wrap sticky sidebar in a container that ends BEFORE the RelatedServices and CTA banner sections. The sticky element naturally "unsticks" when its container scrolls past.
**Warning signs:** Sidebar overlaps footer on long pages.

### Pitfall 2: Content Word Count Under 2,000
**What goes wrong:** Service pages don't meet the 2,000+ word minimum for SEO.
**Why it happens:** Skimpy content in overview, approach, or audience sections.
**How to avoid:** Each section needs substantive content. Rough word budget per section: overview (200), signs (150), approach (250), residential (300), commercial (300), process (200), FAQ (400), combined with headings and CTA text = 2,000+. Validate word count at build time or via a script.
**Warning signs:** Build-time check flags pages under 2,000 words.

### Pitfall 3: Duplicate H1 Tags
**What goes wrong:** Multiple H1 tags on a single page (e.g., one in hero, one in a section).
**Why it happens:** Section components independently using H1.
**How to avoid:** Only the ServiceHero renders H1. All other sections use H2/H3. Enforce in component API -- sections don't accept heading level as prop, they hardcode H2/H3.
**Warning signs:** Lighthouse SEO audit flags multiple H1s.

### Pitfall 4: LeadForm Client Bundle Bloat
**What goes wrong:** Importing Zod schemas or server data in LeadForm's parent causes client bundle inflation.
**Why it happens:** ServiceTemplate calls `getServiceMenuGroups()` which imports from services.ts which imports Zod.
**How to avoid:** ServiceTemplate is a server component. It calls `getServiceMenuGroups()` on the server and passes the plain array to LeadForm as a prop. This pattern is already established in layout.tsx and HeroSection.tsx.
**Warning signs:** Build output shows unexpectedly large client chunks.

### Pitfall 5: Mobile Form Accessibility
**What goes wrong:** Floating CTA button at bottom of viewport covers content or is not accessible.
**Why it happens:** Fixed positioning on mobile without proper spacing/z-index management.
**How to avoid:** Add `pb-16` (or similar) to the main content area on mobile to prevent the floating button from covering the last content. Use `aria-label` on the floating button. Ensure it links to the hero form via anchor `#lead-form` or opens a modal.
**Warning signs:** Content obscured by floating button on small screens.

### Pitfall 6: Build Time with 63 Long Pages
**What goes wrong:** Build time increases significantly with 63 pages of 2,000+ words each.
**Why it happens:** SSG generates all pages at build time.
**How to avoid:** This is expected behavior for SSG. Content is static data in TS files -- no external fetching needed. Build time should remain reasonable (under 2 minutes) since there's no API calls, just template rendering. Monitor with `next build` output.
**Warning signs:** Build exceeds 3 minutes.

## Code Examples

### Breadcrumbs Component
```typescript
// src/components/sections/Breadcrumbs.tsx
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1.5 font-body text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            {index > 0 && (
              <span className="text-parchment/40" aria-hidden="true">/</span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="text-parchment/70 transition-colors hover:text-copper-light"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-parchment" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

### Floating Mobile CTA Button
```typescript
// src/components/sections/FloatingCtaButton.tsx
'use client';

export function FloatingCtaButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-forest-light bg-forest-dark p-3 lg:hidden">
      <a
        href="#lead-form"
        className="block w-full rounded-md bg-copper py-3 text-center font-body font-semibold text-text-on-copper transition-colors hover:bg-copper-dark"
        aria-label="Get your free roofing estimate"
      >
        Get Free Estimate
      </a>
    </div>
  );
}
```

### Service Content Data Structure
```typescript
// src/data/service-content/repair-maintenance.ts
import type { ServiceContent } from './index';

export const repairMaintenanceContent: ServiceContent[] = [
  {
    serviceId: 'roof-repair',
    overview: [
      'Your roof is the first line of defense against Newark\'s harsh weather...',
      'At Newark Quality Roofing, we deliver fast, reliable roof repair services...',
      'Whether you are dealing with a minor leak or significant structural damage...',
    ],
    signsHeading: 'Signs You Need Roof Repair',
    signs: [
      'Water stains on ceilings or walls',
      'Missing, cracked, or curling shingles',
      'Granules accumulating in gutters',
      'Daylight visible through roof boards',
      'Sagging roof deck',
      'Higher than normal energy bills',
    ],
    approachHeading: 'Our Roof Repair Approach',
    approachContent: [
      'We begin every repair with a thorough inspection...',
      'Our team uses only premium materials...',
    ],
    residential: {
      heading: 'Roof Repair for Homeowners',
      content: [
        'Your home is your family\'s sanctuary...',
        'We understand the urgency when your roof is compromised...',
        'Our residential repair services include...',
      ],
      ctaLabel: 'Get Home Estimate',
    },
    commercial: {
      heading: 'Roof Repair for Business Owners',
      content: [
        'A damaged commercial roof threatens your business operations...',
        'We minimize downtime with efficient scheduling...',
        'All commercial repairs meet local building codes...',
      ],
      ctaLabel: 'Get Commercial Quote',
    },
    processSteps: [
      { title: 'Free Inspection', description: 'Thorough assessment of all damage...' },
      { title: 'Detailed Estimate', description: 'Transparent pricing with no hidden fees...' },
      { title: 'Professional Repair', description: 'Expert installation using premium materials...' },
      { title: 'Final Walkthrough', description: 'We inspect our work with you to ensure...' },
    ],
    faqs: [
      { question: 'How quickly can you repair my roof?', answer: 'For emergency repairs...' },
      { question: 'Do you warranty your repair work?', answer: 'Yes, all repairs come with...' },
      { question: 'Can you work with my insurance company?', answer: 'Absolutely...' },
      { question: 'How much does roof repair cost?', answer: 'Costs vary depending on...' },
    ],
  },
  // ... 9 more services in this category
];
```

### Content Lookup Function
```typescript
// src/data/service-content/index.ts
import { z } from 'zod';
import { ServiceContentSchema } from '@/lib/schemas';
import { repairMaintenanceContent } from './repair-maintenance';
// ... other category imports

export type ServiceContent = z.infer<typeof ServiceContentSchema>;

const allContent: ServiceContent[] = z.array(ServiceContentSchema).parse([
  ...repairMaintenanceContent,
  ...residentialRoofTypesContent,
  // ... etc
]);

const contentMap = new Map(allContent.map(c => [c.serviceId, c]));

export function getServiceContent(serviceId: string): ServiceContent {
  const content = contentMap.get(serviceId);
  if (!content) throw new Error(`Missing content for service: ${serviceId}`);
  return content;
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| JS scroll handlers for sticky | CSS `position: sticky` | Widespread since 2020 | Zero JS, better performance |
| Custom accordion with useState | `<details>/<summary>` HTML | Always available, now styled | Already in use in codebase |
| Page-level `getStaticProps` | Server components + direct imports | Next.js 13+ (App Router) | Already pattern in codebase |
| Client-side form state | `useActionState` (React 19) | React 19 | Already in LeadForm |

**Deprecated/outdated:**
- `getStaticProps`/`getServerSideProps`: Replaced by server components in App Router (already using App Router)
- Pages Router patterns: Entire codebase uses App Router

## Open Questions

1. **Content generation volume**
   - What we know: 63 services x 2,000+ words = 126,000+ words of content
   - What's unclear: Whether all content should be created in one plan or split across multiple plans by category
   - Recommendation: Split into multiple plans -- template/infrastructure first, then content by category group. This keeps each plan focused and reviewable.

2. **Sticky sidebar "unstick" at footer**
   - What we know: CSS sticky naturally unsticks when its container ends
   - What's unclear: Exact header height for `top` offset (need to measure deployed header)
   - Recommendation: Use a CSS variable or Tailwind `top-24` (6rem) which accommodates typical sticky headers. Fine-tune after visual inspection.

3. **Word count validation enforcement**
   - What we know: 2,000+ words is a requirement
   - What's unclear: Whether to enforce at schema level (Zod validation) or via a separate build script
   - Recommendation: Add a build script that counts words per service and warns/errors if under threshold. Don't bloat Zod schema with word counting logic.

4. **Image placeholders**
   - What we know: CONTEXT.md says no real photos yet (Phase 9 handles gallery). Claude's discretion on placeholder strategy.
   - What's unclear: Whether to use colored divs, SVG illustrations, or CSS-only decorative elements
   - Recommendation: Use CSS-only atmospheric backgrounds (gradient meshes, patterns) similar to the homepage hero -- no placeholder image boxes. This avoids visual "brokenness" while photos are pending.

## Sources

### Primary (HIGH confidence)
- Codebase inspection: `src/components/templates/ServiceTemplate.tsx` (current placeholder)
- Codebase inspection: `src/components/forms/LeadForm.tsx` (existing form, variant prop, serviceGroups prop pattern)
- Codebase inspection: `src/components/sections/FaqAccordion.tsx` (existing accordion with `<details>/<summary>`)
- Codebase inspection: `src/components/sections/HeroSection.tsx` (split layout pattern, background treatment)
- Codebase inspection: `src/app/[slug]/page.tsx` (dispatcher, server component pattern)
- Codebase inspection: `src/data/services.ts` (63 services, categories, residential/commercial flags)
- Codebase inspection: `src/data/nav-data.ts` (getServiceMenuGroups pattern, category labels/order)
- Codebase inspection: `src/app/globals.css` (Tailwind v4 @theme tokens)
- CONTEXT.md: User decisions on layout, content structure, audience sections

### Secondary (MEDIUM confidence)
- CSS `position: sticky` is universally supported in modern browsers (caniuse.com)
- Next.js 16 server component patterns consistent with App Router documentation

### Tertiary (LOW confidence)
- None -- all findings verified against codebase

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- zero new dependencies, all verified in package.json
- Architecture: HIGH -- patterns derived from existing codebase conventions
- Content structure: HIGH -- directly from CONTEXT.md decisions
- Pitfalls: HIGH -- derived from established web development patterns and codebase inspection

**Research date:** 2026-03-06
**Valid until:** 2026-04-06 (stable stack, no fast-moving dependencies)
