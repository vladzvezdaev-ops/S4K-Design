import { FadeIn } from "@/shared/ui/fade-in/FadeIn";
import { Hero } from "@/widgets/Hero";
export const dynamic = "force-dynamic";
import { PortfolioSlider } from "@/widgets/PortfolioSlider";

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

export default async function Home() {
  await new Promise((res) => setTimeout(res, 1000));
  return (
    <main>
      <Hero />
      <FadeIn once={false}>
        <PortfolioSlider projects={projectsData} />
      </FadeIn>
    </main>
  );
}
