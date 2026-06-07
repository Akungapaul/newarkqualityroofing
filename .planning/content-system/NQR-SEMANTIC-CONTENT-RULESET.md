# NQR Semantic Content Ruleset

> Canonical writing + audit standard for every Newark Quality Roofing (NQR) page and KB article. Answer-first semantic SEO. Any writer or auditor follows this verbatim. Pilot reference: the Roof Repair service page (`slug: roof-repair`).
>
> **Companion files:** verified facts and citable authorities live in `.planning/content-system/research/sources-and-nqr-facts.md` (Source Register Part A = cite-by-name authorities; Part B = NQR business facts with provenance flags). Statistics with provenance live in the `facts-*.md` research files. Page architecture lives in `map-template.md` + `map-prose-schema.md`.
>
> **Source rules (provenance):** this ruleset synthesizes two source documents kept in `.planning/content-system/source-rules/` — `817144395-Semantic-Content-Writing-Rules.pdf` (24 rules + topical-map codes) and `1021150303-Holistic-SEO-Writing-System-of-Koray-Gubur.pdf` (14 Koray Gübür rules). The canonical cross-project synthesis also lives in the Obsidian vault `SEO/`; this in-project copy is the working source of truth for the rewrite.
>
> **Enforcement:** machine-checkable rules are gated by `npm run audit:semantics` — a **hard gate** (build-failing) for clean-signal rules and an **advisory** report for judgment rules. Tier is marked per rule below as *(gate)* or *(advisory)*. Rules with no marker are author/review guidelines.
>
> **D-01 hard rule overrides everything below:** no placeholder or fabricated trust value renders in HTML or JSON-LD. If a canonical value is unknown, OMIT it — never placeholder, never invent. A statistic flagged `[UNVERIFIED]` in the research files is stated qualitatively or dropped, never as a hard number.

---

## SECTION 1 — Non-Negotiable Rules (numbered checklist)

1. **Every heading is phrased as a question.** Search engines reframe headings as questions, so write them that way explicitly ("How Do You Repair a Leaking Roof in Newark?", not "Roof Leak Repair"). — *Verify:* read every `<h2>`/`<h3>`; each ends in `?` and is a grammatical question.

2. **The first sentence under each heading is a definitive factual answer, ≤40 words / ~320 characters.** It directly answers the heading question before any expansion. — *Verify:* sentence 1 word count ≤40 and char count ≤320; it answers the heading, not background.

3. **The answer text is bolded — not the search term.** Wrap the factual answer span in `**`, never the keyword for its own sake. **City pages** bold the **named main topics/entities inside the answer** (1–3 spans — e.g. the enumerated stressors, the material tracks) in the rendered-and-parsed answer fields only: `directAnswer` (hero), each section's answer-first lead (overview/residential/commercial/weatherChallenges first string, via `ProseLead`), and the first sentence of each FAQ answer (via `CityFaqs`); never in body paragraphs or other raw-rendered fields (a literal `**` there leaks). — *Verify:* the bolded span is the answer's topic/entity, not the bare keyword and not a whole clause; no `**` appears in body paragraphs/neighborhoods/spotlights/meta.

4. **Heading and answer share opening structure** ("How to do X" → "To do X, …"; "What is X?" → "X is …"; "How much does X cost?" → "X costs …"). The answer mirrors the question's adjective/noun/predicate order. — *Verify:* the answer's first words map to the question's grammatical form, not "X is known for…".

5. **State established facts, never predictions or opinions.** Write "X does Y" / "Asphalt shingles last 15–30 years", not "X is known for Y" or "shingles will probably last". — *Verify:* every claim is a present-tense established fact, not a forecast or judgment.

6. **No modality words: `will`, `should`, `need to`, `have to` (and `must`, `can`, `might`, `may` as hedges).** *(gate — excludes FAQ `question:` fields)* These signal opinion, not fact. — *Verify:* grep the prose for `will|should|need to|have to|must|might`; each hit is removed or rewritten to indicative present tense.

