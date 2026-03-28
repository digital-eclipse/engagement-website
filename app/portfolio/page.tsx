import type { Metadata } from "next";
import { ScrollReveal } from "../components/ScrollReveal";
import { SectionHeading } from "../components/SectionHeading";
import { VideoCard } from "../components/VideoCard";
import { getFilms } from "../lib/data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse our collection of cinematic engagement and wedding films.",
};

export default async function Portfolio() {
  const films = await getFilms();

  return (
    <section className="pt-32 pb-24 md:pb-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            title="Our Films"
            subtitle="Every couple, every moment — a story worth telling."
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {films.map((film) => (
            <ScrollReveal key={film.slug}>
              <VideoCard {...film} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
