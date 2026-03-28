"use client";

import { useEffect, useState } from "react";
import { FilmsPanel } from "./FilmsPanel";
import { TestimonialsPanel } from "./TestimonialsPanel";
import { HeroPanel } from "./HeroPanel";

type Tab = "films" | "testimonials" | "hero";

export default function AdminPage() {
  const [tab, setTab] = useState<Tab>("films");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const tabs: { key: Tab; label: string }[] = [
    { key: "films", label: "Films" },
    { key: "testimonials", label: "Testimonials" },
    { key: "hero", label: "Hero" },
  ];

  return (
    <div className="min-h-screen bg-[#f5f3f0]">
      <div className="bg-white border-b border-[#e2ded8]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-[#1a1714]">
            Admin Dashboard
          </h1>
          <a
            href="/"
            className="text-sm text-[#5c554d] hover:text-[#b08d5e] transition-colors"
          >
            View Site
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-6">
        <div className="flex gap-1 border-b border-[#e2ded8]">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-5 py-3 text-sm font-medium transition-colors rounded-t-lg ${
                tab === t.key
                  ? "bg-white text-[#1a1714] border border-[#e2ded8] border-b-white -mb-px"
                  : "text-[#5c554d] hover:text-[#1a1714]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {tab === "films" && <FilmsPanel />}
        {tab === "testimonials" && <TestimonialsPanel />}
        {tab === "hero" && <HeroPanel />}
      </div>
    </div>
  );
}
