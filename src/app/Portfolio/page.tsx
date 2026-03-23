"use client";

import { FadeIn } from "@/shared/ui/fade-in/FadeIn";
import { BrandPortfolioSection } from "@/widgets/PortfolioPage/BrandPortfolioSection";
import { PortfolioHero } from "@/widgets/PortfolioPage/Hero";
import { Project } from "@/entities/project/model/types";

const brandProjects: Project[] = [
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
    link: "/projects/dashboard-v1",
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

const PortfolioPage = () => {
  return (
    <div>
      <PortfolioHero />
      <FadeIn once={false} margin="0px 0px 300px 0px" amount={0.1}>
        <BrandPortfolioSection projects={brandProjects} />
      </FadeIn>
    </div>
  );
};

export default PortfolioPage;
