'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: keyof HTMLElementTagNameMap;
}

export function AnimateIn({
  children,
  className,
  delay = 0,
  as = 'div',
}: AnimateInProps) {
  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      // `amount: 'some'` (threshold 0), never a fraction. A fractional amount is
      // unreachable once the wrapped element grows past viewportHeight / amount
      // (at 0.2 that is 5x the viewport), because that share of it can never be
      // on screen at once — whileInView then never fires and the content stays
      // stuck at `initial` opacity 0. That silently blanked the entire
      // roof-repair rich band (26,850px) in production.
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </MotionComponent>
  );
}
