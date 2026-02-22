'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, MessageCircle, MapPin, Clock, Star, Check, ChevronRight, ChevronLeft,
  Heart, Users, Shield, Award, Calendar, Gift, Sparkles, 
  ArrowRight, Camera, Music, Utensils, Wine, ImageIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import FFCReviewsSlider from '@/components/ffc-reviews-slider';
import { siteConfig, getVisiblePackages, serviceCategories, suratAreas, formatPrice, getAllBlogPosts, BlogPost } from '@/lib/ffc-config';

// Experience features - Anniversary focused
const experienceFeatures = [
  {
    icon: Clock,
    title: "3-Hour Private Celebration",
    description: "Enjoy three exclusive hours at our private elegant venue for your anniversary dinner or milestone celebration"
  },
  {
    icon: Gift,
    title: "Anniversary Cake Included",
    description: "Complimentary anniversary celebration cake & non-alcoholic champagne with every package"
  },
  {
    icon: Camera,
    title: "Instagram-Worthy Setup",
    description: "Professional anniversary decorations, fairy lights & romantic photo-ready ambiance"
  },
  {
    icon: Music,
    title: "Romantic Anniversary Ambiance",
    description: "Soft romantic music, candlelight setting & complete privacy for couples celebrating their love"
  }
];

// FAQ items - Anniversary focused
const faqs = [
  {
    question: "What is HIVY Anniversary and where is it located in Surat?",
    answer: "HIVY Anniversary is Surat's premier private anniversary celebration venue—the best spot for romantic anniversary dinners, milestone celebrations, private venue dining, and surprise anniversary parties in Surat, Gujarat."
  },
  {
    question: "How do I book an anniversary celebration at HIVY?",
    answer: `Simply WhatsApp ${siteConfig.phone} or call directly. Share your anniversary type (1st, 10th, 25th, 50th or any milestone), preferred date, and number of guests. We'll confirm your booking instantly with a custom quote for your romantic anniversary celebration.`
  },
  {
    question: "What are the prices for anniversary celebration packages in Surat?",
    answer: "Our romantic anniversary packages start from affordable rates and include premium romantic setup, welcome drinks, anniversary decorations, and gourmet dining. Contact us for current pricing on all anniversary celebration deals."
  },
  {
    question: "Can I celebrate milestone anniversaries like 25th or 50th at HIVY?",
    answer: "Absolutely! HIVY Anniversary specializes in milestone celebrations including Silver Jubilee (25th), Golden Anniversary (50th), and Diamond Anniversary (60th). Our elegant setups are perfect for these special occasions with family or intimate couple celebrations."
  },
  {
    question: "What anniversary celebrations can I host at HIVY Surat?",
    answer: "We specialize in all wedding anniversaries: First Anniversary (Paper), 5th (Wood), 10th (Tin), 15th (Crystal), 25th (Silver), 50th (Golden), and every anniversary in between. Perfect for couples, parents' anniversaries, and in-laws' celebrations."
  },
  {
    question: "What are the time slots available for anniversary dinner booking?",
    answer: "Our romantic anniversary celebration time slots are from 6 PM to 11 PM. Weekend slots for anniversary dinners book fast—we recommend advance booking to secure your preferred date at Surat's best anniversary restaurant."
  },
  {
    question: "Can I customize the decorations for my anniversary celebration?",
    answer: "Yes! All our anniversary packages are fully customizable. Choose from flower arrangements, themed backdrops (silver, gold, rose themes), personalized messages, anniversary cakes, and more for your special milestone celebration."
  },
  {
    question: "Is HIVY Anniversary a private venue for couples only?",
    answer: "Yes, HIVY Anniversary is 100% private and exclusively for couples celebrating their love journey. You'll have complete privacy during your booking slot—no other guests. It's the most romantic and couple-friendly anniversary venue in Surat with a 4.9★ rating."
  },
  {
    question: "What areas in Surat does HIVY Anniversary serve?",
    answer: "We welcome couples from all Surat areas including Vesu, Adajan, Athwa, Piplod, City Light, Althan, Varachha, Pal, Dumas Road, and more. HIVY Anniversary is centrally located as the best anniversary celebration venue serving all of Surat."
  },
  {
    question: "Can I plan a surprise anniversary party for my spouse or parents?",
    answer: "Yes! Surprise anniversary parties are our specialty. We help plan secret celebrations for spouses, parents, and in-laws. Our team coordinates decorations, timing, and special requests to create an unforgettable surprise moment."
  }
];

