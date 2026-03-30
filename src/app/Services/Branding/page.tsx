"use client";

import { FadeIn } from "@/shared/ui/fade-in/FadeIn";
import { BrandIdHero } from "@/widgets/BrandIdentityPage/Hero";
import { PortfolioSlider } from "@/widgets/PortfolioSliderSection";
import { DiscountSection } from "@/widgets/DiscountSection";
import { BrandProcessSection } from "@/widgets/BrandIdentityPage/ProcessSection";
import { UXUiBenefits } from "@/widgets/UXUiPage/BenefitsSection";

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
