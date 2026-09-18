import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";

export const SITE_URL = "https://arvexo.ru";
export const SITE_NAME = "Arvexo";
export const SITE_TITLE = "Arvexo — AI Products, Research and Consulting";
export const SITE_DESCRIPTION = "Arvexo builds Arvexo Radar and Arvexo AI Arena, conducts independent AI research and helps teams create effective AI systems.";
export const SEO_IMAGE = "/images/arvexo-og.png";
export const SITE_ICON = "/icon.png?v=20260917";
export const LAST_MODIFIED = new Date("2026-08-22T00:00:00.000Z");
export const LEGAL_LAST_MODIFIED = new Date("2026-06-09T00:00:00.000Z");
export const legalPaths: readonly string[] = ["/offer", "/refund-policy", "/personal-data-consent", "/privacy-policy", "/terms"];

export const routePaths = [
  "/", "/about", "/founder", "/radar", "/ai-arena", "/research", "/consulting",
  "/shop", "/vpn", "/telegram-bots", "/family-ecosystem", "/robots-rd", "/care-robot-rd",
  "/contacts", "/offer", "/refund-policy", "/personal-data-consent", "/privacy-policy", "/terms"
] as const;

export type BaseRoutePath = (typeof routePaths)[number];
type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
type SeoCopy = { description: string; title: string };

const en: Record<BaseRoutePath, SeoCopy> = {
  "/": { title: SITE_TITLE, description: SITE_DESCRIPTION },
  "/about": { title: "About — Arvexo", description: "Arvexo is an independent AI studio building products, conducting research and helping teams create effective AI systems." },
  "/founder": { title: "Alexey Doborin — Founder of Arvexo and AI Product Developer", description: "Alexey Doborin is the founder and CEO of Arvexo, an AI product developer working on AI effectiveness, knowledge systems and practical automation." },
  "/radar": { title: "Arvexo Radar — Enterprise AI Effectiveness Platform", description: "Understand AI adoption, business value and the practices worth scaling with content-free enterprise telemetry." },
  "/ai-arena": { title: "Arvexo AI Arena — Learning and Competition Platform", description: "A platform for learning, challenging tasks, tournaments, projects and verified AI skills portfolios." },
  "/research": { title: "Independent AI Research — Arvexo", description: "Applied research into AI effectiveness, knowledge systems and human-centered AI products." },
  "/consulting": { title: "AI Consulting — Arvexo", description: "AI product strategy, process audit, rapid prototyping, integration and effectiveness measurement." },
  "/shop": { title: "AI Shop — Arvexo", description: "Arvexo legacy digital products page." },
  "/vpn": { title: "VPN Access — Arvexo", description: "Arvexo legacy VPN access page." },
  "/telegram-bots": { title: "Telegram Bots — Arvexo", description: "Arvexo legacy Telegram automation page." },
  "/family-ecosystem": { title: "Family Ecosystem — Arvexo", description: "Arvexo family technology concept page." },
  "/robots-rd": { title: "Robots R&D — Arvexo", description: "Arvexo robotics research concept page." },
  "/care-robot-rd": { title: "Care Robot R&D — Arvexo", description: "Arvexo assistive robotics research concept page." },
  "/contacts": { title: "Contacts — Arvexo", description: "Contact Arvexo about products, research, consulting and collaboration." },
  "/offer": { title: "Public Offer — Arvexo", description: "Read the Arvexo public offer." },
  "/refund-policy": { title: "Refund Policy — Arvexo", description: "Read the Arvexo refund policy." },
  "/personal-data-consent": { title: "Personal Data Consent — Arvexo", description: "Read the Arvexo personal data processing consent." },
  "/privacy-policy": { title: "Privacy Policy — Arvexo", description: "Read the Arvexo privacy policy." },
  "/terms": { title: "User Agreement — Arvexo", description: "Read the Arvexo user agreement." }
};

