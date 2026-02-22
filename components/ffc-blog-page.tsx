'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, Tag, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, BlogPost } from '@/lib/ffc-config';
import { getAllAnniversaryBlogs } from '@/lib/anniversary-blogs';

const blogFaqs = [
  { question: "What topics does the HIVY anniversary blog cover?", answer: "Our blog covers anniversary celebration ideas, milestone anniversary planning, romantic gesture inspiration, rekindling romance tips, wedding anniversary traditions, and real anniversary stories from couples." },
  { question: "Are there milestone anniversary guides?", answer: "Yes! We publish detailed guides for 25th, 50th, and other significant anniversaries, including gift traditions, celebration ideas, and how to honor these special milestones." },
  { question: "Can the blog help me plan an anniversary celebration?", answer: "Absolutely! Articles guide you through anniversary planning, from choosing the perfect date to personalizing decorations with your wedding memories." },
  { question: "How often is new content published?", answer: "We regularly add anniversary celebration ideas, romantic relationship content, and seasonal articles perfect for couples celebrating love." },
  { question: "Does the blog feature real anniversary stories?", answer: "Yes, with guest permission, we share real anniversary celebration experiences. These stories inspire and give you ideas for your own celebration." },
  { question: "Are there first anniversary planning tips?", answer: "Yes! We have articles specifically for first anniversaries, covering paper gift traditions, romantic gestures, and celebrating your first year of marriage." },
  { question: "Does the blog cover wedding anniversary traditions?", answer: "Absolutely! Learn about traditional and modern anniversary gift ideas for each year, from paper (1st) to diamond (60th) and beyond." },
  { question: "Are there surprise anniversary ideas?", answer: "Yes, many articles focus on surprising your spouse with anniversary celebrations, including planning tips and romantic reveal strategies." },
  { question: "Can I find rekindling romance articles?", answer: "Yes! We publish content on keeping romance alive, meaningful anniversary gestures, and maintaining strong relationship connections over the years." },
  { question: "Can I suggest anniversary blog topics?", answer: "We welcome suggestions! Share your questions or topic ideas with us and we may cover them in future anniversary articles." }
];

