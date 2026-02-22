'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, Play, Pause, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { getVisiblePackages } from '@/lib/ffc-config';

const virtualTourFaqs = [
  { question: "What is HIVY's 360 virtual tour?", answer: "Our immersive virtual tour lets you explore HIVY's romantic venue from anywhere. Perfect for couples planning anniversary celebrations—preview the ambiance before your special day." },
  { question: "How do I navigate the virtual tour?", answer: "Click to start, then use your mouse or touch screen to look around in 360 degrees. Explore every corner of our romantic celebration space." },
  { question: "Can I see anniversary decoration setups?", answer: "The tour shows our venue spaces. For specific anniversary package setups with flowers, candles, and romantic decor, contact us for photos and videos." },
  { question: "Is the venue exactly like the virtual tour?", answer: "Yes, it accurately represents our space. With your anniversary package decorations, candles, and personalized touches, the experience is even more magical." },
  { question: "How can this help plan my anniversary?", answer: "Visualize where decorations will be placed, understand the intimate setting, and appreciate the ambiance that will make your anniversary memorable." },
  { question: "Can we visit in person before our anniversary?", answer: "Yes! Couples are welcome to visit our venue. Contact us to schedule a tour and discuss your anniversary celebration plans in person." },
  { question: "Is the venue private for anniversary celebrations?", answer: "Absolutely. You receive exclusive private access. The intimate space you see in the virtual tour is reserved entirely for your anniversary celebration." },
  { question: "Can I show the virtual tour to my spouse?", answer: "If planning together, share it! If planning a surprise anniversary, keep it secret—we'll handle everything discretely for the surprise reveal." },
  { question: "How does the venue look during evening celebrations?", answer: "Evening anniversary dinners are magical with candlelight, fairy lights, and romantic ambiance. The tour gives you a sense of the space that transforms beautifully at night." },
  { question: "How do I book after viewing the virtual tour?", answer: "Contact us via WhatsApp (9727027278) or the booking form. Share your anniversary date, package preference, and any special requests. We'll confirm and guide you." }
];

const virtualTourFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": virtualTourFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
};

