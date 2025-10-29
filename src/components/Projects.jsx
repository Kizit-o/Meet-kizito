import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing my skills, projects, and contact info with responsive animations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    techStack: ["React", "CSS", "Vite"],
    github: "https://github.com/Chisomkizito/portfolio",
    live: "https://chisomkizito.vercel.app",
  },
  {
    title: "Prompto",
    description:
      "AI-powered web application that transforms raw user inputs into expertly crafted prompts for large language models (LLMs).",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    techStack: ["React", "CoinGecko API", "Chart.js"],
    github: "https://github.com/Chisomkizito/crypto-dashboard",
    live: "#",
  },
  {
    title: "Music Showcase",
    description:
      "An interactive music gallery that connects users with trending songs and custom playlists.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
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
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
    techStack: ["React", "Node.js", "MongoDB", "Vite"],
    github: "https://github.com/Chisomkizito/zyra",
    live: "#",
  },
];

const featuredProject = {
  title: "Featured Enterprise Project",
  role: "Lead Full-Stack Developer",
  description:
    "A comprehensive enterprise solution designed to streamline business operations and enhance productivity. This platform integrates multiple services and provides real-time analytics for decision-making.",
  image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
  techStack: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "TypeScript"],
  github: "https://github.com/Chisomkizito/enterprise-project",
  live: "#",
};

