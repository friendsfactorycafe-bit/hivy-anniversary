import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "april-anniversary-surprise-for-lover-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "April Anniversary Surprise For Lover Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Plan a April anniversary surprise for your lover in Surat. Seasonal romantic setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/april-anniversary-surprise-for-lover-surat" },
  openGraph: {
    title: keyword?.metaTitle || "April Anniversary Surprise For Lover Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Plan a April anniversary surprise for your lover in Surat. Seasonal romantic setup at HIVY.",
    url: "https://anniversarydinnersurat.com/april-anniversary-surprise-for-lover-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
