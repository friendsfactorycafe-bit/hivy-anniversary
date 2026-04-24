import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "september-anniversary-celebration-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "September Anniversary Celebration Surat | Seasonal Romantic Setup",
  description: keyword?.metaDescription || "Celebrate anniversary in September in Surat. Seasonal romantic couple setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/september-anniversary-celebration-surat" },
  openGraph: {
    title: keyword?.metaTitle || "September Anniversary Celebration Surat | Seasonal Romantic Setup",
    description: keyword?.metaDescription || "Celebrate anniversary in September in Surat. Seasonal romantic couple setup at HIVY.",
    url: "https://anniversarydinnersurat.com/september-anniversary-celebration-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