const ru: Record<BaseRoutePath, SeoCopy> = {
  "/": { title: "Arvexo — AI-продукты, исследования и консалтинг", description: "Arvexo развивает Arvexo Radar и Arvexo AI Arena, проводит собственные исследования и помогает командам создавать эффективные AI-системы." },
  "/about": { title: "Об Arvexo", description: "Arvexo — независимая AI-студия: собственные продукты, исследования и помощь командам в создании эффективных AI-систем." },
  "/founder": { title: "Алексей Доборин — основатель Arvexo и разработчик AI-продуктов", description: "Алексей Доборин — основатель и CEO Arvexo, разработчик AI-продуктов в области эффективности AI, систем знаний и автоматизации." },
  "/radar": { title: "Arvexo Radar — платформа эффективности AI", description: "Прозрачность внедрения AI, оценка бизнес-ценности и масштабирование лучших практик без сбора содержимого промптов." },
  "/ai-arena": { title: "Arvexo AI Arena — обучение и соревнования", description: "Платформа для обучения, сложных задач, турниров, проектов и подтверждённого портфолио AI-навыков." },
  "/research": { title: "Исследования в области AI — Arvexo", description: "Прикладные исследования эффективности AI, систем знаний и человекоцентричных AI-продуктов." },
  "/consulting": { title: "AI-консалтинг — Arvexo", description: "Стратегия AI-продуктов, аудит процессов, быстрые прототипы, интеграция и измерение эффективности." },
  "/shop": { title: "AI Shop — Arvexo", description: "Архивная страница цифровых продуктов Arvexo." },
  "/vpn": { title: "VPN-доступ — Arvexo", description: "Архивная страница VPN-доступа Arvexo." },
  "/telegram-bots": { title: "Telegram-боты — Arvexo", description: "Архивная страница автоматизации в Telegram." },
  "/family-ecosystem": { title: "Семейная экосистема — Arvexo", description: "Концепция семейных технологий Arvexo." },
  "/robots-rd": { title: "Robots R&D — Arvexo", description: "Исследовательская концепция робототехники Arvexo." },
  "/care-robot-rd": { title: "Care Robot R&D — Arvexo", description: "Исследовательская концепция вспомогательной робототехники Arvexo." },
  "/contacts": { title: "Контакты — Arvexo", description: "Свяжитесь с Arvexo по вопросам продуктов, исследований, консалтинга и сотрудничества." },
  "/offer": { title: "Публичная оферта — Arvexo", description: "Публичная оферта Arvexo." },
  "/refund-policy": { title: "Политика возвратов — Arvexo", description: "Политика возвратов Arvexo." },
  "/personal-data-consent": { title: "Согласие на обработку персональных данных — Arvexo", description: "Согласие на обработку персональных данных Arvexo." },
  "/privacy-policy": { title: "Политика конфиденциальности — Arvexo", description: "Политика конфиденциальности Arvexo." },
  "/terms": { title: "Пользовательское соглашение — Arvexo", description: "Пользовательское соглашение Arvexo." }
};

export const routeSeo: Record<Locale, Record<BaseRoutePath, SeoCopy>> = { en, ru };

export const sitemapRoutes: Array<{ changeFrequency: ChangeFrequency; path: BaseRoutePath; priority: number }> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/radar", changeFrequency: "weekly", priority: .94 },
  { path: "/ai-arena", changeFrequency: "weekly", priority: .94 },
  { path: "/research", changeFrequency: "monthly", priority: .88 },
  { path: "/consulting", changeFrequency: "monthly", priority: .86 },
  { path: "/about", changeFrequency: "monthly", priority: .72 },
  { path: "/founder", changeFrequency: "monthly", priority: .72 },
  { path: "/contacts", changeFrequency: "monthly", priority: .7 },
  { path: "/offer", changeFrequency: "yearly", priority: .35 },
  { path: "/refund-policy", changeFrequency: "yearly", priority: .32 },
  { path: "/personal-data-consent", changeFrequency: "yearly", priority: .32 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: .35 },
  { path: "/terms", changeFrequency: "yearly", priority: .35 }
];

export function absoluteUrl(path = "/") { return new URL(path, SITE_URL).toString(); }
export function localizedPath(path: BaseRoutePath, locale: Locale) { return locale === "en" ? path : path === "/" ? "/ru" : `/ru${path}`; }
export function languageAlternates(path: BaseRoutePath) { return { en: absoluteUrl(localizedPath(path, "en")), ru: absoluteUrl(localizedPath(path, "ru")), "x-default": absoluteUrl(localizedPath(path, "en")) }; }

export function createPageMetadata(path: BaseRoutePath, locale: Locale): Metadata {
  const copy = routeSeo[locale][path];
  const url = absoluteUrl(localizedPath(path, locale));
  return {
    title: copy.title, description: copy.description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: { title: copy.title, description: copy.description, url, siteName: SITE_NAME, type: "website", locale: locale === "ru" ? "ru_RU" : "en_US", alternateLocale: locale === "ru" ? ["en_US"] : ["ru_RU"], images: [{ url: absoluteUrl(SEO_IMAGE), width: 1200, height: 630, alt: "Arvexo" }] },
    twitter: { card: "summary_large_image", title: copy.title, description: copy.description, images: [absoluteUrl(SEO_IMAGE)] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } }
  };
}

export const structuredData = [
  { "@context": "https://schema.org", "@type": "Organization", "@id": `${absoluteUrl("/")}#organization`, name: SITE_NAME, url: SITE_URL, logo: absoluteUrl(SITE_ICON), sameAs: ["https://t.me/arvexoai", "https://github.com/alexeydoborin/Arvexo-Radar", "https://github.com/alexeydoborin/Arvexo-AI-Arena"], email: "arvexoai@gmail.com", founder: { "@type": "Person", "@id": `${absoluteUrl("/founder")}#person`, name: "Alexey Doborin", alternateName: "Алексей Доборин", url: absoluteUrl("/founder"), sameAs: ["https://github.com/alexeydoborin", "https://x.com/alexeydoborin", "https://profi.ru/profile/DoborinAA/", "https://52.basketball/comps/player/?compId=60094&id=360793&tab=0"] } },
  { "@context": "https://schema.org", "@type": "WebSite", name: SITE_NAME, url: SITE_URL, inLanguage: ["en", "ru"] }
];
