# Wood Shake Roofing — Answer-First Rewrite Draft (Batch 2)

**serviceId:** `wood-shake-roofing`
**Snippet:** `.planning/content-system/batch2/wood-shake-roofing.snippet.ts`
**Quality bar:** human-approved `roof-repair` gold exemplar (de-fabricated, answer-first).
**Gate:** `npm run audit:semantics` — self-audited PASS (modality 0, outbound links 0, [VERIFY] literals 0, freeze-thaw cycle count 0, fabricated trust claims 0, bold markers balanced, Zod schema PASS).

---

## Rendered-heading → field map

Each field's prose opens with a definitive answer to its rendered heading (from `HEADING_CONFIG.service`, `[Service]` = "Wood Shake Roofing").

| Rendered heading (DOM) | Source field | Opening answer (bolded span) |
|---|---|---|
| **H1** — "Who Provides Wood Shake Roofing in Newark?" | `directAnswer` | "Newark Quality Roofing provides wood shake roofing across Newark and Essex County, installing, repairing, and maintaining western red cedar shake and shingle systems on a ventilated assembly" |
| **H2** — "What Wood Shake Roofing Do We Provide?" | `overview` | "Newark Quality Roofing provides 4 wood shake services across Essex County: cedar shake and shingle installation, individual shake replacement, flashing and detail repair, and preservative and cleaning maintenance" |
| **H2** — "How Do You Know If You Need Wood Shake Roofing?" | `signs` (+ `signsHeading`) | "Cupped, split, or warped shakes across more than 25 to 30% of the roof cross the contractor-consensus replacement threshold…" |
| **H2** — "How Do Our Roofing Contractors Perform Wood Shake Roofing?" | `approachContent` (+ `approachHeading`, `approachSubheadings`) | "Newark Quality Roofing builds a ventilated cedar assembly with at least 1.5 inches of air space beneath the shakes, because moisture, not insects, drives most premature cedar failure" |
| **H2** — "How Much Does Wood Shake Roofing Cost?" | `pricing` + cost FAQ | "Wood shake repair averages roughly $750 nationally, with a range of $400 to $1,800, and individual shake replacement runs about $600 to $700 per 100-square-foot square" |
| **H2** — "Why Choose Our Roofing Company for Wood Shake Roofing?" | `whyChooseUs` | reasons: NJ Home Improvement Contractor / Insured / Ventilated Cedar Assembly / Local Essex County Roofers |
| (supporting) Residential perspective | `residential.content` | "Newark Quality Roofing installs and repairs cedar shake and shingle roofs across Essex County, building the ventilated assembly on detached one- and two-family homes with no construction permit required for the roof covering" |
| (supporting) Commercial perspective | `commercial.content` | "Newark Quality Roofing installs and repairs cedar shake roofing on commercial buildings across Essex County…" |
| (supporting) Process | `processSteps` (6 steps) | Inspection → Estimate → Tear-Off/Deck → Ventilated Assembly → Shake Install → Flashing/Verify/Warranty |
| (supporting) FAQ | `faqs` (7) | each opens with a bolded definitive answer |

**Legacy structural fields preserved** (so the Zod schema + existing renderers validate): `serviceId`, `signsHeading` ("Signs You Need Wood Shake Roofing"), `approachHeading` ("Our Wood Shake Roofing Approach"), `approachSubheadings` (["Premium Wood Selection", "Weather-Resistant Treatment", "Natural Aesthetic Installation"]), `residential.heading` ("Residential Wood Shake Roofing"), `commercial.heading` ("Wood Shake Roofing for Commercial Properties"), `whyChooseUs.heading`, residential/commercial `ctaLabel`. All prose content was rewritten.

---

## Named sources used (with the figures they back)

Every hard number is attributed in-text to a named authority that appears in the fact packs. No invented figures, no invented sources.

