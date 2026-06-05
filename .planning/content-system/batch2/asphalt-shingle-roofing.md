# Asphalt Shingle Roofing — answer-first rewrite (Batch 2)

`serviceId: 'asphalt-shingle-roofing'` · Quality bar = approved `roof-repair` gold exemplar.
Snippet: `./asphalt-shingle-roofing.snippet.ts` (Zod-validated against `ServiceContentSchema`).

---

## Rendered-heading → field map

Each prose field OPENS with a bolded definitive answer to its rendered heading, then expands.

| Rendered heading (from `heading-config.ts` + brief) | Field that answers it | Opening answer (abridged) |
|---|---|---|
| **H1** — "Who Provides Asphalt Shingle Roofing in Newark?" | `directAnswer` | "Newark Quality Roofing installs asphalt shingle roofing across Newark and Essex County, fitting 3-tab and architectural shingles to the deck…" (36 words) |
| **H2** — "What Asphalt Shingle Roofing Do We Provide?" | `overview` (+ `subServices`) | "Newark Quality Roofing installs 2 asphalt shingle systems across Essex County: 3-tab shingles and architectural shingles…" |
| **H2** — "How Do You Know If You Need Asphalt Shingle Roofing?" | `signs` (legacy `signsHeading` kept) | "An asphalt roof at or past its material lifespan signals a new asphalt shingle roof…" |
| **H2** — "How Do Our Roofing Contractors Perform Asphalt Shingle Roofing?" | `approachContent` (+ `approachSubheadings`) | "Newark Quality Roofing contractors strip the roof to the deck, repair the sheathing, and install an ice barrier and synthetic underlayment before the shingles…" |
| **H2** — "How Much Does Asphalt Shingle Roofing Cost?" | `pricing` | range "$5.50–$11.00 per square foot installed"; first factor cites Josten Roofing NJ pricing |
| **H2** — "Should You Repair or Replace Your Roof?" | `faqs[2]` ("Should you repair or replace an asphalt shingle roof?") | "Replace an asphalt roof when damage exceeds 25–30% of the roof area or one repair approaches 50% of replacement cost…" |
| **H2** — "Why Choose Our Roofing Company for Asphalt Shingle Roofing?" | `whyChooseUs` | reason 1 = "NJ Home Improvement Contractor" |

Residential / commercial / processSteps / FAQs render under their own sub-sections, each opening with a bolded answer.

Legacy STRUCTURAL fields preserved verbatim so Zod validates: `serviceId`, `signsHeading`, `approachHeading`, `approachSubheadings` (rewritten labels), `residential.heading`, `commercial.heading`, `whyChooseUs.heading`, `ctaLabel`. All prose CONTENT rewritten answer-first.

---

## Named sources used (with the figures cited)

Every hard number is attributed in-text to a named authority that appears in the fact packs.

