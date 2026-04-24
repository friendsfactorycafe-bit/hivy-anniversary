import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "romantic-anniversary-gift-idea-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Romantic Anniversary Gift Ideas Surat | Couple Gift",
  description: keyword?.metaDescription || "Get romantic anniversary gift ideas in Surat. Private experience setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/romantic-anniversary-gift-idea-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Romantic Anniversary Gift Ideas Surat | Couple Gift",
    description: keyword?.metaDescription || "Get romantic anniversary gift ideas in Surat. Private experience setup at HIVY.",
    url: "https://anniversarydinnersurat.com/romantic-anniversary-gift-idea-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
