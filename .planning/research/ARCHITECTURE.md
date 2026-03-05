# Architecture Patterns

**Domain:** Programmatic SEO lead generation website (roofing, ~1,700 pages)
**Researched:** 2026-03-05
**Confidence:** HIGH (Next.js App Router patterns verified via official docs)

## Recommended Architecture

### High-Level Overview

```
+-----------------------------------------------------+
|                    VERCEL CDN                        |
|              (serves pre-built HTML)                 |
+-----------------------------------------------------+
         |
+-----------------------------------------------------+
|              NEXT.JS APP (SSG at build)              |
|                                                      |
|  +-----------------------------------------------+  |
|  |              PAGE TEMPLATES                    |  |
|  |  (5 templates render ~1,700 pages via          |  |
|  |   generateStaticParams + data layer)           |  |
|  +-----------------------------------------------+  |
|         |                    |                        |
|  +-------------+    +-----------------+              |
|  | DATA LAYER  |    |  UI COMPONENTS  |              |
|  | (TypeScript  |    | (shared across  |              |
|  |  files with  |    |  all templates) |              |
|  |  all content)|    +-----------------+              |
|  +-------------+           |                         |
|         |           +-------------+                  |
|  +-------------+   | SCHEMA GEN  |                  |
|  | LINK ENGINE |   | (JSON-LD per |                  |
|  | (internal    |   |  page type)  |                  |
|  |  linking)    |   +-------------+                  |
|  +-------------+                                     |
+-----------------------------------------------------+
         |
+-----------------------------------------------------+
|             EXTERNAL SERVICES                        |
|  GoHighLevel (webhook) | Google Maps Embed           |
+-----------------------------------------------------+
```

### Core Architectural Decision: Flat Slug with Catch-All Route

Because the project requires a flat URL structure (`/roof-repair-montclair-nj`, not `/services/roof-repair/montclair-nj`), the entire site uses a **single catch-all dynamic route** that dispatches to the correct template based on slug lookup.

```
app/
  [slug]/
    page.tsx          <-- single dynamic route handles ALL ~1,700 pages
    generateStaticParams returns every slug
    page resolves slug -> page type -> correct template
```

This is the critical architecture pattern. A flat URL structure means Next.js file-system routing cannot map pages to nested folders. Instead, a slug registry maps every slug to its page type and data.

**Confidence: HIGH** -- Verified via Next.js official docs. `generateStaticParams` supports returning 1,700+ params from a single dynamic route. At build time, each param generates a static HTML file. With `dynamicParams = false`, any unrecognized slug returns 404.

### Alternative Considered: Multiple Dynamic Routes

An alternative would be separate routes per page type:

```
app/
  (services)/[serviceSlug]/page.tsx
  (cities)/[citySlug]/page.tsx
  (combos)/[comboSlug]/page.tsx
  ...
```

**Why rejected:** The flat URL requirement (`/roof-repair-montclair-nj`) means all page types share the same URL depth. Using route groups with different file-system paths but all at `/{slug}` would create conflicts. A single `[slug]` route with a dispatch layer is cleaner and avoids ambiguity.

---

## Component Boundaries

### Layer 1: Data Layer (No External DB -- TypeScript Files)

The data layer is the foundation everything builds on. At ~1,700 pages of static content, a database is unnecessary overhead. TypeScript data files provide type safety, build-time validation, and zero runtime dependencies.

