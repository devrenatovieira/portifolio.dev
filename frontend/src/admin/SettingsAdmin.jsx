import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { api } from "../lib/api";

export function SettingsAdmin() {
  const { user, updateUser } = useAuth();
  const [form, setForm] = useState({ email: "", whatsapp: "", secondaryWhatsapp: "", instagram: "", homeText: "", aboutText: "", logo: "" });
  const [account, setAccount] = useState({ name: "", email: "", currentPassword: "", newPassword: "" });
  const [saved, setSaved] = useState(false);
  const [accountSaved, setAccountSaved] = useState(false);
  const [accountError, setAccountError] = useState("");

  useEffect(() => {
    api.get("/settings").then(({ data }) => setForm(data.data)).catch(() => {});
  }, []);

  useEffect(() => {
    if (user) {
      setAccount((current) => ({ ...current, name: user.name || "", email: user.email || "" }));
    }
  }, [user]);

  function update(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function updateAccount(event) {
    setAccount((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function submit(event) {
    event.preventDefault();
    await api.put("/settings", form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  async function submitAccount(event) {
    event.preventDefault();
    setAccountError("");
    try {
      const { data } = await api.put("/auth/me", account);
      updateUser(data.user);
      setAccount((current) => ({ ...current, currentPassword: "", newPassword: "" }));
      setAccountSaved(true);
      setTimeout(() => setAccountSaved(false), 2500);
    } catch (error) {
      setAccountError(error.response?.data?.message || "Não foi possível atualizar o acesso.");
    }
  }

  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan">Identidade e conteúdo</p>
      <h1 className="mt-2 text-3xl font-black">Configurações</h1>
      <form onSubmit={submit} className="glass premium-border mt-8 grid gap-4 rounded-2xl p-6">
        {["email", "whatsapp", "secondaryWhatsapp", "instagram", "logo"].map((field) => (
          <input key={field} name={field} value={form[field] || ""} onChange={update} placeholder={field} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan" />
        ))}
        <textarea name="homeText" value={form.homeText || ""} onChange={update} rows="3" placeholder="Texto da home" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan" />
        <textarea name="aboutText" value={form.aboutText || ""} onChange={update} rows="3" placeholder="Texto sobre" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan" />
        <button className="w-fit rounded-xl bg-cyan px-6 py-3 font-black text-ink">Salvar configurações</button>
        {saved && <p className="text-sm text-cyan">Configurações salvas.</p>}
      </form>

      <form onSubmit={submitAccount} className="glass premium-border mt-8 grid gap-4 rounded-2xl p-6">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan">Acesso admin</p>
          <h2 className="mt-2 text-2xl font-black">Alterar login e senha</h2>
          <p className="mt-2 text-sm text-slate-400">Esses dados são usados apenas para entrar no painel administrativo.</p>
        </div>
        <input name="name" value={account.name} onChange={updateAccount} placeholder="Nome do admin" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan" />
        <input name="email" type="email" value={account.email} onChange={updateAccount} required placeholder="Email de login" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan" />
        <div className="grid gap-4 md:grid-cols-2">
          <input name="currentPassword" type="password" value={account.currentPassword} onChange={updateAccount} placeholder="Senha atual" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan" />
          <input name="newPassword" type="password" value={account.newPassword} onChange={updateAccount} placeholder="Nova senha" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan" />
        </div>
        <button className="w-fit rounded-xl bg-cyan px-6 py-3 font-black text-ink">Salvar acesso admin</button>
        {accountSaved && <p className="text-sm text-cyan">Acesso admin atualizado.</p>}
        {accountError && <p className="text-sm text-red-300">{accountError}</p>}
      </form>
    </div>
  );
}
