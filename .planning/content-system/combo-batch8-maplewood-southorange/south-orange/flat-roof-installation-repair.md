# south-orange / flat-roof-installation-repair — rewrite rationale

**De-fab literals cleared from the current file:**
- Price-in-lead removed from `overview[0]` ("prices starting from $6,000–$18,000 and free estimates available today") → replaced with a figure-free, answer-first, entity-grounded NQR lead.
- Old invented pricing tier `$6,000–$18,000` / note "EPDM, TPO, or modified bitumen" → replaced with the brief's sourced repair range `$400–$1,000` (HomeAdvisor) + free-written-estimate note.
- `whyChooseUs` templated trust lines removed: "NJ licensed, GAF Certified — 15+ years protecting Essex County…", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties", "same-day estimates and 24/7 emergency response" → replaced with the registered-HIC / fully-insured factual reasons.
- `conversionHooks.urgencyNote` "Don't wait… Early action saves thousands" → factual ("Addressing a failed seam or ponding early limits interior and structural water damage.").
- Inline markdown self-links stripped (`[Maplewood](/flat-roof-installation-repair-maplewood-nj)`, `[flat roof](/flat-roof-installation-repair)`, `[West Orange](/flat-roof-installation-repair-west-orange-nj)`) — zero links now, matching committed siblings; the Maplewood/West Orange cross-references were also removed entirely (not just unlinked) to avoid importing sibling-city geography.
- Unsourced lifespan claims in the old FAQs ("25-30 years", "20-25 years" stated without a source) → re-anchored to the InterNACHI life-expectancy chart (EPDM 15–25, TPO 7–20, modified bitumen 20, BUR 30).
- No COA in the old file, but added the BINDING Montrose Park / Village Code Chapter 185 COA correctly framed as a LOCAL-ordinance matter (not National Register, not Village-wide), with the first sentence split to stay ≤40 words.

**Entity-grounding applied:**
- `directAnswer` entity-grounded, bold span 37 words ("Newark Quality Roofing is a roofing contractor providing flat roof installation repair across South Orange, New Jersey, and Essex County…"), credential tail "as a registered New Jersey Home Improvement Contractor." outside the bold.
- No `definition` field (propagated by post-assembly splice).
- NQR credential = "a registered New Jersey Home Improvement Contractor, fully insured" — no "licensed" for NQR anywhere.

**Differentiation (§F):** Foregrounded the South-Orange-distinct flat-roof anchors — the Seton Hall University 58-acre institutional low-slope inventory, the Village center / SOPAC storefronts around the NJ Transit station, the porch/sunroom low-slope sections on the large pre-war Victorian/Colonial/Tudor stock, the 8,000-tree / 181-street canopy clogging internal drains and scuppers, and the reservation-edge branch impact — leading with these before the standardized membrane facts. No Maplewood anchors imported.

**Named sources cited in-text:** InterNACHI life-expectancy chart (EPDM/TPO/modified-bitumen/BUR lifespans); NRCA and ARMA (¼-inch-per-foot slope, 48-hour ponding defect, 5-lb/inch ponding load); N.J.A.C. 5:23-2.7 + the NJ Uniform Construction Code (ordinary-maintenance exemption, 25% rule); the Township of South Orange Village Building Department at 76 South Orange Avenue (20-business-day plan review); Village Code Chapter 185 + the South Orange Historic Preservation Commission (Montrose Park COA); the National Park Service (NR-listing-alone-imposes-no-restriction); Essex County Parks (reservation eastern-edge border); the Township Fast Facts (8,000 shade trees / 181 streets); the Township planning evaluation (over half pre-1940); NOAA 1991–2020 normals at Newark Liberty (EWR) (freeze-thaw / January low); HomeAdvisor (NJ repair cost range); Integrity Home Exteriors (documentation guidance).

**Verification:** directAnswer bold 37w; overview[0] 39w; process[0] bold-span 35w; all FAQ first sentences ≤40w (max 38); metaDescription 155 chars; 6 FAQs (one cost FAQ); no de-fab literals; no NQR "licensed"; no markdown links; no `definition` field; esbuild parse OK; export name `southOrangeFlatRoofInstallationRepair`, serviceId `flat-roof-installation-repair`, cityId `south-orange` preserved.
