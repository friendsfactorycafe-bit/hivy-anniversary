import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "grand-anniversary-celebration-for-better-half-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Grand Anniversary Celebration For Better Half Surat | Private Setup",
  description: keyword?.metaDescription || "Book a grand anniversary celebration for your better-half in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/grand-anniversary-celebration-for-better-half-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Grand Anniversary Celebration For Better Half Surat | Private Setup",
    description: keyword?.metaDescription || "Book a grand anniversary celebration for your better-half in Surat. Private romantic setup at HIVY.",
    url: "https://anniversarydinnersurat.com/grand-anniversary-celebration-for-better-half-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
