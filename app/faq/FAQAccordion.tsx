"use client";

import { useState } from "react";

export function FAQAccordion({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full py-6 flex items-center justify-between text-left group"
          >
            <span className="font-display text-lg md:text-xl text-text-primary group-hover:text-accent transition-colors pr-8">
              {faq.question}
            </span>
            <span
              className={`text-text-muted transition-transform duration-300 shrink-0 ${
                openIndex === i ? "rotate-45" : ""
              }`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="10" y1="4" x2="10" y2="16" />
                <line x1="4" y1="10" x2="16" y2="10" />
              </svg>
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? "max-h-96 pb-6" : "max-h-0"
            }`}
          >
            <p className="text-text-secondary font-light leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
