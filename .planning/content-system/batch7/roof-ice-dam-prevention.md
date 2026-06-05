# Roof Ice Dam Prevention — Content Draft Doc

**serviceId:** `roof-ice-dam-prevention`
**Category:** design-consultation (entry 3 of 3)
**Flags:** isResidential=true (PRIMARY — steep-slope homes), isCommercial=false
**Macro angle:** prevent ice dams by correcting the ROOT CAUSE (attic heat escape / air leakage) with air-sealing + code-minimum insulation + balanced ventilation, plus the code eave ice-barrier membrane — NOT gutter cleaning.

---

## Rendered heading → content field map

| Rendered H-tag (from HEADING_CONFIG) | Answered by field |
|---|---|
| H1 "Who Provides Roof Ice Dam Prevention in Newark?" | `directAnswer` |
| H2 "What Roof Ice Dam Prevention Do We Provide?" | `overview[]` + `subServices[]` |
| H2 "How Do You Know If You Need Roof Ice Dam Prevention?" | `signs[]` (label = `signsHeading`) |
| H2 "How Do Our Roofing Contractors Perform Roof Ice Dam Prevention?" | `approachContent[]` / `approachSubheadings[]` |
| H2 "How Much Does Roof Ice Dam Prevention Cost?" | `pricing.range` + `pricing.factors[]` |
| H2 "Should You Repair or Replace Your Roof?" | `faqs[]` item "Should you repair or replace your roof to fix recurring ice dams?" |
| H2 "Why Choose Our Roofing Company for Roof Ice Dam Prevention?" | `whyChooseUs.reasons[]` |
| Residential block | `residential{heading,content,ctaLabel}` |
| Commercial block | `commercial{heading,content,ctaLabel}` |
| Process | `processSteps[]` |
| FAQ | `faqs[]` |

---

## Named sources → exact figure attributed

| Named source | Figure / claim attributed in-text |
|---|---|
| University of Minnesota Extension | Ice dam forms from **3 conditions** — snow on roof, upper roof **above 32°F** melting snowpack, eave **below 32°F** refreezing meltwater into a dam at the edge; trapped water backs up under shingles. Root cause = **attic heat escape driven by air leakage, NOT gutters** (with building-science consensus). Observable signs: large icicles, thick ice ridges, uneven snow-melt / bare patches, interior ceiling stains near top-floor exterior walls. Heat cables manage symptom, do not cure. |
| Building-science consensus (paired with UMN Extension) | Root cause = attic heat escape / air leakage; gutters only aggravate eave backup; "clogged gutters cause ice dams" debunked (never asserted as declarative — appears only as an FAQ question, then refuted). |
| NOAA 1991–2020 normals, Newark Liberty (EWR) | Average **January low ≈ 25.5°F**; crosses **32°F** repeatedly in winter; **average annual snowfall ≈ 31.5 inches**. |
| IRC R806.2 | Minimum net free ventilating area **1/150** of the vented attic; Newark = IRC Climate Zone 4–5 → design to 1/150, not the 1/300 vapor-retarder exception. |
| ARMA (with Air Vent Inc.) | Balanced ventilation ≈ **50% soffit intake / 50% ridge exhaust**. |
| IRC R905.1.2 | Ice barrier required at eaves with ice-dam history, **≥24 inches inside the exterior wall line**, **≥36 inches along slope on roofs 8:12 and steeper**; two cemented underlayment layers OR one self-adhering polymer-modified bitumen sheet. NJ enforces 2021 IRC via N.J.A.C. 5:23. |
| ASTM D1970 | Self-adhering polymer-modified bitumen ice-and-water membrane self-seals around fasteners; 36-inch self-adhered valley protection (with GAF). |
| GAF | Valley protection = 36-inch self-adhered membrane (with ASTM D1970); ceiling-stain inspection guidance. |
| U.S. Department of Energy (Building America Solution Center) | Air-seal + insulate + ventilate **together**; insulation without air-sealing leaves bypasses open; soffit vents are the primary intake, blocked intake traps heat at the deck. |
| InterNACHI | Soffit vents as primary intake; blocked/painted-over intake fails the balanced system (with DOE). |
| N.J.A.C. 5:23-2.7 (NJ Uniform Construction Code) | Detached 1- and 2-family re-roof/repair of roof covering = ordinary maintenance, no permit/inspection/notice. Commercial: repairing **>25% of total roof area in 12 months** requires a permit. |
| NRCA / ARMA | Low-slope roof needs **≥¼ inch per foot** of slope to drain; ponding **>48 hours** counts as a defect (freeze-thaw at internal drains/parapets on commercial low-slope). |
| NJ Division of Consumer Affairs | NJ Home Improvement Contractor registration requirement (whyChooseUs). |

