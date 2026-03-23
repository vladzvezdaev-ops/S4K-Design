"use client";

import { WhoIAmHero } from "@/widgets/WhoIAmPage/Hero";
import { WhoIAmHi } from "@/widgets/WhoIAmPage/Hi";
import { FadeIn } from "@/shared/ui/fade-in/FadeIn";
import { MyExperience } from "@/widgets/WhoIAmPage/MyExperience";
import { DiscountSection } from "@/widgets/DiscountSection";
import { ValuesInspiration } from "@/widgets/WhoIAmPage/ValuesInspiration";

const AboutPage = () => {
  return (
    <div>
      <WhoIAmHero />
      <FadeIn once={false}>
        <WhoIAmHi />
      </FadeIn>
      <FadeIn once={false}>
        <MyExperience />
      </FadeIn>
      <FadeIn once={false}>
        <ValuesInspiration />
      </FadeIn>
      <FadeIn once={false}>
        <DiscountSection />
      </FadeIn>
    </div>
  );
};

export default AboutPage;
