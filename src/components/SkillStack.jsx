// src/components/SkillStack.jsx
import RevealSection from "./RevealSection";
import { motion } from "framer-motion";
import {
  Code2,
  BarChart3,
  Wrench,
  Dna,
  Database,
  Brain,
  MessageSquareText,
} from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    summary: "Programming foundations across software, data, and scripting.",
    skills: ["Python", "C/C++", "HTML/CSS", "JavaScript", "R", "SQL"],
  },
  {
    title: "AI / ML & Deep Learning",
    icon: Brain,
    summary: "Modeling, experimentation, vision, and learning-based systems.",
    skills: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "CNNs",
      "Transformers",
      "Attention Mechanisms",
      "Computer Vision",
      "Reinforcement Learning",
    ],
  },
  {
    title: "NLP & LLMs",
    icon: MessageSquareText,
    summary: "Retrieval, embeddings, sentiment analysis, and LLM workflows.",
    skills: [
      "Hugging Face Transformers",
      "Sentence-BERT",
      "RoBERTa",
      "FAISS",
      "NLTK",
      "VADER",
      "RAG",
      "LLM Prompting",
      "OpenAI API",
      "Multimodal LLM",
    ],
  },
  {
    title: "Data Engineering & Analysis",
    icon: Database,
    summary: "Pipelines, statistical analysis, features, and stream processing.",
    skills: [
      "NumPy",
      "Pandas",
      "Apache Flink",
      "Feature Engineering",
      "Hypothesis Testing",
      "Regression Analysis",
      "JSON/JSONL"

    ],
  },
  {
    title: "Data Visualization",
    icon: BarChart3,
    summary: "Interactive, analytical, and research-facing visual systems.",
    skills: ["D3.js", "Matplotlib", "Quarto", "RStudio", "SVG", "ggplot2"],
  },
  {
    title: "Scientific Computing",
    icon: Dna,
    summary:
      "Computational workflows, sequence analysis, and research-oriented data processing.",
    skills: [
      "BLAST",
      "PSI-BLAST",
      "DIAMOND",
      "k-mer Features",
      "Protein Sequence Analysis",
    ],
  },
  {
    title: "Web & Tools",
    icon: Wrench,
    summary: "Development tools, APIs, notebooks, and engineering workflow.",
    skills: [
      "Node.js",
      "Git",
      "GitHub",
      "Linux",
      "Jupyter Notebook",
      "REST APIs",
    ],
  },
];

export default function SkillStack() {
  return (
    <RevealSection className="skills-section" id="skills">
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <p className="section-kicker">Technical toolkit</p>
        <p className="skills-subtext">
          A focused stack across AI/ML, data systems, visualization, and
          software engineering.
        </p>
      </motion.div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.article
              className="skill-card"
              key={group.title}
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 18,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="skill-card-top">
                <div className="skill-icon">
                  <Icon size={20} />
                </div>

                <div>
                  <h3>{group.title}</h3>
                  <p>{group.summary}</p>
                </div>
              </div>

              <div className="skill-tags">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{
                      opacity: 0,
                      x: -8,
                      filter: "blur(4px)",
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      filter: "blur(0px)",
                    }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.28,
                      delay: index * 0.05 + skillIndex * 0.035,
                      ease: "easeOut",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </RevealSection>
  );
}