import React from "react";
import "../styles/Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import proj1 from "../assets/proj1.png"; 

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing my skills, projects, and contact info with responsive animations.",
     image: proj1, 
    techStack: ["React", "CSS", "Vite"],
    github: "https://github.com/Chisomkizito/portfolio",
    live: "https://chisomkizito.vercel.app",
  },
  {
    title: "Crypto Dashboard",
    description:
      "A Web3 dashboard tracking token data, wallet stats, and price charts in real time.",
    image: "/assets/crypto-dashboard.png",
    techStack: ["React", "CoinGecko API", "Chart.js"],
    github: "https://github.com/Chisomkizito/crypto-dashboard",
    live: "#",
  },
  {
    title: "Music Showcase",
    description:
      "An interactive music gallery that connects users with trending songs and custom playlists.",
    image: "/assets/music-showcase.png",
    techStack: ["React", "Tailwind", "Firebase"],
    github: "https://github.com/Chisomkizito/music-showcase",
    live: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">🚀 My Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
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
      </div>
    </section>
  );
}

export default Projects;
