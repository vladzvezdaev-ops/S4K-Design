import { FadeIn } from "@/shared/ui/Fade-in/FadeIn";
import { AboutMe } from "@/widgets/pages/MainPage/AboutMeSection";
import { DiscountSection } from "@/widgets/pages/MainPage/DiscountSection";
import { Hero } from "@/widgets/layout/Hero";
import { MyInstagram } from "@/widgets/pages/MainPage/MyInstagramSection";
import { PortfolioSlider } from "@/widgets/pages/MainPage/PortfolioSliderSection";
import { getHomePageData } from "@/shared/api/sanity/queries";

const backupProjects = [
  { id: "1", imageUrl: "/card/iphone1.jpg", link: "/projects/iphone-app-1" },
  { id: "2", imageUrl: "/card/iphone2.jpg", link: "/projects/iphone-app-2" },
  { id: "3", imageUrl: "/card/probnik.jpg", link: "/projects/probnik.jpg" },
  { id: "4", imageUrl: "/card/laptop2.jpg", link: "/projects/dashboard-v2" },
  { id: "5", imageUrl: "/card/sysmoLaptop.jpg", link: "/Sysmo" },
  { id: "6", imageUrl: "/card/ber.jpg", link: "/projects/ber-brand" },
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

export default async function Home() {
  const data = await getHomePageData();

  const sliderProjects =
    data?.portfolioProjects?.length > 0
      ? data.portfolioProjects
      : backupProjects;

  return (
    <main>
      {/* 0. HERO SECTION */}
      <Hero
        titleTop={data?.heroTitleTop ?? "My design"}
        titleBottom={data?.heroTitleBottom ?? "Your level up"}
        desktopImage={data?.heroDesktopImage || "/pages/HeadHero.jpg"}
        mobileImage={data?.heroMobileImage || "/pages/HeroMobile.jpg"}
      />
      {/* 1. PORTFOLIO SLIDER */}
      <FadeIn once={true}>
        <PortfolioSlider
          title={data?.portfolioTitle ?? "PORTFOLIO"}
          projects={sliderProjects}
        />
      </FadeIn>
      {/* 2. ABOUT ME */}
      <FadeIn once={true}>
        <AboutMe
          title={data?.aboutTitle ?? "ABOUT ME"}
          description={data?.aboutDescription ?? []}
          skills={data?.aboutSkills ?? []}
          stats={data?.aboutStats ?? []}
          desktopImage={data?.aboutDesktopImage ?? "/pages/HeroMobile.jpg"}
          mobileImage={data?.aboutMobileImage ?? "/pages/HeadHero.jpg"}
        />
      </FadeIn>
      {/* 3. MY INSTAGRAM */}
      <FadeIn once={true}>
        <MyInstagram
          title={data?.instagramTitle ?? "MY INSTAGRAM"}
          url={data?.instagramUrl ?? "https://www.instagram.com/s4k.design"}
          images={data?.instagramImages ?? []}
        />
      </FadeIn>
      {/* 4. DISCOUNT SECTION */}
      <FadeIn once={true}>
        <DiscountSection
          title={data?.offerTitle ?? "OFFER FROM ME"}
          image={data?.offerImage ?? "/pages/salesImage.webp"}
          text={data?.offerText ?? "If you already have a detailed analysis..."}
          btnText={data?.offerBtnText ?? "Launch project"}
        />
      </FadeIn>
    </main>
  );
}
