import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "46th-anniversary-celebration-for-boyfriend-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "46th Anniversary Celebration For Boyfriend Surat | Private Couple Setup",
  description: keyword?.metaDescription || "Book a 46th anniversary celebration for your boyfriend in Surat. Romantic private experience at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/46th-anniversary-celebration-for-boyfriend-surat" },
  openGraph: {
    title: keyword?.metaTitle || "46th Anniversary Celebration For Boyfriend Surat | Private Couple Setup",
    description: keyword?.metaDescription || "Book a 46th anniversary celebration for your boyfriend in Surat. Romantic private experience at HIVY.",
    url: "https://anniversarydinnersurat.com/46th-anniversary-celebration-for-boyfriend-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