| Module | Responsibility | Exports |
|--------|---------------|---------|
| `data/services.ts` | 63 service definitions (slug, name, category, description, content blocks, keywords, related services) | `services`, `getServiceBySlug()`, `getServicesByCategory()` |
| `data/cities.ts` | 21 city definitions (slug, name, county, population, neighborhoods, weather notes, building types) | `cities`, `getCityBySlug()`, `getNearbyCities()` |
| `data/combos.ts` | Generator that produces 1,323 service-city combinations with unique content variations | `getCombos()`, `getComboBySlug()`, `getCombosForCity()`, `getCombosForService()` |
| `data/comparisons.ts` | 30 comparison page definitions (slug, items compared, verdict, comparison matrix) | `comparisons`, `getComparisonBySlug()` |
| `data/articles.ts` | 252 supporting article definitions (slug, title, parent money page slug, content, next article slug) | `articles`, `getArticleBySlug()`, `getArticlesForMoneyPage()` |
| `data/business.ts` | Business info: NAP, phone, service area, hours, placeholder fields | `business` |
| `data/slugRegistry.ts` | Master registry mapping every slug to its page type and lookup key | `resolveSlug(slug): { type, key }` |

**Why TypeScript files, not a CMS or database:**
- SSG means all data is consumed at build time only -- no runtime queries
- TypeScript gives compile-time validation (misspelled city name = build error)
- No API rate limits, no network latency during build
- Content lives in the repo -- version controlled, reviewable in PRs
- At 1,700 pages this is well within "data files" territory (a JSON of 1,700 entries is ~200KB)

**Content Variation Strategy (combos.ts):**
The 1,323 combo pages cannot be simple `{city} + {service}` string interpolation -- Google penalizes thin/duplicate content. The data layer must support:
- Multiple intro paragraph templates (5-8 variations per service category)
- City-specific content injection (neighborhoods, climate, building stock)
- Rotating content blocks (different structures per combination)
- This is a data concern, not a template concern

### Layer 2: Slug Registry & Page Dispatcher

The slug registry is the routing brain. It maps flat slugs to page types.

```typescript
// data/slugRegistry.ts
type PageType = 'home' | 'service' | 'city' | 'combo' | 'comparison' | 'article' | 'static';

interface SlugResolution {
  type: PageType;
  key: string; // lookup key for the specific data module
}

// Built at import time from all data modules
const registry: Map<string, SlugResolution> = new Map();

// Example entries:
// "roof-repair" -> { type: "service", key: "roof-repair" }
// "montclair-nj" -> { type: "city", key: "montclair" }
// "roof-repair-montclair-nj" -> { type: "combo", key: "roof-repair__montclair" }
// "asphalt-shingles-vs-metal-roofing" -> { type: "comparison", key: "asphalt-vs-metal" }
```

The page component at `app/[slug]/page.tsx` uses this registry:

```typescript
// app/[slug]/page.tsx
export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export const dynamicParams = false; // 404 for unknown slugs

export default async function Page({ params }) {
  const { slug } = await params;
  const resolution = resolveSlug(slug);

  switch (resolution.type) {
    case 'service': return <ServiceTemplate data={getServiceBySlug(resolution.key)} />;
    case 'city': return <CityTemplate data={getCityBySlug(resolution.key)} />;
    case 'combo': return <ComboTemplate data={getComboBySlug(resolution.key)} />;
    case 'comparison': return <ComparisonTemplate data={getComparisonBySlug(resolution.key)} />;
    case 'article': return <ArticleTemplate data={getArticleBySlug(resolution.key)} />;
    default: notFound();
  }
}
```

**Why a dispatcher, not separate routes:** A single `[slug]` with dispatch keeps URL structure flat while allowing completely different templates per page type. The templates are just components -- they do not need to be route segments.

### Layer 3: Page Templates (5 Templates)

Each template is a React Server Component that receives typed data and renders the full page.

| Template | Pages | Key Sections |
|----------|-------|-------------|
| `ServiceTemplate` | 63 | Hero + form, service description, residential/commercial split, process steps, FAQ, related services links, supporting articles link |
| `CityTemplate` | 21 | Hero + form, city-specific roofing info, neighborhoods served, all services in this city links, nearby cities links, map embed |
| `ComboTemplate` | 1,323 | Hero + form, service-in-city content, local context, process steps, FAQ, same-service-nearby-cities links, other-services-same-city links |
| `ComparisonTemplate` | 30 | Hero + form, comparison matrix, detailed analysis, verdict, related comparisons, CTA |
| `ArticleTemplate` | 252 | Hero (no form in hero, but form in sidebar/mid-content), article content, link back to money page, link to next supporting article |

