import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "44th-anniversary-surprise-for-husband-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "44th Anniversary Surprise For Husband Surat | Romantic Private Setup",
  description: keyword?.metaDescription || "Plan a 44th anniversary surprise for your husband in Surat. Private candlelight setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/44th-anniversary-surprise-for-husband-surat" },
  openGraph: {
    title: keyword?.metaTitle || "44th Anniversary Surprise For Husband Surat | Romantic Private Setup",
    description: keyword?.metaDescription || "Plan a 44th anniversary surprise for your husband in Surat. Private candlelight setup at HIVY.",
    url: "https://anniversarydinnersurat.com/44th-anniversary-surprise-for-husband-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
