import { motion } from "framer-motion";
import {
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Gauge,
  Linkedin,
  Monitor,
  PlugZap,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal
} from "lucide-react";
import { Container } from "../components/Container";
import { GlowCard } from "../components/GlowCard";
import { GradientButton } from "../components/GradientButton";
import { ProjectCard } from "../components/ProjectCard";
import { SectionTitle } from "../components/SectionTitle";
import { ServiceCard } from "../components/ServiceCard";
import { TechBadge } from "../components/TechBadge";
import { portfolioClients, portfolioProjects, portfolioServices, portfolioStats, profile } from "../data/portfolio";

const technologies = [
  ["React", Code2],
  ["React Native", Monitor],
  ["JavaScript", Terminal],
  ["TypeScript", Sparkles],
  ["Firebase", Database],
  ["APIs", PlugZap]
];

const serviceBenefits = [
  ["Copy e CTA", "Responsivo", "SEO técnico"],
  ["Rotas e estados", "APIs", "Componentização"],
  ["Cards e filtros", "Dados claros", "UX objetiva"],
  ["Tokens visuais", "Componentes", "Consistência"],
  ["Fetch e auth", "Formulários", "Tratamento de erro"],
  ["Refino mobile", "Performance", "Evolução"]
];

const reasons = [
  ["Olhar de produto", "Penso no fluxo inteiro: o que o usuário entende, onde ele clica, o que precisa carregar rápido e o que precisa parecer confiável."],
  ["Acabamento visual", "Cuido de espaçamento, responsividade, microinterações e hierarquia para a interface ter cara de produto bem entregue."],
  ["Código que dá para manter", "Organizo componentes, dados e estilos para o projeto continuar evoluindo sem virar uma tela impossível de mexer."]
];

const processPreview = [
  ["01", "Briefing", "Objetivo, referência, público e prioridades."],
  ["02", "UI", "Estrutura visual, componentes e estados."],
  ["03", "Código", "React, responsividade, API e interações."],
  ["04", "Entrega", "Ajustes finais, build e orientação de uso."]
];

