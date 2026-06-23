// src/components/TaMachineLearningVisual.jsx
import { motion } from "framer-motion";

const steps = ["debug", "evaluate", "reproduce"];

export default function TaMachineLearningVisual() {
  return (
    <div className="ta-ml-visual">
      <div className="ta-ml-header">
        <span>teaching.workflow</span>
        <strong>ML TA</strong>
      </div>

      <div className="ta-ml-board">
        <div className="ta-code-card">
          <span>student issue</span>
          <div className="ta-code-lines">
            <i />
            <i />
            <i />
          </div>
        </div>

        <div className="ta-step-row">
          {steps.map((step, index) => (
            <motion.div
              className="ta-step-pill"
              key={step}
              animate={{
                opacity: [0.45, 1, 0.55],
                y: [0, -2, 0],
              }}
              transition={{
                duration: 2.6,
                delay: index * 0.28,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {step}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="ta-result-card"
          animate={{
            boxShadow: [
              "0 0 0 rgba(156, 236, 255, 0)",
              "0 0 24px rgba(156, 236, 255, 0.16)",
              "0 0 0 rgba(156, 236, 255, 0)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span>result</span>
          <strong>clearer ML workflow</strong>
        </motion.div>
      </div>
    </div>
  );
}