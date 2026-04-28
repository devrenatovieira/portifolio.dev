import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { ServiceCard } from "../components/ServiceCard";
import { portfolioServices } from "../data/portfolio";

const benefits = [
  ["HTML, CSS e JS", "React e Next.js", "Responsivo"],
  ["Expo Router", "Fluxos mobile", "Firebase"],
  ["Checklists", "Autenticação", "Processos"],
  ["REST APIs", "Firestore", "Regras de segurança"],
  ["Microinterações", "Layouts modernos", "Boas práticas"],
  ["Refino visual", "Performance", "Componentização"]
];

export function Services() {
  return (
    <section className="section">
      <Container>
        <SectionTitle
          eyebrow="Serviços"
          title="Frontend para web, mobile e produtos corporativos com acabamento profissional"
          text="Posso entrar desde a ideia inicial ou ajudar a melhorar uma interface existente, sempre com foco em UX, responsividade, clareza e manutenção."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolioServices.map((service, index) => (
            <ServiceCard key={service._id} service={service} benefits={benefits[index] || benefits[0]} delay={index * 0.04} />
          ))}
        </div>
      </Container>
    </section>
  );
}
