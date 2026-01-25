import { Metadata } from 'next';
import FFCBlogPage from '@/components/ffc-blog-page';

export const metadata: Metadata = {
  title: 'Blog | Celebration Ideas & Tips | HIVY - Place for Celebrations Surat',
  description: 'Discover celebration tips, romantic date ideas, birthday surprise guides, and more. Get inspired for your next special occasion at HIVY - Place for Celebrations Surat.',
  keywords: 'celebration blog, birthday ideas surat, romantic date tips, proposal ideas, anniversary celebration guide',
};

export default function BlogPage() {
  return <FFCBlogPage />;
}
