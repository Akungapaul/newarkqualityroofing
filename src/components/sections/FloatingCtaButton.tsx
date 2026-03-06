'use client';

export function FloatingCtaButton() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
      <div className="bg-forest-dark/95 px-4 py-3 backdrop-blur-sm">
        <a
          href="#lead-form"
          aria-label="Get a free roofing estimate"
          className="block w-full rounded-lg bg-copper px-6 py-3 text-center font-heading text-lg font-bold text-text-on-copper transition-colors hover:bg-copper-dark focus-visible:ring-2 focus-visible:ring-copper-light focus-visible:ring-offset-2 focus-visible:ring-offset-forest-dark focus-visible:outline-none"
        >
          Get Free Estimate
        </a>
      </div>
    </div>
  );
}
