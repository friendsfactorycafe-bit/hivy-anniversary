import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "16th-anniversary-surprise-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "16th Anniversary Surprise Surat | Secret Romantic Setup",
  description: keyword?.metaDescription || "Plan a 16th anniversary surprise in Surat. Romantic private celebration at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/16th-anniversary-surprise-surat" },
  openGraph: {
    title: keyword?.metaTitle || "16th Anniversary Surprise Surat | Secret Romantic Setup",
    description: keyword?.metaDescription || "Plan a 16th anniversary surprise in Surat. Romantic private celebration at HIVY.",
    url: "https://anniversarydinnersurat.com/16th-anniversary-surprise-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
