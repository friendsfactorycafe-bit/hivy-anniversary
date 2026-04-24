import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "affordable-anniversary-dinner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Affordable Anniversary Dinner Surat | Budget Couple Dining",
  description: keyword?.metaDescription || "Book affordable anniversary dinner in Surat. Budget-friendly romantic dining at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/affordable-anniversary-dinner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Affordable Anniversary Dinner Surat | Budget Couple Dining",
    description: keyword?.metaDescription || "Book affordable anniversary dinner in Surat. Budget-friendly romantic dining at HIVY.",
    url: "https://anniversarydinnersurat.com/affordable-anniversary-dinner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
