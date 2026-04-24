import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "midnight-anniversary-celebration-for-soulmate-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Midnight Anniversary Celebration For Soulmate Surat | Private Setup",
  description: keyword?.metaDescription || "Book a midnight anniversary celebration for your soulmate in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/midnight-anniversary-celebration-for-soulmate-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Midnight Anniversary Celebration For Soulmate Surat | Private Setup",
    description: keyword?.metaDescription || "Book a midnight anniversary celebration for your soulmate in Surat. Private romantic setup at HIVY.",
    url: "https://anniversarydinnersurat.com/midnight-anniversary-celebration-for-soulmate-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
