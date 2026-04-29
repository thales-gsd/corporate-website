import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import siteData from "@/data/site.json";
import "@/style/globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteData.seo.title,
  description: siteData.seo.description,
  openGraph: {
    images: [siteData.seo.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfairDisplay.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}