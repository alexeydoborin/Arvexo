<div align="center">

<img src="public/images/arvexo-mark-v5.png" alt="Arvexo" width="96" height="96" />

# Arvexo

**Независимая AI-студия: продукты, исследования и консалтинг.**

Исходный код сайта [arvexo.ru](https://arvexo.ru): двуязычная платформа с упором на SEO и встроенной CMS для исследований.

[![Website](https://img.shields.io/badge/website-arvexo.ru-2154d8?style=for-the-badge)](https://arvexo.ru)
[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=nextdotjs)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)](Dockerfile)

[English](README.md) · [Русский](README.ru.md) · [Сайт](https://arvexo.ru) · [Инструкция по деплою](DEPLOY.md)

<br />

<img src="public/images/arvexo-og.png" alt="Превью Arvexo" width="720" />

</div>

---

## Что такое Arvexo

Arvexo создаёт прикладные AI-продукты, проводит собственные исследования и помогает командам превращать AI-эксперименты в работающие системы. Этот репозиторий — публичное лицо этой работы.

| Направление | Что это |
| --- | --- |
| **Arvexo Radar** | Платформа эффективности AI для компаний: прозрачность внедрения, бизнес-ценность, TCO/ROI и практики, которые стоит масштабировать. Работает на телеметрии без сбора содержимого. |
| **Arvexo AI Arena** | Платформа обучения и соревнований: сложные задачи, турниры, проекты и подтверждённое портфолио AI-навыков. |
| **Независимые исследования** | Прикладные работы по эффективности AI, системам знаний и человекоцентричным AI-продуктам. |
| **AI-консалтинг** | Стратегия продукта, аудит процессов, быстрые прототипы, интеграция и измерение результата. |

## Особенности

- **Два языка из коробки.** Английский на `/`, русский на `/ru`. Язык определяется по `Accept-Language` при первом визите, запоминается в cookie и передаётся приложению через middleware.
- **SEO, построенное инженерно.** Canonical для каждой страницы, `hreflang` с `x-default`, OpenGraph и Twitter-карточки, JSON-LD (`Organization`, `Person`), динамические `sitemap.xml` и `robots.txt`. Всё генерируется из единого реестра маршрутов в [`lib/seo.ts`](lib/seo.ts).
- **CMS для исследований.** Закрытая паролем `/admin/research` с редактором TipTap (удобно с телефона). Статьи очищаются через DOMPurify, хранятся на постоянном томе и сразу попадают в sitemap.
- **Юридические страницы на двух языках.** Оферта, соглашение, политика конфиденциальности, возвраты и согласие на обработку данных используют один компонент `LegalPage` и общую цепочку метаданных.
- **Готовый production-образ.** Многоэтапная сборка Docker на `node:22-alpine`, режим Next.js `standalone`, запуск не от root.
- **Деплой по push.** GitHub Actions синхронизирует репозиторий с сервером и пересобирает контейнер при каждом push в `main`.
- **Быстро по умолчанию.** Серверный рендеринг, шрифты через `next/font` и компактный standalone-образ.

## Технологии

| Слой | Выбор |
| --- | --- |
| Фреймворк | Next.js 15 (App Router, standalone) |
| Интерфейс | React 19, Tailwind CSS 3, `next/font` (Onest, Cormorant, JetBrains Mono) |
| Язык | TypeScript 5 (strict) |
| Редактор | TipTap 3 + `isomorphic-dompurify` |
| Окружение | Node.js 22, Docker, Nginx как обратный прокси |
| CI/CD | GitHub Actions, rsync по SSH, Docker Compose |

## Быстрый старт

Нужны **Node.js 22+** и npm.

```bash
git clone https://github.com/alexeydoborin/Arvexo.git
cd Arvexo
npm ci
npm run dev
```

Откройте <http://localhost:3000>. Русская версия: <http://localhost:3000/ru>.

### Скрипты

| Команда | Описание |
| --- | --- |
| `npm run dev` | Сервер разработки |
| `npm run build` | Production-сборка (`.next/standalone`) |
| `npm run start` | Запуск production-сборки |
| `npm run lint` | Проверка ESLint |

### Переменные окружения

Создайте `.env` (в репозиторий не попадает) рядом с `docker-compose.yml`:

| Переменная | Обязательна | Описание |
| --- | --- | --- |
| `ADMIN_PASSWORD` | для `/admin` | Пароль CMS исследований |
| `DATA_DIR` | нет | Где хранятся статьи. По умолчанию `./.data`, в Docker — `/data` |
| `ARVEXO_ACCOUNT_API_URL` | нет | Необязательный API Arvexo Account для auth-прокси. По умолчанию `http://127.0.0.1:8001` |
| `FASTAPI_AUTH_URL` | нет | Устаревший запасной вариант предыдущей переменной |

## Запуск в Docker

```bash
docker compose up -d --build
```

Приложение слушает `127.0.0.1:3000` и рассчитано на работу за Nginx. Статьи хранятся в томе `arvexo-data` и переживают передеплой. Пример конфига Nginx — в [`deploy/nginx`](deploy/nginx/arvexo.conf.example), полная настройка сервера — в [`DEPLOY.md`](DEPLOY.md).

## Структура проекта

```text
app/                 Маршруты (App Router). Английский на /, русский в /ru
  admin/             CMS исследований (вход, список статей, редактор)
  api/               API для админки и авторизации
  sitemap.ts         Динамический sitemap с hreflang
  robots.ts          Правила обхода
components/          Общий UI: Header, Footer, LegalPage, FounderProfile, ...
  admin/             Редактор TipTap и форма статьи
lib/
  seo.ts             Реестр маршрутов, метаданные, JSON-LD, sitemap
  i18n.ts            Языки, навигация и тексты футера
  research-store.ts  Файловое хранилище статей
  *-content.ts       Тексты страниц по языкам
middleware.ts        Определение языка, защита админки, заголовок x-locale
deploy/nginx/        Пример обратного прокси
.github/workflows/   Деплой по push
```

## Как добавить страницу

1. Добавьте путь в `routePaths` в [`lib/seo.ts`](lib/seo.ts) и задайте английский и русский заголовок с описанием.
2. Создайте `app/<путь>/page.tsx` и `app/ru/<путь>/page.tsx`, в каждом экспортируйте `createPageMetadata("/<путь>", язык)`.
3. Если страница должна индексироваться, добавьте её в `sitemapRoutes`.

Canonical, `hreflang`, OpenGraph и запись в sitemap появятся автоматически.

## Деплой

Каждый push в `main` запускает [`deploy.yml`](.github/workflows/deploy.yml): репозиторий синхронизируется с сервером по SSH и пересобирается командой `docker compose up -d --build`. Нужные секреты репозитория: `HOST`, `USERNAME`, `PASSWORD`, `DEPLOY_PATH` и при необходимости `PORT`. Подробности — в [`DEPLOY.md`](DEPLOY.md).

## Связанные проекты

- [Arvexo Radar](https://github.com/alexeydoborin/Arvexo-Radar)
- [Arvexo AI Arena](https://github.com/alexeydoborin/Arvexo-AI-Arena)
- Аккаунт и вход: [account.arvexo.ru](https://account.arvexo.ru) (см. [`AUTH_FASTAPI.md`](AUTH_FASTAPI.md))

## Лицензия

Copyright © 2026 Алексей Доборин. **Все права защищены.**

Исходный код открыт только для просмотра. Копирование, изменение, распространение, развёртывание и использование для обучения моделей машинного обучения без письменного разрешения запрещены. См. [`LICENSE`](LICENSE). По вопросам лицензирования: [arvexoai@gmail.com](mailto:arvexoai@gmail.com).

## Автор

**Алексей Доборин**, основатель Arvexo. [GitHub](https://github.com/alexeydoborin) · [X](https://x.com/alexeydoborin) · [Telegram](https://t.me/arvexoai) · [arvexoai@gmail.com](mailto:arvexoai@gmail.com)

<div align="center">

<sub>Сделано ради измеримого прогресса.</sub>

</div>
