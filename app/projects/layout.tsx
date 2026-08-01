import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Projects',
  description:
    'Explore projects delivered by M.S Services & Trading Co. — including government, naval, educational, and infrastructure engagements across Pakistan, plus AI Automation showcases.',
  path: '/projects',
  keywords:
    'M.S Services projects, infrastructure projects Pakistan, naval projects, government projects, AI automation showcase',
});

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
