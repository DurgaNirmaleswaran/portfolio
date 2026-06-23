// src/components/Intro.jsx

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import AmbientField from "./AmbientField";

const navItems = [
  { label: "Home", target: "about-me" },
  { label: "Experience", target: "timeline" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "work" },
  { label: "Publications", target: "publications" },
  { label: "Contact", target: "contact" },
];

function scrollToSection(event, targetId) {
  event.preventDefault();

  const section = document.getElementById(targetId);

  if (!section) {
    console.warn(`Section with id="${targetId}" not found`);
    return;
  }

  const navOffset = 105;
  const sectionTop =
    section.getBoundingClientRect().top + window.pageYOffset - navOffset;

  window.scrollTo({
    top: sectionTop,
    behavior: "smooth",
  });

  window.history.replaceState(null, "", `#${targetId}`);
}

export default function Intro() {
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;

      if (scrollingDown && currentScrollY > 120) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="intro-section" id="about-me">
      <AmbientField />

      <nav
        className={`top-nav ${navHidden ? "top-nav-hidden" : ""}`}
        aria-label="Main navigation"
      >
        {navItems.map((item) => (
          <a
            key={item.target}
            href={`#${item.target}`}
            onClick={(event) => scrollToSection(event, item.target)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="intro-shell">
        <motion.div
          className="intro-copy"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <div className="identity-rail">
            <div className="identity-name-row">Durga Nirmaleswaran</div>
          </div>

          <h1>I build across AI, data, software, and visualization.</h1>

          <p className="intro-lede">
            I graduated from UMass Amherst with an MS in Computer Science. What
            pulled me through it wasn&apos;t the degree - it was the questions I
            couldn&apos;t let go of. What&apos;s actually driving this pattern in the
            data? How do we make this more useful to the person on the other
            end? Is there a simpler way that works just as well?
          </p>

          <p className="intro-lede intro-question-line"></p>

          <p className="intro-note">
            I follow those questions across ML, data, and systems - and found
            that the most interesting answers always live in the overlap. What
            I’m really after is work that leaves things a little better for the
            people it reaches.
          </p>

          <div className="hero-actions">
            <a
              className="primary-link"
              href="#work"
              onClick={(event) => scrollToSection(event, "work")}
            >
              View work <ArrowUpRight size={18} />
            </a>

            <a
              className="secondary-link"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume <ArrowUpRight size={18} />
            </a>

            <a
              className="secondary-link"
              href="#contact"
              onClick={(event) => scrollToSection(event, "contact")}
            >
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          className="intro-portrait"
          initial={{ opacity: 0, x: 18, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <div className="intro-portrait-frame">
            <img
              src="/images/durga-profile.jpg"
              alt="Durga Nirmaleswaran"
              className="intro-photo"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

