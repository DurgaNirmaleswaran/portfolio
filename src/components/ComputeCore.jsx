import { motion } from "framer-motion";

const chips = [
  "charts.decode()",
  "signals.normalize()",
  "models.eval()",
  "patterns.surface()",
  "insight.render()",
];

const fragments = ["{ }", "</>", "∑", "λ", "01", "vec"];

const packets = [
  { className: "packet-one", delay: 0 },
  { className: "packet-two", delay: 0.85 },
  { className: "packet-three", delay: 1.7 },
  { className: "packet-four", delay: 2.55 },
];

export default function ComputeCore() {
  return (
    <motion.aside
      className="compute-core"
      initial={{ opacity: 0, x: 38, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
      aria-hidden="true"
    >
      <div className="core-scan" />
      <div className="core-vignette" />

      <div className="core-orbit orbit-one" />
      <div className="core-orbit orbit-two" />
      <div className="core-orbit orbit-three" />
      <div className="core-orbit orbit-four" />
      <div className="core-orbit orbit-five" />

      <svg className="core-lines" viewBox="0 0 420 420">
        <line x1="210" y1="210" x2="86" y2="112" />
        <line x1="210" y1="210" x2="326" y2="102" />
        <line x1="210" y1="210" x2="344" y2="286" />
        <line x1="210" y1="210" x2="102" y2="314" />
        <line x1="86" y1="112" x2="326" y2="102" />
        <line x1="102" y1="314" x2="344" y2="286" />

        <path className="core-arc arc-one" d="M72 250 C132 92, 294 88, 358 232" />
        <path className="core-arc arc-two" d="M74 166 C170 336, 310 318, 360 134" />
        <path className="core-arc arc-three" d="M118 328 C72 218, 156 88, 292 78" />
      </svg>

      {packets.map((packet) => (
        <motion.span
          key={packet.className}
          className={`data-packet ${packet.className}`}
          animate={{
            offsetDistance: ["0%", "100%"],
            opacity: [0, 1, 1, 0],
            scale: [0.55, 1, 1, 0.55],
          }}
          transition={{
            duration: 4.4,
            delay: packet.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="core-glow"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.82, 1, 0.82],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="core-dot" />
        <span className="core-pulse pulse-one" />
        <span className="core-pulse pulse-two" />
        <span className="core-pulse pulse-three" />
      </motion.div>

      <motion.span className="core-node node-a" animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
      <motion.span className="core-node node-b" animate={{ x: [0, 10, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} />
      <motion.span className="core-node node-c" animate={{ y: [0, 12, 0], opacity: [0.55, 1, 0.55] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
      <motion.span className="core-node node-d" animate={{ x: [0, -12, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }} />

      <div className="fragment-layer">
        {fragments.map((fragment, index) => (
          <motion.span
            key={`${fragment}-${index}`}
            className={`code-fragment fragment-${index + 1}`}
            animate={{
              y: [0, -8, 0],
              opacity: [0.18, 0.55, 0.18],
            }}
            transition={{
              duration: 3 + index * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            {fragment}
          </motion.span>
        ))}
      </div>

      <div className="chip-stack">
        {chips.map((chip, index) => (
          <motion.span
            key={chip}
            className="code-chip"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0.42, 1, 0.42], y: 0 }}
            transition={{
              opacity: {
                duration: 3.2,
                delay: index * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
              },
              y: {
                duration: 0.6,
                delay: 0.55 + index * 0.08,
              },
            }}
          >
            {chip}
          </motion.span>
        ))}
      </div>
    </motion.aside>
  );
}