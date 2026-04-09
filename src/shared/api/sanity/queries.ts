import { client } from "../../../../sanity/lib/client";

export async function getHomePageData() {
  const query = `*[_type == "homepage"][0] {
    heroTitleTop,
    heroTitleBottom,
    "heroDesktopImage": heroDesktopImage.asset->url,
    "heroMobileImage": heroMobileImage.asset->url,

    portfolioTitle,
    // Вот этот кусок: мы просто идем по ссылкам и берем данные
    "portfolioProjects": portfolioProjects[]-> { 
      "id": _id,
      title,
      "imageUrl": image.asset->url,
      link,
      "slug": slug.current
    },

    aboutTitle,
    aboutDescription,
    aboutSkills,
    aboutStats,
    "aboutDesktopImage": aboutDesktopImage.asset->url,
    "aboutMobileImage": aboutMobileImage.asset->url,

    instagramTitle,
    instagramUrl,
    "instagramImages": instagramImages[].asset->url,

    offerTitle,
    "offerImage": offerImage.asset->url,
    offerText,
    offerBtnText
  }`;

  return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export async function getProjectBySlug(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    title,
    content[] {
      ...,
      _type == "image" => {
        ...,
        asset->
      }
    }
  }`;

  return await client.fetch(query, { slug });
}
