import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "exclusive-anniversary-surprise-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Exclusive Anniversary Surprise Surat | Couples Only",
  description: keyword?.metaDescription || "Plan a exclusive anniversary surprise in Surat. Private couple experience at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/exclusive-anniversary-surprise-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Exclusive Anniversary Surprise Surat | Couples Only",
    description: keyword?.metaDescription || "Plan a exclusive anniversary surprise in Surat. Private couple experience at HIVY.",
    url: "https://anniversarydinnersurat.com/exclusive-anniversary-surprise-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
