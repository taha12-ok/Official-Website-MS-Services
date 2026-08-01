"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

/**
 * Shared animated SVG background used across marketing pages
 * (home + services index). Extracted from previously duplicated
 * inline copies.
 *
 * Phase 2 · Task 7 enhancements (no visual redesign):
 *  - Pauses its animation when scrolled offscreen (IntersectionObserver),
 *    so it doesn't consume compositor time when not visible.
 *  - Respects prefers-reduced-motion (renders the static paths, no loop).
 *  - Renders fewer paths on small screens for cheaper mobile rendering.
 *  - Uses only opacity/pathLength/pathOffset animation (no layout).
 *
 * Wrapped in React.memo: its only prop (`position`) is constant, so it should
 * not re-render when a parent's unrelated state (e.g. video/mouse) changes.
 */
function FloatingPathsBase({ position }: { position: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReduced = usePrefersReducedMotion();

  // Pause when offscreen.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Reduce path count on small screens.
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const count = isMobile ? 18 : 36;
  const animate = inView && !prefersReduced;

  const paths = Array.from({ length: count }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-slate-950 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={
              animate
                ? {
                    pathLength: 1,
                    opacity: [0.3, 0.6, 0.3],
                    pathOffset: [0, 1, 0],
                  }
                : { pathLength: 1, opacity: 0.4 }
            }
            transition={
              animate
                ? {
                    duration: 20 + Math.random() * 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }
                : { duration: 0 }
            }
          />
        ))}
      </svg>
    </div>
  );
}

export const FloatingPaths = React.memo(FloatingPathsBase);

export default FloatingPaths;
