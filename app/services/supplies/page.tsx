import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { getServiceById } from '@/lib/data/services';
import { buildServiceMetadata } from '@/lib/seo';
import { JsonLd, serviceSchema, breadcrumbSchema } from '@/components/seo/JsonLd';

const service = getServiceById('supplies');

export const metadata: Metadata = buildServiceMetadata({
  id: 'supplies',
  title: service?.title || 'supplies',
  description: service?.desc,
});

export default function SuppliesPage() {
  return (
    <>
      {service && <JsonLd data={[serviceSchema(service), breadcrumbSchema(service)]} />}
      <ServicePageTemplate serviceId="supplies" />
    </>
  );
}