export default function FFCBlogPage() {
  const posts = getAllAnniversaryBlogs();
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1);

  const categories = Array.from(new Set(posts.map(p => p.category)));

  const blogFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": blogFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogFaqJsonLd) }} />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anniversarydinnersurat.com" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://anniversarydinnersurat.com/blog" }
            ]
          })
        }}
      />
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-violet-50 via-purple-50 to-violet-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-violet-200 text-violet-900 mb-4">
              <Heart className="w-3 h-3 mr-1" /> Anniversary Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Anniversary Celebration Ideas & Tips
            </h1>
            <p className="text-lg text-gray-600">
              Discover expert tips, milestone guides, and romantic ideas for planning the perfect anniversary celebration in Surat. 
              From first anniversaries to golden jubilees, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="cursor-pointer hover:bg-violet-100 px-4 py-2">
              All Posts
            </Badge>
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="cursor-pointer hover:bg-violet-100 px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Rich SEO Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-gray-900">
                Anniversary Celebration Wisdom
              </h2>
              <p>
                Every anniversary marks another chapter in your love story, and celebrating it deserves thoughtful attention and heartfelt planning. The HIVY Anniversary blog is your trusted companion for honoring relationship milestones in Surat. Whether you're planning a <strong>first anniversary celebration</strong>, organizing a <strong>silver jubilee surprise</strong>, or preparing for a <strong>golden anniversary commemoration</strong>, our collection of articles provides the wisdom and inspiration you need. Each piece is crafted by our anniversary specialists — the same team that has helped countless couples celebrate decades of love at Surat's most cherished private celebration venue.
              </p>
              <p>
                What distinguishes our anniversary blog from generic celebration websites? <strong>Deep understanding of lasting love.</strong> Every suggestion you encounter here reflects genuine experiences from real anniversary celebrations at HIVY. When we recommend ways to incorporate wedding memories or suggest meaningful gesture ideas, it's because we've witnessed how these elements transform anniversary celebrations into profound reconnections. Our content draws from hundreds of successful milestone celebrations, offering wisdom that goes beyond surface-level party planning.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                What Our Anniversary Articles Offer
              </h3>
              <p>
                The HIVY Anniversary blog explores a comprehensive range of celebration topics designed specifically for <strong>couples honoring relationship milestones in Surat</strong>. Here's an overview of the content categories awaiting you:
              </p>
              <ul className="space-y-2 my-4">
                <li><strong>Milestone Anniversary Guides</strong> — Comprehensive planning resources for significant anniversaries like 25th Silver, 50th Golden, and 60th Diamond celebrations, including traditional gift ideas and celebration concepts.</li>
                <li><strong>Wedding Anniversary Traditions</strong> — Detailed explanations of traditional and modern anniversary gifts for each year, helping you choose meaningful presents that honor your journey.</li>
                <li><strong>Romantic Gesture Inspiration</strong> — Creative ideas for expressing love on your anniversary, from heartfelt letters to surprise recreations of your wedding day moments.</li>
                <li><strong>Rekindling Romance Tips</strong> — Expert advice on keeping the spark alive, planning meaningful date nights, and deepening your connection with each passing year.</li>
                <li><strong>Celebration Planning Resources</strong> — Practical guides for organizing anniversary celebrations, from intimate dinners to elaborate surprise parties.</li>
                <li><strong>Real Anniversary Stories</strong> — Inspiring narratives of actual milestone celebrations at HIVY, showcasing how couples honor their enduring love.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Why We Share Anniversary Wisdom
              </h3>
              <p>
                Not every anniversary celebration takes place at HIVY, and we genuinely appreciate that reality. Sometimes you simply need inspiration — a meaningful idea that helps you honor your marriage at home, at your wedding venue, or at any location precious to your relationship. Our blog fulfills that need generously. We share our anniversary celebration expertise freely because we believe that when couples throughout Surat celebrate their milestones more thoughtfully, love flourishes everywhere.
              </p>
              <p>
                Of course, if you discover an idea that moves you and realize it would be absolutely perfect in one of our elegantly decorated private celebration spaces, we're always just a <a href={`tel:${siteConfig.phone}`} className="text-purple-700 font-bold hover:underline">phone call</a> or <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold hover:underline">WhatsApp message</a> away. Many of our most touching anniversary celebrations began with a spouse reading our blog and thinking, "This is exactly how I want to celebrate our years together."
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Trending Anniversary Ideas in Surat
              </h3>
              <p>
                Based on recent anniversary celebrations at HIVY and the heartfelt queries couples share with us, here are the celebration trends inspiring Surat couples right now:
              </p>
              <ol className="space-y-2 my-4 list-decimal list-inside">
                <li><strong>Wedding Day Recreations</strong> — Anniversary celebrations that recreate elements of the wedding day, from similar décor themes to memorable food choices, bringing couples back to where it all began.</li>
                <li><strong>Memory Lane Decorations</strong> — Celebration setups featuring photographs and mementos from throughout the relationship, creating a visual journey through years of shared love.</li>
                <li><strong>Surprise Anniversary Reveals</strong> — One spouse secretly planning an elaborate anniversary celebration, leading the other blindfolded to a beautifully prepared venue.</li>
                <li><strong>Vow Renewal Celebrations</strong> — Intimate ceremonies where couples reaffirm their commitment, often combined with milestone anniversary celebrations.</li>
                <li><strong>Legacy Gift Experiences</strong> — Anniversary celebrations that include creating meaningful keepsakes, from custom jewelry to commissioned artwork celebrating the relationship.</li>
              </ol>
              <p>
                Explore our articles below for detailed guides on embracing these trends and discovering countless more anniversary celebration possibilities. Every article is crafted to provide meaningful, actionable wisdom you can apply immediately — whether you're planning a celebration at HIVY or anywhere else in Surat.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Link href={`/blog/${featuredPost.slug}`}>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-violet-700">
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4 border-violet-300 text-violet-700">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-violet-800 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime} read
                    </span>
                  </div>
                  <Button className="w-fit bg-gradient-to-r from-violet-700 to-purple-600 hover:from-violet-800 hover:to-purple-700">
                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Anniversary Blog FAQs
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {blogFaqs.map((faq, index) => (
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-violet-700 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Plan Your Anniversary Celebration?
          </h2>
          <p className="text-violet-100 mb-8 max-w-2xl mx-auto">
            Turn your special anniversary into unforgettable memories at HIVY Anniversary, 
            Surat's premier private venue anniversary celebration venue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-violet-700 hover:bg-violet-50"
              asChild
            >
              <Link href="/packages">View Packages</Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white"
              asChild
            >
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                Book on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}

// Blog Card Component
function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 group">
        <div className="relative h-48">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <Badge className="absolute top-3 left-3 bg-violet-700">
            {post.category}
          </Badge>
        </div>
        <CardContent className="p-5">
          <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-violet-700 transition-colors">
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
  );
}
