import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "golden-anniversary-celebration-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Golden Anniversary Surat | Couple Celebration",
  description: keyword?.metaDescription || "Celebrate golden anniversary in Surat with romantic dinner & private setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/golden-anniversary-celebration-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Golden Anniversary Surat | Couple Celebration",
    description: keyword?.metaDescription || "Celebrate golden anniversary in Surat with romantic dinner & private setup at HIVY.",
    url: "https://anniversarydinnersurat.com/golden-anniversary-celebration-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
