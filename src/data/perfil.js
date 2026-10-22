export const perfil = {
  nome: 'Nátilla Alves Teixeira',
  titulo: 'Dev Full Stack & Analista de Sistemas',
  localizacao: 'Campinas, São Paulo',
  resumo:
    'Atuo na interseção entre negócio e tecnologia, conectando necessidades operacionais a soluções técnicas. Minha experiência envolve análise de processos, integração de sistemas e colaboração entre áreas de negócio e equipes técnicas. Hoje, amplio essa atuação por meio do desenvolvimento de projetos próprios, aplicando conhecimentos em frontend, backend, APIs e bancos de dados para construir soluções de ponta a ponta.',
  linkedin: 'https://linkedin.com/in/nátilla-alves-teixeira-a39a98248',
  github: 'https://github.com/nhatilla-integration',
  email: 'nhatillaalvesteixeira@gmail.com',
  disponibilidade: 'Aberta a Oportunidades',
  idiomas: 'Português (nativo) · Inglês (intermediário, em evolução para fluência)',
  stackDestaque: ['React', 'Node.js', 'Java'],
  statusRotativo: ['pronta_para_um_novo_desafio', 'aprendendo_algo_novo_agora'],
};

export const experiencias = [
  {
    cargo: 'Analista de Integração de Sistemas (Implementação & Entrega)',
    empresa: 'AIoT Solution — Integradora de soluções de segurança, automação e IoT',
    local: 'Campinas, Brasil',
    periodo: 'Ago 2025 – Mar 2026',
    destaques: [
      'Traduzi requisitos de negócio em arquiteturas técnicas escaláveis para projetos de infraestrutura inteligente e automação.',
      'Atuei na integração de sistemas (REST APIs, Wi-Fi, BLE) e estudei o protocolo LoRaWAN como base de conhecimento para projetos IoT.',
      'Executei Provas de Conceito (PoC) e projetos-piloto, validando viabilidade técnica e alinhamento operacional.',
      'Atuei como ponte entre vendas, engenharia e cliente, estruturando documentação técnica (diagramas de arquitetura, BOM).',
    ],
  },
  {
    cargo: 'Consultora Técnica | Sistemas & Operações',
    empresa: 'Motocicletas Triumph',
    local: 'Campinas, Brasil',
    periodo: 'Abr 2023 – Nov 2024',
    destaques: [
      'Gerenciei sistemas e fluxos operacionais utilizando ERP (NBS) e plataformas em nuvem.',
      'Atuei como ponte entre operações de negócio e sistemas técnicos, garantindo eficiência dos processos.',
      'Realizei suporte técnico a clientes via CRM, resolvendo problemas e aprimorando fluxos de atendimento.',
      'Apoiei auditorias e controle de qualidade, garantindo conformidade e rastreabilidade.',
    ],
  },
  {
    cargo: 'Analista de Garantia e Documentação | Processos & Sistemas',
    empresa: 'Grupo Germânica',
    local: 'Campinas, Brasil',
    periodo: 'Jul 2020 – Set 2022',
    destaques: [
      'Criei e mantive dashboards e relatórios para acompanhamento de performance e KPIs operacionais.',
      'Implementei fluxos de trabalho digitais e padronizei processos, melhorando organização de dados e eficiência.',
      'Prestei suporte técnico a equipes internas e clientes, resolvendo problemas de sistema e operacionais.',
    ],
  },
];

export const projetos = [
  {
    nome: 'Vizi CRM',
    descricao:
      'Criado a partir de uma dor operacional real: falta de visibilidade do funil comercial. Funil de leads em Kanban, métricas ao vivo e integração com banco de dados via Supabase Realtime.',
    stack: ['React', 'Tailwind CSS', 'Supabase'],
    demo: 'https://vizi-crm.vercel.app',
    github: 'https://github.com/nhatilla-integration/vizi-crm',
    preview: {
      type: 'video',
      url: 'vizi-crm.vercel.app',
      src: '/projetos/vizi-crm.mp4',
      poster: '/projetos/vizi-crm.jpg',
    },
  },
  {
    nome: 'Simulador de NFS-e',
    descricao:
      'Projeto de estudo criado para entender na prática a relação entre PostgreSQL e MongoDB, usando emissão fiscal municipal (NFS-e) como estudo de caso. Arquitetura em camadas (controllers/services/models), validação com Zod, modelagem híbrida SQL/NoSQL e testes automatizados com Jest. API sem interface visual — veja a documentação Swagger no link de código-fonte.',
    stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB'],
    demo: null,
    github: 'https://github.com/nhatilla-integration/nfse-simulador',
    preview: {
      type: 'video',
      url: 'nfse-simulador · docs (Swagger)',
      src: '/projetos/nfse-simulador.mp4',
      poster: '/projetos/nfse-simulador.jpg',
    },
  },
  {
    nome: 'Vizi Imóveis',
    descricao:
      'Desenvolvido para uso real da minha irmã na gestão de locações; por segurança, o login de demonstração é fictício e independente das credenciais reais dela. Status automático de contratos, histórico de reparos e sincronização em tempo real.',
    stack: ['React', 'Tailwind CSS', 'Supabase'],
    demo: 'https://gabionetta-imoveis.vercel.app',
    demoSenha: 'gabionetta2026',
    github: 'https://github.com/nhatilla-integration/vizi-imoveis',
    preview: {
      type: 'video',
      url: 'gabionetta-imoveis.vercel.app',
      src: '/projetos/vizi-imoveis.mp4',
      poster: '/projetos/vizi-imoveis.jpg',
    },
  },
  {
    nome: 'Vizi Vendas',
    descricao:
      'Ponto de venda (PDV) para pequenos comércios: vendas, estoque e caixa num só app, com papéis de gestor, funcionário e dono. Permissões reforçadas no banco via RLS, estoque derivado só de movimentações, trilha de auditoria imutável e PWA instalável para tablet.',
    stack: ['React', 'TypeScript', 'Supabase'],
    demo: 'https://pdv.vizicrm.com.br',
    github: 'https://github.com/nhatilla-integration/vizi-pdv',
    preview: {
      type: 'video',
      url: 'pdv.vizicrm.com.br',
      src: '/projetos/vizi-pdv.mp4',
      poster: '/projetos/vizi-pdv.jpg',
    },
  },
  {
    nome: 'Crédito.IA',
    descricao:
      'Agente de IA que analisa o crédito de empresas (PJ), compara as taxas com os benchmarks do Banco Central e sugere trocas de produtos para reduzir juros. Integra a API SGS do Banco Central e o Omie ERP, com análise gerada via Claude API e dashboard em estilo extrato bancário.',
    stack: ['Node.js', 'TypeScript', 'Express', 'Claude API'],
    demo: null,
    github: 'https://github.com/nhatilla-integration/credito-ia',
    preview: {
      type: 'video',
      url: 'credito-ia · dashboard',
      src: '/projetos/credito-ia.mp4',
      poster: '/projetos/credito-ia.jpg',
    },
  },
];

