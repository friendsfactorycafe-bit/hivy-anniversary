import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "best-anniversary-planner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Best Anniversary Planner Surat | Top Rated",
  description: keyword?.metaDescription || "Find the best anniversary planner in Surat at HIVY. Professional romantic setup for couples.",
  alternates: { canonical: "https://anniversarydinnersurat.com/best-anniversary-planner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Best Anniversary Planner Surat | Top Rated",
    description: keyword?.metaDescription || "Find the best anniversary planner in Surat at HIVY. Professional romantic setup for couples.",
    url: "https://anniversarydinnersurat.com/best-anniversary-planner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
