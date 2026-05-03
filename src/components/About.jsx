import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/About.css";

import MyIMG  from "../assets/MyIMG.jpg";
import MeImg1 from "../assets/MEE3.jpg";
import MeImg2 from "../assets/MEE4.jpg";
import MeImg3 from "../assets/MEE5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SLIDES = [MyIMG, MeImg1, MeImg2, MeImg3];

function About() {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out", once: true, offset: 80 });
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-inner">

        {/* ── EYEBROW ───────────────────────────── */}
        <div className="about-eyebrow" data-aos="fade-up">
          <span className="eyebrow-tag">01 / ABOUT</span>
          <div className="eyebrow-rule" />
        </div>

        {/* ── TWO-COLUMN GRID ───────────────────── */}
        <div className="about-grid">

          {/* LEFT — Text */}
          <div className="about-text-col">
            <h2
              className="about-heading"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              About <em className="heading-em">Me</em>
            </h2>

            <div
              className="about-body"
              data-aos="fade-up"
              data-aos-delay="180"
            >
              <p>
                I'm Kizito, a Frontend Developer shaping clean, fast, and
                thoughtful experiences for the web. What started as childhood
                curiosity grew into a six-year journey of building, breaking,
                and refining everything from circuits to interfaces.
              </p>
              <p>
                I focus on creating modern, responsive, and human-centered
                frontends using React, JavaScript, and emerging AI tooling.
                Curiosity fuels my learning; craftsmanship guides my execution.
              </p>
            </div>
          </div>

          {/* RIGHT — Portrait carousel */}
          <div
            className="about-portrait-col"
            data-aos="fade-left"
            data-aos-delay="120"
          >
            {/*
              FIX: Split into two layers —
              .portrait-aspect  → holds the 4:5 ratio (no overflow hidden)
              .portrait-clip    → overflow hidden ONLY around the swiper
              .portrait-caption → sits OUTSIDE .portrait-clip so it's never clipped
            */}
            <div className="portrait-aspect">

              {/* Overflow clip — contains only the swiper images */}
              <div className="portrait-clip">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  slidesPerView={1}
                  spaceBetween={0}
                  loop={true}
                  autoplay={{ delay: 3200, disableOnInteraction: false }}
                  pagination={{
                    clickable: true,
                    el: '.portrait-pagination',   /* external pagination el */
                  }}
                  className="portrait-swiper"
                >
                  {SLIDES.map((img, i) => (
                    <SwiperSlide key={i} className="portrait-swiper-slide">
                      {/*
                        FIX: Scale is applied to .portrait-img-inner (the image div),
                        NOT to the slide itself — avoids conflicting with Swiper's
                        own translateX transform on .swiper-wrapper
                      */}
                      <div
                        className="portrait-img-inner"
                        style={{ backgroundImage: `url(${img})` }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Inset ring overlay — purely decorative */}
                <div className="portrait-ring" aria-hidden="true" />
              </div>

              {/* Caption — outside clip so it's never hidden */}
              <div className="portrait-caption">
                <span className="caption-name">KIZITO · 2026</span>
                <span className="caption-rec">
                  <span className="rec-dot">●</span> REC
                </span>
              </div>

              {/* External pagination — outside clip, never clipped */}
              <div className="portrait-pagination" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;