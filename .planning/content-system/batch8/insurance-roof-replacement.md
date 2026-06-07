# Insurance Roof Replacement — Draft Doc (Batch 8, entry #4 of 15)

**serviceId:** `insurance-roof-replacement`
**category:** replacement-sub-pages
**isResidential:** true | **isCommercial:** true
**Macro topic (one per page):** roof replacement COORDINATED with a property-insurance claim, explained accurately and within NJ legal limits (NQR = roofing contractor, NOT a public adjuster).

---

## Rendered-heading → content-field map

| Rendered H-tag (from HEADING_CONFIG) | Answered by |
|---|---|
| H1 — "Who Provides Insurance Roof Replacement in Newark?" | `directAnswer` (39 words ≤40) — leads "Newark Quality Roofing provides insurance roof replacement…" |
| H2 — "What Insurance Roof Replacement Do We Provide?" | `overview[]` (2) + `subServices[]` (5) |
| H2 — "How Do You Know If You Need Insurance Roof Replacement?" | `signs[]` (6) under `signsHeading` label |
| H2 — "How Do Our Roofing Contractors Perform Insurance Roof Replacement?" | `approachContent[]` (3) + `approachSubheadings[]` (3) |
| H2 — "How Much Does Insurance Roof Replacement Cost?" | `pricing.range` + `pricing.factors[]` (5) + `pricing.financingNote` |
| H2 — "Should You Repair or Replace Your Roof?" | FAQ #5 "Should you repair or replace your roof after storm damage?" |
| H2 — "Why Choose Our Roofing Company for Insurance Roof Replacement?" | `whyChooseUs.reasons[]` (4) |
| Residential block | `residential{heading,content(2),ctaLabel}` |
| Commercial block | `commercial{heading,content(2),ctaLabel}` |
| Process | `processSteps[]` (6) |
| FAQ | `faqs[]` (7) |

---

## Named sources → exact figure/fact attributed

