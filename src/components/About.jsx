import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/About.css"; // Component styling
import MeImg1 from "../assets/MEE3.jpg";
import MeImg2 from "../assets/MEE4.jpg";
import MeImg3 from "../assets/MEE5.jpg";
import "@fontsource/bungee-shade"; // Font import
import "@fontsource/allerta-stencil";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Smooth animations
      easing: "ease-in-out",
      once: false,
      offset: 100, // Trigger offset
    });
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-container">

        {/* IMG CAROUSEL - Keep slide timing consistent */}
        <div className="about-left" data-aos="fade-right" data-aos-delay="200">
          <div className="about-carousel">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              autoplay={{
                delay: 3000, // Auto slide timing
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              navigation={false}
              effect="slide"
              className="about-swiper"
            >
              {[MeImg1, MeImg2, MeImg3].map((img, i) => (
                <SwiperSlide key={i}>
                  <div
                    className="about-image"
                    style={{ backgroundImage: `url(${img})` }}
                  ></div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* TEXT SIDE - AOS delays stacked */}
        <div className="about-right" data-aos="fade-left" data-aos-delay="400">
          <h1 data-aos="fade-down" data-aos-delay="500">About Me</h1>

          <p className="about-text">
            <span data-aos="fade-up" data-aos-delay="100">
              I'm Kizito a <strong>Frontend Developer</strong> shaping clean, fast, and thoughtful experiences for the web.
            </span>

            <span data-aos="fade-up" data-aos-delay="200">
              What started as childhood curiosity grew into a <strong>six-years journey</strong> of building, breaking, and refining everything from circuits to interfaces.
            </span>

            <span data-aos="fade-up" data-aos-delay="300">
              Today, I focus on creating modern, responsive, and human-centered frontends using <strong>React</strong>, <strong>JavaScript</strong>, and <strong>emerging AI tooling</strong>.
            </span>

            <span data-aos="fade-up" data-aos-delay="400">
              I care about clarity, precision, and usability — the kind of work that feels effortless on the surface but is <strong>deeply engineered</strong> underneath.
            </span>

            <span data-aos="fade-up" data-aos-delay="500">
              Curiosity fuels my learning; craftsmanship guides my execution.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