// Gallery items data - Anniversary focused - Optimized for faster loading (reduced to 16 items)
const galleryItems = [
  // Featured Images from packages - Anniversary celebrations
  { type: 'image', src: '/hivy-images/5100/Cover photo.webp', alt: 'Anniversary Celebration Setup Surat', title: 'Anniversary Setup', subtitle: 'Premium Package', featured: true },
  { type: 'image', src: '/hivy-images/5700/Cover.webp', alt: 'Wedding Anniversary Dinner Surat', title: 'Anniversary Dinner', featured: false },
  { type: 'image', src: '/hivy-images/6300/Cover.webp', alt: 'Romantic Anniversary Venue Surat', title: 'Romantic Venue', featured: false },
  { type: 'image', src: '/hivy-images/6500/cover.webp', alt: 'Anniversary celebration tent setup Surat', title: 'Anniversary Moments', featured: false },
  { type: 'image', src: '/hivy-images/6500/2.webp', alt: 'Silver Anniversary Setup Surat', title: 'Milestone Celebration', featured: false },
  { type: 'image', src: '/hivy-images/5100/2.webp', alt: 'Anniversary Date Night Surat', title: 'Date Night', featured: false },
  { type: 'image', src: '/hivy-images/5700/4.webp', alt: 'Boho anniversary dinner decoration Surat', title: 'Boho Anniversary', featured: false },
  { type: 'image', src: '/hivy-images/5700/6.webp', alt: 'Intimate Anniversary Dinner Surat', title: 'Intimate Dining', featured: false },
  { type: 'image', src: '/hivy-images/6300/3.webp', alt: 'Golden Anniversary Celebration Surat', title: 'Golden Setup', featured: false },
  { type: 'image', src: '/hivy-images/6500/4.webp', alt: 'Romantic Anniversary Decoration Surat', title: 'Anniversary Décor', featured: false },
  { type: 'image', src: '/hivy-images/5100/5.webp', alt: 'private venue anniversary celebration Surat', title: 'private venue Celebration', featured: false },
  { type: 'image', src: '/hivy-images/5100/6.webp', alt: 'Private Anniversary Celebration Surat', title: 'Private Setup', featured: false },
  { type: 'image', src: '/hivy-images/5700/8.webp', alt: 'Night Anniversary Setup Surat', title: 'Evening Magic', featured: false },
  { type: 'image', src: '/hivy-images/6300/5.webp', alt: 'Luxury Anniversary Venue Surat', title: 'Luxury Setup', featured: false },
  { type: 'image', src: '/hivy-images/6500/8.webp', alt: 'Anniversary surprise tent decoration Surat', title: 'Surprise Setup', featured: false },
  { type: 'image', src: '/hivy-images/5400/3.webp', alt: 'Couple Anniversary Celebration Surat', title: 'Couple Celebration', featured: false },
];

