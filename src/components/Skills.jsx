import React, { useState, useEffect, useRef } from "react";
import "@fontsource/allerta-stencil";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaLaptopCode,
  FaFigma,
} from "react-icons/fa";
import { GiBearHead } from "react-icons/gi";
import "../styles/Skills.css";

// 🧠 Skill Data
const skills = [
  { name: "HTML5", level: 95, icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", level: 90, icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", level: 85, icon: FaJs, color: "#F7DF1E" },
  { name: "React", level: 80, icon: FaReact, color: "#61DAFB" },
  { name: "Git & GitHub", level: 88, icon: FaGithub, color: "#ffffff" },
  { name: "Frontend", level: 92, icon: FaLaptopCode, color: "#007bff" },
  { name: "Figma", level: 72, icon: FaFigma, color: "#F24E1E" },
  { name: "Zustand", level: 50, icon: GiBearHead, color: "#785FFF" },
];

// 🎯 Skill Card
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

// ⚡ Main Skills Section
const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Stack</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-duration="800"
            data-aos-delay={index * 150} // 🕒 cascading drop
            data-aos-anchor-placement="top-bottom"
          >
            <SkillCard skill={skill} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
