import { useState, useEffect } from "react";
import { HiHome } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { FaUser, FaCode, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fontsource/allerta-stencil";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    let ticking = false;
    const update = () => {
      setScrolled(window.scrollY > 0);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const navItems = [
    { name: "Home", id: "home", icon: HiHome },
    { name: "About", id: "about", icon: FaUser },
    { name: "Projects", id: "projects", icon: FaCode },
    { name: "Contact", id: "contact", icon: FaEnvelope },
  ];

  return (
    <nav
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      data-aos="fade-down"
    >
      <div className="navbar-inner">
        {/* Desktop Navigation */}
        <ul className="nav-links">
          {navItems.map((item, index) => (
            <li
              key={index}
              data-aos="fade-down"
              data-aos-delay={index * 200}
            >
              {item.name === "Home" ? (
                <a
                  href={`#${item.id}`}
                  onClick={handleScrollToTop}
                  className="nav-link"
                >
                  {item.name}
                </a>
              ) : (
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleSmoothScroll(e, item.id)}
                  className="nav-link"
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          data-aos="fade-down"
          data-aos-delay="400"
        >
          {menuOpen ? <IoClose /> : <RiMenu3Fill />}
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={`backdrop ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={index}
              href={`#${item.id}`}
              className={`mobile-link ${menuOpen ? "animate" : ""}`}
              style={{ transitionDelay: menuOpen ? `${100 + index * 50}ms` : "0ms" }}
              onClick={(e) =>
                item.name === "Home"
                  ? handleScrollToTop(e)
                  : handleSmoothScroll(e, item.id)
              }
            >
              <Icon className="mobile-icon" />
              {item.name}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;