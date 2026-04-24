import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "38th-anniversary-celebration-for-girlfriend-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "38th Anniversary Celebration For Girlfriend Surat | Private Couple Setup",
  description: keyword?.metaDescription || "Book a 38th anniversary celebration for your girlfriend in Surat. Romantic private experience at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/38th-anniversary-celebration-for-girlfriend-surat" },
  openGraph: {
    title: keyword?.metaTitle || "38th Anniversary Celebration For Girlfriend Surat | Private Couple Setup",
    description: keyword?.metaDescription || "Book a 38th anniversary celebration for your girlfriend in Surat. Romantic private experience at HIVY.",
    url: "https://anniversarydinnersurat.com/38th-anniversary-celebration-for-girlfriend-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
