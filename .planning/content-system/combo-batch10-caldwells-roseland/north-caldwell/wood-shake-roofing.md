# north-caldwell / wood-shake-roofing — rewrite rationale

## De-fab literals cleared (from the current combo file)
- **Price-in-lead** — `overview[0]` "prices starting from $14,000–$30,000 and free estimates available today" → deleted; replaced with an answer-first, entity-grounded NQR-applied lead (figure-free). Price now lives only in the `pricing` field + cost FAQ.
- **`whyChooseUs`** — "NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties," "same-day estimates and 24/7 emergency response" → replaced with the registered-HIC / fully-insured factual reasons.
- **Fabricated fire claim** — current file's "Class C fire-treated shakes as standard / Class A fire-rated underlayment" → corrected to the verified facts: untreated cedar is **nonclassified** under UL 790 / ASTM E108 (NOT Class C), FR-treated = Class B/C, Class A = assembly-only (Class B FR shakes over a FR cap sheet), per CSSB Certi-Guard.
- **Invented self-stats / unsourced numbers** — "35-to-45-year service life," "deteriorate within fifteen to twenty years," "$800 to $1,500 per visit," wildlife-damage anecdotes, "Number 1 grade … three-quarters inch butt" → de-quantified or re-pinned to sourced figures (cedar shake 20–40 yr / shingle 30–50 yr per CSSB; single 25-yr "Wood" per InterNACHI; >25–30% cupped/split replacement threshold per industry consensus; flex test per InterNACHI).
- **Inline markdown self-links** — `[wood shake roofing](/wood-shake-roofing)`, `[cedar shake roofing](/cedar-shake-roofing)`, `[West Orange](/wood-shake-roofing-west-orange-nj)` → stripped to plain text (zero links, matching committed siblings).
- **West Orange import** — the "Properties in West Orange…" wildlife comparison → removed (no cross-city import).
- **conversionHooks.urgencyNote** — "Early action saves thousands." → factual, no fabricated savings.
- **pricing** — old `$14,000–$30,000` tier → sourced replacement/installation default `$10,000–$25,000` with named source in `note`.

## North Caldwell-specific corrections
- **NO COA** stated plainly: the borough's HPC under Chapter 107, Article XIII is **advisory / survey-only** (§107-87) with no designated district or landmark; no NC property on the National/NJ State Register; per the NPS, Register listing alone places no restriction. O-8-2026 (introduced, not adopted) omitted entirely. No Caldwell Chapter 130 / two-landmark, no Caldwell-Idaho "North Caldwell Historic District."
- Permit office = **Borough of North Caldwell Construction Department at 141 Gould Avenue (Borough Hall)**; no named Construction Official ("Paul Milani" struck).
- Geography kept QUALITATIVE: mature oak/maple canopy as the defining stressor, Hilltop Reservation edge, upland Second-Watchung custom-colonial/contemporary/Tudor stock on large wooded lots. No Passaic floodplain / FEMA / canopy-% / borough-wide wind-snow number; no invented streets ("Green Brook Road").

## Named sources cited in-text
- **Cedar Shake & Shingle Bureau** — shake 20–40 yr, shingle 30–50 yr; ≥1.5 in. drying air space; moisture (not insects) drives premature failure; Certi-Guard fire classes.
- **InterNACHI life-expectancy chart** — single 25-yr "Wood" figure; the flex-test field check.
- **NRCA** — drying-space guidance; flashing as the most common leak source (industry estimate).
- **HomeGuide** — fungicide/algaecide maintenance treatment cost (cited in the maintenance FAQ).
- **HomeAdvisor / Modernize** — NJ wood shake / cedar shingle installation range $10,000–$25,000.
- **NHI Contractors (NJ)** — premium cedar ~$10–$20+/sq ft; labor ~60–70% of a cedar job.
- **Copper Development Association** — copper lasts over 100 years.
- **N.J.A.C. 5:23-2.7** — detached 1–2-family reroof = ordinary maintenance, no permit; 25% rule on commercial/attached.
- **N.J.A.C. 5:23-6.4** — full tear-off required (no recover-over) when existing covering is wood shake, slate, clay, cement, or asbestos-cement tile.
- **National Park Service** — Register listing alone places no restriction.
- **Integrity Home Exteriors** — documentation/estimate-process guidance.

## Entity-grounding
- `directAnswer` entity-grounded (bold span 38 words: "Newark Quality Roofing is a roofing contractor providing wood shake roofing across North Caldwell, New Jersey, and Essex County…"); credential tail "as a registered New Jersey Home Improvement Contractor" outside the bold.
- `definition` field omitted (canonical splice).
- Credential = "a registered New Jersey Home Improvement Contractor, fully insured" — no "licensed" for NQR anywhere.
