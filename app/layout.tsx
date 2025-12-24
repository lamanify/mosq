import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mosq.io"),
  title: {
    default: "MOSQ | Platform Website Masjid No.1 Malaysia",
    template: "%s | MOSQ",
  },
  description:
    "Bina website masjid profesional dalam 5 minit. Percuma seumur hidup. Tanpa koding, tanpa caj tersembunyi. Inisiatif digital untuk ummah. Dapatkan jadual solat dan maklumat aktiviti masjid terkini.",
  keywords: [
    "laman web masjid",
    "website masjid percuma",
    "sistem pengurusan masjid",
    "mosque website builder",
    "jadual solat digital",
    "waktu solat malaysia",
    "aktiviti masjid",
    "sumbangan masjid online"
  ],
  authors: [{ name: "MOSQ Team", url: "https://mosq.io" }],
  creator: "MOSQ Team",
  publisher: "MOSQ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "https://res.cloudinary.com/lamanify/image/upload/v1766570820/Mosq_5_cuhs4t.webp",
  },
  openGraph: {
    title: "MOSQ | Platform Website Masjid No.1 Malaysia",
    description: "Bina website masjid profesional dalam 5 minit. Percuma seumur hidup. Inisiatif digital untuk ummah.",
    url: "https://mosq.io",
    siteName: "MOSQ",
    images: [
      {
        url: "https://res.cloudinary.com/lamanify/image/upload/v1766570876/Screenshot_6_cf7tt6.webp",
        width: 1200,
        height: 630,
        alt: "MOSQ Platform - Website Masjid Percuma",
      },
    ],
    locale: "ms_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MOSQ | Platform Website Masjid No.1 Malaysia",
    description: "Bina website masjid profesional dalam 5 minit. Percuma seumur hidup.",
    images: ["https://res.cloudinary.com/lamanify/image/upload/v1766570876/Screenshot_6_cf7tt6.webp"],
    creator: "@mosq_io", // Placeholder if not strictly defined, or remove if unwanted
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "google-site-verification-code", // Add actual code if available
  },
};

import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body
        className={`${inter.variable} ${sora.variable} antialiased bg-black text-white selection:bg-gold selection:text-black`}
        suppressHydrationWarning
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
