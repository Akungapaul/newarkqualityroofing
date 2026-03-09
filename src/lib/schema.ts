// ─── JSON-LD Schema Builder Functions ────────────────────────────────────────
//
// Single source of truth for all structured data markup.
// All @id references are consistent so Google connects entities across @graph.

import { siteConfig } from '@/data/site-config';
import { SEO_CONFIG } from '@/lib/seo-config';

const BASE_URL = SEO_CONFIG.BASE_URL;

// ─── Internal helper ─────────────────────────────────────────────────────────

function buildPostalAddress(): Record<string, unknown> {
  return {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: 'US',
  };
}

// ─── Opening hours (shared by RoofingContractor and LocalBusiness) ───────────

function buildOpeningHours(): Record<string, unknown>[] {
  return [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '14:00',
    },
  ];
}

// ─── Aggregate rating (shared) ───────────────────────────────────────────────

function buildAggregateRating(): Record<string, unknown> {
  return {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
  };
}

// ─── Public builder functions ────────────────────────────────────────────────

export function buildOrganizationSchema(): Record<string, unknown> {
  return {
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: siteConfig.companyName,
    url: BASE_URL,
    telephone: siteConfig.phone.tel,
    email: siteConfig.email,
    address: buildPostalAddress(),
  };
}

export function buildRoofingContractorSchema(): Record<string, unknown> {
  return {
    '@type': 'RoofingContractor',
    '@id': `${BASE_URL}/#roofingcontractor`,
    name: siteConfig.companyName,
    url: BASE_URL,
    telephone: siteConfig.phone.tel,
    email: siteConfig.email,
    priceRange: '$$',
    address: buildPostalAddress(),
    aggregateRating: buildAggregateRating(),
    openingHoursSpecification: buildOpeningHours(),
  };
}

export function buildWebSiteSchema(): Record<string, unknown> {
  return {
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: siteConfig.companyName,
    publisher: { '@id': `${BASE_URL}/#organization` },
  };
}

export function buildWebPageSchema(url: string, name: string): Record<string, unknown> {
  return {
    '@type': 'WebPage',
    '@id': `${url}/#webpage`,
    url,
    name,
    isPartOf: { '@id': `${BASE_URL}/#website` },
  };
}

export function buildLocalBusinessSchema(city: {
  name: string;
  state: string;
  zipCodes: string[];
}): Record<string, unknown> {
  return {
    '@type': 'RoofingContractor',
    '@id': `${BASE_URL}/#roofingcontractor`,
    name: siteConfig.companyName,
    url: BASE_URL,
    telephone: siteConfig.phone.tel,
    email: siteConfig.email,
    priceRange: '$$',
    address: buildPostalAddress(),
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'State',
        name: 'NJ',
      },
    },
    aggregateRating: buildAggregateRating(),
    openingHoursSpecification: buildOpeningHours(),
  };
}

export function buildServiceSchema(service: {
  name: string;
  slug: string;
  shortDescription: string;
}): Record<string, unknown> {
  return {
    '@type': 'Service',
    '@id': `${BASE_URL}/${service.slug}/#service`,
    name: service.name,
    description: service.shortDescription,
    provider: { '@id': `${BASE_URL}/#organization` },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Essex County, NJ',
    },
  };
}

export function buildFaqSchema(
  faqs: Array<{ question: string; answer: string }>,
): Record<string, unknown> {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; url?: string }>,
): Record<string, unknown> {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const entry: Record<string, unknown> = {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
      };
      // Last item has no URL per schema.org spec
      if (item.url) {
        entry.item = item.url;
      }
      return entry;
    }),
  };
}

export function buildArticleSchema(article: {
  title: string;
  slug: string;
  description: string;
}): Record<string, unknown> {
  return {
    '@type': 'Article',
    '@id': `${BASE_URL}/${article.slug}/#article`,
    headline: article.title,
    description: article.description,
    author: { '@id': `${BASE_URL}/#organization` },
    publisher: { '@id': `${BASE_URL}/#organization` },
  };
}

export function buildJsonLdGraph(
  ...schemas: Record<string, unknown>[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
}
