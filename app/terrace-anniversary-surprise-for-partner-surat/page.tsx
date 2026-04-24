import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "terrace-anniversary-surprise-for-partner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Terrace Anniversary Surprise For Partner Surat | Private Setup",
  description: keyword?.metaDescription || "Book terrace anniversary surprise for your partner in Surat. Private romantic experience at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/terrace-anniversary-surprise-for-partner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Terrace Anniversary Surprise For Partner Surat | Private Setup",
    description: keyword?.metaDescription || "Book terrace anniversary surprise for your partner in Surat. Private romantic experience at HIVY.",
    url: "https://anniversarydinnersurat.com/terrace-anniversary-surprise-for-partner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
