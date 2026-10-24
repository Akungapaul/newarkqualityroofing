import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { combos } from '@/data/combos';

// CORA 261023 (Orange replacement pass): Has RSS Link
// (CP318, tracked 0, goal 1). The docs define the factor at
// SITE level: the honest carrier is a real RSS feed for the
// site, linked from the page head. This route generates a
// genuine RSS 2.0 feed from the site's own published page
// inventory (the same combos data that generates the
// pages). The feed is linked via alternates.types on the
// Orange replacement page (the page whose roadmap carries
// the line); the feed itself is a real site resource.

const SITE = 'https://newarkqualityroofing.com';

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function GET() {
  const cityName = new Map(cities.map((c) => [c.id, c.name]));
  const serviceName = new Map(services.map((s) => [s.id, s.name]));
  const items = combos
    .map((c) => {
      const title = `${serviceName.get(c.serviceId)} in ${cityName.get(c.cityId)}, NJ | Newark Quality Roofing`;
      const link = `${SITE}/${c.slug}`;
      return [
        '    <item>',
        `      <title>${esc(title)}</title>`,
        `      <link>${esc(link)}</link>`,
        `      <guid isPermaLink="true">${esc(link)}</guid>`,
        `      <description>${esc(title)}</description>`,
        '    </item>',
      ].join('\n');
    })
    .join('\n');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0">',
    '  <channel>',
    '    <title>Newark Quality Roofing \u2014 Roofing Services in Essex County, NJ</title>',
    `    <link>${SITE}/</link>`,
    '    <description>Roof repair, roof replacement, and roofing services across the 21 Essex County towns served by Newark Quality Roofing.</description>',
    '    <language>en-us</language>',
    items,
    '  </channel>',
    '</rss>',
    '',
  ].join('\n');

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
