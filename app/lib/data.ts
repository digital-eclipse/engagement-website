import { promises as fs } from "fs";
import path from "path";

export interface Film {
  slug: string;
  title: string;
  location: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  previewVideo: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  couple: string;
  location: string;
}

export interface SiteSettings {
  heroImage: string;
  heroHeading: string;
  heroHeadingItalic: string;
  heroSubtext: string;
}

const dataDir = path.join(process.cwd(), "data");

export async function getFilms(): Promise<Film[]> {
  const raw = await fs.readFile(path.join(dataDir, "films.json"), "utf-8");
  return JSON.parse(raw);
}

export async function getFeaturedFilms(): Promise<Film[]> {
  const films = await getFilms();
  return films.filter((f) => f.featured);
}

export async function getFilmBySlug(slug: string): Promise<Film | undefined> {
  const films = await getFilms();
  return films.find((f) => f.slug === slug);
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const raw = await fs.readFile(
    path.join(dataDir, "testimonials.json"),
    "utf-8"
  );
  return JSON.parse(raw);
}

export async function getSettings(): Promise<SiteSettings> {
  const raw = await fs.readFile(path.join(dataDir, "settings.json"), "utf-8");
  return JSON.parse(raw);
}
