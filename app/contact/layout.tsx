import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, contactPageSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us',
  description:
    'Contact M.S Services & Trading Co. for services and AI Automation consultations. Call +92 311 8305310 or visit our Karachi office. Response within 24 hours.',
  path: '/contact',
  keywords:
    'contact M.S Services, Karachi office, AI automation consultation, request a quote, services Pakistan contact',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={contactPageSchema()} />
      {children}
    </>
  );
}
