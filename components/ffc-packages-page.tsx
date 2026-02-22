'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Gift, ChevronRight, Star, Clock, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { getVisiblePackages, formatPrice } from '@/lib/ffc-config';

const packagesFaqs = [
  { question: "Which package is best for anniversary dinners?", answer: "All packages create beautiful anniversary experiences. Tent of Romance is most popular for its intimate cozy setting, while BoHo Chic offers warm romantic ambiance perfect for celebrating milestones." },
  { question: "Do anniversary packages include cake?", answer: "Yes! All anniversary packages include a complimentary celebration cake. Custom anniversary cakes with names, years married, or personalized designs are available as upgrades." },
  { question: "Can I celebrate a 25th or 50th anniversary at HIVY?", answer: "Absolutely! We specialize in milestone anniversary celebrations. Silver jubilee (25th) and golden anniversary (50th) packages receive special decorations and premium touches to honor these achievements." },
  { question: "Can I surprise my spouse with an anniversary package?", answer: "Yes! Many couples plan surprise anniversary celebrations. We coordinate secretly with you, set up everything before your spouse arrives, and help create the perfect surprise reveal." },
  { question: "What decorations are included in anniversary packages?", answer: "Anniversary packages include rose petals, candles, fairy lights, elegant table settings, and romantic décor. Personalized anniversary banners, photos, and custom elements can be added." },
  { question: "Can I bring wedding photos for the anniversary setup?", answer: "Absolutely! Wedding photos add a beautiful personal touch. We incorporate them into the décor, creating a timeline of your love story that makes the celebration extra meaningful." },
  { question: "Which package is best for a first anniversary?", answer: "Swing of LOVE and Fairy Tale are popular first anniversary choices. They offer romantic yet playful settings perfect for celebrating one year of marriage." },
  { question: "Is anniversary photography available?", answer: "Yes! Photography packages (₹2700) capture your anniversary celebration beautifully. This includes couple portraits, ambiance shots, and special moments with same-day delivery." },
  { question: "Can I customize the anniversary dinner menu?", answer: "Yes, menu preferences can be accommodated. Let us know dietary requirements, favorite cuisines, or special dishes you'd like included in your anniversary dinner." },
  { question: "How do I add champagne to my anniversary package?", answer: "Non-alcoholic champagne (fruit-flavored) is available for ₹500. It's perfect for toasting your anniversary and adds an elegant celebratory touch to the evening." }
];

