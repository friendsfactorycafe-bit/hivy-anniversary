import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "20th-anniversary-surprise-for-boyfriend-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "20th Anniversary Surprise For Boyfriend Surat | Romantic Private Setup",
  description: keyword?.metaDescription || "Plan a 20th anniversary surprise for your boyfriend in Surat. Private candlelight setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/20th-anniversary-surprise-for-boyfriend-surat" },
  openGraph: {
    title: keyword?.metaTitle || "20th Anniversary Surprise For Boyfriend Surat | Romantic Private Setup",
    description: keyword?.metaDescription || "Plan a 20th anniversary surprise for your boyfriend in Surat. Private candlelight setup at HIVY.",
    url: "https://anniversarydinnersurat.com/20th-anniversary-surprise-for-boyfriend-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
