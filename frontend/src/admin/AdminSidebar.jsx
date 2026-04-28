import { BarChart3, FolderKanban, LogOut, Mail, Settings, Wrench } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { profile } from "../data/portfolio";

const links = [
  ["Dashboard", "/admin/dashboard", BarChart3],
  ["Projetos", "/admin/projetos", FolderKanban],
  ["Serviços", "/admin/servicos", Wrench],
  ["Mensagens", "/admin/mensagens", Mail],
  ["Configurações", "/admin/configuracoes", Settings]
];

export function AdminSidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <aside className="border-b border-white/10 bg-panel/85 p-4 backdrop-blur-xl lg:sticky lg:top-0 lg:min-h-screen lg:border-b-0 lg:border-r">
      <div className="mb-7 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 lg:block">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan font-black text-ink">{profile.initials}</span>
          <div>
            <p className="font-black text-white">Portfólio Admin</p>
            <p className="max-w-40 truncate text-xs text-slate-400">{user?.email}</p>
          </div>
        </div>
        <button
          onClick={() => {
            logout();
            navigate("/admin/login");
          }}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 text-slate-300 transition hover:border-red-300/40 hover:text-red-200 lg:mt-5 lg:w-full"
          aria-label="Sair"
        >
          <LogOut size={18} />
        </button>
      </div>
      <nav className="grid gap-2">
        {links.map(([label, href, Icon]) => (
          <NavLink
            key={href}
            to={href}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition ${
                isActive
                  ? "bg-[linear-gradient(135deg,#22d3ee,#8b5cf6)] text-white shadow-glow"
                  : "text-slate-300 hover:bg-white/6 hover:text-white"
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
