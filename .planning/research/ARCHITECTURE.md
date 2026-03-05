# Architecture Patterns

**Project:** Newark Quality Roofing - Programmatic SEO Lead Gen Site
**Domain:** Conversion-first roofing lead generation with ~1,697 programmatic pages
**Researched:** 2026-03-05
**Confidence:** HIGH (verified with Next.js v16.1.6 official docs + ecosystem research)

---

## Recommended Architecture

### High-Level System Diagram

```
+------------------------------------------------------+
|                    BUILD PIPELINE                     |
|                                                      |
|  [Data Layer]  -->  [Content Engine]  -->  [Pages]   |
|                                                      |
|   TypeScript        Template +            SSG output |
|   data files        variation engine      on Vercel  |
+------------------------------------------------------+

Data Layer (/data/):
  services.ts              (63 services)
  cities.ts                (21 cities)
  combos.ts                (1,323 service x city -- generated)
  comparisons.ts           (30 comparisons)
  articles.ts              (252 supporting articles)
  business.ts              (NAP, phone, hours)
  slugRegistry.ts          (flat slug -> page type resolver)
  types.ts                 (shared interfaces)

Content Engine (/lib/):
  content/
    templates.ts           (sentence-level template system)
    variations.ts          (content variation patterns)
  schema/
    localBusiness.ts       (JSON-LD: LocalBusiness)
    service.ts             (JSON-LD: Service)
    faq.ts                 (JSON-LD: FAQPage)
    breadcrumb.ts          (JSON-LD: BreadcrumbList)
    review.ts              (JSON-LD: AggregateRating)
  metadata.ts              (title, description, OG)
  links.ts                 (reverse silo link resolver)
  gohighlevel.ts           (webhook proxy)

Page Layer (/app/):
  [slug]/page.tsx           (single catch-all for flat URLs)
  layout.tsx                (root layout, global schema)
  page.tsx                  (homepage)
  api/lead/route.ts         (form submission proxy)
  sitemap.ts                (programmatic sitemap)
  robots.ts                 (robots.txt)
```

### Why This Shape

The architecture is intentionally **flat and data-driven**. Every programmatic page renders through a single `[slug]/page.tsx` route. The slug resolves to a page type (service, city, combo, comparison, article) and the appropriate template + data are selected. This avoids route proliferation and keeps the mental model simple: one slug, one resolver, one render pipeline.

**Why TypeScript data files, not a CMS or database:**

- SSG means all data is consumed at build time only -- no runtime queries
- TypeScript gives compile-time validation (misspelled city name = build error)
- No API rate limits, no network latency during build
- Content lives in the repo -- version controlled, reviewable in PRs
- At 1,700 pages this is well within "data files" territory (~200KB total)

---

## Component Boundaries

### Layer 1: Data Layer (`/data/`)

| Module | Responsibility | Exports |
|--------|---------------|---------|
| `types.ts` | Shared TypeScript interfaces for all data | `Service`, `City`, `Combo`, `Comparison`, `Article`, `PageType`, `SlugResolution` |
| `services.ts` | 63 service definitions (slug, name, category, description seeds, FAQ seeds, keywords, related services) | `services`, `getServiceBySlug()`, `getServicesByCategory()` |
| `cities.ts` | 21 city definitions (slug, name, county, population, zip codes, geo coords, landmarks, neighboring cities, building stock) | `cities`, `getCityBySlug()`, `getNearbyCities()` |
| `combos.ts` | Generator that produces 1,323 service-city combinations with unique content variations | `getCombos()`, `getComboBySlug()`, `getCombosForCity()`, `getCombosForService()` |
| `comparisons.ts` | 30 comparison page definitions (slug, items compared, verdict, comparison matrix) | `comparisons`, `getComparisonBySlug()` |
| `articles.ts` | 252 supporting article definitions (slug, title, parent money page slug, content blocks, next article slug) | `articles`, `getArticleBySlug()`, `getArticlesForMoneyPage()` |
| `business.ts` | Business info: NAP, phone, service area, hours | `business` |
| `slugRegistry.ts` | Master registry mapping every slug to its page type and lookup key | `resolveSlug()`, `getAllSlugs()` |

