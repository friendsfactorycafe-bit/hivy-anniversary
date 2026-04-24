import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "49th-anniversary-celebration-for-fiance-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "49th Anniversary Celebration For Fiance Surat | Private Couple Setup",
  description: keyword?.metaDescription || "Book a 49th anniversary celebration for your fiance in Surat. Romantic private experience at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/49th-anniversary-celebration-for-fiance-surat" },
  openGraph: {
    title: keyword?.metaTitle || "49th Anniversary Celebration For Fiance Surat | Private Couple Setup",
    description: keyword?.metaDescription || "Book a 49th anniversary celebration for your fiance in Surat. Romantic private experience at HIVY.",
    url: "https://anniversarydinnersurat.com/49th-anniversary-celebration-for-fiance-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
