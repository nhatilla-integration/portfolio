import { useIdioma } from '../hooks/useIdioma';

const SECOES = ['sobre', 'experiencia', 'projetos', 'skills', 'educacao', 'curriculos', 'contato'];
const IDIOMAS = [
  { codigo: 'pt', label: 'PT' },
  { codigo: 'en', label: 'EN' },
];

function Header() {
  const { idioma, setIdioma, conteudo } = useIdioma();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#1a1523]/80 border-b border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-center gap-3">
        <nav className="min-w-0 flex flex-wrap justify-center gap-x-4 gap-y-1 sm:gap-x-6">
          {SECOES.map((secao) => (
            <a
              key={secao}
              href={`#${secao}`}
              className="text-xs sm:text-sm text-neutral-400 hover:text-violet-300 transition-colors"
            >
              {conteudo.ui.nav[secao]}
            </a>
          ))}
        </nav>

        <div
          role="group"
          translate="no"
          aria-label="Idioma / Language"
          className="sm:ml-3 shrink-0 flex items-center rounded-full border border-white/15 p-0.5 text-xs"
        >
          {IDIOMAS.map(({ codigo, label }) => (
            <button
              key={codigo}
              type="button"
              onClick={() => setIdioma(codigo)}
              aria-pressed={idioma === codigo}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                idioma === codigo
                  ? 'bg-violet-400 text-[#0b0a08] font-medium'
                  : 'text-neutral-400 hover:text-violet-300'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
