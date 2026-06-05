# PVC Roofing — Answer-First Content Rewrite (Batch 3)

> Service: `pvc-roofing` ("PVC Roofing"). Commercial roof-types system; the commercial block carries the primary audience, residential retained per schema (both `.min(2)`). Structural/legacy fields reused verbatim (`serviceId`, `signsHeading`, `approachHeading`, `approachSubheadings` slots, `residential.heading`, `commercial.heading`, `whyChooseUs.heading`, `ctaLabel`). All prose rewritten answer-first. `directAnswer` and `subServices` ADDED (absent in the legacy entry, present on the gold exemplar `roof-repair`). `pricing.financingNote` REMOVED. Every hard number traces to a NAMED source in-text. No outbound links, no `will/should/need-to/must` modality in declaratives, no fabricated trust claims.

---

## Rendered heading → field map

Rendered headings come from `HEADING_CONFIG.service` with `s = "PVC Roofing"`. Each field opens with a bolded definitive answer to its rendered heading.

| Rendered heading (HTML) | Source config | Field that answers it |
|---|---|---|
| H1 — "Who Provides PVC Roofing in Newark?" | `service.h1(s)` | `directAnswer` (37 words; opens "Newark Quality Roofing installs and services PVC single-ply roofing across Newark and Essex County…") |
| H2 — "What PVC Roofing Do We Provide?" | `service.coreH2(s)` / `h2s[0]` | `overview` (opens "Newark Quality Roofing installs 4 PVC single-ply roof systems…") + `subServices` (the 4 systems) |
| H2 — "How Do You Know If You Need PVC Roofing?" | `h2s[1]` | `signsHeading` + `signs` (6 signs, each bolded answer-first) |
| H2 — "How Do Our Roofing Contractors Perform PVC Roofing?" | `h2s[2]` | `approachHeading` + `approachContent` (3) + `approachSubheadings` (3) + `processSteps` (6) |
| H2 — "How Much Does PVC Roofing Cost?" | `h2s[3]` | `pricing` (range + 5 factors); FAQ "How much does PVC roofing cost in Essex County, NJ?" |
| H2 — "Why Choose Our Roofing Company for PVC Roofing?" | `h2s[5]` | `whyChooseUs` (5 reasons) + `credentialsHighlight` (4) |
| (FAQ block) | rendered FAQ section | `faqs` (7; questions may carry modality, answers open bolded) |
| (residential / commercial perspective blocks) | rendered audience sections | `residential` / `commercial` |

`approachSubheadings.length === approachContent.length === 3` (Zod + gate requirement satisfied).

---

## Named sources + figures used (every hard number is sourced in-text)

| Figure / claim | Named source (in-text) | Fact-pack location |
|---|---|---|
| PVC single-ply service life **20–30 years** (thicker reinforced → longer end) | the Single Ply Roofing Industry; GAF EverGuard warranty terms | facts-materials-economics §6 PVC |
| PVC **failure modes** — plasticizer loss → embrittlement/cracking; welded-seam failure (stated qualitatively) | the NRCA technical library | facts-materials-economics §6 PVC |
| PVC **chemical/grease/oil resistance** vs EPDM/TPO degradation | the NRCA technical library; Duro-Last | facts-materials-economics §6 PVC |
| White PVC **cool roof**: solar reflectance ~**70–85%**, emittance ~**80–90%**, measured per ASTM C1549 | Duro-Last; the Cool Roof Rating Council; ASTM C1549 | facts-materials-economics §6 PVC |
| EPDM **15–25 yr**, TPO **7–20 yr**, modified bitumen **20 yr** (comparison context) | the InterNACHI life-expectancy chart | facts-materials-economics §0, §4 |
| SPF spray foam **30+ yr**, **R-6.0–6.5/in** aged (comparison FAQ) | the Spray Polyurethane Foam Alliance; ICC-ES reports | facts-materials-economics §6 SPF |
| PVC installed cost **$6–$12/sq ft** (clusters $8–$12) | commercial cost guides | facts-materials-economics §6 PVC |
| NJ single-ply (TPO-class) **$8–$12/sq ft** | Josten Roofing NJ pricing | facts-materials-economics §6 / §7 |
| NJ ranges **10–40% above** national | regional roofing cost guidance | facts-materials-economics §7 |
| Commercial **>25% of roof area in 12 months → permit**; commercial replacement → permit | N.J.A.C. 5:23-2.7, the NJ Uniform Construction Code | facts-nj-regulatory-climate §1.2 |
| **Full removal** of covering when water-soaked or **2+ layers** exist | N.J.A.C. 5:23-6.4 (NJ Rehabilitation Subcode) | facts-nj-regulatory-climate §1.4 |
| Detached 1–2-family covering repair/replace = **ordinary maintenance, no permit** | N.J.A.C. 5:23-2.7, the NJ Uniform Construction Code | facts-nj-regulatory-climate §1.1 |
| Ponding **>48 h = defect**; low-slope needs **≥¼ in/ft slope** to drain | the NRCA and ARMA | facts-process-standards / gold exemplar consensus |
| PVC manufacturer systems installed | Sika Sarnafil, Duro-Last, GAF EverGuard (product lines, not NQR credentials) | facts-materials-economics §6; legacy entry brands |

