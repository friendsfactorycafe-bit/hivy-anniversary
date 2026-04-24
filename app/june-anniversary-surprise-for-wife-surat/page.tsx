import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "june-anniversary-surprise-for-wife-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "June Anniversary Surprise For Wife Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Plan a June anniversary surprise for your wife in Surat. Seasonal romantic setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/june-anniversary-surprise-for-wife-surat" },
  openGraph: {
    title: keyword?.metaTitle || "June Anniversary Surprise For Wife Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Plan a June anniversary surprise for your wife in Surat. Seasonal romantic setup at HIVY.",
    url: "https://anniversarydinnersurat.com/june-anniversary-surprise-for-wife-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
