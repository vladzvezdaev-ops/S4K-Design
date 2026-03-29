"use client";

import { FadeIn } from "@/shared/ui/fade-in/FadeIn";
import { BrandIdHero } from "@/widgets/BrandIdentityPage/Hero";
import { DiscountSection } from "@/widgets/DiscountSection";

const BrandingPage = () => {
  return (
    <div>
      <FadeIn once={false}>
        <BrandIdHero />
      </FadeIn>
      <FadeIn once={false}>
        <DiscountSection />
      </FadeIn>
    </div>
  );
};

export default BrandingPage;
