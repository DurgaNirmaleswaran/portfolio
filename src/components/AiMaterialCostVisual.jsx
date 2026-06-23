// src/components/AiMaterialCostVisual.jsx
import { motion } from "framer-motion";

const receiptItems = [
  { item: "Quartz timing", cost: "sync" },
  { item: "Copper networks", cost: "signal" },
  { item: "Data center power", cost: "energy" },
  { item: "Cooling systems", cost: "water" },
  { item: "Server hardware", cost: "compute" },
  { item: "E-waste afterlife", cost: "waste" },
];

const chainItems = ["device", "network", "server", "waste"];
export default function AiMaterialCostVisual() {
  return (
    <div className="ai-material-visual">
      <div className="ai-material-header">
        <span>material.receipt</span>
        <strong>AI → EARTH</strong>
      </div>

      <div className="ai-material-board">
        <div className="ai-question-card">
          <span>Prompt</span>
          <strong>1 chatbot response</strong>
        </div>

        <div className="ai-chain-path">
          {chainItems.map((item, index) => (
            <div className="ai-chain-node-wrap" key={item}>
              <motion.div
                className="ai-chain-node"
                animate={{
                  opacity: [0.45, 1, 0.45],
                  scale: [1, 1.06, 1],
                }}
                transition={{
                  duration: 2.6,
                  delay: index * 0.28,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {item}
              </motion.div>

              {index < chainItems.length - 1 && <span className="ai-chain-line" />}
            </div>
          ))}

          <motion.span
            className="ai-travel-dot"
            animate={{
              left: ["8%", "34%", "62%", "88%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3.4,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.45,
            }}
          />
        </div>

        <div className="mineral-receipt">
          <div className="receipt-top">
            <span>Mineral receipt</span>
            <strong>hidden cost</strong>
          </div>

          <div className="receipt-lines">
            {receiptItems.map((line, index) => (
              <motion.div
                className="receipt-line"
                key={line.item}
                initial={{ opacity: 0.55 }}
                animate={{ opacity: [0.5, 1, 0.72] }}
                transition={{
                  duration: 2.8,
                  delay: 0.35 + index * 0.14,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span>{line.item}</span>
                <strong>{line.cost}</strong>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="ai-material-footer">
        <span>quartz</span>
        <i />
        <span>power</span>
        <i />
        <span>cooling</span>
        <i />
        <span>e-waste</span>
      </div>
    </div>
  );
}