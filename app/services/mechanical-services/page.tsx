import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { getServiceById } from '@/lib/data/services';
import { buildServiceMetadata } from '@/lib/seo';
import { JsonLd, serviceSchema, breadcrumbSchema } from '@/components/seo/JsonLd';

const service = getServiceById('mechanical-services');

export const metadata: Metadata = buildServiceMetadata({
  id: 'mechanical-services',
  title: service?.title || 'mechanical-services',
  description: service?.desc,
});

export default function MechanicalServicesPage() {
  return (
    <>
      {service && <JsonLd data={[serviceSchema(service), breadcrumbSchema(service)]} />}
      <ServicePageTemplate serviceId="mechanical-services" />
    </>
  );
}
