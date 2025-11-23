import "@fontsource/allerta-stencil"; // Section font
import { FaGithub, FaLinkedin, FaEnvelope, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      {/* Social block */}
      <div className="socials" data-aos="fade-up" data-aos-delay="200">
        <h2>Connect With Me</h2>

        <p className="social-text">
          Let’s collaborate, share ideas, or just chat about development and creativity!
        </p>

        <div className="social-links">
          <a
            href="https://github.com/Kizit-o"
            target="_blank"
            rel="noreferrer"
            className="github"
          >
            <FaGithub /> GitHub
          </a>


          <a
            href="https://x.com/KIZZTECH"
            target="_blank"
            rel="noreferrer"
            className="twitter"
          >
            <FaXTwitter /> X(Twitter)
          </a>

          <a href="ngerechisom55@gmail.com" className="email">
            <FaEnvelope /> Email
          </a>

          <a
            href="https://t.me/Kizit_0"
            target="_blank"
            rel="noreferrer"
            className="web"
          >
            <FaTelegram /> Telegram
          </a>
        </div>
      </div>

      {/* Contact form header */}
      <h2 data-aos="fade-up">Let's Talk..</h2>

      {/* Contact form – simple client-side validation */}
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

    </section>
  );
}

export default Contact;
