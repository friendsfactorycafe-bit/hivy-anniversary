import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "midnight-anniversary-celebration-for-fiancee-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Midnight Anniversary Celebration For Fiancee Surat | Private Setup",
  description: keyword?.metaDescription || "Book a midnight anniversary celebration for your fiancee in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/midnight-anniversary-celebration-for-fiancee-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Midnight Anniversary Celebration For Fiancee Surat | Private Setup",
    description: keyword?.metaDescription || "Book a midnight anniversary celebration for your fiancee in Surat. Private romantic setup at HIVY.",
    url: "https://anniversarydinnersurat.com/midnight-anniversary-celebration-for-fiancee-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
