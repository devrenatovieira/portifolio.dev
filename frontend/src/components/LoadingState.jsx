export function LoadingState({ label = "Carregando portfólio..." }) {
  return (
    <div className="glass premium-border rounded-2xl p-8 text-center">
      <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan/30 bg-cyan/10">
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-cyan border-t-transparent" />
      </div>
      <p className="text-sm font-bold text-slate-300">{label}</p>
    </div>
  );
}
