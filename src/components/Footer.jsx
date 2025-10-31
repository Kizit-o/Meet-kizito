// import '../styles/Footer.css';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} <span className="footer-name">Meet Kizito</span>. All rights reserved.
        </p>

        <div className="footer-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:youremail@example.com">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
