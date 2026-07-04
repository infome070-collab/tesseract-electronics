import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Tesseract Electronics | PCB Design | PCB Fabrication | PCB Assembly | Electronic Components Sourcing",

  description:
  "Tesseract Electronics is a leading PCB manufacturer in India offering PCB Design, PCB Fabrication, PCB Assembly, SMT & Through Hole Assembly, Electronic Components sourcing, BOM fulfillment, and prototype PCB manufacturing.",
  keywords: [
    "PCB Design Bangalore",
    "PCB Fabrication Bangalore",
    "PCB Assembly",
    "Electronic Components Bangalore",
    "BOM Fulfillment",
    "PCB Manufacturer India",
    "PCB Manufacturer Bangalore",
    "SMT Assembly Bangalore",
    "Through Hole Assembly",
    "Industrial Electronics",
    "Tesseract Electronics",
  ],

  authors: [{ name: "Tesseract Electronics" }],
  creator: "Tesseract Electronics",
  publisher: "Tesseract Electronics",

 metadataBase: new URL("https://tesseractelectronics.online"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Tesseract Electronics",
    description:
      "PCB Design | PCB Fabrication | PCB Assembly | Electronic Components",
   url: "https://tesseractelectronics.online",
    siteName: "Tesseract Electronics",
     images: ["/og-image.png"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
  card: "summary_large_image",
  title: "Tesseract Electronics",
  description:
    "PCB Design | PCB Manufacturing | PCB Assembly | Electronic Components",
  images: ["/og-image.png"],
},

  robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <html lang="en">
    <body>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Tesseract Electronics",
            url: "https://tesseractelectronics.online",
            logo: "https://tesseractelectronics.online/logo.png",
            email: "mailto:tesseractelectronics24@gmail.com",
            telephone: "+91-8123663810",
            sameAs: [
              "https://www.instagram.com/tesseract_electronics"
            ],
            description:
              "PCB Design, PCB Manufacturing, PCB Assembly and Electronic Components Supplier in India."
          })
        }}
      />

      {children}

    </body>

    <GoogleAnalytics gaId="G-JH145YBCC9" />
  </html>
);
}