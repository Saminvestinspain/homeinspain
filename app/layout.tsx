import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Home in Spain | Luxe Interieurdesign Marbella",
    template: "%s | Home in Spain",
  },
  description:
    "Home in Spain is dé specialist in luxe interieurdesign en totaalinrichting voor villa's en appartementen aan de Costa del Sol. Nederlandstalig advies in Marbella.",
  keywords: [
    "interieurdesign marbella",
    "luxe inrichting spanje",
    "totaalinrichting costa del sol",
    "meubels marbella",
    "belgisch interieur spanje",
  ],
  openGraph: {
    type: "website",
    locale: "nl_BE",
    url: "https://homeinspain.be",
    siteName: "Home in Spain",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#fafaf8] text-[#333333] antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
