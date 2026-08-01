import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Our Services',
  description:
    'Explore M.S Services & Trading Co. offerings — flagship AI Automation plus construction, IT, solar, marine, aviation, electrical, mechanical, transportation, janitorial, supplies, generator, and safety equipment services.',
  path: '/services',
  keywords:
    'services Pakistan, AI automation, construction services, IT solutions, solar installation, marine equipment, aviation parts, electrical services, mechanical services, transportation, janitorial services',
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
