# Green Roof Installation — Answer-First Rewrite (Batch 3)

`serviceId: green-roof-installation` — COMMERCIAL system. Snippet: `green-roof-installation.snippet.ts`.

## Rendered heading → snippet field map

Rendered H-tags interpolate `[Service] = "Green Roof Installation"` via `HEADING_CONFIG.service`. Each mapped field opens with a bolded definitive answer to its rendered heading.

| Rendered heading (HEADING_CONFIG.service) | Snippet field | Opening bolded answer (gist) |
|---|---|---|
| H1 — "Who Provides Green Roof Installation in Newark?" | `directAnswer` (35 words) | Newark Quality Roofing installs green roof systems across Newark and Essex County, building the membrane, root barrier, drainage layer, and growing media. |
| H2 — "What Green Roof Installation Do We Provide?" | `overview` (+ `subServices`) | Newark Quality Roofing installs 5 green roof layers: membrane, root barrier, drainage/water-retention, growing media, vegetation. |
| H2 — "How Do You Know If You Need Green Roof Installation?" | `signsHeading` + `signs` (6) | Each sign opens bolded (stormwater credits, membrane at end-of-life, top-floor heat gain, LEED/WELL, amenity area, sustainability mandate). |
| H2 — "How Do Our Roofing Contractors Perform Green Roof Installation?" | `approachHeading` + `approachContent` (3) + `approachSubheadings` (3) | Sequenced assembly; drainage/water-retention balance; sedum/native selection for Essex County climate. |
| H2 — "How Much Does Green Roof Installation Cost?" | `pricing` | $6–$12/sq ft for the green-roof waterproofing membrane substrate (PVC). |
| H2 — "Why Choose Our Roofing Company for Green Roof Installation?" | `whyChooseUs` | 4 reasons: NJ HIC, Insured, Green-Roof-Rated Waterproofing, Local Essex County. |
| (residential block) | `residential.heading` "Residential Green Roofs" + content (2) | Extensive sedum on detached 1–2 family flat sections; ordinary-maintenance permit rule. |
| (commercial block — primary audience) | `commercial.heading` "Commercial Green Roofs" + content (2) | Extensive/intensive over green-roof-rated membrane; commercial permit + stormwater. |
| (process) | `processSteps` (6) | Structural assessment → membrane + flood test → root barrier/drainage → growing media → planting → establishment/handover. |
| (FAQ) | `faqs` (6) | Lifespan, membrane-leak access, commercial permit, stormwater, maintenance, waterproofing material. |

Legacy/structural fields preserved verbatim for Zod + heading-config stability: `serviceId`, `signsHeading` ('Signs You Need Green Roof Installation'), `approachHeading` ('Our Green Roof Installation Approach'), `approachSubheadings` (3-item legacy array), `residential.heading`, `commercial.heading`, `whyChooseUs.heading`, all `ctaLabel`s. `approachContent` length (3) now equals `approachSubheadings` length (3) — legacy entry had 5 vs 3 (out of sync); corrected.

## Named sources + figures used (every hard number)

All figures cross-checked against the fact packs; each attributed in-text to a named authority that appears in the packs.

- **Green (vegetation) roof 5 to 40 years** — InterNACHI life-expectancy chart (facts-materials-economics §0 master table). Used in overview, subServices, approachContent[2], residential, processSteps, faqs.
- **PVC single-ply 20 to 30 years** — Single Ply Roofing Industry; GAF EverGuard warranty data (facts-materials-economics §6, SECONDARY-named). Used as the green-roof waterproofing substrate life throughout.
- **EPDM 15 to 25 years, TPO 7 to 20 years, modified bitumen 20 years** — InterNACHI life-expectancy chart (§0, §4). Used in overview, signs, commercial, faqs.
- **PVC installed $6–$12/sq ft** — commercial cost guides citing M&M Roofing and WeatherStar (§6). Used for `pricing.range` and factors (substrate cost — see fact-gap note on green-roof system $/sqft).
- **NJ TPO flat $8–$12/sq ft; NJ EPDM $7–$10/sq ft** — Josten Roofing NJ pricing (§7, §6). Used in pricing factors.
- **¼ inch per foot minimum slope; ponding >48 hours = defect** — NRCA and ARMA (facts-nj-regulatory-climate / facts-materials-economics §6). Used in subServices, approachContent[1], commercial, processSteps, faqs.
- **Commercial >25% of total roof area in 12 months triggers permit; N.J.A.C. 5:23-2.7** — NJ Uniform Construction Code (facts-nj-regulatory-climate §1.2). Used in commercial, faqs, pricing factors.
- **Detached 1- and 2-family roof covering = ordinary maintenance, no permit; N.J.A.C. 5:23-2.7** — NJ Uniform Construction Code (§1.1). Used in residential, faqs.
- **Average January low near 25.5°F; crosses 32°F repeatedly through winter** — NOAA 1991–2020 normals at Newark Liberty (EWR) (facts-nj-regulatory-climate §3.2). Used in approachContent[2], processSteps (freeze-thaw stated QUALITATIVELY, no cycle count).
- **Firestone, Carlisle, Johns Manville** membrane systems — Source Register Part A manufacturers list (sources-and-nqr-facts). Named as brands installed (installs/services, not certified claim).
- **NJ Home Improvement Contractor / NJ Division of Consumer Affairs / Contractors Registration Act liability** — facts-nj-regulatory-climate §2; sources-and-nqr-facts Part B [IN-REPO]. Used in whyChooseUs.
- **Hours Mon–Fri 7:00 AM–6:00 PM, Sat 8:00 AM–2:00 PM; cities Newark, East Orange, Bloomfield, Montclair, Belleville, Irvington** — site-config.ts canonical (sources-and-nqr-facts Part B [IN-REPO]). Used in whyChooseUs.

