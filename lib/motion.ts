import type { Variants } from 'framer-motion';

/**
 * Shared Framer Motion animation utilities.
 *
 * These centralize animation variants that were previously duplicated
 * across components. Factories are parameterized so existing call sites
 * can reproduce their exact prior values (no visual change).
 *
 * NOTE: This module contains only plain data/functions (no hooks, no JSX),
 * so it is safe to import from both server and client components.
 */

/**
 * Staggered container. Children animate in sequence.
 * Reproduces the previously inlined `containerVariants`.
 *
 * @param staggerChildren delay between each child's animation (seconds)
 */
export const staggerContainer = (staggerChildren = 0.1): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
    },
  },
});

/**
 * Fade + rise-up item. Reproduces the previously inlined `itemVariants`.
 *
 * @param y    starting vertical offset (px)
 * @param duration animation duration (seconds)
 */
export const fadeInUp = (y = 20, duration = 0.5): Variants => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
    },
  },
});

/**
 * Simple opacity fade with no positional movement.
 */
export const fadeIn = (duration = 0.6): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration,
    },
  },
});

/**
 * Scale-in reveal (grows from slightly smaller to full size).
 */
export const scaleIn = (from = 0.95, duration = 0.8): Variants => ({
  hidden: { opacity: 0, scale: from },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration,
    },
  },
});

/**
 * Default viewport config for scroll-triggered (`whileInView`) animations.
 * `once: true` prevents re-animation on scroll-back.
 */
export const defaultViewport = { once: true, margin: '-80px' } as const;
