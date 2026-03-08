# Phase 7: Supporting Content - Research

**Researched:** 2026-03-08
**Domain:** Comparison page templates, supporting article templates, content generation, reverse silo internal linking
**Confidence:** HIGH

## Summary

Phase 7 builds two new page types (comparison pages, supporting articles) and wires a reverse silo link engine into the existing template infrastructure. The project already has a well-established pattern for content-driven page types: Zod-validated content schemas, Map-based O(1) content lookup, section-based template components, and catch-all slug dispatcher routing. This phase follows those exact patterns for two new content types.

The comparison page template replaces an existing 47-line placeholder with a full production layout (split hero with lead form, comparison table, prose analysis sections, FAQ, related services). The article template is entirely new but simpler -- a minimal editorial layout for ~800-word articles with CTA banner and reverse silo navigation links. The link engine extends the existing `src/data/linking/link-engine.ts` with article-specific functions.

The content volume is substantial: 30 comparison pages at 2,000-2,500 words each (60,000-75,000 words) and 252 supporting articles at 700-900 words each (176,400-226,800 words). Content files will follow the same organizational pattern as combo content (schema + category/batch files + aggregator index).

**Primary recommendation:** Build infrastructure first (schemas, templates, link engine, slug registration, dispatcher), then generate content in batches. The comparison content is small enough (30 pages) to write directly. The 252 articles should use batch content files organized by service category, with article topics pre-defined in a registry before content writing begins.

<user_constraints>

## User Constraints (from CONTEXT.md)

### Locked Decisions
- Side-by-side comparison table format: feature-by-feature table with Item A vs Item B columns
- Prose sections above/below the table (intro, detailed analysis, NJ-specific, verdict)
- Tables styled with Editorial Trust palette (forest/copper/parchment), clean and scannable -- no chart libraries, no radar/spider charts
- Same ComparisonTemplate handles all 3 categories (material-vs-material, service-vs-service, decision-helper) -- decision-helpers show ranked list/matrix instead of A-vs-B table
- Split hero with lead form (headline + intro left, form right) -- matches service page pattern
- Related services block linking to both compared service pages (for material and service comparisons)
- Audience-aware sections: dedicated "For Homeowners" and "For Business Owners" subsections within detailed analysis
- 2,000-2,500 words per comparison page
- Structured data + prose content schema: comparisonRows[] for table, verdict object, prose strings for analysis sections
- NJ-specific pricing data in comparison table (Essex County market ranges)
- Clear winner per scenario verdict
- Service-vs-service comparisons use decision-first approach
- FAQ section with 4-6 comparison-specific questions
- All 30 comparisons already defined in src/data/comparisons.ts with slugs registered
- ComparisonContentSchema extends beyond basic ComparisonSchema with comparisonRows[], verdict, detailedAnalysis[], njSpecific, homeownerSection, businessOwnerSection, faqs[], metaDescription
- Zod-validated at import time, matching existing pattern
- 252 total articles: 63 services x 3 = 189, 30 comparisons x 2 = 60, 1 homepage x 3 = 3
- Keyword cluster approach for service articles: signs/symptoms, cost/research, decision/education angles
- Buyer-guide angles for comparison articles
- Broad NJ roofing guides for homepage articles
- Strict deduplication: no two articles cover same topic
- Pre-define all 252 article topics in src/data/articles.ts before content writing
- Each article: id, title, slug, parentId, parentType, position, metaTitle, metaDescription
- Register all 252 slugs in slug-registry.ts as type 'article'
- Helpful local expert voice, first-person plural, NJ-focused (60%+ NJ-specific)
- 700-900 words per article (~800 target)
- Structure: intro/hook, section 1, section 2, section 3/action, conclusion + CTA
- No FAQ section on articles
- CTA banner linking to parent money page (no inline lead form)
- ArticleContentSchema with Zod: articleId, parentId, parentType, position, intro, sections[], conclusion, ctaHeading, ctaText, metaDescription
- Minimal full-width layout: no sidebar, editorial typography
- Breadcrumbs: Home > [Parent Page] > [Article Title]
- "Continue Reading" next article card + "Back to [Service]" link
- Reverse silo links computed from article registry (not manual link maps)
- getArticleLinks(articleId) returns: moneyPage link, nextArticle link, prevArticle
- getMoneyPageArticle(parentId) returns position-1 article
- Money page -> ONE supporting article link only (position 1)
- Article -> back to money page + next article in chain
- Last article -> back to money page only
- NO other content links in article body
- Money pages: dedicated "Learn More" section with styled card linking to Article 1
- Wire into existing ServiceTemplate and ComparisonTemplate
- Graceful degradation: if no articles exist, Learn More section doesn't render

