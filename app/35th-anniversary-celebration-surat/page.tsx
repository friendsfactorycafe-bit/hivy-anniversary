import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "35th-anniversary-celebration-surat")!;

export const metadata: Metadata = {
  title: keyword.metaTitle,
  description: keyword.metaDescription,
  keywords: [keyword.title, "35th anniversary", "coral anniversary", "couple celebration", "Surat", "HIVY Anniversary"],
  alternates: { canonical: `https://anniversarydinnersurat.com/${keyword.slug}` },
  openGraph: {
    title: keyword.metaTitle,
    description: keyword.metaDescription,
    url: `https://anniversarydinnersurat.com/${keyword.slug}`,
    type: "website",
    locale: "en_IN",
    siteName: "HIVY Anniversary",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
