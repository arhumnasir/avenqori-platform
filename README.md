# AVENQORI — React + Vite Frontend

A responsive learning-platform frontend built with React, Vite, React Router, Lucide icons and CSS.

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local URL (normally `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Format the source code

Prettier is included as a development dependency. After `npm install`, format the complete source tree with:

```bash
npm run format
```

Check formatting without changing files:

```bash
npm run format:check
```

Formatting rules are in `.prettierrc.json`.

## Main routes

| Route | Purpose |
| --- | --- |
| `/` | Landing page |
| `/courses` | Course directory |
| `/tutors` | Tutor directory |
| `/features` | Platform features |
| `/pricing` | Pricing plans (demo content) |
| `/about` | About AVENQORI |
| `/contact` | Contact form (frontend demo) |
| `/login` | Student / Tutor login UI |
| `/signup` | Student / Tutor signup UI |
| `/forgot-password` | Password recovery UI |
| `/terms` | Terms placeholder |
| `/privacy` | Privacy placeholder |

## Source structure

- `src/App.jsx` — route definitions and shared public-page layout.
- `src/components/Navbar.jsx` — responsive navigation, course dropdown and theme control.
- `src/components/Footer.jsx` — footer and newsletter UI.
- `src/pages/Home.jsx` — landing page sections.
- `src/pages/Pages.jsx` — Courses, Tutors, Features, Pricing, About, Contact and legal pages.
- `src/pages/Auth.jsx` — student/tutor login and signup screens.
- `src/context/` — authentication and theme context.
- `src/services/api.js` — API client setup.

## API configuration

Copy `.env.example` to `.env` and set `VITE_API_URL` to your backend API base URL. Authentication and payment services require a real backend. Social sign-in buttons are integration placeholders until OAuth credentials are configured.

## Important before launch

This repository is a frontend project, not a complete production marketplace. Connect and test backend authentication, tutor booking, course delivery, payments, email delivery, legal policies and OAuth providers before publishing. Pricing and sample tutor/course details are demonstration content.
