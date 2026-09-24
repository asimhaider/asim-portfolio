# Asim Haider: Product Portfolio

Recruiter-focused portfolio for Associate Product Manager, Product Analyst and Business Analyst roles.
Built with React, TypeScript, Vite and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build
```

## Before you deploy: checklist

| What | Where |
| --- | --- |
| Email, LinkedIn and GitHub URLs | `src/data/profile.ts` |
| Resume PDF | Add `public/Asim-Haider-Resume.pdf` |
| Live demo / GitHub links per case study | `links` field in `src/data/caseStudies.ts` |
| Voxelis 3D tech stack (optional) | `tech` field in `src/data/caseStudies.ts` |
| Tools you've actually used | `src/components/sections/Skills.tsx` |
| Contact form backend (optional) | Copy `.env.example` to `.env` and set `VITE_CONTACT_FORM_ENDPOINT` (e.g. Formspree). Without it, the form opens the visitor's email client. |

Search the code for `TODO(Asim)` to find every placeholder.

**Content rule:** case studies don't claim real results. Metrics are labelled *Potential KPI*,
outcomes *Expected impact*, and research items are presented as assumptions to validate. If you
have real data (user tests, interviews, numbers), add it and remove those labels only where it's true.

## Structure

```
src/
  data/            profile.ts (links), caseStudies.ts (all case study content)
  components/
    layout/        Navbar, Footer, Layout (scroll + skip link)
    sections/      Hero, About, WhatIDo, ProductThinking, CaseStudies, Metrics,
                   Skills, Education, CareerTransition, ResumeCTA, Contact
    case-study/    CaseStudyCard, CaseStudyDetail, CaseVisual
    ui/            Button, Section, Tag, Reveal, BrandIcons
  pages/           HomePage, CaseStudyPage (/case-studies/:slug), NotFoundPage
```

To add a case study, add an object to `caseStudies` in `src/data/caseStudies.ts`. The card and
detail page are generated from it.

## Deploy

- **Vercel:** import the repo; `vercel.json` already rewrites routes to `index.html`.
- **Netlify:** build `npm run build`, publish `dist`; `public/_redirects` handles SPA routes.
