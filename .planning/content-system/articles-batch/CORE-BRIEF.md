# Articles Batch — Homepage CORE pilot brief (3 articles)

Answer-first rewrite of the 3 `parentType: 'core'` homepage articles in
`src/data/article-content/homepage.ts`. These are broad NJ educational guides
(not NQR-promotional pages); NQR appears only in the CTA.

## Shared rules (Semantic Content Ruleset v1.7 — gated subset)

- **directAnswer (new field):** a ≤40-word **bold-span** definitive answer to the
  article's question-form H1. Put the answer itself in `**bold**`; the bold span
  ≤40 words. Name a source organization where the answer is a factual claim. This
  is the page lead — it answers the H1 directly, NOT a generic intro.
- **intro:** ONE tight supporting sentence/bridge after the directAnswer (renders as
  the lead's supporting paragraph). No second answer.
- **Section headings = QUESTIONS.** Each `sections[i].heading` is a question. The
  FIRST sentence of `body[0]` is a definitive ≤40-word answer to that question with
  its main topic in `**bold**`.
- **R3 strict-bold:** every body paragraph OPENS by re-bolding a topic named in its
  section's answer. Bold the named main topics only (not whole sentences).
- **R6 NO modality** (build-failing): never use `will, shall, should, need to,
  needs to, have to, has to, must, ought to`. Write definitive present tense
  ("NJ requires…", "Flashing details cause…"). ("can" is allowed.)
- **R9 no outbound links / URLs.** Internal links optional, ≤1 per section, as
  `[descriptive anchor](/slug)` to a real page (e.g. `/roof-repair`,
  `/roof-replacement`, `/roofing-services`). Never "click here/here/learn more".
- **R10 de-fab (build-failing) — never emit these literals or claims:** `24/7`,
  `same-day`, `GAF Certified`, `Master Elite`, `CertainTeed SELECT ShingleMaster`,
  `0% financing`, `top-rated`, `N+ years experience`, `500+ projects`, fabricated
  phone/address, or ANY claim that NQR *holds* a manufacturer certification.
- **R14 no hype:** no `best / premier / leading / premium / trusted / world-class /
  exceptional / unbeatable`. Name materials/facts instead.
- **Named-source attribution, no URLs:** cite organizations BY NAME — NRCA, ARMA,
  NJ DCA / NJ Division of Consumer Affairs, NOAA/NWS, IBHS, ASCE, UL, and statutes
  `N.J.S.A. 56:8-136`, `N.J.A.C. 5:23`, `N.J.A.C. 13:45A-16`.
- **metaDescription ≤160 chars**, no de-fab literals, no modality.
- **conclusion/ctaText:** definitive, de-fabbed, no self-cert/warranty claims.

## NQR credential framing (registration ≠ license)

NQR = **a registered New Jersey Home Improvement Contractor, insured and serving
Essex County**. NJ has **no roofing license** — the HIC is a *registration* under
the Contractors' Registration Act. Say **registered**, never "licensed" for the HIC.
NQR holds **no verified manufacturer certification** → never claim one. Phone is
template-rendered (PhoneNumber component); never write a phone number in content.

## VERIFIED facts (correct these fabrications in the current copy)

| Current (WRONG/unverified) | Correct (use this) | Source |
|---|---|---|
| "28 inches of snowfall annually" | **~31.5 inches** annual snowfall (Newark/EWR) | NOAA 1991–2020 normals |
| "GAF Master Elite … only 2% of contractors" | DROP entirely; advise verifying manufacturer credentials generically | de-fab literal |
| "CertainTeed SELECT ShingleMaster" | DROP the program name; may name GAF/CertainTeed/Owens Corning as manufacturers | de-fab |
| CTA "manufacturer-certified" | DROP — NQR holds no verified cert | de-fab |
| "$1 million liability minimum" | NJ statutory minimum is **$500,000 per occurrence** commercial general liability | N.J.S.A. 56:8-142 |
| "Contractors Guaranty Fund … up to $20,000" | DROP the $20k/Guaranty-Fund figure (unverified); frame recourse via the NJ Division of Consumer Affairs under the Consumer Fraud Act | [VERIFY] → omit |
| "register … work over $500" (conflated) | Registration has **NO dollar floor** (all HIC businesses register); the **$500** threshold triggers a **written contract** | N.J.S.A. 56:8-136 / N.J.A.C. 13:45A-16.2 |
| "10–15% higher wind speeds in West Orange/Verona/Cedar Grove" | DROP the specific %; reframe qualitatively (exposed/elevated sites see higher wind exposure) | unverified (city-batch refuted) |
| summer "90–95°F, 65–80% humidity" (hard) | avg **July high ≈ 87°F** (EWR); frame heat/humidity qualitatively | NOAA 1991–2020 |
| nor'easter "60+ mph winds" (hard annual) | **40–60 mph sustained, gusts to 70+** at event level (not an annual stat) — frame qualitatively | NOAA/NWS |
| "35–45 freeze-thaw cycles" as hard NOAA fact | keep ONLY as an industry/regional **estimate**; do NOT bundle with the 31.5" NOAA snowfall | regional estimate [UNVERIFIED] |

**Verified specifics OK to assert:** NJ UCC `N.J.A.C. 5:23`; detached 1–2 family
re-roof = **ordinary maintenance, no permit** (`5:23-2.7`); commercial/multi-family
>25% roof area in 12 mo = permit; HIC registration number format **"13VH########"**
must be displayed on contracts/ads (`N.J.S.A. 56:8-144`); registered contractors must
file proof of **$500,000** GL insurance; roofing season Apr–Nov; flashing details
cause ~90–95% of leaks (industry estimate per NRCA).

## Per-article specs

1. **`homepage-nj-roofing-guide`** — H1 "What Should NJ Homeowners Know About Roofing?"
   directAnswer: definitive answer (NJ's climate + material choice + the no-permit
   ordinary-maintenance rule are the three things to know). Sections (question-form):
   NJ climate → material choice → regulations/timing. Correct snowfall, summer,
   wind, freeze-thaw per table.

2. **`homepage-finding-roofer-essex-county`** — H1 "How Do You Find a Reliable Roofer
   in Essex County?" directAnswer: verify NJ HIC registration + insurance + written
   estimates. Sections: how to verify registration/insurance → red flags (storm
   chasers, upfront-payment, no written contract) → comparing written estimates. DROP
   Master Elite / SELECT ShingleMaster; correct $500k insurance; "13VH" number.

3. **`homepage-nj-roofing-licensing-insurance`** — H1 "What Are NJ Roofing Licensing
   and Insurance Requirements?" directAnswer: NJ requires HIC *registration* (not a
   license) under N.J.S.A. 56:8-136; $500 triggers a written contract. Sections:
   the Contractors' Registration Act (registration ≠ license, 13VH#, $500 written
   contract) → insurance ($500k GL minimum) → manufacturer vs workmanship warranties
   (generic, no NQR cert claim). DROP the $20k Guaranty Fund figure.
