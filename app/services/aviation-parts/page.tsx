import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { getServiceById } from '@/lib/data/services';
import { buildServiceMetadata } from '@/lib/seo';
import { JsonLd, serviceSchema, breadcrumbSchema } from '@/components/seo/JsonLd';

const service = getServiceById('aviation-parts');

export const metadata: Metadata = buildServiceMetadata({
  id: 'aviation-parts',
  title: service?.title || 'aviation-parts',
  description: service?.desc,
});

export default function AviationPartsPage() {
  return (
    <>
      {service && <JsonLd data={[serviceSchema(service), breadcrumbSchema(service)]} />}
      <ServicePageTemplate serviceId="aviation-parts" />
    </>
  );
}
