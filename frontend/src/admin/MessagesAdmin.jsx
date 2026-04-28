import { Check, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { ConfirmModal } from "./ConfirmModal";
import { EmptyState } from "./EmptyState";

export function MessagesAdmin() {
  const [messages, setMessages] = useState([]);
  const [deleteId, setDeleteId] = useState(null);

  function load() {
    api.get("/contact").then(({ data }) => setMessages(data.data)).catch(() => {});
  }

  useEffect(load, []);

  async function markRead(id) {
    await api.patch(`/contact/${id}/read`);
    load();
  }

  async function remove() {
    if (!deleteId) return;
    await api.delete(`/contact/${deleteId}`);
    setDeleteId(null);
    load();
  }

  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan">Leads recebidos</p>
      <h1 className="mt-2 text-3xl font-black">Mensagens</h1>
      <div className="mt-8 grid gap-4">
        {messages.length === 0 && <EmptyState title="Nenhuma mensagem ainda" text="Quando alguém enviar o formulário de contato, o lead aparece aqui." />}
        {messages.map((message) => (
          <article key={message._id} className="glass premium-border rounded-2xl p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="font-black">{message.name} {!message.read && <span className="ml-2 text-xs text-cyan">nova</span>}</p>
                <p className="mt-1 text-sm text-slate-400">{message.email} • {message.whatsapp} • {message.projectType}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => markRead(message._id)} className="grid h-10 w-10 place-items-center rounded-xl border border-white/15"><Check size={17} /></button>
                <button onClick={() => setDeleteId(message._id)} className="grid h-10 w-10 place-items-center rounded-xl border border-red-400/30 text-red-200"><Trash2 size={17} /></button>
              </div>
            </div>
            <p className="mt-4 leading-7 text-slate-300">{message.message}</p>
            {message.budget && <p className="mt-3 text-sm text-cyan">Orçamento: {message.budget}</p>}
          </article>
        ))}
      </div>
      <ConfirmModal open={Boolean(deleteId)} title="Excluir mensagem" text="Essa mensagem será removida permanentemente do painel." onConfirm={remove} onClose={() => setDeleteId(null)} />
    </div>
  );
}
