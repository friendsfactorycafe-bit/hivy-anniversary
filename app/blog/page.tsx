import { Metadata } from 'next';
import FFCBlogPage from '@/components/ffc-blog-page';

export const metadata: Metadata = {
  title: 'Anniversary Blog | Celebration Ideas & Tips | HIVY Anniversary Surat',
  description: 'Discover anniversary celebration tips, romantic date ideas, milestone anniversary guides, and gift inspiration. Get expert advice for your next anniversary at HIVY Anniversary Surat.',
  keywords: 'anniversary blog surat, wedding anniversary ideas, romantic anniversary tips, anniversary celebration guide, milestone anniversary planning, anniversary gift ideas surat',
};

export default function BlogPage() {
  return <FFCBlogPage />;
}
