import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "private-honeymoon-anniversary-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Private Honeymoon Anniversary Surat | Romantic Couple",
  description: keyword?.metaDescription || "Plan a private honeymoon anniversary in Surat. Romantic private setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/private-honeymoon-anniversary-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Private Honeymoon Anniversary Surat | Romantic Couple",
    description: keyword?.metaDescription || "Plan a private honeymoon anniversary in Surat. Romantic private setup at HIVY.",
    url: "https://anniversarydinnersurat.com/private-honeymoon-anniversary-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
