# Commercial Roof Installation — Rewrite Documentation

**serviceId:** `commercial-roof-installation`
**Batch:** 4
**Snippet:** `.planning/content-system/batch4/commercial-roof-installation.snippet.ts`
**Quality bar:** human-approved gold exemplar `serviceId: 'roof-repair'` (repair-maintenance.ts)
**Zod:** VALID against `ServiceContentSchema`. directAnswer = 36 words (≤40). approachContent.length (3) === approachSubheadings.length (3).

---

## Rendered heading → field map

Rendered H-tags come from `HEADING_CONFIG.service` interpolated with `s = "Commercial Roof Installation"`. The data object supplies the answer-first prose under each rendered heading; the object's own `*Heading` strings are legacy/structural labels kept so Zod validates and the template renders.

| Rendered heading (HEADING_CONFIG.service) | Maps to field | Object's legacy heading field |
|---|---|---|
| H1 — "Who Provides Commercial Roof Installation in Newark?" | `directAnswer` | (H1 not stored on object) |
| H2 overview — "What Commercial Roof Installation Do We Provide?" | `overview[]` + `subServices[]` | — |
| H2 signs — "How Do You Know If You Need Commercial Roof Installation?" | `signs[]` | `signsHeading: 'When Your Commercial Building Needs a New Roof'` |
| H2 approach — "How Do Our Roofing Contractors Perform Commercial Roof Installation?" | `approachContent[]` + `approachSubheadings[]` | `approachHeading: 'Our Commercial Roof Installation Methodology'` |
| H2 pricing — "How Much Does Commercial Roof Installation Cost?" | `pricing.range` + `pricing.factors[]` | — |
| H2 repair/replace — "Should You Repair or Replace Your Roof?" | FAQ + signs content | — |
| H2 whyChooseUs — "Why Choose Our Roofing Company for Commercial Roof Installation?" | `whyChooseUs.reasons[]` | `whyChooseUs.heading` (matches rendered) |
| (residential block) | `residential.content[]` | `residential.heading: 'We Also Serve Homeowners with Commercial-Grade Quality'` |
| (commercial block — PRIMARY) | `commercial.content[]` | `commercial.heading: 'Full-Service Commercial Roof Installation'` |
| (process) | `processSteps[]` | — |
| (FAQ accordion) | `faqs[]` | — |

Counts: overview 2, subServices 7, signs 6, approachContent 3, approachSubheadings 3, processSteps 7, faqs 7, whyChooseUs.reasons 4. Counted plurals match: "7 commercial roof systems" → 7 subServices; "7 classes/systems" enumerations each list TPO, EPDM, PVC, modified bitumen, built-up roofing, spray foam, metal = 7.

---

## Named sources used + figures cited

Every hard number is attributed in-text to a named Source-Register-A authority present in the packs.

