import { FadeIn } from "@/shared/ui/Fade-in/FadeIn";
import { AboutMe } from "@/widgets/pages/MainPage/AboutMeSection";
import { DiscountSection } from "@/widgets/pages/MainPage/DiscountSection";
import { Hero } from "@/widgets/layout/Hero";
import { MyInstagram } from "@/widgets/pages/MainPage/MyInstagramSection";
import { PortfolioSlider } from "@/widgets/pages/MainPage/PortfolioSliderSection";

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

export default function Home() {
  return (
    <main>
      <Hero />
      <FadeIn once={true}>
        <PortfolioSlider projects={projectsData} />
      </FadeIn>
      <FadeIn once={true}>
        <AboutMe />
      </FadeIn>
      <FadeIn once={true}>
        <MyInstagram />
      </FadeIn>
      <FadeIn once={true}>
        <DiscountSection />
      </FadeIn>
    </main>
  );
}
