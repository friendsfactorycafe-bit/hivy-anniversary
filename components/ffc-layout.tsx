'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Heart, Search, User, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig, suratAreas } from '@/lib/ffc-config';
import { anniversaryServiceCategories } from '@/lib/anniversary-config';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Our Packages', href: '/packages' },
  { name: 'Menu', href: '/menu' },
  { name: 'About us', href: '/about' },
  { name: 'Virtual Tour', href: '/virtual-tour' },
  { name: 'Contact us', href: '/contact' },
];

const serviceLinks = [
  { name: 'Anniversary Dinner', href: '/anniversary-dinner-surat' },
  { name: 'First Anniversary', href: '/first-anniversary-celebration-surat' },
  { name: 'Silver Anniversary (25th)', href: '/25th-anniversary-celebration-surat' },
  { name: 'Golden Anniversary (50th)', href: '/50th-golden-anniversary-surat' },
  { name: 'Anniversary Surprise', href: '/surprise-anniversary-party-surat' },
  { name: 'Anniversary Decoration', href: '/anniversary-decoration-surat' },
  { name: 'Anniversary Photoshoot', href: '/anniversary-photoshoot-surat' },
  { name: 'Romantic Anniversary Date', href: '/romantic-anniversary-date-surat' },
];

export function FFCHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-rose-100">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/hivy logo.avif"
              alt="HIVY Anniversary"
              width={120}
              height={60}
              className="h-14 md:h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-rose-700 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Phone & Actions */}
          <div className="flex items-center gap-4">
            {/* Phone CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Heart className="h-8 w-8 text-rose-600 fill-rose-600" />
              <div className="text-right">
                <p className="text-xs text-gray-500">Call and Book in Minutes</p>
                <a 
                  href={`tel:${siteConfig.phone}`}
                  className="text-lg font-bold text-rose-700 hover:text-rose-800"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between py-4 border-b">
                    <Image
                      src="/images/hivy logo.avif"
                      alt="HIVY Anniversary"
                      width={100}
                      height={50}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  
                  <nav className="flex-1 py-6">
                    <div className="space-y-1">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    

                  </nav>
                  
                  <div className="border-t py-4">
                    <a 
                      href={`tel:${siteConfig.phone}`}
                      className="flex items-center gap-3 px-4 py-3 bg-rose-700 text-white rounded-lg hover:bg-rose-800 transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      <span className="font-medium">{siteConfig.phone}</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}

export function FFCFooter() {
  const [showAllKeywords, setShowAllKeywords] = useState(false);
  const [showAllAreas, setShowAllAreas] = useState(false);
  
  // Get all keywords from all service categories
  const allKeywords = anniversaryServiceCategories.flatMap(category => 
    category.keywords.map(keyword => ({
      slug: keyword.slug,
      title: keyword.title,
      serviceSlug: category.slug
    }))
  );
  
  // Display first 20 keywords initially, all when expanded
  const visibleKeywords = showAllKeywords ? allKeywords : allKeywords.slice(0, 20);
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/images/hivy logo.avif"
              alt="HIVY Anniversary"
              width={150}
              height={75}
              className="h-16 w-auto object-contain mb-4 brightness-110"
            />
            <p className="text-gray-400 mb-6">
              {siteConfig.tagline}
            </p>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <span className="text-gray-300">Couples Only Experience</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-rose-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-rose-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-sm">Phone</p>
                <a 
                  href={`tel:${siteConfig.phone}`}
                  className="text-rose-300 font-medium hover:text-rose-200"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <a 
                  href={`mailto:${siteConfig.email}`}
                  className="text-rose-300 hover:text-rose-200"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Location</p>
                <p className="text-gray-300">{siteConfig.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Links Section - Keywords */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Popular Anniversary Services in Surat</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {visibleKeywords.map((keyword) => (
              <Link 
                key={keyword.slug}
                href={`/${keyword.slug}`}
                className="text-xs text-gray-500 hover:text-rose-300 transition-colors"
              >
                {keyword.title}
              </Link>
            ))}
          </div>
          {allKeywords.length > 20 && (
            <button 
              onClick={() => setShowAllKeywords(!showAllKeywords)}
              className="mt-3 text-xs text-rose-300 hover:text-rose-200 flex items-center gap-1"
            >
              {showAllKeywords ? (
                <>Show Less <ChevronUp className="h-3 w-3" /></>
              ) : (
                <>Show All {allKeywords.length} Services <ChevronDown className="h-3 w-3" /></>
              )}
            </button>
          )}
        </div>

        {/* SEO Links Section - Areas */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Anniversary Celebrations in Surat Areas</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {(showAllAreas ? suratAreas : suratAreas.slice(0, 15)).map((area) => (
              <Link 
                key={area.slug}
                href={`/${area.slug}`}
                className="text-xs text-gray-500 hover:text-rose-300 transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>
          {suratAreas.length > 15 && (
            <button 
              onClick={() => setShowAllAreas(!showAllAreas)}
              className="mt-3 text-xs text-rose-300 hover:text-rose-200 flex items-center gap-1"
            >
              {showAllAreas ? (
                <>Show Less <ChevronUp className="h-3 w-3" /></>
              ) : (
                <>Show All {suratAreas.length} Areas <ChevronDown className="h-3 w-3" /></>
              )}
            </button>
          )}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} HIVY Anniversary. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-300 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-gray-500 hover:text-gray-300 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
