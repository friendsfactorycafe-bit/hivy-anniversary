import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "february-anniversary-surprise-for-better-half-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "February Anniversary Surprise For Better Half Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Plan a February anniversary surprise for your better half in Surat. Seasonal romantic setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/february-anniversary-surprise-for-better-half-surat" },
  openGraph: {
    title: keyword?.metaTitle || "February Anniversary Surprise For Better Half Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Plan a February anniversary surprise for your better half in Surat. Seasonal romantic setup at HIVY.",
    url: "https://anniversarydinnersurat.com/february-anniversary-surprise-for-better-half-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