function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.15 }}
      className="glass premium-border scanline relative rounded-3xl p-4 shadow-glow"
    >
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan">Frontend Lab</p>
          <h3 className="mt-1 text-xl font-black">{profile.name} OS</h3>
        </div>
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-300" />
          <span className="h-3 w-3 rounded-full bg-yellow-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-300" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          ["UI", "98%", "bg-cyan/15"],
          ["UX", "A+", "bg-violet/15"],
          ["Build", "ready", "bg-emerald-400/15"]
        ].map(([label, value, tone]) => (
          <div key={label} className={`rounded-2xl border border-white/10 ${tone} p-4`}>
            <p className="text-xs text-slate-400">{label}</p>
            <strong className="mt-2 block text-2xl font-black">{value}</strong>
          </div>
        ))}
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-bold">Performance UI</span>
            <Gauge size={18} className="text-cyan" />
          </div>
          <div className="flex h-36 items-end gap-2">
            {[52, 74, 60, 88, 72, 96, 82, 92].map((height, index) => (
              <motion.span
                key={index}
                initial={{ height: 10 }}
                animate={{ height }}
                transition={{ duration: 0.7, delay: index * 0.05 }}
                className="flex-1 rounded-t-lg bg-gradient-to-t from-violet to-cyan"
              />
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <span className="text-sm font-bold">Sprint</span>
          <div className="mt-4 grid gap-3">
            {["Layout aprovado", "Componentes prontos", "Deploy preparado"].map((item) => (
              <p key={item} className="flex items-center gap-2 rounded-xl bg-white/5 p-3 text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-cyan" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Home() {
  const featuredProjects = portfolioProjects.filter((project) => project.featured);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="hero-orbit left-[8%] top-28 h-40 w-40" />
        <div className="hero-orbit right-[6%] top-52 h-72 w-72 [animation-delay:1.4s]" />
        <Container className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm font-bold text-cyan">
              <Sparkles size={16} />
              {profile.role} disponível para projetos freelance
            </p>
            <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-tight text-white md:text-7xl">
              {profile.headline.split(" produtos reais.")[0]} <span className="gradient-text">produtos reais.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">{profile.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <GradientButton href={profile.whatsappBudgetUrl} className="px-7 py-4" target="_blank" rel="noreferrer">Fazer orçamento agora</GradientButton>
              <GradientButton to="/projetos" variant="secondary" className="px-7 py-4">Ver projetos</GradientButton>
              <GradientButton href={profile.cvUrl} variant="secondary" className="px-7 py-4" download>Baixar CV</GradientButton>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {technologies.map(([label, Icon]) => (
                <TechBadge key={label} icon={Icon}>{label}</TechBadge>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <DashboardMockup />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -left-4 bottom-8 hidden rounded-2xl p-4 lg:block"
            >
              <p className="flex items-center gap-2 text-sm font-bold"><Rocket size={17} className="text-cyan" /> Deploy pronto</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -right-3 top-10 hidden rounded-2xl p-4 lg:block"
            >
              <p className="flex items-center gap-2 text-sm font-bold"><ShieldCheck size={17} className="text-emerald-300" /> Código limpo</p>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-8">
        <Container className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioStats.map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <strong className="text-3xl font-black text-cyan">{value}</strong>
              <p className="mt-1 text-sm text-slate-300">{label}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionTitle
            eyebrow="O que eu faço"
            title="Frontend para web, mobile e sistemas corporativos"
            text="Transformo ideias, layouts e necessidades de produto em interfaces modernas, funcionais e prontas para uso real."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {portfolioServices.map((service, index) => (
              <ServiceCard key={service._id} service={service} benefits={serviceBenefits[index]} delay={index * 0.04} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-white/[0.03]">
        <Container>
          <SectionTitle eyebrow="Projetos" title="Cases para mostrar raciocínio visual, estrutura e execução" text="A vitrine combina projetos autorais e estudos práticos com foco em interface, responsividade e experiência." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionTitle eyebrow="Clientes" title="Marcas e ambientes que fazem parte da minha jornada" text="Experiências reais, projetos corporativos e estudos aplicados que ajudaram a formar minha base em produto, suporte e frontend." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioClients.map((client) => (
              <div key={client.name} className="glass grid h-28 place-items-center rounded-2xl p-5">
                <img src={client.logo} alt={client.name} className="max-h-20 max-w-full object-contain opacity-85 grayscale transition hover:opacity-100 hover:grayscale-0" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionTitle eyebrow="Diferenciais" title="Não é só montar tela. É fazer a tela trabalhar a favor do produto" />
          <div className="grid gap-5 lg:grid-cols-3">
            {reasons.map(([title, text], index) => (
              <GlowCard key={title} delay={index * 0.05} className="p-7">
                <span className="text-4xl font-black text-cyan">0{index + 1}</span>
                <h3 className="mt-6 text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </GlowCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-white/[0.03]">
        <Container>
          <SectionTitle eyebrow="Stack" title="Principais linguagens e tecnologias que domino" text="Ferramentas usadas para criar interfaces modernas, integrar dados e entregar experiências consistentes." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Frontend core", "HTML5, CSS3, JavaScript, TypeScript, React.js, React Native e Next.js", Monitor],
              ["Produto", "Firebase Auth, Firestore, Functions, REST APIs, Git e GitHub", Server],
              ["Qualidade", "UI/UX, layouts modernos, responsividade e boas praticas", Gauge],
              ["Base técnica", "Suporte técnico, sistemas internos e noção de backend", Cpu]
            ].map(([title, text, Icon]) => (
              <GlowCard key={title} className="p-6">
                <Icon className="text-cyan" />
                <h3 className="mt-5 font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
              </GlowCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionTitle eyebrow="Processo" title="Um fluxo direto para sair da ideia e chegar em uma interface publicável" />
          <div className="relative grid gap-4 lg:grid-cols-4">
            <div className="absolute left-0 top-1/2 hidden h-px w-full bg-gradient-to-r from-transparent via-cyan/40 to-transparent lg:block" />
            {processPreview.map(([number, title, text], index) => (
              <GlowCard key={title} delay={index * 0.05} className="relative p-6">
                <span className="text-4xl font-black text-cyan">{number}</span>
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
              </GlowCard>
            ))}
          </div>
          <div className="mt-10 text-center">
            <GradientButton to="/processo" variant="secondary">Ver processo completo</GradientButton>
          </div>
        </Container>
      </section>

      <section className="section bg-white/[0.03]">
        <Container>
          <SectionTitle eyebrow="Disponibilidade" title="Projetos em que posso ajudar agora" />
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              ["Web frontend", "Sites, landing pages, e-commerces e interfaces React com visual moderno e responsivo."],
              ["Mobile", "Apps React Native, fluxos de login, checklists, QR Code e experiências corporativas."],
              ["Sistemas", "Telas administrativas, processos internos, integrações e melhorias em produtos existentes."]
            ].map(([title, text], index) => (
              <GlowCard key={title} delay={index * 0.06} className={`animated-border p-7 ${index === 1 ? "shadow-glow" : ""}`}>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan">Frontend</p>
                <h3 className="mt-4 text-2xl font-black">{title}</h3>
                <p className="mt-3 min-h-20 leading-7 text-slate-300">{text}</p>
              <GradientButton href={profile.whatsappProjectUrl} className="mt-6 w-full" target="_blank" rel="noreferrer">Conversar sobre isso</GradientButton>
              </GlowCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="premium-border rounded-3xl bg-[linear-gradient(135deg,rgba(34,211,238,0.16),rgba(139,92,246,0.12),rgba(244,114,182,0.08))] p-8 text-center md:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan">Vamos construir?</p>
            <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black text-white md:text-5xl">
              Me chama com sua ideia e eu transformo em uma interface frontend pronta para uso real.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">{profile.headline}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <GradientButton href={profile.whatsappProjectUrl} className="px-8 py-4" target="_blank" rel="noreferrer">Entrar em contato</GradientButton>
              <GradientButton href={profile.linkedin} variant="secondary" className="px-8 py-4" target="_blank" rel="noreferrer">
                <Linkedin size={18} />
                LinkedIn
              </GradientButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
