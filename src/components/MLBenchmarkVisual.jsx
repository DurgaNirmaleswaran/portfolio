// src/components/MLBenchmarkVisual.jsx

import { motion } from "framer-motion";
import { Database, GitBranch, Brain, Trees } from "lucide-react";

const datasets = ["Digits", "Parkinson’s", "Rice", "Credit"];

const models = [
  { name: "k-NN", detail: "neighbor sweep", icon: GitBranch },
  { name: "Neural Net", detail: "architecture + L2", icon: Brain },
  { name: "Random Forest", detail: "tree tuning", icon: Trees },
];

const results = [
  { dataset: "Digits", model: "Random Forest", score: "0.9757 Acc" },
  { dataset: "Parkinson’s", model: "Random Forest", score: "0.9387 F1" },
  { dataset: "Rice", model: "Random Forest", score: "~0.9220 F1" },
  { dataset: "Credit", model: "Random Forest", score: "0.8836 Acc" },
];

export default function MLBenchmarkVisual() {
  return (
    <div className="mlbench-visual">
      <div className="mlbench-datasets">
        {datasets.map((dataset, index) => (
          <motion.div
            className="mlbench-dataset"
            key={dataset}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, delay: index * 0.06 }}
          >
            <Database size={15} />
            <span>{dataset}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mlbench-flow-line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />

      <div className="mlbench-models">
        {models.map((model, index) => {
          const Icon = model.icon;

          return (
            <motion.div
              className="mlbench-model"
              key={model.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.28 + index * 0.08 }}
            >
              <Icon size={18} />
              <strong>{model.name}</strong>
              <span>{model.detail}</span>
            </motion.div>
          );
        })}
      </div>

      <div className="mlbench-matrix">
        <div className="mlbench-matrix-head">
          <span>Dataset</span>
          <span>Best</span>
          <span>Score</span>
        </div>

        {results.map((row, index) => (
          <motion.div
            className="mlbench-matrix-row"
            key={row.dataset}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.32, delay: 0.55 + index * 0.08 }}
          >
            <span>{row.dataset}</span>
            <strong>{row.model}</strong>
            <em>{row.score}</em>
          </motion.div>
        ))}
      </div>

      <div className="mlbench-chip-row">
        <span>4 datasets</span>
        <span>3 model families</span>
        <span>Stratified CV</span>
        <span>Accuracy + F1</span>
      </div>
    </div>
  );
}