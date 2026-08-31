import type { Metadata } from 'next';
import Link from 'next/link';
import { SEO_CONFIG } from '@/lib/seo-config';
import type { HubContent } from '@/data/hub-content/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  buildOrganizationSchema,
  buildRoofingContractorSchema,
  buildWebSiteSchema,
  buildWebPageSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildJsonLdGraph,
} from '@/lib/schema';
import { AnimateIn } from '@/components/animations/AnimateIn';
import { EntityDefinition } from '@/components/sections/EntityDefinition';
import { ProseLead, SectionHeading } from '@/components/sections/ProseLead';
import { parseRichText } from '@/lib/rich-text';
import { FloatingCtaButton } from '@/components/sections/FloatingCtaButton';

// ─── Topical / Utility Hub Template ──────────────────────────────────────────
//
// The 6 FLAT hubs (residential-roofing, commercial-roofing, flat-roof-systems,
// roofing-materials, free-roofing-estimate, our-roofing-process) render
// answer-first, entity-grounded content and are INDEXABLE. Each route passes its
// authored HubContent + the question-form H1 from HEADING_CONFIG.hub. Category
// hubs carry an EntityDefinition def block + a curated child-link section;
// utility hubs are lean conversion/process pages (no forced def block).
// DISTINCT from the KB cluster hubs under /roofing-knowledge-base/.

/**
 * Build the full metadata for a hub: title, description, openGraph, self-canonical,
 * and robots:{index:true,follow:true} (indexable — the hubs now carry content).
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
    robots: { index: true, follow: true },
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

// ─── Section icon chips (aria-hidden siblings of the <h2>; never headings) ──────

const SECTION_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
    <path d="M4 6h16M4 12h16M4 18h10" />
  </svg>
);

const LINKS_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const FAQ_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <path d="M12 17h.01" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);

interface HubScaffoldProps {
  hubId: string;
  eyebrow: string;
  heading: string; // the statement-form H1 from HEADING_CONFIG.hub
  content: HubContent;
}

export default function HubScaffold({ hubId, eyebrow, heading, content }: HubScaffoldProps) {
  // Prepend the definitional Q&A to the FAQPage JSON-LD on category hubs (gated).
  const faqsForSchema =
    content.definition && content.definitionHeading
      ? [{ question: content.definitionHeading, answer: content.definition }, ...content.faqs]
      : content.faqs;

  return (
    <>
      <JsonLd data={buildJsonLdGraph(
        buildOrganizationSchema(),
        buildRoofingContractorSchema(),
        buildWebSiteSchema(),
        buildWebPageSchema(`${SEO_CONFIG.BASE_URL}/${hubId}`, content.metaTitle),
        buildBreadcrumbSchema([
          { name: 'Home', url: SEO_CONFIG.BASE_URL },
          { name: eyebrow },
        ]),
        buildFaqSchema(faqsForSchema),
      )} />

      <FloatingCtaButton />

      {/* Hero — H1 + answer-first directAnswer + CTAs */}
      <section className="bg-parchment px-6 pt-16 pb-10">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block rounded-sm bg-copper px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider text-text-on-copper">
            {eyebrow}
          </span>
          <h1 className="mt-4 font-heading text-4xl font-bold text-forest sm:text-5xl">{heading}</h1>
          <p className="mt-6 border-l-2 border-copper pl-4 font-body text-lg font-medium leading-relaxed text-forest sm:text-xl [&_strong]:font-bold [&_strong]:text-copper">
            {parseRichText(content.directAnswer)}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block rounded-sm bg-forest px-5 py-3 font-heading text-base font-semibold text-parchment transition-colors hover:bg-forest-dark"
            >
              Request a Free Roofing Estimate
            </Link>
            <Link
              href="/roofing-services"
              className="inline-block self-center font-heading text-base font-semibold text-copper transition-colors hover:text-copper-dark"
            >
              View All Roofing Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-12">
        <article className="space-y-12 pb-12">
          {/* Entity-grounding: "What Is {topic}?" — first content H2 (category hubs only). */}
          {content.definition && content.definitionHeading && (
            <AnimateIn>
              <EntityDefinition
                headingId="hub-definition-heading"
                heading={content.definitionHeading}
                definition={content.definition}
              />
            </AnimateIn>
          )}

          {content.sections.map((section, i) => (
            <AnimateIn key={i}>
              <section aria-labelledby={`hub-section-${i}-heading`}>
                <SectionHeading id={`hub-section-${i}-heading`} icon={SECTION_ICON}>
                  {section.heading}
                </SectionHeading>
                <div className="mt-5">
                  <ProseLead paragraphs={section.body} />
                </div>
              </section>
            </AnimateIn>
          ))}

          {/* Curated child-link section (category hubs). Group labels are plain text,
              NOT headings; links live in a <ul> (exempt from the R39 contextual-link pass). */}
          {content.childLinks && (
            <AnimateIn>
              <section aria-labelledby="hub-links-heading">
                <SectionHeading id="hub-links-heading" icon={LINKS_ICON}>
                  {content.childLinks.heading}
                </SectionHeading>
                <div className="mt-6 space-y-6">
                  {content.childLinks.groups.map((group, gi) => (
                    <div key={gi}>
                      <p className="font-heading text-sm font-semibold uppercase tracking-wide text-copper">
                        {group.label}
                      </p>
                      <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                        {group.links.map((link, li) => (
                          <li key={li}>
                            <Link
                              href={link.href}
                              className="font-body text-base text-forest underline decoration-copper/40 underline-offset-2 transition-colors hover:text-copper"
                            >
                              {link.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </AnimateIn>
          )}

          {/* FAQs — question-form H2, each Q an h3, answers parse **markdown**. */}
          <AnimateIn>
            <section aria-labelledby="hub-faq-heading">
              <SectionHeading id="hub-faq-heading" icon={FAQ_ICON}>
                {content.faqHeading}
              </SectionHeading>
              <div className="mt-6 space-y-6">
                {content.faqs.map((faq, i) => (
                  <div key={i}>
                    <h3 className="font-heading text-lg font-semibold text-forest">{faq.question}</h3>
                    <p className="mt-2 font-body text-base leading-relaxed text-text-secondary [&_strong]:font-semibold [&_strong]:text-forest">
                      {parseRichText(faq.answer)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </AnimateIn>
        </article>

        {/* Closing CTA — no heading (audit-safe), factual + de-fab-free. */}
        <div className="rounded-sm border border-copper/30 bg-white p-8 text-center">
          <p className="font-body text-lg leading-relaxed text-text-secondary">
            Newark Quality Roofing is a registered New Jersey Home Improvement Contractor serving Newark
            and Essex County. Request a free, no-obligation roofing estimate today.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block rounded-sm bg-forest px-5 py-3 font-heading text-base font-semibold text-parchment transition-colors hover:bg-forest-dark"
            >
              Request a Free Roofing Estimate
            </Link>
            <Link
              href="/roofing-services"
              className="inline-block self-center font-heading text-base font-semibold text-copper transition-colors hover:text-copper-dark"
            >
              View All Roofing Services &rarr;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
