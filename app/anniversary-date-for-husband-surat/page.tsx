import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "anniversary-date-for-husband-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Anniversary Date For Husband Surat | Romantic Setup",
  description: keyword?.metaDescription || "Plan an anniversary date for your husband in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/anniversary-date-for-husband-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Anniversary Date For Husband Surat | Romantic Setup",
    description: keyword?.metaDescription || "Plan an anniversary date for your husband in Surat. Private romantic setup at HIVY.",
    url: "https://anniversarydinnersurat.com/anniversary-date-for-husband-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
