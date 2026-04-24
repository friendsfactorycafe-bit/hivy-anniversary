import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "garden-anniversary-surprise-for-girlfriend-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Garden Anniversary Surprise For Girlfriend Surat | Private Setup",
  description: keyword?.metaDescription || "Book garden anniversary surprise for your girlfriend in Surat. Private romantic experience at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/garden-anniversary-surprise-for-girlfriend-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Garden Anniversary Surprise For Girlfriend Surat | Private Setup",
    description: keyword?.metaDescription || "Book garden anniversary surprise for your girlfriend in Surat. Private romantic experience at HIVY.",
    url: "https://anniversarydinnersurat.com/garden-anniversary-surprise-for-girlfriend-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
