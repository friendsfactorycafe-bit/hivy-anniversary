import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "45th-anniversary-celebration-for-wife-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "45th Anniversary Celebration For Wife Surat | Private Couple Setup",
  description: keyword?.metaDescription || "Book a 45th anniversary celebration for your wife in Surat. Romantic private experience at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/45th-anniversary-celebration-for-wife-surat" },
  openGraph: {
    title: keyword?.metaTitle || "45th Anniversary Celebration For Wife Surat | Private Couple Setup",
    description: keyword?.metaDescription || "Book a 45th anniversary celebration for your wife in Surat. Romantic private experience at HIVY.",
    url: "https://anniversarydinnersurat.com/45th-anniversary-celebration-for-wife-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
