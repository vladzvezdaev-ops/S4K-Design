"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const isVladPage = pathname === "/vladyslav-zvezdaiev";

  return (
    <>
      {!isVladPage && <Header />}
      <main>{children}</main>
      {!isVladPage && <Footer />}
    </>
  );
};
