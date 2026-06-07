# Aging Roof Replacement — Draft Doc (serviceId: aging-roof-replacement)

Batch 8, entry 6 of 15 (replacement-sub-pages). Macro angle: replacing a roof at the
end of its service life, before age-driven failure causes interior damage. NOT an
insurance/storm/fire page — no public-adjuster, deductible, or guaranteed-approval framing.

## Rendered-heading → content-field map

| Rendered H-tag (from HEADING_CONFIG) | Content field that answers it |
|---|---|
| H1 "Who Provides Aging Roof Replacement in Newark?" | `directAnswer` (40 words, bolded) |
| H2 "What Aging Roof Replacement Do We Provide?" | `overview[]` (2) + `subServices[]` (5) |
| H2 "How Do You Know If You Need Aging Roof Replacement?" | `signs[]` (8), label `signsHeading` |
| H2 "How Do Our Roofing Contractors Perform Aging Roof Replacement?" | `approachContent[]` (3) + `approachSubheadings[]` (3) |
| H2 "How Much Does Aging Roof Replacement Cost?" | `pricing.range` + `pricing.factors[]` (5) + `financingNote` |
| H2 "Should You Repair or Replace Your Roof?" | `faqs[0]` repair-vs-replace FAQ |
| H2 "Why Choose Our Roofing Company for Aging Roof Replacement?" | `whyChooseUs.reasons[]` (4) |
| Residential block | `residential{heading,content(2),ctaLabel}` |
| Commercial block | `commercial{heading,content(2),ctaLabel}` |
| Process | `processSteps[]` (6) |
| FAQ | `faqs[]` (6) |

## Named sources used → exact figure attributed to each

- **InterNACHI life-expectancy chart** — 3-tab asphalt 20 yr; architectural 30 yr; wood/cedar 25 yr; metal 40–80 yr; copper 70+ yr; slate 60–150 yr; EPDM 15–25; TPO 7–20; modified bitumen 20; BUR 30 yr.
- **NRCA** — asphalt life varies up to 40% with climate/install/maintenance; proper attic ventilation extends roof life up to 25%; ponding water >48 hr is a defect; flat roof needs ≥¼ in/ft slope (with ARMA).
- **National Slate Association** — premium slate commonly 100+ yr.
- **Cedar Shake & Shingle Bureau** — cedar shake 20–40 yr; cedar shingle 30–50 yr.
- **Tile Roofing Industry Alliance** — clay tile 75–100+ yr; concrete tile 40–75 yr.
- **GAF** — granule loss >30% = beyond repair rule-of-thumb; 50% loss cuts remaining life up to 70%; curling/cupping = advanced asphalt degradation (with InterNACHI).
- **US Census housing-survey data** — older homes report roof leakage 5.5% vs 3.5% newer (~2× rate).
- **NOAA 1991–2020 normals at Newark Liberty (EWR)** — average January low near 25.5°F; repeated 32°F freeze-thaw.
- **NOAA New Jersey State Climate Summary** — NJ temperatures risen >3.5°F since early 20th century.
- **HomeAdvisor / Modernize (NJ)** — NJ replacement $10,000–$25,000; national 2025 avg ~$10,000–$11,000.
- **Josten Roofing (NJ)** — architectural asphalt $6.50–$11.00/sq ft; metal $9.00–$16.00; slate $10–$30.
- **HomeGuide / Integrity Home Exteriors** — labor ~60–70% of asphalt install; NJ ranges 10–40% above national.
- **Zillow analysis + Zonda Cost vs Value report** — new asphalt roof recoups ~60–68% of cost at resale.
- **Industry repair-vs-replace guidance** — age rule (past ~20 yr / 15 coastal → replace); 3-repairs-in-2-years rule; localized repair 5–10× cheaper while roof stays young.
- **N.J.A.C. 5:23-2.7 (NJ Uniform Construction Code)** — detached 1–2-family roof-covering re-roof = ordinary maintenance, no permit; commercial limited to 25% of roof area / 12 mo.
- **N.J.A.C. 5:23-6.4 (NJ Rehabilitation Subcode)** — full removal required when covering is water-soaked, is wood/slate/tile, or carries 2+ layers.
- **IRC R905.1.2 (International Residential Code)** — ice barrier eave to ≥24 in inside exterior wall line.
- **Owens Corning warranty guidance** — manufacturer material warranty (factory defects) vs written workmanship warranty (labor).
- **This Old House** — daylight through deck points to replacement.
- **NJ Division of Consumer Affairs / Contractors Registration Act** — NJ HIC registration + liability coverage requirements (whyChooseUs).

