import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "48th-anniversary-celebration-for-husband-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "48th Anniversary Celebration For Husband Surat | Private Couple Setup",
  description: keyword?.metaDescription || "Book a 48th anniversary celebration for your husband in Surat. Romantic private experience at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/48th-anniversary-celebration-for-husband-surat" },
  openGraph: {
    title: keyword?.metaTitle || "48th Anniversary Celebration For Husband Surat | Private Couple Setup",
    description: keyword?.metaDescription || "Book a 48th anniversary celebration for your husband in Surat. Romantic private experience at HIVY.",
    url: "https://anniversarydinnersurat.com/48th-anniversary-celebration-for-husband-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
