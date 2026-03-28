import Link from "next/link";
import { InstagramIcon, YouTubeIcon } from "./SocialIcons";

const links = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/" className="font-display text-lg text-text-primary">
          Engage
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.12em] text-text-muted hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href="https://instagram.com/engagefilms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a
            href="https://youtube.com/@engagefilms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="YouTube"
          >
            <YouTubeIcon className="w-5 h-5" />
          </a>
          <span className="text-xs text-text-muted ml-2">
            &copy; {new Date().getFullYear()} Engage
          </span>
        </div>
      </div>
    </footer>
  );
}
