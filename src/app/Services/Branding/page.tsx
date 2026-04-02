"use client";

import { FadeIn } from "@/shared/ui/Fade-in/FadeIn";
import { BrandIdHero } from "@/widgets/pages/BrandIdentityPage/Hero";
import { PortfolioSlider } from "@/widgets/pages/MainPage/PortfolioSliderSection";
import { DiscountSection } from "@/widgets/pages/MainPage/DiscountSection";
import { BrandProcessSection } from "@/widgets/pages/BrandIdentityPage/ProcessSection";
import { UXUiBenefits } from "@/widgets/pages/UXUiPage/BenefitsSection";

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
    link: "/Sysmo",
  },
  {
    id: "4",
    imageUrl: "/card/laptop2.jpg",
    link: "/projects/dashboard-v2",
  },
  {
    id: "5",
    imageUrl: "/card/freePoint.jpg",
    link: "/projects/freepoint",
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
      <FadeIn once={false}>
        <BrandIdHero />
      </FadeIn>
      <FadeIn once={false}>
        <UXUiBenefits />
      </FadeIn>
      <FadeIn once={false}>
        <BrandProcessSection />
      </FadeIn>
      <FadeIn once={false}>
        <PortfolioSlider title="BRAND PORTFOLIO" projects={projectsData} />
      </FadeIn>
      <FadeIn once={false}>
        <DiscountSection />
      </FadeIn>
    </div>
  );
};

export default BrandingPage;
