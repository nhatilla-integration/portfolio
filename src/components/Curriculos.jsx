import { curriculos } from '../data/perfil';
import { LuCodeXml, LuWorkflow, LuDownload } from 'react-icons/lu';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ICONS = {
  dev: LuCodeXml,
  analise: LuWorkflow,
};

function Curriculos() {
  const { ref, className } = useScrollReveal();

  return (
    <section
      id="curriculos"
      ref={ref}
      className={`py-24 px-6 max-w-5xl mx-auto border-t border-white/5 ${className}`}
    >
      <h2 className="font-serif text-3xl text-neutral-50 mb-2">Currículos</h2>
      <p className="text-neutral-500 mb-10">
        Duas versões, de acordo com a vaga: escolha a que faz mais sentido para você.
      </p>

      <div className="border border-white/10 rounded-2xl divide-y divide-white/5 bg-white/[0.02]">
        {curriculos.map((cv) => {
          const Icon = ICONS[cv.icone];
          return (
            <a
              key={cv.titulo}
              href={cv.arquivo}
              download={cv.nomeDownload}
              className="group flex items-start gap-5 p-6 hover:bg-white/[0.03] transition-colors first:rounded-t-2xl last:rounded-b-2xl"
            >
              <span className="shrink-0 w-10 h-10 rounded-xl bg-[#C9A876]/10 border border-[#C9A876]/30 flex items-center justify-center text-[#C9A876] text-lg mt-0.5">
                <Icon />
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-neutral-50 font-medium">{cv.titulo}</h3>
                <p className="text-neutral-400 text-sm mt-1.5 leading-relaxed">{cv.descricao}</p>
                <span className="inline-block mt-3 text-xs rounded-full px-3 py-1 border text-violet-300 border-violet-400/30 bg-violet-400/10">
                  {cv.tag}
                </span>
              </div>
              <span className="shrink-0 hidden sm:flex items-center gap-2 text-sm text-neutral-400 group-hover:text-violet-300 transition-colors mt-0.5">
                <LuDownload />
                Baixar PDF
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Curriculos;
