---
phase: 05-content-differentiation-engine
plan: 10b
type: execute
wave: 3
depends_on: ["05-08"]
files_modified:
  - src/data/combo-content/millburn/roof-repair.ts
  - src/data/combo-content/millburn/asphalt-shingle-roofing.ts
  - src/data/combo-content/millburn/tpo-roofing-installation.ts
  - src/data/combo-content/millburn/gutter-installation-repair.ts
  - src/data/combo-content/millburn/commercial-roof-installation.ts
  - src/data/combo-content/millburn/index.ts
  - src/data/combo-content/index.ts
autonomous: true

must_haves:
  truths:
    - "Millburn content reflects estate properties, premium materials, architect collaboration, and luxury market"
    - "All 5 Millburn services read as completely distinct from all other city versions"
    - "Top-level aggregator imports all 6 cities totaling 90 combo entries"
  artifacts:
    - path: "src/data/combo-content/millburn/index.ts"
      provides: "Millburn combo content aggregator"
      exports: ["millburnComboContent"]
    - path: "src/data/combo-content/index.ts"
      provides: "Top-level combo content aggregator with all 6 cities"
      contains: "millburnComboContent"
  key_links:
    - from: "src/data/combo-content/index.ts"
      to: "src/data/combo-content/millburn/index.ts"
      via: "city aggregator import"
      pattern: "millburnComboContent"
    - from: "src/data/combo-content/index.ts"
      to: "src/data/combo-content/east-orange/index.ts"
      via: "city aggregator import"
      pattern: "eastOrangeComboContent"
    - from: "src/data/combo-content/index.ts"
      to: "src/data/combo-content/caldwell/index.ts"
      via: "city aggregator import"
      pattern: "caldwellComboContent"
---

<objective>
Author 5 sample combo content files for Millburn (Affluent Suburban representative), create per-city index, and update the top-level aggregator to include all 6 cities.

Purpose: Millburn represents the Affluent Suburban regional group. Its content must reflect estate properties, premium materials, architect collaboration, and luxury market expectations. This plan also finalizes the top-level aggregator with all 90 combo entries across 6 cities.
Output: 5 combo content files + 1 city index + updated top-level aggregator (90 total combos).
</objective>

<execution_context>
@/Users/akungapaul/.claude/get-shit-done/workflows/execute-plan.md
@/Users/akungapaul/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/PROJECT.md
@.planning/STATE.md
@.planning/phases/05-content-differentiation-engine/05-RESEARCH.md
@src/data/combo-content/schema.ts
@src/data/combo-content/index.ts
@src/data/city-content/affluent-suburban.ts
</context>

<tasks>

<task type="auto">
  <name>Task 1: Millburn sample combos (5 services + index)</name>
  <files>
    src/data/combo-content/millburn/roof-repair.ts
    src/data/combo-content/millburn/asphalt-shingle-roofing.ts
    src/data/combo-content/millburn/tpo-roofing-installation.ts
    src/data/combo-content/millburn/gutter-installation-repair.ts
    src/data/combo-content/millburn/commercial-roof-installation.ts
    src/data/combo-content/millburn/index.ts
  </files>
  <action>
Author 5 combo content files for Millburn (Affluent Suburban representative).

**Millburn data:**
- Neighborhoods: Short Hills (estate section), Wyoming, Glenwood, South Mountain, Millburn Center
- Housing stock: Grand estates (Short Hills), Tudor and Colonial revivals, architect-designed homes, slate and copper roofing prevalent, multi-structure properties (main house + pool house + garage)
- Character: Ultra-affluent, design-conscious, architect involvement expected, premium materials only, property values driving aesthetic decisions
- Angles: Estate roofing projects, architect collaboration on material selection, copper and slate expertise, multi-structure coordination, premium warranty programs, property value protection

**Service-specific Millburn angles:**
- roof-repair: Slate and copper repair requiring specialized craftsmen, estate property multi-building assessment, architect involvement in visible repair aesthetics
- asphalt-shingle-roofing: Designer shingle lines only (Owens Corning Berkshire, CertainTeed Grand Manor), color coordination with architect's palette, visible roof planes as architectural feature
- tpo-roofing-installation: Minimal in Millburn -- limited to Short Hills Mall and commercial properties along Millburn Avenue, residential use only on flat sections of large estates
- gutter-installation-repair: Copper half-round gutters on historic estates, oversized gutters for large roof areas, custom fabrication for unique architectural profiles, heated gutter systems
- commercial-roof-installation: Millburn Avenue boutique retail, Short Hills Mall support buildings, professional offices, town municipal buildings

Create `src/data/combo-content/millburn/index.ts` with per-city batch validation.

Each file: 1,500-2,000 words, ComboContent schema, unique metaDescription.
  </action>
  <verify>Run `npx tsc --noEmit` to verify all 5 files + index compile.</verify>
  <done>5 Millburn combo files authored reflecting luxury estate character. Per-city index validates the batch.</done>
</task>

<task type="auto">
  <name>Task 2: Update top-level aggregator with all 6 cities</name>
  <files>
    src/data/combo-content/index.ts
  </files>
  <action>
Update `src/data/combo-content/index.ts` to import all 6 cities: Newark (65), Montclair (5), Bloomfield (5), East Orange (5), Caldwell (5), Millburn (5) = 90 total.

Import the per-city index files for East Orange, Caldwell, and Millburn (Montclair and Bloomfield should already be imported from 05-09).

Verify the total count in the aggregator: 90 combo content entries.
  </action>
  <verify>
Run `npx tsc --noEmit` to verify everything compiles.
Verify aggregator count: `npx tsx -e "import('./src/data/combo-content').then(m => console.log('Total combos:', m.getComboContent ? 'OK' : 'FAIL'))"` or equivalent.
  </verify>
  <done>All 6 sample cities loaded in aggregator (90 total combos). getComboContent works for all 90 entries.</done>
</task>

</tasks>

<verification>
- All 5 Millburn files + index compile with `npx tsc --noEmit`
- Top-level aggregator has 90 entries across 6 cities
- Millburn content reflects luxury estate character
- Same-service combos across all 6 cities are demonstrably different
</verification>

<success_criteria>
- 5 combo content files + index exist for Millburn
- Aggregator has 90 total entries from 6 cities
- Build passes with all new data
</success_criteria>

<output>
After completion, create `.planning/phases/05-content-differentiation-engine/05-10b-SUMMARY.md`
</output>
