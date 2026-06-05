# Historic Roof Restoration — Draft Doc (Batch 7, entry 2 of 3)

**serviceId:** `historic-roof-restoration`
**category:** design-consultation
**flags:** isResidential=true, isCommercial=true (both blocks written)
**Validation:** zod `ServiceContentSchema` PASS; `tsc --noEmit` clean as an array element; modality CLEAN; de-fab CLEAN; no outbound links.

---

## Rendered-heading → content-field map

| Rendered H-tag (HEADING_CONFIG) | Field that answers it |
|---|---|
| H1 "Who Provides Historic Roof Restoration in Newark?" | `directAnswer` (40 words, bolded) |
| H2 "What Historic Roof Restoration Do We Provide?" | `overview[]` (2) + `subServices[]` (4) |
| H2 "How Do You Know If You Need Historic Roof Restoration?" | `signs[]` (7); label `signsHeading` |
| H2 "How Do Our Roofing Contractors Perform Historic Roof Restoration?" | `approachContent[]` (3) + `approachSubheadings[]` (3) |
| H2 "How Much Does Historic Roof Restoration Cost?" | `pricing.range` + `pricing.factors[]` (5) |
| H2 "Should You Repair or Replace Your Roof?" | `faqs[0]` "Should you repair or replace a historic slate roof?" |
| H2 "Why Choose Our Roofing Company for Historic Roof Restoration?" | `whyChooseUs.reasons[]` (5) |
| Residential block | `residential{heading,content(2),ctaLabel}` |
| Commercial block | `commercial{heading,content(2),ctaLabel}` |
| Process | `processSteps[]` (6) |
| FAQ | `faqs[]` (6) |

Primary n-gram "historic roof restoration" appears in the opening `directAnswer` and the closing `whyChooseUs` heading/reasons (linear context vector held end to end).

---

## Named sources → exact figure / claim attributed

| Named source | Figure / claim used on page |
|---|---|
| Secretary of the Interior's Standards for Rehabilitation, **Standard 6** | Repair rather than replace; replacement matches old in design, color, texture, material (the governing in-kind principle) — directAnswer, overview[0], approach[0], signs[3], faq0, faq3, whyChooseUs |
| Secretary of the Interior's Standards, **Standard 2** | Retain historic character (interior character-defining fabric) — signs[6] |
| **NPS Preservation Brief 4** (Roofing for Historic Buildings) | Roof shape + character-defining features (dormers, cresting, finials, snow guards); document/measure/record; 4 historic materials matched in kind; terne required periodic painting — overview, signs[4], faq3, processSteps |
| **NPS Preservation Brief 29** (slate) | **20%** broken/missing/sliding slate = full-replacement threshold; non-ferrous (copper/stainless) fasteners, never plain/galvanized; ripper + copper strip/slate hook; never coat/seal/paint; do not walk on slate; flashing in copper / lead-coated copper / terne-coated stainless — signs[0], signs[1], approach[1], subServices[0], processSteps, faq0, faq4 |
| **NPS Preservation Brief 30** (clay tile) | Clay tile **~100-year** life expectancy; match profile, color, glaze, texture; copper fasteners; failures from fasteners/flashing/sheathing; do not walk on high-profile tile — subServices[1], signs[2], faq4 |
| **NPS Preservation Brief 19** (wood/cedar shingle) | Match handsplit/sawn shingle in size/shape/texture/exposure; **red cedar must NOT use copper nails** (use hot-dipped zinc-coated/aluminum/stainless) — subServices[2], approach[1], residential |
| **National Slate Association** | Premium slate commonly **100-plus years** — subServices[0], faq4 |
| **InterNACHI Standard Estimated Life Expectancy Chart** | Slate **60–150 yr**; copper **70-plus yr**; wood shingle **~25 yr** — subServices, faq4 |
| **Copper Development Association** | A properly designed/installed copper roof = service life **in excess of 100 years**; standing/batten/flat-seam copper — subServices[3], signs[4], commercial, faq4 |
| **N.J.S.A. 40:55D-107** (NJ Municipal Land Use Law) | Municipal HPC issues a Certificate of Appropriateness; typically required before exterior roof work on a designated landmark / contributing property in a local district — signs[5], approach[2], residential, commercial, processSteps, faqs, whyChooseUs |
| **National Park Service** + **NJ DEP Historic Preservation Office** | Register listing alone places no restriction on a private owner using private funds — approach[2], faq1 |
| **IRS** + **National Park Service** | Federal **20%** Historic Rehabilitation Tax Credit (IRC §47) is income-producing-only; owner-occupied residences do not qualify; in effect in 2026 — residential, commercial, faq5 |
| **NJEDA** (Historic Property Reinvestment Program) | State historic credit applies to income-producing historic properties; NJEDA/NPS/tax professional determine eligibility (no caps/percentages stated — time-sensitive per pack §0) — commercial, faq5 |
| **N.J.A.C. 5:23-2.7 / NJ Uniform Construction Code** | Detached 1-2 family in-kind re-roof = ordinary maintenance, no construction permit; COA separate from building permit — residential, approach[2], faq2 |
| **Borough of Glen Ridge Historic Preservation Commission** | HPC established by ordinance **1987**; district covers **over 90%** of the Borough under a local ordinance — residential |
| **HomeGuide** (slate / tile repair cost data) | Slate restoration **$2,500–$10,000+**; individual slate **$50–$300**; slate flashing/fastener **$400–$3,000**; clay tile repair **$500–$2,500**, tile **$50–$300** each — pricing.factors |
| NJ regional cost guidance | NJ ranges **~10–40%** above national — pricing.factors |

