# Phase 5: Content Differentiation Engine - Research

**Researched:** 2026-03-07
**Domain:** Programmatic content generation, text similarity validation, TypeScript data architecture
**Confidence:** HIGH

## Summary

This phase builds a content variation system that produces 1,323 genuinely unique combo pages (65 services x 21 cities) passing below 70% cross-page similarity. The core challenge is architectural, not algorithmic: designing a data structure and composition system that combines city-specific attributes with service-specific knowledge to produce natural-sounding prose at scale, all within the existing Next.js SSG + TypeScript data file patterns established in Phases 3 and 4.

The existing codebase already has rich source material: `CityContent` objects with 14 validated fields (neighborhoods, weather, housing stock, codes) and `ServiceContent` objects with structured sections (overview, residential/commercial, process steps, FAQs). The differentiation engine must compose these into combo-specific content blocks that vary meaningfully across both dimensions -- same service in different cities must read differently, and different services in the same city must read differently.

For validation, a standalone CLI script using Dice-Sorensen coefficient (via the `cmpstr` library) will compare rendered text content across combo pages, ensuring no pair of pages within the same service or same city exceeds the 70% similarity threshold. The SEO industry consensus (supported by multiple 2026 sources) is that programmatic pages need at minimum 80% unique content relative to sibling pages, with the 70% threshold being a safe target.

**Primary recommendation:** Use pre-authored TypeScript data files organized as a `ComboContentMatrix` -- a structured data layer where each service-city combination has authored content blocks that draw from city and service data but are composed as unique prose. Generate content at the data layer (not the template layer) so similarity validation can run against data files without rendering pages.

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| TypeScript | 5.x | Content data files, type safety | Already in project |
| Zod | 3.25.x | Schema validation for combo content | Existing pattern -- all data is Zod-validated |
| cmpstr | 3.2.1 | Text similarity measurement | Modern TypeScript-native, MIT, 11 algorithms including Dice-Sorensen, actively maintained (Jan 2026) |
| Node.js built-in | - | CLI validation script | No external runner needed; `tsx` already available via Next.js toolchain |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| tsx | (dev dep) | Run TypeScript CLI validation scripts | For the similarity validation CLI |
| chalk | 5.x | CLI output formatting | Optional -- validation report readability |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| cmpstr | string-similarity | string-similarity is deprecated (last update 2021), no TypeScript types |
| cmpstr | Custom implementation | Dice coefficient is simple but cmpstr handles tokenization edge cases, batch comparisons |
| Pre-authored files | Build-time generation with templates | Templates produce detectable patterns; pre-authored files guarantee uniqueness but require more upfront effort |

**Installation:**
```bash
npm install --save-dev cmpstr
```

Note: `cmpstr` is a dev dependency only -- used for the validation script, not shipped to production.

## Architecture Patterns

### Recommended Project Structure
```
src/
├── data/
│   ├── combo-content/           # NEW: Combo content data files
│   │   ├── index.ts             # Aggregator with Map-based O(1) lookup
│   │   ├── schema.ts            # ComboContent Zod schema
│   │   ├── types.ts             # ComboContent type (or in lib/schemas.ts)
│   │   ├── newark/              # Per-city directories (21 dirs)
│   │   │   ├── roof-repair.ts   # One file per service-city combo
│   │   │   ├── roof-replacement.ts
│   │   │   └── ...
│   │   ├── montclair/
│   │   │   └── ...
│   │   └── ...
│   ├── city-content/            # Existing Phase 4 data
│   ├── service-content/         # Existing Phase 3 data
│   └── combos.ts                # Existing combo metadata
├── lib/
│   ├── schemas.ts               # Add ComboContentSchema here
│   └── combo-content-utils.ts   # Helper functions for content composition
scripts/
├── validate-similarity.ts       # Standalone CLI validation script
└── similarity-report.ts         # Report generation utilities
```

### Pattern 1: Composite Content Data Files
**What:** Each combo page has a dedicated TypeScript data file containing pre-composed content blocks that blend service knowledge with city-specific details.
**When to use:** This is the primary pattern for all 1,323 combo pages.
**Why:** Pre-authored content files guarantee uniqueness because every block is written (or generated) as a distinct piece of prose. Template-based approaches risk detectable patterns.

