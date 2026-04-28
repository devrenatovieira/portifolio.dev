import { useEffect } from "react";
import { motion } from "framer-motion";

const streams = [
  "React",
  "Node.js",
  "APIs",
  "MongoDB",
  "Dashboards",
  "Automations",
  "UX",
  "Cloud"
];

export function AnimatedBackground() {
  useEffect(() => {
    function move(event) {
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
    }

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="tech-grid absolute inset-0 opacity-70" />
      <motion.div
        className="absolute left-1/2 top-0 h-[34rem] w-[80rem] -translate-x-1/2 bg-[conic-gradient(from_180deg,rgba(34,211,238,0.24),rgba(139,92,246,0.18),rgba(244,114,182,0.1),rgba(34,211,238,0.24))] blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-x-0 top-24 flex justify-center gap-4 opacity-20 blur-[0.2px]">
        {streams.map((item, index) => (
          <motion.span
            key={item}
            className="rounded-full border border-white/10 px-4 py-2 text-xs font-bold text-cyan"
            animate={{ y: [0, index % 2 ? 18 : -18, 0], opacity: [0.25, 0.65, 0.25] }}
            transition={{ duration: 5 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
