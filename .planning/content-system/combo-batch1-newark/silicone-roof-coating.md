# Newark × Silicone Roof Coating — rewrite rationale

De-fab literals cleared from the current combo file:
- `whyChooseUs`: removed "GAF Certified," "15+ years," "same-day estimates," "24/7 emergency response," "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties," "no hidden fees, no surprises" → replaced with NJ-HIC-licensed/insured, local-crew, free-written-estimate, photo-documented reasons (raw, no markdown).
- `overview[0]`: deleted "prices starting from $3–$6/sq ft and free estimates available today" and the figure → figure-free ASTM D6694 definitional lead.
- `pricing`: deleted invented "$3–$6/sq ft" + the unsourced "extends roof life 10–15 years" note → free-written-estimate framing (no primary cost authority exists for coatings, per fact pack §9/§D).
- `conversionHooks.urgencyNote`: removed "Don't wait… Early action saves thousands" hype → factual water-damage-limitation prompt.
- Stripped all unsourced hard numbers in prose: the fabricated "forty to sixty degrees Fahrenheit" surface drop, "fifteen to twenty-year service life" stated as fact, "thirty to forty percent of replacement / seventy to one hundred thousand dollars" cost claims, and the FM/UL permit-code assertions → replaced with named-sourced figures only.
- Replaced the "Newark heat island reduces roof temperature by 40–60°F" claim with the EPA qualitative heat-island framing (1–7°F urban-vs-outlying) + DOE >50°F-cooler + EPA 11–27% peak-cooling-demand (residential), all attributed.

Named sources cited in-text (per facts-energy-solar.md Part D + facts-nj-regulatory-climate.md):
- RCMA, Gaco, Henry, Mule-Hide, Tremco, GE/Momentive (silicone chemistry, ponding resistance, dry-film/warranty scaling, surface prep, adhesion test, recoat economics)
- Western Colloid (acrylic re-emulsification / ponded-area warranty exclusion)
- ASTM D6694 (liquid-applied silicone coating standard)
- DOE, CRRC, EPA (reflectance/emittance, >50°F cooler, 11–27% peak cooling demand, heat-island 1–7°F qualitative, no-R-value)
- NJ Uniform Construction Code / N.J.A.C. 5:23-2.7 (ordinary-maintenance exemption + 25% rule)

Newark localization carried forward (texture preserved, restructured answer-first):
- Ironbound / Ferry Street flat commercial membranes; Passaic-River low-lying ponding exposure (qualitative); Broad Street properties; Roseville brownstone + row-home rear flat sections; North Ward access constraints / tight party-wall lots.
- Newark permit office corrected to Department of Engineering, Office of Uniform Construction Code, 920 Broad Street (NOT Economic & Housing Development).

Rules check: directAnswer 38w; overview[0] 31w; challenges[0] 32w; process[0] 33w; all 6 FAQ first sentences ≤40w (max 38); metaDescription 153 chars; no de-fab literals; no will/should/must/need-to modality in declaratives; no price in any prose lead; no `**` in raw fields; no URLs; no city-specific heat/wind degree numbers. tsc --noEmit passes against ComboContent.
