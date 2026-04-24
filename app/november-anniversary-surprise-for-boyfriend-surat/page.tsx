import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "november-anniversary-surprise-for-boyfriend-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "November Anniversary Surprise For Boyfriend Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Plan a November anniversary surprise for your boyfriend in Surat. Seasonal romantic setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/november-anniversary-surprise-for-boyfriend-surat" },
  openGraph: {
    title: keyword?.metaTitle || "November Anniversary Surprise For Boyfriend Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Plan a November anniversary surprise for your boyfriend in Surat. Seasonal romantic setup at HIVY.",
    url: "https://anniversarydinnersurat.com/november-anniversary-surprise-for-boyfriend-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