### Claude's Discretion
- Comparison content file organization (one per comparison vs grouped by category)
- Article content file organization (by service category vs flat)
- Exact article topic selection for each of the 252 articles
- ComparisonTemplate section component breakdown
- ArticleTemplate component architecture
- Build sequence and batching strategy for content writing
- Similarity/deduplication validation approach for articles
- Whether to create augmentation scripts or write content directly
- Homepage article link placement

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope

</user_constraints>

<phase_requirements>

## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| COMP-01 | Comparison page template with side-by-side analysis | ComparisonTemplate rebuild with ComparisonHero, ComparisonTable, ComparisonAnalysis, ComparisonVerdict, ComparisonFaqs section components |
| COMP-02 | 15 material vs material comparisons | Content files with ComparisonContentSchema, all 15 material-vs-material IDs already in comparisons.ts (plus 1 additional = 16 total material) |
| COMP-03 | 5 service vs service comparisons | Content files for 5 service-vs-service IDs (plus 1 additional = 6 total service-vs-service) |
| COMP-04 | 6+ decision-helper pages | Content files for 8 decision-helper IDs already registered |
| COMP-05 | Lead form above the fold | Split hero with LeadForm component (hero variant), matching ServiceHero/ComboHero pattern |
| COMP-06 | Comparison table/matrix with clear winner recommendations | ComparisonTable component rendering comparisonRows[] + verdict object with winner/reasoning/alternateScenario |
| COMP-07 | FAQ section with comparison-specific questions | ComparisonFaqs component rendering 4-6 FAQ items from content schema |
| ARTL-01 | Supporting article template (~750 words, 60%+ optimization) | ArticleTemplate with full-width editorial layout, ArticleContentSchema validation |
| ARTL-02 | 3 supporting articles per money page (service pages) | 189 article content objects mapped to 63 services (3 per service, positions 1-3) |
| ARTL-03 | Reverse silo linking: article links back to money page + next article | Link engine functions getArticleLinks(), Learn More section in ServiceTemplate/ComparisonTemplate |
| ARTL-04 | No outbound links from supporting articles | Strict POP rules enforced in ArticleTemplate -- only money page + next/prev article links in content area |
| ARTL-05 | Content mapped to money page's keyword cluster | Article topics pre-defined with keyword intent differentiation (signs/symptoms, cost/research, decision/education) |

</phase_requirements>

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 16 | SSG framework, catch-all routing | Already in project, all pages SSG |
| Zod | 3.25.x | Schema validation for content | Already used for all content schemas |
| Tailwind CSS | v4 | Styling with @theme design tokens | Already configured with Editorial Trust palette |
| TypeScript | 5.x | Type safety inferred from Zod schemas | Already in use, types.ts pattern |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| next/font | built-in | Cormorant/Cormorant Garamond fonts | Already loaded in layout |
| next/link | built-in | Internal navigation links | All reverse silo links |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Manual content files | Content generation scripts | CONTEXT.md leaves this to Claude's discretion; direct authoring gives finer control but scripts parallelize better for 252 articles |

**Installation:** No new packages needed. All infrastructure already exists.

## Architecture Patterns