```typescript
// src/data/combo-content/newark/roof-repair.ts
import type { ComboContent } from '@/lib/types';

export const newarkRoofRepair: ComboContent = {
  serviceId: 'roof-repair',
  cityId: 'newark',

  // City-specific service overview (3-5 paragraphs, ~400-600 words)
  overview: [
    'When a nor\'easter tears through Newark\'s Ironbound district, the dense rows of brownstones along Ferry Street face unique repair challenges that suburban homes never encounter. Shared party walls mean that a flashing failure on one building can send water cascading into the neighbor\'s unit, turning a simple repair into a multi-property coordination effort. Our crews carry specialized brownstone flashing kits and understand the interconnected roofing systems that define this neighborhood.',
    // ... more paragraphs blending service + city
  ],

  // City-specific challenges for this service (2-4 paragraphs)
  challenges: [
    'Newark\'s urban heat island effect accelerates shingle deterioration faster than anywhere else in Essex County. Surface temperatures on downtown flat roofs can exceed surrounding suburban areas by 15 degrees during summer months, causing granule loss and membrane cracking that demand earlier intervention...',
  ],

  // Local process/what to expect
  process: [
    'Our Newark repair process begins with same-day assessment for emergency calls within city limits. Given the tight lot lines and limited parking throughout the Ironbound and North Ward, we coordinate equipment staging with the city and notify adjacent property owners before mobilizing scaffolding...',
  ],

  // City-specific FAQs (3-5)
  faqs: [
    {
      question: 'How do you handle shared-wall roof repairs on Newark brownstones?',
      answer: 'We coordinate with adjacent property owners to address flashing at party walls simultaneously. Our crews rebuild parapet caps with copper or galvanized metal and install counter-flashing into masonry reglets on both sides...',
    },
    // ...
  ],

  // Unique meta description
  metaDescription: 'Expert roof repair in Newark, NJ. From Ironbound brownstone flashing to Forest Hill slate restoration, our local crews fix leaks fast. Free estimates.',
};
```

### Pattern 2: Hierarchical Content Organization (Per-City Directories)
**What:** Organize combo content files in per-city directories rather than flat files, mirroring city-content structure.
**When to use:** For managing 1,323 files without overwhelming a single directory.
**Why:** 21 directories x ~65 files each is navigable. A flat directory of 1,323 files is not.

```typescript
// src/data/combo-content/index.ts -- follows existing pattern
import { z } from 'zod';
import { ComboContentSchema } from '@/lib/schemas';
import type { ComboContent } from '@/lib/types';

// Import all city modules
import { newarkComboContent } from './newark';
import { montclairComboContent } from './montclair';
// ... all 21 cities

const allContent = z.array(ComboContentSchema).parse([
  ...newarkComboContent,
  ...montclairComboContent,
  // ... all cities
]);

// Composite key: "serviceId:cityId"
const contentMap = new Map<string, ComboContent>(
  allContent.map((c) => [`${c.serviceId}:${c.cityId}`, c])
);

export function getComboContent(serviceId: string, cityId: string): ComboContent {
  const content = contentMap.get(`${serviceId}:${cityId}`);
  if (!content) {
    throw new Error(`Missing combo content for ${serviceId} in ${cityId}`);
  }
  return content;
}
```

### Pattern 3: Batch Authoring with City Index Files
**What:** Each city directory has an `index.ts` that imports and re-exports all service combos for that city.
**When to use:** Always -- this keeps imports manageable.

```typescript
// src/data/combo-content/newark/index.ts
import { newarkRoofRepair } from './roof-repair';
import { newarkRoofReplacement } from './roof-replacement';
// ... all 65 services
import type { ComboContent } from '@/lib/types';

export const newarkComboContent: ComboContent[] = [
  newarkRoofRepair,
  newarkRoofReplacement,
  // ... all 65
];
```

### Pattern 4: Staged Rollout (Not All 1,323 at Once)
**What:** Author combo content in batches by city or service category rather than attempting all 1,323 simultaneously.
**When to use:** During implementation -- build validation tooling first, then author content in manageable batches.
**Recommended batch order:**
1. Newark (HQ city, 65 combos) -- establish patterns
2. One city from each regional group (5 cities, 325 total) -- validate cross-city differentiation
3. Remaining cities by group

### Anti-Patterns to Avoid
- **Template string interpolation as content:** `${cityName} is known for ${challenge}` produces robotic, detectable prose. All content blocks must be authored as natural sentences.
- **Rotating fixed templates:** Using 3-4 intro templates and cycling through them creates detectable patterns across pages. Google specifically flags this.
- **City-name-only swaps:** Replacing just the city name in otherwise identical content is the primary programmatic SEO failure mode. The 80/20 rule (80% unique, max 20% boilerplate) must be met.
- **Identical FAQ questions across cities:** Questions should be phrased differently even when covering similar topics. "How much does roof repair cost in Newark?" vs "What should Montclair homeowners budget for roof repairs?"

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Text similarity measurement | Custom Dice/Jaccard implementation | cmpstr library | Edge cases in tokenization, normalization, Unicode handling |
| Schema validation | Manual type checks | Zod schemas | Existing pattern, runtime safety, 14-field CityContent already validated this way |
| Content aggregation | Manual imports with no validation | Map-based index with Zod parse | Existing pattern from city-content/index.ts and service-content/index.ts |
| Slug generation | Custom string manipulation | Existing generateComboSlug() | Already implemented in slug-utils.ts |
| Meta description uniqueness | Template-based meta descriptions | Pre-authored per-combo metas | Current combos.ts generates template metas; Phase 5 must override with authored ones |

