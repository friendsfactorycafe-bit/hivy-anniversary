import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "unique-anniversary-ideas-couple-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Unique Anniversary Ideas Couples Surat | Creative Setup",
  description: keyword?.metaDescription || "Discover unique anniversary ideas for couples in Surat. Creative romantic setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/unique-anniversary-ideas-couple-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Unique Anniversary Ideas Couples Surat | Creative Setup",
    description: keyword?.metaDescription || "Discover unique anniversary ideas for couples in Surat. Creative romantic setup at HIVY.",
    url: "https://anniversarydinnersurat.com/unique-anniversary-ideas-couple-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
