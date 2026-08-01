"use client"
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * Reusable glass surface card (Phase 2 · Task 3).
 *
 * Built from the site's existing visual language:
 *  - translucent surface + backdrop blur
 *  - neutral border matching current cards
 *  - subtle always-on inner highlight
 *  - hover: small translateY lift + shadow bloom + faint gradient border
 *
 * The hover gradient border reuses the brand's existing emerald-500 / cyan-500
 * accents (same values as the globals.css scrollbar) — no new colors.
 *
 * Implemented with CSS transitions + Tailwind `motion-reduce:` variants so it
 * is lightweight, stable on touch devices (base state is fully styled, hover
 * is purely decorative), and honors prefers-reduced-motion.
 *
 * Carries the `group` class so existing `group-hover:` children keep working
 * after conversion. Rounding can be overridden via `className`; overlays use
 * `rounded-[inherit]` so they always match.
 */
const hoverBorderStyle = {
  background: 'linear-gradient(135deg, rgba(16,185,129,0.35), rgba(6,182,212,0.35))',
  padding: '1px',
  WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
  WebkitMaskComposite: 'xor',
  maskComposite: 'exclude',
} as React.CSSProperties;

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        'group relative rounded-2xl md:rounded-3xl',
        'glass-surface',
        'transition-all duration-500 ease-out',
        'hover:-translate-y-1 hover:shadow-2xl hover:border-neutral-400 dark:hover:border-neutral-600',
        'motion-reduce:transition-none motion-reduce:hover:translate-y-0',
        className,
      )}
      {...props}
    >
      {/* subtle always-on inner highlight */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/10 to-transparent dark:from-white/[0.06] opacity-70"
      />
      {/* faint gradient border, fades in on hover */}
      <span
        aria-hidden="true"
        style={hoverBorderStyle}
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:transition-none"
      />
      <div className="relative">{children}</div>
    </div>
  );
}

export default GlassCard;
