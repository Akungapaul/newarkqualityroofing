# Montclair / roof-repair — rewrite rationale

De-fab literals cleared from the current file:
- Price-in-lead ("prices starting from $350–$1,500 and free estimates available today") removed from overview[0]; price now lives only in `pricing` and the cost FAQ.
- whyChooseUs templated trust lines deleted: "NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties", "same-day estimates and 24/7 emergency response". Replaced with registered-HIC / fully-insured factual reasons.
- Fabricated streets/sections removed: "North Mountain Avenue", "Montclair Heights". Only verified sections used (Upper Montclair, Watchung Plaza, Montclair Center/Town Center, Estate Section, Pine Street, South End, Erwin Park) plus the Bloomfield Avenue corridor.
- Fabricated wind claim removed: "fifteen to twenty miles per hour higher" and "enhanced fastening schedules / wind-rated sealant"; the "130 mph wind resistance with enhanced six-nail fastening" spec dropped. West-side gust exposure kept QUALITATIVE only.
- Fabricated "aggressive tree preservation ordinance" / "tree ordinance requires permits" removed; canopy kept qualitative.
- Named slate-quarry inventory ("salvage inventory of reclaimed slate", "active quarries in Vermont and Pennsylvania") removed.
- urgencyNote "Early action saves thousands" replaced with factual water-damage framing.
- Old pricing range $350–$1,500 → $400–$1,000 (repair & maintenance default). Old metaDescription rewritten, de-fabbed, no `**`.
- COA corrected to CONDITIONAL local gate (four locally designated districts + local landmarks, Article XXIII of Chapter 347 §347-136; in-kind exempt; Estate Section nominated-not-designated); never asserts a township-wide COA. No inline self-links present to strip.

Entity-grounding applied: directAnswer entity-grounded ("roofing contractor … across Montclair, New Jersey, and Essex County …" bold span 36 words; credential tail "as a registered New Jersey Home Improvement Contractor" outside bold). No `definition` field (spliced post-assembly). Credential = registered NJ HIC + fully insured; no "licensed" for NQR.

Named sources cited in-text:
- NRCA (flashing 90–95% of leaks, industry estimate; ¼-in/ft slope + 48-hr ponding with ARMA).
- GAF technical guidance (flashing as most common leak source).
- Insurance Information Institute / Triple-I 2019–2023 (wind & hail 2.8%, 1 in 36).
- InterNACHI life-expectancy chart (slate 60–150 yr, copper 70+ yr, EPDM/TPO/mod-bit 15–25/7–20/20 yr).
- ARMA (ponding/slope, with NRCA).
- Integrity Home Exteriors (repair-process and documentation guidance; NJ 10–40% labor figure).
- Owens Corning warranty guidance (workmanship vs material warranty).
- HomeAdvisor / Modernize (NJ leak-repair $400–$1,000; flashing reseal $200–$500).
- N.J.A.C. 5:23-2.7 + 5:23-6.4 / NJ Uniform Construction Code (ordinary maintenance, 25% rule, Rehab Subcode); Township of Montclair Building Office (permit office, function only).
- Township of Montclair Housing Element (pre-WWII majority, qualitative); U.S. Census Bureau (~54% multi-unit).
- Essex County Parks (Eagle Rock + Mills Reservation adjacency, First Watchung ridge).
- Montclair Historic Preservation Commission / Article XXIII of Chapter 347 §347-136; National Park Service (National Register listing alone, no federal restriction); Standard 6 of the Secretary of the Interior's Standards (in-kind matching).