**Key insight:** The content differentiation problem is fundamentally a DATA problem, not a CODE problem. The engine is the data itself -- 1,323 sets of authored content blocks. The code layer (schemas, lookups, validation) follows patterns already established in Phases 3 and 4.

## Common Pitfalls

### Pitfall 1: Template Fingerprinting
**What goes wrong:** Using sentence templates like "When it comes to [service] in [city], homeowners face..." creates a fingerprint that Google detects across hundreds of pages.
**Why it happens:** It seems efficient to write 5 templates and fill in variables. But at 1,323 pages, patterns emerge clearly.
**How to avoid:** Each content block must be authored as unique prose. Use city data as inspiration for content, not as variable substitution.
**Warning signs:** Running the similarity validator and seeing clusters of pages with >60% similarity.

### Pitfall 2: Same-Service Similarity Across Cities
**What goes wrong:** "Roof Repair in Newark" and "Roof Repair in Montclair" share 80% identical content because the service description dominates and city details are superficial additions.
**Why it happens:** It is tempting to write the service explanation once and just append city-specific paragraphs.
**How to avoid:** The city context must be woven INTO the service discussion, not appended after it. The lead challenge, neighborhood references, building types, and weather factors must change the fundamental framing of the service.
**Warning signs:** Similarity scores >50% between same-service pages in different cities.

### Pitfall 3: Same-City Similarity Across Services
**What goes wrong:** "Roof Repair in Newark" and "Roof Replacement in Newark" share identical city descriptions, neighborhood lists, and weather discussions.
**Why it happens:** Reusing city overview content verbatim across multiple service combos for the same city.
**How to avoid:** City context must be filtered through the service lens. Newark weather challenges for roof repair (leak detection during storms) are different from Newark weather challenges for roof replacement (timing installations around seasonal windows).
**Warning signs:** Similarity scores >40% between different-service pages in the same city.

### Pitfall 4: FAQ Duplication
**What goes wrong:** FAQ questions and answers are nearly identical across related combos with only city/service names swapped.
**Why it happens:** FAQs seem like boilerplate, so authors copy-paste and change names.
**How to avoid:** Each FAQ must reference specific city details (neighborhoods, building types, codes) and service-specific technical details. Never reuse an answer verbatim.
**Warning signs:** FAQ sections showing >70% similarity in isolation.

### Pitfall 5: Meta Description Templates
**What goes wrong:** Current combos.ts generates template meta descriptions like "Professional [service] services in [city], NJ." These are not unique.
**Why it happens:** The existing code in combos.ts uses string interpolation for metas.
**How to avoid:** Phase 5 must override the template metas in combos.ts with pre-authored, service-focused meta descriptions from ComboContent. Each meta must mention a specific differentiator (neighborhood, building type, or service specialization).
**Warning signs:** Meta descriptions matching the template pattern when viewed in bulk.

### Pitfall 6: Build Time Explosion
**What goes wrong:** 1,323 TypeScript files with Zod validation at import time causes build to take 10+ minutes.
**Why it happens:** Zod parsing 1,323 objects synchronously during module initialization.
**How to avoid:** Validate per-city batches (21 validations of ~65 objects each) rather than one massive array. Use lazy imports or split the aggregation to keep module init fast.
**Warning signs:** `next build` time increasing significantly as combo content files are added.

## Code Examples

### ComboContent Schema
```typescript
// Source: Based on existing CityContentSchema and ServiceContentSchema patterns
import { z } from 'zod';

export const ComboContentSchema = z.object({
  serviceId: z.string(),
  cityId: z.string(),

  // City-specific service overview (3-5 paragraphs of prose)
  overview: z.array(z.string()).min(3).max(5),

  // City-specific challenges for this service (2-4 paragraphs)
  challenges: z.array(z.string()).min(2).max(4),

  // Local process/what to expect (2-4 paragraphs)
  process: z.array(z.string()).min(2).max(4),

  // City-specific FAQs (3-5 per combo)
  faqs: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })).min(3).max(5),

  // Override the template meta description from combos.ts
  metaDescription: z.string().max(160),
});
```

