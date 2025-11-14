import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fontsource/allerta-stencil";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`} data-aos="fade-down">
      <div className="navbar-inner">

        {/* Desktop menu */}
        <ul className="nav-links">
          {["Home", "About", "Projects", "Contact"].map((label, index) => (
            <li key={index} data-aos="fade-up" data-aos-delay={150 + index * 150}>
              <a href={`#${label.toLowerCase()}`} className="nav-link">
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile panel */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {["Home", "About", "Projects", "Contact"].map((label, index) => (
          <a
            key={index}
            href={`#${label.toLowerCase()}`}
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Backdrop */}
      <div
        className={`backdrop ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>
    </nav>
  );
}

export default Navbar;