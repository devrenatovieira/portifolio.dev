export const profile = {
  name: "Renato Vieira",
  initials: "RV",
  role: "Desenvolvedor Frontend",
  email: "dev.renatovieira@gmail.com",
  whatsapp: "+55 92 98491-0584",
  github: "",
  linkedin: "https://www.linkedin.com/in/devrenatovieira/",
  instagram: "",
  location: "Brasil, remoto",
  cvUrl: "/portfolio-assets/docs/curriculorenato.pdf",
  formspreeEndpoint: "https://formspree.io/f/mpqqaqlb",
  whatsappBudgetUrl:
    "https://wa.me/5592984910584?text=Oi%20Renato!%20Vi%20seu%20portfolio%20e%20quero%20fazer%20um%20orcamento.",
  whatsappProjectUrl:
    "https://wa.me/5592984910584?text=Oi%20Renato!%20Vi%20seu%20portfolio%20e%20quero%20falar%20sobre%20um%20projeto.",
  headline: "Interfaces modernas e funcionais para produtos reais.",
  summary:
    "Desenvolvedor Frontend com foco em React, React Native e JavaScript, criando experiências orientadas ao usuário. Tenho mais de 2 anos de atuação em desenvolvimento e TI, com projetos corporativos, integração a APIs, Firebase e interfaces responsivas."
};

export const portfolioStats = [
  ["2+", "anos de experiência em desenvolvimento e TI"],
  ["5+", "clientes e ambientes corporativos"],
  ["100%", "foco em UX, responsividade e acabamento"],
  ["React", "principal stack para web e mobile"]
];

export const portfolioServices = [
  {
    _id: "frontend-web",
    icon: "Monitor",
    title: "Interfaces web",
    description: "Sites, landing pages e telas modernas com HTML, CSS, JavaScript, React, Next.js e foco em experiência do usuário."
  },
  {
    _id: "mobile-react-native",
    icon: "Smartphone",
    title: "Apps React Native",
    description: "Aplicações mobile com Expo Router, autenticação, leitura de dados, fluxos corporativos e UX responsiva."
  },
  {
    _id: "corporate-systems",
    icon: "Workflow",
    title: "Sistemas corporativos",
    description: "Checklists, autenticação, controle de processos, consultas por matrícula e interfaces para operação real."
  },
  {
    _id: "firebase-api",
    icon: "PlugZap",
    title: "APIs e Firebase",
    description: "Integrações com REST APIs, Firebase Auth, Firestore, Functions, controle de sessão e regras de segurança."
  },
  {
    _id: "ui-ux",
    icon: "Blocks",
    title: "UI/UX e responsividade",
    description: "Layouts modernos, microinterações, organização visual e experiência fluida para desktop e mobile."
  },
  {
    _id: "maintenance",
    icon: "LifeBuoy",
    title: "Evolução frontend",
    description: "Melhorias em interfaces existentes, refino visual, correções, performance e componentização."
  }
];

export const portfolioClients = [
  { name: "Alpha Dev", logo: "/portfolio-assets/images/alphadev.png", className: "logo-alpha" },
  { name: "Carter", logo: "/portfolio-assets/images/logocarter.png", className: "logo-carter" },
  { name: "Transire Eletrônicos", logo: "/portfolio-assets/images/logotransire.png" },
  { name: "Tectoy", logo: "/portfolio-assets/images/tectoy.logo-Photoroom.png", className: "logo-tectoy" },
  { name: "Canvi", logo: "/portfolio-assets/images/logocanvi.svg" },
  { name: "Amazonas Inovare", logo: "/portfolio-assets/images/logoinovare.png" },
  { name: "The Chef", logo: "/portfolio-assets/images/thecheflogo.png" },
  { name: "Victum", logo: "/portfolio-assets/images/victumlogo.png" },
  { name: "Eterra", logo: "/portfolio-assets/images/logoeterra.png" }
];