**Template composition:** Templates compose shared UI components but have distinct layouts. The form appears above the fold on every template but in different visual configurations.

### Layer 4: Shared UI Components

| Component | Used By | Responsibility |
|-----------|---------|---------------|
| `LeadForm` | All templates | Form fields, GoHighLevel webhook submission, validation, thank-you redirect |
| `ClickToCall` | All templates, header, footer | Phone number link with tracking attributes |
| `Breadcrumbs` | All templates | Generates breadcrumb trail from page type + data (Home > Services > Roof Repair) |
| `Header` | Layout (global) | Logo, nav, phone number, mobile menu |
| `Footer` | Layout (global) | Mega-footer with all cities, service categories, contact info, legal links |
| `FAQSection` | Service, Combo, Comparison | Accordion FAQ with FAQ schema markup |
| `ServiceCard` | City, Homepage | Card linking to a service page |
| `CityCard` | Service, Homepage | Card linking to a city page |
| `RelatedServices` | Service, Combo | "Other services" internal link block |
| `NearbyCities` | City, Combo | "Nearby cities" internal link block |
| `TrustBar` | Homepage, Service, City | Trust indicators (years experience, jobs completed, ratings) |
| `TestimonialBlock` | Homepage, Service, City | Customer testimonials with Review schema |
| `ImageWithBrand` | All templates | Stock photo with CSS brand treatment (warm filter, grain, consistent crop) |
| `MapEmbed` | City, Contact | Google Maps embed for city/service area |

### Layer 5: SEO Infrastructure

| Module | Responsibility | Integration Point |
|--------|---------------|-------------------|
| `lib/schema/localBusiness.ts` | Generates LocalBusiness JSON-LD (shared across all pages) | Layout or per-page |
| `lib/schema/service.ts` | Generates Service JSON-LD | ServiceTemplate, ComboTemplate |
| `lib/schema/faq.ts` | Generates FAQPage JSON-LD from FAQ data | Any template with FAQ |
| `lib/schema/breadcrumb.ts` | Generates BreadcrumbList JSON-LD | All templates via Breadcrumbs component |
| `lib/schema/review.ts` | Generates AggregateRating JSON-LD | ServiceTemplate, ComboTemplate |
| `lib/metadata.ts` | Generates `<title>`, meta description, canonical, OG tags per page type | `generateMetadata()` in page.tsx |
| `app/sitemap.ts` | XML sitemap generation (single file -- 1,700 URLs is well under 50K limit) | Automatic via Next.js |
| `app/robots.ts` | robots.txt generation | Automatic via Next.js |

**JSON-LD pattern (verified via Next.js official docs):** Render as `<script type="application/ld+json">` directly in the page component body. Use `JSON.stringify(jsonLd).replace(/</g, '\\u003c')` for XSS prevention. Multiple schema types per page are supported as separate script tags. Use `schema-dts` npm package for TypeScript types.

### Layer 6: Internal Linking Engine

The reverse silo methodology requires precise, rule-based internal linking. This is a **data-driven system**, not manual links.

| Link Type | Rule | Implementation |
|-----------|------|---------------|
| Money page -> 1 supporting article | Each service/combo page links to exactly ONE supporting article | `getFirstArticleForMoneyPage(slug)` |
| Supporting article -> money page | Every article links back to its parent money page | `article.parentMoneyPageSlug` field |
| Supporting article -> next article | Chain articles sequentially | `article.nextArticleSlug` field |
| No outbound links from articles | Supporting articles never link externally or to non-parent pages | Enforced by template (ArticleTemplate renders only parent + next links) |
| Combo page -> same service nearby | "Roof Repair in Montclair" links to "Roof Repair in Bloomfield", etc. | `getCombosForService(serviceSlug).filter(notCurrentCity)` |
| Combo page -> other services same city | "Roof Repair in Montclair" links to "Roof Replacement in Montclair", etc. | `getCombosForCity(citySlug).filter(notCurrentService)` |
| City page -> nearby cities | Geographic adjacency links | `getNearbyCities(citySlug)` -- requires adjacency data in cities.ts |
| Service page -> related services | Semantically related services | `service.relatedServiceSlugs` field |
| Footer mega-links | All 21 cities + top service categories | Static from data layer |

