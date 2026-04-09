"use client";

import { FadeIn } from "@/shared/ui/Fade-in/FadeIn";
import { BrandIdHero } from "@/widgets/pages/BrandIdentityPage/Hero";
import { PortfolioSlider } from "@/widgets/pages/MainPage/PortfolioSliderSection";
import { DiscountSection } from "@/widgets/pages/MainPage/DiscountSection";
import { BrandProcessSection } from "@/widgets/pages/BrandIdentityPage/ProcessSection";
import { BrandBenefitsSection } from "@/widgets/pages/BrandIdentityPage/BenefitsSection";

const projectsData = [
  {
    id: "3",
    imageUrl: "/card/probnik.jpg",
    link: "/projects/probnik.jpg",
  },

  {
    id: "6",
    imageUrl: "/card/ber.jpg",
    link: "/projects/ber-brand",
  },
  {
    id: "7",
    imageUrl: "/card/orangeCard.jpg",
    link: "/projects/orange-design",
  },
  {
    id: "8",
    imageUrl: "/card/purpureCard.jpg",
    link: "/projects/purple-style",
  },
];

const BrandingPage = () => {
  return (
    <div>
      <FadeIn once={true}>
        <BrandIdHero />
      </FadeIn>
      <FadeIn once={true}>
        <BrandBenefitsSection />
      </FadeIn>
      <FadeIn once={true}>
        <BrandProcessSection />
      </FadeIn>
      <FadeIn once={true}>
        <PortfolioSlider title="" projects={projectsData} />
      </FadeIn>
      <FadeIn once={true}>
        <DiscountSection />
      </FadeIn>
    </div>
  );
};

export default BrandingPage;
