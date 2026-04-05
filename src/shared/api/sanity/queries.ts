import { client } from "../../../../sanity/lib/client";

export async function getHomePageData() {
  const query = `*[_type == "homepage"][0] {
    // --- HERO ---
    heroTitleTop,
    heroTitleBottom,
    "heroDesktopImage": heroDesktopImage.asset->url,
    "heroMobileImage": heroMobileImage.asset->url,

    // --- PORTFOLIO ---
    portfolioTitle,
    "portfolioProjects": portfolioProjects[] {
    "imageUrl": image.asset->url,
    link
    },

    // --- ABOUT ---
    aboutTitle,
    aboutDescription,
    aboutSkills,
    aboutStats,
    "aboutDesktopImage": aboutDesktopImage.asset->url,
    "aboutMobileImage": aboutMobileImage.asset->url,

    // --- INSTAGRAM ---
    instagramTitle,
    instagramUrl,
    "instagramImages": instagramImages[].asset->url,

    // --- OFFER ---
    offerTitle,
    "offerImage": offerImage.asset->url,
    offerText,
    offerBtnText
  }`;

  return await client.fetch(query);
}
