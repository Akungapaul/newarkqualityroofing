# montclair / roof-vent-installation-repair — rewrite rationale

**De-fab literals cleared (from the current combo file):**
- Price-in-lead: `overview[0]` "with prices starting from $300–$1,200 and free estimates available today" — deleted; replaced with an answer-first, entity-grounded NQR-applied lead (figure-free, bolded topics).
- `whyChooseUs`: "NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning…", "Local team that knows Montclair — same-day estimates and 24/7 emergency response" — all replaced with the registered-HIC / fully-insured / photo-documentation factual set.
- Pricing: OLD `$300–$1,200` + `note: 'per vent unit installed'` — replaced with the sourced repair/maintenance default `$400–$1,000` per HomeAdvisor (vent priced by system scope, not per unit).
- `conversionHooks.urgencyNote`: "Early action saves thousands" — replaced with a factual no-hype note about attic-moisture/mold/ice-dam damage.
- Inline markdown self-links: `[roof vent installation](/...)`, `[Montclair](/...)`, `[West Orange](/...)`, `[Bloomfield](/...)` — all stripped (combo now carries zero links, matching committed siblings).
- Fabricated Montclair geography/specs removed: the "Watchung Ridge elevation produces colder winter temperatures" microclimate claim, any elevation/gust figure, and the unsourced "one square foot per 150 sq ft" framing without IRC attribution.
- Unsourced number (1/150 ventilation ratio, 50/50 balance) — re-grounded to named sources in-text (IRC Section R806.2; ARMA/Air Vent Inc.).

**Entity-grounding applied:**
- `directAnswer` entity-grounded (bold span 34w ≤40): "Newark Quality Roofing is a roofing contractor providing roof vent installation repair across Montclair, New Jersey, and Essex County…" + credential tail "as a registered New Jersey Home Improvement Contractor" OUTSIDE the bold.
- No `definition` field authored (propagated by post-assembly splice).
- Credential framing = "a registered New Jersey Home Improvement Contractor" / "fully insured"; no "licensed" used for NQR anywhere.

**Named sources cited (mirrored from the rewritten service base + Montclair city page):**
- IRC Section R806.2 — minimum net free ventilating area 1/150 of the attic floor.
- ARMA and Air Vent Inc. — ~50% intake / 50% exhaust balance; net free area = actual unobstructed opening.
- U.S. DOE Building America Solution Center — soffit = primary intake; rafter baffles keep a clear soffit-to-ridge channel.
- Air Vent Inc. (Paul Scelsi) and the Roof Assembly Ventilation Coalition — never mix two exhaust types over one attic (short-circuit / intake reversal).
- GAF — power fan + ridge vent pulls outdoor air down through the ridge.
- Building Science Corporation (Joseph Lstiburek) — powered attic fans run counterproductive vs. balanced passive ventilation.
- NRCA — proper ventilation reduces condensation/mold/ice dams; common shingle-warranty condition.
- N.J.A.C. 5:23-2.7 + NJ Uniform Construction Code — detached 1–2 family reroof = ordinary maintenance, no permit; 25% rule on commercial/multi-family/attached, filed through the Township of Montclair Building Office.
- Montclair Historic Preservation Commission — Article XXIII of Chapter 347 §347-136 CONDITIONAL COA (four locally designated districts: Town Center, Upper Montclair Business, Pine Street, Watchung Plaza + local landmarks; in-kind exempt; Estate Section nominated-not-designated); National Park Service (Register-only = no federal restriction).
- HomeAdvisor — typical NJ leak-repair range $400–$1,000.
- U.S. Census Bureau — roughly 54% of Montclair units in multi-unit structures (qualitative housing/COA framing).

**Montclair differentiation foregrounded:** conditional four-district Article-XXIII COA; multi-gabled Victorian/Tudor compartmentalized attics; ~54% multi-unit two-/three-family rooflines; Bloomfield Avenue / Watchung Plaza / Upper Montclair commercial corridors; Township of Montclair Building Office permit path. No South Mountain Reservation, no Glen Ridge/Verona/West Orange/Cedar Grove COA framings, no elevation/gust numbers.
