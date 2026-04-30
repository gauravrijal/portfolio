# Gaurav Rijal — Portfolio

A modern, minimal personal portfolio website built with React, TypeScript, and Vite. Features a magazine-style hero layout, smooth scroll animations, and a clean design system.

## ✨ Features

- **Magazine-style Hero** — Large feathered profile photo with CSS mask gradients behind the headline text
- **Transparent Navigation** — Floating navbar that stays transparent as you scroll
- **Scroll Animations** — GSAP-powered entrance animations triggered on scroll
- **Project Showcase** — Centered 2-column grid of project cards
- **Skills & Experience** — Accordion-style sections with clean typography
- **Contact Form** — Integrated contact section
- **Responsive Design** — Fully responsive layout from mobile to desktop

## 🛠 Tech Stack

| Layer        | Technology                              |
| ------------ | --------------------------------------- |
| Framework    | React 19 + TypeScript                   |
| Build        | Vite 7                                  |
| Styling      | Tailwind CSS 3 + CSS Modules            |
| Animations   | GSAP (ScrollTrigger)                    |
| UI Components| Radix UI + shadcn/ui                    |
| 3D (unused)  | Three.js (HeroKnot component, reserved) |
| Icons        | Lucide React                            |
| Routing      | React Router 7                          |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/gauravrijal/portfolio.git
cd portfolio/app

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be running at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
app/
├── public/               # Static assets (images)
├── src/
│   ├── components/
│   │   ├── HeroKnot.tsx  # 3D knot animation (unused, kept for reference)
│   │   └── ui/           # shadcn/ui components
│   ├── hooks/            # Custom hooks (scroll animation, mobile detection)
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   ├── sections/         # Page sections
│   │   ├── Hero.tsx      # Hero with magazine-style photo
│   │   ├── Navigation.tsx# Transparent floating navbar
│   │   ├── Projects.tsx  # 2-col project card grid
│   │   ├── Skills.tsx    # Skills & profile card
│   │   ├── Process.tsx   # Experience timeline
│   │   ├── Awards.tsx    # Awards section
│   │   ├── FAQ.tsx       # FAQ accordion
│   │   ├── Contact.tsx   # Contact form
│   │   └── Footer.tsx    # Site footer
│   ├── App.tsx           # Root component
│   └── main.tsx          # Entry point
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## 📄 License

This project is for personal use. All rights reserved.
