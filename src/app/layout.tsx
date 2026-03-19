import type { Metadata } from "next";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PageLoader } from "@/shared/ui/PageLoader/ui/PageLoader";
import { LayoutWrapper } from "./LoyoutWrapper";

import "./globals.scss";

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
  title: "S4K Design",
  description: "Portfolio of a professional digital designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={satoshi.variable} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <PageLoader />

        <LayoutWrapper>{children}</LayoutWrapper>

        <SpeedInsights />
      </body>
    </html>
  );
}
