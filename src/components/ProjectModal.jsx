import { useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import RagNodeVisual from "./RagNodeVisual";
import ImageCaptionVisual from "./ImageCaptionVisual";
import AmazonSentimentVisual from "./AmazonSentimentVisual";
import MLBenchmarkVisual from "./MLBenchmarkVisual";
import RLMethodsVisual from "./RLMethodsVisual";
import EnzymeBenchmarkVisual from "./EnzymeBenchmarkVisual";
import TwitterImpactVisual from "./TwitterImpactVisual";
import RidesharePricingVisual from "./RidesharePricingVisual";
import EcommerceAnalyticsVisual from "./EcommerceAnalyticsVisual";
import FlinkFraudVisual from "./FlinkFraudVisual";
import RiscVPipelineVisual from "./RiscVPipelineVisual";
import HotelBookingVisual from "./HotelBookingVisual";
import TrafficAccidentVisual from "./TrafficAccidentVisual";
import SemanticSvgVisual from "./SemanticSvgVisual";
import AiMaterialCostVisual from "./AiMaterialCostVisual";
import TaMachineLearningVisual from "./TaMachineLearningVisual";

function ProjectModalVisual({ project }) {
  if (project.id === "rag-claim-verification") {
    return <RagNodeVisual />;
  }

  if (project.id === "automated-image-captioning") {
    return <ImageCaptionVisual />;
  }

  if (project.id === "amazon-review-sentiment-analysis") {
    return <AmazonSentimentVisual />;
  }

  if (project.id === "ml-model-comparison") {
    return <MLBenchmarkVisual />;
  }

  if (project.id === "rl-algorithm-comparison") {
    return <RLMethodsVisual />;
  }

  if (project.id === "enzyme-classification-benchmarking") {
    return <EnzymeBenchmarkVisual />;
  }

  if (project.id === "twitter-scientific-impact-pipeline") {
    return <TwitterImpactVisual />;
  }

  if (project.id === "rideshare-fare-pricing-analysis") {
    return <RidesharePricingVisual />;
  }

  if (project.id === "ecommerce-analytics-rstudio") {
    return <EcommerceAnalyticsVisual />;
  }

  if (project.id === "fraud-detection-apache-flink") {
    return <FlinkFraudVisual />;
  }

  if (project.id === "risc-v-pipeline-simulator") {
    return <RiscVPipelineVisual />;
  }

  if (project.id === "hotel-booking-web-app") {
    return <HotelBookingVisual />;
  }

  if (project.id === "us-road-accidents-dashboard") {
    return <TrafficAccidentVisual />;
  }

  if (project.id === "cohort-semantic-svg-labeling") {
    return <SemanticSvgVisual />;
  }

  if (project.id === "ai-enabled-svg-semantics") {
    return <SemanticSvgVisual />;
  }

  if (project.id === "earth-in-the-machine-ai-infrastructure") {
    return <AiMaterialCostVisual />;
  }

  if (project.id === "ta-machine-learning") {
    return <TaMachineLearningVisual />;
  }

  return (
    <div className="project-default-visual">
      <span>{project.category}</span>
      <strong>{project.title}</strong>
      <p>{project.impactLine}</p>
    </div>
  );
}

function ProjectContextBox({ project }) {
  if (!(project.company || project.lab || project.instructor)) {
    return null;
  }

  const context = project.company || project.lab || project.instructor;

  const label = project.company
    ? "Company context"
    : project.lab
      ? "Research lab"
      : "Instructor context";

  return (
    <div className="project-context-inline">
      <span>{label}</span>

      <p>{context.description}</p>

      {context.url && (
        <a href={context.url} target="_blank" rel="noreferrer">
          About {context.name} ↗
        </a>
      )}
    </div>
  );
}

export default function ProjectModal({ project, onClose }) {
useLayoutEffect(() => {
  if (!project) return;

  const scrollY = window.scrollY;
  const body = document.body;
  const html = document.documentElement;

  const previousBodyPosition = body.style.position;
  const previousBodyTop = body.style.top;
  const previousBodyLeft = body.style.left;
  const previousBodyRight = body.style.right;
  const previousBodyWidth = body.style.width;
  const previousBodyOverflow = body.style.overflow;
  const previousHtmlScrollBehavior = html.style.scrollBehavior;

  html.style.scrollBehavior = "auto";

  body.style.position = "fixed";
  body.style.top = `-${scrollY}px`;
  body.style.left = "0";
  body.style.right = "0";
  body.style.width = "100%";
  body.style.overflow = "hidden";

  return () => {
    body.style.position = previousBodyPosition;
    body.style.top = previousBodyTop;
    body.style.left = previousBodyLeft;
    body.style.right = previousBodyRight;
    body.style.width = previousBodyWidth;
    body.style.overflow = previousBodyOverflow;

    window.scrollTo({
      top: scrollY,
      left: 0,
      behavior: "auto",
    });

    requestAnimationFrame(() => {
      html.style.scrollBehavior = previousHtmlScrollBehavior;
    });
  };
}, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="project-modal-backdrop"
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={onClose}
        >
          <motion.article
            className="project-modal"
            initial={{ opacity: 0, y: 18, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.985 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="project-modal-close"
              onClick={onClose}
              aria-label="Close project details"
            >
              <X size={18} />
            </button>

            <div className="project-modal-grid">
              <div className="project-modal-copy">
                {project.eyebrow && (
                  <p className="project-modal-eyebrow">{project.eyebrow}</p>
                )}

                <h3>{project.title}</h3>

                {project.description && (
                  <p className="project-modal-description">
                    {project.description}
                  </p>
                )}

                {project.tech && (
                  <div className="project-modal-tech">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                )}

                <ProjectContextBox project={project} />
              </div>

              <ProjectModalVisual project={project} />
            </div>

            {project.metrics && (
              <div className="project-modal-metrics">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="project-modal-sections">
              {project.problem && (
                <section>
                  <h4>Problem</h4>
                  <p>{project.problem}</p>
                </section>
              )}

              {project.built && (
                <section>
                  <h4>What I built</h4>
                  <p>{project.built}</p>
                </section>
              )}

              {project.result && (
                <section>
                  <h4>Result</h4>
                  <p>{project.result}</p>
                </section>
              )}
            </div>

            {project.bullets && (
              <div className="project-modal-bullets">
                <h4>Technical highlights</h4>
                <ul>
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.impactLine &&
              project.id !== "fraud-detection-apache-flink" && (
                <p className="project-modal-impact">{project.impactLine}</p>
              )}
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
