import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../lib/api";

const initial = {
  name: "",
  slug: "",
  category: "Sites",
  shortDescription: "",
  fullDescription: "",
  problem: "",
  solution: "",
  technologies: "",
  mainImage: "",
  gallery: "",
  projectUrl: "",
  repositoryUrl: "",
  status: "publicado",
  featured: false,
  active: true
};

export function ProjectForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(initial);

  useEffect(() => {
    if (!id) return;
    api.get("/projects").then(({ data }) => {
      const project = data.data.find((item) => item._id === id);
      if (project) {
        setForm({
          ...project,
          technologies: project.technologies?.join(", ") || "",
          gallery: project.gallery?.join(", ") || ""
        });
      }
    });
  }, [id]);

  function update(event) {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
  }

  async function submit(event) {
    event.preventDefault();
    if (id) await api.put(`/projects/${id}`, form);
    else await api.post("/projects", form);
    navigate("/admin/projetos");
  }

  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan">Case do portfólio</p>
      <h1 className="mt-2 text-3xl font-black">{id ? "Editar projeto" : "Novo projeto"}</h1>
      <form onSubmit={submit} className="glass premium-border mt-8 grid gap-4 rounded-2xl p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <input name="name" value={form.name} onChange={update} required placeholder="Nome" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan" />
          <input name="slug" value={form.slug} onChange={update} placeholder="Slug" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan" />
          <select name="category" value={form.category} onChange={update} className="rounded-xl border border-white/10 bg-panel px-4 py-3 outline-none focus:border-cyan">
            {["Sites", "Sistemas", "Dashboards", "Apps", "APIs"].map((item) => <option key={item}>{item}</option>)}
          </select>
          <select name="status" value={form.status} onChange={update} className="rounded-xl border border-white/10 bg-panel px-4 py-3 outline-none focus:border-cyan">
            <option>publicado</option>
            <option>rascunho</option>
          </select>
        </div>
        <textarea name="shortDescription" value={form.shortDescription} onChange={update} required rows="2" placeholder="Descrição curta" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan" />
        <textarea name="fullDescription" value={form.fullDescription} onChange={update} required rows="4" placeholder="Descrição completa" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan" />
        <textarea name="problem" value={form.problem} onChange={update} rows="3" placeholder="Problema resolvido" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan" />
        <textarea name="solution" value={form.solution} onChange={update} rows="3" placeholder="Solução entregue" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan" />
        <input name="technologies" value={form.technologies} onChange={update} placeholder="Tecnologias separadas por vírgula" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan" />
        <input name="mainImage" value={form.mainImage} onChange={update} placeholder="Imagem principal URL" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan" />
        <input name="gallery" value={form.gallery} onChange={update} placeholder="Galeria URLs separadas por vírgula" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan" />
        <div className="grid gap-4 md:grid-cols-2">
          <input name="projectUrl" value={form.projectUrl} onChange={update} placeholder="Link do projeto" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan" />
          <input name="repositoryUrl" value={form.repositoryUrl} onChange={update} placeholder="Link do repositório" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan" />
        </div>
        <div className="flex flex-wrap gap-5">
          <label className="flex items-center gap-2"><input type="checkbox" name="featured" checked={form.featured} onChange={update} /> Destaque</label>
          <label className="flex items-center gap-2"><input type="checkbox" name="active" checked={form.active} onChange={update} /> Ativo</label>
        </div>
        <button className="w-fit rounded-xl bg-cyan px-6 py-3 font-black text-ink">Salvar projeto</button>
      </form>
    </div>
  );
}