**Boundary rule:** Data modules are the single source of truth. No content lives in components. Changes to data trigger rebuilds and produce new pages.

**Data shape examples:**

```typescript
// data/types.ts

interface Service {
  slug: string              // "roof-repair"
  name: string              // "Roof Repair"
  category: ServiceCategory // "repair" | "installation" | "maintenance" | "specialty"
  descriptionSeeds: string[] // 5-8 paragraph variations for templates
  faqSeeds: FAQ[]           // 5-10 question/answer pairs
  priceRange: string        // "$300 - $1,500"
  timeEstimate: string      // "1-3 days"
  relatedServiceSlugs: string[]
  keywords: { primary: string; secondary: string[]; longtail: string[] }
  firstArticleSlug: string  // reverse silo: link to ONE supporting article
}

interface City {
  slug: string              // "montclair-nj"
  name: string              // "Montclair"
  state: string             // "NJ"
  county: string            // "Essex County"
  zipCodes: string[]        // ["07042", "07043"]
  geo: { lat: number; lng: number }
  population: number
  landmarks: string[]       // local references for content variation
  neighborhoods: string[]   // for locality-specific content
  buildingStock: string     // "historic" | "suburban" | "mixed" -- affects content templates
  neighboringCitySlugs: string[]
}
```

### Layer 2: Slug Registry and Page Dispatcher

The slug registry is the routing brain. It maps flat slugs to page types.

```typescript
// data/slugRegistry.ts
type PageType = 'home' | 'service' | 'city' | 'combo' | 'comparison' | 'article' | 'static'

interface SlugResolution {
  type: PageType
  key: string // lookup key for the specific data module
}

// Built at import time from all data modules
const registry = new Map<string, SlugResolution>()

// Registration:
// "roof-repair"                 -> { type: "service", key: "roof-repair" }
// "montclair-nj"                -> { type: "city", key: "montclair-nj" }
// "roof-repair-montclair-nj"    -> { type: "combo", key: "roof-repair__montclair-nj" }
// "shingle-vs-metal-roofing"    -> { type: "comparison", key: "shingle-vs-metal" }
// "how-to-spot-roof-damage"     -> { type: "article", key: "how-to-spot-roof-damage" }
```

The page component at `app/[slug]/page.tsx` uses this registry:

```typescript
// app/[slug]/page.tsx
export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export const dynamicParams = false // 404 for unknown slugs

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const resolution = resolveSlug(slug)
  if (!resolution) return {}
  return generatePageMetadata(resolution)
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const resolution = resolveSlug(slug)
  if (!resolution) notFound()

  switch (resolution.type) {
    case 'service':    return <ServiceTemplate data={getServiceBySlug(resolution.key)} />
    case 'city':       return <CityTemplate data={getCityBySlug(resolution.key)} />
    case 'combo':      return <ComboTemplate data={getComboBySlug(resolution.key)} />
    case 'comparison': return <ComparisonTemplate data={getComparisonBySlug(resolution.key)} />
    case 'article':    return <ArticleTemplate data={getArticleBySlug(resolution.key)} />
    default: notFound()
  }
}
```

