// src/components/Timeline.jsx

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";

import { timelineItems } from "../data/timeline";
import { projectDetails } from "../data/roleProjects";

export default function Timeline({ onOpenProject }) {
  const [expandedItem, setExpandedItem] = useState(null);

  const openRelatedProject = (event, projectKey) => {
    event.preventDefault();
    event.stopPropagation();

    const relatedProject = projectDetails?.[projectKey];

    if (!relatedProject) {
      console.warn("No related project found for:", projectKey);
      return;
    }

    if (onOpenProject) {
      onOpenProject(relatedProject);
    }
  };

  const toggleLearnMore = (event, itemKey) => {
    event.preventDefault();
    event.stopPropagation();

    setExpandedItem((current) => (current === itemKey ? null : itemKey));
  };

  return (
    <section className="timeline-section" id="timeline">
      <div className="timeline-header">
        <p className="section-kicker">Trace so far</p>
        <h2>Where the work took shape.</h2>
        <p>
          Education, research, teaching, and internships - the path behind how I
          started building 
        </p>
      </div>

      <div className="timeline-wrap">
        <div className="timeline-line" />

        {timelineItems.map((item, index) => {
          const relatedProject = item.projectKey
            ? projectDetails?.[item.projectKey]
            : null;

          const itemKey = `${item.title}-${item.place}-${index}`;
          const isExpanded = expandedItem === itemKey;

          return (
            <motion.article
              className={`timeline-card ${index % 2 === 0 ? "left" : "right"}`}
              key={itemKey}
              initial={{ opacity: 0, y: 34, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: 0.65,
                delay: index * 0.04,
                ease: "easeOut",
              }}
            >
              <div className="timeline-dot">
                {item.status === "current" && <span />}
              </div>

              <div className="timeline-card-inner">
                <div className="timeline-meta">
                  <span>{item.type}</span>
                  <time>{item.date}</time>
                </div>

                <h3>{item.title}</h3>
                <h4>{item.place}</h4>
                <p>{item.description}</p>

                {item.learnMore?.length > 0 && (
                  <>
                    <button
                      type="button"
                      className={`timeline-learn-more ${
                        isExpanded ? "open" : ""
                      }`}
                      onClick={(event) => toggleLearnMore(event, itemKey)}
                    >
                      <span>{isExpanded ? "Show less" : "Learn more"}</span>
                      <ChevronDown size={14} />
                    </button>

                    {isExpanded && (
                      <ul className="timeline-more-list">
                        {item.learnMore.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </>
                )}

                {relatedProject && (
  <button
    type="button"
    className="timeline-project-link"
    onClick={(event) =>
      openRelatedProject(event, item.projectKey)
    }
  >
    <span>{item.learnMoreLabel || "View related project"}</span>
    <ArrowUpRight size={14} />
  </button>
)}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}