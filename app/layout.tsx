import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MotionConfig } from "framer-motion";
import PageTransition from "@/components/animations/PageTransition";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexus Events — Luxury Event Planning",
  description:
    "We don't plan events. We craft memories. Premium event planning for weddings, galas, corporate events, and more.",
  openGraph: {
    title: "Nexus Events — Luxury Event Planning",
    description:
      "We don't plan events. We craft memories. Premium event planning for weddings, galas, corporate events, and more.",
    siteName: "Nexus Events",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <MotionConfig reducedMotion="user">
          <Navbar />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