**Key constraint:** The linking engine must be deterministic and auditable. Every internal link should be traceable to a rule. No "smart" or fuzzy linking that could create unintended patterns.

---

## Data Flow

### Build-Time Flow (Primary -- All Pages)

```
1. `next build` triggers
2. `app/[slug]/page.tsx` -> generateStaticParams()
   -> slugRegistry.getAllSlugs() returns ~1,700 slug objects
3. For each slug, Next.js calls the Page component:
   a. resolveSlug(slug) -> { type, key }
   b. Fetch data from appropriate data module (all in-memory TypeScript)
   c. generateMetadata() produces title, description, canonical, OG tags
   d. Template renders with data
   e. Schema generators produce JSON-LD
   f. Internal linking engine resolves related page links
   g. Static HTML output written to .next/static
4. Sitemap generated from all slug data
5. robots.txt generated
6. Deploy to Vercel CDN
```

### Runtime Flow (Form Submission Only)

```
1. User fills LeadForm on any page
2. Client-side validation (required fields, phone/email format)
3. Form submits POST to Next.js API route: app/api/lead/route.ts
4. API route:
   a. Server-side validation
   b. Adds metadata (source page URL, timestamp, page type)
   c. POST to GoHighLevel inbound webhook URL
   d. Returns success/failure
5. Client redirects to /thank-you page
```

**Why an API route instead of direct webhook call from client:**
- Hides GoHighLevel webhook URL from client (security)
- Adds server-side validation (prevents spam/abuse)
- Attaches metadata the client should not control (source URL verification)
- Enables future additions (email notification, logging) without client changes

### Content Update Flow

```
1. Edit TypeScript data files in data/ directory
2. Commit to repository
3. Vercel triggers rebuild
4. All ~1,700 pages regenerated (~2-5 min estimated build time)
5. New static files deployed to CDN
```

No ISR needed. Content changes are infrequent (adding a service, updating copy) and a full rebuild at 1,700 pages is fast enough. ISR adds complexity without benefit here.

---

## Project File Structure

```
src/
  app/
    layout.tsx                    # Root layout: Header, Footer, fonts, global styles
    page.tsx                      # Homepage (not dynamic, standalone)
    [slug]/
      page.tsx                    # Catch-all dispatcher for ~1,690 pages
    about/
      page.tsx                    # About page (static route)
    contact/
      page.tsx                    # Contact page (static route)
    thank-you/
      page.tsx                    # Post-form-submission page
    privacy-policy/
      page.tsx                    # Legal page
    sitemap/
      page.tsx                    # HTML sitemap page (crawlable)
    api/
      lead/
        route.ts                  # GoHighLevel webhook proxy
    sitemap.ts                    # XML sitemap generator
    robots.ts                     # robots.txt generator

  components/
    templates/
      ServiceTemplate.tsx
      CityTemplate.tsx
      ComboTemplate.tsx
      ComparisonTemplate.tsx
      ArticleTemplate.tsx
    ui/
      LeadForm.tsx
      ClickToCall.tsx
      Breadcrumbs.tsx
      Header.tsx
      Footer.tsx
      FAQSection.tsx
      ServiceCard.tsx
      CityCard.tsx
      RelatedServices.tsx
      NearbyCities.tsx
      TrustBar.tsx
      TestimonialBlock.tsx
      ImageWithBrand.tsx
      MapEmbed.tsx

  data/
    services.ts
    cities.ts
    combos.ts
    comparisons.ts
    articles.ts
    business.ts
    slugRegistry.ts
    types.ts                      # Shared TypeScript interfaces

  lib/
    schema/
      localBusiness.ts
      service.ts
      faq.ts
      breadcrumb.ts
      review.ts
    metadata.ts                   # generateMetadata helper
    links.ts                      # Internal linking engine
    gohighlevel.ts                # Webhook client
    utils.ts                      # Slug generation, string helpers

  styles/
    globals.css                   # Tailwind base + CSS variables + brand treatment

public/
  images/
    services/                     # Stock photos organized by service
    cities/                       # Stock photos organized by city
    brand/                        # Logo, favicon, OG image
```

