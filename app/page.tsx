/**
 * MAIN PAGE - HIVY ANNIVERSARY - SURAT'S PREMIER ANNIVERSARY CELEBRATION VENUE
 * The main home page for HIVY Anniversary - Surat
 */

import { Metadata } from "next";
import FFCHomePage from "@/components/ffc-home-page";
import { siteConfig } from "@/lib/ffc-config";

// Dynamic metadata for HIVY Anniversary
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${siteConfig.name} | Best Anniversary Celebration Venue in Surat`,
    description: `${siteConfig.tagline}. Surat's #1 anniversary celebration venue. Book romantic anniversary dinners, surprise anniversary parties, milestone celebrations & private rooftop dining for couples. 100% private venue with 4.9★ rating.`,
    keywords: [
      'anniversary celebration surat',
      'wedding anniversary surat',
      'anniversary dinner surat',
      'anniversary surprise surat',
      'anniversary venues surat',
      'anniversary restaurants surat',
      'first anniversary celebration surat',
      '25th anniversary celebration surat',
      'silver jubilee celebration surat',
      'golden anniversary surat',
      'anniversary decoration surat',
      'romantic anniversary dinner surat',
      'anniversary planners surat',
      'anniversary party surat',
      'anniversary surprise for wife surat',
      'anniversary surprise for husband surat',
      'rooftop anniversary dinner surat',
      'private anniversary celebration surat',
      'luxury anniversary celebration surat',
      'intimate anniversary dinner surat',
      'anniversary photoshoot surat',
      'milestone anniversary surat',
      'couples anniversary celebration surat',
      'anniversary date night surat',
      'best anniversary restaurant surat',
      '10th anniversary celebration surat',
      '50th anniversary celebration surat',
      'anniversary weekend surat',
      'budget anniversary celebration surat',
      'anniversary celebration for parents surat'
    ],
    alternates: {
      canonical: siteConfig.website,
    },
    openGraph: {
      title: `${siteConfig.name} | Anniversary Celebrations`,
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