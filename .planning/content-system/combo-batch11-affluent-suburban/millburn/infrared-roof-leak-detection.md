# millburn / infrared-roof-leak-detection — rewrite rationale

De-fab literals cleared from the current file:
- Killed the price-in-lead ("prices starting from $350–$800 and free estimates available today") and replaced overview[0] with an answer-first, entity-grounded, figure-free NQR lead.
- Replaced the invented `$350–$800` pricing tier with the sourced repair-and-maintenance default `$400–$1,000` (HomeAdvisor/Modernize); replaced the placeholder note "pinpoint leak detection service."
- Deleted the whyChooseUs trust lines: "NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties," and "same-day estimates and 24/7 emergency response" → registered-HIC / fully-insured / Essex-County-crew framing.
- Deleted conversionHooks "Early action saves thousands" and the call/form hype CTA → factual midPageCta + urgencyNote.
- Added the REQUIRED `directAnswer` (entity-grounded; bold span 34 words) — the current file omitted it. No `definition` field (spliced post-assembly).
- Removed the fabricated "ninety percent or greater accuracy" stat and the "two to three business days / within a week" response-time claims from the FAQs; rebuilt FAQs from the ASTM C1153 service base.
- Stripped the inline markdown self-link `[infrared roof leak detection](/infrared-roof-leak-detection)`.

Millburn localization / guardrails:
- Foregrounded the Millburn situation per §F: downtown Millburn village (on the Rahway River, Floyd/Irene/Ida flash-flooding) + Mall at Short Hills low-slope COMMERCIAL drainage; storm branch-impact from the oak/maple canopy and Cora Hartshorn Arboretum; slate/copper/tile Short Hills estates drain rather than trap moisture (pitched-roof method differs). No basement/interior or township-wide Rahway claim; wrote "the Rahway River" (no branch).
- COA: bound narrowly — permit path filed with the Township of Millburn Building Department (no street address, no Construction Official named); reroof = ordinary maintenance N.J.A.C. 5:23-2.7; commercial 25% rule + Rehab Subcode N.J.A.C. 5:23-6.4. (Diagnostic scan itself triggers no permit.) No HPC/COA over-assertion — this service does not raise the historic angle, so kept to the permit path only.
- No Livingston anchors imported (no West Essex Park / Riker Hill / Passaic floodplain / 357 South Livingston Ave / split-levels); no Millburn-specific elevation/snow/wind number; wealth kept qualitative; no median income/home-value literals.

Named sources cited in-text: ASTM C1153 (standard practice for locating wet insulation; core-cut/probe/moisture-meter verification; optimal-window conditions); Fluke and IIBEC (wet-insulation displacement, thermal-contrast figures); the NRCA (90–95% flashing leak estimate; ASTM C1153 standard practice); Parish/Modernize/HomeGuide (flat-roof >25–30% membrane-damage replacement threshold); HomeAdvisor and Modernize ($400–$1,000 NJ leak-repair range); Essex County Parks (South Mountain Reservation ~2,112 ac) referenced via the Millburn texture; NJ Uniform Construction Code (N.J.A.C. 5:23-2.7, 5:23-6.4, 25% rule).
