'use client';

import React from 'react';
import { Utensils, Wine, Clock, Gift, Music, Camera, Heart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { menuItems, siteConfig } from '@/lib/ffc-config';

const menuFaqs = [
  { question: "What is included in the anniversary dinner menu?", answer: "Our romantic anniversary menu includes welcome mocktails, starters, a multi-course main meal with vegetarian and non-vegetarian options, accompaniments, and dessert including anniversary cake." },
  { question: "Can I include dishes from our wedding menu?", answer: "What a romantic idea! Share any special dishes from your wedding celebration and we'll try to recreate them for your anniversary, making the dinner even more meaningful." },
  { question: "Is anniversary cake included in the menu?", answer: "Yes, all anniversary packages include a complimentary celebration cake. Custom cakes with names, anniversary years, or photos can be arranged as upgrades." },
  { question: "What vegetarian options are available for anniversary dinner?", answer: "We offer extensive vegetarian options including gourmet paneer preparations, vegetable dishes, soup, salads, and vegetarian starters. Jain food is also available." },
  { question: "Can I arrange champagne for our anniversary toast?", answer: "Non-alcoholic champagne (₹500) adds an elegant touch to anniversary celebrations. Perfect for toasting your years together and the memories you've made." },
  { question: "Can the menu be customized for milestone anniversaries?", answer: "Absolutely! 25th and 50th anniversaries receive special attention. We create premium menus befitting these significant milestones with extra courses and special touches." },
  { question: "What if my spouse has dietary restrictions?", answer: "We accommodate all dietary restrictions including allergies, vegetarian preferences, and medical requirements. Inform us during booking for proper meal preparation." },
  { question: "Is the food served course by course?", answer: "Yes, food is elegantly served course by course, allowing you to savor each dish while reminiscing and celebrating your journey together." },
  { question: "Can I surprise my spouse with their favorite dish?", answer: "Yes! Share your spouse's favorite dishes secretly and we'll include them. It adds a thoughtful personal touch to your anniversary celebration." },
  { question: "What dessert options are available besides anniversary cake?", answer: "Desserts include chocolate brownie with ice cream, gulab jamun, and seasonal specials. We can also arrange romantic desserts like chocolate fondue or special anniversary creations." }
];

export default function FFCMenuPage() {
  const menuFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": menuFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      {/* FAQ Schema for AI & SEO visibility */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuFaqJsonLd) }} />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anniversarydinnersurat.com" },
              { "@type": "ListItem", "position": 2, "name": "Menu", "item": "https://anniversarydinnersurat.com/menu" }
            ]
          })
        }}
      />
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-purple-900/20 text-amber-300 border-purple-900/30">
            <Utensils className="h-4 w-4 mr-2" /> Dining Experience
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            LUNCH / DINNER MENU
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Curated Café-Style Delicacies Crafted for Anniversary Dinners & Milestone Celebrations
          </p>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Starters Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-serif mb-2">🍽️ Main Course</h2>
              <p className="text-gray-600">Delicious dishes crafted to complement the anniversary ambiance</p>
            </div>
            
            <div className="space-y-6">
              {menuItems.starters.map((item, index) => (
                <Card key={index} className="border-purple-100 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{item.emoji}</span>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Desserts Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-serif mb-2">🍫 Desserts</h2>
              <p className="text-gray-600">Sweet endings for your anniversary evening</p>
            </div>
            
            <div className="space-y-6">
              {menuItems.desserts.map((item, index) => (
                <Card key={index} className="border-purple-100 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{item.emoji}</span>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Add-ons Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-serif mb-2">🎁 What You Will Get</h2>
              <p className="text-gray-600">Cake & Champagne included</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {menuItems.addOns.map((item, index) => (
                <Card key={index} className="border-purple-100 bg-purple-50">
                  <CardContent className="p-6 text-center">
                    <span className="text-5xl mb-4 block">{item.emoji}</span>
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <p className="text-purple-800 font-bold text-lg">{item.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-2">✨ The Complete Anniversary Experience</h2>
            <p className="text-gray-600">What makes your anniversary celebration special</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 3 Hours */}
            <Card className="border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-purple-800" />
                  </div>
                  <h3 className="text-xl font-bold">3 Mesmerizing Hours</h3>
                </div>
                <p className="text-gray-600">
                  Three magical hours designed to create unforgettable anniversary memories, where every moment feels like a brushstroke on the canvas of your love story.
                </p>
              </CardContent>
            </Card>

            {/* Tent Decoration */}
            <Card className="border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-purple-800" />
                  </div>
                  <h3 className="text-xl font-bold">Romantic Anniversary Tent Decoration</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-purple-800" />
                    Trending Tent Setup for anniversary evenings
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-purple-800" />
                    Curtains, Flowers & Twinkling Lights
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-purple-800" />
                    Unique Props & Lower Seating
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-purple-800" />
                    Soft Candle Glow Ambiance
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Dining Experience */}
            <Card className="border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Utensils className="h-6 w-6 text-purple-800" />
                  </div>
                  <h3 className="text-xl font-bold">Dining Experience</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-purple-800" />
                    Mouth-Watering Dishes
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-purple-800" />
                    Romantic Background Music
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-purple-800" />
                    Perfect mood setting
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cancellation Policy */}
            <Card className="border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Gift className="h-6 w-6 text-purple-800" />
                  </div>
                  <h3 className="text-xl font-bold">Cancellation Policy</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Rescheduling must be informed at least one day prior. Event can be rescheduled within one month, subject to availability.
                </p>
                <p className="text-purple-800 font-semibold">
                  * No Refund Policy Applicable
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rich SEO Content Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-gray-900">
                Anniversary Dining Excellence
              </h2>
              <p>
                An anniversary dinner is a celebration of the meals you've shared, the memories you've built, and the journey you've traveled together. At <strong>HIVY – Anniversary Celebration Destination</strong> in Surat, we understand that couples celebrating their 1st, 5th, 10th, 25th, or 50th anniversary deserve a dining experience that honors the significance of their milestone. Our anniversary dinner menu is crafted to create new memories while paying tribute to the love story that brought you here.
              </p>
              <p>
                From the first welcoming mocktail to the final slice of anniversary cake, every dish is designed with romantic couples in mind. The pacing is leisurely, the presentation is elegant, and the flavours are carefully balanced to complement conversation and connection rather than overwhelming the senses.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                A Menu That Reflects Your Journey
              </h3>
              <p>
                What makes HIVY's anniversary menu special is the opportunity for <strong>meaningful personalization</strong>. Many couples choose to include dishes that hold sentimental value – perhaps a dish from their wedding reception, a meal from their honeymoon destination, or simply their favourite comfort food that they've shared throughout their married life. We encourage you to share these stories with us during booking, and our kitchen will do everything possible to recreate those meaningful flavours.
              </p>
              <p>
                For milestone anniversaries like <strong>25th silver anniversaries</strong> or <strong>50th golden anniversaries</strong>, we offer enhanced menu options with additional courses, premium ingredients, and special presentation touches that befit these significant occasions. These celebrations deserve to be remembered, and the food plays a starring role in that memory.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Course-by-Course Anniversary Dining
              </h3>
              <p>
                Your three-hour anniversary celebration unfolds with careful attention to pacing. Upon arrival, <strong>welcome mocktails</strong> greet you as you take in the romantic tent décor, fairy lights, and anniversary-themed setup. This initial moment is for absorbing the atmosphere and reconnecting with your partner before the culinary journey begins.
              </p>
              <p>
                <strong>Starters</strong> arrive next, designed for intimate sharing. Vegetarian options include cheese fondue with dipping accompaniments, crispy paneer bites, loaded nachos, and vegetable spring rolls. Non-vegetarian selections feature tender chicken tikka, spiced seekh kebabs, and appetizers that both partners can enjoy while reminiscing about years past.
              </p>
              <p>
                The <strong>main course</strong> represents the heart of your anniversary dinner. Vegetarian dishes include rich paneer makhani, aromatic vegetable biryani, hearty dal preparations, and seasonal specialties. Non-vegetarian options showcase butter chicken perfection, tender mutton curry, and grilled preparations. Accompaniments include fresh naan from the tandoor, fragrant rice, cooling raita, and fresh salads.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Vegetarian and Jain Accommodations
              </h3>
              <p>
                HIVY proudly offers <strong>extensive vegetarian options</strong> that satisfy even the most discerning palates. Our vegetarian anniversary menu features gourmet paneer preparations, creative vegetable dishes, wholesome lentil curries, and fresh salads that make vegetarian guests feel genuinely celebrated rather than accommodated as an afterthought.
              </p>
              <p>
                For couples observing <strong>Jain dietary preferences</strong>, we prepare complete meals without onion and garlic while maintaining full flavour profiles. These requirements are noted during booking and executed precisely, ensuring both partners can enjoy every dish without concern.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                The Anniversary Cake Tradition
              </h3>
              <p>
                Every anniversary package includes a <strong>complimentary celebration cake</strong> in your choice of chocolate, butterscotch, vanilla, or red velvet. The cake-cutting moment – feeding each other just as you did at your wedding – becomes a poignant reminder of the vows you've kept and the love you've cultivated.
              </p>
              <p>
                For those wanting something more elaborate, we offer <strong>custom anniversary cakes</strong> featuring your names, anniversary year, meaningful dates, or even photo prints that showcase your journey together. Multi-tier designs, heart shapes, and premium decorations transform the simple cake into a centrepiece worthy of your milestone.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Desserts Beyond the Cake
              </h3>
              <p>
                While the anniversary cake takes centre stage, our <strong>dessert selection</strong> offers additional sweet indulgences. Our signature warm chocolate brownie served with vanilla ice cream creates perfect sharing moments. Traditional gulab jamun provides a sweet Indian touch. Fresh fruit platters offer a lighter option. For couples who want something extra romantic, we can arrange chocolate fondue or special anniversary dessert creations with advance notice.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Toasting to Your Years Together
              </h3>
              <p>
                A proper anniversary toast deserves the right beverage. <strong>Non-alcoholic champagne</strong> at ₹500 provides that celebratory pop, the elegant bubbles, and the romantic clink that photograph beautifully against fairy-light backgrounds. Many couples use this moment for heartfelt speeches, renewal of promises, or simply gazing into each other's eyes with gratitude for another year together.
              </p>
              <p>
                Throughout the evening, <strong>premium mocktails</strong>, soft drinks, fresh juices, and specialty beverages remain available. Each drink is served in decorated glasses that complement the celebration aesthetic.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Dietary Accommodations and Customization
              </h3>
              <p>
                Years together mean you know your partner's preferences intimately. Share this knowledge with us. Whether your spouse prefers <strong>extra-spicy dishes</strong>, has developed food sensitivities, requires diabetic-friendly options, or simply has specific favourites they'd love to see on the anniversary menu, we accommodate thoughtfully.
              </p>
              <p>
                Allergies to nuts, dairy, gluten, or specific ingredients are handled with care. Menu customization discussions happen during booking, ensuring no surprises – except the pleasant kind you've planned.
              </p>

              <div className="mt-10 p-6 bg-purple-50 border border-purple-200 rounded-xl text-center">
                <p className="text-lg font-semibold text-purple-900 mb-2">
                  Ready to plan your anniversary dinner menu?
                </p>
                <p className="text-gray-600">
                  Call <a href={`tel:${siteConfig.phone}`} className="text-purple-800 font-bold hover:underline">{siteConfig.phone}</a> to discuss menu customizations for your celebration.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-purple-50/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Anniversary Dinner Menu FAQs
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {menuFaqs.map((faq, index) => (
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-800 to-violet-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Ready to Book Your Romantic Dining Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Reserve your table and let us create magical moments for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FFCBookNowButton pageTitle="Menu Page" className="text-lg px-8 py-6 bg-white text-purple-800 hover:bg-purple-50" />
            <a href={`tel:${siteConfig.phoneTel}`}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6">
                Call {siteConfig.phone}
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
