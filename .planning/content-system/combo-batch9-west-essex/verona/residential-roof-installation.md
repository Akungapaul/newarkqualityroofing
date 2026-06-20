# verona/residential-roof-installation — rewrite rationale

## De-fab literals cleared
- **Price-in-lead** removed from `overview[0]` ("prices starting from $8,500–$25,000 and free estimates available today") and from the cost FAQ — price now lives only in `pricing` and the cost FAQ, sourced.
- **Invented pricing tier** `$8,500–$25,000` / "complete residential installation" → replaced with the sourced replacement/installation default `$10,000–$25,000` (HomeAdvisor + Modernize).
- **whyChooseUs trust lines** deleted: "NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties", "same-day estimates and 24/7 emergency response" → de-fabbed to registered-HIC / fully-insured / free-estimate / photo-documentation reasons.
- **Fabricated self-stats / volume claims** removed: "installed new roofing systems on hundreds of Verona homes," "split-level-specific protocol."
- **Fabricated streets/sections** removed: the old file's "[Verona Park]" inline link and the Montclair/Claremont/Personette hilltop wind framing were rebuilt to verified-only sections (Personette Avenue, Claremont Avenue, Verona Park/Lakeside Avenue, Bloomfield Avenue + Pompton Avenue corridors). No "Lakeview/Sunset/Park Place" present.
- **Inline markdown self-links** stripped: `[Verona Park](/roofing-in-verona-nj)` and `[Montclair](/residential-roof-installation-montclair-nj)` → plain text removed entirely (zero links).
- **`urgencyNote`** "Early action saves thousands" → factual ice-dam/water-damage framing, no fabricated savings.
- **Permit/historic corrections**: the old file said "Verona requires building permits for full roof installations" — corrected to the statewide UCC reality (detached 1-/2-family reroof = ordinary maintenance, no permit, per N.J.A.C. 5:23-2.7). Historic framed as NARROW **HPC review** (Chapter 150, Article XXII; exactly two designated landmarks — Erie Railroad Freight Shed at 62 Depot Street + Verona United Methodist Church; in-kind exempt; Afterglow PROPOSED-only), never "Certificate of Appropriateness/COA."
- **Unsourced material recommendations** ("GAF Timberline HDZ or CertainTeed Landmark Pro") dropped — no manufacturer brand as an NQR credential; lifespans now named-sourced.

## Entity-grounding
- `directAnswer` entity-grounded, bold span 32 words ("roofing contractor providing residential roof installation across Verona, New Jersey, and Essex County…"), credential tail "as a registered New Jersey Home Improvement Contractor" outside the bold. No `definition` field (spliced post-assembly).
- Credential = "a registered New Jersey Home Improvement Contractor, fully insured." No "licensed" used for NQR anywhere.

## Named sources cited in-text
- **InterNACHI life-expectancy chart** — slate 60–150 yr, metal 40–80 yr, architectural asphalt 30 yr, 3-tab 20 yr, EPDM 15–25 / TPO 7–20 / modified bitumen 20 yr.
- **NRCA** — ~90–95% of roof leaks originate at flashing (industry estimate); 1 sq ft net-free vent per 150 sq ft attic floor; balanced ventilation extends roof life.
- **NJ Uniform Construction Code / N.J.A.C. 5:23-2.7** — detached 1-/2-family reroof = ordinary maintenance, no permit; structural/commercial/25% triggers a permit.
- **N.J.A.C. 5:23-6.4 (NJ Rehabilitation Subcode)** — full removal required for water-soaked, slate, or multi-layer roofs.
- **IRC R905.1.2** — ice barrier from eave to ≥24 in inside the exterior wall line.
- **Owens Corning warranty guidance** — material vs. workmanship warranty split.
- **HomeAdvisor + Modernize** — NJ replacement range $10,000–$25,000.
- **Essex County Parks** — Eagle Rock (First Watchung) + Hilltop (Second Watchung) reservation edges.
- **National Park Service** — National Register listing alone places no restriction on a private owner.
- **Township of Verona Department of Building and Inspections, Municipal Building, 600 Bloomfield Avenue** — permit office (no Construction Official named).

## Differentiation
Leads with Verona-distinct anchors: split-level transition flashing, plank-deck tear-offs on pre-war Colonials, Eagle Rock + Hilltop reservation-edge debris (never South Mountain/Mills), Bloomfield/Pompton corridor low-slope membrane, and the narrow Chapter-150-Article-XXII HPC-review posture. No sibling COA frameworks imported.
