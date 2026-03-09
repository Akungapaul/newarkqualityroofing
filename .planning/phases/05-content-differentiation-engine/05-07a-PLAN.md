---
phase: 05-content-differentiation-engine
plan: 07a
type: execute
wave: 2
depends_on: ["05-01"]
files_modified:
  - src/data/combo-content/newark/full-roof-tear-off.ts
  - src/data/combo-content/newark/roof-overlay-installation.ts
  - src/data/combo-content/newark/re-roofing.ts
  - src/data/combo-content/newark/insurance-roof-replacement.ts
  - src/data/combo-content/newark/storm-damage-roof-replacement.ts
  - src/data/combo-content/newark/aging-roof-replacement.ts
autonomous: true

must_haves:
  truths:
    - "Replacement sub-page combos differentiate from the main roof-replacement file in 05-02 by focusing on specific replacement scenarios"
    - "Each replacement sub-page frames its scenario through Newark-specific triggers and conditions"
    - "No two replacement sub-pages share the same intro structure"
  artifacts:
    - path: "src/data/combo-content/newark/insurance-roof-replacement.ts"
      provides: "Newark insurance replacement combo content"
      contains: "serviceId: 'insurance-roof-replacement'"
    - path: "src/data/combo-content/newark/full-roof-tear-off.ts"
      provides: "Newark full tear-off combo content"
      contains: "serviceId: 'full-roof-tear-off'"
    - path: "src/data/combo-content/newark/aging-roof-replacement.ts"
      provides: "Newark aging roof replacement combo content"
      contains: "serviceId: 'aging-roof-replacement'"
  key_links:
    - from: "src/data/combo-content/newark/*.ts"
      to: "src/data/combo-content/schema.ts"
      via: "ComboContent type import"
      pattern: "ComboContent"
---

<objective>
Author 6 unique combo content files for the first batch of replacement sub-pages in Newark.

Purpose: Replacement sub-pages capture specific high-intent search queries (insurance replacement, storm damage replacement, aging roof replacement, etc.). Each targets a distinct replacement TRIGGER -- not general replacement. These differentiate from the main roof-replacement combo authored in 05-02.
Output: 6 TypeScript data files for replacement sub-page services.
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
@src/data/city-content/urban-core.ts
@src/data/service-content/replacement-sub-pages.ts
</context>

<tasks>

<task type="auto">
  <name>Task 1: Newark replacement sub-pages batch 1 (3 services)</name>
  <files>
    src/data/combo-content/newark/full-roof-tear-off.ts
    src/data/combo-content/newark/roof-overlay-installation.ts
    src/data/combo-content/newark/re-roofing.ts
  </files>
  <action>
Author 3 combo content files for Newark replacement sub-pages (method-focused).

**Service-specific angles:**
- full-roof-tear-off: Logistics of complete removal in dense Newark neighborhoods -- dumpster placement on narrow streets, debris management near adjacent buildings, what tear-off reveals in 100+ year old buildings.
- roof-overlay-installation: When overlay makes sense for Newark buildings -- budget-conscious multi-family owners, buildings with single existing layer, code limitations on overlay in Newark.
- re-roofing: General re-roofing landscape in Newark, when to choose tear-off vs overlay, the inspection process that determines the approach, Newark permit requirements for re-roofing.

Each file: 1,500-2,000 words, ComboContent schema, unique metaDescription. Each intro must use a DISTINCT opening structure from the others AND from 05-07 design/consultation files.

**CRITICAL:** These must clearly differentiate from the main roof-replacement combo (05-02) which covers general replacement. Each sub-page targets a specific replacement METHOD, not general replacement.
  </action>
  <verify>Run `npx tsc --noEmit` to verify all 3 files compile.</verify>
  <done>3 method-focused replacement sub-page combos authored for Newark.</done>
</task>

<task type="auto">
  <name>Task 2: Newark replacement sub-pages batch 2 (3 services)</name>
  <files>
    src/data/combo-content/newark/insurance-roof-replacement.ts
    src/data/combo-content/newark/storm-damage-roof-replacement.ts
    src/data/combo-content/newark/aging-roof-replacement.ts
  </files>
  <action>
Author 3 combo content files for Newark replacement sub-pages (trigger-focused).

**Service-specific angles:**
- insurance-roof-replacement: Newark's insurance claim landscape, common carriers in the area, documentation requirements, supplement process for hidden damage in older buildings, public adjuster relationships.
- storm-damage-roof-replacement: Nor'easter and severe thunderstorm patterns in Newark, post-storm response timeline, emergency tarp-and-replace protocol for severely damaged roofs, coordination with insurance from day one.
- aging-roof-replacement: Newark's aging housing stock (majority pre-1960), signs of end-of-life for different materials found in Newark, the 20-year-old asphalt shingle epidemic in Vailsburg and Weequahic, proactive replacement vs emergency replacement cost comparison.

Each file: 1,500-2,000 words, ComboContent schema, unique metaDescription. Each intro must use a DISTINCT opening structure.

**CRITICAL:** These replacement sub-pages must clearly differentiate from:
1. The main roof-replacement combo (05-02) which covers general replacement
2. Each other -- each sub-page targets a specific replacement TRIGGER, not general replacement
3. The method-focused sub-pages in Task 1 -- these are trigger/cause-focused
  </action>
  <verify>Run `npx tsc --noEmit` to verify all 6 files from this plan compile.</verify>
  <done>6 replacement sub-page combo files authored. Each focuses on its specific trigger/method scenario.</done>
</task>

</tasks>

<verification>
- All 6 files compile with `npx tsc --noEmit`
- Each replacement sub-page has a clearly distinct trigger/method scenario
- No significant content overlap between replacement sub-pages and main roof-replacement combo
- Each file uses a different intro structure
</verification>

<success_criteria>
- 6 combo content files exist for replacement sub-pages in Newark
- Each replacement sub-page addresses a specific replacement trigger/method with Newark context
- All files type-check successfully
</success_criteria>

<output>
After completion, create `.planning/phases/05-content-differentiation-engine/05-07a-SUMMARY.md`
</output>
