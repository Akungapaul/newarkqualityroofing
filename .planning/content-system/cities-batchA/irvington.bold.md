# Irvington (cityId: irvington) — bold spans audit

All spans are inside ANSWER fields only. `**` inserted around named main topics; no other character changed. Stripping all `**` from the snippet yields the original object byte-for-byte (verified: stripping `**` from both original and snippet produces identical text).

## directAnswer (re-marked: outer whole-clause pair removed; topics bolded instead)
- **Irvington, NJ** (area served)
- **asphalt, flat-membrane, and metal roofs** (roof types repaired/replaced)

## overview[0] (answer-first lead — 3 enumerated stressors)
- **aging early-20th-century asphalt shingle roofs**
- **ice dams**
- **freeze-thaw cycling**

## residential.content[0] (material track)
- **asphalt shingles**

## commercial.content[0] (membrane systems)
- **EPDM, TPO, and modified-bitumen membranes**

## weatherChallenges.content[0] (3 named stressors)
- **snow**
- **nor'easters**
- **thunderstorms**

## faqs[].answer (first sentence only, 1-2 key terms each)
1. "Do you need a permit to replace a roof in Irvington, NJ?" → **ordinary maintenance**, **N.J.A.C. 5:23-2.7**
2. "Does a historic-district approval apply to roofing in Irvington?" → **no local historic-district ordinance**, **Certificate-of-Appropriateness**
3. "How much does a roof replacement cost in Irvington, NJ?" → **roof replacement**, **$10,000-$25,000**
4. "Why do older Irvington homes get ice dams?" → **ice dams**, **attic heat**
5. "What roofing material works best for an Irvington home?" → **Asphalt shingles**
6. "Are you licensed and insured to roof in Irvington?" → **New Jersey Home Improvement Contractor registration**
7. "How often should an Irvington roof be inspected?" → **twice per year, spring and fall**

## Self-audit
- Total `**` count: 42 (even — every open closed; no nesting).
- Stray single `*` after removing `**`: 0 (no italics).
- `**` located ONLY in directAnswer, the 4 section leads (overview[0], residential.content[0], commercial.content[0], weatherChallenges.content[0]), and the 7 faqs[].answer first sentences.
- No `**` in body paragraphs (overview[1+], residential/commercial/weather content[1+]), neighborhoods, projectSpotlights, whyChoose, pricing, metaTitle/metaDescription, credentialsHighlight.
- Diff of original-object-stripped vs snippet-stripped: IDENTICAL byte-for-byte.
