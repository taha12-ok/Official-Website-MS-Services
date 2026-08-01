import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { services } from '@/lib/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = ['', '/about', '/services', '/projects', '/contact'].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${SITE_URL}/services/${s.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    // Flagship AI Automation gets higher priority.
    priority: s.featured ? 0.9 : 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
