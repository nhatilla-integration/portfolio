// Versão em inglês do conteúdo. Links, previews e stacks vêm de perfil.js;
// aqui ficam só os textos traduzidos, na mesma ordem dos itens em português.
import * as pt from './perfil';

export const perfil = {
  ...pt.perfil,
  titulo: 'Full Stack Developer & Systems Analyst',
  localizacao: 'Campinas, São Paulo · Brazil',
  resumo:
    'I work at the intersection of business and technology, connecting operational needs to technical solutions. My experience includes process analysis, systems integration and collaboration between business areas and technical teams. Today I extend that work by building my own projects, applying frontend, backend, API and database skills to deliver end-to-end solutions.',
  disponibilidade: 'Open to Opportunities',
  idiomas: 'Portuguese (native) · English (intermediate, working toward fluency)',
  statusRotativo: ['ready_for_a_new_challenge', 'learning_something_new_right_now'],
};

const experienciasEn = [
  {
    cargo: 'Systems Integration Analyst (Implementation & Delivery)',
    empresa: 'AIoT Solution — Security, automation and IoT solutions integrator',
    periodo: 'Aug 2025 – Mar 2026',
    destaques: [
      'Translated business requirements into scalable technical architectures for smart infrastructure and automation projects.',
      'Worked on systems integration (REST APIs, Wi-Fi, BLE) and studied the LoRaWAN protocol as a knowledge base for IoT projects.',
      'Ran Proofs of Concept (PoC) and pilot projects, validating technical feasibility and operational fit.',
      'Acted as a bridge between sales, engineering and clients, producing technical documentation (architecture diagrams, BOM).',
    ],
  },
  {
    cargo: 'Technical Consultant | Systems & Operations',
    empresa: 'Triumph Motorcycles',
    periodo: 'Apr 2023 – Nov 2024',
    destaques: [
      'Managed systems and operational workflows using an ERP (NBS) and cloud platforms.',
      'Bridged business operations and technical systems, ensuring process efficiency.',
      'Provided technical support to customers via CRM, solving issues and improving service workflows.',
      'Supported audits and quality control, ensuring compliance and traceability.',
    ],
  },
  {
    cargo: 'Warranty & Documentation Analyst | Processes & Systems',
    empresa: 'Grupo Germânica',
    periodo: 'Jul 2020 – Sep 2022',
    destaques: [
      'Built and maintained dashboards and reports to track performance and operational KPIs.',
      'Implemented digital workflows and standardized processes, improving data organization and efficiency.',
      'Provided technical support to internal teams and customers, solving system and operational issues.',
    ],
  },
];

export const experiencias = pt.experiencias.map((exp, i) => ({
  ...exp,
  ...experienciasEn[i],
  local: 'Campinas, Brazil',
}));

const projetosEn = [
  {
    descricao:
      'Born from a real operational pain point: lack of visibility into the sales pipeline. Kanban lead pipeline, live metrics and database integration via Supabase Realtime.',
  },
  {
    nome: 'NFS-e Simulator',
    descricao:
      'Study project built to understand, hands-on, how PostgreSQL and MongoDB work together, using Brazilian municipal service invoicing (NFS-e) as a case study. Layered architecture (controllers/services/models), validation with Zod, hybrid SQL/NoSQL modeling and automated tests with Jest. Backend-only API — see the Swagger docs through the source code link.',
  },
  {
    descricao:
      'Built for real use by my sister to manage her rental properties; for security, the demo login is fictitious and separate from her real credentials. Automatic contract status, repair history and real-time sync.',
  },
  {
    descricao:
      'Point of sale (POS) for small businesses: sales, inventory and cash register in a single app, with manager, employee and owner roles. Permissions enforced in the database via RLS, inventory derived only from stock movements, immutable audit trail and an installable PWA for tablets.',
  },
  {
    descricao:
      'AI agent that analyzes the credit structure of companies, compares the rates they pay with Brazilian Central Bank benchmarks and suggests product swaps to reduce interest costs. Integrates the Central Bank SGS API and the Omie ERP, with analysis generated through the Claude API and a bank-statement-style dashboard.',
  },
];

export const projetos = pt.projetos.map((projeto, i) => ({ ...projeto, ...projetosEn[i] }));

const formacaoEn = [
  { curso: 'Systems Analysis and Development', status: 'In progress' },
  { curso: 'Quality Management Technician', status: 'Completed' },
];

export const formacao = pt.formacao.map((item, i) => ({ ...item, ...formacaoEn[i] }));

const certificacoesEn = [
  'AWS Fundamentals (EC2, S3, Lambda, Cloud)',
  'Code Versioning with Git and GitHub',
  "LGPD: Fundamentals of Brazil's General Data Protection Law",
  'Scrum and Kanban - Agile Methodologies',
];

export const certificacoes = pt.certificacoes.map((cert, i) => ({
  ...cert,
  nome: certificacoesEn[i],
}));

export const skills = {
  Languages: ['Java', 'JavaScript', 'TypeScript', 'SQL'],
  'Frameworks & Backend': ['React', 'Spring Boot', 'Node.js', 'Tailwind', 'REST APIs'],
  Data: ['PostgreSQL', 'MongoDB', 'Supabase'],
  Tools: ['Git', 'GitHub', 'Docker'],
};

const curriculosEn = [
  {
    titulo: 'Full Stack Developer | Systems Analyst',
    descricao:
      'Complete résumé: professional experience in systems integration, ERP and CRM, personal development projects, technologies and education.',
    tag: 'Development and Systems Analysis',
  },
];

export const curriculos = pt.curriculos.map((cv, i) => ({ ...cv, ...curriculosEn[i] }));

export const ui = {
  tituloPagina: 'Nátilla Alves Teixeira — Full Stack Developer',
  nav: {
    sobre: 'About',
    experiencia: 'Experience',
    projetos: 'Projects',
    skills: 'Skills',
    educacao: 'Education',
    curriculos: 'Résumé',
    contato: 'Contact',
  },
  hero: {
    verProjetos: 'View projects',
    contato: 'Get in touch',
    chaveNome: 'name',
    chaveCargo: 'role',
  },
  experiencia: {
    titulo: 'Experience',
    subtitulo: 'Bridging business and technology throughout my career.',
  },
  projetos: {
    titulo: 'Projects',
    subtitulo: 'Where analysis became code: products built from scratch, from design to deploy.',
    verDemo: 'Live demo →',
    codigoFonte: 'Source code →',
    senhaAcesso: 'Demo password:',
  },
  skills: {
    titulo: 'Skills',
  },
  educacao: {
    titulo: 'Education & Certifications',
    subtitulo: 'A formal foundation and continuous learning behind my everyday practice.',
    formacao: 'Education',
    certificacoes: 'Certifications',
  },
  curriculos: {
    titulo: 'Résumé',
    subtitulo: 'My full background on a single page. The résumé is written in Portuguese.',
    baixar: 'Download PDF',
  },
};
