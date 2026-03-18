import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.scss";
import { FadeIn } from "@/shared/ui/fade-in/FadeIn";

const satoshi = localFont({
  src: [
    {
      path: "../shared/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../shared/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../shared/fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "SK4 Design",
  description: "Portfolio of a professional digital designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body className={`${satoshi.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
