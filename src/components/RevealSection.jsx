// src/components/RevealSection.jsx

import { motion } from "framer-motion";

export default function RevealSection({
  children,
  className = "",
  id,
  as = "section",
}) {
  const Component = motion[as];

  return (
    <Component
      id={id}
      className={className}
      initial={{
        opacity: 0,
        y: 28,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        margin: "-100px",
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Component>
  );
}