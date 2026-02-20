'use client';

import React from 'react';
import Image from 'next/image';
import { ImageIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Gallery item type
export interface GalleryItem {
  type: 'image';
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  featured?: boolean;
}

// SEO-friendly gallery items using real package images
export const galleryItems: GalleryItem[] = [
  // Swing of Love package images (₹5100)
  { type: 'image', src: '/hivy-images/5100/Cover photo.webp', alt: 'Romantic anniversary celebration setup with swing decoration in Surat', title: 'Swing of Love Setup', subtitle: 'Anniversary Special', featured: true },
  { type: 'image', src: '/hivy-images/5100/2.webp', alt: 'Anniversary date night swing decoration Surat', title: 'Date Night Decor', featured: false },
  { type: 'image', src: '/hivy-images/5100/3.webp', alt: 'Private anniversary celebration Surat', title: 'Private Celebration', featured: false },
  { type: 'image', src: '/hivy-images/5100/4.webp', alt: 'Romantic swing setup for couples Surat', title: 'Couple Swing', featured: false },
  { type: 'image', src: '/hivy-images/5100/5.webp', alt: 'Anniversary surprise swing decoration Surat', title: 'Surprise Setup', featured: false },
  { type: 'image', src: '/hivy-images/5100/6.webp', alt: 'Evening anniversary celebration Surat', title: 'Evening Magic', featured: false },
  // Boho Chic package images (₹5700)
  { type: 'image', src: '/hivy-images/5700/Cover.webp', alt: 'Boho chic anniversary dinner setup Surat', title: 'Boho Chic Dining', featured: false },
  { type: 'image', src: '/hivy-images/5700/2.webp', alt: 'Intimate boho anniversary celebration Surat', title: 'Intimate Boho', featured: false },
  { type: 'image', src: '/hivy-images/5700/3.webp', alt: 'Bohemian style anniversary party Surat', title: 'Bohemian Style', featured: false },
  { type: 'image', src: '/hivy-images/5700/5.webp', alt: 'Anniversary candlelight dinner boho theme Surat', title: 'Candlelight Dinner', featured: false },
  { type: 'image', src: '/hivy-images/5700/7.webp', alt: 'Romantic boho anniversary venue Surat', title: 'Romantic Venue', featured: false },
  { type: 'image', src: '/hivy-images/5700/10.webp', alt: 'Boho chic couple celebration Surat', title: 'Couple Celebration', featured: false },
  // Fairy Tale Proposals images (₹6300)
  { type: 'image', src: '/hivy-images/6300/Cover.webp', alt: 'Fairy tale anniversary proposal setup Surat', title: 'Fairy Tale Setup', featured: false },
  { type: 'image', src: '/hivy-images/6300/2.webp', alt: 'Romantic fairy tale anniversary venue Surat', title: 'Fairy Tale Venue', featured: false },
  { type: 'image', src: '/hivy-images/6300/4.webp', alt: 'Dreamy anniversary celebration Surat', title: 'Dreamy Celebration', featured: false },
  { type: 'image', src: '/hivy-images/6300/6.webp', alt: 'Luxury fairy tale anniversary Surat', title: 'Luxury Setup', featured: false },
  // Tent of Romance images (₹6500)
  { type: 'image', src: '/hivy-images/6500/cover.webp', alt: 'Romantic tent anniversary celebration Surat', title: 'Tent of Romance', featured: false },
  { type: 'image', src: '/hivy-images/6500/2.webp', alt: 'Anniversary decoration tent setup Surat', title: 'Anniversary Décor', featured: false },
  { type: 'image', src: '/hivy-images/6500/4.webp', alt: 'Private tent anniversary dinner Surat', title: 'Private Dining', featured: false },
  { type: 'image', src: '/hivy-images/6500/6.webp', alt: 'Intimate tent celebration Surat', title: 'Intimate Setup', featured: false },
  { type: 'image', src: '/hivy-images/6500/8.webp', alt: 'Luxury tent anniversary experience Surat', title: 'Luxury Tent', featured: false },
  { type: 'image', src: '/hivy-images/6500/10.webp', alt: 'Romantic night tent celebration Surat', title: 'Night Romance', featured: false },
  { type: 'image', src: '/hivy-images/5400/2.webp', alt: 'Elite group anniversary celebration Surat', title: 'Elite Group Setup', featured: false },
  { type: 'image', src: '/hivy-images/5400/5.webp', alt: 'Premium group anniversary experience Surat', title: 'Premium Experience', featured: false },
];

interface FFCGalleryProps {
  title?: string;
  subtitle?: string;
  maxItems?: number;
  showFilters?: boolean;
  className?: string;
}

export function FFCGallery({ 
  title = "Our Gallery", 
  subtitle = "Real celebrations, real memories",
  maxItems = 12,
  showFilters = true,
  className = ""
}: FFCGalleryProps) {
  const displayItems = galleryItems.slice(0, maxItems);

  return (
    <section className={`py-12 md:py-16 bg-gradient-to-br from-purple-50 via-white to-slate-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-purple-100 text-purple-900 border-purple-200">
            <ImageIcon className="h-4 w-4 mr-2" /> {title}
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 font-serif">
            {subtitle}
          </h2>
          <p className="text-gray-600">
            Browse our collection of romantic anniversary celebrations in Surat
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {displayItems.map((item, index) => (
            <div 
              key={`${item.src}-${index}`}
              className={`relative group overflow-hidden rounded-xl ${
                item.featured ? 'col-span-2 row-span-2' : 'aspect-square'
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.featured ? 600 : 300}
                height={item.featured ? 600 : 300}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`absolute ${item.featured ? 'bottom-4 left-4' : 'bottom-3 left-3'} text-white`}>
                  <p className={`font-${item.featured ? 'semibold' : 'medium'} ${item.featured ? '' : 'text-sm'}`}>{item.title}</p>
                  {item.subtitle && <p className="text-sm text-white/80">{item.subtitle}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Compact gallery for keyword/area pages
export function FFCGalleryCompact({ 
  title = "Gallery",
  maxItems = 8 
}: { title?: string; maxItems?: number }) {
  return (
    <FFCGallery 
      title={title}
      subtitle="See Our Celebrations"
      maxItems={maxItems}
      showFilters={false}
    />
  );
}

export default FFCGallery;
