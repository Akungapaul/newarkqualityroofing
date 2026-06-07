# Cedar Shake Roof Replacement — Draft Doc (serviceId: cedar-shake-roof-replacement)

Batch 8, entry 15 of 15 (replacement-sub-pages). Macro angle: replacing aging cedar
shakes and shingles with new cedar (hand-split shake / sawn shingle), on a ventilated
nailing base, with honest wood fire-class framing. NOT an insurance/storm/fire page —
no public-adjuster, deductible, or guaranteed-approval framing.

## Rendered-heading → content-field map

| Rendered H-tag (from HEADING_CONFIG) | Content field that answers it |
|---|---|
| H1 "Who Provides Cedar Shake Roof Replacement in Newark?" | `directAnswer` (37 words, bolded) |
| H2 "What Cedar Shake Roof Replacement Do We Provide?" | `overview[]` (2) + `subServices[]` (4) |
| H2 "How Do You Know If You Need Cedar Shake Roof Replacement?" | `signs[]` (7), label `signsHeading` |
| H2 "How Do Our Roofing Contractors Perform Cedar Shake Roof Replacement?" | `approachContent[]` (3) + `approachSubheadings[]` (3) |
| H2 "How Much Does Cedar Shake Roof Replacement Cost?" | `pricing.range` + `pricing.factors[]` (5) + `financingNote` |
| H2 "Should You Repair or Replace Your Roof?" | `faqs[0]` repair-vs-replace FAQ |
| H2 "Why Choose Our Roofing Company for Cedar Shake Roof Replacement?" | `whyChooseUs.reasons[]` (4) |
| Residential block | `residential{heading,content(2),ctaLabel}` |
| Commercial block | `commercial{heading,content(2),ctaLabel}` |
| Process | `processSteps[]` (6) |
| FAQ | `faqs[]` (6) |

## Named sources used → exact figure attributed to each

- **Cedar Shake & Shingle Bureau (CSSB)** — cedar shake 20–40 yr; cedar shingle 30–50 yr; ≥1.5 in drying air space beneath shakes (ventilated nailing base); moisture-driven cupping/splitting/rot is the dominant cedar failure mode; FR-treated cedar = Class B or Class C product class (Certi-Guard); Class A wood roof = tested assembly only (FR shakes over FR cap sheet).
- **InterNACHI life-expectancy chart** — single "Wood" row at 25 yr (cedar shake & shingle folded together).
- **InterNACHI flex-test guidance** — a shake that cracks under light bending = advanced degradation regardless of surface.
- **UL 790 / ASTM E108** — roof-covering fire-test method (intermittent flame, spread of flame, burning brand); set the Class A/B/C system. Untreated cedar = nonclassified under these (NOT Class C).
- **NRCA** — cedar maintenance / moisture-driven failure context (with CSSB).
- **NOAA 1991–2020 normals at Newark Liberty (EWR)** — average January low near 25.5°F; repeated 32°F freeze-thaw crossings.
- **GAF** — spongy/sagging deck = moisture-rotted sheathing structural sign.
- **This Old House** — daylight through deck points to replacement.
- **NHI Contractors (NJ)** — premium cedar $10–$20+/sq ft installed (NJ).
- **Josten Roofing (NJ)** — NJ asphalt $5.50–$11.00/sq ft; NJ slate $10–$30/sq ft (cedar positioned between).
- **Modernize / HomeGuide** — labor ~60–70% of a wood-roof install; NJ ranges 10–40% above national.
- **N.J.A.C. 5:23-6.4 (NJ Rehabilitation Subcode)** — prohibits roofing over wood shake and over a water-soaked/deteriorated deck; requires full removal of the cedar covering (cedar cannot be roofed-over → tear-off required).
- **N.J.A.C. 5:23-2.7 (NJ Uniform Construction Code)** — detached 1–2-family roof-covering re-roof = ordinary maintenance, no permit; commercial limited to 25% of roof area / 12 mo; structural change triggers a permit.
- **Integrity Home Exteriors** — verification/cleanup guidance (workmanship vs material warranty).
- **Industry repair-vs-replace guidance** — 25–30% damaged-area threshold favors replacement.
- **NJ Division of Consumer Affairs / Contractors Registration Act** — NJ HIC registration + liability-coverage requirement (whyChooseUs).

## Self-audit checklist

