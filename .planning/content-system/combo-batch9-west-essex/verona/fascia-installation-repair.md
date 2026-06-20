# verona/fascia-installation-repair — rewrite rationale

## De-fab literals cleared (from the CURRENT combo file)
- **Price-in-lead** removed: `overview[0]` opened "delivers expert fascia installation repair in Verona — with prices starting from $1,200–$3,500 and free estimates available today" → replaced with a figure-free, entity-grounded answer-first lead (NQR + the service applied to Verona's stock).
- **Invented pricing tier** `range: '$1,200–$3,500'` / `note: 'fascia board replacement'` → no pack-sourced fascia number exists (facts §6 bans exact fascia material lifespans/prices), so set `range: 'Varies by scope'` with the free-written-estimate note per brief §E (components-specialty default).
- **Old whyChooseUs** ("NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning…", "same-day estimates and 24/7 emergency response") → replaced with the 4 de-fabbed factual reasons (registered NJ HIC + fully insured / local Essex County crew / free written estimates / photo-documented workmanship).
- **urgencyNote** "Early action saves thousands." → factual ("Replacing rotted fascia early keeps the gutter line and rafter tails behind it from taking on further water.").
- **Inline markdown self-links** `[fascia installation](/fascia-installation-repair)` and `[West Orange](/fascia-installation-repair-west-orange-nj)` → stripped (zero links/URLs anywhere).
- **Fabricated cost FAQ numbers** ("$500 to $2,000", "$2,500 to $5,000", "$200 to $500 per location", "30 to 50 percent more") → replaced with the free-written-estimate cost FAQ; aluminum "30–50%" premium dropped (unsourced).
- **Cross-city import** dropped the West Orange comparison line; Verona-distinct anchors foregrounded instead.
- No "licensed" for NQR anywhere (0 occurrences); credential = "a registered New Jersey Home Improvement Contractor" + "fully insured." No `definition` field (spliced post-assembly).

## Entity-grounding applied
- `directAnswer` entity-grounded, bold span 38 words (≤40), credential tail "as a registered New Jersey Home Improvement Contractor." outside the bold; establishes "Verona, New Jersey" + "roofing contractor."

## Verona localization (verified texture only)
- Permit office: Township of Verona Department of Building and Inspections, Municipal Building, 600 Bloomfield Avenue (no Construction Official named).
- Historic = NARROW **HPC review** (NOT "COA"): Zoning Ordinance Chapter 150, Article XXII; exactly two designated landmarks (Erie Railroad Freight Shed at 62 Depot Street + Verona United Methodist Church); in-kind exempt; every other home repairs fascia with no HPC review.
- Building stock: pre-war Colonials, postwar Capes/ranches, 1960s–70s split-levels; split-level transition-flashing as the distinctive Verona detail; oldest stock on Personette Avenue and Claremont Avenue.
- Geography (qualitative): Eagle Rock (First Watchung) + Hilltop (Second Watchung) reservation-edge canopy debris + mature trees near Verona Park (NOT South Mountain, NOT Mills). Verona Park referenced only as canopy/eave context — not a reroof gate.

## Named sources cited in-text
- **InterNACHI** — fascia closes rafter-tail ends/mounts gutters; rot from clogged/loose gutters; aluminum fascia+soffit 20-to-40-plus-year life; gutter-attachment-to-fascia geometry.
- **HB Elements** (trade) — painted wood 15–25-year repaint cycle; water-filled gutters ~5–7 lb/linear ft.
- **InterNACHI life-expectancy chart** — aluminum 20-to-40-plus-year, painted wood ~15–25-year material lives.
- **Angi and GAF** — gutter cleaning twice/year (spring + fall) maintenance cadence.
- **Ledegar Roofing** — failing-fascia signs (peeling paint, soft spots, cracks, sagging gutters).
- **IRC R905.2.8.5** (International Residential Code) — drip edge ≥¼ inch below the deck/fascia.
- **N.J.A.C. 5:23-2.7 / NJ Uniform Construction Code** — ordinary-maintenance trim/fascia path; permit office.
- **Zoning Ordinance Chapter 150, Article XXII** + **National Park Service** posture — Verona HPC-review framework.
