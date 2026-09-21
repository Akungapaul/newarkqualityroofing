import { ProseLead, SectionHeading } from './ProseLead';

// "What is / Where is" definitional glyph (info-circle). aria-hidden — the icon is
// a sibling of the <h2> (see SectionHeading) so the rendered-heading audit sees only
// the plain question text.
const DEFINITION_ICON = (
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
    <circle cx="12" cy="12" r="9" />
    <path d="M12 16v-4M12 8h.01" />
  </svg>
);

interface EntityDefinitionProps {
  /** Heading id (also the section's aria-labelledby target). Must be unique per page. */
  headingId: string;
  /** Optional section id — used by the city Table-of-Contents scroll-spy anchor. */
  sectionId?: string;
  /** Question-form heading, e.g. "What Is Roof Repair?" / "Where Is Newark, NJ?". */
  heading: string;
  /** The ≤40-word answer-first definition (central entity pre-bolded via **markdown**). */
  definition: string;
  /** Optional follow-up paragraphs rendered as the section's body, under the lead. */
  extraParagraphs?: string[];
}

/**
 * Entity-grounding definitional section — the first content H2 after the hero.
 * Renders an answer-first ProseLead (copper-rail lead) under a question heading and
 * gives search engines the page's central entity up front. Render only when the
 * source `definition`/`whereIs`/`definitionA`/`definitionB` field is present (gate
 * at the call site so un-backfilled pages render exactly as before).
 */
export function EntityDefinition({ headingId, sectionId, heading, definition, extraParagraphs }: EntityDefinitionProps) {
  return (
    <section id={sectionId} aria-labelledby={headingId}>
      <SectionHeading id={headingId} icon={DEFINITION_ICON}>
        {heading}
      </SectionHeading>
      <div className="mt-5">
        {/* Follow-ups fold behind "Read more" like every other section; the
            definition itself always stays visible. */}
        <ProseLead paragraphs={[definition, ...(extraParagraphs ?? [])]} collapsible />
      </div>
    </section>
  );
}
