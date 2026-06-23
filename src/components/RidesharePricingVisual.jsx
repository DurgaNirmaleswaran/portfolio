import { motion } from "framer-motion";
import { MapPin, Navigation, CloudRain, Clock3, Route, Zap } from "lucide-react";

const drivers = [
  {
    label: "Service tier",
    value: "strong",
    className: "strong",
    icon: Zap,
  },
  {
    label: "Distance",
    value: "strong",
    className: "strong",
    icon: Route,
  },
  {
    label: "Route",
    value: "strong",
    className: "strong",
    icon: Navigation,
  },
  {
    label: "Surge",
    value: "strong",
    className: "strong",
    icon: Zap,
  },
  {
    label: "Weather",
    value: "weak",
    className: "weak",
    icon: CloudRain,
  },
  {
    label: "Time",
    value: "weak",
    className: "weak",
    icon: Clock3,
  },
];

export default function RidesharePricingVisual() {
  return (
    <div className="rideshare-visual-card">
      <div className="rideshare-visual-header">
        <div>
          <span>Pricing model</span>
          <h4>Fare drivers</h4>
        </div>

        <div className="rideshare-score-badge">
          <strong>R² 0.9286</strong>
          <small>$2.49 RMSE</small>
        </div>
      </div>

      <div className="rideshare-map-panel">
        <div className="rideshare-map-grid" />

        <motion.div
          className="rideshare-route-line"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
        />

        <svg
          className="rideshare-route-svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path
            d="M 18 70 C 28 48, 43 58, 52 36 C 62 12, 78 22, 84 16"
            fill="none"
            stroke="rgba(156, 236, 255, 0.8)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="5 6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          />

          <motion.circle
            r="2.3"
            fill="#9cecff"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              offsetDistance: ["0%", "100%"],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              offsetPath:
                'path("M 18 70 C 28 48, 43 58, 52 36 C 62 12, 78 22, 84 16")',
            }}
          />
        </svg>

        <div className="rideshare-pin start">
          <MapPin size={14} />
          <span>Source</span>
        </div>

        <div className="rideshare-pin end">
          <MapPin size={14} />
          <span>Destination</span>
        </div>

        <div className="fare-ticket">
          <span>Final model</span>
<strong>92.86%</strong>
<small>variance explained</small>
        </div>
      </div>

      <div className="rideshare-driver-grid">
        {drivers.map((driver, index) => {
          const Icon = driver.icon;

          return (
            <motion.div
              key={driver.label}
              className={`rideshare-driver ${driver.className}`}
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.35,
                delay: 0.18 + index * 0.06,
                ease: "easeOut",
              }}
            >
              <Icon size={14} />
              <div>
                <strong>{driver.label}</strong>
                <span>{driver.value}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      
    </div>
  );
}