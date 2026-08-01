import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { getServiceById } from '@/lib/data/services';
import { buildServiceMetadata } from '@/lib/seo';
import { JsonLd, serviceSchema, breadcrumbSchema } from '@/components/seo/JsonLd';

const service = getServiceById('generator-parts');

export const metadata: Metadata = buildServiceMetadata({
  id: 'generator-parts',
  title: service?.title || 'generator-parts',
  description: service?.desc,
});

export default function GeneratorPartsPage() {
  return (
    <>
      {service && <JsonLd data={[serviceSchema(service), breadcrumbSchema(service)]} />}
      <ServicePageTemplate serviceId="generator-parts" />
    </>
  );
}