**Why `dynamicParams = false`:** All 1,697 pages are known at build time. Unknown slugs should 404, not generate on-demand. This prevents spam/exploit URLs from triggering renders. Verified via [Next.js official docs](https://nextjs.org/docs/app/api-reference/functions/generate-static-params).

**Why a single `[slug]` route, not separate routes:** A flat URL structure (`/roof-repair-montclair-nj`) means all page types share the same URL depth. Using route groups with different file-system paths but all at `/{slug}` would create conflicts. A single `[slug]` route with a dispatch layer is cleaner and avoids ambiguity.

### Layer 3: Content Engine (`/lib/`)

| Module | Responsibility | Communicates With |
|--------|---------------|-------------------|
| `content/templates.ts` | Sentence-level template rendering for combo pages | Data layer (service + city data) |
| `content/variations.ts` | Content variation engine (anti-duplicate) | Templates, data layer |
| `schema/*.ts` | JSON-LD structured data factories (5 files) | Data layer, rendered into page components |
| `metadata.ts` | Title, description, canonical, OG metadata | Data layer, slug resolver |
| `links.ts` | Reverse silo internal link resolution | Data layer (all page data) |

**Boundary rule:** Content engine functions are pure functions. They take data in, return strings/objects out. No side effects, no data fetching.

#### Content Variation System (Critical for 1,323 Combo Pages)

The 1,323 combo pages cannot be simple `{city} + {service}` string interpolation -- Google penalizes thin/duplicate content. The content variation system uses deterministic hashing to select from template variant pools:

```typescript
// lib/content/variations.ts

interface TemplateBlock {
  id: string
  variants: string[]  // 5-10 sentence variants per block
}

// Deterministic selection: same slug always produces same content
function hashSeed(slug: string): number {
  let hash = 0
  for (let i = 0; i < slug.length; i++) {
    hash = ((hash << 5) - hash) + slug.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash)
}

function selectVariant(variants: string[], slug: string): string {
  const seed = hashSeed(slug)
  return variants[seed % variants.length]
}
```

**Five variation strategies used together:**

1. **Sentence-level variation:** Each paragraph assembled from variant sentence pools (5-10 options per block)
2. **City-specific insertions:** Local landmarks, county references, neighborhoods, zip codes, building stock
3. **Service-category branching:** Different content structures for repair vs. installation vs. maintenance
4. **Conditional blocks:** Show/hide sections based on city population, service complexity
5. **Deterministic seeding:** `hash(slug)` selects variants -- same slug always produces same content, different slugs produce different content

Each page assembles from ~15-20 template blocks. With 5-10 variants per block, this produces 10^15+ possible combinations, making true duplicates impossible.

#### Schema Generator System

Factory pattern producing typed JSON-LD for each page type. Uses `schema-dts` for TypeScript types. Follows [Next.js official JSON-LD guide](https://nextjs.org/docs/app/guides/json-ld).

```typescript
// lib/schema/localBusiness.ts
import type { LocalBusiness, WithContext } from 'schema-dts'

export function generateLocalBusinessSchema(business: BusinessData): WithContext<LocalBusiness> {
  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    name: business.name,
    telephone: business.phone,
    address: { '@type': 'PostalAddress', ...business.address },
    geo: { '@type': 'GeoCoordinates', ...business.geo },
    areaServed: business.serviceArea.map(city => ({
      '@type': 'City', name: city
    })),
    // ...
  }
}

// Rendering pattern (from Next.js official docs):
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
  }}
/>
```

**Schema types per page type:**

| Page Type | Schemas Applied |
|-----------|----------------|
| All pages | LocalBusiness, BreadcrumbList |
| Service pages | + Service, FAQPage |
| City pages | + Service (aggregate), FAQPage |
| Combo pages | + Service, FAQPage, AggregateRating |
| Comparison pages | + FAQPage |
| Article pages | + Article |

#### Internal Linking Engine (Reverse Silo)

The reverse silo linking is the most critical SEO architecture decision. Links are pre-computed from data, not hardcoded.

```typescript
// lib/links.ts

interface LinkSet {
  // For money pages (service, city, combo):
  supportingArticle: string | null    // Link to ONE supporting article (reverse silo rule)
  breadcrumbTrail: { label: string; slug: string }[]

  // For supporting articles:
  moneyPage: string                   // Link back to parent money page
  nextArticle: string | null          // Link to next article in chain

  // Contextual cross-links:
  relatedServices: string[]           // 3-5 related service slugs
  nearbyAreas: string[]               // 3-5 nearby city slugs (for city/combo pages)
  sameServiceOtherCities: string[]    // Same service in nearby cities (for combo pages)
  sameCityOtherServices: string[]     // Other services in same city (for combo pages)
}
```

**Reverse silo rules enforced by the engine:**

1. Money pages link to exactly ONE supporting article (not multiple)
2. Supporting articles link back to their parent money page AND to the next supporting article in the chain
3. Supporting articles do NOT link to other money pages (silo isolation)
4. Cross-silo links only happen through footer mega-links and contextual "related/nearby" sections
5. Every page has a breadcrumb trail (Home > Category > Page)

### Layer 4: Page Templates (5 Templates)

Each template is a React Server Component that receives typed data and renders the full page.

| Template | Pages | Key Sections |
|----------|-------|-------------|
| `ServiceTemplate` | 63 | Hero + form, service description, process steps, pricing range, FAQ, related services links, supporting article link |
| `CityTemplate` | 21 | Hero + form, city-specific roofing info, neighborhoods served, all services in this city links, nearby cities links |
| `ComboTemplate` | 1,323 | Hero + form, service-in-city content (variation engine), local context, process steps, FAQ, same-service-nearby-cities, other-services-same-city |
| `ComparisonTemplate` | 30 | Hero + form, comparison matrix, detailed analysis, verdict, related comparisons, CTA |
| `ArticleTemplate` | 252 | Article content, sidebar form, link back to money page, link to next supporting article |

**Template composition:** Templates compose shared UI components but have distinct layouts. The LeadForm appears above the fold on every money page template.

```typescript
// components/templates/ComboTemplate.tsx
export function ComboTemplate({ data }: { data: ComboPageData }) {
  const links = generateLinkSet(data)
  const schemas = [
    generateLocalBusinessSchema(business),
    generateServiceSchema(data.service, business),
    generateFAQSchema(data.faqs),
    generateBreadcrumbSchema(links.breadcrumbTrail),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
        />
      ))}
      <Hero title={data.heroTitle} subtitle={data.heroSubtitle} />
      <LeadForm source={data.slug} />
      <TrustBar />
      <ServiceDescription content={data.descriptionBlocks} />
      <ProcessSteps service={data.service} />
      <LocalExpertise city={data.city} service={data.service} />
      <PricingSection service={data.service} />
      <FAQSection items={data.faqs} />
      <TestimonialBlock />
      <InternalLinks links={links} />
      <Breadcrumbs trail={links.breadcrumbTrail} />
    </>
  )
}
```

### Layer 5: Shared UI Components

| Component | Used By | Responsibility |
|-----------|---------|---------------|
| `LeadForm` | All templates | Form fields, client-side validation, POST to `/api/lead`, thank-you redirect |
| `ClickToCall` | All templates, header, footer | Phone number link with tracking attributes |
| `Breadcrumbs` | All templates | Breadcrumb trail from link set |
| `Header` | Root layout | Logo, nav, phone number, mobile menu |
| `Footer` | Root layout | Mega-footer with all cities, service categories, contact info, legal |
| `FAQSection` | Service, Combo, Comparison | Accordion FAQ |
| `ServiceCard` | City, Homepage | Card linking to a service page |
| `CityCard` | Service, Homepage | Card linking to a city page |
| `RelatedServices` | Service, Combo | "Other services" internal link block |
| `NearbyCities` | City, Combo | "Nearby cities" internal link block |
| `TrustBar` | Homepage, Service, City | Trust indicators (years, jobs completed, ratings) |
| `TestimonialBlock` | Homepage, Service, City | Customer testimonials |
| `InternalLinks` | All templates | Renders contextual internal links from LinkSet |

**Boundary rule:** Components are presentational. They receive props and render UI. The only exception is `LeadForm` which contains GoHighLevel submission logic (client-side).

### Layer 6: Integration (Minimal Runtime)

| Module | Responsibility | Flow |
|--------|---------------|------|
| `app/api/lead/route.ts` | Proxy form submissions to GoHighLevel | Client POST -> validation -> add metadata -> forward to GHL webhook -> return status |
| `lib/gohighlevel.ts` | GoHighLevel webhook client | Called by API route only |

**Why an API route proxy instead of direct client-to-webhook:**

- Hides GoHighLevel webhook URL from client source (security)
- Adds server-side validation layer (prevents spam/abuse)
- Attaches metadata (source page URL, timestamp, page type) that the client should not control
- Enables future additions (email notification, logging) without client changes

---

## Data Flow

### Build-Time Flow (Primary -- All Pages)

```
1. next build triggers
2. app/[slug]/page.tsx -> generateStaticParams()
   -> slugRegistry.getAllSlugs() returns ~1,697 slug objects
3. For each slug, Next.js calls the Page component (parallel in Next.js 15+):
   a. resolveSlug(slug) -> { type, key } (Map lookup, O(1))
   b. Data fetched from TypeScript module (all in-memory, no network)
   c. generateMetadata() produces title, description, canonical, OG tags
   d. Content variation engine selects template variants (deterministic)
   e. Schema generators produce JSON-LD objects
   f. Internal linking engine resolves related page links
   g. Template renders with all data
   h. Static HTML output written to .next/static
4. app/sitemap.ts generates XML sitemap from all slugs
5. app/robots.ts generates robots.txt
6. Deploy to Vercel CDN
```

### Runtime Flow (Minimal -- Form Submissions Only)

```
1. Vercel CDN serves static HTML (zero server compute for page loads)
2. Client-side hydration activates:
   - LeadForm (interactive on user focus)
   - ClickToCall tracking (on click)
   - Analytics (on page load)
   - Scroll-triggered animations (on scroll)
3. On form submission:
   a. Client validates fields
   b. POST to /api/lead (Vercel serverless function)
   c. API route validates, adds metadata, forwards to GoHighLevel webhook
   d. Client redirects to /thank-you
```

### Content Update Flow

```
1. Edit TypeScript data files in data/ directory
2. Commit to repository
3. Vercel triggers rebuild (~3-8 min for 1,697 pages)
4. All pages regenerated with new content
5. New static files deployed to CDN
```

**No ISR needed.** Content changes are infrequent (adding a service, updating copy). A full rebuild at 1,700 pages is fast enough. ISR adds complexity without benefit at this scale.

---

## Build Optimization for 1,700+ Pages

### Strategy: Full SSG

At 1,697 pages, full SSG is the right approach. Expected build time: 3-8 minutes on Vercel, well within the 45-minute limit.

### Optimization Techniques

1. **All data is local TypeScript files.** No network calls during build. Each page's `resolveSlug()` is a hash map lookup.

2. **Module-level data caching.** Data files are imported once and cached in module scope. All 1,697 pages read from the same in-memory objects.

```typescript
// data/slugRegistry.ts -- module-level Map, built once on first import
import { services } from './services'
import { cities } from './cities'
import { getCombos } from './combos'

const registry = new Map<string, SlugResolution>()

// Populated at module load (once per build, shared across all page renders)
for (const s of services) registry.set(s.slug, { type: 'service', key: s.slug })
for (const c of cities) registry.set(c.slug, { type: 'city', key: c.slug })
for (const x of getCombos()) registry.set(x.slug, { type: 'combo', key: x.key })
// ... comparisons, articles
```

3. **Next.js 15+ parallel page generation.** Pages are generated in parallel across CPU cores automatically. No special configuration needed.

4. **Single sitemap file.** 1,697 URLs is well under the 50,000 URL limit. No need for sitemap splitting.

5. **Content variation is compute-cheap.** Hash function + modulo selection is O(1) per block. No AI calls or complex processing during build.

---

## Project File Structure

```
src/
  app/
    layout.tsx                    # Root layout: Header, Footer, fonts, global styles
    page.tsx                      # Homepage
    [slug]/
      page.tsx                    # Catch-all dispatcher for ~1,690 programmatic pages
    about/page.tsx                # Static page
    contact/page.tsx              # Static page
    thank-you/page.tsx            # Post-form page
    privacy-policy/page.tsx       # Legal page
    api/
      lead/route.ts               # GoHighLevel webhook proxy
    sitemap.ts                    # XML sitemap generator
    robots.ts                     # robots.txt generator
    not-found.tsx                 # 404 page

  components/
    templates/                    # Page type templates (5 files)
      ServiceTemplate.tsx
      CityTemplate.tsx
      ComboTemplate.tsx
      ComparisonTemplate.tsx
      ArticleTemplate.tsx
    sections/                     # Reusable page sections
      Hero.tsx
      FAQSection.tsx
      ProcessSteps.tsx
      TestimonialBlock.tsx
      PricingSection.tsx
      LocalExpertise.tsx
      ServiceDescription.tsx
      TrustBar.tsx
    conversion/                   # Lead gen components
      LeadForm.tsx
      ClickToCall.tsx
      FloatingCTA.tsx
    seo/                          # SEO components
      SchemaScripts.tsx
      InternalLinks.tsx
      Breadcrumbs.tsx
      RelatedServices.tsx
      NearbyCities.tsx
    layout/                       # Layout components
      Header.tsx
      Footer.tsx
      Navigation.tsx
      MobileMenu.tsx
    ui/                           # Base UI primitives
      Button.tsx
      Card.tsx
      Accordion.tsx
      Badge.tsx

  data/                           # Source data (committed to repo)
    types.ts                      # Shared TypeScript interfaces
    services.ts                   # 63 services
    cities.ts                     # 21 cities
    combos.ts                     # 1,323 combo generator
    comparisons.ts                # 30 comparisons
    articles.ts                   # 252 supporting articles
    business.ts                   # NAP, phone, hours
    slugRegistry.ts               # Master slug -> page type resolver

  lib/                            # Business logic (pure functions)
    content/
      templates.ts                # Template block rendering
      variations.ts               # Content variation engine
    schema/
      localBusiness.ts            # JSON-LD: LocalBusiness / RoofingContractor
      service.ts                  # JSON-LD: Service
      faq.ts                      # JSON-LD: FAQPage
      breadcrumb.ts               # JSON-LD: BreadcrumbList
      review.ts                   # JSON-LD: AggregateRating
      article.ts                  # JSON-LD: Article
    metadata.ts                   # generateMetadata helper
    links.ts                      # Reverse silo internal linking engine
    gohighlevel.ts                # Webhook client
    utils.ts                      # Slug generation, hash, formatting

  styles/
    globals.css                   # Tailwind base + CSS variables + brand tokens

public/
  images/
    services/                     # Stock photos per service
    cities/                       # Stock photos per city
    brand/                        # Logo, favicon, OG image template
  fonts/                          # Self-hosted display + body fonts
```

**Key structural decisions:**

- `src/` directory for clean separation from config files
- Templates in `components/templates/` -- they are components, not routes
- Data layer in `data/` -- clearly separated from UI and lib code
- Schema generators in `lib/schema/` -- pure functions, easily testable
- Static pages (about, contact, thank-you, privacy) get their own route folders -- simple and few enough not to need the dispatcher

---

## Patterns to Follow

### Pattern 1: Data-Driven Content Generation

**What:** All page content derives from structured TypeScript data files. No hardcoded content in components.

**When:** Every page. No exceptions.

**Why:** Enables bulk content updates, ensures consistency, makes content auditable. When adding a new city, you add one entry to `cities.ts` and 63 new combo pages appear automatically.

### Pattern 2: Deterministic Content Variation

**What:** Use `hash(slug)` as a seed for selecting template variants. Same slug always produces identical output across builds.

**When:** All 1,323 combo pages.

**Why:** Builds are reproducible. Content can be previewed and audited. No random drift between deploys.

### Pattern 3: Composable Schema Generation

**What:** Schema generators are pure functions that take data and return JSON-LD objects. Pages compose multiple schemas.

**When:** Every page needs multiple schema types (LocalBusiness + Service + FAQ + Breadcrumb).

**Implementation:** Render each as a separate `<script type="application/ld+json">` tag per [Next.js official guidance](https://nextjs.org/docs/app/guides/json-ld). Use `schema-dts` for TypeScript types.

### Pattern 4: Template Composition (Not Inheritance)

**What:** Templates compose sections. Sections compose UI components. No template inheritance or deep conditional branching.

**When:** All 5 page templates.

**Why:** Each page type needs different section ordering, different sections, different data shapes. Composition handles this cleanly. A `ComboTemplate` is not a "variant" of `ServiceTemplate` -- it is its own composition of shared building blocks.

### Pattern 5: Build-Time Link Validation

**What:** The slug registry validates that all internal links resolve to real pages. Build fails on broken links.

**When:** Every build.

**Why:** With 1,697 pages and thousands of internal links, manual link checking is impossible. The linking engine should assert at import time that every slug in `relatedServiceSlugs`, `neighboringCitySlugs`, `firstArticleSlug`, etc. exists in the registry.

---

## Anti-Patterns to Avoid

### Anti-Pattern 1: CMS or Database for Static Content

**What:** Using Contentful, Sanity, Strapi, or Postgres for content that is fully known at build time.

**Why bad:** Adds API dependency during build (rate limits, network failures), requires subscription costs, makes content harder to version control. For 1,700 pages of formulaic content, a CMS editorial UI is not helpful -- the content is programmatic.

**Instead:** TypeScript data files in the repo. Content is code.

### Anti-Pattern 2: Nested URL Structure

**What:** Building `/services/roof-repair/montclair-nj` or using route groups that produce non-flat URLs.

**Why bad:** The flat URL structure is an SEO decision. Nested URLs dilute keyword density in the URL itself and require restructuring if the site architecture changes.

**Instead:** Single `[slug]` catch-all with flat slugs. `roof-repair-montclair-nj` is one segment.

### Anti-Pattern 3: Client-Side Internal Linking Logic

**What:** Computing related pages, nearby cities, or silo links in client-side JavaScript.

**Why bad:** Search engine crawlers may not execute JavaScript reliably. Internal links must be in the static HTML for crawlability and link equity flow.

**Instead:** All internal links resolved at build time in Server Components. Every link is in the pre-rendered HTML.

### Anti-Pattern 4: Single Monolithic Template

**What:** One template component with massive conditional rendering for all 5 page types.

**Why bad:** Unreadable, untestable. Service pages and article pages have fundamentally different layouts.

**Instead:** Five focused templates dispatched by the slug resolver. Shared sections compose into each template differently.

### Anti-Pattern 5: Manual Link Maintenance

**What:** Hardcoding `<Link href="/roof-repair-montclair-nj">` in templates or content.

**Why bad:** Links break when slugs change. Reverse silo rules cannot be validated. Dead links across 1,697 pages are invisible.

**Instead:** Linking engine resolves all slugs from data. Build-time validation catches broken links before deploy.

### Anti-Pattern 6: Direct GoHighLevel Webhook from Client

**What:** Putting the GoHighLevel webhook URL in client-side code.

**Why bad:** Exposes webhook URL (spam target), no server-side validation, no source verification.

**Instead:** Client POSTs to `/api/lead`. API route validates and forwards to GoHighLevel.

---

## Scalability Considerations

| Concern | At 1,700 pages (now) | At 5,000 pages | At 20,000+ pages |
|---------|---------------------|----------------|-------------------|
| Build time | 3-8 min (full SSG) | 10-20 min (full SSG) | Switch to ISR for long-tail pages |
| Data file size | ~200KB (trivial) | ~600KB (still fine) | Split into per-category files |
| Slug registry | In-memory Map, O(1) | Same | Same |
| Content variation | Hash selection, O(1) | Need more variant pools | Consider AI-generated variant expansion |
| Sitemap | Single file (under 50K) | Single file | Split via `generateSitemaps()` |
| Internal linking | Pre-computed, fast | May need link count limits | Top-N patterns |
| Vercel deployment | Standard plan | Same | Check build limits on plan |

At current scale, there are zero scalability concerns. The architecture is deliberately simple because the problem scope is straightforward -- static content, no user interaction beyond form submission.

---

## Build Order (Dependencies Between Components)

Components must be built in this order because of data flow dependencies. Each layer requires the previous.

### Phase 1: Foundation (must be first)

| Component | Depends On | Produces |
|-----------|------------|----------|
| `data/types.ts` | Nothing | TypeScript interfaces all modules import |
| `data/business.ts` | Types | NAP info for schema, header, footer |
| Next.js project setup + Tailwind + fonts | Nothing | Build infrastructure |
| Root layout (Header, Footer) | Business data | Page wrapper for all routes |

### Phase 2: Data Layer + Routing

| Component | Depends On | Produces |
|-----------|------------|----------|
| `data/services.ts` | Types | 63 service definitions |
| `data/cities.ts` | Types | 21 city definitions |
| `data/slugRegistry.ts` | Services, Cities | Slug resolution for routing |
| `app/[slug]/page.tsx` dispatcher | Slug registry | Working routing (proves pipeline end-to-end) |

### Phase 3: Core Templates + Conversion

| Component | Depends On | Produces |
|-----------|------------|----------|
| `LeadForm` component | GHL config (stub OK) | Core conversion element |
| `ServiceTemplate` | Services data, LeadForm, sections | 63 rendered service pages |
| `CityTemplate` | Cities data, LeadForm, sections | 21 rendered city pages |
| Homepage | Services + Cities data | Main entry point |

### Phase 4: Programmatic Scale (1,323 combo pages)

| Component | Depends On | Produces |
|-----------|------------|----------|
| `lib/content/variations.ts` | Service + City data | Content variation engine |
| `data/combos.ts` | Services, Cities, variation engine | 1,323 combo definitions |
| `ComboTemplate` | Combos data, shared sections | 1,323 rendered combo pages |
| `lib/links.ts` | All data modules | Internal linking per reverse silo rules |

### Phase 5: Supporting Content

| Component | Depends On | Produces |
|-----------|------------|----------|
| `data/comparisons.ts` | Types | 30 comparison definitions |
| `ComparisonTemplate` | Comparisons data | 30 rendered comparison pages |
| `data/articles.ts` | All slug data (references money pages) | 252 article definitions |
| `ArticleTemplate` | Articles data, linking engine | 252 rendered article pages |

### Phase 6: SEO Infrastructure

| Component | Depends On | Produces |
|-----------|------------|----------|
| `lib/schema/*.ts` | All data types finalized | JSON-LD generators |
| `lib/metadata.ts` | Slug registry + all data | Page metadata (title, desc, OG) |
| `app/sitemap.ts` | All slugs | XML sitemap |
| `app/robots.ts` | Nothing | robots.txt |

### Phase 7: Integration + Polish

| Component | Depends On | Produces |
|-----------|------------|----------|
| `app/api/lead/route.ts` | LeadForm finalized | Server-side form processing |
| Static pages (about, contact, privacy) | Layout, LeadForm | Core pages |
| Build validation (link checker, duplicate detector) | All data | Quality gates |
| Performance optimization (CWV) | Working pages | Production readiness |

**Critical path:** Types -> Data files -> Slug registry -> Dispatcher -> Templates. Everything else parallelizes around this spine.

---

## Key Architecture Risks

| Risk | Severity | Mitigation |
|------|----------|------------|
| Combo page content too similar (Google duplicate content penalty) | HIGH | Invest heavily in variation engine: 5-10 variants per block, city-specific data injection, service-category branching |
| Slug collisions between page types | MEDIUM | Validate uniqueness in slugRegistry at build time; fail build on collision |
| Internal linking creates orphan pages | MEDIUM | Build-time validation: every page must have 3+ inbound internal links |
| GoHighLevel webhook changes/downtime | LOW | API route abstracts webhook; easy to swap endpoint or add fallback |
| Build time growth as content expands | LOW | 1,700 pages is well within SSG comfort zone; consider ISR only at 10K+ |

---

## Sources

- [Next.js generateStaticParams (official docs, v16.1.6)](https://nextjs.org/docs/app/api-reference/functions/generate-static-params) -- HIGH confidence
- [Next.js JSON-LD guide (official docs, v16.1.6)](https://nextjs.org/docs/app/guides/json-ld) -- HIGH confidence
- [Next.js Dynamic Routes (official docs)](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes) -- HIGH confidence
- [Next.js Route Segment Config: dynamicParams (official docs)](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams) -- HIGH confidence
- [Reverse Content Silos (HVSEO)](https://hvseo.co/blog/the-hidden-hero-of-on-page-seo-reverse-content-silos/) -- MEDIUM confidence
- [Programmatic SEO Internal Linking at Scale (SEOmatic)](https://seomatic.ai/blog/programmatic-seo-internal-linking) -- MEDIUM confidence
- [Programmatic SEO Duplicate Content Prevention (SEOmatic)](https://seomatic.ai/blog/programmatic-seo-duplicate-content) -- MEDIUM confidence
- [Next.js SSG Build Time Discussion (GitHub)](https://github.com/vercel/next.js/discussions/14122) -- MEDIUM confidence
- [Next.js Architecture: SSG, ISR, RSC Guide (SlashDev)](https://slashdev.io/eu/blog/nextjs-architecture-that-scales-ssg-isr-rsc-guide) -- MEDIUM confidence