### Similarity Validation Script (CLI)
```typescript
// scripts/validate-similarity.ts
// Run: npx tsx scripts/validate-similarity.ts

import { CmpStr } from 'cmpstr';
import { getComboContent } from '../src/data/combo-content';
import { services } from '../src/data/services';
import { cities } from '../src/data/cities';

const THRESHOLD = 0.70; // 70% -- pairs above this FAIL

interface SimilarityResult {
  pageA: string;
  pageB: string;
  score: number;
  status: 'PASS' | 'FAIL';
}

function renderTextContent(content: ComboContent): string {
  return [
    ...content.overview,
    ...content.challenges,
    ...content.process,
    ...content.faqs.map(f => `${f.question} ${f.answer}`),
  ].join(' ');
}

function comparePair(a: ComboContent, b: ComboContent): SimilarityResult {
  const textA = renderTextContent(a);
  const textB = renderTextContent(b);

  // Dice-Sorensen coefficient via cmpstr
  const cmp = new CmpStr(textA, textB);
  const score = cmp.diceCoefficient(); // returns 0-1

  return {
    pageA: `${a.serviceId}:${a.cityId}`,
    pageB: `${b.serviceId}:${b.cityId}`,
    score,
    status: score < THRESHOLD ? 'PASS' : 'FAIL',
  };
}

// Compare same-service across cities
// Compare same-city across services
// Output report
```

