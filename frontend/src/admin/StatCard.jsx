export function StatCard({ label, value, icon: Icon, tone = "cyan" }) {
  const tones = {
    cyan: "from-cyan/25 to-blue/10 text-cyan",
    violet: "from-violet/25 to-fuchsia-400/10 text-violet-200",
    emerald: "from-emerald-400/20 to-cyan/10 text-emerald-200"
  };

  return (
    <div className="glass premium-border rounded-2xl p-6">
      <div className={`mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${tones[tone]}`}>
        <Icon size={22} />
      </div>
      <p className="text-sm font-bold text-slate-400">{label}</p>
      <strong className="mt-2 block text-4xl font-black text-white">{value}</strong>
    </div>
  );
}
