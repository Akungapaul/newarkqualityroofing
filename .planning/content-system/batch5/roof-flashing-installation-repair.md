# Roof Flashing Installation Repair — Draft Doc (Batch 5, entry 1/10)

**serviceId:** `roof-flashing-installation-repair`
**Category:** components-specialty · **isResidential:** true · **isCommercial:** true
**Primary n-gram:** "roof flashing" (opens directAnswer/overview, closes whyChooseUs/pricing)

---

## Rendered heading → content-field map

| Rendered H-tag (from HEADING_CONFIG) | Answered by field |
|---|---|
| H1 — "Who Provides Roof Flashing Installation Repair in Newark?" | `directAnswer` |
| H2 — "What Roof Flashing Installation Repair Do We Provide?" | `overview[]` + `subServices[]` (5 sub-services naming 8 types) |
| H2 — "How Do You Know If You Need Roof Flashing Installation Repair?" | `signs[]` (6) under `signsHeading` label |
| H2 — "How Do Our Roofing Contractors Perform Roof Flashing Installation Repair?" | `approachContent[]` (2) + `approachSubheadings[]` (2) |
| H2 — "How Much Does Roof Flashing Installation Repair Cost?" | `pricing.range` + `pricing.factors[]` (5) |
| H2 — "Should You Repair or Replace Your Roof?" | `faqs[]` item #3 ("Should you repair or replace your roof?") |
| H2 — "Why Choose Our Roofing Company…?" | `whyChooseUs.reasons[]` (4) |
| Related services / KB / Schedule | template-rendered (no field) |
| Residential block | `residential{heading, content[2], ctaLabel}` |
| Commercial block | `commercial{heading, content[2], ctaLabel}` |
| Process | `processSteps[]` (5) |
| FAQ | `faqs[]` (6) |

---

## Named sources → exact figure/claim each is attributed to

| Named source | Figure / claim as stated in copy |
|---|---|
| NRCA (hedged, via "the roofing industry estimates… an industry estimate attributed to the NRCA") | "roughly 90–95% of roof leaks originate at flashing details and only 5–10% at the open shingle field" |
| IRC Section R905.2.8.5 | drip edge "extends at least 2 inches onto the deck, fastened no more than 12 inches on center with at least 2-inch end laps" at eaves and rakes |
| IRC Section R903.2.1 | kickout/diverter flashing "required where a sloped-roof eave meets a vertical sidewall"; flashing at roof-wall intersection |
| InterNACHI (+ shingle-manufacturer guidance) | step flashing = "one piece per shingle course"; "continuous one-piece strip… is a defective installation"; missing kickout → water in wall cavity |
| ASTM D1970 | self-adhered ice-and-water shield "self-seals around fasteners" under valley/penetration flashing |
| NRCA (chimney) | chimney flashing = "two-part base-and-counter" system (base/step woven into courses + counter set into masonry) |
| GAF (+ This Old House) | flashing failure modes — corrosion, wind-lift, "sealant alone dries and cracks within a few years"; rusted/lifted/bent flashing as common leak source |
| Modernize | flashing reseal / small section "$200–$500" |
| InterNACHI life-expectancy chart | "EPDM fails most often at the seams and TPO at the welded seams" (membrane context, commercial) |
| NRCA + ARMA | low-slope "needs at least ¼ inch per foot of slope to drain"; "ponding water remaining more than 48 hours counts as a defect" |
| N.J.A.C. 5:23-2.7 / NJ Uniform Construction Code | detached 1–2 family roof covering = ordinary maintenance, no permit; commercial >25% in 12 months requires a permit |
| Integrity Home Exteriors | written-estimate documentation; "labor accounts for roughly 60% of a repair total"; "NJ ranges sit 10–40% above national figures" |
| NJ Division of Consumer Affairs | NJ HIC registration requirement (whyChooseUs) |
| Contractors Registration Act | liability-coverage requirement (whyChooseUs) |

