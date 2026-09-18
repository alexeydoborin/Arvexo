"use client";

import Link from "next/link";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";
import { LangProvider, useLang } from "@/context/LangContext";
import { ecosystemContent, type EcosystemLocale } from "@/lib/ecosystem-content";

const github = {
  radar: "https://github.com/alexeydoborin/Arvexo-Radar",
  arena: "https://github.com/alexeydoborin/Arvexo-AI-Arena"
};

function localize(path: string, locale: EcosystemLocale) {
  return locale === "ru" ? `/ru${path}` : path;
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function EcosystemLandingInner({ defaultLang }: { defaultLang: EcosystemLocale }) {
  const { lang } = useLang();
  const locale = (lang === "ru" ? "ru" : "en") as EcosystemLocale;
  const c = ecosystemContent[locale] ?? ecosystemContent[defaultLang];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="ecosystem-v2">
      <a className="arx-skip-link" href="#main">{locale === "ru" ? "К содержанию" : "Skip to content"}</a>
      <header className="eco-header">
        <Link href={locale === "ru" ? "/ru" : "/"} className="eco-logo" aria-label="Arvexo">
          <Logo />
        </Link>
        <nav className="eco-nav" aria-label={locale === "ru" ? "Основная навигация" : "Main navigation"}>
          {c.navigation.map(([label, path]) => <Link key={path} href={localize(path, locale)}>{label}</Link>)}
        </nav>
        <div className="eco-actions">
          <a className="eco-contact" href="mailto:arvexoai@gmail.com">{c.contact}<Arrow /></a>
          <button type="button" className="eco-menu" aria-label={c.menu} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span className="eco-menu-label">{c.menu}</span>
            <span className="eco-menu-lines" aria-hidden="true"><i /><i /></span>
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="eco-mobile-nav">
          <button type="button" aria-label={c.close} onClick={() => setMenuOpen(false)}>×</button>
          <nav>
            {c.navigation.map(([label, path]) => <Link key={path} href={localize(path, locale)} onClick={() => setMenuOpen(false)}>{label}</Link>)}
            <Link href={localize("/about", locale)} onClick={() => setMenuOpen(false)}>{locale === "ru" ? "Об Arvexo" : "About"}</Link>
          </nav>
          <LanguageSwitcher />
        </div>
      )}

      <div id="main">
        <section className="eco-hero">
          <h1>{c.hero.title}</h1>
          <div className="eco-hero-bottom">
            <p>{c.hero.lead}</p>
            <div className="eco-buttons">
              <a className="eco-button eco-button-primary" href="#projects">{c.hero.primary}<span aria-hidden="true">↓</span></a>
              <Link className="eco-button eco-button-quiet" href={localize("/about", locale)}>{c.hero.secondary}</Link>
            </div>
          </div>
        </section>

        <section className="eco-thesis">
          <p className="eco-label">{c.thesis.label}</p>
          <div><h2>{c.thesis.title}</h2><p>{c.thesis.text}</p></div>
        </section>

        <section className="eco-projects" id="projects">
          <div className="eco-section-head">
            <p className="eco-label">{c.projects.label}</p>
            <div><h2>{c.projects.title}</h2><p>{c.projects.lead}</p></div>
          </div>
          <ProjectCard
            className="eco-project-radar"
            project={c.projects.radar}
            href={localize("/radar", locale)}
            githubHref={github.radar}
            visual="radar"
            ui={c.ui}
          />
          <ProjectCard
            className="eco-project-arena"
            project={c.projects.arena}
            href={localize("/ai-arena", locale)}
            githubHref={github.arena}
            visual="arena"
            ui={c.ui}
          />
        </section>

        <section className="eco-capabilities">
          <p className="eco-label">{c.capabilities.label}</p>
          <div className="eco-capability-grid">
            <article>
              <span>R</span><h2>{c.capabilities.researchTitle}</h2><p>{c.capabilities.researchText}</p>
              <Link href={localize("/research", locale)}>{c.capabilities.researchCta}<Arrow /></Link>
            </article>
            <article id="f1-race-metaverse" className="eco-capability-f1">
              <span>F1</span><h2>{c.capabilities.f1Title}</h2><p>{c.capabilities.f1Text}</p>
              <small>{c.capabilities.f1Status}</small>
            </article>
          </div>
        </section>

        <section className="eco-closing">
          <h2>{c.closing.title}</h2><p>{c.closing.text}</p>
          <a className="eco-button eco-button-light" href="mailto:arvexoai@gmail.com">{c.closing.cta}<Arrow /></a>
        </section>
      </div>

    </div>
  );
}

type ProjectCopy = (typeof ecosystemContent)["en"]["projects"]["radar"] | (typeof ecosystemContent)["en"]["projects"]["arena"] | (typeof ecosystemContent)["ru"]["projects"]["radar"] | (typeof ecosystemContent)["ru"]["projects"]["arena"];
type UiCopy = (typeof ecosystemContent)[EcosystemLocale]["ui"];

function ProjectCard({ className, githubHref, href, project, visual, ui }: { className: string; githubHref: string; href: string; project: ProjectCopy; visual: "radar" | "arena"; ui: UiCopy }) {
  const visualContent = visual === "radar" ? (
    <>
      <div className="eco-ui-top"><span>{ui.radarHead}</span><span>{ui.radarPeriod}</span></div>
      <div className="eco-radar-kpis">{ui.radarKpis.map((kpi) => <div key={kpi.label}><span>{kpi.label}</span><strong>{kpi.value}</strong><small>{kpi.delta}</small></div>)}</div>
      <div className="eco-radar-teams"><p>{ui.radarTeamsHead}</p>{ui.radarTeams.map((team) => <div className="eco-radar-team" key={team.name}><span>{team.name}</span><i><b style={{ width: team.width }} /></i><small>{team.value}</small></div>)}</div>
    </>
  ) : (
    <>
      <div className="eco-ui-top"><span className="eco-arena-track">{ui.arenaTrack}</span><span>{ui.arenaMeta}</span></div>
      <div className="eco-arena-task"><h4>{ui.arenaTaskTitle}</h4><p>{ui.arenaTaskText}</p><div className="eco-arena-tags">{ui.arenaTags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="eco-arena-progress"><div><span>{ui.arenaProgressLabel}</span><span>{ui.arenaProgressValue}</span></div><i><b /></i></div></div>
      <div className="eco-arena-stats">{ui.arenaStats.map((stat) => <div key={stat.label}><span>{stat.label}</span><strong>{stat.value}</strong></div>)}</div>
    </>
  );

  return (
    <article className={`eco-project ${className}`}>
      <div className={`eco-project-visual eco-visual-${visual}`}>{visualContent}</div>
      <div className="eco-project-copy">
        <p className="eco-project-index">{project.index}</p><h3>{project.title}</h3><p>{project.description}</p>
        <ul>{project.points.map((point) => <li key={point}>{point}</li>)}</ul>
        <div className="eco-project-links">
          <Link href={href}>{project.cta}<Arrow /></Link>
          <a href={githubHref} target="_blank" rel="noreferrer">{project.github}</a>
        </div>
      </div>
    </article>
  );
}

export function EcosystemLanding({ defaultLang = "en" }: { defaultLang?: EcosystemLocale }) {
  return <LangProvider defaultLang={defaultLang}><EcosystemLandingInner defaultLang={defaultLang} /></LangProvider>;
}
