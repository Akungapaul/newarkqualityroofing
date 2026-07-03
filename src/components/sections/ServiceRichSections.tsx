import { ProseLead, SectionHeading } from './ProseLead';
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
  /** Ordered, question-form prose H2 sections (from ServiceContent.sections). */
  sections: NonNullable<ServiceContent['sections']>;
}

/**
 * Brief-driven prose band: renders each authored section as an answer-first
 * ProseLead (copper-rail lead + body) under a question-form H2. Used only by the
 * rich service layout (roof-repair) — the ~64 other services omit `sections` and
 * render the generic overview/signs/approach band instead. Mirrors the
 * SectionHeading + ProseLead treatment used by EntityDefinition and HubScaffold.
 */
export function ServiceRichSections({ sections }: ServiceRichSectionsProps) {
  return (
    <>
      {sections.map((section, index) => {
        const headingId = `service-section-${index}-heading`;
        return (
          <section key={headingId} aria-labelledby={headingId}>
            <SectionHeading id={headingId} icon={SECTION_ICON}>
              {section.heading}
            </SectionHeading>
            <div className="mt-5">
              <ProseLead paragraphs={section.body} />
            </div>
          </section>
        );
      })}
    </>
  );
}
