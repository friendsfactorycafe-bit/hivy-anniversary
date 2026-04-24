import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "10th-wedding-anniversary-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "10th Wedding Anniversary Surat | Romantic Celebration",
  description: keyword?.metaDescription || "Celebrate 10th wedding anniversary in Surat with a romantic couple setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/10th-wedding-anniversary-surat" },
  openGraph: {
    title: keyword?.metaTitle || "10th Wedding Anniversary Surat | Romantic Celebration",
    description: keyword?.metaDescription || "Celebrate 10th wedding anniversary in Surat with a romantic couple setup at HIVY.",
    url: "https://anniversarydinnersurat.com/10th-wedding-anniversary-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
