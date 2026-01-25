import { Metadata } from 'next';
import FFCPackagesPage from '@/components/ffc-packages-page';

export const metadata: Metadata = {
  title: 'Our Packages | HIVY - Place for Celebrations Surat',
  description: 'Explore 6 unique romantic celebration packages at HIVY - Place for Celebrations Surat. From rooftop setups to glass house experiences. Starting from ₹4,700.',
  keywords: 'romantic packages surat, celebration packages, birthday surprise packages, candlelight dinner packages, friends factory cafe packages',
};

export default function PackagesPage() {
  return <FFCPackagesPage />;
}
