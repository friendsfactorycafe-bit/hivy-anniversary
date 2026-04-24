import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "december-anniversary-surprise-for-fiance-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "December Anniversary Surprise For Fiance Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Plan a December anniversary surprise for your fiance in Surat. Seasonal romantic setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/december-anniversary-surprise-for-fiance-surat" },
  openGraph: {
    title: keyword?.metaTitle || "December Anniversary Surprise For Fiance Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Plan a December anniversary surprise for your fiance in Surat. Seasonal romantic setup at HIVY.",
    url: "https://anniversarydinnersurat.com/december-anniversary-surprise-for-fiance-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
