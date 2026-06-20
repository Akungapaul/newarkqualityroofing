# verona/emergency-roof-repair — rewrite rationale

**De-fab literals cleared (all from the current combo file):**
- Price-in-lead `$500–$2,500` in `overview[0]` and the OLD invented pricing tier → replaced with the pack-sourced emergency range `$200–$1,000+` plus a 25–50% emergency premium (Integrity Home Exteriors / HomeAdvisor); price now lives only in `pricing` + the cost FAQ.
- `whyChooseUs`: "NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning…", "same-day estimates and 24/7 emergency response" → replaced with the registered-HIC/fully-insured factual set.
- Response-time fabrications ("within hours of a call," "two to four hours," "four to six hours") → deleted; no response-time claim anywhere.
- Fabricated streets/sections **Sunset Avenue** (and the current file's other invented names) → dropped; only verified Verona sections used (Bloomfield Avenue, Pompton Avenue, Lakeside Avenue near Verona Park, Personette/Claremont, Afterglow not needed here).
- `metaDescription` "24/7 tarping and stabilization" → de-fabbed, no `**`, no "licensed."
- `conversionHooks.urgencyNote` "Early action saves thousands" → factual no-hype version.
- All inline markdown self-links (`[Montclair](/…)`, `[West Orange](/…)`) → stripped (file carries zero links).

**Entity-grounding applied:** `directAnswer` reframed to "Newark Quality Roofing is a roofing contractor providing emergency roof repair across Verona, New Jersey, and Essex County…" (bold span 28 words) with the credential tail "as a registered New Jersey Home Improvement Contractor" outside the bold. No `definition` field (spliced post-assembly). NQR credential = registered NJ HIC / fully insured throughout; zero "licensed" for NQR.

**Localized to Verona (verified facts only):** split-level transition-flashing / offset-plane water pathways; Eagle Rock (First Watchung) + Hilltop (Second Watchung) reservation-edge canopy branch impact (NOT South Mountain/Mills); Peckman River drainage along Bloomfield Avenue and Lakeside Avenue near Verona Park (qualitative, city-page gauge framing); pre-war plank/deteriorated sheathing at tear-off; Bloomfield Avenue / Pompton Avenue corridor storefronts; permit office = Township of Verona Department of Building and Inspections, Municipal Building, 600 Bloomfield Avenue. (Historic/HPC framing intentionally not invoked — the historic angle does not arise for emergency stabilization; the permit FAQ uses the N.J.A.C. 5:23-2.7 + 25% rule path.)

**Named sources cited in-text:** EPA (24–48 hr mold-growth window); NOAA (severe thunderstorm ≥58 mph); ARMA/manufacturer guidance (3-tab ~60 mph, architectural to 130 mph); Insurance Information Institute / Triple-I 2019–2023 (wind & hail 2.8% / 1 in 36, avg $14,747; water damage avg $15,400); FEMA + U.S. Army Corps of Engineers Operation Blue Roof (30-day tarp span; ≤50% framing threshold); N.J.A.C. 5:23-2.7 / NJ Uniform Construction Code (detached 1–2 family ordinary-maintenance exemption; 25% rule); Essex County Parks (Eagle Rock + Hilltop reservations); NOAA NWS Peckman River gauge at Verona; Integrity Home Exteriors / HomeAdvisor (emergency premium + $400–$1,000 standard leak range).

**Gate checks:** directAnswer bold 28w; overview[0] 39w / challenges[0] 34w / process[0] 24w leads; 6 FAQs, each first sentence ≤40w; meta 159 chars; no `**` in raw fields; no modality; no links; esbuild parse OK.