## Self-audit checklist

- [x] Answer-first bolded openers: every H-tag-answering field opens with a bolded answer clause. directAnswer = 40 words; max bold-answer span = 40 words (all ≤40). Second items in multi-paragraph arrays (overview[1], residential.content[1], commercial.content[1]) are supporting evidence, unbolded — matches gold exemplar pattern.
- [x] Zero modality in declaratives: grep for will/should/need to/have to/must/might/may/would/could across ALL declarative prose (incl. faqs[].answer, headings, factors, reasons) = NONE. faqs[0].question uses "Should you repair or replace" — exempt (question field).
- [x] Every hard number named-sourced: all lifespans → InterNACHI / NSA / CSSB / TRI; aging mechanisms → GAF/InterNACHI/NRCA; freeze-thaw → NOAA EWR + NJ State Climate Summary; cost → HomeAdvisor/Modernize/Josten/HomeGuide; ROI → Zillow/Zonda; code → N.J.A.C. 5:23-2.7 / 5:23-6.4 / IRC R905.1.2; leak-rate → US Census.
- [x] No UNVERIFIED numbers: no invented "% of failures" figure used; aging failure modes stated qualitatively. No roof-only claim payout invented. NJ freeze-thaw cycle count (35–45, flagged UNVERIFIED) NOT used — only the sourced January-low 25.5°F.
- [x] approachSubheadings.length (3) === approachContent.length (3).
- [x] Counted plurals match: "5 aging roof systems" → 5 listed; "5 material classes" → 5 named; "3 or more repairs in 2 years" integer present.
- [x] No de-fab literals: no 24/7, same-day, GAF Certified, 0% financing, top-rated, 500+, N years of experience, fabricated rating/phone/address. financingNote is qualitative ("discusses payment options at the estimate") — no rate/term.
- [x] No outbound links / URLs in prose (grep https?://|www.|<a> = NONE).
- [x] credentialsHighlight exact 4-item array: ['NJ HIC Licensed','Insured','Free Roof Inspections','Local Essex County Roofers'].
- [x] No hype words (best/leading/trusted/premier/top-rated/etc.) = NONE.
- [x] License framing: "New Jersey Home Improvement Contractor" with no license number; "carries liability coverage" (insured); free inspections. No GAF-Certified / dealer / public-adjuster status claimed.
- [x] Insurance/storm/fire compliance: N/A for the core page (aging end-of-life), but verified anyway — no public-adjuster claim, no deductible waiver/rebate, no guaranteed-approval, no "free roof" replacement promise. The only "free roof" string matches are "Free Roof Inspections" (approved credential). The single insurance-adjacent fact (resale ROI 60–68%) is compliant and sourced.
- [x] One macro topic: aging roof replacement, opening answer + closing whyChooseUs both repeat the primary n-gram "aging roof replacement / aging roof."
- [x] isResidential=true + isCommercial=true → both residential{} and commercial{} blocks written substantively (commercial = low-slope EPDM/TPO/mod-bit/BUR aging + §4 lifespans + N.J.A.C. permit/recover framing).
- [x] Parses as a single array element: leading comment `// ─── 6. Aging Roof Replacement ───`, opens `{`, closes `},`; validated via eval against ServiceContentSchema shape (all min/max counts satisfied).
