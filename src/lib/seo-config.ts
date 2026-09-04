// ─── Shared SEO Constants ────────────────────────────────────────────────────

export const SEO_CONFIG = {
  /** Canonical base URL (no trailing slash) */
  BASE_URL: 'https://newarkqualityroofing.com',

  /** Default Open Graph image (1200x630, public/images/og-default.jpg). The path
   *  sat here as an unbacked placeholder until 2026-09-04, so every page emitted
   *  an og:image that 404'd and no social share rendered a preview. */
  OG_IMAGE: {
    url: '/images/og-default.jpg',
    width: 1200,
    height: 630,
  },

  /** Site name for OG tags and metadata */
  SITE_NAME: 'Newark Quality Roofing',
} as const;
