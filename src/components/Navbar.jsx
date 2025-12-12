import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fontsource/allerta-stencil";
import "../styles/Navbar.css"; // Nav styling

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // Smooth entrance

    const handleScroll = () => setScrolled(window.scrollY > 0); // Sticky-state toggle
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      data-aos="fade-down"
    >
      <div className="navbar-inner">

        {/* Desktop navigation */}
        <ul className="nav-links">
          {["Home", "About", "Projects", "Contact"].map((label, index) => (
            <li
              key={index}
              data-aos="fade-up"
              data-aos-delay={150 + index * 150} // Staggered menu reveal
            >
              <a href={`#${label.toLowerCase()}`} className="nav-link">
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle – menu icon switch */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile slide-out panel */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {["Home", "About", "Projects", "Contact"].map((label, index) => (
          <a
            key={index}
            href={`#${label.toLowerCase()}`}
            className="mobile-link"
            onClick={() => setMenuOpen(false)} // Close on navigation
          >
            {label}
          </a>
        ))}
      </div>

      {/* Dim background when mobile is open */}
      <div
        className={`backdrop ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>
    </nav>
  );
}

export default Navbar;
