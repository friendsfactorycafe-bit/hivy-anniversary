import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "magical-anniversary-celebration-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Magical Anniversary Celebration Surat | Couples Only",
  description: keyword?.metaDescription || "Plan a magical anniversary celebration in Surat. Private couple experience at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/magical-anniversary-celebration-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Magical Anniversary Celebration Surat | Couples Only",
    description: keyword?.metaDescription || "Plan a magical anniversary celebration in Surat. Private couple experience at HIVY.",
    url: "https://anniversarydinnersurat.com/magical-anniversary-celebration-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
