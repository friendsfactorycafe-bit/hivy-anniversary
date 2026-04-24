import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "intimate-anniversary-celebration-for-lover-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Intimate Anniversary Celebration For Lover Surat | Private Setup",
  description: keyword?.metaDescription || "Book a intimate anniversary celebration for your lover in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/intimate-anniversary-celebration-for-lover-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Intimate Anniversary Celebration For Lover Surat | Private Setup",
    description: keyword?.metaDescription || "Book a intimate anniversary celebration for your lover in Surat. Private romantic setup at HIVY.",
    url: "https://anniversarydinnersurat.com/intimate-anniversary-celebration-for-lover-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
