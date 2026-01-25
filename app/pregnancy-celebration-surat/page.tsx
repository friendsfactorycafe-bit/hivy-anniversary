import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { serviceCategories, getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("baby-moments")!;
const keyword = service.keywords.find(k => k.slug === "pregnancy-celebration-surat")!;

export const metadata: Metadata = {
  title: keyword.metaTitle,
  description: keyword.metaDescription,
  keywords: [keyword.title, "pregnancy celebration", "expecting party", "Surat", "HIVY"],
  alternates: { canonical: `https://hivy.co.in/${keyword.slug}` },
  openGraph: {
    title: keyword.metaTitle,
    description: keyword.metaDescription,
    url: `https://hivy.co.in/${keyword.slug}`,
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
