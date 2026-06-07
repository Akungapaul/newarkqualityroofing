// ─── Shared answer-first prose primitives ───────────────────────────────────
// Render-only treatment that promotes the first (answer-first) sentence of a
// content array to a prominent lead and constrains the body to a comfortable
// reading measure. Content/data is untouched — the first array element is
// already the ≤40-word definitive answer (semantic-content ruleset Rule 2).

interface ProseLeadProps {
  paragraphs: string[];
  /** Optional media (e.g. a section <Image>) rendered between the lead and body. */
  media?: React.ReactNode;
}

export function ProseLead({ paragraphs, media }: ProseLeadProps) {
  if (!paragraphs || paragraphs.length === 0) return null;
  const [lead, ...body] = paragraphs;

  return (
    <>
      <p className="border-l-2 border-copper pl-4 font-body text-lg font-medium leading-relaxed text-forest sm:text-xl">
        {lead}
      </p>

      {media && <div className="mt-5">{media}</div>}

      {body.length > 0 && (
        <div className="mt-5 max-w-[68ch] space-y-4">
          {body.map((paragraph, index) => (
            <p key={index} className="font-body text-base leading-relaxed text-text-secondary">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </>
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
      <h2 id={id} className="font-heading text-2xl font-bold text-forest sm:text-3xl">
        {children}
      </h2>
    </div>
  );
}
