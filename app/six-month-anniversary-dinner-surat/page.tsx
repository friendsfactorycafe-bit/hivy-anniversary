import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "six-month-anniversary-dinner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Six Month Anniversary Dinner Surat | Romantic Private Dining",
  description: keyword?.metaDescription || "Book six month anniversary dinner in Surat. Candlelight dining experience at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/six-month-anniversary-dinner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Six Month Anniversary Dinner Surat | Romantic Private Dining",
    description: keyword?.metaDescription || "Book six month anniversary dinner in Surat. Candlelight dining experience at HIVY.",
    url: "https://anniversarydinnersurat.com/six-month-anniversary-dinner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
