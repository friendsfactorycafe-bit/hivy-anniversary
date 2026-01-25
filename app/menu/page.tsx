import { Metadata } from 'next';
import FFCMenuPage from '@/components/ffc-menu-page';

export const metadata: Metadata = {
  title: 'Menu | HIVY - Place for Celebrations Surat',
  description: 'Explore our curated café-style menu crafted for romantic dates & private celebrations. Welcome drink, cheese fondue, snacks & desserts at HIVY - Place for Celebrations.',
  keywords: 'friends factory cafe menu, romantic dinner menu surat, candlelight dinner food, couple cafe menu',
};

export default function MenuPage() {
  return <FFCMenuPage />;
}
