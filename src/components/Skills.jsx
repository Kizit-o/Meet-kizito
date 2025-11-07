import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { GiBearHead } from "react-icons/gi";
import "../styles/Skills.css";

const storyChapters = [
  {
    id: 1,
    chapter: "Chapter 1",
    title: "The Building Blocks",
    period: "2020-2021",
    narrative: "Your story starts here. Describe how you first encountered code, what drew you in, and those early moments of discovery.", // YOUR STORY HERE
    struggle: "", // YOUR STRUGGLE HERE (optional)
    breakthrough: "", // YOUR AHA MOMENT HERE (optional)
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26", level: "Foundation" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: "Foundation" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E", level: "Foundation" }
    ],
    atmosphereClass: "chapter-atmosphere-1",
    accentColor: "#E34F26"
  },
  {
    id: 2,
    chapter: "Chapter 2",
    title: "The Framework Evolution",
    period: "2022-2023",
    narrative: "The turning point. Describe the moment you realized you needed more power, more structure. What made you dive into modern frameworks?", // YOUR STORY HERE
    struggle: "", // YOUR STRUGGLE HERE (optional)
    breakthrough: "", // YOUR AHA MOMENT HERE (optional)
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB", level: "Mastery" },
      { name: "GitHub", icon: FaGithub, color: "#fff", level: "Proficiency" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E", level: "Proficiency" }
    ],
    atmosphereClass: "chapter-atmosphere-2",
    accentColor: "#61DAFB"
  },
  {
    id: 3,
    chapter: "Chapter 3",
    title: "The Craftsman",
    period: "2024-Present",
    narrative: "Where you are now. Not just building, but crafting experiences. What does mastery mean to you? What are you creating?", // YOUR STORY HERE
    struggle: "", // YOUR STRUGGLE HERE (optional)
    breakthrough: "", // YOUR AHA MOMENT HERE (optional)
    skills: [
      { name: "React Ecosystem", icon: FaReact, color: "#61DAFB", level: "Advanced" },
      { name: "State Management", icon: GiBearHead, color: "#785FFF", level: "Advanced" },
      { name: "Modern Tooling", icon: FaGithub, color: "#B6EADA", level: "Advanced" }
    ],
    atmosphereClass: "chapter-atmosphere-3",
    accentColor: "#B6EADA"
  }
];

const Skills = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <section className="skills-container">
      {/* Hero Title */}
      <div className="skills-hero">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="skills-main-title"
        >
          My Development Journey
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="skills-subtitle"
        >
          A Story of Growth, Struggle, and Mastery
        </motion.p>
      </div>

      {/* Story Chapters */}
      {storyChapters.map((chapter, index) => (
        <ChapterSection key={chapter.id} chapter={chapter} index={index} />
      ))}

      {/* Closing Statement */}
      <div className="skills-closing">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="skills-closing-content"
        >
          <h3 className="skills-closing-title">
            The Journey Continues
          </h3>
          <p className="skills-closing-text">
            Every line of code is a step forward. Every bug is a lesson. Every project is a story.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="skills-cta-button"
          >
            Explore My Work →
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ChapterSection = ({ chapter, index }) => {
  const { chapter: chapterNum, title, period, narrative, struggle, breakthrough, skills, atmosphereClass, accentColor } = chapter;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
      className={`skills-chapter-section ${atmosphereClass}`}
    >
      {/* Connecting Line */}
      {index < storyChapters.length - 1 && (
        <div className="skills-chapter-connecting-line" />
      )}

      <div className="skills-chapter-content">
        {/* Chapter Number */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="skills-chapter-header"
        >
          <div 
            className="skills-chapter-number"
            style={{ 
              borderColor: accentColor,
              color: accentColor,
              boxShadow: `0 0 20px ${accentColor}40`
            }}
          >
            {index + 1}
          </div>
          <div className="skills-chapter-meta">
            <p className="skills-chapter-label">{chapterNum}</p>
            <p className="skills-chapter-period">{period}</p>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="skills-chapter-title"
        >
          {title}
        </motion.h2>

        {/* Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="skills-chapter-narrative"
        >
          {narrative}
        </motion.p>

        {/* Struggle & Breakthrough */}
        {(struggle || breakthrough) && (
          <div className="skills-chapter-insights">
            {struggle && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="skills-insight-card skills-struggle-card"
              >
                <h4 className="skills-insight-title skills-struggle-title">The Struggle</h4>
                <p className="skills-insight-text">{struggle}</p>
              </motion.div>
            )}
            {breakthrough && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="skills-insight-card skills-breakthrough-card"
              >
                <h4 className="skills-insight-title skills-breakthrough-title">The Breakthrough</h4>
                <p className="skills-insight-text">{breakthrough}</p>
              </motion.div>
            )}
          </div>
        )}

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="skills-grid"
        >
          {skills.map((skill, i) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                className="skills-skill-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 25px ${skill.color}40`;
                  e.currentTarget.style.borderColor = `${skill.color}60`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 rgba(0,0,0,0)';
                  e.currentTarget.style.borderColor = '#ffffff15';
                }}
              >
                <IconComponent size={48} color={skill.color} className="skills-skill-icon" />
                <h5 className="skills-skill-name">{skill.name}</h5>
                <span className="skills-skill-level">{skill.level}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;