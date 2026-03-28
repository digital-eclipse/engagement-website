import type { Metadata } from "next";
import { ScrollReveal } from "../components/ScrollReveal";
import { SectionHeading } from "../components/SectionHeading";
import { FAQAccordion } from "./FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about our engagement videography process, pricing, and what to expect.",
};

const faqs = [
  {
    question: "What does an engagement film session look like?",
    answer:
      "We typically spend 1-2 hours together in a location meaningful to you. There's no rigid shot list — we guide you through natural moments and let the real connection between you shine. Most couples say they forget the camera is even there within the first ten minutes.",
  },
  {
    question: "How far in advance should we book?",
    answer:
      "We recommend reaching out at least 2-3 months before your preferred date, though we do accommodate shorter timelines when availability allows. Popular seasons (fall and golden hour summer evenings) tend to fill up fastest.",
  },
  {
    question: "How long until we receive our film?",
    answer:
      "Most engagement films are delivered within 4-6 weeks. We take the time to carefully edit each film with custom colour grading and music selection. You'll receive a private online link to view and download your film in full quality.",
  },
  {
    question: "Do you travel for sessions?",
    answer:
      "Absolutely. We're based in Toronto but regularly travel across Ontario and beyond. Travel within the GTA is included. For destinations further out, we'll provide a custom quote that keeps things simple and transparent.",
  },
  {
    question: "Can we choose the music for our film?",
    answer:
      "We curate music that matches the emotion and rhythm of your story, but we always welcome your input. If you have songs that are meaningful to you, share them with us — we'll work with you to find the perfect soundtrack.",
  },
  {
    question: "What should we wear?",
    answer:
      "Wear something that makes you feel like yourselves — comfortable and confident. We generally recommend avoiding busy patterns and logos. Solid, muted tones photograph beautifully on film. We're always happy to offer guidance during our planning call.",
  },
  {
    question: "Do you also film weddings?",
    answer:
      "Yes, we offer wedding videography as well. Many of our couples book their engagement session as a way to get comfortable on camera before the big day. Ask us about combined packages.",
  },
  {
    question: "What's your pricing?",
    answer:
      "Every love story is unique, so we tailor our packages to fit your vision. Reach out through our contact page and we'll send you our current pricing guide with all the details.",
  },
];

export default function FAQ() {
  return (
    <section className="pt-32 pb-24 md:pb-32 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            title="Questions"
            subtitle="Everything you need to know before we start."
          />
        </ScrollReveal>

        <div className="mt-16">
          <FAQAccordion faqs={faqs} />
        </div>
      </div>
    </section>
  );
}
