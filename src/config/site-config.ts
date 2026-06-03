// ─── Canonical Site Config (D-01) ────────────────────────────────────────────
//
// SINGLE SOURCE OF TRUTH for all NAP / trust / identity values.
// Every template and JSON-LD builder should read from here (full sitewide
// single-source enforcement + dedup is Phase 16; Phase 11 establishes this
// source and removes the one known-false trust claim that leaks via JSON-LD).
//
// D-01 INVARIANTS (LOCKED by .planning/IMPLEMENTATION-PLAN.md §13):
//   1. NO public placeholder / fabricated trust value may render in HTML or
//      JSON-LD ([License #], [Policy Info], [CANONICAL VALUE REQUIRED], 0.0,
//      0+, fake 5.0, fake 500+). If a canonical value is UNKNOWN, OMIT it —
//      never emit a placeholder. `[CANONICAL VALUE REQUIRED: …]` may appear
//      ONLY in a code comment like this one, NEVER in a string that renders.
//   2. `rating.enabled = false` until rating value + count + source + visible
//      review content are canonical and verifiable. While false, AggregateRating
//      is OMITTED entirely (see buildAggregateRating gate in src/lib/schema.ts).
//   3. The phone reads come from env (NEXT_PUBLIC_PHONE_DISPLAY / _TEL) so the
//      phone does NOT regress to the fabricated default `(973) 555-0123`.
//
// Unknown canonical values currently OMITTED (empty string / disabled flag):
//   - address.streetAddress  [CANONICAL VALUE REQUIRED: physical street address]
//   - address.postalCode     [CANONICAL VALUE REQUIRED: ZIP for the street address]
//   - geo.{latitude,longitude} [CANONICAL VALUE REQUIRED: business coordinates]
//   - license.number / license.display [CANONICAL VALUE REQUIRED: NJ HIC license #]
//   - insuranceStatement     [CANONICAL VALUE REQUIRED: insurer-backed statement]
//   - workersCompStatement   [CANONICAL VALUE REQUIRED: workers' comp statement]
//   - rating.value / rating.count [CANONICAL VALUE REQUIRED: verified rating + count]
//   - foundingYear           [CANONICAL VALUE REQUIRED: business founding year]
//   - projectCount           [CANONICAL VALUE REQUIRED: verified completed-project count]
//
// When the owner supplies a canonical value, fill it here and flip the relevant
// `enabled` gate / drop the empty default — every consumer updates automatically.

export interface SiteRating {
  /** Master gate: while false, AggregateRating is omitted from HTML + JSON-LD. */
  enabled: boolean;
  /** Verified average rating (e.g. '4.9'). Empty until canonical. Never fake 5.0. */
  value: string;
  /** Verified review/rating count. Empty until canonical. Never fake 500. */
  count: string;
}

export interface SiteAddress {
  /** OMITTED until canonical — empty string renders as nothing (never a fake street). */
  streetAddress: string;
  locality: string;
  region: string;
  /** OMITTED until canonical — empty string renders as nothing (never a fake ZIP). */
  postalCode: string;
  country: string;
}

export interface SiteGeo {
  /** OMITTED until canonical. */
  latitude: string;
  longitude: string;
}

export interface SiteLicense {
  state: string;
  type: string;
  /** OMITTED until canonical — never render [License #]. */
  number: string;
  /** OMITTED until canonical — never render [License #]. */
  display: string;
}

export interface SiteOpeningHours {
  /** schema.org dayOfWeek names. */
  dayOfWeek: string[];
  /** 24h HH:MM. */
  opens: string;
  /** 24h HH:MM. */
  closes: string;
}

export interface SiteConfig {
  brandName: string;
  legalName: string;
  /** Display phone — env-driven so it never regresses to the fabricated default. */
  phone: string;
  /** tel: phone — env-driven. */
  formattedPhone: string;
  email: string;
  address: SiteAddress;
  geo: SiteGeo;
  openingHours: SiteOpeningHours[];
  serviceArea: string;
  license: SiteLicense;
  /** OMITTED (empty) until canonical — never render [Policy Info]. */
  insuranceStatement: string;
  /** OMITTED (empty) until canonical. */
  workersCompStatement: string;
  rating: SiteRating;
  /** OMITTED (empty) until canonical — never render 0/0+. */
  foundingYear: string;
  /** OMITTED (empty) until canonical — never render fake 500+. */
  projectCount: string;
  /** Truthful, non-fabricated trust signals only. */
  trustBadges: string[];
  sameAs: string[];
  primaryUrl: string;
}

export const siteConfig: SiteConfig = {
  brandName: 'Newark Quality Roofing',
  legalName: 'Newark Quality Roofing',

  // Env-driven so production phone is canonical and never the fabricated default.
  phone: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? '',
  formattedPhone: process.env.NEXT_PUBLIC_PHONE_TEL ?? '',

  email: 'info@newarkqualityroofing.com',

  address: {
    streetAddress: '', // [CANONICAL VALUE REQUIRED: physical street address] — omitted until known
    locality: 'Newark',
    region: 'NJ',
    postalCode: '', // [CANONICAL VALUE REQUIRED: ZIP] — omitted until known
    country: 'US',
  },

  geo: {
    latitude: '', // [CANONICAL VALUE REQUIRED] — omitted until known
    longitude: '', // [CANONICAL VALUE REQUIRED] — omitted until known
  },

  openingHours: [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00',
    },
    {
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '14:00',
    },
  ],

  serviceArea: 'Essex County, NJ',

  license: {
    state: 'NJ',
    type: 'Home Improvement Contractor',
    number: '', // [CANONICAL VALUE REQUIRED: NJ HIC license number] — omitted until known
    display: '', // [CANONICAL VALUE REQUIRED] — never render [License #]
  },

  insuranceStatement: '', // [CANONICAL VALUE REQUIRED] — never render [Policy Info]
  workersCompStatement: '', // [CANONICAL VALUE REQUIRED] — omitted until known

  rating: {
    enabled: false, // D-01: gate AggregateRating off until rating is canonical + verifiable
    value: '', // [CANONICAL VALUE REQUIRED: verified average rating] — never fake 5.0
    count: '', // [CANONICAL VALUE REQUIRED: verified review count] — never fake 500
  },

  foundingYear: '', // [CANONICAL VALUE REQUIRED] — never render 0
  projectCount: '', // [CANONICAL VALUE REQUIRED] — never render fake 500+

  // Truthful, non-fabricated signals only. Licensing/insurance claims that
  // require a specific number/policy stay OMITTED until canonical (see above).
  trustBadges: [
    'Licensed & Insured',
    'Free Roof Inspections',
    'Local Essex County Roofers',
  ],

  sameAs: [],

  primaryUrl: 'https://newarkqualityroofing.com',
};
