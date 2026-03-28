# Design System -- Engagement Videography

## Aesthetic Direction

**Cinematic, intimate, editorial.** Light, warm backgrounds with rich typography let video content pop. The site should feel like opening a luxury film portfolio -- minimal chrome, maximum emotion. Every element serves the work or drives a booking inquiry.

Inspired by premium wedding filmmakers (Red Lotus Films, Henry Films, Patrick Payne Films) -- clean, video-first, poetic.

---

## Color Palette

| Token              | Hex       | Usage                                      |
| ------------------- | --------- | ------------------------------------------ |
| `--bg-primary`      | `#faf9f7` | Page background (warm off-white)           |
| `--bg-surface`      | `#f0eeeb` | Cards, sections with subtle separation     |
| `--bg-elevated`     | `#ffffff` | Nav bar, modals, elevated surfaces         |
| `--text-primary`    | `#1a1714` | Headings, body text (near-black warm)      |
| `--text-secondary`  | `#5c554d` | Captions, metadata, subtle text            |
| `--text-muted`      | `#9b9389` | Disabled, placeholder                      |
| `--accent`          | `#b08d5e` | CTAs, links, highlights (warm gold)        |
| `--accent-hover`    | `#96753e` | Accent hover state (darker on hover)       |
| `--border`          | `#e2ded8` | Subtle dividers, card borders              |

**Rationale:** Warm undertones throughout -- light backgrounds keep things airy and inviting while the warm gold accent and rich dark text maintain a premium, cinematic feel. Hero section uses a dark photo overlay for contrast.

---

## Typography

| Role        | Font                  | Weight    | Size (desktop)     | Size (mobile)      |
| ----------- | --------------------- | --------- | ------------------ | ------------------ |
| Display     | Playfair Display      | 400       | 64-80px            | 36-48px            |
| Heading     | Playfair Display      | 400       | 36-48px            | 28-36px            |
| Subheading  | Inter                 | 300       | 18-20px            | 16-18px            |
| Body        | Inter                 | 300-400   | 16px               | 15px               |
| Caption     | Inter                 | 300       | 13-14px            | 12-13px            |
| Nav         | Inter                 | 400       | 14px uppercase     | 14px uppercase     |
| CTA Button  | Inter                 | 500       | 14px uppercase     | 14px uppercase     |

**Letter spacing:** Headings: -0.02em. Uppercase text: 0.12em. Body: normal.

**Line height:** Headings: 1.1. Body: 1.6. Captions: 1.4.

---

## Layout & Spacing

- **Max content width:** 1280px (text sections), full-bleed for hero video and portfolio grids
- **Section padding:** 120px vertical (desktop), 80px (mobile)
- **Grid:** 12-column grid, 24px gutters
- **Portfolio grid:** 2 columns desktop, 1 column mobile, with 16px gaps
- **Scroll behavior:** Smooth scroll, sections reveal on scroll with subtle fade-up (no bouncy or aggressive animations)

---

## Page Structure

### 1. Home (Single-page hero-driven)
- **Hero:** Full-viewport background video (muted autoplay loop, 8-12s highlight reel) with overlay text -- name/tagline and a single CTA ("View Our Work" or "Book Your Date")
- **Featured Films:** 2-3 curated video thumbnails in a grid, each linking to full film. Hover: subtle scale + play icon
- **About Teaser:** Short poetic paragraph + portrait photo, link to full About
- **Testimonial:** One powerful client quote, large italic typography
- **CTA Section:** "Let's tell your story" with link to contact

### 2. Portfolio
- Grid of films, each as a thumbnail card with couple name + location
- Click opens dedicated page with embedded Vimeo/YouTube player + short story text
- Filter by type if needed later (engagement, wedding, elopement)

### 3. About
- Founder story, approach/philosophy
- Full-width cinematic photo
- Equipment/style details (optional, keep brief)

### 4. Testimonials
- Alternating left/right-aligned quotes with accent border
- Large italic Playfair quote text, couple name + location below
- Staggered scroll reveals

### 5. FAQ
- Accordion layout with + icon that rotates to x on open
- Questions in Playfair, answers in Inter light
- One open at a time

### 6. Contact
- Two-column: info/social on left, inquiry form on right
- Form fields: Names, Email, Preferred Date, Location, Message, Referral
- No pricing listed (inquiry-based)

---

## Components

### Navigation
- Fixed top, transparent over hero, solid `--bg-primary` on scroll
- Logo left, nav links right (Home, Portfolio, About, Testimonials, FAQ, Contact)
- Mobile: hamburger menu with full-screen overlay
- Transition: background fades in on scroll past hero

### Video Thumbnail Card
- 16:9 aspect ratio image
- On hover: slight scale (1.02), overlay dims, play icon appears
- Below image: couple names (Playfair) + location (Inter, muted)

### CTA Button
- Pill shape or minimal underline style
- `--accent` border/text on dark bg, fills on hover
- Uppercase, tracked out

### Testimonial Block
- Large italic Playfair quote
- Small attribution line below (couple name + year)
- Centered, generous vertical padding

---

## Motion & Animation

- **Philosophy:** Understated and elegant. Movement should feel like a slow breath, not a bounce.
- **Page load:** Fade in content (300ms ease)
- **Scroll reveals:** Elements fade up 20px with 400ms ease, staggered 100ms between siblings
- **Hover states:** 200ms transitions on scale, opacity, color
- **Video thumbnails:** Scale 1.00 -> 1.02 on hover
- **Nav background:** 300ms opacity transition on scroll
- **No:** Parallax, flip animations, slide-in sidebars, or particle effects

---

## Responsive Breakpoints

| Name    | Width    |
| ------- | -------- |
| mobile  | < 640px  |
| tablet  | 640-1024px |
| desktop | > 1024px |

---

## Image & Video Guidelines

- **Hero video:** MP4, max 15MB, 1080p, muted autoplay loop
- **Thumbnails:** WebP, 800x450 (16:9), lazy loaded
- **About photo:** WebP, max 1200px wide
- **All images:** Next.js `<Image>` with priority on above-fold, lazy on below
- **Video embeds:** Vimeo or YouTube iframe, loaded on interaction (click-to-play) to keep page fast
