import type { Metadata } from "next";
import { ScrollReveal } from "../components/ScrollReveal";
import { ContactForm } from "./ContactForm";
import { InstagramIcon, YouTubeIcon } from "../components/SocialIcons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Ready to tell your love story? Get in touch to book your engagement film session.",
};

export default function Contact() {
  return (
    <section className="flex-1 flex items-center px-6 lg:px-8 py-32">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left — Info */}
          <ScrollReveal>
            <div>
              <h1 className="font-display text-3xl md:text-5xl text-text-primary tracking-tight leading-[1.05]">
                Let&apos;s Create
                <br />
                <span className="italic">Something Beautiful.</span>
              </h1>
              <p className="mt-6 text-text-secondary text-lg font-light leading-relaxed max-w-md">
                Tell us a little about you and your vision. We&apos;ll get back
                to you within 48 hours.
              </p>

              <div className="mt-12 space-y-6">
                <div>
                  <h3 className="text-sm uppercase tracking-[0.12em] text-text-muted mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:hello@engagefilms.ca"
                    className="text-text-primary hover:text-accent transition-colors"
                  >
                    hello@engagefilms.ca
                  </a>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.12em] text-text-muted mb-2">
                    Based In
                  </h3>
                  <p className="text-text-primary">Toronto, Ontario</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.12em] text-text-muted mb-2">
                    Follow Along
                  </h3>
                  <div className="flex gap-5">
                    <a
                      href="https://instagram.com/engagefilms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-primary hover:text-accent transition-colors"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-6 h-6" />
                    </a>
                    <a
                      href="https://youtube.com/@engagefilms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-primary hover:text-accent transition-colors"
                      aria-label="YouTube"
                    >
                      <YouTubeIcon className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Form */}
          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
