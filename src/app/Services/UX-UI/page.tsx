"use client";

import { FadeIn } from "@/shared/ui/Fade-in/FadeIn";
import { BrandBenefitsSection } from "@/widgets/pages/BrandIdentityPage/BenefitsSection";
import { BrandProcessSection } from "@/widgets/pages/BrandIdentityPage/ProcessSection";
import { DiscountSection } from "@/widgets/pages/MainPage/DiscountSection";
import { PortfolioSlider } from "@/widgets/pages/MainPage/PortfolioSliderSection";
import { HeroUXUi } from "@/widgets/pages/UXUiPage/Hero";

const projectsData = [
  {
    id: "1",
    imageUrl: "/card/iphone1.jpg",
    link: "/projects/iphone-app-1",
  },
  {
    id: "2",
    imageUrl: "/card/iphone2.jpg",
    link: "/projects/iphone-app-2",
  },
  {
    id: "3",
    imageUrl: "/card/laptop1.jpg",
    link: "/projects/laptop1.jpg",
  },
  {
    id: "4",
    imageUrl: "/card/laptop2.jpg",
    link: "/projects/dashboard-v2",
  },
  {
    id: "5",
    imageUrl: "/card/freePoint.jpg",
    link: "/Sysmo",
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

const UXUIPage = () => {
  return (
    <div>
      <FadeIn once={true}>
        <HeroUXUi />
      </FadeIn>
      <FadeIn once={true}>
        <BrandBenefitsSection />
      </FadeIn>
      <FadeIn once={true}>
        <BrandProcessSection />
      </FadeIn>
      <FadeIn once={true}>
        <PortfolioSlider title="UX/UI PORTFOLIO" projects={projectsData} />
      </FadeIn>
      <FadeIn once={true}>
        <DiscountSection />
      </FadeIn>
    </div>
  );
};

export default UXUIPage;
