'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star, Users, Award, Clock, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import FFCReviewsSlider from '@/components/ffc-reviews-slider';
import { siteConfig } from '@/lib/ffc-config';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// About page FAQs for Anniversary Celebrations
const aboutFaqs = [
  {
    question: "What makes HIVY the best anniversary dinner venue in Surat?",
    answer: "HIVY is Surat's premier anniversary celebration venue with 4.9★ Google rating, offering completely private romantic dinners, elegant décor, gourmet dining, and personalized setups that honor your milestone. Located at The Boulevard, Adajan, we provide an exclusive couples-only experience."
  },
  {
    question: "Can I celebrate milestone anniversaries like Silver or Golden Jubilee at HIVY?",
    answer: "Absolutely! HIVY celebrates all anniversaries from first to fiftieth and beyond. We offer special packages for silver jubilee (25th) and golden anniversary (50th) celebrations with premium decorations, personalized touches, and enhanced dining experiences."
  },
  {
    question: "How do I plan a surprise anniversary dinner for my spouse?",
    answer: "Contact us on WhatsApp to plan secretly. We coordinate everything privately, prepare the venue before your spouse arrives, and help create the perfect surprise reveal. Many couples have successfully surprised their partners at HIVY."
  },
  {
    question: "What anniversary decoration options are available?",
    answer: "HIVY offers romantic anniversary decorations including rose petals, candles, fairy lights, customized banners, photo displays, and themed setups. We can incorporate your anniversary colors, personalized messages, and meaningful touches."
  },
  {
    question: "Is anniversary cake included in the packages?",
    answer: "Yes, most anniversary packages include a complimentary celebration cake. We also offer premium cake upgrades with customization like couple names, anniversary year, and special designs to match your celebration theme."
  },
  {
    question: "What is the ideal time slot for an anniversary dinner?",
    answer: "Evening slots (6 PM - 9 PM) are most popular for anniversary dinners as they offer the perfect romantic ambiance with candlelight and fairy lights. However, we accommodate all time preferences based on your schedule."
  },
  {
    question: "Can I bring my own decorations or gifts for the anniversary?",
    answer: "Yes! We welcome personal items that make your anniversary special. Bring photos from your wedding, love letters, gifts, or any meaningful items. Our team will incorporate them beautifully into the setup."
  },
  {
    question: "How far in advance should I book for an anniversary celebration?",
    answer: "We recommend booking 5-7 days in advance for anniversary dinners, especially for weekends and special dates. For milestone anniversaries (10th, 25th, 50th), booking 2 weeks ahead is advised for enhanced customization."
  },
  {
    question: "Do you offer couple photography for anniversary celebrations?",
    answer: "Yes! Our professional photography package (₹2700) captures your anniversary celebration beautifully. This includes 10-15 edited couple photos, a 30-45 second reel, and same-day delivery to preserve your memories."
  },
  {
    question: "What makes anniversary celebrations at HIVY different from restaurants?",
    answer: "Unlike restaurants, HIVY offers complete privacy (no other guests), full venue transformation with romantic décor, 3-hour exclusive booking, personalized setup for couples, and a dedicated team focused solely on your anniversary celebration."
  }
];

