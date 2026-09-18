import Link from "next/link";
import { absoluteUrl } from "@/lib/seo";

type FounderProfileProps = {
  locale: "en" | "ru";
  articles: Array<{ slug: string; title: string; excerpt: string }>;
};

const profiles = {
  github: "https://github.com/alexeydoborin",
  x: "https://x.com/alexeydoborin",
  profi: "https://profi.ru/profile/DoborinAA/",
  basketball: "https://52.basketball/comps/player/?compId=60094&id=360793&tab=0"
} as const;

const copy = {
  ru: {
    badge: "Основатель Arvexo",
    name: "Алексей Доборин",
    role: "Основатель Arvexo и разработчик AI-продуктов",
    lead: "Создаёт продукты на пересечении искусственного интеллекта, систем знаний и практической автоматизации.",
    note: "Параллельно преподаёт математику и информатику и играет в баскетбол — разные игры, одна привычка показывать результат, а не обещания.",
    github: "Открыть GitHub",
    aboutLink: "Об Arvexo",
    workLabel: "Ключевые направления Arvexo",
    projects: [
      { index: "01", title: "Arvexo Radar", text: "Платформа для оценки внедрения AI, бизнес-ценности, TCO, ROI и практик, которые стоит масштабировать.", href: "/ru/radar" },
      { index: "02", title: "Arvexo AI Arena", text: "Среда для обучения, сложных задач, соревнований, проектов и подтверждённого портфолио AI-навыков.", href: "/ru/ai-arena" },
      { index: "03", title: "AI-консалтинг", text: "Аудит процессов, проектирование решений, быстрые прототипы, интеграции и измерение результата.", href: "/ru/consulting" }
    ],
    elsewhereLabel: "Где ещё",
    profileLinks: [
      { title: "GitHub", text: "Код, репозитории и проекты Arvexo", href: profiles.github },
      { title: "X", text: "Заметки об AI и Arvexo", href: profiles.x },
      { title: "Profi.ru", text: "Математика и информатика", href: profiles.profi },
      { title: "Баскетбол", text: "Профиль игрока и турниры", href: profiles.basketball }
    ],
    writingLabel: "Заметки",
    closingLabel: "Связаться",
    closingTitle: "Продукт, исследование или внедрение AI?",
    closingText: "Обсудим задачу, формат работы и следующий проверяемый шаг.",
    closingCta: "Написать в Arvexo"
  },
  en: {
    badge: "Arvexo founder",
    name: "Alexey Doborin",
    role: "Founder of Arvexo and AI product developer",
    lead: "Builds products at the intersection of artificial intelligence, knowledge systems and practical automation.",
    note: "Alongside Arvexo, he teaches mathematics and computer science and plays basketball, different games, same habit of showing results instead of promises.",
    github: "Open GitHub",
    aboutLink: "About Arvexo",
    workLabel: "Core Arvexo directions",
    projects: [
      { index: "01", title: "Arvexo Radar", text: "A platform for understanding AI adoption, business value, TCO, ROI and the practices worth scaling.", href: "/radar" },
      { index: "02", title: "Arvexo AI Arena", text: "An environment for learning, challenging tasks, competitions, projects and verified AI skills portfolios.", href: "/ai-arena" },
      { index: "03", title: "AI consulting", text: "Process audits, solution design, rapid prototypes, integrations and effectiveness measurement.", href: "/consulting" }
    ],
    elsewhereLabel: "Elsewhere",
    profileLinks: [
      { title: "GitHub", text: "Code, repositories and Arvexo projects", href: profiles.github },
      { title: "X", text: "Notes on AI and Arvexo", href: profiles.x },
      { title: "Profi.ru", text: "Mathematics and computer science", href: profiles.profi },
      { title: "Basketball", text: "Player profile and competitions", href: profiles.basketball }
    ],
    writingLabel: "Writing",
    closingLabel: "Contact",
    closingTitle: "A product, research question or AI implementation?",
    closingText: "Let's discuss the problem, the working format and the next verifiable step.",
    closingCta: "Contact Arvexo"
  }
} as const;

export function FounderProfile({ articles, locale }: FounderProfileProps) {
  const isRu = locale === "ru";
  const c = copy[locale];
  const profilePath = isRu ? "/ru/founder" : "/founder";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${absoluteUrl("/founder")}#person`,
    name: c.name,
    alternateName: isRu ? "Alexey Doborin" : "Алексей Доборин",
    description: c.role,
    url: absoluteUrl(profilePath),
    mainEntityOfPage: absoluteUrl(profilePath),
    sameAs: Object.values(profiles),
    jobTitle: isRu ? "Основатель и CEO Arvexo; разработчик AI-продуктов" : "Founder and CEO of Arvexo; AI product developer",
    knowsAbout: ["Artificial intelligence", "AI products", "Knowledge systems", "Business process automation", "Human-centered AI"],
    worksFor: {
      "@type": "Organization",
      "@id": `${absoluteUrl("/")}#organization`,
      name: "Arvexo",
      url: absoluteUrl("/")
    }
  };

  return (
    <div className="simple-page founder-profile" id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div className="founder-shell">
        <div className="founder-rail" aria-hidden="true">
          <span>AD / 2026</span>
          <span>ARVEXO</span>
        </div>

        <div>
          <section className="founder-hero" aria-labelledby="founder-name">
            <p className="founder-kicker">{c.badge}</p>
            <h1 id="founder-name">{c.name}</h1>
            <p className="founder-role">{c.role}</p>
            <p className="founder-lead">{c.lead}</p>
            <p className="founder-lead" style={{ marginTop: 14 }}>{c.note}</p>
            <div className="founder-actions">
              <a href={profiles.github} className="arx-primary-cta" target="_blank" rel="me noreferrer">
                {c.github}<span aria-hidden="true">↗</span>
              </a>
              <Link href={isRu ? "/ru/about" : "/about"} className="founder-text-link">
                {c.aboutLink}<span aria-hidden="true">↗</span>
              </Link>
            </div>
          </section>

          <section className="founder-ledger" aria-label={c.workLabel}>
            {c.projects.map((project) => (
              <Link href={project.href} className="founder-row" key={project.title}>
                <span className="founder-row-index">{project.index}</span>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </Link>
            ))}
          </section>

          {articles.length > 0 && (
            <section className="founder-ledger" aria-label={c.writingLabel}>
              {articles.map((article) => (
                <Link href={isRu ? `/ru/research/${article.slug}` : `/research/${article.slug}`} className="founder-row" key={article.slug}>
                  <span className="founder-row-index">{c.writingLabel}</span>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                </Link>
              ))}
            </section>
          )}

          <section className="founder-elsewhere" aria-labelledby="founder-elsewhere-title">
            <p className="founder-section-label founder-elsewhere-head" id="founder-elsewhere-title">{c.elsewhereLabel}</p>
            <div className="founder-elsewhere-grid">
              {c.profileLinks.map((profile) => (
                <a href={profile.href} target="_blank" rel="me noreferrer" className="founder-elsewhere-card" key={profile.title}>
                  <strong>{profile.title}</strong>
                  <small>{profile.text}</small>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>

      <section className="founder-closing" aria-labelledby="founder-closing-title">
        <p>{c.closingLabel}</p>
        <div>
          <h2 id="founder-closing-title">{c.closingTitle}</h2>
          <span>{c.closingText}</span>
          <Link href={isRu ? "/ru/contacts" : "/contacts"}>{c.closingCta}<span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </div>
  );
}
