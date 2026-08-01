import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { getServiceById } from '@/lib/data/services';
import { buildServiceMetadata } from '@/lib/seo';
import { JsonLd, serviceSchema, breadcrumbSchema } from '@/components/seo/JsonLd';

const service = getServiceById('it-solutions');

export const metadata: Metadata = buildServiceMetadata({
  id: 'it-solutions',
  title: service?.title || 'it-solutions',
  description: service?.desc,
});

export default function ITSolutionsPage() {
  return (
    <>
      {service && <JsonLd data={[serviceSchema(service), breadcrumbSchema(service)]} />}
      <ServicePageTemplate serviceId="it-solutions" />
    </>
  );
}
