import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SALON_INFO } from "@/data/salon";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serifFont = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soleluna Centro Estetico & Benessere | San Martino, Ferrara",
  description:
    "Centro estetico a San Martino, Ferrara. Trattamenti viso personalizzati, cura del corpo, massaggi olistici, epilazione e semipermanente. Prenota il tuo momento di bellezza.",
  keywords: [
    "centro estetico ferrara",
    "estetista san martino ferrara",
    "soleluna ferrara",
    "pulizia viso ferrara",
    "massaggi ferrara",
    "pedicure manicure ferrara",
    "trattamenti estetici ferrara",
  ],
  openGraph: {
    title: "Soleluna Centro Estetico & Benessere | Ferrara",
    description: "Trattamenti viso, corpo, massaggi e cura della persona a San Martino (Ferrara).",
    url: "https://centroesteticosoleluna.it",
    siteName: "Soleluna Centro Estetico",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: SALON_INFO.name,
    legalName: SALON_INFO.companyName,
    url: "https://centroesteticosoleluna.it",
    telephone: SALON_INFO.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SALON_INFO.address.street,
      addressLocality: "San Martino, Ferrara",
      postalCode: SALON_INFO.address.cap,
      addressRegion: SALON_INFO.address.province,
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SALON_INFO.geo.lat,
      longitude: SALON_INFO.geo.lng,
    },
    hasMap: SALON_INFO.googleMapsUrl,
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Wednesday", "Friday"],
        opens: "10:30",
        closes: "19:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Thursday"],
        opens: "09:00",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Thursday"],
        opens: "15:30",
        closes: "19:30",
      },
    ],
  };

  return (
    <html lang="it" className={`${sansFont.variable} ${serifFont.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="font-sans antialiased bg-[#faf8f5] text-[#2b2523] selection:bg-[#ecdccb] selection:text-[#523d24]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
