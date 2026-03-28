import type { Metadata } from "next";
import { ScrollReveal } from "../components/ScrollReveal";
import { SectionHeading } from "../components/SectionHeading";
import { getTestimonials } from "../lib/data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Hear from the couples whose stories we've had the honour of telling.",
};

export default async function Testimonials() {
  const testimonials = await getTestimonials();

  return (
    <section className="pt-32 pb-24 md:pb-32 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            title="Kind Words"
            subtitle="From the couples who trusted us with their story."
          />
        </ScrollReveal>

        <div className="mt-20 space-y-16">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.id}>
              <blockquote
                className={`${
                  i % 2 === 0 ? "md:text-left" : "md:text-right"
                } border-l-2 ${
                  i % 2 === 0
                    ? "border-l-accent/30 pl-5 md:pl-8"
                    : "md:border-l-0 md:border-r-2 md:border-r-accent/30 md:pr-8 border-l-accent/30 pl-5 md:pl-0"
                }`}
              >
                <p className="font-display text-xl md:text-2xl lg:text-3xl text-text-primary italic leading-snug">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6">
                  <span className="text-accent text-sm font-medium">
                    {t.couple}
                  </span>
                  <span className="text-text-muted text-sm ml-3">
                    {t.location}
                  </span>
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
