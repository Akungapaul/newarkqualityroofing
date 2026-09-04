import { AnimateIn } from '@/components/animations/AnimateIn';
import { ProseLead, SectionHeading } from './ProseLead';
import Image from 'next/image';
import { parseRichText } from '@/lib/rich-text';
import type { ServiceContent } from '@/lib/types';

// Generic section glyph (list/lines) — aria-hidden sibling of the <h2>, so the
// rendered-heading audit sees only the plain question text.
const SECTION_ICON = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M4 6h16M4 12h16M4 18h10" />
  </svg>
);

interface ServiceRichSectionsProps {
  /** Ordered, statement-form prose H2 sections (from ServiceContent.sections). */
  sections: NonNullable<ServiceContent['sections']>;
  /** Authored ISO date (YYYY-MM-DD) for the visible "Content updated" stamp. */
  contentUpdated?: string;
  /**
   * Core sub-services. The rich branch replaces ServiceOverview, which is the
   * only other renderer of this field — so without this they are invisible on
   * this page, and an OfferCatalog built from them would mark up content the
   * reader never sees.
   */
  subServices?: NonNullable<ServiceContent['subServices']>;
}

/**
 * Brief-driven prose band: renders each authored section as an answer-first
 * ProseLead (copper-rail lead + body) under a question-form H2. Used only by the
 * rich service layout (roof-repair) — the ~64 other services omit `sections` and
 * render the generic overview/signs/approach band instead. Mirrors the
 * SectionHeading + ProseLead treatment used by EntityDefinition and HubScaffold.
 */
export function ServiceRichSections({ sections, contentUpdated, subServices }: ServiceRichSectionsProps) {
  return (
    <>
      {sections.map((section, index) => {
        const headingId = `service-section-${index}-heading`;
        return (
          // Each section reveals on its own: one wrapper around the whole band
          // grows unboundedly with authored content and cannot animate in.
          <AnimateIn key={headingId}>
          <section aria-labelledby={headingId}>
            <SectionHeading id={headingId} icon={SECTION_ICON}>
              {section.heading}
            </SectionHeading>
            <div className="mt-5">
              <ProseLead
                paragraphs={section.body}
                media={
                  section.image ? (
                    <figure className="photo-treatment overflow-hidden rounded-lg">
                      <div className="relative aspect-[16/9] w-full">
                        <Image
                          src={section.image.src}
                          alt={section.image.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 60vw"
                          loading="lazy"
                        />
                      </div>
                      <figcaption className="mt-2 font-body text-xs text-text-secondary">
                        {section.image.caption}
                      </figcaption>
                    </figure>
                  ) : undefined
                }
              />
            </div>

            {section.costTable && (
              <figure className="mt-8 overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <caption className="mb-3 text-left font-body text-sm text-text-secondary">
                    {section.costTable.caption}
                  </caption>
                  <thead>
                    <tr className="border-b border-forest/20">
                      {section.costTable.columns.map((col) => (
                        <th key={col} scope="col" className="py-2 pr-4 font-heading font-semibold text-forest">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.costTable.rows.map((row, r) => (
                      <tr key={r} className="border-b border-forest/10 align-top">
                        {row.map((cell, c) => (
                          c === 0 ? (
                            <th key={c} scope="row" className="py-2 pr-4 font-body font-medium text-forest">
                              {parseRichText(cell)}
                            </th>
                          ) : (
                            <td key={c} className="py-2 pr-4 font-body text-text-secondary">
                              {parseRichText(cell)}
                            </td>
                          )
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {section.costTable.footnote && (
                  <figcaption className="mt-3">
                    <small className="font-body text-xs text-text-secondary">
                      {parseRichText(section.costTable.footnote)}
                    </small>
                  </figcaption>
                )}
              </figure>
            )}

            {section.subsections && section.subsections.length > 0 && (
              <div className="mt-8 space-y-8">
                {section.subsections.map((sub, subIndex) => (
                  <div key={`${headingId}-sub-${subIndex}`}>
                    <h3 className="font-heading text-xl font-bold text-forest sm:text-2xl">
                      {sub.heading}
                    </h3>
                    <div className="mt-4">
                      <ProseLead
                        paragraphs={sub.body}
                        media={
                          sub.image ? (
                            <figure className="photo-treatment overflow-hidden rounded-lg">
                              <div className="relative aspect-[16/9] w-full">
                                <Image
                                  src={sub.image.src}
                                  alt={sub.image.alt}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 768px) 100vw, 55vw"
                                  loading="lazy"
                                />
                              </div>
                              {sub.image.caption && (
                                <figcaption className="mt-2 font-body text-xs text-text-secondary">
                                  {sub.image.caption}
                                </figcaption>
                              )}
                            </figure>
                          ) : undefined
                        }
                      />
                    </div>

                    {sub.points && sub.points.length > 0 && (
                      <div className="mt-6 space-y-6 border-l border-forest/15 pl-5">
                        {sub.points.map((pt, pIndex) => (
                          <div key={`${headingId}-sub-${subIndex}-pt-${pIndex}`}>
                            <h4 className="font-heading text-lg font-semibold text-forest">
                              {pt.heading}
                            </h4>
                            <div className="mt-3">
                              <ProseLead paragraphs={pt.body} />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
          </AnimateIn>
        );
      })}

      {subServices && subServices.length > 0 && (
        <AnimateIn>
        <section aria-labelledby="core-repairs-heading">
          <SectionHeading id="core-repairs-heading" icon={SECTION_ICON}>
            Core Roof Repairs Newark Quality Roofing Performs
          </SectionHeading>
          <dl className="mt-5 max-w-[68ch] space-y-4">
            {subServices.map((sub) => (
              <div key={sub.name}>
                <dt className="font-body font-semibold text-forest">{sub.name}</dt>
                <dd className="mt-1 font-body text-base leading-relaxed text-text-secondary">
                  {parseRichText(sub.description)}
                </dd>
              </div>
            ))}
          </dl>
        </section>
        </AnimateIn>
      )}

      {contentUpdated && (
        <div>
          <hr className="border-t border-forest/10" />
          <p className="mt-4 font-body text-sm text-text-secondary">
            <small>
              Content updated{' '}
              <time dateTime={contentUpdated}>
                {new Date(`${contentUpdated}T00:00:00Z`).toLocaleDateString('en-US', {
                  year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
                })}
              </time>
              . Prices shown are ranges, not quotes.<sup>1</sup>
            </small>
          </p>
        </div>
      )}
    </>
  );
}
