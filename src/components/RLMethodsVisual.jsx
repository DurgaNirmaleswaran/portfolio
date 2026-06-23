// src/components/RLMethodsVisual.jsx

import { motion } from "framer-motion";
import { Grid3X3, Route, Layers, ListTree } from "lucide-react";

const environments = ["GridWorld", "Cat-vs-Monsters"];

const methods = [
  { name: "SARSA(λ)", detail: "eligibility traces", icon: Route },
  { name: "Prioritized Sweeping", detail: "planning queue", icon: ListTree },
  { name: "Actor-Critic", detail: "policy + value", icon: Layers },
];

const results = [
  { method: "Prioritized", score: "0.195" },
  { method: "SARSA(λ)", score: "0.237" },
  { method: "Actor-Critic", score: "0.094" },
];

const pathCells = [0, 1, 6, 11, 16, 21, 22, 23, 24];

export default function RLMethodsVisual() {
  return (
    <div className="rlviz-card">
      <div className="rlviz-env-row">
        {environments.map((env, index) => (
          <motion.div
            className="rlviz-env-chip"
            key={env}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, delay: index * 0.08 }}
          >
            <Grid3X3 size={15} />
            <span>{env}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="rlviz-line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.18 }}
      />

      <div className="rlviz-methods">
        {methods.map((method, index) => {
          const Icon = method.icon;

          return (
            <motion.div
              className="rlviz-method-card"
              key={method.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.28 + index * 0.08 }}
            >
              <Icon size={18} />
              <strong>{method.name}</strong>
              <span>{method.detail}</span>
            </motion.div>
          );
        })}
      </div>

      <div className="rlviz-bottom-row">
        <div className="rlviz-grid-panel">
          <div className="rlviz-grid" aria-hidden="true">
            {Array.from({ length: 25 }).map((_, index) => {
              const isGoal = index === 24;
              const isPenalty = index === 12 || index === 18;
              const isPath = pathCells.includes(index);

              return (
                <motion.span
                  key={index}
                  className={[
                    isGoal ? "goal" : "",
                    isPenalty ? "penalty" : "",
                    isPath ? "path" : "",
                  ].join(" ")}
                  initial={{ opacity: 0.22 }}
                  animate={{
                    opacity: isPath ? [0.35, 0.85, 0.45] : 0.28,
                  }}
                  transition={{
                    duration: 2.4,
                    delay: index * 0.025,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              );
            })}
          </div>

          <motion.div
  className="rlviz-agent"
  animate={{
    x: [0, 28, 28, 56, 84, 112],
    y: [0, 0, 28, 28, 56, 56],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
        </div>

        <div className="rlviz-mse-table">
          <div className="rlviz-table-head">
            <span>Method</span>
            <span>MSE</span>
          </div>

          {results.map((row, index) => (
            <motion.div
              className="rlviz-table-row"
              key={row.method}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.32, delay: 0.55 + index * 0.08 }}
            >
              <span>{row.method}</span>
              <em>{row.score}</em>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="rlviz-chip-row">
        <span>2 stochastic MDPs</span>
        <span>10K episodes</span>
        <span>10 seeds</span>
        <span>MSE curves</span>
      </div>
    </div>
  );
}