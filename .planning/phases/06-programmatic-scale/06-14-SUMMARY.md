---
phase: 06-programmatic-scale
plan: 14
subsystem: combo-content
tags: [maplewood, combo-content, content-creation]
dependency_graph:
  requires: [06-01]
  provides: [maplewoodComboContent]
  affects: [combo-content/index.ts]
tech_stack:
  added: []
  patterns: [per-city Zod aggregator, inline markdown links]
key_files:
  created:
    - src/data/combo-content/maplewood/index.ts
    - src/data/combo-content/maplewood/roof-repair.ts
    - src/data/combo-content/maplewood/roof-replacement.ts
    - src/data/combo-content/maplewood/emergency-roof-repair.ts
    - src/data/combo-content/maplewood/roof-inspection.ts
    - src/data/combo-content/maplewood/roof-maintenance-programs.ts
    - src/data/combo-content/maplewood/roof-leak-repair.ts
    - src/data/combo-content/maplewood/storm-damage-roof-repair.ts
    - src/data/combo-content/maplewood/hail-damage-roof-repair.ts
    - src/data/combo-content/maplewood/wind-damage-roof-repair.ts
    - src/data/combo-content/maplewood/roof-cleaning-moss-removal.ts
    - src/data/combo-content/maplewood/residential-roof-installation.ts
    - src/data/combo-content/maplewood/asphalt-shingle-roofing.ts
    - src/data/combo-content/maplewood/slate-roof-installation-repair.ts
    - src/data/combo-content/maplewood/wood-shake-roofing.ts
    - src/data/combo-content/maplewood/metal-roof-installation-repair.ts
    - src/data/combo-content/maplewood/flat-roof-installation-repair.ts
    - src/data/combo-content/maplewood/tile-roof-installation-repair.ts
    - src/data/combo-content/maplewood/cedar-shake-roofing.ts
    - src/data/combo-content/maplewood/rubber-roofing-epdm.ts
    - src/data/combo-content/maplewood/tpo-roofing-installation.ts
    - src/data/combo-content/maplewood/epdm-commercial-roofing.ts
    - src/data/combo-content/maplewood/modified-bitumen-roofing.ts
    - src/data/combo-content/maplewood/built-up-roofing.ts
    - src/data/combo-content/maplewood/commercial-metal-roofing.ts
    - src/data/combo-content/maplewood/pvc-roofing.ts
    - src/data/combo-content/maplewood/green-roof-installation.ts
    - src/data/combo-content/maplewood/spray-foam-roofing.ts
    - src/data/combo-content/maplewood/roof-flashing-installation-repair.ts
    - src/data/combo-content/maplewood/chimney-flashing-repair.ts
    - src/data/combo-content/maplewood/gutter-installation-repair.ts
    - src/data/combo-content/maplewood/gutter-guard-installation.ts
    - src/data/combo-content/maplewood/skylight-installation-repair.ts
    - src/data/combo-content/maplewood/fascia-installation-repair.ts
    - src/data/combo-content/maplewood/soffit-installation-repair.ts
    - src/data/combo-content/maplewood/roof-vent-installation-repair.ts
    - src/data/combo-content/maplewood/roof-waterproofing.ts
    - src/data/combo-content/maplewood/roof-deck-repair-replacement.ts
    - src/data/combo-content/maplewood/solar-panel-roofing-installation.ts
    - src/data/combo-content/maplewood/solar-shingle-installation.ts
    - src/data/combo-content/maplewood/energy-efficient-roofing-solutions.ts
    - src/data/combo-content/maplewood/silicone-roof-coating.ts
    - src/data/combo-content/maplewood/silicone-elastomeric-roof-coating.ts
    - src/data/combo-content/maplewood/commercial-roof-installation.ts
    - src/data/combo-content/maplewood/commercial-roof-repair.ts
    - src/data/combo-content/maplewood/commercial-roof-replacement.ts
    - src/data/combo-content/maplewood/roof-thermal-imaging-inspections.ts
    - src/data/combo-content/maplewood/infrared-roof-leak-detection.ts
    - src/data/combo-content/maplewood/custom-roof-design-consultation.ts
    - src/data/combo-content/maplewood/historic-roof-restoration.ts
    - src/data/combo-content/maplewood/roof-ice-dam-prevention.ts
    - src/data/combo-content/maplewood/full-roof-tear-off.ts
    - src/data/combo-content/maplewood/roof-overlay-installation.ts
    - src/data/combo-content/maplewood/re-roofing.ts
    - src/data/combo-content/maplewood/insurance-roof-replacement.ts
    - src/data/combo-content/maplewood/storm-damage-roof-replacement.ts
    - src/data/combo-content/maplewood/aging-roof-replacement.ts
    - src/data/combo-content/maplewood/roof-replacement-after-leak.ts
    - src/data/combo-content/maplewood/fire-damage-roof-replacement.ts
    - src/data/combo-content/maplewood/roof-replacement-cost.ts
    - src/data/combo-content/maplewood/asphalt-shingle-roof-replacement.ts
    - src/data/combo-content/maplewood/metal-roof-replacement.ts
    - src/data/combo-content/maplewood/slate-roof-replacement.ts
    - src/data/combo-content/maplewood/tile-roof-replacement.ts
    - src/data/combo-content/maplewood/flat-roof-replacement.ts
    - src/data/combo-content/maplewood/cedar-shake-roof-replacement.ts
  modified:
    - src/data/combo-content/index.ts
decisions:
  - Maplewood voice derives from Village district, South Mountain Reservation, Victorian/Tudor/Colonial architectural diversity
  - Inline links reference nearby cities South Orange, Millburn, West Orange, Bloomfield, Montclair, Glen Ridge
metrics:
  duration: 27min
  completed: 2026-03-08
---

# Phase 6 Plan 14: Maplewood Combo Content Summary

65 unique combo content files for Maplewood with Victorian/Tudor/Colonial voice anchored in South Mountain Reservation proximity, Village district character, and architectural diversity across all neighborhoods.

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | First 32 Maplewood combo files | c22b4a1 | 32 combo content files (repair-maintenance, residential, commercial roof types, design-consultation, energy-solar first 2) |
| 2 | Remaining 33 files + aggregator | 2d8b09c | 33 combo files + index.ts aggregator + top-level index.ts update |

## Deviations from Plan

None - plan executed exactly as written.

## Verification Results

- TypeScript compilation: PASS (npx tsc --noEmit clean)
- Build: PASS (1,492 static pages)
- Similarity validation: PASS (6,610 pairs, 0 failures)
  - Worst cross-city: 88.7% (threshold <92%)
  - Worst cross-service: 89.4% (threshold <95%)
  - Worst cross-category: 89.3% (threshold <93%)
- Intro structure check: PASS
- All 65 files pass Zod ComboContentSchema validation via z.array().parse()
- All metaDescription fields under 160 characters
- Inline text links present in overview and challenges paragraphs

## Content Voice

Maplewood content organized around:
- Victorian, Tudor, Colonial Revival, Arts and Crafts architectural diversity
- South Mountain Reservation proximity (debris, shade, wind channeling, elevation)
- Maplewood Village commercial district (restaurants, boutiques, mixed-use)
- Springfield Avenue corridor (east-west residential/commercial axis)
- Hilton neighborhood, Jefferson Village, Boyden Avenue references
- Progressive, design-conscious, environmentally aware community character
- Creative community appreciating quality craftsmanship
