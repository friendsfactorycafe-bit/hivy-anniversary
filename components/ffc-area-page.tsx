'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Heart, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { FFCGalleryCompact } from '@/components/ffc-gallery';
import { AreaConfig, getVisiblePackages, suratAreas, siteConfig, formatPrice } from '@/lib/ffc-config';
import { anniversaryServiceCategories } from '@/lib/anniversary-config';

interface AreaPageProps {
  area: AreaConfig;
}

export default function FFCAreaPage({ area }: AreaPageProps) {
  // Get nearby areas (excluding current)
  const nearbyAreas = suratAreas.filter(a => a.slug !== area.slug).slice(0, 8);

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Breadcrumb */}
      <div className="bg-rose-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-rose-700">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/areas" className="text-gray-500 hover:text-rose-700">Areas</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-rose-700 font-medium">{area.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-700 via-rose-600 to-rose-800 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <MapPin className="h-4 w-4 mr-2" /> {area.name}, Surat
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif">
                Anniversary Celebrations in {area.name}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                HIVY Anniversary brings premium anniversary celebration experiences to couples in {area.name}, Surat. Book milestone anniversaries, romantic dinners, surprise celebrations & more!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <FFCBookNowButton 
                  pageTitle={`${area.name} Area Page`} 
                  className="bg-white text-rose-700 hover:bg-rose-50 text-lg px-8 py-6" 
                />
                <a href={`tel:${siteConfig.phone}`}>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    {siteConfig.phone}
                  </Button>
                </a>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Star className="h-4 w-4" /> 4.9★ Rating
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Check className="h-4 w-4" /> 100% Private
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Heart className="h-4 w-4" /> Anniversary Experts
                </span>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="hidden lg:flex justify-center">
              <div className="w-72 h-72 rounded-full bg-white/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 mx-auto mb-2" />
                  <span className="text-2xl font-serif">{area.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in This Area */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Anniversary Services in {area.name}
            </h2>
            <p className="text-gray-600">
              All anniversary celebration services available for couples in {area.name}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {anniversaryServiceCategories.flatMap(cat => cat.keywords).slice(0, 8).map((keyword) => (
              <Link key={keyword.slug} href={`/${keyword.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all border-rose-200 group text-center">
                  <CardContent className="p-4 md:p-6">
                    <span className="text-4xl md:text-5xl mb-3 md:mb-4 block">{keyword.emoji}</span>
                    <h3 className="font-semibold text-sm md:text-lg mb-1 md:mb-2 group-hover:text-rose-700 transition-colors line-clamp-2">
                      {keyword.name}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm line-clamp-1 hidden md:block">
                      in {area.name}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Content & Booking */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-6 font-serif">
                  Anniversary Celebrations Near {area.name}
                </h2>
                
                <p className="text-gray-600 mb-6">
                  Are you looking for the perfect anniversary celebration venue near {area.name}, Surat? HIVY Anniversary is your destination for creating unforgettable anniversary memories with your loved one.
                </p>

                <p className="text-gray-600 mb-6">
                  Whether you're celebrating your first anniversary, silver jubilee, golden anniversary, or any milestone in between, our venue offers stunning rooftop setups and elegant glass houses that provide the perfect romantic ambiance for your anniversary celebration.
                </p>

                <div className="bg-white rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Gift className="h-5 w-5 text-rose-700" />
                    Anniversary Services in {area.name}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "First Anniversary Celebrations",
                      "Silver Anniversary (25th)",
                      "Golden Anniversary (50th)",
                      "Milestone Anniversary Parties",
                      "Romantic Anniversary Dinners",
                      "Anniversary Surprise Setups",
                      "Anniversary Photoshoots",
                      "Custom Anniversary Experiences"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-rose-700 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4">
                  Why Couples in {area.name} Choose Us for Anniversaries
                </h3>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-rose-700 font-bold">•</span>
                    <span><strong>Convenient Location:</strong> Easy access from {area.name} and all parts of Surat.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-700 font-bold">•</span>
                    <span><strong>100% Privacy:</strong> Your anniversary celebration is completely private with exclusive booking.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-700 font-bold">•</span>
                    <span><strong>6 Romantic Setups:</strong> Choose from rooftop and glass house experiences.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-700 font-bold">•</span>
                    <span><strong>All-Inclusive Packages:</strong> Gourmet dinner, decorations, music, and more included.</span>
                  </li>
                </ul>
              </article>

              {/* Packages */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6 font-serif">
                  Popular Anniversary Packages for {area.name} Couples
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {getVisiblePackages().slice(0, 4).map((pkg) => (
                    <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                      <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-rose-200 group bg-white">
                        <div className="aspect-video bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                          <span className="text-5xl">{pkg.emoji}</span>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-1 group-hover:text-rose-700 transition-colors">
                            {pkg.name}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                            {pkg.shortDescription}
                          </p>
                          <p className="text-lg font-bold text-rose-700">
                            {formatPrice(pkg.price)}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
                
                <div className="text-center mt-6">
                  <Link href="/packages">
                    <Button className="bg-rose-700 hover:bg-rose-800">
                      View All Packages <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Booking Form */}
                <FFCBookingForm pageTitle={`${area.name} Area`} />

                {/* Quick Contact */}
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Quick Booking</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Instant response on WhatsApp
                    </p>
                    <a 
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors w-full justify-center"
                    >
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp Now
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 font-serif">
              Anniversary Celebrations in Nearby Areas
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {nearbyAreas.map((nearbyArea) => (
              <Link 
                key={nearbyArea.slug}
                href={`/${nearbyArea.slug}`}
                className="px-4 py-2 bg-rose-50 rounded-full text-gray-700 hover:bg-rose-700 hover:text-white transition-colors border border-rose-200"
              >
                {nearbyArea.name}
              </Link>
            ))}
            <Link 
              href="/areas"
              className="px-4 py-2 bg-rose-700 rounded-full text-white hover:bg-rose-800 transition-colors"
            >
              View All Areas
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 font-serif">
              FAQs - Anniversary Celebrations in {area.name}
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: `How do couples from ${area.name} reach HIVY Anniversary?`,
                answer: `HIVY Anniversary is conveniently located in Surat and easily accessible from ${area.name}. You can reach us by car, auto, or cab in a short time. Contact us for exact directions.`
              },
              {
                question: "What anniversary packages do you offer?",
                answer: `We offer a variety of anniversary celebration packages including first anniversary, silver jubilee, golden anniversary, and custom milestone celebrations. Each package includes dinner, decorations, and exclusive venue access.`
              },
              {
                question: "What are the booking options available?",
                answer: `Couples from ${area.name} can book via WhatsApp, phone call, or our online form. We recommend booking 2-3 days in advance for your preferred slot.`
              },
              {
                question: "Is the venue private for anniversary celebrations?",
                answer: "Yes! Your anniversary celebration is 100% private. No other guests will be present during your booking slot, ensuring an intimate romantic experience."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-lg border border-rose-200 px-6">
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

      {/* Gallery Section */}
      <FFCGalleryCompact title={`Anniversary Celebrations in ${area.name}`} maxItems={8} />

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
