import React, { useEffect, useState, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { GiBearHead } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Skills.css";

// Story chapters data
const storyChapters = [
  {
    id: 1,
    chapter: "Chapter 1",
    title: "The Building Blocks",
    period: "2020-2021",
    narrative:
      "The year I stumbled into web development, clueless, curious, and obsessed.",
    struggle: "Everything looked like hieroglyphics. Confusion ruled; progress crawled.",
    breakthrough:
      "I didn't quit. Every tutorial, every failed line of code sharpened my focus.",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26", level: 95 },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: 90 },
    ],
    accentColor: "#E34F26",
  },
  {
    id: 2,
    chapter: "Chapter 2",
    title: "The Framework Evolution",
    period: "2023-2024",
    narrative:
      "The shift from static pages to dynamic experiences, I met React, GitHub, and sleepless nights.",
    struggle: "Git felt like a foreign language. Imposter syndrome? Daily visitor.",
    breakthrough:
      "My first real projects shipped. Confidence followed, not overnight, but commit by commit.",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB", level: 88 },
      { name: "GitHub", icon: FaGithub, color: "#fff", level: 85 },
      { name: "Figma", icon: FaFigma, color: "#F24E1E", level: 80 },
    ],
    accentColor: "#61DAFB",
  },
  {
    id: 3,
    chapter: "Chapter 3",
    title: "The Craftsman",
    period: "2024-Present",
    narrative:
      "Now I don't just build interfaces, I craft experiences that feel alive.",
    struggle:
      "Tech stacks multiplied faster than I could learn them. Burnout lurked behind deadlines.",
    breakthrough:
      "I learned to pace myself and trust the process. This portfolio became proof of my growth.",
    skills: [
      { name: "React Ecosystem", icon: FaReact, color: "#61DAFB", level: 92 },
      { name: "State Management", icon: GiBearHead, color: "#785FFF", level: 87 },
      { name: "Modern Tooling", icon: FaGithub, color: "#B6EADA", level: 85 },
    ],
    accentColor: "#B6EADA",
  },
];

// Skill Card
const SkillCard = ({ skill, index }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const IconComponent = skill.icon;

  const radius = 68;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.5 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const increment = skill.level / steps;
    const stepDuration = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= skill.level) {
        setCount(skill.level);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);
    return () => clearInterval(timer);
  }, [isVisible, skill.level]);

  const dashOffset = isVisible
    ? circumference * (1 - count / 100)
    : circumference;

  return (
    <div
      ref={cardRef}
      data-aos="zoom-in"
      data-aos-delay={index * 100}
      className="skills-skill-card"
      style={{ borderColor: skill.color + "60" }}
    >
      <div className="skill-icon-wrapper">
        <svg className="progress-ring" width="150" height="150">
          <circle
            cx="75"
            cy="75"
            r={radius}
            stroke="#1a1a1a"
            strokeWidth="6"
            fill="none"
            className="progress-ring-bg"
          />
          <circle
            cx="75"
            cy="75"
            r={radius}
            stroke={skill.color}
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            className="progress-ring-circle"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: dashOffset,
            }}
          />
        </svg>
        <IconComponent size={48} color={skill.color} className="skills-skill-icon" />
      </div>
      <h5 className="skills-skill-name">{skill.name}</h5>
    </div>
  );
};

// Chapter Section
const ChapterSection = ({ chapter, index }) => {
  const { chapter: chapterNum, title, period, narrative, struggle, breakthrough, skills, accentColor } = chapter;

  return (
    <div data-aos="fade-up" data-aos-delay={index * 150} className="skills-chapter-section">
      {index < storyChapters.length - 1 && <div className="skills-chapter-connecting-line" />}
      <div className="skills-chapter-content">
        <div className="skills-chapter-header">
          <div
            className="skills-chapter-number"
            style={{
              borderColor: accentColor,
              color: accentColor,
              boxShadow: `0 0 20px ${accentColor}40`,
            }}
          >
            {index + 1}
          </div>
          <div className="skills-chapter-meta">
            <p className="skills-chapter-label">{chapterNum}</p>
            <p className="skills-chapter-period">{period}</p>
          </div>
        </div>

        <h2 className="skills-chapter-title">{title}</h2>
        <p className="skills-chapter-narrative">{narrative}</p>

        {(struggle || breakthrough) && (
          <div className="skills-chapter-insights">
            {struggle && (
              <div className="skills-insight-card skills-struggle-card" data-aos="fade-right">
                <h4 className="skills-insight-title skills-struggle-title">The Struggle</h4>
                <p className="skills-insight-text">{struggle}</p>
              </div>
            )}
            {breakthrough && (
              <div className="skills-insight-card skills-breakthrough-card" data-aos="fade-left">
                <h4 className="skills-insight-title skills-breakthrough-title">The Breakthrough</h4>
                <p className="skills-insight-text">{breakthrough}</p>
              </div>
            )}
          </div>
        )}

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <SkillCard key={i} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Skills Component
const Skills = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className="skills-container">
      <div className="skills-hero" data-aos="fade-down">
        <h1 className="skills-main-title">How I Started</h1>
        <p className="skills-subtitle">A Story of Growth, Struggle, and Becoming</p>
      </div>

      {storyChapters.map((chapter, index) => (
        <ChapterSection key={chapter.id} chapter={chapter} index={index} />
      ))}

      <div className="skills-closing" data-aos="fade-up" data-aos-delay={300}>
        <div className="skills-closing-content">
          <h3 className="skills-closing-title">The Journey Continues</h3>
          <p className="skills-closing-text">
            Every line of code is a step forward. Every bug is a lesson. Every project is a story.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
