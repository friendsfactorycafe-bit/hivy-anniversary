/**
 * MAIN PAGE - HIVY - PLACE FOR CELEBRATIONS SURAT
 * The main home page for HIVY - Surat
 */

import { Metadata } from "next";
import FFCHomePage from "@/components/ffc-home-page";
import { siteConfig } from "@/lib/ffc-config";

// Dynamic metadata for HIVY
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${siteConfig.name} | Romantic Celebrations for Couples in Surat`,
    description: `${siteConfig.tagline}. Premium romantic celebration services for couples in Surat. Candlelight dinners, birthday surprises, anniversary celebrations, proposals & more.`,
    keywords: [
      'hivy surat',
      'place for celebrations surat',
      'romantic celebration surat',
      'candlelight dinner surat',
      'birthday surprise surat',
      'anniversary celebration surat',
      'couples only cafe surat',
      'rooftop dinner surat',
      'private dining surat'
    ],
    alternates: {
      canonical: siteConfig.website,
    },
    openGraph: {
      title: `${siteConfig.name} | Romantic Celebrations`,
      description: siteConfig.tagline,
      url: siteConfig.website,
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.name,
    },
  };
}

export default function Home() {
  return <FFCHomePage />;
}