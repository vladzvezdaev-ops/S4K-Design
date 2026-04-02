"use client";

import { FadeIn } from "@/shared/ui/Fade-in/FadeIn";
import { BrandPortfolioSection } from "@/widgets/pages/PortfolioPage/BrandPortfolioSection";
import { PortfolioHero } from "@/widgets/pages/PortfolioPage/Hero";
import { Project } from "@/entities/project/model/types";

const brandProjects: Project[] = [
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

const PortfolioPage = () => {
  return (
    <div>
      <PortfolioHero />
      <FadeIn once={true} margin="0px 0px 300px 0px" amount={0.1}>
        <BrandPortfolioSection projects={brandProjects} />
      </FadeIn>
    </div>
  );
};

export default PortfolioPage;
