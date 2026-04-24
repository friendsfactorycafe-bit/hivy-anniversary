import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "july-anniversary-surprise-for-husband-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "July Anniversary Surprise For Husband Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Plan a July anniversary surprise for your husband in Surat. Seasonal romantic setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/july-anniversary-surprise-for-husband-surat" },
  openGraph: {
    title: keyword?.metaTitle || "July Anniversary Surprise For Husband Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Plan a July anniversary surprise for your husband in Surat. Seasonal romantic setup at HIVY.",
    url: "https://anniversarydinnersurat.com/july-anniversary-surprise-for-husband-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