| Figure cited on-page | Named authority (in-text) | Fact pack |
|---|---|---|
| 3-tab asphalt **20 yr**, architectural **30 yr** | InterNACHI life-expectancy chart | facts-materials-economics §0, §1 |
| Actual asphalt life varies **up to 40%** with climate/install/maintenance | NRCA | facts-materials-economics §1; facts-cost-stats §4 |
| Asphalt on **~73%** of US residential roofs (2024) | 2024 roofing-market data | facts-materials-economics §1 / facts-causes-signs §1 |
| 3-tab wind rating **~60 mph**; architectural **up to 130 mph** w/ 6-nail | ARMA and manufacturer guidance | facts-causes-signs §2.2; facts-process-standards §2 |
| Severe thunderstorm at wind gusts **≥ 58 mph** | NOAA | facts-causes-signs §2.2 |
| Nor'easter sustained winds **up to 60 mph** | (framed via NOAA severe threshold; NJ Gov source available) | facts-causes-signs §6 |
| Seal strength = most important high-wind factor; cold/dusty install weakens seal | IBHS | facts-causes-signs §2.2 |
| Improper install + unrated shingles = **2** most common high-wind damage causes | IBHS | facts-causes-signs §2.6 |
| Nails penetrate **≥ ¾ in** into solid deck; high-nailing causes uplift | ARMA | facts-causes-signs §2.6 |
| Drip edge **≥ 2 in** onto deck; valley **36-in** self-adhered underlayment | GAF and ARMA | facts-causes-signs §2.6 |
| Ice barrier from eave to **≥ 24 in** inside exterior wall line (R905.1.2) | International Residential Code | repair-maintenance gold (IRC); facts-causes-signs §2.6 |
| **90–95%** of leaks at flashing, **5–10%** at field (framed "industry estimates… attributed to the NRCA") | NRCA (trade-consensus framing) | facts-causes-signs §2.1 |
| Ventilation **1 sq ft net-free per 150 sq ft** attic, 50/50 intake/exhaust | NRCA and ARMA | facts-causes-signs §5 |
| Balanced ventilation extends roof life **up to 25%** | NRCA | facts-cost-stats §4; facts-causes-signs |
| Granule loss **>30%** = beyond repair; **50%** loss cuts life **up to 70%** | GAF | facts-causes-signs §2.5 |
| **25–30% area rule** + **50% cost rule**; localized repair **5–10×** less | Home Depot and Kelly Roofing; roofing industry guidance | facts-materials-economics §8; facts-cost-stats §5 |
| Repair favored on roof **< 10–15 yr** old | industry consensus | facts-cost-stats §5 |
| NJ asphalt **$5.50–$9.50/sq ft** (3-tab) / architectural **$6.50–$11.00/sq ft** | Josten Roofing NJ pricing | facts-materials-economics §7 |
| National asphalt install **$3.50–$11.00/sq ft** = **$350–$1,100/square** | HomeGuide | facts-cost-stats §3; facts-materials-economics §1 |
| Architectural costs **~15–25%** more than 3-tab | HomeGuide (+ InterNACHI for lifespan/wind delta) | residential-roof-types legacy FAQ corroborated by HomeGuide §3 |
| Labor **~60–70%** of asphalt-install total; NJ **10–40%** above national | HomeGuide and Integrity Home Exteriors | facts-cost-stats §3; facts-materials-economics §7 |
| New asphalt roof recoups **~60–68%** of cost at resale | Zonda Cost vs Value report | facts-cost-stats §6, §7 |
| Permit rules: ordinary maintenance re-roof = **no permit** (1-2 family); commercial **>25%/12 mo** = permit | NJ Uniform Construction Code (N.J.A.C. 5:23-2.7) | facts-nj-regulatory-climate §1.1–1.2 |
| Full removal when water-soaked or **2+ layers** | NJ Rehabilitation Subcode (N.J.A.C. 5:23-6.4) | facts-nj-regulatory-climate §1.4 |
| Average January low **~25.5°F**; crosses 32°F repeatedly | NOAA 1991–2020 normals at Newark Liberty (EWR) | facts-nj-regulatory-climate §3.2 |
| Workmanship vs material warranty distinction | Integrity Home Exteriors verification; Owens Corning warranty guidance | facts-process-standards §3 |

