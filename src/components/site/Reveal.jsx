import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({ children, delay = 0, x = 0, y = 24, className = "" }) {
  const reduce = useReducedMotion();
  const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;

  const motionX = isMobile ? x / 2 : x;
  const motionY = isMobile ? Math.max(y / 2, 8) : y;
  const duration = isMobile ? 0.28 : 0.6;
  const margin = isMobile ? "-20px" : "-80px";

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, x: motionX, y: motionY }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}