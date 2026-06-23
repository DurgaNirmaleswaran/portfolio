import { motion } from "framer-motion";

const pipelineNodes = [
  {
    id: "papers",
    label: "Papers",
    sub: "arXiv · Semantic Scholar",
    className: "node-papers",
  },
  {
    id: "social",
    label: "Social traces",
    sub: "Altmetric · X/Twitter",
    className: "node-social",
  },
  {
    id: "json",
    label: "Canonical JSON",
    sub: "tweets · threads",
    className: "node-json",
  },
  {
    id: "hype",
    label: "Hype detection",
    sub: "coded signals",
    className: "node-hype",
  },
  {
    id: "compare",
    label: "CS vs Physics",
    sub: "field comparison",
    className: "node-compare",
  },
];

export default function TwitterImpactVisual() {
  return (
    <div className="twitter-impact-visual">
      <div className="twitter-impact-header">
        <div>
          <p className="twitter-impact-eyebrow">Pipeline view</p>
          <h4>Signal Flow</h4>
        </div>

        <div className="twitter-impact-badge">
          <span>1M+</span>
          <small>social traces</small>
        </div>
      </div>

      <div className="twitter-impact-canvas">
        <div className="twitter-impact-inner">
          <div className="twitter-grid" />

          <svg
            className="twitter-flow-svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="twitterFlowGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="rgba(126, 183, 255, 0.7)" />
                <stop offset="55%" stopColor="rgba(129, 235, 255, 0.85)" />
                <stop offset="100%" stopColor="rgba(129, 150, 255, 0.55)" />
              </linearGradient>
            </defs>

            <motion.path
              d="M 22 30 C 34 30, 38 30, 48 30"
              className="twitter-flow-path"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            />

            <motion.path
              d="M 58 30 C 67 30, 70 30, 79 30"
              className="twitter-flow-path"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            />

            <motion.path
              d="M 52 39 C 51 51, 45 56, 36 65"
              className="twitter-flow-path"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
            />

            <motion.path
              d="M 82 39 C 81 51, 75 58, 66 65"
              className="twitter-flow-path"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.55, ease: "easeOut" }}
            />

            <motion.path
              d="M 42 72 C 49 75, 55 75, 62 72"
              className="twitter-flow-path faint"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
            />

            <motion.circle
              r="1.6"
              className="twitter-packet"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                offsetDistance: ["0%", "100%"],
              }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                offsetPath:
                  'path("M 22 30 C 34 30, 38 30, 48 30 C 58 30, 67 30, 79 30 C 81 51, 75 58, 66 65")',
              }}
            />

            <motion.circle
              r="1.25"
              className="twitter-packet soft"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.8, 0.8, 0],
                offsetDistance: ["0%", "100%"],
              }}
              transition={{
                duration: 5.1,
                delay: 1.4,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                offsetPath:
                  'path("M 52 39 C 51 51, 45 56, 36 65 C 49 75, 55 75, 62 72")',
              }}
            />
          </svg>

          <div className="twitter-node-layer">
            {pipelineNodes.map((node, index) => (
              <motion.div
                key={node.id}
                className={`twitter-pipeline-node ${node.className}`}
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.12 + index * 0.08,
                  ease: "easeOut",
                }}
              >
                <strong>{node.label}</strong>
                <span>{node.sub}</span>
              </motion.div>
            ))}
          </div>

          <div className="twitter-bar-panel">
            <div className="twitter-bar-row">
              <div className="twitter-bar-label">CS hype</div>
              <div className="twitter-bar-track">
                <motion.div
                  className="twitter-bar-fill cs"
                  initial={{ width: 0 }}
                  animate={{ width: "69.3%" }}
                  transition={{ duration: 0.9, delay: 0.65, ease: "easeOut" }}
                />
              </div>
              <div className="twitter-bar-value">6.93%</div>
            </div>

            <div className="twitter-bar-row">
              <div className="twitter-bar-label">Physics hype</div>
              <div className="twitter-bar-track">
                <motion.div
                  className="twitter-bar-fill physics"
                  initial={{ width: 0 }}
                  animate={{ width: "56.8%" }}
                  transition={{ duration: 0.9, delay: 0.8, ease: "easeOut" }}
                />
              </div>
              <div className="twitter-bar-value">5.68%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}