# Entity-Grounding — Phase 1 (Infra) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship the entity-grounding *infrastructure* — an optional `definition`/`whereIs`/`definitionA`/`definitionB` content field per page type, a new `EntityDefinition` section rendered as the first H2 after the hero, the definitional Q&A appended to each page's FAQ JSON-LD, and a conditional heading-audit — all green, plus 4 gold-exemplar definitions that prove the four templates end-to-end.

**Architecture:** Mirror the prior infra batches (Combo-Batch-0 / CMP-0 / Cities-Batch-0): every new schema field is `z.string().optional()` so all existing data validates unchanged; the new section is gated on field presence so un-backfilled pages render exactly as today. The single hard coupling is `scripts/audit-headings.ts`'s "first `<h2>` after hero === `coreH2`" check — we make its expectation **conditional on whether the sampled page actually carries a definition**, so it is correct in every phase without per-phase edits. Phase 1 ships 4 exemplar definitions (roof-repair service, Newark city, roof-repair/Newark combo, asphalt-shingles-vs-metal comparison) so all four templates + both audit branches (present / absent) are exercised live.

**Tech Stack:** Next.js App Router (prerendered HTML), TypeScript, Zod content schemas, `tsx` audit scripts (`audit:headings` / `audit:semantics` / `audit:meta`), `node-html-parser` (rendered audit), `parseRichText` + `ProseLead` (copper-rail answer-first rendering), `buildFaqSchema` (FAQPage JSON-LD).

---

## Design decisions (resolves the spec's "Open items")

| Open item | Resolution (Phase 1) |
|---|---|
| Exact placement of the definitional section | **First child of the `<article>` content column, above the existing overview/intro lead** → it becomes the first content `<h2>` after the hero. |
| Should `definition` become required post-backfill? | **No — stays `.optional()` in Phase 1.** "Required" is a post-backfill question (out of scope; the whole infra model is ship-green-then-backfill). |
| Comparison JSON-LD: two entries vs one; `DefinedTerm`? | **Two gated Q&A entries** (`What Is {A}?` / `What Is {B}?`); **no `DefinedTerm`** (YAGNI). |
| Contractor / "[City], NJ" reframe sweep | **Phase 2/3 content — out of scope here.** (The exemplar `whereIs` naturally uses "Newark, New Jersey", but the descriptor/credential reframe across overview/hero is a later batch.) |
| "licensed" vs "registered" wording | **Phase 2 content decision — out of scope.** |
| Heading casing ("What is" vs "What Is") | **Title-case "What Is {Service}?" / "Where Is {City}, NJ?"** to match every other site heading (e.g. "What Roofing Services Are Available in {c}?"). The audit only enforces the trailing "?"; the spec's lowercase "is" is informal shorthand. |
| coreH2 vs new accessor (avoid index-shift breakage) | **Add a NEW additive accessor** (`service.definitionH2`, `combo.definitionH2`, `city.whereIsH2`) — exactly the precedent of `city.permitsH2`/`materialsH2`. Do **not** touch the existing `coreH2`/`h2s` or any positional `serviceH2s[1..8]` binding. The audit repoints its *expected first H2* to the new accessor **conditionally**. |
| Comparison heading-config tree | **None.** Comparison is already content/data-driven and not DOM-audited; the `What Is {A}?` headings derive inline from `comparison.itemA`/`itemB`. |

**Known Phase-2 polish (noted, not fixed here):** the comparison heading `What Is {itemA}?` reads awkwardly for plurals (e.g. "What Is Asphalt Shingles?"). Acceptable for infra (ends in "?", renders, snippet-eligible); a later batch may make the heading data-driven or pluralize.

---

## File structure / blast radius

| File | Change | Why |
|---|---|---|
| `src/lib/schemas.ts` | +`definition?` on `ServiceContentSchema`; +`whereIs?` on `CityContentSchema` | optional content fields (service + city live here) |
| `src/data/combo-content/schema.ts` | +`definition?` on `ComboContentSchema` | combo content field |
| `src/data/comparison-content/schema.ts` | +`definitionA?` +`definitionB?` on `ComparisonContentSchema` | comparison content fields |
| `src/components/sections/EntityDefinition.tsx` | **CREATE** | shared answer-first definitional section (heading + ProseLead) |
| `src/data/heading-config.ts` | +`service.definitionH2`, `combo.definitionH2`, `city.whereIsH2` accessors | the new first-H2 strings (additive; existing trees untouched) |
| `scripts/audit-headings.ts` | conditional sample `coreH2` + new config strings | the one hard coupling; auto-adapts across phases |
| `src/components/templates/ServiceTemplate.tsx` | render `EntityDefinition` first + prepend def Q&A to `buildFaqSchema` | service wiring |
| `src/components/templates/ComboTemplate.tsx` | same | combo wiring |
| `src/components/templates/CityTemplate.tsx` | same + ToC entry | city wiring |
| `src/components/templates/ComparisonTemplate.tsx` | render two `EntityDefinition` + prepend two def Q&As | comparison wiring |
| `src/data/service-content/repair-maintenance.ts` | +`definition` on `roof-repair` | exemplar |
| `src/data/city-content/urban-core.ts` | +`whereIs` on `newark` | exemplar |
| `src/data/combo-content/newark/roof-repair.ts` | +`definition` | exemplar |
| `src/data/comparison-content/material-vs-material.ts` | +`definitionA`/`definitionB` on asphalt-shingles-vs-metal-roofing | exemplar |

**No changes** to `ComboPlaceholder` / `ComparisonPlaceholder` (the conditional audit handles the noindex/contentless paths), `buildFaqSchema` (already strips markdown), `src/lib/types.ts` (types auto-derive via `z.infer`), or any hero (`directAnswer` is a separate hero field).