7. **Every information point carries an exact number, percentage, or statistic.** Quantify wherever a verified figure exists ("NJ leak repair costs $400–$1,000", "~90–95% of leaks originate at flashing"). — *Verify:* each paragraph/list item contains a figure or names the qualified count; vague intensifiers ("a lot", "very long") are absent.

8. **Plural nouns are qualified with a count** ("6 common causes", "3 warning signs", "5 roofing materials"). *(gate — count must match item count where structurally detectable)* — *Verify:* every enumerated set is introduced by its exact integer count, and the count matches the number of items that follow.

9. **Authorities are cited by name in-text, never hyperlinked out** ("According to the NRCA, …", "Per the NJ Uniform Construction Code, …"). A plain, unlinked source list may sit at the page foot. *(gate — zero outbound `<a href>`/`https?://`/markdown links in body prose)* — *Verify:* in-text citations name a Source-Register Part-A authority; zero outbound `<a href>` to external domains in body prose.

10. **No fabricated or unverified numbers render.** Use only figures present (and not flagged `[UNVERIFIED]`/`[VERIFY]`) in the research files; otherwise state the fact qualitatively or omit it. *(gate — zero `[VERIFY]`/`[UNVERIFIED]` strings and zero de-fabrication literals in content/metaTitle/metaDescription)* — *Verify:* cross-check every hard number against `facts-*.md` / `sources-and-nqr-facts.md`; any `[VERIFY]`/`[UNVERIFIED]` figure is omitted or de-quantified.

11. **Delete every word that does not change meaning.** Shortest sentence that carries the fact; "as short as possible, as long as necessary." — *Verify:* removing any remaining word would lose a fact; no filler, throat-clearing, or restatement remains.

12. **No everyday/casual language and no analogies.** *(advisory)* No "basically", "a roof is like an umbrella", "at the end of the day". — *Verify:* scan for colloquialisms and `like a`/`as if`/`imagine` analogy framings; none present.

13. **Name entities and their attributes; use no pronoun that co-refers back to an entity.** *(advisory)* Repeat "the flashing", "the underlayment", "Newark" rather than "it"/"they"/"there". — *Verify:* every "it/they/this/that/these/those/there" either has no entity antecedent or is replaced by the named entity.

14. **No power, sentiment, or hype words.** *(advisory)* Ban "best", "amazing", "trusted", "leading", "premier", "unbeatable", "love", "stunning". — *Verify:* grep for the banned sentiment list; each hit is removed (brand trust claims live only in branded CTAs, not semantic prose).

15. **Do not add a sentence without a logical reason; combine facts that share a subject.** Two facts about "the flashing" become one sentence, not two. — *Verify:* no adjacent sentences share a subject that could merge without loss; each sentence advances the context.

16. **Put `if`/`because` constraints in the second half of the sentence** ("Repair the flashing, if corrosion covers under 30% of the area" — not "If corrosion…, repair…"). — *Verify:* conditional/causal clauses follow the main declaration, not precede it.

17. **Give examples after a plural noun, inline** ("3 materials: asphalt, slate, metal"). — *Verify:* example lists are introduced by the counted plural noun + colon, then the items.

18. **Respect singular/plural precision** ("a single warning sign" vs "6 warning signs"); subject–verb agreement matches the count. — *Verify:* noun number and verb agree with the stated count throughout.

19. **One macro context per page; a linear context vector from H1 to the final heading.** A roof-repair money page stays about roof repair end to end; context never jumps topic mid-section. — *Verify:* every heading descends logically from the H1 topic; no heading introduces an unrelated macro topic.

20. **Repeat the key n-gram near the start and near the end of the page,** and order declarations logically (definition → causes → signs → process → cost). — *Verify:* the primary n-gram ("roof repair", "roof repair in Newark") appears in the opening answer and in the closing section.

