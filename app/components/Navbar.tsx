"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Only go transparent over the hero on the home page
  const isOverHero = isHome && !scrolled && !menuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isOverHero
          ? "bg-transparent"
          : "bg-bg-elevated/95 backdrop-blur-sm border-b border-border shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        <Link
          href="/"
          className={`font-display text-xl tracking-wide transition-colors ${
            isOverHero
              ? "text-white hover:text-white/80"
              : "text-text-primary hover:text-accent"
          }`}
        >
          Engage
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-[0.12em] transition-colors ${
                isOverHero
                  ? "text-white/80 hover:text-white"
                  : "text-text-secondary hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-3"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px transition-all duration-300 ${
              isOverHero ? "bg-white" : "bg-text-primary"
            } ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`}
          />
          <span
            className={`block w-6 h-px transition-all duration-300 ${
              isOverHero ? "bg-white" : "bg-text-primary"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px transition-all duration-300 ${
              isOverHero ? "bg-white" : "bg-text-primary"
            } ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden bg-bg-elevated/98 backdrop-blur-sm border-t border-border">
          <div className="flex flex-col items-center gap-6 py-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm uppercase tracking-[0.12em] text-text-secondary hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
