import { X } from "lucide-react";

export function ConfirmModal({ open, title, text, onConfirm, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-ink/80 p-4 backdrop-blur-md">
      <div className="glass premium-border w-full max-w-md rounded-2xl p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-black text-white">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
          </div>
          <button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-xl border border-white/15">
            <X size={17} />
          </button>
        </div>
        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onClose} className="rounded-xl border border-white/15 px-4 py-2 text-sm font-bold text-slate-200">
            Cancelar
          </button>
          <button onClick={onConfirm} className="rounded-xl bg-red-400 px-4 py-2 text-sm font-black text-ink">
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
