// ─── Legacy site-config shim (re-export) ─────────────────────────────────────
//
// The single source of truth is now `src/config/site-config.ts` (D-01).
// This module is a COMPATIBILITY SHIM that adapts the canonical config into the
// legacy `siteConfig` shape the 9 existing importers still consume:
//   src/app/layout.tsx, src/app/page.tsx, src/lib/schema.ts,
//   src/components/ui/PhoneNumber.tsx, src/components/sections/TrustBar.tsx,
//   src/components/sections/CityMapNap.tsx, src/components/pages/ContactPage.tsx,
//   src/components/pages/TermsOfServicePage.tsx,
//   src/components/pages/PrivacyPolicyPage.tsx
//
// The full repoint of those 9 importers onto the canonical shape is Phase 16.
// Phase 11 keeps them working unchanged while removing the fabricated trust
// literals (fake street/ZIP, fake 5.0 rating, fake 500+ count) from the data
// this shim exposes — D-01 forbids any fabricated trust value in a renderable
// string. Unknown values are exposed as empty strings (render as nothing),
// never as placeholders or fabricated literals.

import { siteConfig as canonical } from '@/config/site-config';

export type { SiteConfig } from '@/config/site-config';

/** Trust stat consumed by TrustBar — numericValue null = non-numeric (no CountUp). */
export interface TrustStat {
  label: string;
  value: string;
  numericValue: number | null;
  suffix: string;
  prefix: string;
  icon: 'checkmark' | 'clock' | 'certificate' | 'shield';
}

export interface LegacyBusinessHours {
  day: string;
  hours: string;
}

export interface LegacySiteConfig {
  companyName: string;
  phone: { display: string; tel: string };
  address: { street: string; city: string; state: string; zip: string };
  email: string;
  businessHours: LegacyBusinessHours[];
  trustStats: TrustStat[];
}

// Truthful, non-fabricated trust stats only. The fabricated legacy entries
// (Star Rating 5.0, Roofs Completed 500+, Years Experience 15+) are DROPPED per
// D-01 — they are not canonical/verifiable. These remaining badges are
// non-numeric truthful claims, so numericValue is null (TrustBar skips CountUp).
const truthfulTrustStats: TrustStat[] = [
  {
    label: 'Licensed & Insured',
    value: 'Yes',
    numericValue: null,
    suffix: '',
    prefix: '',
    icon: 'shield',
  },
  {
    label: 'Free Roof Inspections',
    value: 'Yes',
    numericValue: null,
    suffix: '',
    prefix: '',
    icon: 'certificate',
  },
  {
    label: 'Local Essex County Roofers',
    value: 'Yes',
    numericValue: null,
    suffix: '',
    prefix: '',
    icon: 'checkmark',
  },
];

export const siteConfig: LegacySiteConfig = {
  companyName: canonical.brandName,

  phone: {
    display: canonical.phone,
    tel: canonical.formattedPhone,
  },

  // street / zip OMITTED until canonical (empty string renders as nothing —
  // never the fabricated "123 Main Street" / "07102"). Phase 16 conditionally
  // hides the empty parts in the renderers.
  address: {
    street: canonical.address.streetAddress,
    city: canonical.address.locality,
    state: canonical.address.region,
    zip: canonical.address.postalCode,
  },

  email: canonical.email,

  businessHours: [
    { day: 'Mon-Fri', hours: '7:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Emergency Only' },
  ],

  trustStats: truthfulTrustStats,
};
