import { SEO_CONFIG } from '@/lib/seo-config';

// ─── Sitemap Index Route Handler ────────────────────────────────────────────

const SITEMAP_IDS = ['core', 'services', 'cities', 'combos', 'comparisons', 'articles'] as const;

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
