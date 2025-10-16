import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import '../styles/Skills.css';


const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        <div className="skill">
          <FaHtml5 className="icon" />
          <span className="label">HTML5</span>
        </div>
        <div className="skill">
          <FaCss3Alt className="icon" />
          <span className="label">CSS3</span>
        </div>
        <div className="skill">
          <FaJs className="icon" />
          <span className="label">JavaScript</span>
        </div>
        <div className="skill">
          <FaReact className="icon" />
          <span className="label">React</span>
        </div>
        <div className="skill">
          <FaGitAlt className="icon" />
          <span className="label">Git</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
