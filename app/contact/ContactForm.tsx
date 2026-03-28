"use client";

import { useState } from "react";

const inputClasses =
  "w-full bg-transparent border border-border rounded-sm px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/60 transition-colors text-sm";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex items-center justify-center h-full min-h-[400px]">
        <div className="text-center">
          <h3 className="font-display text-2xl text-text-primary mb-3">
            Thank You
          </h3>
          <p className="text-text-secondary font-light">
            We&apos;ll be in touch soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm uppercase tracking-[0.12em] text-text-muted mb-2"
          >
            Your Names
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Maya & James"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm uppercase tracking-[0.12em] text-text-muted mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="hello@example.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="date"
            className="block text-sm uppercase tracking-[0.12em] text-text-muted mb-2"
          >
            Preferred Date
          </label>
          <input
            type="text"
            id="date"
            name="date"
            placeholder="September 2026"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="location"
            className="block text-sm uppercase tracking-[0.12em] text-text-muted mb-2"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Toronto, ON"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm uppercase tracking-[0.12em] text-text-muted mb-2"
        >
          Tell Us About You
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="How did you meet? What's your vision for the session?"
          className={`${inputClasses} resize-none`}
        />
      </div>

      <div>
        <label
          htmlFor="referral"
          className="block text-sm uppercase tracking-[0.12em] text-text-muted mb-2"
        >
          How Did You Find Us?
        </label>
        <input
          type="text"
          id="referral"
          name="referral"
          placeholder="Instagram, referral, Google..."
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-accent text-white text-sm uppercase tracking-[0.12em] font-medium hover:bg-accent-hover transition-colors"
      >
        Send Inquiry
      </button>
    </form>
  );
}
