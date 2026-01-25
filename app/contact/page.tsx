import { Metadata } from 'next';
import FFCContactPage from '@/components/ffc-contact-page';

export const metadata: Metadata = {
  title: 'Contact Us | HIVY - Place for Celebrations Surat',
  description: 'Get in touch with HIVY - Place for Celebrations Surat. Book your romantic celebration, ask questions, or visit us. Call +91 74878 88730.',
  keywords: 'contact friends factory cafe, book celebration surat, romantic venue contact, couple cafe surat contact',
};

export default function ContactPage() {
  return <FFCContactPage />;
}
