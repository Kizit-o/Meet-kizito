import { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    let ticking = false;
    const update = () => { setScrolled(window.scrollY > 10); ticking = false; };
    const onScroll = () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 340);
  };

  const navItems = [
    { id: 'home',     label: 'Home'     },
    { id: 'about',    label: 'About'    },
    { id: 'projects', label: 'Projects' },
    { id: 'contact',  label: 'Contact'  },
  ];

  return (
    <>
      <nav
        className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}
        data-aos="fade-down"
      >
        {/* Logo — left */}
        <div className="nav-logo">
          Kizit<span className="logo-dot">·</span>o
        </div>

        {/* Desktop links — center */}
        <ul className="nav-links">
          {navItems.map(({ id, label }, i) => (
            <li key={id} data-aos="fade-down" data-aos-delay={i * 80}>
              <button className="nav-link" onClick={() => scrollTo(id)}>
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* LET'S TALK — right (desktop) */}
        <button
          className="nav-cta"
          onClick={() => scrollTo('contact')}
          data-aos="fade-down"
          data-aos-delay="320"
        >
          LET'S TALK
        </button>

        {/* Hamburger — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* ── MOBILE MENU OVERLAY ──────────────────── */}
      <div
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
      >
        {/* Header row */}
        <div className="mm-header">
          <div className="nav-logo">
            Kizit<span className="logo-dot">·</span>o
          </div>
          <button
            className="mm-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="mm-body">
          <p className="mm-label">MENU</p>

          <ul className="mm-nav-list">
            {navItems.map(({ id, label }, i) => (
              <li key={id}>
                <button
                  className="mm-nav-link"
                  onClick={() => scrollTo(id)}
                >
                  <span className="mm-num">0{i + 1}</span>
                  <span className="mm-text">{label}</span>
                </button>
              </li>
            ))}
          </ul>

          <button className="mm-cta" onClick={() => scrollTo('contact')}>
            LET'S TALK →
          </button>
        </div>

        <p className="mm-footer">KIZITO · FRONTEND DEVELOPER</p>
      </div>

      {/* Tap-to-close backdrop */}
      {menuOpen && (
        <div
          className="menu-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default Navbar;