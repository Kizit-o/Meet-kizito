import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "@fontsource/allerta-stencil";
import { FaGithub, FaEnvelope, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../styles/Contact.css";

// Replace with your EmailJS credentials
const EMAILJS_SERVICE_ID = "service_btty016";
const EMAILJS_TEMPLATE_ID = "template_imntszb";
const EMAILJS_PUBLIC_KEY = "ERiPhxAE8nPrghWpN";

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      formRef.current.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      {/* Social block */}
      <div className="socials" data-aos="fade-up" data-aos-delay="200">
        <h2>Connect With Me</h2>

        <p className="social-text">
          Let's collaborate, share ideas, or just chat about development and
          creativity!
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

          <a href="mailto:ngerechisom55@gmail.com" className="email">
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

      {/* Contact form */}
      <form ref={formRef} onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="100">
        <div className="form-group">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            disabled={isSubmitting}
          ></textarea>
        </div>

        {status.message && (
          <div className={`form-status ${status.type}`}>
            {status.message}
          </div>
        )}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}

export default Contact;