### Recommended Project Structure
```
src/
├── lib/
│   └── schemas.ts                    # Add ComparisonContentSchema, ArticleSchema, ArticleContentSchema
├── data/
│   ├── articles.ts                   # 252 article definitions (id, title, slug, parentId, parentType, position)
│   ├── comparison-content/
│   │   ├── schema.ts                 # ComparisonContentSchema (Zod)
│   │   ├── index.ts                  # Aggregator with Map-based lookup
│   │   ├── material-vs-material.ts   # 16 material comparison content objects
│   │   ├── service-vs-service.ts     # 6 service comparison content objects
│   │   └── decision-helper.ts        # 8 decision-helper content objects
│   ├── article-content/
│   │   ├── schema.ts                 # ArticleContentSchema (Zod)
│   │   ├── index.ts                  # Aggregator with Map-based lookup
│   │   ├── repair-maintenance/       # Articles for repair-maintenance services
│   │   ├── residential-roof-types/   # Articles for residential roof type services
│   │   ├── commercial-roof-types/    # Articles for commercial roof type services
│   │   ├── components-specialty/     # Articles for components/specialty services
│   │   ├── energy-solar/             # Articles for energy/solar services
│   │   ├── commercial-services/      # Articles for commercial services
│   │   ├── design-consultation/      # Articles for design/consultation services
│   │   ├── replacement-sub-pages/    # Articles for replacement sub-page services
│   │   ├── comparisons/              # 60 articles for comparison pages (2 per comparison)
│   │   └── homepage/                 # 3 homepage articles
│   └── linking/
│       └── link-engine.ts            # Extend with getArticleLinks(), getMoneyPageArticle()
├── components/
│   ├── templates/
│   │   ├── ComparisonTemplate.tsx    # Full rebuild (currently 47-line placeholder)
│   │   └── ArticleTemplate.tsx       # NEW: full-width editorial article layout
│   └── sections/
│       ├── ComparisonHero.tsx        # Split hero with lead form
│       ├── ComparisonTable.tsx       # Side-by-side comparison matrix
│       ├── ComparisonAnalysis.tsx    # Detailed prose analysis sections
│       ├── ComparisonVerdict.tsx     # Winner recommendation with scenarios
│       ├── ComparisonFaqs.tsx        # FAQ accordion
│       ├── ComparisonRelated.tsx     # Related services block
│       ├── ArticleContent.tsx        # Rendered article sections
│       ├── ArticleCta.tsx            # Bottom CTA banner to parent money page
│       └── ArticleNavigation.tsx     # Continue Reading / Back to [Service] links
└── app/
    └── [slug]/
        └── page.tsx                  # Add 'article' case to dispatcher
```

### Pattern 1: Content Schema + Aggregator (Established)
**What:** Zod schema validates content at module import time; aggregator collects from category files into Map-based O(1) lookup.
**When to use:** Every new content type in this project.
**Example:**
```typescript
// src/data/comparison-content/schema.ts
import { z } from 'zod';

export const ComparisonContentSchema = z.object({
  comparisonId: z.string(),
  introHeading: z.string(),
  introParagraphs: z.array(z.string()).min(1).max(3),
  comparisonRows: z.array(z.object({
    feature: z.string(),
    itemA: z.string(),
    itemB: z.string(),
    winner: z.enum(['A', 'B', 'tie', 'depends']).optional(),
  })).min(4).max(15),
  verdict: z.object({
    winner: z.string(),
    reasoning: z.string(),
    alternateScenario: z.string(),
  }),
  detailedAnalysis: z.array(z.object({
    heading: z.string(),
    content: z.array(z.string()).min(1).max(4),
  })).min(2).max(5),
  njSpecific: z.object({
    heading: z.string(),
    content: z.array(z.string()).min(1).max(3),
  }),
  homeownerSection: z.object({
    heading: z.string(),
    content: z.array(z.string()).min(1).max(3),
  }),
  businessOwnerSection: z.object({
    heading: z.string(),
    content: z.array(z.string()).min(1).max(3),
  }),
  faqs: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })).min(4).max(6),
  metaDescription: z.string().max(160),
});

export type ComparisonContent = z.infer<typeof ComparisonContentSchema>;
```

```typescript
// src/data/comparison-content/index.ts
import { z } from 'zod';
import { ComparisonContentSchema } from './schema';
import type { ComparisonContent } from './schema';
import { materialComparisons } from './material-vs-material';
import { serviceComparisons } from './service-vs-service';
import { decisionHelpers } from './decision-helper';

const allContent = z.array(ComparisonContentSchema).parse([
  ...materialComparisons,
  ...serviceComparisons,
  ...decisionHelpers,
]);

const contentMap = new Map<string, ComparisonContent>(
  allContent.map((c) => [c.comparisonId, c])
);

export function getComparisonContent(comparisonId: string): ComparisonContent {
  const content = contentMap.get(comparisonId);
  if (!content) {
    throw new Error(`Missing comparison content for: ${comparisonId}`);
  }
  return content;
}
```

