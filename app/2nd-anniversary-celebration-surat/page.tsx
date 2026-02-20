import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getAnniversaryKeywordBySlug, anniversaryServiceCategories } from "@/lib/anniversary-config";

const service = anniversaryServiceCategories[0];
const keyword = getAnniversaryKeywordBySlug("2nd-anniversary-celebration-surat")!;

export const metadata: Metadata = {
  title: keyword.metaTitle,
  description: keyword.metaDescription,
  keywords: [keyword.title, "2nd anniversary", "cotton anniversary", "second anniversary", "Surat", "HIVY Anniversary"],
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
