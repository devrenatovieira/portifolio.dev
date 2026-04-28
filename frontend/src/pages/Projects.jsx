import { useMemo, useState } from "react";
import { Container } from "../components/Container";
import { ProjectCard } from "../components/ProjectCard";
import { PublicEmptyState } from "../components/PublicEmptyState";
import { SectionTitle } from "../components/SectionTitle";
import { portfolioProjects } from "../data/portfolio";

const categories = ["Todos", "Sites", "Sistemas", "Apps", "APIs"];

export function Projects() {
  const [category, setCategory] = useState("Todos");

  const filtered = useMemo(() => {
    if (category === "Todos") return portfolioProjects;
    return portfolioProjects.filter((project) => project.category === category);
  }, [category]);

  return (
    <section className="section">
      <Container>
        <SectionTitle
          eyebrow="Projetos"
          title="Portfólio frontend com foco em interface, contexto e execução"
          text="Cada projeto mostra o tipo de problema resolvido, stack utilizada e decisões de experiência que deixam a entrega mais profissional."
        />
        <div className="mx-auto mb-10 flex w-fit max-w-full flex-wrap justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-2">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-xl px-4 py-2 text-sm font-bold transition ${category === item ? "bg-cyan text-ink" : "text-slate-300 hover:bg-white/8 hover:text-white"}`}
            >
              {item}
            </button>
          ))}
        </div>
        {filtered.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        ) : (
          <PublicEmptyState title="Nenhum projeto nesta categoria" text="Troque o filtro para ver outros estudos e interfaces." />
        )}
      </Container>
    </section>
  );
}
