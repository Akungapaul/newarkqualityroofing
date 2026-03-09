'use client';

import { useState, useEffect } from 'react';
import { useScroll, motion } from 'motion/react';

export function FloatingCtaButton() {
  const { scrollY } = useScroll();
  const [pastFold, setPastFold] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (v) => setPastFold(v > 600));
  }, [scrollY]);

  return (
    <>
      {/* Mobile: full-width bottom bar */}
      <motion.div
        className="fixed inset-x-0 bottom-0 z-40 lg:hidden"
        initial={{ y: '100%' }}
        animate={pastFold ? { y: 0 } : { y: '100%' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="bg-forest-dark/95 px-4 py-3 backdrop-blur-sm">
          <a
            href="#lead-form"
            aria-label="Get a free roofing estimate"
            className="block w-full rounded-lg bg-copper px-6 py-3 text-center font-heading text-lg font-bold text-text-on-copper transition-transform duration-200 hover:scale-[1.02] hover:bg-copper-dark focus-visible:ring-2 focus-visible:ring-copper-light focus-visible:ring-offset-2 focus-visible:ring-offset-forest-dark focus-visible:outline-none"
          >
            Get Free Estimate
          </a>
        </div>
      </motion.div>

      {/* Desktop: fixed pill button (bottom-right) */}
      <motion.div
        className="fixed bottom-6 right-6 z-40 hidden lg:block"
        initial={{ y: '200%' }}
        animate={pastFold ? { y: 0 } : { y: '200%' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <a
          href="#lead-form"
          aria-label="Get a free roofing estimate"
          className="inline-flex items-center gap-2 rounded-full bg-copper px-6 py-3 font-heading text-base font-bold text-text-on-copper shadow-xl transition-transform duration-200 hover:scale-[1.02] hover:bg-copper-dark focus-visible:ring-2 focus-visible:ring-copper-light focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Get Free Estimate
        </a>
      </motion.div>
    </>
  );
}