| Named source | Figure / fact asserted on page |
|---|---|
| Insurance Information Institute (Triple-I, 2023) | Property damage = **97.3%** of homeowners claims |
| Insurance Information Institute (Triple-I, 2019–2023) | Wind & hail = largest claim type, **2.8%** of insured homes/yr, **1 in 36**, avg claim near **$14,747** |
| Insurance Information Institute (Triple-I, 2019–2023) | Water damage & freezing = **1 in 67** insured homes/yr, avg claim near **$15,400** |
| Insurance Information Institute (Triple-I) | Two-stage RCV payment (ACV first minus deductible; recoverable depreciation released after completion + invoice); supplement (insurer initial estimate misses line items); adjuster types; multiple checks / mortgagee co-endorsement; covered-peril vs wear/age exclusion |
| NAIC | ACV = replacement cost minus depreciation; RCV = like-kind without depreciation, subject to policy limits; deductible subtracted once |
| N.J.S.A. 17:22B (Public Adjusters' Licensing Act) / NJ DOBI | Only a licensed public adjuster or attorney negotiates/settles a first-party claim on behalf of the insured; NQR stays in roofing-contractor role |
| NJ Consumer Fraud Act + NJ Insurance Fraud Prevention Act / NJ DOBI | Deductible-waiver scheme is prosecutable in NJ |
| United Policyholders | Scope-of-loss contents (roof type, squares, underlayment, flashing, drip edge, vents, labor, interior damage) restoring pre-loss condition |
| NAIC State Licensing Handbook | Adjuster types — staff (insurer employee) vs independent (insurer-contracted) |
| NOAA | Severe thunderstorm = wind gusts **58 mph** or higher |
| American Meteorological Society + IBHS | Hail functional damage begins at roughly **1 inch** for aged 3-tab; depends on hail size + wind speed |
| InterNACHI life-expectancy chart | EPDM **15–25 yr**, TPO **7–20 yr**, modified bitumen **20 yr** |
| U.S. Forest Products Laboratory + EDT Engineers | Charred/heat-weakened framing has essentially zero residual capacity; licensed structural engineer assesses framing before rebuild |
| NJ Uniform Construction Code — N.J.A.C. 5:23-2.7 | 1–2 family roof-covering re-roof = ordinary maintenance, no permit; commercial roof / >25% in 12 months / structural change = permit |
| HomeAdvisor + Modernize | NJ roof replacement **$10,000–$25,000**; 2025 national average near **$10,000–$11,000** |
| Contractor-consensus (25–30% / 50% / 10–15 yr) | Repair-vs-replace thresholds (FAQ #5 — answers the rendered "Should You Repair or Replace?" H2) |

---

## Compliance core (insurance page) — verbatim-in-spirit framing applied

- NQR **DOES**: inspect, photograph/document the covered damage, write a detailed scope/estimate matching insurer line items, meet the adjuster on site, document supplements for hidden tear-off damage, perform the approved replacement, explain general ACV/RCV/deductible terms.
- NQR does **NOT**: adjust/negotiate/settle/"handle"/"file"/"manage" the claim; maximize the settlement; deal with the adjuster "on the homeowner's behalf"; interpret the specific policy; guarantee approval or a full replacement over a repair; waive/rebate/absorb/pay the deductible; promise a "free roof" / "no out-of-pocket."
- Homeowner OR a licensed public adjuster files and negotiates (N.J.S.A. 17:22B). Deductible = homeowner responsibility. Percentage wind/named-storm deductible stated as policy-specific, never a guaranteed mandate. No fire payout dollar figure used (fire framed qualitatively/structurally). No fabricated financing rate/term in `financingNote`.

---

## Self-audit checklist

- [x] **Answer-first bolded openers** — directAnswer + first item of overview/signs(×6)/approachContent(×3)/residential/commercial + all 7 FAQ answers start with a bolded `**answer**` clause (verified by script: 7/7 FAQ answers, both block openers, directAnswer).
- [x] **directAnswer ≤40 words** — 39 words / 260 chars; mirrors H1 "Who Provides…" → "Newark Quality Roofing provides…".
- [x] **Zero modality in declaratives** — grep for `will|should|need to|have to|must|might|may|would|could` outside `faqs[].question` returns NONE. (Two hits — "Will my insurance claim…", "Should you repair…" — are both FAQ `question:` fields, exempt.)
- [x] **Every number named-sourced** — all digit-bearing prose lines verified to carry a Part-A named authority (Triple-I, NAIC, NOAA, AMS, IBHS, InterNACHI, FPL, NJ UCC / N.J.A.C. 5:23-2.7, N.J.S.A. 17:22B / NJ DOBI, HomeAdvisor, Modernize, United Policyholders).
- [x] **approachSubheadings.length === approachContent.length** — 3 === 3.
- [x] **Counted plurals match** — overview opener "4 roofing roles" → exactly 4 enumerated gerunds (inspecting / documenting / writing / meeting).
- [x] **No de-fab literals** — grep for `24/7|same-day|GAF Certified|0% financing|top-rated|500+|N years experience|[VERIFY]|[UNVERIFIED]|free roof|no out-of-pocket|guaranteed approval` returns NONE.
- [x] **No outbound links / URLs** — grep for `https?://|<a href|www.` returns NONE.
- [x] **credentialsHighlight exact** — `['NJ HIC Licensed','Insured','Free Roof Inspections','Local Essex County Roofers']`.
- [x] **No public-adjuster / deductible-waiver / guaranteed-approval / free-roof claim** — FAQ #1 (handle claim → homeowner/public adjuster files), FAQ #3 (deductible never waived/rebated/paid), FAQ #4 (coverage/approval = insurer decision, no guarantee). whyChooseUs reason #2 = "Compliant Roofing-Contractor Role."
- [x] **No overlay-as-equal-to-tear-off** — N/A (this is the insurance page, not the overlay page); no overlay framing present.
- [x] **No fabricated fire payout** — fire damage framed qualitatively (structural, char layer = zero residual capacity); no $77,340/$88,170 number used.
- [x] **Schema field counts in-bounds** — overview 2, signs 6, approachContent 3, processSteps 6, faqs 7, pricing.factors 5, whyChooseUs.reasons 4 — all within Zod `ServiceContentSchema` min/max. Parses cleanly as one array element.
- [x] **One macro topic** — "insurance roof replacement" / "roof replacement coordinated with a property-insurance claim" repeated in opening directAnswer + overview and in closing whyChooseUs + cost FAQ.
- [x] **Both residential + commercial blocks substantive** — residential = homeowner storm/wind/hail/fire/tree claims + N.J.A.C. 5:23-2.7 no-permit + deductible responsibility; commercial = commercial-property claims, low-slope membranes, 25% permit rule, mortgagee co-endorsement, same compliant role.