- [x] Answer-first bolded openers: every H-tag-answering field opens with a bolded answer clause. directAnswer = 37 words. Max bold-answer span across signs = 14 words; across FAQ answers = 38 words (all ≤40). overview[1], residential.content[1], commercial.content[1] second paragraphs are supporting evidence, unbolded — matches gold exemplar pattern.
- [x] Zero modality in declaratives: grep for `\b(will|should|need to|have to|must|might|may|would|could)\b` across all declarative prose (incl. faqs[].answer, factors, reasons, headings) excluding `question:` lines = NONE. faqs[0].question "Should you repair or replace your cedar roof?" — exempt (question field). "cedar roof needs a ventilated nailing base" / "cedar roof needs at least 1.5 inches" use "needs" (present-tense verb), not banned "need to".
- [x] Every hard number named-sourced: cedar shake 20–40 / shingle 30–50 → CSSB; wood 25 → InterNACHI; fire classes (nonclassified / B / C / A-assembly) → CSSB Certi-Guard + UL 790 / ASTM E108; flex test → InterNACHI; 1.5 in air space → CSSB; 25–30% area → industry repair-vs-replace; January low 25.5°F / 32°F → NOAA EWR; NJ cedar $10–$20+/sq ft → NHI Contractors; NJ asphalt $5.50–$11.00 + slate $10–$30 → Josten Roofing; labor 60–70% + NJ 10–40% → Modernize/HomeGuide; permit/recover code → N.J.A.C. 5:23-2.7 / 5:23-6.4.
- [x] FIRE-CLASS CORRECTION honored: untreated cedar stated as NONCLASSIFIED under UL 790 / ASTM E108 (never "Class C"); FR-treated cedar = Class B/C product class; Class A wood = assembly-only. The banned literal "untreated cedar = Class C" does NOT appear.
- [x] No UNVERIFIED numbers: no invented "% of failures" figure used (CSSB failure modes stated qualitatively — moisture-driven cupping/splitting/rot, north/shaded slopes dry slower). NJ freeze-thaw cycle count (35–45, flagged UNVERIFIED) NOT used — only sourced January-low 25.5°F. No NJ-specific cedar repair $ invented; cost stated as the NHI Contractors install $/sq ft.
- [x] approachSubheadings.length (3) === approachContent.length (3).
- [x] Counted plurals match: "2 cedar wood roof types" → shake + shingle (2 listed); "25 to 30%" / "1.5 inches" / "20 to 40 years" / "30 to 50 years" integers present.
- [x] No de-fab literals: no 24/7, same-day, GAF Certified, 0% financing, top-rated, 500+, N years of experience, fabricated rating/phone/address. financingNote is qualitative ("discusses payment options at the estimate") — no rate/term.
- [x] No outbound links / URLs in prose (grep `https?://|www.|<a>` = NONE).
- [x] credentialsHighlight exact 4-item array: ['NJ HIC Licensed','Insured','Free Roof Inspections','Local Essex County Roofers'].
- [x] No hype words (best/leading/trusted/premier/top-rated/etc.) = NONE. shortDescription's "premium" lives in services.ts metadata, not in this content object; "premium cedar" used here is the NHI Contractors material-tier term, not sentiment.
- [x] License framing: "New Jersey Home Improvement Contractor" with no license number; "carries liability coverage" (insured); free inspections. No GAF-Certified / dealer / Certi-Guard-licensee / public-adjuster status claimed for NQR (Certi-Guard named only as the source of the fire-class system, not an NQR certification).
- [x] Insurance/storm/fire compliance: N/A for this material page (cedar end-of-life replacement) — verified anyway: no public-adjuster claim, no deductible waiver/rebate, no guaranteed-approval, no "free roof" replacement promise. The only "free roof" strings are "Free Roof Inspections" / "free roof inspections" (approved credential).
- [x] Overlay caution honored: this page never presents a cedar overlay — it states the opposite (N.J.A.C. 5:23-6.4 prohibits roofing over wood shake → full tear-off required), consistent with the Batch-8 overlay/material cautions.
- [x] One macro topic: cedar shake roof replacement, opening answer + closing whyChooseUs both repeat the primary n-gram "cedar shake roof replacement / cedar roof."
- [x] isResidential=true + isCommercial=false → both blocks written (schema requires both). Commercial block is concise and HONEST: cedar on character/historic commercial buildings, same maintenance + fire-treatment + tear-off reality; no over-claimed commercial cedar specialty.
- [x] Parses as a single array element: leading comment `// ─── 15. Cedar Shake Roof Replacement ───`, opens `{`, closes `},`; eval'd against the array-element shape (all ServiceContentSchema min/max counts satisfied).
