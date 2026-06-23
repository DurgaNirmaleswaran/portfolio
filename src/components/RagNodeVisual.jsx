// src/components/RagNodeVisual.jsx

import { motion } from "framer-motion";

const docs = ["Doc 01", "Doc 07", "Doc 14"];

const nodeReveal = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 0.97,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.42,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const connectorReveal = {
  hidden: {
    scaleX: 0,
    opacity: 0,
  },
  visible: (delay = 0) => ({
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.38,
      delay,
      ease: "easeOut",
    },
  }),
};

export default function RagNodeVisual() {
  return (
    <div className="rag-visual-card">
      <div className="rag-visual-header">
        <span>verification.trace</span>
        <strong>RAG · TOP-3</strong>
      </div>

      <div className="rag-flow-board">
        <motion.div
          className="rag-flow-node rag-flow-claim"
          variants={nodeReveal}
          initial="hidden"
          animate="visible"
          custom={0.05}
        >
          <span>Claim</span>
          <strong>Input statement</strong>
        </motion.div>

        <motion.div
          className="rag-flow-connector"
          variants={connectorReveal}
          initial="hidden"
          animate="visible"
          custom={0.28}
        />

        <motion.div
          className="rag-doc-stack"
          variants={nodeReveal}
          initial="hidden"
          animate="visible"
          custom={0.42}
        >
          <span className="rag-stack-label">Top-3 retrieval</span>

          {docs.map((doc, index) => (
            <motion.div
              key={doc}
              className="rag-doc-card"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.28,
                delay: 0.55 + index * 0.11,
                ease: "easeOut",
              }}
            >
              <span>{doc}</span>
              <motion.i
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.35,
                  delay: 0.68 + index * 0.11,
                  ease: "easeOut",
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="rag-flow-connector"
          variants={connectorReveal}
          initial="hidden"
          animate="visible"
          custom={0.92}
        />

        <motion.div
          className="rag-flow-node rag-flow-evidence"
          variants={nodeReveal}
          initial="hidden"
          animate="visible"
          custom={1.05}
        >
          <span>Evidence</span>
          <strong>Extracted context</strong>

          <div className="rag-mini-lines">
            {[0, 1, 2].map((line) => (
              <motion.i
                key={line}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{
                  duration: 0.35,
                  delay: 1.22 + line * 0.08,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="rag-flow-connector"
          variants={connectorReveal}
          initial="hidden"
          animate="visible"
          custom={1.48}
        />

        <motion.div
          className="rag-flow-node rag-flow-verdict"
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 8,
          }}
          animate={{
            opacity: 1,
            scale: [0.92, 1.05, 1],
            y: 0,
          }}
          transition={{
            duration: 0.48,
            delay: 1.62,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span>Verdict</span>
          <strong>4-way label</strong>
        </motion.div>
      </div>

      <motion.div
        className="rag-step-strip"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.36,
          delay: 1.82,
          ease: "easeOut",
        }}
      >
        <span>Claim</span>
        <i />
        <span>Embed</span>
        <i />
        <span>Retrieve</span>
        <i />
        <span>Evidence</span>
        <i />
        <span>Classify</span>
      </motion.div>
    </div>
  );
}