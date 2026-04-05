"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/widgets/layout/Header";
import { Footer } from "@/widgets/layout/Footer";

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const normalizedPath = pathname?.toLowerCase() || "";
  
  const isVladPage = normalizedPath.includes("vladyslav-zvezdaiev");
  
  const isStudio = normalizedPath.startsWith("/studio");

  const shouldHideLayout = isVladPage || isStudio;

  return (
    <>
      {!shouldHideLayout && <Header />}
      
      <main>{children}</main>
      
      {!shouldHideLayout && <Footer />}
    </>
  );
};