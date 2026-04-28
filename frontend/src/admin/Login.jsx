import { Lock, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Login() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (user) return <Navigate to="/admin/dashboard" replace />;

  async function submit(event) {
    event.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/admin/dashboard");
    } catch {
      setError("Email ou senha inválidos.");
    }
  }

  return (
    <div className="relative grid min-h-screen place-items-center overflow-hidden bg-ink p-4 text-slate-100">
      <div className="tech-grid absolute inset-0 opacity-60" />
      <form onSubmit={submit} className="glass premium-border relative w-full max-w-md rounded-3xl p-8">
        <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[linear-gradient(135deg,#22d3ee,#8b5cf6)] text-white">
          <Lock />
        </div>
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 text-xs font-bold text-cyan">
          <Sparkles size={14} />
          Painel operacional
        </p>
        <h1 className="text-3xl font-black">Admin Renato Vieira</h1>
        <p className="mt-2 text-sm leading-6 text-slate-400">Gerencie projetos, serviços, mensagens e conteúdo do portfólio em uma área segura.</p>
        <div className="mt-8 grid gap-4">
          <input value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan" placeholder="Email" />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan" placeholder="Senha" />
          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,#22d3ee,#8b5cf6)] px-4 py-3 font-black text-white">
            <ShieldCheck size={18} />
            Entrar com segurança
          </button>
          {error && <p className="text-sm text-red-300">{error}</p>}
        </div>
      </form>
    </div>
  );
}
