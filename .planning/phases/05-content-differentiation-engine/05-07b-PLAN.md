---
phase: 05-content-differentiation-engine
plan: 07b
type: execute
wave: 2
depends_on: ["05-01"]
files_modified:
  - src/data/combo-content/newark/roof-replacement-after-leak.ts
  - src/data/combo-content/newark/fire-damage-roof-replacement.ts
  - src/data/combo-content/newark/roof-replacement-cost.ts
autonomous: true

must_haves:
  truths:
    - "Each replacement sub-page frames its scenario through Newark-specific triggers and conditions"
    - "Roof-replacement-cost provides Newark-specific pricing context, not generic cost information"
    - "Fire-damage and leak sub-pages address Newark's urban density factors"
  artifacts:
    - path: "src/data/combo-content/newark/roof-replacement-after-leak.ts"
      provides: "Newark leak-triggered replacement combo content"
      contains: "serviceId: 'roof-replacement-after-leak'"
    - path: "src/data/combo-content/newark/fire-damage-roof-replacement.ts"
      provides: "Newark fire damage replacement combo content"
      contains: "serviceId: 'fire-damage-roof-replacement'"
    - path: "src/data/combo-content/newark/roof-replacement-cost.ts"
      provides: "Newark replacement cost combo content"
      contains: "serviceId: 'roof-replacement-cost'"
  key_links:
    - from: "src/data/combo-content/newark/*.ts"
      to: "src/data/combo-content/schema.ts"
      via: "ComboContent type import"
      pattern: "ComboContent"
---

<objective>
Author 3 remaining combo content files for replacement sub-pages in Newark.

Purpose: Complete the replacement sub-pages category with leak-triggered replacement, fire damage replacement, and cost-focused content. These round out the full set of replacement triggers/scenarios.
Output: 3 TypeScript data files completing the replacement sub-pages category.
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
  <name>Task 1: Newark remaining replacement sub-pages (3 services)</name>
  <files>
    src/data/combo-content/newark/roof-replacement-after-leak.ts
    src/data/combo-content/newark/fire-damage-roof-replacement.ts
    src/data/combo-content/newark/roof-replacement-cost.ts
  </files>
  <action>
Author 3 final combo content files for remaining Newark replacement sub-pages.

**Service-specific angles:**
- roof-replacement-after-leak: When repair is no longer viable on Newark's older buildings, leak investigation revealing systemic failures, the replacement decision framework for property owners, water damage remediation coordination.
- fire-damage-roof-replacement: Newark's urban density increases fire spread risk, fire department ventilation cuts requiring structural repair, insurance coordination for fire damage claims, code upgrade requirements when replacing fire-damaged roofs.
- roof-replacement-cost: Newark-specific cost factors -- urban access difficulty premium, older building complexity, material costs in the NJ market, financing options, ROI for different material upgrades, cost comparison across Newark neighborhoods.

Each file: 1,500-2,000 words, ComboContent schema, unique metaDescription. Each intro must use a DISTINCT opening structure from the other replacement sub-pages authored in 05-07a.

**CRITICAL:** These replacement sub-pages must clearly differentiate from:
1. The main roof-replacement combo (05-02) which covers general replacement
2. Each other -- each sub-page targets a specific replacement TRIGGER, not general replacement
3. The 6 replacement sub-pages in 05-07a
  </action>
  <verify>Run `npx tsc --noEmit` to verify all 3 files compile.</verify>
  <done>All 3 remaining replacement sub-page combo files authored. Each focuses on its specific scenario with Newark context.</done>
</task>

</tasks>

<verification>
- All 3 files compile with `npx tsc --noEmit`
- Each replacement sub-page has a clearly distinct trigger scenario
- No significant content overlap between these and other replacement sub-pages
- Cost page includes Newark-specific pricing factors
</verification>

<success_criteria>
- 3 combo content files exist completing the replacement sub-pages in Newark
- Each addresses a specific scenario with Newark context
- All files type-check successfully
</success_criteria>

<output>
After completion, create `.planning/phases/05-content-differentiation-engine/05-07b-SUMMARY.md`
</output>
