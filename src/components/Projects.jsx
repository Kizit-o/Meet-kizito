import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Projects.css";

import Projimg1 from "../assets/Port.png";
import NFT      from "../assets/NFT.png";
import Prompto  from "../assets/prompto.png";
import Zyra     from "../assets/Zyra.jpg";

/* ── DATA ────────────────────────────────────────────────────── */

// Featured — always visible, full-width card
const featured = {
  badge:       "Startup Project",
  title:       "Zyra",
  index:       "/01",
  description:
    "Frontend developer on Zyra, a donations-facilitation platform built for Africa. Empowering communities to raise funds for medical, educational, and social needs. Fully supports crypto + fiat.",
  image:       Zyra,
  tags:        ["React", "Tailwind", "Next.js", "Supabase"],
  github:      null,
  live:        "https://zyra.fund",
};

// Rest — revealed inside toggle
const rest = [
  {
    title:       "Portfolio Website",
    index:       "/02",
    description: "Personal portfolio with responsive animations and modern tooling.",
    image:       Projimg1,
    tags:        ["React", "JavaScript", "Vite", "CSS3"],
    github:      "https://github.com/Chisomkizito/portfolio",
    live:        "https://chisomkizito.vercel.app",
  },
  {
    title:       "Prompto",
    index:       "/03",
    description: "AI-powered app that transforms raw inputs into expertly crafted prompts for LLMs.",
    image:       Prompto,
    tags:        ["React", "OpenAI", "JavaScript"],
    github:      "https://github.com/Kizit-o/Prompto",
    live:        "#",
  },
  {
    title:       "KZT-NFTs",
    index:       "/04",
    description: "NFT marketplace treating digital art as exhibition pieces, powered by OpenSea's real data.",
    image:       NFT,
    tags:        ["React", "Tailwind", "Firebase"],
    github:      "https://github.com/Kizit-o/KZT-NFTs",
    live:        "#",
  },
];

/* ── COMPONENT ───────────────────────────────────────────────── */
function Projects() {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out" });
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-inner">

        {/* ── EYEBROW "02 / WORK" ───────────────── */}
        <div className="projects-eyebrow" data-aos="fade-up">
          <span className="proj-eyebrow-tag">02 / WORK</span>
          <div className="proj-eyebrow-rule" />
        </div>

        {/* ── TITLE ROW ─────────────────────────── */}
        {/* Spec: flex-col (mobile) → flex-row items-end justify-between (md) mb-16 */}
        <div className="projects-title-row">
          <h2 className="projects-h2" data-aos="fade-up" data-aos-delay="80">
            Selected projects,{" "}
            <em className="projects-h2-em">shipped.</em>
          </h2>
          <p className="projects-subtitle" data-aos="fade-up" data-aos-delay="180">
            A snapshot of what I've been building lately, across the web, AI
            tooling, and the open economy.
          </p>
        </div>

        {/* ── FEATURED CARD — ZYRA ──────────────── */}
        {/* Spec: full-width, border border-border, hover:-translate-y-1
                 hover:border-primary/50 hover:shadow-card 500ms           */}
        <div
          className="featured-card"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          {/* Top accent line — fades in on hover */}
          <div className="card-accent-line" aria-hidden="true" />

          <div className="featured-card-body">

            {/* Badge row — spec: flex gap-2 mb-6 10px cyan pulse dot */}
            <div className="featured-badge-row">
              <span className="badge-dot" aria-hidden="true" />
              <span className="badge-text">{featured.badge}</span>
            </div>

            {/* Title row — spec: flex items-start justify-between gap-4 mb-4 */}
            <div className="featured-title-row">
              <h3 className="featured-h3">{featured.title}</h3>
              <span className="card-index">{featured.index}</span>
            </div>

            {/* Description — spec: text-muted leading-relaxed mb-6 text-lg max-w-2xl */}
            <p className="featured-description">{featured.description}</p>

            {/* Tags */}
            <div className="card-tags">
              {featured.tags.map((t) => (
                <span key={t} className="card-tag">{t}</span>
              ))}
            </div>

            {/* Buttons — spec: flex flex-wrap gap-3 */}
            <div className="card-buttons">
              {featured.github && (
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                >
                  CODE <FaArrowRight className="btn-arrow" />
                </a>
              )}
              <a
                href={featured.live}
                target="_blank"
                rel="noreferrer"
                className="btn-filled"
              >
                VISIT <FaArrowRight className="btn-arrow" />
              </a>
            </div>

          </div>
        </div>

        {/* ── MORE WORK TOGGLE BLOCK ────────────── */}
        {/* Spec: mt-16 max-w-4xl, border-t border-border pt-10 */}
        <div className="more-work-wrapper">

          {/* Header row */}
          <div className="more-work-header">
            <div className="more-work-left">
              <p className="more-work-eyebrow">MORE WORK</p>
              <h3 className="more-work-title">
                Other Projects, Experiments &amp; Builds
              </h3>
            </div>

            <button
              className={`more-toggle-btn${showMore ? " more-toggle-btn--open" : ""}`}
              onClick={() => setShowMore(!showMore)}
              aria-expanded={showMore}
            >
              <span className="toggle-icon">{showMore ? "−" : "+"}</span>
              <span className="toggle-label">
                {showMore ? "Close" : "See More Projects"}
              </span>
            </button>
          </div>

          {/* Collapsible grid — spec: grid-rows 0fr → 1fr, 700ms ease-out */}
          <div className={`more-work-body${showMore ? " more-work-body--open" : ""}`}>
            <div className="more-work-inner">
              <div className="rest-grid">
                {rest.map((p, i) => (
                  <div
                    key={p.title}
                    className="rest-card"
                    data-aos="fade-up"
                    data-aos-delay={i * 90}
                  >
                    <div className="card-accent-line" aria-hidden="true" />

                    <div className="rest-card-body">

                      {/* Title + index */}
                      <div className="rest-title-row">
                        <h3 className="rest-h3">{p.title}</h3>
                        <span className="card-index">{p.index}</span>
                      </div>

                      {/* Description */}
                      <p className="rest-description">{p.description}</p>

                      {/* Tags */}
                      <div className="card-tags">
                        {p.tags.map((t) => (
                          <span key={t} className="card-tag">{t}</span>
                        ))}
                      </div>

                      {/* Buttons — mt-auto pushes to bottom of card */}
                      <div className="card-buttons card-buttons--bottom">
                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-outline"
                          >
                            CODE <FaArrowRight className="btn-arrow" />
                          </a>
                        )}
                        {p.live && p.live !== "#" && (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-filled"
                          >
                            LIVE DEMO <FaArrowRight className="btn-arrow" />
                          </a>
                        )}
                        {p.live === "#" && (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-filled"
                          >
                            LIVE DEMO <FaArrowRight className="btn-arrow" />
                          </a>
                        )}
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;