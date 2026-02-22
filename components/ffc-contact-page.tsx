'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import FFCReviewsSlider from '@/components/ffc-reviews-slider';
import { siteConfig } from '@/lib/ffc-config';

const contactFaqs = [
  { question: "How do I book an anniversary celebration at HIVY?", answer: "Contact us via WhatsApp at 9727027278 or fill the booking form. Share your anniversary date, package preference, and any special requests. We'll confirm availability and guide you through booking." },
  { question: "Can I book HIVY for a milestone anniversary?", answer: "Absolutely! We specialize in milestone celebrations like 25th and 50th anniversaries. Contact us to discuss special arrangements and premium touches for these significant occasions." },
  { question: "How far in advance should I book for an anniversary?", answer: "We recommend 7-10 days for anniversary bookings to allow time for personalized preparations. Weekends and special dates fill quickly, so early booking is advised." },
  { question: "Can I plan a surprise anniversary for my spouse?", answer: "Yes! Surprise anniversary celebrations are our specialty. We coordinate secretly with you and ensure everything is perfect before your spouse arrives at HIVY." },
  { question: "What information do I need for anniversary bookings?", answer: "Share your preferred date, time slot, package choice, anniversary year, and any personalization requests. Wedding photos or special items to include in décor can be arranged during consultation." },
  { question: "What payment options are available for anniversary bookings?", answer: "We accept UPI, bank transfers, credit/debit cards, and cash. 50% advance confirms the booking, with the balance due before your anniversary celebration." },
  { question: "Can I visit HIVY before my anniversary booking?", answer: "Yes! Venue visits help you plan the perfect anniversary celebration. Contact us to schedule a visit and see the romantic ambiance firsthand." },
  { question: "How do I include our wedding photos in the anniversary setup?", answer: "Share your photos via WhatsApp after booking. Our team will incorporate them beautifully into your anniversary décor as a timeline of your love story." },
  { question: "What are HIVY's operating hours for anniversary bookings?", answer: "We operate from 10 AM to midnight, 7 days a week. Evening slots (6 PM - 9 PM) and romantic slots (9 PM - 12 midnight) are most popular for anniversary dinners." },
  { question: "Where is HIVY located in Surat?", answer: "HIVY is situated near VR Mall, Dumas Road, Surat. Complete address and Google Maps location are shared after booking confirmation." }
];

