import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "candlelight-anniversary-dinner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Candlelight Anniversary Dinner Surat | Couples Only",
  description: keyword?.metaDescription || "Plan a candlelight anniversary dinner in Surat. Private couple experience at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/candlelight-anniversary-dinner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Candlelight Anniversary Dinner Surat | Couples Only",
    description: keyword?.metaDescription || "Plan a candlelight anniversary dinner in Surat. Private couple experience at HIVY.",
    url: "https://anniversarydinnersurat.com/candlelight-anniversary-dinner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
