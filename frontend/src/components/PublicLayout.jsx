import { Menu, Rocket, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { profile } from "../data/portfolio";
import { AnimatedBackground } from "./AnimatedBackground";
import { GradientButton } from "./GradientButton";

const nav = [
  ["Início", "/"],
  ["Sobre", "/sobre"],
  ["Serviços", "/servicos"],
  ["Projetos", "/projetos"],
  ["Processo", "/processo"],
  ["Contato", "/contato"]
];

export function PublicLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-slate-100">
      <div className="noise" />
      <AnimatedBackground />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/72 backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 font-black tracking-wide">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-cyan text-ink shadow-glow">
              {profile.initials}
            </span>
            <span className="text-xl">{profile.name}</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map(([label, href]) => (
              <NavLink
                key={href}
                to={href}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${isActive ? "text-cyan" : "text-slate-300 hover:text-white"}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <GradientButton href={profile.whatsappProjectUrl} className="hidden lg:inline-flex" icon={false} target="_blank" rel="noreferrer">
            <Rocket size={17} />
            Vamos conversar
          </GradientButton>

          <button
            className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Abrir menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 bg-ink px-4 py-5 lg:hidden">
            <div className="container grid gap-3">
              {nav.map(([label, href]) => (
                <NavLink key={href} to={href} onClick={() => setOpen(false)} className="py-2 text-slate-200">
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-ink/70 py-12">
        <div className="container grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3 font-black">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-cyan text-ink">{profile.initials}</span>
              <span className="text-xl text-white">{profile.name}</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
              {profile.headline}
            </p>
          </div>
          <div>
            <p className="font-black text-white">Contato</p>
            <div className="mt-4 grid gap-2 text-sm text-slate-400">
              <span>{profile.email}</span>
              <span>{profile.whatsapp}</span>
              <span>{profile.location}</span>
            </div>
          </div>
          <div>
            <p className="font-black text-white">Navegação</p>
            <div className="mt-4 grid gap-2 text-sm text-slate-400">
              <Link to="/projetos" className="hover:text-cyan">Projetos</Link>
              <Link to="/servicos" className="hover:text-cyan">Serviços</Link>
              <a href={profile.cvUrl} className="hover:text-cyan" download>Baixar CV</a>
              <Link to="/admin/login" className="hover:text-cyan">Área administrativa</Link>
            </div>
          </div>
        </div>
        <div className="container mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">Copyright © 2026 - {profile.name}</div>
      </footer>
    </div>
  );
}
