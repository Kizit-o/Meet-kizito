import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "@fontsource/allerta-stencil";
import Projimg1 from "../assets/Port.png";
import NFT from "../assets/NFT.png";
import Prompto from "../assets/Prompto.png";
import Zyra from "../assets/Zyra.jpg";
import certificate from "../assets/cert.png";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing my skills, projects, and contact info with responsive animations.",
    image: Projimg1,
    techStack: ["React", "JavaScript", "Vite", "CSS3"],
    github: "https://github.com/Chisomkizito/portfolio",
    live: "https://chisomkizito.vercel.app",
  },
  {
    title: "Prompto",
    description:
      "AI-powered web application that transforms raw user inputs into expertly crafted prompts for LLMs.",
    image: Prompto,
    techStack: ["React", "Open AI", "JavaScript"],
    github: "https://github.com/Chisomkizito/crypto-dashboard",
    live: "#",
  },
  {
    title: "KZT-NFTs",
    description:
      "A marketplace that integrates directly with OpenSea’s infrastructure to list, manage, and trade NFTs, providing users with a streamlined interface for discovering and interacting with verified digital assets.",
    image: NFT,
    techStack: ["React", "Tailwind", "Firebase"],
    github: "https://github.com/Chisomkizito/music-showcase",
    live: "#",
  },
];

// Startup section — separate block for bigger writeup
const startupProjects = [
  {
    title: "Zyra",
    description:
      "As the frontend developer on Zyra, I help build a donations-facilitation platform built for Africa—empowering communities to raise funds for medical, educational, and social needs. Fully supports crypto + fiat donations.",
    image: Zyra,
    techStack: ["React", "Next.js", "Vite"],
    live: "https://zyra.fund",
  },
];

// Certification highlight
const featuredProject = {
  title: "Testimonial",
  role: "Developer",
  description:
    "A completion of Legacy Responsive Web Design V8 on freeCodeCamp.",
  image: certificate,
  techStack: ["HTML", "CSS"],
  github: "https://github.com/Chisomkizito/enterprise-project",
  live: "#",
};

function Projects() {
  const [hoveredCard, setHoveredCard] = useState(null); // Hover effect control

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out" }); // Smooth scroll animations
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        {/* Main Title */}
        <h2 className="projects-title" data-aos="fade-up" data-aos-delay="200">
          My Projects
        </h2>

        {/* Regular Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onMouseEnter={() => setHoveredCard(`project-${index}`)}
              onMouseLeave={() => setHoveredCard(null)}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Tech badges */}
                <div className="project-tech">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Startup Section */}
        <h2
          className="projects-title"
          style={{ marginTop: "4rem" }}
          data-aos="fade-up"
        >
          Startup Project
        </h2>

        <div className="startup-projects-container">
          {startupProjects.map((startup, index) => (
            <div
              key={index}
              className="startup-project-card"
              onMouseEnter={() => setHoveredCard(`startup-${index}`)}
              onMouseLeave={() => setHoveredCard(null)}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="startup-project-image-wrapper">
                <img
                  src={startup.image}
                  alt={startup.title}
                  className="startup-project-image"
                />
              </div>

              <div className="startup-project-content">
                <h3 className="project-title">{startup.title}</h3>
                <p className="project-description">{startup.description}</p>

                <div className="project-tech">
                  {startup.techStack.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={startup.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> Visit
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CERTIFICATION SECTION */}
        <h2
          className="projects-title"
          style={{ marginTop: "4rem" }}
          data-aos="fade-up"
        >
          Certification
        </h2>

        <div className="featured-card" data-aos="fade-up">
          <div className="featured-image-wrapper">
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="featured-image"
            />
          </div>

          <div className="featured-content">
            <h3 className="featured-title">{featuredProject.title}</h3>
            <p className="featured-role">{featuredProject.role}</p>

            <div className="testimonial-rating">{"★".repeat(5)}</div>

            <p className="featured-description">
              {featuredProject.description}
            </p>

            <div className="testimonial-badge">
              <span>✓</span> Verified by freeCodeCamp
            </div>

            <div className="project-tech">
              {featuredProject.techStack.map((tech, i) => (
                <span key={i} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a href={featuredProject.github} target="_blank" rel="noreferrer">
                <FaGithub /> View Projects
              </a>

              <a
                href={
                  "https://www.freecodecamp.org/certification/kizztech/responsive-web-design"
                }
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt /> View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
