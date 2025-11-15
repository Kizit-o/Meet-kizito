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

// Story chapters data
const storyChapters = [
  {
    id: 1,
    chapter: "Chapter 1",
    title: "The Building Blocks",
    period: "2020-2021",
    narrative:
      "The year I stumbled into web development — clueless, curious, and obsessed.",
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
      "The shift from static pages to dynamic experiences — I met React, GitHub, and sleepless nights.",
    struggle: "Git felt like a foreign language. Imposter syndrome? Daily visitor.",
    breakthrough:
      "My first real projects shipped. Confidence followed — not overnight, but commit by commit.",
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
      "Now I don't just build interfaces — I craft experiences that feel alive.",
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

  return (
    <div
      ref={cardRef}
      data-aos="zoom-in"
      data-aos-delay={index * 100}
      className="flex flex-col items-center text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 cursor-pointer transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] hover:border-opacity-60"
      style={{
        "--tw-shadow-color": skill.color + "40",
        borderColor: skill.color + "60",
      }}
    >
      <div className="relative w-[150px] h-[150px] rounded-full flex items-center justify-center mb-4">
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" width="150" height="150">
          <circle
            cx="75"
            cy="75"
            r={radius}
            stroke="#1a1a1a"
            strokeWidth="6"
            fill="none"
            className="opacity-20"
          />
          <circle
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
        <IconComponent
          size={48}
          color={skill.color}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <h5 className="text-[#B6EADA] font-semibold text-lg mb-1">{skill.name}</h5>
    </div>
  );
};

// Chapter Section
const ChapterSection = ({ chapter, index }) => {
  const {
    chapter: chapterNum,
    title,
    period,
    narrative,
    struggle,
    breakthrough,
    skills,
    accentColor,
  } = chapter;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-20"
    >
      {index < storyChapters.length - 1 && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-20 bg-gradient-to-b from-[#B6EADA] to-transparent opacity-30" />
      )}
      <div className="max-w-[80rem] w-full">
        <div className="flex items-center gap-4 mb-6">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg border-2"
            style={{
              borderColor: accentColor,
              color: accentColor,
              boxShadow: `0 0 20px ${accentColor}40`,
            }}
          >
            {index + 1}
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-[#8FD6E1] uppercase tracking-wider">{chapterNum}</p>
            <p className="text-sm text-[#8FD6E1] opacity-60">{period}</p>
          </div>
        </div>

        <h2 className="text-[#B6EADA] font-bold text-4xl md:text-5xl lg:text-[4rem] mb-8">{title}</h2>
        <p className="text-[#8FD6E1] text-lg md:text-xl mb-12 max-w-3xl leading-relaxed">{narrative}</p>

        {(struggle || breakthrough) && (
          <div className="grid gap-6 mb-12 grid-cols-1 sm:grid-cols-2">
            {struggle && (
              <div className="bg-white/3 backdrop-blur-md border border-red-300/25 rounded-3xl p-6" data-aos="fade-right">
                <h4 className="text-red-500 uppercase tracking-wider text-lg mb-3">The Struggle</h4>
<p className="text-[#B6EADA] text-lg leading-7 font-light">{struggle}</p>

              </div>
            )}
            {breakthrough && (
              <div className="bg-white/3 backdrop-blur-md border border-green-400/25 rounded-3xl p-6" data-aos="fade-left">
                <h4 className="text-green-500 uppercase tracking-wider text-sm mb-2">The Breakthrough</h4>
                <p className="text-[#B6EADA] text-base leading-6 font-thin">{breakthrough}</p>
              </div>
            )}
          </div>
        )}

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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
    <section className="w-full bg-[#03001C] font-sans">
      {/* Hero */}
      <div className="flex flex-col items-center justify-center px-6 py-20" data-aos="fade-down">
        <h1 className="text-[#B6EADA] text-5xl md:text-6xl lg:text-[5rem] font-bold text-center mb-4">
          My Development Journey
        </h1>
        <p className="text-[#8FD6E1] text-lg md:text-xl text-center">
          A Story of Growth, Struggle, and Becoming
        </p>
      </div>

      {/* Story Chapters */}
      {storyChapters.map((chapter, index) => (
        <ChapterSection key={chapter.id} chapter={chapter} index={index} />
      ))}

      {/* Closing Section */}
      <div className="flex flex-col items-center justify-center px-6 py-20" data-aos="fade-up" data-aos-delay={300}>
        <div className="text-center">
          <h3 className="text-[#B6EADA] font-bold text-3xl md:text-4xl lg:text-[3rem] mb-6">
            The Journey Continues
          </h3>
          <p className="text-[#8FD6E1] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            Every line of code is a step forward. Every bug is a lesson. Every project is a story.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
