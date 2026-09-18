<div align="center">

<img src="public/images/arvexo-mark-v5.png" alt="Arvexo" width="96" height="96" />

# Arvexo

**Independent AI studio: products, research and consulting.**

The source of the [arvexo.ru](https://arvexo.ru) website: a bilingual, SEO-first platform with a built-in research CMS.

[![Website](https://img.shields.io/badge/website-arvexo.ru-2154d8?style=for-the-badge)](https://arvexo.ru)
[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=nextdotjs)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)](Dockerfile)

[English](README.md) · [Русский](README.ru.md) · [Live site](https://arvexo.ru) · [Deploy guide](DEPLOY.md)

<br />

<img src="public/images/arvexo-og.png" alt="Arvexo preview" width="720" />

</div>

---

## What is Arvexo

Arvexo builds focused AI products, runs applied research and helps teams turn AI experiments into working systems. This repository is the public face of that work.

| Direction | What it is |
| --- | --- |
| **Arvexo Radar** | Enterprise AI effectiveness platform: adoption visibility, business value, TCO/ROI and the practices worth scaling, built on content-free telemetry. |
| **Arvexo AI Arena** | Learning and competition platform: hard tasks, tournaments, projects and a verified AI-skills portfolio. |
| **Independent Research** | Applied work on AI effectiveness, knowledge systems and human-centered AI products. |
| **AI Consulting** | Product strategy, process audit, rapid prototyping, integration and measurement. |

## Highlights

- **Bilingual by design.** English at `/`, Russian at `/ru`. Locale is detected from `Accept-Language` on the first visit, remembered in a cookie and exposed to the app through middleware.
- **SEO that is actually engineered.** Per-page canonical URLs, `hreflang` alternates with `x-default`, OpenGraph and Twitter cards, JSON-LD (`Organization`, `Person`), a dynamic `sitemap.xml` and `robots.txt`, all generated from a single route registry in [`lib/seo.ts`](lib/seo.ts).
- **Research CMS.** A password-protected `/admin/research` with a TipTap rich-text editor (phone friendly). Articles are sanitized with DOMPurify, stored on a persistent volume and published straight into the sitemap.
- **Legal pages in both languages.** Offer, terms, privacy policy, refund policy and personal-data consent share one `LegalPage` component and one metadata pipeline.
- **Zero-config production image.** Multi-stage Docker build on `node:22-alpine`, Next.js `standalone` output, non-root runtime user.
- **Push-to-deploy.** GitHub Actions syncs the repo to the server and rebuilds the container on every push to `main`.
- **Fast by default.** Server-rendered pages, fonts self-hosted through `next/font` and a small standalone production image.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router, standalone output) |
| UI | React 19, Tailwind CSS 3, `next/font` (Onest, Cormorant, JetBrains Mono) |
| Language | TypeScript 5 (strict) |
| Editor | TipTap 3 + `isomorphic-dompurify` |
| Runtime | Node.js 22, Docker, Nginx reverse proxy |
| CI/CD | GitHub Actions, rsync over SSH, Docker Compose |

## Quick start

Requirements: **Node.js 22+** and npm.

```bash
git clone https://github.com/alexeydoborin/Arvexo.git
cd Arvexo
npm ci
npm run dev
```

Open <http://localhost:3000>. The Russian site lives at <http://localhost:3000/ru>.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build (`.next/standalone`) |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

### Environment variables

Create a `.env` (never committed) next to `docker-compose.yml`:

| Variable | Required | Description |
| --- | --- | --- |
| `ADMIN_PASSWORD` | for `/admin` | Password for the research CMS |
| `DATA_DIR` | no | Where articles are stored. Defaults to `./.data`, `/data` in Docker |
| `ARVEXO_ACCOUNT_API_URL` | no | Optional Arvexo Account API used by the auth proxy. Default `http://127.0.0.1:8001` |
| `FASTAPI_AUTH_URL` | no | Legacy fallback for the variable above |

## Run with Docker

```bash
docker compose up -d --build
```

The app listens on `127.0.0.1:3000`, ready to sit behind Nginx. Articles persist in the `arvexo-data` volume across redeploys. An Nginx example lives in [`deploy/nginx`](deploy/nginx/arvexo.conf.example); the full server setup is in [`DEPLOY.md`](DEPLOY.md).

## Project structure

```text
app/                 Routes (App Router). English at /, Russian under /ru
  admin/             Research CMS (login, article list, editor)
  api/               Admin and auth API routes
  sitemap.ts         Dynamic sitemap with hreflang alternates
  robots.ts          Crawl rules
components/          Shared UI: Header, Footer, LegalPage, FounderProfile, ...
  admin/             TipTap editor and article form
lib/
  seo.ts             Route registry, metadata factory, JSON-LD, sitemap config
  i18n.ts            Locales, navigation and footer copy
  research-store.ts  File-backed article storage
  *-content.ts       Page copy per locale
middleware.ts        Locale detection, admin guard, x-locale header
deploy/nginx/        Reverse proxy example
.github/workflows/   Push-to-deploy pipeline
```

## Adding a page

1. Add the path to `routePaths` in [`lib/seo.ts`](lib/seo.ts) and give it English and Russian titles and descriptions.
2. Create `app/<path>/page.tsx` and `app/ru/<path>/page.tsx`, each exporting `createPageMetadata("/<path>", locale)`.
3. Add it to `sitemapRoutes` if it should be indexed.

Canonical, `hreflang`, OpenGraph and the sitemap entry follow automatically.

## Deployment

Every push to `main` triggers [`deploy.yml`](.github/workflows/deploy.yml): the repo is synced to the server over SSH and rebuilt with `docker compose up -d --build`. Required repository secrets: `HOST`, `USERNAME`, `PASSWORD`, `DEPLOY_PATH` and optionally `PORT`. Details in [`DEPLOY.md`](DEPLOY.md).

## Related

- [Arvexo Radar](https://github.com/alexeydoborin/Arvexo-Radar)
- [Arvexo AI Arena](https://github.com/alexeydoborin/Arvexo-AI-Arena)
- Account and sign-in: [account.arvexo.ru](https://account.arvexo.ru) (see [`AUTH_FASTAPI.md`](AUTH_FASTAPI.md))

## License

Copyright © 2026 Alexey Doborin. **All rights reserved.**

The source is public for viewing only. Copying, modifying, redistributing, deploying or using it to train machine learning models is not permitted without written permission. See [`LICENSE`](LICENSE). Licensing requests: [arvexoai@gmail.com](mailto:arvexoai@gmail.com).

## Author

**Alexey Doborin**, founder of Arvexo. [GitHub](https://github.com/alexeydoborin) · [X](https://x.com/alexeydoborin) · [Telegram](https://t.me/arvexoai) · [arvexoai@gmail.com](mailto:arvexoai@gmail.com)

<div align="center">

<sub>Built with care for measurable progress.</sub>

</div>
