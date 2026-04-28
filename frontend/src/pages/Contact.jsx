import { Github, Instagram, Linkedin, Mail, MessageCircle, Send, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Container } from "../components/Container";
import { GlowCard } from "../components/GlowCard";
import { SectionTitle } from "../components/SectionTitle";
import { profile } from "../data/portfolio";

const initial = { name: "", email: "", whatsapp: "", projectType: "Landing page", budget: "", message: "" };

export function Contact() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);

  function update(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function submit(event) {
    event.preventDefault();

    if (form.message.trim().length < 12) {
      setStatus({ type: "error", message: "Me conta um pouco mais sobre a ideia para eu entender o caminho certo." });
      return;
    }

    setSending(true);
    setStatus({ type: "loading", message: "Enviando mensagem..." });

    const formData = new FormData(event.currentTarget);
    formData.append("_subject", "Novo contato pelo portfolio Renato Vieira");
    formData.append("source", "Portfolio Renato Vieira");

    try {
      const response = await fetch(profile.formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) throw new Error("Formspree request failed");

      setForm(initial);
      setStatus({ type: "success", message: "Mensagem enviada com sucesso!" });
    } catch {
      setStatus({ type: "error", message: "Não foi possível enviar agora. Tente novamente ou use email, WhatsApp ou LinkedIn." });
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="section">
      <Container>
        <SectionTitle
          eyebrow="Contato"
          title="Vamos criar algo grande juntos."
          text="Tem um projeto em mente? Me chama e eu respondo rápido com um plano claro para tirar sua interface do papel."
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_24rem]">
          <form
            onSubmit={submit}
            action={profile.formspreeEndpoint}
            method="POST"
            className="glass premium-border grid gap-4 rounded-2xl p-6"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <input name="name" value={form.name} onChange={update} required placeholder="Nome" className="glass-input rounded-xl px-4 py-3" />
              <input name="email" type="email" value={form.email} onChange={update} required placeholder="Email" className="glass-input rounded-xl px-4 py-3" />
            </div>
            <input name="whatsapp" value={form.whatsapp} onChange={update} required placeholder="WhatsApp" className="glass-input rounded-xl px-4 py-3" />
            <div className="grid gap-4 md:grid-cols-2">
              <select name="projectType" value={form.projectType} onChange={update} className="glass-input rounded-xl bg-panel px-4 py-3 text-white">
                <option className="bg-slate-900 text-white">Landing page</option>
                <option className="bg-slate-900 text-white">Aplicação React</option>
                <option className="bg-slate-900 text-white">Aplicativo React Native</option>
                <option className="bg-slate-900 text-white">Sistema corporativo</option>
                <option className="bg-slate-900 text-white">Autenticação ou QR Code</option>
                <option className="bg-slate-900 text-white">Manutenção frontend</option>
                <option className="bg-slate-900 text-white">Integração com API/Firebase</option>
              </select>
              <input name="budget" value={form.budget} onChange={update} placeholder="Orçamento estimado" className="glass-input rounded-xl px-4 py-3" />
            </div>
            <textarea name="message" value={form.message} onChange={update} required rows="6" placeholder="Conte sobre objetivo, prazo, referências e o que precisa funcionar." className="glass-input rounded-xl px-4 py-3" />
            <button disabled={sending} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,#22d3ee,#8b5cf6)] px-6 py-4 font-black text-white transition hover:brightness-125 disabled:cursor-not-allowed disabled:opacity-60">
              <Send size={18} />
              {sending ? "Enviando..." : "Enviar mensagem"}
            </button>
            {status.message && (
              <p className={`rounded-xl border px-4 py-3 text-sm ${status.type === "error" ? "border-red-300/30 bg-red-400/10 text-red-200" : "border-cyan/25 bg-cyan/10 text-cyan"}`}>
                {status.message}
              </p>
            )}
          </form>
          <div className="grid h-fit gap-4">
            <GlowCard className="p-6">
              <h3 className="text-2xl font-black">Canais diretos</h3>
              <div className="mt-6 grid gap-3 text-slate-300">
                <p className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3"><Mail size={18} className="text-cyan" /> {profile.email}</p>
                <p className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3"><MessageCircle size={18} className="text-cyan" /> {profile.whatsapp}</p>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 hover:border-cyan"><Linkedin size={18} className="text-cyan" /> LinkedIn / devrenatovieira</a>
                {profile.github && <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 hover:border-cyan"><Github size={18} className="text-cyan" /> GitHub</a>}
                {profile.instagram && <a href={profile.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 hover:border-cyan"><Instagram size={18} className="text-cyan" /> Instagram</a>}
              </div>
              <a href={profile.whatsappProjectUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 font-black text-ink transition hover:bg-cyan">
                <MessageCircle size={18} />
                Chamar no WhatsApp
              </a>
            </GlowCard>
            <div className="glass rounded-2xl p-5">
              <p className="flex items-center gap-2 font-black text-white"><ShieldCheck size={18} className="text-emerald-300" /> Retorno objetivo</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                A resposta vem com sugestão de caminho, prioridade de interface e próximos passos para começar.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
