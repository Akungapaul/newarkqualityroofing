# Metal Roof Replacement — Draft Doc (Batch 8, entry #11/15)

**serviceId:** `metal-roof-replacement`
**category:** replacement-sub-pages
**isResidential:** true · **isCommercial:** true (both blocks written)
**Macro topic:** upgrading a roof to new metal (standing-seam / metal-panel / metal-shingle). Primary n-gram "metal roof replacement" repeats in the opening directAnswer and the closing whyChooseUs/pricing sections.

---

## Rendered-heading → content-field map

| Rendered H-tag (from HEADING_CONFIG) | Content field that answers it |
|---|---|
| H1 "Who Provides Metal Roof Replacement in Newark?" | `directAnswer` (40 words) |
| H2 "What Metal Roof Replacement Do We Provide?" | `overview[]` (2) + `subServices[]` (5) |
| H2 "How Do You Know If You Need Metal Roof Replacement?" | `signs[]` (8), label `signsHeading` |
| H2 "How Do Our Roofing Contractors Perform Metal Roof Replacement?" | `approachContent[]` (3) / `approachSubheadings[]` (3) |
| H2 "How Much Does Metal Roof Replacement Cost?" | `pricing.range` + `pricing.factors[]` (5) |
| H2 "Should You Repair or Replace Your Roof?" | `faqs[0]` "Should you repair or replace your roof?" |
| H2 "Why Choose Our Roofing Company for Metal Roof Replacement?" | `whyChooseUs.reasons[]` (4) |
| Residential block | `residential{heading,content(2),ctaLabel}` |
| Commercial block | `commercial{heading,content(2),ctaLabel}` |
| Process | `processSteps[]` (6) |
| FAQ | `faqs[]` (7) |

---

## Named sources → exact figure attributed

| Named source | Figure / fact attributed to it in the copy |
|---|---|
| **InterNACHI life-expectancy chart** | Metal 40–80 yrs; copper 70-plus yrs; 3-tab asphalt 20 yrs; architectural asphalt 30 yrs; metal panel & metal shingle 40–80 yrs |
| **This Old House** | Standing-seam metal 40–70 yrs; standing-seam conceals fasteners |
| **NRCA** | 1 sq ft net-free vent per 150 sq ft attic floor; proper ventilation extends roof life up to 25%; metal panel >100 ft needs engineered expansion zone |
| **ARMA** | (with NRCA) 1 sq ft / 150 sq ft vent ratio; (with InterNACHI) tear-off exposes deck a recover hides |
| **N.J.A.C. 5:23-6.4 (NJ Rehabilitation Subcode)** | Full removal required when covering is water-soaked / wood / slate / tile or ≥2 layers; metal-over-asphalt recover limits |
| **N.J.A.C. 5:23-2.7 / NJ Uniform Construction Code** | 1–2 family re-roof = ordinary maintenance, no permit; commercial roof / structural change requires permit; commercial 25%-in-12-months repair exemption |
| **IRC R905.1.2 / International Residential Code** | Ice barrier from eave to ≥24 in inside exterior wall line |
| **GAF** | Granule loss >30% of surface = beyond-repair rule-of-thumb |
| **Owens Corning warranty guidance** | Material warranty (factory defects) separate from written workmanship warranty (labor) |
| **NOAA** | Severe thunderstorm threshold = 58 mph wind gusts |
| **Josten Roofing / NJ guide pricing** | NJ metal $9.00–$16.00+/sq ft, ~$1,130/square; architectural asphalt $6.50–$11.00/sq ft |
| **HomeGuide** | NJ ranges sit 10–40% above national figures |
| **U.S. Department of Energy** | Reflective roof stays >50°F cooler on a sunny summer afternoon; reduces peak summer cooling demand; winter heating offset; net annual benefit depends on insulation + climate |
| **Integrity Home Exteriors** | Written-estimate documentation guidance; verification step |
| Contractor-consensus (roofing industry guidance) | 25–30% area rule; 50% cost rule (named as consensus, not a fabricated number) |

---

## Self-audit checklist

