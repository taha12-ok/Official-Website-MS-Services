import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { getServiceById } from '@/lib/data/services';
import { buildServiceMetadata } from '@/lib/seo';
import { JsonLd, serviceSchema, breadcrumbSchema } from '@/components/seo/JsonLd';

const service = getServiceById('janitorial');

export const metadata: Metadata = buildServiceMetadata({
  id: 'janitorial',
  title: service?.title || 'janitorial',
  description: service?.desc,
});

export default function JanitorialPage() {
  return (
    <>
      {service && <JsonLd data={[serviceSchema(service), breadcrumbSchema(service)]} />}
      <ServicePageTemplate serviceId="janitorial" />
    </>
  );
}
