/**
 * HIVY ANNIVERSARY - SEO OPTIMIZED SITEMAP
 * Domain: anniversary.hivy.co.in
 * 
 * Total Pages: Anniversary-focused sitemap including:
 * - 1 Homepage (priority 1.0)
 * - 9 Static pages (priority 0.7-0.9)
 * - 1 Anniversary service category page (priority 0.9)
 * - 5 Package detail pages (priority 0.85)
 * - 35 Anniversary keyword pages (priority 0.8)
 * - 40 Surat area pages (priority 0.7)
 * - 24 Anniversary blog posts (priority 0.6)
 * 
 * Last Updated: January 2026
 */

import { MetadataRoute } from "next";
import { 
  getVisiblePackages,
  suratAreas
} from "@/lib/ffc-config";
import { anniversaryServiceCategories } from "@/lib/anniversary-config";
import { anniversaryBlogPosts } from "@/lib/anniversary-blogs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://anniversary.hivy.co.in";
  const currentDate = new Date().toISOString();
  
  const entries: MetadataRoute.Sitemap = [];
  
  // ==================== HOME PAGE ====================
  // Highest priority - main landing page
  entries.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 1.0,
  });
  
  // ==================== STATIC PAGES ====================
  // Core pages with regular updates
  const staticPages = [
    { path: '/about', priority: 0.8, freq: 'monthly' as const },
    { path: '/contact', priority: 0.9, freq: 'monthly' as const },
    { path: '/menu', priority: 0.8, freq: 'weekly' as const },
    { path: '/packages', priority: 0.9, freq: 'weekly' as const },
    { path: '/virtual-tour', priority: 0.7, freq: 'monthly' as const },
    { path: '/blog', priority: 0.8, freq: 'weekly' as const },
    { path: '/privacy-policy', priority: 0.3, freq: 'yearly' as const },
    { path: '/terms-conditions', priority: 0.3, freq: 'yearly' as const },
  ];
  
  staticPages.forEach((page) => {
    entries.push({
      url: `${baseUrl}${page.path}`,
      lastModified: currentDate,
      changeFrequency: page.freq,
      priority: page.priority,
    });
  });
  
  // ==================== ANNIVERSARY SERVICE KEYWORD PAGES ====================
  // All anniversary celebration keyword pages
  anniversaryServiceCategories.forEach((service) => {
    service.keywords.forEach((keyword) => {
      entries.push({
        url: `${baseUrl}/${keyword.slug}`,
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    });
  });
  
  // ==================== PACKAGE DETAIL PAGES ====================
  // Setup packages - high priority for conversions (exclude hidden packages)
  getVisiblePackages().forEach((pkg) => {
    entries.push({
      url: `${baseUrl}/packages/${pkg.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    });
  });
  
  // ==================== SURAT AREA PAGES ====================
  // Local SEO pages for different areas in Surat
  suratAreas.forEach((area) => {
    entries.push({
      url: `${baseUrl}/${area.slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });
  
  // ==================== ANNIVERSARY BLOG POSTS ====================
  // Anniversary-focused blog content pages
  anniversaryBlogPosts.forEach((post) => {
    entries.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.publishedAt,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  });
  
  return entries;
}