**Testing note (project convention):** this repo has no unit-test harness; its "tests" are the build + audit gates (`audit:headings` / `audit:semantics` / `audit:meta`) and a rendered curl/screenshot check. Each task below states the gate command and the exact expected output, applying TDD's verify-each-step discipline through the project's real verification mechanism. Two full `npm run build` runs are expected (after the infra commit, after the exemplar commit) — acceptable per the established cadence.

---

## Task 1: Add the optional schema fields (4 schemas)

**Files:**
- Modify: `src/lib/schemas.ts` (ServiceContentSchema ~line 133; CityContentSchema ~line 188)
- Modify: `src/data/combo-content/schema.ts` (~line 12)
- Modify: `src/data/comparison-content/schema.ts` (~line 11)

- [ ] **Step 1: Add `definition?` to `ServiceContentSchema`** in `src/lib/schemas.ts`. Find the verbatim block and insert the new field immediately after `directAnswer`:

old_string:
```ts
  // Answer-first hero answer (≤40 words). Optional for backward compatibility:
  // the ~64 other services omit it and still validate. Consumed by the hero
  // when present (gated on presence at render time).
  directAnswer: z.string().optional(),
  overview: z.array(z.string()).min(2).max(5),
```
new_string:
```ts
  // Answer-first hero answer (≤40 words). Optional for backward compatibility:
  // the ~64 other services omit it and still validate. Consumed by the hero
  // when present (gated on presence at render time).
  directAnswer: z.string().optional(),
  // Entity-grounding definitional answer ("What is {service}?", ≤40-word first
  // sentence, central entity pre-bolded via **markdown**). Optional — existing
  // services omit it and still validate; rendered by the EntityDefinition section
  // and appended to the FAQ JSON-LD when present. Mirrors directAnswer.
  definition: z.string().optional(),
  overview: z.array(z.string()).min(2).max(5),
```

- [ ] **Step 2: Add `whereIs?` to `CityContentSchema`** in `src/lib/schemas.ts`:

old_string:
```ts
  // Answer-first hero answer (≤40 words, answer span pre-bolded via **markdown**).
  // Optional for backward compatibility: cities not yet rewritten omit it and
  // still validate. Consumed by CityHero when present (gated at render time),
  // mirroring ServiceContent.directAnswer.
  directAnswer: z.string().optional(),
  heroHeadline: z.string(),
```
new_string:
```ts
  // Answer-first hero answer (≤40 words, answer span pre-bolded via **markdown**).
  // Optional for backward compatibility: cities not yet rewritten omit it and
  // still validate. Consumed by CityHero when present (gated at render time),
  // mirroring ServiceContent.directAnswer.
  directAnswer: z.string().optional(),
  // Entity-grounding locational answer ("Where is {City}, NJ?", ≤40-word first
  // sentence, place entity pre-bolded via **markdown**). Optional — cities not yet
  // backfilled omit it and still validate. Rendered by EntityDefinition and
  // appended to the FAQ JSON-LD when present. Mirrors directAnswer.
  whereIs: z.string().optional(),
  heroHeadline: z.string(),
```

- [ ] **Step 3: Add `definition?` to `ComboContentSchema`** in `src/data/combo-content/schema.ts`:

old_string:
```ts
  // Answer-first hero answer (≤40 words, pre-bolded via **markdown**). Optional —
  // every existing combo validates unchanged; per-city content batches populate it.
  directAnswer: z.string().optional(),
  overview: z.array(z.string()).min(3).max(5),
```
new_string:
```ts
  // Answer-first hero answer (≤40 words, pre-bolded via **markdown**). Optional —
  // every existing combo validates unchanged; per-city content batches populate it.
  directAnswer: z.string().optional(),
  // Entity-grounding definitional answer ("What is {service}?", ≤40-word first
  // sentence, pre-bolded via **markdown**). City-agnostic: the canonical service
  // definition is propagated to every combo. Optional — existing combos validate
  // unchanged; backfilled per-city. Mirrors directAnswer.
  definition: z.string().optional(),
  overview: z.array(z.string()).min(3).max(5),
```

- [ ] **Step 4: Add `definitionA?` / `definitionB?` to `ComparisonContentSchema`** in `src/data/comparison-content/schema.ts`:

old_string:
```ts
  // Optional answer-first hero answer (≤40 words, pre-bolded with **markdown**).
  // Rendered by ComparisonHero; absent until the content rewrite (CMP-1..4) sets it.
  directAnswer: z.string().optional(),
  introHeading: z.string(),
```
new_string:
```ts
  // Optional answer-first hero answer (≤40 words, pre-bolded with **markdown**).
  // Rendered by ComparisonHero; absent until the content rewrite (CMP-1..4) sets it.
  directAnswer: z.string().optional(),
  // Entity-grounding definitional answers ("What is {A}?" / "What is {B}?",
  // ≤40-word first sentence each, pre-bolded via **markdown**). Optional — existing
  // comparisons validate unchanged. Rendered by two EntityDefinition sections and
  // appended to the FAQ JSON-LD when present. A/B labels come from itemA/itemB.
  definitionA: z.string().optional(),
  definitionB: z.string().optional(),
  introHeading: z.string(),
```

- [ ] **Step 5: Type-check** (existing data must still validate — every new field is optional).

Run: `npx tsc --noEmit`
Expected: exits 0, no errors. (Types `ServiceContent`/`CityContent`/`ComboContent`/`ComparisonContent` auto-gain the optional field via `z.infer`; no `types.ts` edit.)

- [ ] **Step 6: Commit** (combined with later tasks into the infra commit — do not commit yet; see Task 6).

---

## Task 2: Create the `EntityDefinition` section component

**Files:**
- Create: `src/components/sections/EntityDefinition.tsx`

