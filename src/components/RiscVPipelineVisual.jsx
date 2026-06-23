// src/components/RiscVPipelineVisual.jsx
import { motion } from "framer-motion";

const stages = ["IF", "ID", "EX", "MEM", "WB"];

const rows = [
  ["add x5,x1,x2", 0],
  ["lw x6,0(x5)", 1],
  ["beq x6,x0,L1", 2],
];

export default function RiscVPipelineVisual() {
  return (
    <div className="riscv-visual-card">
      <div className="riscv-visual-header">
        <span>pipeline.trace</span>
        <strong>LIVE</strong>
      </div>

      <div className="pipeline-stage-row">
        {stages.map((stage) => (
          <div className="pipeline-stage" key={stage}>
            <span>{stage}</span>
          </div>
        ))}
      </div>

      <div className="pipeline-timing-chart">
        {rows.map(([instruction, rowDelay], rowIndex) => (
          <div className="pipeline-timing-row" key={instruction}>
            <span className="pipeline-instruction-name">{instruction}</span>

            <div className="pipeline-cells">
              {stages.map((stage, stageIndex) => (
                <motion.div
                  key={`${instruction}-${stage}`}
                  className="pipeline-cell"
                  animate={{
                    opacity: [0.24, 0.24, 1, 0.24, 0.24],
                    scale: [1, 1, 1.04, 1, 1],
                  }}
                  transition={{
                    duration: 3.8,
                    delay: rowDelay * 0.35 + stageIndex * 0.42,
                    repeat: Infinity,
                    repeatDelay: 1.25,
                    ease: "easeInOut",
                  }}
                >
                  {stage}
                </motion.div>
              ))}
            </div>

            {rowIndex === 1 && (
              <motion.span
                className="pipeline-stall-tag"
                animate={{
                  opacity: [0, 0, 1, 1, 0],
                  y: [2, 2, 0, 0, -2],
                }}
                transition={{
                  duration: 3.8,
                  delay: 1.65,
                  repeat: Infinity,
                  repeatDelay: 1.25,
                  ease: "easeInOut",
                }}
              >
                stall
              </motion.span>
            )}
          </div>
        ))}
      </div>

      <div className="pipeline-registers">
        <div>
          <span>IF/ID</span>
          <strong>pc + 4</strong>
        </div>
        <div>
          <span>ID/EX</span>
          <strong>rs1 · rs2</strong>
        </div>
        <div>
          <span>EX/MEM</span>
          <strong>alu_out</strong>
        </div>
        <div>
          <span>MEM/WB</span>
          <strong>writeback</strong>
        </div>
      </div>

      <div className="pipeline-stats">
        <div>
          <strong>5</strong>
          <span>stages</span>
        </div>
        <div>
          <strong>32</strong>
          <span>registers</span>
        </div>
        <div>
          <strong>3</strong>
          <span>hazards</span>
        </div>
      </div>
    </div>
  );
}