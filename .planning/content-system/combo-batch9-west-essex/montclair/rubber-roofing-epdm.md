# montclair/rubber-roofing-epdm — rewrite rationale

## De-fab literals cleared
- **Price-in-lead** — deleted "with prices starting from $6,000–$16,000 and free estimates available today" from `overview[0]`; price now lives only in `pricing` + the cost FAQ.
- **Old pricing tier** `$6,000–$16,000` / "EPDM rubber membrane system" → sourced replacement default `$10,000–$25,000` (per HomeAdvisor and Modernize) since EPDM is a roof-type/installation service.
- **whyChooseUs templated trust lines** — removed "NJ licensed, GAF Certified — 15+ years protecting Essex County…", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties," and "Local team that knows Montclair — same-day estimates and 24/7 emergency response." Replaced with registered-HIC / fully-insured factual reasons.
- **conversionHooks.urgencyNote** "Early action saves thousands" → factual "Addressing a failed EPDM seam early limits interior and structural water damage."
- **Fabricated Montclair prose** removed: the "Valley area" / mid-century-modern framing, the "Watchung Ridge elevation produces winter lows below zero and summer surface temperatures above 150 degrees" microclimate numbers, "sixty-mil minimum / forty-five-mil" thickness specs, "pull tests on sample seams," "uphill-lot neighbor visibility / gravel ballast aesthetic regulation," and "the Montclair planning board has not formally regulated flat-roof membrane color."
- **Inline markdown self-links** stripped: `[rubber roofing EPDM](/rubber-roofing-epdm)` and `[Bloomfield](/rubber-roofing-epdm-bloomfield-nj)` → removed entirely (zero links, matching committed siblings).
- **Unsourced lifespans** ("twenty-five to thirty-five years," "thirty to forty percent of full replacement," "ten to fifteen years") → replaced with the named-sourced InterNACHI 15-to-25-year EPDM figure and the Modernize/WeatherShield patch/re-weld costs.
- No GAF Certified / same-day / 24/7 / 15+ years / 130 mph / six-nail / South Mountain Reservation / Village-wide or township-wide COA / fabricated street anywhere. No "licensed" for NQR.

## Entity-grounding applied
- `directAnswer` rewritten entity-grounded: bold span (39 words ≤40) establishes "Newark Quality Roofing… roofing contractor… Montclair, New Jersey, and Essex County" with Montclair-specific scope (flat rear-addition/porch/low-slope sections, pre-war homes, Bloomfield Avenue storefronts); credential tail "as a registered New Jersey Home Improvement Contractor." sits outside the bold.
- No `definition` field authored (propagated by post-assembly splice).
- Credential framing = "a registered New Jersey Home Improvement Contractor, fully insured" — no "licensed" for NQR.

## Named sources cited in-text
- **InterNACHI life-expectancy chart** — EPDM 15–25 yrs, TPO 7–20, modified bitumen 20.
- **HomeGuide membrane-repair guidance** — seam separation = most common EPDM failure; membrane shrinkage = secondary failure point.
- **NRCA and ARMA** — ¼-inch-per-foot minimum slope; ponding >48 hours counts as a defect.
- **Modernize and WeatherShield cost data** — small patch $300–$500, seam re-weld $200–$400.
- **HomeAdvisor and Modernize** — NJ roof-replacement range $10,000–$25,000.
- **U.S. Census Bureau** — roughly 54% of Montclair units in multi-unit structures.
- **Essex County Parks** — Montclair adjoins Eagle Rock Reservation and Mills Reservation on the First Watchung ridge.
- **NOAA 1991–2020 normals at Newark Liberty (EWR)** — crosses 32°F repeatedly; average January low near 25.5°F.
- **N.J.A.C. 5:23-2.7** (ordinary-maintenance exemption + 25% rule, Township of Montclair Building Office) and **N.J.A.C. 5:23-6.4** (Rehab Subcode complete-removal triggers), per the NJ Uniform Construction Code.
- **Article XXIII of Chapter 347, §347-136** — conditional COA from the Montclair Historic Preservation Commission inside the four locally designated districts (Town Center, Upper Montclair Business, Pine Street, Watchung Plaza) or on a local landmark; in-kind exempt; Estate Section nominated-not-designated.
- **National Park Service** — National Register listing alone places no federal restriction.
- **Owens Corning warranty guidance** / **Integrity Home Exteriors documentation guidance** — system vs. workmanship warranty; photo documentation.

## Validation
directAnswer bold 39w · overview[0]/challenges[0]/process[0] leads ≤40w · all 6 FAQ first sentences ≤40w · metaDescription 158 chars · 0 de-fab literals · 0 modality · 0 links · no definition field · serviceId/cityId preserved.
