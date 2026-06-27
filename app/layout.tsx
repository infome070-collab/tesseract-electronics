import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Tesseract Electronics | PCB Design, PCB Assembly & Electronic Components",

  description:
    "Tesseract Electronics is a Bengaluru-based provider of PCB Design, PCB Fabrication, PCB Assembly, Electronic Components, BOM Fulfillment and Technical Support across India.",

  keywords: [
    "PCB Design Bangalore",
    "PCB Fabrication",
    "PCB Assembly",
    "Electronic Components",
    "BOM Fulfillment",
    "PCB Manufacturer India",
    "SMT Assembly",
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
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "SpqhtmakyhsbKmLcVcD2ETFkeY4SPKT8k9M2jdxLBVE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-JH145YBCC9" />
    </html>
  );
}