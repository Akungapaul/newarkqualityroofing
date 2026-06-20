# montclair/green-roof-installation — rewrite rationale

## De-fab literals cleared (from the current combo file)
- **Price-in-lead** — deleted `overview[0]` "delivers expert ... with prices starting from $15–$35/sq ft and free estimates available today"; replaced with an answer-first, entity-grounded, figure-free lead. Price now lives only in `pricing` and the cost FAQ.
- **whyChooseUs trust block** — deleted "NJ licensed, GAF Certified — 15+ years protecting Essex County...", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties", and "Local team that knows Montclair — same-day estimates and 24/7 emergency response." Replaced with the registered-HIC / fully-insured factual set.
- **conversionHooks.urgencyNote** — deleted "Don't wait for minor damage to become a major expense. Early action saves thousands." Replaced with a factual note (flood-testing before planting avoids stripping vegetation to reach a leak).
- **Fabricated geography/specs** — removed the "Watchung Ridge microclimate / colder winters / higher wind above the canopy" framing, the LEED-credit and "Clean Energy Program grant" incentive claims, the "stormwater compliance credits" specific to Montclair, and the invented saturated-weight load numbers ("15–35 / 80–150 lbs per sq ft"). No fabricated streets ("North Mountain Avenue / Church Street / Valley Road / Montclair Heights"), no "130 mph / six-nail", no "tree preservation ordinance", no "salvage slate inventory."
- **Inline markdown self-links** — stripped all (`[Montclair](...)`, `[West Orange](...)`, `[Glen Ridge](...)`, `[green roof installation](...)`); zero links remain.
- **Old pricing** — `$15–$35/sq ft` / "living green roof system" replaced with the §E replacement/installation default `$10,000–$25,000` (green roofs = installation-type) plus the pack-sourced $6–$12/sq ft membrane-substrate figure in the note.

## Entity-grounding applied
- `directAnswer` rewritten entity-grounded: "Newark Quality Roofing is a roofing contractor providing green roof installation across Montclair, New Jersey, and Essex County, ..." (bold span 36 words) with the credential tail "as a registered New Jersey Home Improvement Contractor." outside the bold. No `definition` field (spliced post-assembly).
- NQR credential is "a registered New Jersey Home Improvement Contractor" / "fully insured" everywhere; zero "licensed" for NQR.

## Named sources cited in-text
- **InterNACHI life-expectancy chart** — green (vegetation) roof 5–40 yr; EPDM 15–25, TPO 7–20, modified bitumen 20.
- **Single Ply Roofing Industry + GAF EverGuard warranty data** — PVC single-ply 20–30 yr.
- **NRCA and ARMA** — ¼-in-per-foot minimum slope; ponding > 48 hours counts as a defect.
- **N.J.A.C. 5:23-2.7 / NJ Uniform Construction Code** — commercial/multi-family 25%-rule permit path; ordinary-maintenance exemption; structural-change trigger; filed through the **Township of Montclair Building Office**.
- **Article XXIII of Chapter 347 §347-136 / Montclair Historic Preservation Commission** — CONDITIONAL four-district COA (Town Center, Upper Montclair Business, Pine Street, Watchung Plaza) + local landmarks; in-kind exempt; Estate Section nominated-not-designated. **National Park Service** — Register listing alone = no federal restriction.
- **U.S. Census Bureau** — roughly 54% of units in multi-unit structures.
- **Essex County Parks** — Eagle Rock Reservation and Mills Reservation adjacency on the First Watchung ridge.
- **HomeAdvisor and Modernize (NJ)** — $10,000–$25,000 project range; **commercial cost guides citing M&M Roofing and WeatherStar** — $6–$12/sq ft membrane substrate.

## Differentiation (West-Essex siblings)
Foregrounded Montclair-distinct anchors: the conditional four-district Article-XXIII COA, the Eagle Rock + Mills Reservation First-Watchung-ridge adjacency, the ~54%-multi-unit stock, and the Bloomfield Avenue / Watchung Plaza / Upper Montclair commercial corridors filed through the Township of Montclair Building Office. Avoided West Orange's landmark-only Section 25-30 + South Mountain, Glen Ridge's binding Chapter 15.32 borough-wide gate, Verona's "HPC review" + Hilltop/Peckman, and Cedar Grove's no-COA. Led with the Montclair commercial/multi-unit situation (the low-localizability green-roof service) before the standardized assembly facts.