**Key structural decisions:**
- `src/` directory for clean separation from config files
- Templates in `components/templates/` -- they are components, not routes
- Data layer in `data/` -- clearly separated from UI and lib code
- Schema generators in `lib/schema/` -- pure functions, easily testable
- Static pages (about, contact, thank-you, privacy) get their own route folders -- they are few and do not need the dispatcher

---

## Patterns to Follow

### Pattern 1: Data-Driven Content Variation

**What:** Instead of one template with `{city}` string replacement, use structured content blocks that vary based on data attributes.

**When:** Generating combo pages (1,323 pages that must each feel unique).

**Example:**

```typescript
// data/combos.ts
function generateComboContent(service: Service, city: City): ComboContent {
  // Select intro template based on service category + city characteristics
  const introTemplate = selectIntroTemplate(service.category, city.buildingStock);

  // Inject city-specific details
  const localContext = generateLocalContext(city, service);

  // Vary FAQ based on service + city combination
  const faqs = generateFAQs(service, city);

  return { introTemplate, localContext, faqs, /* ... */ };
}
```

**Why:** Google penalizes near-duplicate pages. Content variation must be systematic and meaningful, not random.

### Pattern 2: Typed Data Contracts

**What:** Every data module exports TypeScript interfaces that templates consume. Templates never access raw data -- they receive typed props.

**When:** Always. This is the contract between data and UI.

```typescript
// data/types.ts
interface ServicePageData {
  slug: string;
  name: string;
  category: ServiceCategory;
  description: string;
  contentBlocks: ContentBlock[];
  faqs: FAQ[];
  relatedServiceSlugs: string[];
  firstArticleSlug: string;
  keywords: { primary: string; secondary: string[]; longtail: string[] };
}

// Templates receive this, not raw data
// components/templates/ServiceTemplate.tsx
export function ServiceTemplate({ data }: { data: ServicePageData }) { ... }
```

### Pattern 3: Composable Schema Generation

**What:** Schema generators are pure functions that take data and return JSON-LD objects. Pages compose multiple schemas.

**When:** Every page needs multiple schema types (LocalBusiness + Service + FAQ + Breadcrumb).

```typescript
// In page template
const schemas = [
  generateLocalBusinessSchema(business),
  generateServiceSchema(service, business),
  generateFAQSchema(faqs),
  generateBreadcrumbSchema(breadcrumbs),
];

// Render each as a separate <script> tag
{schemas.map((schema, i) => (
  <script
    key={i}
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
    }}
  />
))}
```

### Pattern 4: Centralized Metadata Generation

**What:** A single `generateMetadata` function in the catch-all route that dispatches to type-specific metadata generators.

**When:** Every page needs unique title, description, canonical URL, OG tags.

```typescript
// app/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const resolution = resolveSlug(slug);
  return generatePageMetadata(resolution); // dispatches by type
}
```

---

## Anti-Patterns to Avoid

### Anti-Pattern 1: CMS or Database for Static Content

**What:** Using a headless CMS (Contentful, Sanity) or database (Postgres, MongoDB) for content that is fully known at build time.

**Why bad:** Adds API dependency during build (rate limits, network failures), requires CMS subscription costs, makes content harder to version control, and for 1,700 pages of formulaic content the CMS UI is not helpful -- the content is programmatic, not editorial.

**Instead:** TypeScript data files in the repo. Content is code. Version controlled, type-safe, zero external dependencies.

