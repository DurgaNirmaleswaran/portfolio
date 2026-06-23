import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import AmbientField from "./AmbientField";
import ComputeCore from "./ComputeCore";

const identityTags = ["AI", "Data", "Visualization", "Software"];

export default function Hero() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -8]);
const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.22]);

  const coreY = useTransform(scrollYProgress, [0, 1], [0, -6]);
const coreOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.28]);  return (
    <section className="hero-section" ref={heroRef}>
      <AmbientField />

      <nav className="top-nav">
        <a href="#work">Work</a>
        <a href="#about-me">About</a>
<a href="#contact" className="hero-button secondary">
  Contact
</a>      </nav>

      <motion.div
        className="hero-inner"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          className="identity-rail"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <motion.div
            className="identity-name-row"
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            Durga Nirmaleswaran
          </motion.div>

          <motion.div
            className="identity-tags"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.35,
                },
              },
            }}
          >
            {identityTags.map((tag) => (
              <motion.span
                key={tag}
                variants={{
                  hidden: { opacity: 0, y: 8, scale: 0.96 },
                  show: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
        >
          I build across software, AI, data, and visualization.
        </motion.h1>

        <motion.p
          className="hero-copy"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          I work on data-heavy systems, model evaluation, semantic extraction,
          and interactive tools that make complex information easier to inspect,
          test, and use.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
        >
          <a className="primary-link" href="#work">
            View work <ArrowUpRight size={18} />
          </a>
          <a className="secondary-link" href="#contact">
            Contact
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="core-scroll-wrap"
        style={{ y: coreY, opacity: coreOpacity }}
      >
        <ComputeCore />
      </motion.div>

      <motion.a
        href="#about-me"
        className="terminal-cue"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        <span className="terminal-prompt">&gt;</span>
        <span className="terminal-text">loading profile</span>
        <span className="terminal-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="terminal-cursor" />
      </motion.a>
    </section>
  );
}