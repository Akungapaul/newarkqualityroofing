import { SEO_CONFIG } from '@/lib/seo-config';
import { generateSitemaps } from '@/app/sitemap';

// ─── Sitemap Index Route Handler ────────────────────────────────────────────

// Served at /sitemap.xml via the rewrite in next.config.ts. Segment ids come
// from the same generateSitemaps() that emits the segments, so the index can
// never drift from them (a hand-copied list once dropped 'hubs' for months).

export async function GET() {
  const { BASE_URL } = SEO_CONFIG;

  const sitemapEntries = (await generateSitemaps()).map(
    ({ id }) => `  <sitemap>\n    <loc>${BASE_URL}/sitemap/${id}.xml</loc>\n  </sitemap>`
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
