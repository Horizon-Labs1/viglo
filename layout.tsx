import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type React from "react";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
