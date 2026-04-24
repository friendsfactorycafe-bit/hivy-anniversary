import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "midnight-anniversary-dinner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Midnight Anniversary Dinner Surat | Couples Only",
  description: keyword?.metaDescription || "Plan a midnight anniversary dinner in Surat. Private couple experience at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/midnight-anniversary-dinner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Midnight Anniversary Dinner Surat | Couples Only",
    description: keyword?.metaDescription || "Plan a midnight anniversary dinner in Surat. Private couple experience at HIVY.",
    url: "https://anniversarydinnersurat.com/midnight-anniversary-dinner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
