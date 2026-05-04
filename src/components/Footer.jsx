import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Top row — logo only */}
        <div className="footer-top">
          <div className="footer-logo">
            Kizit<span className="footer-logo-dot">·</span>o
          </div>
        </div>

        {/* Divider */}
        <div className="footer-rule" />

        {/* Bottom row */}
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Kizito. All rights reserved.
          </p>
          <p className="footer-tagline">
            Built with <span className="footer-heart">💙</span> and code.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;