Product brands named (install-only, no certification claimed): **Firestone, Carlisle, Johns Manville** (commercial membrane systems) — mirrors gold-exemplar allowance.

---

## Numbers used, each with its in-text named source

- **90–95% / 5–10%** → hedged "industry estimate attributed to the NRCA" (§0.1 mandated framing — verbatim).
- **2 inches onto deck / 12 inches O.C. / 2-inch end laps** → IRC Section R905.2.8.5 (NOT 8–10 in — banned spec avoided).
- **25–30% area rule / 50% cost rule** → contractor-consensus thresholds (FAQ repair-vs-replace).
- **$200–$500** → Modernize flashing cost data.
- **¼ inch per foot / 48 hours** → NRCA and ARMA (commercial).
- **25% in a 12-month period** → N.J.A.C. 5:23-2.7, NJ Uniform Construction Code (commercial permit).
- **roughly 60% labor / 10–40% above national** → Integrity Home Exteriors.
- EPDM/TPO seam-failure → InterNACHI life-expectancy chart (qualitative, no invented %).

---

## Self-audit checklist

- [x] **Answer-first bolded openers** — every section's first sentence is a definitive ≤40-word answer wrapped in `**…**` (directAnswer, each overview[0], each signs[], each approachContent[], residential[0], commercial[0], each faqs[].answer). Bold wraps the ANSWER clause, not the bare keyword.
- [x] **directAnswer ≤40 words** — 33 words.
- [x] **Zero modality in declaratives** — `grep -E '\b(will|should|need to|have to|must|might|may|would|could)\b'` returns NOTHING across the whole snippet (FAQ questions also clean; one FAQ uses "Should you repair or replace" — exempt anyway).
- [x] **Every number named-sourced** — 90–95% (NRCA-hedged), 2 in/12 in/2 in laps (IRC R905.2.8.5), $200–$500 (Modernize), ¼ in/ft + 48 hr (NRCA/ARMA), 25%/12 months (N.J.A.C. 5:23-2.7), 25–30%/50% (contractor consensus), 60%/10–40% (Integrity Home Exteriors). No invented figures; no precise NRCA primary stat; no 8–10 in O.C.
- [x] **Counted plurals match** — "8 flashing types: step, counter, valley, apron, drip edge, kickout, vent-pipe boot, and chimney" = exactly 8 enumerated; "two-part" chimney system = base + counter.
- [x] **approachSubheadings.length === approachContent.length** — 2 === 2.
- [x] **Schema field counts** — overview 2 (2–5), subServices 5, signs 6 (4–10), approachContent 2 (2–5), residential.content 2, commercial.content 2, processSteps 5 (4–8), faqs 6 (4–10), pricing.factors 5, whyChooseUs.reasons 4.
- [x] **No de-fab literals** — no 24/7, same-day, GAF Certified, 0% financing, top-rated, 500+, 15+ years, fabricated rating/phone/address, no [VERIFY]/[UNVERIFIED]. (`$500+` in price range is a cost ceiling, not the banned "500+".)
- [x] **No certification claims** — brands named install-only (Firestone/Carlisle/Johns Manville); no "GAF Certified", "VELUX certified", "Master Elite".
- [x] **No outbound links / URLs** — `grep -E 'https?://|www\.|](' ` returns NOTHING.
- [x] **No entity pronoun co-reference** — repeats "the flashing", "the metal", "Newark Quality Roofing", "the kickout"; no it/they/this/that/there pointing at a named entity.
- [x] **No hype words** — no best/leading/trusted/premier/top-rated/seamless-as-praise.
- [x] **credentialsHighlight exact** — `['NJ HIC Licensed', 'Insured', 'Free Roof Inspections', 'Local Essex County Roofers']`.
- [x] **One macro topic, linear vector** — "roof flashing" leads the directAnswer and recurs through whyChooseUs/pricing; every section descends from the flashing H1.
- [x] **Single-quote TS object literal**, apostrophes escaped where present, en-dashes for ranges, leading `// ─── 1. … ───` comment, opens `{`, closes `},` for array drop-in.