export default function FFCContactPage() {
  const contactFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": contactFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactFaqJsonLd) }} />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anniversarydinnersurat.com" },
              { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://anniversarydinnersurat.com/contact" }
            ]
          })
        }}
      />
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <MessageCircle className="h-4 w-4 mr-2" /> Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We'd love to hear from you! Book your anniversary celebration or ask us anything.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 font-serif">
                Let's Connect
              </h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <Card className="border-purple-100">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-purple-800" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                        <p className="text-gray-600 mb-2">We're available for calls and booking inquiries</p>
                        <a 
                          href={`tel:${siteConfig.phoneTel}`}
                          className="text-xl font-bold text-purple-800 hover:text-purple-900"
                        >
                          {siteConfig.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* WhatsApp */}
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                        <p className="text-gray-600 mb-2">Quick responses via WhatsApp</p>
                        <a 
                          href={`https://wa.me/${siteConfig.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                        >
                          <MessageCircle className="h-5 w-5" />
                          Chat on WhatsApp
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="border-purple-100">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-purple-800" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                        <p className="text-gray-600 mb-2">For detailed inquiries and partnerships</p>
                        <a 
                          href={`mailto:${siteConfig.email}`}
                          className="text-purple-800 hover:text-purple-900"
                        >
                          {siteConfig.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Location */}
                <Card className="border-purple-100">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-purple-800" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                        <p className="text-gray-600">
                          {siteConfig.address}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Operating Hours */}
                <Card className="border-purple-100">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-purple-800" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Available Time Slots</h3>
                        <div className="text-gray-600 space-y-2 text-sm">
                          <div>
                            <p className="font-semibold text-purple-900 mb-1">🍽️ Lunch (Indoor)</p>
                            <p>12 PM - 3 PM | 1 PM - 4 PM | 2 PM - 5 PM</p>
                          </div>
                          <div>
                            <p className="font-semibold text-purple-900 mb-1">🌅 Evening (Indoor)</p>
                            <p>4 PM - 7 PM | 5 PM - 8 PM | 6 PM - 9 PM</p>
                          </div>
                          <div>
                            <p className="font-semibold text-purple-900 mb-1">🌙 Dinner (Indoor/private venue)</p>
                            <p>7 PM - 10 PM | 7:30 PM - 10:30 PM | 8 PM - 11 PM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <div className="flex gap-4">
                  <a
                    href={siteConfig.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-800 to-violet-600 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href={siteConfig.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 font-serif">
                Book Your Celebration
              </h2>
              <FFCBookingForm pageTitle="Contact Page" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info SEO Section */}
      <section className="py-16 bg-purple-50/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Plan Your Anniversary Celebration</h2>
          <div className="prose prose-lg prose-purple max-w-none text-gray-700">
            <h3 className="text-xl font-bold text-purple-900 mt-6">Reaching Out for Anniversary Bookings</h3>
            <p>
              Your anniversary deserves to be celebrated in a way that honors the journey you and your partner have shared. At HIVY, we specialize in creating romantic anniversary experiences that capture the essence of your love story. Booking your anniversary celebration begins with a simple conversation with our team. Reach out via WhatsApp, phone, or the booking form on this page to share your vision. Whether you are celebrating your first anniversary or your fiftieth, our team listens carefully to understand what would make your celebration truly special and tailors every detail accordingly.
            </p>

            <h3 className="text-xl font-bold text-purple-900 mt-8">Special Consultation for Milestone Anniversaries</h3>
            <p>
              Milestone anniversaries such as the 10th, 25th silver anniversary, or 50th golden anniversary call for extraordinary celebrations. For these significant occasions, we offer extended consultation sessions to understand your journey and incorporate personal elements into your celebration. Our team can create timeline displays featuring photographs from your wedding day through the present, incorporate meaningful items like your wedding invitation or marriage certificate into the décor, and design the entire experience around your unique love story. Contact us early for milestone anniversaries so we have ample time to bring your vision to life.
            </p>

            <h3 className="text-xl font-bold text-purple-900 mt-8">What to Share When Booking Anniversaries</h3>
            <p>
              When you contact us for an anniversary booking, please share details that help us personalize your celebration. Let us know which anniversary you are celebrating, your preferred date and time slot, the package or theme that appeals to you, and any specific requests. Share favorite colors that hold meaning for your relationship, cuisine preferences for your anniversary dinner, and any customizations you envision. If you have wedding photographs or other memorabilia you would like incorporated into the decoration, let us know so we can plan accordingly. Every detail you share helps us create an anniversary celebration that feels uniquely yours.
            </p>

            <h3 className="text-xl font-bold text-purple-900 mt-8">Including Personal Touches — Photos and Special Items</h3>
            <p>
              Anniversaries are about celebrating your shared history, and personal touches make these celebrations deeply meaningful. After booking, you can share photographs from your wedding day, engagement, honeymoon, and special moments throughout your years together. Our decoration team incorporates these images beautifully into your anniversary setup, creating a visual timeline of your love story. You can also bring personal items like the music from your first dance to be played during dinner, a replica of your wedding cake flavor, or any meaningful objects that symbolize your relationship. These personal elements transform your anniversary dinner into a truly intimate celebration.
            </p>

            <h3 className="text-xl font-bold text-purple-900 mt-8">Preferred Booking Timelines for Anniversaries</h3>
            <p>
              We recommend booking your anniversary celebration seven to ten days in advance to allow adequate time for preparation and personalization. For milestone anniversaries with extensive customization, two to three weeks advance booking is advisable. Weekend slots, particularly Saturday evenings, fill up quickly, so securing your date early ensures you get your preferred time. If your actual anniversary date falls on a weekday, consider celebrating on the nearest weekend for a more relaxed experience, or embrace the intimacy of a weekday celebration when the venue is quieter and entirely focused on you.
            </p>

            <h3 className="text-xl font-bold text-purple-900 mt-8">Location and Romantic Ambiance Preview</h3>
            <p>
              HIVY is situated in a prime location near VR Mall on Dumas Road in Surat's Adajan area. The venue offers complete privacy in a romantic setting designed specifically for couples. If you wish to visit before booking to see the ambiance and visualization options, we welcome you to schedule a preview visit. During the visit, you can see our themed setups, discuss decoration possibilities, and experience the romantic atmosphere firsthand. Ample free parking is available at the venue for your convenience. The exact address and navigation details are shared upon booking confirmation.
            </p>

            <h3 className="text-xl font-bold text-purple-900 mt-8">Payment and Confirmation Process</h3>
            <p>
              Booking your anniversary celebration is straightforward and secure. Once you select your package and preferred slot, a 50% advance payment confirms your reservation. We accept UPI payments through Google Pay, PhonePe, and Paytm, as well as bank transfers, credit cards, debit cards, and cash. The remaining balance is due before your celebration begins. After payment confirmation, you receive a booking confirmation with all details including date, time, package, and any special requests noted. Our team then begins preparing for your anniversary, coordinating every element to ensure perfection.
            </p>

            <h3 className="text-xl font-bold text-purple-900 mt-8">Surprise Anniversary Coordination</h3>
            <p>
              Many couples come to HIVY to plan surprise anniversary celebrations for their partners. If you are organizing a surprise anniversary, our team maintains complete discretion in all communications. We coordinate arrival timing so that everything is perfectly prepared when you walk in with your partner. The decoration team ensures candles are lit, music is playing, and the romantic ambiance is at its peak for the reveal moment. Whether you want your partner blindfolded until the last moment or simply kept unaware of the destination, we help orchestrate the perfect surprise anniversary reveal.
            </p>

            <h3 className="text-xl font-bold text-purple-900 mt-8">Our Dedication to Romantic Celebrations</h3>
            <p>
              At HIVY, we believe that every anniversary is a testament to love, commitment, and the beautiful journey two people share. Our dedication to creating romantic celebrations stems from this belief. Every candle we place, every rose petal we arrange, every photograph we incorporate is done with the intention of honoring your relationship. Our team takes genuine joy in seeing couples relive their memories and create new ones within our venue. This dedication translates into celebrations that feel personal, intimate, and worthy of the love they commemorate.
            </p>

            <h3 className="text-xl font-bold text-purple-900 mt-8">Creating Anniversary Traditions at HIVY</h3>
            <p>
              Many couples who celebrate their anniversary at HIVY return year after year, making it their annual tradition. The romantic ambiance, personalized service, and memorable experiences create a connection that couples want to relive with each passing anniversary. We love seeing familiar faces return, celebrating new milestones, and watching love stories grow over the years. Our team remembers returning couples and often surprises them with thoughtful touches that acknowledge their journey with us. Whether this is your first anniversary at HIVY or your tenth, we strive to make each celebration as special as the first.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-serif">Find Us</h2>
            <p className="text-gray-600 mt-2">Visit HIVY Anniversary in Surat</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0665549872024!2d72.78282829999999!3d21.1895149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d4fc7b5dbb9%3A0xb1aa92785a2443b8!2sHIVY%20-%20Place%20For%20Celebration!5e0!3m2!1sen!2sin!4v1769339702912!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="HIVY Anniversary Location"
              />
            </div>
            <div className="text-center mt-6">
              <a 
                href="https://maps.app.goo.gl/HIVY-Place-For-Celebration"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-purple-800 hover:bg-purple-900">
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Contact & Anniversary Booking FAQs
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {contactFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-purple-50 rounded-lg border border-purple-200 px-6">
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

      {/* Google Reviews Section */}
      <FFCReviewsSlider />

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
