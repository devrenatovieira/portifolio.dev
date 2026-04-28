import { CheckCircle2 } from "lucide-react";
import { Container } from "../components/Container";
import { GlowCard } from "../components/GlowCard";
import { SectionTitle } from "../components/SectionTitle";
import { curiosities, profile, workHistory } from "../data/portfolio";

const values = [
  "Missão: criar interfaces modernas, funcionais e orientadas à experiência do usuário.",
  "Visão: evoluir como desenvolvedor frontend construindo produtos digitais reais para web e mobile.",
  "Valores: código limpo, consistência visual, responsividade, responsabilidade e atenção ao detalhe."
];

const diffs = ["React na prática", "React Native", "Firebase", "Integração com APIs", "UX responsivo", "Ambiente corporativo"];

export function About() {
  return (
    <section className="section">
      <Container>
        <SectionTitle
          eyebrow="Sobre"
          title={`${profile.name}, ${profile.role}`}
          text="Uso frontend para transformar problemas complexos em interfaces simples, modernas e prontas para produtos reais."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <GlowCard className="p-8">
            <h3 className="text-2xl font-black">Quem sou</h3>
            <p className="mt-4 leading-8 text-slate-300">{profile.summary}</p>
            <p className="mt-4 leading-8 text-slate-300">
              Minha base junta experiência prática em projetos corporativos, suporte técnico, sistemas internos e criação de interfaces web e mobile com integração a APIs e Firebase.
            </p>
            <img
              src="/portfolio-assets/images/dev.renato.jpeg"
              alt="Renato Vieira"
              className="mt-8 max-h-[32rem] w-full rounded-2xl border border-white/10 object-cover object-top shadow-glow"
            />
            <div className="mt-8 grid gap-4">
              {values.map((item) => (
                <p key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
                  {item}
                </p>
              ))}
            </div>
          </GlowCard>
          <div className="grid gap-4 sm:grid-cols-2">
            {diffs.map((item, index) => (
              <GlowCard key={item} delay={index * 0.04} className="p-6">
                <CheckCircle2 className="text-cyan" />
                <h4 className="mt-4 font-black text-white">{item}</h4>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Decisões visuais e técnicas alinhadas para criar interfaces mais claras, rápidas e agradáveis de manter.
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <SectionTitle eyebrow="Histórico" title="Experiência com produtos, empresas e ambientes reais" />
          <div className="grid gap-5 md:grid-cols-2">
            {workHistory.map((item, index) => (
              <GlowCard key={item.company} delay={index * 0.04} className="p-6">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan">{item.company}</p>
                <h3 className="mt-3 text-xl font-black text-white">{item.role}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
              </GlowCard>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <SectionTitle eyebrow="Curiosidades" title="Um pouco mais sobre meu jeito de construir" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {curiosities.map((item, index) => (
              <GlowCard key={item} delay={index * 0.03} className="p-6">
                <p className="leading-7 text-slate-300">{item}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
