import { motion } from "framer-motion";
import { signals } from "../data/signals";

export default function SignalPanel() {
  return (
    <section className="signal-section">
      <div className="section-kicker">Selected signals from my work</div>

      <div className="signal-grid">
        {signals.map((item, index) => (
          <motion.article
            className="signal-card"
            key={item.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
          >
            <span className="signal-value">{item.value}</span>
            <span className="signal-label">{item.label}</span>
            <p>{item.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}