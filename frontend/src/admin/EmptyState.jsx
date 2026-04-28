import { Inbox } from "lucide-react";

export function EmptyState({ title = "Nada por aqui ainda", text = "Quando houver dados, eles aparecem nesta área." }) {
  return (
    <div className="glass rounded-2xl p-10 text-center">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-cyan/10 text-cyan">
        <Inbox />
      </div>
      <h3 className="mt-5 text-xl font-black text-white">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}