### Anti-Pattern 2: Nested URL Structure with Redirects

**What:** Building `/services/roof-repair/montclair-nj` then adding redirects to `/roof-repair-montclair-nj`.

**Why bad:** Redirect chains hurt SEO, add complexity, and the flat structure should be native.

**Instead:** Single `[slug]` catch-all with flat slugs from the start.

### Anti-Pattern 3: Client-Side Internal Linking Logic

**What:** Computing related pages, nearby cities, or silo links in client-side JavaScript.

**Why bad:** Search engine crawlers may not execute JavaScript reliably. Internal links must be in the static HTML for crawlability and link equity flow.

**Instead:** All internal links resolved at build time in Server Components. Every link is in the pre-rendered HTML.

### Anti-Pattern 4: Single Monolithic Template

**What:** One template component with massive conditional rendering for all page types.

**Why bad:** Becomes unmaintainable. Service pages and comparison pages have fundamentally different layouts. Conditional spaghetti grows with each page type.

**Instead:** Five focused templates dispatched by the slug resolver. Shared UI components compose into each template differently.

### Anti-Pattern 5: Direct GoHighLevel Webhook from Client

**What:** Putting the GoHighLevel webhook URL in client-side code and POSTing directly from the browser.

**Why bad:** Exposes webhook URL (spam target), no server-side validation, no source verification, no ability to add logging or secondary actions.

**Instead:** Client POSTs to `/api/lead`, API route validates and forwards to GoHighLevel.

---

## Scalability Considerations

| Concern | Current (1,700 pages) | At 5,000 pages | At 20,000 pages |
|---------|----------------------|----------------|-----------------|
| Build time | ~2-5 min (comfortable for full SSG) | ~8-15 min (still manageable) | Consider ISR or splitting builds |
| Data file size | ~200KB total (trivial) | ~600KB (still fine as TS files) | Consider splitting into per-category files |
| Sitemap | Single file (~1,700 URLs, well under 50K limit) | Single file (still under 50K) | Split via `generateSitemaps()` |
| Slug registry | In-memory Map, instant lookup | Same approach works | Same approach works |
| Internal linking | Deterministic, fast at build time | May need link count limits per page | Pagination or "top N" patterns |
| Vercel deployment | Standard plan supports this easily | Same | Check Vercel build limits on plan |

At the current scale of ~1,700 pages, there are zero scalability concerns. The architecture is simple by design because the problem is simple -- static content, no user interaction beyond form submission, no real-time data.

---

## Build Order (Dependencies)

The following build order reflects real dependencies -- each layer requires the previous.

### Phase 1: Foundation (must be first)

| Component | Why First | Depends On |
|-----------|-----------|------------|
| Data types (`data/types.ts`) | Every other module imports these interfaces | Nothing |
| Business data (`data/business.ts`) | NAP info needed by schema, header, footer | Types |
| Next.js project setup, Tailwind, fonts | Everything renders on this foundation | Nothing |
| Root layout (Header, Footer) | Wraps every page | Business data |

### Phase 2: Data Layer (must precede templates)

| Component | Why This Order | Depends On |
|-----------|---------------|------------|
| Services data (`data/services.ts`) | Core content -- templates and combos need this | Types |
| Cities data (`data/cities.ts`) | Core content -- templates and combos need this | Types |
| Slug registry (`data/slugRegistry.ts`) | Routing dispatcher needs this | Services, Cities |
| Page dispatcher (`app/[slug]/page.tsx`) | Proves routing works end-to-end | Slug registry |

### Phase 3: Core Templates + Components

| Component | Why This Order | Depends On |
|-----------|---------------|------------|
| LeadForm component | Required on every page, core conversion element | GoHighLevel config (can stub initially) |
| ServiceTemplate | Highest-value page type, tests full pipeline | Services data, LeadForm, UI components |
| CityTemplate | Second-priority page type | Cities data, LeadForm, UI components |
| Homepage | Main entry point | Services data, Cities data, LeadForm |

