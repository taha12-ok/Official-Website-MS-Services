import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { getServiceById } from '@/lib/data/services';
import { buildServiceMetadata } from '@/lib/seo';
import { JsonLd, serviceSchema, breadcrumbSchema } from '@/components/seo/JsonLd';

const service = getServiceById('life-raft');

export const metadata: Metadata = buildServiceMetadata({
  id: 'life-raft',
  title: service?.title || 'life-raft',
  description: service?.desc,
});

export default function LifeRaftPage() {
  return (
    <>
      {service && <JsonLd data={[serviceSchema(service), breadcrumbSchema(service)]} />}
      <ServicePageTemplate serviceId="life-raft" />
    </>
  );
}
