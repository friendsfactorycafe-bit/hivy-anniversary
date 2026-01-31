import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getAnniversaryKeywordBySlug, anniversaryServiceCategories } from "@/lib/anniversary-config";

const service = anniversaryServiceCategories[0];
const keyword = getAnniversaryKeywordBySlug("anniversary-celebration-for-parents-surat")!;

export const metadata: Metadata = {
  title: keyword.metaTitle,
  description: keyword.metaDescription,
  keywords: [keyword.title, "parents anniversary", "family celebration", "surprise party", "Surat", "HIVY Anniversary"],
  alternates: { canonical: `https://anniversary.anniversary.hivy.co.in/${keyword.slug}` },
  openGraph: {
    title: keyword.metaTitle,
    description: keyword.metaDescription,
    url: `https://anniversary.anniversary.hivy.co.in/${keyword.slug}`,
    type: "website",
    locale: "en_IN",
    siteName: "HIVY Anniversary",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
