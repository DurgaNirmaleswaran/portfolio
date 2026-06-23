import { motion } from "framer-motion";
import {
  BarChart3,
  Package,
  Users,
  Truck,
  Percent,
  FileText,
} from "lucide-react";

const reportPanels = [
  {
    label: "Customers",
    value: "frequency",
    icon: Users,
    className: "customers",
  },
  {
    label: "Products",
    value: "profitability",
    icon: Package,
    className: "products",
  },
  {
    label: "Discounts",
    value: "margin impact",
    icon: Percent,
    className: "discounts",
  },
  {
    label: "Shipping",
    value: "delivery time",
    icon: Truck,
    className: "shipping",
  },
];

const bars = [
  { label: "Sales", height: "78%" },
  { label: "Profit", height: "48%" },
  { label: "Discount", height: "34%" },
  { label: "Shipping", height: "56%" },
];

export default function EcommerceAnalyticsVisual() {
  return (
    <div className="ecommerce-visual-card">
      <div className="ecommerce-visual-header">
        <div>
          <span>Analytics report</span>
          <h4>Sales ≠ Profit</h4>
        </div>

        <div className="ecommerce-report-badge">
          <FileText size={15} />
          <div>
            <strong>Quarto</strong>
            <small>reproducible report</small>
          </div>
        </div>
      </div>

      <div className="ecommerce-dashboard">
        <div className="ecommerce-dashboard-grid" />

        <div className="ecommerce-chart-card">
          <div className="ecommerce-card-title">
            <BarChart3 size={15} />
            <span>Business signals</span>
          </div>

          <div className="ecommerce-bars">
            {bars.map((bar, index) => (
              <div className="ecommerce-bar-wrap" key={bar.label}>
                <motion.div
                  className={`ecommerce-bar bar-${index}`}
                  initial={{ height: 0 }}
                  animate={{ height: bar.height }}
                  transition={{
                    duration: 0.75,
                    delay: 0.2 + index * 0.1,
                    ease: "easeOut",
                  }}
                />
                <small>{bar.label}</small>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          className="ecommerce-insight-card"
          initial={{ opacity: 0, y: 10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.35, ease: "easeOut" }}
        >
          <span>Core question</span>
          <strong>Where is the business actually profitable?</strong>
          <p>
            Revenue, margin, customers, products, discounts, and delivery are
            analyzed together.
          </p>
        </motion.div>

        <motion.div
          className="ecommerce-flow-line"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.45, ease: "easeOut" }}
        />

    
      </div>

      <div className="ecommerce-panel-grid">
        {reportPanels.map((panel, index) => {
          const Icon = panel.icon;

          return (
            <motion.div
              key={panel.label}
              className={`ecommerce-panel ${panel.className}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: 0.28 + index * 0.07,
                ease: "easeOut",
              }}
            >
              <Icon size={15} />
              <div>
                <strong>{panel.label}</strong>
                <span>{panel.value}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}