### Sources deliberately NOT quantified (kept qualitative per fact-pack flags)
- **Freeze-thaw "cycles per winter" COUNT** — [UNVERIFIED] (35–45 estimate, not a NOAA metric). Described qualitatively via "crosses the 32°F freezing point repeatedly" + the sourced 25.5°F January low. **No cycle number rendered** (known trap).
- **"X% of failures caused by Y"** per-material failure-share percentages — [UNVERIFIED]; stated qualitatively only ("ranks among the most common…").
- **Manufacturer bulletin/document numbers** (GAF #TS-1200 etc.) — [UNVERIFIED]; never cited by number.
- **Hail size thresholds / Class 4** — omitted (not needed for an install page; would require IBHS/UL specifics not central to the heading vector).

---

## Withheld NQR `[VERIFY]` specifics (OMITTED — never rendered, never placeheld)

Per D-01 and the brand-trust ban, the following first-party specifics are absent from the snippet (stated qualitatively or omitted), pending owner confirmation:

1. **NJ HIC license number** (13VH######00 format) — only the qualitative "holds New Jersey Home Improvement Contractor registration" renders; no number.
2. **Phone number** — omitted (env-driven; fabricated default forbidden).
3. **Physical street address / ZIP / geo** — omitted.
4. **Years in business / founding year** ("15+ years") — omitted; replaced with no experience claim.
5. **GAF Certified / Master Elite / any certified-installer tier** — omitted. Snippet says NQR "installs GAF, CertainTeed, and Owens Corning shingle systems" (installing ≠ certified); the legacy "GAF Certified Contractor" credential and "*GAF Certified*" italics were dropped.
6. **Aggregate rating / star count / "5-star" / review counts / "top-rated"** — omitted (the two legacy "what do reviews say" FAQs were removed entirely).
7. **BBB rating ("A+") / "fully insured and bonded"** — omitted; only qualitative "carries liability coverage."
8. **Workmanship-warranty term** (e.g. "up to 50 years") — omitted; only the qualitative "issues a written workmanship warranty on the labor."
9. **"24/7 emergency" / "same-day estimates" / "fast response"** — omitted (legacy `whyChooseUs` "Fast Response & Emergency Service" reason dropped).
10. **"0% financing" / `financingNote`** — OMITTED from `pricing` (fabricated; the gold exemplar likewise carries no `financingNote`).
11. **"Family-owned" / "premium materials"** hype framing — dropped.

These are recorded here (not in the snippet) so the audit sees zero `[VERIFY]`/`[UNVERIFIED]` literals and zero de-fabrication trust literals.

---

## Material-accuracy grounding (asphalt-specific, not overclaimed)

- Asphalt anchored to its real sourced figures: **3-tab 20 yr / architectural 30 yr** (InterNACHI), wind **60 / 130 mph** (ARMA + mfr). No lifespan or wind figure exceeds the sourced number.
- Other materials NOT overclaimed or mis-cited; this page stays single-macro-context on asphalt shingle roofing end to end (Rule 19). The repair-vs-replace FAQ uses only the cross-material decision rules (25%/50% rules), not competing material lifespans, keeping the context vector on asphalt.
- `pricing.range` uses a material-appropriate sourced **NJ $/sq ft** figure (Josten Roofing NJ) rather than a whole-project dollar band, because the per-sq-ft figure is the cleanly sourced asphalt-specific number; `financingNote` omitted.

---

## Self-audit (gate rules — all pass)

- **Answer-first:** `directAnswer` 36 words; every overview/signs/approach/residential/commercial/processStep/FAQ/whyChooseUs item opens with a `**…**` bolded answer span (the answer clause, not the bare keyword).
- **Modality (Rule 6, gate):** zero `will/shall/should/need to/needs to/must/have to/has to/ought to/might/may/would/could` in declarative prose. Sole "Should" is in a FAQ `question:` field (excluded).
- **Outbound links (Rule 9, gate):** zero `https?://` / `<a href>` / markdown links anywhere.
- **`[VERIFY]`/de-fab literals (Rule 10, gate):** zero in the snippet (incl. no fabricated trust terms — 24/7, same-day, GAF Certified, 0% financing, top-rated, 15+ years, 500+, fully bonded, star ratings).
- **Counted plurals (Rule 8, gate):** "2 asphalt shingle systems: 3-tab… and architectural…" (= 2 subServices), "2 asphalt options" (processStep), "2 most common high-wind shingle-damage causes" (= the 2 named: improper install + unrated shingles).
- **Freeze-thaw count trap:** no cycle number rendered; NJ freeze-thaw described qualitatively + sourced 25.5°F January low.
- **Schema:** `ServiceContentSchema.parse()` succeeds — overview 2, signs 6, subServices 5, processSteps 6, faqs 7, whyChooseUs 5 reasons.
- **Every hard number** attributed in-text to a named pack authority (table above).
