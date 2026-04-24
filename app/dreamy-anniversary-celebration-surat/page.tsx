import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "dreamy-anniversary-celebration-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Dreamy Anniversary Celebration Surat | Couples Only",
  description: keyword?.metaDescription || "Plan a dreamy anniversary celebration in Surat. Private couple experience at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/dreamy-anniversary-celebration-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Dreamy Anniversary Celebration Surat | Couples Only",
    description: keyword?.metaDescription || "Plan a dreamy anniversary celebration in Surat. Private couple experience at HIVY.",
    url: "https://anniversarydinnersurat.com/dreamy-anniversary-celebration-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
