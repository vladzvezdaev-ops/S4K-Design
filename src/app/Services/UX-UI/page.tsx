"use client";

import { FadeIn } from "@/shared/ui/fade-in/FadeIn";
import { DiscountSection } from "@/widgets/DiscountSection";
import { HeroUXUi } from "@/widgets/UXUiPage/Hero";

const UXUIPage = () => {
  return (
    <div>
      <FadeIn once={false}>
        <HeroUXUi />
      </FadeIn>
      <FadeIn once={false}>
        <DiscountSection />
      </FadeIn>
    </div>
  );
};

export default UXUIPage;
