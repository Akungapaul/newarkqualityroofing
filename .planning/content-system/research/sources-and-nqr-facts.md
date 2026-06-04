# Source Register & NQR Business Facts

> Citation + fact-attribution reference for the NQR content system. Pages cite the **Source Register (Part A)** organizations BY NAME (no outbound links) when asserting general roofing facts, and assert **NQR Business Facts (Part B)** for first-party claims.
>
> **Provenance legend**
> - **[IN-REPO]** — value lives in the canonical source of truth (`src/config/site-config.ts`) or a profile file; safe to assert as-is.
> - **[IN-REPO — UNVERIFIED MARKETING LITERAL]** — value exists in `src/data/content-constants.ts` but the D-01 audit (Phase 11) classified it as a **fabricated / non-canonical trust literal**. It is intentionally OMITTED from the canonical config and from rendered HTML/JSON-LD. **Treat as [VERIFY] before asserting.**
> - **[VERIFY]** — needs human confirmation from the owner before it can appear on a page or in schema.
>
> **D-01 hard rule (from `.planning/IMPLEMENTATION-PLAN.md` §13):** No placeholder or fabricated trust value may render in HTML or JSON-LD. If a canonical value is unknown, OMIT it — never emit a placeholder, never invent a number.

---

## Part A — Source Register (authoritative organizations, cite by name)

Cite these BY NAME in prose when stating general roofing/industry facts (e.g., "per the National Roofing Contractors Association…"). No outbound links — name-only attribution is the house style. Each entry notes what it is authoritative for.

### Trade associations & standards bodies
- **National Roofing Contractors Association (NRCA)** — Authoritative for roofing installation best practices, the *NRCA Roofing Manual*, slope/drainage standards, and contractor workmanship norms.
- **Asphalt Roofing Manufacturers Association (ARMA)** — Authoritative for asphalt shingle and modified-bitumen technical guidance, ventilation, and underlayment recommendations.
- **Single Ply Roofing Industry (SPRI)** — Authoritative for single-ply membrane (TPO, EPDM, PVC) standards and wind-design guidance for low-slope roofs.
- **Metal Construction Association (MCA) / Metal Roofing Alliance (MRA)** — Authoritative for metal roofing systems, standing-seam performance, and longevity claims.
- **Cedar Shake & Shingle Bureau (CSSB)** — Authoritative for grading, installation, and lifespan of cedar shake and wood shingle roofing.
- **Tile Roofing Industry Alliance (TRI)** — Authoritative for clay/concrete tile installation standards and wind/seismic guidance.

### Building codes, safety & resilience
- **International Code Council (ICC) — International Residential Code (IRC) / International Building Code (IBC)** — Authoritative for the model codes underlying NJ's adopted construction codes (roof load, slope, underlayment, ice-barrier requirements).
- **NJ Uniform Construction Code (UCC), N.J.A.C. 5:23** — Authoritative for New Jersey's legally adopted building/roofing code requirements and permit rules. **State-specific — primary for NJ work.**
- **Insurance Institute for Business & Home Safety (IBHS)** — Authoritative for fortified-roof standards, wind/hail resilience, and impact-resistance research (FORTIFIED Roof).
- **Federal Emergency Management Agency (FEMA)** — Authoritative for flood/storm building guidance, post-disaster roofing recovery, and mitigation best practices.
- **Occupational Safety and Health Administration (OSHA)** — Authoritative for roofing job-site safety, fall protection, and contractor safety obligations.
- **Underwriters Laboratories (UL)** — Authoritative for fire/impact ratings of roofing assemblies (e.g., UL 790 Class A fire, UL 2218 impact resistance).
- **ASTM International** — Authoritative for material test standards (shingle tear strength, membrane thickness, wind-uplift test methods).

