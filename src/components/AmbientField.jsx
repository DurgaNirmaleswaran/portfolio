import { motion } from "framer-motion";

const nodes = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${8 + Math.random() * 84}%`,
  top: `${8 + Math.random() * 78}%`,
  delay: Math.random() * 4,
  size: 2 + Math.random() * 4,
}));

export default function AmbientField() {
  return (
    <div className="ambient-field" aria-hidden="true">
      <div className="grid-wash" />

      {nodes.map((node) => (
        <motion.span
          key={node.id}
          className="ambient-node"
          style={{
            left: node.left,
            top: node.top,
            width: node.size,
            height: node.size,
          }}
          animate={{
            opacity: [0.18, 0.75, 0.18],
            scale: [1, 1.7, 1],
          }}
          transition={{
            duration: 4.5,
            delay: node.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="scan-line"
        animate={{ x: ["-20%", "120%"] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}