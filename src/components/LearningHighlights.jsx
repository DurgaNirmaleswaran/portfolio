// src/components/LearningHighlights.jsx

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BarChart3,
  Lightbulb,
  Mic2,
  Presentation,
  Sparkles,
} from "lucide-react";
import { learningHighlights } from "../data/learningHighlights";

const iconMap = {
  Workshop: ShieldCheck,
  Webinar: Lightbulb,
  Presentation: Presentation,
  "Public Speaking": Mic2,
};

export default function LearningHighlights() {
  return (
    <section className="learning-section" id="learning">
      <div className="learning-layout">
        <motion.div
          className="learning-left"
          initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <p className="section-kicker">Workshops & speaking</p>

          <h2>Learning, workshops, and speaking.</h2>

          <p>
            A small collection of workshops, webinars, and presentations that
            shaped my early interests in security, visualization, software
            design, and communication.
          </p>

          <div className="learning-summary-strip">
            <span>3 workshops</span>
            <span>1 webinar</span>
            <span>2 presentations</span>
          </div>
        </motion.div>

        <div className="learning-timeline">
          <div className="learning-line" aria-hidden="true" />

          {learningHighlights.map((item, index) => {
            const Icon = iconMap[item.type] || Sparkles;

            return (
              <motion.article
                className="learning-row"
                key={item.id}
                initial={{ opacity: 0, x: 28, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.42,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
              >
                <div className="learning-dot-wrap">
                  <span className="learning-dot">
                    <Icon size={15} />
                  </span>
                </div>

                <div className="learning-row-card">
                  <div className="learning-row-top">
                    <div>
                      <span className="learning-type">{item.type}</span>
                      <h3>{item.title}</h3>
                    </div>

                    <strong>{item.date}</strong>
                  </div>

                  <p>{item.detail}</p>

                  <div className="learning-tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}