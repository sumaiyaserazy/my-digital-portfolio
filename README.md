# CyberShield: Cybersecurity Portfolio Application

## Purpose of the app 

This is a demonstrator app that is intended to be used by the Ausbiz Cyber Security Bootcamp to teach the foundations of building, shipping, and securing a modern web application. It serves as a professional portfolio for cybersecurity specialists to showcase their expertise and services.

## Product Vision 

A web-based storytelling hub that lets cybersecurity professionals present their process, tooling experiments, and writing in one place. The current iteration intentionally removes authentication, admin dashboards, and live database dependencies so the focus stays on narrative quality and polished presentation.

## Application Overview

CyberShield now operates as a streamlined static portfolio:

- **Modern UI Components** built with shadcn/ui and Tailwind CSS
- **Content-Driven Pages** (home, projects, MCP integration, professional branding, security dashboard, legal)
- **Curated Data** powered by local TypeScript sources instead of a database
- **MCP Spotlight** with links to public specifications and auth demos
- **Lightweight Newsletter Form** that records intent on the client and surfaces clear toasts

## Highlights

1. **Projects Timeline** – Week-by-week breakdown of the build, plus featured engagements drawn from `data/featured-projects.ts`.
2. **MCP Integration Page** – Summarises protocol support and links directly to public references.
3. **Security Dashboard** – Presents threat-model inspired metrics to showcase reporting style.
4. **Consistent CTAs** – Navigation, quick links, and footer all map to real routes—no dead ends.

## Technical Architecture

- **Framework**: Next.js App Router (static + server components)
- **Styling**: Tailwind CSS, CSS utility animations, and theming via `next-themes`
- **Components**: shadcn/ui primitives plus bespoke cards and sections
- **Data Layer**: Plain TypeScript modules in `data/` (no external database)
- **State**: Minimal client state (theme + newsletter form submission status)

There is intentionally **no backend stack** (no Clerk, middleware, Neon, Drizzle, or server actions). Everything required to run the site lives in the repo.

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Installation
```bash
pnpm install
pnpm dev
```

Visit `http://localhost:3000` to browse the portfolio. No environment variables are required.

### Project Structure
- `app/` – Routes, layouts, and page sections
- `components/` – Shared UI primitives
- `data/` – Static featured projects
- `public/` – Images used across the site

## Licensing

Ausbiz Consulting Pty Ltd provides licenses for non-commercial use only.

© Ausbiz Consulting. All rights reserved.

## Licensing

Ausbiz Consulting Pty Ltd provides licenses for non-commercial use only.

### Copyright

© Ausbiz Consulting. All rights reserved.
