// src/components/Publications.jsx

import { motion } from "framer-motion";
import { FileText, Sparkles, BookOpen, Presentation } from "lucide-react";
import { publications } from "../data/publications";

const iconMap = {
  Submitted: Sparkles,
  Published: BookOpen,
  Presented: Presentation,
};

export default function Publications() {
  return (
    <section className="pub-section" id="publications">
      <div className="pub-header">
        <p className="section-kicker">Research & publications</p>
        <h2>Work that moved beyond the project stage.</h2>
        <p>
          A few projects also became papers, submissions, or conference work -
          connecting my technical implementation with research communication.
        </p>
      </div>

      <div className="pub-stage">
        <div className="pub-orbit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="pub-list">
          {publications.map((paper, index) => {
            const Icon = iconMap[paper.status] || FileText;

            return (
              <motion.article
                className="pub-card"
                key={paper.id}
                initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
              >
                <div className="pub-card-top">
                  <div className="pub-icon">
                    <Icon size={18} />
                  </div>

                  <div className="pub-meta">
                    <span>{paper.type}</span>
                    <strong>{paper.status}</strong>
                  </div>
                </div>

                <h3>{paper.title}</h3>

                <p className="pub-description">{paper.description}</p>

                <div className="pub-venue-row">
                  <span>{paper.venue}</span>
                  <em>{paper.year}</em>
                </div>

                <div className="pub-tags">
                  {paper.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}