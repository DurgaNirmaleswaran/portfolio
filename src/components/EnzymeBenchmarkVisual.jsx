import { motion } from "framer-motion";

const enzymePoints = [
  // Simple ML
  {
    name: "Prototype",
    type: "Simple ML",
    f1: "0.120",
    time: "0.01s",
    x: 13,
    y: 69,
  },
  {
    name: "AA Comp LR",
    type: "Simple ML",
    f1: "0.061",
    time: "0.18s",
    x: 26,
    y: 75,
  },
  {
    name: "Comp RF",
    type: "Simple ML",
    f1: "0.085",
    time: "2.1s",
    x: 39,
    y: 72,
  },
  {
    name: "Padded One-Hot",
    type: "Simple ML",
    f1: "0.016",
    time: "7.8s",
    x: 50,
    y: 77,
  },
  {
    name: "3-mer LR",
    type: "Simple ML",
    f1: "0.170",
    time: "~35s",
    x: 59,
    y: 61,
  },

  // Bioinformatics
  {
    name: "DIAMOND",
    type: "Bioinformatics",
    f1: "0.305",
    time: "0.3s",
    x: 30,
    y: 49,
  },
  {
    name: "BLAST",
    type: "Bioinformatics",
    f1: "0.565",
    time: "3.3s",
    x: 43,
    y: 24,
    highlight: true,
  },
  {
    name: "Relaxed BLAST",
    type: "Bioinformatics",
    f1: "0.584",
    time: "3.3s",
    x: 47,
    y: 19,
    hero: true,
  },
  {
    name: "PSI-BLAST",
    type: "Bioinformatics",
    f1: "0.547",
    time: "9.0s",
    x: 55,
    y: 28,
  },

  // Foundation models
  {
    name: "ESM2-8M",
    type: "Foundation",
    f1: "0.437",
    time: "~1 min",
    x: 66,
    y: 47,
  },
  {
    name: "ESM2-150M",
    type: "Foundation",
    f1: "0.611",
    time: "~5 min",
    x: 75,
    y: 25,
  },
  {
    name: "ProtTrans",
    type: "Foundation",
    f1: "0.629",
    time: "~1 hr",
    x: 82,
    y: 20,
  },
  {
    name: "ESM2-650M",
    type: "Foundation",
    f1: "0.637",
    time: "~30 min",
    x: 87,
    y: 18,
  },
  {
    name: "ProGen2-XL",
    type: "Foundation",
    f1: "0.549",
    time: "~1.5 hr",
    x: 90,
    y: 35,
  },
  {
    name: "ESM2-3B",
    type: "Foundation",
    f1: "0.680",
    time: "~2 hrs",
    x: 93,
    y: 12,
  },
];

function getTypeClass(type) {
  if (type === "Simple ML") return "simple";
  if (type === "Bioinformatics") return "bio";
  if (type === "Foundation") return "foundation";
  return "";
}

export default function EnzymeBenchmarkVisual() {
  return (
    <div className="enzyme-visual-card">
      <div className="enzyme-visual-header">
        <div>
          <span>Benchmark view</span>
          <h4>F1 vs compute</h4>
        </div>

        <div className="enzyme-mini-badge">
          <strong>BLAST</strong>
          <span>0.584 F1 · 3.3s</span>
        </div>
      </div>

      <div className="enzyme-plot">
        <div className="enzyme-axis enzyme-y-axis">Weighted F1</div>
        <div className="enzyme-axis enzyme-x-axis">Compute time</div>

        <div className="enzyme-plot-frame" />

        <motion.div
          className="enzyme-scan-line"
          initial={{ x: "-120%" }}
          animate={{ x: "120%" }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="enzyme-cheap-zone">
          <span>cheap zone</span>
        </div>

        <motion.div
          className="enzyme-blast-halo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: [1, 1.08, 1] }}
          transition={{
            opacity: { duration: 0.4, delay: 0.35 },
            scale: {
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        {enzymePoints.map((point, index) => (
          <motion.div
            key={point.name}
            className={[
              "enzyme-point",
              getTypeClass(point.type),
              point.highlight ? "highlight" : "",
              point.hero ? "hero" : "",
            ].join(" ")}
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
            }}
            initial={{ opacity: 0, scale: 0.45 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.34,
              delay: 0.08 + index * 0.035,
              ease: "easeOut",
            }}
          >
            <span className="enzyme-dot" />

            <div className="enzyme-tooltip">
              <strong>{point.name}</strong>
              <span>{point.type}</span>
              <em>
                F1 {point.f1} · {point.time}
              </em>
            </div>
          </motion.div>
        ))}

        <motion.div
          className="enzyme-callout"
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.52, ease: "easeOut" }}
        >
          <strong>Relaxed BLAST</strong>
          <span>0.584 F1 · 3.3s CPU</span>
        </motion.div>
      </div>

      <div className="enzyme-legend">
        <span className="simple-dot" /> Simple ML
        <span className="bio-dot" /> Bioinformatics
        <span className="foundation-dot" /> Foundation
      </div>

      <div className="enzyme-visual-stats">
        <div>
          <strong>128</strong>
          <span>EC classes</span>
        </div>
        <div>
          <strong>4-shot</strong>
          <span>setup</span>
        </div>
        <div>
          <strong>3.3s</strong>
          <span>CPU runtime</span>
        </div>
      </div>
    </div>
  );
}