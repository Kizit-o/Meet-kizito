import '../styles/Hero.css';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';
import "@fontsource/bebas-neue";
import "@fontsource/bungee-outline";
import "@fontsource/bungee-shade"; // Defaults to weight 400
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <section id="hero" className="hero">
      <h1 className="hero-title">
  <span class="spn-2" data-aos="fade-down" data-aos-delay="100">M</span>
  <span class="spn-2" data-aos="fade-down" data-aos-delay="200">e</span>
  <span class="spn-2" data-aos="fade-down" data-aos-delay="300">e</span>
  <span class="spn-2" data-aos="fade-down" data-aos-delay="400">t</span>
  &nbsp;
  <span class="spn" data-aos="fade-down" data-aos-delay="500">K</span>
  <span class="spn" data-aos="fade-down" data-aos-delay="600">i</span>
  <span class="spn" data-aos="fade-down" data-aos-delay="700">z</span>
  <span class="spn" data-aos="fade-down" data-aos-delay="800">i</span>
  <span class="spn" data-aos="fade-down" data-aos-delay="900">t</span>
  <span class="spn" data-aos="fade-down" data-aos-delay="1000">o</span>
</h1>

     <p 
  data-aos="fade-up" 
  data-aos-duration="1200" 
  data-aos-delay="300"
>
  | Building the web.
  <span 
    className="frontend" 
    data-aos="zoom-in" 
    data-aos-duration="1500" 
    data-aos-delay="700"
  >
    Frontend
  </span>
</p>


      {/* Buttons under the paragraph */}
      <div className="hero-buttons">
        <button className="btn-primary" data-aos="slide-left" data-aos-duration="1000">
          View Projects <FaArrowRight className="btn-icon" />
        </button>
        <button className="btn-secondary" data-aos="slide-left" data-aos-duration="1500">
          Get in touch <FaEnvelope className="btn-icon" />
        </button>
      </div>

      {/* Example image from assets */}
      <img src="/src/assets/404.png" alt="Hero Illustration" data-aos="zoom-in" data-aos-duration="3000" />
    </section>
  );
}

export default Hero;