export default function FFCAboutPage() {
  // FAQ Schema for About page
  const aboutFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": aboutFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutFaqJsonLd) }}
      />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anniversarydinnersurat.com" },
              { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://anniversarydinnersurat.com/about" }
            ]
          })
        }}
      />
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Heart className="h-4 w-4 mr-2" /> About Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            About HIVY Anniversary
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Surat's Premier Destination for Anniversary Dinners & Milestone Celebrations
          </p>
        </div>
      </section>

      {/* Our Story - Left Content, Right Image */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4 bg-purple-100 text-purple-900 border-purple-200">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                Where Anniversary Stories Unfold Naturally
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At <strong>HIVY Anniversary</strong> in Surat's Gotri area, we understand that anniversary celebrations deserve more than just another dinner out. Couples crave meaningful moments to honor their love journey, but finding the right venue—a place blending privacy, elegance, and romance—remains elusive.
                </p>
                <p>
                  That's why we transformed a stunning <strong>private venue into Surat's premier destination for anniversary celebrations</strong>, complete with fairy lights, floral arches, and personalized decorations. Our romantic private venue offers the perfect escape for couples celebrating milestones from first anniversaries to golden jubilees.
                </p>
                <p>
                  From heartfelt <strong>first anniversary surprises</strong> and <strong>silver jubilee celebrations</strong> to unforgettable <strong>golden anniversary dinners</strong>, romantic milestone dinners, and <strong>surprise anniversary parties</strong> for parents and in-laws, we've hosted <strong>500+ magical anniversary evenings</strong>.
                </p>
                <p className="font-medium text-purple-900">
                  Our mission: Create spaces where anniversary love stories unfold naturally.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-800 to-violet-700 hover:from-purple-900 hover:to-purple-800 text-white">
                    Book Your Moment - Call {siteConfig.phone}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-slate-50 rounded-2xl overflow-hidden relative shadow-xl">
                <Image
                  src="/hivy-images/5100/3.webp"
                  alt="HIVY Anniversary Surat - Romantic Swing of Love Setup for Candlelight Dinner"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-lg font-semibold">500+ Magical Evenings</p>
                  <p className="text-sm opacity-90">Creating memories since 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Users, number: "500+", label: "Magical Evenings" },
              { icon: Star, number: "4.9", label: "Google Rating" },
              { icon: Award, number: "8", label: "Unique Setups" },
              { icon: Clock, number: "5+", label: "Years of Love" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-7 w-7 md:h-8 md:w-8 text-purple-800" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-purple-800">{stat.number}</p>
                <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team - Right Content, Left Image */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-slate-50 rounded-2xl overflow-hidden relative shadow-xl">
                <Image
                  src="/hivy-images/5100/7.webp"
                  alt="HIVY Anniversary Team - Romantic Setup Surat"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-lg font-semibold">Behind Every Glowing Smile</p>
                  <p className="text-sm opacity-90">Our passionate team</p>
                </div>
              </div>
            </div>
            <div className="order-2">
              <Badge className="mb-4 bg-purple-100 text-purple-900 border-purple-200">
                Our Team
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                Behind Every Glowing Smile
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Meet the passionate team behind the magic at <strong>HIVY Anniversary</strong>. Committed to crafting unforgettable anniversary experiences, our dedicated staff is here to ensure that every detail of your milestone celebration is perfect.
                </p>
                <p>
                  From our talented chefs who bring culinary dreams to life, to our attentive servers who anticipate your every need, each member of our team is dedicated to creating moments of joy and romance for you and your partner on your special anniversary.
                </p>
                <p>
                  Whether you're planning a <strong>romantic anniversary dinner in Surat</strong>, a <strong>surprise anniversary party for your spouse</strong>, a <strong>silver jubilee celebration</strong>, or a <strong>golden anniversary dinner</strong>, our team handles everything from setup to cleanup so you can focus on celebrating your love.
                </p>
                <p className="font-medium text-purple-900">
                  Join us and let us make your anniversary truly extraordinary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Left Content, Right Image */}
      <section className="py-16 md:py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4 bg-purple-100 text-purple-900 border-purple-200">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                What Sets Us Apart in Surat
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-purple-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Prime Gotri private venue Location</h3>
                    <p className="text-gray-600">Breathtaking city views, private setups away from crowds on Sevasi-Canal Road. The best private cafe in Surat for couples seeking privacy.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-purple-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Custom Anniversary Packages</h3>
                    <p className="text-gray-600">Starting ₹4700, including mocktails, anniversary cakes, photographer, and themed decor for first anniversaries, silver jubilees, golden anniversaries, and more.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-5 w-5 text-purple-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Pan-India Appeal, Local Heart</h3>
                    <p className="text-gray-600">Serving Surat couples while inspiring visitors with our Instagram-famous romantic setups and pre-wedding photoshoot venues.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Star className="h-5 w-5 text-purple-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">5-Star Experience Guaranteed</h3>
                    <p className="text-gray-600">From setup to cleanup, our team handles everything so you focus on love. Couple-friendly cafe with complete privacy.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-slate-50 rounded-2xl overflow-hidden relative shadow-xl">
                <Image
                  src="/hivy-images/5100/10.webp"
                  alt="Why Choose HIVY Anniversary - Romantic Setup Surat"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-lg font-semibold">5-Star Experience</p>
                  <p className="text-sm opacity-90">Trusted by 500+ couples</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Anniversary Philosophy Section */}
      <section className="py-16 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">Our Philosophy: Honoring Love's Milestones</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>Every anniversary represents another year of choosing each other – through challenges, celebrations, ordinary days, and extraordinary moments. At HIVY, we believe these milestones deserve more than a simple dinner; they deserve a celebration that honors the depth and resilience of your love story. From first anniversaries filled with newlywed excitement to golden jubilees celebrating five decades of partnership, we create experiences worthy of your journey.</p>
            
            <h3 className="text-2xl font-semibold text-purple-600">Understanding Milestone Significance</h3>
            <p>Each anniversary carries its own significance. The nervous excitement of a first anniversary, the comfortable love of a tenth, the proud achievement of a silver jubilee, and the legendary status of a golden anniversary – each milestone has unique emotional texture. Our team understands these nuances and tailors celebrations to honor what each year represents. We don't just plan anniversary dinners; we create tributes to your unique journey.</p>
            <p>The significance of each milestone informs every aspect of our planning. A first anniversary celebration might focus on recapturing the magic of your wedding day, while a silver jubilee calls for reflections on twenty-five years of shared memories. We take time to understand where you are in your journey, what this particular anniversary means to you, and how we can honor that significance through thoughtful decoration choices, music selections, and personalized touches.</p>
            
            <h3 className="text-2xl font-semibold text-purple-600">Rekindling Romance</h3>
            <p>Anniversary celebrations at HIVY often serve as opportunities for couples to reconnect. In the midst of busy careers, family responsibilities, and daily routines, it's easy to lose touch with the romance that brought you together. Our intimate setting strips away distractions, returning you to a space where you can focus entirely on each other. Many couples leave HIVY feeling like they've fallen in love all over again.</p>
            <p>The rekindling power of our anniversary experiences comes from intentional design. We create environments that encourage couples to slow down, make eye contact, and engage in meaningful conversation. Without phones buzzing, children calling, or work emails demanding attention, couples rediscover the connection that first drew them together. This rekindling effect is one of the most rewarding aspects of our work – seeing couples leave our venue with renewed appreciation for each other and reignited romance in their eyes.</p>
            
            <h3 className="text-2xl font-semibold text-purple-600">Celebrating Your Unique Story</h3>
            <p>No two love stories are identical, and no two anniversary celebrations at HIVY look the same. We encourage couples to share their stories with us – how you met, your favorite memories, inside jokes, and meaningful symbols. These details inform our decoration choices, music selection, and special touches that transform a beautiful dinner into a deeply personal celebration of YOUR specific love story.</p>
            <p>Personalization for anniversary celebrations goes beyond surface details. We incorporate elements that speak to your shared history – perhaps the flowers from your wedding bouquet, the song from your first dance, or colors that hold special meaning in your relationship. Some couples bring photos or mementos that we integrate into the setup, creating a space that visually tells the story of their years together. This level of personalization transforms an anniversary dinner into an immersive celebration of your unique journey.</p>
            
            <h3 className="text-2xl font-semibold text-purple-600">Creating New Chapters</h3>
            <p>While anniversaries honor the past, they also mark the beginning of another year together. At HIVY, we create celebrations that look both backward and forward – acknowledging the journey you've shared while creating beautiful new memories to carry into your next year. These anniversary moments become part of your ongoing love story, referenced, and remembered for years to come.</p>
            <p>Creating new chapters means designing experiences that become touchstones for your relationship going forward. When couples return after celebrating a previous anniversary with us, they often reference specific moments from that celebration – the song that played, the unexpected toast, the photograph that captured a genuine emotion. We design with this lasting impact in mind, knowing that what happens at HIVY becomes woven into your love story's ongoing narrative.</p>
          </div>
        </div>
      </section>

      {/* Google Reviews Slider Section */}
      <FFCReviewsSlider />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Ready to Celebrate Your Anniversary?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Book your anniversary dinner package today and surprise your partner with memories that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteConfig.phoneTel}`}>
              <Button size="lg" className="bg-gradient-to-r from-purple-800 to-violet-700 hover:from-purple-900 hover:to-purple-800 text-white w-full sm:w-auto">
                <Phone className="h-5 w-5 mr-2" />
                Call {siteConfig.phone}
              </Button>
            </a>
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">
              Visit Us
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-purple-200">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-purple-800 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-gray-600 text-sm">{siteConfig.address}</p>
                </CardContent>
              </Card>
              
              <Card className="border-purple-200">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-purple-800 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a href={`tel:${siteConfig.phoneTel}`} className="text-purple-800 hover:text-purple-900 font-medium">
                    {siteConfig.phone}
                  </a>
                </CardContent>
              </Card>
              
              <Card className="border-purple-200">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-purple-800 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href={`mailto:${siteConfig.email}`} className="text-purple-800 hover:text-purple-900">
                    {siteConfig.email}
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Page FAQs */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">
            Frequently Asked Questions About Anniversary Celebrations
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {aboutFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-lg border border-purple-200">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-800 hover:text-purple-700">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
