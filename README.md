# Racheal Wambui Njuguna — Portfolio

A fast, fully responsive personal portfolio for a Software Engineer, built with **Vue 3**, **Vite**, and **Tailwind CSS v4**.

## Highlights

- Single-page site with sticky nav, smooth scrolling, and a mobile hamburger menu
- Scroll-reveal animations via a custom `v-reveal` directive (respects `prefers-reduced-motion`)
- All content lives in one file — [`src/data/cv.js`](src/data/cv.js) — so updates never touch markup
- Dark, gradient-accented design with glassmorphism cards and an ambient animated background
- Accessible: semantic landmarks, keyboard-friendly, labelled icon links

## Tech

| Area       | Choice                          |
| ---------- | ------------------------------- |
| Framework  | Vue 3 (`<script setup>`)        |
| Build tool | Vite                           |
| Styling    | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Fonts      | Sora (display) + Inter (body)  |

## Getting started

```bash
npm install
npm run dev        # local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Editing content

Open [`src/data/cv.js`](src/data/cv.js) and edit the exported objects
(`personal`, `summary`, `skills`, `experience`, `projects`, `education`,
`certifications`, `awards`, `references`, `navLinks`). Every section renders
from that data.

## Deploying

### GitHub Pages (automated)

A workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
builds and deploys on every push to `main`. Enable it once:

**Repo → Settings → Pages → Build and deployment → Source: GitHub Actions**

`vite.config.js` uses `base: './'`, so it works both at a domain root and at
the `/Portfolio/` project subpath without further config.

### Anywhere else

`npm run build` and serve the static `dist/` folder (Netlify, Vercel, Cloudflare Pages, S3, …).

## Project structure

```
src/
  data/cv.js            # all portfolio content
  directives/reveal.js  # scroll-reveal directive
  components/
    TheNav.vue
    HeroSection.vue
    AboutSection.vue
    SkillsSection.vue
    ExperienceSection.vue
    ProjectsSection.vue
    EducationSection.vue
    ContactSection.vue
    TheFooter.vue
    AppIcon.vue          # inline SVG icon set
    SectionHeading.vue
  App.vue
  main.js
  style.css              # Tailwind import + design tokens
```
