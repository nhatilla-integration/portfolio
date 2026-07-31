import { formacao, certificacoes } from '../data/perfil';
import { useScrollReveal } from '../hooks/useScrollReveal';

function BadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path
        d="M12 2l2.2 4.46 4.93.72-3.57 3.48.84 4.91L12 13.2l-4.4 2.37.84-4.91-3.57-3.48 4.93-.72L12 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8 15.5l-1 5.5 5-2.6 5 2.6-1-5.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function Educacao() {
  const { ref, className } = useScrollReveal();

  return (
    <section
      id="educacao"
      ref={ref}
      className={`py-24 px-6 max-w-5xl mx-auto border-t border-white/5 ${className}`}
    >
      <h2 className="font-serif text-3xl text-neutral-50 mb-2">Educação e Certificações</h2>
      <p className="text-neutral-500 mb-14">
        Base formal e aprendizado contínuo sustentando a prática do dia a dia.
      </p>

      <div className="mb-16">
        <h3 className="text-violet-400 text-xs uppercase tracking-[0.15em] mb-8">Formação</h3>

        <div className="relative pl-8">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10" />

          {formacao.map((item) => (
            <div key={item.curso} className="relative mb-10 last:mb-0">
              <span className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-violet-400 bg-[#1a1523]" />
              <h4 className="font-serif text-xl text-neutral-50">{item.curso}</h4>
              <p className="text-neutral-400 text-sm mt-1">
                {item.instituicao} · {item.local}
              </p>
              <span
                className={`inline-block mt-3 text-xs rounded-full px-3 py-1 border ${
                  item.status === 'Em andamento'
                    ? 'text-amber-300 border-amber-400/30 bg-amber-400/10'
                    : 'text-emerald-300 border-emerald-400/30 bg-emerald-400/10'
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-violet-400 text-xs uppercase tracking-[0.15em] mb-8">
          Certificações
        </h3>

        <div className="grid sm:grid-cols-2 gap-4">
          {certificacoes.map((cert) => (
            <div
              key={cert.nome}
              className="flex items-start gap-4 border border-[#C9A876]/35 rounded-2xl p-4 bg-white/[0.02] hover:border-[#C9A876]/70 hover:-translate-y-0.5 transition-all"
            >
              <span className="shrink-0 w-10 h-10 rounded-xl bg-[#C9A876]/10 border border-[#C9A876]/30 flex items-center justify-center text-[#C9A876]">
                <BadgeIcon />
              </span>
              <div>
                <p className="text-neutral-200 text-sm leading-snug">{cert.nome}</p>
                <p className="text-neutral-500 text-xs mt-1.5">{cert.instituicao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Educacao;
