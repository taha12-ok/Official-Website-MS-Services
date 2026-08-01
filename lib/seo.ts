import type { Metadata } from 'next';

/**
 * Central SEO configuration & helpers (Phase 11).
 * One source of truth for the site URL, default Open Graph / Twitter
 * metadata, and per-page canonical + social tags via the Next.js Metadata API.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://www.msservicesandtrading.com';

export const SITE_NAME = 'M.S Services & Trading Co.';
export const SITE_DESCRIPTION =
  'Complete infrastructure solutions and enterprise AI Automation — construction, IT, janitorial, transportation, supplies, solar, aviation, marine, electrical, mechanical, safety equipment, and AI agents. Serving Pakistan with excellence since 2005.';

/** Default social share image — reuses existing branding asset. */
export const OG_IMAGE = '/mslogo.png';

export function absoluteUrl(path = '/'): string {
  if (!path.startsWith('/')) path = `/${path}`;
  return `${SITE_URL}${path}`;
}

interface PageMetaInput {
  title: string;
  description?: string;
  path?: string;
  keywords?: string;
  /** When true, the title is used verbatim (parent template not applied). */
  absoluteTitle?: boolean;
}

/**
 * Builds a complete Metadata object (canonical, Open Graph, Twitter, robots)
 * for a page. By default the parent title template (`%s | Site`) is applied;
 * pass `absoluteTitle` for titles that already include the brand suffix.
 */
export function buildMetadata({ title, description, path = '/', keywords, absoluteTitle }: PageMetaInput): Metadata {
  const desc = description || SITE_DESCRIPTION;
  const url = absoluteUrl(path);
  const ogTitle = title;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description: desc,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title: ogTitle,
      description: desc,
      url,
      images: [{ url: OG_IMAGE }],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: desc,
      images: [OG_IMAGE],
    },
  };
}

/**
 * Metadata for a service detail page, derived from the central service record.
 */
export function buildServiceMetadata(opts: {
  id: string;
  title: string;
  description?: string;
  keywords?: string;
}): Metadata {
  return buildMetadata({
    title: opts.title,
    description: opts.description,
    path: `/services/${opts.id}`,
    keywords: opts.keywords,
  });
}

