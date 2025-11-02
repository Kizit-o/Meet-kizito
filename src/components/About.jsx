import React, { useEffect, useRef } from "react";
import "../styles/About.css";
import MeImg from "../assets/MEE.jpg";
import "@fontsource/bungee-shade";
import "@fontsource/allerta-stencil";


function About() {
  const imageRef = useRef(null);

    useEffect(() => {
    const img = imageRef.current;
    let rafId;

    const state = {
      rotationX: 0,
      rotationY: 0,
      targetX: 0,
      targetY: 0,
    };

    const handleMove = (e) => {
      const rect = img.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const midX = rect.width / 2;
      const midY = rect.height / 2;

      // smoother & deeper tilt (controlled by intensity)
      const intensity = 20;
      state.targetX = ((y - midY) / midY) * intensity;
      state.targetY = ((x - midX) / midX) * -intensity;

      // Add light spot effect
      const lightX = (x / rect.width) * 100;
      const lightY = (y / rect.height) * 100;
      img.style.setProperty("--light-x", `${lightX}%`);
      img.style.setProperty("--light-y", `${lightY}%`);
    };

    const handleLeave = () => {
      state.targetX = 0;
      state.targetY = 0;
    };

    const animate = () => {
      // Lerp (easing)
      state.rotationX += (state.targetX - state.rotationX) * 0.1;
      state.rotationY += (state.targetY - state.rotationY) * 0.1;

      img.style.transform = `
        rotateX(${state.rotationX}deg)
        rotateY(${state.rotationY}deg)
        scale(0.98)
      `;

      rafId = requestAnimationFrame(animate);
    };

    animate();

    img.addEventListener("mousemove", handleMove);
    img.addEventListener("mouseleave", handleLeave);

    return () => {
      cancelAnimationFrame(rafId);
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
          <h1>About Me</h1>
         <p>
  I’m <strong>Kizito</strong>, a passionate <strong>Frontend Developer</strong> and <strong>Electronics Engineer in the making</strong> from Lagos, Nigeria.  
  My tech journey began at eleven when I held a Nokia Asha and wondered, <em>“How is this even possible?”</em> — a question that sparked my lifelong curiosity for technology.  
  With over <strong>six years of self-directed learning</strong>, I’ve grown from experimenting with circuits to building sleek, responsive, and human-centered digital experiences.  
  I specialize in crafting modern interfaces using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, and <strong>AI-driven tools</strong> to turn ideas into impactful products.  
  <br /><br />
  <em>Curiosity drives my code — and innovation keeps me building.</em>
</p>

        </div>
      </div>
    </section>
  );
}

export default About;
