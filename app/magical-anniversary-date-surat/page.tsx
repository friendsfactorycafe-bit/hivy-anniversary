import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "magical-anniversary-date-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Magical Anniversary Date Surat | Couples Only",
  description: keyword?.metaDescription || "Plan a magical anniversary date in Surat. Private couple experience at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/magical-anniversary-date-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Magical Anniversary Date Surat | Couples Only",
    description: keyword?.metaDescription || "Plan a magical anniversary date in Surat. Private couple experience at HIVY.",
    url: "https://anniversarydinnersurat.com/magical-anniversary-date-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
