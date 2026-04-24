import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "march-anniversary-surprise-for-fiance-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "March Anniversary Surprise For Fiance Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Plan a March anniversary surprise for your fiance in Surat. Seasonal romantic setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/march-anniversary-surprise-for-fiance-surat" },
  openGraph: {
    title: keyword?.metaTitle || "March Anniversary Surprise For Fiance Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Plan a March anniversary surprise for your fiance in Surat. Seasonal romantic setup at HIVY.",
    url: "https://anniversarydinnersurat.com/march-anniversary-surprise-for-fiance-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
