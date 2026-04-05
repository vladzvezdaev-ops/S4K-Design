"use client";

import { FadeIn } from "@/shared/ui/Fade-in/FadeIn";
import { BrandProcessSection } from "@/widgets/pages/BrandIdentityPage/ProcessSection";
import { DiscountSection } from "@/widgets/pages/MainPage/DiscountSection";
import { PortfolioSlider } from "@/widgets/pages/MainPage/PortfolioSliderSection";
import { HeroUXUi } from "@/widgets/pages/UXUiPage/Hero";
import { UXUiBenefits } from "@/widgets/pages/UXUiPage/BenefitsSection";
import { UXUiProcessSection } from "@/widgets/pages/UXUiPage/ProcessSection";

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
    id: "4",
    imageUrl: "/card/laptop2.jpg",
    link: "/projects/dashboard-v2",
  },
  {
    id: "5",
    imageUrl: "/card/sysmoLaptop.jpg",
    link: "/Sysmo",
  },
];

const UXUIPage = () => {
  return (
    <div>
      <FadeIn once={true}>
        <HeroUXUi />
      </FadeIn>
      <FadeIn once={true}>
        <UXUiBenefits />
      </FadeIn>
      <FadeIn once={true}>
        <UXUiProcessSection />{" "}
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
