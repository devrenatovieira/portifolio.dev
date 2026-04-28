import { FolderKanban, Mail, TrendingUp, Wrench } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { EmptyState } from "./EmptyState";
import { StatCard } from "./StatCard";

export function Dashboard() {
  const [summary, setSummary] = useState({ projects: 0, messages: 0, services: 0, latestContacts: [] });

  useEffect(() => {
    api.get("/settings/dashboard/summary").then(({ data }) => setSummary(data.data)).catch(() => {});
  }, []);

  const cards = [
    ["Total de projetos", summary.projects, FolderKanban, "cyan"],
    ["Mensagens recebidas", summary.messages, Mail, "violet"],
    ["Serviços cadastrados", summary.services, Wrench, "emerald"]
  ];

  return (
    <div>
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan">Visão geral</p>
          <h1 className="mt-2 text-3xl font-black">Dashboard</h1>
        </div>
        <p className="text-sm text-slate-400">Painel administrativo da presença digital do portfólio.</p>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {cards.map(([label, value, Icon, tone]) => (
          <StatCard key={label} label={label} value={value} icon={Icon} tone={tone} />
        ))}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_22rem]">
        <section className="glass premium-border rounded-2xl p-6">
          <h2 className="text-xl font-black">Últimos contatos recebidos</h2>
          <div className="mt-4 grid gap-3">
            {summary.latestContacts?.map((contact) => (
              <div key={contact._id} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="font-bold">{contact.name}</p>
                <p className="text-sm text-slate-400">{contact.projectType} • {contact.email}</p>
              </div>
            ))}
            {summary.latestContacts?.length === 0 && <EmptyState title="Sem contatos ainda" text="As mensagens enviadas pelo formulário aparecerão aqui." />}
          </div>
        </section>
        <section className="glass rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-cyan" />
            <h2 className="text-xl font-black">Pulso comercial</h2>
          </div>
          <div className="mt-6 flex h-40 items-end gap-2">
            {[40, 58, 46, 82, 70, 92, 76].map((height, index) => (
              <span key={index} style={{ height: `${height}%` }} className="flex-1 rounded-t-xl bg-gradient-to-t from-violet to-cyan" />
            ))}
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-400">Gráfico visual simples para acompanhar evolução de demanda quando houver integrações futuras.</p>
        </section>
      </div>
    </div>
  );
}
