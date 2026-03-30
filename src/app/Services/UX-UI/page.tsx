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
    imageUrl: "/card/iphone1.png",
    link: "/projects/iphone-app-1",
  },
  {
    id: "2",
    imageUrl: "/card/iphone2.png",
    link: "/projects/iphone-app-2",
  },
  {
    id: "3",
    imageUrl: "/card/laptop1.png",
    link: "/Sysmo",
  },
  {
    id: "4",
    imageUrl: "/card/laptop2.png",
    link: "/projects/dashboard-v2",
  },
  {
    id: "5",
    imageUrl: "/card/freePoint.png",
    link: "/projects/freepoint",
  },
  {
    id: "6",
    imageUrl: "/card/ber.png",
    link: "/projects/ber-brand",
  },
  {
    id: "7",
    imageUrl: "/card/orangeCard.jpg",
    link: "/projects/orange-design",
  },
  {
    id: "8",
    imageUrl: "/card/purpureCard.png",
    link: "/projects/purple-style",
  },
];

const UXUIPage = () => {
  return (
    <div>
      <FadeIn once={false}>
        <HeroUXUi />
      </FadeIn>
      <FadeIn once={false}>
        <BrandBenefitsSection />
      </FadeIn>
      <FadeIn once={false}>
        <BrandProcessSection />
      </FadeIn>
      <FadeIn once={false}>
        <PortfolioSlider title="UX/UI PORTFOLIO" projects={projectsData} />
      </FadeIn>
      <FadeIn once={false}>
        <DiscountSection />
      </FadeIn>
    </div>
  );
};

export default UXUIPage;
