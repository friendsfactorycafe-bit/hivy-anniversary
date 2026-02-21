'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { FFCGalleryCompact } from '@/components/ffc-gallery';
import { ServiceCategory, getVisiblePackages, suratAreas, siteConfig, formatPrice } from '@/lib/ffc-config';

interface ServicePageProps {
  service: ServiceCategory;
}

export default function FFCServicePage({ service }: ServicePageProps) {
  // Get related packages
  const relatedPackages = getVisiblePackages().slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Breadcrumb */}
      <div className="bg-purple-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-purple-800">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/services" className="text-gray-500 hover:text-purple-800">Services</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-purple-800 font-medium">{service.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                {service.emoji} {service.name}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                {service.name} in Surat
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-xl">
                {service.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href={`tel:${siteConfig.phoneTel}`}>
                  <Button size="lg" className="bg-white text-purple-800 hover:bg-purple-50 w-full sm:w-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </Button>
                </a>
                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp
                  </Button>
                </a>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Star className="h-4 w-4" /> 4.9 Rated
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Check className="h-4 w-4" /> 100% Private
                </span>
              </div>
            </div>
            
            {/* Hero Booking Form - Desktop */}
            <div className="hidden lg:block">
              <FFCBookingForm variant="hero" pageTitle={`${service.name} Page`} />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Booking Form - Above Fold */}
      <section className="lg:hidden bg-purple-50 py-6">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h2 className="text-lg font-semibold text-purple-900">Book Your {service.name}</h2>
          </div>
          <FFCBookingForm pageTitle={`${service.name} Page`} />
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Why Choose HIVY Anniversary for {service.name}?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { emoji: "🔒", title: "100% Private", desc: "Exclusive booking for couples" },
              { emoji: "🌙", title: "Stunning Setup", desc: "private venue & glass house options" },
              { emoji: "🍽️", title: "Delicious Food", desc: "Curated café-style menu" },
              { emoji: "📸", title: "Photo-Ready", desc: "Instagram-worthy décor" },
            ].map((item, index) => (
              <Card key={index} className="border-purple-100 text-center">
                <CardContent className="p-6">
                  <span className="text-4xl mb-4 block">{item.emoji}</span>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages for this Service */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              {service.name} Packages
            </h2>
            <p className="text-gray-600">Choose from our romantic celebration packages</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPackages.map((pkg) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-purple-100 group">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-slate-50 relative overflow-hidden">
                    <Image
                      src={pkg.thumbnail}
                      alt={pkg.name}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1 group-hover:text-purple-800 transition-colors line-clamp-1">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                      {pkg.shortDescription}
                    </p>
                    <p className="text-lg font-bold text-purple-800">
                      {formatPrice(pkg.price)}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/packages">
              <Button className="bg-purple-800 hover:bg-purple-900">
                View All Packages <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Keywords/Related Pages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Popular {service.name} Services
            </h2>
            <p className="text-gray-600">Explore our specialized {service.name.toLowerCase()} services in Surat</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {service.keywords.map((keyword) => (
              <Link 
                key={keyword.slug}
                href={`/services/${service.slug}/${keyword.slug}`}
                className="block"
              >
                <Card className="border-purple-100 hover:border-purple-200 hover:shadow-md transition-all group">
                  <CardContent className="p-4">
                    <h3 className="font-medium group-hover:text-purple-800 transition-colors flex items-center justify-between">
                      {keyword.title}
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-purple-800" />
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-900 border-purple-200">
              <MapPin className="h-4 w-4 mr-2" /> Service Areas
            </Badge>
            <h2 className="text-3xl font-bold mb-4 font-serif">
              {service.name} Across Surat
            </h2>
            <p className="text-gray-600">We serve all areas of Surat</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {suratAreas.slice(0, 15).map((area) => (
              <Link 
                key={area.slug}
                href={`/${area.slug}`}
                className="px-4 py-2 bg-white rounded-full text-gray-700 hover:bg-purple-800 hover:text-white transition-colors border border-purple-200 text-sm"
              >
                {service.name} in {area.name}
              </Link>
            ))}
            <Link 
              href="/areas"
              className="px-4 py-2 bg-purple-800 rounded-full text-white hover:bg-purple-900 transition-colors text-sm"
            >
              View All Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-serif">
                Book Your {service.name}
              </h2>
              <p className="text-gray-600 mb-6">
                Ready to create unforgettable memories? Fill out the form and our team will contact you shortly.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-purple-800" />
                  <span>No commitment booking request</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-purple-800" />
                  <span>Quick WhatsApp confirmation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-purple-800" />
                  <span>Flexible rescheduling available</span>
                </div>
              </div>
            </div>
            
            <div>
              <FFCBookingForm pageTitle={`${service.name} Page`} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              {service.name} FAQs
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: `How can I book a ${service.name.toLowerCase()} at HIVY Anniversary?`,
                answer: `Booking is easy! Call us at ${siteConfig.phone}, WhatsApp us, or fill out our online form. We recommend booking 2-3 days in advance for weekday celebrations and 1-2 weeks for weekends.`
              },
              {
                question: `What is included in the ${service.name.toLowerCase()} package?`,
                answer: "Our packages include 3 hours of private celebration, welcome drink, celebration cake, romantic decorations with fairy lights and flowers, gourmet café-style dinner, soft romantic music, and a dedicated host for your evening."
              },
              {
                question: "Is the venue completely private?",
                answer: "Yes! Our venue is exclusively for couples. You'll have complete privacy during your celebration with no other guests present. It's a 100% couples-only experience."
              },
              {
                question: "Can I customize the decorations?",
                answer: "Absolutely! We love creating personalized experiences. Choose specific color themes, add personalized messages, request special flowers, or include photos from your journey. Share your vision and we'll make it happen."
              },
              {
                question: `What are the prices for ${service.name.toLowerCase()} packages?`,
                answer: "Our celebration packages start from ₹5,100 and go up to ₹6,500. Each package includes venue access, decorations, food, music, cake, and dedicated service. No hidden costs or surprise charges."
              },
              {
                question: `What time slots are available for ${service.name.toLowerCase()}?`,
                answer: "We offer flexible 3-hour time slots: Lunch (12-3 PM), Afternoon (1-4 PM, 2-5 PM), Evening (4-7 PM, 5-8 PM, 6-9 PM), and Dinner (7-10 PM, 7:30-10:30 PM, 8-11 PM). Evening and dinner slots are most popular."
              },
              {
                question: `Can I plan a surprise ${service.name.toLowerCase()} for my partner?`,
                answer: "Yes! Surprise celebrations are our specialty. Our team helps with coordination, timing, and keeping the secret. We've successfully executed over 500 surprise celebrations with a 100% success rate."
              },
              {
                question: "What food options are available?",
                answer: "Our gourmet menu includes welcome drinks, cheese fondue with cheese balls, wedges & nachos, signature mocktails, main course items, and dessert with chocolate brownie. All vegetarian. Jain options available on request."
              },
              {
                question: "Is parking available at the venue?",
                answer: "Yes, ample free parking is available on-site. You can drive to our venue worry-free for your celebration experience."
              },
              {
                question: "What is the cancellation and rescheduling policy?",
                answer: "We offer free rescheduling up to 48 hours before your slot. Cancellations made 48+ hours in advance receive a refund minus processing fees. We're flexible and understanding with our couples."
              }
            ].map((faq, index) => (
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

      {/* Gallery Section */}
      <FFCGalleryCompact title={`${service.name} Gallery`} maxItems={8} />

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
