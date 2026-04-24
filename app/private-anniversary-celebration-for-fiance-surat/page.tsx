import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "private-anniversary-celebration-for-fiance-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Private Anniversary Celebration For Fiance Surat | Private Setup",
  description: keyword?.metaDescription || "Book a private anniversary celebration for your fiance in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/private-anniversary-celebration-for-fiance-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Private Anniversary Celebration For Fiance Surat | Private Setup",
    description: keyword?.metaDescription || "Book a private anniversary celebration for your fiance in Surat. Private romantic setup at HIVY.",
    url: "https://anniversarydinnersurat.com/private-anniversary-celebration-for-fiance-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
