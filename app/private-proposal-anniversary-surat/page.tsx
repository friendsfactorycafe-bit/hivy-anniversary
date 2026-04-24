import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "private-proposal-anniversary-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Private Proposal Anniversary Surat | Romantic Couple",
  description: keyword?.metaDescription || "Plan a private proposal anniversary in Surat. Romantic private setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/private-proposal-anniversary-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Private Proposal Anniversary Surat | Romantic Couple",
    description: keyword?.metaDescription || "Plan a private proposal anniversary in Surat. Romantic private setup at HIVY.",
    url: "https://anniversarydinnersurat.com/private-proposal-anniversary-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
