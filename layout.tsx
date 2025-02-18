import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type React from "react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "VIGLO",
  description: "AI-Powered Fraud Detection on Solana",
  generator: "v0.dev",
  applicationName: "VIGLO",
  keywords: ["AI", "Fraud Detection", "Solana", "Blockchain", "Security"],
  authors: [{ name: "VIGLO Team", url: "https://viglo.com" }],
  creator: "VIGLO",
  themeColor: "#000000",
  manifest: "/site.webmanifest",
  openGraph: {
    title: "VIGLO - AI-Powered Fraud Detection",
    description: "Protect your assets with AI-driven fraud detection on Solana.",
    url: "https://viglo.com",
    siteName: "VIGLO",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VIGLO Fraud Detection",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "VIGLO",
              "url": "https://viglo.com",
              "description": "AI-powered fraud detection for Solana blockchain security.",
              "publisher": {
                "@type": "Organization",
                "name": "VIGLO"
              }
            }
          `}
        </Script>
      </head>
      <body className={inter.className} aria-hidden="false" role="document">
        {children}
      </body>
    </html>
  );
}
