---
phase: 05-content-differentiation-engine
plan: 10a
type: execute
wave: 3
depends_on: ["05-08"]
files_modified:
  - src/data/combo-content/caldwell/roof-repair.ts
  - src/data/combo-content/caldwell/asphalt-shingle-roofing.ts
  - src/data/combo-content/caldwell/tpo-roofing-installation.ts
  - src/data/combo-content/caldwell/gutter-installation-repair.ts
  - src/data/combo-content/caldwell/commercial-roof-installation.ts
  - src/data/combo-content/caldwell/index.ts
autonomous: true

must_haves:
  truths:
    - "Caldwell content reflects small-town character, single-family homes, and close-knit community"
    - "All 5 Caldwell services read as completely distinct from Newark and East Orange versions"
  artifacts:
    - path: "src/data/combo-content/caldwell/index.ts"
      provides: "Caldwell combo content aggregator"
      exports: ["caldwellComboContent"]
  key_links:
    - from: "src/data/combo-content/caldwell/index.ts"
      to: "src/data/combo-content/caldwell/roof-repair.ts"
      via: "service file imports"
      pattern: "caldwell.*RoofRepair"
---

<objective>
Author 5 sample combo content files for Caldwell (Caldwells-Roseland representative) plus per-city index.

Purpose: Caldwell represents the Caldwells-Roseland regional group. Its content must reflect small-town character, single-family homes, close-knit community values, and local contractor preference -- completely different from urban cities.
Output: 5 combo content files + 1 city index file for Caldwell.
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
@src/data/city-content/caldwells-roseland.ts
</context>

<tasks>

<task type="auto">
  <name>Task 1: Caldwell sample combos (5 services + index)</name>
  <files>
    src/data/combo-content/caldwell/roof-repair.ts
    src/data/combo-content/caldwell/asphalt-shingle-roofing.ts
    src/data/combo-content/caldwell/tpo-roofing-installation.ts
    src/data/combo-content/caldwell/gutter-installation-repair.ts
    src/data/combo-content/caldwell/commercial-roof-installation.ts
    src/data/combo-content/caldwell/index.ts
  </files>
  <action>
Author 5 combo content files for Caldwell.

**Caldwell data (Caldwells-Roseland representative):**
- Neighborhoods: Central Caldwell (downtown), residential north side, Bloomfield Avenue commercial strip
- Housing stock: 1950s-70s colonials and capes, some Victorian-era homes near downtown, small commercial buildings
- Character: Small-town, close-knit community, traditional values, reasonable budgets, local contractor preference
- Angles: Small-town trust relationship, neighborhood recommendation-driven decisions, practical material choices, local permit process familiarity, Bloomfield Avenue small business roofing

Create `src/data/combo-content/caldwell/index.ts` with Zod batch validation of 5 combos.

**CRITICAL:** Read Newark and East Orange files for these same services to ensure differentiation. Caldwell is suburban and small-town -- completely different character from both urban cities.

Each file: 1,500-2,000 words, ComboContent schema, unique metaDescription.
  </action>
  <verify>Run `npx tsc --noEmit` to verify all 5 files + index compile.</verify>
  <done>5 Caldwell combo files authored with distinct small-town suburban character. Per-city index validates the batch.</done>
</task>

</tasks>

<verification>
- All 5 files + index compile with `npx tsc --noEmit`
- Caldwell content reflects small-town character and community values
- Same-service content is demonstrably different from Newark and East Orange versions
</verification>

<success_criteria>
- 5 combo content files + index exist for Caldwell
- Content reflects small-town suburban character
- All files type-check successfully
</success_criteria>

<output>
After completion, create `.planning/phases/05-content-differentiation-engine/05-10a-SUMMARY.md`
</output>
