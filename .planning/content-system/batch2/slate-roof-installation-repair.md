# Slate Roof Installation and Repair — Answer-First Rewrite Draft

**serviceId:** `slate-roof-installation-repair`
**Batch:** 2 (full-site answer-first rewrite)
**Quality bar:** human-approved gold exemplar `serviceId: 'roof-repair'` (repair-maintenance.ts)
**Snippet:** `.planning/content-system/batch2/slate-roof-installation-repair.snippet.ts`

---

## Rendered-heading → field map

The page template renders the HEADING_CONFIG.service question headings; each field's prose opens with a bolded definitive answer to its rendered heading.

| Rendered heading (HEADING_CONFIG.service) | Source field | Opening bolded answer |
|---|---|---|
| **H1** — "Who Provides Slate Roof Installation and Repair in Newark?" | `directAnswer` | "Newark Quality Roofing installs and repairs natural slate roofs across Newark and Essex County, setting new slate tile on copper or stainless-steel fasteners and replacing broken tiles, corroded fasteners, and failed flashing" (39 words) |
| **H2** — "What Slate Roof Installation and Repair Do We Provide?" | `overview` + `subServices` | "Newark Quality Roofing provides 5 slate services across Essex County: natural-slate installation, broken-tile replacement, corroded-fastener repair, flashing replacement, and slate restoration" (5 services, 5 subServices) |
| **H2** — "How Do You Know If You Need Slate Roof Installation and Repair?" | `signs` (signsHeading legacy: "Signs You Need Slate Roof Installation or Repair") | "Slate tiles sliding out of position indicate corroded nail fasteners, the typical natural-slate failure mode…" |
| **H2** — "How Do Our Roofing Contractors Perform Slate Roof Installation and Repair?" | `approachContent` (approachHeading legacy: "Our Slate Roof Installation and Repair Approach") | "Newark Quality Roofing diagnoses a slate roof at the fasteners and flashing first, targeting the corroded nails, degraded copper flashing, and impact-broken tiles that fail before the stone." |
| **H2** — "How Much Does Slate Roof Installation and Repair Cost?" | `pricing` + cost FAQ | range "$500–$3,000+ for most slate repairs"; FAQ opens "Slate roof repair in New Jersey runs $500 to $2,100 for most repairs…" |
| **H2** — "Why Choose Our Roofing Company for Slate Roof Installation and Repair?" | `whyChooseUs` (legacy heading kept) | 4 reasons mirroring gold: NJ HIC, Insured, Free Roof Inspections, Local Essex County Roofers |

Other rendered tree H2s ("Should You Repair or Replace Your Roof?", "What Related Roofing Services…", "What Knowledge Base Articles…", "How Can You Schedule…") are template/shared sections; the repair-vs-replace FAQ ("Should I repair or replace my slate roof?") feeds the repair-vs-replace context. `residential` and `commercial` blocks feed the audience-perspective sub-sections.

### Legacy/structural fields preserved (so the Zod schema + audit still validate)
- `serviceId: 'slate-roof-installation-repair'`
- `signsHeading: 'Signs You Need Slate Roof Installation or Repair'`
- `approachHeading: 'Our Slate Roof Installation and Repair Approach'`
- `approachSubheadings: ['Authentic Natural Slate Sourcing', 'Artisan Installation Methods', 'Historic Preservation Expertise']`
- `residential.heading: 'Residential Slate Roofing'`
- `commercial.heading: 'Slate Roofing for Commercial and Institutional Buildings'`
- `whyChooseUs.heading: 'Why Choose Newark Quality Roofing for Slate Roof Installation Repair'`
- `ctaLabel` values: `'Get Home Estimate'` / `'Get Commercial Quote'`

All prose under these fields was fully rewritten to the answer-first voice.

---

## Named sources used (with the figures)

Every hard number is attributed in-text to a named authority that appears in the fact packs. Primary pack: `facts-materials-economics.md` (§0, §2, §7). Regulatory/climate: `facts-nj-regulatory-climate.md`. Sources register: `sources-and-nqr-facts.md` Part A.

| Figure used on page | Named source (in-text) | Fact-pack location |
|---|---|---|
| Natural slate lasts **60 to 150 years** | InterNACHI life-expectancy chart | facts-materials-economics §0, §2 (PRIMARY, verified fetch) |
| Premium slate commonly **100-plus years** | National Slate Association | facts-materials-economics §2 (PRIMARY) |
| **Copper lasts 70-plus years** (copper flashing matches slate life) | InterNACHI life-expectancy chart | facts-materials-economics §0 |
| Architectural shingle **30-year** life (comparison link target) | InterNACHI life-expectancy chart | facts-materials-economics §0, §1 |
| Replace only when **>30–40%** of fasteners corrode beyond repair | NRCA / National Slate Association (industry/NSA consensus) | facts-materials-economics §2 (repair-vs-replace) |
| Slate repair **$500–$2,100**, typical **~$1,400** | HomeGuide | facts-materials-economics §2 (repair cost) |
| Individual broken slate **$50–$300 / tile** | HomeGuide | facts-materials-economics §2 |
| Flashing/fastener replacement **$400–$3,000** | HomeGuide / Angi | facts-materials-economics §2 |
| Slate restoration **$2,500–$10,000+** | HomeGuide | facts-materials-economics §2 |
| NJ ranges **10–40% above national** | Integrity Home Exteriors (consensus) | facts-materials-economics §7 |
| Average January low **~25.5°F**, repeated 32°F freeze-thaw crossings | NOAA 1991–2020 normals at Newark Liberty (EWR) | facts-nj-regulatory-climate §3.2 |
| Detached 1–2-family re-roof/repair = ordinary maintenance, **no permit** (N.J.A.C. 5:23-2.7) | NJ Uniform Construction Code | facts-nj-regulatory-climate §1.1 |
| Commercial: repairing **>25% of roof area in 12 months** needs a permit (N.J.A.C. 5:23-2.7) | NJ Uniform Construction Code | facts-nj-regulatory-climate §1.2 |
| Permit-triggered slate job = full removal, no recover-over (N.J.A.C. 5:23-6.4) | NJ Rehabilitation Subcode | facts-nj-regulatory-climate §1.4 (slate explicitly listed) |
| HIC registration required of every NJ roofing contractor | NJ Division of Consumer Affairs | facts-nj-regulatory-climate §2; sources-and-nqr-facts Part A |
| Liability coverage required of a registered HIC | Contractors Registration Act | facts-nj-regulatory-climate §2.2 |
| Verification/cleanup process sequence | Integrity Home Exteriors | gold exemplar process pattern |

