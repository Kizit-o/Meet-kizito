import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/About.css";

// Assets
import MeImg1 from "../assets/MEE.jpg";
import MeImg2 from "../assets/NFT.png";
import MeImg3 from "../assets/prompto.png";

// Fonts
import "@fontsource/bungee-shade";
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
      duration: 1200,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* LEFT SIDE - Carousel */}
        <div
          className="about-left"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="about-carousel">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              autoplay={{
                delay: 3000,
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

        {/* RIGHT SIDE - Text */}
        <div
          className="about-right"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <h1 data-aos="fade-down" data-aos-delay="500">
            About Me
          </h1>

          <p className="about-text">
            <span data-aos="fade-down" data-aos-delay="100">I’m&nbsp;</span>
            <strong data-aos="fade-down" data-aos-delay="200">K</strong>
            <strong data-aos="fade-down" data-aos-delay="300">i</strong>
            <strong data-aos="fade-down" data-aos-delay="400">z</strong>
            <strong data-aos="fade-down" data-aos-delay="500">i</strong>
            <strong data-aos="fade-down" data-aos-delay="600">t</strong>
            <strong data-aos="fade-down" data-aos-delay="700">o</strong>
            <span data-aos="fade-down" data-aos-delay="800">, a passionate </span>
            <strong data-aos="fade-down" data-aos-delay="900">Frontend Developer</strong>
            <span data-aos="fade-down" data-aos-delay="1000"> and </span>
            <strong data-aos="fade-down" data-aos-delay="1100">
              Electronics Engineer in the making
            </strong>
            <span data-aos="fade-down" data-aos-delay="1200">
              {" "}from Lagos, Nigeria. My tech journey began at eleven when I held a
              Nokia Asha and wondered, “How is this even possible?” That curiosity
              still drives me today.
            </span>
            <span data-aos="fade-down" data-aos-delay="1300">
              {" "}With over <strong>six years of self-directed learning</strong>, I’ve
              grown from experimenting with circuits to building sleek, responsive,
              and human-centered digital experiences.
            </span>
            <span data-aos="fade-down" data-aos-delay="1400">
              {" "}I specialize in crafting modern interfaces using{" "}
              <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>,{" "}
              <strong>React</strong>, and <strong>AI-driven tools</strong> to turn ideas
              into impactful products. Curiosity drives my code — innovation keeps me
              building.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
