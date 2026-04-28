import { ExternalLink, Target, TrendingUp, Wrench } from "lucide-react";
import { useParams } from "react-router-dom";
import { Container } from "../components/Container";
import { GlowCard } from "../components/GlowCard";
import { GradientButton } from "../components/GradientButton";
import { portfolioProjects } from "../data/portfolio";

export function ProjectDetails() {
  const { slug } = useParams();
  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) return <section className="section container text-slate-300">Projeto não encontrado.</section>;

  return (
    <section className="section">
      <Container>
        <div className="relative overflow-hidden rounded-3xl">
          <img src={project.mainImage} alt={project.name} className="h-[30rem] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_30rem)]" />
          <div className="absolute bottom-0 left-0 p-6 md:p-10">
            <span className="rounded-full bg-cyan px-3 py-1 text-xs font-black text-ink">{project.category}</span>
            <h1 className="mt-4 max-w-4xl text-4xl font-black text-white md:text-6xl">{project.name}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">{project.shortDescription}</p>
          </div>
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_22rem]">
          <div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Objetivo", "Resolver uma necessidade real de interface com clareza e hierarquia.", Target],
                ["Execução", "Componentes responsivos, estados bem pensados e stack moderna.", Wrench],
                ["Aprendizado", "Refino visual, organização de código e experiência pronta para evoluir.", TrendingUp]
              ].map(([title, text, Icon]) => (
                <GlowCard key={title} className="p-5">
                  <Icon className="text-cyan" size={22} />
                  <h2 className="mt-4 font-black">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                </GlowCard>
              ))}
            </div>
            <p className="mt-6 text-lg leading-8 text-slate-300">{project.fullDescription}</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <GlowCard className="p-6">
                <h2 className="text-xl font-black">Desafio</h2>
                <p className="mt-3 leading-7 text-slate-300">{project.problem}</p>
              </GlowCard>
              <GlowCard className="p-6">
                <h2 className="text-xl font-black">Solução</h2>
                <p className="mt-3 leading-7 text-slate-300">{project.solution}</p>
              </GlowCard>
            </div>
          </div>
          <aside className="glass premium-border h-fit rounded-2xl p-6">
            <h2 className="font-black">Stack do projeto</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies?.map((tech) => (
                <span key={tech} className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-sm font-bold text-cyan">{tech}</span>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-sm font-bold text-white">O que esse case mostra</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Capacidade de transformar contexto em interface, criar estrutura visual e entregar uma experiência frontend apresentável.
              </p>
            </div>
            {project.projectUrl && (
              <a href={project.projectUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan px-4 py-3 font-black text-ink">
                <ExternalLink size={18} />
                Acessar projeto
              </a>
            )}
            <GradientButton to="/contato" variant="secondary" className="mt-3 w-full">Falar comigo</GradientButton>
          </aside>
        </div>
      </Container>
    </section>
  );
}
