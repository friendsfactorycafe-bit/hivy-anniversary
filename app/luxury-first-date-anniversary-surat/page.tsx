import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "luxury-first-date-anniversary-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Luxury First Date Anniversary Surat | Romantic Couple",
  description: keyword?.metaDescription || "Plan a luxury first date anniversary in Surat. Romantic private setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/luxury-first-date-anniversary-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Luxury First Date Anniversary Surat | Romantic Couple",
    description: keyword?.metaDescription || "Plan a luxury first date anniversary in Surat. Romantic private setup at HIVY.",
    url: "https://anniversarydinnersurat.com/luxury-first-date-anniversary-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
