import React, { useEffect, useRef } from "react";
import "../styles/About.css";
import MeImg from "../assets/MEE.jpg";

function About() {
  const imageRef = useRef(null);

  useEffect(() => {
    ({});

    const img = imageRef.current;

    const handleMove = (e) => {
      const rect = img.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const midX = rect.width / 2;
      const midY = rect.height / 2;

      const rotateX = ((y - midY) / midY) * 10; // vertical tilt
      const rotateY = ((x - midX) / midX) * -10; // horizontal tilt

      img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(0.97)`;
    };

    const handleLeave = () => {
      img.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    };

    img.addEventListener("mousemove", handleMove);
    img.addEventListener("mouseleave", handleLeave);

    return () => {
      img.removeEventListener("mousemove", handleMove);
      img.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Left side: image */}
        <div className="about-left">
          <div
            ref={imageRef}
            className="about-image"
            style={{
              backgroundImage: `url(${MeImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "450px",
            }}
          ></div>
        </div>

        {/* Right side: text */}
        <div className="about-right">
          <h1>|About Me</h1>
          <p>
            I'm <strong>Kizito</strong>, a <strong>certified web developer</strong> with six years of <strong>self-directed</strong> learning.  
            I am <strong>creative</strong> with bringing ideas to life with responsive and user-friendly interfaces.  
            I specialize in various technologies that help with the transformation through{" "}
            <strong>HTML</strong>. <strong>CSS</strong>. <strong>JavaScript</strong>. <strong>React</strong>. and <strong>AI</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
