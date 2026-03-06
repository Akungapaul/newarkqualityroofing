'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Testimonial } from '@/data/testimonials';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.25;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: fullStars }, (_, i) => (
        <svg
          key={`full-${i}`}
          className="h-5 w-5 text-copper"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {hasHalf && (
        <svg
          className="h-5 w-5 text-copper"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="half-star">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#D4CFC4" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half-star)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      )}
      {Array.from({ length: emptyStars }, (_, i) => (
        <svg
          key={`empty-${i}`}
          className="h-5 w-5 text-border"
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

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mql.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  // Auto-rotate every 5 seconds unless reduced motion preferred
  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, prefersReducedMotion]);

  // For desktop: show 3 cards at a time
  const getVisibleIndices = () => {
    const indices: number[] = [];
    for (let offset = 0; offset < 3; offset++) {
      indices.push((activeIndex + offset) % testimonials.length);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section className="bg-parchment-light py-16 lg:py-24" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          id="testimonials-heading"
          className="text-center font-heading text-3xl font-bold text-forest sm:text-4xl"
        >
          What Our Customers Say
        </h2>

        <div
          role="region"
          aria-label="Customer testimonials"
          aria-live="polite"
          className="mt-12"
        >
          {/* Mobile: single card */}
          <div className="block lg:hidden">
            <TestimonialCard testimonial={testimonials[activeIndex]} />
          </div>

          {/* Desktop: 3 cards */}
          <div className="hidden gap-6 lg:grid lg:grid-cols-3">
            {visibleIndices.map((idx) => (
              <TestimonialCard key={`${idx}-${activeIndex}`} testimonial={testimonials[idx]} />
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="mt-8 flex items-center justify-center gap-2" role="tablist">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setActiveIndex(i)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'scale-125 bg-copper'
                  : 'bg-border hover:bg-copper/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-md">
      <StarRating rating={testimonial.rating} />
      <blockquote className="mt-4">
        <p className="font-body text-base italic leading-relaxed text-text-secondary">
          &ldquo;{testimonial.text}&rdquo;
        </p>
      </blockquote>
      <div className="mt-4 border-t border-border pt-4">
        <p className="font-heading text-base font-bold text-forest">
          {testimonial.name}
        </p>
        <p className="font-body text-sm text-text-secondary">
          {testimonial.location} &middot; {testimonial.service}
        </p>
      </div>
    </div>
  );
}
