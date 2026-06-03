import type { Metadata } from 'next';
import Link from 'next/link';
import { SEO_CONFIG } from '@/lib/seo-config';

// ─── Shared Hub Scaffold (D-12) ──────────────────────────────────────────────
//
// The 6 new topical hubs (residential-roofing, commercial-roofing,
// flat-roof-systems, roofing-materials, free-roofing-estimate,
// our-roofing-process) resolve at HTTP 200 as noindexed scaffolds until their
// content lands in a later phase. No placeholder/"content-pending" copy and no
// public placeholder trust values render. Each hub route sets its own metadata
// via buildHubMetadata() and renders a single page heading via <HubScaffold>.

/**
 * Build the full metadata for a hub scaffold: title, description, openGraph,
 * self-canonical, and robots:{index:false,follow:true} (scaffold gate).
 */
export function buildHubMetadata(opts: {
  slug: string;
  title: string;
  description: string;
}): Metadata {
  const path = `/${opts.slug}`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: path },
    robots: { index: false, follow: true },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: path,
      siteName: SEO_CONFIG.SITE_NAME,
      type: 'website',
      images: [
        { url: SEO_CONFIG.OG_IMAGE.url, width: SEO_CONFIG.OG_IMAGE.width, height: SEO_CONFIG.OG_IMAGE.height },
      ],
    },
  };
}

interface HubScaffoldProps {
  eyebrow: string;
  heading: string;
  intro: string;
}

export default function HubScaffold({ eyebrow, heading, intro }: HubScaffoldProps) {
  return (
    <div className="min-h-screen bg-parchment px-6 py-16">
      <main className="mx-auto max-w-3xl">
        <span className="inline-block rounded-sm bg-copper px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider text-text-on-copper">
          {eyebrow}
        </span>
        <h1 className="mt-4 font-heading text-4xl font-bold text-forest sm:text-5xl">
          {heading}
        </h1>
        <p className="mt-6 font-body text-lg text-text-secondary">{intro}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-block rounded-sm bg-forest px-5 py-3 font-heading text-base font-semibold text-parchment transition-colors hover:bg-forest-dark"
          >
            Request a Free Roofing Estimate
          </Link>
          <Link
            href="/roofing-services"
            className="inline-block font-heading text-base font-semibold text-copper transition-colors hover:text-copper-dark"
          >
            View All Roofing Services &rarr;
          </Link>
        </div>
      </main>
    </div>
  );
}
