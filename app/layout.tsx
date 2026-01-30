import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "../styles/globals.css";
import { FloatingContact } from "@/components/floating-contact";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SmartJ2K Interiors | Premium Interior Design Solutions",
  description:
    "Transform your spaces with SmartJ2K Interiors. Expert interior design for residential, commercial, hospitality, healthcare, retail, and educational projects.",
  keywords:
    "interior design, smart interiors, residential design, commercial design, hospitality design",
  authors: [{ name: "Amruth L P" }],
  openGraph: {
    title: "SmartJ2K Interiors | Premium Interior Design Solutions",
    description:
      "Transform your spaces with SmartJ2K Interiors. Expert interior design services.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <FloatingContact />
        <Analytics />
      </body>
    </html>
  );
}
