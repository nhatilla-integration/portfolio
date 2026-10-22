import ProjectCard from './ProjectCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useIdioma } from '../hooks/useIdioma';

function Projetos() {
  const { ref, className } = useScrollReveal();
  const { projetos, ui } = useIdioma().conteudo;

  return (
    <section
      id="projetos"
      ref={ref}
      className={`py-24 px-6 max-w-5xl mx-auto border-t border-white/5 ${className}`}
    >
      <h2 className="font-serif text-3xl text-neutral-50 mb-2">{ui.projetos.titulo}</h2>
      <p className="text-neutral-500 mb-10">
        {ui.projetos.subtitulo}
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projetos.map((projeto, i) => (
          <ProjectCard key={projeto.github} projeto={projeto} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Projetos;
