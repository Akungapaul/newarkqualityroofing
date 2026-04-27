import type { MetadataRoute } from 'next';
import { SEO_CONFIG } from '@/lib/seo-config';
import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { combos } from '@/data/combos';
import { comparisons } from '@/data/comparisons';
import { articles } from '@/data/articles';
import { corePages } from '@/data/core-pages';
import { generateCityPageSlug } from '@/lib/slug-utils';
import { getComboChangeFrequency, getComboSitemapPriority, isPriorityCity, isPriorityService } from '@/data/seo-priority';

// ─── Sitemap IDs ────────────────────────────────────────────────────────────

const SITEMAP_IDS = ['core', 'services', 'cities', 'combos', 'comparisons', 'articles'] as const;

export async function generateSitemaps() {
  return SITEMAP_IDS.map((id) => ({ id }));
}

// ─── Sitemap Generation ─────────────────────────────────────────────────────

const { BASE_URL } = SEO_CONFIG;

/** Build-time timestamp for lastModified */
const NOW = new Date().toISOString();

/** Pages that should NOT appear in sitemaps (noindex pages) */
const EXCLUDED_CORE_PAGES = new Set(['thank-you', 'privacy-policy']);

export default async function sitemap({
  id,
}: {
  id: Promise<string>;
}): Promise<MetadataRoute.Sitemap> {
  const sitemapId = await id;

  switch (sitemapId) {
    case 'core':
      return [
        // Homepage
        { url: BASE_URL, lastModified: NOW, changeFrequency: 'weekly', priority: 1.0 },
        // Core pages (excluding noindex pages)
        ...corePages
          .filter((page) => !EXCLUDED_CORE_PAGES.has(page.id))
          .map((page) => ({ url: `${BASE_URL}/${page.slug}`, lastModified: NOW, changeFrequency: 'monthly' as const, priority: 0.5 })),
      ];

    case 'services':
      return services.map((service) => ({
        url: `${BASE_URL}/${service.slug}`,
        lastModified: NOW,
        changeFrequency: isPriorityService(service) ? 'weekly' as const : 'monthly' as const,
        priority: isPriorityService(service) ? 0.95 : 0.75,
      }));

    case 'cities':
      return cities.map((city) => ({
        url: `${BASE_URL}/${generateCityPageSlug(city.slug)}`,
        lastModified: NOW,
        changeFrequency: isPriorityCity(city) ? 'weekly' as const : 'monthly' as const,
        priority: isPriorityCity(city) ? 0.9 : 0.65,
      }));

    case 'combos':
      return combos.map((combo) => {
        const service = services.find((item) => item.id === combo.serviceId);
        const city = cities.find((item) => item.id === combo.cityId);
        return {
          url: `${BASE_URL}/${combo.slug}`,
          lastModified: NOW,
          changeFrequency: service && city ? getComboChangeFrequency(service, city) : 'yearly' as const,
          priority: service && city ? getComboSitemapPriority(service, city) : 0.35,
        };
      });

    case 'comparisons':
      return comparisons.map((comparison) => ({
        url: `${BASE_URL}/${comparison.slug}`,
        lastModified: NOW,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }));

    case 'articles':
      return articles.map((article) => ({
        url: `${BASE_URL}/${article.slug}`,
        lastModified: NOW,
        changeFrequency: 'monthly' as const,
        priority: 0.5,
      }));

    default:
      return [];
  }
}
