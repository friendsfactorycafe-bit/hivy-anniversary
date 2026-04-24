import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "44th-anniversary-celebration-for-lover-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "44th Anniversary Celebration For Lover Surat | Private Couple Setup",
  description: keyword?.metaDescription || "Book a 44th anniversary celebration for your lover in Surat. Romantic private experience at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/44th-anniversary-celebration-for-lover-surat" },
  openGraph: {
    title: keyword?.metaTitle || "44th Anniversary Celebration For Lover Surat | Private Couple Setup",
    description: keyword?.metaDescription || "Book a 44th anniversary celebration for your lover in Surat. Romantic private experience at HIVY.",
    url: "https://anniversarydinnersurat.com/44th-anniversary-celebration-for-lover-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
