import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="about-section" id="about-me">
      <div className="about-shell">
        <motion.div
          className="about-photo-wrap"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img
            src="/images/durga-profile.jpg"
            alt="Durga Nirmaleswaran"
            className="about-photo"
          />
          <div className="photo-glow" />
        </motion.div>

        <motion.div
          className="about-copy"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="section-kicker">About</p>

<h2>I like the engineering work between raw complexity and something people can use.</h2>
          <p>
            I’m Durga, a Computer Science graduate from UMass Amherst. I like
            work where the hard part is not just getting something to run, but
            making it reliable, explainable, and useful enough for someone else
            to trust.
          </p>

          <p>
            My background spans research, teaching, and engineering — from
            evaluation-heavy AI projects to interactive systems and data-heavy
            workflows. I’m most interested in building tools that make technical
            complexity easier to reason about, not just more impressive to look
            at.
          </p>
        </motion.div>
      </div>
    </section>
  );
}