- [ ] **Step 1: Create the component.** It owns its `<section>` (consistent with `ComboOverview`/`ServiceOverview`/`ComparisonIntro`), accepts an optional `sectionId` for the city ToC scroll-spy anchor, renders the heading via `SectionHeading` (icon is a sibling `aria-hidden` span so the audit sees pristine heading text) and the definition via `ProseLead` (copper-rail answer-first lead; `parseRichText` handles `**bold**`).

File contents:
```tsx
import { ProseLead, SectionHeading } from './ProseLead';

// "What is / Where is" definitional glyph (info-circle). aria-hidden — the icon is
// a sibling of the <h2> (see SectionHeading) so the rendered-heading audit sees only
// the plain question text.
const DEFINITION_ICON = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 16v-4M12 8h.01" />
  </svg>
);

interface EntityDefinitionProps {
  /** Heading id (also the section's aria-labelledby target). Must be unique per page. */
  headingId: string;
  /** Optional section id — used by the city Table-of-Contents scroll-spy anchor. */
  sectionId?: string;
  /** Question-form heading, e.g. "What Is Roof Repair?" / "Where Is Newark, NJ?". */
  heading: string;
  /** The ≤40-word answer-first definition (central entity pre-bolded via **markdown**). */
  definition: string;
}

/**
 * Entity-grounding definitional section — the first content H2 after the hero.
 * Renders an answer-first ProseLead (copper-rail lead) under a question heading and
 * gives search engines the page's central entity up front. Render only when the
 * source `definition`/`whereIs`/`definitionA`/`definitionB` field is present (gate
 * at the call site so un-backfilled pages render exactly as before).
 */
export function EntityDefinition({ headingId, sectionId, heading, definition }: EntityDefinitionProps) {
  return (
    <section id={sectionId} aria-labelledby={headingId}>
      <SectionHeading id={headingId} icon={DEFINITION_ICON}>
        {heading}
      </SectionHeading>
      <div className="mt-5">
        <ProseLead paragraphs={[definition]} />
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Type-check.**

Run: `npx tsc --noEmit`
Expected: exits 0. (`SectionHeading` + `ProseLead` are both exported from `./ProseLead`; `ProseLead` takes `paragraphs: string[]` so `[definition]` is correct.)

---

## Task 3: Add the heading-config accessors (additive — no existing tree touched)

**Files:**
- Modify: `src/data/heading-config.ts`

- [ ] **Step 1: Add `definitionH2` to the `service` tree.** Insert the accessor before `coreH2` is fine, but to keep the existing block intact, add it right after `coreH2`:

old_string:
```ts
  service: {
    h1: (s: string) => `Who Provides ${s} in Newark?`,
    coreH2: (s: string) => `What ${s} Do We Provide?`,
```
new_string:
```ts
  service: {
    h1: (s: string) => `Who Provides ${s} in Newark?`,
    coreH2: (s: string) => `What ${s} Do We Provide?`,
    // Entity-grounding: the definitional first H2 ("What Is {Service}?"), rendered
    // ABOVE the existing tree by the EntityDefinition section when content.definition
    // is present. Additive — does NOT shift the h2s[] indices the template binds.
    definitionH2: (s: string) => `What Is ${s}?`,
```

- [ ] **Step 2: Add `whereIsH2` to the `city` tree** (alongside `permitsH2`/`materialsH2`):

old_string:
```ts
    coreH2: (c: string) => `What Roofing Services Are Available in ${c}?`,
    // D-11 new shared sections:
    permitsH2: (c: string) => `What Should You Know About Roofing Permits in ${c}?`,
```
new_string:
```ts
    coreH2: (c: string) => `What Roofing Services Are Available in ${c}?`,
    // Entity-grounding: the locational first H2 ("Where Is {City}, NJ?"), rendered
    // ABOVE the services grid by the EntityDefinition section when content.whereIs
    // is present. Additive — coreH2/h2s unchanged (coreH2 stays the services-grid H2).
    whereIsH2: (c: string) => `Where Is ${c}, NJ?`,
    // D-11 new shared sections:
    permitsH2: (c: string) => `What Should You Know About Roofing Permits in ${c}?`,
```

- [ ] **Step 3: Add `definitionH2` to the `combo` tree.** It is city-agnostic (takes only the service name — the same canonical definition is propagated to every combo):

old_string:
```ts
  combo: {
    h1: (s: string, c: string) => `Who Provides ${s} in ${c}?`,
    coreH2: (s: string, c: string) => `What ${s} Is Available in ${c}?`,
```
new_string:
```ts
  combo: {
    h1: (s: string, c: string) => `Who Provides ${s} in ${c}?`,
    coreH2: (s: string, c: string) => `What ${s} Is Available in ${c}?`,
    // Entity-grounding: the definitional first H2 ("What Is {Service}?"), city-agnostic
    // (the canonical service definition is propagated to every combo). Rendered ABOVE
    // the overview by EntityDefinition when content.definition is present. Additive.
    definitionH2: (s: string) => `What Is ${s}?`,
```

- [ ] **Step 4: Type-check.**

Run: `npx tsc --noEmit`
Expected: exits 0. (`HEADING_CONFIG` is `as const`; adding function members is fine.)

---

## Task 4: Make the heading audit conditional (the one hard coupling)

**Files:**
- Modify: `scripts/audit-headings.ts` (imports ~line 36-43; `staticPass` configStrings ~line 82-100; `buildSampleSet` ~line 164-187)

**Why conditional:** in Phase 1 only the 4 exemplar pages carry a definition. The rendered audit asserts `first <h2> after hero === sample.coreH2`. So each content-page sample's expected `coreH2` must be the **definition heading when that page has the field, else the old coreH2**. This is green in every phase: un-backfilled samples (e.g. the noindex combo) keep expecting the old string; backfilled samples expect the new definition heading — with no further audit edits as Phases 2–3 backfill.

- [ ] **Step 1: Import the content getters.** Add after the existing `@/data/*` imports:

old_string:
```ts
import { getSlugsByType } from '@/data/slug-registry';
import { HEADING_CONFIG } from '@/data/heading-config';
```
new_string:
```ts
import { getSlugsByType } from '@/data/slug-registry';
import { HEADING_CONFIG } from '@/data/heading-config';
import { getServiceContent } from '@/data/service-content';
import { getCityContent } from '@/data/city-content';
import { getComboContent } from '@/data/combo-content';
```

- [ ] **Step 2: Add presence helpers + use them in `buildSampleSet`.** Replace the verbatim `buildSampleSet` head + the three content-page sample entries:

old_string:
```ts
/** One representative prerendered file per template (Pattern 3). */
function buildSampleSet(): RenderedSample[] {
  // Resolve the names used by the representative pages so the expected Core H2
  // strings match what the template renders (interpolated from real data).
  const repairName = services.find((s) => s.slug === 'roof-repair')?.name ?? 'Roof Repair';
  const newarkName = cities.find((c) => c.slug === 'newark')?.name ?? 'Newark';
  const keepComboService = services.find((s) => s.slug === 'asphalt-shingle-roofing')?.name ?? 'Asphalt Shingle Roofing';
  const keepComboCity = cities.find((c) => c.slug === 'belleville')?.name ?? 'Belleville';

  return [
    { label: 'home', file: 'index.html', coreH2: H.home.coreH2, kind: 'full' },
    { label: 'service (roof-repair)', file: 'roof-repair.html', coreH2: H.service.coreH2(repairName), kind: 'full' },
    { label: 'city (newark)', file: 'roofing-in-newark-nj.html', coreH2: H.city.coreH2(newarkName), kind: 'full' },
    {
      label: 'keep combo (roof-repair/newark)',
      file: 'roof-repair-newark-nj.html',
      coreH2: H.combo.coreH2(repairName, newarkName),
      kind: 'full',
    },
    {
      label: 'noindex combo (asphalt-shingle-roofing/belleville)',
      file: 'asphalt-shingle-roofing-belleville-nj.html',
      coreH2: H.combo.coreH2(keepComboService, keepComboCity),
      kind: 'full',
    },
```
new_string:
```ts
// ── Entity-grounding (Phase 1): a sampled page's first <h2> is the EntityDefinition
//    heading ONLY when that page actually carries the optional definition field.
//    These helpers let the expected coreH2 track backfill across phases with no edits.
function serviceHasDefinition(slug: string): boolean {
  const svc = services.find((s) => s.slug === slug);
  if (!svc) return false;
  try {
    return Boolean(getServiceContent(svc.id).definition);
  } catch {
    return false;
  }
}
function cityHasWhereIs(slug: string): boolean {
  const city = cities.find((c) => c.slug === slug);
  if (!city) return false;
  try {
    return Boolean(getCityContent(city.id).whereIs);
  } catch {
    return false;
  }
}
function comboHasDefinition(serviceSlug: string, citySlug: string): boolean {
  const svc = services.find((s) => s.slug === serviceSlug);
  const city = cities.find((c) => c.slug === citySlug);
  if (!svc || !city) return false;
  try {
    return Boolean(getComboContent(svc.id, city.id).definition);
  } catch {
    return false;
  }
}

/** One representative prerendered file per template (Pattern 3). */
function buildSampleSet(): RenderedSample[] {
  // Resolve the names used by the representative pages so the expected Core H2
  // strings match what the template renders (interpolated from real data).
  const repairName = services.find((s) => s.slug === 'roof-repair')?.name ?? 'Roof Repair';
  const newarkName = cities.find((c) => c.slug === 'newark')?.name ?? 'Newark';
  const keepComboService = services.find((s) => s.slug === 'asphalt-shingle-roofing')?.name ?? 'Asphalt Shingle Roofing';
  const keepComboCity = cities.find((c) => c.slug === 'belleville')?.name ?? 'Belleville';

  return [
    { label: 'home', file: 'index.html', coreH2: H.home.coreH2, kind: 'full' },
    {
      label: 'service (roof-repair)',
      file: 'roof-repair.html',
      coreH2: serviceHasDefinition('roof-repair')
        ? H.service.definitionH2(repairName)
        : H.service.coreH2(repairName),
      kind: 'full',
    },
    {
      label: 'city (newark)',
      file: 'roofing-in-newark-nj.html',
      coreH2: cityHasWhereIs('newark') ? H.city.whereIsH2(newarkName) : H.city.coreH2(newarkName),
      kind: 'full',
    },
    {
      label: 'keep combo (roof-repair/newark)',
      file: 'roof-repair-newark-nj.html',
      coreH2: comboHasDefinition('roof-repair', 'newark')
        ? H.combo.definitionH2(repairName)
        : H.combo.coreH2(repairName, newarkName),
      kind: 'full',
    },
    {
      label: 'noindex combo (asphalt-shingle-roofing/belleville)',
      file: 'asphalt-shingle-roofing-belleville-nj.html',
      coreH2: comboHasDefinition('asphalt-shingle-roofing', 'belleville')
        ? H.combo.definitionH2(keepComboService)
        : H.combo.coreH2(keepComboService, keepComboCity),
      kind: 'full',
    },
```

- [ ] **Step 3: Add the new accessor strings to the static `configStrings` list** (so they get the "ends in ?" check, like `permitsH2`/`materialsH2`). In `staticPass`:

old_string:
```ts
    ['service.h1', H.service.h1(sampleService)],
    ['service.coreH2', H.service.coreH2(sampleService)],
    ...H.service.h2s(sampleService).map((s, i) => [`service.h2[${i}]`, s] as [string, string]),
    ['city.h1', H.city.h1(sampleCity)],
    ['city.coreH2', H.city.coreH2(sampleCity)],
    ['city.permitsH2', H.city.permitsH2(sampleCity)],
    ['city.materialsH2', H.city.materialsH2(sampleCity)],
    ...H.city.h2s(sampleCity).map((s, i) => [`city.h2[${i}]`, s] as [string, string]),
    ['combo.h1', H.combo.h1(sampleService, sampleCity)],
    ['combo.coreH2', H.combo.coreH2(sampleService, sampleCity)],
```
new_string:
```ts
    ['service.h1', H.service.h1(sampleService)],
    ['service.coreH2', H.service.coreH2(sampleService)],
    ['service.definitionH2', H.service.definitionH2(sampleService)],
    ...H.service.h2s(sampleService).map((s, i) => [`service.h2[${i}]`, s] as [string, string]),
    ['city.h1', H.city.h1(sampleCity)],
    ['city.coreH2', H.city.coreH2(sampleCity)],
    ['city.whereIsH2', H.city.whereIsH2(sampleCity)],
    ['city.permitsH2', H.city.permitsH2(sampleCity)],
    ['city.materialsH2', H.city.materialsH2(sampleCity)],
    ...H.city.h2s(sampleCity).map((s, i) => [`city.h2[${i}]`, s] as [string, string]),
    ['combo.h1', H.combo.h1(sampleService, sampleCity)],
    ['combo.coreH2', H.combo.coreH2(sampleService, sampleCity)],
    ['combo.definitionH2', H.combo.definitionH2(sampleService)],
```

- [ ] **Step 4: Run the static audit** (rendered pass is skipped until a build exists).

Run: `npm run audit:headings`
Expected: prints the static-pass summary and `0 violation(s) found.` then `... PASS`, exit 0. (The new accessor strings all end in "?"; no sampled page has a definition yet, so the conditional expressions resolve to the old `coreH2` strings.)

---

## Task 5: Wire `EntityDefinition` + FAQ JSON-LD into the 4 templates

**Files:**
- Modify: `src/components/templates/ServiceTemplate.tsx`
- Modify: `src/components/templates/ComboTemplate.tsx`
- Modify: `src/components/templates/CityTemplate.tsx`
- Modify: `src/components/templates/ComparisonTemplate.tsx`

### 5a — ServiceTemplate

- [ ] **Step 1: Import `EntityDefinition`.** Add next to the other section imports (e.g. after the `ServiceHero`/`ServiceOverview` import group — match the file's existing import style):
```ts
import { EntityDefinition } from '@/components/sections/EntityDefinition';
```

- [ ] **Step 2: Prepend the definitional Q&A to the FAQ JSON-LD.** Replace the `buildFaqSchema(content.faqs)` arg inside the `buildJsonLdGraph(...)` call:

old_string: `        buildFaqSchema(content.faqs),`
new_string:
```ts
        buildFaqSchema(
          content.definition
            ? [{ question: `What Is ${service.name}?`, answer: content.definition }, ...content.faqs]
            : content.faqs,
        ),
```

- [ ] **Step 3: Render `EntityDefinition` as the FIRST `<article>` child** (above `ServiceOverview`). Find the verbatim block and insert before it:

old_string:
```tsx
        <article className="space-y-12 pb-16 lg:col-span-2">
          {/* ── §4.2 CORE band: first content H2 = "What [Service] Do We Provide?" ── */}
          <AnimateIn><ServiceOverview heading={coreH2}
```
new_string:
```tsx
        <article className="space-y-12 pb-16 lg:col-span-2">
          {/* Entity-grounding: definitional "What Is {Service}?" — the new first content H2.
              Gated on content.definition so un-backfilled services render as before. */}
          {content.definition && (
            <AnimateIn>
              <EntityDefinition
                headingId="entity-definition-heading"
                heading={HEADING_CONFIG.service.definitionH2(service.name)}
                definition={content.definition}
              />
            </AnimateIn>
          )}
          {/* ── §4.2 CORE band: first content H2 = "What [Service] Do We Provide?" ── */}
          <AnimateIn><ServiceOverview heading={coreH2}
```

(Note: `HEADING_CONFIG` is already imported in ServiceTemplate. The audit's expected first-H2 calls the same `HEADING_CONFIG.service.definitionH2(name)`, guaranteeing a byte-identical match.)

### 5b — ComboTemplate

- [ ] **Step 4: Import `EntityDefinition`** (after the `ComboOverview` import):
```ts
import { EntityDefinition } from '@/components/sections/EntityDefinition';
```

- [ ] **Step 5: Prepend the definitional Q&A to the FAQ JSON-LD.** Replace the `buildFaqSchema(content.faqs)` arg:

old_string: `        buildFaqSchema(content.faqs),`
new_string:
```ts
        buildFaqSchema(
          content.definition
            ? [{ question: `What Is ${service.name}?`, answer: content.definition }, ...content.faqs]
            : content.faqs,
        ),
```

- [ ] **Step 6: Render `EntityDefinition` first inside the article.** Insert before the `§4.4 Core` `ComboOverview` block:

old_string:
```tsx
        <article className="space-y-12 pb-16 lg:col-span-2">
          {/* §4.4 Core: "What [Service] Is Available in [City]?" -- FIRST */}
          <AnimateIn>
            <ComboOverview
```
new_string:
```tsx
        <article className="space-y-12 pb-16 lg:col-span-2">
          {/* Entity-grounding: definitional "What Is {Service}?" — the new first content H2
              (city-agnostic). Gated on content.definition so un-backfilled combos render as before. */}
          {content.definition && (
            <AnimateIn>
              <EntityDefinition
                headingId="entity-definition-heading"
                heading={HEADING_CONFIG.combo.definitionH2(service.name)}
                definition={content.definition}
              />
            </AnimateIn>
          )}
          {/* §4.4 Core: "What [Service] Is Available in [City]?" -- FIRST */}
          <AnimateIn>
            <ComboOverview
```

### 5c — CityTemplate

- [ ] **Step 7: Import `EntityDefinition`** (after the `CityHero`/`CityServicesGrid` import group):
```ts
import { EntityDefinition } from '@/components/sections/EntityDefinition';
```

- [ ] **Step 8: Prepend the locational Q&A to the FAQ JSON-LD.** Replace the `buildFaqSchema(content.faqs)` arg:

old_string: `        buildFaqSchema(content.faqs),`
new_string:
```ts
        buildFaqSchema(
          content.whereIs
            ? [{ question: `Where Is ${city.name}, NJ?`, answer: content.whereIs }, ...content.faqs]
            : content.faqs,
        ),
```

- [ ] **Step 9: Prepend a ToC entry** (scroll-spy order must match render order — the new section renders first). Find the `tocSections` array head and insert the gated entry as the first element:

old_string:
```ts
  const tocSections = [
    { id: 'services', label: 'Services' },
```
new_string:
```ts
  const tocSections = [
    ...(content.whereIs ? [{ id: 'where-is', label: `About ${city.name}` }] : []),
    { id: 'services', label: 'Services' },
```

- [ ] **Step 10: Render `EntityDefinition` as the FIRST `<article>` child** (above the `id="services"` block). It carries `sectionId="where-is"` for the ToC anchor:

old_string:
```tsx
          <article className="space-y-16 lg:col-span-3">
            {/* §4.3 Core: "What Roofing Services Are Available in [City]?" -- FIRST */}
            <AnimateIn>
              <section id="services" aria-labelledby="services-heading">
```
new_string:
```tsx
          <article className="space-y-16 lg:col-span-3">
            {/* Entity-grounding: locational "Where Is {City}, NJ?" — the new first content H2.
                Gated on content.whereIs so un-backfilled cities render as before. */}
            {content.whereIs && (
              <AnimateIn>
                <EntityDefinition
                  sectionId="where-is"
                  headingId="where-is-heading"
                  heading={HEADING_CONFIG.city.whereIsH2(city.name)}
                  definition={content.whereIs}
                />
              </AnimateIn>
            )}
            {/* §4.3 Core: "What Roofing Services Are Available in [City]?" -- FIRST */}
            <AnimateIn>
              <section id="services" aria-labelledby="services-heading">
```

(Note: the stale inline comment at lines ~120-122 — "The FIRST content H2 after the hero MUST be … city.coreH2" — should be softened to "… unless the entity-definition section is present". Apply this small comment edit while here.)

### 5d — ComparisonTemplate (two definitions)

- [ ] **Step 11: Import `EntityDefinition`** (after the `ComparisonHero`/`ComparisonIntro` import group):
```ts
import { EntityDefinition } from '@/components/sections/EntityDefinition';
```

- [ ] **Step 12: Build + prepend two definitional Q&As to the FAQ JSON-LD.** Replace the `buildFaqSchema(content.faqs)` arg (A and B independently gated; `itemA`/`itemB` are optional on the `Comparison` object, so guard both):

old_string: `        buildFaqSchema(content.faqs),`
new_string:
```tsx
        buildFaqSchema([
          ...(content.definitionA && comparison.itemA
            ? [{ question: `What Is ${comparison.itemA}?`, answer: content.definitionA }]
            : []),
          ...(content.definitionB && comparison.itemB
            ? [{ question: `What Is ${comparison.itemB}?`, answer: content.definitionB }]
            : []),
          ...content.faqs,
        ]),
```

- [ ] **Step 13: Render the two `EntityDefinition` sections** as the FIRST `<article>` children (above `ComparisonIntro`):

old_string:
```tsx
        <article className="space-y-12 pb-16 lg:col-span-2">
          <AnimateIn>
            <ComparisonIntro
              heading={content.introHeading}
              paragraphs={content.introParagraphs}
            />
          </AnimateIn>
```
new_string:
```tsx
        <article className="space-y-12 pb-16 lg:col-span-2">
          {/* Entity-grounding: define each side ("What Is {A}?" / "What Is {B}?") before the
              head-to-head. Each gated on its definition + item label so un-backfilled comparisons render as before. */}
          {content.definitionA && comparison.itemA && (
            <AnimateIn>
              <EntityDefinition
                headingId="entity-definition-a-heading"
                heading={`What Is ${comparison.itemA}?`}
                definition={content.definitionA}
              />
            </AnimateIn>
          )}
          {content.definitionB && comparison.itemB && (
            <AnimateIn>
              <EntityDefinition
                headingId="entity-definition-b-heading"
                heading={`What Is ${comparison.itemB}?`}
                definition={content.definitionB}
              />
            </AnimateIn>
          )}
          <AnimateIn>
            <ComparisonIntro
              heading={content.introHeading}
              paragraphs={content.introParagraphs}
            />
          </AnimateIn>
```

- [ ] **Step 14: Type-check all template edits.**

Run: `npx tsc --noEmit`
Expected: exits 0.

---

## Task 6: Build green WITHOUT exemplars, then commit the infra

**Files:** none (verification + commit)

- [ ] **Step 1: Full build** (no data carries a definition yet → `EntityDefinition` renders nowhere → existing pages unchanged).

Run: `npm run build`
Expected: build completes, exit 0. (All existing content validates; no page renders the new section.)

- [ ] **Step 2: Rendered heading audit** (conditional expectations resolve to the OLD coreH2 for every sample, since nothing has a definition yet).

Run: `npm run audit:headings`
Expected: `0 violation(s) found.` → `PASS`, exit 0. Rendered pass: `ran`.

- [ ] **Step 3: Meta audit.**

Run: `npm run audit:meta`
Expected: `Total issues: 0` (or equivalent 0-issue summary), exit 0.

- [ ] **Step 4: Commit the infra** (stage ONLY the files below — leave pre-existing untracked audit/competitor files unstaged):

```bash
git add src/lib/schemas.ts \
        src/data/combo-content/schema.ts \
        src/data/comparison-content/schema.ts \
        src/components/sections/EntityDefinition.tsx \
        src/data/heading-config.ts \
        scripts/audit-headings.ts \
        src/components/templates/ServiceTemplate.tsx \
        src/components/templates/ComboTemplate.tsx \
        src/components/templates/CityTemplate.tsx \
        src/components/templates/ComparisonTemplate.tsx
git commit -m "$(cat <<'EOF'
feat(ui): entity-grounding infra — EntityDefinition section, optional definition fields, conditional heading audit, FAQ JSON-LD (Phase 1)

Adds optional definition/whereIs/definitionA/definitionB content fields (all
backward-compatible), a shared EntityDefinition section rendered as the first H2
after the hero, the definitional Q&A appended to each page's FAQ JSON-LD, and a
conditional heading audit that expects the definition heading only when a sampled
page carries the field. No page renders the new section until backfill.

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 7: Author the 4 gold-exemplar definitions

These prove all four templates + both audit branches (present on roof-repair/newark/roof-repair-newark; absent on the noindex combo). Each is answer-first, figure-free (a clean definition, per the CMP gold-exemplar lesson), central entity pre-bolded with `**`, no modality (`will`/`should`/`need to`/`must`), no de-fab literals, no outbound links — so `audit:semantics` (which classifies these as `body`) stays green.

**Files:**
- Modify: `src/data/service-content/repair-maintenance.ts` (the `roof-repair` object)
- Modify: `src/data/city-content/urban-core.ts` (the `newark` object)
- Modify: `src/data/combo-content/newark/roof-repair.ts`
- Modify: `src/data/comparison-content/material-vs-material.ts` (asphalt-shingles-vs-metal-roofing object)

- [ ] **Step 1: roof-repair service definition.** In `repair-maintenance.ts`, locate the `roof-repair` object's `directAnswer:` line and add `definition:` immediately after it (read the file first to match the exact `directAnswer` line/indentation):
```ts
  definition:
    '**Roof repair** restores a roof\'s weatherproof barrier by fixing localized damage — leaks, missing or torn shingles, failed flashing, and cracked seals — without replacing the entire roof. It targets specific failure points to extend the service life of an otherwise sound roof.',
```

- [ ] **Step 2: Newark city whereIs.** In `urban-core.ts`, locate the `newark` object's `directAnswer:` line and add `whereIs:` after it. Reconcile the place facts against `.planning/content-system/cities-batchA/CITY-FACTS-urban-core.md` (Newark: county seat, borders, character) — the draft below uses only uncontroversial, fact-bank-backed claims (largest NJ city, Essex County seat, Passaic River, NY-metro western edge):
```ts
  whereIs:
    '**Newark, New Jersey** is the state\'s largest city and the seat of **Essex County**, set along the Passaic River at the western edge of the New York metropolitan area. It anchors the dense urban core our roofing crews serve.',
```

- [ ] **Step 3: roof-repair/Newark combo definition** (the canonical service definition, propagated verbatim — demonstrating the city-agnostic propagation model). In `src/data/combo-content/newark/roof-repair.ts`, add `definition:` after `directAnswer:`:
```ts
  definition:
    '**Roof repair** restores a roof\'s weatherproof barrier by fixing localized damage — leaks, missing or torn shingles, failed flashing, and cracked seals — without replacing the entire roof. It targets specific failure points to extend the service life of an otherwise sound roof.',
```

- [ ] **Step 4: asphalt-shingles-vs-metal-roofing definitions.** In `material-vs-material.ts`, locate the asphalt-shingles-vs-metal-roofing object's `directAnswer:` line and add `definitionA`/`definitionB` after it:
```ts
  definitionA:
    '**Asphalt shingles** are layered roof coverings built from a fiberglass mat saturated in asphalt and surfaced with mineral granules. They are the most common residential roofing material installed across the United States.',
  definitionB:
    '**Metal roofing** is a roof covering formed from steel, aluminum, copper, or zinc, installed as standing-seam panels or interlocking shingles. It sheds water as a continuous, non-porous surface.',
```

- [ ] **Step 5: Type-check.**

Run: `npx tsc --noEmit`
Expected: exits 0. (Watch the apostrophe escaping in single-quoted strings — `roof\'s` / `state\'s`. If you prefer, use double-quoted or backtick strings; just keep them valid TS.)

---

## Task 8: Full gate + render verification + exemplar commit

**Files:** none (verification + commit)

- [ ] **Step 1: Full build** (now 4 pages render `EntityDefinition`).

Run: `npm run build`
Expected: exit 0.

- [ ] **Step 2: Rendered heading audit** (conditional expectations now flip to the definition heading for service/newark/keep-combo; the noindex combo still expects the old coreH2 — exercising BOTH branches).

Run: `npm run audit:headings`
Expected: `0 violation(s) found.` → `PASS`, exit 0.

- [ ] **Step 3: Semantics audit** scoped to the exemplars (the new `definition`/`whereIs`/`definitionA`/`definitionB` are gated as body prose).

Run:
```bash
npm run audit:semantics -- --quiet --types=services,cities,combos,comparisons \
  --ids=roof-repair,newark,asphalt-shingles-vs-metal-roofing 2>&1 | grep -E "GATE violations|PASS"
```
Expected: `0` gate violations / `PASS`. (If a definition trips R6 modality / R10 de-fab, reword to indicative and re-run.)

- [ ] **Step 4: Meta audit.**

Run: `npm run audit:meta`
Expected: 0 issues, exit 0.

- [ ] **Step 5: Rendered spot-check** (kill stale servers first — `next-server` children survive `pkill "next start"`):
```bash
pkill -f "next-server" 2>/dev/null; pkill -f "next start" 2>/dev/null; pkill -f "next dev" 2>/dev/null; sleep 2
(PORT=3230 npm run start >/tmp/srv-eg-phase1.log 2>&1 &); sleep 7
for u in roof-repair roofing-in-newark-nj roof-repair-newark-nj asphalt-shingles-vs-metal-roofing; do
  echo "== $u =="
  html=$(curl -s "http://localhost:3230/$u")
  echo "$html" | grep -c 'What Is Roof Repair?\|Where Is Newark, NJ?\|What Is Asphalt Shingles?\|What Is Metal Roofing?'   # ≥1 heading present
  echo "$html" | grep -c '\*\*'   # MUST be 0 — no raw ** leak in rendered HTML
  echo "$html" | grep -o '"FAQPage"' | head -1   # JSON-LD FAQPage present
done
```
Expected per page: heading-count ≥ 1, `**`-leak count = **0**, `"FAQPage"` present. Then confirm the definitional Q&A is in JSON-LD, e.g.:
```bash
curl -s http://localhost:3230/roof-repair | grep -o '"What Is Roof Repair?"'   # appears inside the FAQPage mainEntity
curl -s http://localhost:3230/roofing-in-newark-nj | grep -o '"Where Is Newark, NJ?"'
```
Expected: each prints its question string (proving JSON-LD injection).

- [ ] **Step 6: Screenshots + live dev server** (mandatory per the dev-server-on-render convention). Reuse the batch screenshot script (`NODE_PATH=/opt/homebrew/lib/node_modules node /tmp/pw-eg-shots.js` with `PORT=3230`, `SLUGS=[roof-repair, roofing-in-newark-nj, roof-repair-newark-nj, asphalt-shingles-vs-metal-roofing]`), AND start the dev server for live viewing:
```bash
(PORT=3240 npm run dev >/tmp/dev-eg-phase1.log 2>&1 &); sleep 8
for u in roof-repair roofing-in-newark-nj roof-repair-newark-nj asphalt-shingles-vs-metal-roofing; do curl -s -o /dev/null -w "$u %{http_code}\n" "http://localhost:3240/$u"; done
```
Hand the user the four `http://localhost:3240/<slug>` URLs + screenshots. Leave both servers up (prod :3230 = committed build, dev :3240 = live).

- [ ] **Step 7: Sign-off.** Present screenshots + the per-page verdict (EntityDefinition is the first H2; copper-rail answer-first lead; 0 `**` leaks; definitional Q&A in JSON-LD). The user signs off before commit.

- [ ] **Step 8: Commit the exemplars:**
```bash
git add src/data/service-content/repair-maintenance.ts \
        src/data/city-content/urban-core.ts \
        src/data/combo-content/newark/roof-repair.ts \
        src/data/comparison-content/material-vs-material.ts
git commit -m "$(cat <<'EOF'
feat(content): entity-definition gold exemplars (roof-repair, Newark, roof-repair/Newark, asphalt-vs-metal) (Phase 1)

One definition per template to validate the entity-grounding infra end-to-end:
service definition, city whereIs, the same canonical definition propagated to the
combo, and both comparison sides. Answer-first, figure-free, central entity bolded.

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
EOF
)"
```

- [ ] **Step 9: Docs commit + memory update.** Commit this plan; update `[[entity-grounding-initiative]]`, `[[nqr-batch-resume]]`, and the `MEMORY.md` index to mark Phase 1 DONE and point to Phase 2 (money-page backfill: 65 service definitions + 21 city whereIs + 30 comparison sides + the contractor/[City],NJ reframe).
```bash
git add .planning/content-system/ENTITY-GROUNDING-PHASE1-PLAN.md
git commit -m "docs(content): entity-grounding Phase 1 plan + sign-off

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```
Then **STOP and prompt the user to `/clear`** before Phase 2 (per the clear-after-each-batch convention).

---

## Self-review

**1. Spec coverage** — every Phase-1 spec item maps to a task:
- Schema optional fields (service/combo `definition?`, city `whereIs?`, comparison `definitionA?`/`definitionB?`) → Task 1. ✓
- New `EntityDefinition` section → Task 2; rendered first-H2-after-hero on all 4 templates → Task 5. ✓
- Heading-config new coreH2 (`What Is {service}?` / `Where Is {City}, NJ?`) → Task 3; audit updated in lockstep → Task 4. ✓
- FAQ JSON-LD append (markdown auto-stripped) → Task 5 (per template). ✓
- Gate: build / audit:headings / audit:semantics / audit:meta + render check (one extra H2, 0 `**` leaks, definition in JSON-LD) → Tasks 6 & 8. ✓
- "Riskiest infra piece: verify rendered-heading audit passes per page type" → the conditional audit (Task 4) + the 4 exemplars proving present/absent branches (Tasks 7–8). ✓
- `_dup-analysis.ts` re-run (a shared ≤40-word definition shouldn't cross the doorway threshold) → **deferred to after combo backfill (Phase 3)**, as the spec states (no combos share a definition until Phase 3). Noted, not a Phase-1 task. ✓

**2. Placeholder scan** — no "TBD"/"add validation"/"similar to Task N"; every code step shows exact before/after text and every exemplar shows the literal string. ✓

**3. Type consistency** — `EntityDefinition` props (`headingId`, `sectionId?`, `heading`, `definition`) are used identically across all four templates; the audit accessors (`service.definitionH2(s)`, `combo.definitionH2(s)`, `city.whereIsH2(c)`) match their heading-config signatures and the template call sites byte-for-byte (both sides call the same `HEADING_CONFIG.*` function, guaranteeing the rendered first-H2 === the audit's expected `coreH2`). Content-getter names (`getServiceContent`/`getCityContent`/`getComboContent`) match `src/data/*-content/index.ts`. ✓
