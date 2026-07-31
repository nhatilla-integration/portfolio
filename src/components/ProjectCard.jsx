import BrowserMockup from './BrowserMockup';
import CodeWindow from './CodeWindow';
import { highlightLine } from '../utils/highlightCode';
import { useScrollReveal } from '../hooks/useScrollReveal';

function ProjectCard({ projeto, index = 0 }) {
  const { preview } = projeto;
  const { ref, className, style } = useScrollReveal(index * 100);

  return (
    <div
      ref={ref}
      style={style}
      className={`border border-white/10 rounded-2xl p-6 hover:border-violet-400/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 transition-all bg-white/[0.02] ${className}`}
    >
      {preview?.type === 'video' && (
        <BrowserMockup
          url={preview.url}
          src={preview.src}
          poster={preview.poster}
          className="mb-6"
        />
      )}
      {preview?.type === 'code' && (
        <CodeWindow
          filename={preview.filename}
          lines={preview.lines.map((line) => highlightLine(line))}
          className="mb-6"
        />
      )}

      <h3 className="font-serif text-2xl text-neutral-50 mb-2">{projeto.nome}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed mb-4">{projeto.descricao}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {projeto.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs text-violet-300/90 bg-violet-400/10 border border-violet-400/20 rounded-full px-3 py-1"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm mb-2">
        {projeto.demo && (
          <a
            href={projeto.demo}
            target="_blank"
            rel="noreferrer"
            className="text-violet-300 hover:text-violet-200 transition-colors"
          >
            Ver demo →
          </a>
        )}
        <a
          href={projeto.github}
          target="_blank"
          rel="noreferrer"
          className="text-neutral-400 hover:text-neutral-200 transition-colors"
        >
          Código-fonte →
        </a>
      </div>

      {projeto.demoSenha && (
        <p className="text-xs text-neutral-500">
          Senha de acesso: <span className="text-neutral-300 font-mono">{projeto.demoSenha}</span>
        </p>
      )}
    </div>
  );
}

export default ProjectCard;
