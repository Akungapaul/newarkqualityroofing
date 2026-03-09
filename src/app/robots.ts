import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/thank-you', '/_next/'],
      },
    ],
    sitemap: 'https://www.newarkqualityroofing.com/sitemap-index.xml',
  };
}
