// src/components/Scholarships.jsx

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function Scholarships() {
  return (
    <section className="scholarship-section" id="scholarships">
      <motion.div
        className="scholarship-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="scholarship-icon">
          <Award size={19} />
        </div>

        <div className="scholarship-copy">
          <div className="scholarship-meta">
            <span>Recognition</span>
            <small>Undergraduate</small>
          </div>

          <h3>Undergraduate Merit Scholarship</h3>

          <p>
            Recipient of a highly competitive Merit Scholarship for the
            Engineering program at Anna University, India, covering undergraduate
            tuition costs.
          </p>
        </div>
      </motion.div>
    </section>
  );
}