- [x] **Answer-first bolded openers** — `directAnswer` (40 words) + first element of `overview`, `approachContent`, `residential.content`, `commercial.content`, every `signs[]` item, and every `faqs[].answer` opens with a bolded definitive answer clause. Second paragraphs of multi-para fields are unbolded continuations (matches gold exemplar).
- [x] **directAnswer ≤40 words** — exactly 40 words.
- [x] **Zero modality in declaratives** — grep of `will|should|must|might|may|would|could|need to|have to` outside `faqs[].question` returns nothing. (`needs` = present-tense indicative verb "a panel >100 ft needs an expansion zone"; "Do you need a permit" is an exempt FAQ question.)
- [x] **Every number named-sourced** — 40–80 yr & 70+ & 20 & 30 (InterNACHI); 40–70 (This Old House); 1 sq ft/150 sq ft & up-to-25% & >100 ft (NRCA); >30% (GAF); 24 in (IRC R905.1.2); 58 mph (NOAA); $9.00–$16.00 / $1,130 / $6.50–$11.00 (Josten/NJ guides); 10–40% (HomeGuide); >50°F & 11–27%-not-used (DOE, surface-temp only, no annual-bill %); 25–30% & 50% (contractor-consensus); 2/12-month-25% (N.J.A.C. 5:23-2.7).
- [x] **Counted plurals introduced with exact integer** — "installs 3 metal roof systems", "from 3 classes", "matches the metal system to the roof from 3 classes".
- [x] **approachSubheadings.length === approachContent.length** — 3 === 3.
- [x] **No de-fab literals** — no 24/7, same-day, GAF Certified, 0% financing, top-rated, 500+, N-years-experience, fabricated rating/phone/guarantee. `financingNote` is a free-written-estimate / payment-options-discussed line with no rate or term.
- [x] **No outbound links / URLs** — grep for `http`, `www.`, `<a href` returns nothing.
- [x] **No pronoun co-reference** — repeats "the metal", "the deck", "a metal roof", "Newark Quality Roofing", "the panel" rather than it/they/this.
- [x] **credentialsHighlight EXACT** — `['NJ HIC Licensed','Insured','Free Roof Inspections','Local Essex County Roofers']`.
- [x] **No banned hype words** (best/leading/trusted/premier/top-rated/seamless-as-praise).
- [x] **Material-page caution honored** — every lifespan attributed to InterNACHI (and This Old House for standing-seam); every NJ $/sq-ft attributed to Josten Roofing / NJ guides; no invented "% of failures" figure (the UNVERIFIED 8%/74%/68% metal figures are NOT used — fastener/corrosion failure modes stated qualitatively).
- [x] **Energy framing qualitative + NJ heating caveat** — only DOE surface-temperature fact (>50°F cooler) + "reduces peak summer cooling demand" used; explicit winter-heating-offset caveat included; NO annual-bill % asserted; EPA 11–27% peak-cooling figure deliberately omitted to avoid mis-restatement.
- [x] **Overlay/recover honesty** — the "can a metal roof go over an existing roof" FAQ presents recover as permitted ONLY over a single sound asphalt layer with a sound deck, and states the tear-off is required over wood/slate/tile/≥2 layers/water-soaked deck per N.J.A.C. 5:23-6.4; tear-off framed as exposing deck a recover hides (ARMA/InterNACHI). Recover is NOT presented as equal to a tear-off.
- [x] **Insurance / public-adjuster / deductible** — N/A for this material page: no claim-handling, no public-adjuster, no deductible-waiver, no guaranteed-approval, no "free roof" replacement claim made. ("Free roof inspections" is the legitimate NQR business fact, distinct from a banned "free roof" replacement promise.)
- [x] **Repair-vs-replace FAQ present** — `faqs[0]` answers the rendered "Should You Repair or Replace Your Roof?" H2 with the 25–30% area + 50% cost consensus rules and the metal-vs-asphalt lifespan contrast.
- [x] **Parse-validated** — assembled inside the array wrapper, compiles clean under `tsc --noEmit` and parses under node; all schema counts within Zod bounds.
