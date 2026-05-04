import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Projects.css";

import Projimg1     from "../assets/Port.png";
import NFT          from "../assets/NFT.png";
import Prompto      from "../assets/prompto.png";
import Zyra         from "../assets/Zyra.jpg";
import certificate  from "../assets/cert.png";

/* ── DATA ────────────────────────────────────────────────────── */
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
    <>
      {/* ════════════════════════════════════════════
          PROJECTS SECTION
          ════════════════════════════════════════════ */}
      <section id="projects" className="projects-section">
        <div className="projects-inner">

          {/* EYEBROW */}
          <div className="projects-eyebrow" data-aos="fade-up">
            <span className="proj-eyebrow-tag">02 / WORK</span>
            <div className="proj-eyebrow-rule" />
          </div>

          {/* TITLE ROW */}
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

          {/* FEATURED CARD — ZYRA */}
          <div className="featured-card" data-aos="fade-up" data-aos-delay="120">
            <div className="card-accent-line" aria-hidden="true" />
            <div className="featured-card-body">

              <div className="featured-badge-row">
                <span className="badge-dot" aria-hidden="true" />
                <span className="badge-text">{featured.badge}</span>
              </div>

              <div className="featured-title-row">
                <h3 className="featured-h3">{featured.title}</h3>
                <span className="card-index">{featured.index}</span>
              </div>

              <p className="featured-description">{featured.description}</p>

              <div className="card-tags">
                {featured.tags.map((t) => (
                  <span key={t} className="card-tag">{t}</span>
                ))}
              </div>

              <div className="card-buttons">
                {featured.github && (
                  <a href={featured.github} target="_blank" rel="noreferrer" className="btn-outline">
                    CODE <FaArrowRight className="btn-arrow" />
                  </a>
                )}
                <a href={featured.live} target="_blank" rel="noreferrer" className="btn-filled">
                  VISIT <FaArrowRight className="btn-arrow" />
                </a>
              </div>

            </div>
          </div>

          {/* MORE WORK TOGGLE */}
          <div className="more-work-wrapper">
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

            {/* Collapsible grid */}
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

                        <div className="rest-title-row">
                          <h3 className="rest-h3">{p.title}</h3>
                          <span className="card-index">{p.index}</span>
                        </div>

                        <p className="rest-description">{p.description}</p>

                        <div className="card-tags">
                          {p.tags.map((t) => (
                            <span key={t} className="card-tag">{t}</span>
                          ))}
                        </div>

                        <div className="card-buttons card-buttons--bottom">
                          {p.github && (
                            <a href={p.github} target="_blank" rel="noreferrer" className="btn-outline">
                              CODE <FaArrowRight className="btn-arrow" />
                            </a>
                          )}
                          <a href={p.live} target="_blank" rel="noreferrer" className="btn-filled">
                            LIVE DEMO <FaArrowRight className="btn-arrow" />
                          </a>
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

      {/* ════════════════════════════════════════════
          CERTIFICATION SECTION
          ════════════════════════════════════════════ */}
      <section id="certification" className="cert-section">
        <div className="cert-inner">

          <div className="cert-card" data-aos="fade-up">
            <div className="cert-grid">

              {/* LEFT — Text panel */}
              <div className="cert-text-panel">

                <div className="cert-eyebrow-row">
                  <span className="cert-stars" aria-label="4 stars">★★★★</span>
                  <span className="cert-eyebrow-label">CERTIFICATION</span>
                </div>

                <h3 className="cert-title">
                  Legacy Responsive Web Design V8
                </h3>

                <p className="cert-subtitle">
                  freeCodeCamp · Developer Certification
                </p>

                <p className="cert-verified">
                  ✓ VERIFIED BY FREECODECAMP
                </p>

                <a
                  href="https://www.freecodecamp.org/certification/kizztech/responsive-web-design"
                  target="_blank"
                  rel="noreferrer"
                  className="cert-btn"
                >
                  VIEW CERTIFICATE
                  <FaArrowRight className="cert-btn-arrow" />
                </a>

              </div>

              {/* RIGHT — Certificate image */}
              <div className="cert-image-panel">
                <img
                  src={certificate}
                  alt="freeCodeCamp Legacy Responsive Web Design certification awarded to Ngere Chisom Kizito"
                  className="cert-image"
                  loading="lazy"
                />
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Projects;