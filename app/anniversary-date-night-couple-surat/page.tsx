import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "anniversary-date-night-couple-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Anniversary Date Night Couples Surat | Romantic Evening",
  description: keyword?.metaDescription || "Plan anniversary date night for couples in Surat. Romantic private evening at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/anniversary-date-night-couple-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Anniversary Date Night Couples Surat | Romantic Evening",
    description: keyword?.metaDescription || "Plan anniversary date night for couples in Surat. Romantic private evening at HIVY.",
    url: "https://anniversarydinnersurat.com/anniversary-date-night-couple-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
