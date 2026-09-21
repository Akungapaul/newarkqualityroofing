/**
 * Jump menu for a long rich-sections page. Labels are the authored H2 headings
 * verbatim; targets are the `service-section-{i}-heading` ids SectionHeading
 * already emits. Server-rendered anchors — no client JS, works on mobile, where
 * the page runs to ~130 screens.
 */
interface ArticleJumpNavProps {
  /** Section headings, in render order. */
  headings: string[];
  /** Extra anchors appended after the sections (e.g. costs, FAQs). */
  extraLinks?: { label: string; href: string }[];
}

export function ArticleJumpNav({ headings, extraLinks = [] }: ArticleJumpNavProps) {
  if (headings.length === 0) return null;

  const links = [
    ...headings.map((label, index) => ({ label, href: `#service-section-${index}-heading` })),
    ...extraLinks,
  ];

  return (
    <nav aria-labelledby="jump-nav-heading" className="rounded-lg border border-forest/15 bg-parchment/40 p-5 sm:p-6">
      {/* A <p>, not a heading: this is navigation chrome and must stay out of
          the page's heading outline (and the rendered-heading audit). */}
      <p id="jump-nav-heading" className="font-heading text-base font-bold uppercase tracking-wide text-forest">
        On this page
      </p>
      <ol className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.href} className="flex gap-2 font-body text-base leading-snug">
            <span aria-hidden="true" className="text-copper">›</span>
            <a
              href={link.href}
              className="text-text-secondary underline decoration-copper/30 underline-offset-2 transition-colors hover:text-copper hover:decoration-copper"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