### Pattern 2: Article Registry + Link Engine
**What:** Pre-define all 252 article metadata in `src/data/articles.ts`, then build link functions on top.
**When to use:** Before any article content writing begins.
**Example:**
```typescript
// src/data/articles.ts
import { z } from 'zod';

export const ArticleSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  parentId: z.string(),
  parentType: z.enum(['service', 'comparison', 'core']),
  position: z.number().min(1).max(3),
  metaTitle: z.string().max(60),
  metaDescription: z.string().max(160),
});

export type Article = z.infer<typeof ArticleSchema>;

const rawArticles: Article[] = [
  // 252 articles defined here...
];

export const articles: Article[] = z.array(ArticleSchema).parse(rawArticles);
```

```typescript
// Extended link engine functions
export function getArticleLinks(articleId: string): {
  moneyPage: { name: string; slug: string };
  nextArticle: { title: string; slug: string } | null;
  prevArticle: { title: string; slug: string } | null;
} { /* lookup from articles registry */ }

export function getMoneyPageArticle(parentId: string): Article | null {
  // Returns position-1 article for the given parent page
}
```

### Pattern 3: Split Hero with Lead Form (Established)
**What:** Dark forest-green hero section with gradient/grid/grain overlays, headline + trust signals on left (lg:col-span-3), lead form on right (lg:col-span-2).
**When to use:** ComparisonHero -- matches ServiceHero and ComboHero pattern exactly.
**Example:** See existing `src/components/sections/ServiceHero.tsx` and `ComboHero.tsx`.

### Pattern 4: Decision-Helper Variant
**What:** For comparison category `decision-helper`, render a ranked list/matrix instead of A-vs-B table since there's no itemA/itemB.
**When to use:** When `comparison.category === 'decision-helper'`.
**Example:**
```typescript
// ComparisonTable renders differently based on category
{comparison.category === 'decision-helper' ? (
  <RankedMatrix rows={content.comparisonRows} />
) : (
  <SideBySideTable
    itemA={comparison.itemA}
    itemB={comparison.itemB}
    rows={content.comparisonRows}
  />
)}
```

### Anti-Patterns to Avoid
- **Manual link maps:** Links MUST be computed from article registry data, not hardcoded. The link engine pattern is established in this project.
- **Inline lead forms on articles:** Articles use CTA banner to parent money page only. Lead form is in the site header (phone CTA).
- **FAQ on articles:** FAQs live on money pages only. Articles are content-only with no FAQ section.
- **Outbound links from articles:** Strict POP methodology -- articles link ONLY to their money page and next/prev article. No other internal or external links in content body.
- **Sidebar layout on articles:** Articles use full-width editorial layout, distinct from the 2-col + sidebar layout of service/combo templates.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Content validation | Manual type checks | Zod schemas with module-level `.parse()` | Build crashes on invalid data, catches errors early |
| Slug collision detection | Manual slug lists | Extend existing slug-registry.ts `buildRegistry()` | Already handles collision detection for 1,400+ slugs |
| Internal link computation | Hardcoded link maps | Extend `src/data/linking/link-engine.ts` | Established pattern, tested with combo pages |
| Markdown link rendering | Custom link parser | Reuse `src/lib/render-inline-links.tsx` | Already handles `[text](url)` -> Next.js Link |
| Hero section layout | New hero design | Clone ServiceHero/ComboHero pattern | Consistent visual language, proven responsive behavior |
| Breadcrumb rendering | Custom breadcrumb | Reuse `src/components/sections/Breadcrumbs.tsx` | Already handles aria-labels, styling, active state |

**Key insight:** This project has extremely consistent patterns across all page types. Every new page type follows: schema -> data file -> content files -> aggregator -> template -> section components -> dispatcher case. Deviating from this pattern creates maintenance burden and inconsistency.

## Common Pitfalls

