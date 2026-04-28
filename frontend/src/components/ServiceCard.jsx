import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { GlowCard } from "./GlowCard";
import { ServiceIcon } from "./ServiceIcon";

export function ServiceCard({ service, benefits = [], delay = 0 }) {
  return (
    <GlowCard delay={delay} className="animated-border group flex h-full flex-col p-6">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[linear-gradient(135deg,rgba(34,211,238,0.18),rgba(139,92,246,0.18))] text-cyan ring-1 ring-white/10">
          <ServiceIcon name={service.icon} />
        </div>
        <span className="rounded-full bg-cyan/10 px-3 py-1 text-xs font-bold text-cyan">Frontend</span>
      </div>
      <h3 className="text-xl font-black text-white">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">{service.description}</p>
      <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-slate-500">Inclui</p>
      <div className="mt-5 grid gap-2">
        {benefits.slice(0, 3).map((item) => (
          <p key={item} className="flex items-center gap-2 text-sm text-slate-300">
            <Check size={15} className="text-cyan" />
            {item}
          </p>
        ))}
      </div>
      <Link
        to="/contato"
        className="mt-6 inline-flex w-fit items-center rounded-xl border border-white/15 px-4 py-2 text-sm font-black text-white transition group-hover:border-cyan group-hover:bg-cyan group-hover:text-ink"
      >
        Conversar sobre isso
      </Link>
    </GlowCard>
  );
}
