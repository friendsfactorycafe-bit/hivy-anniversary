import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "10th-anniversary-surprise-for-lover-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "10th Anniversary Surprise For Lover Surat | Romantic Private Setup",
  description: keyword?.metaDescription || "Plan a 10th anniversary surprise for your lover in Surat. Private candlelight setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/10th-anniversary-surprise-for-lover-surat" },
  openGraph: {
    title: keyword?.metaTitle || "10th Anniversary Surprise For Lover Surat | Romantic Private Setup",
    description: keyword?.metaDescription || "Plan a 10th anniversary surprise for your lover in Surat. Private candlelight setup at HIVY.",
    url: "https://anniversarydinnersurat.com/10th-anniversary-surprise-for-lover-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
