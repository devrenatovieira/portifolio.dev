export function TechBadge({ children, icon: Icon }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/7 px-3 py-2 text-xs font-bold text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
      {Icon && <Icon size={15} className="text-cyan" />}
      {children}
    </span>
  );
}