All lifespans (PVC 20–30, EPDM 15–25, TPO 7–20, modified bitumen 20, SPF 30+) and the cool-roof reflectance/emittance/cost figures are material facts — explicitly allowed by the gate.

---

## Withheld [VERIFY] / [UNVERIFIED] items (omitted from snippet; listed here per gate rules)

- **NJ HIC license number** (`13VH…`) — OMITTED; "New Jersey Home Improvement Contractor registration" stated qualitatively. (sources-and-nqr-facts Part B)
- **GAF Certified / Master Elite tier** — OMITTED entirely. Legacy entry's "GAF Certified Contractor" credential and "manufacturer warranties up to 50 years" removed. GAF appears only as the **GAF EverGuard product line** NQR installs, never as an NQR credential. (Part B)
- **"15+ years of experience" / tenure** — REMOVED (legacy `whyChooseUs` + `credentialsHighlight` + 2 legacy FAQs). (Part B)
- **0% financing / flexible payment plans** — `pricing.financingNote` REMOVED; legacy financing FAQ removed. (Part B)
- **24/7 emergency / same-day estimates / fast response** — legacy "Fast Response & Emergency Service" reason removed. (Part B)
- **Review/rating claims** ("5-star", "clients praise", aggregate rating) — two legacy review/experience FAQs removed; rating disabled in canonical config. (Part B)
- **"Fully Insured & Bonded"** — narrowed to "Insured" (liability coverage the Contractors Registration Act requires); "bonded" is [VERIFY], dropped. (Part B)
- **Physical street address / ZIP / geo / phone** — not referenced. (Part B)
- **Workmanship-warranty term** — not specified in repo; stated qualitatively as "manufacturer system warranty welded to manufacturer specification", no NQR labor-warranty length asserted. (Part B)

De-fabrication of the legacy entry: removed "premium", "exceptional", "best choice", "the membrane of choice", "strongest", "world-class"-style hype; removed unsourced specifics (mil thicknesses 48–80, "-20°F flexibility", "150°F surface", "developed in Europe in the 1960s", "nearly five decades", "up to 85% reflectance" → re-anchored to the sourced ASTM C1549 / Duro-Last / CRRC 70–85% range), Class A fire claim (not in fact packs), and "25–30 percent cost premium" (not in fact packs).

---

## factGapsFlagged — figures NOT in the fact packs (stated qualitatively or omitted)

1. **PVC membrane mil thickness (48/60/80 mil)** — not in fact packs; replaced with qualitative "membrane thickness" / "thicker reinforced membranes". OMITTED as numbers.
2. **PVC cold-temperature flexibility (e.g., −20°F)** — not in fact packs; the §6 note "cold-weather shattering of unreinforced PVC" is stated only qualitatively as a failure mode, no temperature number.
3. **PVC Class A fire rating / chlorine inherent fire resistance** — no PVC fire figure in the fact packs; OMITTED entirely (legacy fire claims dropped).
4. **PVC cost premium "15–30% over TPO"** — not in the fact packs; OMITTED. Cost stated as the sourced $6–$12/sq ft range instead.
5. **PVC-specific NJ $/sq ft** — no PVC-specific NJ figure; TPO-class NJ $8–$12/sq ft (Josten Roofing NJ) used as the named proxy and labeled as such.
6. **Freeze-thaw "cycles per winter" count** — [UNVERIFIED] per the gate; described qualitatively only ("the Essex County climate", "thermal cycling"), never a cycle count.
7. **PVC market-share / age-of-technology statistics** — none in the fact packs; OMITTED.

---

## Self-audit vs gate rules (run before return)

- **R6 modality** (`will/shall/should/need to/needs to/have to/has to/must/ought to`) in body declaratives: 0. FAQ `question:` fields use "need"/"does … require" but contain no banned `… to` modal; verb-only "need" is not a gate hit. Also avoided `may/might/can/could/would` entirely.
- **R9 outbound links** / `https?://`: 0. No external URLs; authorities named in-text only.
- **R10 [VERIFY]/[UNVERIFIED] literals**: 0 in snippet. **De-fab literals** (24/7, same-day, GAF-certified, 0% financing, top-rated, N+ years experience, N+ counts, fake NAP): 0.
- **R8 plural-count** (inline "N nouns: …"): "4 PVC single-ply roof systems … : a, b, c, d" = 4 items; "4 low-slope alternatives: TPO, EPDM, modified bitumen, and spray polyurethane foam." = 4 items. Counts match.
- **R2/R3/R4 answer-first**: directAnswer 37 words ≤40; every overview/signs/approach/residential/commercial/FAQ/whyChooseUs entry opens with a bolded answer span (the answer clause bolded, not the keyword).
- **R5 no predictions/opinion**; **R14 no hype** (best/premier/premium/trusted etc.): 0.
- **R13 entity-pronoun**: repeats "PVC", "the membrane", "Newark Quality Roofing", "the roof" instead of it/they.
- **Zod**: `tsc -p tsconfig.json` clean against `ServiceContent`; arrays within min/max; `approachSubheadings.length === approachContent.length`.
