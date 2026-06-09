# Newark × Cedar Shake Roof Replacement — rewrite rationale

**De-fab literals cleared (all from the original combo file):**
- `overview[0]` "prices starting from $15,000–$32,000 and free estimates available today" → deleted price + hype; replaced with a figure-free answer-first definition. Price now lives only in `pricing` and the cost FAQ.
- `whyChooseUs`: removed "GAF Certified," "15+ years protecting Essex County," "Premium materials from GAF, CertainTeed, Owens Corning with manufacturer warranties," "same-day estimates," "24/7 emergency response," and "Transparent pricing / no hidden fees, no surprises." Replaced with the brief's 4 factual reasons (NJ HIC licensed & insured; local Essex County crew; free written estimates; photo-documented workmanship).
- `conversionHooks.urgencyNote` "Don't wait... Early action saves thousands" → factual prompt about moisture into sheathing/framing and deck rot.
- `pricing.note` was just the service slug → replaced with the brief's sourced replacement note.
- Unsourced prose figures removed/re-anchored: the original's free-floating "five to seven times," "four to six times," "fifty to seventy percent," "Class A required by IBC," "DaVinci/Brava," and "British Columbia supply" claims were dropped; only fact-pack-backed numbers kept.

**De-quantified / corrected against fact packs:**
- Fire class corrected to the sourced statement: untreated cedar is **nonclassified** under UL 790 / ASTM E108 (not "Class C at best"); FRT cedar = Class B/C product (CSSB Certi-Guard); Class A wood roof = assembly rating (per facts-replacement §7 + service object).
- No-overlay rule pinned to **N.J.A.C. 5:23-6.4** (NJ Rehab Subcode lists wood shake) — not the model IRC.
- City-specific heat/wind degree numbers: none used (brief ban honored). Freeze-thaw referenced qualitatively, no degree figure.

**Named sources cited in-text:**
Cedar Shake & Shingle Bureau (20–40 yr shake / 30–50 yr shingle, Certi-Guard program, 1.5-in ventilated-base install guidance); InterNACHI (Wood = 25 yr life-expectancy chart, flex test); UL 790 & ASTM E108 (fire-test method); N.J.A.C. 5:23-6.4 (no roofing over wood shake / deteriorated deck); N.J.A.C. 5:23-2.7 + NJ Uniform Construction Code (ordinary-maintenance / permit rule); NRCA (moisture-driven failure); HomeAdvisor & Modernize (replacement range + 60–70% labor share).

**Newark texture preserved + localized:**
Forest Hill / North Ward single-family estate stock, Roseville brownstones, Ironbound dense rowhouse/flat-roof blocks framed as where cedar is/ isn't found; Forest Hill access constraints kept; Newark Department of Engineering Building Division (City Hall, Broad St) as permit office; COA hedge for pre-2007 Register districts (verify parcel) added to the permit FAQ.

**Gate checks:** all leads + FAQ first sentences ≤40 words (em-dashes counted); metaDescription 157 chars; no `**` in raw fields; no URLs; no modality in declaratives; no price in any prose lead; type-checks clean against ComboContent schema.
