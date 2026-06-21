import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllSlugs, getPageDataBySlug } from '@/data/slug-registry';
import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { combos } from '@/data/combos';
import { comparisons } from '@/data/comparisons';
import { articles } from '@/data/articles';
import { corePages } from '@/data/core-pages';
import { getCityContent } from '@/data/city-content';
import { getComboContent } from '@/data/combo-content';
import { getComparisonContent } from '@/data/comparison-content';
import { generateCityPageSlug } from '@/lib/slug-utils';
import { isNoindex, isRedirect } from '@/data/url-classification';
import { SEO_CONFIG } from '@/lib/seo-config';
import { getOGImage } from '@/data/image-manifest';
import { buildServiceDescription, buildCityDescription } from '@/lib/seo-utils';
import ServiceTemplate from '@/components/templates/ServiceTemplate';
import CityTemplate from '@/components/templates/CityTemplate';
import ComboTemplate from '@/components/templates/ComboTemplate';
import ComparisonTemplate from '@/components/templates/ComparisonTemplate';
import ArticleTemplate from '@/components/templates/ArticleTemplate';
import CoreTemplate from '@/components/templates/CoreTemplate';

// ─── SSG: Generate all static pages at build time ────────────────────────────

// Slug types served by their OWN dedicated app/ route segments (the glossary and
// the 6 hub scaffolds), not by this flat [slug] dispatcher — whose switch has no
// case for them. Excluding them here stops the dynamic route from double-claiming
// those paths and shipping a dead notFound() fall-through if a dedicated route is
// ever removed/changed (CR-01). They stay registered for getAllSlugs/validate-flat-urls.
const DEDICATED_ROUTE_TYPES = new Set(['hub', 'glossary']);

export async function generateStaticParams() {
  // D-05: redirected combo slugs (168) are NOT prerendered — next.config.ts 301s
  // them before the route resolves. Excluding them here keeps the prerender set
  // and the sitemap aligned (redirected slugs appear in neither).
  return getAllSlugs()
    .filter((slug) => {
      if (isRedirect(slug)) return false;
      const entry = getPageDataBySlug(slug);
      return entry !== undefined && !DEDICATED_ROUTE_TYPES.has(entry.type);
    })
    .map((slug) => ({ slug }));
}

// Reject unknown slugs with 404
export const dynamicParams = false;

// ─── Metadata ────────────────────────────────────────────────────────────────

/** Pages that should have robots noindex */
const NOINDEX_PAGES = new Set(['thank-you', 'privacy-policy']);