### Weather, climate & energy
- **National Oceanic and Atmospheric Administration (NOAA) / National Weather Service (NWS)** — Authoritative for NJ storm, wind, snowfall, hail, and nor'easter climate data used in seasonal/storm-damage content.
- **ENERGY STAR (EPA)** — Authoritative for cool-roof / reflective-roofing energy-efficiency criteria and qualified-product status.
- **Cool Roof Rating Council (CRRC)** — Authoritative for solar reflectance and thermal emittance ratings of roofing products.
- **U.S. Department of Energy (DOE)** — Authoritative for roofing insulation, ventilation, and energy-savings guidance.

### Manufacturers (warranties, product specs, certifications)
- **GAF** — Authoritative for GAF shingle/membrane specs, system warranties, and certified-contractor program standards. *(NQR cites GAF as a product line it installs — see Part B certification [VERIFY].)*
- **Owens Corning** — Authoritative for Owens Corning shingle specs, wind/algae warranties, and Preferred/Platinum contractor program criteria.
- **CertainTeed** — Authoritative for CertainTeed shingle/membrane specs, SureStart warranties, and credentialed-installer programs.
- **IKO**, **Atlas** — Authoritative for their respective asphalt shingle product specs and warranties.
- **Carlisle SynTec**, **Firestone (Holcim) / Elevate**, **Johns Manville**, **Versico** — Authoritative for commercial single-ply membrane specs and system warranties.
- **Englert**, **ATAS**, **McElroy Metal** — Authoritative for metal roofing/standing-seam panel specs.

