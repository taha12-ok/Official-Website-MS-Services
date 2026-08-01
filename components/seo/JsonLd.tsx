import React from 'react';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, absoluteUrl, OG_IMAGE } from '@/lib/seo';
import type { Service } from '@/lib/data/services';

/**
 * Structured data (JSON-LD) helpers (Phase 11).
 * Renders schema.org markup as <script type="application/ld+json">.
 * Works from both server and client components (it only emits a script tag).
 */

const PHONE = '+92 311 8305310';
const EMAIL = 'msservicesandtrading@gmail.com';
const ADDRESS = 'G-48, Falaknaz Tower, Shahrah-e-Faisal';

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl(OG_IMAGE),
    description: SITE_DESCRIPTION,
    foundingDate: '2005',
    email: EMAIL,
    telephone: PHONE,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS,
      addressLocality: 'Karachi',
      addressCountry: 'PK',
    },
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    url: SITE_URL,
    image: absoluteUrl(OG_IMAGE),
    description: SITE_DESCRIPTION,
    telephone: PHONE,
    email: EMAIL,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS,
      addressLocality: 'Karachi',
      addressCountry: 'PK',
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

export function contactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${SITE_NAME}`,
    url: absoluteUrl('/contact'),
    description: 'Get in touch with M.S Services & Trading Co. for services and AI Automation consultations.',
  };
}

export function serviceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.desc,
    serviceType: service.title,
    url: absoluteUrl(`/services/${service.id}`),
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'Pakistan' },
  };
}

export function breadcrumbSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: absoluteUrl('/services') },
      { '@type': 'ListItem', position: 3, name: service.title, item: absoluteUrl(`/services/${service.id}`) },
    ],
  };
}

export function faqSchema(service: Service) {
  if (!service.faqs || service.faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}
