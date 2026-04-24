import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "best-anniversary-gift-experience-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Best Anniversary Gift Experience Surat | Couple Gift",
  description: keyword?.metaDescription || "Find the best anniversary gift experience in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/best-anniversary-gift-experience-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Best Anniversary Gift Experience Surat | Couple Gift",
    description: keyword?.metaDescription || "Find the best anniversary gift experience in Surat. Private romantic setup at HIVY.",
    url: "https://anniversarydinnersurat.com/best-anniversary-gift-experience-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
