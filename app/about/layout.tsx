import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'About Us',
  description:
    'Since 2005, M.S Services & Trading Co. has delivered integrated infrastructure solutions across Pakistan — now extending into enterprise AI Automation, intelligent business solutions, AI agents, and workflow automation.',
  path: '/about',
  keywords:
    'about M.S Services, infrastructure company Pakistan, since 2005, enterprise AI automation, business AI solutions, company history',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