All hard numbers above are present in the fact packs. No cost figure was invented (pack §0 rule 12: prices pulled only from `facts-materials-economics.md` §2 slate / §6 tile / §7 NJ).

---

## Batch-7 cautions honored

- NQR framed as a roofing contractor working **within** the Secretary's Standards and **coordinating with** the architect / municipal HPC / NJ DEP HPO — never the SHPO, never a tax advisor, never a "certified historic restoration" credential holder.
- Register-listing-alone-does-NOT-bar-reroof stated precisely (faq1, approach[2]); binding gate = local ordinance + COA.
- Federal §47 / NJ HPRP framed **income-producing-only**, owner-occupied excluded; §47 stated as **in effect in 2026** (not repealed). No percentages/caps on the state credit; pending S3545 homeowner credit NOT mentioned.
- Per-material fastener split kept honest: copper/stainless for slate + clay tile; **never copper on red cedar** (approach[1], subServices, residential).
- "do not walk on slate / high-profile clay tile; never coat/seal/paint slate" carried (approach[1], whyChooseUs).
- No Newark code section number cited (pack Gap §2); no terne lifespan number (pack Gap §3); no district slate-concentration claim as fact (pack Gap §5); Glen Ridge stated by ordinance, not by listing.

---

## Self-audit checklist

- [x] **Answer-first bolded openers** — directAnswer (40w) + overview[0] (31w) + every signs[] + every approachContent[] + residential.content[0] (37w) + commercial.content[0] (38w) + every faqs[].answer first sentence bolded and ≤40 words (verified by script: all ≤40).
- [x] **Zero modality in declaratives** — grep for will/should/need to/have to/must/might/may/would/could outside `faqs[].question` returns CLEAN. (FAQ questions "Should you…/Do you need…/Does…/Can…" are the exempt interrogatives.)
- [x] **Every number named-sourced** — 20% (Brief 29), ~100 yr (Brief 30), 60–150 / 70+ / 25 yr (InterNACHI), 100+ yr premium slate (NSA), >100 yr copper (CDA), 20% credit / §47 (IRS/NPS), 1987 / >90% (Glen Ridge HPC), $2,500–$10,000+ / $50–$300 / $400–$3,000 / $500–$2,500 (HomeGuide), 10–40% (NJ regional). No bare number.
- [x] **approachSubheadings.length === approachContent.length** — both 3.
- [x] **Counted plurals** — "4 historic roof materials" / "4 materials" introduce the 4-item set.
- [x] **No de-fab literals** — grep CLEAN (no 24/7, same-day, GAF Certified, 0% financing, top-rated, 500+, certified historic restoration, preservation-certified, [VERIFY]/[UNVERIFIED]). Note: "income-producing certified historic structures" is the IRS statutory **building class** term (§47), not an NQR credential — allowed and required.
- [x] **No outbound links / URLs** — grep CLEAN.
- [x] **No entity pronouns** — repeats "the slate", "the Certificate of Appropriateness", "Newark Quality Roofing"; grep for standalone they/them/there returns none.
- [x] **credentialsHighlight exact** — `['NJ HIC Licensed','Insured','Free Roof Inspections','Local Essex County Roofers']`.
- [x] **Schema fields complete** — serviceId, directAnswer, overview(2), subServices(4), signsHeading, signs(7), approachHeading, approachContent(3), approachSubheadings(3), residential, commercial, processSteps(6), faqs(6), credentialsHighlight(4), pricing{range,factors(5)}, whyChooseUs{heading,reasons(5)}. zod PASS.
- [x] **One macro topic** — "historic roof restoration" held H1→close; n-gram in opening answer and closing whyChooseUs.
