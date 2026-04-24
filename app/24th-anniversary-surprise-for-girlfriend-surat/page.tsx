import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "24th-anniversary-surprise-for-girlfriend-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "24th Anniversary Surprise For Girlfriend Surat | Romantic Private Setup",
  description: keyword?.metaDescription || "Plan a 24th anniversary surprise for your girlfriend in Surat. Private candlelight setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/24th-anniversary-surprise-for-girlfriend-surat" },
  openGraph: {
    title: keyword?.metaTitle || "24th Anniversary Surprise For Girlfriend Surat | Romantic Private Setup",
    description: keyword?.metaDescription || "Plan a 24th anniversary surprise for your girlfriend in Surat. Private candlelight setup at HIVY.",
    url: "https://anniversarydinnersurat.com/24th-anniversary-surprise-for-girlfriend-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
