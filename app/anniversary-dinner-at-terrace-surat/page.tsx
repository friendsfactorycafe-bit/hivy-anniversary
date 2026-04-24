import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "anniversary-dinner-at-terrace-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Anniversary Dinner At Terrace Surat | Exclusive Couple Venue",
  description: keyword?.metaDescription || "Book anniversary dinner at terrace in Surat. Private exclusive couple venue at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/anniversary-dinner-at-terrace-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Anniversary Dinner At Terrace Surat | Exclusive Couple Venue",
    description: keyword?.metaDescription || "Book anniversary dinner at terrace in Surat. Private exclusive couple venue at HIVY.",
    url: "https://anniversarydinnersurat.com/anniversary-dinner-at-terrace-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