### Pitfall 1: Service Count Discrepancy (63 vs 65)
**What goes wrong:** The CONTEXT.md says "63 services x 3 articles = 189" but `src/data/services.ts` actually contains 65 service objects (65 `id:` fields). The REQUIREMENTS.md says 63 services but Phase 3 deliverables mention 65 ServiceContent objects.
**Why it happens:** The original plan counted 63, but 2 additional services were added during Phase 1/3 development.
**How to avoid:** When defining article allocations, use the actual 65 services from `src/data/services.ts`. The article count may need adjustment: 65 x 3 = 195 (not 189). This changes the total from 252 to 258 if maintaining 3 articles per service. Alternatively, maintain the 252 target by confirming which services should get articles (some replacement sub-pages share parent services).
**Warning signs:** Build errors from missing article mappings if article count doesn't match actual service count.

### Pitfall 2: SlugEntrySchema Missing articleId
**What goes wrong:** The `SlugEntrySchema` in `src/lib/schemas.ts` has `comparisonId` and `corePageId` optional fields but NO `articleId` field. Articles cannot be dispatched without it.
**Why it happens:** Article support was planned but not implemented yet.
**How to avoid:** Add `articleId: z.string().optional()` to SlugEntrySchema before registering article slugs.

### Pitfall 3: Comparison Category Count Mismatch
**What goes wrong:** Requirements say "15 material-vs-material, 5 service-vs-service, 6+ decision-helpers" but actual data has 16 material-vs-material (including "architectural-vs-3-tab-shingles"), 6 service-vs-service (including "diy-vs-professional-roof-repair"), and 8 decision-helpers (including "best-roofing-for-essex-county-colonial-homes" and "roof-warranty-comparison-guide"). Total is 30 as expected.
**Why it happens:** Additional comparisons were added in the "NJ-specific" block to reach 30 total.
**How to avoid:** Generate content for all 30 comparisons by iterating from the actual `src/data/comparisons.ts` data, not from requirement category counts.

### Pitfall 4: String Replacement with $ Characters
**What goes wrong:** Using `String.replace()` with `$` in replacement strings causes `$` to be interpreted as regex backreference.
**Why it happens:** Documented in project memory as CRITICAL.
**How to avoid:** Use `insertAt()` or function-based replacement. Never use `String.replace()` with `$` in replacement strings.

### Pitfall 5: metaDescription Length Violations
**What goes wrong:** Zod schema enforces `.max(160)` on metaDescription. Content written naturally often exceeds 160 chars.
**Why it happens:** Common across all content phases -- 5+ metaDescription fixes documented in project history.
**How to avoid:** Always count characters when writing metaDescription. Keep to 150 chars target for safety margin.

### Pitfall 6: Build Time with 282 New Pages
**What goes wrong:** Adding 30 comparison + 252 article pages (282 new pages) to existing 1,492 pages may increase build time significantly.
**Why it happens:** Full SSG generates every page at build time.
**How to avoid:** The project already builds 1,492 pages successfully with Vercel split builds. 282 additional pages (19% increase) should be manageable. Monitor build performance after each batch.

### Pitfall 7: Article Slug Collisions with Existing Pages
**What goes wrong:** Article slugs could collide with existing service, city, combo, or comparison slugs.
**Why it happens:** Flat URL structure means all pages share the same URL namespace.
**How to avoid:** Use descriptive long-tail slugs (e.g., `/signs-your-nj-roof-needs-repair`) that won't collide with short service slugs (e.g., `/roof-repair`). The slug registry's collision detection will catch any issues at build time.

## Code Examples

### Dispatcher Extension for Articles
```typescript
// In src/app/[slug]/page.tsx -- add article case
import ArticleTemplate from '@/components/templates/ArticleTemplate';
import { articles } from '@/data/articles';

// In switch(pageData.type):
case 'article': {
  const article = articles.find((a) => a.id === pageData.articleId);
  if (!article) notFound();
  return <ArticleTemplate article={article} />;
}
```

### Slug Registry Extension for Articles
```typescript
// In slug-registry.ts buildRegistry():
import { articles } from './articles';

// Articles (252)
for (const article of articles) {
  register({
    slug: article.slug,
    type: 'article',
    articleId: article.id,
  });
}
```

### ArticleContentSchema
```typescript
// src/data/article-content/schema.ts
import { z } from 'zod';

export const ArticleContentSchema = z.object({
  articleId: z.string(),
  parentId: z.string(),
  parentType: z.enum(['service', 'comparison', 'core']),
  position: z.number().min(1).max(3),
  intro: z.string(),
  sections: z.array(z.object({
    heading: z.string(),
    body: z.array(z.string()).min(1).max(4),
  })).min(2).max(4),
  conclusion: z.string(),
  ctaHeading: z.string(),
  ctaText: z.string(),
  metaDescription: z.string().max(160),
});

export type ArticleContent = z.infer<typeof ArticleContentSchema>;
```

