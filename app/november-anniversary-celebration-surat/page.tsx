import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "november-anniversary-celebration-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "November Anniversary Celebration Surat | Seasonal Romantic Setup",
  description: keyword?.metaDescription || "Celebrate anniversary in November in Surat. Seasonal romantic couple setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/november-anniversary-celebration-surat" },
  openGraph: {
    title: keyword?.metaTitle || "November Anniversary Celebration Surat | Seasonal Romantic Setup",
    description: keyword?.metaDescription || "Celebrate anniversary in November in Surat. Seasonal romantic couple setup at HIVY.",
    url: "https://anniversarydinnersurat.com/november-anniversary-celebration-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
