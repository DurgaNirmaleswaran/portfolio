import { motion } from "framer-motion";
import { Database, Split, Timer, Bell, MemoryStick, Zap } from "lucide-react";

const streamEvents = [
  { amount: "$4.20", type: "small", zip: "02139", delay: 0 },
  { amount: "$7.80", type: "small", zip: "02139", delay: 0.8 },
  { amount: "$540", type: "large", zip: "02139", delay: 1.6 },
];

export default function FlinkFraudVisual() {
  return (
    <div className="flink-visual-card">
      <div className="flink-visual-header">
        <div>
          <span>Streaming job</span>
          <h4>Stateful Detection</h4>
        </div>

        <div className="flink-live-badge">
          <Zap size={14} />
          <div>
            <strong>LIVE</strong>
            <small>event stream</small>
          </div>
        </div>
      </div>

      <div className="flink-stream-panel">
        <div className="flink-grid-bg" />

        <div className="flink-stage source">
          <Database size={17} />
          <strong>Source</strong>
          <span>transactions</span>
        </div>

        <div className="flink-stage keyby">
          <Split size={17} />
          <strong>keyBy</strong>
          <span>accountId</span>
        </div>

        <div className="flink-detector">
          <div className="flink-detector-title">
            <MemoryStick size={15} />
            <span>DetailedFraudDetector</span>
          </div>

          <div className="flink-state-row">
            <div>
              <small>ValueState</small>
              <strong>small txn + ZIP</strong>
            </div>
            <div>
              <small>Timer</small>
              <strong>1 min window</strong>
            </div>
          </div>

          <div className="flink-rule">
            <span>&lt;$10</span>
            <em>then</em>
            <span>≥$500</span>
          </div>
        </div>

        <div className="flink-stage alert">
          <Bell size={17} />
          <strong>Alert</strong>
          <span>custom sink</span>
        </div>

        <svg
          className="flink-flow-svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="flinkFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(156,236,255,0.25)" />
              <stop offset="50%" stopColor="rgba(156,236,255,0.85)" />
              <stop offset="100%" stopColor="rgba(125,145,255,0.45)" />
            </linearGradient>
          </defs>

          <motion.path
            d="M 15 40 C 27 40, 31 40, 39 40 C 50 40, 55 58, 66 58 C 77 58, 82 40, 91 40"
            fill="none"
            stroke="url(#flinkFlow)"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeDasharray="5 6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
          />
        </svg>

        {streamEvents.map((event, index) => (
          <motion.div
            key={`${event.amount}-${index}`}
            className={`flink-event ${event.type}`}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{
  opacity: [0, 1, 1, 0],
  x: [0, 116, 228, 388],
  y: [0, -26, 18, -4],
}}
            transition={{
              duration: 4.2,
              delay: event.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <strong>{event.amount}</strong>
            <span>{event.zip}</span>
          </motion.div>
        ))}

        <motion.div
          className="flink-alert-pulse"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1, 0], scale: [0.8, 1.15, 1.35] }}
          transition={{
            duration: 2.2,
            delay: 2.4,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      </div>

      <div className="flink-bottom-grid">
        <div>
          <strong>ValueState</strong>
          <span>per-account memory</span>
        </div>
        <div>
          <strong>Timers</strong>
          <span>state cleanup</span>
        </div>
        <div>
          <strong>AlertSink</strong>
          <span>fraud output</span>
        </div>
      </div>
    </div>
  );
}