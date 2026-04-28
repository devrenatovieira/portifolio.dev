import { motion } from "framer-motion";

export function SectionTitle({ eyebrow, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-cyan">{eyebrow}</p>}
      <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{text}</p>}
    </motion.div>
  );
}
