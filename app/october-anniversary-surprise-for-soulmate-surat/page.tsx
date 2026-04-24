import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "october-anniversary-surprise-for-soulmate-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "October Anniversary Surprise For Soulmate Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Plan a October anniversary surprise for your soulmate in Surat. Seasonal romantic setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/october-anniversary-surprise-for-soulmate-surat" },
  openGraph: {
    title: keyword?.metaTitle || "October Anniversary Surprise For Soulmate Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Plan a October anniversary surprise for your soulmate in Surat. Seasonal romantic setup at HIVY.",
    url: "https://anniversarydinnersurat.com/october-anniversary-surprise-for-soulmate-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
