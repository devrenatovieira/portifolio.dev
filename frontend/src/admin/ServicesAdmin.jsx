import { Edit, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { ConfirmModal } from "./ConfirmModal";
import { EmptyState } from "./EmptyState";

const initial = { title: "", description: "", icon: "Code2", order: 0, active: true };

export function ServicesAdmin() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState(initial);
  const [editing, setEditing] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  function load() {
    api.get("/services").then(({ data }) => setServices(data.data)).catch(() => {});
  }

  useEffect(load, []);

  function update(event) {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
  }

  async function submit(event) {
    event.preventDefault();
    if (editing) await api.put(`/services/${editing}`, form);
    else await api.post("/services", form);
    setForm(initial);
    setEditing(null);
    load();
  }

  async function remove() {
    if (!deleteId) return;
    await api.delete(`/services/${deleteId}`);
    setDeleteId(null);
    load();
  }

  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan">Oferta comercial</p>
      <h1 className="mt-2 text-3xl font-black">Serviços</h1>
      <form onSubmit={submit} className="glass premium-border mt-8 grid gap-4 rounded-2xl p-6">
        <div className="grid gap-4 md:grid-cols-[1fr_1fr_9rem]">
          <input name="title" value={form.title} onChange={update} required placeholder="Título" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3" />
          <input name="icon" value={form.icon} onChange={update} placeholder="Ícone Lucide" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3" />
          <input name="order" type="number" value={form.order} onChange={update} placeholder="Ordem" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3" />
        </div>
        <textarea name="description" value={form.description} onChange={update} required rows="3" placeholder="Descrição" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3" />
        <label className="flex items-center gap-2"><input type="checkbox" name="active" checked={form.active} onChange={update} /> Ativo</label>
        <button className="inline-flex w-fit items-center gap-2 rounded-xl bg-cyan px-5 py-3 font-black text-ink"><Plus size={18} /> {editing ? "Atualizar" : "Criar"}</button>
      </form>
      <div className="mt-8 grid gap-4">
        {services.length === 0 && <EmptyState title="Nenhum serviço cadastrado" text="Cadastre os serviços exibidos no site público." />}
        {services.map((service) => (
          <div key={service._id} className="glass flex flex-col gap-4 rounded-2xl p-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-black">{service.title}</p>
              <p className="text-sm text-slate-400">{service.icon} • ordem {service.order}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => { setEditing(service._id); setForm(service); }} className="grid h-10 w-10 place-items-center rounded-xl border border-white/15"><Edit size={17} /></button>
              <button onClick={() => setDeleteId(service._id)} className="grid h-10 w-10 place-items-center rounded-xl border border-red-400/30 text-red-200"><Trash2 size={17} /></button>
            </div>
          </div>
        ))}
      </div>
      <ConfirmModal open={Boolean(deleteId)} title="Excluir serviço" text="Esse serviço deixará de aparecer no painel e no site." onConfirm={remove} onClose={() => setDeleteId(null)} />
    </div>
  );
}
