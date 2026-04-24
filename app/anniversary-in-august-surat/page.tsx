import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "anniversary-in-august-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Anniversary in August Surat | Romantic Couple Experience",
  description: keyword?.metaDescription || "Plan anniversary in August in Surat. Romantic private couple experience at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/anniversary-in-august-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Anniversary in August Surat | Romantic Couple Experience",
    description: keyword?.metaDescription || "Plan anniversary in August in Surat. Romantic private couple experience at HIVY.",
    url: "https://anniversarydinnersurat.com/anniversary-in-august-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
