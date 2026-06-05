# Chimney Flashing Repair — Batch 5 Draft (#2 of 10, components-specialty)

**serviceId:** `chimney-flashing-repair` · isResidential=true · isCommercial=false
**Macro topic / primary n-gram:** chimney flashing repair (repeated in directAnswer opener, overview[0], approach, closing whyChooseUs + pricing).

---

## Rendered heading → content-field map

| Rendered H-tag (from HEADING_CONFIG) | Answered by field |
|---|---|
| H1 "Who Provides Chimney Flashing Repair in Newark?" | `directAnswer` (≤40 w, bolded answer) |
| H2 "What Chimney Flashing Repair Do We Provide?" | `overview[]` (2) + `subServices[]` (4) |
| H2 "How Do You Know If You Need Chimney Flashing Repair?" | `signs[]` (6); label = `signsHeading` |
| H2 "How Do Our Roofing Contractors Perform Chimney Flashing Repair?" | `approachContent[]` (2) / `approachSubheadings[]` (2) |
| H2 "How Much Does Chimney Flashing Repair Cost?" | `pricing.range` + `pricing.factors[]` (5) |
| H2 "Should You Repair or Replace Your Roof?" | `faqs[0]` ("Should you repair or replace your roof?") |
| H2 "Why Choose Our Roofing Company for Chimney Flashing Repair?" | `whyChooseUs.reasons[]` (5) |
| Related services / KB / scheduling H2s | template-rendered (no field) |
| Residential block | `residential{heading,content(2),ctaLabel}` |
| Commercial block (required despite isCommercial=false) | `commercial{heading,content(2),ctaLabel}` — multi-family / mixed-use framing |
| Process | `processSteps[]` (6) |
| FAQ | `faqs[]` (6) |

---

## Named sources used → exact figure/claim attributed

| Named source | Figure / claim attributed in-text |
|---|---|
| NRCA (via "industry estimate attributed to the NRCA") | roughly 90–95% of leaks at flashing, 5–10% at open field (HEDGED per §0.1) |
| NRCA | two-part chimney flashing system = base/step woven per course + counter flashing set into a reglet in a mortar joint |
| IRC Section R1003.20 | cricket/saddle required where chimney width parallel to ridge > 30 inches |
| IIBEC | surface caulk/cement alone is temporary; masonry-vs-roof movement + freeze-thaw crack it within a few years |
| InterNACHI (+ shingle manufacturers) | a continuous one-piece strip at a chimney is a defective installation; step flashing = one piece per shingle course |
| ASTM D1970 | self-adhering ice-and-water membrane self-seals around fasteners |
| GAF | flashing failure modes: corrosion/rust, lifted/bent by wind, short laps |
| HomeGuide and Angi | chimney flashing repair $300–$1,800; most $400–$1,600; spot reseal $150–$300 |
| Modernize | flashing reseal / small section $200–$500 |
| NJ Uniform Construction Code (N.J.A.C. 5:23-2.7) | re-roof of covering on detached 1–2 family = ordinary maintenance, no permit; commercial >25% of roof area in 12 months = permit |
| Contractor-consensus (25–30% area rule / 50% cost rule) | repair-vs-replace thresholds in faqs[0] (qualitative, no invented number beyond consensus thresholds) |

No de-fab literals, no certification claims, no invented failure-share %, no reglet-depth-as-code figure. Chimney "largest/most leak-prone penetration" stated qualitatively as trade consensus (no fabricated %).

---

## Self-audit checklist

- [x] **Answer-first, bolded:** first sentence under every heading is a definitive ≤40-word answer wrapped in `**…**` (directAnswer, overview[0], each sign, each approach item, residential[0], commercial[0], each FAQ answer). Bolded span = the answer clause, not the bare keyword.
- [x] **directAnswer ≤40 words**, repeats primary n-gram "chimney flashing".
- [x] **Zero modality in declaratives:** grep `will|should|need to|have to|must|might|may|would|could` returns 0 outside faqs[].question. (faqs[0] "Should you repair or replace…", faqs "Do you need a cricket…", "Should you…" exempt as questions.)
- [x] **Every digit named-sourced:** 90–95%/5–10% → NRCA (hedged); 30 in → IRC R1003.20; $300–$1,800/$400–$1,600/$150–$300 → HomeGuide+Angi; $200–$500 → Modernize; 25%/12-month/5:23-2.7 → NJ UCC; ASTM D1970 named standard; 10–15 yr/25–30%/50% → contractor-consensus thresholds. No invented numbers.
- [x] **Counted plurals match items:** "4 chimney flashing failures: …" → exactly 4 enumerated; "4 transitions — apron, two sidewall step runs, upslope" → 4; subServices=4, processSteps=6, signs=6, faqs=6, pricing.factors=5, reasons=5.
- [x] **approachSubheadings.length === approachContent.length** → 2 === 2.
- [x] **Schema field counts valid:** overview 2 (2–5), signs 6 (4–10), approach 2 (2–5), residential.content 2 (2–5), commercial.content 2 (2–5), processSteps 6 (4–8), faqs 6 (4–10).
- [x] **credentialsHighlight exact:** `['NJ HIC Licensed','Insured','Free Roof Inspections','Local Essex County Roofers']`.
- [x] **No outbound links / URLs** in any prose; all attribution is name-only.
- [x] **No pronoun co-reference to entities:** repeats "the chimney", "the counter flashing", "the cricket", "Newark Quality Roofing"; no it/they/this/that/there bound to an entity.
- [x] **No hype words** (best/leading/trusted/premier/top-rated/unbeatable/amazing/seamless). 0 hits.
- [x] **No de-fab literals** (24/7, same-day, GAF Certified, 0% financing, top-rated, 500+, 15+ years, [VERIFY]/[UNVERIFIED]). 0 hits. No manufacturer-certification claim.
- [x] **Commercial block honest:** framed as multi-family / mixed-use / small commercial chimney/chase transition repair; does not over-claim a commercial specialty; cites the 25%/permit threshold honestly.
- [x] **One macro topic, linear vector:** every section stays on chimney flashing repair, H1→closing; primary n-gram in opener and in whyChooseUs/pricing close.
- [x] **Parses as one array element:** node-eval succeeds; file = `// ─── 2. … ───` + `{` … `},`. Single quotes; typographic apostrophes (’) and en-dashes (–) used so no straight-apostrophe parse break.

## Output files
- `/Users/akungapaul/Projects/Newarkqualityroofing/.planning/content-system/batch5/chimney-flashing-repair.snippet.ts`
- `/Users/akungapaul/Projects/Newarkqualityroofing/.planning/content-system/batch5/chimney-flashing-repair.md`
