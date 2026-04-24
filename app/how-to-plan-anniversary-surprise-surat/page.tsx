import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "how-to-plan-anniversary-surprise-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "How to Plan Anniversary Surprise Surat | Expert Guide",
  description: keyword?.metaDescription || "Learn how to plan an anniversary surprise in Surat. Expert romantic setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/how-to-plan-anniversary-surprise-surat" },
  openGraph: {
    title: keyword?.metaTitle || "How to Plan Anniversary Surprise Surat | Expert Guide",
    description: keyword?.metaDescription || "Learn how to plan an anniversary surprise in Surat. Expert romantic setup at HIVY.",
    url: "https://anniversarydinnersurat.com/how-to-plan-anniversary-surprise-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
