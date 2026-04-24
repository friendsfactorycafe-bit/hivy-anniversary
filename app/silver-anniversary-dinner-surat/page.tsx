import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "silver-anniversary-dinner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Silver Anniversary Dinner Surat | Romantic Private Dining",
  description: keyword?.metaDescription || "Book silver anniversary dinner in Surat. Candlelight dining experience at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/silver-anniversary-dinner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Silver Anniversary Dinner Surat | Romantic Private Dining",
    description: keyword?.metaDescription || "Book silver anniversary dinner in Surat. Candlelight dining experience at HIVY.",
    url: "https://anniversarydinnersurat.com/silver-anniversary-dinner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
