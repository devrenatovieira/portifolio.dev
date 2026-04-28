import { ExternalLink, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { imageUrl } from "../lib/api";

export function ProjectCard({ project }) {
  const isLogo = project.mainImage?.startsWith("/portfolio-assets/images/");

  return (
    <article className="glass premium-border animated-border tilt-card group overflow-hidden rounded-2xl">
      <div className="relative overflow-hidden">
        <img
          loading="lazy"
          src={imageUrl(project.mainImage)}
          alt={project.name}
          className={`h-64 w-full transition duration-500 group-hover:scale-105 ${isLogo ? "bg-white/95 object-contain p-8" : "object-cover"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
        {project.featured && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-cyan px-3 py-1 text-xs font-black text-ink">
            <Sparkles size={14} />
            Destaque
          </span>
        )}
      </div>
      <div className="p-6">
        <span className="rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 text-xs font-bold text-cyan">
          {project.category}
        </span>
        <h3 className="mt-4 text-xl font-black text-white">{project.name}</h3>
        <p className="mt-3 min-h-16 text-sm leading-7 text-slate-300">{project.shortDescription}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies?.slice(0, 4).map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 bg-white/8 px-2.5 py-1 text-xs font-bold text-slate-300">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to={`/projetos/${project.slug}`} className="rounded-xl bg-white px-4 py-2 text-sm font-bold text-ink transition hover:bg-cyan">
            Ver detalhes
          </Link>
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm font-bold text-white hover:border-cyan"
            >
              <ExternalLink size={16} />
              Acessar projeto
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
