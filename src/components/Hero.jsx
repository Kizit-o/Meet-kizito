import '../styles/Hero.css';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';
import { SiReact, SiTailwindcss, SiJavascript, SiFigma } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <section id="hero" className="hero">
      {/* Animated Background Elements */}
      <div className="hero-bg-gradient"></div>
      
      <div className="hero-content">
        {/* Main Title */}
        <div className="hero-title-wrapper" data-aos="fade-up" data-aos-duration="600">
          <h1 className="hero-title">
            <span className="title-meet">MEET</span>
            <span className="title-name">KIZITO</span>
          </h1>
          <div className="title-underline"></div>
        </div>

        {/* Role & Value Proposition */}
        <div className="hero-intro" data-aos="fade-up" data-aos-delay="200">
          <p className="hero-role">Frontend Developer & Problem Solver</p>
          <p className="hero-tagline">
            I transform complex business challenges into elegant, 
            <span className="highlight"> high-performing web solutions</span>
          </p>
        </div>

        {/* CTAs */}
        <div className="hero-cta" data-aos="fade-up" data-aos-delay="400">
          <button className="btn-primary">
            <span>View My Work</span>
            <FaArrowRight className="btn-icon" />
          </button>
          <button className="btn-secondary">
            <FaEnvelope className="btn-icon" />
            <span>Let's Talk</span>
          </button>
        </div>

        {/* Tech Stack Badges */}
        <div className="hero-tech-stack" data-aos="fade-up" data-aos-delay="600">
          <p className="tech-label">Built with modern tools</p>
          <div className="tech-badges">
            <div className="tech-badge" data-aos="zoom-in" data-aos-delay="700">
              <SiReact />
              <span>React</span>
            </div>
            <div className="tech-badge" data-aos="zoom-in" data-aos-delay="800">
              <SiJavascript />
              <span>JavaScript</span>
            </div>
            <div className="tech-badge" data-aos="zoom-in" data-aos-delay="900">
              <SiTailwindcss />
              <span>Tailwind</span>
            </div>
            <div className="tech-badge" data-aos="zoom-in" data-aos-delay="1000">
              <SiFigma />
              <span>Figma</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator" data-aos="fade-in" data-aos-delay="1200">
          <div className="scroll-line"></div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;