## Withheld [VERIFY] / de-fabricated items (omitted from snippet; listed per Rule 10 / D-01)

Removed from the legacy entry and NOT rendered:
- **"0% financing available" / financingNote** — UNVERIFIED MARKETING LITERAL; `financingNote` omitted entirely (Part B Financing [VERIFY]).
- **"GAF Certified Contractor"** — certification tier [VERIFY]; replaced credential with "Green-Roof-Rated Waterproofing" + generic NJ HIC/Insured.
- **"15+ Years in Essex County" / "over 15 years of experience"** — UNVERIFIED MARKETING LITERAL (Part B Track record [VERIFY]); omitted.
- **"Fully Insured & Bonded"** — bonded is [VERIFY]; reduced to "Insured" (the D-01-cleared liability statement).
- **"Same-day estimates and 24/7 emergency crews"** — UNVERIFIED MARKETING LITERAL (Part B Emergency response [VERIFY]); omitted.
- **"manufacturer warranties up to 50 years" / "Platinum Protection"** — depends on cert tier [VERIFY]; omitted.
- **Review/reputation claims** ("Building owners praise...", "Reviews highlight...") and the old reviews/experience FAQs — fabricated trust signals; replaced with material/code/process FAQs.
- **"Transparent, Upfront Pricing / no hidden fees" reason** — marketing claim; dropped.
- **NQR-specific workmanship-warranty term, flood-test SLA, electronic-leak-detection-as-NQR-standard** — NQR process specifics are [UNVERIFIED] in facts-process-standards §1; flood testing stated as standard green-roof practice without an NQR-specific guarantee.

## factGapsFlagged — figures NOT in fact packs → stated qualitatively or omitted

The fact packs contain NO green-roof-specific figures beyond the InterNACHI 5–40 yr lifespan. The following legacy numbers were therefore removed and the claims requalified qualitatively:
1. **Saturated dead load** ("15–25 lb/sq ft extensive, 50–150 lb/sq ft intensive") — not in packs; stated qualitatively ("adds load above the membrane that a structural assessment confirms"). No psf figure rendered.
2. **Growing media depth** ("3–6 in extensive, 6–24 in intensive") — not in packs; stated qualitatively ("shallow media" vs "deeper media").
3. **Rainfall retention %** ("50–80 percent of annual rainfall") — not in packs; stated qualitatively ("retains rainfall on the roof / reduces stormwater discharged").
4. **Membrane life-extension under green roof** ("doubling to 40–60 / 40–50 yr") — not in packs; omitted. Only sourced substrate lifespans (PVC 20–30, EPDM 15–25, TPO 7–20, mod-bit 20) are used.
5. **Stormwater fee credit "5–10% annual ROI"** — not in packs; omitted; replaced with qualitative compliance-path framing.
6. **R-value / energy-savings figures for the green roof** — not in packs (SPF R-6.0–6.5/in is for spray foam, a different service); thermal benefit stated qualitatively only.
7. **Green-roof SYSTEM installed $/sq ft** ($15–$35/sq ft legacy figure) — NOT in packs; replaced with the sourced PVC waterproofing-substrate range ($6–$12/sq ft, §6) and explicitly framed as the membrane substrate cost, not the full green-roof system. A green-roof system $/sq ft needs a named source before rendering.
8. **FLL growing-media guideline** — named only in legacy copy, not in the fact packs as a citable authority; not cited by name. Growing-media engineering stated generically (expanded shale/slate/clay, resists compaction/decomposition).
9. **Newark/Essex combined-sewer-overflow program** — packs confirm NJ stormwater/CSO context generally but no named municipal program figure; stated qualitatively ("combined-sewer overflow rules ... target") with no quantified credit.

## Self-audit (gate rules)

- Modality (will/shall/should/must/need to/have to/ought to) outside FAQ questions: **none**.
- `[VERIFY]`/`[UNVERIFIED]` literals: **none**. De-fab literals (24/7, same-day, 0% financing, GAF Certified, top-rated, 15+ years, 500+, star/review): **none**.
- Outbound links / URLs in prose: **none**.
- Freeze-thaw cycle COUNT: **none** (qualitative only; January-low 25.5°F is a NOAA temperature normal, allowed).
- Every hard number attributed to a named pack authority: **yes**.
- Answer-first: directAnswer 35 words (≤40); every overview/signs/approachContent item, residential/commercial opener, and FAQ answer opens with a bolded answer span. Bold markers balanced (even).
- Counted plural "5 green roof layers" matches the 5 enumerated layers and the 5 `subServices`.
- Entity-coreference pronouns / hype / casual / analogy: **none**.
- Zod: `ServiceContentSchema.safeParse` → VALID. `approachContent` (3) == `approachSubheadings` (3). All 15 gold fields present. `financingNote` absent.
