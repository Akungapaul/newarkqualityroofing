# Roof Waterproofing — Draft Doc (Batch 5, entry #9 of 10)

serviceId: `roof-waterproofing` · category: components-specialty · isResidential=true · isCommercial=true
Primary n-gram: **roof waterproofing** (opens directAnswer + overview; closes in whyChooseUs + pricing).

---

## Rendered-heading → content-field map

| Rendered H-tag (from HEADING_CONFIG) | Content field that answers it |
|---|---|
| H1 "Who Provides Roof Waterproofing in Newark?" | `directAnswer` |
| H2 "What Roof Waterproofing Do We Provide?" | `overview[]` + `subServices[]` |
| H2 "How Do You Know If You Need Roof Waterproofing?" | `signs[]` (label = `signsHeading`) |
| H2 "How Do Our Roofing Contractors Perform Roof Waterproofing?" | `approachContent[]` / `approachSubheadings[]` |
| H2 "How Much Does Roof Waterproofing Cost?" | `pricing.range` + `pricing.factors[]` |
| H2 "Should You Repair or Replace Your Roof?" | `faqs[]` item 4 ("Should you repair or replace your roof?") |
| H2 "Why Choose Our Roofing Company for Roof Waterproofing?" | `whyChooseUs.reasons[]` |
| Residential block | `residential{heading,content,ctaLabel}` |
| Commercial block | `commercial{heading,content,ctaLabel}` |
| Process | `processSteps[]` |
| FAQ | `faqs[]` |
| Related services / KB / Schedule | template-rendered (no field) |

---

## Named sources used → exact figure attributed

| Named source | Exact figure / claim attributed in prose |
|---|---|
| Insurance Institute for Business & Home Safety (IBHS) | A sealed roof deck cuts water entry into the home by **as much as 95%** vs. an unsealed deck (IBHS sealed-deck research — Brown-Giammanco / Anne Cope, P.E.) |
| IBHS (Anne Cope, P.E.) | On a **2,000-sq-ft** unsealed roof stripped of shingles, **up to 750 gallons** of water per inch of rain enter the attic (~nine bathtubs) |
| IRC Section R905.1.2 (NJ-enforced via N.J.A.C. 5:23) | Ice barrier from the eave to **at least 24 inches** inside the exterior wall line; **at least 36 inches** along slope on roofs **8:12** or steeper |
| ASTM International (ASTM D1970) | Self-adhering polymer-modified bitumen ice-and-water membrane **self-seals around fasteners** |
| ASTM International (ASTM D226) | **#15 / #30** asphalt-saturated felt is water-resistant (not waterproof) secondary barrier |
| NRCA / ARMA | Low-slope roof needs **at least ¼ inch per foot** of slope to drain; ponding **>48 hours** counts as a defect |
| NJ Uniform Construction Code (N.J.A.C. 5:23-2.7) | Roof-covering work on a detached 1–2-family home = ordinary maintenance (no permit); commercial work touching **>25%** of total roof area in 12 months requires a permit |
| Contractor-consensus thresholds | **25–30%** area rule / **50%** cost rule (repair-vs-replace FAQ) |
| NJ Division of Consumer Affairs / Contractors Registration Act | NJ HIC registration + required liability coverage (whyChooseUs) |

All attribution is name-only in prose (no outbound links, no URLs).

---

## Fact-grounding notes (facts-components-specialty.md §9 + §0)

- FLAGSHIP stat used twice (overview + approach + FAQ): IBHS sealed-deck "as much as 95%" + "up to 750 gallons / inch of rain on a 2,000-sq-ft roof (~nine bathtubs)."
- Ice barrier carries BOTH the 24-in-inside-wall rule AND the 36-in-up-slope add-on on 8:12+ roofs, because NJ enforces the 2021 IRC (§0.4) — not the 2024 IRC that dropped the 36-in rule.
- Felt vs. membrane: D226 felt = water-resistant; D1970 self-adhered = self-seals around fasteners (the waterproofing layer). Synthetic <0.1 perm figure NOT used (kept qualitative to avoid an unneeded secondary-source number).
- Low-slope: NRCA min design slope ¼ in/ft; ponding >48 hr = defect.
- **No dollar cost asserted** — §9 has no sourced waterproofing/deck-sealing price (banned), so `pricing.range` = "Free written estimate; cost varies by roof size and method" and every `factors[]` item is qualitative/method-driven with a named source, zero invented dollar figure.
- No manufacturer-certification claim. Membrane brands named only as systems NQR installs/services (Firestone, Carlisle, Johns Manville) — consistent with gold-exemplar commercial block.

---

## Self-audit checklist

- [x] **Answer-first bolded openers** — directAnswer + first sentence of every overview/signs/approach/residential/commercial/FAQ/processStep-implicit answer leads with a `**bolded**` definitive clause (verified: all first-sentence leads start with `**`). directAnswer = 34 words / 220 chars (≤40 w / ≤320 chars).
- [x] **Zero modality in declaratives** — grep `\b(will|should|need to|have to|must|might|may|would|could)\b` returns ONE hit: `faqs[3].question` "Should you repair or replace your roof?" (FAQ question fields are exempt). All declarative prose rephrased to indicative present (e.g., "requires," "runs," "seals," "needs"). No "must" in declaratives — IRC rules phrased as "requires."
- [x] **Every number named-sourced** — 95% + 750 gal + 2,000 sq ft → IBHS; 24 in / 36 in / 8:12 → IRC R905.1.2 (NJ UCC); ASTM D1970 / D226 → ASTM International; ¼ in/ft + 48 hr → NRCA/ARMA; 25–30% / 50% → contractor-consensus; >25% area + N.J.A.C. 5:23-2.7 → NJ UCC. No invented numbers.
- [x] **approachSubheadings === approachContent length** — 2 === 2.
- [x] **No de-fab literals** — grep for 24/7, same-day, GAF Certified, 0% financing, top-rated, 500+, 15+ years, [VERIFY], [UNVERIFIED] → none. No license number, no fabricated rating/phone/address.
- [x] **No outbound links / URLs** — grep `https?://|www\.|](` → none.
- [x] **credentialsHighlight exact** — `['NJ HIC Licensed','Insured','Free Roof Inspections','Local Essex County Roofers']`.
- [x] **Counted plurals** — "waterproofs 4 roof zones," "IBHS-approved methods" enumerated inline.
- [x] **No pronoun co-reference** — repeats "the deck," "the ice barrier," "the membrane," "Newark Quality Roofing."
- [x] **No hype words** — none of best/leading/trusted/premier/top-rated/seamless-as-praise.
- [x] **Macro topic discipline** — "roof waterproofing" / "sealed deck" runs H1 → final section; opening + closing both carry the primary n-gram.
- [x] **Schema cardinalities** — overview 2, subServices 4, signs 6, approachContent 2, residential 2, commercial 2, processSteps 6, faqs 6, pricing.factors 5, whyChooseUs.reasons 4. Snippet parses as a single array element (node eval OK).
