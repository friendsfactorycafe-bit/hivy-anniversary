import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "31th-anniversary-celebration-for-partner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "31th Anniversary Celebration For Partner Surat | Private Couple Setup",
  description: keyword?.metaDescription || "Book a 31th anniversary celebration for your partner in Surat. Romantic private experience at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/31th-anniversary-celebration-for-partner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "31th Anniversary Celebration For Partner Surat | Private Couple Setup",
    description: keyword?.metaDescription || "Book a 31th anniversary celebration for your partner in Surat. Romantic private experience at HIVY.",
    url: "https://anniversarydinnersurat.com/31th-anniversary-celebration-for-partner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
