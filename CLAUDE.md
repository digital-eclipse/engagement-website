@AGENTS.md

# Engagement Videography Website

## Project Overview
Premium portfolio website for an engagement/wedding videographer. Dark, cinematic aesthetic. Video-first design that lets the work speak for itself and funnels visitors toward booking inquiries.

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Playfair Display (display/headings) + Inter (body/UI) via `next/font/google`
- **Package manager:** pnpm

## Design System
All design decisions (colors, typography, spacing, layout, animation) are defined in `DESIGN.md`. Read it before writing any UI code. Follow it exactly.

## Architecture

### Pages
```
app/
  page.tsx              # Home -- hero, featured films, testimonial, CTA
  portfolio/
    page.tsx            # Portfolio grid
    [slug]/page.tsx     # Individual film page with video embed
  about/page.tsx        # Founder story + philosophy
  testimonials/page.tsx # Client testimonials
  faq/
    page.tsx            # FAQ page
    FAQAccordion.tsx    # Client-side accordion component
  contact/
    page.tsx            # Contact page with info + form
    ContactForm.tsx     # Client-side form component
  layout.tsx            # Root layout with nav + footer
```

### Key Components
```
app/components/
  Navbar.tsx            # Fixed nav, transparent -> solid on scroll
  Footer.tsx            # Minimal footer with social links
  VideoCard.tsx         # Portfolio thumbnail card (hover effects)
  HeroVideo.tsx         # Full-viewport hero with overlay text
  Testimonial.tsx       # Client quote block
  ContactForm.tsx       # Inquiry form
  ScrollReveal.tsx      # Fade-up on scroll wrapper (CSS-only preferred via Intersection Observer)
```

## Code Conventions

### Styling
- Use Tailwind utility classes directly. No CSS modules, no styled-components.
- Define design tokens as CSS custom properties in `globals.css` matching DESIGN.md palette.
- Use `@theme inline` in Tailwind v4 for custom theme values.
- Responsive: mobile-first. Use `sm:`, `md:`, `lg:` breakpoints.

### Components
- Server Components by default. Only add `"use client"` when you need browser APIs (scroll listeners, form state, video interaction).
- Keep components small and single-purpose.
- Co-locate components in `app/components/`.

### Images & Video
- Use Next.js `<Image>` for all images (WebP, lazy loading, priority for above-fold).
- Hero video: HTML `<video>` tag with muted autoplay loop, MP4 source.
- Portfolio video embeds: Vimeo/YouTube iframe, lazy-loaded on user interaction.

### Animation
- CSS transitions and animations only -- no heavy JS animation libraries.
- Intersection Observer for scroll reveals.
- Keep all motion subtle: fade-ups, gentle scales, opacity transitions.
- See DESIGN.md "Motion & Animation" section for exact values.

### Content
- Placeholder content is fine during development -- use realistic copy, couple names, and locations.
- Video thumbnails: use placeholder images (Unsplash engagement/wedding photos or solid color blocks with aspect ratio maintained).
- Tone: intimate, poetic, understated. Not corporate or salesy.

## Performance Targets
- Lighthouse performance score > 90
- No layout shift from lazy-loaded content
- Hero video should not block page interactivity (defer/async load)
- Minimal JS bundle -- prefer Server Components and CSS
