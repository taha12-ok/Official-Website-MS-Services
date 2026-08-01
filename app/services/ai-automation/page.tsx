import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import AIAutomationSections from '@/components/AIAutomationSections';
import { getServiceById } from '@/lib/data/services';
import { buildServiceMetadata } from '@/lib/seo';
import { JsonLd, serviceSchema, breadcrumbSchema, faqSchema } from '@/components/seo/JsonLd';

const service = getServiceById('ai-automation');

export const metadata: Metadata = buildServiceMetadata({
  id: 'ai-automation',
  title: service?.title || 'AI Automation',
  description: service?.desc,
  keywords:
    'AI automation, AI agents, AI chatbots, AI customer support, business process automation, workflow automation, AI CRM automation, AI WhatsApp automation, AI email automation, AI quote generator, AI integrations, enterprise AI solutions Pakistan',
});

export default function AIAutomationPage() {
  const faq = service ? faqSchema(service) : null;
  return (
    <>
      {service && <JsonLd data={[serviceSchema(service), breadcrumbSchema(service), ...(faq ? [faq] : [])]} />}
      <ServicePageTemplate
        serviceId="ai-automation"
        extraContent={<AIAutomationSections />}
        primaryCta={{
          label: 'Book AI Consultation',
          href: 'https://wa.me/923118305310?text=I%27d%20like%20to%20book%20an%20AI%20Automation%20consultation',
          external: true,
        }}
        secondaryCta={{ label: 'Request a Proposal', href: '/contact' }}
      />
    </>
  );
}
