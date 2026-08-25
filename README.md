# Gaurav Rijal - Portfolio

Personal portfolio for a certified IAM engineer, built with React, TypeScript,
and Vite. Minimal magazine-style design with GSAP scroll animations, Lenis
smooth scrolling, and light/dark themes.

## Sections

| Section | Content |
|---|---|
| Hero | Magazine-style layout with a feathered profile photo behind the headline |
| Experience | Timeline of four roles, bullets expandable per role |
| Skills | Technical skills grouped by category, collapsible on mobile |
| Certifications | Carousel of credential images with drag, autoplay, and pagination |
| Impact | Carousel of metric-driven outcomes |
| FAQ | Accordion of five questions |
| Contact | Web3Forms-backed form, email, and social links |

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite 7 |
| Styling | Tailwind CSS 3 |
| Animations | GSAP (ScrollTrigger) |
| Smooth scroll | Lenis |
| UI components | Radix UI + shadcn/ui |
| Icons | Lucide React |
| Forms | Web3Forms |
| Hosting | GitHub Pages |

## Getting Started

Requires Node.js 18 or newer.

```bash
git clone https://github.com/gauravrijal/portfolio.git
cd portfolio
npm install
npm run dev
```

The dev server runs at http://localhost:3000/portfolio/. The `/portfolio/`
path is not optional: `base` is set in `vite.config.ts` to match the GitHub
Pages subdirectory, and the site will not resolve at the bare root.

### Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Typecheck, then build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
portfolio/
├── public/
│   ├── certificates/       # Certification images used by the carousel
│   └── *.jpg, *.png        # Profile and hero imagery
├── src/
│   ├── components/
│   │   ├── ThemeProvider.tsx
│   │   ├── HeroKnot.tsx    # Three.js knot, not currently rendered
│   │   └── ui/             # shadcn/ui primitives
│   ├── hooks/
│   │   ├── useScrollAnimation.ts
│   │   └── use-mobile.ts
│   ├── lib/utils.ts
│   ├── sections/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Process.tsx         # Experience timeline
│   │   ├── Skills.tsx
│   │   ├── Certifications.tsx
│   │   ├── Impact.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.js
└── vite.config.ts
```

Section order is defined in `App.tsx`. Two filenames differ from the section
they render: `Process.tsx` is the Experience section and `Skills.tsx` holds the
profile card alongside the skill categories.

## Animations

Entrance animations are driven by `useScrollAnimation`, which reads `data-`
attributes rather than per-component GSAP calls:

- `data-animate` marks an element to animate on scroll into view
- `data-delay` offsets the start, in seconds
- `data-stagger` staggers children marked `data-animate-child`

Expanding regions (skill categories, extra experience bullets, FAQ answers)
animate `grid-template-rows` between `0fr` and `1fr` with the content in an
`overflow-hidden` child. This interpolates the real content height, so nothing
needs a hardcoded max height that could clip longer copy. Interpolating `fr`
units needs Chrome 107+, Safari 16+, or Firefox 120+; older browsers still open
and close correctly, just without the tween.

## Contact Form

Submissions post to Web3Forms, which relays them to the registered inbox. The
access key in `Contact.tsx` is public by design, since it ships in the client
bundle of every static site that uses one. It only routes mail to the address
that registered it and cannot send mail as you or read anything.

`CONTACT_EMAIL` and `WEB3FORMS_ACCESS_KEY` are independent. Changing the
displayed address does not move where submissions land; that needs a new key
issued for the new address at web3forms.com.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes `dist/` to GitHub Pages. Feature branches do not deploy.

## Development Notes

`server.watch.usePolling` is enabled in `vite.config.ts`. Native FSEvents
watching has proven unreliable at this path, silently serving stale modules
with no error in the terminal or browser. Polling trades a little CPU for
correctness. If edits ever stop reaching the browser, confirm what the server
is actually serving before debugging the code:

```bash
curl -s http://localhost:3000/portfolio/src/App.tsx | head
```

## License

Personal project. All rights reserved.
