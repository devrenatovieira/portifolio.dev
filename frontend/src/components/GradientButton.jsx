import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-black transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan/60";

export function GradientButton({ to, href, children, variant = "primary", className = "", icon = true, ...props }) {
  const styles =
    variant === "primary"
      ? "bg-[linear-gradient(135deg,#22d3ee,#8b5cf6,#f472b6)] text-white shadow-glow hover:brightness-125"
      : "border border-white/15 bg-white/5 text-white hover:border-cyan/70 hover:bg-cyan/10";
  const content = (
    <>
      {children}
      {icon && <ArrowRight size={17} className="transition group-hover:translate-x-1" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${base} ${styles} ${className}`} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {content}
    </button>
  );
}