function Projects() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="projects" style={styles.projects}>
      <div style={styles.projectsContainer}>
        <h2 style={styles.projectsTitle}>🚀 My Projects</h2>

        <div style={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              style={{
                ...styles.projectCard,
                ...(hoveredCard === `project-${index}` && styles.projectCardHover)
              }}
              onMouseEnter={() => setHoveredCard(`project-${index}`)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.projectImageWrapper}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    ...styles.projectImage,
                    ...(hoveredCard === `project-${index}` && styles.projectImageHover)
                  }}
                />
              </div>

              <div style={styles.projectContent}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectDescription}>{project.description}</p>

                <div style={styles.projectTech}>
                  {project.techStack.map((tech, i) => (
                    <span key={i} style={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={styles.projectLinks}>
                  <a href={project.github} target="_blank" rel="noreferrer" style={styles.link}>
                    <FaGithub /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" style={styles.link}>
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{...styles.projectsTitle, marginTop: '4rem'}}>✨ Startup Project</h2>
        <div style={styles.projectsGrid}>
          {startupProjects.map((startup, index) => (
            <div 
              key={index} 
              style={{
                ...styles.projectCard,
                ...(hoveredCard === `startup-${index}` && styles.projectCardHover)
              }}
              onMouseEnter={() => setHoveredCard(`startup-${index}`)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.projectImageWrapper}>
                <img
                  src={startup.image}
                  alt={startup.title}
                  style={{
                    ...styles.projectImage,
                    ...(hoveredCard === `startup-${index}` && styles.projectImageHover)
                  }}
                />
              </div>

              <div style={styles.projectContent}>
                <h3 style={styles.projectTitle}>{startup.title}</h3>
                <p style={styles.projectDescription}>{startup.description}</p>

                <div style={styles.projectTech}>
                  {startup.techStack.map((tech, i) => (
                    <span key={i} style={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={styles.projectLinks}>
                  <a href={startup.github} target="_blank" rel="noreferrer" style={styles.link}>
                    <FaGithub /> Code
                  </a>
                  <a href={startup.live} target="_blank" rel="noreferrer" style={styles.link}>
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Full-Width Project */}
        <h2 style={{...styles.projectsTitle, marginTop: '4rem'}}>⭐ Featured Work</h2>
        <div 
          style={{
            ...styles.featuredCard,
            ...(hoveredCard === 'featured' && styles.featuredCardHover)
          }}
          onMouseEnter={() => setHoveredCard('featured')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={styles.featuredImageWrapper}>
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
              style={{
                ...styles.featuredImage,
                ...(hoveredCard === 'featured' && styles.featuredImageHover)
              }}
            />
          </div>

          <div style={styles.featuredContent}>
            <h3 style={styles.featuredTitle}>{featuredProject.title}</h3>
            <p style={styles.featuredRole}>{featuredProject.role}</p>
            <p style={styles.projectDescription}>{featuredProject.description}</p>

            <div style={styles.projectTech}>
              {featuredProject.techStack.map((tech, i) => (
                <span key={i} style={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>

            <div style={styles.projectLinks}>
              <a href={featuredProject.github} target="_blank" rel="noreferrer" style={styles.link}>
                <FaGithub /> Code
              </a>
              <a href={featuredProject.live} target="_blank" rel="noreferrer" style={styles.link}>
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  projects: {
    width: '100%',
    background: '#03001c',
    color: '#b6eada',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    padding: '4rem 0',
  },
  projectsContainer: {
    width: '90%',
    maxWidth: '1320px',
    margin: '0 auto',
  },
  projectsTitle: {
    fontSize: 'clamp(1.9rem, 5vw, 3.5rem)',
    textAlign: 'center',
    fontWeight: 400,
    marginBottom: '4rem',
    color: '#b6eada',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2.5rem',
  },
  projectCard: {
    background: 'rgba(182, 234, 218, 0.05)',
    border: '1px solid rgba(182, 234, 218, 0.1)',
    borderRadius: '20px',
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 0 20px rgba(182, 234, 218, 0.05)',
  },
  projectImageWrapper: {
    width: '100%',
    height: '220px',
    overflow: 'hidden',
  },
  projectImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  projectContent: {
    padding: '1.8rem',
  },
  projectTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '0.8rem',
    color: '#b6eada',
  },
  projectDescription: {
    fontSize: '1rem',
    color: '#b6eada',
    opacity: 0.8,
    lineHeight: 1.6,
    marginBottom: '1rem',
  },
  projectTech: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.6rem',
    marginBottom: '1.2rem',
  },
  techBadge: {
    background: 'rgba(182, 234, 218, 0.1)',
    color: '#b6eada',
    border: '1px solid rgba(182, 234, 218, 0.2)',
    borderRadius: '8px',
    padding: '0.3rem 0.8rem',
    fontSize: '0.85rem',
    fontWeight: 500,
  },
  projectLinks: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    color: '#b6eada',
    fontSize: '0.95rem',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'color 0.3s ease',
    textDecoration: 'none',
  },
  featuredCard: {
    background: 'rgba(182, 234, 218, 0.05)',
    border: '1px solid rgba(182, 234, 218, 0.1)',
    borderRadius: '20px',
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'grid',
    gridTemplateColumns: '45% 55%',
    minHeight: '400px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 0 20px rgba(182, 234, 218, 0.05)',
  },
  featuredImageWrapper: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  featuredContent: {
    padding: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  featuredTitle: {
    fontSize: '2rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
    color: '#b6eada',
  },
  featuredRole: {
    fontSize: '1.1rem',
    color: '#00ffff',
    marginBottom: '1rem',
    fontWeight: 500,
  },
  projectCardHover: {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: '0 20px 40px rgba(0, 255, 255, 0.3), 0 0 60px rgba(182, 234, 218, 0.2), inset 0 0 30px rgba(182, 234, 218, 0.05)',
    borderColor: 'rgba(0, 255, 255, 0.4)',
  },
  projectImageHover: {
    transform: 'scale(1.1)',
  },
  featuredCardHover: {
    transform: 'translateY(-8px) scale(1.01)',
    boxShadow: '0 20px 50px rgba(0, 255, 255, 0.35), 0 0 80px rgba(182, 234, 218, 0.25), inset 0 0 40px rgba(182, 234, 218, 0.05)',
    borderColor: 'rgba(0, 255, 255, 0.5)',
  },
  featuredImageHover: {
    transform: 'scale(1.08)',
  },
};

export default Projects;