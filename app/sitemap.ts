/**
 * HIVY - PLACE FOR CELEBRATIONS - SEO OPTIMIZED SITEMAP
 * Domain: hivy.co.in
 * 
 * Total Pages: Core pages including:
 * - 1 Homepage (priority 1.0)
 * - 7 Static pages (priority 0.8)
 * - 8 Service category pages (priority 0.9)
 * - 8 Package detail pages (priority 0.85)
 * 
 * Last Updated: January 2026
 */

import { MetadataRoute } from "next";
import { 
  serviceCategories, 
  packages
} from "@/lib/ffc-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://hivy.co.in";
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
    { path: '/services', priority: 0.9, freq: 'weekly' as const },
    { path: '/virtual-tour', priority: 0.7, freq: 'monthly' as const },
    { path: '/blog', priority: 0.8, freq: 'weekly' as const },
  ];
  
  staticPages.forEach((page) => {
    entries.push({
      url: `${baseUrl}${page.path}`,
      lastModified: currentDate,
      changeFrequency: page.freq,
      priority: page.priority,
    });
  });
  
  // ==================== SERVICE CATEGORY PAGES ====================
  // 8 main service categories - high priority
  serviceCategories.forEach((service) => {
    entries.push({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  });
  
  // ==================== PACKAGE DETAIL PAGES ====================
  // Setup packages - high priority for conversions
  packages.forEach((pkg) => {
    entries.push({
      url: `${baseUrl}/packages/${pkg.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    });
  });
  
  return entries;
}
