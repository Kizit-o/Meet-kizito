import '../styles/Hero.css';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';
import { SiReact, SiTailwindcss, SiJavascript, SiFigma } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import "@fontsource/allerta-stencil"; // Custom font

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 800,      // Global animation speed
      once: false,         // Animate only once
      easing: 'ease-out', // Smooth exit feel
    });
  }, []);

  return (
    <section id="home" className="hero">
      
      {/* Soft background glow */}
      <div className="hero-bg-gradient"></div>

      <div className="hero-content">

        {/* Title Animation Sequence */}
        <div className="hero-title-wrapper" data-aos="fade-up" data-aos-duration="600">
          <h1 className="hero-title">

            {/* Letter animation — synced delays */}
            <span className="title-meet" data-aos="fade-down" data-aos-delay="100">M</span>
            <span className="title-meet" data-aos="fade-down" data-aos-delay="200">E</span>
            <span className="title-meet" data-aos="fade-down" data-aos-delay="300">E</span>
            <span className="title-meet" data-aos="fade-down" data-aos-delay="400">T</span>

            &nbsp;

            <span className="title-name" data-aos="fade-down" data-aos-delay="500">K</span>
            <span className="title-name" data-aos="fade-down" data-aos-delay="600">I</span>
            <span className="title-name" data-aos="fade-down" data-aos-delay="700">Z</span>
            <span className="title-name" data-aos="fade-down" data-aos-delay="800">I</span>
            <span className="title-name" data-aos="fade-down" data-aos-delay="900">T</span>
            <span className="title-name" data-aos="fade-down" data-aos-delay="1000">O</span>

          </h1>
          <div className="title-underline"></div>
        </div>

        {/* Role / Tagline */}
        <div className="hero-intro" data-aos="fade-up" data-aos-delay="700">
          <p className="hero-role">FRONTEND~DEVELOPER</p>

          <p className="hero-tagline">
            <span className="highlight" data-aos="fade-up" data-aos-delay="800">
              Building the web’s front-end — where design meets function.
            </span>
          </p>
        </div>

        {/* Buttons — smooth section scroll */}
        <div className="hero-cta" data-aos="fade-up" data-aos-delay="400">

          <button
            className="btn-primary"
            data-aos="slide-right"
            data-aos-delay="600"
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <span>View My Work</span>
            <FaArrowRight className="btn-icon" />
          </button>

          <button
            className="btn-secondary"
            data-aos="slide-left"
            data-aos-delay="700"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <FaEnvelope className="btn-icon" />
            <span>Let's Talk</span>
          </button>
        </div>

        {/* Tooling badges — brand identifiers */}
        <div className="hero-tech-stack" data-aos="fade-up" data-aos-delay="400">
          <p className="tech-label">Built with modern tools</p>

          <div className="tech-badges">
            <div className="tech-badge" data-aos="zoom-in" data-aos-delay="400">
              <SiReact />
              <span>React</span>
            </div>

            <div className="tech-badge" data-aos="zoom-in" data-aos-delay="500">
              <SiJavascript />
              <span>JavaScript</span>
            </div>

            <div className="tech-badge" data-aos="zoom-in" data-aos-delay="600">
              <SiTailwindcss />
              <span>Tailwind</span>
            </div>

            <div className="tech-badge" data-aos="zoom-in" data-aos-delay="700">
              <SiFigma />
              <span>Figma</span>
            </div>
          </div>
        </div>

        {/* Downward cue */}
        <div className="scroll-indicator" data-aos="fade-in" data-aos-delay="1200">
          <div className="scroll-line"></div>
          <span>Scroll to explore</span>
        </div>

      </div>
    </section>
  );
}

export default Hero;
