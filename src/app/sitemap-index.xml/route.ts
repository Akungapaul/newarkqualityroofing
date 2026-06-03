import { SEO_CONFIG } from '@/lib/seo-config';

// ─── Sitemap Index Route Handler ────────────────────────────────────────────

// Must stay in sync with SITEMAP_IDS in src/app/sitemap.ts. 'knowledge-base'
// added so the KB hub + 6 cluster hubs + glossary sitemap is discoverable (D-06).
const SITEMAP_IDS = ['core', 'services', 'cities', 'combos', 'comparisons', 'articles', 'knowledge-base'] as const;

export async function GET() {
  const { BASE_URL } = SEO_CONFIG;

  const sitemapEntries = SITEMAP_IDS.map(
    (id) => `  <sitemap>\n    <loc>${BASE_URL}/sitemap/${id}.xml</loc>\n  </sitemap>`
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
