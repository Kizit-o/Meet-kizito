import '../styles/Hero.css';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';
import "@fontsource/bebas-neue";
import "@fontsource/bungee-outline";
import "@fontsource/bungee-shade"; // Defaults to weight 400



function Hero() {
  return (
    <section id="hero" className="hero">
      <h1><span class="spn">Meet</span> <span class="spn-2">Kizito</span></h1>
      <p>| Building the web.<span class="frontend">Frontend</span></p>

      {/* Buttons under the paragraph */}
      <div className="hero-buttons">
        <button className="btn-primary">
          View Projects <FaArrowRight className="btn-icon" />
        </button>
        <button className="btn-secondary">
          Get in touch <FaEnvelope className="btn-icon" />
        </button>
      </div>

      {/* Example image from assets */}
      <img src="/src/assets/hero-2.svg" alt="Hero Illustration" />
    </section>
  );
}

export default Hero;
