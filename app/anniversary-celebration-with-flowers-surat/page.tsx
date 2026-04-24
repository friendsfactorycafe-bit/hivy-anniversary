import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "anniversary-celebration-with-flowers-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Anniversary Celebration With Flowers Surat | Complete Package",
  description: keyword?.metaDescription || "Book anniversary celebration with flowers in Surat. Complete romantic package at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/anniversary-celebration-with-flowers-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Anniversary Celebration With Flowers Surat | Complete Package",
    description: keyword?.metaDescription || "Book anniversary celebration with flowers in Surat. Complete romantic package at HIVY.",
    url: "https://anniversarydinnersurat.com/anniversary-celebration-with-flowers-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
