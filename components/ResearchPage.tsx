import Link from "next/link";

type ResearchPageProps = {
  locale: "en" | "ru";
  articles: Array<{ slug: string; title: string; excerpt: string }>;
};

const copy = {
  en: {
    kicker: "Independent research",
    title: "Research that stays close to real systems.",
    lead: "Arvexo studies how AI products get evaluated, understood and improved in the environments where people actually use them, not in isolated benchmarks.",
    statPublications: "Publications so far",
    statQuestions: "Active questions",
    github: "Follow on GitHub",
    founderLink: "Founder profile",
    questions: [
      {
        tag: "AI effectiveness",
        headline: "Can AI adoption be measured without reducing people to productivity scores?",
        text: "Methods for connecting real AI usage to outcomes that matter, without turning teams into dashboards."
      },
      {
        tag: "Knowledge systems",
        headline: "How do organizations find and spread the AI practices that actually work?",
        text: "Studying how effective habits move from one person's workflow to an entire team's, and what breaks that transfer."
      },
      {
        tag: "Human-centered AI",
        headline: "What makes a system understandable enough to safely improve?",
        text: "Interfaces and feedback loops that keep people able to teach, correct and trust the systems they rely on."
      }
    ],
    notesLabel: "Notes",
    closingLabel: "Get in touch",
    closingTitle: "Have a dataset, a case or a question worth exploring together?",
    closingText: "Write in with what you're seeing, we read every message and follow up on the ones with a real problem behind them.",
    closingCta: "Write to Arvexo"
  },
  ru: {
    kicker: "Независимые исследования",
    title: "Исследования, связанные с реальными системами.",
    lead: "Arvexo изучает, как оценивать, понимать и улучшать AI-продукты в средах, где ими действительно пользуются люди, а не в изолированных бенчмарках.",
    statPublications: "Публикаций пока",
    statQuestions: "Активных вопросов",
    github: "Следить на GitHub",
    founderLink: "Профиль основателя",
    questions: [
      {
        tag: "Эффективность AI",
        headline: "Можно ли измерить внедрение AI, не сводя людей к показателям продуктивности?",
        text: "Методы связи реального использования AI с результатами, которые действительно важны, без превращения команд в дашборды."
      },
      {
        tag: "Системы знаний",
        headline: "Как организации находят и распространяют практики работы с AI, которые реально работают?",
        text: "Изучаем, как удачные приёмы переходят от одного человека ко всей команде, и что мешает этому переносу."
      },
      {
        tag: "Человекоцентричный AI",
        headline: "Что делает систему достаточно понятной, чтобы её можно было безопасно улучшать?",
        text: "Интерфейсы и обратная связь, которые позволяют людям обучать, поправлять и доверять системам, на которые они полагаются."
      }
    ],
    notesLabel: "Заметки",
    closingLabel: "Связаться",
    closingTitle: "Есть датасет, кейс или вопрос, который стоит исследовать вместе?",
    closingText: "Напишите, что вы наблюдаете, мы читаем каждое сообщение и отвечаем на те, за которыми стоит реальная задача.",
    closingCta: "Написать в Arvexo"
  }
} as const;

export function ResearchPage({ articles, locale }: ResearchPageProps) {
  const isRu = locale === "ru";
  const c = copy[locale];

  return (
    <div className="research-page" id="content">
      <section className="research-hero" aria-labelledby="research-title">
        <p className="research-kicker">{c.kicker}</p>
        <h1 id="research-title">{c.title}</h1>
        <p className="research-lead">{c.lead}</p>
        <div className="research-stats">
          <div>
            <strong>{articles.length}</strong>
            <span>{c.statPublications}</span>
          </div>
          <div>
            <strong>{c.questions.length}</strong>
            <span>{c.statQuestions}</span>
          </div>
        </div>
        <div className="research-actions">
          <a href="https://github.com/alexeydoborin" className="arx-primary-cta" target="_blank" rel="noreferrer">
            {c.github}<span aria-hidden="true">↗</span>
          </a>
          <Link href={isRu ? "/ru/founder" : "/founder"} className="research-text-link">
            {c.founderLink}<span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="research-questions" aria-label={c.kicker}>
        {c.questions.map((question, index) => (
          <article className="research-q" key={question.headline}>
            <div className="research-q-meta">
              <span className="research-q-index">Q{index + 1}</span>
              <span className="research-q-tag">{question.tag}</span>
            </div>
            <div>
              <h2>{question.headline}</h2>
              <p>{question.text}</p>
            </div>
          </article>
        ))}
      </section>

      {articles.length > 0 && (
        <section className="research-notes" aria-label={c.notesLabel}>
          <p className="research-section-label">{c.notesLabel}</p>
          <div className="research-notes-list">
            {articles.map((article) => (
              <Link href={isRu ? `/ru/research/${article.slug}` : `/research/${article.slug}`} className="research-note" key={article.slug}>
                <h3>{article.title}</h3>
                {article.excerpt && <p>{article.excerpt}</p>}
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="research-closing" aria-labelledby="research-closing-title">
        <p>{c.closingLabel}</p>
        <div>
          <h2 id="research-closing-title">{c.closingTitle}</h2>
          <span>{c.closingText}</span>
          <a href="mailto:arvexoai@gmail.com">{c.closingCta}<span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </div>
  );
}
