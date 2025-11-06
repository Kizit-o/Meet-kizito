import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // use React Icons for burger
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Fixed Burger Button */}
      <div className="burger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </div>

      {/* Navbar */}
      <nav
        className={`navbar ${menuOpen ? "active" : ""}`}
        data-aos="fade-down"
        data-aos-delay="100"
      >
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
    </>
  );
}

export default Navbar;
