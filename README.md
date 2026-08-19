# SmileCare Dental Studio — Website Template

A modern, premium, fully responsive dental clinic website built with
**Next.js (App Router) + TypeScript + Tailwind CSS**.

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm start
```

> Note: `next/font/google` fetches font files (Fraunces + Inter) from Google
> Fonts at build time, so an internet connection is required the first time
> you run `npm run dev` or `npm run build`.

## Design System

- **Colors** — deep navy (`#0B2A45`), dental blue (`#2C6FA8`), soft teal accent
  (`#3FC5B7`), on a white / very light blue (`#F6FAFC`, `#EAF3F8`) background.
- **Type** — Fraunces (display/headlines) paired with Inter (body/UI), loaded
  via `next/font/google` in `app/layout.tsx`.
- **Signature motif** — a recurring "smile arc" curve (`components/SmileArc.tsx`)
  used as a section-transition element, echoing the brand's smile theme
  structurally rather than only in copy.

## Project Structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata
  page.tsx           Assembles all sections
  globals.css         Design tokens, reveal-on-scroll utilities
components/
  Navbar.tsx, Hero.tsx, Stats.tsx, About.tsx, Services.tsx,
  WhyChooseUs.tsx, Technology.tsx, Doctors.tsx, BeforeAfter.tsx,
  Testimonials.tsx, AppointmentCTA.tsx, AppointmentForm.tsx,
  Contact.tsx, FAQ.tsx, Footer.tsx, ScrollToTop.tsx,
  AnnouncementBar.tsx, Reveal.tsx, SmileArc.tsx
```

## Notes

- The appointment form validates on the client only — there is no backend
  wired up yet. Hook `handleSubmit` in `components/AppointmentForm.tsx` up to
  your API/email service when ready.
- Images are sourced from Unsplash via `next/image` remote patterns
  (configured in `next.config.mjs`). Swap in your own clinic photography
  before shipping to production.
- The Google Maps section in `components/Contact.tsx` is a styled
  placeholder — replace it with a real embed (e.g. Google Maps iframe) and
  your clinic's exact coordinates.
- All copy (phone number, address, hours, team names) is sample content —
  update it to match the real practice before launch.
