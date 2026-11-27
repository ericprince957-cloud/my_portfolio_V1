import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PWAInstallBanner from "@/components/PWAInstallBanner";
import MobileNav from "@/components/MobileNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vectorcodes.vercel.app"),
  title: {
    default: "Website Design Company in Nigeria | Vector Codes",
    template: "%s | Vector Codes",
  },
  description:
    "Vector Codes designs business websites, online stores and custom web applications for Nigerian businesses. Get a clear proposal and free project review.",
  keywords: [
    "website design company in Nigeria",
    "web design Nigeria",
    "website designer Nigeria",
    "website development Nigeria",
    "business website design",
    "ecommerce website development",
    "custom web application development",
    "web development company Nigeria",
  ],
  openGraph: {
    type: "website",
    siteName: "Vector Codes",
    url: "https://vectorcodes.vercel.app",
    title: "Website Design Company in Nigeria | Vector Codes",
    description:
      "Business websites, e-commerce stores and custom web applications built for Nigerian businesses.",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Vector Codes",
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
        <div className="h-16 md:hidden" aria-hidden="true" />
        <MobileNav />
        <PWAInstallBanner />
      </body>
    </html>
  );
}