| Figure / fact | Named authority cited in-text | Pack |
|---|---|---|
| TPO 7–20 yr; EPDM 15–25 yr; modified bitumen 20 yr; BUR 30 yr | InterNACHI life-expectancy chart | facts-materials-economics §0, §4 |
| PVC 20–30 yr | Single Ply Roofing Industry; GAF | facts-materials-economics §6 |
| Spray foam past 30 yr (when coating maintained) | Spray Polyurethane Foam Alliance | facts-materials-economics §6 |
| SPF aged R-6.0 to R-6.5 per inch | ASTM C1289 LTTR (ICC-ES reports); SPFA | facts-materials-economics §6 |
| Standing-seam metal 40–80 yr; copper 70+ yr | InterNACHI life-expectancy chart | facts-materials-economics §0, §3 |
| Black EPDM outlasts white EPDM (carbon-black UV stabilizer); EPDM fails at seams | (qualitative, attributed to industry/Firestone framing in pack — stated qualitatively, no bulletin #) | facts-materials-economics §4 |
| Welded seam = most common TPO failure point | (qualitative field-failure guidance) | facts-materials-economics §4 |
| White TPO/PVC reflects ~70–85% solar radiation, measured per ASTM C1549, listed by CRRC and ENERGY STAR | ASTM C1549; CRRC; ENERGY STAR | facts-materials-economics §6; sources Part A |
| PVC grease/chemical resistance (restaurant exhaust roof) | (qualitative, SPRI/Duro-Last framing) | facts-materials-economics §6 |
| ¼ inch per foot of slope to drain; ponding >48 hr = defect | NRCA and ARMA | nj-regulatory; process-standards |
| Commercial roof installation requires a permit; ordinary-maintenance 1–2 family exemption does not extend to commercial | N.J.A.C. 5:23-2.7 (NJ Uniform Construction Code) | nj-regulatory §1.1–1.3 |
| Complete removal required when water-soaked / wood, slate, tile / 2+ layers | N.J.A.C. 5:23-6.4 (NJ Rehabilitation Subcode) | nj-regulatory §1.4 |
| Flat-roof replace threshold >25–30% of area | (flat-roof repair guidance — stated qualitatively/as threshold) | facts-materials-economics §4, §8 |
| NJ commercial install $/sqft: EPDM $7–$10, TPO $8–$12; PVC $6–$12; SPF $4–$8 | Josten Roofing (NJ); Single Ply Roofing Industry; commercial cost guides | facts-materials-economics §6, §7 |
| NJ ranges sit 10–40% above national | (regional consensus / regional roofing cost data) | facts-materials-economics §7 |
| Workmanship warranty vs manufacturer material warranty distinction | Owens Corning warranty guidance | process-standards §3 |
| Newark crosses 32°F repeatedly; avg January low ~25.5°F | NOAA 1991–2020 normals at Newark Liberty (EWR) | nj-regulatory §3.2 |
| NJ HIC registration required of every NJ roofing contractor | NJ Division of Consumer Affairs | nj-regulatory §2 |
| Liability insurance min $500,000 per occurrence | Contractors Registration Act (N.J.S.A. 56:8-142) | nj-regulatory §2.3 |

`pricing.range = '$4–$12/sq ft installed'` — sourced commercial $/sqft band (SPF low end $4, single-ply high end $12), per Josten NJ + SPRI + commercial cost guides. `financingNote` OMITTED per instructions (commercial install never carries a financing note).

---

## Withheld [VERIFY] items — OMITTED from snippet, qualitative or dropped

Per D-01: omitted from rendered prose, never placeholdered, never invented. Listed here only.

- **NJ HIC license number** ([VERIFY], 13VH######00 format) — omitted; "holds NJ Home Improvement Contractor registration" stated without a number.
- **Insurance carrier / policy specifics** ([VERIFY]) — omitted; only the statutory $500,000-per-occurrence minimum (a code fact, not an NQR claim) is stated.
- **GAF / manufacturer certification tier** (Master Elite / Platinum / SSM) ([VERIFY]) — omitted entirely; the prior entry's "GAF Certified Contractor" credential was dropped. NQR is described only as installing/servicing Firestone, Carlisle, Johns Manville systems (installing ≠ certified).
- **"15+ years of experience"** ([VERIFY] founding year) — dropped from whyChooseUs and credentialsHighlight.
- **24/7 emergency response, same-day estimates, 1-hour callback** ([VERIFY]) — dropped (were in prior whyChooseUs "Fast Response & Emergency Service").
- **0% financing / flexible payment plans** ([VERIFY]) — dropped; `financingNote` omitted.
- **No Dollar Limit (NDL) warranty up to 30 yr, "warranties up to 50 years"** ([VERIFY] cert-dependent) — dropped; only the generic workmanship-vs-material warranty distinction (per Owens Corning guidance, a sourced industry fact) is stated.
- **BBB A+ rating, 5-star ratings, review/project counts** ([VERIFY]) — dropped.
- **Physical street address / ZIP / geo** ([VERIFY]) — not referenced; service-area framing (Essex County + named cities) only.
- **Hours** Mon–Fri 7:00 AM–6:00 PM, Sat 8:00 AM–2:00 PM — IN-REPO canonical, asserted in whyChooseUs (matches gold exemplar and site-config).

---

## factGapsFlagged — figures NOT in packs → stated qualitatively, never as a hard number

- **Freeze-thaw cycle COUNT** (35–45 cycles/winter) — [UNVERIFIED] per nj-regulatory §3.2; stated qualitatively as "freeze-thaw cycling stresses membrane seams and fasteners" with no count. Only the sourced NOAA avg January low (~25.5°F) and the 32°F freezing point are given as numbers.
- **Exact Essex County ground snow load (Pg)** and **exact Essex County design wind speed** — [UNVERIFIED] exact values per nj-regulatory §3.1/§3.4; NOT cited numerically. Wind-uplift is addressed qualitatively ("engineered for drainage and wind uplift") with no mph figure.
- **Per-system failure-share percentages** ("X% of TPO leaks at seams," etc.) — [UNVERIFIED] per facts-materials-economics §4; stated qualitatively ("fails most often at the seams," "the most common TPO failure point") with no invented percentage.
- **NJ-specific built-up-roofing and standing-seam-metal commercial install $/sqft** — no clean NJ commercial figure in packs; the snippet's $/sqft band is anchored to the sourced EPDM/TPO/PVC/SPF figures only, and BUR/metal are described by lifespan (sourced) without an NJ install price.
- **Commercial install project-duration figures** (e.g., "2–4 weeks for 10,000–20,000 sq ft") — not in packs; the prior entry's duration claims were dropped. Schedule is framed as "set in the written proposal before any work begins."
- **TPO lifespan spread** — InterNACHI lists 7–20 yr; industry commonly cites 15–25 yr (§0 note 4). The snippet cites the InterNACHI 7–20 yr figure with the named chart to stay on the primary source.

---

## Gate self-audit (run before return)

- Modality (will/shall/should/need to/needs to/have to/has to/must/ought to) in declaratives: NONE. The three "needs ... to drain" risks were rewritten to "builds at least ¼ inch per foot of drainage slope" (verb+noun), avoiding the banned `needs to` token.
- De-fabrication literals (24/7, same-day, GAF-Certified-as-credential, 0% financing, top-rated, 15+ years, 500+/review/star counts, NDL, "up to 50 years"): NONE.
- `[VERIFY]` / `[UNVERIFIED]` literals in snippet: NONE.
- Outbound links / URLs / `<a href>`: NONE. Internal markdown links: none in this object (gold roof-repair object likewise carries none).
- Every hard number attributed to a named authority: verified (table above).
- Answer-first: directAnswer ≤40 w (36); every section first paragraph + every FAQ answer (7/7) opens with a bolded **answer**; FAQ questions all end with `?`.
- Counted plurals match item counts (7/7/7/6/4/3=3).
- No casual/analogy; no synthesized marketing superlative ("highest reflectance" removed). Remaining "most common failure point" / "fails most often" are pack-supported failure-mode facts; "reflects the most heat?" is a FAQ question (excluded from gating).
- Structural/legacy fields kept for Zod + template: serviceId, signsHeading, approachHeading, approachSubheadings, residential.heading, commercial.heading, whyChooseUs.heading, ctaLabel. Commercial block primary; both residential + commercial blocks retained.
