import { Sparkles } from "lucide-react";

export function PublicEmptyState({ title, text }) {
  return (
    <div className="glass premium-border rounded-2xl p-8 text-center">
      <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-cyan/10 text-cyan">
        <Sparkles size={22} />
      </div>
      <h3 className="mt-5 text-xl font-black text-white">{title}</h3>
      <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}
