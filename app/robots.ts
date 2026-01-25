/**
 * HIVY - PLACE FOR CELEBRATIONS - SEO OPTIMIZED ROBOTS.TXT
 * Domain: hivy.co.in
 * 
 * Configuration for search engine crawlers:
 * - Allow all public pages
 * - Block admin, API, and private routes
 * - Specify sitemap location
 * - Set crawl delay for responsible crawling
 * 
 * Last Updated: January 2026
 */

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://hivy.co.in";
  
  return {
    rules: [
      {
        // Default rule for all crawlers
        userAgent: "*",
        allow: [
          "/",
          "/about",
          "/contact",
          "/menu",
          "/packages",
          "/packages/*",
          "/services",
          "/services/*",
          "/blog",
          "/blog/*",
          "/virtual-tour",
        ],
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          "/_next/",
          "/leads",
          "/*.json$",
        ],
      },
      {
        // Google crawler - full access
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/", "/leads"],
      },
      {
        // Google Images crawler
        userAgent: "Googlebot-Image",
        allow: ["/images/", "/packages/"],
        disallow: ["/api/", "/admin/"],
      },
      {
        // Bing crawler
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/", "/leads"],
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
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
