import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "17th-anniversary-surprise-for-wife-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "17th Anniversary Surprise For Wife Surat | Romantic Private Setup",
  description: keyword?.metaDescription || "Plan a 17th anniversary surprise for your wife in Surat. Private candlelight setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/17th-anniversary-surprise-for-wife-surat" },
  openGraph: {
    title: keyword?.metaTitle || "17th Anniversary Surprise For Wife Surat | Romantic Private Setup",
    description: keyword?.metaDescription || "Plan a 17th anniversary surprise for your wife in Surat. Private candlelight setup at HIVY.",
    url: "https://anniversarydinnersurat.com/17th-anniversary-surprise-for-wife-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
