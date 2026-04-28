import { ClipboardList, Code2, Figma, Rocket, SearchCheck, ShieldCheck } from "lucide-react";
import { Container } from "../components/Container";
import { GlowCard } from "../components/GlowCard";
import { GradientButton } from "../components/GradientButton";
import { SectionTitle } from "../components/SectionTitle";

const steps = [
  ["Briefing", "Entendo objetivo, público, referências, prioridade e o que a tela precisa resolver.", ClipboardList],
  ["Arquitetura visual", "Organizo seções, hierarquia, estados, componentes e caminho de navegação.", SearchCheck],
  ["UI responsiva", "Crio uma experiência visual forte para desktop e mobile, com atenção a espaçamento e leitura.", Figma],
  ["Desenvolvimento", "Codifico em React com componentes claros, estilos consistentes e integração quando necessário.", Code2],
  ["Refino", "Valido responsividade, performance, textos, interações e detalhes que deixam a entrega profissional.", ShieldCheck],
  ["Entrega", "Faço build, preparo deploy ou repasso o código com orientação para os próximos passos.", Rocket]
];

export function Process() {
  return (
    <section className="section">
      <Container>
        <SectionTitle
          eyebrow="Processo"
          title="Da ideia ao frontend pronto sem perder clareza no caminho"
          text="Meu fluxo reduz dúvida, organiza prioridades e transforma a interface em algo bonito, funcional e fácil de evoluir."
        />
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan/0 via-cyan/50 to-cyan/0 md:block" />
          {steps.map(([step, description, Icon], index) => (
            <div key={step} className="relative mb-5 grid gap-4 md:grid-cols-[4rem_1fr]">
              <div className="hidden md:grid">
                <span className="z-10 grid h-11 w-11 place-items-center rounded-2xl border border-cyan/30 bg-ink text-cyan shadow-glow">
                  <Icon size={20} />
                </span>
              </div>
              <GlowCard delay={index * 0.04} className="p-6">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-cyan/10 text-cyan md:hidden">
                    <Icon size={20} />
                  </span>
                  <div>
                    <span className="text-sm font-black uppercase tracking-[0.22em] text-cyan">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="mt-2 text-2xl font-black">{step}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{description}</p>
                  </div>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <GradientButton to="/contato" className="px-7 py-4">Começar um projeto</GradientButton>
        </div>
      </Container>
    </section>
  );
}
