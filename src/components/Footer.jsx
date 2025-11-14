// import '../styles/Footer.css';
import '../styles/Footer.css';
import "@fontsource/allerta-stencil";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} <span className="footer-name">Meet Kizito</span>. Built with💙and code.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