export default function FFCPackagesPage() {
  const visiblePackages = getVisiblePackages();

  const packagesFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": packagesFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };
  
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(packagesFaqJsonLd) }} />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anniversarydinnersurat.com" },
              { "@type": "ListItem", "position": 2, "name": "Anniversary Packages", "item": "https://anniversarydinnersurat.com/packages" }
            ]
          })
        }}
      />
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Gift className="h-4 w-4 mr-2" /> 5 Unique Anniversary Setups
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Anniversary Packages
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Choose from 5 stunning romantic setups designed to make your anniversary celebration unforgettable
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-6">
            {visiblePackages.map((pkg, index) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <Card className="overflow-hidden border-purple-100 hover:shadow-xl transition-all group h-full">
                  {/* Image */}
                  <div className="aspect-square bg-gradient-to-br from-purple-100 to-slate-50 relative overflow-hidden">
                    <Image
                      src={pkg.thumbnail}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 md:top-4 md:left-4 bg-purple-800 text-white text-xs">
                      Setup {index + 1}
                    </Badge>
                  </div>
                  
                  {/* Content */}
                  <CardContent className="p-2.5 sm:p-3 md:p-4">
                    <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1 group-hover:text-purple-800 transition-colors leading-tight">
                      {pkg.name} {pkg.emoji}
                    </h2>
                    <p className="text-gray-600 text-xs md:text-sm mb-2 line-clamp-2 hidden md:block">
                      {pkg.shortDescription}
                    </p>
                    
                    {/* Price */}
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
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">What's Included in Every Anniversary Package</h2>
            <p className="text-gray-600">All our anniversary packages come with these essential elements</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🕐", title: "3 Hours Private Time", desc: "Exclusive private anniversary celebration" },
              { icon: "🥂", title: "Welcome Drink", desc: "Refreshing start to your anniversary evening" },
              { icon: "🍰", title: "Anniversary Cake", desc: "Complimentary anniversary cake included" },
              { icon: "🎶", title: "Romantic Music", desc: "Soft anniversary melodies throughout" },
              { icon: "🕯️", title: "Candle Setup", desc: "Warm romantic candlelight ambiance" },
              { icon: "🎈", title: "Anniversary Decorations", desc: "Beautiful anniversary-themed decor" },
              { icon: "🛋️", title: "Comfortable Seating", desc: "Cozy seating arrangements" },
              { icon: "📸", title: "Photo-Ready Setup", desc: "Instagram-worthy anniversary backdrops" },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-purple-50/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 font-serif">Anniversary Celebration Package Guide</h2>
          <div className="prose prose-lg prose-purple max-w-none text-gray-700">
            <h3 className="text-xl font-bold text-purple-900 mt-6">Celebrating Love Milestones at HIVY</h3>
            <p>
              Anniversary celebrations mark the journey of love—each year together representing challenges overcome, memories created, and commitment deepened. At HIVY, we understand that anniversaries deserve more than routine restaurant dinners or home celebrations squeezed between daily responsibilities. Our anniversary packages create dedicated spaces where couples reconnect with the love that brought them together, honor the years they've shared, and recommit to the future ahead. Whether celebrating your first anniversary or your fiftieth, HIVY provides the romantic backdrop where your milestone receives the attention it deserves. Private venues, beautiful decorations, intimate dining, and thoughtful touches combine to transform anniversary dates into genuinely memorable occasions.
            </p>

            <h3 className="text-xl font-bold text-purple-900 mt-8">Packages for Every Anniversary Year</h3>
            <p>
              Different anniversary years call for different celebration approaches, and HIVY packages accommodate this variety. First anniversary celebrations often suit Swing of LOVE's playful energy or Fairy Tale's whimsical charm—couples still in the early romantic phase appreciate these lighthearted yet meaningful settings. Fifth and tenth anniversaries, representing significant relationship milestones, gravitate toward BoHo Chic's contemporary warmth or Tent of Romance's luxurious intimacy. These established relationships appreciate sophisticated ambiance honoring their journey's maturity. Whatever year you're celebrating, our packages adapt through customization—anniversary-specific decorations, personalized elements, and touches that acknowledge exactly how many years of love you're honoring.
            </p>

            <h3 className="text-xl font-bold text-purple-900 mt-8">Milestone Anniversary Package Ideas</h3>
            <p>
              Silver jubilee (25th) and golden anniversary (50th) celebrations represent relationship achievements deserving extraordinary recognition. HIVY approaches these milestones with special attention. Twenty-fifth anniversary packages can incorporate silver-themed decorations, photographs spanning twenty-five years together, and elements honoring your quarter-century journey. Fiftieth anniversary celebrations receive golden touches—decorations, photo displays from five decades together, and recognition of fifty years of shared life. These milestone celebrations often include family elements: children's or grandchildren's photos incorporated into decorations, video messages from loved ones played during the celebration, or surprise family member arrivals coordinated with our team. Premium packages like Tent of Romance particularly suit milestone celebrations where luxury matches significance.
            </p>

            <h3 className="text-xl font-bold text-purple-900 mt-8">Incorporating Wedding Memories into Anniversary Packages</h3>
            <p>
              Anniversaries celebrate marriages, making wedding day references particularly meaningful. HIVY anniversary packages easily incorporate wedding memories through various approaches. Wedding photographs displayed throughout your celebration space remind you both of where your journey began. Wedding video footage can play on screens positioned within the setup. Wedding song playlists recreate the musical atmosphere of your reception. Some couples request decorations matching their original wedding colors or themes. Others bring wedding items—preserved bouquet flowers, wedding cake toppers, unity candle remnants—integrated into anniversary decorations. These connections between wedding day and anniversary celebration create emotional continuity, reminding couples that today's love grew from promises made years before.
            </p>

            <h3 className="text-xl font-bold text-purple-900 mt-8">Anniversary Cake and Champagne Options</h3>
            <p>
              Every anniversary package includes a complimentary celebration cake, though many couples customize this element significantly. Anniversary cakes can feature your names and wedding date, number of years being celebrated, photos printed on edible paper, or designs referencing inside jokes and shared memories. Couples with favorite bakeries can bring custom cakes while we adjust packages accordingly. Non-alcoholic champagne (fruit-flavored sparkling drink at ₹500) adds traditional toasting elegance to anniversary celebrations—perfect for clinking glasses while reflecting on years together and anticipating years ahead. The cake cutting and champagne toast become photographed highlights of your anniversary evening, mirroring ceremonies from your wedding day.
            </p>

            <h3 className="text-xl font-bold text-purple-900 mt-8">Creating Romantic Anniversary Traditions</h3>
            <p>
              Many couples establish HIVY as their annual anniversary tradition—returning each year to celebrate in private romantic settings that restaurants cannot match. These recurring celebrations create relationship rituals reinforcing commitment and appreciation. Some couples book the same package annually, appreciating consistency in their tradition. Others rotate through different packages, experiencing all five HIVY offerings over successive years. Annual anniversary photography documents relationship progression over time. Annual letters written during HIVY celebrations become treasured collections. The familiar drive to HIVY, the anticipation of decorated spaces, and the dedicated hours together establish comforting patterns in busy lives often lacking intentional romantic time.
            </p>

            <h3 className="text-xl font-bold text-purple-900 mt-8">Anniversary Package Customization Options</h3>
            <p>
              While standard anniversary packages impress significantly, customization creates personally meaningful celebrations. Beyond standard decorations, add rose petal pathways leading to your table. Include extra balloon arrangements in anniversary-appropriate numbers—ten balloons for your tenth anniversary, twenty-five for your silver jubilee. Display timeline photos showing your relationship year by year. Add LED lights spelling meaningful messages: your names, anniversary years, phrases significant to your relationship. Request specific flowers: wedding bouquet varieties, favorites you've given each other over the years, or seasonal blooms you both love. Our team welcomes creative customization requests, transforming standard packages into celebrations as unique as your relationship.
            </p>

            <h3 className="text-xl font-bold text-purple-900 mt-8">Why Private Venues Beat Anniversary Dinners at Restaurants</h3>
            <p>
              Restaurant anniversary dinners, while pleasant, suffer limitations that private venues overcome. At restaurants, you share space with strangers, potentially seated beside noisy families, crying children, or inconsiderate diners dominating your experience. Staff interruptions follow restaurant schedules rather than your celebration's natural flow. Decorations, if present at all, are standardized and impersonal. Time pressure from subsequent reservations prevents lingering over meaningful conversations. HIVY anniversary packages eliminate every limitation. Complete privacy ensures your celebration remains exclusively yours. Decorations were set up today, specifically for your anniversary. Three hours of dedicated time allows unhurried dining, deep conversation, and genuine reconnection. This privacy and personalization justifies choosing HIVY over even the finest restaurants for anniversary celebrations.
            </p>

            <h3 className="text-xl font-bold text-purple-900 mt-8">Planning Surprise Anniversary Celebrations</h3>
            <p>
              Surprise anniversary celebrations demonstrate exceptional thoughtfulness. Perhaps your partner expects a simple home dinner, instead discovering a HIVY celebration awaiting them. Maybe they believe you've forgotten entirely—a common surprise setup—only to find an elaborately decorated space honoring your years together. Surprise anniversary planning at HIVY works through confidential communication with our team: all coordination happens privately, payments process discreetly, and confirmations reach only the planner. On celebration day, you simply guide your unsuspecting partner to HIVY, where their surprise reveals itself through a fully decorated anniversary space. The emotional impact of anniversary surprises often exceeds even proposal surprises because they demonstrate sustained love and appreciation rather than one-time commitment.
            </p>

            <h3 className="text-xl font-bold text-purple-900 mt-8">Making Anniversary Packages Memorable Each Year</h3>
            <p>
              Annual anniversary celebrations at HIVY remain fresh through intentional variety and evolving personalization. Rotate through different packages each year, experiencing all five offerings over time. Increase milestone anniversary investments—standard packages for regular years, premium packages for fifth, tenth, and other significant milestones. Add new elements annually: photography one year, custom cakes the next, flower upgrades another year. Write anniversary letters to each other, exchanged and read aloud during HIVY celebrations, creating growing collections of documented love. Reference previous HIVY visits through displayed photographs, showing your anniversary celebration history. These approaches ensure each anniversary visit feels special while building meaningful traditions that deepen your relationship's romantic foundation year after year.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-300">
              <HelpCircle className="h-4 w-4 mr-2" /> Package FAQs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Frequently Asked Questions About Our Anniversary Packages
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {packagesFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-lg border border-purple-200 px-6">
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

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
