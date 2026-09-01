import { testimonials } from '@/data/testimonials';

// ─── Testimonials (homepage social proof) ────────────────────────────────────
// Question-form H2 + real customer reviews as <figure>/<blockquote> cards.
// Attribution is a <figcaption> (not a heading) so the heading audit is unaffected.
// No Review JSON-LD by design (self-serving review markup guideline).

const QUOTE_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-copper/40" aria-hidden="true">
    <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H5.5A2.67 2.67 0 0 1 8.17 8.5V6H7.17Zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.83v-6.83H15.5a2.67 2.67 0 0 1 2.67-2.67V6h-1Z" />
  </svg>
);

export function Testimonials() {
  return (
    <section className="bg-white py-16 lg:py-24" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2
          id="testimonials-heading"
          className="text-center font-heading text-3xl font-bold text-forest sm:text-4xl"
        >
          What Newark, NJ Customers Say About Our Roofing
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center font-body text-lg text-text-secondary">
          Results across Newark’s neighborhoods — from emergency storm response to
          historic slate restoration.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.attribution}
              className="flex flex-col rounded-lg border border-border bg-parchment p-6 shadow-sm"
            >
              {QUOTE_ICON}
              <blockquote className="mt-3 flex-1 font-body text-base leading-relaxed text-text-secondary">
                {t.quote}
              </blockquote>
              <figcaption className="mt-4 border-t border-border pt-4 font-heading text-sm font-semibold text-forest">
                {t.attribution}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
