import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "@fontsource/allerta-stencil";
import Projimg1 from "../assets/proj1.png";
import NFT from "../assets/NFT.png";
import Prompto from "../assets/Prompto.png";
import Zyra from "../assets/Zyra2.jpg";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing my skills, projects, and contact info with responsive animations.",
    image:
      Projimg1,
    techStack: ["React", "JavaScript", "Vite", "CSS3"],
    github: "https://github.com/Chisomkizito/portfolio",
    live: "https://chisomkizito.vercel.app",
  },
  {
    title: "Prompto",
    description:
      "AI-powered web application that transforms raw user inputs into expertly crafted prompts for large language models (LLMs).",
    image:
      Prompto,
    techStack: ["React", "Open AI", "JavaScript"],
    github: "https://github.com/Chisomkizito/crypto-dashboard",
    live: "#",
  },
  {
    title: "KZT-NFTs",
    description:
      "An interactive music gallery that connects users with trending songs and custom playlists.",
    image:
      NFT,
    techStack: ["React", "Tailwind", "Firebase"],
    github: "https://github.com/Chisomkizito/music-showcase",
    live: "#",
  },
];

const startupProjects = [
  {
    title: "Zyra — Crowdfunding Platform",
    description:
      "A startup project helping individuals and businesses raise funds securely and conveniently. Built with a focus on transparency, accessibility, and trust.",
    image:
      Zyra,
    techStack: ["React", "Node.js", "MongoDB", "Vite"],
    github: "https://github.com/Chisomkizito/zyra",
    live: "#",
  },
];

const featuredProject = {
  title: "Featured Project",
  role: "Coming soon.....",
  description:
    "Null",
  image:
    "",
  techStack: ["coming soon....."],
  github: "https://github.com/Chisomkizito/enterprise-project",
  live: "#",
}
  
  const Testimonials = {
  title: "Testimonials",
  role: "Coming soon.....",
  description:
    "Null",
  image:
    "",
  techStack: ["coming soon....."],
  github: "https://github.com/Chisomkizito/enterprise-project",
  live: "#",
  }
    ;

function Projects() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onMouseEnter={() => setHoveredCard(`project-${index}`)}
              onMouseLeave={() => setHoveredCard(null)}
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
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

        <h2 className="projects-title" style={{ marginTop: "4rem" }}>
          Startup Project
        </h2>
        <div className="projects-grid">
          {startupProjects.map((startup, index) => (
            <div
              key={index}
              className="project-card"
              onMouseEnter={() => setHoveredCard(`startup-${index}`)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="project-image-wrapper">
                <img
                  src={startup.image}
                  alt={startup.title}
                  className="project-image"
                />
              </div>

              <div className="project-content">
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
                  <a href={startup.github} target="_blank" rel="noreferrer">
                    <FaGithub /> Code
                  </a>
                  <a href={startup.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="projects-title" style={{ marginTop: "4rem" }}>
          Featured Work
        </h2>
        <div className="featured-card">
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
            <p className="project-description">
              {featuredProject.description}
            </p>

            <div className="project-tech">
              {featuredProject.techStack.map((tech, i) => (
                <span key={i} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a href={featuredProject.github} target="_blank" rel="noreferrer">
                <FaGithub /> Code
              </a>
              <a href={featuredProject.live} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}

export default Projects;
