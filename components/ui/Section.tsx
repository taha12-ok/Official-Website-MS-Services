import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Element/tag to render as. Defaults to `section`. */
  as?: React.ElementType;
  /** Extra classes for the inner max-width container. */
  containerClassName?: string;
  children: React.ReactNode;
}

/**
 * Standardized page section wrapper (Phase 2 · Task 2).
 *
 * Centralizes the repeated section rhythm used across the site:
 *  - vertical spacing:  py-16 sm:py-24 md:py-32
 *  - horizontal padding: px-4 sm:px-6
 *  - inner max-width:    max-w-7xl mx-auto
 *
 * NOT yet applied to existing sections — this is prepared for future
 * migration so spacing can be standardized without a redesign now.
 * `className` overrides outer spacing; `containerClassName` overrides
 * the inner container (e.g. a narrower max-width).
 */
export function Section({
  as: Tag = 'section',
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <Tag className={cn('relative py-16 sm:py-24 md:py-32 px-4 sm:px-6', className)} {...props}>
      <div className={cn('max-w-7xl mx-auto', containerClassName)}>{children}</div>
    </Tag>
  );
}

export default Section;
