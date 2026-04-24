import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "anniversary-celebration-for-girlfriend-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Anniversary Celebration For Girlfriend Surat | Romantic Setup",
  description: keyword?.metaDescription || "Plan an anniversary celebration for your girlfriend in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/anniversary-celebration-for-girlfriend-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Anniversary Celebration For Girlfriend Surat | Romantic Setup",
    description: keyword?.metaDescription || "Plan an anniversary celebration for your girlfriend in Surat. Private romantic setup at HIVY.",
    url: "https://anniversarydinnersurat.com/anniversary-celebration-for-girlfriend-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
