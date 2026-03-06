import type { CorePage } from '@/lib/types';
import AboutPage from '@/components/pages/AboutPage';
import ContactPage from '@/components/pages/ContactPage';
import ServicesHubPage from '@/components/pages/ServicesHubPage';
import LocationsHubPage from '@/components/pages/LocationsHubPage';
import SitemapPage from '@/components/pages/SitemapPage';
import PrivacyPolicyPage from '@/components/pages/PrivacyPolicyPage';

interface CoreTemplateProps {
  corePage: CorePage;
}

export default function CoreTemplate({ corePage }: CoreTemplateProps) {
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
}
