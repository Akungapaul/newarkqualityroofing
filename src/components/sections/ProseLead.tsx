import { parseRichText } from '@/lib/rich-text';

// ─── Shared answer-first prose primitives ───────────────────────────────────
// Render-only treatment that promotes the first (answer-first) sentence of a
// content array to a prominent lead and constrains the body to a comfortable
// reading measure. Content/data is untouched — the first array element is
// already the ≤40-word definitive answer (semantic-content ruleset Rule 2).
// Both the lead and the body parse **markdown**: the lead bolds the answer's
// named main topics (copper), and each follow-up body paragraph bolds the same
// topic where it develops it (forest), tying the answer to its expansion.

interface ProseLeadProps {
  paragraphs: string[];
  /** Optional media (e.g. a section <Image>) rendered between the lead and body. */
  media?: React.ReactNode;
  /**
   * Fold the body behind a native <details> disclosure, leaving the answer-first
   * lead (and any media) visible. Page-length control only — the body stays in
   * the server-rendered HTML, so crawlers and content scorers still read it.
   */
  collapsible?: boolean;
}

export function ProseLead({ paragraphs, media, collapsible }: ProseLeadProps) {
  if (!paragraphs || paragraphs.length === 0) return null;
  const [lead, ...body] = paragraphs;

  const bodyBlock = body.length > 0 && (
    <div className="mt-5 max-w-[68ch] space-y-4">
      {body.map((paragraph, index) => (
        <p key={index} className="font-body text-base leading-relaxed text-text-secondary [&_strong]:font-semibold [&_strong]:text-forest">
          {parseRichText(paragraph)}
        </p>
      ))}
    </div>
  );

  return (
    <>
      <p className="border-l-2 border-copper pl-4 font-body text-lg font-medium leading-relaxed text-forest sm:text-xl [&_strong]:font-bold [&_strong]:text-copper">
        {parseRichText(lead)}
      </p>

      {media && <div className="mt-5">{media}</div>}

      {collapsible && bodyBlock ? (
        <details className="group mt-4">
          <summary className="flex w-fit cursor-pointer items-center gap-2 font-body text-sm font-semibold text-copper transition-colors hover:text-copper-dark [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">Read more</span>
            <span className="hidden group-open:inline">Show less</span>
            <ChevronIcon />
          </summary>
          {bodyBlock}
        </details>
      ) : (
        bodyBlock
      )}
    </>
  );
}

/** Disclosure chevron — matches the FAQ accordions (ServiceFaq). */
export function ChevronIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 transition-transform duration-300 group-open:rotate-180 ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

interface SectionHeadingProps {
  id: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

/** H2 with a small copper icon chip. The icon is a sibling of the <h2> (not a
 *  child) so the heading's text stays pristine for the rendered heading audit. */
export function SectionHeading({ id, icon, children }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-copper/10 text-copper"
        aria-hidden="true"
      >
        {icon}
      </span>
      <h2 id={id} className="scroll-mt-24 font-heading text-2xl font-bold text-forest sm:text-3xl">
        {children}
      </h2>
    </div>
  );
}
