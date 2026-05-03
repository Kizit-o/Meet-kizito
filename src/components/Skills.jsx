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
        {/* Spec: border-t border-border pt-10
                 flex col (mobile) → row space-between (≥640px) gap-4 */}
        <div className="origin-header">

          {/* Left — eyebrow + title */}
          <div className="origin-header-left">
            <p className="origin-eyebrow">THE ORIGIN STORY</p>
            <h2 className="origin-title">
              How I Started, A Story of Growth, Struggle &amp; Becoming
            </h2>
          </div>

          {/* Right — toggle button */}
          {/* Spec: border border-primary/50 text-primary px-5 py-3
                   text-xs uppercase tracking-[0.25em]
                   hover: bg-primary text-black 300ms
                   aria-expanded, + / − icon gap-3 */}
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
        {/* Spec: grid grid-rows[0fr→1fr] opacity transition 700ms ease-out
                 mt-0 → mt-12 when open                                   */}
        <div className={`origin-body${open ? " origin-body--open" : ""}`}>
          <div className="origin-body-inner">

            {/* Timeline */}
            {/* Spec: ol, border-l 1px border-border, pl-8 md:pl-12, space-y-12 */}
            <ol className="timeline">
              {chapters.map((ch) => (
                <li key={ch.num} className="timeline-item">

                  {/* Dot — spec: absolute -left-[37px] md:-left-[49px]
                                 top-1, w-3 h-3 rounded-full bg-primary shadow-glow */}
                  <span className="timeline-dot" aria-hidden="true" />

                  {/* Chapter eyebrow — spec: text-[10px] tracking-[0.4em] cyan uppercase mb-3 */}
                  <p className="timeline-eyebrow">
                    CHAPTER {ch.num} · {ch.years}
                  </p>

                  {/* Chapter title — spec: font-display text-2xl md:text-3xl font-bold mb-5 */}
                  <h3 className="timeline-heading">
                    "{ch.title}"
                  </h3>

                  {/* Body — spec: space-y-3 muted leading-relaxed max-w-2xl */}
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

                  {/* Tags — spec: flex flex-wrap gap-2 mt-5
                               text-[10px] tracking-wider uppercase border border-border px-2.5 py-1 */}
                  <div className="timeline-tags">
                    {ch.tags.map((tag) => (
                      <span key={tag} className="timeline-tag">{tag}</span>
                    ))}
                  </div>

                </li>
              ))}
            </ol>

            {/* Closing quote — spec: font-display italic centered text-foreground/80
                               text-base md:text-lg mt-14 max-w-xl mx-auto           */}
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