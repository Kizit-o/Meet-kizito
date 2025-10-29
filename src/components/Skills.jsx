import React, { useState, useEffect, useRef } from "react";
import "@fontsource/allerta-stencil";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaLaptopCode,
  FaBrain,
} from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";
import "../styles/Skills.css";

const skills = [
  { name: "HTML", level: 95, icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", level: 90, icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", level: 85, icon: FaJs, color: "#F7DF1E" },
  { name: "React", level: 80, icon: FaReact, color: "#61DAFB" },
  { name: "Git & GitHub", level: 88, icon: FaGitAlt, color: "#F05032" },
  { name: "Frontend Architecture", level: 92, icon: FaLaptopCode, color: "#B6EADA" },
  { name: "AI Integration", level: 82, icon: FaBrain, color: "#9D4EDD" },
  { name: "Blockchain", level: 50, icon: SiBlockchaindotcom, color: "#F2A900" },
];

const SkillCard = ({ skill }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const Icon = skill.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
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

  const radius = 68;
  const circumference = 2 * Math.PI * radius;

  return (
    <div ref={cardRef} className="skill-card">
      <div
        className="skill-icon-wrapper"
        style={{ backgroundColor: `${skill.color}20`, position: "relative" }}
      >
        <svg className="progress-ring" width="150" height="150">
          <circle
            className="progress-ring-bg"
            cx="75"
            cy="75"
            r={radius}
            stroke="#1a1a1a"
            strokeWidth="6"
            fill="none"
          />
          <circle
            className="progress-ring-circle"
            cx="75"
            cy="75"
            r={radius}
            stroke={skill.color}
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: isVisible
                ? circumference * (1 - count / 100)
                : circumference,
              transition: "stroke-dashoffset 0.6s ease-in-out",
            }}
          />
        </svg>

        <Icon
          size={80}
          color={skill.color}
          strokeWidth={1.5}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      <h3 className="skill-name">{skill.name}</h3>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Stack</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