| Figure stated on-page | Named authority (in-text) | Fact-pack provenance |
|---|---|---|
| Wood (shake & shingle) lasts **25 years** | InterNACHI life-expectancy chart | facts-materials-economics §0, §5 [PRIMARY] |
| Cedar **shake 20–40 years**, cedar **shingle 30–50 years** | Cedar Shake & Shingle Bureau | facts-materials-economics §5 [PRIMARY-named] |
| Cedar needs **≥1.5 inches air space** beneath shakes for drying; **moisture (not insects)** drives most premature failure; shaded slopes degrade faster | Cedar Shake & Shingle Bureau / NRCA | facts-materials-economics §5 (qualitative); Source Register A (CSSB, NRCA) |
| Replace when **>25–30%** of shakes cup/split | industry consensus | facts-materials-economics §5 (repair-vs-replace) [SECONDARY] |
| **Flex test** — shake cracks under light bending = advanced degradation | InterNACHI | facts-materials-economics §5 [SECONDARY-named] |
| Flashing is the most common leak source (**~90–95%**, stated qualitatively as "the most common leak source") | industry estimate attributed to the NRCA | facts-causes-signs §2.1 (framed as estimate, per sourcing caution) |
| Wood shake repair avg **~$750**, range **$400–$1,800** | Angi | facts-materials-economics §5 [SECONDARY] |
| Small repairs **$100–$400**, large **$1,000+** | HomeGuide | facts-materials-economics §5 [SECONDARY] |
| Replace shakes **~$600–$700 / 100-sq-ft square**; labor **~60–70%** of cost | Modernize | facts-materials-economics §5 [SECONDARY] |
| Fungicide/algaecide maintenance **$0.15–$0.60 / sq ft** every few years | HomeGuide | facts-materials-economics §5 [SECONDARY] |
| NJ runs **~10–40% above national**; premium cedar NJ **$10–$20+/sq ft** | NHI Contractors (NJ) | facts-materials-economics §7 [SECONDARY] |
| Avg **January low ≈ 25.5°F**; Newark crosses **32°F** repeatedly (freeze-thaw qualitative) | NOAA 1991–2020 normals at Newark Liberty (EWR) | facts-nj-regulatory-climate §3.2 |
| Detached 1–2 family re-roof = ordinary maintenance, **no permit** | NJ Uniform Construction Code, N.J.A.C. 5:23-2.7 | facts-nj-regulatory-climate §1.1 |
| Commercial repair **>25% of roof area / 12 months** requires a permit | NJ Uniform Construction Code, N.J.A.C. 5:23-2.7 | facts-nj-regulatory-climate §1.2 |
| Permitted re-roof requires **complete removal** of wood shake (no recover-over) | NJ Rehabilitation Subcode, N.J.A.C. 5:23-6.4 | facts-nj-regulatory-climate §1.4 |
| Untreated cedar carries a lower fire class; pressure-treated reaches a higher class; assembly fire rated under **UL 790** | Underwriters Laboratories / Cedar Shake & Shingle Bureau | Source Register A (UL); fire class stated qualitatively (no exact class number is in the cedar fact pack) |
| Daylight through the deck → replacement, not patch | This Old House | facts-causes-signs §3 |
| Written estimate / documentation / verification process | Integrity Home Exteriors | facts-process-standards §1 |

---

## Material-accuracy notes

- Lifespan grounded in the real cedar facts: InterNACHI single "Wood" row = **25 yr**; CSSB split = shake **20–40 yr**, shingle **30–50 yr**. No overclaim beyond sourced figures.
- The defining cedar attribute (moisture-driven decay, ventilation requirement, ≥1.5 in air space) leads the approach section — attribute-defining-first ordering per Rule 27.
- `pricing.range` uses the **repair** range ("$400–$1,800 for most wood shake repairs"), mirroring how the gold roof-repair exemplar frames its range as a repair figure rather than a full-install figure. Install context ($10–$20+/sq ft NJ) is given as a factor, not the headline range.
- `financingNote` **OMITTED** (the "0% financing" literal is fabricated per D-01 / sources-and-nqr-facts Part B).

---

## Freeze-thaw trap handling (KNOWN TRAP)

The "cycles per winter" COUNT is `[UNVERIFIED]` (facts-nj-regulatory-climate §3.2 flags the 35–45 figure as a non-NOAA estimate). The snippet renders **no cycle count** — freeze-thaw is described qualitatively ("Newark crosses the 32°F freezing point repeatedly through winter with an average January low near 25.5°F … driving freeze-thaw stress on trapped moisture"). The only freeze-related numbers rendered are the NOAA-sourced **32°F** threshold and **25.5°F** January low.

---

## Withheld NQR specifics ([VERIFY] / D-01 — omitted, never placeholdered, never rendered)

The following NQR business facts are unverified (sources-and-nqr-facts Part B) and were OMITTED from the snippet rather than rendered or placeholdered:

- **NJ HIC license number** (13VH######00) — stated as "New Jersey Home Improvement Contractor registration" qualitatively; no number rendered.
- **Phone number** — omitted (env-driven; fabricated default forbidden).
- **Physical street address / ZIP / geo coordinates** — omitted; service area stated as Essex County + named cities only.
- **Years in business / founding year** ("15+ years") — omitted (fabricated marketing literal).
- **Projects-completed count** ("500+") — omitted.
- **Aggregate rating / review counts / "5-star" / star ratings** — omitted (rating disabled in canonical config).
- **GAF Certified Contractor / Master Elite** — omitted; no manufacturer-certification credential claimed for NQR (UL/CSSB cited only as general authorities, not NQR certs).
- **"Fully insured and bonded"** — rendered only as "Insured" (the D-01-cleared trust badge); "bonded" omitted.
- **BBB accreditation / A+ rating** — omitted.
- **Workmanship warranty term** (specific length) — omitted; "written workmanship warranty on the labor" stated qualitatively without a number.
- **24/7 emergency / same-day estimates / 1-hour callback / 24-hour inspection scheduling** — omitted (all unverified RESPONSE literals).
- **0% financing / flexible payment plans / insurance-claim handling** — omitted; `financingNote` dropped.
- **Specific fire-rating class numbers for treated cedar** — stated qualitatively ("lower class" vs "higher class that meets NJ code") because the fact pack gives no exact UL class for cedar.

Rendered trust claims are limited to the D-01-cleared set: NJ Home Improvement Contractor (qualitative), Insured, Free Roof Inspections, Local Essex County Roofers, and business hours (Mon–Fri 7:00 AM–6:00 PM, Sat 8:00 AM–2:00 PM, from canonical `site-config.ts`).