### Qualitative facts (stated without a number, per fact-pack guidance)
- Natural slate **rarely fails as a tile**; failures are corroded fasteners, degraded flashing, impact-broken tiles, and "sugaring" — stated qualitatively (the per-failure-share % is [UNVERIFIED] in the pack).
- Slate **weighs substantially more than asphalt shingles** — stated qualitatively (the legacy "700–1,500 lb/square" figure has no named authority in the fact packs, so it is de-quantified to "substantially more" + "requires a structural deck check").
- Freeze-thaw described qualitatively as "repeated 32°F crossings" + the sourced 25.5°F January-low normal — **no cycle count rendered** (the "35–45 cycles per winter" count is [UNVERIFIED]).

---

## Withheld [VERIFY] / [UNVERIFIED] items (NOT rendered; per D-01 omit-never-placeholder)

Withheld NQR specifics (omitted or stated qualitatively — never as a literal placeholder, never invented):
1. **NJ HIC license number** — omitted; "holds New Jersey Home Improvement Contractor registration" stated qualitatively.
2. **Phone number** — omitted (no hardcoded number; env-driven).
3. **Physical street address / ZIP / geo** — omitted; service-area framing only (Essex County + named cities).
4. **Years in business / founding year ("15+ years")** — removed (de-fab "N+ experience claim"); replaced by qualitative "Local Essex County Roofers".
5. **GAF Certified / Master Elite certification** — removed (de-fab + [VERIFY]); the legacy "GAF Certified Contractor" credential and the "GAF, CertainTeed, Owens Corning, Firestone" brand-cert claim are dropped.
6. **Manufacturer warranty "up to 50 years"** — removed ([VERIFY] which warranties NQR can register depends on uncertified tier).
7. **Workmanship warranty term** — omitted (not specified in repo; the gold exemplar references "written workmanship warranty" qualitatively, but the slate page omits a term/number).
8. **24/7 / Same-day / Fast Response / Emergency crews** — removed (de-fab literals).
9. **0% financing / financingNote** — `financingNote` field OMITTED entirely (fabricated; per task instruction).
10. **Star ratings / review counts / "top-rated" / "5-star"** — removed (review/experience FAQs from the legacy entry deleted; replaced with material-fact FAQs).
11. **"Fully insured & bonded"** — "bonded" removed ([VERIFY]); rendered as "Insured" only (the D-01-cleared trust badge).
12. **BBB A+ rating** — omitted ([VERIFY]).

### [UNVERIFIED] figures from the legacy entry that were dropped or de-quantified
- "700 to 1,500 pounds per square" slate weight, "200–300 pounds per square" asphalt — de-quantified to "substantially more"; no named source in the fact packs.
- "Pennsylvania Peach Bottom… 500 million years… lifespans exceeding 200 years," "absorption rates below 0.25 percent," "breakage moduli above 9,000 psi," "25 to 35 freeze-thaw cycles per winter" — all removed (no named authority / [UNVERIFIED] cycle count).
- "three to five times the cost," "$40,000 to $80,000 for slate," "60 to 70 percent of project cost at resale" (for slate specifically) — removed (the Cost vs Value recoup % covers replacement generically, not slate-specific; slate repair $ now sourced to HomeGuide/Angi per the pack).
- Per-failure-share percentages ("87% of failures are fasteners/flashing") — never rendered ([UNVERIFIED] across all materials).

---

## Self-audit (gate rules — re-checked against `audit:semantics` regexes)

- ANSWER-FIRST: directAnswer = 39 words (≤40); every section/FAQ opens with a bolded answer span; no bold span exceeds 40 words. PASS
- R6 modality (will/shall/should/need to/needs to/have to/has to/must/ought to) in body prose: 0 hits. PASS
- R9 outbound links / URLs: 0. Internal links use relative markdown to page titles: `[architectural shingle roofing](/asphalt-shingle-roofing)`. PASS
- R10 [VERIFY]/[UNVERIFIED] literals: 0. De-fab literals (24/7, same-day, GAF Certified, Master Elite, 0% financing, top-rated, N+ experience, N+ count, fake NAP): 0. PASS
- R8 plural counts: "5 slate services" maps to 5 subServices and 5 colon-list items. PASS
- Every hard number attributed in-text to a named fact-pack authority. PASS
- Freeze-thaw cycle COUNT never rendered (trap avoided); only 25.5°F NOAA normal + qualitative crossings. PASS
- Material accuracy: natural slate 60–150 yr (InterNACHI), premium 100+ (NSA), copper 70+ (InterNACHI) — no overclaim beyond sourced figures. PASS
- Zod ServiceContentSchema.safeParse: OK (overview 2, subServices 5, signs 6, processSteps 6, faqs 6, financingNote omitted).
