import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { getServiceById } from '@/lib/data/services';
import { buildServiceMetadata } from '@/lib/seo';
import { JsonLd, serviceSchema, breadcrumbSchema } from '@/components/seo/JsonLd';

const service = getServiceById('marine-electronics-mechanical');

export const metadata: Metadata = buildServiceMetadata({
  id: 'marine-electronics-mechanical',
  title: service?.title || 'marine-electronics-mechanical',
  description: service?.desc,
});

export default function MarineElectronicsMechanicalPage() {
  return (
    <>
      {service && <JsonLd data={[serviceSchema(service), breadcrumbSchema(service)]} />}
      <ServicePageTemplate serviceId="marine-electronics-mechanical" />
    </>
  );
}