21. **Do not break context across paragraphs.** Each paragraph continues the prior one's subject thread; no orphan paragraph. **The section body must DEVELOP its answer-first lead in the order the lead introduces it** — if the lead enumerates N items, the body covers those N in sequence (count matching, Rule 8), introduces no new top-level point the lead did not set up, and relocates any fact that belongs to a different section's question (e.g., city demographics/population only in "who/what" framing, never under a "problems" lead; permit-law only in the permits section). Lead + body must read as one developed thought, not two. — *Verify:* read consecutive paragraphs; each shares a context link (entity, process step, or cost dimension) with the one before, and each develops the section's lead claim rather than introducing an unrelated fact.

22. **Split MAIN (money) vs SUPPLEMENTARY (informational) content; the money page stays focused.** Topic depth (full cause breakdowns, material deep-dives) lives in linked KB articles, not the service page. — *Verify:* the service page covers the conversion-relevant summary; exhaustive depth is delegated to a linked supporting article (no duplicate full treatments → no self-cannibalization).

23. **Internal-link anchor text appears in BOTH the source heading and the target page title.** *(gate — anchor text is a substring of the target page `<title>`/H1)* Link to `targetURL#identifier`; link templatic siblings and antonyms; use `next/link`, never raw `<a href>`. — *Verify:* each internal anchor's text is a substring of the target page's `<title>`/H1; link uses `next/link` + optional `#fragment`.

24. **CTAs are branded and visually distinct from semantic content; CTA copy never enters the context vector.** Keep `#lead-form` above the fold. — *Verify:* CTA copy ("Schedule Your Free Inspection") sits in a CTA component, not in body prose, and is excluded from the answer/heading vector; `#lead-form` renders above the fold.

25. **Facts are identical across every page, schema, GBP, and citations (brand consistency).** Phone, hours, service area, license type, price ranges, and figures match the canonical `site-config.ts` everywhere. — *Verify:* spot-check a repeated fact (e.g., hours, service area = Essex County) across two pages + JSON-LD; values are byte-identical.

26. **One `<h1>` per page; strict heading hierarchy (h1 > h2 > h3, no skips).** *(gate)* — *Verify:* exactly one `<h1>`; no `<h3>` appears without a parent `<h2>`; no level is skipped.

27. **Order attributes within a sentence: defining/primary attribute first, secondary attributes after.** State the class-defining trait before incidental ones (Koray penguin example: "a flightless seabird that lives below the equator and has flippers", not "with flippers… that live…"). — *Verify:* the first attribute after the entity is the one that defines its class/function; incidental attributes follow.

28. **Use context-appropriate verbs, consistently.** The verb's semantic field matches the claim and stays consistent for that context: maintenance "extends roof life", drainage work "improves drainage", fastening/bracing "increases wind-uplift resistance". Do not swap verbs whose fields differ ("develop" ≠ "improve" ≠ "increase"). — *Verify:* each quantified outcome uses the verb whose field matches it; the same outcome uses the same verb across pages.

29. **Use the most contextually precise entity and enrich with semantically related terms.** Name the specific entity ("ice-and-water shield", "step flashing", "drip edge"), not a generic stand-in ("underlayment", "metal"), and include co-occurring related terms/synonyms of the head concept so the section reads as topically complete. — *Verify:* generic nouns are replaced by the precise entity where one exists; each section names ≥2 related entities/qualifiers beyond the head term.

30. **Question headings are unique and self-authored.** No heading is copied verbatim from a competitor or a Google PAA box, and no two headings across the site are identical strings. *(gate: cross-site heading uniqueness; guideline: not-copied-from-competitor)* — *Verify:* every rendered question heading is unique across the registry; phrasing is original, not a lifted PAA string.

31. **Keep H2 grouper questions short; push conditions/qualifiers down.** Long "Question + condition" forms move the condition into the answer or into an H3. *(advisory)* — *Verify:* H2 questions stay short-form (roughly ≤10 words); qualifiers/`if`-conditions do not live in the H2.

