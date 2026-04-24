import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "anniversary-surprise-for-soulmate-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Anniversary Surprise For Soulmate Surat | Romantic Setup",
  description: keyword?.metaDescription || "Plan an anniversary surprise for your soulmate in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/anniversary-surprise-for-soulmate-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Anniversary Surprise For Soulmate Surat | Romantic Setup",
    description: keyword?.metaDescription || "Plan an anniversary surprise for your soulmate in Surat. Private romantic setup at HIVY.",
    url: "https://anniversarydinnersurat.com/anniversary-surprise-for-soulmate-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