/** Build OG metadata for a page (uses per-page OG image when available, otherwise shared default) */
function buildOG(
  title: string,
  description: string,
  slug: string,
  type: 'website' | 'article' = 'website',
  ogImagePath?: string
) {
  return {
    title,
    description,
    url: `/${slug}`,
    siteName: SEO_CONFIG.SITE_NAME,
    type,
    images: [
      ogImagePath
        ? { url: ogImagePath, width: 1200, height: 630 }
        : { url: SEO_CONFIG.OG_IMAGE.url, width: SEO_CONFIG.OG_IMAGE.width, height: SEO_CONFIG.OG_IMAGE.height },
    ],
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pageData = getPageDataBySlug(slug);
  if (!pageData) return {};

  switch (pageData.type) {
    case 'service': {
      const service = services.find((s) => s.id === pageData.serviceId);
      if (!service) return {};
      const serviceOg = getOGImage('service', service.id);
      const serviceDesc = buildServiceDescription(service);
      return {
        title: service.metaTitle,
        description: serviceDesc,
        alternates: { canonical: `/${service.slug}` },
        openGraph: buildOG(service.metaTitle, serviceDesc, service.slug, 'website', serviceOg?.path ?? undefined),
      };
    }
    case 'city': {
      const city = cities.find((c) => c.id === pageData.cityId);
      if (!city) return {};
      const cityContent = getCityContent(city.id);
      const citySlug = generateCityPageSlug(city.slug);
      const cityOg = getOGImage('city', city.id);
      const cityDesc = buildCityDescription(cityContent, city);
      return {
        title: cityContent.metaTitle,
        description: cityDesc,
        alternates: { canonical: `/${citySlug}` },
        openGraph: buildOG(cityContent.metaTitle, cityDesc, citySlug, 'website', cityOg?.path ?? undefined),
      };
    }
    case 'combo': {
      const combo = combos.find(
        (c) => c.serviceId === pageData.serviceId && c.cityId === pageData.cityId
      );
      if (!combo) return {};
      // Use hand-written metaDescription from combo content when available
      let comboDescription = combo.metaDescription;
      try {
        const comboContent = getComboContent(combo.serviceId, combo.cityId);
        if (comboContent.metaDescription) {
          comboDescription = comboContent.metaDescription;
        }
      } catch {
        // No hand-written content for this combo -- use auto-generated description
      }
      // Reuse service OG image for combo pages
      const comboOg = getOGImage('service', combo.serviceId);
      // D-04 indexation gate: after the 942-doorway re-index all 1197 combos are
      // KEEP-INDEX (isNoindex is empty), so robots resolves to undefined (indexable).
      // The isNoindex guard is retained so any future NOINDEX verdict re-applies
      // robots:{index:false,follow:true}. Canonical is ALWAYS the combo's OWN slug
      // (self-canonical) — never point a combo at a parent or unrelated page.
      return {
        title: combo.metaTitle,
        description: comboDescription,
        alternates: { canonical: `/${combo.slug}` },
        robots: isNoindex(combo.slug) ? { index: false, follow: true } : undefined,
        openGraph: buildOG(combo.metaTitle, comboDescription, combo.slug, 'website', comboOg?.path ?? undefined),
      };
    }
    case 'comparison': {
      const comparison = comparisons.find((c) => c.id === pageData.comparisonId);
      if (!comparison) return {};
      // Use hand-written metaDescription from comparison content when available
      let description = comparison.metaDescription;
      try {
        const content = getComparisonContent(comparison.id);
        if (content.metaDescription) {
          description = content.metaDescription;
        }
      } catch {
        // No content yet -- use base metaDescription
      }
      return {
        title: comparison.metaTitle,
        description,
        alternates: { canonical: `/${comparison.slug}` },
        openGraph: buildOG(comparison.metaTitle, description, comparison.slug),
      };
    }
    case 'article': {
      const article = articles.find((a) => a.id === pageData.articleId);
      if (!article) return {};
      return {
        title: article.metaTitle,
        description: article.metaDescription,
        alternates: { canonical: `/${article.slug}` },
        openGraph: buildOG(article.metaTitle, article.metaDescription, article.slug, 'article'),
      };
    }
    case 'core': {
      const corePage = corePages.find((c) => c.id === pageData.corePageId);
      if (!corePage) return {};
      // Look up per-page OG image for homepage; other core pages use default
      const coreOg = corePage.id === 'homepage' ? getOGImage('homepage', 'homepage') : undefined;
      const base: Metadata = {
        title: corePage.metaTitle,
        description: corePage.metaDescription,
        alternates: { canonical: `/${corePage.slug}` },
        openGraph: buildOG(corePage.metaTitle, corePage.metaDescription, corePage.slug, 'website', coreOg?.path ?? undefined),
      };
      // Add noindex for thank-you and privacy-policy pages
      if (NOINDEX_PAGES.has(corePage.id)) {
        base.robots = { index: false, follow: false };
      }
      return base;
    }
    default:
      return {};
  }
}

// ─── Page Dispatcher ─────────────────────────────────────────────────────────

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pageData = getPageDataBySlug(slug);

  if (!pageData) {
    notFound();
  }

  switch (pageData.type) {
    case 'service': {
      const service = services.find((s) => s.id === pageData.serviceId);
      if (!service) notFound();
      return <ServiceTemplate service={service} />;
    }
    case 'city': {
      const city = cities.find((c) => c.id === pageData.cityId);
      if (!city) notFound();
      return <CityTemplate city={city} />;
    }
    case 'combo': {
      const service = services.find((s) => s.id === pageData.serviceId);
      const city = cities.find((c) => c.id === pageData.cityId);
      if (!service || !city) notFound();
      return <ComboTemplate service={service} city={city} />;
    }
    case 'comparison': {
      const comparison = comparisons.find((c) => c.id === pageData.comparisonId);
      if (!comparison) notFound();
      return <ComparisonTemplate comparison={comparison} />;
    }
    case 'article': {
      const article = articles.find((a) => a.id === pageData.articleId);
      if (!article) notFound();
      return <ArticleTemplate article={article} />;
    }
    case 'core': {
      const corePage = corePages.find((c) => c.id === pageData.corePageId);
      if (!corePage) notFound();
      return <CoreTemplate corePage={corePage} />;
    }
    default:
      notFound();
  }
}
