// Skills.jsx
import React, { useState, useEffect, useRef } from "react";
import { Code, Palette, Cpu, Layers, GitBranch, Monitor, Sparkles, Box, FileText, Users } from "lucide-react";
import "../styles/Skills.css";

const skills = [
  { name: "HTML", level: 95, icon: Code, color: "#E34F26" },
  { name: "CSS", level: 90, icon: Palette, color: "#1572B6" },
  { name: "JavaScript", level: 85, icon: Cpu, color: "#F7DF1E" },
  { name: "React", level: 80, icon: Layers, color: "#61DAFB" },
  { name: "Git & GitHub", level: 88, icon: GitBranch, color: "#F05032" },
  { name: "Responsive Design", level: 92, icon: Monitor, color: "#B6EADA" },
  { name: "AI Tools", level: 75, icon: Sparkles, color: "#9D4EDD" },
  { name: "Blockchain", level: 60, icon: Box, color: "#F2A900" },
];

const SkillCard = ({ skill, index }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const Icon = skill.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
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

  return (
    <div 
      ref={cardRef}
      className="skill-card"
    >
      <div 
        className="skill-icon-wrapper"
        style={{ backgroundColor: `${skill.color}20` }}
      >
        <Icon 
          size={80} 
          color={skill.color}
          strokeWidth={1.5}
        />
      </div>
      <h3 className="skill-name">{skill.name}</h3>
      <div className="skill-level-display">
        <span className="level-count">{count}</span>
        <span className="level-max">/{skill.level}</span>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Tech Stack</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;