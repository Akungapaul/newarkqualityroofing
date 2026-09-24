import Link from 'next/link';
import { AnimateIn } from '@/components/animations/AnimateIn';
import { ArticleJumpNav } from './ArticleJumpNav';
import { ChevronIcon, SectionHeading } from './ProseLead';
import { ServiceInlineCta } from './ServiceInlineCta';
import { linkPolicy, relFor } from '@/lib/outbound-links';
import type { SurferBlock, SurferPage, SurferRun } from '@/data/surfer-verbatim/types';

// Renders a Surfer draft synced verbatim (src/data/surfer-verbatim). Same reading
// treatment as the roof-repair rich layout: jump nav, answer-first lead per
// section with the rest folded behind a native <details>, and the inline CTA
// repeated after each section. Text is rendered from exact runs — never parsed.

const LINK_CLASS =
  'text-copper underline decoration-copper/40 underline-offset-2 transition-colors hover:text-copper-dark hover:decoration-copper';

const SECTION_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
    <path d="M4 6h16M4 12h16M4 18h10" />
  </svg>
);

export function SurferInline({ runs }: { runs: SurferRun[] }) {
  return (
    <>
      {runs.map((r, i) => {
        if (r.t === 'text') return r.v;
        const kids = <SurferInline runs={r.c} />;
        if (r.t !== 'a') {
          if (r.t === 'b') return <strong key={i}>{kids}</strong>;
          if (r.t === 'i') return <em key={i}>{kids}</em>;
          return <u key={i}>{kids}</u>;
        }
        if (r.href.startsWith('tel:')) return <a key={i} href={r.href} className={LINK_CLASS}>{kids}</a>;
        const policy = linkPolicy(r.href);
        if (policy === 'internal') return <Link key={i} href={r.href} className={LINK_CLASS}>{kids}</Link>;
        if (policy === 'reject') return <span key={i}>{kids}</span>;
        return <a key={i} href={r.href} rel={relFor(policy)} className={LINK_CLASS}>{kids}</a>;
      })}
    </>
  );
}

const P_CLASS = 'font-body text-base leading-relaxed text-text-secondary [&_strong]:font-semibold [&_strong]:text-forest';

/** An H4 with no H3 above it in the same block list renders as H3 so the outline never skips a level. */
function headingTags(blocks: SurferBlock[]): ('h3' | 'h4' | undefined)[] {
  let sawH3 = false;
  return blocks.map((b) => {
    if (b.t !== 'h3' && b.t !== 'h4') return undefined;
    const tag = b.t === 'h4' && sawH3 ? 'h4' : 'h3';
    if (tag === 'h3') sawH3 = true;
    return tag;
  });
}

function Blocks({ blocks }: { blocks: SurferBlock[] }) {
  const tags = headingTags(blocks);
  return (
    <>
      {blocks.map((b, i) => {
        if (b.t === 'p') return <p key={i} className={P_CLASS}><SurferInline runs={b.runs} /></p>;
        if (b.t === 'h3' || b.t === 'h4') {
          const Tag = tags[i] ?? 'h3';
          return (
            <Tag key={i} className={`pt-2 font-heading font-bold text-forest ${Tag === 'h3' ? 'text-xl sm:text-2xl' : 'text-lg'}`}>
              <SurferInline runs={b.runs} />
            </Tag>
          );
        }
        if (b.t === 'table') {
          return (
            <div key={i} className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <tbody>
                  {b.rows.map((row, r) => (
                    <tr key={r} className="border-b border-forest/10 align-top">
                      {row.map((cell, c) => (
                        <td key={c} className="py-2 pr-4 font-body text-text-secondary"><SurferInline runs={cell} /></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        if (b.t !== 'ul' && b.t !== 'ol') return null;
        const List = b.t;
        return (
          <List key={i} className={`space-y-3 pl-5 ${List === 'ol' ? 'list-decimal' : 'list-disc'} marker:text-copper`}>
            {b.items.map((paras, k) => (
              <li key={k} className={P_CLASS}>
                {paras.map((runs, j) =>
                  j === 0 && paras.length > 1 ? (
                    <span key={j} className="block font-semibold text-forest"><SurferInline runs={runs} /></span>
                  ) : (
                    <span key={j} className={paras.length > 1 ? 'mt-1 block' : undefined}><SurferInline runs={runs} /></span>
                  ),
                )}
              </li>
            ))}
          </List>
        );
      })}
    </>
  );
}

function SectionBody({ blocks }: { blocks: SurferBlock[] }) {
  const leadIdx = blocks.findIndex((b) => b.t === 'p');
  if (leadIdx !== 0) return <div className="space-y-4"><Blocks blocks={blocks} /></div>;
  const [lead, ...rest] = blocks as [Extract<SurferBlock, { t: 'p' }>, ...SurferBlock[]];
  return (
    <>
      <p className="border-l-2 border-copper pl-4 font-body text-lg font-medium leading-relaxed text-forest sm:text-xl [&_strong]:font-bold [&_strong]:text-copper">
        <SurferInline runs={lead.runs} />
      </p>
      {rest.length > 0 && (
        <details className="group mt-4">
          <summary className="flex w-fit cursor-pointer items-center gap-2 font-body text-sm font-semibold text-copper transition-colors hover:text-copper-dark [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">Read more</span>
            <span className="hidden group-open:inline">Show less</span>
            <ChevronIcon />
          </summary>
          <div className="mt-5 max-w-[68ch] space-y-4"><Blocks blocks={rest} /></div>
        </details>
      )}
    </>
  );
}

interface SurferVerbatimArticleProps {
  page: SurferPage;
  /** Service name for the inline CTA repeated after each section. */
  ctaServiceName: string;
}

export function SurferVerbatimArticle({ page, ctaServiceName }: SurferVerbatimArticleProps) {
  return (
    <div className="space-y-12">
      <ArticleJumpNav headings={page.sections.map((s) => s.heading)} />
      {page.sections.map((section, index) => {
        const headingId = `service-section-${index}-heading`;
        return (
          <AnimateIn key={headingId}>
            <section aria-labelledby={headingId}>
              <SectionHeading id={headingId} icon={SECTION_ICON}>{section.heading}</SectionHeading>
              <div className="mt-5">
                {section.faqs ? (
                  <div className="divide-y divide-forest/10 rounded-lg border border-forest/15">
                    {section.faqs.map((f, k) => (
                      <details key={k} className="group px-5 py-4">
                        <summary className="flex cursor-pointer items-start justify-between gap-3 [&::-webkit-details-marker]:hidden">
                          <h3 className="font-heading text-lg font-semibold text-forest transition-colors group-hover:text-copper">{f.q}</h3>
                          <ChevronIcon className="mt-1 text-copper" />
                        </summary>
                        <div className="mt-3 space-y-3"><Blocks blocks={f.a} /></div>
                      </details>
                    ))}
                  </div>
                ) : (
                  <SectionBody blocks={section.blocks ?? []} />
                )}
              </div>
              <div className="mt-8"><ServiceInlineCta serviceName={ctaServiceName} /></div>
            </section>
          </AnimateIn>
        );
      })}
    </div>
  );
}

/** Hero lead: the draft's pre-H2 prose, with the approved keyword sentence first when needed. */
export function SurferHeroLead({ runs, fallback, templateLead }: { runs?: SurferRun[][]; fallback?: string; templateLead?: React.ReactNode }) {
  return (
    <>
      {fallback && <>{fallback} </>}
      {runs ? runs.map((r, i) => <span key={i}>{i > 0 && ' '}<SurferInline runs={r} /></span>) : templateLead}
    </>
  );
}
