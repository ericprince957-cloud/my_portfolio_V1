import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vectorcodes.vercel.app"),
  title: {
    default: "Vector Codes — Web Development Company in Nigeria",
    template: "%s | Vector Codes",
  },
  description:
    "Vector Codes is a Nigerian web development company building business websites, e-commerce platforms, custom web applications and digital solutions for businesses across Nigeria.",
  keywords: [
    "web development company in Nigeria",
    "website designers in Nigeria",
    "website development in Abia State",
    "Nigerian web development agency",
    "business website development",
    "e-commerce website development",
    "custom web applications in Nigeria",
  ],
  openGraph: {
    type: "website",
    siteName: "Vector Codes",
    url: "https://vectorcodes.vercel.app",
    title: "Vector Codes — Nigerian Digital Solutions Company",
    description:
      "We design and develop modern websites, e-commerce platforms and custom digital solutions that help businesses establish credibility and grow.",
  },
  twitter: {
    card: "summary",
    title: "Vector Codes — Nigerian Digital Solutions Company",
    description:
      "Modern websites, e-commerce platforms and custom digital solutions for businesses across Nigeria.",
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-bg text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
