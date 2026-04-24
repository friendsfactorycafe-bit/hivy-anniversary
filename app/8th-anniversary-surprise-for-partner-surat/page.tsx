import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "8th-anniversary-surprise-for-partner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "8th Anniversary Surprise For Partner Surat | Romantic Private Setup",
  description: keyword?.metaDescription || "Plan a 8th anniversary surprise for your partner in Surat. Private candlelight setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/8th-anniversary-surprise-for-partner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "8th Anniversary Surprise For Partner Surat | Romantic Private Setup",
    description: keyword?.metaDescription || "Plan a 8th anniversary surprise for your partner in Surat. Private candlelight setup at HIVY.",
    url: "https://anniversarydinnersurat.com/8th-anniversary-surprise-for-partner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
