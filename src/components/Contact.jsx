import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaEnvelope, FaTelegram, FaArrowRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Contact.css";

const EMAILJS_SERVICE_ID  = "service_btty016";
const EMAILJS_TEMPLATE_ID = "template_imntszb";
const EMAILJS_PUBLIC_KEY  = "ERiPhxAE8nPrghWpN";

const socials = [
  { label: "GitHub",     href: "https://github.com/Kizit-o",          icon: FaGithub,   className: "soc-github"   },
  { label: "X (Twitter)",href: "https://x.com/KIZZTECH",              icon: FaXTwitter, className: "soc-twitter"  },
  { label: "Email",      href: "mailto:kizztech35@gmail.com",          icon: FaEnvelope, className: "soc-email"    },
  { label: "Telegram",   href: "https://t.me/Kizit_0",                icon: FaTelegram, className: "soc-telegram" },
];

function Contact() {
  const formRef     = useRef(null);
  const [status, setStatus]         = useState({ type: "", message: "" });
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus({ type: "success", message: "Message sent! I'll get back to you soon." });
      formRef.current.reset();
    } catch {
      setStatus({ type: "error", message: "Failed to send. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">

        {/* ── EYEBROW ──────────────────────────────── */}
        <div className="contact-eyebrow" data-aos="fade-up">
          <span className="contact-eyebrow-line" />
          <span className="contact-eyebrow-tag">04 / CONTACT</span>
          <span className="contact-eyebrow-line" />
        </div>

        {/* ── HEADING ──────────────────────────────── */}
        <h2 className="contact-heading" data-aos="fade-up" data-aos-delay="80">
          Connect With <em className="contact-heading-em">Me</em>
        </h2>

        {/* ── SUBTEXT ──────────────────────────────── */}
        <p className="contact-subtext" data-aos="fade-up" data-aos-delay="160">
          Let's collaborate, share ideas, or just chat about dev and creativity.
        </p>

        {/* ── SOCIAL LINKS ─────────────────────────── */}
        <div className="contact-socials" data-aos="fade-up" data-aos-delay="220">
          {socials.map(({ label, href, icon: Icon, className }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={`contact-social-btn ${className}`}
            >
              <Icon className="social-icon" />
              {label}
            </a>
          ))}
        </div>

        {/* ── FORM ─────────────────────────────────── */}
        <div className="contact-form-wrapper" data-aos="fade-up" data-aos-delay="280">
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form" noValidate>

            <div className="form-row">
              <div className="form-field">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  disabled={isSubmitting}
                  className="form-input"
                />
              </div>
              <div className="form-field">
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  disabled={isSubmitting}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-field">
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                disabled={isSubmitting}
                className="form-input form-textarea"
              />
            </div>

            {status.message && (
              <div className={`form-status form-status--${status.type}`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="form-submit"
            >
              {isSubmitting ? "Sending…" : "Send Message"}
              <FaArrowRight className="submit-arrow" />
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;