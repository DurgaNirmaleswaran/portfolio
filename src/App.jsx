// src/App.jsx

import { useState } from "react";

import Intro from "./components/Intro";
import Timeline from "./components/Timeline";
import RoleLens from "./components/RoleLens";
import CursorGlow from "./components/CursorGlow";
import ProjectModal from "./components/ProjectModal";
import Scholarships from "./components/Scholarships";
import SkillStack from "./components/SkillStack";
import Publications from "./components/Publications";
import LearningHighlights from "./components/LearningHighlights";
import Contact from "./components/Contact";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <main className="site-shell">
      <CursorGlow />
      <Intro />

      <Timeline onOpenProject={setSelectedProject} />
      <Scholarships />
      <SkillStack />
      <RoleLens />
      <Publications />
      <LearningHighlights />
      <Contact />
      <footer className="site-footer">
  <div className="footer-line" />

  <p>
    Built with curiosity, late-night debugging, and a lot of coffee.
  </p>

  <span>© 2026 Durga Nirmaleswaran</span>
</footer>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}