// src/components/CursorGlow.jsx

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  const smoothX = useSpring(mouseX, {
    stiffness: 160,
    damping: 32,
    mass: 0.35,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 160,
    damping: 32,
    mass: 0.35,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const handleMouseLeave = () => {
      mouseX.set(-300);
      mouseY.set(-300);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="cursor-glow"
      style={{
        x: smoothX,
        y: smoothY,
      }}
      aria-hidden="true"
    />
  );
}