### Phase 4: Programmatic Scale

| Component | Why This Order | Depends On |
|-----------|---------------|------------|
| Combos data + content variation (`data/combos.ts`) | 1,323 pages -- largest batch, depends on working templates | Services, Cities |
| ComboTemplate | Renders combo pages | Combos data, shared components |
| Internal linking engine (`lib/links.ts`) | Connects all pages per reverse silo rules | All data modules |

### Phase 5: Supporting Content

| Component | Why This Order | Depends On |
|-----------|---------------|------------|
| Comparisons data (`data/comparisons.ts`) | Independent content type | Types |
| ComparisonTemplate | Renders comparison pages | Comparisons data |
| Articles data (`data/articles.ts`) | Must reference money page slugs | Services, Cities, Combos slug registry |
| ArticleTemplate | Renders supporting articles | Articles data, linking engine |

### Phase 6: SEO Infrastructure

| Component | Why This Order | Depends On |
|-----------|---------------|------------|
| Schema generators (`lib/schema/*`) | Needs data structures finalized | All data types |
| Metadata generator (`lib/metadata.ts`) | Needs slug registry + data modules | All data modules |
| XML sitemap (`app/sitemap.ts`) | Needs all slugs | Slug registry |
| HTML sitemap page | Needs all page data | All data modules |
| robots.txt (`app/robots.ts`) | Simple, no dependencies | Nothing |

### Phase 7: Integration + Polish

| Component | Why This Order | Depends On |
|-----------|---------------|------------|
| GoHighLevel API route (`app/api/lead/route.ts`) | Needs form component finalized | LeadForm |
| Static pages (about, contact, privacy, thank-you) | Low priority, simple | Layout, LeadForm |
| Image optimization + brand treatment | Visual polish layer | Templates working |
| Performance audit (Core Web Vitals) | Must have pages to measure | Everything |

---

## Key Architecture Risks

| Risk | Severity | Mitigation |
|------|----------|------------|
| Combo page content too similar (Google penalty) | HIGH | Invest in content variation engine with 5-8 templates per service category, city-specific data injection |
| Build time growth as content expands | LOW | 1,700 pages is well within SSG comfort zone; monitor and consider ISR only if hitting 10K+ |
| Slug collisions between page types | MEDIUM | Validate slug uniqueness at build time in slugRegistry.ts; fail build on collision |
| GoHighLevel webhook changes/downtime | LOW | API route abstracts webhook; easy to swap endpoint or add fallback |
| Internal linking creates orphan pages | MEDIUM | Build-time validation script that checks every page has 3+ inbound links |

---

## Sources

- [Next.js generateStaticParams (official docs, v16.1.6)](https://nextjs.org/docs/app/api-reference/functions/generate-static-params) -- HIGH confidence
- [Next.js generateSitemaps (official docs, v16.1.6)](https://nextjs.org/docs/app/api-reference/functions/generate-sitemaps) -- HIGH confidence
- [Next.js JSON-LD guide (official docs, v16.1.6)](https://nextjs.org/docs/app/guides/json-ld) -- HIGH confidence
- [Next.js project structure (official docs)](https://nextjs.org/docs/app/getting-started/project-structure) -- HIGH confidence
- [GoHighLevel Webhook Integration Guide](https://marketplace.gohighlevel.com/docs/webhook/WebhookIntegrationGuide/index.html) -- HIGH confidence
- [Enterprise Programmatic SEO Infrastructure Guide (Gracker AI)](https://gracker.ai/white-papers/enterprise-programmatic-seo-infrastructure-technical-architecture-guide) -- MEDIUM confidence
- [Programmatic SEO in Next.js (Practical Programmatic)](https://practicalprogrammatic.com/blog/programmatic-seo-in-nextjs) -- MEDIUM confidence
- [Next.js App Router project structure best practices (multiple community sources)](https://dev.to/bajrayejoon/best-practices-for-organizing-your-nextjs-15-2025-53ji) -- MEDIUM confidence
