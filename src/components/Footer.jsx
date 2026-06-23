// src/components/Footer.jsx

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <motion.div
        className="footer-card"
        initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="footer-glow" aria-hidden="true" />

        <div className="footer-mark">
          <Sparkles size={16} />
          <span>Still learning. Still building. Still making things clearer.</span>
        </div>

        <h2>Thanks for stopping by.</h2>

        <p>
          I hope something here gave you a better sense of how I think, build,
          and care about the work I put into the world.
        </p>

        <div className="footer-actions">
          <a href="#work">
            View projects
            <ArrowUpRight size={15} />
          </a>

          <a href="#contact">
            Get in touch
            <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Durga Nirmaleswaran</span>
          <span>Built with care, curiosity, and a few too many browser tabs.</span>
        </div>
      </motion.div>
    </footer>
  );
}