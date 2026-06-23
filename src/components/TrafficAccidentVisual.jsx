// src/components/TrafficAccidentVisual.jsx
import { motion } from "framer-motion";

const bars = [
  { state: "CA", value: 92 },
  { state: "FL", value: 74 },
  { state: "TX", value: 62 },
  { state: "SC", value: 48 },
];

const lines = [
  "M20 70 C55 38, 88 58, 120 34 S185 44, 220 26",
  "M20 86 C55 76, 90 82, 124 60 S184 66, 220 48",
];

const features = [
  { name: "Signal", a: 70, b: 22 },
  { name: "Junction", a: 58, b: 34 },
  { name: "Crossing", a: 42, b: 24 },
];

export default function TrafficAccidentVisual() {
  return (
    <div className="traffic-visual-card">
      <div className="traffic-visual-header">
        <span>dashboard.view</span>
        <strong>D3 · SVG</strong>
      </div>

      <div className="traffic-tabs">
        <span className="active">Top States</span>
        <span>Severity Trend</span>
        <span>Road Features</span>
      </div>

      <div className="traffic-dashboard-grid">
        <div className="traffic-panel traffic-bars">
          <div className="traffic-panel-title">
            <span>Top states</span>
            <strong>2016–2023</strong>
          </div>

          {bars.map((bar, index) => (
            <div className="traffic-bar-row" key={bar.state}>
              <span>{bar.state}</span>
              <div>
                <motion.i
                  initial={{ width: 0 }}
                  animate={{ width: `${bar.value}%` }}
                  transition={{
                    duration: 0.9,
                    delay: 0.15 + index * 0.12,
                    ease: "easeOut",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="traffic-panel traffic-line">
          <div className="traffic-panel-title">
            <span>Severity trend</span>
            <strong>hover</strong>
          </div>

          <svg viewBox="0 0 240 110" role="img" aria-label="Severity trend chart">
            <path className="traffic-grid-line" d="M12 28 H228" />
            <path className="traffic-grid-line" d="M12 58 H228" />
            <path className="traffic-grid-line" d="M12 88 H228" />

            {lines.map((d, index) => (
              <motion.path
                key={d}
                d={d}
                className={`traffic-trend-line line-${index + 1}`}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 1.6,
                  delay: 0.45 + index * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}

            <motion.circle
              cx="120"
              cy="34"
              r="4"
              className="traffic-tooltip-dot"
              animate={{ opacity: [0.35, 1, 0.35], scale: [1, 1.25, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <div className="traffic-panel traffic-features">
          <div className="traffic-panel-title">
            <span>Road features</span>
            <strong>stacked</strong>
          </div>

          {features.map((feature, index) => (
            <div className="traffic-feature-row" key={feature.name}>
              <span>{feature.name}</span>
              <div>
                <motion.i
                  className="segment-a"
                  initial={{ width: 0 }}
                  animate={{ width: `${feature.a}%` }}
                  transition={{
                    duration: 0.8,
                    delay: 0.35 + index * 0.12,
                    ease: "easeOut",
                  }}
                />
                <motion.i
                  className="segment-b"
                  initial={{ width: 0 }}
                  animate={{ width: `${feature.b}%` }}
                  transition={{
                    duration: 0.8,
                    delay: 0.55 + index * 0.12,
                    ease: "easeOut",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="traffic-pipeline">
        <span>CSV</span>
        <i />
        <span>Python clean</span>
        <i />
        <span>JSON</span>
        <i />
        <span>D3 dashboard</span>
      </div>
    </div>
  );
}