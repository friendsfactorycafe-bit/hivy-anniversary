import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "37th-anniversary-surprise-for-fiance-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "37th Anniversary Surprise For Fiance Surat | Romantic Private Setup",
  description: keyword?.metaDescription || "Plan a 37th anniversary surprise for your fiance in Surat. Private candlelight setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/37th-anniversary-surprise-for-fiance-surat" },
  openGraph: {
    title: keyword?.metaTitle || "37th Anniversary Surprise For Fiance Surat | Romantic Private Setup",
    description: keyword?.metaDescription || "Plan a 37th anniversary surprise for your fiance in Surat. Private candlelight setup at HIVY.",
    url: "https://anniversarydinnersurat.com/37th-anniversary-surprise-for-fiance-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
