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
import { isKeep } from '@/data/url-classification';

// ─── Sitemap IDs ────────────────────────────────────────────────────────────

const SITEMAP_IDS = ['core', 'services', 'cities', 'combos', 'comparisons', 'articles', 'knowledge-base'] as const;

/**
 * The 6 KB cluster hub slugs (D-14 taxonomy). The KB index, these cluster hubs,
 * and the glossary belong in the sitemap (they are the permanent topical-map IA;
 * content lands Phase 13/14). The 6 FLAT hub scaffolds (residential-roofing,
 * commercial-roofing, flat-roof-systems, roofing-materials, free-roofing-estimate,
 * our-roofing-process) and the 44 nested KB articles are deliberately NOT emitted
 * here (D-06; audit:sitemap in Plan 05 enforces this exclusion).
 */
const KB_CLUSTER_SLUGS = [
  'roof-problems',
  'roof-components',
  'roofing-materials',
  'roofing-process',
  'roofing-costs',
  'local-roofing-knowledge',
] as const;

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
      // D-06: only the 255 KEEP combos are indexable + in the sitemap. The 942
      // noindex combos (live but robots:noindex,follow) and the 168 redirected
      // combos (301 before routing) are excluded.
      return combos
        .filter((combo) => isKeep(combo.slug))
        .map((combo) => {
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

    case 'knowledge-base':
      // D-06: KB hub index + 6 cluster hubs + glossary. Excludes the 44 nested KB
      // articles and the 6 FLAT hub scaffolds (those are NOT emitted anywhere).
      return [
        { url: `${BASE_URL}/roofing-knowledge-base`, lastModified: NOW, changeFrequency: 'weekly' as const, priority: 0.7 },
        ...KB_CLUSTER_SLUGS.map((cluster) => ({
          url: `${BASE_URL}/roofing-knowledge-base/${cluster}`,
          lastModified: NOW,
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        })),
        { url: `${BASE_URL}/roofing-glossary`, lastModified: NOW, changeFrequency: 'monthly' as const, priority: 0.6 },
      ];

    default:
      return [];
  }
}
