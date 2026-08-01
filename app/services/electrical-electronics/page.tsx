import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { getServiceById } from '@/lib/data/services';
import { buildServiceMetadata } from '@/lib/seo';
import { JsonLd, serviceSchema, breadcrumbSchema } from '@/components/seo/JsonLd';

const service = getServiceById('electrical-electronics');

export const metadata: Metadata = buildServiceMetadata({
  id: 'electrical-electronics',
  title: service?.title || 'electrical-electronics',
  description: service?.desc,
});

export default function ElectricalElectronicsPage() {
  return (
    <>
      {service && <JsonLd data={[serviceSchema(service), breadcrumbSchema(service)]} />}
      <ServicePageTemplate serviceId="electrical-electronics" />
    </>
  );
}
