// src/components/AmazonSentimentVisual.jsx

import { motion } from "framer-motion";
import { MessageSquareText, Sparkles, Brain, BarChart3 } from "lucide-react";

const reviews = [
  "Great taste, fast delivery",
  "Too salty for me",
  "Good value overall",
];

const scores = [
  { label: "Positive", value: 0.81 },
  { label: "Neutral", value: 0.12 },
  { label: "Negative", value: 0.07 },
];

const models = [
  {
    name: "VADER",
    detail: "fast scoring",
    Icon: Sparkles,
  },
  {
    name: "RoBERTa",
    detail: "richer sentiment",
    Icon: Brain,
  },
  {
    name: "TF-IDF + ML",
    detail: "~81% accuracy",
    Icon: BarChart3,
  },
];

export default function AmazonSentimentVisual() {
  return (
    <div className="sentiment-visual">
      <div className="sentiment-inner">
        <div className="sentiment-review-stack">
          {reviews.map((review, index) => (
            <motion.div
              className="sentiment-review-card"
              key={review}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.32,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              <MessageSquareText size={15} />
              <span>{review}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="sentiment-flow-line"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.28, ease: "easeOut" }}
        />

        <div className="sentiment-model-grid">
          {models.map(({ name, detail, Icon }, index) => (
            <motion.div
              className="sentiment-node"
              key={name}
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.34,
                delay: 0.36 + index * 0.08,
                ease: "easeOut",
              }}
            >
              <Icon size={18} />
              <strong>{name}</strong>
              <span>{detail}</span>
            </motion.div>
          ))}
        </div>

        <div className="sentiment-bars">
          {scores.map((score, index) => (
            <motion.div
              className="sentiment-bar-row"
              key={score.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.62 + index * 0.08,
                ease: "easeOut",
              }}
            >
              <div className="sentiment-bar-label">
                <span>{score.label}</span>
                <strong>{score.value.toFixed(2)}</strong>
              </div>

              <div className="sentiment-bar-track">
                <motion.div
                  className="sentiment-bar-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${score.value * 100}%` }}
                  transition={{
                    duration: 0.65,
                    delay: 0.72 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="sentiment-chip-row">
          <span>~500K reviews</span>
          <span>300.9MB</span>
          <span>3-class sentiment</span>
        </div>
      </div>
    </div>
  );
}