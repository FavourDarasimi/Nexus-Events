# Nexus Events

A luxury event planning website built with Next.js 16, Tailwind CSS v4, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 (CSS-based `@theme`)
- **Animation:** Framer Motion
- **Fonts:** Playfair Display, Inter, Cormorant Garamond (Google Fonts)
- **UI:** Radix UI (Dialog, Select)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Pages

| Route | Content |
|-------|---------|
| `/` | Home — hero, marquee, featured events, philosophy, testimonials, CTA |
| `/about` | About — story, team, values, CTA |
| `/services` | Services — service cards, process timeline, CTA |
| `/gallery` | Gallery — masonry grid with filter tabs and lightbox |
| `/contact` | Contact — info column with contact form |

## Project Structure

```
src/
├── app/           # App Router pages + layout
├── components/
│   ├── animations/   # Framer Motion components (FloatingOrbs, SparkleBackground, etc.)
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Page-specific section components
│   └── ui/           # Button, GoldDivider, SectionLabel, SocialIcons
└── lib/              # Constants, animations variants, utils
```

## Design

- Dark theme (black/charcoal/gold)
- Gold accent color (`#C9A84C`)
- Container max-width: 1500px
- Mobile-first responsive (375px / 768px / 1440px)
- `prefers-reduced-motion` respected via `MotionConfig`
