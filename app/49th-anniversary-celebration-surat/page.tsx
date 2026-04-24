import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "49th-anniversary-celebration-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "49th Anniversary Celebration Surat | Romantic Couple Experience",
  description: keyword?.metaDescription || "Celebrate your 49th anniversary in Surat with romantic private setup, candlelight dinner & decorations at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/49th-anniversary-celebration-surat" },
  openGraph: {
    title: keyword?.metaTitle || "49th Anniversary Celebration Surat | Romantic Couple Experience",
    description: keyword?.metaDescription || "Celebrate your 49th anniversary in Surat with romantic private setup, candlelight dinner & decorations at HIVY.",
    url: "https://anniversarydinnersurat.com/49th-anniversary-celebration-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
