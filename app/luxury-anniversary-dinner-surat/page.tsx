import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "luxury-anniversary-dinner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Luxury Anniversary Dinner Surat | Couples Only",
  description: keyword?.metaDescription || "Plan a luxury anniversary dinner in Surat. Private couple experience at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/luxury-anniversary-dinner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Luxury Anniversary Dinner Surat | Couples Only",
    description: keyword?.metaDescription || "Plan a luxury anniversary dinner in Surat. Private couple experience at HIVY.",
    url: "https://anniversarydinnersurat.com/luxury-anniversary-dinner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
