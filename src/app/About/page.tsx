"use client";

import { WhoIAmHero } from "@/widgets/pages/WhoIAmPage/Hero";
import { WhoIAmHi } from "@/widgets/pages/WhoIAmPage/Hi";
import { FadeIn } from "@/shared/ui/Fade-in/FadeIn";
import { MyExperience } from "@/widgets/pages/WhoIAmPage/MyExperience";
import { DiscountSection } from "@/widgets/pages/MainPage/DiscountSection";
import { ValuesInspiration } from "@/widgets/pages/WhoIAmPage/ValuesInspiration";

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
