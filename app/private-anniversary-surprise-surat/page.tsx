import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "private-anniversary-surprise-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Private Anniversary Surprise Surat | Couples Only",
  description: keyword?.metaDescription || "Plan a private anniversary surprise in Surat. Private couple experience at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/private-anniversary-surprise-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Private Anniversary Surprise Surat | Couples Only",
    description: keyword?.metaDescription || "Plan a private anniversary surprise in Surat. Private couple experience at HIVY.",
    url: "https://anniversarydinnersurat.com/private-anniversary-surprise-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