32. **Each page delivers information gain — no duplicated treatment.** A page adds value not already covered elsewhere; SUPPLEMENTARY (KB) pages need not be maximally comprehensive (reinforces R22). The full deep-dive lives in exactly one place; other pages summarize and link. — *Verify:* no two pages carry the same full treatment of a sub-topic; the money page summarizes and links the KB deep-dive.

33. **Add perspective richness after the definitive answer, not before it.** Once the answer is stated, optionally diversify with audience-relevant perspectives (residential vs commercial, historic-district vs standard) — without diluting the semantic structure or displacing the answer. — *Verify:* perspectives appear after the bolded answer sentence; the answer still leads.

34. **Phrase for token efficiency; do not restate via co-reference.** Prefer one clause that carries the fact over a second sentence that re-refers to the same subject ("Tanjiro is 25; his birthdate is Dec 2, 2002" → "Tanjiro is 25 years old and his birthdate is Dec 2, 2002" is worse than the single-token-reuse form). Reinforces R13 (no entity pronouns) and R15 (combine facts sharing a subject). — *Verify:* no sentence exists solely to re-reference a prior subject; shared-subject facts are combined.

---

## SECTION 2 — Content-Component Vocabulary (templates)

Each component carries one fact-unit. Bold the **answer**, not the keyword. Cite authorities by name. Use only verified figures.

### Definition
Names the entity and states what it is, in indicative present tense.
> **Template:** `[Entity] is [class] that [function/attribute].`
> **NQR example:** "Roof flashing is **the sheet-metal sealing the transitions and penetrations of a roof** — chimneys, valleys, and vent stacks. Flashing failure causes roughly 90–95% of roof leaks, per trade data attributed to the NRCA."

### Featured-Snippet Answer (≤40 words / ~320 chars)
The first sentence under a heading, snippet-shaped, bolded.
> **Template (heading → answer):** `H2: "What Causes Most Roof Leaks?"` → "**Most roof leaks originate at the flashing — the metal sealing roof transitions and penetrations.** Field-shingle failures cause only ~5–10% of leaks; the remaining ~90–95% trace to flashing, per trade data attributed to the NRCA."

### PAA Answer (one definitive sentence)
Answers a People-Also-Ask-style sub-question in a single self-contained sentence.
> **Template:** `[Subject] [verb] [quantified fact].`
> **NQR example:** "**Roof leak repair in New Jersey costs $400–$1,000**, roughly 10–15% above the national average."

### Listing + List Item + List Outro
Ordered/unordered list where every item starts with the same part of speech (verb+noun for actions, noun for things). Each item is a "Declaration: Evidence" unit where possible. Closed by an outro that restates the count or links onward.
> **Listing intro (counted plural + colon):** "6 components fail and cause roof leaks:"
> **List item template (parallel verb+noun, with figure):**
> - "Flashing corrodes at chimneys and valleys — flashing accounts for ~90–95% of leaks."
> - "Field shingles crack, curl, and lose granules — shingle failure causes only ~5–10% of leaks."
> - "Underlayment tears under wind-driven rain, exposing the deck within one storm cycle."
> **List outro:** "These 6 failure points define the scope of a Newark roof-leak repair."

### Table + Table Definition + Table Outro
A table is ALWAYS preceded by a context/definition sentence and ALWAYS closed by an outro sentence.
> **Table definition (precedes):** "Roof-repair cost in New Jersey varies by damage type, as the 3 ranges below show:"
> **Table:**
> | Repair type | NJ cost range | vs. national |
> |---|---|---|
> | Leak repair | $400–$1,000 | +10–15% |
> | Flashing replacement | (omit until verified) | — |
> | Coastal premium | +15–20% | salt-air exposure |
> **Table outro (closes):** "These NJ ranges sit ~10–40% above national averages because of higher labor and stricter NJ code."

### Declaration : Evidence (list item form)
A claim followed by its quantified or named-authority proof, in one item.
> **Template:** `[Declaration] — [statistic OR named authority].`
> **NQR example:** "Asphalt shingles dominate NJ residential roofing — asphalt holds ~73% of the U.S. residential market (2024 trade data)."

