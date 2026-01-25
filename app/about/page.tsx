import { Metadata } from 'next';
import FFCAboutPage from '@/components/ffc-about-page';

export const metadata: Metadata = {
  title: 'About Us | HIVY - Place for Celebrations Surat',
  description: 'Learn about HIVY - Place for Celebrations - Surat\'s premier romantic celebration venue for couples. Our story, mission, and commitment to creating unforgettable moments.',
  keywords: 'about friends factory cafe, romantic cafe surat, couple cafe story, celebration venue surat',
};

export default function AboutPage() {
  return <FFCAboutPage />;
}
