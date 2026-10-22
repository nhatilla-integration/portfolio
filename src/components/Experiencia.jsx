import { useScrollReveal } from '../hooks/useScrollReveal';
import { useIdioma } from '../hooks/useIdioma';

function Experiencia() {
  const { ref, className } = useScrollReveal();
  const { experiencias, ui } = useIdioma().conteudo;

  return (
    <section
      id="experiencia"
      ref={ref}
      className={`py-24 px-6 max-w-5xl mx-auto border-t border-white/5 ${className}`}
    >
      <h2 className="font-serif text-3xl text-neutral-50 mb-2">{ui.experiencia.titulo}</h2>
      <p className="text-neutral-500 mb-10">
        {ui.experiencia.subtitulo}
      </p>

      <div className="flex flex-col gap-10">
        {experiencias.map((exp) => (
          <div key={exp.periodo} className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-8">
            <p className="text-violet-400 text-sm">{exp.periodo}</p>

            <div>
              <h3 className="font-serif text-xl text-neutral-50">{exp.cargo}</h3>
              <p className="text-neutral-400 text-sm mb-3">
                {exp.empresa} · {exp.local}
              </p>
              <ul className="flex flex-col gap-1.5">
                {exp.destaques.map((item) => (
                  <li key={item} className="text-neutral-400 text-sm leading-relaxed pl-4 relative">
                    <span className="absolute left-0 text-violet-400">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiencia;
