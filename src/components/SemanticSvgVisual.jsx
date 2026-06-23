// src/components/SemanticSvgVisual.jsx
import { motion } from "framer-motion";

export default function SemanticSvgVisual() {
  return (
    <div className="semantic-scan-visual">
      <div className="semantic-scan-header">
        <span>semantic.scan</span>
        <strong>SVG → SSVG</strong>
      </div>

      <div className="semantic-scan-board">
        <motion.div
          className="semantic-scan-line"
          animate={{ x: ["-12%", "112%"] }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 0.4,
          }}
        />

        <div className="semantic-chart-shell">
          <span className="semantic-y-axis" />
          <span className="semantic-x-axis" />

          <motion.span
            className="semantic-grid-line grid-one"
            animate={{ opacity: [0.15, 0.5, 0.15] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.span
            className="semantic-grid-line grid-two"
            animate={{ opacity: [0.12, 0.42, 0.12] }}
            transition={{
              duration: 2.5,
              delay: 0.25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="semantic-bar bar-a"
            animate={{
              height: [44, 60, 44],
              boxShadow: [
                "0 0 8px rgba(156,236,255,0.12)",
                "0 0 24px rgba(156,236,255,0.36)",
                "0 0 8px rgba(156,236,255,0.12)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="semantic-bar bar-b"
            animate={{
              height: [72, 58, 72],
              boxShadow: [
                "0 0 8px rgba(126,109,255,0.12)",
                "0 0 24px rgba(126,109,255,0.36)",
                "0 0 8px rgba(126,109,255,0.12)",
              ],
            }}
            transition={{
              duration: 3,
              delay: 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="semantic-bar bar-c"
            animate={{
              height: [54, 78, 54],
              boxShadow: [
                "0 0 8px rgba(156,236,255,0.12)",
                "0 0 24px rgba(156,236,255,0.34)",
                "0 0 8px rgba(156,236,255,0.12)",
              ],
            }}
            transition={{
              duration: 3,
              delay: 0.38,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="semantic-cohort-ring"
            animate={{
              opacity: [0.3, 0.9, 0.3],
              scale: [0.96, 1.04, 0.96],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="semantic-tag-row">
          <motion.span
            animate={{ opacity: [0.55, 1, 0.7] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            role=bar
          </motion.span>

          <motion.span
            animate={{ opacity: [0.55, 1, 0.7] }}
            transition={{
              duration: 2.4,
              delay: 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            cohort=A
          </motion.span>

          <motion.span
            animate={{ opacity: [0.55, 1, 0.7] }}
            transition={{
              duration: 2.4,
              delay: 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            data
          </motion.span>
        </div>

        <div className="semantic-side-panel">
          <span>Recovered roles</span>

          <motion.div
            animate={{ opacity: [0.55, 1, 0.55] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <p>
              mark <strong>bar</strong>
            </p>
            <p>
              role <strong>data mark</strong>
            </p>
            <p>
              cohort <strong>A</strong>
            </p>
          </motion.div>
        </div>
      </div>

      <div className="semantic-scan-footer">
        <span>extract</span>
        <i />
        <span>cohort</span>
        <i />
        <span>infer</span>
        <i />
        <span>annotate</span>
      </div>
    </div>
  );
}