### Consumer protection, cost & market data
- **NJ Division of Consumer Affairs** — Authoritative for NJ home-improvement contractor registration/licensing rules, consumer rights, and the Home Improvement Practices regulations. **State-specific — primary for NJ contractor-legitimacy claims.**
- **Remodeling Magazine — Cost vs. Value Report** — Authoritative for regional (Middle Atlantic / NJ-metro) roofing project cost ranges and resale-value recoup percentages. Best source for cost-range citations.
- **HomeAdvisor / Angi** — Reference (not standards body) for national/regional cost averages; cite cautiously and only when a number is corroborated.
- **Insurance Information Institute (Triple-I / III)** — Authoritative for homeowners-insurance claim statistics, storm-loss data, and claims-process guidance for storm/hail/wind pages.
- **Better Business Bureau (BBB)** — Authoritative for business accreditation and complaint-record reputation signals. *(NQR's specific rating is [VERIFY] — see Part B.)*

### Editorial / consumer-education references (cite sparingly, for homeowner-facing explainers)
- **This Old House** — Recognized consumer authority for homeowner roofing education and maintenance explainers.
- **Family Handyman**, **Bob Vila** — Consumer-education references for DIY-context and homeowner maintenance framing.

---

## Part B — NQR Business Facts

> **Sourcing note:** The canonical source of truth is `src/config/site-config.ts`. Per the D-01 audit, all unverified trust literals were stripped from the canonical config and from rendered output; several still live in `src/data/content-constants.ts` purely as legacy marketing copy and are flagged below as **UNVERIFIED MARKETING LITERAL → treat as [VERIFY]**.

### Identity & contact
| Fact | Value | Provenance |
|---|---|---|
| Brand / legal name | **Newark Quality Roofing** | [IN-REPO] `site-config.ts` `brandName` / `legalName` |
| Email | **info@newarkqualityroofing.com** | [IN-REPO] `site-config.ts` `email` |
| Phone (display / tel) | env-driven (`NEXT_PUBLIC_PHONE_DISPLAY` / `_TEL`) — no hardcoded number; fabricated default `(973) 555-0123` is forbidden | [IN-REPO] `site-config.ts` (env). **[VERIFY] the real published phone number is set in production env.** |
| Primary URL | **https://newarkqualityroofing.com** | [IN-REPO] `site-config.ts` `primaryUrl` |
| Social profiles (`sameAs`) | none on file (empty array) | [IN-REPO] empty — **[VERIFY]** owner's GBP / Facebook / Instagram URLs |

### Location & service area
| Fact | Value | Provenance |
|---|---|---|
| City / region | **Newark, NJ** | [IN-REPO] `site-config.ts` `address.locality` / `region` |
| Service area | **Essex County, NJ** | [IN-REPO] `site-config.ts` `serviceArea` |
| Named cities served | Newark, East Orange, Bloomfield, Montclair, Belleville, Irvington | [IN-REPO] `local-proof.ts` city profiles |
| Physical street address | **OMITTED** — not in canonical config | **[VERIFY]** exact street address (or confirm service-area-only / no storefront) |
| ZIP / postal code | **OMITTED** | **[VERIFY]** ZIP for the street address |
| Geo coordinates (lat/long) | **OMITTED** | **[VERIFY]** business coordinates for LocalBusiness schema |
| Service radius | not specified | **[VERIFY]** mileage radius or explicit county/town list |

### Hours
| Fact | Value | Provenance |
|---|---|---|
| Mon–Fri | **7:00 AM – 6:00 PM** | [IN-REPO] `site-config.ts` `openingHours` |
| Saturday | **8:00 AM – 2:00 PM** | [IN-REPO] `site-config.ts` `openingHours` |
| Sunday | Emergency only | [IN-REPO] legacy shim `businessHours`. **[VERIFY]** consistency with 24/7 emergency claim below |

### Licensing, insurance & accreditation
| Fact | Value | Provenance |
|---|---|---|
| License type / state | **NJ Home Improvement Contractor** | [IN-REPO] `site-config.ts` `license` (state=NJ, type set; number OMITTED) |
| NJ HIC license number | **OMITTED** — never render `[License #]` | **[VERIFY]** exact NJ HIC registration number (13VH######00 format) |
| Insurance statement | **OMITTED** — never render `[Policy Info]` | **[VERIFY]** insurer-backed liability statement (carrier + coverage) |
| Workers' comp statement | **OMITTED** | **[VERIFY]** workers' comp coverage statement |
| Bonded | claimed "fully insured and bonded" in legacy copy | **[VERIFY]** — `content-constants.ts` literal, not canonical |
| BBB accreditation / rating | "A+ rated with the Better Business Bureau" (legacy copy) | [IN-REPO — UNVERIFIED MARKETING LITERAL] `content-constants.ts` `CREDENTIALS.bbb`. **[VERIFY]** actual BBB accreditation status + rating |
| Truthful trust badges (safe to render) | "Licensed & Insured", "Free Roof Inspections", "Local Essex County Roofers" | [IN-REPO] `site-config.ts` `trustBadges` — the only trust claims D-01 cleared for rendering |

### Track record & ratings
| Fact | Value | Provenance |
|---|---|---|
| Years in business / founding year | "15+ years serving Essex County" (legacy copy); founding year OMITTED in canonical | [IN-REPO — UNVERIFIED MARKETING LITERAL] `content-constants.ts` `CREDENTIALS.experience` / `foundingYear=''`. **[VERIFY]** real founding year + years-in-business |
| Projects completed | OMITTED in canonical (fabricated "500+" stripped) | **[VERIFY]** verified completed-project count, or omit |
| Aggregate rating | **DISABLED** (`rating.enabled=false`); fabricated 5.0 stripped | [IN-REPO] gated off until verifiable. **[VERIFY]** real average rating + count + source (Google/BBB) before enabling AggregateRating schema |
| "5-star rated across Google & HomeAdvisor" | legacy copy | [IN-REPO — UNVERIFIED MARKETING LITERAL] `content-constants.ts` `CREDENTIALS.reviews`. **[VERIFY]** |
| Ownership | "Family-owned and locally operated" | [IN-REPO — UNVERIFIED MARKETING LITERAL] `content-constants.ts` `CREDENTIALS.ownership`. **[VERIFY]** (low-risk but unconfirmed) |
| On-site testimonials | 6 named testimonials (Newark, Montclair, Bloomfield, East Orange, Belleville, Irvington), ratings 4.5–5.0 | [IN-REPO] `testimonials.ts`. **[VERIFY]** these are real, attributable reviews before treating as evidence for an aggregate rating |

### Manufacturer certifications
| Fact | Value | Provenance |
|---|---|---|
| GAF certification | "GAF Certified Contractor" (legacy copy) | [IN-REPO — UNVERIFIED MARKETING LITERAL] `content-constants.ts` `CREDENTIALS.certification`. **[VERIFY]** GAF certification tier (Certified / Master Elite) and that it is current |
| Brands installed | GAF, CertainTeed, Owens Corning, IKO, Atlas (shingle); Firestone, Carlisle, Johns Manville, Versico (membrane); Englert/ATAS/McElroy (metal); plus slate, gutter, coating brands | [IN-REPO] `content-constants.ts` `BRANDS`. Installing ≠ certified — **[VERIFY]** any *certified-installer* status per brand |
| Manufacturer warranty | "Manufacturer-backed warranty coverage … up to 50 years" (legacy copy) | [IN-REPO — UNVERIFIED MARKETING LITERAL] `content-constants.ts`. **[VERIFY]** which warranty(ies) NQR can actually register (depends on cert tier) |

### Warranty (NQR workmanship)
| Fact | Value | Provenance |
|---|---|---|
| Workmanship warranty term | not specified anywhere in repo | **[VERIFY]** NQR's own labor/workmanship warranty length (e.g., 5/10/25 yr) |

### Emergency response & financing
| Fact | Value | Provenance |
|---|---|---|
| Emergency response | "24/7 emergency response for urgent issues" | [IN-REPO — UNVERIFIED MARKETING LITERAL] `content-constants.ts` `RESPONSE.emergency`. **[VERIFY]** (reconcile with "Sunday: Emergency only" hours) |
| Same-day estimates | "Same-day free estimates available" | [IN-REPO — UNVERIFIED MARKETING LITERAL] `content-constants.ts` `RESPONSE.estimate`. **[VERIFY]** |
| Callback time | "We return every call within 1 hour" | [IN-REPO — UNVERIFIED MARKETING LITERAL] `content-constants.ts` `RESPONSE.callback`. **[VERIFY]** |
| Inspection scheduling | "Schedule your free inspection within 24 hours" | [IN-REPO — UNVERIFIED MARKETING LITERAL] `content-constants.ts` `RESPONSE.inspection`. **[VERIFY]** |
| Financing | "0% financing available on qualifying projects"; "flexible payment plans" | [IN-REPO — UNVERIFIED MARKETING LITERAL] `content-constants.ts` `FINANCING`. **[VERIFY]** financing partner + actual terms |
| Insurance-claim support | "We work directly with your insurance company on claims" | [IN-REPO — UNVERIFIED MARKETING LITERAL] `content-constants.ts` `FINANCING.insurance`. **[VERIFY]** |

### Pricing (page-facing ranges — informational, not a trust claim)
- Per-service price ranges (e.g., roof repair **$350–$1,500**; roof replacement **$8,500–$25,000+**) are defined in `content-constants.ts` `PRICING`. [IN-REPO] for display, but **[VERIFY]** that ranges reflect current NQR pricing, and corroborate against **Remodeling Cost vs. Value (Middle Atlantic)** when cited as market data.

---

### Pre-publication checklist (every [VERIFY] must be resolved or omitted)
1. NJ HIC license number — required before any "licensed" claim renders with a number.
2. Founding year / years-in-business — required before "15+ years" renders.
3. Aggregate rating value + count + source — required before `rating.enabled` flips true.
4. GAF certification tier (and any other certified-installer status) — required before "Certified" renders.
5. Physical address + ZIP + geo — required for LocalBusiness schema completeness (or confirm service-area-only).
6. Emergency response, callback, same-day, financing terms — confirm each is operationally true.
7. BBB rating, insurance/bonded/workers'-comp statements — confirm before rendering.

Until resolved, follow D-01: **omit, never placeholder, never invent.**