export const workHistory = [
  {
    company: "Carter",
    role: "Frontend / E-commerce Web",
    description:
      "Atuação em loja virtual pública com foco em design premium, performance, experiência do usuário e base preparada para backend, banco de dados e autenticação."
  },
  {
    company: "Transire Eletrônicos",
    role: "Projetos corporativos e mobile",
    description:
      "Desenvolvimento de checklists operacionais, fluxos internos e aplicações mobile com React Native, Expo Router e Firebase para ambientes corporativos."
  },
  {
    company: "Tectoy S.A.",
    role: "TI e suporte técnico",
    description:
      "Experiência em suporte técnico, manutenção de sistemas, apoio à infraestrutura e vivência com padrões e processos de operação corporativa."
  },
  {
    company: "Amazonas Inovare / Aura",
    role: "Autenticação e QR Code",
    description:
      "Interfaces e fluxos de autenticação por matrícula ou QR Code, consulta de dados e confirmação de presença para eventos e empresas."
  }
];

export const curiosities = [
  "Sou desenvolvedor Frontend, apaixonado por transformar ideias em interfaces bonitas, funcionais e intuitivas.",
  "Trabalho principalmente com React, React Native, JavaScript, HTML e CSS, sempre buscando código limpo e reutilizável.",
  "Tenho experiência criando aplicações web e mobile, incluindo telas de login, dashboards, fluxos de autenticação e layouts corporativos.",
  "Me preocupo com experiência do usuário, design responsivo e detalhes que deixam a interface mais profissional.",
  "Gosto de interfaces rápidas, animações suaves e interações que fazem sentido para quem usa.",
  "Já atuei em ambientes corporativos, o que me deu visão de padrões, organização e consistência visual em produtos reais."
];

