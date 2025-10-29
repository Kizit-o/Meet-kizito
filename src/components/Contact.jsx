// import '../styles/Contact.css';
import "@fontsource/allerta-stencil";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <form>
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

      <div className="socials">
        <h2>Connect With Me</h2>
        <div className="social-links">
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noreferrer"
            className="twitter"
          >
            <i className="fab fa-twitter"></i> Twitter
          </a>

          <a
            href="https://github.com/yourhandle"
            target="_blank"
            rel="noreferrer"
            className="github"
          >
            <i className="fab fa-github"></i> GitHub
          </a>

          <a
            href="mailto:youremail@example.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-envelope"></i> Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
