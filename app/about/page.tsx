import type { Metadata } from "next";
import { ScrollReveal } from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Engage — our approach to cinematic engagement videography.",
};

export default function About() {
  return (
    <section className="pt-32 pb-24 md:pb-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl">
            <h1 className="font-display text-3xl md:text-5xl lg:text-7xl text-text-primary tracking-tight leading-[1.05]">
              Every Frame,
              <br />
              <span className="italic">Intentional.</span>
            </h1>
            <p className="mt-6 text-text-secondary text-lg md:text-xl font-light leading-relaxed">
              We don&apos;t just capture moments — we craft films that feel like
              the emotions you lived.
            </p>
          </div>
        </ScrollReveal>

        {/* Image + Story */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="aspect-[4/5] bg-bg-surface rounded-sm overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80)",
                }}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-6 text-text-secondary font-light leading-relaxed">
              <p>
                Engage was born from a simple belief: your love story
                deserves to be told with the same care and artistry as any great
                film. We started with a camera, a passion for storytelling, and
                the conviction that engagement films could be something more than
                a highlight reel.
              </p>
              <p>
                Our approach blends documentary honesty with cinematic beauty. We
                follow the moments as they unfold — the nervous laughter, the
                quiet whispers, the look that says everything without a single
                word. Then we craft it into something you&apos;ll want to watch
                again and again.
              </p>
              <p>
                Based in Toronto and available for travel, we work with couples
                who value authenticity over perfection. No stiff poses. No
                forced smiles. Just the two of you, exactly as you are — and
                that&apos;s more than enough.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Philosophy */}
        <div className="mt-32">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-12">
              Our Approach
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Documentary Heart",
                description:
                  "We observe before we direct. The most powerful moments are the ones that happen naturally — we're here to catch them.",
              },
              {
                title: "Cinematic Eye",
                description:
                  "Beautiful light, thoughtful composition, intentional movement. Every frame is considered. Every cut has purpose.",
              },
              {
                title: "Your Story First",
                description:
                  "This isn't about us — it's about the way you look at each other when you think no one is watching. That's the film.",
              },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div>
                  <h3 className="font-display text-xl text-text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
