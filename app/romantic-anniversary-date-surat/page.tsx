import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { serviceCategories, getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "romantic-anniversary-date-surat")!;

export const metadata: Metadata = {
  title: keyword.metaTitle,
  description: keyword.metaDescription,
  keywords: [keyword.title, "romantic date", "anniversary date", "Surat", "HIVY"],
  alternates: { canonical: `https://anniversary.hivy.co.in/${keyword.slug}` },
  openGraph: {
    title: keyword.metaTitle,
    description: keyword.metaDescription,
    url: `https://anniversary.hivy.co.in/${keyword.slug}`,
    type: "website",
    locale: "en_IN",
    siteName: "HIVY Anniversary",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
