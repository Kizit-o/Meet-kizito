import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "@fontsource/allerta-stencil";
import Projimg1 from "../assets/proj1.png";
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
      "AI-powered web application that transforms raw user inputs into expertly crafted prompts for large language models (LLMs).",
    image: Prompto,
    techStack: ["React", "Open AI", "JavaScript"],
    github: "https://github.com/Chisomkizito/crypto-dashboard",
    live: "#",
  },
  {
    title: "KZT-NFTs",
    description:
      "An interactive music gallery that connects users with trending songs and custom playlists.",
    image: NFT,
    techStack: ["React", "Tailwind", "Firebase"],
    github: "https://github.com/Chisomkizito/music-showcase",
    live: "#",
  },
];

const startupProjects = [
  {
    title: "Zyra",
    description:
      "As the frontend developer on Zyra, I help bring the platform’s mission to life, a donations-facilitation system built for Africa, empowering individuals and communities to raise funds for medical, educational, and social needs. Zyra enables anyone around the world to donate in crypto or fiat with full transparency, and my work ensures that experience is fast, intuitive, and accessible.",
    image: Zyra,
    techStack: ["React", "Next.js", "Vite"],
    live: "https://zyra.fund",
  },
];

const featuredProject = {
  title: "Testimonial",
  role: "Developer",
  description:
    "A completion of Legacy Responsive Web design V8 in freecodecamp.org",
  image: certificate,
  techStack: ["HTML", "CSS"],
  github: "https://github.com/Chisomkizito/enterprise-project",
  live: "#",
};

function Projects() {
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out" });
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title" data-aos="fade-up" data-aos-delay="200">
          My Projects
        </h2>

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

                <div className="project-tech">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

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

        {/* Startup Project Section */}
        <h2 className="projects-title" style={{ marginTop: "4rem" }} data-aos="fade-up">
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

        {/* Certification Section */}
        <h2 className="projects-title" style={{ marginTop: "4rem" }} data-aos="fade-up">
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

            <p className="featured-description">{featuredProject.description}</p>

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
              <a href={featuredProject.live} target="https://www.freecodecamp.org/certification/kizztech/responsive-web-design" rel="noreferrer">
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
