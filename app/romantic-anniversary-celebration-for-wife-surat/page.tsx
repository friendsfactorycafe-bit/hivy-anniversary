import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "romantic-anniversary-celebration-for-wife-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Romantic Anniversary Celebration For Wife Surat | Private Setup",
  description: keyword?.metaDescription || "Book a romantic anniversary celebration for your wife in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/romantic-anniversary-celebration-for-wife-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Romantic Anniversary Celebration For Wife Surat | Private Setup",
    description: keyword?.metaDescription || "Book a romantic anniversary celebration for your wife in Surat. Private romantic setup at HIVY.",
    url: "https://anniversarydinnersurat.com/romantic-anniversary-celebration-for-wife-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
