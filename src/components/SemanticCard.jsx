import { motion } from "framer-motion";

const labels = [
  { name: "axis", status: "detected" },
  { name: "marks", status: "grouped" },
  { name: "gridlines", status: "parsed" },
  { name: "labels", status: "recovered" },
];

export default function SemanticCard() {
  return (
    <motion.aside
      className="semantic-card"
      initial={{ opacity: 0, x: 40, rotate: 2 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
    >
      <div className="semantic-card-top">
        <span>raw_chart.svg</span>
        <span className="live-dot">semantic pass</span>
      </div>

      <div className="mini-chart">
        <svg viewBox="0 0 320 180" role="img" aria-label="Abstract chart semantic recovery preview">
          <line x1="42" y1="140" x2="282" y2="140" className="chart-axis" />
          <line x1="42" y1="30" x2="42" y2="140" className="chart-axis" />

          {[65, 105, 145, 185, 225, 265].map((x, index) => (
            <line
              key={x}
              x1={x}
              y1="42"
              x2={x}
              y2="140"
              className="chart-grid"
              style={{ animationDelay: `${index * 0.12}s` }}
            />
          ))}

          <polyline
            points="58,118 96,96 134,104 172,66 210,78 252,42"
            fill="none"
            className="chart-line"
          />

          {[
            [58, 118],
            [96, 96],
            [134, 104],
            [172, 66],
            [210, 78],
            [252, 42],
          ].map(([cx, cy], index) => (
            <circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r="5"
              className="chart-mark"
              style={{ animationDelay: `${0.25 + index * 0.1}s` }}
            />
          ))}
        </svg>

        <div className="chart-tag tag-axis">axis</div>
        <div className="chart-tag tag-marks">marks</div>
        <div className="chart-tag tag-grid">gridlines</div>
      </div>

      <div className="semantic-list">
        {labels.map((item, index) => (
          <motion.div
            className="semantic-row"
            key={item.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 + index * 0.1 }}
          >
            <span>{item.name}</span>
            <strong>{item.status}</strong>
          </motion.div>
        ))}
      </div>
    </motion.aside>
  );
}