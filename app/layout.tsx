import type { Metadata } from "next";
import "./globals.css";

import { Geist, Geist_Mono, Russo_One } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-russo",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orcutt Construction",
  description: "Construction services built on trust and quality",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${russoOne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        
        {/* 👇 CUSTOM CURSOR */}
        <CustomCursor />

        {children}
      </body>
    </html>
  );
}