import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "indoor-anniversary-surprise-for-soulmate-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Indoor Anniversary Surprise For Soulmate Surat | Private Setup",
  description: keyword?.metaDescription || "Book indoor anniversary surprise for your soulmate in Surat. Private romantic experience at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/indoor-anniversary-surprise-for-soulmate-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Indoor Anniversary Surprise For Soulmate Surat | Private Setup",
    description: keyword?.metaDescription || "Book indoor anniversary surprise for your soulmate in Surat. Private romantic experience at HIVY.",
    url: "https://anniversarydinnersurat.com/indoor-anniversary-surprise-for-soulmate-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
