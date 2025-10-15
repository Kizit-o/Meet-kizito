import '../styles/Hero.css';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';
import "@fontsource/bebas-neue";

function Hero() {
  return (
    <section id="hero" className="hero">
      <h1><span class="spn">Meet</span> Kizito</h1>
      <p>| Building the web.Frontend</p>

      {/* Buttons under the paragraph */}
      <div className="hero-buttons">
        <button className="btn-primary">
          View Projects <FaArrowRight className="btn-icon" />
        </button>
        <button className="btn-secondary">
          Contact Me <FaEnvelope className="btn-icon" />
        </button>
      </div>

      {/* Example image from assets */}
      <img src="/src/assets/hero.svg" alt="Hero Illustration" />
    </section>
  );
}

export default Hero;
