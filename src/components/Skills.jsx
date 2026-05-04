import React, { useState } from "react";
import "../styles/Skills.css";

/* ── CHAPTERS DATA ─────────────────────────────────────────── */
const chapters = [
  {
    num: "01",
    years: "2020 TO 2021",
    title: "The Building Blocks",
    struggle: "Everything looked like hieroglyphics. Confusion ruled; progress crawled.",
    breakthrough: "I didn't quit. Every tutorial, every failed line of code sharpened my focus.",
    tags: ["HTML5", "CSS3"],
  },
  {
    num: "02",
    years: "2023 TO 2024",
    title: "The Framework Evolution",
    struggle: "Git felt foreign. Imposter syndrome, a daily visitor.",
    breakthrough: "First real projects shipped. Confidence followed, commit by commit.",
    tags: ["React", "GitHub", "Figma"],
  },
  {
    num: "03",
    years: "2024 TO PRESENT",
    title: "The Craftsman",
    struggle: "Tech stacks multiplied faster than I could learn. Burnout lurked.",
    breakthrough: "Learned to pace myself and trust the process. This portfolio is proof.",
    tags: ["React Ecosystem", "State Management", "Modern Tooling"],
  },
];

function Skills() {
  const [open, setOpen] = useState(false);

  return (
    <section id="skills" className="origin-section">
      <div className="origin-inner">

        {/* ── HEADER ROW ─────────────────────────────────────── */}
        {/**/}
        <div className="origin-header">

          {/* Left — eyebrow + title */}
          <div className="origin-header-left">
            <p className="origin-eyebrow">THE ORIGIN STORY</p>
            <h2 className="origin-title">
              How I Started, A Story of Growth, Struggle &amp; Becoming
            </h2>
          </div>

          {/* Right — toggle button */}
          <button
            className={`origin-toggle${open ? " origin-toggle--open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            <span className="toggle-icon">{open ? "−" : "+"}</span>
            <span className="toggle-label">
              {open ? "Close" : "Read My Story"}
            </span>
          </button>

        </div>

        {/* ── COLLAPSIBLE BODY ───────────────────────────────── */}
        <div className={`origin-body${open ? " origin-body--open" : ""}`}>
          <div className="origin-body-inner">

            {/* Timeline */}
            <ol className="timeline">
              {chapters.map((ch) => (
                <li key={ch.num} className="timeline-item">

                  <span className="timeline-dot" aria-hidden="true" />

                  {/* Chapter eyebrow */}
                  <p className="timeline-eyebrow">
                    CHAPTER {ch.num} · {ch.years}
                  </p>

                  {/* Chapter title  */}
                  <h3 className="timeline-heading">
                    "{ch.title}"
                  </h3>

                  {/* Body */}
                  <div className="timeline-body">
                    <p>
                      <span className="body-label">The Struggle:</span>{" "}
                      {ch.struggle}
                    </p>
                    <p>
                      <span className="body-label">The Breakthrough:</span>{" "}
                      {ch.breakthrough}
                    </p>
                  </div>

                  {/* Tags   */}
                  <div className="timeline-tags">
                    {ch.tags.map((tag) => (
                      <span key={tag} className="timeline-tag">{tag}</span>
                    ))}
                  </div>

                </li>
              ))}
            </ol>

            {/* Closing quote  */}
            <blockquote className="origin-quote">
              "Every line of code is a step forward. Every bug is a lesson."
            </blockquote>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;