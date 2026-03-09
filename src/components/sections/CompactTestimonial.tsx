import type { Testimonial } from '@/data/testimonials';

// ─── Star Rating (compact variant) ─────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.25;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: fullStars }, (_, i) => (
        <svg
          key={`full-${i}`}
          className="h-4 w-4 text-copper"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {hasHalf && (
        <svg
          className="h-4 w-4 text-copper"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="compact-half-star">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#D4CFC4" />
            </linearGradient>
          </defs>
          <path
            fill="url(#compact-half-star)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      )}
      {Array.from({ length: emptyStars }, (_, i) => (
        <svg
          key={`empty-${i}`}
          className="h-4 w-4 text-border"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ─── CompactTestimonial Component ───────────────────────────────────────────

interface CompactTestimonialProps {
  testimonials: Testimonial[];
  filterBy: {
    type: 'service' | 'location';
    value: string;
  };
}

export function CompactTestimonial({
  testimonials,
  filterBy,
}: CompactTestimonialProps) {
  // Filter by type (case-insensitive partial match)
  const filtered = testimonials.filter((t) => {
    const field =
      filterBy.type === 'service' ? t.service : t.location;
    return field.toLowerCase().includes(filterBy.value.toLowerCase());
  });

  // Show first 2 matches; fill with first available if fewer than 2
  let selected: Testimonial[];
  if (filtered.length >= 2) {
    selected = filtered.slice(0, 2);
  } else if (filtered.length === 1) {
    const fallback = testimonials.find(
      (t) => t.name !== filtered[0].name,
    );
    selected = fallback ? [filtered[0], fallback] : [filtered[0]];
  } else {
    selected = testimonials.slice(0, 2);
  }

  if (selected.length === 0) return null;

  return (
    <section aria-labelledby="compact-testimonials-heading">
      <h2
        id="compact-testimonials-heading"
        className="font-heading text-xl font-semibold text-forest"
      >
        What Our Customers Say
      </h2>
      <div className="mt-4 space-y-4">
        {selected.map((testimonial) => (
          <div
            key={testimonial.name}
            className="rounded-lg border border-border bg-white p-5"
          >
            <StarRating rating={testimonial.rating} />
            <blockquote className="mt-3">
              <p className="font-body text-sm leading-relaxed text-text-secondary">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </blockquote>
            <div className="mt-3 border-t border-border pt-3">
              <p className="font-heading text-sm font-bold text-forest">
                {testimonial.name}
              </p>
              <p className="font-body text-xs text-text-secondary">
                {testimonial.location} &middot; {testimonial.service}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
