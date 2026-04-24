import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "anniversary-celebration-with-music-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Anniversary Celebration With Music Surat | Complete Package",
  description: keyword?.metaDescription || "Book anniversary celebration with music in Surat. Complete romantic package at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/anniversary-celebration-with-music-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Anniversary Celebration With Music Surat | Complete Package",
    description: keyword?.metaDescription || "Book anniversary celebration with music in Surat. Complete romantic package at HIVY.",
    url: "https://anniversarydinnersurat.com/anniversary-celebration-with-music-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
