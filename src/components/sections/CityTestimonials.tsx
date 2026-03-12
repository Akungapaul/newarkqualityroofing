import type { CityContent } from '@/lib/types';

interface CityTestimonialsProps {
  testimonials: CityContent['testimonials'];
  cityName: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex text-copper" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} aria-hidden="true">
          {i < rating ? '\u2605' : '\u2606'}
        </span>
      ))}
    </span>
  );
}

export function CityTestimonials({
  testimonials,
  cityName,
}: CityTestimonialsProps) {
  return (
    <div>
      <h2 id="testimonials-heading" className="font-heading text-2xl font-bold text-forest sm:text-3xl">
        What {cityName} Residents Say
      </h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <blockquote
            key={index}
            className="rounded-lg border border-border bg-white p-6 shadow-sm"
          >
            <StarRating rating={testimonial.rating} />
            <p className="mt-3 font-body text-base leading-relaxed text-text-secondary italic">
              &ldquo;{testimonial.text}&rdquo;
            </p>
            <footer className="mt-4 flex items-center justify-between">
              <cite className="font-heading text-sm font-semibold text-forest not-italic">
                {testimonial.name}
              </cite>
              <span className="rounded-sm bg-parchment-dark px-2 py-0.5 font-body text-xs text-text-secondary">
                {testimonial.service}
              </span>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
