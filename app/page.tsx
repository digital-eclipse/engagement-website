import Link from "next/link";
import { ScrollReveal } from "./components/ScrollReveal";
import { SectionHeading } from "./components/SectionHeading";
import { VideoCard } from "./components/VideoCard";
import { getFeaturedFilms, getTestimonials, getSettings } from "./lib/data";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [featuredFilms, testimonials, settings] = await Promise.all([
    getFeaturedFilms(),
    getTestimonials(),
    getSettings(),
  ]);

  const testimonial = testimonials[0];

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-bg-surface">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${settings.heroImage})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-display text-4xl md:text-6xl lg:text-8xl text-white tracking-tight leading-[1.05]">
            {settings.heroHeading}
            <br />
            <span className="italic">{settings.heroHeadingItalic}</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 font-light max-w-xl mx-auto leading-relaxed">
            {settings.heroSubtext}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="inline-block px-8 py-3.5 border border-white/80 text-white text-sm uppercase tracking-[0.12em] hover:bg-white hover:text-black transition-all duration-300"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 bg-accent text-white text-sm uppercase tracking-[0.12em] hover:bg-accent-hover transition-all duration-300"
            >
              Book Your Date
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">
            Scroll
          </span>
          <div className="w-px h-8 bg-white/30" />
        </div>
      </section>

      {/* Featured Films */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionHeading
              title="Featured Films"
              subtitle="A glimpse into the stories we've had the honour of telling."
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {featuredFilms.map((film) => (
              <ScrollReveal key={film.slug}>
                <VideoCard {...film} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-block text-sm uppercase tracking-[0.12em] text-accent hover:text-accent-hover transition-colors border-b border-accent/30 hover:border-accent pb-1"
            >
              View All Films
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonial */}
      {testimonial && (
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-bg-surface">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <blockquote>
                <p className="font-display text-2xl md:text-3xl lg:text-4xl text-text-primary italic leading-snug">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-8 text-text-secondary text-sm uppercase tracking-[0.12em]">
                  {testimonial.couple} &mdash; {testimonial.location}
                </footer>
              </blockquote>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-text-primary tracking-tight leading-[1.1]">
              Let&apos;s Tell Your Story
            </h2>
            <p className="mt-6 text-text-secondary text-lg font-light leading-relaxed">
              Every love story deserves to be remembered. We&apos;d love to hear
              yours.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-10 px-10 py-4 bg-accent text-white text-sm uppercase tracking-[0.12em] hover:bg-accent-hover transition-all duration-300"
            >
              Get in Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