export const portfolioProjects = [
  {
    _id: "carter-ecommerce",
    slug: "carter-loja-ecommerce-web",
    featured: true,
    category: "Sites",
    name: "Carter Loja - E-commerce Web",
    shortDescription:
      "Plataforma de e-commerce com foco em design premium, performance e experiência do usuário.",
    fullDescription:
      "E-commerce web público preparado para evoluir com backend, banco de dados e autenticação. O projeto combina vitrine, organização visual, responsividade e uma experiência de compra com aparência profissional.",
    problem: "Criar uma loja online com visual premium, boa navegação e base pronta para integrações reais.",
    solution: "Estruturei uma interface moderna com Next.js, React, Tailwind CSS, Prisma, PostgreSQL Neon e deploy na Vercel.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Prisma", "PostgreSQL", "Vercel"],
    mainImage: "/portfolio-assets/images/logocarter.png",
    projectUrl: "https://lojacarter.cartergroup.com.br/"
  },
  {
    _id: "checklist-transire",
    slug: "checklist-operacional-transire",
    featured: true,
    category: "Apps",
    name: "Checklist Operacional Transire",
    shortDescription:
      "Sistema mobile de processos internos com etapas, validações por acesso e acompanhamento de atividades.",
    fullDescription:
      "Aplicação corporativa para padronizar checklists operacionais, apoiar atividades em campo e organizar etapas de validação conforme função e acesso.",
    problem: "Reduzir processos manuais e trazer mais controle para rotinas operacionais.",
    solution: "Criei uma experiência mobile com React Native, Expo Router e Firebase, focada em navegação fluida e dados persistentes.",
    technologies: ["React Native", "Expo Router", "Firebase", "Mobile", "Processos"],
    mainImage: "/portfolio-assets/images/logotransire.png"
  },
  {
    _id: "aura-id",
    slug: "aura-id",
    featured: true,
    category: "Sistemas",
    name: "Aura ID",
    shortDescription:
      "Autenticação por QR Code com consulta de dados e confirmação de acesso em fluxos corporativos.",
    fullDescription:
      "Sistema para leitura e confirmação de dados por QR Code, substituindo processos manuais e trazendo mais velocidade para validações de acesso.",
    problem: "Tornar a validação de pessoas e acessos mais rápida, segura e rastreável.",
    solution: "Desenvolvi fluxos de consulta, confirmação e retorno visual claro para operação em tempo real.",
    technologies: ["QR Code", "Backend", "Segurança", "Autenticação", "Mobile"],
    mainImage: "/portfolio-assets/images/logoinovare.png"
  },
  {
    _id: "cardapio-digital",
    slug: "cardapio-digital-restaurantes",
    featured: false,
    category: "Sites",
    name: "Cardapio Digital para Restaurantes",
    shortDescription:
      "Layouts modernos para exibição de pratos, imagens e descrições claras, com foco em UX e responsividade.",
    fullDescription:
      "Projeto pessoal para cardápios digitais com foco em apresentação visual, leitura rápida e experiência responsiva para clientes acessando pelo celular.",
    problem: "Apresentar produtos de restaurante de forma clara, bonita e facil de navegar.",
    solution: "Criei layouts com cards, hierarquia visual, imagens e estrutura pronta para integrar dados dinâmicos.",
    technologies: ["React", "Next.js", "JavaScript", "UI/UX"],
    mainImage: "/portfolio-assets/images/thecheflogo.png"
  },
  {
    _id: "cautela-materiais",
    slug: "sistema-cautela-materiais",
    featured: false,
    category: "Sistemas",
    name: "Sistema de Cautela de Materiais",
    shortDescription:
      "Controle de retirada e devolução de equipamentos com histórico, rastreabilidade e responsáveis definidos.",
    fullDescription:
      "Sistema corporativo para registrar cautelas de materiais, acompanhar devoluções e manter histórico de uso com maior confiabilidade operacional.",
    problem: "Evitar controles soltos e falta de rastreabilidade sobre materiais retirados.",
    solution: "Organizei fluxos de registro, consulta, responsáveis e histórico para auditoria interna.",
    technologies: ["Controle de ativos", "Auditoria", "Processos", "Frontend"],
    mainImage: "/portfolio-assets/images/tectoy.logo-Photoroom.png"
  },
  {
    _id: "inovare-login",
    slug: "inovare-login-aura-login",
    featured: false,
    category: "Apps",
    name: "Inovare Login / Aura Login",
    shortDescription:
      "Autenticação por matrícula ou QR Code com confirmação de presença para eventos e empresas.",
    fullDescription:
      "Fluxo de autenticação para validar usuários por matrícula ou QR Code, com telas simples e objetivas para confirmação de presença.",
    problem: "Criar uma entrada rápida e confiável para validações de eventos e ambientes corporativos.",
    solution: "Construí telas de login e confirmação com foco em poucos passos, leitura clara e retorno imediato.",
    technologies: ["Autenticação", "QR Code", "Firebase", "React Native"],
    mainImage: "/portfolio-assets/images/amazonasinovare.logo.png"
  },
  {
    _id: "ui-animations",
    slug: "projetos-experimentais-ui-animacoes",
    featured: false,
    category: "Sites",
    name: "Projetos Experimentais de UI e Animações",
    shortDescription:
      "Estudos de UI/UX, microinterações, transições suaves e layouts premium para elevar o visual.",
    fullDescription:
      "Conjunto de estudos pessoais para evoluir composição visual, animações, interações e padrões de interface moderna.",
    problem: "Ganhar repertório visual e transformar referências em componentes reais.",
    solution: "Criei telas experimentais com microinterações, responsividade e foco em acabamento.",
    technologies: ["UI/UX", "Animações", "HTML", "CSS", "JavaScript"],
    mainImage: "/portfolio-assets/images/dev.renato.jpeg"
  },
  {
    _id: "tectoy-sa",
    slug: "tectoy-sa-ti",
    featured: false,
    category: "Sistemas",
    name: "Tectoy S.A.",
    shortDescription:
      "Experiência em TI com suporte técnico, manutenção de sistemas e apoio à infraestrutura corporativa.",
    fullDescription:
      "Vivência em ambiente corporativo, suporte técnico e contato com processos internos, sistemas e padrões de operação.",
    problem: "Apoiar usuários, sistemas e infraestrutura em ambiente de empresa.",
    solution: "Atuei com suporte, organização técnica e manutenção de rotinas internas.",
    technologies: ["Suporte", "Infraestrutura", "Processos", "TI"],
    mainImage: "/portfolio-assets/images/tectoylogo.png"
  }
];
