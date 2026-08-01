"use client"
import React, { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface CountUpProps {
  /** The original stat string, e.g. "1,200+", "95%", "5MW+", "24/7", "FAA". */
  value: string;
  /** Animation duration in seconds. */
  duration?: number;
  className?: string;
}

/**
 * Elegant count-up for existing statistics (Phase 2 · Task 5).
 *
 * Parses a single numeric group with an optional prefix/suffix and animates
 * from 0 to the target when scrolled into view (once). Values without exactly
 * one numeric group (e.g. "FAA", "ISO", "24/7") render statically unchanged.
 * Honors prefers-reduced-motion by rendering the final value immediately.
 *
 * No new dependencies (framer-motion is already used). Only the text content
 * changes — no transform/layout animation — so it is layout-safe.
 */

// Matches: optional non-digit prefix, a number (with thousands commas + optional
// decimals), optional non-digit suffix. Requires exactly one numeric group.
const SINGLE_NUMBER = /^(\D*?)(\d[\d,]*(?:\.\d+)?)(\D*)$/;

function parseValue(value: string) {
  const match = value.match(SINGLE_NUMBER);
  if (!match) return null;
  // Reject strings with a second number (e.g. "24/7").
  if (/\d/.test(match[3])) return null;

  const rawNumber = match[2];
  const hasComma = rawNumber.includes(',');
  const decimals = rawNumber.includes('.') ? rawNumber.split('.')[1].length : 0;
  const target = parseFloat(rawNumber.replace(/,/g, ''));
  if (Number.isNaN(target)) return null;

  return { prefix: match[1], suffix: match[3], target, hasComma, decimals };
}

function format(n: number, hasComma: boolean, decimals: number) {
  const fixed = n.toFixed(decimals);
  if (!hasComma) return fixed;
  const [intPart, decPart] = fixed.split('.');
  const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return decPart ? `${withCommas}.${decPart}` : withCommas;
}

export function CountUp({ value, duration = 1.6, className }: CountUpProps) {
  const parsed = parseValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const prefersReduced = usePrefersReducedMotion();
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(
    parsed ? `${parsed.prefix}${format(0, parsed.hasComma, parsed.decimals)}${parsed.suffix}` : value,
  );

  useEffect(() => {
    if (!parsed) return;
    if (prefersReduced) {
      setDisplay(`${parsed.prefix}${format(parsed.target, parsed.hasComma, parsed.decimals)}${parsed.suffix}`);
      return;
    }
    if (!inView) return;

    const controls = animate(motionValue, parsed.target, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => {
        setDisplay(`${parsed.prefix}${format(latest, parsed.hasComma, parsed.decimals)}${parsed.suffix}`);
      },
    });
    return () => controls.stop();
  }, [inView, prefersReduced, parsed, motionValue, duration]);

  // Non-numeric values render exactly as before.
  if (!parsed) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

export default CountUp;
