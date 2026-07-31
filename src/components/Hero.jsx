import { perfil } from '../data/perfil';
import CodeWindow from './CodeWindow';

function Hero() {
  const stackList = perfil.stackDestaque.map((tech) => `"${tech}"`).join(', ');
  const codeLines = [
    'const dev = {',
    `  nome: "${perfil.nome}",`,
    `  cargo: "${perfil.titulo}",`,
    `  stack: [${stackList}],`,
  ];
  const rotatingLine = {
    prefix: '  status: "',
    words: perfil.statusRotativo,
    suffix: '"',
  };

  return (
    <section id="sobre" className="pt-40 pb-24 px-6 max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <p className="text-violet-400 text-sm tracking-[0.2em] uppercase mb-4">
            {perfil.localizacao}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-neutral-50 leading-tight mb-6">
            {perfil.nome}
          </h1>
          <p className="text-xl text-violet-200/90 mb-8">{perfil.titulo}</p>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl">{perfil.resumo}</p>

          <p className="text-neutral-500 text-sm mt-6">
            {perfil.disponibilidade} · {perfil.idiomas}
          </p>

          <div className="flex gap-4 mt-10">
            <a
              href="#projetos"
              className="bg-violet-400 hover:bg-violet-300 transition-colors text-[#0b0a08] font-medium rounded-full px-6 py-3 text-sm"
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className="border border-white/15 hover:border-violet-400/50 transition-colors text-neutral-200 rounded-full px-6 py-3 text-sm"
            >
              Entrar em contato
            </a>
          </div>
        </div>

        <CodeWindow
          filename="sobre.js"
          lines={codeLines}
          rotatingLine={rotatingLine}
          suffixLines={['};']}
          typing
        />
      </div>
    </section>
  );
}

export default Hero;
