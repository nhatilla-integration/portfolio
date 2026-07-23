import { perfil } from '../data/perfil';

const CONTATOS = [
  { label: 'LinkedIn', href: (p) => p.linkedin },
  { label: 'GitHub', href: (p) => p.github },
  { label: 'Email', href: (p) => `mailto:${p.email}` },
];

function Contato() {
  return (
    <section id="contato" className="py-24 px-6 max-w-5xl mx-auto border-t border-white/5">
      <div className="flex flex-wrap gap-4">
        {CONTATOS.map(({ label, href }) => (
          <a
            key={label}
            href={href(perfil)}
            target="_blank"
            rel="noreferrer"
            className="border border-white/15 hover:border-violet-400/50 hover:text-violet-300 transition-colors text-neutral-200 rounded-full px-6 py-3 text-sm"
          >
            {label}
          </a>
        ))}
      </div>

      <p className="text-neutral-600 text-xs mt-20">
        © {new Date().getFullYear()} Nátilla Alves Teixeira
      </p>
    </section>
  );
}

export default Contato;
