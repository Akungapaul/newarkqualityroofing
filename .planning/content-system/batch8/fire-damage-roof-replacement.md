# Fire Damage Roof Replacement — Draft Doc (Batch 8, entry #8 of 15)

**serviceId:** `fire-damage-roof-replacement`
**category:** replacement-sub-pages · **parentId:** roof-replacement · **isResidential:** true · **isCommercial:** true
**Macro angle:** structural assessment + full roof replacement after fire damage, Class A fire-rated rebuild, honest insurance coordination.

---

## Rendered-heading → content-field map

| Rendered H-tag (from HEADING_CONFIG) | Content field that answers it |
|---|---|
| H1 "Who Provides Fire Damage Roof Replacement in Newark?" | `directAnswer` (39 words, ≤40) |
| H2 "What Fire Damage Roof Replacement Do We Provide?" | `overview[]` (2) + `subServices[]` (5) |
| H2 "How Do You Know If You Need Fire Damage Roof Replacement?" | `signs[]` (7), label `signsHeading` |
| H2 "How Do Our Roofing Contractors Perform Fire Damage Roof Replacement?" | `approachContent[]` (3) / `approachSubheadings[]` (3) |
| H2 "How Much Does Fire Damage Roof Replacement Cost?" | `pricing.range` + `pricing.factors[]` (5) + `pricing.financingNote` |
| H2 "Should You Repair or Replace Your Roof?" | `faqs[0]` "Should you repair or replace a fire-damaged roof?" |
| H2 "Why Choose Our Roofing Company for Fire Damage Roof Replacement?" | `whyChooseUs.reasons[]` (5) |
| Residential block | `residential{heading,content(2),ctaLabel}` |
| Commercial block | `commercial{heading,content(2),ctaLabel}` |
| Process | `processSteps[]` (6) |
| FAQ | `faqs[]` (7) |

---

## Named sources used + exact figure each is attributed to

