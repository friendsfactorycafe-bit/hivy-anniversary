import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "may-anniversary-celebration-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "May Anniversary Celebration Surat | Seasonal Romantic Setup",
  description: keyword?.metaDescription || "Celebrate anniversary in May in Surat. Seasonal romantic couple setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/may-anniversary-celebration-surat" },
  openGraph: {
    title: keyword?.metaTitle || "May Anniversary Celebration Surat | Seasonal Romantic Setup",
    description: keyword?.metaDescription || "Celebrate anniversary in May in Surat. Seasonal romantic couple setup at HIVY.",
    url: "https://anniversarydinnersurat.com/may-anniversary-celebration-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
