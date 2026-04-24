import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "43th-anniversary-celebration-for-better-half-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "43th Anniversary Celebration For Better Half Surat | Private Couple Setup",
  description: keyword?.metaDescription || "Book a 43th anniversary celebration for your better half in Surat. Romantic private experience at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/43th-anniversary-celebration-for-better-half-surat" },
  openGraph: {
    title: keyword?.metaTitle || "43th Anniversary Celebration For Better Half Surat | Private Couple Setup",
    description: keyword?.metaDescription || "Book a 43th anniversary celebration for your better half in Surat. Romantic private experience at HIVY.",
    url: "https://anniversarydinnersurat.com/43th-anniversary-celebration-for-better-half-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
