import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "pearl-anniversary-celebration-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Pearl Anniversary Surat | Couple Celebration",
  description: keyword?.metaDescription || "Celebrate pearl anniversary in Surat with romantic dinner & private setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/pearl-anniversary-celebration-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Pearl Anniversary Surat | Couple Celebration",
    description: keyword?.metaDescription || "Celebrate pearl anniversary in Surat with romantic dinner & private setup at HIVY.",
    url: "https://anniversarydinnersurat.com/pearl-anniversary-celebration-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
