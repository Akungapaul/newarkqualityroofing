# Orange (cityId: orange) — Bold Span Audit

Bold markers (`**`) inserted ONLY in answer fields. Stripping all `**` from the
snippet yields the original object byte-for-byte (verified by diff after removing
`**` from both original and snippet).

## directAnswer (re-marked: outer pair removed, inner topics bolded)
- **Orange, NJ**
- **asphalt, slate, metal, and flat membrane roofs**
- **Main Street commercial buildings**

## overview[0] (enumerated stressors)
- **tight-lot access**
- **low-lying stormwater and moisture**
- **tree debris**

## residential.content[0] (material tracks)
- **natural slate and copper**
- **asphalt shingles**

## commercial.content[0] (membrane systems)
- **EPDM, TPO, and modified-bitumen membranes**

## weatherChallenges.content[0] (climate stressors)
- **31.5 inches of snow**
- **freeze-thaw cycling**
- **nor'easters**
- **25 to 30 thunderstorms**

## faqs[].answer (first sentence only, 1-2 key topics each)
1. Permit FAQ — **detached one- and two-family home** / **no construction permit**
2. Certificate of Appropriateness FAQ — **Certificate of Appropriateness** / **Orange's four locally designated districts**
3. Cost FAQ — **roof replacement** / **roof-leak repair**
4. Materials FAQ — **asphalt shingles, natural slate, and flat membrane**
5. Tight-lot FAQ — **stages materials compactly, nets debris between structures, and coordinates delivery**
6. Flat commercial roofs FAQ — **membrane seams** / **parapet flashing**
7. Tree debris FAQ — **mature street trees** / **wooded West Orange ridge**
8. Weather frequency FAQ — **31.5 inches of snow** / **freeze-thaw cycling**

## Self-audit
- 54 `**` occurrences = 27 balanced pairs (even). No nesting, no `***`, no single-asterisk italics.
- `**` present ONLY in directAnswer, the 4 section leads, and faqs[].answer first sentences.
- NOT present in overview[1..], residential/commercial/weather content[1..], neighborhoods, projectSpotlights, whyChoose, pricing, metaTitle/metaDescription, credentialsHighlight.
- 1-3 spans per answer; each a named entity/topic, not a whole clause.
- All FAQ bold spans fall within the first (definitive) sentence; second/expansion sentences left unbolded.
