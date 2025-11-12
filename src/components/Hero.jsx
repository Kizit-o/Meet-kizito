import '../styles/Hero.css';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';
import { SiReact, SiTailwindcss, SiJavascript, SiFigma } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import "@fontsource/allerta-stencil";

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
           <span class="title-meet" data-aos="fade-down" data-aos-delay="100">M</span>
       <span class="title-meet" data-aos="fade-down" data-aos-delay="200">E</span>
        <span class="title-meet" data-aos="fade-down" data-aos-delay="300">E</span>
            <span class="title-meet" data-aos="fade-down" data-aos-delay="400">T</span>
            &nbsp;
         <span class="title-name" data-aos="fade-down" data-aos-delay="500">K</span>
         <span class="title-name" data-aos="fade-down" data-aos-delay="600">I</span>
         <span class="title-name" data-aos="fade-down" data-aos-delay="700">Z</span>
         <span class="title-name" data-aos="fade-down" data-aos-delay="800">I</span>
         <span class="title-name" data-aos="fade-down" data-aos-delay="900">T</span>
         <span class="title-name" data-aos="fade-down" data-aos-delay="1000">O</span>
          </h1>
          <div className="title-underline"></div>
        </div>

        {/* Role & Value Proposition */}
        <div className="hero-intro" data-aos="fade-up" data-aos-delay="700">
          <p className="hero-role">FRONTEND~DEVELOPER</p>
          <p className="hero-tagline">
        
            <span className="highlight" data-aos="fade-up" data-aos-delay="800"> Building the web’s front-end — where design meets function.</span>
          </p>
        </div>

        {/* CTAs */}
        <div className="hero-cta" data-aos="fade-up" data-aos-delay="400">
          <button className="btn-primary" data-aos="slide-right" data-aos-delay="600">
            <span>View My Work</span>
            <FaArrowRight className="btn-icon" />
          </button>
          <button className="btn-secondary" data-aos="slide-left" data-aos-delay="700">
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