### Learn More Section for ServiceTemplate
```typescript
// New section component: ServiceLearnMore.tsx
import Link from 'next/link';
import type { Article } from '@/data/articles';

interface ServiceLearnMoreProps {
  article: Article;
  serviceName: string;
}

export function ServiceLearnMore({ article, serviceName }: ServiceLearnMoreProps) {
  return (
    <section aria-labelledby="learn-more-heading">
      <h2 id="learn-more-heading" className="font-heading text-2xl font-bold text-forest">
        Learn More About {serviceName}
      </h2>
      <Link
        href={`/${article.slug}`}
        className="mt-4 block rounded-sm border border-copper/30 bg-copper/5 p-6 transition-colors hover:bg-copper/10"
      >
        <span className="font-heading text-lg font-semibold text-forest">
          {article.title}
        </span>
        <p className="mt-1 font-body text-sm text-text-secondary">
          Continue reading...
        </p>
      </Link>
    </section>
  );
}
```

### Article Link Engine Extension
```typescript
// Extend src/data/linking/link-engine.ts
import { articles } from '@/data/articles';
import type { Article } from '@/data/articles';

const articlesByParent = new Map<string, Article[]>();
for (const article of articles) {
  const key = `${article.parentType}:${article.parentId}`;
  const existing = articlesByParent.get(key) ?? [];
  existing.push(article);
  articlesByParent.set(key, existing);
}
// Sort by position within each parent group
for (const group of articlesByParent.values()) {
  group.sort((a, b) => a.position - b.position);
}

const articleById = new Map<string, Article>(
  articles.map((a) => [a.id, a])
);

export function getArticleLinks(articleId: string): {
  moneyPage: { name: string; slug: string };
  nextArticle: { title: string; slug: string } | null;
  prevArticle: { title: string; slug: string } | null;
} {
  const article = articleById.get(articleId);
  if (!article) throw new Error(`Article not found: ${articleId}`);

  const key = `${article.parentType}:${article.parentId}`;
  const siblings = articlesByParent.get(key) ?? [];
  const currentIndex = siblings.findIndex((a) => a.id === articleId);

  const nextArticle = currentIndex < siblings.length - 1
    ? { title: siblings[currentIndex + 1].title, slug: siblings[currentIndex + 1].slug }
    : null;

  const prevArticle = currentIndex > 0
    ? { title: siblings[currentIndex - 1].title, slug: siblings[currentIndex - 1].slug }
    : null;

  // Resolve money page slug
  const moneyPageSlug = resolveMoneyPageSlug(article);

  return {
    moneyPage: { name: resolveMoneyPageName(article), slug: moneyPageSlug },
    nextArticle,
    prevArticle,
  };
}

export function getMoneyPageArticle(parentId: string, parentType: string): Article | null {
  const key = `${parentType}:${parentId}`;
  const group = articlesByParent.get(key);
  if (!group || group.length === 0) return null;
  return group[0]; // position-1 article (sorted by position)
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Placeholder ComparisonTemplate (47 lines) | Full production ComparisonTemplate with 7+ sections | This phase | 30 comparison pages get real content |
| No article page type | Full article template + 252 articles | This phase | Completes topical authority structure |
| No reverse silo links | Link engine with article chain navigation | This phase | POP methodology fully implemented |
| Money pages standalone | Money pages link to position-1 supporting article | This phase | Internal link equity flows correctly |

**Infrastructure already in place:**
- PageTypeSchema already includes 'article' type
- Slug registry has collision detection
- Link engine module exists at `src/data/linking/link-engine.ts`
- Content constants have pricing data for comparison tables
- Breadcrumbs component supports arbitrary item arrays

## Open Questions

1. **Service Count for Article Allocation**
   - What we know: CONTEXT.md says 63 services x 3 = 189 articles. Actual data has 65 services.
   - What's unclear: Whether all 65 services should get 3 articles or if some (e.g., replacement sub-pages that are children of parent services) should be excluded.
   - Recommendation: Use 65 services x 3 = 195 service articles. Adjust total to 258 (195 + 60 + 3). Alternatively, identify 2 services to exclude to match the 252 target. The planner should note this discrepancy and either adjust the count or identify exclusions. The key invariant is: every service page must have exactly 3 articles OR 0 articles -- partial allocations break the reverse silo chain.

2. **Homepage Article Link Placement**
   - What we know: Service pages get a "Learn More" section after FAQ. Homepage doesn't use ServiceTemplate.
   - What's unclear: Where exactly on the homepage to place links to the 3 homepage articles.
   - Recommendation: Add a dedicated "Roofing Guides" section to the homepage (after FAQ, before final CTA), styled as 3 editorial cards linking to the homepage articles. This is under Claude's discretion per CONTEXT.md.

3. **Content File Organization for 252 Articles**
   - What we know: Service content uses 8 category files. Combo content uses 21 city directories with individual service files.
   - What's unclear: Whether 252 articles should be flat files, grouped by service category, or grouped by parent page.
   - Recommendation: Group by service category (matching service-content organization): one file per category batch (repair-maintenance.ts, residential-roof-types.ts, etc.) plus comparisons.ts and homepage.ts. This keeps files at manageable sizes (~15-25 article content objects per file) and mirrors the established pattern.

4. **Comparison Content for Decision-Helpers**
   - What we know: Decision-helpers have no itemA/itemB -- they show ranked lists instead.
   - What's unclear: Whether ComparisonContentSchema's `comparisonRows` works for ranked lists or needs a separate field.
   - Recommendation: Use the same `comparisonRows` array but with `itemA` representing the ranked item name, `itemB` as a summary score/rating, and `feature` as the evaluation criterion. The ComparisonTable component conditionally renders as a ranked matrix for decision-helpers.

## Discretion Recommendations

Based on research, here are recommendations for areas under Claude's discretion:

### Comparison Content File Organization
**Recommendation:** Group by category -- 3 files total.
- `material-vs-material.ts` (16 comparisons)
- `service-vs-service.ts` (6 comparisons)
- `decision-helper.ts` (8 comparisons)
**Rationale:** Mirrors service-content organization. Each file stays under ~3,000 lines. Easy to find and edit.

### Article Content File Organization
**Recommendation:** Group by service category -- 10 files total.
- `repair-maintenance.ts` (10 services x 3 = 30 articles)
- `residential-roof-types.ts` (articles for residential roof type services)
- `commercial-roof-types.ts`, `components-specialty.ts`, `energy-solar.ts`, `commercial-services.ts`, `design-consultation.ts`, `replacement-sub-pages.ts`
- `comparisons.ts` (30 x 2 = 60 articles)
- `homepage.ts` (3 articles)
**Rationale:** Matches service-content directory structure. No file exceeds ~50 article objects.

### ComparisonTemplate Section Component Breakdown
**Recommendation:** 7 section components:
1. `ComparisonHero` -- split hero with lead form (reuses ServiceHero visual pattern)
2. `ComparisonIntro` -- introductory paragraphs
3. `ComparisonTable` -- side-by-side feature table (or ranked matrix for decision-helpers)
4. `ComparisonAnalysis` -- detailed analysis with homeowner/business subsections
5. `ComparisonVerdict` -- winner recommendation with alternate scenario
6. `ComparisonFaqs` -- FAQ section
7. `ComparisonRelated` -- related services block

### ArticleTemplate Component Architecture
**Recommendation:** 4 section components:
1. `ArticleHero` -- simplified hero (no lead form) with breadcrumbs, H1, reading time estimate
2. `ArticleBody` -- renders intro + sections[] + conclusion as flowing editorial content
3. `ArticleCta` -- CTA banner linking to parent money page
4. `ArticleNav` -- "Continue Reading" next article card + "Back to [Parent]" link

### Build Sequence
**Recommendation:**
1. Infrastructure wave: schemas, articles.ts registry, slug registration, link engine, dispatcher
2. Template wave: ComparisonTemplate + section components, ArticleTemplate + section components
3. Comparison content wave: 30 comparison content files (can be one plan per category)
4. Article content waves: batched by service category (repair-maintenance, residential, etc.)
5. Integration wave: wire Learn More section into ServiceTemplate and ComparisonTemplate
6. Validation wave: build verification, link audit, deduplication check

### Content Writing Approach
**Recommendation:** Write content directly in TypeScript files (not augmentation scripts).
**Rationale:** Augmentation scripts were needed for combo content (1,365 pages with repetitive patterns). Comparisons (30 unique pages) and articles (252 unique topics) benefit from direct authoring for quality control. Scripts add complexity without proportional benefit at this scale.

## Validation Architecture

> `workflow.nyquist_validation` is not set in config.json -- treating as enabled.

### Test Framework
| Property | Value |
|----------|-------|
| Framework | None detected (no test config) |
| Config file | none -- see Wave 0 |
| Quick run command | `npx next build` (SSG validates all content at build time) |
| Full suite command | `npx next build` |

### Phase Requirements -> Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| COMP-01 | ComparisonTemplate renders all sections | smoke | `npx next build` (validates all 30 comparison pages render) | Wave 0 |
| COMP-02 | 16 material comparisons have content | unit | Zod validation at import time -- build fails if missing | Wave 0 |
| COMP-03 | 6 service comparisons have content | unit | Zod validation at import time | Wave 0 |
| COMP-04 | 8 decision-helpers have content | unit | Zod validation at import time | Wave 0 |
| COMP-05 | Lead form above fold on comparisons | manual-only | Visual inspection | N/A |
| COMP-06 | Comparison tables render with winners | smoke | `npx next build` | Wave 0 |
| COMP-07 | FAQ section renders on comparisons | smoke | `npx next build` | Wave 0 |
| ARTL-01 | ArticleTemplate renders ~750 words | smoke | `npx next build` (validates all 252 article pages) | Wave 0 |
| ARTL-02 | 3 articles per service page | unit | Count articles per service in articles.ts -- Zod array length validation | Wave 0 |
| ARTL-03 | Reverse silo links correct | unit | Link engine returns correct moneyPage + nextArticle for each article | Wave 0 |
| ARTL-04 | No outbound links in articles | manual-only | Code review of ArticleTemplate -- verify only money page + next/prev links | N/A |
| ARTL-05 | Articles mapped to keyword clusters | manual-only | Content review of article topics | N/A |

### Sampling Rate
- **Per task commit:** `npx next build` (validates SSG renders all pages)
- **Per wave merge:** `npx next build` + visual spot check of 3-5 pages
- **Phase gate:** Full build green + orphan audit script

### Wave 0 Gaps
- No formal test framework exists; this project relies on Zod validation at import time + Next.js build as the validation gate
- Build-time validation is effectively comprehensive for this project: any schema violation, missing content, or rendering error crashes the build
- Consider extending `scripts/audit-orphan-pages.ts` to verify article link chains

## Sources

### Primary (HIGH confidence)
- Project codebase: `src/lib/schemas.ts`, `src/data/comparisons.ts`, `src/data/slug-registry.ts`, `src/app/[slug]/page.tsx` -- actual code patterns verified
- Project codebase: `src/components/templates/ComparisonTemplate.tsx` -- confirmed 47-line placeholder
- Project codebase: `src/data/linking/link-engine.ts` -- verified link engine pattern
- Project codebase: `src/data/combo-content/schema.ts`, `src/data/combo-content/index.ts` -- content schema + aggregator pattern verified
- Project codebase: `src/components/sections/ComboHero.tsx`, `src/components/sections/ServiceHero.tsx` -- split hero pattern verified

### Secondary (MEDIUM confidence)
- `.planning/STATE.md` -- project history, decisions, and deliverables from phases 1-6
- `.planning/phases/07-supporting-content/07-CONTEXT.md` -- locked decisions from user discussion

### Tertiary (LOW confidence)
- Service count discrepancy (63 vs 65) flagged for validation during planning

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- no new dependencies, all infrastructure exists in project
- Architecture: HIGH -- follows 100% established patterns from phases 1-6
- Pitfalls: HIGH -- identified from actual project history (STATE.md decisions log)
- Content strategy: MEDIUM -- article topics and deduplication approach need validation during execution

**Research date:** 2026-03-08
**Valid until:** 2026-04-08 (stable -- no external dependencies or fast-moving libraries)
