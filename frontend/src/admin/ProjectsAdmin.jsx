import { Edit, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../lib/api";
import { ConfirmModal } from "./ConfirmModal";
import { EmptyState } from "./EmptyState";

export function ProjectsAdmin() {
  const [projects, setProjects] = useState([]);
  const [deleteId, setDeleteId] = useState(null);

  function load() {
    api.get("/projects").then(({ data }) => setProjects(data.data)).catch(() => {});
  }

  useEffect(load, []);

  async function remove() {
    if (!deleteId) return;
    await api.delete(`/projects/${deleteId}`);
    setDeleteId(null);
    load();
  }

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan">Portfólio</p>
          <h1 className="mt-2 text-3xl font-black">Projetos</h1>
        </div>
        <Link to="/admin/projetos/novo" className="inline-flex items-center gap-2 rounded-xl bg-cyan px-4 py-3 font-black text-ink">
          <Plus size={18} />
          Novo projeto
        </Link>
      </div>
      <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
        {projects.length === 0 ? (
          <EmptyState title="Nenhum projeto cadastrado" text="Crie seu primeiro case para aparecer no portfólio público." />
        ) : (
          projects.map((project) => (
            <div key={project._id} className="flex flex-col gap-4 border-b border-white/10 bg-white/[0.03] p-5 last:border-b-0 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-black">{project.name}</p>
                <p className="text-sm text-slate-400">{project.category} • {project.status} • {project.active ? "ativo" : "inativo"}</p>
              </div>
              <div className="flex gap-2">
                <Link to={`/admin/projetos/editar/${project._id}`} className="grid h-10 w-10 place-items-center rounded-xl border border-white/15"><Edit size={17} /></Link>
                <button onClick={() => setDeleteId(project._id)} className="grid h-10 w-10 place-items-center rounded-xl border border-red-400/30 text-red-200"><Trash2 size={17} /></button>
              </div>
            </div>
          ))
        )}
      </div>
      <ConfirmModal open={Boolean(deleteId)} title="Excluir projeto" text="Essa ação remove o projeto da API e do painel administrativo." onConfirm={remove} onClose={() => setDeleteId(null)} />
    </div>
  );
}
