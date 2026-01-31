/**
 * HIVY ANNIVERSARY - SEO OPTIMIZED ROBOTS.TXT
 * Domain: anniversary.hivy.co.in
 * 
 * Configuration for search engine crawlers:
 * - Allow all public pages including anniversary keywords & area pages
 * - Block admin, API, and private routes
 * - Specify sitemap location
 * - Optimized for maximum SEO visibility for anniversary celebrations
 * 
 * Total Indexable Pages: ~100
 * - Homepage, Static pages
 * - 35 Anniversary keyword pages
 * - 40 Surat area pages  
 * - 6 Package pages
 * - 24 Anniversary blog posts
 * 
 * Last Updated: January 2026
 */

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://anniversary.hivy.co.in";
  
  return {
    rules: [
      {
        // Default rule for all crawlers
        userAgent: "*",
        allow: [
          "/",
          // Static pages
          "/about",
          "/contact",
          "/menu",
          "/virtual-tour",
          "/privacy-policy",
          "/terms-conditions",
          // Package pages
          "/packages",
          "/packages/*",
          // Service pages
          "/services",
          "/services/*",
          // Blog pages
          "/blog",
          "/blog/*",
          // Anniversary keyword pages
          "/anniversary-*",
          "/first-*",
          "/2nd-*",
          "/5th-*",
          "/10th-*",
          "/15th-*",
          "/20th-*",
          "/25th-*",
          "/50th-*",
          "/silver-*",
          "/golden-*",
          "/diamond-*",
          "/wedding-*",
          "/romantic-*",
          "/couple-*",
          "/surprise-*",
          "/private-*",
          "/intimate-*",
          "/luxury-*",
          "/budget-*",
          "/rooftop-*",
          "/outdoor-*",
          "/last-minute-*",
          // Surat area pages
          "/adajan-surat",
          "/athwa-surat",
          "/vesu-surat",
          "/piplod-surat",
          "/city-light-surat",
          "/pal-surat",
          "/ghod-dod-road-surat",
          "/ring-road-surat",
          "/vip-road-surat",
          "/dumas-road-surat",
          "/katargam-surat",
          "/varachha-surat",
          "/udhna-surat",
          "/pandesara-surat",
          "/sachin-surat",
          "/sarthana-surat",
          "/magdalla-surat",
          "/althan-surat",
          "/bhatar-surat",
          "/rander-surat",
          "/jahangirpura-surat",
          "/hajira-surat",
          "/olpad-surat",
          "/kadodara-surat",
          "/kim-surat",
          "/amroli-surat",
          "/limbayat-surat",
          "/kapodra-surat",
          "/bamroli-surat",
          "/parvat-patiya-surat",
          "/majura-gate-surat",
          "/nanpura-surat",
          "/gopipura-surat",
          "/begumpura-surat",
          "/mahidharpura-surat",
          "/sagrampura-surat",
          "/dindoli-surat",
          "/mota-varachha-surat",
          "/new-city-light-surat",
          "/parle-point-surat",
        ],
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          "/_next/",
          "/leads/",
          "/*.json$",
          "/*.js$",
          "/*.css$",
        ],
      },
      {
        // Google crawler - full access
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/leads/"],
      },
      {
        // Google Images crawler
        userAgent: "Googlebot-Image",
        allow: ["/images/", "/packages/", "/public/"],
        disallow: ["/api/", "/admin/"],
      },
      {
        // Bing crawler
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/leads/"],
      },
      {
        // Yandex crawler
        userAgent: "Yandex",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/leads/"],
      },
      {
        // DuckDuckGo crawler
        userAgent: "DuckDuckBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/leads/"],
      },
      {
        // Facebook crawler for social sharing
        userAgent: "facebookexternalhit",
        allow: "/",
      },
      {
        // Twitter crawler for cards
        userAgent: "Twitterbot",
        allow: "/",
      },
      {
        // LinkedIn crawler
        userAgent: "LinkedInBot",
        allow: "/",
      },
      {
        // WhatsApp crawler for link previews
        userAgent: "WhatsApp",
        allow: "/",
      },
      {
        // Instagram crawler
        userAgent: "Instagram",
        allow: "/",
      },
      {
        // Pinterest crawler
        userAgent: "Pinterestbot",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