export default function FFCVirtualTourPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(virtualTourFaqJsonLd) }} />
      <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Camera className="h-4 w-4 mr-2" /> Explore Our Spaces
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Virtual Tour
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Take a sneak peek into our romantic anniversary celebration spaces before you book
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xs mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold font-serif mb-4">Watch Our Space</h2>
              <p className="text-gray-600">Experience the magic of HIVY Anniversary</p>
            </div>
            
            {/* Vertical Video */}
            <div 
              className="aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl relative group"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(isPlaying ? false : true)}
            >
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/videos/virtual-tour.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Custom Controls Overlay */}
              <div 
                className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${
                  showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Play/Pause Button */}
                <button
                  onClick={handlePlayPause}
                  className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
                >
                  {isPlaying ? (
                    <Pause className="w-10 h-10 text-purple-800" fill="currentColor" />
                  ) : (
                    <Play className="w-10 h-10 text-purple-800 ml-1" fill="currentColor" />
                  )}
                </button>
                
                {!isPlaying && (
                  <p className="text-white text-sm mt-4 font-medium drop-shadow-lg">Tap to play</p>
                )}
              </div>

              {/* Mute Button - Bottom Right */}
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all z-20"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">Our Anniversary Setups Gallery</h2>
            <p className="text-gray-600">Explore our 5 unique anniversary celebration spaces</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
            {getVisiblePackages().map((pkg) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group">
                  <div className="aspect-square bg-gradient-to-br from-purple-100 to-slate-50 relative overflow-hidden">
                    <Image
                      src={pkg.thumbnail}
                      alt={pkg.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-semibold">View Details</span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-sm line-clamp-1 group-hover:text-purple-800 transition-colors">
                      {pkg.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiance Features */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">The Ambiance</h2>
            <p className="text-gray-400">Every detail crafted for romance</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { emoji: "🕯️", title: "Candles" },
              { emoji: "💡", title: "Fairy Lights" },
              { emoji: "🌹", title: "Flowers" },
              { emoji: "🎈", title: "Balloons" },
              { emoji: "🎶", title: "Music" },
              { emoji: "✨", title: "Décor" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <span className="text-5xl mb-3 block">{item.emoji}</span>
                <p className="font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif">
            Ready to Experience It In Person?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            The real magic is best experienced in person. Book your celebration today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages">
              <Button size="lg" className="bg-gradient-to-r from-purple-800 to-violet-700 hover:from-purple-900 hover:to-purple-800 text-white">
                View All Packages <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <FFCBookNowButton pageTitle="Virtual Tour" className="text-lg px-8 py-6" />
          </div>
        </div>
      </section>

      {/* Rich SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-center mb-8 font-serif text-purple-800">Discover Our Anniversary Celebration Venue</h2>
            
            <p className="text-gray-700 leading-relaxed">
              Celebrating your anniversary deserves a venue as special as your love story. HIVY's 360-degree virtual tour offers couples an immersive preview of our romantic anniversary celebration venue in Surat. Whether you're commemorating your first anniversary or celebrating decades of togetherness, our virtual tour helps you visualize the intimate setting where your milestone celebration will unfold in elegance and romance.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-purple-700">Benefits of Virtual Tour Before Booking</h3>
            <p className="text-gray-700 leading-relaxed">
              Planning an anniversary celebration becomes more meaningful when you can preview the venue together. Couples can explore HIVY's spaces side by side, discussing decoration preferences and envisioning their special evening. For those planning surprise anniversary celebrations, the virtual tour allows secret exploration and planning. Either way, this immersive preview helps you make confident decisions about your anniversary venue selection.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-purple-700">What to Explore in the 360-Degree Tour</h3>
            <p className="text-gray-700 leading-relaxed">
              Navigate through our anniversary venue to discover intimate seating arrangements perfect for couples, elegant spaces for photography, and areas where personalized anniversary decorations can be placed. Notice the romantic lighting possibilities, architectural details that photograph beautifully, and the overall ambiance that makes HIVY ideal for milestone celebrations. Pay attention to spaces where anniversary cakes can be presented and champagne toasts can be made.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-purple-700">Understanding the Romantic Ambiance</h3>
            <p className="text-gray-700 leading-relaxed">
              HIVY's venue embodies romance in every detail. The virtual tour showcases our carefully designed interiors featuring warm, inviting color palettes and elegant furnishings that create an atmosphere perfect for reflecting on your journey together. While exploring virtually, imagine soft music playing, candles flickering, and your partner's face illuminated by fairy lights. The ambiance you see virtually transforms into pure magic during your actual anniversary celebration.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-purple-700">Planning Decorations and Setup</h3>
            <p className="text-gray-700 leading-relaxed">
              Use the virtual tour to plan memorable anniversary decorations. Identify perfect spots for displaying photographs from your wedding day, understand where anniversary banners will have maximum impact, and visualize flower arrangement positions. Some couples recreate elements from their wedding or engagement in our space—the virtual tour helps plan these personalized touches that make anniversary celebrations deeply emotional and memorable.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-purple-700">Privacy and Exclusivity for Your Milestone</h3>
            <p className="text-gray-700 leading-relaxed">
              Anniversary celebrations deserve privacy and exclusivity. The virtual tour showcases spaces reserved entirely for your celebration. Unlike busy restaurants where other guests surround you, HIVY provides intimate settings where you can share private moments, exchange anniversary gifts, and reminisce about your journey together without interruption. The exclusive access ensures your milestone celebration receives the attention and privacy it deserves.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-purple-700">How Virtual Tour Helps Surprise Anniversary Planning</h3>
            <p className="text-gray-700 leading-relaxed">
              Planning a surprise anniversary celebration requires secrecy and careful coordination. The virtual tour enables one partner to explore the venue, plan every detail, and coordinate with our team—all without the other knowing. You can share screenshots with our team via WhatsApp, discuss decoration placement, and arrange personalized elements while maintaining complete surprise. The virtual tour becomes your secret planning tool for orchestrating an unforgettable anniversary surprise.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-purple-700">Venue Transformation for Anniversary Celebrations</h3>
            <p className="text-gray-700 leading-relaxed">
              While the virtual tour shows our elegant base venue, imagine the transformation for your anniversary. Our team creates romantic setups featuring abundant candles, fresh flowers in your preferred colors, fairy lights creating magical sparkle, and personalized elements like your wedding photographs, anniversary numbers, and custom messages. The sophisticated venue becomes a tribute to your love story, beautifully decorated to honor your milestone.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-purple-700">Why Couples Love Online Venue Preview</h3>
            <p className="text-gray-700 leading-relaxed">
              HIVY's virtual tour accommodates modern couples with busy schedules. Explore our anniversary venue during lunch breaks, late evenings, or weekend mornings. Couples in long-distance situations for work can explore together through video calls, contributing equally to anniversary planning decisions. The virtual tour democratizes venue exploration, making it accessible regardless of time constraints or physical location.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-purple-700">Scheduling In-Person Visits</h3>
            <p className="text-gray-700 leading-relaxed">
              Many couples prefer supplementing the virtual tour with an in-person visit before their anniversary. Contact us to schedule a venue walkthrough where you can experience the ambiance firsthand, discuss menu preferences, and finalize decoration arrangements. In-person visits are particularly valuable for significant milestones like silver or golden anniversaries, where couples want every detail perfected.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-purple-700">Booking Your Anniversary Celebration</h3>
            <p className="text-gray-700 leading-relaxed">
              Ready to book your anniversary celebration after exploring our virtual tour? Contact us via WhatsApp at 9727027278 or submit an inquiry through our booking form. Share your anniversary date, how many years you're celebrating, preferred package, and any special requests—whether that's recreating your wedding setup, incorporating specific flowers, or arranging a surprise element. Our team will confirm availability, provide a detailed quote, and help create an anniversary celebration that honors your unique love story beautifully.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Everything you need to know about our virtual tour</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {virtualTourFaqs.map((faq, index) => (
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
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
    </>
  );
}
