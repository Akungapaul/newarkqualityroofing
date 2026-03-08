# Phase 7: Supporting Content - Context

**Gathered:** 2026-03-08
**Status:** Ready for planning

<domain>
## Phase Boundary

Build all 30 comparison pages with full content and all 252 supporting articles, completing the topical authority structure with reverse silo internal linking. This phase delivers comparison content, article content, article template, reverse silo link engine, and integration into existing templates.

</domain>

<decisions>
## Implementation Decisions

### Comparison Page Layout
- Side-by-side comparison table format: feature-by-feature table with Item A vs Item B columns
- Prose sections above/below the table (intro, detailed analysis, NJ-specific, verdict)
- Tables styled with Editorial Trust palette (forest/copper/parchment), clean and scannable — no chart libraries, no radar/spider charts
- Same ComparisonTemplate handles all 3 categories (material-vs-material, service-vs-service, decision-helper) — decision-helpers show ranked list/matrix instead of A-vs-B table
- Split hero with lead form (headline + intro left, form right) — matches service page pattern
- Related services block linking to both compared service pages (for material and service comparisons)
- Audience-aware sections: dedicated "For Homeowners" and "For Business Owners" subsections within detailed analysis

### Comparison Content
- 2,000-2,500 words per comparison page
- Structured data + prose content schema: comparisonRows[] for table, verdict object, prose strings for analysis sections
- NJ-specific pricing data in comparison table (Essex County market ranges)
- Clear winner per scenario verdict: state a winner, qualify by use case ("For most NJ homeowners, [X] is the better choice... But if [scenario], [Y] wins"), end with consultation CTA
- Service-vs-service comparisons use decision-first approach: lead with "When to choose X vs Y" framework, technical details support the decision
- FAQ section with 4-6 comparison-specific questions
- All 30 comparisons already defined in src/data/comparisons.ts with slugs registered

### Comparison Content Schema (New)
- Extend beyond basic ComparisonSchema (id, name, slug, category, itemA, itemB, meta)
- Add ComparisonContentSchema with: comparisonRows[], verdict (winner, reasoning, alternateScenario), detailedAnalysis[], njSpecific, homeownerSection, businessOwnerSection, faqs[], metaDescription
- Zod-validated at import time, matching existing pattern
- One content file per comparison or grouped by category

### Supporting Article Allocation
- 252 total articles allocated as:
  - Service pages: 63 services × 3 articles = 189 articles
  - Comparison pages: 30 comparisons × 2 articles = 60 articles
  - Homepage: 1 × 3 articles = 3 articles
  - Total: 252 ✓

### Article Topic Strategy
- Keyword cluster approach for service articles: each service's 3 articles target related long-tail keywords (signs/symptoms angle, cost/research angle, decision/education angle)
- Buyer-guide angles for comparison articles: "How to Choose Between X and Y" and "What NJ Contractors Recommend" patterns
- Broad NJ roofing guides for homepage articles: complete guide, finding a roofer, licensing/insurance
- Strict deduplication: no two articles cover the same topic across service and comparison article sets
- Intent differentiation for similar services (e.g., "Roof Repair" vs "Roof Leak Repair" get distinct keyword intents)
- Category-balanced organization matching 8 service categories
- Descriptive long-tail slugs matching article titles (e.g., /signs-your-nj-roof-needs-repair)

### Article Data
- Pre-define all 252 article topics in src/data/articles.ts before content writing
- Each article: id, title, slug, parentId, parentType (service|comparison|core), position (1-3), metaTitle, metaDescription
- Register all 252 slugs in slug-registry.ts as type 'article'
- Enables sitemap, linking, and template rendering before content exists

### Article Content Style
- Helpful local expert voice: first-person plural (we/our), conversational but knowledgeable
- NJ-focused throughout: 60%+ NJ-specific content per article (building codes, weather data, neighborhoods, pricing, licensing)
- 700-900 words per article (~800 target)
- Structure: intro/hook (~100), section 1 (~200), section 2 (~200), section 3/action (~150), conclusion + CTA (~150)
- No FAQ section on articles — FAQs live on money pages where Schema markup applies
- CTA banner linking to parent money page (no inline lead form on articles) — phone CTA remains in site header
- H1: article title, H2: 2-3 section headings, H3: sub-points if needed

### Article Content Schema
- ArticleContentSchema with Zod: articleId, parentId, parentType, position, intro, sections[] (heading + body), conclusion, ctaHeading, ctaText, metaDescription
- Zod-validated at import time
- Content files organized by service category (one file per batch)

