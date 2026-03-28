import type { Metadata } from "next";
import Link from "next/link";
import { getFilmBySlug, getFilms } from "../../lib/data";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const film = await getFilmBySlug(slug);
  return {
    title: film ? film.title : "Film Not Found",
    description: film?.description.slice(0, 160),
  };
}

export default async function FilmPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const film = await getFilmBySlug(slug);

  if (!film) {
    return (
      <section className="pt-32 pb-24 px-6 text-center">
        <h1 className="font-display text-4xl text-text-primary">
          Film Not Found
        </h1>
        <Link
          href="/portfolio"
          className="mt-6 inline-block text-accent hover:text-accent-hover transition-colors"
        >
          Back to Portfolio
        </Link>
      </section>
    );
  }

  const hasVideo = film.videoUrl && film.videoUrl.trim() !== "";

  return (
    <section className="pt-32 pb-24 md:pb-32 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {hasVideo ? (
          <div className="aspect-video bg-bg-surface rounded-lg overflow-hidden">
            <iframe
              src={film.videoUrl}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={film.title}
            />
          </div>
        ) : (
          <div className="relative aspect-video bg-bg-surface rounded-lg overflow-hidden group cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${film.thumbnail})` }}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-2 border-white/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-white/90 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl text-text-primary">
            {film.title}
          </h1>
          <p className="mt-2 text-text-muted text-sm uppercase tracking-[0.12em]">
            {film.location}
          </p>
          <p className="mt-8 text-text-secondary text-lg font-light leading-relaxed">
            {film.description}
          </p>
        </div>

        <div className="mt-12">
          <Link
            href="/portfolio"
            className="text-sm uppercase tracking-[0.12em] text-accent hover:text-accent-hover transition-colors border-b border-accent/30 hover:border-accent pb-1"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
