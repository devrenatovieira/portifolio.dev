import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "../config/db.js";
import { Project } from "../models/Project.js";
import { Service } from "../models/Service.js";
import { Settings } from "../models/Settings.js";
import { User } from "../models/User.js";

dotenv.config();

const projects = [
  {
    name: "Carter Loja - E-commerce Web",
    slug: "carter-loja-ecommerce-web",
    category: "Sites",
    shortDescription: "Plataforma de e-commerce com foco em design premium, performance e experiência do usuário.",
    fullDescription:
      "E-commerce web público preparado para evoluir com backend, banco de dados e autenticação. O projeto combina vitrine, organização visual, responsividade e uma experiência de compra com aparência profissional.",
    problem: "Criar uma loja online com visual premium, boa navegação e base pronta para integrações reais.",
    solution: "Interface moderna com Next.js, React, Tailwind CSS, Prisma, PostgreSQL Neon e deploy na Vercel.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Prisma", "PostgreSQL", "Vercel"],
    mainImage: "/portfolio-assets/images/logocarter.png",
    projectUrl: "https://lojacarter.cartergroup.com.br/",
    status: "publicado",
    featured: true,
    active: true
  },
  {
    name: "Checklist Operacional Transire",
    slug: "checklist-operacional-transire",
    category: "Apps",
    shortDescription: "Sistema mobile de processos internos com etapas, validações por acesso e acompanhamento de atividades.",
    fullDescription:
      "Aplicação corporativa para padronizar checklists operacionais, apoiar atividades em campo e organizar etapas de validação conforme função e acesso.",
    problem: "Reduzir processos manuais e trazer mais controle para rotinas operacionais.",
    solution: "Experiência mobile com React Native, Expo Router e Firebase, focada em navegação fluida e dados persistentes.",
    technologies: ["React Native", "Expo Router", "Firebase", "Mobile", "Processos"],
    mainImage: "/portfolio-assets/images/logotransire.png",
    status: "publicado",
    featured: true,
    active: true
  },
  {
    name: "Aura ID",
    slug: "aura-id",
    category: "Sistemas",
    shortDescription: "Autenticação por QR Code com consulta de dados e confirmação de acesso em fluxos corporativos.",
    fullDescription:
      "Sistema para leitura e confirmação de dados por QR Code, substituindo processos manuais e trazendo mais velocidade para validações de acesso.",
    problem: "Tornar a validação de pessoas e acessos mais rápida, segura e rastreável.",
    solution: "Fluxos de consulta, confirmação e retorno visual claro para operação em tempo real.",
    technologies: ["QR Code", "Backend", "Segurança", "Autenticação", "Mobile"],
    mainImage: "/portfolio-assets/images/logoinovare.png",
    status: "publicado",
    featured: true,
    active: true
  },
  {
    name: "Cardapio Digital para Restaurantes",
    slug: "cardapio-digital-restaurantes",
    category: "Sites",
    shortDescription: "Layouts modernos para exibição de pratos, imagens e descrições claras, com foco em UX e responsividade.",
    fullDescription:
      "Projeto pessoal para cardápios digitais com foco em apresentação visual, leitura rápida e experiência responsiva para clientes acessando pelo celular.",
    problem: "Apresentar produtos de restaurante de forma clara, bonita e facil de navegar.",
    solution: "Layouts com cards, hierarquia visual, imagens e estrutura pronta para integrar dados dinâmicos.",
    technologies: ["React", "Next.js", "JavaScript", "UI/UX"],
    mainImage: "/portfolio-assets/images/thecheflogo.png",
    status: "publicado",
    featured: false,
    active: true
  },
  {
    name: "Sistema de Cautela de Materiais",
    slug: "sistema-cautela-materiais",
    category: "Sistemas",
    shortDescription: "Controle de retirada e devolução de equipamentos com histórico, rastreabilidade e responsáveis definidos.",
    fullDescription:
      "Sistema corporativo para registrar cautelas de materiais, acompanhar devoluções e manter histórico de uso com maior confiabilidade operacional.",
    problem: "Evitar controles soltos e falta de rastreabilidade sobre materiais retirados.",
    solution: "Fluxos de registro, consulta, responsáveis e histórico para auditoria interna.",
    technologies: ["Controle de ativos", "Auditoria", "Processos", "Frontend"],
    mainImage: "/portfolio-assets/images/tectoy.logo-Photoroom.png",
    status: "publicado",
    featured: false,
    active: true
  }
];

const services = [
  ["Interfaces web", "Sites, landing pages e telas modernas com HTML, CSS, JavaScript, React, Next.js e foco em experiência do usuário.", "Monitor", 1],
  ["Apps React Native", "Aplicações mobile com Expo Router, autenticação, leitura de dados, fluxos corporativos e UX responsiva.", "Smartphone", 2],
  ["Sistemas corporativos", "Checklists, autenticação, controle de processos, consultas por matrícula e interfaces para operação real.", "Workflow", 3],
  ["APIs e Firebase", "Integrações com REST APIs, Firebase Auth, Firestore, Functions, controle de sessão e regras de segurança.", "PlugZap", 4],
  ["UI/UX e responsividade", "Layouts modernos, microinterações, organização visual e experiência fluida para desktop e mobile.", "Blocks", 5],
  ["Evolução frontend", "Melhorias em interfaces existentes, refino visual, correções, performance e componentização.", "LifeBuoy", 6]
].map(([title, description, icon, order]) => ({ title, description, icon, order, active: true }));

async function seed() {
  await connectDB();

  await Promise.all([
    Project.deleteMany({}),
    Service.deleteMany({}),
    Settings.deleteMany({}),
    User.deleteMany({})
  ]);

  await Project.insertMany(projects);
  await Service.insertMany(services);
  await Settings.create({});
  await User.create({
    name: "Renato Vieira",
    email: process.env.ADMIN_EMAIL || "renato.vieira@renato.com",
    password: process.env.ADMIN_PASSWORD || "Transire2022"
  });

  console.log("Seed concluído. Altere a senha admin em produção.");
  await mongoose.disconnect();
}

seed().catch(async (error) => {
  console.error(error);
  await mongoose.disconnect();
  process.exit(1);
});
