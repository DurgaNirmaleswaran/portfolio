// src/components/Contact.jsx

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        console.error("Web3Forms error:", data);
        setStatus("error");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow" aria-hidden="true" />

      <div className="contact-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="contact-layout">
        <motion.div
          className="contact-copy"
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="section-kicker">Contact</p>

          <h2>Let’s build something useful.</h2>

          <p>
            I’m open to software engineering, AI/ML, data, visualization, and
            research-oriented opportunities. Send me a note and I’ll get back as
            soon as I can.
          </p>

          <div className="contact-meta-list">
            <a href="mailto:dn258421@gmail.com">
              <span className="contact-meta-icon">✉</span>
              <span>dnirmaleswaran@gmail.com</span>
            </a>

            <span>
              <span className="contact-meta-icon">⌖</span>
              <span>Union City, NJ</span>
            </span>

            <a
              href="https://www.linkedin.com/in/durga-nirmaleswaran/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-meta-icon">in</span>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/DurgaNirmaleswaran"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-meta-icon">gh</span>
              <span>GitHub</span>
            </a>
          </div>

          <div className="contact-mini-note">
            <Sparkles size={15} />
            <span>If something here resonates, I’d love to hear from you.</span>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24, scale: 0.98, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
        >
          <input
            type="hidden"
            name="access_key"
            value="6ccdb22f-9090-4acc-8089-f5ad8b5b13a0"
          />

          <input
            type="hidden"
            name="subject"
            value="New message from Durga portfolio"
          />

          <input
            type="hidden"
            name="from_name"
            value="Durga Portfolio Contact Form"
          />

          <input
            type="checkbox"
            name="botcheck"
            className="contact-hidden"
            tabIndex="-1"
            autoComplete="off"
          />

          <div className="contact-field-row">
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" required />
            </label>

            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
              />
            </label>
          </div>

          <label>
            <span>Reason</span>
            <select name="reason" required defaultValue="">
              <option value="" disabled>
                Choose a reason

              </option>
              <option value="Recruiting / opportunity">
                Recruiting / opportunity
              </option>
              <option value="Project collaboration">
                Project collaboration
              </option>
              <option value="Research conversation">
                Research conversation
              </option>
              <option value="General message">General message</option>
            </select>
          </label>

          <label>
            <span>Message</span>
            <textarea
              name="message"
              rows="6"
              placeholder="Write your message here..."
              required
            />
          </label>

          <motion.button
            type="submit"
            disabled={status === "sending"}
            whileHover={status === "sending" ? {} : { y: -2 }}
            whileTap={status === "sending" ? {} : { scale: 0.98 }}
          >
            <span>{status === "sending" ? "Sending..." : "Send message"}</span>
            <Send size={17} />
          </motion.button>

          {status === "success" && (
            <motion.p
              className="contact-form-note success"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Thank you — your message has been sent.
            </motion.p>
          )}

          {status === "error" && (
            <motion.p
              className="contact-form-note error"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Something went wrong. Email me directly at{" "}
              <a href="mailto:dn258421@gmail.com">dn258421@gmail.com</a>.
            </motion.p>
          )}

          <p className="contact-small-print">
            Prefer email? Reach me directly at{" "}
            <a href="mailto:dnirmaleswaran@gmail.com">dnirmaleswaran@gmail.com</a>.
          </p>
        </motion.form>
      </div>
    </section>
  );
  
}