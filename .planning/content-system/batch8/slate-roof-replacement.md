# Slate Roof Replacement — Draft Doc (Batch 8, entry #12)

serviceId: `slate-roof-replacement` · category: replacement-sub-pages · parentId: roof-replacement
isResidential: true · isCommercial: false (residential-primary; honest commercial/institutional block written)
Macro topic: natural (or synthetic) slate replacement for historic and high-end Essex County homes.

## Rendered-heading → content-field map

| Rendered H-tag (from HEADING_CONFIG) | Content field that answers it |
|---|---|
| H1 "Who Provides Slate Roof Replacement in Newark?" | `directAnswer` (38 words, bolded) |
| H2 "What Slate Roof Replacement Do We Provide?" | `overview[]` (2) + `subServices[]` (4: natural slate, synthetic slate, deck/underlayment renewal, slate flashing) |
| H2 "How Do You Know If You Need Slate Roof Replacement?" | `signsHeading` + `signs[]` (7) |
| H2 "How Do Our Roofing Contractors Perform Slate Roof Replacement?" | `approachHeading` + `approachSubheadings[]` (3) / `approachContent[]` (3) |
| H2 "How Much Does Slate Roof Replacement Cost?" | `pricing.range` + `pricing.factors[]` (5) + `pricing.financingNote` |
| H2 "Should You Repair or Replace Your Roof?" | `faqs[0]` repair-vs-replace FAQ (20% threshold, NPS Brief 29) |
| H2 "Why Choose Our Roofing Company for Slate Roof Replacement?" | `whyChooseUs.reasons[]` (5) |
| Residential block | `residential{heading,content(2),ctaLabel}` |
| Commercial block | `commercial{heading,content(2),ctaLabel}` — historic churches/civic/institutional, same technique |
| Process | `processSteps[]` (6) |
| FAQ | `faqs[]` (6) |

## Named sources used + the exact figure each is attributed to

| Named source | Figure attributed in-text |
|---|---|
| InterNACHI life-expectancy chart | Natural slate 60–150 yr; synthetic/simulated slate 10–35 yr; "slate is the longest-lasting roofing material" |
| National Slate Association | Premium slate commonly 100-plus years; slate repaired-not-replaced / indefinite tile-by-tile while deck+fasteners sound |
| NPS Preservation Brief 29 (Levine) | Slate 60–125 yr or longer; 20% broken/cracked/missing/sliding → replace rather than repair; non-ferrous solid copper or stainless slater's nails, not driven tight (slate hangs on the shank); plain/galvanized nails rust out long before the slate; ripper + copper strip / metal hook (not mastic); copper strip method fails in northern snow/ice climates → metal hooks; flashing = copper / lead-coated copper / terne-coated stainless steel matched to slate life; slate never coated/sealed/painted; do not walk on slate |
| NPS Preservation Brief 4 (Sweetser) | Document/photograph/measure/record slate pattern, coursing, color, dimensions before work; flashing failure a major cause of historic roof deterioration; matching in-kind samples |
| CertainTeed product literature | Premium composite/synthetic slate designed 40–50 yr |
| N.J.A.C. 5:23-6.4 (NJ Rehabilitation Subcode) | Slate is among coverings requiring complete removal — cannot be roofed over; slate replacement always a full tear-off/reinstall |
| N.J.A.C. 5:23-2.7 (NJ UCC ordinary maintenance) | 1–2 family roof-covering re-roof = ordinary maintenance, no permit/inspection/notice; commercial covered only up to 25% of total roof area per 12 months → commercial slate replacement needs a permit |
| N.J.S.A. 40:55D-107 (NJ Municipal Land Use Law) | Certificate of Appropriateness from municipal Historic Preservation Commission before exterior work on a designated local landmark / local historic district property; COA separate from construction permit |
| National Park Service | National Register listing alone places no restriction on a private owner |
| NOAA 1991–2020 normals, Newark Liberty (EWR) | Newark crosses 32°F freezing point repeatedly; average January low ≈ 25.5°F (freeze-thaw context for fastening/technique) |
| named NJ roofing guides | NJ slate install $10–$30 / sq ft, ≈ $1,500 per roofing square |
| HomeGuide | Slate tear-off / removal $2–$5 per sq ft (heavier slate/tile removal); NJ ranges 10–40% above national |
| Integrity Home Exteriors | NJ ranges 10–40% above national (labor + stricter NJ code); verification/cleanup + workmanship warranty |
| GAF | Spongy/sagging deck = moisture-rotted sheathing (structural) |

