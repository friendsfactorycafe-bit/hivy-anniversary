import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("anniversary-celebration")!;
const keyword = service.keywords.find(k => k.slug === "anniversary-dinner-in-starlit-room-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Anniversary Dinner In Starlit Room Surat | Exclusive Couple Venue",
  description: keyword?.metaDescription || "Book anniversary dinner in starlit room in Surat. Private exclusive couple venue at HIVY.",
  alternates: { canonical: "https://anniversarydinnersurat.com/anniversary-dinner-in-starlit-room-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Anniversary Dinner In Starlit Room Surat | Exclusive Couple Venue",
    description: keyword?.metaDescription || "Book anniversary dinner in starlit room in Surat. Private exclusive couple venue at HIVY.",
    url: "https://anniversarydinnersurat.com/anniversary-dinner-in-starlit-room-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
