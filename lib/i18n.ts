export type Locale = "ru" | "en";
export const locales: Locale[] = ["en", "ru"];

export function getLocaleFromPath(pathname: string): Locale { return pathname === "/ru" || pathname.startsWith("/ru/") ? "ru" : "en"; }
export function stripLocale(pathname: string) {
  if (pathname === "/en" || pathname === "/ru") return "/";
  if (pathname.startsWith("/en/") || pathname.startsWith("/ru/")) return pathname.slice(3) || "/";
  return pathname || "/";
}
export function localizeHref(href: string, locale: Locale) {
  if (!href.startsWith("/")) return href;
  const cleanHref = stripLocale(href);
  if (locale === "en") return cleanHref;
  return cleanHref === "/" ? "/ru" : `/ru${cleanHref}`;
}
export function localeSwitchHref(pathname: string, locale: Locale) {
  const basePath = stripLocale(pathname);
  return locale === "en" ? basePath : basePath === "/" ? "/ru" : `/ru${basePath}`;
}

export const chromeContent = {
  ru: {
    homeLabel: "На главную Arvexo", mainNavLabel: "Основная навигация", mobileNavLabel: "Мобильная навигация",
    openMenu: "Открыть меню", closeMenu: "Закрыть меню", contactsLabel: "Связаться", contactsAria: "Связаться с Arvexo",
    navigation: [
      { label: "Radar", href: "/radar" }, { label: "AI Arena", href: "/ai-arena" },
      { label: "Исследования", href: "/research" }, { label: "Консалтинг", href: "/consulting" }
    ],
    mobileExtra: [{ label: "Контакты", href: "/contacts" }],
    footerDescription: "Arvexo развивает AI-продукты, проводит собственные исследования и помогает командам создавать работающие AI-системы.",
    footerQuestion: "Продукт, исследование или внедрение?", footerCta: "Связаться с Arvexo",
    footerBottom: "© 2026 Arvexo. AI-продукты, исследования и консалтинг.",
    footerColumns: { directions: "Направления", products: "Продукты", company: "Компания", socials: "Ссылки" },
    footerDirections: [{ label: "Исследования", href: "/research" }, { label: "Консалтинг", href: "/consulting" }, { label: "Основатель", href: "/founder" }],
    footerProducts: [{ label: "Arvexo Radar", href: "/radar" }, { label: "Arvexo AI Arena", href: "/ai-arena" }],
    footerCompany: [
      { label: "Об Arvexo", href: "/about" }, { label: "Контакты", href: "/contacts" }, { label: "Оферта", href: "/offer" },
      { label: "Политика конфиденциальности", href: "/privacy-policy" }, { label: "Пользовательское соглашение", href: "/terms" },
      { label: "Возвраты", href: "/refund-policy" }, { label: "Персональные данные", href: "/personal-data-consent" }
    ]
  },
  en: {
    homeLabel: "Arvexo home", mainNavLabel: "Main navigation", mobileNavLabel: "Mobile navigation",
    openMenu: "Open menu", closeMenu: "Close menu", contactsLabel: "Contact", contactsAria: "Contact Arvexo",
    navigation: [
      { label: "Radar", href: "/radar" }, { label: "AI Arena", href: "/ai-arena" },
      { label: "Research", href: "/research" }, { label: "Consulting", href: "/consulting" }
    ],
    mobileExtra: [{ label: "Contacts", href: "/contacts" }],
    footerDescription: "Arvexo builds AI products, conducts independent research and helps teams create effective AI systems.",
    footerQuestion: "Product, research or implementation?", footerCta: "Contact Arvexo",
    footerBottom: "© 2026 Arvexo. AI products, research and consulting.",
    footerColumns: { directions: "Directions", products: "Products", company: "Company", socials: "Links" },
    footerDirections: [{ label: "Research", href: "/research" }, { label: "Consulting", href: "/consulting" }, { label: "Founder", href: "/founder" }],
    footerProducts: [{ label: "Arvexo Radar", href: "/radar" }, { label: "Arvexo AI Arena", href: "/ai-arena" }],
    footerCompany: [
      { label: "About", href: "/about" }, { label: "Contacts", href: "/contacts" }, { label: "Public Offer", href: "/offer" },
      { label: "Privacy Policy", href: "/privacy-policy" }, { label: "User Agreement", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" }, { label: "Personal Data Consent", href: "/personal-data-consent" }
    ]
  }
} as const;

export const footerSocials = [
  { label: "Telegram", href: "https://t.me/arvexoai" },
  { label: "Email", href: "mailto:arvexoai@gmail.com" },
  { label: "GitHub", href: "https://github.com/alexeydoborin" },
  { label: "X", href: "https://x.com/alexeydoborin" }
];
