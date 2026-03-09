'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface HeroFormRevealProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function HeroFormReveal({ children, className, id }: HeroFormRevealProps) {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