### Comparison Proposition
States a relationship between two templatic siblings or antonyms with a decision threshold.
> **Template:** `[Option A] over [Option B] when [quantified condition].`
> **NQR example:** "Roof replacement over roof repair when damage exceeds 25–30% of the roof area (the contractor-consensus '25% rule'), or when repair cost approaches 50% of replacement cost (the '50% rule')."

### Statistical Evidence
A standalone quantified fact attributed to a named authority, no outbound link.
> **Template:** `[Quantified fact], per [named authority].`
> **NQR example:** "Sealing the roof deck cuts water intrusion by up to 95%, per the IBHS." / "Wind and hail are the largest homeowners-claim type at ~2.8% of insured homes per year, per Triple-I."

---

## SECTION 3 — BANNED List

Nothing below appears in semantic body prose (headings, answers, lists, tables). Branded CTA components are the only exception for trust phrasing, and CTA copy stays out of the context vector.

**Modality / opinion signals (Rule 6):**
- `will`, `should`, `need to`, `have to`, `must`, `might`, `may` (as hedges), `would`, `could`
- Rewrite to indicative present: "shingles last 15–30 years", not "shingles should last…".

**Opinion & judgment:**
- "is known for", "we believe", "arguably", "in our opinion", "the best choice", "ideal", "perfect"

**Casual / everyday language:**
- "basically", "a ton of", "stuff", "things", "at the end of the day", "when it comes to", "kind of", "pretty much", "you guys"

**Analogies & figurative framing:**
- "a roof is like an umbrella", "think of flashing as…", "imagine…", `like a`, `as if`, metaphors of any kind

**Outbound citation links:**
- No `<a href>` to NRCA, ARMA, manufacturers, or any external domain in body prose. Cite by name only; a plain unlinked source list may sit at the page foot (preserves link equity).

**Pronoun co-reference to entities (Rule 13):**
- "it", "they", "them", "this", "that", "these", "those", "there" when the antecedent is a named entity — repeat the entity ("the flashing", "the underlayment", "Newark") instead.

**Power / sentiment / hype words (Rule 14):**
- "best", "amazing", "trusted", "leading", "premier", "top-rated", "unbeatable", "world-class", "stunning", "love", "incredible", "exceptional", "renowned", "cutting-edge", "game-changing"

**Fabricated / unverified figures (Rule 10, D-01):**
- Any number flagged `[VERIFY]` or `[UNVERIFIED]` in the research files (e.g., "500+ projects", invented failure-share percentages, fabricated ratings, placeholder license/phone numbers). Omit or state qualitatively — never placeholder, never invent.

---

## Quick audit pass (run in order)

**Automated — run `npm run audit:all`** (= `audit:headings` + `audit:meta` + `audit:semantics`):
- `audit:headings` — Rules 1, 4, 19, 26 (question form, Core-before-Outer, one H1, hierarchy).
- `audit:meta` — title/description length + presence.
- `audit:semantics` *(gate tier — build-failing)* — Rule 6 modality (excl. FAQ `question:`), Rule 9 outbound links, Rule 10 `[VERIFY]`/de-fab literals (incl. metaTitle/metaDescription), Rule 8 plural-count, Rule 23 anchor↔title, `**`-render leaks, Rule 30 heading uniqueness.
- `audit:semantics` *(advisory tier — report only)* — Rule 12 casual/analogy, Rule 13 entity-pronouns, Rule 14 sentiment/hype, Rule 31 H2 length.

**Manual / review-agent pass** (not machine-gated): 2. First sentence ≤40 words, answer bolded (Rules 2, 3, 4). 4. Every point has a verified figure or named authority (Rules 7, 10). 8. Tables wrapped in definition + outro (Section 2). 10. CTA copy isolated; `#lead-form` above fold (Rule 24). 11. Repeated facts match `site-config.ts` (Rule 25). 12. Attribute ordering, context verbs, entity precision, info-gain, perspective placement, token efficiency (Rules 27–29, 32–34).
