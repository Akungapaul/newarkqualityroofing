# Soffit Installation Repair — Draft Doc (Batch 5, components-specialty #7)

**serviceId:** `soffit-installation-repair`
**isResidential:** true · **isCommercial:** false (commercial block written as honest multi-family / mixed-use scope, no over-claim)
**Primary n-gram:** "soffit installation and repair" / "soffit" (repeated in opening answer and closing pricing/why-choose sections)
**Macro topic spine:** soffit = primary attic-ventilation INTAKE; blocked intake → balanced system fails → trapped heat/moisture → condensation/mold/ice-dam conditions; baffles keep eave insulation off the intake; balanced ≈ 50/50; design to IRC 1/150 (Newark Zone 4–5, NOT 1/300).

---

## Rendered heading → content field map

| Rendered question H-tag (from HEADING_CONFIG) | Answered by field |
|---|---|
| H1 "Who Provides Soffit Installation Repair in Newark?" | `directAnswer` (36 words) |
| H2 "What Soffit Installation Repair Do We Provide?" | `overview[]` (2) + `subServices[]` (5) |
| H2 "How Do You Know If You Need Soffit Installation Repair?" | `signs[]` (7), label `signsHeading` = "Signs Your Soffit Needs Repair" |
| H2 "How Do Our Roofing Contractors Perform Soffit Installation Repair?" | `approachContent[]` (2) / `approachSubheadings[]` (2) |
| H2 "How Much Does Soffit Installation Repair Cost?" | `pricing.range` + `pricing.factors[]` (5) |
| H2 "Should You Repair or Replace Your Roof?" | covered inside `faqs[]` item #2 (question uses exempt "Should you…") |
| H2 "Why Choose Our Roofing Company for Soffit Installation Repair?" | `whyChooseUs.reasons[]` (4) |
| Related services / KB / scheduling H2s | rendered by template (no field) |
| Residential block | `residential{heading,content(2),ctaLabel}` |
| Commercial block | `commercial{heading,content(2),ctaLabel}` |
| Process | `processSteps[]` (5) |
| FAQ | `faqs[]` (6) |

---

## Named sources used + exact figure each is attributed to

| Named source | Figure / claim attributed in-text | Pack origin |
|---|---|---|
| U.S. DOE Building America Solution Center (PNNL) | soffit vents are the PRIMARY INTAKE; blocked intake traps attic heat/moisture; insulation baffles keep eave insulation off the soffit intake (qualitative) | facts-components-specialty §7 |
| InterNACHI | soffit is eave underside / mounting; rot from gutter overflow; condensation→mold; **aluminum soffit & fascia 20 to 40-plus-year** service life (life-expectancy chart) | facts-components-specialty §6, §7; facts-causes-signs §5 |
| ARMA; Air Vent Inc. | balanced attic ventilation ≈ **50% intake / 50% exhaust** | facts-components-specialty §7 |
| IRC (ICC) Section R806.2 | minimum net free ventilating area = **1/150** of the vented attic | facts-components-specialty §7, §0.3 |
| IRC Climate Zone framing (§0.3) | Newark/Essex County = **IRC Climate Zone 4 to 5** → design to 1/150 (NOT 1/300 vapor-retarder leg) | facts-components-specialty §0.3 |
| NRCA | proper/balanced ventilation reduces condensation, structural decay, ice-dam conditions; often a shingle-warranty condition (qualitative) | facts-components-specialty §7 |
| NJ Uniform Construction Code (N.J.A.C. 5:23-2.7) | detached one/two-family trim repair = ordinary maintenance, no permit; commercial work beyond ordinary maintenance can trigger a permit | repair-maintenance gold exemplar; NJ UCC |
| Contractor-consensus thresholds | repair/replace **25 to 30% area rule** + **50% cost rule** | facts-materials-economics §8 |
| Newark Quality Roofing (first-party) | **$1,500 to $4,000** soffit replacement/repair range (NQR estimates) | content-constants.ts PRICING `$1,500–$4,000` |

**Counted-plural integrity:** "4 material classes — vinyl, aluminum, wood, and fiber-cement" (exactly 4 items every time the integer appears: overview #1, processStep #2, why-pricing factor #2 as "4 classes").

---

## Self-audit checklist

- [x] **Answer-first bolded openers** — every heading's first sentence is a bolded definitive answer; all 19 bolded spans ≤40 words (verified by script; two FAQ answers tightened from 47w/43w to ≤40w); `directAnswer` = 36 words.
- [x] **Zero modality in declaratives** — grep of `will|should|need to|have to|must|might|may|would|could` returns ONE hit, line 106 `faqs[].question` ("Should you repair or replace…"), which is the exempt question field. No declarative-prose hit.
- [x] **Every number named-sourced** — 4 (classes, trade), 50/50 (ARMA/Air Vent Inc.), 1/150 (IRC R806.2), Zone 4–5 (IRC §0.3), 20 to 40-plus yr (InterNACHI chart), 25–30%/50% (contractor-consensus), $1,500–$4,000 (Newark Quality Roofing estimates). No invented or `[UNVERIFIED]` number used; 1/300 deliberately NOT claimed.
- [x] **approachSubheadings === approachContent length** — both = 2.
- [x] **No de-fab literals** — grep for `24/7|same-day|GAF Certified|0% financing|top-rated|500+|15+ years|[VERIFY]|[UNVERIFIED]|certified installer` → none. No certification claim (only material classes named, no brand cert).
- [x] **No outbound links / URLs** — grep for `https?://|www.|<a href|](` → none.
- [x] **No pronoun co-reference to entities** — "the soffit", "the intake", "the attic", "Newark Quality Roofing" repeated; no it/they/this/that/there standing for an entity.
- [x] **No hype words** — none of best/leading/trusted/premier/top-rated/seamless-as-praise.
- [x] **credentialsHighlight exact** — `['NJ HIC Licensed','Insured','Free Roof Inspections','Local Essex County Roofers']`.
- [x] **One macro topic** — soffit/attic-intake ventilation end to end; primary n-gram in opening `directAnswer` + `overview` and in closing `pricing` / `whyChooseUs`.
- [x] **Type-checks** — wrapped in `ServiceContent[]`, `tsc --noEmit --strict` exits 0.
- [x] **Schema field set complete** — serviceId, directAnswer, overview(2), subServices(5), signsHeading, signs(7), approachHeading, approachContent(2), approachSubheadings(2), residential{}, commercial{}, processSteps(5), faqs(6), credentialsHighlight(4), pricing{range,factors(5)}, whyChooseUs{heading,reasons(4)}.
- [x] **Commercial block honesty** — framed as multi-family / mixed-use eave soffit work on vented attic/rafter assemblies; no fabricated commercial specialty; ctaLabel 'Get Commercial Quote'.