NJ business facts asserted: NJ Home Improvement Contractor (no number); insured (liability coverage); free roof inspections / free written estimate; hours Mon–Fri 7:00 AM–6:00 PM, Sat 8:00 AM–2:00 PM; service area Essex County; cities Newark, East Orange, Bloomfield, Montclair, Belleville, Irvington, Glen Ridge. Materials/brands named (allowed): natural slate, synthetic/composite slate, CertainTeed, copper, lead-coated copper, terne-coated stainless steel, Firestone/Carlisle/Johns Manville (not used here — slate page). No certification/dealer/preservation-credential claim for NQR.

## Counted enumerations (exact integer = item count)
- "replaces 2 slate roof systems … : natural quarried slate and synthetic composite slate" → 2 ✓
- subServices = 4 (natural / synthetic / deck-underlayment / flashing) — not a prose count
- approachSubheadings (3) === approachContent (3) ✓

## Self-audit checklist
- [x] Answer-first: first sentence under every heading is a bolded definitive answer ≤40 words. directAnswer = 38 words. overview[0], residential.content[0], commercial.content[0], every signs[], every approachContent[], every faqs[].answer opens bolded. First-sentence word counts: overview[0]=27, res[0]=37, com[0]=31, faqs 35/39/27/21/32/33 — all ≤40.
- [x] Zero modality (will/should/need to/have to/must/might/may/would/could) in declaratives — grep-confirmed 0 hits outside `faqs[].question`. The Brief-29 "should not be walked on" verbatim was rewritten to "avoids walking on the slate, because walking on slate breaks the brittle tiles."
- [x] Every hard number named-sourced (table above); no invented numbers. UNVERIFIED "% of failures" figures NOT used (sugaring, fastener-failure, etc. stated qualitatively). No fabricated NJ slate price — used `facts-materials-economics.md` §7 ($10–$30/sq ft, ~$1,500/square) and §4 cross-ref removal $2–$5/sq ft.
- [x] approachSubheadings.length (3) === approachContent.length (3).
- [x] No de-fab literals: no "24/7", "same-day", "GAF Certified", "0% financing", "top-rated", "500+", "N+ years", fabricated ratings/phone/address, fabricated warranty-terms, [VERIFY]/[UNVERIFIED]. ("free roof" only appears inside "free roof inspections" — a permitted NQR fact, not the banned insurance claim.)
- [x] No outbound links / URLs in prose (grep-confirmed). Authorities cited by name only.
- [x] credentialsHighlight exact 4-item array: ['NJ HIC Licensed','Insured','Free Roof Inspections','Local Essex County Roofers'].
- [x] No pronoun co-reference to entities — "the slate", "the deck", "Newark Quality Roofing", "the flashing" repeated; no it/they/this/that/there antecedents.
- [x] One macro topic: slate roof replacement, opening answer + closing whyChooseUs both repeat "slate roof replacement". Primary n-gram repeated start and end.
- [x] Repair-vs-replace FAQ present (faqs[0]) to answer the rendered "Should You Repair or Replace Your Roof?" H2 — 20% threshold per NPS Brief 29.
- [x] Compliance: NO public-adjuster / deductible-waiver / guaranteed-approval / free-roof claim (this is a material page, not an insurance page; no claim framing used). NOT presented as an overlay — explicitly states slate cannot be roofed over and replacement is always a full tear-off, per N.J.A.C. 5:23-6.4. No NQR preservation-certification claim — NQR positioned as roofing contractor working to NPS Brief 29 / National Slate Association technique and coordinating with the owner's Historic Preservation Commission.
- [x] Honest commercial/institutional block: historic churches/civic/institutional slate, same copper/stainless technique; no over-claimed commercial slate specialty.
