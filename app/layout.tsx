import type { Metadata } from "next";
import { lazy } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopMenubar from "@/components/nav/TopMenubar";
const BottomFooter = lazy(() => import("@/components/nav/BottomFooter"));

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DeepSoul",
  description: "Your journey to inner peace begins here",
  icons: {
    icon: "/icon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <div className="min-h-screen overflow-x-hidden">
          <TopMenubar />
          {children}
          <BottomFooter />
        </div>
      </body>
    </html>
  );
}