### Deliberately NOT cited (per Batch-7 cautions / fact-pack flags)
- **No NJ attic R-value number** — R-49/R-60 are Minnesota-code figures; NJ value is `[UNVERIFIED]`. Insulation framed qualitatively as "to the code-minimum level" with NO number.
- **No "clogged gutters cause ice dams"** as a declarative — appears only as an FAQ question and is refuted in the answer.
- **No NQR certification / dealer / "certified historic" claim.**
- **No fabricated cost** — `pricing.range` = "Free written estimate after an attic and roof inspection"; factors are qualitative cost drivers, no invented dollar figures.
- **Heat / de-icing cables** framed honestly as symptom management at the eave, never as a cure.
- **No exact Essex County ground-snow-load (Pg) number** — flagged `[UNVERIFIED]` for the specific county/edition; used snowfall normal + freezing-point fact instead.

---

## Self-audit checklist

- [x] **Answer-first bolded openers** — directAnswer (40 words) + first sentence of every overview/signs/approach/residential/commercial/faq.answer is a definitive factual answer wrapped in `**`, ≤40 words (verified by script: all bold spans ≤40).
- [x] **Zero modality in declaratives** — grep for `will|should|need to|have to|must|might|may|would|could` outside `faqs[].question` returns NONE. (Only "should" hit is the FAQ question "Should you repair or replace your roof…", which is exempt.)
- [x] **Every number named-sourced** — 32°F, 25.5°F, 31.5 in, 1/150, 24 in, 36 in, 8:12, 50%, 25%, 48 hr, ¼ in/ft each attributed to a named source (UMN Extension / NOAA / IRC R806.2 / ARMA / IRC R905.1.2 / ASTM D1970 / N.J.A.C. 5:23-2.7 / NRCA-ARMA). No invented numbers.
- [x] **approachSubheadings.length === approachContent.length** — both = 3 (Root-Cause Attic Diagnostics / Air-Seal, Insulate, and Balance Ventilation / Code Eave Ice Barrier Installation).
- [x] **Counted plurals match** — "3 root-cause measures" + "3 measures" enumerate air-seal / insulate / balance ventilation; "3 conditions" enumerates snow + upper roof >32°F + eave <32°F.
- [x] **No de-fab literals** — no 24/7, same-day, GAF Certified, 0% financing, top-rated, 500+, N+ years, certified-historic, fabricated rating/phone/address/guarantee, no [VERIFY]/[UNVERIFIED].
- [x] **No outbound links / URLs** — grep for `https?://`, `www.`, `](` returns NONE.
- [x] **No entity-pronoun co-reference** — no it/they/this/these/those/there referring to a named entity; "Newark Quality Roofing", "the ice dam", "the attic", "the eave" repeated. ("that" instances are restrictive relative pronouns, not co-reference.)
- [x] **No hype words** — best/leading/trusted/premier/top-rated/seamless etc. return NONE.
- [x] **credentialsHighlight exact** — `['NJ HIC Licensed', 'Insured', 'Free Roof Inspections', 'Local Essex County Roofers']`.
- [x] **One macro topic, n-gram repeated** — "roof ice dam prevention" / "ice dam" in opening directAnswer + overview and in pricing/whyChooseUs closing sections.
- [x] **Honest commercial block** — steep-slope commercial/institutional (older mixed-use, churches) form eave ice dams the same way; low-slope commercial faces freeze-thaw at internal drains/parapets; no over-claimed commercial ice-dam specialty.
- [x] **Schema fields complete** — serviceId, directAnswer, overview(2), subServices(5), signsHeading, signs(6), approachHeading, approachContent(3), approachSubheadings(3), residential, commercial, processSteps(6), faqs(7), credentialsHighlight(4), pricing, whyChooseUs(5). Parses as one array element; starts `// ─── 3. …`, ends `},`.
