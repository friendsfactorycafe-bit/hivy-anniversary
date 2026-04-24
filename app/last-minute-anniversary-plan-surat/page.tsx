import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "last-minute-anniversary-plan-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Last Minute Anniversary Plan Surat | Same Day Booking",
  description: keyword?.metaDescription || "Book a last minute anniversary plan in Surat. Same day romantic setup at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/last-minute-anniversary-plan-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Last Minute Anniversary Plan Surat | Same Day Booking",
    description: keyword?.metaDescription || "Book a last minute anniversary plan in Surat. Same day romantic setup at HIVY.",
    url: "https://anniversarydinnersurat.com/last-minute-anniversary-plan-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
