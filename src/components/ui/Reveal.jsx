import { motion } from "framer-motion";

/** Fade-and-rise in when scrolled into view. */
export function Reveal({ children, delay = 0, y = 24, className, style, once = true }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
