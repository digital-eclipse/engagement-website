import type { MetadataRoute } from "next";
import { getFilms } from "./lib/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const films = await getFilms();

  const filmRoutes = films.map((film) => ({
    url: `https://engagefilms.ca/portfolio/${film.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://engagefilms.ca",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://engagefilms.ca/portfolio",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://engagefilms.ca/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://engagefilms.ca/testimonials",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://engagefilms.ca/faq",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://engagefilms.ca/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...filmRoutes,
  ];
}
