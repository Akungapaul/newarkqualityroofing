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
import { SEO_CONFIG } from '@/lib/seo-config';
import ServiceTemplate from '@/components/templates/ServiceTemplate';
import CityTemplate from '@/components/templates/CityTemplate';
import ComboTemplate from '@/components/templates/ComboTemplate';
import ComparisonTemplate from '@/components/templates/ComparisonTemplate';
import ArticleTemplate from '@/components/templates/ArticleTemplate';
import CoreTemplate from '@/components/templates/CoreTemplate';

// ─── SSG: Generate all static pages at build time ────────────────────────────

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// Reject unknown slugs with 404
export const dynamicParams = false;

// ─── Metadata ────────────────────────────────────────────────────────────────

/** Pages that should have robots noindex */
const NOINDEX_PAGES = new Set(['thank-you', 'privacy-policy']);

/** Build OG metadata for a page */
function buildOG(title: string, description: string, slug: string, type: 'website' | 'article' = 'website') {
  return {
    title,
    description,
    url: `/${slug}`,
    siteName: SEO_CONFIG.SITE_NAME,
    type,
    images: [
      {
        url: SEO_CONFIG.OG_IMAGE.url,
        width: SEO_CONFIG.OG_IMAGE.width,
        height: SEO_CONFIG.OG_IMAGE.height,
      },
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
      return {
        title: service.metaTitle,
        description: service.metaDescription,
        alternates: { canonical: `/${service.slug}` },
        openGraph: buildOG(service.metaTitle, service.metaDescription, service.slug),
      };
    }
    case 'city': {
      const city = cities.find((c) => c.id === pageData.cityId);
      if (!city) return {};
      const cityContent = getCityContent(city.id);
      const citySlug = generateCityPageSlug(city.slug);
      return {
        title: cityContent.metaTitle,
        description: cityContent.metaDescription,
        alternates: { canonical: `/${citySlug}` },
        openGraph: buildOG(cityContent.metaTitle, cityContent.metaDescription, citySlug),
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
      return {
        title: combo.metaTitle,
        description: comboDescription,
        alternates: { canonical: `/${combo.slug}` },
        openGraph: buildOG(combo.metaTitle, comboDescription, combo.slug),
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
      const base: Metadata = {
        title: corePage.metaTitle,
        description: corePage.metaDescription,
        alternates: { canonical: `/${corePage.slug}` },
        openGraph: buildOG(corePage.metaTitle, corePage.metaDescription, corePage.slug),
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
