import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "anniversary-date-for-fiance-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Anniversary Date For Fiance Surat | Romantic Setup",
  description: keyword?.metaDescription || "Plan an anniversary date for your fiance in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/anniversary-date-for-fiance-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Anniversary Date For Fiance Surat | Romantic Setup",
    description: keyword?.metaDescription || "Plan an anniversary date for your fiance in Surat. Private romantic setup at HIVY.",
    url: "https://anniversarydinnersurat.com/anniversary-date-for-fiance-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
