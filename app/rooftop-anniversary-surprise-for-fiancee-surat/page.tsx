import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "rooftop-anniversary-surprise-for-fiancee-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Rooftop Anniversary Surprise For Fiancee Surat | Private Setup",
  description: keyword?.metaDescription || "Book rooftop anniversary surprise for your fiancee in Surat. Private romantic experience at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/rooftop-anniversary-surprise-for-fiancee-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Rooftop Anniversary Surprise For Fiancee Surat | Private Setup",
    description: keyword?.metaDescription || "Book rooftop anniversary surprise for your fiancee in Surat. Private romantic experience at HIVY.",
    url: "https://anniversarydinnersurat.com/rooftop-anniversary-surprise-for-fiancee-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