// Gallery Section Component
function GallerySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-purple-100 text-purple-900 border-purple-200">
            <ImageIcon className="h-4 w-4 mr-2" /> Anniversary Celebration Gallery
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Anniversary Dinners & Milestone Celebrations at HIVY Surat
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real moments from first anniversaries, silver jubilees, golden anniversaries & romantic milestone celebrations at Surat&apos;s premier couples-only anniversary venue.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div 
              key={`${item.src}-${index}`}
              className={`relative group overflow-hidden rounded-2xl ${
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

        {/* View More Button */}
        <div className="text-center mt-10">
          <Link href="/virtual-tour">
            <Button className="bg-gradient-to-r from-purple-900 to-violet-700 hover:from-purple-800 hover:to-violet-600 text-white px-8 py-6 text-lg">
              <Camera className="h-5 w-5 mr-2" />
              View Virtual Tour
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Blog Section Component
function BlogSection() {
  const posts = getAllBlogPosts().slice(0, 6); // Show latest 6 posts

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-purple-100 text-purple-900 border-purple-200">
            Anniversary Celebration Blog
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Anniversary Celebration Ideas & Tips in Surat
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert tips, milestone guides, and romantic ideas to help you plan the perfect anniversary dinner, celebration, or surprise for your spouse in Surat
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 group border-purple-100">
                <div className="relative h-48">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 left-3 bg-purple-900 text-white">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-800 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishedAt).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'short' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link href="/blog">
            <Button className="bg-gradient-to-r from-purple-900 to-violet-700 hover:from-purple-800 hover:to-violet-600 text-white px-8 py-6 text-lg">
              View More Articles
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function FFCHomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Hero slider images
  const heroSlides = [
    { src: '/images/hero/slider2.webp', alt: 'private venue Celebration Setup with Fairy Lights Surat' },
    { src: '/images/hero/slider1.webp', alt: 'Romantic Candlelight Dinner Setup at HIVY Anniversary Surat' },
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // FAQ Schema (FAQPage structured data)
  const homeFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Speakable schema for voice assistants (Google Assistant, Siri, Alexa)
  const speakableJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "HIVY - Anniversary Dinner Planners | Best Anniversary Venue in Surat",
    "url": "https://anniversarydinnersurat.com",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".hero-description", ".faq-section", ".services-heading"]
    },
    "mainEntity": {
      "@type": "LocalBusiness",
      "@id": "https://anniversarydinnersurat.com/#business"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />
      {/* Speakable Schema for Voice Assistants & AI */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
      />
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 text-white overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm px-4 py-1">
                <Sparkles className="h-4 w-4 mr-2" /> Exclusively for Couples in Surat
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-serif">
                Your Love Story Deserves a Grand Celebration
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-white/90 max-w-2xl">
                {siteConfig.tagline}
              </p>
              <p className="text-lg mb-8 text-white/80 max-w-xl">
                Surat&apos;s most exclusive private venue for anniversary celebrations — where every milestone becomes a timeless memory. Romantic anniversary dinners, silver & golden jubilee celebrations, surprise anniversary parties & intimate milestone dinners crafted with devotion.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/packages">
                  <Button size="lg" className="bg-white text-purple-800 hover:bg-purple-50 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                    <Gift className="h-5 w-5 mr-2" />
                    View Packages
                  </Button>
                </Link>
                <a href={`tel:${siteConfig.phoneTel}`}>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    {siteConfig.phone}
                  </Button>
                </a>
              </div>
              
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4 text-sm md:text-base">
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Shield className="h-4 w-4" /> 100% Private
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="h-4 w-4" /> 4.9★ Rated
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Users className="h-4 w-4" /> 3000+ Couples
                </span>
              </div>
            </div>
            
            {/* Hero Booking Form */}
            <div className="hidden lg:block">
              <FFCBookingForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Booking Form */}
      <section className="lg:hidden bg-purple-50 py-6">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h2 className="text-lg font-semibold text-purple-900">Book Your Anniversary Celebration</h2>
          </div>
          <FFCBookingForm />
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-900 border-purple-200">
              Candlelight Dinner & Celebration Packages
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-serif">
              Romantic Celebration Packages in Surat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              5 unique private romantic setups for candlelight dinners, birthday surprises, anniversary celebrations & proposals in Surat
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-6">
            {getVisiblePackages().map((pkg, index) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 border-purple-100 group overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-purple-100 to-slate-50 relative overflow-hidden">
                    <Image
                      src={pkg.thumbnail}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 bg-purple-800 text-white text-xs">
                      Setup {index + 1}
                    </Badge>
                  </div>
                  <CardContent className="p-2.5 sm:p-3 md:p-4">
                    <h3 className="font-semibold text-xs sm:text-sm md:text-lg mb-1 group-hover:text-purple-800 transition-colors leading-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm line-clamp-2 mb-2 hidden md:block">
                      {pkg.shortDescription}
                    </p>
                    <p className="text-base sm:text-lg md:text-xl font-bold text-purple-800">
                      {formatPrice(pkg.price)}
                    </p>
                    {/* View Details */}
                    <div className="flex justify-end mt-2">
                      <span className="text-[10px] sm:text-xs text-purple-700 font-medium flex items-center gap-1 hover:text-purple-900">
                        View Details <ChevronRight className="h-3 w-3" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-6 md:mt-10">
            <Link href="/packages">
              <Button size="lg" className="bg-gradient-to-r from-purple-800 to-violet-700 hover:from-purple-900 hover:to-violet-800 text-white">
                View All Packages <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-900 border-purple-200">
              Anniversary Celebration Services in Surat
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Perfect For Every Anniversary Milestone in Surat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From first anniversary dinners to silver & golden jubilee celebrations, surprise anniversary parties to romantic milestone dinners—we create magical anniversary moments for couples at our private elegant venue in Surat.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {serviceCategories.map((service) => (
              <Card key={service.slug} className="h-full border-purple-100 group">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">{service.emoji}</div>
                  <h3 className="font-semibold text-sm md:text-lg mb-1 md:mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm line-clamp-3 hidden md:block">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-900 border-purple-200">
              Why Couples Choose HIVY Anniversary
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              The Complete Anniversary Celebration Experience
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every couple deserves a memorable anniversary celebration. Our packages include everything for an unforgettable anniversary dinner or milestone celebration.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experienceFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-purple-800" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-900/20 text-amber-300 border-purple-900/30">
                Anniversary Dinner Menu
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                Gourmet Cuisine for Anniversary Dinners
              </h2>
              <p className="text-gray-300 mb-8">
                Curated café-style delicacies crafted for anniversary celebrations, milestone dinners & romantic date nights in Surat
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-900/20 flex items-center justify-center flex-shrink-0">
                    <Wine className="h-5 w-5 text-amber-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Welcome Drink</h4>
                    <p className="text-gray-400 text-sm">A refreshing welcome to begin your romantic experience</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-900/20 flex items-center justify-center flex-shrink-0">
                    <Utensils className="h-5 w-5 text-amber-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Cheese Fondue</h4>
                    <p className="text-gray-400 text-sm">Rich, velvety cheese fondue with cheese balls, wedges & nachos</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-900/20 flex items-center justify-center flex-shrink-0">
                    <Gift className="h-5 w-5 text-amber-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Dessert with Chocolate Bite</h4>
                    <p className="text-gray-400 text-sm">A sweet ending with rich chocolate indulgence</p>
                  </div>
                </div>
              </div>
              
              <Link href="/menu" className="inline-block mt-8">
                <Button size="lg" className="bg-purple-900 hover:bg-purple-800 text-white">
                  View Full Menu <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image 
                  src="/images/Food hivy.webp" 
                  alt="HIVY Anniversary Menu - Romantic Dining Experience" 
                  width={600} 
                  height={600} 
                  loading="lazy"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-900 border-purple-200">
              <MapPin className="h-4 w-4 mr-2" /> Anniversary Celebrations Near You
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Premier Anniversary Venue Serving All Areas in Surat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you're looking for an anniversary dinner near Vesu, milestone celebration venue in Adajan, or romantic anniversary restaurant in Athwa—we serve couples from all areas of Surat
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {suratAreas.map((area) => (
              <Link 
                key={area.slug}
                href={`/${area.slug}`}
                className="px-4 py-2 bg-white rounded-full text-gray-700 hover:bg-purple-800 hover:text-white transition-colors border border-purple-200"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Slider */}
      <FFCReviewsSlider />

      {/* Gallery Section */}
      <GallerySection />

      {/* Blog Section */}
      <BlogSection />

      {/* Extended SEO Content Section */}
      <section className="py-16 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">
            Why HIVY is Surat&apos;s Best Anniversary Celebration Venue
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="hero-description">
              Celebrating your wedding anniversary deserves a venue that honors the significance of your love journey. At HIVY Anniversary in Surat, we have created Gujarat&apos;s most romantic and exclusive anniversary celebration destination where couples can relive the magic of their wedding day in an intimate, private setting. Whether you are marking your first anniversary or celebrating fifty golden years together, our dedicated team transforms ordinary moments into extraordinary memories that last a lifetime.
            </p>
            <p className="hero-description">
              As Surat&apos;s premier anniversary dinner venue, HIVY understands that every wedding anniversary represents a unique chapter in your love story. Our private celebration spaces are meticulously designed to provide the perfect backdrop for romantic anniversary dinners, surprise parties for spouses, and milestone celebrations with family. Unlike conventional restaurants where privacy is compromised, HIVY offers an exclusively private venue experience where you and your partner become the center of attention throughout your special evening.
            </p>
            <p className="hero-description">
              What sets HIVY apart as the best anniversary celebration venue in Surat is our unwavering commitment to personalization. From the moment you inquire about booking, our anniversary specialists work closely with you to understand your preferences, dietary requirements, decoration themes, and special requests. Whether you envision a candlelit dinner under fairy lights, a grand golden anniversary setup with elegant floral arrangements, or a surprise party for your unsuspecting spouse, we bring your vision to life with meticulous attention to detail.
            </p>

            <h3 className="text-2xl font-semibold text-purple-600">The Perfect Anniversary Dinner Experience</h3>
            <p className="hero-description">
              An anniversary dinner at HIVY transcends the ordinary dining experience. Picture entering our beautifully decorated private venue where soft romantic music fills the air, candlelight dances across elegant table settings, and every corner has been thoughtfully arranged to create an atmosphere of love and celebration. Our anniversary dinner packages include premium romantic decorations featuring rose petals, fairy lights, balloon arrangements, and personalized banners that celebrate your years together.
            </p>
            <p className="hero-description">
              The dining experience itself is crafted to impress. Choose from our curated menu options that cater to diverse palates, or request a customized menu that includes your favorite dishes. Each anniversary dinner package includes a celebratory anniversary cake and non-alcoholic champagne for that perfect toast to your years of togetherness. Our three-hour exclusive booking ensures you have ample time to enjoy your meal leisurely, reminisce about your journey together, and create new memories without feeling rushed. The romantic ambiance at HIVY makes it the ideal anniversary restaurant in Surat for couples seeking an intimate dining experience away from crowded public spaces.
            </p>

            <h3 className="text-2xl font-semibold text-purple-600">Celebrating Every Milestone Anniversary</h3>
            <p className="hero-description">
              Every anniversary milestone carries its own significance and deserves recognition befitting its importance. At HIVY, we specialize in creating themed celebrations for all anniversary milestones. Your first wedding anniversary marks the beginning of a lifetime of celebrations, and we help make it absolutely special with romantic setups that remind you of the love that brought you together. Our first anniversary packages are designed to recreate the magic of your wedding day while looking forward to the beautiful years ahead.
            </p>
            <p className="hero-description">
              As years pass, each milestone anniversary gains deeper meaning. The 5th anniversary celebrates establishing your foundation together. The 10th anniversary honors a decade of shared experiences and growth. At HIVY, we craft unique setups for each of these occasions with decorations and ambiance that reflect the journey you have undertaken together. Our anniversary specialists can incorporate personal touches such as photographs from your wedding day, memorabilia from significant moments, and messages that celebrate your unique love story.
            </p>
            <p className="hero-description">
              For silver jubilee celebrations marking 25 years of marriage, HIVY creates elegant silver-themed setups that honor a quarter century of commitment and love. These milestone celebrations often involve family members, and our versatile venue accommodates both intimate couple dinners and larger family gatherings. The golden anniversary at 50 years deserves nothing less than a royal celebration, and our golden anniversary packages feature luxurious gold-accented decorations, premium dining experiences, and an atmosphere befitting such a remarkable achievement in marital commitment.
            </p>

            <h3 className="text-2xl font-semibold text-purple-600">Anniversary Surprises for Your Spouse</h3>
            <p className="hero-description">
              Planning a surprise anniversary celebration for your husband or wife? HIVY is your perfect partner in creating unforgettable moments of joy and surprise. Our team has extensive experience coordinating surprise anniversary parties, working discreetly with the planning spouse to ensure every detail is perfect while maintaining complete secrecy from the honoree. From the moment your spouse walks through our doors to find a beautifully decorated private venue awaiting them, to the joy of cutting their anniversary cake together, we orchestrate every element for maximum impact.
            </p>
            <p className="hero-description">
              Surprise anniversary ideas at HIVY include unexpected romantic dinners, elaborate decoration reveals, personalized video messages playing on screens, favorite songs setting the ambiance, and custom cake designs featuring meaningful symbols or messages. For husbands planning surprises for their wives, we can arrange rose petal pathways, heartfelt letter presentations, and Instagram-worthy photo setups. For wives surprising their husbands, we create comfortable yet elegant settings with their favorite cuisines and personalized touches that speak to shared memories and inside jokes. Our anniversary surprise planners in Surat understand that the element of surprise combined with thoughtful personalization creates the most memorable celebrations.
            </p>

            <h3 className="text-2xl font-semibold text-purple-600">Creating Timeless Anniversary Memories</h3>
            <p className="hero-description">
              At HIVY, we believe that anniversary celebrations should create memories that you cherish forever. Every element of your celebration is designed to be photograph-worthy, from our elegant table settings to our romantic lighting and beautiful decoration backdrops. Couples frequently return to HIVY year after year because they know their anniversary memories will be captured in stunning photographs that they treasure for decades. Our Instagram-worthy setups ensure that every moment of your anniversary dinner is preserved in beautiful images that you will proudly share with family and friends.
            </p>
            <p className="hero-description">
              Beyond photography, we help create experiences that engage all senses and emotions. The aroma of fresh flowers, the taste of exquisite cuisine, the sound of your favorite romantic songs, the feel of luxury surroundings, and the sight of your partner&apos;s joy all combine to create a multi-sensory anniversary experience. Our attention to these details is why HIVY has earned its reputation as Surat&apos;s most romantic anniversary venue with a 4.9-star rating from hundreds of satisfied couples. When you celebrate your anniversary at HIVY, you are not just booking a venue; you are investing in memories that will warm your hearts every time you look back at your love story.
            </p>
            <p className="hero-description">
              Whether you are celebrating in intimate privacy as a couple or including close family members in your milestone anniversary, HIVY provides the perfect setting for creating lasting memories. Book your anniversary celebration today and experience why couples across Surat choose HIVY as their preferred destination for honoring their most precious relationship. From first anniversaries to golden jubilees, we are honored to be part of your continuing love story.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-900 border-purple-200">
              FAQ - Anniversary Celebrations
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Common Questions About Anniversary Celebrations in Surat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about booking anniversary dinners, milestone celebrations & romantic anniversary surprises at HIVY
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-lg border border-purple-100 px-6">
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-800 to-violet-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Book Your Anniversary Celebration Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Create unforgettable anniversary memories at Surat's premier private celebration venue. Perfect for first anniversaries, silver jubilees, golden anniversaries & milestone celebrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </Button>
            </a>
            <a href={`tel:${siteConfig.phoneTel}`}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6">
                <Phone className="h-5 w-5 mr-2" />
                {siteConfig.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
