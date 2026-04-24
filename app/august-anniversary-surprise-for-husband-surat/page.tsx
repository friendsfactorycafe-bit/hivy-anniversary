import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "august-anniversary-surprise-for-husband-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "August Anniversary Surprise For Husband Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Plan a August anniversary surprise for your husband in Surat. Seasonal romantic setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/august-anniversary-surprise-for-husband-surat" },
  openGraph: {
    title: keyword?.metaTitle || "August Anniversary Surprise For Husband Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Plan a August anniversary surprise for your husband in Surat. Seasonal romantic setup at HIVY.",
    url: "https://anniversarydinnersurat.com/august-anniversary-surprise-for-husband-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
