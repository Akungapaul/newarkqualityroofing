import type { Metadata } from 'next';
import Link from 'next/link';
import { SEO_CONFIG } from '@/lib/seo-config';

// ─── Dedicated Glossary Route (D-11) ─────────────────────────────────────────
//
// Resolves at HTTP 200 via THIS dedicated route — NOT the flat [slug] dispatcher.
// Phase 11 scaffolds it (full metadata + one page heading + robots noindex,follow);
// the 25 DefinedTerm entries + DefinedTermSet schema land in Phase 14.

const CANONICAL = '/roofing-glossary';
const TITLE = 'Roofing Glossary for NJ Homeowners'; // = the H1
const DESCRIPTION =
  'A plain-English roofing glossary defining the roofing terms Newark and Essex County homeowners encounter on estimates and inspections.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  // Indexable since 2026-09: previously noindexed AND orphaned while sitemapped
  // (mixed signals). Now linked from the KB index, HTML sitemap, and footer.
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: SEO_CONFIG.SITE_NAME,
    type: 'website',
    images: [
      { url: SEO_CONFIG.OG_IMAGE.url, width: SEO_CONFIG.OG_IMAGE.width, height: SEO_CONFIG.OG_IMAGE.height },
    ],
  },
};

export default function RoofingGlossaryPage() {
  return (
    <div className="min-h-screen bg-parchment px-6 py-16">
      <main className="mx-auto max-w-3xl">
        <span className="inline-block rounded-sm bg-copper px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider text-text-on-copper">
          Glossary
        </span>
        <h1 className="mt-4 font-heading text-4xl font-bold text-forest sm:text-5xl">
          Roofing Glossary for NJ Homeowners
        </h1>
        <p className="mt-6 font-body text-lg text-text-secondary">
          This roofing glossary is a plain-English guide to the roofing terms you will see
          on estimates, inspection reports, and warranties — grouped by roof components,
          materials, process, warranty, and cost.
        </p>
        <div className="mt-10">
          <Link
            href="/roofing-knowledge-base"
            className="font-heading text-base font-semibold text-copper hover:text-copper-dark"
          >
            Explore the Roofing Knowledge Base &rarr;
          </Link>
        </div>
      </main>
    </div>
  );
}
