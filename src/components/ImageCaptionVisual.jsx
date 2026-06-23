// src/components/ImageCaptionVisual.jsx

import { motion } from "framer-motion";
import { Image, Brain, MessageSquareText } from "lucide-react";

const tokens = ["<start>", "a", "dog", "running", "on", "grass", "<end>"];

const featureBlocks = Array.from({ length: 21 });

export default function ImageCaptionVisual() {
  return (
    <div className="caption-visual">
      <div className="caption-visual-inner">
        <div className="caption-pipeline">
          <motion.div
            className="caption-node image-node"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42 }}
          >
            <Image size={20} />
            <span>Image</span>
            <small>299×299</small>
          </motion.div>

          <motion.div
            className="caption-flow-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.16 }}
          />

          <motion.div
            className="caption-node encoder-node"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: 0.18 }}
          >
            <Brain size={20} />
            <span>Encoder</span>
            <small>EfficientNetB7</small>
          </motion.div>

          <motion.div
            className="caption-flow-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.32 }}
          />

          <motion.div
            className="caption-node decoder-node"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: 0.36 }}
          >
            <MessageSquareText size={20} />
            <span>Decoder</span>
            <small>Transformer</small>
          </motion.div>
        </div>

        <div className="caption-feature-map" aria-hidden="true">
          {featureBlocks.map((_, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0.18 }}
              animate={{
                opacity: [0.18, 0.75, 0.24],
                y: [0, -2, 0],
              }}
              transition={{
                duration: 2.4,
                delay: index * 0.045,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <div className="caption-output-card">
          <span className="caption-output-label">Generated caption</span>

          <div className="caption-token-row">
            {tokens.map((token, index) => (
              <motion.span
                key={`${token}-${index}`}
                initial={{ opacity: 0, y: 7 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.24,
                  delay: 0.62 + index * 0.1,
                }}
              >
                {token}
              </motion.span>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
}