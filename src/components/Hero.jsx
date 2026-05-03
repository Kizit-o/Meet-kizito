import { useState, useEffect } from 'react';
import '../styles/Hero.css';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyIMG from '../assets/MyIMG.jpg';

/* Splits a word into individually wrapped letter spans */
const LetterSplit = ({ text, baseClass }) =>
  text.split('').map((char, i) => (
    <span key={i} className={`hero-letter ${baseClass}`}>
      {char}
    </span>
  ));

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: 'ease-out' });
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">

      {/* ── GRAIN TEXTURE OVERLAY ───────────────── */}
      <div className="hero-grain" aria-hidden="true" />

      {/* ── PORTRAIT — right-side bleed ─────────── */}
     <div
  className="hero-portrait"
  aria-hidden="true"
  style={{ backgroundImage: `url(${MyIMG})` }}
>
  <div className="portrait-overlay-h" />
  <div className="portrait-overlay-v" />
</div>

      {/* ── VERTICAL LABEL — lg+ only ───────────── */}
      <div className="hero-vertical-label" aria-hidden="true">
        <div className="vertical-divider" />
        <span className="vertical-text">PORTFOLIO / 2026</span>
      </div>

      {/* ── CONTENT BLOCK ───────────────────────── */}
      <div className="hero-container">
        <div className="hero-content">

          {/* 1. Eyebrow */}
          <div
            className="hero-eyebrow"
            data-aos="fade-right"
            data-aos-delay="80"
          >
            <span className="eyebrow-line" />
            <span className="eyebrow-text">
              AVAILABLE FOR FRONTEND ROLES · 2026
            </span>
          </div>

          {/* 2. H1 */}
          <h1
            className="hero-title"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="title-row">
              <LetterSplit text="MEET" baseClass="letter-meet" />
            </span>
            <span className="title-row">
              <LetterSplit text="KIZITO" baseClass="letter-name" />
            </span>
          </h1>

          {/* 3. Subtitle */}
          <p
            className="hero-subtitle"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            FRONTEND <span className="subtitle-tilde">~</span> DEVELOPER
          </p>

          {/* 4. Tagline */}
          <p
            className="hero-tagline"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            "Where design meets code."
          </p>

          {/* 5. Buttons */}
          <div
            className="hero-cta"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <button
              className="btn-primary"
              onClick={() => scrollTo('projects')}
            >
              View My Work
              <FaArrowRight className="btn-arrow" />
            </button>

            <button
              className="btn-secondary"
              onClick={() => scrollTo('contact')}
            >
              Let's Talk
            </button>
          </div>

        </div>
      </div>

      {/* ── SCROLL CUE ──────────────────────────── */}
      <div
        className="scroll-cue"
        data-aos="fade-in"
        data-aos-delay="1000"
        aria-hidden="true"
      >
        <span className="scroll-label">SCROLL TO EXPLORE</span>
        <div className="scroll-line" />
        <FaChevronDown className="scroll-chevron" />
      </div>

    </section>
  );
}

export default Hero;