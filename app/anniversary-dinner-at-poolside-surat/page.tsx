import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "anniversary-dinner-at-poolside-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Anniversary Dinner At Poolside Surat | Exclusive Couple Venue",
  description: keyword?.metaDescription || "Book anniversary dinner at poolside in Surat. Private exclusive couple venue at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/anniversary-dinner-at-poolside-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Anniversary Dinner At Poolside Surat | Exclusive Couple Venue",
    description: keyword?.metaDescription || "Book anniversary dinner at poolside in Surat. Private exclusive couple venue at HIVY.",
    url: "https://anniversarydinnersurat.com/anniversary-dinner-at-poolside-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
