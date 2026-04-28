import { motion } from "framer-motion";

export function GlowCard({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay }}
      className={`glass premium-border tilt-card rounded-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
}
