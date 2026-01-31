import { Metadata } from "next";
import FFCAreaPage from "@/components/ffc-area-page";
import { getAreaBySlug } from "@/lib/ffc-config";

const area = getAreaBySlug("kim-surat")!;

export const metadata: Metadata = {
  title: area.metaTitle,
  description: area.metaDescription,
  keywords: [area.name, "anniversary celebration venue", "romantic anniversary dinner", "Surat", "HIVY"],
  alternates: { canonical: `https://anniversary.hivy.co.in/${area.slug}` },
  openGraph: {
    title: area.metaTitle,
    description: area.metaDescription,
    url: `https://anniversary.hivy.co.in/${area.slug}`,
    type: "website",
    locale: "en_IN",
    siteName: "HIVY Anniversary",
  },
};

export default function Page() {
  return <FFCAreaPage area={area} />;
}
