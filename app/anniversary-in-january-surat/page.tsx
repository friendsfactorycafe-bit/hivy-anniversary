import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "anniversary-in-january-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Anniversary in January Surat | Romantic Couple Experience",
  description: keyword?.metaDescription || "Plan anniversary in January in Surat. Romantic private couple experience at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/anniversary-in-january-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Anniversary in January Surat | Romantic Couple Experience",
    description: keyword?.metaDescription || "Plan anniversary in January in Surat. Romantic private couple experience at HIVY.",
    url: "https://anniversarydinnersurat.com/anniversary-in-january-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