### Article Template
- Minimal full-width layout: no sidebar, editorial typography, clean and fast
- Breadcrumbs: Home > [Parent Page] > [Article Title]
- Full-width content column for 700-900 words
- CTA banner at bottom linking to parent money page
- "Continue Reading" next article card + "Back to [Service]" link
- Distinct from sidebar-heavy service/combo templates

### Reverse Silo Link Engine
- Links computed from article registry (not manual link maps)
- getArticleLinks(articleId) returns: moneyPage link, nextArticle link (or null), prevArticle (or null)
- getMoneyPageArticle(parentId) returns position-1 article for that money page
- Position 1 article = the one money page links to (deterministic rule)
- Variable chain lengths supported (3 for services/homepage, 2 for comparisons)

### Reverse Silo Link Rules (Strict POP)
- Money page → ONE supporting article link only (position 1)
- Article → back to money page + next article in chain
- Last article in chain → back to money page only (no next)
- NO other content links in article body (no outbound, no other services, no city pages)
- Site chrome (header nav, footer mega-links, phone CTA) unchanged — POP rules apply to content links only

### Link Placement
- Money pages: dedicated "Learn More" section with styled card linking to Article 1, placed after FAQ and before final CTA
- Articles: "Continue Reading" next article card at bottom + smaller "Back to [Service]" link
- Wire into existing ServiceTemplate and ComparisonTemplate during this phase
- Graceful degradation: if no articles exist for a service, the Learn More section doesn't render

### Claude's Discretion
- Comparison content file organization (one per comparison vs grouped by category)
- Article content file organization (by service category vs flat)
- Exact article topic selection for each of the 252 articles
- ComparisonTemplate section component breakdown
- ArticleTemplate component architecture
- Build sequence and batching strategy for content writing
- Similarity/deduplication validation approach for articles
- Whether to create augmentation scripts (like combo content) or write content directly
- Homepage article link placement (homepage doesn't have ServiceTemplate's Learn More section pattern)

</decisions>

<specifics>
## Specific Ideas

- Existing ComparisonSchema in src/lib/schemas.ts is basic — needs ComparisonContentSchema parallel to ServiceContentSchema/ComboContentSchema pattern
- PageTypeSchema already includes 'article' type — just needs data and template
- ComparisonTemplate in src/components/templates/ is a Phase 1 placeholder — needs full rebuild
- 30 comparisons already have slugs, categories, itemA/B, and meta registered in slug-registry.ts
- Content constants (src/data/content-constants.ts) have pricing data that can inform comparison tables
- Service content files (src/data/service-content/*.ts) have rich data that can inform article topics
- Link engine pattern established in Phase 6 (getNearbyCityLinks, getRelatedServiceLinks) can be extended for article links
- render-inline-links.tsx utility available for any inline link rendering needed

</specifics>

<code_context>
## Existing Code Assets

### Schemas & Types
- `src/lib/schemas.ts`: ComparisonSchema (basic: id, name, slug, category, itemA?, itemB?, metaTitle, metaDescription), PageTypeSchema includes 'article'
- `src/lib/types.ts`: Comparison type inferred from ComparisonSchema
- `src/data/combo-content/schema.ts`: ComboContentSchema pattern to follow for new content schemas

### Data Layer
- `src/data/comparisons.ts`: 30 comparisons defined with Zod validation, grouped by category
- `src/data/slug-registry.ts`: Registers comparison slugs, dispatches by type — needs article registration
- `src/data/content-constants.ts`: Pricing data, brands, credentials for NJ-specific content
- `src/data/service-content/*.ts`: 65 service content objects across 8 category files

### Templates
- `src/components/templates/ComparisonTemplate.tsx`: Placeholder (47 lines) — needs full rebuild
- `src/components/templates/ServiceTemplate.tsx`: Learn More section integration target
- `src/components/templates/ComboTemplate.tsx`: Pattern reference for content-driven templates

### Link Engine
- `src/lib/link-engine.ts` (if exists) or inline link computation functions from Phase 6
- `src/components/shared/render-inline-links.tsx`: Inline markdown link parser

### Page Dispatcher
- `src/app/[slug]/page.tsx`: Already dispatches 'comparison' type to ComparisonTemplate, needs 'article' case added

</code_context>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 07-supporting-content*
*Context gathered: 2026-03-08*
