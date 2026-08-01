"use client"
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { fadeInUp, defaultViewport } from '@/lib/motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Variants to animate with. Defaults to a fade + rise-up. */
  variants?: Variants;
  /** Optional delay (seconds) before the reveal starts. */
  delay?: number;
}

/**
 * Reusable scroll-triggered reveal wrapper.
 *
 * Centralizes the repeated `initial / whileInView / viewport` boilerplate.
 * Honors `prefers-reduced-motion`: when reduced motion is requested, the
 * content renders immediately with no animation.
 */
export function Reveal({ children, className, variants = fadeInUp(), delay }: RevealProps) {
  const prefersReduced = usePrefersReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      transition={delay !== undefined ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
