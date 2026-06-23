// src/components/RoleLens.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { roleGroups, roleCopy, projectDetails } from "../data/roleProjects";
import ProjectModal from "./ProjectModal";

const roles = Object.keys(roleGroups);

export default function RoleLens() {
  const [activeRole, setActiveRole] = useState("AI/ML");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = roleGroups[activeRole];

  return (
    <section className="role-section" id="work">
      <div className="role-header">
        <p className="section-kicker">Project archive</p>
        <h2>Projects by focus area</h2>
        <p>
          Grouped by the kind of problems each project is closest to - AI/ML,
          data engineering, visualization, and software systems.
        </p>
      </div>

      <div className="role-switcher" aria-label="Project role filters">
        {roles.map((role) => (
          <button
            key={role}
            type="button"
            className={activeRole === role ? "active" : ""}
            onClick={() => setActiveRole(role)}
          >
            {role}
          </button>
        ))}
      </div>

      <div className="role-stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole}
            className="role-panel"
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="role-panel-top">
              <div>
                <span className="role-label">Viewing as</span>
                <h3>{activeRole}</h3>
              </div>

              <p>{roleCopy[activeRole]}</p>
            </div>

            <div className="project-title-grid">
              {projects.map((project, index) => {
                const detail = projectDetails?.[project];
                if (project === "Hotel Booking Web App") {
                console.log("HOTEL PROJECT NAME:", project);
                console.log("HOTEL DETAIL:", detail);
                console.log("HOTEL COMPANY:", detail?.company);
              }
                const displayTitle = detail?.title || project;
                const previewText = detail?.description;

                return (
                  <motion.article
                    className={`project-title-card ${
                      detail ? "project-title-card-clickable" : ""
                    }`}
                    key={project}
                    role={detail ? "button" : undefined}
                    tabIndex={detail ? 0 : undefined}
                    onClick={() => {
                      if (detail) setSelectedProject(detail);
                    }}
                    onKeyDown={(event) => {
                      if (!detail) return;

                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setSelectedProject(detail);
                      }
                    }}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.045,
                      ease: "easeOut",
                    }}
                  >
                    <span className="project-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="project-title-content">
                      <h4>{displayTitle}</h4>

                      {previewText && (
                        <p className="project-card-preview">{previewText}</p>
                      )}

                      {detail?.tech && (
                        <div className="project-card-tech">
                          {detail.tech.slice(0, 4).map((tech) => (
                            <span key={tech}>{tech}</span>
                          ))}
                      {detail.tech.length > 4 && (
  <span className="more-tech">+{detail.tech.length - 4}</span>
)}
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      className="project-open-button"
                      onClick={(event) => {
                        event.stopPropagation();
                        if (detail) setSelectedProject(detail);
                      }}
                      disabled={!detail}
                      aria-label={`Open ${displayTitle} details`}
                    >
                      <ArrowUpRight size={18} />
                    </button>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}