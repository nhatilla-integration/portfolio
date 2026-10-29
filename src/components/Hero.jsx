import { useIdioma } from '../hooks/useIdioma';
import CodeWindow from './CodeWindow';

function Hero() {
  const { idioma, conteudo } = useIdioma();
  const { perfil, ui } = conteudo;
  const stackList = perfil.stackDestaque.map((tech) => `"${tech}"`).join(', ');
  const codeLines = [
    'const dev = {',
    `  ${ui.hero.chaveNome}: "${perfil.nome}",`,
    `  ${ui.hero.chaveCargo}: "${perfil.titulo}",`,
    `  stack: [${stackList}],`,
  ];
  const rotatingLine = {
    prefix: '  status: "',
    words: perfil.statusRotativo,
    suffix: '"',
  };

  return (
    <section id="sobre" className="pt-40 pb-24 px-6 max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-x-12 gap-y-10 lg:gap-y-0 items-center">
        <div className="relative lg:col-start-2 lg:row-start-1 w-56 sm:w-64 lg:w-80 mx-auto lg:ml-4 lg:-mt-10">
          <div className="absolute -inset-3 rounded-[2rem] bg-violet-500/20 blur-2xl" aria-hidden="true" />
          <img
            src="/foto-natilla.webp"
            alt={perfil.nome}
            width="480"
            height="720"
            className="relative aspect-[2/3] w-full rounded-3xl object-cover border border-white/10"
          />
        </div>

        <div className="lg:col-start-1 lg:row-start-1 lg:row-span-2">
          <p className="text-violet-400 text-sm tracking-[0.2em] uppercase mb-4">
            {perfil.localizacao}
          </p>
          <h1 translate="no" className="font-serif text-5xl md:text-6xl text-neutral-50 leading-tight mb-6">
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
              {ui.hero.verProjetos}
            </a>
            <a
              href="#contato"
              className="border border-white/15 hover:border-violet-400/50 transition-colors text-neutral-200 rounded-full px-6 py-3 text-sm"
            >
              {ui.hero.contato}
            </a>
          </div>
        </div>

        <CodeWindow
          key={idioma}
          filename="sobre.js"
          lines={codeLines}
          rotatingLine={rotatingLine}
          suffixLines={['};']}
          typing
          className="relative z-10 lg:col-start-2 lg:row-start-2 lg:mt-8"
        />
      </div>
    </section>
  );
}

export default Hero;
