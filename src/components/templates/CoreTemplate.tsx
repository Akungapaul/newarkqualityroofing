import type { CorePage } from '@/lib/types';
import AboutPage from '@/components/pages/AboutPage';
import ContactPage from '@/components/pages/ContactPage';
import ServicesHubPage from '@/components/pages/ServicesHubPage';
import LocationsHubPage from '@/components/pages/LocationsHubPage';
import SitemapPage from '@/components/pages/SitemapPage';
import PrivacyPolicyPage from '@/components/pages/PrivacyPolicyPage';
import TermsOfServicePage from '@/components/pages/TermsOfServicePage';
import ResourcesPage from '@/components/pages/ResourcesPage';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  buildRoofingContractorSchema,
  buildWebPageSchema,
  buildBreadcrumbSchema,
  buildJsonLdGraph,
} from '@/lib/schema';
import { SEO_CONFIG } from '@/lib/seo-config';

// ─── Schema strategy by page ID ─────────────────────────────────────────────

const NOINDEX_PAGES = new Set(['thank-you', 'privacy-policy', 'terms-of-service']);

function buildCorePageSchema(corePage: CorePage): Record<string, unknown> | null {
  if (NOINDEX_PAGES.has(corePage.id)) return null;

  const pageUrl = `${SEO_CONFIG.BASE_URL}/${corePage.slug}`;
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.BASE_URL },
    { name: corePage.name },
  ]);
  const webPage = buildWebPageSchema(pageUrl, corePage.name);

  // About and Contact get LocalBusiness (RoofingContractor) schema
  if (corePage.id === 'about' || corePage.id === 'contact') {
    return buildJsonLdGraph(
      buildRoofingContractorSchema(),
      webPage,
      breadcrumb,
    );
  }

  // Services hub, locations hub, sitemap: WebPage + Breadcrumb only
  return buildJsonLdGraph(webPage, breadcrumb);
}

// ─── Template Component ─────────────────────────────────────────────────────

interface CoreTemplateProps {
  corePage: CorePage;
}

export default function CoreTemplate({ corePage }: CoreTemplateProps) {
  const schemaData = buildCorePageSchema(corePage);

  const pageContent = (() => {
    switch (corePage.id) {
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'services':
        return <ServicesHubPage />;
      case 'locations':
        return <LocationsHubPage />;
      case 'html-sitemap':
        return <SitemapPage />;
      case 'privacy-policy':
        return <PrivacyPolicyPage />;
      case 'terms-of-service':
        return <TermsOfServicePage />;
      case 'resources':
        return <ResourcesPage />;
      default:
        return (
          <div className="min-h-screen bg-parchment px-6 py-16">
            <main className="mx-auto max-w-3xl">
              <span className="inline-block rounded-sm bg-copper px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider text-text-on-copper">
                {corePage.name}
              </span>
              <h1 className="mt-4 font-heading text-4xl font-bold text-forest sm:text-5xl">
                {corePage.name}
              </h1>
              <div className="mt-12 rounded-sm border-2 border-dashed border-border p-8 text-center">
                <p className="font-body text-text-secondary">
                  Full page content coming soon
                </p>
              </div>
            </main>
          </div>
        );
    }
  })();

  return (
    <>
      {schemaData && <JsonLd data={schemaData} />}
      {pageContent}
    </>
  );
}
