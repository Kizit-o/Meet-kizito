import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true, // smoother for a navbar that doesn’t re-animate every scroll
      offset: 80,
    });
  }, []);

  return (
    <nav className="navbar" data-aos="fade-down" data-aos-delay="100">
      <ul className="nav-links">
        <li data-aos="fade-up" data-aos-delay="200">
          <a href="#hero">Home</a>
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          <a href="#about">About</a>
        </li>
        <li data-aos="fade-up" data-aos-delay="400">
          <a href="#projects">Projects</a>
        </li>
        <li data-aos="fade-up" data-aos-delay="500">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
