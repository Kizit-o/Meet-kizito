import "@fontsource/allerta-stencil";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaGlobe } from "react-icons/fa";
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 data-aos="fade-up">Get In Touch</h2>

      <form data-aos="fade-up" data-aos-delay="100">
        <div className="form-group">
          <input type="text" placeholder="Your Name" required />
        </div>

        <div className="form-group">
          <input type="email" placeholder="Your Email" required />
        </div>

        <div className="form-group">
          <textarea rows="5" placeholder="Your Message" required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>

      <div className="socials" data-aos="fade-up" data-aos-delay="200">
        <h2>Connect With Me</h2>
        <p className="social-text">
          Let’s collaborate, share ideas, or just chat about development and creativity!
        </p>
        <div className="social-links">
          <a
            href="https://github.com/yourhandle"
            target="_blank"
            rel="noreferrer"
            className="github"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourhandle"
            target="_blank"
            rel="noreferrer"
            className="linkedin"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noreferrer"
            className="twitter"
          >
            <FaTwitter /> Twitter
          </a>

          <a href="mailto:youremail@example.com" className="email">
            <FaEnvelope /> Email
          </a>

          <a href="https://yourportfolio.com" target="_blank" rel="noreferrer" className="web">
            <FaGlobe /> Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
