import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "private-cabin-anniversary-surprise-for-better-half-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Private Cabin Anniversary Surprise For Better Half Surat | Private Setup",
  description: keyword?.metaDescription || "Book private-cabin anniversary surprise for your better half in Surat. Private romantic experience at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/private-cabin-anniversary-surprise-for-better-half-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Private Cabin Anniversary Surprise For Better Half Surat | Private Setup",
    description: keyword?.metaDescription || "Book private-cabin anniversary surprise for your better half in Surat. Private romantic experience at HIVY.",
    url: "https://anniversarydinnersurat.com/private-cabin-anniversary-surprise-for-better-half-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
