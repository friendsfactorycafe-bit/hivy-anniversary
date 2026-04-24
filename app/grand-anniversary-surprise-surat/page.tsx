import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "grand-anniversary-surprise-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Grand Anniversary Surprise Surat | Couples Only",
  description: keyword?.metaDescription || "Plan a grand anniversary surprise in Surat. Private couple experience at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/grand-anniversary-surprise-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Grand Anniversary Surprise Surat | Couples Only",
    description: keyword?.metaDescription || "Plan a grand anniversary surprise in Surat. Private couple experience at HIVY.",
    url: "https://anniversarydinnersurat.com/grand-anniversary-surprise-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