| Named source | Figure / fact attributed in-text |
|---|---|
| U.S. Forest Products Laboratory | A roof is a structural assembly (covering + deck + framing); char layer = essentially zero residual structural capacity; heat-affected zone retains ~85–90% of original strength; firefighting water saturates decking/insulation/framing; smoke staining alone does NOT structurally weaken wood; charred members replaced after structural assessment |
| American Wood Council (AWC) | Nominal char rate 1.5 inches of wood per hour for structural fire design; char layer carries zero residual capacity |
| UL 790 / ASTM E108 | Roof-covering fire classes A/B/C via spread-of-flame, intermittent-flame, burning-brand tests; Class A = most fire-resistant |
| Cedar Shake & Shingle Bureau + InterNACHI | Untreated cedar non-classified; FR-treated cedar Class B/C; Class A wood-shake = tested assembly only |
| Insurance Information Institute (Triple-I) | Fire & lightning ≈ 1 in 430 insured homes/yr (qualitative "among the most severe"); deductible is homeowner's responsibility; coverage/approval is insurer's decision |
| N.J.S.A. 17:22B (NJ Public Adjusters' Licensing Act) | Only a licensed public adjuster or attorney negotiates/settles the claim; NQR is a contractor, not a public adjuster |
| N.J.A.C. 5:23-6.4 + IRC R908.3.1.1 | Water-soaked/deteriorated deck = not an adequate base, full removal required (no recover over fire-charred/water-saturated deck) |
| N.J.A.C. 5:23-2.7 (NJ UCC) | 1–2 family roof-covering replacement = ordinary maintenance, no permit; structural framing change triggers a permit; commercial = permit beyond 25% / 12 months |
| InterNACHI life-expectancy chart | EPDM 15–25 yr, TPO 7–20 yr, modified bitumen 20 yr (commercial block) |
| Steel Construction Institute | Structural-steel strength loss begins near 300°C (corroded/loosened connectors sign) |
| ANSI/IICRC S700 | Firefighting water + smoke/soot corrosion of metal components; soot acidic |
| HomeAdvisor / Modernize (NJ) | NJ roof replacement $10,000–$25,000 typical; 2025 national avg ~$10,000–$11,000 |
| Josten Roofing (NJ) | NJ per-sq-ft: architectural asphalt $6.50–$11.00, metal $9.00–$16.00, slate $10–$30; NJ runs 10–40% above national |
| Integrity Home Exteriors | Labor ~60–70% of asphalt install; NJ 10–40% above national |
| roofing industry guidance (25% rule) | Fire damage > 25–30% of roof area → replace |

**Pricing range** `$12,000–$35,000+ including structural repair` matches the existing `content-constants.ts` entry for this service (`$12,000–$35,000`, note "including structural repair"). No NJ/Essex fire-specific cost number invented; structural-add framed qualitatively.

**Fire-claim figure handling (§0 rule 7):** The stale $77,340 (2016–2020 Policygenius) figure is NOT used. No roof-only average claim is asserted (no named authority publishes one — Gaps #1). The peril-level fact used is the sourced frequency ≈1 in 430 homes/yr, framed qualitatively as "among the most severe homeowners-insurance claims," labeled all-property (fire & lightning), not roof-only.

---

## Self-audit checklist

- [x] **Answer-first, bolded openers** — every overview item, every sign, every approachContent item, residential/commercial[0], and every FAQ answer opens with a bolded ≤40-word definitive answer (the answer clause is bolded, not the keyword). directAnswer = 39 words.
- [x] **Zero modality in declaratives** — grep for `will|should|must|might|may|would|could|need to|have to` returns only line 108 (`faqs[].question` "Should you repair or replace a fire-damaged roof?"), which is exempt. No standalone "may" anywhere.
- [x] **Every number named-sourced** — char rate 1.5 in/hr (AWC); ~85–90% strength (FPL); 1 in 430 (Triple-I); 25–30% rule (roofing industry guidance); 300°C (FPL/Steel Construction Institute); EPDM 15–25 / TPO 7–20 / mod-bit 20 yr (InterNACHI); $10,000–$25,000 + $10,000–$11,000 (HomeAdvisor/Modernize); $6.50–$11.00 / $9.00–$16.00 / $10–$30 per sq ft (Josten Roofing); 60–70% labor + 10–40% NJ premium (Josten/Integrity); 25% / 12-month commercial permit (N.J.A.C. 5:23-2.7).
- [x] **Counted plurals match items** — overview[0] "4 fire-damaged assembly layers:" lists exactly 4 (covering, decking, rafters/trusses, connectors/fasteners).
- [x] **approachSubheadings.length === approachContent.length** — 3 === 3.
- [x] **No de-fab literals** — no "24/7", "same-day", "GAF Certified", "0% financing", "top-rated", "500+", "N+ years of experience", "[VERIFY]/[UNVERIFIED]". `financingNote` frames financing options qualitatively ("reviews payment and financing options at the estimate") — no rate/term invented.
- [x] **No outbound links / URLs** — grep clean.
- [x] **credentialsHighlight exact** — `['NJ HIC Licensed', 'Insured', 'Free Roof Inspections', 'Local Essex County Roofers']`.
- [x] **No hype words** — grep clean (best/leading/trusted/premier/seamless/etc.).
- [x] **Entity repetition (no pronoun co-reference)** — repeats "Newark Quality Roofing", "the char layer", "the deck", "the roof covering", "the framing"; avoids it/they/this/that/there for entity antecedents.
- [x] **One macro topic** — "fire damage roof replacement" n-gram in the opening directAnswer/overview and repeated in the closing whyChooseUs heading and pricing.
- [x] **INSURANCE/FIRE COMPLIANCE (§0 rules 1–3, 8):**
  - No public-adjuster claim — explicitly states NQR is a contractor, not a public adjuster; homeowner or licensed public adjuster files/negotiates (N.J.S.A. 17:22B).
  - No deductible waiver — "the deductible stays the homeowner's responsibility under the policy."
  - No guaranteed approval / free roof — "coverage and approval are the insurer's decision."
  - No NQR structural sign-off claim — "a licensed structural engineer assesses the framing; Newark Quality Roofing performs the roofing to that assessment."
  - Smoke ≠ structural weakening — FAQ explicitly states smoke/soot alone does not structurally weaken wood (char + heat-affected zone + metal corrosion are the structural concerns).
  - No recover over fire-charred/water-saturated deck — tear-off required, attributed to N.J.A.C. 5:23-6.4 / IRC R908.3.1.1.
  - Fire classes attributed to UL 790 / ASTM E108 / CSSB; no roof-only average claim invented.