### Content Composition Helper (Reference Pattern)
```typescript
// src/lib/combo-content-utils.ts
// Utility to help with content authoring -- NOT template generation

import { getCityContent } from '@/data/city-content';
import { getServiceContent } from '@/data/service-content';
import type { CityContent, ServiceContent } from '@/lib/types';

/**
 * Returns city + service data for reference during content authoring.
 * This is a HELPER for authors, not a content generator.
 */
export function getComboContext(serviceId: string, cityId: string) {
  const city = getCityContent(cityId);
  const service = getServiceContent(serviceId);

  return {
    city,
    service,
    isHistoricDistrict: ['glen-ridge', 'montclair'].includes(cityId),
    neighborhoods: city.neighborhoods.map(n => n.name),
    isResidential: service ? true : true, // all services cover both per decision
    isCommercial: true, // all services cover both per decision
  };
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| City-name-swap programmatic pages | Data-rich unique content per page | Google 2023-2024 helpful content updates | Google deindexes thin programmatic pages; 80% unique content is the floor |
| Levenshtein distance for text similarity | Dice-Sorensen coefficient / n-gram approaches | Industry consensus | Dice handles word-level similarity better than character-level Levenshtein for content comparison |
| string-similarity npm package | cmpstr | 2025 (string-similarity deprecated 2021) | TypeScript-native, actively maintained, more algorithms |
| Template-based content generation | Pre-authored data-driven content | Ongoing SEO evolution | Google's spam detection has become sophisticated enough to detect template patterns at scale |

**Deprecated/outdated:**
- `string-similarity` npm package: Deprecated since 2021, no TypeScript types, no maintenance
- Simple city-name-swap programmatic SEO: Google's helpful content system (2023+) specifically targets this pattern

## Open Questions

1. **Exact cmpstr API for Dice coefficient**
   - What we know: Library supports Dice-Sorensen, has batch comparison mode
   - What's unclear: Exact method name and options for word-level vs character-level tokenization
   - Recommendation: Verify API during implementation; fall back to manual bigram Dice if needed (algorithm is simple)

2. **Build performance at 1,323 files**
   - What we know: Current build validates ~86 data objects (65 services + 21 cities). Adding 1,323 will increase this significantly.
   - What's unclear: Whether Next.js 16 tree-shakes unused combo content files or loads all at build time
   - Recommendation: Benchmark after first batch (Newark, 65 files). If build exceeds 3 minutes, implement lazy loading or split validation.

3. **Content authoring at scale**
   - What we know: 1,323 files x ~1,500-2,000 words each = ~2-2.6 million words of content
   - What's unclear: Whether all 1,323 files need to exist for Phase 5 to be "complete" or if a validated subset suffices
   - Recommendation: Phase 5 should deliver the schema, validation tooling, and a representative sample (e.g., all 65 combos for Newark + one city per regional group = ~325 combos). Remaining cities can be authored iteratively with the validation framework in place.

4. **Related combos data**
   - What we know: Context says "both directions" -- same city other services AND same service nearby cities
   - What's unclear: Whether this relationship data belongs in Phase 5 (data) or Phase 6 (template)
   - Recommendation: Phase 5 produces the data (it's a natural extension of combos.ts using existing adjacentCityIds). Phase 6 consumes it in the template.

## Discretion Recommendations

Based on the "Claude's Discretion" items from CONTEXT.md:

| Decision Area | Recommendation | Rationale |
|---------------|----------------|-----------|
| Build-time generation vs pre-authored files | **Pre-authored files** | Template generation creates detectable patterns. Pre-authored files guarantee uniqueness. The data IS the engine. |
| Data source architecture | **Separate ComboContent layer** that REFERENCES existing CityContent/ServiceContent but contains unique composed prose | Reusing CityContent verbatim would create same-city similarity. ComboContent draws from city data but is authored uniquely. |
| City grouping strategy | **Keep existing 5 regional groups** for organization; no additional groupings needed | Regional groups already capture meaningful differences. Adding more groups adds complexity without value. |
| Usage tracking | **Skip for now** | Over-engineering. Similarity validation catches reuse problems without needing to track which data points were used. |
| "Why Choose Us" section | **Weave into overview** rather than dedicated section | Reduces boilerplate risk. A standalone "Why Choose Us" section tends to be identical across pages. |
| Trust/social proof | **Include 1-2 relevant testimonials per combo** drawn from city testimonials, filtered by service relevance | CityContent already has testimonials with service labels. Filter and include relevant ones. |
| Parent linking strategy | **Breadcrumbs** (Home > Services > [Service] > [Service] in [City]) | Clean, standard, good for SEO. Phase 6 implements the component; Phase 5 just needs to plan for the data. |
| Related combos data | **Phase 5 produces the data**, Phase 6 renders it | It's a data concern (which combos relate to which) not a template concern. Use adjacentCityIds from cities.ts. |
| Similarity validation script | **Standalone CLI** (`npx tsx scripts/validate-similarity.ts`) | Keeps build clean. Runs on demand or in CI. Does not slow down `next build`. |
| Sample batch for 50-page validation | **Strategic selection**: 5 services x 4 cities (one per non-HQ regional group) + all 10 repair-maintenance services in Newark | Tests both axes: same-service-across-cities and same-city-across-services. Covers 30 pairs per axis. |
| Validation report format | **Console table** with PASS/FAIL, scores, and a summary line | Simple, grep-able, CI-friendly. JSON output option for programmatic consumption. |
| Tiered vs flat thresholds | **Tiered**: same-service-across-cities <70%, same-city-across-services <50%, same-category-same-city <60% | Same-city pages have more reason to share language, so the threshold is stricter. |

## Sources

### Primary (HIGH confidence)
- Codebase analysis: `src/lib/schemas.ts` -- CityContentSchema (14 fields), ServiceContentSchema, ComboSchema
- Codebase analysis: `src/data/city-content/` -- 5 regional group files with rich neighborhood/weather/building data
- Codebase analysis: `src/data/service-content/` -- 8 category files with residential/commercial content
- Codebase analysis: `src/data/combos.ts` -- existing combo generation with template meta descriptions
- Codebase analysis: `src/app/[slug]/page.tsx` -- SSG dispatcher, ComboTemplate receives service + city props

### Secondary (MEDIUM confidence)
- [seomatic.ai - Programmatic SEO Duplicate Content](https://seomatic.ai/blog/programmatic-seo-duplicate-content) -- 80/20 unique content rule, Google deindexing behavior
- [cmpstr GitHub](https://github.com/komed3/cmpstr) -- v3.2.1, TypeScript-native, MIT, 11 similarity algorithms, last updated Jan 2026
- [Shopify Programmatic SEO Guide 2026](https://www.shopify.com/blog/programmatic-seo) -- Content differentiation strategies

### Tertiary (LOW confidence)
- [string-similarity npm](https://github.com/aceakash/string-similarity) -- Deprecated, v4.0.4, last update 2021 (used only as "what NOT to use" reference)
- General WebSearch findings on similarity thresholds -- no single authoritative source for exact Google thresholds

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Based on direct codebase analysis and verified library research
- Architecture: HIGH - Patterns directly extend existing codebase conventions (Map-based lookups, Zod validation, per-group file organization)
- Pitfalls: HIGH - SEO duplicate content pitfalls are well-documented; codebase-specific pitfalls identified through direct code review
- Similarity validation: MEDIUM - cmpstr API specifics need verification during implementation; Dice algorithm itself is well-understood

**Research date:** 2026-03-07
**Valid until:** 2026-04-07 (30 days -- stable domain, no fast-moving dependencies)
