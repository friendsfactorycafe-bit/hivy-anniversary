import { Metadata } from 'next';
import FFCServicePage from '@/components/ffc-service-page';
import { serviceCategories } from '@/lib/ffc-config';

const service = serviceCategories.find(s => s.slug === 'valentines-week')!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  keywords: `valentine's day surat, valentine's week celebration, rose day, propose day, romantic celebration surat`,
};

export default function ValentinesWeekPage() {
  return <FFCServicePage service={service} />;
}