export const formacao = [
  {
    curso: 'Análise e Desenvolvimento de Sistemas',
    instituicao: 'Universidade de São Francisco (USF)',
    local: 'Campinas',
    status: 'Em andamento',
    emAndamento: true,
  },
  {
    curso: 'Técnico em Gestão da Qualidade',
    instituicao: 'Notre Dame College',
    local: 'Campinas',
    status: 'Concluído',
    emAndamento: false,
  },
];

export const certificacoes = [
  { nome: 'Fundamentos AWS (EC2, S3, Lambda, Cloud)', instituicao: 'DIO' },
  { nome: 'Versionamento de Código com Git e GitHub', instituicao: 'DIO' },
  { nome: 'LGPD: Fundamentos da Lei Geral de Proteção de Dados', instituicao: 'Fundação Bradesco' },
  { nome: 'Scrum e Kanban - Metodologias Ágeis', instituicao: 'Senac' },
];

export const skills = {
  Linguagens: ['Java', 'JavaScript', 'TypeScript', 'SQL'],
  'Frameworks e Backend': ['React', 'Spring Boot', 'Node.js', 'Tailwind', 'APIs REST'],
  Dados: ['PostgreSQL', 'MongoDB', 'Supabase'],
  'Ferramentas': ['Git', 'GitHub', 'Docker'],
};

export const curriculos = [
  {
    titulo: 'Desenvolvimento de Software',
    descricao:
      'Currículo para Desenvolvedora Full Stack Júnior, com destaque para tecnologias, projetos próprios, GitHub e aplicações desenvolvidas.',
    tag: 'Primeira oportunidade em desenvolvimento',
    icone: 'dev',
    arquivo: '/curriculos/curriculo-dev-fullstack.pdf',
    nomeDownload: 'Curriculo - Natilla Alves - Desenvolvedora FullStack.pdf',
  },
  {
    titulo: 'Análise de Sistemas e Integrações',
    descricao:
      'Currículo com foco em experiência profissional, requisitos, ERP, CRM, APIs, processos e interface entre negócio e tecnologia.',
    tag: 'Experiência profissional',
    icone: 'analise',
    arquivo: '/curriculos/curriculo-analista-sistemas.pdf',
    nomeDownload: 'Curriculo - Natilla Alves - Analista de Sistemas.pdf',
  },
];

export const ui = {
  tituloPagina: 'Nátilla Alves Teixeira — Dev Full Stack',
  nav: {
    sobre: 'Sobre',
    experiencia: 'Experiência',
    projetos: 'Projetos',
    skills: 'Skills',
    educacao: 'Educação',
    curriculos: 'Currículos',
    contato: 'Contato',
  },
  hero: {
    verProjetos: 'Ver projetos',
    contato: 'Entrar em contato',
    chaveNome: 'nome',
    chaveCargo: 'cargo',
  },
  experiencia: {
    titulo: 'Experiência',
    subtitulo: 'Interface entre negócio e tecnologia, ao longo da carreira.',
  },
  projetos: {
    titulo: 'Projetos',
    subtitulo: 'Onde a análise virou código: produtos construídos do zero, do design ao deploy.',
    verDemo: 'Ver demo →',
    codigoFonte: 'Código-fonte →',
    senhaAcesso: 'Senha de acesso:',
  },
  skills: {
    titulo: 'Skills',
  },
  educacao: {
    titulo: 'Educação e Certificações',
    subtitulo: 'Base formal e aprendizado contínuo sustentando a prática do dia a dia.',
    formacao: 'Formação',
    certificacoes: 'Certificações',
  },
  curriculos: {
    titulo: 'Currículos',
    subtitulo: 'Duas versões, de acordo com a vaga: escolha a que faz mais sentido para você.',
    baixar: 'Baixar PDF',
  },
};
