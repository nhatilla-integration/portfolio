export const perfil = {
  nome: 'Nátilla Alves Teixeira',
  titulo: 'Analista de Sistemas & Dev Full Stack',
  localizacao: 'Campinas, São Paulo',
  resumo:
    'Transito entre negócio e tecnologia: ao longo da minha carreira, venho traduzindo necessidades de cliente em requisitos técnicos, entre vendas, engenharia e integração de sistemas. Hoje aplico essa mesma leitura de problema para projetar e construir, do banco de dados à interface, as soluções que antes eu apenas especificava.',
  linkedin: 'https://linkedin.com/in/nátilla-alves-teixeira-a39a98248',
  github: 'https://github.com/nhatilla-integration',
  email: 'nhatillaalvesteixeira@gmail.com',
  disponibilidade: 'Aberta a Oportunidades',
  idiomas: 'Português (nativo) · Inglês (intermediário, em evolução para fluência)',
  stackDestaque: ['React', 'Node.js', 'Java', 'Python'],
  statusRotativo: ['pronta_para_um_novo_desafio', 'aprendendo_algo_novo_agora'],
};

export const experiencias = [
  {
    cargo: 'Analista de Soluções Técnicas (Pre-Sales & Entrega)',
    empresa: 'AIoT Solution — Integradora de soluções de segurança, automação e IoT',
    local: 'Campinas, Brasil',
    periodo: 'Ago 2025 – Mar 2026',
    destaques: [
      'Traduzi necessidades de cliente levantadas em reuniões de descoberta em requisitos técnicos para soluções de integração e IoT.',
      'Avaliei tecnologias — sensores, gateways, protocolos como LoRaWAN, plataformas cloud — considerando viabilidade técnica, custo e integração com backends.',
      'Atuei como ponte técnica entre Vendas, Engenharia e cliente em POC de infraestrutura urbana autônoma, do levantamento ao pós-venda.',
      'Validei endpoints de APIs REST com Postman em integrações de sistemas IoT.',
    ],
  },
  {
    cargo: 'Consultora Técnica',
    empresa: 'Motocicletas Triumph',
    local: 'Campinas, Brasil',
    periodo: 'Abr 2023 – Nov 2024',
    destaques: [
      'Diagnóstico e resolução de problemas, traduzindo demandas técnicas de clientes para as áreas responsáveis.',
      'Levantamento e documentação estruturada de requisitos com rastreamento até a resolução.',
    ],
  },
  {
    cargo: 'Analista de Garantia e Documentação',
    empresa: 'Grupo Germânica',
    local: 'Campinas, Brasil',
    periodo: 'Jul 2020 – Set 2022',
    destaques: [
      'Análise e validação de dados de processos de garantia de veículos, garantindo qualidade e consistência das informações.',
      'Implementação de fluxos de trabalho digitais em nuvem, reduzindo erros e retrabalho nos processos internos.',
    ],
  },
];

export const projetos = [
  {
    nome: 'Vizi CRM',
    descricao:
      'Camada analítica que identifica gargalos no funil comercial em tempo real, com Kanban de leads e métricas ao vivo.',
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
      'API que simula o ciclo de emissão fiscal municipal, com arquitetura em camadas e modelagem híbrida PostgreSQL + MongoDB.',
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
      'Gestão de imóveis para aluguel: contratos, inquilinos, status automático de vencimento e histórico de manutenções.',
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
    nome: 'Vendas API',
    descricao:
      'API REST para cadastro e atualização de vendas, com autenticação e persistência em banco relacional.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL'],
    demo: null,
    github: 'https://github.com/nhatilla-integration/vendas-api',
    preview: {
      type: 'code',
      filename: 'VendaController.java',
      lines: [
        '@RestController',
        '@RequestMapping("/vendas")',
        'public class VendaController {',
        '',
        '  @PostMapping',
        '  public Venda criar(@RequestBody Venda venda) {',
        '    return service.salvar(venda);',
        '  }',
        '}',
      ],
    },
  },
];

export const formacao = [
  {
    curso: 'Análise e Desenvolvimento de Sistemas',
    instituicao: 'Universidade de São Francisco (USF)',
    local: 'Campinas',
    status: 'Em andamento',
  },
  {
    curso: 'Técnico em Gestão da Qualidade',
    instituicao: 'Notre Dame College',
    local: 'Campinas',
    status: 'Concluído',
  },
];

export const certificacoes = [
  { nome: 'Fundamentos AWS (EC2, S3, Lambda, Cloud)', instituicao: 'DIO' },
  { nome: 'Versionamento de Código com Git e GitHub', instituicao: 'DIO' },
  { nome: 'LGPD: Fundamentos da Lei Geral de Proteção de Dados', instituicao: 'Fundação Bradesco' },
  { nome: 'Scrum e Kanban - Metodologias Ágeis', instituicao: 'Senac' },
];

export const skills = {
  Linguagens: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
  'Frontend': ['React', 'Tailwind CSS', 'HTML5', 'CSS3'],
  'Backend': ['Node.js / Express', 'Spring Boot', 'APIs REST'],
  'Dados & Cloud': ['PostgreSQL', 'MongoDB', 'Supabase', 'AWS (EC2, S3, Lambda)'],
  'Ferramentas': ['Git', 'GitHub', 'Docker'],
};
